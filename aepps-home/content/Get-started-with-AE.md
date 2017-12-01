---
title: "How to get started with Aeternity development"
date: 2017-12-01T19:49:51+01:00
draft: true
---

	<div class="container">

Here are some steps you can follow to get going with Aeternity aepp development. The goal is to built an app (we call them aepps) which will 

- Use AE test tokens for transactions or signing
- Use  the identity manager to easily approve these actions

We run the aepps in the Ethereum Kovan network. So for write actions to this blockchain Gas in the form of Kovan-ETH tokens (KETH) will be needed and we won’t transfer real AE tokens, though Kovan-AE tokens (KAE).

To get started follow these steps:



<h3 id="1-check-out-the-getting-started-boilerplate-tutorial">1. Check out the <strong>Getting Started boilerplate Tutorial</strong>:</h3>

This tutorial explains how to built a simple dapp using truffle, vue and the Aeternity identity manager <br>
[https://codeburst.io/dapp-scratch-a-cli-for-building-dapps-and-tutorial-for-building-your-first-one-5cabdff3771e](https://codeburst.io/dapp-scratch-a-cli-for-building-dapps-and-tutorial-for-building-your-first-one-5cabdff3771e)



<h3 id="2-check-out-other-existing-demo-aepps">2. Check out other existing <strong>Demo Aepps</strong>:</h3>

<p>Have a look at those existing repos to get a first understanding of how things are done in other apps.</p>

<ul>
<li><p>Identity Manager - your control center for approving transactions, signing messages and organizing your AE identities <br>
<br><a href="https://github.com/aeternity/aepp-identity">https://github.com/aeternity/aepp-identity</a> <br>
<br><a href="http://identity.aepps.com/">http://identity.aepps.com/</a></p></li>
<li><p>Wall aepp - this is a Twitter like messaging service where likes are expressed with actual AE token contributions <br>
<br><a href="https://github.com/aeternity/aepp-wall">https://github.com/aeternity/aepp-wall</a> <br>
<br><a href="https://wall.aepps.com/">https://wall.aepps.com/</a></p></li>
<li><p>Voting aepp - everybody who holds AE (the real AE, not KAE ;) ) can vote on the ongoing topics within the community. The more AE tokens you have the more does your vote count. <br>
<br><a href="https://github.com/aeternity/aepp-voting">https://github.com/aeternity/aepp-voting</a> <br>
<br><a href="https://vote.aepps.com/">https://vote.aepps.com/</a></p></li>
<li><p>Aexistence / notary aepp - upload your personal files to the blockchain if you want to proof their existence and get a timestamp <br>
<br><a href="https://github.com/aeternity/aepp-aexistence">https://github.com/aeternity/aepp-aexistence</a> <br>
<br><a href="http://notary.aepps.com/">http://notary.aepps.com/</a></p></li>
</ul>



<h3 id="3-get-your-hands-dirty-and-fork-the-boilerplate-to-get-started">3. Get your hands dirty and fork the  <strong>boilerplate</strong> to get started:</h3>

<p>This is the boilerplate which is also used in the tutorial from step #1. You haven’t forked it yet? Go for it :) <br>
<a href="https://github.com/okwme/dapp-scratch">https://github.com/okwme/dapp-scratch</a></p>



<h3 id="4-be-inspired-by-the-style-guide">4. Be inspired by the <strong>style guide</strong></h3>

<p>This sketch file shows the latest styles of various aepps. You will see that often the same elements are used, because consistency is always the goal :). <br>
<br><a href="https://github.com/aeternity/aepp-prototypes/blob/master/00-aepp-styleguide.sketch">https://github.com/aeternity/aepp-prototypes/blob/master/aepp-prototypes.sketch</a> <br>
<br>We can also invite you to the exported files in Zeplin.io, if you don’t have the current sketch version.</p>



<h3 id="5-use-these-existing-vue-components">5. Use these existing <strong>vue components</strong></h3>

<p>Ready made vue components which are in line with our style guide. Go ahead and use these buttons, icons, input fields and so on in your aepp.</p>

<p>Here it is explained how to use the <em>npm package</em> for these components <br>
<a href="https://github.com/aeternity/aepp-components">https://github.com/aeternity/aepp-components</a><br></p>

<p>and here you can get an overview of the existing components <br>
<a href="http://components.aepps.com/">http://components.aepps.com/</a></p>

<h3 id="6-try-out-the-conversational-machine-to-easily-built-a-chat-bot-like-aepp">6. Try out the <strong>conversational machine</strong> to easily built a chat bot like aepp</h3>

<p>With this npm module you can built aepps like our notary aepp where the user interacts in a chat environment with a chat bot. You pretty much only have to set up the <code>question -&gt; answer</code> logic. <br>
<br><a href="https://github.com/aeternity/conversational-machine">https://github.com/aeternity/conversational-machine</a></p>

<h3 id="7-get-some-kae-and-keth-tokens-to-test-your-app">7. Get some <strong>KAE and KETH tokens</strong> to test your app</h3>

<p>You will need of course some test tokens during development. You can get both by sending in your public key via a <a href="https://gist.github.com/">github gist</a> and <code>curl</code>.</p>

<p>A) At best you firstly set up a new testing wallet at <a href="https://www.myetherwallet.com/">Myetherwallet</a> to collect your tokens there. From there you can send them to new created accounts to the <a href="http://identity.aepps.com/">Identity manager</a>  or to  <a href="https://metamask.io/">Metamask</a> or you can also import your account in either one.</p>

<p>At this moment Myetherwallet is the best way to send AE tokens and to display the AE balance.</p>

<p>B) Copy your public key in a  <a href="https://gist.github.com/">github gist</a> and create a new gist (public or secret doesn’t matter).</p>

<p><img src="https://photos-5.dropbox.com/t/2/AAD9z125J7OdlxM6pB-9ms_vTu8SPFyqRqvsOxvgCDnNdA/12/7363903/png/32x32/3/1511550000/0/2/Gist1.png/EMjVuwUYqMgEIAcoBw/T0b2jFzu3dOOyKO8gwn6OysZ1hH8IQr1vZRHc2ABceA?dl=0&amp;size=2048x1536&amp;size_mode=3" alt="Gist" title=""></p>

<p>C) Use <code>curl</code> to send the gist url to either the KAE or the KETH faucet</p>

<ul>
<li><p><strong>For KAE tokens</strong><br>
Just use the gist-id (only the number at the end, also called the hash) and the right curl command:</p>

<p><code>curl http://ae-faucet.aepps.com/gist --data "gist_id=&lt;id of the gist&gt;"</code> </p>

<p>e.g. </p>

<p><code>curl http://ae-faucet.aepps.com/gist --data "gist_id=9b3bbb10cafa79ff7da54f90600fa8a8"</code> </p>

<p><br></p></li>
<li><p><strong>For KETH tokens </strong><br>
Put the whole gist- url and the right curl command:</p>

<p><code>curl http://github-faucet.kovan.network/url --data "address=https://gist.github.com/[github_username]/[gist_hash]"</code> </p>

<p>e.g.</p>

<p><code>curl http://github-faucet.kovan.network/url --data
</code>
<p><code>"address=https://gist.github.com/followyoureyes/9b3bbb10cafa79ff7da54f90600fa8a8" <br>
</code> <br>

<br>
More details for the KETH faucet:<br>
<a href="https://github.com/kovan-testnet/faucet/#github-gist-faucet--automated-">https://github.com/kovan-testnet/faucet/#github-gist-faucet–automated-</a> <br>
<br>Both work once a day.</p></li>
</ul>

<p>D) Done!  <br>
You should have KAE and KETH tokens now. Congrats! </p>

<h3 id="8-check-your-kae-balance">8. Check your <strong>KAE balance</strong></h3>

<p>So how many KAE do I have? To check your KAE balance you use at best <a href="https://www.myetherwallet.com/">Myetherwallet</a> (your KETH balance is displayed in the identity manager and in metamask, your KAE not yet).</p>

<p><img src="https://photos-3.dropbox.com/t/2/AACoL3yohS1XMJlnEhzBc4AkZjvNX6ZA2qX9XpFLBF06Zw/12/7363903/png/32x32/1/_/1/2/Add-custom-token.png/EMjVuwUYqcgEIAcoBw/Nm2iHKHp23-UzYhEONBdMuz-8VnXLe2IZg4F22BJMzc?size=2048x1536&amp;size_mode=3" alt="Add Custom Token" title=""></p>

<p>To display your KAE balance and to be able to send KAE tokens with Myetherwallet you need to <strong>add a custom token</strong> in the wallet with the following details:</p>

<ul>
<li>Kovan Aeternity Contract Address: <br>
<code>0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9</code></li>
<li>Decimals: <code>18</code></li>
<li>Token Symbol: Whatever you like e.g. <code>KAE</code></li>
</ul>

<p><img src="https://photos-1.dropbox.com/t/2/AADeMqK7ETWK2hhg7Hi5wYdgXSm2BMVbT-wtCTVUdWfDYg/12/7363903/png/32x32/1/_/1/2/balance.png/EMjVuwUYrcgEIAcoBw/bodSKbx5Tm9APzOpcBU62C2il8OEDqJUqNtXLwvQ-Fg?size=2048x1536&amp;size_mode=3" alt="KAE balance" title=""></p>

<p>The Kovan Aeternity contract and the transfers you can see also here: <br>
<a href="https://kovan.etherscan.io/token/0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9">https://kovan.etherscan.io/token/0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9</a></p>

<h3 id="9-solidity">9. <strong>Solidity</strong></h3>

<p>The smart contracts are written for the Kovan Ethereum network so we use Solidity for the contracts. </p>

<p>For this it’s useful to have a look at the Solidity API. Enjoy! <br>
<a href="https://solidity.readthedocs.io/en/develop/solidity-in-depth.html">https://solidity.readthedocs.io/en/develop/solidity-in-depth.html</a></p>



<h3 id="10-questions">10. <strong>Questions</strong></h3>

<p>Please don’t hestitate to write to us any questions or comments! Especially for the hackathon we have set up a <a href="https://t.me/aepp_haeck_weeks">hackathon telegram channel</a>.</p>

