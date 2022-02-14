import{e as n}from"./app.1d293cd3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/DBC-Wiki/assets/1.cf3f1357.png";const e={},p=n('<h1 id="dbc-gpu-cloud-service" tabindex="-1"><a class="header-anchor" href="#dbc-gpu-cloud-service" aria-hidden="true">#</a> DBC GPU Cloud Service</h1><p><img src="'+a+`" alt=""></p><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00\uFF1A</h2><ul><li>\u4EE5\u4E0B\u5185\u5BB9\u4EC5\u4F5C\u6F14\u793A\u7528\u4F8B\uFF0C\u5177\u4F53\u5B9E\u65BD\u8BF7\u6839\u636E\u81EA\u8EAB\u60C5\u51B5\u5B89\u88C5\u9002\u5408\u7684\u8F6F\u4EF6\u7248\u672C\uFF0C\u5E76\u53CA\u65F6\u5173\u6CE8\u76F8\u5173\u4E2D\u95F4\u4EF6\u6F0F\u6D1E\u4FE1\u606F\u8FDB\u884C\u5347\u7EA7\u6216\u8005\u4FEE\u8865\uFF0C\u4EE5\u9632\u88AB\u6076\u610F\u653B\u51FB\u3002</li></ul><h2 id="\u4E00\u3001\u6570\u636E\u5E93\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6570\u636E\u5E93\u90E8\u7F72" aria-hidden="true">#</a> \u4E00\u3001\u6570\u636E\u5E93\u90E8\u7F72</h2><h3 id="\u5B89\u88C5-\u8BBE\u7F6E\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-\u8BBE\u7F6E\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5B89\u88C5&amp;\u8BBE\u7F6E\u6570\u636E\u5E93</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1. \u4E0B\u8F7D\uFF1A</span>
<span class="token function">curl</span> -O <span class="token operator">&lt;</span>https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz<span class="token operator">&gt;</span>

<span class="token comment">#2. \u89E3\u538B:</span>
<span class="token function">tar</span> -zxvf mongodb-linux-x86_64-3.0.6.tgz

<span class="token comment">#3. \u5C06\u89E3\u538B\u5305\u62F7\u8D1D\u5230\u6307\u5B9A\u76EE\u5F55:</span>

<span class="token function">mkdir</span> /data
<span class="token function">mkdir</span> /data/mongodb
mongodb-linux-x86_64-3.0.6/ /data/mongodb

<span class="token comment">#4. \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A</span>

<span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=/data/mongodb/bin:<span class="token environment constant">$PATH</span>&quot;</span>  <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment">#5. \u521B\u5EFA\u6570\u636E\u5E93\u76EE\u5F55\uFF1A</span>

<span class="token function">mkdir</span> -p /data/db  <span class="token function">mkdir</span> -p /data/db/master

<span class="token comment">#6. \u521B\u5EFA\uFF1A/etc/mongod.conf \u6DFB\u52A0\u6388\u6743\uFF08\u8FD9\u6837\u6570\u636E\u5E93\u9700\u8981\u5BC6\u7801\u624D\u80FD\u767B\u9646\uFF09</span>

storage:
  dbPath: /data/db/master
  journal:
	enabled: <span class="token boolean">true</span>

net:
  port: <span class="token number">27017</span>
  bindIp: <span class="token number">0.0</span>.0.0

security:
  authorization: enabled

<span class="token comment">#7. \u521B\u5EFAadmin\u548Cidentifier\u6570\u636E\u5E93\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u5BC6\u7801</span>

 <span class="token number">1</span><span class="token punctuation">)</span> mongod --dbpath /data/db/master,\u7136\u540E  mongo
 <span class="token number">2</span><span class="token punctuation">)</span> use admin
 <span class="token number">3</span><span class="token punctuation">)</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span> user: <span class="token string">&quot;admin&quot;</span>, pwd: <span class="token string">&quot;*****&quot;</span>, roles: <span class="token punctuation">[</span><span class="token punctuation">{</span> role: <span class="token string">&quot;root&quot;</span>, db: <span class="token string">&quot;admin&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>  \u8BBE\u7F6E\u7BA1\u7406\u5458\u8D26\u6237
 <span class="token number">4</span><span class="token punctuation">)</span> db.shutdownServer<span class="token punctuation">(</span><span class="token punctuation">)</span>  \u5173\u95EDmongo\u6570\u636E
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token function">screen</span> -S mongod  \u540E\u53F0\u8FD0\u884C\u547D\u4EE4
 <span class="token number">6</span><span class="token punctuation">)</span> mongod --config /etc/mongod.conf \uFF08\u9700\u8981\u63D0\u524D\u914D\u7F6E\u597Dmongod.conf\u6587\u4EF6\uFF09 \u6B64\u5904\u5982\u679C\u8981\u914D\u7F6E2\u4E2A\u4E0D\u540C\u670D\u52A1\u5668\u7684\u6570\u636E\u5E93\u81EA\u52A8\u5907\u4EFD\uFF0C
    \u5219\u7528\u547D\u4EE4\uFF1Amongod --master --slave --autoresync --config /etc/mongod.conf  --source ip:27017
 <span class="token number">7</span><span class="token punctuation">)</span> mongo,\u7136\u540Euse admin ,\u7136\u540E db.auth<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span>,<span class="token string">&#39;******&#39;</span><span class="token punctuation">)</span>\uFF0C
 <span class="token number">8</span><span class="token punctuation">)</span> use identifier  \u521B\u5EFAidentifier\u6570\u636E\u5E93,\u6B64\u5904\u6570\u636E\u5E93\u540D\u5B57\u548Cjava\u670D\u52A1\u5668\u4EE5\u53CAnodejs\u670D\u52A1\u5668\u4EE3\u7801\u4E2D\u540D\u5B57\u9700\u8981\u4FDD\u6301\u4E00\u81F4
 <span class="token number">9</span><span class="token punctuation">)</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;dbc&quot;</span>, pwd: <span class="token string">&quot;*******&quot;</span>, roles: <span class="token punctuation">[</span> <span class="token punctuation">{</span> role: <span class="token string">&quot;dbOwner&quot;</span>, db: <span class="token string">&quot;identifier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token number">10</span><span class="token punctuation">)</span> db.DBCPercentage.insert<span class="token punctuation">(</span><span class="token punctuation">{</span> _id: <span class="token string">&#39;percentage&#39;</span>,percentage: <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>   \u8BBE\u7F6E\u52A0\u4EF7\u89C4\u5219\uFF0Cpercentage\u540E\u8DDF\u6570\u5B57\uFF0C1\u4E3A1%\uFF0C\u793A\u4F8B\u4E3A40%
 <span class="token number">11</span><span class="token punctuation">)</span> db.DBCPercentage.find<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>.toArray<span class="token punctuation">(</span><span class="token punctuation">)</span>    \u67E5\u770B\u8BBE\u7F6E\u662F\u5426\u751F\u6548
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="\u4E8C\u3001java-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001java-\u90E8\u7F72" aria-hidden="true">#</a> \u4E8C\u3001java \u90E8\u7F72</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u901A\u8FC7git\u514B\u9686\u94FE\u63A5\u5730\u5740\uFF1Ahttps://github.com/DeepBrainChain/DBCGPUCloudService.git</span>
<span class="token comment">#1. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684dbc\u7B97\u529B\u7F51\u7EDC\u5BA2\u6237\u7AEF\u57DF\u540D</span>
\u5728DBCGPUCloudService/src/main/resources \u6587\u4EF6\u5939\u4E0B\u9762\uFF1A
application-dev.properties  application-dev.properties   application-dev.properties \u4E2DclientUrl\u4FEE\u6539\u7528\u81EA\u5DF1\u90E8\u7F72\u7684dbc\u5BA2\u6237\u7AEF\u57DF\u540D\u66FF\u4EE3

<span class="token comment">#2. \u4FEE\u6539wss\u94FE\u4E0A\u8BBF\u95EEDBC\u94B1\u5305\u5BA2\u6237\u7AEF\u57DF\u540D</span>

\u4FEE\u6539 chainUrl <span class="token operator">=</span> wss://infotest.dbcwallet.io:7777 \u4E3A chainUrl <span class="token operator">=</span> wss://info.dbcwallet.io
\u4E5F\u53EF\u4EE5\u4FEE\u6539\u4E3A\u81EA\u5DF1\u90E8\u7F72\u7684DBC\u94B1\u5305\u5BA2\u6237\u7AEF\u5730\u5740\uFF0Cinfo.dbcwallet.io\u4E3A\u516C\u5F00\u7684\u5730\u5740\uFF0C\u4E0D\u4FDD\u8BC1100%\u7A33\u5B9A

<span class="token comment">#3. \u4FEE\u6539\u6570\u636E\u5E93\u5730\u5740\u4FE1\u606F</span>

spring.data.mongodb.uri<span class="token operator">=</span>mongodb://usr:passwd@localhost:27017/database_name
usr\u548Cpasswd\u8981\u548Cmongo\u4E2Ddatabase_name\u7528\u6237\u540D\u5BC6\u7801\u4E00\u81F4

<span class="token comment">#4. \u7F16\u8BD1\u6253\u5305\u7A0B\u5E8F</span>

   \u8FDB\u5165ubuntu\u670D\u52A1\u5668\u7684maven\u4ED3\u5E93\u6587\u4EF6\u5939:cd ~/.m2/repository
   \u4E0B\u8F7D\u4F9D\u8D56\u5305:https://github.com/DeepBrainChain/dbc_java_service_sdk/releases/download/1.0/Repository.rar
   \u89E3\u538B:rar x Repository.rar
   \u62F7\u8D1D\uFF1Acp -r ~/.m2/repository/Repository/*  ~/.m2/repository/
   \u6253\u5305\u5F00\u53D1\u7248\u672C\uFF0C \u6267\u884C\u547D\u4EE4\uFF1A mvn package -P dev
   \u6253\u5305\u6D4B\u8BD5\u7248\u672C\uFF0C \u6267\u884C\u547D\u4EE4\uFF1A mvn package -P <span class="token builtin class-name">test</span>
   \u6253\u5305\u6B63\u5F0F\u7248\u672C\uFF0C \u6267\u884C\u547D\u4EE4\uFF1A mvn package -P prod

<span class="token comment">#5. \u5728\u670D\u52A1\u5668\u521B\u5EFA\u6587\u4EF6\u5939</span>

   <span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">mkdir</span> /data
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token builtin class-name">cd</span> /data <span class="token operator">&amp;</span>  <span class="token function">mkdir</span> bin
   <span class="token number">3</span><span class="token punctuation">)</span> <span class="token builtin class-name">cd</span> /data <span class="token operator">&amp;</span>  <span class="token function">mkdir</span> lib

<span class="token comment">#6. \u4E0A\u4F20jar\u6587\u4EF6\u5230\u670D\u52A1\u5668</span>

   \u4E0A\u4F20\u672C\u5730 DBCWebService<span class="token punctuation">\\</span>target<span class="token punctuation">\\</span>DBCGPUCloudService-0.0.1-SNAPSHOT.jar \u6587\u4EF6\u5230\u670D\u52A1\u5668 lib\u6587\u4EF6\u5939\u4E0B\u9762

<span class="token comment">#7. \u670D\u52A1\u5668start.sh \u811A\u672C\u4FEE\u6539\uFF1A</span>

\u4E0B\u8F7D\u5730\u5740\uFF1A<span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/start.sh<span class="token operator">&gt;</span>
<span class="token assign-left variable">appName</span><span class="token operator">=</span><span class="token string">&quot;DBCGPUCloudService-0.0.1-SNAPSHOT.jar&quot;</span> ,\u4E4B\u524D\u7F16\u8BD1\u51FA\u6765\u7684jar\u5305\u540D\u5B57
<span class="token assign-left variable">serverPort</span><span class="token operator">=</span><span class="token number">8081</span>\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u542F\u52A8\u7AEF\u53E3\uFF0C\u6B64\u5904\u7AEF\u53E3\u8BBE\u7F6E\u8981\u548Cnginx\u914D\u7F6E\u4E2D\u7684\u7AEF\u53E3\u53F7\u4FDD\u6301\u4E00\u81F4
<span class="token assign-left variable">profiles</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span>  \uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A: dev<span class="token punctuation">\\</span><span class="token punctuation">\\</span>test<span class="token punctuation">\\</span><span class="token punctuation">\\</span>prod

<span class="token comment">#8. \u670D\u52A1\u5668stop.sh \u811A\u672C\u4FEE\u6539\uFF1A</span>

 \u4E0B\u8F7D\u5730\u5740\uFF1A<span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBCGPUCloudService/releases/download/v0.0.1/stop.sh<span class="token operator">&gt;</span>
 <span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span><span class="token string">&quot;DBCGPUCloudService-0.0.1-SNAPSHOT.jar&quot;</span>,\u4E4B\u524D\u7F16\u8BD1\u51FA\u6765\u7684jar\u5305\u540D\u5B57
 <span class="token assign-left variable">SERVER_PORT</span><span class="token operator">=</span><span class="token number">8081</span> \u548Cstart.sh \u811A\u672C\u4E2D\u7684\u7AEF\u53E3\u53F7\u4FDD\u6301\u4E00\u81F4

<span class="token comment">#9. \u90E8\u7F72\u542F\u52A8\u670D\u52A1\u5668\u7A0B\u5E8F</span>

 <span class="token number">1</span><span class="token punctuation">)</span> \u5C06start.sh\u548C stop.sh\u4E0A\u4F20\u5230 bin\u6587\u4EF6\u5939\u4E2D
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token function">bash</span> start.sh  \u542F\u52A8\u7A0B\u5E8F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h2 id="\u4E09\u3001\u642D\u5EFA-dbc-\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u642D\u5EFA-dbc-\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u4E09\u3001\u642D\u5EFA DBC \u5BA2\u6237\u7AEF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u88C5DBC\u5BA2\u6237\u7AEF</span>
\u5B89\u88C5\u73AF\u5883

<span class="token function">apt-get</span> <span class="token function">install</span> libvirt-clients libvirt-daemon-system

<span class="token number">1</span>. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C\uFF1A <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

\u4E0B\u8F7D\u5176\u4E2D\u7684install_client.sh\u811A\u672C\u6587\u4EF6

<span class="token number">2</span>. \u7ED9install_client.sh\u811A\u672C\u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650\uFF1A \u547D\u4EE4\u884C\u4E0B\u6267\u884C\uFF1Achmod +x install_client.sh

<span class="token number">3</span>. \u8FD0\u884C\u5B89\u88C5\u811A\u672C: \u547D\u4EE4\u884C\u4E0B\u6267\u884C\uFF1A./install_client.sh <span class="token punctuation">[</span>\u5B89\u88C5\u76EE\u5F55<span class="token punctuation">]</span>

\u5B89\u88C5\u8FC7\u7A0B\u4E2D\u4F1A\u8981\u6C42\u7528\u6237\u8F93\u51652\u4E2A\u7AEF\u53E3\u53F7\uFF1A\u6839\u636E\u60C5\u51B5\u586B\u5199\u5373\u53EF\uFF0C\u6BD4\u5982:net_listen_port<span class="token operator">=</span><span class="token number">5001</span>\uFF0Chttp_port<span class="token operator">=</span><span class="token number">5002</span>

<span class="token comment">#\u5347\u7EA7DBC\u5BA2\u6237\u7AEF</span>
<span class="token number">1</span>. \u4E0B\u8F7D\u5347\u7EA7\u811A\u672C\uFF1A <span class="token operator">&lt;</span>https://github.com/DeepBrainChain/DBC-AIComputingNet/releases/<span class="token operator">&gt;</span>

\u4E0B\u8F7D\u5176\u4E2D\u7684update_client.sh\u811A\u672C\u6587\u4EF6

<span class="token number">2</span>. \u7ED9update_client.sh\u811A\u672C\u6587\u4EF6\u6DFB\u52A0\u6267\u884C\u6743\u9650\uFF1A \u547D\u4EE4\u884C\u4E0B\u6267\u884C\uFF1Achmod +x update_client.sh

<span class="token number">3</span>. \u8FD0\u884C\u5347\u7EA7\u811A\u672C: \u547D\u4EE4\u884C\u4E0B\u6267\u884C\uFF1A./update_client.sh <span class="token punctuation">[</span>\u539F\u5BA2\u6237\u7AEF\u5B89\u88C5\u76EE\u5F55<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u56DB\u3001\u90E8\u7F72-node-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u90E8\u7F72-node-\u670D\u52A1\u5668" aria-hidden="true">#</a> \u56DB\u3001\u90E8\u7F72 Node \u670D\u52A1\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u514B\u9686\u4EE3\u7801</span>

<span class="token comment">#\u901A\u8FC7git\u514B\u9686\u94FE\u63A5\u5730\u5740 https://github.com/DeepBrainChain/DBC-NodeScript.git\u5C06\u4EE3\u7801\u514B\u9686\u5230\u672C\u5730\u6216\u670D\u52A1\u5668</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBC-NodeScript.git

<span class="token comment">### \u90E8\u7F72\u4EE3\u7801</span>

<span class="token comment">#\u4EE3\u7801\u514B\u9686\u4EE5\u540E\uFF0C\u53EF\u4F7F\u7528 forever \u63D2\u4EF6\u521B\u5EFA\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5C06node\u4EE3\u7801\u8FD0\u884C\u5728\u670D\u52A1\u5668\u540E\u53F0\uFF0C\u901A\u8FC7ip\u52A0\u542F\u52A8router.js\u7684\u542F\u52A8server\u670D\u52A1\u7AEF\u53E3\u53F7\uFF0C\u5373\u53EF\u8BBF\u95EE\u5BF9\u5E94\u7684\u63A5\u53E3\u3002</span>
\u670D\u52A1\u5668\u5B89\u88C5node\u793A\u4F8B\uFF1A<span class="token operator">&lt;</span>https://www.cnblogs.com/niuben/p/12938501.html<span class="token operator">&gt;</span>
forever\u90E8\u7F72\u793A\u4F8B\u8BF7\u53C2\u8003\uFF1A<span class="token operator">&lt;</span>https://blog.csdn.net/superjunjin/article/details/7325219<span class="token operator"><span class="token file-descriptor important">4</span>&gt;</span>

<span class="token comment">#\u68C0\u67E5node \u548C forever \u662F\u5426\u5B89\u88C5\u6210\u529F,\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</span>
<span class="token function">node</span> -v // v16.13.0
forever --version // v4.0.1

<span class="token comment">#\u6267\u884C\u65E0\u8BEF\u540E\uFF0C\u8FDB\u5165DBC-NodeScript\u6587\u4EF6\u5939\u4E0B\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5728\u6587\u4EF6\u5939\u4E0B\u751F\u6210 node_modules \u6587\u4EF6\u5939</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#\u6267\u884C\u65E0\u8BEF\u540E\uFF0C\u5728DBC-NodeScript\u6587\u4EF6\u5939\u4E0B\uFF0C\u6253\u5F00publicResource.js\u6587\u4EF6\uFF0C\u4FEE\u6539\u76F8\u5173\u914D\u7F6E\u4FE1\u606F</span>
<span class="token builtin class-name">export</span> const wssChain
<span class="token builtin class-name">export</span> const baseUrl
<span class="token builtin class-name">export</span> const mongoUrl
<span class="token builtin class-name">export</span> const designatedWallet

<span class="token comment">#\u8FDB\u5165 DBC-NodeScript\\HttpRequest \u6587\u4EF6\u5939\u4E0B\uFF0C\u6267\u884C</span>
forever start -o http-out.log -e http-err.log router.js //\u542F\u52A8nodejs\u7684server\u670D\u52A1

<span class="token comment">#\u6B64\u65F6\u5DF2\u7ECF\u5C06router.js\u6302\u8F7D\u5230\u540E\u53F0\u8FD0\u884C\uFF0Cserver\u670D\u52A1\u542F\u52A8\uFF0C\u6B64\u65F6\u5373\u53EF\u8BBF\u95EE\u63A5\u53E3</span>
nodeHost <span class="token operator">=</span> http://xxx.xxx.xxx.xxx:8090

<span class="token comment">#\u8FDB\u5165 DBC-NodeScript\\TimedTask \u6587\u4EF6\u5939\u4E0B\uFF0C\u8FD0\u884C\u6587\u4EF6\u5939\u4E0B\u7684js\u6587\u4EF6\uFF0C\u542F\u52A8\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u5373\u53EF\u5B9E\u65F6\u66F4\u65B0\u6570\u636E\u5E93\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A</span>
forever start -o ver-out.log -e ver-err.log VerificationMachine.js
<span class="token comment">#\u6CE8\u610F\uFF1ATimedTask\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u5FC5\u987B\u5168\u90E8\u8FD0\u884C\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u6570\u636E\u5E93\u6570\u636E\u4E0E\u5B9E\u9645\u6570\u636E\u4E0D\u7B26</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u4EE5\u4E0B\u90E8\u5206\u4E3A\u76EE\u5F55\u89E3\u91CA\uFF1A</p><h3 id="httprequest-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#httprequest-\u76EE\u5F55" aria-hidden="true">#</a> HttpRequest \u76EE\u5F55</h3><ul><li><p>\u7528\u4E8E\u4E66\u5199\u4E0E\u524D\u7AEF\u4EA4\u4E92\u7684\u8BE6\u7EC6\u63A5\u53E3\u5185\u5BB9</p><ul><li><p><strong>api.js</strong></p><ul><li>\u5B9A\u4E49 express \u8DEF\u7531</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">/**
* \u5B9A\u4E49\u8DEF\u7531\uFF0C\u4FBF\u4E8E\u5206\u8FA8\u5BF9\u5E94\u6A21\u5757
* \u5BFC\u51FA\u8DEF\u7531\u6A21\u5757\uFF0C\u5728router.js\u6587\u4EF6\u4E2D\u5F15\u7528
*/</span>
export const Select = express.Router()
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u521B\u5EFA\u8DEF\u7531\u5BF9\u5E94\u63A5\u53E3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Select.get(&#39;/&#39;, (request, response ,next) =&gt; {
    ******
    \u8C03\u7528\u6570\u636E\u5E93\uFF0C\u5DF2\u7ECF\u6570\u636E\u7684\u5904\u7406\u4E0E\u8FD4\u56DE
    ******
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p><strong>router.js</strong></p><ul><li>\u5B9A\u4E49\u8BF7\u6C42\u4FE1\u606F</li><li>\u8BBE\u7F6E\u8BF7\u6C42\u5934</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
* \u5BFC\u5165api.js\u4E2D\u8DEF\u7531\u6A21\u5757
* \u8BBE\u7F6E\u8BF7\u6C42\u5934\uFF0C\u542F\u52A8server\u670D\u52A1
*/
// \u4F7F\u7528 router
serve.use(&#39;/api/select&#39;, Select)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u542F\u52A8 server \u670D\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>serve.listen(8090, ()=&gt;{
    console.log(&#39;\u670D\u52A1\u5668\u542F\u52A8\u5B8C\u6BD5&#39;);
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li></ul><h3 id="timedtask-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#timedtask-\u76EE\u5F55" aria-hidden="true">#</a> TimedTask \u76EE\u5F55</h3><ul><li><strong>\u7528\u4E8E\u521B\u5EFA\u53EA\u4E0E\u6570\u636E\u5E93\u8FDB\u884C\u4EA4\u4E92\u7684 js \u6587\u4EF6\uFF0C\u5B9A\u65F6\u8BF7\u6C42\u6570\u636E\u5B58\u5165\u6570\u636E\u5E93\u4E2D\uFF0C\u4EE5\u4FBF\u6570\u636E\u53CA\u65F6\u66F4\u65B0</strong></li></ul><h3 id="testscript-\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#testscript-\u76EE\u5F55" aria-hidden="true">#</a> testScript \u76EE\u5F55</h3><ul><li><strong>\u7528\u4E8E\u521B\u5EFA node \u53EF\u6267\u884C\u811A\u672C\uFF0C\u4EC5\u4F9B\u6D4B\u8BD5\u4F7F\u7528</strong></li></ul><h3 id="publicresource-js" tabindex="-1"><a class="header-anchor" href="#publicresource-js" aria-hidden="true">#</a> publicResource.js</h3><ul><li><strong>\u7528\u4E8E\u516C\u7528\u57FA\u7840\u4FE1\u606F\u914D\u7F6E\uFF0C\u6CE8\u610F\u4FEE\u6539</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * wssChain \u8C03\u7528\u94FE\u540D\u79F0
 */
export const wssChain = {
  dbc: &#39;wss://info.dbcwallet.io&#39; // \u516C\u94FE\u6B63\u5F0F\u94FE\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u90E8\u7F72DBC\u94B1\u5305\u5BA2\u6237\u7AEF
}

/**
 * baseUrl c++ \u7AEF\u53E3
 */


export const baseUrl = &#39;&lt;http://ip:port&gt;&#39; // \u6B65\u9AA4\u4E09\u4E2D\u7684dbc\u5BA2\u6237\u7AEFip\u548C\u7AEF\u53E3\u53F7


/**
 * \u8FDE\u63A5mongo\u6570\u636E\u5E93
 */
// export const mongoUrl = &#39;mongodb://localhost:27017/identifier&#39; // \u672C\u5730\u542F\u52A8\u65F6\u8BBF\u95EEmongo\uFF0C\u670D\u52A1\u5668\u65E0\u6548
export const mongoUrl = &#39;mongodb://usr:passwd@localhost:27017/identifier&#39; // \u670D\u52A1\u5668\u8BBF\u95EEmongo

/**
 * \u5B9A\u4E49\u79DF\u7528\u673A\u5668\u83B7\u53D6\u6536\u76CA\u5DEE\u989D\u7684\u94B1\u5305
 */
export const designatedWallet = &#39;5F7L9bc3q4XdhVstJjVB2o7S8RHz2YKsHUB6k3uQpErTmVWu&#39; // \u7528\u6237\u652F\u4ED8\u7684dbc\u6536\u76CA\u90E8\u5206\u4F1A\u8FDB\u5165\u6B64\u94B1\u5305\uFF0C\u9700\u66FF\u6362\u6210\u81EA\u5DF1\u7684\u94B1\u5305\u5730\u5740
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u4E94\u3001\u90E8\u7F72-web-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u90E8\u7F72-web-\u73AF\u5883" aria-hidden="true">#</a> \u4E94\u3001\u90E8\u7F72 web \u73AF\u5883</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E0B\u8F7D\u4EE3\u7801\u5230\u672C\u5730\u6216\u670D\u52A1\u5668</span>
<span class="token number">1</span>. \u514B\u9686\u4EE3\u7801
<span class="token comment">#\u901A\u8FC7git\u514B\u9686\u94FE\u63A5\u5730\u5740 https://github.com/DeepBrainChain/DBChainWebsite.git \u5C06\u4EE3\u7801\u514B\u9686\u5230\u672C\u5730\u6216\u670D\u52A1\u5668\uFF0C\u8FD0\u884C</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DBChainWebsite.git

<span class="token comment">#\u68C0\u67E5\u662F\u5426\u5B89\u88C5Node,\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u68C0\u67E5Node\u662F\u5426\u5168\u5C40\u5B89\u88C5</span>
<span class="token function">node</span> -v //v16.13.0

<span class="token comment">#\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6253\u5F00DBChainWebsite\u6587\u4EF6\u5939\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u751F\u6210node_modules\u6587\u4EF6</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment">#\u6267\u884C\u6210\u529F\u540E\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u53EF\u4EE5\u672C\u5730\u542F\u52A8\u7F51\u9875\u8FD0\u884C\u4E91\u5E73\u53F0\uFF0C\u8FDB\u884C\u6D4B\u8BD5\u3002</span>
<span class="token function">npm</span> run dev

<span class="token number">2</span>. \u4FEE\u6539\u4E91\u5E73\u53F0logo\u56FE\u6848\u914D\u7F6E
<span class="token comment">#\u6253\u5F00\u6587\u4EF6\u5939 src--&gt; locales --&gt; CN.js &amp;&amp; EN.js &amp;&amp; RU.js, \u5C06website_name\u5B57\u6BB5\u8BBE\u7F6E\u4E3A\u81EA\u5DF1\u4E91\u5E73\u53F0\u7684\u540D\u79F0\uFF0C\u672C\u5730\u8FD0\u884C\u5373\u53EF\u67E5\u770B</span>
<span class="token comment">#\u4FEE\u6539website_name</span>

<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
	\xB7\xB7\xB7
	website_name: <span class="token string">&#39;dbchain&#39;</span>, // dbchain, 1024lab, tycloud
	\xB7\xB7\xB7
<span class="token punctuation">}</span>

<span class="token number">3</span>. \u914D\u7F6E\u63A5\u53E3\u8BBF\u95EE\u57DF\u540D
<span class="token comment">#\u6253\u5F00\u6587\u4EF6\u5939 src--&gt; api --&gt; index.js,\u914D\u7F6E\u81EA\u5DF1\u914D\u7F6E\u7684\u670D\u52A1\u5668\u63A5\u53E3\uFF0C\u5373\u53EF\u4FEE\u6539\u81EA\u5DF1\u6240\u5C5E\u7684node\u63A5\u53E3\u8BBF\u95EE\u57DF\u540D</span>
<span class="token comment">#\u4FEE\u6539\u6587\u4EF6\uFF0C\u4F7F\u7528nodeHost</span>

const nodeHost <span class="token operator">=</span> <span class="token string">&#39;https://xxxxxx&#39;</span>   //nodejs \u670D\u52A1\u5668\u5730\u5740
const <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&quot;https://xxxxx&quot;</span><span class="token punctuation">;</span> //java \u670D\u52A1\u5668\u5730\u5740

<span class="token number">4</span>. \u4FEE\u6539\u8BBF\u95EE\u94FE\u5730\u5740
<span class="token comment">#\u6253\u5F00\u6587\u4EF6\u5939 src--&gt; utlis --&gt; dot --&gt; api.ts &amp;&amp; index.ts ,\u914D\u7F6E\u8BBF\u95EE\u94FE</span>
const <span class="token function">node</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    \xB7\xB7\xB7
    dbc: <span class="token string">&#39;wss://info.dbcwallet.io&#39;</span> // \u516C\u94FE\u6B63\u5F0F\u94FE
    \xB7\xB7\xB7
<span class="token punctuation">}</span>

<span class="token number">5</span>. \u751F\u6210dist\u6587\u4EF6\u90E8\u7F72\u670D\u52A1\u5668
<span class="token comment">#\u6253\u5F00DBChainWebsite\u6587\u4EF6\u5939\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u751F\u6210dist\u6587\u4EF6\u5939(DBChainWebsite\u6587\u4EF6\u5939\u4E0B)\uFF0C\u5C06dist\u6587\u4EF6\u5939\u653E\u5728\u6307\u5B9A\u7684\u670D\u52A1\u5668\u6587\u4EF6\uFF0C\u901A\u8FC7\u914D\u7F6Enginx\u6307\u5B9Adist\u6587\u4EF6\u4E2D\u7684index.html\u6587\u4EF6\uFF0C\u5373\u53EF\u8BBF\u95EE\u9875\u9762</span>
<span class="token function">npm</span> run build

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="\u516D\u3001\u90E8\u7F72-nginx" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u90E8\u7F72-nginx" aria-hidden="true">#</a> \u516D\u3001\u90E8\u7F72 Nginx</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5Nginx</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx -y

<span class="token comment"># \u914D\u7F6Enginx</span>
<span class="token function">mkdir</span> /etc/nginx/gpucloud //\u4E0A\u4F20ssl\u8BC1\u4E66\u5230\u6B64\u6587\u4EF6\u5939\u4E2D
<span class="token function">mkdir</span> /etc/nginx/gpucloud.conf
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/nginx/gpucloud.conf

<span class="token comment">#\u793A\u4F8B\u5982\u4E0B\uFF0C\u5B9E\u9645\u8BF7\u6309\u7167\u81EA\u8EAB\u73AF\u5883\u6539\u52A8\uFF0C\u4EC5\u4F5C\u53C2\u8003</span>

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




<span class="token comment"># \u68C0\u6D4BNginx\u914D\u7F6E\u662F\u5426\u6B63\u786E</span>
<span class="token function">sudo</span> nginx -t

<span class="token comment"># \u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u8D77</span>
<span class="token function">sudo</span> nginx -s reload
<span class="token function">sudo</span> systemctl start nginx
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br></div></div>`,27);function l(r,t){return p}var i=s(e,[["render",l]]);export{i as default};
