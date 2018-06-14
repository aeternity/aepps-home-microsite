# aepps.com

aeternity aepps Portal [GoHugo](https://github.com/gohugoio/hugo) implementation


The following description will provide all necessary information to easily create new aepp pages.



## Data

In order to avoid data duplication, all aepps data is stored in  _/data/aepps.json_, which mimics a small database. All objects stored within it should have a similar structure. 


Each object has a key, that will be later referenced in the content .md templates.

### Required Options:

* ```name``` - It is usually the same with the "title" of aepp's .md template. It is required in cases like the "Similar aepps" section of a single aepp page, where an exact set of aepp .md templates cannot be iterated
* ```urlName``` - Necessary attribute for building the aepp's single page URL
* ```tag``` - The aepp's status tag. Example: _KOVAN TEST NET_
* ```icon``` - Aepp's icon
* ```description``` - The aepp's description
* ```shortDescription``` - The description, that is displayed on card elements


### Other Options:

* ```images``` - An array with images/screenshots of the aepp. They are usually required for the "Showcase" section.
* ```tagVersion``` - The aepp's version tag. Example: _alpha_
* ```tagCoreApp``` - A boolean to indicate whether the aepp will have a _CORE æpp_ tag.
* ```appUrl``` - It will display the "Launch" button for the corresponding aepp
* ```videoUrl``` - The **code** of the aepp's youtube video. It will be displayed at the "Screencast" section.
* ```similar``` - An array with all similar to the current aepps
* ```githubUrl``` - The aepp's github page URL. Displays the Github icon with a link in the aepp's single page.
* ```slackUrl``` - Just like _githubUrl_, but for Slack
* ```facebookUrl``` - Just like _githubUrl_, but for Facebook 

### Example:

```
"vaecation": {
        "name": "Væcation",
        "urlName": "vaecation",
        "images": [
            "/img/aepps/vaecation/1.png",
            "/img/aepps/vaecation/2.png",
            "/img/aepps/vaecation/3.png",
            "/img/aepps/vaecation/4.png",
            "/img/aepps/vaecation/5.png"
        ],
        "tag": "COMMUNITY ÆPP",
        "tagVersion": "",
        "icon": "identity.svg",
        "githubUrl": "https://github.com/Dsummers91/aepp",
        "slackUrl": "",
        "facebookUrl": "",
        "appUrl": "http://ec2-54-191-216-41.us-west-2.compute.amazonaws.com:8000",
        "videoUrl": "jgS5Goh_BWw",
        "description": "The Vacation æpp allows you to easily and securely plan and pay for group activities and travel. It takes the headache out of large group planning by allowing users to utilize the power of smart contracts to facilitate smooth financial transactions between fellow travelers.",
        "shortDescription": "Plan group holidays using smart contracts.",
        "similar": [
            "proof",
            "theWall"
        ]
    }
```

> Take notice, that although not required, the more of these attributes are applied, the better the aepp's presentation will get.

## Content structure

Details about specific (not related to any global params, such as "title") content of markdown files at the "content" folder

### _index.md

Contains data about the home page

* headline: Away from the default "title", this parameter will keep the title in the hero section of the home page.
* coreAppsFirstRow: Holds an array with the keys of the aepps, that will be shown in the first row of "Core Aepps" section.
* coreAppsSecondRow: As its name points, this param will keep the keys of the core aepps for the second row.
* homePageAppCards: Another array with the keys of the aepps that will be shown as "cards" on the home page.

#### Example:
```
---
title: "aeternity aepps Portal"
headline: "Activate the power of the æternity æpp ecosystem"
coreAppsFirstRow: ["transfer", "address"]
coreAppsSecondRow: ["blockchainExplorer", "messenger"]
homePageAppCards: ["voting", "theWall", "proof"]
---
```

> It is not recommended to leave any of the previous parameters empty


### /imprint/_index.md


Holds the page title and the text content for the Imprint page. The most optimized way to serve content is with markdown, that will be rendered as "h2" and "p" HTML tags.

#### Example:
```
---
title: "Imprint"
---

## Hinweise zum Datenschutz

Ihr Vertrauen ist uns wichtig. Deshalb respektieren wir den Datenschutz und...
```


### /aepps/_index.md

Contains the data for the list template of all aepps

* appsToShowOrdered: An array with the keys of all aepps that should be displayed on this page. This implementation is useful because it provides custom selection of aepps (you can skip an app, for instance - The Identity Manager, which is displayed on the home page) and custom order.

#### Example:
```
---
title: "æternity æpps"
appsToShowOrdered: [
    "transfer", "address", "blockchainExplorer",
    "messenger", "theWall", "voting", "proof",
    "oaeuth", "haello", "flickerFilm", "vaecation",
    "whitelist"
]
---
```


### /aepps/some-aepp.md

The md template for each of the aepps.

* key: The **JSON object key** of the data array, that holds all details for the current aepp.

#### Example:
```
---
title: "Hællo"
key: "haello"
---

## Which problem is your æpp solving?

People looking for company can actively...
```
> Make sure the key is exactly the same as the desired key in the _aepps.json_ file
