---
title: "OÆuth"
key: "oaeuth"
---


## Which problem is your æpp solving?

OAuth2 is a really cool protocol preventing the need to have separate accounts for every service you use. Yet, with a trustful web, only big authorization providers are trusted. Most of the times you can only login through the well-known socials or the like. Therefore your authorization data is heavily centralized and controlled by the centralized authorization providers. With OÆuth, common authorization schemes are not forced to change to correct this. Authorization data is stored on the chain, controlled only by yourself, yet still fully reliable. With a bit more work to it and compatability of a service, you may login to your favorite web-based service through æternity.

## What was your approach?

I had actually no experience in writing dapps starting this off, just the idea to replace centralized authorization servers with the chain. Also, I didn’t know VueJS, in which all other dæpp apps are written. So, I build OÆuth using Angular and TypeScript. First, I worked out the process for issuing tokens based on blockchain by studying the OAuth2 protocol, JWT and smart contracts. Then I implemented a basic prototype, later implemented the contract and accompying application logic. Lastly I’ve included the æternity style guide to my abilities, so that the æpp would fit into the identity manager. It’s build mobile-first, so it should look great on phone screens and pretty acceptable on desktop devices. The æpp still has some shortcomings, thus making it’s initial concept not really useable for production yet. E.g. you’d need deep links for the identity-manager to open OÆuth through a redirect. This should be fixable in the near future with updates to the identity-manager.