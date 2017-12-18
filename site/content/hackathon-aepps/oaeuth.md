---
title: "1st: OÆuth"
description: "This is a decentralized app made with Angular for the æternity hackathon Nov 27 - Dec 15. It's implementing an authorization endpoint for the OAuth2 authorization protocol. More specific, the endpoint for the implicit authorization flow. In this flow, the æpp takes the place of the authorization server, providing a way to authenticate individuals (in combination with the identity-manager) and issue JSON Web Tokens usable for authentication at a resource server."
date: 2017-12-01T23:34:33+01:00
draft: false
icon: "app-icon-placeholder.svg"
githuburl: "https://github.com/nilsmehlhorn/OAEuth"
appurl: "https://oaeuth.firebaseapp.com/#/"
voteurl: "https://vote.aepps.com/statements/D28tvZaZCftvGjy8E"
videourl: ""
images : [
	"/img/hackathon-aepps/oaeuth/1.png",
	"/img/hackathon-aepps/oaeuth/2.png"
]
---

<p class="question">Which problem is your æpp solving?</p>
<p class="answer">
OAuth2 is a really cool protocol preventing the need to have separate accounts for every service you use. Yet, with a trustful web, only big authorization providers are trusted. Most of the times you can only login through the well-known socials or the like. Therefore your authorization data is heavily centralized and controlled by the centralized authorization providers. With OÆuth, common authorization schemes are not forced to change to correct this. Authorization data is stored on the chain, controlled only by yourself, yet still fully reliable. With a bit more work to it and compatability of a service, you may login to your favorite web-based service through æternity.
</p>
<p class="question">What was your approach?</p>
<p class="answer">I had actually no experience in writing dapps starting this off, just the idea to replace centralized authorization servers with the chain. Also, I didn't know VueJS, in which all other dæpp apps are written. So, I build OÆuth using Angular and TypeScript. First, I worked out the process for issuing tokens based on blockchain by studying the OAuth2 protocol, JWT and smart contracts. Then I implemented a basic prototype, later implemented the contract and accompying application logic. Lastly I've included the æternity style guide to my abilities, so that the æpp would fit into the identity manager. It's build mobile-first, so it should look great on phone screens and pretty acceptable on desktop devices. The æpp still has some shortcomings, thus making it's initial concept not really useable for production yet. E.g. you'd need deep links for the identity-manager to open OÆuth through a redirect. This should be fixable in the near future with updates to the identity-manager.</p>
<div class="grid line">
<h2>Screencast</h2>
</div>
<div class="videoWrapper">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/-ptJk6pDQ38" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
