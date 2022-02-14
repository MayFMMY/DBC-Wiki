import{r as t,o as i,c as l,a as e,b as o,F as c,d as n,e as a}from"./app.1d293cd3.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var d="/DBC-Wiki/assets/image-20210126021938613.ed5880e3.png",p="/DBC-Wiki/assets/image-20210121194808850.652c90b7.png",u="/DBC-Wiki/assets/image-20210121194953014.2c0cbcd6.png",h="/DBC-Wiki/assets/image-20210121195033167.2f9f22c6.png",m="/DBC-Wiki/assets/image-20210121195307711.9ce5490a.png",b="/DBC-Wiki/assets/image-20210121200709277.b82ea79b.png",_="/DBC-Wiki/assets/image-20210121234945030.f232b1a0.png",g="/DBC-Wiki/assets/image-20210121235144583.06df3d13.png",f="/DBC-Wiki/assets/image-20210121235217665.a5da9a91.png",y="/DBC-Wiki/assets/image-20210121235451552.5c7ff86d.png",k="/DBC-Wiki/assets/image-20210329095933403.93a21fd2.png";const v={},w=e("h1",{id:"how-to-run-a-dbc-validator",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-run-a-dbc-validator","aria-hidden":"true"},"#"),n(" How to run a DBC validator?")],-1),x={start:"0"},C=e("li",null,[e("p",null,"Recommended hardware"),e("ul",null,[e("li",null,"RAM\uFF1A8G"),e("li",null,"CPU\uFF1A2 cores"),e("li",null,"Disk\uFF1A100G")])],-1),D=e("p",null,"Generate stash account \uFF08If you already have stash account, you can skip this\uFF09",-1),B=e("p",null,[n("Option 1: Install "),e("code",null,"polkadot{.js}"),n(" adds-on")],-1),S=n("Chrome, install via "),q={href:"https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd",target:"_blank",rel:"noopener noreferrer"},A=n("Chrome web store"),W=n("Firefox, install via "),z={href:"https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension/",target:"_blank",rel:"noopener noreferrer"},F=n("Firefox add-ons"),I=e("p",null,[n("Then generate by "),e("code",null,"polkadot{.js}")],-1),G=n("Option 2: Generate account from "),N={href:"https://www.dbcwallet.io/?rpc=wss%3A%2F%2Finfo.dbcwallet.io#/accounts",target:"_blank",rel:"noopener noreferrer"},j=n("https://www.dbcwallet.io/?rpc=wss%3A%2F%2Finfo.dbcwallet.io#/accounts"),T=n("\uFF0Cclick "),K=e("code",null,"Account",-1),P=n(" -- "),E=e("code",null,"Add account",-1),O=a(`<li><p>Option 3: Generate by command line:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --proto <span class="token string">&#39;=https&#39;</span> --tlsv1.2 -sSf https://sh.rustup.rs <span class="token operator">|</span> <span class="token function">sh</span>
cargo <span class="token function">install</span> --force subkey --git https://github.com/paritytech/substrate --version <span class="token number">2.0</span>.1 --locked
subkey generate --scheme sr25519
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>`,1),V=a(`<li><p>Get <code>dbc-chain</code> binary</p><ul><li><p>Option 1: use pre-build version (If any errors, please use Option 2).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://github.com/DeepBrainChain/DeepBrainChain-MainChain/releases/download/v2/dbc_chain_linux_x64.tar.gz -O dbc_chain_linux_x64.tar.gz
tar xf dbc_chain_linux_x64.tar.gz &amp;&amp; cd dbc-chain-mainnet
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>Option 2: compile from source (recommended)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># install dependency</span>
<span class="token function">curl</span> https://getsubstrate.io -sSf <span class="token operator">|</span> <span class="token function">bash</span> -s -- --fast
<span class="token builtin class-name">source</span> ~/.cargo/env

<span class="token comment"># compile dbc-chain</span>
<span class="token function">git</span> clone https://github.com/DeepBrainChain/DeepBrainChain-MainChain.git
<span class="token builtin class-name">cd</span> DeepBrainChain-MainChain
cargo build --release
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul></li><li><p>Synchronize Chain Data</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./dbc-chain --base-path ./db_data --chain ./dbcSpecRaw.json --pruning<span class="token operator">=</span>archive --bootnodes /ip4/47.74.88.41/tcp/8947/p2p/12D3KooWD87i4TKA68P7zpGNXxUaHgvnimbgihEzDyJrmG3iGJPw
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>If you compile from source, the binary path is <code>./target/release/dbc-chain</code></li></ul></li>`,2),H=a('<ul><li>After finished synchronize, type <code>Control + C</code> to close the above command. You can compare <code>target</code> and <code>best</code> to infer if sync is finished. When <code>target</code> is closed (100 blocks, for example) to <code>best</code> , it can be regard sync is finished.<img src="'+d+'" alt="image-20210126021938613"><ul><li><strong>Flags in detail\uFF1A</strong></li><li><code>--base-path</code>\uFF1ASpecifies a directory where Substrate should store all the data related to this chain. If this value is not specified, a default path will be used. If the directory does not exist it will be created for you. If other blockchain data already exists there you will get an error. Either clear the directory or choose a different one. <ul><li><code>--chain ./dbcSpecRaw.json</code>\uFF1ASpecifies which chain specification to use.</li><li><code>--pruning=archive</code>\uFF1Asynchronize chain data</li><li><code>--bootnodes</code>\uFF1Aspecified a single boot node.</li></ul></li></ul></li></ul>',1),M={start:"4"},R=a(`<li><p>After synchronizing block data finished, stop the synchronizing command. Then run the node as a validator:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nohup</span> ./dbc-chain --base-path ./db_data --chain ./dbcSpecRaw.json --validator --name YourNodeName --bootnodes /ip4/47.74.88.41/tcp/8947/p2p/12D3KooWD87i4TKA68P7zpGNXxUaHgvnimbgihEzDyJrmG3iGJPw <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>dbc_node.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>If you compile from source, the binary path is <code>./target/release/dbc-chain</code></li><li>You can give your validator any name that you like, but note that others will be able to see it, and it will be included in the list of all servers using the same telemetry server. Since numerous people are using telemetry, it is recommended that you choose something likely to be unique.</li></ul></li><li><p>generate<code>rotateKey</code></p><p>Run the following command in the terminal, and record the result.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -H <span class="token string">&quot;Content-Type: application/json&quot;</span> -d <span class="token string">&#39;{&quot;id&quot;:1, &quot;jsonrpc&quot;:&quot;2.0&quot;, &quot;method&quot;: &quot;author_rotateKeys&quot;, &quot;params&quot;:[]}&#39;</span> http://localhost:9933
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>`,2),Y=e("p",null,"Bond stash",-1),U=n("open "),J={href:"https://www.dbcwallet.io/?rpc=wss%3A%2F%2Finfo.dbcwallet.io#/accounts",target:"_blank",rel:"noopener noreferrer"},L=n("https://www.dbcwallet.io/?rpc=wss%3A%2F%2Finfo.dbcwallet.io#/accounts"),X=n(" you will see your balance: "),Q=e("img",{src:p,alt:"image-20210121194808850"},null,-1),Z=e("li",null,[e("p",null,[n("navigate to"),e("code",null,"Staking > Account actions"),n("\uFF0Cclick "),e("code",null,"stash"),e("img",{src:u,alt:"image-20210121194953014"})])],-1),$=e("li",null,[e("p",null,[n("You should set bond balance\uFF08Make sure not to bond all your DBC balance since you will be unable to pay transaction fees from your bonded balance.\uFF09\uFF1A"),e("img",{src:h,alt:"image-20210121195033167"})])],-1),ee=a("<p><strong>Description\uFF1A</strong></p><ul><li><code>Stash account</code>\uFF1ASelect your Stash account. In this example, we will bond 45 DBC - make sure that your Stash account contains <em>at least</em> this much. You can, of course, stake more than this.</li><li><code>controller account</code>\uFF1ASelect the Controller account created earlier. This account will also need a small amount of DBC in order to start and stop validating.</li><li><code>value bonded</code>\uFF1AHow much DBC from the Stash account you want to bond/stake. Note that you do not need to bond all of the DBC in that account. Also note that you can always bond <em>more</em> DBC later.</li><li><code>payment destination</code>\uFF1AThe account where the rewards from validating are sent.</li></ul>",2),ne=e("p",null,"Set Session Keys",-1),ae=e("li",null,[e("p",null,[n("After bond your stash\uFF0Cyou can see in Polkadot UI "),e("code",null,"Session Key"),n("button\uFF1A"),e("img",{src:m,alt:"image-20210121195307711"})])],-1),se=e("li",null,[e("p",null,[n("click it and input the result in step 5"),e("code",null,"rotateKeys"),e("img",{src:b,alt:"image-20210121200709277"})])],-1),oe=n("Now, check in "),te={href:"https://telemetry.polkadot.io/#list/0xd523fa2e0581f069b4f0c7b5944c21e9abc72305a08067868c91b898d1bf1dff",target:"_blank",rel:"noopener noreferrer"},ie=n("Telemetry"),le=n(" and you can see your node."),ce=e("img",{src:_,alt:"image-20210121234945030"},null,-1),re=a('<li><p>Validate</p><ul><li><p>After steps above you can see<code>Validate</code> button and click it,<img src="'+g+'" alt="image-20210121235144583"></p></li><li><p>You should set your preference as a validator.<img src="'+f+'" alt="image-20210121235217665"></p></li><li><p>In <code>reward commission percentage</code> you should input your commission preference. Then clieck <code>Validate</code> to send this transaction\u3002Then\uFF0Cin <code>Waiting</code> page\uFF0Cyou are waiting status<code>Era</code> to be a validator.<img src="'+y+'" alt="image-20210121235451552"></p></li></ul></li>',1),de=e("h2",{id:"how-to-get-your-rewards-payout",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-get-your-rewards-payout","aria-hidden":"true"},"#"),n(" How to get your rewards payout\uFF1F")],-1),pe=e("p",null,[n("Navigate to "),e("code",null,"Staking > Payouts > Max, 84 eras"),n(" \uFF0Cyou may see all the rewards to be payout\uFF1A")],-1),ue=e("p",null,[e("img",{src:k,alt:"image-20210329095933403"})],-1),he=e("p",null,[n("chick "),e("code",null,"Payout all"),n(" button to send a transaction.")],-1);function me(be,_e){const s=t("ExternalLinkIcon");return i(),l(c,null,[w,e("ol",x,[C,e("li",null,[D,e("ul",null,[e("li",null,[B,e("ul",null,[e("li",null,[S,e("a",q,[A,o(s)])]),e("li",null,[W,e("a",z,[F,o(s)])])]),I]),e("li",null,[e("p",null,[G,e("a",N,[j,o(s)]),T,K,P,E])]),O])]),V]),H,e("ol",M,[R,e("li",null,[Y,e("ul",null,[e("li",null,[e("p",null,[U,e("a",J,[L,o(s)]),X,Q])]),Z,$]),ee]),e("li",null,[ne,e("ul",null,[ae,se,e("li",null,[e("p",null,[oe,e("a",te,[ie,o(s)]),le,ce])])])]),re]),de,pe,ue,he],64)}var ye=r(v,[["render",me]]);export{ye as default};
