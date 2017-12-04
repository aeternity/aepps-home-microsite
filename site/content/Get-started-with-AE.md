---
title: "How to get started with Aeternity development"
date: 2017-12-01T19:49:51+01:00
draft: false
---
Here are some steps you can follow to get going with Aeternity aepp development. The goal is to built an app (we call them aepps) which will

- Use AE test tokens for transactions or signing
- Use the identity manager to easily approve these actions

We run the aepps in the Ethereum Kovan network. So for write actions to this blockchain Gas in the form of Kovan-ETH tokens (KETH) will be needed and we won’t transfer real AE tokens, though Kovan-AE tokens (KAE).

To get started follow these steps:

### 1. Check out the **Getting Started boilerplate Tutorial**:

This tutorial explains how to built a simple dapp using truffle, vue and the Aeternity identity manager <br>
[https://codeburst.io/dapp-scratch-a-cli-for-building-dapps-and-tutorial-for-building-your-first-one-5cabdff3771e](https://codeburst.io/dapp-scratch-a-cli-for-building-dapps-and-tutorial-for-building-your-first-one-5cabdff3771e)

### 2. Check out other existing **Demo Aepps**:

Have a look at those existing repos to get a first understanding of how things are done in other apps.

- Identity Manager - your control center for approving transactions, signing messages and organizing your AE identities
 - [https://github.com/aeternity/aepp-identity](https://github.com/aeternity/aepp-identity)
 - [http://identity.aepps.com/](http://identity.aepps.com/)
- Wall aepp - this is a Twitter like messaging service where likes are expressed with actual AE token contributions
 - [https://github.com/aeternity/aepp-wall](https://github.com/aeternity/aepp-wall)
 - [https://wall.aepps.com/](https://wall.aepps.com/)
- Voting aepp - everybody who holds AE (the real AE, not KAE ;) ) can vote on the ongoing topics within the community. The more AE tokens you have the more does your vote count.
 - [https://github.com/aeternity/aepp-voting](https://github.com/aeternity/aepp-voting)
 - [https://vote.aepps.com/](https://vote.aepps.com/)
- Aexistence / notary aepp - upload your personal files to the blockchain if you want to proof their existence and get a timestamp
 - [https://github.com/aeternity/aepp-aexistence](https://github.com/aeternity/aepp-aexistence)
 - [http://notary.aepps.com/](http://notary.aepps.com/)

### 3. Get your hands dirty and fork the  **boilerplate** to get started:

This is the boilerplate which is also used in the tutorial from step #1. You haven’t forked it yet? Go for it :) <br>
[https://github.com/okwme/dapp-scratch](https://github.com/okwme/dapp-scratch)

### 4. Be inspired by the **style guide**

This sketch file shows the latest styles of various aepps. You will see that often the same elements are used, because consistency is always the goal :).

[https://github.com/aeternity/aepp-prototypes/blob/master/aepp-prototypes.sketch](https://github.com/aeternity/aepp-prototypes/blob/master/00-aepp-styleguide.sketch)

We can also invite you to the exported files in Zeplin.io, if you don’t have the current sketch version.

### 5. Use these existing **vue components**

Ready made vue components which are in line with our style guide. Go ahead and use these buttons, icons, input fields and so on in your aepp.

Here it is explained how to use the _npm package_ for these components

[https://github.com/aeternity/aepp-components](https://github.com/aeternity/aepp-components)

and here you can get an overview of the existing components <br>
[http://components.aepps.com/](http://components.aepps.com/)

### 6. Try out the **conversational machine** to easily built a chat bot like aepp

With this npm module you can built aepps like our notary aepp where the user interacts in a chat environment with a chat bot. You pretty much only have to set up the ```question -> answer``` logic. <br>
<br>[https://github.com/aeternity/conversational-machine](https://github.com/aeternity/conversational-machine)

### 7. Get some **KAE and KETH tokens** to test your app

You will need of course some test tokens during development. You can get both by sending in your public key via a [github gist](https://gist.github.com/) and ```curl```.

A) At best you firstly set up a new testing wallet at [Myetherwallet](https://www.myetherwallet.com/) to collect your tokens there. From there you can send them to new created accounts to the [Identity manager](http://identity.aepps.com/)  or to  [Metamask](https://metamask.io/) or you can also import your account in either one.

At this moment Myetherwallet is the best way to send AE tokens and to display the AE balance.

B) Copy your public key in a  [github gist](https://gist.github.com/) and create a new gist (public or secret doesn’t matter).

<!--<img src="https://photos-5.dropbox.com/t/2/AAD9z125J7OdlxM6pB-9ms_vTu8SPFyqRqvsOxvgCDnNdA/12/7363903/png/32x32/3/1511550000/0/2/Gist1.png/EMjVuwUYqMgEIAcoBw/T0b2jFzu3dOOyKO8gwn6OysZ1hH8IQr1vZRHc2ABceA?dl=0&amp;size=2048x1536&amp;size_mode=3" alt="Gist" title=">-->

C) Use ```curl``` to send the gist url to either the KAE or the KETH faucet

#### **For KAE tokens**
Just use the gist-id (only the number at the end, also called the hash) and the right curl command:

```
curl http://ae-faucet.aepps.com/gist --data "gist_id=<id of the gist>"
```

e.g.

```
curl http://ae-faucet.aepps.com/gist --data "gist_id=9b3bbb10cafa79ff7da54f90600fa8a8"
```

#### **For KETH tokens**
Put the whole gist- url and the right curl command:

```
curl http://github-faucet.kovan.network/url --data "address=https://gist.github.com/[github_username]/[gist_hash]"
```

e.g.

```
curl http://github-faucet.kovan.network/url --data \
	"address=https://gist.github.com/followyoureyes/9b3bbb10cafa79ff7da54f90600fa8a8"
```

More details for the KETH faucet:<br>
[https://github.com/kovan-testnet/faucet/#github-gist-faucet–automated-](https://github.com/kovan-testnet/faucet/#github-gist-faucet--automated-)
<br>Both work once a day.

D) Done!  <br>
You should have KAE and KETH tokens now. Congrats!

### 8. Check your **KAE balance**

So how many KAE do I have? To check your KAE balance you use at best [Myetherwallet](https://www.myetherwallet.com/) (your KETH balance is displayed in the identity manager and in metamask, your KAE not yet).

<!--<img src="https://photos-3.dropbox.com/t/2/AACoL3yohS1XMJlnEhzBc4AkZjvNX6ZA2qX9XpFLBF06Zw/12/7363903/png/32x32/1/_/1/2/Add-custom-token.png/EMjVuwUYqcgEIAcoBw/Nm2iHKHp23-UzYhEONBdMuz-8VnXLe2IZg4F22BJMzc?size=2048x1536&amp;size_mode=3" alt="Add Custom Token" title=">-->

To display your KAE balance and to be able to send KAE tokens with Myetherwallet you need to **add a custom token** in the wallet with the following details:

- Kovan Aeternity Contract Address: ```0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9```
- Decimals: ```18```
- Token Symbol: Whatever you like e.g. ```KAE```

<!--<img src="https://photos-1.dropbox.com/t/2/AADeMqK7ETWK2hhg7Hi5wYdgXSm2BMVbT-wtCTVUdWfDYg/12/7363903/png/32x32/1/_/1/2/balance.png/EMjVuwUYrcgEIAcoBw/bodSKbx5Tm9APzOpcBU62C2il8OEDqJUqNtXLwvQ-Fg?size=2048x1536&amp;size_mode=3" alt="KAE balance" title=">-->

The Kovan Aeternity contract and the transfers you can see also here:
[https://kovan.etherscan.io/token/0x35d8...f9f9](https://kovan.etherscan.io/token/0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9)

### 9. **Solidity**

The smart contracts are written for the Kovan Ethereum network so we use Solidity for the contracts.

For this it’s useful to have a look at the Solidity API. Enjoy! <br>
[https://solidity.readthedocs.io/en/develop/solidity-in-depth.html](https://solidity.readthedocs.io/en/develop/solidity-in-depth.html)

### 10. **Questions**

Please don’t hestitate to write to us any questions or comments! Especially for the hackathon we have set up a [hackathon telegram channel](https://t.me/aepp_haeck_weeks).
