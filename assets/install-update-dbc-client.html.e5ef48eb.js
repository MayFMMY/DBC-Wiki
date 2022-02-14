import{e}from"./app.1d293cd3.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";var t="/DBC-Wiki/assets/install_dbc_client.ed228abe.png",s="/DBC-Wiki/assets/update_dbc_client.62606348.png";const a={},i=e(`<h1 id="install-and-update-dbc-client-node" tabindex="-1"><a class="header-anchor" href="#install-and-update-dbc-client-node" aria-hidden="true">#</a> Install And Update DBC Client Node</h1><ul><li>The DBC client node acts as the identity of the trustee in the entire network, and can query the machine where the function node is correctly deployed in the current network. When the function node is deployed, you can request the client node through http to check whether your function node is successfully connected to the client node. When the machine ID of your function node can be successfully seen through the client request, it means that you have successfully deployed the function node.</li><li>Suggestion: Since the official client nodes cannot remain stable online forever, it is recommended that each mining pool set up two client nodes as a backup, and at the same time, it can also strengthen the DBC network.</li><li>Tip: The client node has very low requirements for hardware equipment. Any public network server that can run normally can be built(container mode can also be used), and the memory is very small, as long as it can be accessed through the public network.</li></ul><h2 id="\u4E00-install-dbc-client" tabindex="-1"><a class="header-anchor" href="#\u4E00-install-dbc-client" aria-hidden="true">#</a> (\u4E00) Install DBC Client</h2><hr><p><strong>install environment</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span>  <span class="token function">install</span> libvirt-clients libvirt-daemon-system <span class="token function">expect</span> -y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>1. download install script\uFF1A</strong></p><p>http://116.169.53.132:9000/dbc/install_update_script/mainnet/install_client.sh</p><p><strong>2. add executable permission\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x install_client.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>3. run the script:</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./install_client.sh <span class="token punctuation">[</span>install_dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>During the installation process, you need to input two listen port: <img src="`+t+`" width="500" height="260" align="center"></p><p><strong>4. update conf/core.conf\uFF0C add image manage center address</strong></p><p><code>image_server=&lt;ip&gt;,&lt;ssh_port&gt;,&lt;username&gt;,&lt;passwd&gt;,&lt;images_dir&gt;,&lt;custom_server_id&gt;</code></p><p>Example\uFF1A image_server=127.0.0.1,22,test,123456,/data/images,ID_1</p><br><h2 id="\u4E8C-update-dbc-client" tabindex="-1"><a class="header-anchor" href="#\u4E8C-update-dbc-client" aria-hidden="true">#</a> (\u4E8C) Update DBC Client</h2><hr><p><strong>1. download update client script\uFF1A</strong> http://116.169.53.132:9000/dbc/install_update_script/mainnet/update_client.sh</p><p><strong>2. add executable permission\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x update_client.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>3. run the script:</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./update_client.sh <span class="token punctuation">[</span>install_dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><img src="`+s+'" width="500" height="260" align="center">',25);function l(c,r){return i}var p=n(a,[["render",l]]);export{p as default};
