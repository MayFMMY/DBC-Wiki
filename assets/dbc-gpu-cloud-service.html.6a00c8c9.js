import{e as n}from"./app.1d293cd3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/DBC-Wiki/assets/1.cf3f1357.png";const e={},p=n('<h1 id="dbc-gpu-cloud-service-english-description" tabindex="-1"><a class="header-anchor" href="#dbc-gpu-cloud-service-english-description" aria-hidden="true">#</a> DBC GPU Cloud Service English description</h1><p><img src="'+a+`" alt=""></p><h2 id="preface" tabindex="-1"><a class="header-anchor" href="#preface" aria-hidden="true">#</a> Preface:</h2><ul><li>The following content is only for demonstration use cases. For specific implementation, please install the appropriate software version according to your own situation, and pay attention to the relevant middleware vulnerability information in time to upgrade or repair to prevent malicious attacks.</li></ul><h2 id="_1-database-deployment" tabindex="-1"><a class="header-anchor" href="#_1-database-deployment" aria-hidden="true">#</a> 1. Database deployment</h2><h3 id="install-setup-database" tabindex="-1"><a class="header-anchor" href="#install-setup-database" aria-hidden="true">#</a> Install &amp; setup database</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1. Download:</span>

  <span class="token function">curl</span> -O <span class="token operator">&lt;</span>https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz<span class="token operator">&gt;</span>
<span class="token comment">#2. Unzip:</span>

  <span class="token function">tar</span> -zxvf mongodb-linux-x86_64-3.0.6.tgz
<span class="token comment">#3. Copy the decompressed package to the specified directory:</span>

<span class="token function">mkdir</span> /data
<span class="token function">mkdir</span> /data/mongodb
mongodb-linux-x86_64-3.0.6/ /data/mongodb
<span class="token comment">#4. Set environment variables:</span>

<span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=/data/mongodb/bin:<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment">#5. Create the database directory:</span>

  <span class="token function">mkdir</span> -p /data/db <span class="token function">mkdir</span> -p /data/db/master
<span class="token comment">#6. Create: /etc/mongod.conf Add authorization (so the database requires a password to log in)</span>

storage:
  dbPath: /data/db/master
  journal:
enabled: <span class="token boolean">true</span>

net:
  port: <span class="token number">27017</span>
  bindIp: <span class="token number">0.0</span>.0.0

security:
  authorization: enabled
<span class="token comment">#7. Create admin and identifier databases and set passwords</span>

 <span class="token number">1</span><span class="token punctuation">)</span> mongod --dbpath /data/db/master, <span class="token keyword">then</span> mongo
 <span class="token number">2</span><span class="token punctuation">)</span> use admin
 <span class="token number">3</span><span class="token punctuation">)</span>db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user: <span class="token string">&quot;admin&quot;</span>, pwd: <span class="token string">&quot;*****&quot;</span>, roles: <span class="token punctuation">[</span><span class="token punctuation">{</span> role: <span class="token string">&quot;root&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">4</span><span class="token punctuation">)</span> db.shutdownServer<span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">screen</span> -S mongod
 <span class="token number">6</span><span class="token punctuation">)</span> mongod --config /etc/mongod.conf <span class="token punctuation">(</span>the mongod.conf <span class="token function">file</span> needs to be configured <span class="token keyword">in</span> advance<span class="token punctuation">)</span> If you want to configure automatic database backup of <span class="token number">2</span> different servers,
    Then use the command: mongod --master --slave --autoresync --config /etc/mongod.conf --source ip:27017
 <span class="token number">7</span><span class="token punctuation">)</span> mongo, <span class="token keyword">then</span> use admin, <span class="token keyword">then</span> db.auth<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span>,<span class="token string">&#39;******&#39;</span><span class="token punctuation">)</span>,
 <span class="token number">8</span><span class="token punctuation">)</span> use identifier
 <span class="token number">9</span><span class="token punctuation">)</span>db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;dbc&quot;</span>, pwd: <span class="token string">&quot;*******&quot;</span>, roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;dbOwner&quot;</span>, db: <span class="token string">&quot;identifier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">#Set the markup rule, the percentage is followed by a number, 1 is 1%, and the example is 40%</span>
      db.DBCPercentage.insert<span class="token punctuation">(</span><span class="token punctuation">{</span> _id: <span class="token string">&#39;percentage&#39;</span>,percentage: <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>     
 <span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">#to see if the setting takes effect</span>
      db.DBCPercentage.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.toArray<span class="token punctuation">(</span><span class="token punctuation">)</span>        
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="_2-java-deployment" tabindex="-1"><a class="header-anchor" href="#_2-java-deployment" aria-hidden="true">#</a> 2.Java deployment</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Clone link address via git: https://github.com/DeepBrainChain/DBCGPUCloudService.git</span>
<span class="token comment">#1. Modify the domain name of the dbc computing network client in the configuration file</span>
  DBCGPUCloudService/src/main/resources
  application-dev.properties application-dev.properties application-dev.properties 
  The clientUrl modification is replaced by the dbc client domain name deployed by yourself
<span class="token comment">#2. Modify the domain name of the client to access the DBC wallet on the wss chain</span>

Modify chainUrl <span class="token operator">=</span> wss://infotest.dbcwallet.io:7777 to chainUrl <span class="token operator">=</span> wss://info.dbcwallet.io
It can also be modified to the DBC wallet client address deployed by yourself. 
info.dbcwallet.io is a public address, and <span class="token number">100</span>% stability is not guaranteed.
<span class="token comment">#3. Modify database address information</span>

spring.data.mongodb.uri<span class="token operator">=</span>mongodb://usr:passwd@localhost:27017/database_name
usr and <span class="token function">passwd</span> must be the same as the username and password of database_name <span class="token keyword">in</span> mongo
<span class="token comment">#4. Compile the packager</span>

   Enter the maven repository folder of the ubuntu server: <span class="token builtin class-name">cd</span> ~/.m2/repository
   Download the dependency package: https://github.com/DeepBrainChain/dbc_java_service_sdk/releases/download/1.0/Repository.rar
   Unzip: <span class="token function">rar</span> x Repository.rar
   Copy: <span class="token function">cp</span> -r  ~/.m2/repository/Repository/*  ~/.m2/repository/
   To package the development version, execute the command: mvn package -P dev
   To package the <span class="token builtin class-name">test</span> version, execute the command: mvn package -P <span class="token builtin class-name">test</span>
   To package the official version, execute the command: mvn package -P prod
<span class="token comment">#5. Create a folder on the server</span>

   <span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">mkdir</span> /data
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token builtin class-name">cd</span> /data <span class="token operator">&amp;</span> <span class="token function">mkdir</span> bin
   <span class="token number">3</span><span class="token punctuation">)</span> <span class="token builtin class-name">cd</span> /data <span class="token operator">&amp;</span> <span class="token function">mkdir</span> lib
<span class="token comment">#6. Upload the jar file to the server</span>

   Upload the <span class="token builtin class-name">local</span> DBCWebService<span class="token punctuation">\\</span>target<span class="token punctuation">\\</span>DBCGPUCloudService-0.0.1-SNAPSHOT.jar <span class="token function">file</span> to the server lib folder
<span class="token comment">#7. Server start.sh script modification:</span>

Download address: <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/start.sh<span class="token operator">&gt;</span>
<span class="token assign-left variable">appName</span><span class="token operator">=</span><span class="token string">&quot;DBCGPUCloudService-0.0.1-SNAPSHOT.jar&quot;</span> , the name of the previously compiled jar package
<span class="token assign-left variable">serverPort</span><span class="token operator">=</span><span class="token number">8081</span>, you can customize the startup port, the port setting here should be consistent with the port number <span class="token keyword">in</span> the nginx configuration
<span class="token assign-left variable">profiles</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span> , can be <span class="token builtin class-name">set</span> to: dev<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>prod
<span class="token comment">#8. Server stop.sh script modification:</span>

 Download address: <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/stop.sh<span class="token operator">&gt;</span>
 <span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span><span class="token string">&quot;DBCGPUCloudService-0.0.1-SNAPSHOT.jar&quot;</span>, the name of the previously compiled jar package
 <span class="token assign-left variable">SERVER_PORT</span><span class="token operator">=</span><span class="token number">8081</span> is the same as the port number <span class="token keyword">in</span> the start.sh script
<span class="token comment">#9. Deploy the startup server program</span>

 <span class="token number">1</span><span class="token punctuation">)</span> Upload start.sh and stop.sh to the bin folder
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token function">bash</span> start.sh to start the program
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="_3-build-dbc-client" tabindex="-1"><a class="header-anchor" href="#_3-build-dbc-client" aria-hidden="true">#</a> 3.Build DBC client</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Install DBC client</span>
Installation Environment

<span class="token function">apt-get</span> <span class="token function">install</span> libvirt-clients libvirt-daemon-system

<span class="token number">1</span>. Download the installation script: <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

Download the install_client.sh script <span class="token function">file</span> <span class="token keyword">in</span> it

<span class="token number">2</span>. Add execution permission to the install_client.sh script file: Execute on the <span class="token builtin class-name">command</span> line: <span class="token function">chmod</span> +x install_client.sh

<span class="token number">3</span>. Run the installation script: Execute on the <span class="token builtin class-name">command</span> line: ./install_client.sh <span class="token punctuation">[</span>installation directory<span class="token punctuation">]</span>

During the installation process, the user will be asked to enter <span class="token number">2</span> port numbers,for example:net_listen_port<span class="token operator">=</span><span class="token number">5001</span>\uFF0Chttp_port<span class="token operator">=</span><span class="token number">5002</span>

<span class="token comment">#Upgrade DBC client</span>
<span class="token number">1</span>. Download the upgrade script: <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

Download the update_client.sh script <span class="token function">file</span> <span class="token keyword">in</span> it

<span class="token number">2</span>. Add execution permission to the update_client.sh script file: Execute from the <span class="token builtin class-name">command</span> line: <span class="token function">chmod</span> +x update_client.sh

<span class="token number">3</span>. Run the upgrade script: Execute on the <span class="token builtin class-name">command</span> line: ./update_client.sh <span class="token punctuation">[</span>original client installation directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_4-deploy-the-web-environment" tabindex="-1"><a class="header-anchor" href="#_4-deploy-the-web-environment" aria-hidden="true">#</a> 4.Deploy the web environment</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#download code to local or server</span>
<span class="token number">1</span>. Clone the code
<span class="token comment">#Clone the code to the local or server via git clone link address https://github.com/DeepBrainChain/DBChainWebsite.git, run</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBChainWebsite.git

<span class="token comment">#Check if Node is installed, run the following command to check if Node is installed globally</span>
<span class="token function">node</span> -v //v16.13.0

<span class="token comment">#After the installation is complete, open the DBChainWebsite folder and run the following command to generate the node_modules file</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#After the execution is successful, run the following command to start the web page locally to run the cloud platform for testing.</span>
<span class="token function">npm</span> run dev

<span class="token number">2</span>. Modify the cloud platform logo pattern configuration
<span class="token comment">#Open the folder src--&gt; locales --&gt; CN.js &amp;&amp; EN.js &amp;&amp; RU.js, set the website_name field to the name of your cloud platform, run it locally to view</span>
<span class="token comment">#Modify website_name</span>

<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  \xB7\xB7\xB7
	website_name: <span class="token string">&#39;dbchain&#39;</span>, // dbchain, 1024lab, tycloud
  \xB7\xB7\xB7
<span class="token punctuation">}</span>

<span class="token number">3</span>. Configure the interface access domain name
<span class="token comment">#Open the folder src--&gt; api --&gt; index.js, configure the server interface configured by yourself, you can modify the node interface you belong to to access the domain name</span>
<span class="token comment">#Modify the file, use nodeHost</span>

const nodeHost <span class="token operator">=</span> <span class="token string">&#39;https://xxxxxx&#39;</span> //nodejs server address
const <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&quot;https://xxxxx&quot;</span><span class="token punctuation">;</span> //java server address

<span class="token number">4</span>. Modify the access chain address
<span class="token comment">#Open the folder src--&gt; utlis --&gt; dot --&gt; api.ts &amp;&amp; index.ts , configure the access chain</span>
const <span class="token function">node</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  \xB7\xB7\xB7
  dbc: <span class="token string">&#39;wss://info.dbcwallet.io&#39;</span> // Official public chain
  \xB7\xB7\xB7
<span class="token punctuation">}</span>

<span class="token number">5</span>. Generate a dist <span class="token function">file</span> to deploy the server
<span class="token comment">#Open the DBChainWebsite folder, run the following command to generate the dist folder (under the DBChainWebsite folder), put the dist folder in the specified server file, and configure nginx to specify the index.html file in the dist file to access the page</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="_5-deploy-node-service" tabindex="-1"><a class="header-anchor" href="#_5-deploy-node-service" aria-hidden="true">#</a> 5.Deploy Node service</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#clone code</span>

<span class="token comment">#Clone the code to the local or server through git clone link address https://github.com/DeepBrainChain/DBC-NodeScript.git</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBC-NodeScript.git

<span class="token comment">### deploy code</span>

<span class="token comment">#After the code is cloned, you can use the forever plugin to create a scheduled task, run the node code in the server background, and access the corresponding interface by adding the IP address to the server port number that starts router.js.</span>
Server installation <span class="token function">node</span> example: <span class="token operator">&lt;</span>https://www.cnblogs.com/niuben/p/12938501.html<span class="token operator">&gt;</span>
For example of forever deployment, please refer to: <span class="token operator">&lt;</span>https://blog.csdn.net/superjunjin/article/details/7325219<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span>

<span class="token comment">#Check if node and forever are installed successfully, execute the following commands</span>
<span class="token function">node</span> -v // v16.13.0
forever --version // v4.0.1

<span class="token comment">#After the execution is correct, enter the DBC-NodeScript folder and run the following command to generate the node_modules folder under the folder</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#After the execution is correct, open the publicResource.js file in the DBC-NodeScript folder and modify the relevant configuration information</span>
<span class="token builtin class-name">export</span> const wssChain
<span class="token builtin class-name">export</span> const baseUrl
<span class="token builtin class-name">export</span> const mongoUrl
<span class="token builtin class-name">export</span> const designatedWallet

<span class="token comment">#Enter the DBC-NodeScript\\HttpRequest folder and execute</span>
forever start -o http-out.log -e http-err.log router.js //Start the server <span class="token function">service</span> of nodejs

<span class="token comment">#At this point, router.js has been mounted to the background to run, the server service is started, and the interface can be accessed at this time</span>
nodeHost <span class="token operator">=</span> http://xxx.xxx.xxx.xxx:8090

<span class="token comment">#Enter the DBC-NodeScript\\TimedTask folder, run the js file in the folder, start the scheduled task, and update the database information in real time, for example:</span>
forever start -o ver-out.log -e ver-err.log VerificationMachine.js
<span class="token comment">#Note: All files in the TimedTask folder must be run, otherwise the database data will not match the actual data</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>The following section explains the directory:</p><h3 id="httprequest-directory" tabindex="-1"><a class="header-anchor" href="#httprequest-directory" aria-hidden="true">#</a> HttpRequest directory</h3><ul><li>For writing detailed interface content for interacting with the front end <ul><li><strong>api.js</strong><ul><li>define express routes</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
* Define routes to facilitate identification of corresponding modules
* Export the routing module, reference it in the router.js file
*/
export const Select = express.Router()

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>Create a route corresponding interface</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Select.get(&#39;/&#39;, (request, response , next) =&gt; {
    ******
    Call the database, process and return the data
    ******
})

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><strong>router.js</strong><ul><li>Define request information</li><li>set request headers</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
* Import the routing module in api.js
* Set the request header and start the server service
*/
// use router
serve.use(&#39;/api/select&#39;, Select)

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>start the server service</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>serve.listen(8090, ()=&gt;{
    console.log(&#39;Server startup completed&#39;);
})

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></li></ul><h3 id="timedtask-directory" tabindex="-1"><a class="header-anchor" href="#timedtask-directory" aria-hidden="true">#</a> TimedTask directory</h3><ul><li><strong>Used to create a js file that only interacts with the database, and regularly request data to be stored in the database, so that the data can be updated in time</strong></li></ul><h3 id="testscript-directory" tabindex="-1"><a class="header-anchor" href="#testscript-directory" aria-hidden="true">#</a> testScript directory</h3><ul><li><strong>Used to create node executable scripts for testing purposes only</strong></li></ul><h3 id="publicresource-js" tabindex="-1"><a class="header-anchor" href="#publicresource-js" aria-hidden="true">#</a> publicResource.js</h3><ul><li><strong>For public basic information configuration, pay attention to modify</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * wssChain call chain name
 */
export const wssChain = {
  dbc: &#39;wss://info.dbcwallet.io&#39;
}

/**
 * baseUrl c++ port
 */
export const baseUrl = &#39;&lt;http://ip:5002&gt;&#39; // The dbc client ip and port number in step 3

/**
 * Connect to mongo database
 */
 
// export const mongoUrl = &#39;mongodb://localhost:27017/identifier&#39; //  local access to mongo
export const mongoUrl = &#39;mongodb://usr:passwd@localhost:27017/identifier&#39; // server access mongo
/**
 * Define a wallet for renting a machine for income
 */
export const designatedWallet = &#39;5F7L9bc3q4XdhVstJjVB2o7S8RHz2YKsHUB6k3uQpErTmVWu&#39; // The dbc revenue part paid 
//by the user will enter this wallet, which needs to be replaced with your own wallet address

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="_6-deploy-nginx-service" tabindex="-1"><a class="header-anchor" href="#_6-deploy-nginx-service" aria-hidden="true">#</a> 6.Deploy Nginx service</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install Nginx</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx -y

<span class="token comment"># configure nginx</span>
<span class="token function">mkdir</span> /etc/nginx/gpucloud //Upload the ssl certificate to this folder
<span class="token function">mkdir</span> /etc/nginx/gpucloud.conf
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/gpucloud.conf

<span class="token comment">#The example is as follows, please change it according to your own environment, for reference only</span>
<span class="token comment"># If it is two hosts, please do load balancing</span>

server<span class="token punctuation">{</span>

        listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name java.xxxx.xxxx<span class="token punctuation">;</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

        proxy_pass http://ip:8031<span class="token punctuation">;</span> <span class="token comment">#java server ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
         listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name java.xxxx.xxxx<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

        proxy_pass http://ip:8031<span class="token punctuation">;</span> <span class="token comment">#java server ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
	
server<span class="token punctuation">{</span>

        listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name nodejs.xxxx.xxxx<span class="token punctuation">;</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

        proxy_pass http://ip:8090<span class="token punctuation">;</span> <span class="token comment">#nodejs server ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
         listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name nodejs.xxxx.xxxx<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

         proxy_pass http://ip:8090<span class="token punctuation">;</span> <span class="token comment">#nodejs server ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>

server<span class="token punctuation">{</span>

        listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name dbcnode.xxxx.xxxx<span class="token punctuation">;</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

        proxy_pass http://ip:5002<span class="token punctuation">;</span> <span class="token comment">#dbc client node ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>


        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
         listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name dbcnode.xxxx.xxxx<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

        proxy_pass http://ip:5002<span class="token punctuation">;</span> <span class="token comment">#dbc client node ip and port</span>
        proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                         proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
         listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name www.xxxx.xxx<span class="token punctuation">;</span> <span class="token comment">#gpu cloud website url</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

            root /data/dbc-website<span class="token punctuation">;</span>
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
           index index.html index.htm<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
	
server <span class="token punctuation">{</span>
         listen <span class="token number">443</span><span class="token punctuation">;</span>
        server_name xxxx.xxx<span class="token punctuation">;</span> <span class="token comment">#gpu cloud website url ,no include www</span>
        ssl on<span class="token punctuation">;</span>

        ssl_certificate   cert/gpucloud/example.crt<span class="token punctuation">;</span>
        ssl_certificate_key  cert/gpucloud/example.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>

            root /data/dbc-website<span class="token punctuation">;</span>
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
            index index.html index.htm<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name xxxx.xxx<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">301</span> http://www.xxxx.xxx<span class="token variable">$request_uri</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name www.xxxx.xxx<span class="token punctuation">;</span>
        rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://<span class="token variable">\${server_name}</span><span class="token variable">$1</span> permanent<span class="token punctuation">;</span>

       <span class="token punctuation">}</span>



<span class="token comment"># Check if Nginx is configured correctly</span>
<span class="token function">sudo</span> nginx -t

<span class="token comment"># start and set the boot time</span>
<span class="token function">sudo</span> nginx -s reload
<span class="token function">sudo</span> systemctl start nginx
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br></div></div>`,27);function t(l,r){return p}var i=s(e,[["render",t]]);export{i as default};
