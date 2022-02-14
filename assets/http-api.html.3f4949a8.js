import{e as s}from"./app.1d293cd3.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";var e="/DBC-Wiki/assets/query_machine_info.4e40c27c.png",t="/DBC-Wiki/assets/query_session_id.4a7d3922.png",p="/DBC-Wiki/assets/create_task.3ddee2d1.png",o="/DBC-Wiki/assets/query_task_info.e24f4642.png",r="/DBC-Wiki/assets/list_task.90d6f04c.png",i="/DBC-Wiki/assets/stop_task.2fdd0060.jpg",l="/DBC-Wiki/assets/start_task.ef0ff630.jpg",c="/DBC-Wiki/assets/delete_task.02556d3a.png",u="/DBC-Wiki/assets/create_snap.6b110ffa.png",n="/DBC-Wiki/assets/snap_list.826edd5e.png",d="/DBC-Wiki/assets/all_images.64dbe357.png";const b={},m=s(`<h1 id="http-client-request-api" tabindex="-1"><a class="header-anchor" href="#http-client-request-api" aria-hidden="true">#</a> HTTP client request API</h1><h4 id="the-dbc-client-ip-and-dbc-client-port-in-the-following-http-request-are-the-dbc-client-access-addresses-deployed-by-the-user" tabindex="-1"><a class="header-anchor" href="#the-dbc-client-ip-and-dbc-client-port-in-the-following-http-request-are-the-dbc-client-access-addresses-deployed-by-the-user" aria-hidden="true">#</a> ( The dbc_client_ip and dbc_client_port in the following HTTP request are the DBC client access addresses deployed by the user )</h4><hr><h2 id="gpu-node-manage" tabindex="-1"><a class="header-anchor" href="#gpu-node-manage" aria-hidden="true">#</a> GPU Node Manage</h2><h3 id="_1-querying-gpu-node-machine-configuration-information" tabindex="-1"><a class="header-anchor" href="#_1-querying-gpu-node-machine-configuration-information" aria-hidden="true">#</a> 1. Querying GPU Node Machine Configuration Information</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // node_id of GPU Node
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {

    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+e+`" width="500" height="160" align="center"></p><br><h3 id="_2-tenant-query-to-get-session-id" tabindex="-1"><a class="header-anchor" href="#_2-tenant-query-to-get-session-id" aria-hidden="true">#</a> 2. Tenant query to get session_id</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/mining_nodes/session_id</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // node_id of GPU Node
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {

    },
   //Identity authentication information, use tenant signature or multi-signature account signature (refer to the description of HTTP request format), choose one of the two
   ...
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote><p>Example (the tenant&#39;s signature is used here, and a multi-signature account signature can also be used)\uFF1A <img src="`+t+`" width="500" height="180" align="center"></p><br><h2 id="virtual-machine-manage" tabindex="-1"><a class="header-anchor" href="#virtual-machine-manage" aria-hidden="true">#</a> Virtual Machine Manage</h2><h3 id="_1-create-a-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_1-create-a-virtual-machine" aria-hidden="true">#</a> 1. Create a virtual machine</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // node_id of GPU Node
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {
        // remote login linux virtual machine, ssh port (linux)
        &quot;ssh_port&quot;: &quot;5684&quot;,
        // remote login windows virtual machine, rdp port (windows) 
        &quot;rdp_port&quot;: &quot;5685&quot;,
        // vnc connect port
        &quot;vnc_port&quot;: &quot;5904&quot;,
        // image name
        &quot;image_name&quot;: &quot;ubuntu.qcow2&quot;,
        // custom image name/ID, such as: my-ubuntu-1804
        &quot;custom_image_name&quot;: &quot;my-ubuntu-1804&quot;
        // operation system type: ubuntu\u3001win
        &quot;operation_system&quot;: &quot;ubuntu&quot;,
        // bios mode:
        //   linux: &quot;legacy&quot;
        // windows: &quot;uefi&quot;
        &quot;bios_mode&quot;: &quot;legacy&quot;,
        // multicast address: 224.0.0.0~239.0.0.0
        &quot;multicast&quot;:[&quot;230.0.0.1:5558&quot;]
        // Number of gpus (greater than or equal to 0)
        &quot;gpu_count&quot;: &quot;0&quot;,
        // Number of CPUs (greater than 0)
        &quot;cpu_cores&quot;: &quot;4&quot;,
        // Memory size (greater than 0, unit: G)
        &quot;mem_size&quot;: &quot;8&quot;,
        // Disk size (greater than 0, unit: G)
        &quot;disk_size&quot;: &quot;10&quot;,
    },

    &quot;session_id&quot;: &quot;The session_id distributed by the renter&quot;,
    &quot;session_id_sign&quot;: &quot;session_id_sign distributed by the renter&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+p+`" width="500" height="240" align="center"></p><ul><li>The length of the creation process will vary depending on the configuration, ranging from five to fifteen minutes.</li><li>You can query the <code>login method</code> of the virtual machine and the <code>current status</code> of the virtual machine by requesting <code>virtual machine details</code> (when the status value is &quot;creating&quot;, it means that the virtual machine is in the process of being created)</li></ul><br><h3 id="_2-querying-virtual-machine-details" tabindex="-1"><a class="header-anchor" href="#_2-querying-virtual-machine-details" aria-hidden="true">#</a> 2. Querying Virtual Machine Details</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/&lt;task_id value to query&gt;</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // node_id of GPU Node
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {
         
    },

    &quot;session_id&quot;: &quot;The session_id distributed by the renter&quot;,
    &quot;session_id_sign&quot;: &quot;session_id_sign distributed by the renter&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+o+`" width="500" height="240" align="center"></p><h3 id="_3-query-the-list-of-virtual-machines" tabindex="-1"><a class="header-anchor" href="#_3-query-the-list-of-virtual-machines" aria-hidden="true">#</a> 3. Query the list of virtual machines</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // node_id of GPU Node
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {
         
    },

    &quot;session_id&quot;: &quot;The session_id distributed by the renter&quot;,
    &quot;session_id_sign&quot;: &quot;session_id_sign distributed by the renter&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+r+`" width="500" height="200" align="center"></p><h3 id="_4-stop-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_4-stop-virtual-machine" aria-hidden="true">#</a> 4. Stop Virtual Machine</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/stop/&lt;task_id&gt;</p><p><code>request body</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// node_id of GPU Node</span>
        <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+i+`" width="500" height="200" align="center"></p><h3 id="_5-start-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_5-start-virtual-machine" aria-hidden="true">#</a> 5. Start Virtual Machine</h3><blockquote><p><strong>Wakes a sleeping virtual machine\uFF0C also use this api</strong></p><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/start/&lt;task_id&gt;</p><p><code>request body</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// node_id of GPU Node</span>
        <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+l+`" width="500" height="200" align="center"></p><h3 id="_5-delete-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_5-delete-virtual-machine" aria-hidden="true">#</a> 5. delete virtual machine</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/delete/&lt;task_id&gt;</p><p><code>request body</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;peer_nodes_list&quot;: [
        // node_id of GPU Node
        &quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;
    ],
    &quot;additional&quot;: {
         
    },

    &quot;session_id&quot;: &quot;The session_id distributed by the renter&quot;,
    &quot;session_id_sign&quot;: &quot;session_id_sign distributed by the renter&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><p>Example\uFF1A <img src="`+c+`" width="500" height="200" align="center"></p><h3 id="_7-restart-virtual-machine" tabindex="-1"><a class="header-anchor" href="#_7-restart-virtual-machine" aria-hidden="true">#</a> 7. Restart Virtual Machine</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/restart/&lt;task_id&gt;</p><p><code>request body</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// node_id of GPU Node</span>
        <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u53D1\u9001\u91CD\u542F\u8BF7\u6C42\u540E\uFF0C\u7BA1\u7406\u7A0B\u5E8F\u5C06\u9009\u62E9\u5B83\u8BA4\u4E3A\u6700\u597D\u7684\u5173\u95ED\u65B9\u6CD5\u3002\u8BF7\u6CE8\u610F\uFF0C\u865A\u62DF\u673A\u53EF\u80FD\u4F1A\u5FFD\u7565\u8BE5\u8BF7\u6C42\u3002\u82E5\u8981\u5F3A\u5236\u91CD\u542F\u865A\u62DF\u673A\uFF0C\u8BF7\u7ED9url\u52A0\u4E0Aforce_reboot\u53C2\u6570\uFF0C\u53C2\u6570\u7B49\u4E8Etrue\u6216\u80051\u5373\u5F3A\u5236\u91CD\u542F\uFF0C\u7B49\u4E8Efalse\u6216\u80050\u6216\u8005\u4E0D\u5E26\u53C2\u6570\u5219\u4ECD\u65E7\u4F7F\u7528\u4E0A\u9762\u4F20\u7EDF\u7684\u65B9\u5F0F\u91CD\u542F\u3002\u5F3A\u5236\u91CD\u542F\u865A\u62DF\u673A\u7684\u8BF7\u6C42url\u5982\u4E0B\uFF1A</p><p>http://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/restart/&lt;task_id&gt;?force_reboot=true</p></div><h3 id="_8-query-virtual-machine-logs" tabindex="-1"><a class="header-anchor" href="#_8-query-virtual-machine-logs" aria-hidden="true">#</a> 8. Query Virtual Machine Logs</h3><blockquote><p><code>request method</code>\uFF1APOST</p><p><code>request URL</code>\uFF1Ahttp://&lt;<strong>dbc_client_ip</strong>&gt;:&lt;<strong>dbc_client_port</strong>&gt;/api/v1/tasks/logs/&lt;task_id&gt;?flag=tail&amp;line_num=10</p><p><code>request body</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//GPU\u8282\u70B9\u7684node_id</span>
        <span class="token string">&quot;58fb618aa482c41114eb3cfdaefd3ba183172da9e25251449d045043fbd37f45&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The session_id distributed by the renter&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;session_id_sign distributed by the renter&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></blockquote><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\uFF01</p><p>\u67E5\u8BE2\u865A\u62DF\u673A\u65E5\u5FD7\u7684\u8BF7\u6C42url\u6709\u4E24\u4E2A\u53C2\u6570\uFF0Cflag\u8868\u793A\u67E5\u8BE2\u65E5\u5FD7\u7684\u65B9\u5411\uFF0C\u53C2\u6570\u7B49\u4E8Etail\u5373\u4ECE\u65E5\u5FD7\u6587\u4EF6\u7684\u5C3E\u90E8\u5F00\u59CB\u67E5\u8BE2\uFF0C\u7B49\u4E8Ehead\u5373\u4ECE\u65E5\u5FD7\u6587\u4EF6\u7684\u5934\u90E8\u5F00\u59CB\u67E5\u8BE2\u3002line_num\u8868\u793A\u8981\u67E5\u8BE2\u7684\u65E5\u5FD7\u884C\u6570\uFF0C\u5982\u679C\u8D85\u8FC7\u6587\u4EF6\u7684\u5B9E\u9645\u884C\u6570\uFF0C\u5219\u4EE5\u6587\u4EF6\u5B9E\u9645\u884C\u6570\u4E3A\u51C6\u3002\u6700\u540E\uFF0C\u6B64\u8BF7\u6C42\u6700\u591A\u8FD4\u56DE1024\u4E2A\u5B57\u8282\uFF0C\u8D85\u51FA\u8303\u56F4\u7684\u65E5\u5FD7\u4F1A\u88AB\u622A\u65AD\u3002</p></div><br><h2 id="snapshot-image-manage-\u5FEB\u7167-\u955C\u50CF\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#snapshot-image-manage-\u5FEB\u7167-\u955C\u50CF\u7BA1\u7406" aria-hidden="true">#</a> Snapshot/Image Manage \u5FEB\u7167/\u955C\u50CF\u7BA1\u7406</h2><h3 id="_1-\u521B\u5EFA\u5FEB\u7167" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u5FEB\u7167" aria-hidden="true">#</a> 1.\u521B\u5EFA\u5FEB\u7167</h3><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F\uFF01</p><p>\u521B\u5EFA\u5FEB\u7167\u662F\u8BF7\u786E\u4FDD\u865A\u62DF\u673A\u4E3A\u5173\u95ED\u72B6\u6001</p></div><ul><li><p>\u8BF7\u6C42\u65B9\u5F0F\uFF1A POST</p></li><li><p>\u8BF7\u6C42 URL\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/&lt;task_id&gt;/create
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BF7\u6C42 Body:</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU\u8282\u70B9\u7684node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;snapshot_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;snap2&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u81EA\u5B9A\u4E49\u7684\u955C\u50CF\u540D</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;finish hello world&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u7684\u955C\u50CF\u63CF\u8FF0\uFF08\u53EF\u4E0D\u5199\uFF09</span>
    <span class="token property">&quot;disks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">//\u9009\u62E9\u78C1\u76D8\u521B\u5EFA\uFF08\u53EF\u4EE5\u4E0D\u5199\uFF0C\u5982\u679C\u6CA1\u6709&quot;disks&quot;\uFF0C\u5219\u9ED8\u8BA4\u5BF9\u6240\u6709\u78C1\u76D8\u505A\u5916\u90E8\u589E\u91CF\u5FEB\u7167\uFF0C\u5FEB\u7167\u6587\u4EF6\u7531 libvirt \u81EA\u52A8\u751F\u6210\uFF09</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;disk_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vda&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u78C1\u76D8\u540D\u79F0</span>
        <span class="token property">&quot;snapshot_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;external&quot;</span> <span class="token comment">//external\u521B\u5EFA\u5916\u90E8\u5FEB\u7167</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;disk_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vdb&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u78C1\u76D8\u540D\u79F0</span>
        <span class="token property">&quot;snapshot_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no&quot;</span> <span class="token comment">//no\u4E0D\u521B\u5EFA\u5FEB\u7167(\u4E0D\u586B\u5199\u9ED8\u8BA4\u4F7F\u7528external)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684 session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684 session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>\u5B9E\u4F8B\uFF1A</li></ul><p><img src="`+u+`" alt="create_snap"></p><h3 id="_2-\u67E5\u770B\u5FEB\u7167\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u5FEB\u7167\u5217\u8868" aria-hidden="true">#</a> 2.\u67E5\u770B\u5FEB\u7167\u5217\u8868</h3><ul><li><p>\u8BF7\u6C42\u65B9\u5F0F\uFF1APOST</p></li><li><p>\u8BF7\u6C42 URL\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/&lt;task_id&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BF7\u6C42 Body:</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU\u8282\u70B9\u7684node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u5B9E\u4F8B\uFF1A</li></ul><p><img src="`+n+`" alt="snap_list"></p><h3 id="_3-\u67E5\u770B\u5FEB\u7167\u8BE6\u60C5\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u770B\u5FEB\u7167\u8BE6\u60C5\u4FE1\u606F" aria-hidden="true">#</a> 3.\u67E5\u770B\u5FEB\u7167\u8BE6\u60C5\u4FE1\u606F</h3><ul><li><p>\u8BF7\u6C42\u65B9\u5F0F\uFF1APOST</p></li><li><p>\u8BF7\u6C42 URL\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/snapshot/&lt;task_id&gt;/&lt;snap_name&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BF7\u6C42 Body:</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU\u8282\u70B9\u7684node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u5B9E\u4F8B\uFF1A</li></ul><p><img src="`+n+`" alt="snap_list"></p><h3 id="_4-\u67E5\u8BE2\u955C\u50CF\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u8BE2\u955C\u50CF\u5217\u8868" aria-hidden="true">#</a> 4.\u67E5\u8BE2\u955C\u50CF\u5217\u8868</h3><ul><li><p>\u8BF7\u6C42\u65B9\u5F0F\uFF1APOST</p></li><li><p>\u8BF7\u6C42 URl\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images\`
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BF7\u6C42 Body:</li></ul><p><strong>1. \u67E5\u8BE2\u955C\u50CF\u4E2D\u5FC3\u7684\u955C\u50CF\u5217\u8868</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>2. \u67E5\u8BE2GPU\u8282\u70B9\u7684\u955C\u50CF\u5217\u8868</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU\u8282\u70B9\u7684node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>3. \u67E5\u8BE2GPU\u8282\u70B9\u4E0A\u67D0\u4E2A\u7528\u6237\u7684\u955C\u50CF\u5217\u8868</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU\u8282\u70B9\u7684node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u5B9E\u4F8B\uFF1A</li></ul><p><img src="`+d+`" alt="all_images"></p><h3 id="_5-\u4E0A\u4F20\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_5-\u4E0A\u4F20\u955C\u50CF" aria-hidden="true">#</a> 5.\u4E0A\u4F20\u955C\u50CF</h3><ul><li><p>\u8BF7\u6C42\u65B9\u5F0F\uFF1APOST</p></li><li><p>\u8BF7\u6C42 URL\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/upload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BF7\u6C42 Body:</li></ul><p><strong>1. \u5C06GPU\u8282\u70B9\u4E0A\u7684\u67D0\u4E2A\u955C\u50CF\u4E0A\u4F20\u5230\u955C\u50CF\u4E2D\u5FC3</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU\u8282\u70B9\u7684node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span> 
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>2. \u5C06\u5BA2\u6237\u7AEF\u8282\u70B9\u4E0A\u7684\u67D0\u4E2A\u955C\u50CF\u4E0A\u4F20\u5230\u955C\u50CF\u4E2D\u5FC3</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u5B9E\u4F8B\uFF1A</li></ul><p><img src="`+n+`" alt="snap_list"></p><h3 id="_6-\u4E0B\u8F7D\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_6-\u4E0B\u8F7D\u955C\u50CF" aria-hidden="true">#</a> 6.\u4E0B\u8F7D\u955C\u50CF</h3><ul><li><p>\u8BF7\u6C42\u65B9\u5F0F\uFF1APOST</p></li><li><p>\u8BF7\u6C42 URL\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://{{dbc_client_ip}}:{{dbc_client_port}}/api/v1/images/download
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u8BF7\u6C42 Body:</li></ul><p><strong>\u4ECE\u955C\u50CF\u4E2D\u5FC3\u4E0B\u8F7D\u955C\u50CF\u5230GPU\u8282\u70B9</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;peer_nodes_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//GPU\u8282\u70B9\u7684node_id</span>
    <span class="token string">&quot;80720ffadecb07087b3a5b6f88b91b58f7c738b15405c93914ee04f607a14965&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;additional&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu.qcow2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;session_id_sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u79DF\u7528\u8005\u5206\u53D1\u7684session_id_sign&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u5B9E\u4F8B\uFF1A</li></ul><p><img src="`+n+'" alt="snap_list"></p>',93);function q(g,k){return m}var v=a(b,[["render",q]]);export{v as default};
