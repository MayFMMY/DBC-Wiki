# 安装DBC算力节点

## (一) 安装前准备(基于已配置好固定公网ip地址），部署KVM安装环境
:::tip 注意！
系统采用ubuntu18.04 LTS或者20.04LTS,，并在开始前请卸载掉已经安装的显卡驱动，本操作不可带有显卡驱动
:::

```shell
sudo echo "140.82.114.4 gitub.com"   >> /etc/hosts
sudo echo "199.232.5.194 github.global.ssl.fastly.net"   >> /etc/hosts
sudo echo "nameserver 8.8.4.4" | sudo tee /etc/resolv.conf > /dev/null
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get  install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager ovmf cpu-checker vim expect -y
```

## (二) 创建和挂载XFS文件系统

**1、查看硬盘分区情况**

`lsblk`

**2、创建数据盘文件夹并且格式化硬盘、挂载硬盘(数据盘挂载目录务必为/data)**

```shell
sudo mkdir /data
sudo apt-get install xfsprogs -y
sudo mkfs.xfs -n ftype=1 -f /dev/sdb  （此处是否为sdb需要根据lsblk查看情况而定）
sudo mount  -o pquota /dev/sdb /data
sudo chmod 777 /data
sudo echo "/dev/sdb /data     xfs pquota 0 1" >> /etc/fstab
sudo mount -a
```

## (三) 判断机器是否支持虚拟化

**1、开启硬件支持**

> BIOS开启VT-d（如果是AMD平台，需要开启AMD-Vi     具体操作根据主板类型浏览器搜索即可）
> VT（VT-x）及VT-d支持，AMD叫AMD-Vi。需要将相关支持设置为enable，默认开启
>
> 一般情况下路径：Processor—IIO Configuration—Intel@ VT for Directed I/O(VT-d)

**2、环境依赖，检查CPU是否支持虚拟化以及KVM是否可用**

`egrep -c '(svm|vm)' /proc/cpuinfo`

> CPU检测，如果显示为0，则不支持虚拟化

`kvm-ok`

> 检查kvm是否可用
>
> 显示INFO: /dev/kvm exists  
> KVM acceleration can be used
> 表示可以进行后续操作，如果显示与其不相符，请检查VT-d是否正确开启

**3、检查ip_forward转发是否开启**

> 查看/proc/sys/net/ipv4/ip_forward是否为1
> 如果不为1则执行:
> ```
> sudo sh -c 'echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf'
> sudo sysctl -p
> ```
> 查看lsmod | grep br_netfilter是否有输出
> 如果没有输出则执行：
> ```
> sudo sh -c 'echo "br_netfilter" > /etc/modules-load.d/br_netfilter.conf'
> ```
> 执行完后需要重启，也可以与设置完显卡直通后一起重启

**如果您是20.04系统，操作以下内容即可，无需再去操作其他关于vfio-pci步骤，如果您是ubuntu18.04系统，请按照第四步开始操作**
+ 设置黑名单，使卡不被占用
```shell
sudo vim /etc/modprobe.d/blacklist.conf  
#最后添加内容：
blacklist snd_hda_intel
blacklist amd76x_edac
blacklist vga16fb
blacklist nouveau
blacklist rivafb
blacklist nvidiafb
blacklist rivatv
```
+ 设置显卡直通

```shell
#查询显卡ID
lspci -nnv | grep NVIDIA
复制显卡id，例如10de:2231  10de:1aef，重复内容仅保留一次即可

#修改内核文件
sudo vim /etc/default/grub
#在GRUB_CMDLINE_LINUX_DEFAULT字段添加（如果是AMD平台，intel_iommu=on改为amd_iommu=on) 
quiet splash intel_iommu=on kvm.ignore_msrs=1 vfio-pci.ids=<显卡id，中间以逗号隔开>

#更新内核
sudo update-grub

#重启机器
#查询显卡占用情况
lspci -vv -s <显卡PCI接口> | grep driver
```
> 显示vfio-pci即为正常，非vfio-pci请返回查看grub文件是否写对或者***按照第六步2步骤进行手动绑定***

+ 检查ip_forward转发是否开启成功

> 检查`/proc/sys/net/bridge/bridge-nf-call-iptables`和`/proc/sys/net/bridge/bridge-nf-call-ip6tables`是否都=1

***20.04LTS系统显卡隔离步骤到此结束，请前往步骤7继续操作***


## (四) 启用系统分组

**1、配置iommu分组**

（以下内容中请根据服务器平台进行iommu替换，intel使用intel_iommu,AMD使用amd_iommu）

```shell
sudo vim /etc/default/grub

#在GRUB_CMDLINE_LINUX_DEFAULT字段添加 (quiet splash这两项如果有就不需要重复添加）
quiet splash intel_iommu=on iommu=pt rd.driver.pre=vfio-pci
#在GRUB_CMDLINE_LINUX字段添加 
intel_iommu=on iommu=pt rd.driver.pre=vfio-pci
```

**2、配置模块文件**

```shell
sudo vim  /etc/modules
#添加以下内容：
pci_stub
vfio
vfio_iommu_type1
vfio_pci
kvm
kvm_intel

#更新grub.cfg文件
sudo update-grub

#重启机器，检查iommu有没有正确启用（也可后续操作完一起重启检查）
dmesg | grep -i iommu
```
***显示类似于[ 3.887539] pci 0000:83:00.1: Adding to iommu group 46即表明成功启用***


## (五) 隔离GPU资源

**1、设置黑名单，使卡不被占用**

```shell
sudo vim /etc/modprobe.d/blacklist.conf  
#最后添加内容：
blacklist snd_hda_intel
blacklist amd76x_edac
blacklist vga16fb
blacklist nouveau
blacklist rivafb
blacklist nvidiafb
blacklist rivatv
```

**2、收集PCI设备信息**

```shell
lspci -nnv | grep NVIDIA
#显示类似于
17:00.0 VGA compatible controller [0300]: NVIDIA Corporation TU104 [GeForce RTX 2080] [10de:1e82] (rev a1) (prog-if 00 [VGA controller])
17:00.1 Audio device [0403]: NVIDIA Corporation TU104 HD Audio Controller [10de:10f8] (rev a1)
17:00.2 USB controller [0c03]: NVIDIA Corporation TU104 USB 3.1 Host Controller [10de:1ad8] (rev a1) (prog-if 30 [XHCI])
17:00.3 Serial bus controller [0c80]: NVIDIA Corporation TU104 USB Type-C UCSI Controller [10de:1ad9] (rev a1)
65:00.0 VGA compatible controller [0300]: NVIDIA Corporation TU104 [GeForce RTX 2080] [10de:1e82] (rev a1) (prog-if 00 [VGA controller])
65:00.1 Audio device [0403]: NVIDIA Corporation TU104 HD Audio Controller [10de:10f8] (rev a1)
65:00.2 USB controller [0c03]: NVIDIA Corporation TU104 USB 3.1 Host Controller [10de:1ad8] (rev a1) (prog-if 30 [XHCI])
65:00.3 Serial bus controller [0c80]: NVIDIA Corporation TU104 USB Type-C UCSI Controller [10de:1ad9] (rev a1)

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#记录所有的设备编码以及PCI的id(重复编码仅取一次）
#例如：
#设备编码：
10de:1e82,10de:10f8,10de:1ad8,10de:1ad9    （重复仅记录一次即可）
#PCI接口id（每台机器PCI接口不一样，请注意记录）
17:00.0
17:00.1
17:00.2
17:00.3
65:00.0
65:00.1
65:00.2
65:00.3
```

**3、设置vfio并隔离用于直通的GPU**

```shell
sudo vim /etc/modprobe.d/vfio.conf
#写入上面收集到的设备编码信息（若重复，只写一次即可）：
options vfio-pci ids=10de:1e82,10de:10f8,10de:1ad8,10de:1ad9

sudo vim /etc/modules-load.d/vfio-pci.conf
#写入以下内容
vfio-pci kvmgt vfio-iommu-type1 vfio-mdev

#重启机器
sudo reboot
```

**4、查看GPU状态(所有接口都要查询，防止出现未被vfio-pci占用)**

```shell
#请注意PCI接口内容替换！
lspci -vv -s <PCI接口> | grep driver
#例如：
lspci -vv -s 17:00.0 | grep driver
lspci -vv -s 17:00.1 | grep driver
lspci -vv -s 17:00.2 | grep driver
lspci -vv -s 17:00.3 | grep driver

#没有输出说明没有驱动.
#如果有显示Kernel driver in use: vfio-pci 说明隔离成功
#如果是显示类似于Kernel driver in user: snd_hda_intel说明设备被其他驱动占用 
```

> **如果有PCI未被vfio-pci占用，请继续往下执行，如果已经成功被vfio-pci占用，可跳过下一步**。

+ 检查ip_forward转发是否开启成功
 
> 检查`/proc/sys/net/bridge/bridge-nf-call-iptables`和`/proc/sys/net/bridge/bridge-nf-call-ip6tables`是否都=1

## (六) 如果驱动查询为Kernel driver in use: vfio-pci，无需操作以下内容，未成功绑定请继续执行

**1、解绑设备**

> 如果驱动查询显示非Kernel driver in user: vfio-pci，将设备解绑（每组id都要解绑，以下仅为示例，请根据自身查询pci接口修改）

```shell
#请注意内容的替换，下面的命令仅作演示(需解绑所有被占用的显卡pci接口)
sudo -i
sudo echo 0000:17:00.0 > /sys/bus/pci/devices/0000\:17\:00.0/driver/unbind
sudo echo 0000:83:00.0 > /sys/bus/pci/devices/0000\:83\:00.0/driver/unbind


sudo modprobe vfio
sudo modprobe vfio-pci
sudo reboot

#重新启动主机并检查GPU是否在不同的IOMMU组中隔离，以及正在使用vfio驱动程序
#执行命令检查GPU是否在不同的IOMMU组中隔离
find /sys/kernel/iommu_groups/*/devices/*
#显示分组即为正常

#重新查询PCI（注意替换），若仍未查询到vfio-pci或显示其他内容，请执行一下一步
lspci -vv -s 17:00.0 | grep driver
```

**2、手动绑定GPU**

```shell
#执行命令进行绑定(注意：echo后的内容为机器查询到的显卡id）已经被占用的PCI可不用再手动绑定
sudo -i
sudo echo 10de 1e82 > /sys/bus/pci/drivers/vfio-pci/new_id
sudo echo 10de 2206 >> /sys/bus/pci/drivers/vfio-pci/new_id
…………


#绑定完成后再次查询（每张卡的所有项都要查一下）
lspci -vv -s 17:00.0 | grep driver
#如果出现 Kernel driver in use : vfio-pci 说明绑定成功。如果仍未成功，请返回检查
```



## (七) 确认机器显卡被vfio-pci占用后，启动libvirtd服务并设置开机自启(这一步配置非常重要***如果没有正确配置将无法正确接收请求，会直接影响机器在链状态，影响出租，造成损失***）

**1、开启virt tcp监听服务：**

```shell
修改配置文件：
sudo vim /etc/libvirt/libvirtd.conf

找到下边这2行，去掉开头的#号：
#listen_tls = 0
#listen_tcp = 1

找到这一行，去掉开头#号，并且将sasl改为none：
#auth_tcp = "sasl"	======>	auth_tcp = "none"

sudo vim /etc/default/libvirtd
#对应修改为如下配置（这个是小写L）
libvirtd_opts="-l"

对于ubuntu 20.04，需要执行下边这一步：
systemctl mask libvirtd.socket libvirtd-ro.socket libvirtd-admin.socket libvirtd-tls.socket libvirtd-tcp.socket
```

**2、启动libvirtd并设置开机自启&检查服务状态**

+ sudo systemctl restart libvirtd.service
+ sudo systemctl enable libvirtd.service
+ systemctl status libvirtd

**3、测试libvirtd是否启动成功**

+ virsh connect qemu+tcp://localhost:16509/system
+ 如果没有输出错误，就说明启动成功了；


## (八) 创建dbc用户

```shell
sudo wget http://116.85.24.172:20444/static/add_dbc_user.sh
sudo chmod +x add_dbc_user.sh
sudo ./add_dbc_user.sh dbc
#dbc用户密码自行设定
```

## (九) 安装DBC功能节点程序

+ **注意**：需要切换到dbc用户安装
1. 下载dbc功能节点的安装脚本：
  http://116.169.53.132:9000/dbc/install_update_script/mainnet/install_mining.sh
2. 给安装脚本添加可执行权限：
   命令行下执行：`chmod +x ./install_mining.sh`
3. 运行安装脚本：
   命令行下执行：`./install_mining.sh [安装目录]`

(安装过程中，需要用户输入2个本地监听端口号)


## (十) 下载镜像模板（请放置于/data目录下，dbc启动虚拟机会去/data目录搜寻）

 http://116.169.53.132:9000/image
下载：ubuntu.qcow2 和 ubuntu-2004.qcow2 这两个镜像


## (十一) 备份机器id以及私钥(非常重要，如果此私钥丢失会损失50%的质押币，请注意多个地方备份)

> 备份安装目录下的dat/node.dat文件，放到安全的位置，后面如果重装系统或者重装DBC需要用原来的id和私钥，否则质押币会被扣除


## (十二) 测试创建带有显卡直通的虚拟机,用来检测前面是否正确配置
+ 测试程序下载地址：http://116.169.53.132:9000/dbc/package/check_env
+ 二进制文件，添加执行权限直接执行即可: chmod 777 chec_env ;  ./check_env
+ 出现绿色`check vm domain_test successful`即为成功，若没有出现，请排查前面各项配置是否正确。


## (十三) 检测机器的各种硬件参数指标是否正常
+ 如果第十五步检测成功，会成功创建一个虚拟机，通过ssh登陆进入这个虚拟机内部，其中：vm_local_ip是虚拟机的内网ip地址，用户名是dbc，pwd后面的是登陆密码
<img width="542" alt="1629202906(1)" src="https://user-images.githubusercontent.com/32829693/129724788-d50728cd-913b-4e91-8d0b-e53a098da091.png">

+ 然后cd到测试脚本目录，运行: 【pytest .】，
    +  cd /test/dbc_gpu_server_test/ 
    +  sudo -i (切换到root用户)
    +  pytest .
    
+ 测试共18项；
    + 10项单元测试，测试CPU，内存，硬盘，显卡，显存，cuda可用性等；
    + 7项集成测试，测试实际各种使用情况是否正常（如pytorch计算 训练 推理）, 排除潜在硬件故障；
    + 1项benchmark速度测试，测试数十种CNN网络的训练和推理，持续约十分钟；
    + 无红色error则通过，有红色F / error会显示报错对应测试项，可根据信息排查; 
    + 4卡2080ti全测试过程约10分钟，若测试时间过长如超过半小时，则机器可能存在问题可以提前中止测试（不中止则需要等测试完成后才会报error）;
    + 测试结果中short test summary info：如果全部是passed，表示测试通过，只要有一项是failed表示测试不通过，需要排查故障；
    + 结束后生成result文件夹导出性能报告;
+ 回到宿主机关闭并删除测试的虚拟机：./check_env  --localip  x.x.x.x  （x.x.x.x 为虚拟机的内网ip地址，这一步不操作，会导致dbc程序无法启动新的虚拟机，从而无法上链验证通过）
+ 执行iptable命令，开放机器网络访问权限：（这一步不操作，会导致外部无法访问虚拟机）
    + iptables -D LIBVIRT_FWI 2 -t filter
    + iptables -D LIBVIRT_FWO 2 -t filter 

## (十四) 查看机器是否正确加入到算力网络
+ 矿池搭建客户端节点
  请参考 install_update_dbc_client_cn.md
+ 1分钟后，通过客户端请求机器信息，如果能够查到机器信息，说明机器已加入到网络中
  请求机器信息，请参考：dbc_client_http_api
+ 关于客户端节点：建议每家矿池搭建2个及以上客户端节点，保证在官方提供节点或者其他矿池提供节点掉线情况下依旧可以保证网络正常，如果网络中客户端节点过少或者挂掉过多，会影响机器出租情况。客户端节点搭建可以在其他服务器启动一个容器来部署，并不会占用太多资源。
+ ***客户端节点可以与算力节点部署在同一台机器，注意每个节点的conf/core.conf配置文件中的端口号不要重复***
## (十五) 机器上链

https://github.com/DeepBrainChain/DBC-DOC/blob/master/chain_ops/bonding_machine.md#%E6%9C%BA%E5%99%A8%E4%B8%8A%E7%BA%BF%E6%AD%A5%E9%AA%A4

