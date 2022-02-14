import{r as c,o,c as r,a as e,b as a,F as s,d as t,e as i}from"./app.1d293cd3.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";var h="/DBC-Wiki/assets/find_machine.a06ade5a.png";const l={},m=e("h1",{id:"on-chain-rent-machine",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#on-chain-rent-machine","aria-hidden":"true"},"#"),t(" On-chain rent machine")],-1),p=e("h2",{id:"step-1-determine-the-machine-to-be-rented",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-1-determine-the-machine-to-be-rented","aria-hidden":"true"},"#"),t(" Step 1: Determine the machine to be rented")],-1),u=t("Open "),_={href:"https://www.dbcwallet.io/?rpc=wss://info.dbcwallet.io",target:"_blank",rel:"noopener noreferrer"},f=t("Mainnet Wallet"),b=e("li",null,[e("p",null,"Create a wallet: Account-->Add account (The mnemonic phrase must be saved, if the mnemonic phrase is lost, the account cannot be retrieved, and the currency is lost)")],-1),v=t("Go to "),g={href:"https://galaxyrace.deepbrainchain.org/table",target:"_blank",rel:"noopener noreferrer"},w=t("Galactic Race Machine List"),x=t(" to find the corresponding type of idle machine"),y=e("p",null,[e("img",{src:h,alt:"find_machine"})],-1),N=e("h2",{id:"step-2-rent-a-machine-on-the-chain",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-2-rent-a-machine-on-the-chain","aria-hidden":"true"},"#"),t(" Step 2: Rent a machine on the chain")],-1),k=i("<li><p>Navigate to <code>Developer</code>---<code>Transactions</code>---<code>rentMachine</code> ----<code>rentMachine(machine_id, duration)</code></p></li><li><p><code>machine_id</code>: Enter the id of the machine to be rented, the <code>0x</code> in the input box must be deleted first</p></li><li><p><code>duration</code>: enter the number of days you need to rent</p></li><li><p>After the input is complete, click Submit Transaction, and confirm whether the machine is available within 30 minutes. (If the lease is not confirmed within 30 minutes, the payment of <code>dbc</code> will be refunded, but the transaction fee of 10 <code>dbc</code> cannot be refunded)</p></li>",4),D=t("For related operations such as creating a virtual machine, please "),M={href:"https://github.com/DeepBrainChain/DBC-DOC/blob/master/creat_macine/create_macine.md",target:"_blank",rel:"noopener noreferrer"},B=t("reference"),C=i('<h2 id="step-3-confirm-availability-and-lease" tabindex="-1"><a class="header-anchor" href="#step-3-confirm-availability-and-lease" aria-hidden="true">#</a> Step 3: Confirm availability and lease</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Before confirming, you must confirm that the virtual machine can start normally. After confirming that the lease is successful, it means that the machine is successfully leased, and the DBC rent cannot be refunded</p></div><ul><li><p>Navigate to <code>Developer</code>----<code>Transactions</code>----<code>rentMachine</code>----<code>confirmRent(machine_id)</code></p></li><li><p>Enter the machine id and submit the transaction</p></li></ul><h2 id="step-4-relet-machine-rent" tabindex="-1"><a class="header-anchor" href="#step-4-relet-machine-rent" aria-hidden="true">#</a> Step 4: Relet Machine Rent</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The virtual machine will be automatically stopped when the machine expires to ensure that the lease is renewed successfully before the lease expires</p></div><ul><li><p>Navigate to <code>Developer</code>----<code>Transactions</code>----<code>rentMachine</code>----<code>reletMachine(machine_id, add_duration)</code></p></li><li><p>Enter the machine id and the number of days to renew the lease, and submit the transaction</p></li></ul>',6);function R(T,A){const n=c("ExternalLinkIcon");return o(),r(s,null,[m,p,e("ul",null,[e("li",null,[e("p",null,[u,e("a",_,[f,a(n)])])]),b,e("li",null,[e("p",null,[v,e("a",g,[w,a(n)]),x])])]),y,N,e("ul",null,[k,e("li",null,[e("p",null,[D,e("a",M,[B,a(n)])])])]),C],64)}var I=d(l,[["render",R]]);export{I as default};
