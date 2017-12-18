---
title: "3rd: Token-Curated Registry"
description: "A basic implementation of Mike Goldin's token-curated registry design, allowing contributors to submit a short text for inclusion in a whitelist, curators to challenge and vote on whether items should be removed from the whitelist, and consumers to view the whitelist as a list on a webpage. Incentives are aligned between all actors using staking, so contributors are incentivized to add good items (lest they lose their stake in a challenge), challengers are incentivized only to challenge when they're reasonably certain they'll win the challenge (lest they lose their stake and miss the opportunity to gain a share of the reward), and voters are incentivized to vote according to their certainty of the correct outcome of the challenge (lest they lose their stake and miss the opportunity to gain a share of the reward). For a more detail description of TCRs, see: https://medium.com/@ilovebagels/token-curated-registries-1-0-61a232f8dac7."
date: 2017-12-01T21:34:33+01:00
draft: false
icon: "app-icon-placeholder.svg"
githuburl: "https://github.com/msutherl/tcr"
appurl: "https://tcr.netlify.com"
voteurl: "https://vote.aepps.com/statements/CvtrZYK6S47ytKMoc"
videourl: ""
images : [

]
---

<p class="question">Which problem is your æpp solving?</p>
<p class="answer">
Decentralized curation of whitelists (e.g. businesses on Yelp for a given city, advertisers in an ad network, trusted data providers in a data market)
</p>
<p class="question">What was your approach?</p>
<p class="answer">I started by implementing the important features of a TCR as described in the paper in a single smart contract, used dapp-scratch to generate handlers for the ABI, then wrote a quick interface in vue.js to demonstrate the features.</p>
<div class="grid line">
<h2>Screencast</h2>
</div>
<div class="videoWrapper">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/oxG6i2-Zrps" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
