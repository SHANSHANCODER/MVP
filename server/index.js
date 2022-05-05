require("dotenv").config();
const express = require("express");
let app = express();
const bodyParser = require("body-parser");
//const helpers = require("../helpers/github.js");
const { default: axios } = require("axios");
const db = require("./db.js");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get("/api", (req, res) => {
  // console.log("query",req.query)
  //   if (req.query.q.toUpperCase()==="NTF" ){
  //     res.status(200).send(ntfpage0)
  //   }
  //   if (req.query.q==="crypto"){
  //     res.status(200).send(cryptopage0)
  //   } if (req.query.q==="blockchain"){
  //     res.status(200).send(blockpage0)
  //   } if (req.query.q==="NBA"){
  //     res.status(200).send(nbapage0)
  //   }
  axios
    .get("https://newsdata.io/api/1/news", {
      params: { apikey: process.env.apikey, q: req.query.q, language: "en" },
    })
    .then((response) => {
      console.log("q", req.query.q);
      //console.log("first get",response.data)
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("problematic axios");
    });
});

app.get("/api/nextpage", (req, res) => {
  //   console.log("nextpage query",req.query)
  //   if (req.query.q.toUpperCase()==="NTF" ){
  //     res.status(200).send(ntfpage1)
  //   }
  //   if (req.query.q==="crypto"){
  //     res.status(200).send(cryptopage1)
  //   } if (req.query.q==="blockchain"){
  //     res.status(200).send(blockpage1)
  //   } if (req.query.q==="NBA"){
  //     res.status(200).send(nbapage1)
  //   }

  axios
    .get("https://newsdata.io/api/1/news", {
      params: {
        apikey: process.env.apikey,
        q: req.query.q,
        language: "en",
        page: req.query.page,
      },
    })
    .then((response) => {
      console.log("q", req.query.q);
      // console.log("get page",response.data)
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("problematic axios");
    });
});

app.post("/api/userdata", (req, res) => {
  req.body.time = new Date();
  db.save(req.body, (err, result) => {
    if (err) {
      res.status(500).send("didnt save");
    } else {
      res.status(201).send("information saved");
    }
  });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

let ntfpage0 = {
  status: "success",
  totalResults: 59,
  results: [
    {
      title:
        "Telegram Users Can Send and Receive Toncoin Within Messenger Chats",
      link: "https://news.bitcoin.com/telegram-users-can-send-and-receive-toncoin-within-messenger-chats/",
      keywords: [
        "News",
        "$1 Billion Raised",
        "Bitcoin",
        "Bitcoin (BTC)",
        "Bot",
        "Crypto Telegram",
        "DeFi",
        "Disintar.io",
        "Messenger App",
        "Messenger Application",
        "NFTs",
        "SEC",
        "SEC Case",
        "SEC filing",
        "Send and Recieve",
        "Storage",
        "Telegram",
        "telegram crypto",
        "ton",
        "TON Foundation",
        "Toncoin",
      ],
      creator: ["Jamie Redman"],
      video_url: null,
      description:
        "Telegram users can now send and receive toncoin directly within the application’s chats, according to a tweet by The Open Network (TON) Foundation. In addition to the toncoin support, users can also purchase bitcoin via the software’s bot system. TON Foundation Reveals Telegram Toncoin Support, Users Can Purchase Bitcoin via Bot The ability to send […]",
      content:
        "Telegram users can now send and receive toncoin directly within the application’s chats, according to a tweet by The Open Network (TON) Foundation. In addition to the toncoin support, users can also purchase bitcoin via the software’s bot system. TON Foundation Reveals Telegram Toncoin Support, Users Can Purchase Bitcoin via Bot The ability to send and receive cryptocurrency using Telegram is now possible using the TON Foundation’s toncoin. Sending digital currencies via third-party applications tethered to Telegram was possible before. However, this is the first time toncoin will be available since Telegram settled with the U.S. Securities and Exchange Commission (SEC) in June 2020. The SEC filed a case against Telegram in October 2019 over the toncoin project. On Twitter, the TON Foundation said: “You can now send toncoin directly within Telegram chats. It’s a new way to send Toncoin without transaction fees to any Telegram user. With this service, you’ll no longer need to enter long wallet addresses and wait for confirmations.” While users can send and receive toncoin, they can also purchase BTC using the wallet bot system. Telegram dropped the TON project in August 2020, but in April the community raised $1 billion to further the project’s goals. The TON Foundation has moved into the arena of decentralized finance (defi) and non-fungible tokens (NFTs) as well. Just recently, the foundation announced the launch of Disintar.io, a TON-based NFT marketplace. “On Disintar.io, users can buy, sell, and list NFTs without having any technical knowledge,” the TON Foundation explained. Toncoin saw an all-time high (ATH) on November 12, 2021, six months ago reaching $5.29 per unit. Since then toncoin’s USD value has slid 64.8% lower than the ATH. Today, toncoin is exchanging hands for $1.86 per unit and has seen around $2,746,626 in daily trade volume. What do you think about toncoin being integrated into Telegram so users can send and receive the crypto asset? Let us know what you think about this subject in the comments section below.",
      pubDate: "2022-05-02 16:30:31",
      image_url: null,
      source_id: "bitcoin",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
        "saudi arabia",
        "canada",
      ],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "BFM Crypto, le Club: BTC/ETH, quel potentiel pour la suite ? - 02/05",
      link: "https://www.bfmtv.com/economie/replay-emissions/bfm-crypto-le-club/bfm-crypto-le-club-btc-eth-quel-potentiel-pour-la-suite-02-05_VN-202205020545.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Ce lundi 2 mai, Vincent Boy, analyste marchés chez IG, Grégory Raymond, cofondateur et rédacteur en chef de The Big Whale, ainsi que John Karp, co-producteur du podcast NFT Morning, se sont penchés sur le potentiel pour la suite pour le Bitcoin (BTC) et l'Ethereum (ETH), dans BFM Crypto, le Club dans l'émission BFM Bourse présentée par Guillaume Sommerer. BFM Bourse est à voir ou écouter du lundi au vendredi sur BFM Business.",
      content: null,
      pubDate: "2022-05-02 16:17:58",
      image_url:
        "https://images.bfmtv.com/7CvLUD3uRY58lIUiYWyCC0INWgc=/0x0:1280x720/800x0/images/BFM-Crypto-le-Club-BTC-ETH-quel-potentiel-pour-la-suite-02-05-1405671.jpg",
      source_id: "bfmtv",
      country: ["france"],
      category: ["business"],
      language: "french",
    },
    {
      title:
        "OpenLocker Announces Legendary Racing Prospects NFT Collection Now for Sale on the OpenStable Platform with Leading Contenders in the Kentucky Derby and Kentucky Oaks",
      link: "https://www.prnewswire.com:443/news-releases/openlocker-announces-legendary-racing-prospects-nft-collection-now-for-sale-on-the-openstable-platform-with-leading-contenders-in-the-kentucky-derby-and-kentucky-oaks-301537474.html",
      keywords: [
        "Blockchain",
        "Computer & Electronics",
        "General Sports",
        "SPT",
        "CPR",
        "BLN",
      ],
      creator: null,
      video_url: null,
      description:
        "RED BANK, N.J., May 2, 2022 /PRNewswire/ -- OpenLocker Inc. has launched the OpenStable marketplace, a fan-friendly blockchain platform to engage the next generation of thoroughbred racing fans. The first limited edition series in the Legendary Racing Prospects Collection of Non-Fungible...",
      content: null,
      pubDate: "2022-05-02 16:15:00",
      image_url: null,
      source_id: "cision",
      country: ["singapore"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "Sensorium Signs Strategic Partnership with the Humanity 2.0 Foundation for metaverse NFT and Digital Art Gallery Initiatives",
      link: "https://www.prnewswire.com:443/news-releases/sensorium-signs-strategic-partnership-with-the-humanity-2-0-foundation-for-metaverse-nft-and-digital-art-gallery-initiatives-301537045.html",
      keywords: [
        "Blockchain",
        "Computer & Electronics",
        "Computer Software",
        "Art",
        "Entertainment",
        "BLN",
        "ENT",
        "CPR",
        "STW",
        "ART",
      ],
      creator: null,
      video_url: null,
      description:
        "The public-private partnership aims to extend the availability of the Vatican's heritage – manuscripts, masterpieces, and academic initiatives – to people, who otherwise won't be able to experience it. Sensorium will also become the first metaverse developer to participate in NGO's NFT...",
      content: null,
      pubDate: "2022-05-02 16:00:00",
      image_url:
        "https://mma.prnewswire.com/media/1807954/Sensorium_Humanity_2.jpg?p=original",
      source_id: "cision",
      country: ["singapore"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "BRUT. AND PPLPLEASR PARTNER FOR FIRST-EVER NFT COLLECTION AT THE CANNES FILM FESTIVAL TO BENEFIT THE USC ANNENBERG INCLUSION INITIATIVE",
      link: "https://www.prnewswire.com:443/news-releases/brut-and-pplpleasr-partner-for-first-ever-nft-collection-at-the-cannes-film-festival-to-benefit-the-usc-annenberg-inclusion-initiative-301537234.html",
      keywords: [
        "Computer & Electronics",
        "Art",
        "Entertainment",
        "Film and Motion Picture",
        "Publishing & Information Services",
        "Cryptocurrency",
        "ENT",
        "CPR",
        "FLM",
        "ART",
        "ICO",
        "PUB",
      ],
      creator: null,
      video_url: null,
      description:
        "Limited Edition NFT Collection Will Be Available At 9:00am PST On Monday, May 2nd, 2022 NEW YORK, May 2, 2022 /PRNewswire/ -- Brut, the world's largest values-driven media platform, has partnered with globally-celebrated Web3 artist pplpleasr for a first-of-its-kind collection of 75...",
      content: null,
      pubDate: "2022-05-02 16:00:00",
      image_url:
        "https://mma.prnewswire.com/media/1808536/BRUT_PPLPLEASR_USCANNENBERG_Logo.jpg?p=original",
      source_id: "cision",
      country: ["singapore"],
      category: ["top"],
      language: "english",
    },
    {
      title: 'Anuel AA lanzará en verano su primer NFT, "Génesis"',
      link: "https://es-us.deportes.yahoo.com/anuel-aa-lanzar%C3%A1-verano-nft-153431698.html?src=rss",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content: null,
      pubDate: "2022-05-02 15:34:31",
      image_url: null,
      source_id: "yahoo",
      country: ["canada"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "Why ApeCoin Is Volatile Today",
      link: "https://www.fool.com/investing/2022/05/02/why-apecoin-is-volatile-today/?source=iedfolrf0000001",
      keywords: null,
      creator: ["newsfeedback@fool.com (Bram Berkowitz)"],
      video_url: null,
      description:
        "The price of the new cryptocurrency has been up and down over the last week.",
      content:
        "Over the last 24 hours, the cryptocurrency ApeCoin (CRYPTO: APE) has been extremely volatile, at one point rising nearly 16% but now trading more than 11% down as of 10:28 p.m. ET today.It has also been an incredibly volatile week, with ApeCoin, which currently trades at $15.38, having risen to $26.81 last Thursday. The volatility seems to be related to a metaverse land sale the token was involved in.ApeCoin is a relatively new cryptocurrency that dropped in March and has ties to the popular non-fungible token (NFT) collection called the Bored Ape Yacht Club, which is a series of NFTs depicting different apes with different wardrobes and facial expressions. These NFTs are quite popular and have been purchased for large sums of money by a number of celebrities and high net worth individuals. Continue reading",
      pubDate: "2022-05-02 15:22:03",
      image_url: null,
      source_id: "fool",
      country: ["canada"],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "NFT company raises around £227,000,000 in crypto for ‘virtual land’",
      link: "https://metro.co.uk/2022/05/02/nft-company-raises-around-227000000-in-crypto-for-virtual-land-16569921/",
      keywords: ["Tech", "Bitcoin", "Cryptocurrency", "metaverse", "NFT"],
      creator: ["Anugraha Sundaravelu"],
      video_url: null,
      description:
        "People paid $285,000,000 for land which does not physically exist.",
      content:
        "The sale disrupted the entire Ethereum blockchain as a flood of users rushed to purchase the NFTs and sent transaction fees soaring (Picture: Reuters) People have collectively paid around £227,000,000 ($285,000,000) in cryptocurrency for land that does not physically exist. Creators of the popular Bored Apes Yacht Club (BAYC) collection of NFTs launched a sale of ‘virtual land’ which had users scrambling for deeds to plot in the metaverse. In an online sale on Saturday, Yuga Labs, the company behind BAYC, sold NFTs called ‘Otherdeeds’, which it said could be exchanged as plots of virtual land in a future Bored Ape-themed online environment called ‘Otherside’. The NFTs or ‘Otherdeeds’ sold by Yuga Labs would represent a plot of land in a virtual world it says it is building. A total of 55,000 Otherdeeds sold at a flat price of 305 ApeCoin, around £4634 ($5,800), at the time of purchase in what was considered the ‘largest NFT mint in history’. The Otherdeed NFT mint is sold out – we are awestruck at the demand shown tonight. Apes and Mutants, the opening of the 21-day claim period is being delayed until the price of gas drops to reasonable levels. Weâ€™ll tweet when the claim opens. https://t.co/iRz64lklbv— OthersideMeta (@OthersideMeta) May 1, 2022 The sale disrupted the entire Ethereum blockchain as a flood of users rushed to purchase the NFTs which sent transaction fees soaring.  The ‘Otherdeeds’ could only be bought using the project’s associated cryptocurrency, called ApeCoin, which launched in March. The Bored Ape Yacht Club NFTs are blockchain-based tokens representing a set of 10,000 computer-generated cartoon apes which exploded in popularity and started selling at thousands of dollars each. BAYC became one of the most prominent NFT brands, with Apes sold at top auction houses and owned by celebrities including Paris Hilton and Madonna. The Bored Ape Yacht Club NFTs are blockchain-based tokens representing a set of 10,000 computer-generated cartoon apes (Picture: BAYC) What is an NFT? Non-fungible tokens (NFTs) are crypto assets that represent digital files such as images, video, or items in an online game. It was not clear how the funds would be distributed, although the company said the ApeCoin would be ‘locked up’ for one year. The sale indicates the continued demand for speculative, high-risk crypto assets related to online virtual worlds. NFTs are largely unregulated, and reports of scams, fakes and market manipulation are common. The Otherside metaverse will be a multi-player gaming environment, according to its website, which says it is currently under development but has no launch date yet. This morning, the official BAYC Instagram account was hacked. The hacker posted a fraudulent link to a copycat of the BAYC website with a fake Airdrop, where users were prompted to sign a â€˜safeTransferFromâ€™ transaction. This transferred their assets to the scammer’s wallet.— Bored Ape Yacht Club (@BoredApeYC) April 25, 2022 Yuga Labs’ Otherdeeds sale comes shortly after the Bored Ape Yacht Club official Instagram account was hacked and a phishing link posted, allowing scammers to steal victims’ NFTs. What is the Metaverse? It’s a world of interconnected virtual communities where people can meet, work and play, using virtual reality headsets, augmented reality glasses, smartphone apps or other devices. MORE : Ubisoft admits to leaked Project Q multiplayer game – promises no NFTs… for now MORE : Jack Dorsey sold an NFT for $2.9 million – now it’s worth $280",
      pubDate: "2022-05-02 15:15:40",
      full_description:
        "People have collectively paid around £227,000,000 ($285,000,000) in cryptocurrency for land that does not physically exist. Creators of the popular Bored Apes Yacht Club (BAYC) collection of NFTs launched a sale of ‘virtual land’ which had users scrambling for deeds to plot in the metaverse . In an online sale on Saturday, Yuga Labs, the company behind BAYC, sold NFTs called ‘Otherdeeds’, which it said could be exchanged as plots of virtual land in a future Bored Ape-themed online environment called ‘Otherside’. The NFTs or ‘Otherdeeds’ sold by Yuga Labs would represent a plot of land in a virtual world it says it is building. A total of 55,000 Otherdeeds sold at a flat price of 305 ApeCoin, around £4634 ($5,800), at the time of purchase in what was considered the ‘largest NFT mint in history’. The Otherdeed NFT mint is sold out – we are awestruck at the demand shown tonight. Apes and Mutants, the opening of the 21-day claim period is being delayed until the price of gas drops to reasonable levels. Weâll tweet when the claim opens. https://t.co/iRz64lklbv The sale disrupted the entire Ethereum blockchain as a flood of users rushed to purchase the NFTs which sent transaction fees soaring. The ‘Otherdeeds’ could only be bought using the project’s associated cryptocurrency, called ApeCoin, which launched in March. The Bored Ape Yacht Club NFTs are blockchain-based tokens representing a set of 10,000 computer-generated cartoon apes which exploded in popularity and started selling at thousands of dollars each. BAYC became one of the most prominent NFT brands, with Apes sold at top auction houses and owned by celebrities including Paris Hilton and Madonna. Non-fungible tokens (NFTs) are crypto assets that represent digital files such as images, video, or items in an online game. It was not clear how the funds would be distributed, although the company said the ApeCoin would be ‘locked up’ for one year. The sale indicates the continued demand for speculative, high-risk crypto assets related to online virtual worlds. NFTs are largely unregulated, and reports of scams, fakes and market manipulation are common. The Otherside metaverse will be a multi-player gaming environment, according to its website, which says it is currently under development but has no launch date yet. This morning, the official BAYC Instagram account was hacked. The hacker posted a fraudulent link to a copycat of the BAYC website with a fake Airdrop, where users were prompted to sign a âsafeTransferFromâ transaction. This transferred their assets to the scammer’s wallet. Yuga Labs’ Otherdeeds sale comes shortly after the Bored Ape Yacht Club official Instagram account was hacked and a phishing link posted, allowing scammers to steal victims’ NFTs. It’s a world of interconnected virtual communities where people can meet, work and play, using virtual reality headsets, augmented reality glasses, smartphone apps or other devices. MORE : Ubisoft admits to leaked Project Q multiplayer game – promises no NFTs… for now MORE : Jack Dorsey sold an NFT for $2.9 million – now it’s worth $280 Not convinced? Find out more »",
      image_url: "https://metro.co.uk/wp-content/uploads/2022/05/nft-2065.webp",
      source_id: "metro",
      country: ["united kingdom"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "Don Moore warns Floyd Mayweather ‘I’m no Logan Paul’ and promises ‘explosive’ exhibition with boxing legend in Dubai",
      link: "https://www.thesun.co.uk/sport/18384606/don-moore-floyd-mayweather-logan-paul-exhibition-boxing-dubai/",
      keywords: ["Boxing", "Sport"],
      creator: ["Jack Figg"],
      video_url: null,
      description:
        "DON MOORE has warned Floyd Mayweather “I’m no Logan Paul” as he promised an “explosive” exhibition with the boxing legend. Mayweather returns to the ring against ex-sparring partner Moore on May 14 with the pair sensationally set to fight on a Dubai HELIPAD. It was only last June the unbeaten American gave away TWO STONE […]",
      content:
        "DON MOORE has warned Floyd Mayweather “I’m no Logan Paul” as he promised an “explosive” exhibition with the boxing legend. Mayweather returns to the ring against ex-sparring partner Moore on May 14 with the pair sensationally set to fight on a Dubai HELIPAD. Floyd Mayweather and Don Moore ahead of their exhibitionGetty Images - Getty Logan Paul took Floyd Mayweather the distance in their exhibitionGetty It was only last June the unbeaten American gave away TWO STONE in his spectacle bout with YouTuber Paul. It went the full eight-round distance and lacked little entertainment – but Moore vowed there will be no such complaints this month. He told SunSport: “Floyd is going to understand and figure out that ay, I’m no Logan Paul and I am not no one that you have seen before.  “We’ve sparred and I showcased my talent but on May 14th, I’m not no sparring partner and I mean that from the bottom of my heart.  READ MORE LESS IS MOORE Mayweather to fight Moore in front of 20 fans with NFT tickets costing £150k here comes the money Floyd Mayweather vs Don Moore: Date, UK start time, TV channel, stream “I’m in here to kick ass and that’s what I’m going to do, I’m a fighter.” Mayweather claimed he did minimal training before his exhibition with Paul in Miami. He said at the time: “A little bit here and there. Not every day. But I don’t have to.” Moore, who has 18 wins with one draw, is adamant Mayweather will unfortunately take him as a much more serious threat to his unblemished 50-0 record. Most read in Boxing Average Joe Hearn brutally puts down Paul - but insists \"average\" label is a compliment PAUL ON THE TABLE Jake Paul sets next fight date with Conor McGregor and Mike Tyson linked 'WE'RE BOTH WINNERS' Katie Taylor beats Amanda Serrano in biggest female fight in history SIZING UP Larry Holmes calls for 'size limit' in boxing after 'giant' Fury's win vs Whyte RU ARE YA? Andy Ruiz Jr vs Luis Ortiz fight date CONFIRMED as August 13 in Los Angeles CHAMPION WALK Fury walks around Wilmslow as Gypsy King enjoys retirement after Whyte fight FREE BETS AND SIGN UP DEALS – BEST NEW CUSTOMER OFFERS He said: “I’m not taking away from anybody’s ability to perform, but, Logan Paul isn’t a fighter. I’m a real boxer.  “I’m undefeated, I’m a real fighter, this is very different, the mindset is different, the way Floyd is training is different.  “Floyd said in an interview he only trained ten days for Logan Paul, I wish he would train ten days for me!  “This is a real action-packed exhibition, you guys are going to get a bang for your buck. “Everything is going to be explosive, it’s going to be an exciting exhibition for the whole world to see.” The fight 700ft above sea level at the Burj Al Arab Hotel is set to have only 20 VIP fans in attendance, with tickets purchased as NFTs at £150,000. And he urged those select few, and the paying pay-per-view customers at home, to keep their eyes glued to the action. Moore said: “I’m going to apply a lot of correct pressure, I have the blueprint, with my coach Kenny Johnson, we’ve been studying and training.  Read More on The Sun VLAD’S FURY Russian TV threatens annihilation of UK with radioactive tsunami & Satan-2 nuke HOLIDAY ROMANCE Helen Skelton's husband has 'fled abroad for a holiday with new girlfriend' “It’s going to be very competitive and Floyd is going to understand that listen, I’m not no sparring partner. “It’s going to be an exciting fight, if you turn away to get popcorn, you just might miss something.”  GettyDon Moore during a 2015 sparring session with Floyd Mayweather[/caption]",
      pubDate: "2022-05-02 15:12:47",
      image_url: null,
      source_id: "thesun",
      country: ["united kingdom"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "The NBA Released a Dynamic NFT Series Dubbed “The Association”",
      link: "https://hypebeast.com/2022/5/nba-the-association-nfts-franchise-2022-playoffs",
      keywords: ["Art"],
      creator: null,
      video_url: null,
      description:
        'To coincide with the excitement of the 2022 NBA Playoffs, the league has released a dynamic NFT series eponymously dubbed "The Association."Made in conjunction with FRANCHISE, the collection features 30,000 NFTs being minted during the postseason — 125 editions per player across the 16 playoff teams. Each is issued as a blind-mint, which means that nobody will know which player they will receive prior to the reveal. View this post on InstagramA post shared by FRANCHISE (@thisisfranchise)Globally recognized for showcasing basketball through the lens of art, design, music and fashion, FRANCHISE creative director Justin Montag tapped Jacob Rochester to create each profile, along with Jen Stark and Rewina Beshue to create the background animations for each token. As the second round rolls on, the remaining players will continue to change in appearance as they achieve a particular accolade or advance throughout the playoffs. For example, a player receives a splash indicator if they score four or more three-pointers made in a game or a dagger icon to those who score a game-winning shot in the final 24 seconds. Somewhat similar to buying a pack of trading cards, players will be assigned randomly and transparently using Chainlink VRF to ensure a fair and equal chance of minting any athlete from any of the 16 playoff teams. Please visit The Association NFT along with OpenSea to learn more on how you can acquire your own. Elsewhere, Perrotin published the first monograph on South Korean artist Lee Bae.Click here to view full gallery at HYPEBEAST',
      content:
        'To coincide with the excitement of the 2022 NBA Playoffs, the league has released a dynamic NFT series eponymously dubbed "The Association."Made in conjunction with FRANCHISE, the collection features 30,000 NFTs being minted during the postseason — 125 editions per player across the 16 playoff teams. Each is issued as a blind-mint, which means that nobody will know which player they will receive prior to the reveal. View this post on InstagramA post shared by FRANCHISE (@thisisfranchise)Globally recognized for showcasing basketball through the lens of art, design, music and fashion, FRANCHISE creative director Justin Montag tapped Jacob Rochester to create each profile, along with Jen Stark and Rewina Beshue to create the background animations for each token. As the second round rolls on, the remaining players will continue to change in appearance as they achieve a particular accolade or advance throughout the playoffs. For example, a player receives a splash indicator if they score four or more three-pointers made in a game or a dagger icon to those who score a game-winning shot in the final 24 seconds. Somewhat similar to buying a pack of trading cards, players will be assigned randomly and transparently using Chainlink VRF to ensure a fair and equal chance of minting any athlete from any of the 16 playoff teams. Please visit The Association NFT along with OpenSea to learn more on how you can acquire your own. Elsewhere, Perrotin published the first monograph on South Korean artist Lee Bae. Click here to view full gallery at HYPEBEAST',
      pubDate: "2022-05-02 14:51:34",
      image_url: null,
      source_id: "hypebeast",
      country: ["singapore"],
      category: ["top"],
      language: "english",
    },
  ],
  nextPage: 1,
};

let cryptopage0 = {
  status: "success",
  totalResults: 154,
  results: [
    {
      title: "University in Mass. now accepting crypto for tuition payments",
      link: "https://www.wcvb.com/article/bentley-university-accepts-cryptocurrency-for-tuition/39895675",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "The school is accepting three cryptocurrencies — Bitcoin, Ethereum and the stablecoin USD coin — giving students and their families new ways to pay tuition.",
      content: null,
      pubDate: "2022-05-03 18:02:00",
      image_url:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/cryptocurrency-advertisement-bitcoin-ap-photo-1651600845.jpg",
      source_id: "wcvb",
      country: ["united states of america"],
      category: ["top"],
      language: "english",
    },
    {
      title: "A diminished Firefox turns 100",
      link: "https://techcrunch.com/2022/05/03/a-diminished-firefox-turns-100/",
      keywords: [
        "Opinion",
        "Browser Wars",
        "chromium",
        "computing",
        "Firefox",
        "gecko",
        "Google",
        "Internet-Explorer",
        "Microsoft",
        "microsoft windows",
        "Mozilla",
        "online privacy",
        "Open Web",
        "servo",
        "smartphones",
        "Software",
        "vpn",
        "Web browsers",
      ],
      creator: ["Frederic Lardinois"],
      video_url: null,
      description:
        "Mozilla launched version 100 of its Firefox browser today, but more so than a day for celebration, it feels like a day for nostalgia. That’s a nostalgia for a time when Firefox was truly revolutionary after it broke out of the Mozilla Application Suite back in 2002 and quickly threatened the hegemony of the utterly […]",
      content:
        "Mozilla launched version 100 of its Firefox browser today, but more so than a day for celebration, it feels like a day for nostalgia. That’s a nostalgia for a time when Firefox was truly revolutionary after it broke out of the Mozilla Application Suite back in 2002 and quickly threatened the hegemony of the utterly dismal Internet Explorer. But also a nostalgia for the open web, which Mozilla was able to champion when Firefox still had a dominant market share. It’s much easier to lead when your product has 30% market share and growing (like Firefox had around 2010) and your biggest competitor is declining quickly, but it’s hard to make your voice heard when you are under 4%. Today’s Mozilla, after many lean years, seems to be on a path to a better financial future, but its dependence on Google makes for an uneasy alliance as Mozilla tries to champion online privacy in a world dominated by the giant advertising company it utterly depends on. Firefox, too, is now a perfectly competent browser — but so is every other browser. It’s no secret that over the years, Mozilla got distracted. There were efforts to build a Firefox OS for affordable smartphones (which still lives as a fork under the KaiOS banner), VR browsers, arguments over whether there should be sponsored tiles on Firefox’s new tab page, a WebRTC video chat service and much more. Today, with Firefox Relay and the Mozilla VPN, it seems the organization has refocused a bit. Its focus on privacy resonates more today than it ever did — but for now, that hasn’t changed the browser’s fortune. Even today, for most users, privacy is a nice to have but not a reason to switch browsers, especially when there are plenty of extensions that can essentially do the same (though Firefox’s Multi-Account Containers are a game changer and should be available in every browser, as far as I’m concerned). Yet with all of the resources being poured into Chromium, it’s hard to see how Firefox and its Gecko engine will remain competitive in the long run. Browsers today are incredibly complex pieces of software. With Servo, Mozilla started a project to build a new engine from scratch. That was in 2012. Ten years later, we’re only seeing pieces of that in Firefox — and when Mozilla laid off many of its employees in 2020, that included the Servo team. There also hasn’t been a lot of innovation around Firefox lately, all while Chromium-based browsers are finding their niches, with Vivaldi, for example, tapping into the market for advanced users who want endless customizability, Brave going for the privacy-conscious crypto fans and Microsoft keeping the Windows faithful happy after finally ditching Internet Explorer (despite occasional missteps into bloatware). It doesn’t help that Mozilla never made it easy to build new user experiences around its browser engine while Chromium made it a core feature. Users may not care about the engine underneath their browsers, but developers who want to experiment with new browser paradigms will always opt for Chromium. The web is better off today because of what Mozilla built with Firefox. I hope we’ll see version 200 eight years from now. Mozilla expects to generate more than $500M in revenue this year",
      pubDate: "2022-05-03 17:54:23",
      image_url: null,
      source_id: "techcrunch",
      country: ["united states of america"],
      category: ["technology"],
      language: "english",
    },
    {
      title: "Wikipedia won't take crypto anymore",
      link: "https://www.pcgamer.com/wikipedia-wont-take-crypto-anymore",
      keywords: null,
      creator: null,
      video_url: null,
      description: "But they only made up 0.08% of donations anyway.",
      content: null,
      pubDate: "2022-05-03 17:46:03",
      image_url: null,
      source_id: "pcgamer",
      country: [
        "united states of america",
        "united kingdom",
        "australia",
        "canada",
      ],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "Belgium Introduces Registration for Crypto Exchange and Wallet Service Providers",
      link: "https://news.bitcoin.com/belgium-introduces-registration-for-crypto-exchange-and-wallet-service-providers/",
      keywords: [
        "Regulation",
        "Belgian",
        "belgium",
        "Crypto",
        "crypto exchange",
        "crypto platforms",
        "crypto wallet",
        "crypto-custody",
        "Cryptocurrencies",
        "Cryptocurrency",
        "custody",
        "Exchange",
        "FSMA",
        "registration",
        "Regulations",
        "regulator",
        "rules",
        "wallet providers",
        "watchdog",
      ],
      creator: ["Lubomir Tassev"],
      video_url: null,
      description:
        "Authorities in Belgium have obliged providers of some crypto exchange and wallet services to register with the country’s financial watchdog. Targeted platforms that fail to comply with the new regulations will face fines, among other penalties, including prohibition to carry out their respective activities. Financial Regulator Imposes Mandatory Registration for Crypto Exchange Service Providers in […]",
      content:
        "Authorities in Belgium have obliged providers of some crypto exchange and wallet services to register with the country’s financial watchdog. Targeted platforms that fail to comply with the new regulations will face fines, among other penalties, including prohibition to carry out their respective activities. Financial Regulator Imposes Mandatory Registration for Crypto Exchange Service Providers in Belgium Starting from May 1, 2022, any legal entities established and operating in Belgium that want to provide exchange services between “virtual currencies and legal currencies” are required to register with the Financial Services and Markets Authority (FSMA), the country’s financial regulator. The same applies to companies offering custody wallet services, the agency announced. Cryptocurrency platforms falling under these two categories, which had been working in Belgium before the specified date, should notify the FSMA of their activities before July 1, 2022 and apply for registration prior to a Sept. 1 deadline, the watchdog said. They will be granted “provisional authorization” allowing them to continue operations until the FSMA reviews their registration requests. The affected service providers are Belgian or European companies. The registration is subject to a minimum capital requirement of €50,000 ($53,000), a FAQ section on the authority’s website details. The FSMA also wants to know the identities of the shareholders and the persons in control of the platforms who must have the necessary management qualities. The FSMA notes that by exchange service providers it means entities carrying out purchase or sale transactions using own capital. That’s when the provider acts as a counterparty to a deal, just like traditional currency exchange offices. Platforms that serve as intermediaries in transactions between a client and a third party are not targeted with the new rules. However, operators of automated teller machines (ATMs) for crypto-fiat exchange, will be considered as providers of exchange services for the purposes of the new requirements. The regulator also defines custodial wallet services as services for the custody of private cryptographic keys on behalf of clients for the purpose of holding, storing, and transferring virtual currencies. Persons offering customers such services will be viewed as custodial wallet service providers that need to register with the FSMA. Do you think most crypto service providers in Belgium will be able to meet the new requirements and register with the country’s financial watchdog? Tell us in the comments section below.",
      pubDate: "2022-05-03 17:30:15",
      image_url: null,
      source_id: "bitcoin",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
        "saudi arabia",
        "canada",
      ],
      category: ["business"],
      language: "english",
    },
    {
      title: "The Largest Market Cap Coin You Haven't Heard Of: LUNA",
      link: "https://www.fool.com/investing/2022/05/03/the-largest-market-cap-coin-you-havent-heard-of-lu/?source=iedfolrf0000001",
      keywords: null,
      creator: ["newsfeedback@fool.com (Stephen Woicik)"],
      video_url: null,
      description:
        "Terra could be the top performing alt coin in 2022, outperforming ADA, SOL, MATIC, and others.",
      content:
        "Terra, with its token LUNA (CRYPTO: LUNA), has the 9th largest market cap at $30 billion. Yet, living in the United States, you may have never heard of it, and you wouldn't be alone. Terra's popularity and growth mostly comes from the Asia-Pacific region of the world. Terra is attempting to build a currency of stable coins, backed by real and digital assets. In 2022 the currency is finally hitting critical mass and activity. Image Source: Getty Images.Continue reading",
      pubDate: "2022-05-03 17:06:41",
      full_description:
        "Terra, with its token LUNA ( LUNA 1.40% ) , has the 9th largest market cap at $30 billion. Yet, living in the United States, you may have never heard of it, and you wouldn't be alone. Terra's popularity and growth mostly comes from the Asia-Pacific region of the world. Terra is attempting to build a currency of stable coins, backed by real and digital assets. In 2022 the currency is finally hitting critical mass and activity. Image Source: Getty Images. Surging Activity The number of wallet addresses on the network has been surging since the end of 2021, from about 900,000 to 3.5 million wallets. This has caused a massive uptick in the buying, selling, and spending of the currency, which increases both its value and utility. The LUNA token may be about to go through the mass market popularity that many alt coins enjoyed in 2021, thanks to its recent introduction to the U.S. market. Being an Asia-Pacific focused company, the U.S. has not been the primary focus. But already it has 220,000 stakers across the globe, who provide a stable network ready to handle growth. Built to Grow Terra already has proven utility, instead of just frothy theoretical value, as many hyped alt coins tend to do. The LUNA blockchain has proven it can handle high transaction volume and the steady number of stakers shows a stable and long-term belief in LUNA. The network has been integrated into apps as a payment platform. It has been built to be faster and cheaper to run than ETH (with 10,000 transactions per second speed compared to 20 on ETH). It has DeFi, staking, and other financial tools already running. Terra is ready to handle the increased activity on its blockchain. Currently it handles a 24 hour volume of about $3.1 billion. Compare that to ADA $900 Million, SOL $1.5 billion, and XRP $1.9 billion. Even with this trading volume, the chain is still processing less transactions per second than the 10,000 limit. Current estimates from Terra is 4,000-7,000 transactions per second. Terra has shown it can handle high volume, and is able to handle more. Terra is trying to be a global currency and money mover, and is succeeding in getting there (with a long way to go still). It could become the cheapest and most efficient way to move currencies globally. Also noteworthy: Terra recently added $3 billion in bitcoin to back their currency (with a goal of adding up to $10 billion). This is a great sign that the currency is growing and its developers are putting as much support as possible behind it. Terra wants its stable coins to be based on the Bitcoin monetary standard and will allow Terra to build a stable coin that is actually decentralized. This is a very unique and complex way of doing stable coins which is traditionally based on a 1 to 1 relationship with a central repository. In a traditional stable coin the cryptocurrency is backed by a traditional bank account. Where 1 token is backed by $1 real dollar in a bank account. Terra is backing its stable coin with assets on the blockchain. There is no central traditional bank holding all the value. Terra is using crypto investments in LUNA to decentralize the assets backing up the stable coins. 2022 and Beyond Terra has laid the groundwork to have a bright future. LUNA may be one of the best performing alt coins in 2022 and beyond.",
      image_url: null,
      source_id: "fool",
      country: ["canada"],
      category: ["business"],
      language: "english",
    },
    {
      title: "Cryptovoxels Is Rebranding to Voxels",
      link: "https://news.bitcoin.com/cryptovoxels-is-rebranding-to-voxels/",
      keywords: ["Press release", "Cryptovoxels", "voxels"],
      creator: ["Bitcoin.com Media"],
      video_url: null,
      description:
        "PRESS RELEASE. Cryptovoxels, one of the most significant players in the metaverse space, is rebranding to Voxels. The rebrand will happen on May 3rd at 8pm EDT (May 4th at noon New Zealand time). One of Web 3’s most popular communities, Cryptovoxels is a metaverse on the Ethereum blockchain where players can own land, and […]",
      content:
        "PRESS RELEASE. Cryptovoxels, one of the most significant players in the metaverse space, is rebranding to Voxels. The rebrand will happen on May 3rd at 8pm EDT (May 4th at noon New Zealand time). One of Web 3’s most popular communities, Cryptovoxels is a metaverse on the Ethereum blockchain where players can own land, and build and develop online experiences. The user-owned virtual world already hosts a number of art galleries, stores, and party spaces. Far from a mere name change, the rebranding to Voxels represents a pivot to a wider-spread audience that caters to those unfamiliar with cryptocurrency for the New Zealand-based platform. Web 3 promises a whole new internet experience and the metaverse stands at the epicenter of that promise. As interest in the metaverse expands, it is attracting the attention of more and more mainstream brands, companies, and sectors. With the rapid growth of metaverse platforms, Cryptovoxels is broadening its user base horizon from those familiar with cryptocurrency and blockchain technology to a more mainstream audience. As Founder Ben Nolan explained, “Cryptovoxels was founded on April 1st, 2018, before NFTs hit the mainstream. We are honored to have released around the same time as Cryptopunks and Cryptokitties. The word “crypto” can have a negative connotation in the public’s mind, and yet the future of decentralization is bright and we believe in user sovereignty. Cryptovoxels is Voxels. We are rebranding to match our focus of embracing the growth and culturel of Web 3.0.” The Rationale Behind the Rebrand Cryptovoxels has already established itself as a prominent metaverse in the ecosystem. According to data from MetaCat, Cryptovoxels ranks fifth in terms of parcel sales volume ($38MM) and total parcels sold. The platform is regularly ranked just behind Decentraland and The Sandbox in terms of its popularity and user base. Cryptovoxels land is more scarce than that of its competitors, allows users to build on free spaces and submit wearables to public collections for free, and is also mobile-friendly. Leveraging its position as a leading metaverse in the market, Cryptovoxels – soon to be Voxels – intends to broaden the benefits of Web 3 to Web 2 users, non-crypto users, and to accommodate the growing interest in the metaverse among corporations and brands. Voxels will retain the indie feel of Cryptovoxels while pursuing further growth and development. With the metaverse platform seeing a continued expansion of players as we add themed islands, mini-games, and stories. A new character that has been created, VIDDA, the artificial intelligence heart that gives inspiration to new people in the game, has become a symbol of the rebrand, representing a commitment to visuals, intent, design, direction, and atmosphere. Cryptovoxels was the world’s first metaverse ever released. On the rebrand, Lead Developer and Product Owner Benjamin Larcher said that “As a brand, Cryptovoxels grew extensively and maintained an image as the most user-friendly and accessible metaverse. I have been privileged to be a part of this growth, both as a player and as a developer. Today, Cryptovoxels becomes Voxels. We have been fortunate to work with brilliant minds in the community and in the company, and are grateful as they’ve made us what we are today. I am committed to continuing to enhance the Voxels experience. This includes performance improvements, more accessibility, more features, and most importantly, more value to the community. As a player, I am eager to see Voxels become a better Cryptovoxels.” Kicking Off The Newly Created Voxels While Voxels’ new website won’t be launched until the second half of the year, the rebrand on May 3rd will be celebrated with the launch of VoxCon, the newly created Voxels headquarters in the metaverse, on Andromeda Island. VoxCon will host a show to celebrate, with music, two DJs, and an AMA with Ben Nolan and Benjamin Larcher. Any logged-in attendee who signs the Guestbook on the Giving Tree by the entrance will receive at least a dozen collectibles: wearables for their avatars. Cryptovoxels will officially become Voxels – as indicated by a soon-to-be-revealed new logo – on May 3rd, 12am UTC, 8pm EST (May 4, 12pm NZT). Boilerplate Cryptovoxels – soon to be Voxels – is one of the original metaverse platforms in the blockchain sector and boasts a thriving community of players and landowners. Its user-owned virtual world based on the Ethereum network offers visitors a range of experiences, including art, design, music, and other immersive virtual experiences. cryptovoxels.com | Twitter | Discord | Reddit | Wiki | OpenSea     This is a press release. Readers should do their own due diligence before taking any actions related to the promoted company or any of its affiliates or services. Bitcoin.com is not responsible, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods or services mentioned in the press release.",
      pubDate: "2022-05-03 17:00:48",
      image_url: null,
      source_id: "bitcoin",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
        "saudi arabia",
        "canada",
      ],
      category: ["business"],
      language: "english",
    },
    {
      title: "Why The Sandbox Cryptocurrency Is Up Today",
      link: "https://www.fool.com/investing/2022/05/03/why-the-sandbox-cryptocurrency-is-up-today/?source=iedfolrf0000001",
      keywords: null,
      creator: ["newsfeedback@fool.com (Bram Berkowitz)"],
      video_url: null,
      description:
        "Dubai's digital asset regulator recently announced plans to establish a headquarters in the Sandbox virtual world.",
      content:
        "Over the last 24 hours, the price of The Sandbox (CRYPTO: SAND) cryptocurrency traded nearly 5% higher as of 12:07 p.m. ET today after Dubai's virtual asset regulator said it plans to put a virtual headquarters in the Sandbox metaverse.The Sandbox is a virtual gaming world run on the Ethereum blockchain network, where users can create non-fungible tokens (NFTs) to use in the virtual world.Today, Dubai's Virtual Assets Regulatory Authority (VARA), which seeks to promote Dubai as an international leader for virtual assets and to develop a digital economy in Dubai, announced that it plans to create a metaverse headquarters in the Sandbox.Continue reading",
      pubDate: "2022-05-03 16:44:04",
      image_url: null,
      source_id: "fool",
      country: ["canada"],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "Biggest Movers: ALGO Boosted by FIFA Partnership News, as AVAX and Near Rise Higher",
      link: "https://news.bitcoin.com/biggest-movers-algo-boosted-by-fifa-partnership-news-as-avax-and-near-rise-higher/",
      keywords: [
        "Market Updates",
        "algo",
        "Analysis",
        "FIFA. AVAX",
        "TA",
        "Technical Analysis",
      ],
      creator: ["Eliman Dambell"],
      video_url: null,
      description:
        "ALGO was up by nearly 20% during today’s trading session, following the news of a partnership with football’s governing body, FIFA. NEAR and AVAX were also higher on Tuesday, with AVAX extending a recent bullish run. Algorand (ALGO) ALGO was one of Tuesday’s big gainers, as it was announced that FIFA would be partnering up […]",
      content:
        "ALGO was up by nearly 20% during today’s trading session, following the news of a partnership with football’s governing body, FIFA. NEAR and AVAX were also higher on Tuesday, with AVAX extending a recent bullish run. Algorand (ALGO) ALGO was one of Tuesday’s big gainers, as it was announced that FIFA would be partnering up with Algorand for the upcoming 2022 world cup. The partnership will also see Algorand serve as an official sponsor for next year’s Women’s World Cup in Australia and New Zealand. As a result of the news, ALGO/USD rallied to a peak of $0.7357 earlier in today’s session, and this comes less than 24-hours after trading at a low of $0.5824. Overall, ALGO has now risen for a third straight session, however earlier gains have eased, as prices approached a key resistance point. As of writing this, ALGO is now trading at $0.6652, as bulls have vacated earlier positions in order to solidify their gains. Traders now look to see if a breakout of the $0.7500 level will take place in upcoming sessions, and this could occur should we see a second wave of bulls. Avalanche (AVAX) Similar to ALGO, AVAX was also up for a third consecutive session, as prices attempted to move away from multi-month lows. Last week saw AVAX/USD fall to its lowest level since January 21, however bulls have since reappeared and attempted to spur a price reversal. As a result of this, AVAX hit an intraday peak of $62.28 earlier today, and this comes after prices were at a bottom of $57.16 to start the week. Looking at the chart, this recent rally comes as the 14-day Relative Strength Index continues to hover near a four month low, with bulls likely tempted to buy the current weakness. Should this momentum continue, the next key target will likely be the ceiling of $67.30, where bulls typically dominate. Overall, prices have somewhat slipped from earlier highs, however bulls are likely waiting for the opportune time to strike. Will crypto markets begin to rebound in May, following April’s losses? Let us know your thoughts in the comments.",
      pubDate: "2022-05-03 16:37:15",
      image_url: null,
      source_id: "bitcoin",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
        "saudi arabia",
        "canada",
      ],
      category: ["business"],
      language: "english",
    },
    {
      title: "SEC staffs up to police crypto",
      link: "https://finance.yahoo.com/news/sec-staffs-up-to-police-crypto-163326680.html",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content: null,
      pubDate: "2022-05-03 16:33:26",
      image_url:
        "https://s.yimg.com/os/creatr-uploaded-images/2021-10/da24dc60-287b-11ec-bdfb-1b79f92db31c",
      source_id: "yahoo_sg",
      country: ["singapore"],
      category: ["business"],
      language: "english",
    },
    {
      title: "Critics see risk in 'algorithmic' stablecoins",
      link: "https://techxplore.com/news/2022-05-critics-algorithmic-stablecoins.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "A new type of digital asset called an algorithmic stablecoin is gaining steam among crypto-enthusiasts—and drawing steam among critics, who warn its risks are in plain sight.",
      content: null,
      pubDate: "2022-05-03 15:50:01",
      full_description:
        'A new type of digital asset called an algorithmic stablecoin is gaining steam among crypto-enthusiasts—and drawing steam among critics, who warn its risks are in plain sight. Algorithmic stablecoins use market incentives, controlled by the algorithms that give the cryptocurrency its name, to maintain a stable price against a currency such as the dollar, rather than backing the price with assets like cash or Treasury securities, as other stablecoins do. An algorithmic stablecoin called TerraUSD is now the third-largest stablecoin by market value , according to sites that track such value. It is not backed by dollars but instead uses a complex arbitrage system to maintain the price. According to some experts, that makes it inherently fragile. "The risk is obvious," said Vivian Fang, professor of accounting at the University of Minnesota\'s Carlson School of Management. "If you have $100 to back up 100 tokens, then we know if anything goes terribly wrong then we should be able to get $100. But with the algorithmic stablecoins, you can\'t be so confident." These assets are growing quickly, though they\'re still a small slice of the stablecoin pie, Fang said. "I have my fear about this algorithmic stablecoin because, one, it\'s not backed by a reserve, so I don\'t know where that confidence comes from," Fang said. "Computers cannot always guarantee that the market works." How it works Ryan Clements, assistant law professor at the University of Calgary, said the idea behind algorithmic stablecoins is the same as the more typical variety: to keep the coins at a constant $1. But the way that\'s accomplished is entirely different. "The idea behind an algorithmic stablecoin is that you create an economic incentive with another token in order to maintain its stability," Clements said in an interview. Take the TerraUSD coin, for example. The price of the coin—launched by Singapore-based Terraform Labs and built on its own blockchain—could fluctuate according to how many people want it and how much of it is available. But there are two tokens involved in Terra\'s blockchain: TerraUSD, the stablecoin, and Luna, a so-called governance token. The relationship between the two is meant to keep TerraUSD\'s dollar value stable. If the price of the stablecoin rises above $1 based on investor demand, a Luna holder can swap $1 worth of Luna for that coin, making a profit from the higher price. Conversely, when the coin drops, traders can then make a profit by swapping it for $1 worth of Luna. This reduces the supply, raising its price. Terra originally relied entirely on this two-coin system but has recently added Bitcoin reserves as a backstop to support its algorithmic model. Do Kwon, the founder of Terraform Labs, tweeted in March that TerraUSD would be backed with $10 billion in Bitcoin reserves. At issue is what supports this arbitrage system. The stablecoin is maintained through incentives and supported by demand from within the Terra decentralized finance ecosystem, including an "Anchor Protocol." This is a program that allows users to lend out their coins and get a nearly 20 percent return. Borrowing demand and income from "staking," which rewards coin owners for holding their crypto on the Terra network, generates the interest to the lenders, Clements said. The system is complex. "There are currently no regulated standards for disclosures on DeFi borrowing and staking platforms like Anchor," Clements said. Terra is betting that the use of a "network" of financial applications that use stablecoins and Luna will drive demand, Clements wrote in a paper before Terra began buying Bitcoin. He said that assumption of demand is far from certain. Relying on perpetual interest or motivated actors for sustainability looks like "standing dominos," he said in the paper. "I think this acquisition of Bitcoin supports the contentions in my paper that the arbitrage dynamic alone is insufficient to maintain a peg because why else would Terra have purchased Bitcoin as a reserve if they thought their original model was stable enough?" he said. Terraform Labs didn\'t comment. Regulators and lawmakers Regulators recommended Congress move urgently to install safeguards for stablecoins. Some in Congress have taken heed, drafting legislation that in some cases would require stablecoins to be backed entirely by cash. There could be securities law implications for the financial technology firms designing these types of coins, Securities and Exchange Commission member Hester Peirce, a Republican, said in an interview. Regulators need to bear in mind that room for experimentation, as well as the failures of some ventures, are all right. "The issue is to make sure that you can achieve the regulatory objectives that you\'re trying to achieve while still allowing for this experimentation, so that should be the goal," Peirce said. As a first step, there should be a roundtable on stablecoins involving the public and regulators allowing for a conversation on what protections make sense, including a focus specifically on algorithmic stablecoins, Peirce said. Sen. Cynthia Lummis, R-Wyo., who is working with Sen. Kirsten Gillibrand, D-N.Y., on a digital asset regulation bill, said algorithmic stablecoins shouldn\'t be regulated because "we don\'t fully understand their impact on our financial system." "They are fundamentally different than other stablecoins, mainly because they do not have as strong of a connection to the traditional financial industry," Lummis said in an email. "There may come a time where that need for regulation changes, but we shouldn\'t start with a heavy hand." Senate Banking Chair Sherrod Brown, D-Ohio, is concerned about the lack of consumer protections in digital asset markets, including algorithmic stablecoins, his office said in an email. "He is committed to ensuring that these products don\'t hurt families and our economy," the office said. Stablecoins should have some level of regulation, Mark Cuban, a prominent investor and owner of the Dallas Mavericks NBA franchise, said in an email. In particular, they should be defined as "pegged" or "algorithmic," with each having rules associated with that definition, Cuban said. "Pegged should be defined as a 1 for 1 to whatever asset it is pegged to, whether Dollar, Euro, or Bananas, with limited flexibility in the choice of assets available," Cuban said. "And that peg should be fully transparent and publicly disclosed in detail." Explore further 2022 CQ-Roll Call, Inc., All Rights Reserved. Distributed by Tribune Content Agency, LLC.',
      image_url: "https://scx1.b-cdn.net/csz/news/tmb/2018/1-bitcoin.jpg",
      source_id: "phys",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
      ],
      category: ["technology"],
      language: "english",
    },
  ],
  nextPage: 1,
};

let cryptopage1 = {
  status: "success",
  totalResults: 154,
  results: [
    {
      title:
        "College Students Say Crying In Exams Activates “Cheating” Eye Tracker Software",
      link: "https://futurism.com/college-students-exam-software-cheating-eye-tracking-covid",
      keywords: ["Future Society", "ai", "covid", "dystopia", "software"],
      creator: ["Lonnie Lee Hood"],
      video_url: null,
      description:
        "Professors these days use digital tools to prevent cheating during online exams because so many people are taking class from home or their dorm rooms after the COVID-19 pandemic — and it’s more than a little stressful. The software tracks eye movements and even anxious sobbing during hard tests, one commenter said underneath a TikTok […]",
      content:
        "Colleges and universities are increasingly using digital tools to prevent cheating during online exams, since so many people are taking class from home or their dorm rooms in the era of COVID-19. Needless to say, there are pain points. The programs — angry commenters namechecked software including Pearson VUE and Honorlock — track eye movements and even anxious sobbing during hard tests, one commenter said underneath a TikTok about the controversial trackers. University of Kentucky professor Josef Fruehwald said in his video that he wouldn’t trust professors who use tracking software, prompting 2.3 million views and dozens of comments from stressed out students. “One of my French exams got flagged for cheating because I was crying for the whole thing and my French prof had to watch 45 min of me quietly sobbing,” one user replied. “Since COVID, LSAT uses a proctoring system,” another said. “I was yelled at for having a framed quote from my grandmother on the wall.” No less harrowing, one student said a proctor asked them to change into “something more conservative” during the exam, in the student’s own home. Fruehwald got so many responses he made a Twitter thread about it — whereupon tweeps started sharing even more allegations. “My husband has two classes left for his BFA and one of them is a math class that requires an assessment test before enrolling,” wrote one person. “He should have graduated two years ago but he couldn’t take the friggin math class because THE SOUND OF HIS LAPTOP’S FAN SET OFF THE PROCTOR SOFTWARE.” Eye tracking software isn’t exactly knocking out out of the park in the public opinion lately. One startup is forcing people to watch ads with their eyelids all the way open, and another is offering crypto in exchange for eyeball time. The pandemic has changed a lot about the way society runs, and education seems to be a particularly challenged sector. As teachers quit jobs and students say they’re silently sobbing into eye tracking programs on a computer screen, it’s not hard to see why. More on good decisions it’s never too late to make: Canada Says Astronauts Are No Longer Allowed to Murder Each Other The post College Students Say Crying In Exams Activates “Cheating” Eye Tracker Software appeared first on Futurism.",
      pubDate: "2022-05-03 14:41:21",
      image_url: null,
      source_id: "futurism",
      country: ["united states of america"],
      category: ["technology", "science"],
      language: "english",
    },
    {
      title:
        "The SEC is nearly doubling its crypto enforcement unit as the agency sees retail investors 'bearing the brunt of abuses' in the digital asset sector",
      link: "https://markets.businessinsider.com/news/currencies/sec-boosts-crypto-enforcement-staff-protect-retail-traders-2022-5",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "The Wall Street regulator said it would add 20 positions to its Crypto Assets and Cyber Unit, bringing it to a total of 50.",
      content: null,
      pubDate: "2022-05-03 14:40:28",
      image_url: "https://i.insider.com/627133fffacd1e0019fba945?format=jpeg",
      source_id: "businessinsider_us",
      country: ["united states of america"],
      category: ["top"],
      language: "english",
    },
    {
      title: "Who’s profiting from the Bored Ape digital land sale?",
      link: "https://techcrunch.com/2022/05/03/whos-profiting-from-the-bored-ape-digital-land-sale/",
      keywords: [
        "Blockchain",
        "Cryptocurrency",
        "Finance",
        "Fundings & Exits",
        "Startups",
        "coinbase",
        "EC Blockchain",
        "EC Newsletter",
        "OpenSea",
        "The Exchange",
        "Yuga Labs",
      ],
      creator: ["Alex Wilhelm"],
      video_url: null,
      description:
        "We can see that the Yuga Labs world represents a large portion of the aggregate NFT market as we understand it. Is there a bit too much centralization there?",
      content:
        "The Yuga Labs digital land sale this weekend, a mass-mint of new NFTs that temporarily clogged the Ethereum blockchain, is not just making money for the company behind the new set of images that may figure in a future digital service. Other parties are also doing rather well from the effort. News coverage from the “Otherdeeds” mint points to massive volumes. Decrypt wrote that “OpenSea set a new one-day record for Ethereum NFT trading on Sunday with $476 million,” with the publication adding that “much” of the sum came from Otherdeed activity. Crypto Bahamas signals stronger ties between old and new worlds of finance The rush of activity to collect what many hope will be incredibly valuable pieces of digital land — cartoon images of land, in effect, with slight variations — was immensely profitable for Yuga Labs, which took in an estimated $320 million from the event. The overall pace of activity driven by the mint was in fact so large that it led to a simply massive amount of ether, the token associated with the Ethereum blockchain, being burned. The Exchange explores startups, markets and money. Read it every morning on TechCrunch+ or get The Exchange newsletter every Saturday. Amid all the large numbers, you might think that it’s bullish times for the NFT market. After all, so much activity was driven by a single collection’s expansion project — the Bored Ape crew has managed to turn a hit NFT set into several collections, huge venture checks, and now a license to print money thanks to speculators snapping up its newly offered digital assets. But I wonder. Parsing the top collection list on OpenSea, we can see that the Yuga Labs world represents a large portion of the aggregate NFT market as we understand it. Is there a bit too much centralization in the NFT market?",
      pubDate: "2022-05-03 14:35:48",
      full_description:
        "The Yuga Labs digital land sale this weekend , a mass-mint of new NFTs that temporarily clogged the Ethereum blockchain, is not just making money for the company behind the new set of images that may figure in a future digital service. Other parties are also doing rather well from the effort. News coverage from the “Otherdeeds” mint points to massive volumes. Decrypt wrote that “OpenSea set a new one-day record for Ethereum NFT trading on Sunday with $476 million,” with the publication adding that “much” of the sum came from Otherdeed activity. Crypto Bahamas signals stronger ties between old and new worlds of finance The rush of activity to collect what many hope will be incredibly valuable pieces of digital land — cartoon images of land, in effect, with slight variations — was immensely profitable for Yuga Labs, which took in an estimated $320 million from the event. The overall pace of activity driven by the mint was in fact so large that it led to a simply massive amount of ether , the token associated with the Ethereum blockchain, being burned. The Exchange explores startups, markets and money. Read it every morning on TechCrunch+ or get The Exchange newsletter every Saturday. Amid all the large numbers, you might think that it’s bullish times for the NFT market. After all, so much activity was driven by a single collection’s expansion project — the Bored Ape crew has managed to turn a hit NFT set into several collections, huge venture checks, and now a license to print money thanks to speculators snapping up its newly offered digital assets. But I wonder. Parsing the top collection list on OpenSea, we can see that the Yuga Labs world represents a large portion of the aggregate NFT market as we understand it. Is there a bit too much centralization in the NFT market?",
      image_url: null,
      source_id: "techcrunch",
      country: ["united states of america"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "SEC Nearly Doubles Crypto Enforcement Unit — Regulator Says ‘Crypto Markets Have Exploded in Recent Years’",
      link: "https://news.bitcoin.com/sec-nearly-doubles-crypto-enforcement-unit-regulator-says-crypto-markets-have-exploded-in-recent-years/",
      keywords: [
        "Regulation",
        "Bitcoin",
        "Crypto",
        "Cryptocurrency",
        "Gary Gensler",
        "SEC",
        "sec crypto",
      ],
      creator: ["Kevin Helms"],
      video_url: null,
      description:
        "The U.S. Securities and Exchange Commission (SEC) has nearly doubled the size of its Enforcement Division’s crypto unit. SEC Chairman Gary Gensler said the regulator “will be better equipped to police wrongdoing in the crypto markets while continuing to identify disclosure and controls issues with respect to cybersecurity.” SEC Strengthens Enforcement Division’s Crypto Unit The […]",
      content:
        "The U.S. Securities and Exchange Commission (SEC) has nearly doubled the size of its Enforcement Division’s crypto unit. SEC Chairman Gary Gensler said the regulator “will be better equipped to police wrongdoing in the crypto markets while continuing to identify disclosure and controls issues with respect to cybersecurity.” SEC Strengthens Enforcement Division’s Crypto Unit The U.S. Securities and Exchange Commission announced Tuesday that it has nearly doubled the size of the Division of Enforcement’s unit “responsible for protecting investors in crypto markets and from cyber-related threats.” Citing “the allocation of 20 additional positions to the unit,” the SEC detailed: The newly renamed Crypto Assets and Cyber Unit (formerly known as the Cyber Unit) in the Division of Enforcement will grow to 50 dedicated positions. The unit has brought more than 80 enforcement actions related to fraudulent and unregistered crypto asset offerings and platforms since its creation in 2017, the SEC revealed, noting that they resulted in monetary relief totaling more than $2 billion. SEC Chair Gary Gensler added that the unit “has successfully brought dozens of cases against those seeking to take advantage of investors in crypto markets.” He elaborated: By nearly doubling the size of this key unit, the SEC will be better equipped to police wrongdoing in the crypto markets while continuing to identify disclosure and controls issues with respect to cybersecurity. The expanded crypto unit will focus on securities law violations involving crypto asset offerings, crypto exchanges, lending and staking products, decentralized finance (defi) platforms, non-fungible tokens (NFTs), and stablecoins. Gurbir S. Grewal, director of the SEC’s Division of Enforcement, commented: Crypto markets have exploded in recent years, with retail investors bearing the brunt of abuses in this space. Meanwhile, cyber-related threats continue to pose existential risks to our financial markets and participants. What do you think about the SEC doubling the size of its crypto enforcement unit? Let us know in the comments section below.",
      pubDate: "2022-05-03 14:30:22",
      image_url: null,
      source_id: "bitcoin",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
        "saudi arabia",
        "canada",
      ],
      category: ["business"],
      language: "english",
    },
    {
      title: "Anchor made Spotify the creator platform it is today ",
      link: "https://www.theverge.com/2022/5/3/23054525/spotify-mignano-rogan-facebook-zuckerberg-anchor",
      keywords: null,
      creator: ["Ariel Shapiro"],
      video_url: null,
      description: null,
      content:
        "Hello, audiophiles! I am very excited to bring you my first public edition of Hot Pod. Following the trail blazed by Nick and Ashley, I’ll be in your inbox every Tuesday with scoops, news, analysis, and japes (quality of the latter not guaranteed). And, the closest I will ever get to being in a makeover montage, today I also get to introduce a fresh new look for Hot Pod courtesy of the ace design teams at The Verge and Vox Media. Readers will notice that we have an updated logo and layout with some hotter colors to accompany the Hot Pod name. So, what’s my deal? Like everyone else in modern media, I hopped around a bit before landing at The Verge. I have done stints at MSNBC, Paramount Plus, and, most relevant to you, covering media and entertainment at Forbes. In my former life as a cataloger of capitalist machinations, I was putting together the 2019 list of highest-paid comedians when I started getting tips that Joe Rogan — “you know, the NewsRadio guy” — was making a stupid amount of money from his podcast. So I pitched (and pitched, and pitched) the magazine’s first highest-earning podcaster list. Although nobody was making Kylie money, it was clear that the business was bigger and growing at a faster pace than any of us outside the industry could have anticipated. Cut to: acquisition frenzies, nine-figure licensing deals, and tech giants bending and molding the previously DIY podcasting industry to their will. And somehow after all that, things are no less messy — probably more so. For me, that makes it a dream beat. I look forward to exploring the sources of tension within the industry: suits trying to wring ad dollars out of unwieldy creators, streamers bulking up on podcasting to ease the burden of pricey music royalties, and celebrities starting a podcast because, why not, only to learn it’s a lot more involved than talking into a microphone. Plus, money. Podcasting is projected to be a $2 billion industry by next year, and I intend to figure out where that is flowing. (It can’t all go to Rogan.) I also look forward to hearing from you, dear reader! The good stuff always comes from conversations with people in the industry, rather than press releases. That kind of back and forth makes my job more fun and this newsletter a better read. So feel free to hit me up at ariel.shapiro@theverge.com with tips, recs, and general thoughts. As for shows, I don’t play favorites. Sorry, that’s a lie — I’m Brian Lehrer ride or die. SCOOP: Anchor co-founder Michael Mignano to leave Spotify Another one bites the dust. As I reported yesterday, Spotify’s podcast tech czar Michael Mignano will leave the company at the end of June, the company confirmed. He is the third top podcasting executive at the streamer to depart in the past month. In April, Spotify lost two major figures on the editorial side. First was Lydia Polgreen, a longtime New York Times journalist and former editor-in-chief of HuffPost, who became managing director of Gimlet in 2020. She announced that she will be heading back to the Times as an opinion columnist. Then came the announcement that Courtney Holt, Spotify’s head of studios and video who cut blockbuster deals with Joe Rogan and the Obamas and helped make the streamer a true force in podcasting when Apple was the default, would be leaving as well. Mignano has left a different kind of mark on the company. After co-founding DIY podcast platform Anchor with Nir Zicherman in 2015, Mignano sold the app to Spotify for $150 million in 2019 and came aboard to lead the tech on podcasts, video, and everything not having to do with music. Megaphone, the podcast advertising and publishing platform Spotify bought in 2020, fell under his purview. In 2021, he oversaw the company’s expansion into live audio when it bought Locker Room last year, which has since been rebranded Spotify Live. Mignano’s original app has proven to be his most consequential contribution to Spotify But Mignano’s original app has proven to be his most consequential contribution to Spotify, bulking up the service’s library to 4 million podcasts, up from 1 million podcasts in 2020. The company recently disclosed that 85 percent of its new podcasts are uploaded through Anchor. It’s not that Anchor has created any Joe Rogan or Alex Cooper-esque stars for Spotify (it hasn’t). But the largely unmoderated volume of content it produces has helped shift the company’s perspective on itself: that it is a platform for creators, not a publisher. It’s the argument the company used for defending its hands-off approach to Rogan’s COVID misinformation, a stance that pushed away angry subscribers and folk-rock legends alike. While Spotify attempts to manage that tension, Mignano is stepping away from day-to-day management of creator platforms. He is heading to an early-stage venture capital firm, with details to be announced closer to his departure. Zicherman remains at the company as the head of audiobooks and gated content. Facebook ditches the whole podcasting thing After less than a year in the podcast game, Facebook is out. Starting this week, users will no longer be able to upload new podcasts, and all shows will be removed from the platform starting June 3rd, Bloomberg first reported. The social network announced a slew of audio features last spring, including a central audio hub, shareable clips, and Sound Bites, which allowed users to create short-form audio clips a la TikTok. The hub and Sound Bites will shut down in the next few weeks, the company confirmed. The only real vestige of Facebook’s audio infrastructure that will remain will be its Live Audio Rooms, which will be integrated into Facebook Live. Facebook attempted to go about the shutdown quietly “After a year of learning and iterating on audio-first experiences, we’ve decided to simplify our suite of audio tools on Facebook,” a Meta spokesperson told Hot Pod. “We’re constantly evaluating the features we offer so we can focus on the most meaningful experiences.” Facebook attempted to go about the shutdown quietly. It reportedly informed its audio partners of the decision by email. It will not be informing users of the change and will leave it up to publishers to break the news to their listeners. There is still one Zuckerberg who believes in podcasting, however. On Monday, SiriusXM announced that Mark Zuckerberg’s sister Randi, a radio personality, Web3 advocate, and former Facebook spokesperson, will host a new podcast called Crypto Café With Randi Zuckerberg. Let’s hope it’s as unhinged as her 1980s throwback crypto feminism music video. More big hiring news Because there wasn’t enough news on Monday, iHeartMedia and Freakonomics Radio Network both made big hires. Freakonomics Radio Network has hired NPR podcast head Neal Carruth as its new general manager. He will lead editorial strategy for the network, which has expanded to five regular shows and has a dedicated channel on SiriusXM. Carruth spent 23 years at NPR, where he helped create the morning news podcast Up First and oversaw the development of shows like Planet Money and The NPR Politics Podcast. And iHeartMedia has tapped former Stitcher chief revenue officer Sarah van Mosel to lead its ad-buying service, the iHeart Audience Network. She will also have a hand in podcast partnerships, sales, and publisher development. Van Mosel worked at Stitcher during its acquisition by SiriusXM, after which she oversaw podcast revenue strategy across the company. That’s it for me! Carpe your crypto diem, pals.",
      pubDate: "2022-05-03 14:30:00",
      image_url: null,
      source_id: "theverge",
      country: ["united states of america"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "Foinse, LLC Announces Free Open Bar in NYC for Select .eth Domain Holders",
      link: "https://www.globenewswire.com/news-release/2022/05/03/2434799/0/en/Foinse-LLC-Announces-Free-Open-Bar-in-NYC-for-Select-eth-Domain-Holders.html",
      keywords: [
        "deBanked",
        "Foinse",
        "Sean Murray",
        "decashed",
        "cryptocurrency",
        "crypto networking",
        "NYC networking",
        "free open bar NYC",
      ],
      creator: ["Foinse", " LLC"],
      video_url: null,
      description:
        "deCashed is hosting an exclusive crypto networking event on May 11th from 6-9pm in New York City deCashed is hosting an exclusive crypto networking event on May 11th from 6-9pm in New York City",
      content: null,
      pubDate: "2022-05-03 14:29:00",
      image_url: null,
      source_id: "globenewswire",
      country: ["united states of america"],
      category: ["entertainment"],
      language: "english",
    },
    {
      title: "SEC nearly doubles its crypto enforcement team to police fraud",
      link: "https://www.washingtonpost.com/business/2022/05/03/sec-crypto-enforcement-expansion/?utm_source=rss&utm_medium=referral&utm_campaign=wp_business",
      keywords: null,
      creator: ["By Tory Newmyer"],
      video_url: null,
      description:
        "The top Wall Street regulator is adding manpower to police fraud in the booming cryptocurrency industry.",
      content: null,
      pubDate: "2022-05-03 14:12:55",
      image_url: null,
      source_id: "washingtonpost",
      country: ["united states of america"],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "Crypto exchange Kraken to roll out NFT marketplace with promise to cover transaction fees",
      link: "https://finance.yahoo.com/news/crypto-kraken-nft-marketplace-133945791.html",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content: null,
      pubDate: "2022-05-03 13:39:45",
      image_url:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-05/cf71cb80-cadc-11ec-bbb5-53525817ed59",
      source_id: "yahoo_sg",
      country: ["singapore"],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "Bitcoin, Ethereum Technical Analysis: BTC Below $40,000 Prior to Wednesday’s Fed Meeting",
      link: "https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-btc-below-40000-prior-to-wednesdays-fed-meeting/",
      keywords: ["Market Updates", "Analysis", "Bitcoin", "ETH", "FOMC"],
      creator: ["Eliman Dambell"],
      video_url: null,
      description:
        "BTC continued to trade below $40,000 prior to Wednesday’s FOMC meeting, as crypto markets anticipated a potential rate hike. ETH was also trading close to its long-term support level, with many hoping for an end to current bearish sentiment, after tomorrow’s announcement. Bitcoin BTC was trading below $40,000 on Tuesday, as the world’s largest cryptocurrency […]",
      content:
        "BTC continued to trade below $40,000 prior to Wednesday’s FOMC meeting, as crypto markets anticipated a potential rate hike. ETH was also trading close to its long-term support level, with many hoping for an end to current bearish sentiment, after tomorrow’s announcement. Bitcoin BTC was trading below $40,000 on Tuesday, as the world’s largest cryptocurrency was marginally above its long-term price floor. Earlier today, BTC/USD fell to an intraday low of $38,156.56, which is just over $600 away from its recent support level of $37,500. This comes following a bearish April, which saw BTC fall by nearly $10,000, with some predicting a similar decline in May. Some believe that a move to $30,000 could still occur, and looking at the chart, should the current ceiling on the 14-day RSI hold firm, we may see more declines soon. Providing the RSI continues to weaken, and drops into the 30s, bears could ramp up selling pressure, and look to take bitcoin to a floor of $33,900. So far this year, we’ve seen prices hit that level on two occasions: Jan. 24 and Feb. 24. Ethereum Although still trading below $3,000, ETH was able to move marginally higher on Tuesday, after hitting its price floor to start the week. Following a low of $2,785.52 during Monday’s session, ETH/USD was able to reach a high of $2,874.15 earlier today. Despite trading over 1% higher on Tuesday, ethereum is trading roughly 5% lower in the last seven days, and over $700 lower in the last month. Currently, the 14-day RSI is tracking at 43.40, which has long been a floor, and should this point once again act as such, we could be looking at a potential rebound this week. The obvious price target would be the $2,950 resistance level, however should bulls come out and push the RSI to a ceiling of 40, then we will likely see ETH above $3,000. Will we see market uncertainty clear after the Fed meeting? Leave your thoughts in the comments below.",
      pubDate: "2022-05-03 13:36:31",
      image_url: null,
      source_id: "bitcoin",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
        "saudi arabia",
        "canada",
      ],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "Crypto Bahamas signals stronger ties between old and new worlds of finance",
      link: "https://techcrunch.com/2022/05/03/crypto-bahamas-signals-stronger-ties-between-old-and-new-worlds-of-finance/",
      keywords: [
        "Blockchain",
        "Cryptocurrency",
        "Developer",
        "Finance",
        "Bill Clinton",
        "Cambridge Associates",
        "Caribbean",
        "coinbase",
        "crypto",
        "EC Blockchain",
        "finance",
        "FTX",
        "Jihan Wu",
        "Mike Novogratz",
        "Roham Gharegozlou",
        "sequoia capital",
        "Singapore",
        "Solana",
        "tom brady",
        "Tony Blair",
        "United States",
        "visa",
      ],
      creator: ["Jacquelyn Melinek"],
      video_url: null,
      description:
        "Some Crypto Bahamas attendees were dressed in suits, while others wore T-shirts and casual shorts, juxtaposing the professional financial world against the new digital age.",
      content:
        "Down in the Caribbean, under the palm trees and hot April sun, about 2,000 individuals gathered last week for the Crypto Bahamas event co-hosted by crypto exchange FTX and investor forum SALT. Goodie bags containing everything from sunscreen and sunglasses to T-shirts and boat hats were handed out as the air conditioning blasted at full force. Attendees flew in from as far away as Singapore and popped over from FTX’s headquarters, which is about a 20-minute drive from the conference. Someone joked that it’s between the millionaires in suits and billionaires in cargo shorts. Anthony Scaramucci “We wanted to create a premier conference geared toward institutions and people who will help shape policy and markets and distinguish it from the more retail-focused conferences,” Brett Harrison, president of FTX.US, told TechCrunch. The three days of speakers began with FTX CEO Sam Bankman-Fried and SALT Chairman Anthony Scaramucci (who is also the founder and co-managing partner of SkyBridge Capital) taking the main stage to discuss where crypto stands in its journey. “There’s a lot of different things going on — my generation needs a further, deeper dive into crypto,” Scaramucci, 58, told TechCrunch. “My generation needs to get comfortable with where this space is going.” Some attendees were dressed in suits, while many others wore hoodies or T-shirts and casual shorts or jeans, juxtaposing the professional financial world against the new – and arguably more progressive – digital age.",
      pubDate: "2022-05-03 13:34:28",
      full_description:
        "Down in the Caribbean, under the palm trees and hot April sun, about 2,000 individuals gathered last week for the Crypto Bahamas event co-hosted by crypto exchange FTX and investor forum SALT. Goodie bags containing everything from sunscreen and sunglasses to T-shirts and boat hats were handed out as the air conditioning blasted at full force. Attendees flew in from as far away as Singapore and popped over from FTX’s headquarters, which is about a 20-minute drive from the conference. “We wanted to create a premier conference geared toward institutions and people who will help shape policy and markets and distinguish it from the more retail-focused conferences,” Brett Harrison, president of FTX.US, told TechCrunch. The three days of speakers began with FTX CEO Sam Bankman-Fried and SALT Chairman Anthony Scaramucci (who is also the founder and co-managing partner of SkyBridge Capital) taking the main stage to discuss where crypto stands in its journey. “There’s a lot of different things going on — my generation needs a further, deeper dive into crypto,” Scaramucci, 58, told TechCrunch. “My generation needs to get comfortable with where this space is going.” Some attendees were dressed in suits, while many others wore hoodies or T-shirts and casual shorts or jeans, juxtaposing the professional financial world against the new – and arguably more progressive – digital age.",
      image_url: null,
      source_id: "techcrunch",
      country: ["united states of america"],
      category: ["technology"],
      language: "english",
    },
  ],
  nextPage: 2,
};

let ntfpage1 = {
  status: "success",
  totalResults: 73,
  results: [
    {
      title:
        "NiftyMediaArt announces it will leverage Algorand to Expand the Creator Economy on the world's Greenest Blockchain",
      link: "https://www.prnewswire.com:443/news-releases/niftymediaart-announces-it-will-leverage-algorand-to-expand-the-creator-economy-on-the-worlds-greenest-blockchain-301538183.html",
      keywords: [
        "Blockchain",
        "Computer & Electronics",
        "Art",
        "Entertainment",
        "ENT",
        "CPR",
        "BLN",
        "ART",
      ],
      creator: null,
      video_url: null,
      description:
        "The multimedia NFT company also introduced its first NFT collection created by Academy Award winner Ty Wright at NFT House NYC. WESTMINSTER, Colo., May 3, 2022 /PRNewswire/ -- NiftyMediaArt is excited to announce it will leverage Algorand's green blockchain as the backbone of its NFT...",
      content: null,
      pubDate: "2022-05-03 13:00:00",
      image_url:
        "https://mma.prnewswire.com/media/1229493/Algorand_Logo.jpg?p=original",
      source_id: "cision",
      country: ["singapore"],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "Virtual ‘Playboy mansion’ coming to the metaverse and could rival OnlyFans",
      link: "https://www.thesun.co.uk/tech/18445819/playboy-mansion-metaverse-digital-onlyfans/",
      keywords: ["News Tech", "Tech", "Metaverse", "Playboy"],
      creator: ["Jamie Harris"],
      video_url: null,
      description:
        "THE infamous Playboy Mansion is set to enter the virtual world in a raunchy push to take on OnlyFans. It means naughty metaverse users could soon find themselves exploring the halls once graced by late founder Hugh Hefner. A load of tech experts have been hired by the entertainment brand as part of a big […]",
      content:
        "THE infamous Playboy Mansion is set to enter the virtual world in a raunchy push to take on OnlyFans. It means naughty metaverse users could soon find themselves exploring the halls once graced by late founder Hugh Hefner. GettyHugh Hefner passed away in 2017[/caption] A load of tech experts have been hired by the entertainment brand as part of a big digital reinvention. The company has already jumped on the NFT bandwagon. Almost 12,000 cartoons of Playboy’s iconic bunny, known as Rabbitar, were put up for sale in October last year. A sleepy fairy rabbit has gone for the highest figure so far, at $47,000 / £37,400. Read more about the metaverse HEAD FIRST Mark Zuckerberg making FOUR metaverse headsets including 'laptop for your face' SIXTH SCENTS You'll soon be able to SMELL in the metaverse – including virtual FARTS The NFTs are not only collectibles but also provide access to exclusive offers, giveaways and special metaverse experiences. But the saucy firm is looking to take its digital journey further, after closing down its print magazine for good during the pandemic. It’s created a platform called Centerfold to rival adult subscription site OnlyFans. Rapper Cardi B, drag queen Gigi Goode, model Amanda Cerny and porn star Ana Foxxx have all been enlisted as part of the drive. Most read in News Tech SNAP HAPPY I'm an iPhone expert – hidden camera trick improves your photos instantly PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones “We believe Centerfold can shake up the creator economy just as Playboy Magazine shook up the publishing world,” Playboy told Morning Brew. Front and centre of their move to digital is hiring a Web3 community manager. Web3 is considered the next major iteration of the internet as we know it. In a recent interview with CNBC, Playboy boss Ben Kohn said: “The magazine was one product of the company. “But it was really that rabbit head that’s worth billions and billions of dollars and not replicable. “When you think about what this brand represents, from a marketing perspective, from an awareness perspective, we pretty much have 100% awareness everywhere in the world.” Hefner continued living in the real mansion until his death aged 91 in 2017. Read More on The Sun ON THE SPOT No-nonsense Susanna makes Boris squirm as she grills him over cost of living 'she's been cancelled' Piers savages 'money-grabbing' Meghan in rant about her Netflix axe It was sold for $100million in 2016 under the condition that the Playboy founder could continue to rent it for life. Pictures emerged in 2020 showing the famous party palace undergoing major renovations as its new owner tries to get it back into a liveable state. GettyHefner lived in the Playboy Mansion until his death[/caption] Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
      pubDate: "2022-05-03 12:35:00",
      image_url: null,
      source_id: "thesun",
      country: ["united kingdom"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "Known_Ai Film Festival First to Offer All-Artificial Intelligence-Enhanced Film Slate May 6th",
      link: "https://www.prnewswire.com:443/news-releases/knownai-film-festival-first-to-offer-all-artificial-intelligence-enhanced-film-slate-may-6th-301538064.html",
      keywords: [
        "Blockchain",
        "Computer & Electronics",
        "Art",
        "Entertainment",
        "Film and Motion Picture",
        "Artificial Intelligence",
        "BLN",
        "ENT",
        "FLM",
        "CPR",
        "ART",
        "AFI",
      ],
      creator: null,
      video_url: null,
      description:
        "LONDON, May 3, 2022 /PRNewswire/ -- The Metaverse – Ai Cinematics, a producer of artificial intelligence (Ai) assisted films and theatrical shorts, has created the World's first Ai-specific film festival and awards show. Partnering with the UK-based NFT platform provider, KnownOrigin,...",
      content: null,
      pubDate: "2022-05-03 12:30:00",
      image_url: "https://www.youtube.com/watch?v=CoYKBXk__rs",
      source_id: "cision",
      country: ["singapore"],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "Mark Zuckerberg creating FOUR ‘metaverse headsets’ including a ‘laptop for your face’",
      link: "https://www.thesun.co.uk/tech/18445989/meta-metaverse-headset-quest-cambria-mark-zuckerberg/",
      keywords: ["News Tech", "Tech", "Meta", "Metaverse", "Virtual reality"],
      creator: ["Sean Keach"],
      video_url: null,
      description:
        "MARK Zuckerberg is plotting as many as four new “metaverse headsets” that transport you to his virtual world. That’s according to a new report that claims one pair of “Meta goggles” coming soon will be like a “laptop for your face”. Meta (formerly Facebook) is investing billions of dollars to build the metaverse. It’s a […]",
      content:
        "MARK Zuckerberg is plotting as many as four new “metaverse headsets” that transport you to his virtual world. That’s according to a new report that claims one pair of “Meta goggles” coming soon will be like a “laptop for your face”. MetaVR headsets are one way Zuckerberg hopes users will enter the metaverse[/caption] Meta (formerly Facebook) is investing billions of dollars to build the metaverse. It’s a series of connected virtual worlds where you can live, work. Meta currently sells a Meta Quest 2 (previously Oculus Quest 2) virtual reality headset that lets you access the metaverse. But a new report from The Information claims that Meta is working on four headsets to launch by 2024. Read more on metaverse SIXTH SCENTS You'll soon be able to SMELL in the metaverse – including virtual FARTS ZUCKING HELL Mark Zuckerberg admits he's lost $3BILLION building metaverse Late last year, Meta teased two upcoming metaverse gadgets. One was the Project Cambria VR headset, and another was a pair of Nazare augmented reality glasses. According to the new report, the Project Cambria is due out in September. This is expected to be more powerful than the current Meta Quest 2. Most read in News Tech PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag SPACE JAM Future of ISS hangs in the balance as Russia says it WILL pull OUT over sanctions WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones Unnamed sources say that this headset will cost $799, which is far pricier than the $299 Meta Quest 2. The big advantage is expected to be a significantly higher-resolution display that will make reading small text much easier. The headset is described as being as fast as a “Chromebook for the face” – or effectively, a cheaper laptop. And a follow-up for this device is expected to launch in 2024, codenamed “Funston”. A further two versions of the Meta Quest headset are also named in the report as “Stinson” and “Cardiff”. These are expected to launch in 2023 and 2024 respectively, but their exact features remain unclear. Finally, Meta’s Nazare smart specs are tipped to launch in 2024 alongside another pair of cheaper AR glasses called Hypernova. Nazare is expected to run on its own, while Hypernova is said to rely on a smartphone for processing. That means Meta is working on as many as four virtual reality reality headsets and two pairs of augmented reality glasses for launch within the next two years. Meta mania Tech giant Facebook has poured billions of dollars into building the “metaverse” already – and recently vowed to hire another 10,000 staff to work on the project. Billionaire Zuckerberg previously revealed how you’ll soon be able to live in virtual Facebook houses – an early stage of the metaverse. And the Harvard drop-out previously told how he wants metaverse citizens to be able to make a living inside the virtual world. Zuckerberg is even opening a physical Meta shop to help people enter the metaverse. But some have warned that the metaverse could be dangerous for children and create a sexual abuse nightmare. Despite criticisms, tech mogul Zuck has described the metaverse as “the next version of the internet”. “This isn’t about spending more times in screens. It’s about making the time we already spend better,” said Zuckerberg, 37, speaking about his vision for the metaverse. Speaking to journalists including The Sun, Facebook VR boss Andrew Bosworth described the company’s bold vision. “The metaverse is a set of virtual 3D spaces where you can share immersive experiences with each other when you can’t be together,” Bosworth explained. “What comes after the internet? Instead of looking at a screen, you get to be in the experiences. Read More on The Sun ON THE SPOT No-nonsense Susanna makes Boris squirm as she grills him over cost of living 'she's been cancelled' Piers savages 'money-grabbing' Meghan in rant about her Netflix axe “You don’t have to experience it in VR. Most people initially will experience it on screens they already have.” We’ve asked Meta for comment and will update this story with any response. Meta / OculusMark Zuckerberg (centre) has previously spoken to the world from inside the metaverse[/caption] Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
      pubDate: "2022-05-03 11:54:40",
      image_url: null,
      source_id: "thesun",
      country: ["united kingdom"],
      category: ["technology"],
      language: "english",
    },
    {
      title: "Venture Capital is Investing Actively in NFT, Crypto Projects",
      link: "https://gadgets360.com/cryptocurrency/news/venture-capital-investment-crypto-projects-usd-10-billion-fy22-q1-2942456",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Venture Capital's crypto craze in 2022 has also coincided with a slump in the tech-heavy Nasdaq benchmark, which is down 21 percent.",
      content: null,
      pubDate: "2022-05-03 11:52:32",
      full_description:
        "Venture capital is making a big move on crypto in 2022. Scared of being left in the digital dust, private equity investors are stampeding towards crypto projects — blockchain-based apps and platforms fuelled by cryptocurrencies that are native to the virtual economies of the metaverse and Web3. VC investment in such projects totalled $10 billion (roughly Rs. 76,600 crore) globally in the first quarter of this year, the largest quarterly sum ever and more than double the level seen in the same period a year ago, according to data from Pitchbook. A trickle has become a torrent: the full-year totals for 2019, 2020 and 2021 were $3.7 billion (roughly Rs. 28,300 crore), $5.5 billion (roughly Rs. 42,100 crore) and $28 billion (roughly Rs. 2,14,400 crore). \"You're seeing a lot of VC investment into a lot of protocols because they all believe, as we do, that some of these protocols are the infrastructure of the future,\" said Steve Ehrlich, CEO of crypto brokerage firm Voyager Digital. Such projects, which can range from crypto and NFT exchanges to decentralized finance applications and token issuers, are often known as protocols in reference to the rules embedded in their computer code. The recent action is different from the past when venture investment levels tended to track the price of Bitcoin , albeit with a short delay, according to Alex Thorn, head of firmwide research at blockchain-focused bank Galaxy Digital in New York. Investment levels in crypto have continued to grow during a Bitcoin price slump this year — it's down about 16 percent — as well as during another decline last summer, Thorn notes. \"This decoupling is demonstrative of investors' disbelief that a prolonged bear market in digital assets is forthcoming, as well as the significant amount of dry powder held by funds seeking to allocate to the sector,\" he wrote last week. The VC crypto craze in 2022 has also coincided with a slump in the tech-heavy Nasdaq benchmark, which is down 21 percent. Average crypto fund size Photo Credit: Reuters/ Pitchbook VC meets Web3 The number of M&A deals involving crypto target companies is also ballooning globally as the buzz grows around the metaverse of virtual worlds and the Web3 decentralized online utopia. The have been 73 deals sealed so far in 2022 with a combined deal value of $8.8 billion (roughly Rs. 67,400 crore), according to Dealogic, versus 51 deals worth $6.8 billion (roughly Rs. 52,100 crore) for the whole of last year. The funding rush means crypto firms can afford to be picky, said Mildred Idada, founding partner at blockchain venture fund and accelerator Open Web Collective. \"Founders are saying, 'There's five funds that want to invest in us, which one is going to bring the most value?',\" she said. In many cases, blockchain tech firms are interested in the brand value of backing from established players and increasing integration with the financial system, Idada added. Some firms have been creative in how they raise money. For example Polygon, a platform for developing and scaling applications on the Ethereum blockchain, raised $450 million (roughly Rs. 3,400 crore) in February through a private sale of its cryptocurrency to investors including SoftBank's Vision Fund 2. \"The larger reason for that raise was to get the institutions on our side and increase the visibility of Polygon,\" said co-founder Sandeep Nailwal. Yet the entrance of traditional venture investors accustomed to red-carpet treatment into online developer communities pushing for decentralisation isn't without culture clashes. Many deep-pocketed venture capitalists find themselves forced to woo those developer communities behind potential targets, according to Alexandra Bertomeu-Gilles, risk manager at decentralized finance (DeFi) firm Aave. \"Some founders now ... when they take money from investors, are creating agreements so that the investors don't have an outsized say in the governance of the company, or they can't overrule something that the majority of the rest of the community wants,\" she said. © Thomson Reuters 2022 Cryptocurrency is an unregulated digital currency, not a legal tender and subject to market risks. The information provided in the article is not intended to be and does not constitute financial advice, trading advice or any other advice or recommendation of any sort offered or endorsed by NDTV. NDTV shall not be responsible for any loss arising from any investment based on any perceived recommendation, forecast or any other information contained in the article.",
      image_url:
        "https://i.gadgets360cdn.com/large/Bitcoin_crypto_markets_new_cover_pexels_alesia_kozik_small_1650347297483.jpg",
      source_id: "ndtv",
      country: ["india"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "Three iPhone safety features you MUST turn on today – they could save your life",
      link: "https://www.thesun.co.uk/tech/18444368/iphone-safety-features-emergency-sos-medical-id/",
      keywords: [
        "News Tech",
        "Tech",
        "Apple",
        "iPhone 13",
        "iPhone hacks",
        "Tech How To",
      ],
      creator: ["Sean Keach"],
      video_url: null,
      description:
        "YOUR iPhone has hidden features that could save your life – if you know where to find them. Check your settings now to make sure you’re using Apple’s genius safety tricks. Medical ID Apple has created a feature called Medical ID that quickly displays your key health info. “Medical ID helps emergency responders access your […]",
      content:
        "YOUR iPhone has hidden features that could save your life – if you know where to find them. Check your settings now to make sure you’re using Apple’s genius safety tricks. AppleYour iPhone has a brilliant Emergency SOS feature that you should know about[/caption] Medical ID Apple has created a feature called Medical ID that quickly displays your key health info. “Medical ID helps emergency responders access your critical medical information from the Lock Screen, without needing your passcode,” Apple explained. “They can see information such as allergies and medical conditions, as well as who to contact in case of an emergency.” Read more on iPhone APPLE RUMBLE Apple warning: iPhone prices could RISE this year – will you be affected? SNAP HAPPY I'm an iPhone expert – hidden camera trick improves your photos instantly To set it up, go into the Health app then tap your profile picture in the top-right corner. Under the image, tap Medical ID. Now choose Edit and then activate ‘Show When Locked’. You can also select Share During Emergency Call – although this clever iPhone trick only works in the US. Most read in News Tech PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag SPACE JAM Future of ISS hangs in the balance as Russia says it WILL pull OUT over sanctions WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones Now add all of your information and then tap Done. To see your Medical ID, open the Lock Screen then tap the Emergency button. Now tap the red Medical ID button to see the info. Share ETA Activating Share ETA before journeys is a great way to help you stay safe. ETA stands for estimated time of arrival, which means this feature is all about improving safety on your journeys. Activating it will send your friends or family a real-time tracker for your iPhone location. And they’ll even be able to see your route – revealing if you’ve strayed from the fastest way home. Open your Apple Maps app on an iPhone running iOS 13 or later. Then begin a journey by choosing a destination and tapping Directions, then Go. Now open the menu at the bottom by tapping the arrow in the bottom-right corner. Then select Share ETA, which should be the second option down in the menu. You can then share your location with recent contacts, and even multiple people at the same time. If your chosen recipient isn’t in the recent list, you can tap Contacts to search for a specific person. Then tap on the person to begin sharing. You’ll be able to see an alert at the bottom of the screen reminding you that you’re sharing your location – and how many people you’re live-reporting to. You can tap a person’s icon to stop sharing location with them. Emergency Contacts Setting up Emergency Contacts on your iPhone is a must. The iPhone has an Emergency SOS feature that lets you quickly call emergency services. But you can also add Emergency Contacts. Once an emergency call has ended, your iPhone will then alert these emergency contacts with a text message – although this can be cancelled if you prefer. The iPhone will send your current location to your Emergency Contacts. And the contacts will also receive updates if your location changes. To set Emergency Contacts up, go to the Health app, then tap your profile picture. Tap Medical ID and then hit Edit, then scroll to Emergency Contacts. You can then activate Emergency SOS using the “five click” trick. How to activate Emergency SOS There are two ways to activate the Emergency SOS features. Either press the side or top button five times to pull up the Emergency SOS slider. Alternatively on an iPhone 8 or later, press and hold the side button and one volume button until the slider appears. Then drag the emergency slider to begin the call. You can choose the way you want to call by going into Settings > Emergency SOS. Read More on The Sun ON THE SPOT No-nonsense Susanna makes Boris squirm as she grills him over cost of living 'she's been cancelled' Piers savages 'money-grabbing' Meghan in rant about her Netflix axe “If you continue to hold down the side button and volume button, instead of dragging the slider, a countdown will start and an alert will sound,” Apple explained. “If you hold down the buttons until the countdown has finished, your iPhone will automatically call the emergency services.” AppleMake sure you’ve set up your iPhone’s Medical ID[/caption] Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
      pubDate: "2022-05-03 10:30:45",
      image_url: null,
      source_id: "thesun",
      country: ["united kingdom"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "What is DeFi? : Why the fading of intermediaries could be the future of the financial world",
      link: "https://www.deadlinenews.co.uk/2022/05/03/what-is-defi-why-the-fading-of-intermediaries-could-be-the-future-of-the-financial-world/",
      keywords: ["Uncategorized"],
      creator: ["Guest"],
      video_url: null,
      description:
        "During a cryptocurrency market downturn like today, it’s not that investor can’t find a way to make a profit. On the contrary, in the world of digital assets, around the same time the crypto market fell, it turned out to be the golden minute of ‘DeFi’, or decentralized finance. This word is new. Of course, […] The post <strong>What is DeFi? : Why the fading of intermediaries could be the future of the financial world</strong> appeared first on Deadline News.",
      content:
        "During a cryptocurrency market downturn like today, it’s not that investor can’t find a way to make a profit. On the contrary, in the world of digital assets, around the same time the crypto market fell, it turned out to be the golden minute of ‘DeFi’, or decentralized finance. This word is new. Of course, it may never pass many people’s ears. But at the same time, this word is likely to have caught many netizens in recent times. DeFi stands for Decentralized Finance’ Decentralized Finance. There is much software that can help you find out the actual value of bitcoin. If you are interested in bitcoin trading check ethereum classic advantage and disadvantage What is the distribution centre?  It may be explained from the birth of ‘Bitcoin’, the world’s first digital currency, which is now known as the gold of the crypto world because its value is based on mutual investor valuation. Bitcoin was created as a digital currency without any ‘intermediary’ of transactions because the creators did not trust the policy director. When going to a bank, staff will be waiting for deposits and withdrawals. Therefore, the bank here is the intermediary in the transaction. It serves as a service and guarantees the trust of everyone in the property society. Therefore, cryptocurrency transactions are based on the idea that All intermediaries, whether banks, states or policymakers, cannot intervene, authorize, freeze a transaction, or prohibit us from holding the property. If so, who will verify transactions in the crypto world? The answer is that bitcoin operates on blockchain technology. Technology divides data into blocks and connects them to form a chain. When transactions take place on the blockchain, Transaction data is saved, and a duplicate is shared among everyone on the blockchain, thus being transparent and traceable. However, fraud or alteration of information is complex. In other words, the transaction has the ‘computer’ keeping a code recording every step of the way. The function of bitcoin is to be an exchange currency. So what Bitcoin can only do is transfer assets back and forth between people. But in the digital asset world where technology is the heart, investors and developers believe technology will answer the future of global finance. Blockchain’s ‘more advanced technology is known as a ‘smart contract’, a set of computer instructions or programs that can execute by itself once the terms agreed upon before writing are met. Explain further that assuming Mr A buys property from Mr B on a smart contract, using the standard transfer method, Mr A must check if the money has come in before proceeding with the Transfer of Ownership. But with this technology, the computer verifies that the transaction is confirmed. As a result, ownership will be transferred immediately without any intermediary for transferring, stamping or signing documents. An example of an intelligent contract is ‘Ethereum’. The second most popular after Bitcoin) was created by ‘Vitalik Buterin six years ago. Ethereum is a blockchain technology that allows other developers to use the complex programming space. Alternatively, you can plug in other platforms with Ethereum blockchain to create your business platform. For example, many popular NFT art websites are exciting in this era. It also operates on Ethereum. The exchange is, of course, with Ethereum coins. And on smart contracts, that’s where DeFi was born. Many developers say that if they transfer funds without an intermediary, other transactions do not require an intermediary. Whether a loan currency exchange, various guarantees can only happen if we trust each other in the code. DeFi platforms run on a reliable blockchain-based or executable code (smart contract). Suppose the code indicates that only we, the owner, can deposit and withdraw our funds. It will always be like that. So there is no way the owners of the DeFi platform can steal or withdraw our money. And no need to trust humans. We trust the code. “On the contrary, if the code of the DeFi platform is intentionally written to steal our money, and we didn’t check it well. Then, we can also lose money. So I define the world of DeFi as ‘Code is law’. Here is a description of Kannithi Thong Thanakul, founder of the Facebook page Kim DeFi Daddy and Bitcoin Addict Thailand, which he wrote in an article by Techsauce. One business was born because of the world of crypto financial transactions. Need liquidity, a business that is open to crypto holders to deposit money because if you keep it, the value of the tokens remains the same? But if deposited on the platform, when someone borrows or exchanges money (Which has to pay interest or fees already), people who deposit it will eat such interest or fees as well. The post <strong>What is DeFi? : Why the fading of intermediaries could be the future of the financial world</strong> appeared first on Deadline News.",
      pubDate: "2022-05-03 09:59:18",
      image_url: null,
      source_id: "deadlinenews",
      country: ["united kingdom"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "Global Asset Manager Vaneck Launches Community NFT Project — 1,000 NFTs to Be Airdropped This Week",
      link: "https://news.bitcoin.com/global-asset-manager-vaneck-launches-community-nft-project-1000-nfts-to-be-airdropped-this-week/",
      keywords: [
        "Featured",
        "asset management firm nft",
        "asset manager nft",
        "Bitcoin",
        "Crypto",
        "Cryptocurrency",
        "nft",
        "NFTs",
        "vaneck community nft",
        "vaneck nft",
      ],
      creator: ["Kevin Helms"],
      video_url: null,
      description:
        "Vaneck, a global asset management firm with $85.5 billion in assets, is releasing 1,000 non-fungible tokens (NFTs) this week. “We’ve designed the Vaneck Community NFT to function like a digital membership card,” said Vaneck. NFTs by Asset Management Firm Vaneck, a global asset management firm with approximately $85.5 billion in assets, announced Monday the launch […]",
      content:
        "Vaneck, a global asset management firm with $85.5 billion in assets, is releasing 1,000 non-fungible tokens (NFTs) this week. “We’ve designed the Vaneck Community NFT to function like a digital membership card,” said Vaneck. NFTs by Asset Management Firm Vaneck, a global asset management firm with approximately $85.5 billion in assets, announced Monday the launch of the Vaneck Community NFT (non-fungible token), which the company described as an innovative way for investors to join the Vaneck crypto community and “the first-ever NFT offered by a global asset manager.” The announcement details: This initiative involves the release of 1,000 Vaneck NFTs and is designed to showcase the real-world utility inherent in the NFT structure. The 1,000 Ethereum-based NFTs will be divided into three categories: commons (which will total 750), rare (approximately 230), and legendary (approximately 20), Vaneck noted. Vaneck Community NFTs are being designed in partnership with South Korea-based NFT agency NUMOMO. They will be released this week via airdrop to the first 1,000 people who sign up. Matthew Bartlett, Vaneck Community NFT co-founder, commented: We’ve designed the Vaneck Community NFT to function like a digital membership card, providing NFT holders with exclusive access to a wide range of events, digital asset research and the insights of an inclusive community of digital assets enthusiasts and investors. Vaneck explained: “The primary purpose of the initiative is to bring together like-minded investors who are interested in the cryptocurrency and blockchain space. The secondary purpose of the initiative is to help educate Vaneck clients on the crypto space, while also providing real-world utility.” The asset management firm noted that its NFTs will not be listed on an NFT marketplace, stating on its website: Vaneck NFTs will be airdropped to those who sign up. Vaneck will not be making a profit from the distribution of NFTs nor collecting a creator fee. What do you think about the asset management firm launching NFTs? Let us know in the comments section below.",
      pubDate: "2022-05-03 09:30:10",
      image_url: null,
      source_id: "bitcoin",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
        "saudi arabia",
        "canada",
      ],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "I was hit by a dangerous WhatsApp scam – you need to know the three clues that saved me",
      link: "https://www.thesun.co.uk/tech/18443312/warning-whatsapp-scam-fake-bank/",
      keywords: ["News Tech", "Tech", "Scams and fraud", "Whatsapp"],
      creator: ["Jamie Harris"],
      video_url: null,
      description:
        "A TIKTOKER has revealed her lucky escape from cunning WhatsApp scammers who pretended to be her bank – and her sweet revenge. Amanda Seimetz told followers her “cautionary true story” and how cyber thieves almost convinced her. The 26-year-old Brazilian English teacher was randomly approached on the app by an account claiming to be her […]",
      content:
        "A TIKTOKER has revealed her lucky escape from cunning WhatsApp scammers who pretended to be her bank – and her sweet revenge. Amanda Seimetz told followers her “cautionary true story” and how cyber thieves almost convinced her. @teacherseimetzTeacher Amanda Seimetz said she almost fell for the trick[/caption] The 26-year-old Brazilian English teacher was randomly approached on the app by an account claiming to be her bank. The swindlers made out she had to update details to pay bills and receive money. She instantly thought it was a con trick, so asked them to ring her. Expecting them to give up, Amanda was surprised they actually called, which briefly lulled her into a false sense of security. Read more about WhatsApp WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately “I said, ‘I’m sorry, I don’t really feel comfortable discussing this kind of detailed information with my bank through WhatsApp so could you please contact me through the normal ways you usually contact me,” she explained. “They actually called me which I was honestly surprised by, I didn’t expect them to actually call me. “So they made me think, okay, maybe it’s not a scam. “And then, during the call, the guy says, ‘I need you to click on this link and download something or like update something with your information’. Most read in News Tech PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag SPACE JAM Future of ISS hangs in the balance as Russia says it WILL pull OUT over sanctions WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones ” I was like, ‘No, I’m sorry, this is definitely a scam’.” She then did the right thing, which is to say she’ll approach her bank directly herself, instead of them approaching her. Amanda said her developer boyfriend took a look and realised the link the scammers wanted her to click was “phony”. So he helped her get revenge. “I don’t know how he did it – but he was spamming them with a bunch of things and curse words which I’m not gonna say here but it was very funny and I got my little revenge,” she continued. “But all of this is a cautionary tale, a cautionary true story – don’t give your information. “Never give anybody any information on WhatsApp, especially if it’s a code, an email or never click on the link they send you. “If they are good enough at scamming people, if they’re good enough scam artists like the ones who were trying to scam me, they’re going to make it look very realistic, so never give information – don’t fall for that like I almost did.” WhatsApp scams – what to look out for As Amanda explained, being approached by your bank via WhatsApp is not normal and should be an instant red flag. Read More on The Sun ON THE SPOT No-nonsense Susanna makes Boris squirm as she grills him over cost of living 'she's been cancelled' Piers savages 'money-grabbing' Meghan in rant about her Netflix axe Don’t think that they’re real just because they call you – look for the official number of your bank and call them yourself if you want to be sure. Don’t open any dodgy web links. GettyWhatsApp has more than 2billion users[/caption] Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
      pubDate: "2022-05-03 08:45:12",
      full_description:
        "A TIKTOKER has revealed her lucky escape from cunning WhatsApp scammers who pretended to be her bank - and her sweet revenge. Amanda Seimetz told followers her \"cautionary true story\" and how cyber thieves almost convinced her. The 26-year-old Brazilian English teacher was randomly approached on the app by an account claiming to be her bank . The swindlers made out she had to update details to pay bills and receive money. She instantly thought it was a con trick , so asked them to ring her. Expecting them to give up, Amanda was surprised they actually called, which briefly lulled her into a false sense of security. \"I said, 'I'm sorry, I don't really feel comfortable discussing this kind of detailed information with my bank through WhatsApp so could you please contact me through the normal ways you usually contact me,\" she explained. \"They actually called me which I was honestly surprised by, I didn't expect them to actually call me. \"So they made me think, okay, maybe it's not a scam. \"And then, during the call, the guy says, 'I need you to click on this link and download something or like update something with your information'. \" I was like, 'No, I'm sorry, this is definitely a scam'.\" She then did the right thing, which is to say she'll approach her bank directly herself, instead of them approaching her. Amanda said her developer boyfriend took a look and realised the link the scammers wanted her to click was \"phony\". So he helped her get revenge. \"I don't know how he did it - but he was spamming them with a bunch of things and curse words which I'm not gonna say here but it was very funny and I got my little revenge,\" she continued. \"But all of this is a cautionary tale, a cautionary true story - don't give your information. \"Never give anybody any information on WhatsApp , especially if it's a code, an email or never click on the link they send you. \"If they are good enough at scamming people, if they're good enough scam artists like the ones who were trying to scam me, they're going to make it look very realistic, so never give information - don't fall for that like I almost did.\" As Amanda explained, being approached by your bank via WhatsApp is not normal and should be an instant red flag. Don't think that they're real just because they call you - look for the official number of your bank and call them yourself if you want to be sure. Don't open any dodgy web links. Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... Get all the latest WhatsApp , Instagram , Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
      image_url: null,
      source_id: "thesun",
      country: ["united kingdom"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "I’m an iPhone expert – hidden camera trick improves your photos instantly",
      link: "https://www.thesun.co.uk/tech/18443638/iphone-camera-trick-instagram-story-drawing-post/",
      keywords: [
        "News Tech",
        "Tech",
        "Apple",
        "iPhone 13",
        "iPhone hacks",
        "Tech How To",
      ],
      creator: ["Sean Keach"],
      video_url: null,
      description:
        "YOUR iPhone has a hidden camera trick that can upgrade your Instagram photos in seconds. The clever hack lets you quickly add sketches – and other creations – to an Instagram Story. First, open your Apple Notes app and then sketch a quick design. Then use the selection tool to circle the object you’ve created. […]",
      content:
        "YOUR iPhone has a hidden camera trick that can upgrade your Instagram photos in seconds. The clever hack lets you quickly add sketches – and other creations – to an Instagram Story. Apple / TikTok / @katamogzThere’s a clever Instagram camera trick that works using copy and paste[/caption] First, open your Apple Notes app and then sketch a quick design. Then use the selection tool to circle the object you’ve created. Now hold your finger down and choose copy. Then go to your Instagram Story and create a post. Read more on iPhone SPIT IT OUT You can unlock your iPhone using SPIT - bizarre video shows you how TAP TIP I'm an iPhone expert and use four genius iMessage tricks 'you never knew existed' Open a text box, hold down your finger and then choose the paste option. And your creation will appear on top of the Instagram Story. It means you can use drawing options that might not be available inside Instagram. You could paste other things to your stories too. Most read in News Tech PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag SPACE JAM Future of ISS hangs in the balance as Russia says it WILL pull OUT over sanctions WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones The clever hack was shared by Apple whiz Katarina Mogus, who regularly posts iPhone tricks on TikTok. Her video – posted on the @katamogz channel – has already earned thousands of likes. One fan wrote “Wow!!! Amazing tip.” Another said: “This hack is so useful!” That’s not all There’s another iPhone camera trick that you might be interested in. It’s a way to quickly and easily zoom in and out while shooting video with an Apple smartphone. For the uninitiated, zooming is generally done by pinching or spreading your fingers. But this can be tricky to do sometimes while recording on an iPhone. And it can often leave you with a jittery zoom, which won’t look good in final footage. First open your camera app up. The press and hold on the shutter button to begin recording video. Then simply drag your finger up or down the screen to zoom in or out respectively. This means you can create ultra-smooth zooms with just one hand. You can do this from the photo or video modes in the camera app. Ben’s video has already received hundreds of likes in under a day – and is proving popular with Apple fans. Read More on The Sun 'LIKE FLATMATES' Helen Flanagan reveals she hasn't shared bed with fiance Scott for 7 YEARS TROUBLE & STRIFE Daughter who battered own mum at her wedding with stiletto avoids jail One commented: “Woah! I am deffo gonna be using this!” Better still, the trick also works on Snapchat – so you can shoot and zoom using this hack directly inside the app’s own camera. Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
      pubDate: "2022-05-03 08:29:25",
      full_description:
        "YOUR iPhone has a hidden camera trick that can upgrade your Instagram photos in seconds. The clever hack lets you quickly add sketches – and other creations – to an Instagram Story. First, open your Apple Notes app and then sketch a quick design. Then use the selection tool to circle the object you've created. Now hold your finger down and choose copy. Then go to your Instagram Story and create a post. Open a text box, hold down your finger and then choose the paste option. And your creation will appear on top of the Instagram Story. It means you can use drawing options that might not be available inside Instagram. You could paste other things to your stories too. The clever hack was shared by Apple whiz Katarina Mogus, who regularly posts iPhone tricks on TikTok . Her video – posted on the @katamogz channel – has already earned thousands of likes. One fan wrote \"Wow!!! Amazing tip.\" Another said: \"This hack is so useful!\" There's another iPhone camera trick that you might be interested in. It's a way to quickly and easily zoom in and out while shooting video with an Apple smartphone . For the uninitiated, zooming is generally done by pinching or spreading your fingers. But this can be tricky to do sometimes while recording on an iPhone. And it can often leave you with a jittery zoom, which won't look good in final footage. First open your camera app up. The press and hold on the shutter button to begin recording video. Then simply drag your finger up or down the screen to zoom in or out respectively. This means you can create ultra-smooth zooms with just one hand. You can do this from the photo or video modes in the camera app . Ben's video has already received hundreds of likes in under a day – and is proving popular with Apple fans. One commented: \"Woah! I am deffo gonna be using this!\" Better still, the trick also works on Snapchat – so you can shoot and zoom using this hack directly inside the app's own camera. Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... Get all the latest WhatsApp , Instagram , Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
      image_url: null,
      source_id: "thesun",
      country: ["united kingdom"],
      category: ["technology"],
      language: "english",
    },
  ],
  nextPage: 2,
};

let blockpage0 = {
  status: "success",
  totalResults: 88,
  results: [
    {
      title: "Digital transformation in the banking space",
      link: "https://www.manilatimes.net/2022/05/05/business/top-business/digital-transformation-in-the-banking-space/1842377",
      keywords: ["Business"],
      creator: ["Kay Calpo Lugtu"],
      video_url: null,
      description:
        "I MODERATED a regional virtual event a few weeks ago that gathered executives in the banking space to discuss and share learnings in their organizations' digital transformation journeys. We heard insights from executives in Malaysia and India and were also lucky to have the pleasure of hearing from Philippine bank executives.The banking experience in the country is continuously evolving. While the pandemic drove the behavior to utilize online transactions, the new normal is proving that maintaining this behavior is the more sustainable and efficient route given that people do tend to avoid going to the branch as much as possible, and for good reason. As far as generations are concerned, millennials, Generation Z and all the digital natives out there prefer to use digital banking, hence the rise of the digital banks in the country. The come on: interest rates are higher than usual and one will be really enticed to open an account — all done in five minutes wherever you are. Such a banking experience has never been seen before and it is truly this time that consumers are provided with more options on where to put their money.In working on their digital transformation journey, the esteemed panelists shared their thoughts on these main areas:Architecture. Puneet Gupta, co-founder and managing director of Neofy, shared the importance of having an architecture that is flexible, malleable and nimble. There is a challenge that must be addressed in looking at digital as an afterthought and on top of legacy systems. Such should not be the case and digital architecture must be done ideally from the ground up. In conceptualizing new builds, organizations should consider the core of the digital platform to be \"thinking,\" i.e. smart. This allows them to look into capabilities and leverage technologies available such as cloud, blockchain and artificial intelligence, among others. Digital is all about experiences. In addition, Steven Low, chief risk officer of Prince Bank in Malaysia, echoed the need to maintain efficiency and control in managing digital platforms and portfolios so that the delivery of services to consumers becomes truly seamless and continuous.Customer-centricity. Abet Tinio, chief commercial officer of GOTyme Bank Corp., emphasized that the key in starting the transformation journey was in incorporating a digital customer strategy into the customer journey. Channels must be flexible and reachable in order to provide convenient service. Ease of use becomes truly imperative in this case. Simplicity becomes an important aspect as well in designing an easy-to-use app for customers. This was also reiterated by Union Bank Vice President Jaypee Soliman as he stressed that this secret sauce must always remain relevant and that in creating new products, organizations could assess relevance by how it goes down to the market. Personalization becomes the by-product of a customer-centric approach and this will delight customers further.Leadership. This is undeniably an important aspect when implementing the digital transformation initiative. Taking in the right digital-savvy leaders does not happen overnight. While there are day-to-day tools that may be used, doing digital upgrades whenever possible and available will also enable the organization to reap its benefits, especially in communications. Communicating frequently with stakeholders, alignment and sharing the vision altogether will help make the initiative a successful one. In addition, the culture angle cannot be missed as well and it is important to consider this in planning.Incorporating architecture, customer-centricity and leadership components, among others, in the organization's digital transformation journey will provide better strategic alignment and holistic execution approach.Kay Calpo Lugtu is the chief operating officer of Hungry Workhorse, a digital and culture transformation firm. Her advocacies include food innovation, nation-building and sustainability. The author may be reached at kay.lugtu@hungryworkhorse.com.",
      content: null,
      pubDate: "2022-05-04 16:11:00",
      image_url: null,
      source_id: "manilatimes",
      country: ["philippines"],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "Starbucks to launch NFTs this year offering access to ‘unique experiences and benefits’",
      link: "https://techcrunch.com/2022/05/04/starbucks-to-launch-nfts-this-year-offering-access-to-unique-experiences-and-benefits/",
      keywords: [
        "Cryptocurrency",
        "eCommerce",
        "ceo",
        "China",
        "drinks",
        "food and drink",
        "howard schultz",
        "non-fungible token",
        "retail",
        "Seattle",
        "starbucks",
        "web3",
      ],
      creator: ["Sarah Perez"],
      video_url: null,
      description:
        "Would you like an NFT with your Starbucks latte? The coffee giant this week announced its plans to enter the Web3 space with the launch of its own NFT collection later this year where the individual digital collectibles also provide their owners with access to exclusive content experiences and other benefits, it said. The company […]",
      content:
        "Would you like an NFT with your Starbucks latte? The coffee giant this week announced its plans to enter the Web3 space with the launch of its own NFT collection later this year where the individual digital collectibles also provide their owners with access to exclusive content experiences and other benefits, it said. The company touted its plans to investors on its fiscal Q2 2022 earnings call by explaining how NFTs can help Starbucks extend its brand’s concept of the “third place” — meaning a place between home and work where people can feel a sense of belonging over coffee. “Emerging technologies associated with Web3, and specifically NFTs, now enable this aspiration and allow us to extend who Starbucks has always been at our core,” Starbucks Chief Marketing Officer, Brady Brewer told investors on the call. “We are creating the digital third place. To achieve this, we will broaden our framework of what it means for people to be a member of the Starbucks community, adding new concepts such as ownership and community-based membership models that we see developing in the Web3 space,” he added. The company noted it would build out its NFT community on an “environmentally sustainable” Web3 platform — a decision it said would be more in line with its existing sustainability commitments. The company didn’t indicate what sort of blockchain technology would be involved with its NFT collections, however, but said it was likely to be “multi-chain” or “chain agnostic.” While Starbucks was light on the details as to what its debut set of NFTs would look like, who would design them, or what sort of membership features they’d provide, it did explain in a subsequent blog post it sees the potential to create an accretive business adjacent to its stores where digital collectibles aren’t just bought and sold in a speculative way, but actually double as an access pass providing customers with special experiences and perks. “We plan to start with our first NFT collection, membership, and community later this year, based on coffee art and storytelling. It will come with a host of unique experiences and benefits, worthy of a genesis NFT collection from Starbucks,” the post read. This collection would then serve as the backbone to build out future collections and collaborations in the Web3 community, the company said. While some businesses launch into NFTs without much thought as to how the technology fits into their larger business plans, Starbucks appears to be attempting a different approach. It’s brought in Adam Brotman, the architect of its Mobile Order & Pay system and the Starbucks app, to help serve as a special advisor on the project. Notably, the company said it’s also looking for a new CEO who understands the potential of these new technologies, according to current interim CEO Howard Schultz. The longtime exec had returned to head the coffee chain — now undergoing a unionization push — following the departure of Kevin Johnson, who had served as CEO since 2017. In addition to having a solid understanding of the Starbucks brand and global experience, he said the new CEO should have an understanding of Web3 technologies, as they could help Starbucks better connect with younger people. The NFTs could also provide a way to create incremental traffic and revenue, not only in terms of retail, but also incremental revenue as a result of its own business, the exec added. “I think the next CEO is going to be a creative person who’s going to understand that the equity of the Starbucks brand has real legitimacy and relevance outside of our stores. And the world we’re living in today, our customer base is getting younger, they’re digital natives, and they expect Starbucks to be as relevant outside of our stores as we are inside,” Schultz explained. “….the new CEO, obviously, needs to have an understanding and a grasp and a conviction on the fact that we can play in multiple theaters that could be accretive on their own merit and complementary to our retail business,” he said. Investors didn’t ask many questions related to Starbucks’ new NFT venture, instead focusing on learning more about higher-level business impacts like the unionization efforts, the suspension of share buybacks, and the situation in China, among other things. It’s not surprising that Starbucks would be willing to experiment in the NFT space, though, given the company has made a name for itself as being ahead of the curve when it comes to the embrace new technologies. Its mobile payments system, for example, helped pioneer the idea of using a phone to pay for orders well before Apple Pay and other NFC-based tap-to-pay checkout experiences were broadly available. Today, Mobile Order & Pay is an over $4 billion business, Starbucks said, up 400% in five years and up 20% over last year. Starbucks said it’s now working to roll out enhanced digital tipping so customers could tip even when they weren’t paying with their Starbucks card. The coffee giant topped its Q2 revenue expectations, with $7.64 billion vs. $7.6 billion expected and earnings per share of 59 cents adjusted, in line with expectations — despite losses in China due to new Covid lockdowns. Q2 net income came in at $674.5 million, or 58 cents per share, up from $659.4 million, or 56 cents per share, in the year-ago quarter. The company didn’t offer a forecast for the quarters ahead, citing several factors including China, inflation, and investments in stores and employees.",
      pubDate: "2022-05-04 14:54:50",
      image_url: null,
      source_id: "techcrunch",
      country: ["united states of america"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "Bitcoin Association launches LiteClient Toolbox to enable efficient scaling",
      link: "https://www.prnewswire.com:443/news-releases/bitcoin-association-launches-liteclient-toolbox-to-enable-efficient-scaling-301539742.html",
      keywords: [
        "Blockchain",
        "Computer & Electronics",
        "Financial Technology",
        "CPR",
        "BLN",
        "FNT",
      ],
      creator: null,
      video_url: null,
      description:
        "ZUG, Switzerland, May 4, 2022 /PRNewswire/ -- Today, Bitcoin Association has released the MVP phase of the LiteClient Toolbox, which allows users to easily interact with the Bitcoin SV (BSV) blockchain as it continues to grow and scale. The toolkit was developed by the Bitcoin SV...",
      content: null,
      pubDate: "2022-05-04 14:44:00",
      image_url: null,
      source_id: "cision",
      country: ["singapore"],
      category: ["business"],
      language: "english",
    },
    {
      title: "Tactic wants to reinvent accounting software for the web3 age",
      link: "https://techcrunch.com/2022/05/04/tactic-raises-2-6m-from-founders-fund-ramp-to-make-it-easier-for-businesses-to-transact-in-cryptocurrency/",
      keywords: [
        "Blockchain",
        "Cryptocurrency",
        "Finance",
        "Funding",
        "Fundings & Exits",
        "Recent Funding",
        "Startups",
        "TC",
        "Venture Capital",
        "cryptocurrency",
        "Founders Fund",
        "Ramp",
        "Tactic",
        "venture capital",
      ],
      creator: ["Mary Ann Azevedo"],
      video_url: null,
      description:
        "Tactic, a startup that helps businesses manage — and simplify — cryptocurrency finances, is emerging from stealth today with $2.6 million in seed funding. Founders Fund and finance automation startup Ramp co-led the raise for Tactic, an eight-person outfit based in New York City. Elad Gil and Figma co-founder Dylan Field also participated in the […]",
      content:
        "Tactic, a startup that helps businesses manage — and simplify — cryptocurrency finances, is emerging from stealth today with $2.6 million in seed funding. Founders Fund and finance automation startup Ramp co-led the raise for Tactic, an eight-person outfit based in New York City. Elad Gil and Figma co-founder Dylan Field also participated in the funding. CEO Ann Jaskiw founded Tactic after learning that founders in web3 were handling their accounting in spreadsheets. Existing accounting software providers, she concluded, “were not built to handle crypto transactions.” The core of Tactic’s product, said Jaskiw, is to help a CFO or head of finance answer the question, “Where did the money go?” at the end of a quarter. “Right now for most financial professionals, their audit trail of crypto transactions is a debit transaction from Silicon Valley Bank or whichever bank, into a centralized exchange,” Jaskiw explained. “Like Coinbase tokens leave that central place, and it then becomes a big bit of a question mark. What we’re seeing is people are spending a lot of time in manual spreadsheets, trying to track what transactions happen and trying to calculate their gain and loss. It’s just incredibly cumbersome currently.” Generally, companies interacting with blockchains struggle to make sense of their fragmented activity, according to Jaskiw. “They tend to manage multiple wallets across various blockchains and hold funds in centralized exchanges or self-custody solutions like Gnosis Safe,” she said. This is where Tactic comes in. Tactic says it is tackling the problem of accounting for a business’s cryptocurrency holdings and on-chain activity by aggregating data across disparate sources to give businesses “a full treasury view of their balances and activities.” Its software, Jaskiw said, helps companies automatically categorize transactions and apply accounting logic such as calculating $USD gain/loss and taxable events. Accountants can then reconcile a business’s crypto-subledger to traditional accounting software like QuickBooks. “It doesn’t matter what they’re building, it can be any on-chain transaction,” Jaskiw said. “But there’s just no cohesive audit trail if you’re a crypto company. So if you have a normal bank account, you have all your clean inflows and outflows, and you may have more than one bank account but it’s usually in a single spot — whereas crypto transactions can span a dozen different wallets or products.” After talking to hundreds of companies, Tactic found that decentralized finance or “DeFi” transactions were the most problematic. For example, according to Jaskiw, a single interaction with a smart contract can generate hundreds of “nested transactions,” all of which need to be broken out for accounting purposes. Tactic, she said, has partnered with accounting firms to help interpret accounting guidelines for DeFi-specific activities such as staking, NFT minting and airdrops. Since its 2021 launch, Tactic says it has signed up “dozens” of customers, ranging from early-stage startups to billion-dollar enterprises across industries including NFTs, protocols and DeFi. The company is designing its offering to work with businesses that have “hundreds of thousands” in transaction volumes per month. “This is a pain point for everyone,” Jaskiw told TechCrunch. “The bigger an organization gets, the more complex and worse the problem gets. So that’s where we’re seeing the most excitement about this.” She also believes that a common misconception about the crypto space is that a lot of people are trying to avoid regulation. Tactic, Jaskiw said, has found the opposite to be true. “A lot of companies, the private C corps in the U.S. specifically, are really trying to do the right thing, follow the rules and stay compliant,” she said. “They just right now lack some of the tooling and guidance to be able to do that efficiently.” Image Credits: Tactic John Dempsey, Tactic’s VP of strategy and ops, says that Tactic makes it “easy” for businesses to transact in cryptocurrency, “knowing they can manage their financial activity in a clean, compliant way.” Dempsey is former VP of product at blockchain forensics firm Chainalysis, a blockchain analysis company that last March closed on a $100 million Series D financing, doubling its valuation to over $2 billion. But it’s not just web3 companies struggling with the issue. Crypto is “rapidly penetrating” even non-crypto companies, according to Scott Orn, COO of Kruze Consulting, a CPA firm that serves startups. “Crypto is quickly becoming part of the financial infrastructure of many startups. We are seeing 5% to 10% of our non-crypto SaaS companies engaging in crypto transactions — those are SaaS companies that have nothing to do with crypto,” Orn told TechCrunch. “Two years ago almost no non-crypto companies were using crypto — that’s pretty amazingly fast growth.” Meanwhile, he added, crypto introduces a host of accounting issues that should be solved by software, including booking transactions correctly into the general ledger, recording tax planning information and handling smart contract-generated transactions. Crypto transactions can create taxable events, points out Orn. For example, a company has a contract to get paid a specific number of crypto tokens, and if those tokens increase in value before the company actually gets paid, that could result in “huge revenue spikes.” “This could push a startup into profitability, meaning taxes are owed,” Orn added. “And selling crypto assets that have increased in value creates a taxable gain. We’ve seen both of these scenarios, and keeping track of it all manually is difficult in a high-volume situation.” Founders Fund Principal Leigh Marie Braswell said that Tactic’s product is “already saving crypto accounting teams days each month.” “We believe Tactic has the potential to become a massive player as more companies move into web3,” she added. Eric Glyman, Ramp CEO and co-founder, told TechCrunch that his company invested in Tactic based on the belief that there is a need for “simple, intuitive solutions for businesses transacting with crypto.” “We anticipate that demand will only grow in the future,” he said. Glyman also saw what he described as “strategic alignment” with Ramp’s long-term vision (Note: The company secured its own funding earlier this year at an $8.1 billion valuation). “Tactic is built with the intent to save businesses time and it’s unique in that the platform works for companies that have high transaction volumes,” he said. “And everything we do at Ramp is in support of saving businesses time and money.” Tactic plans to use its new capital to build out its product and team. “We haven’t had to do any external marketing or running of ads,” Jaskiw said. “We’ve been getting a lot of inbound excitement.” 5 crypto tax tools that could save your ass on Tax Day",
      pubDate: "2022-05-04 14:30:57",
      full_description:
        "Tactic , a startup that helps businesses manage — and simplify — cryptocurrency finances, is emerging from stealth today with $2.6 million in seed funding. Founders Fund and finance automation startup Ramp co-led the raise for Tactic, an eight-person outfit based in New York City. Elad Gil and Figma co-founder Dylan Field also participated in the funding. CEO Ann Jaskiw founded Tactic after learning that founders in web3 were handling their accounting in spreadsheets. Existing accounting software providers, she concluded, “were not built to handle crypto transactions.” The core of Tactic’s product, said Jaskiw, is to help a CFO or head of finance answer the question, “Where did the money go?” at the end of a quarter. “Right now for most financial professionals, their audit trail of crypto transactions is a debit transaction from Silicon Valley Bank or whichever bank, into a centralized exchange,” Jaskiw explained. “Like Coinbase tokens leave that central place, and it then becomes a big bit of a question mark. What we’re seeing is people are spending a lot of time in manual spreadsheets, trying to track what transactions happen and trying to calculate their gain and loss. It’s just incredibly cumbersome currently.” Generally, companies interacting with blockchains struggle to make sense of their fragmented activity, according to Jaskiw. “They tend to manage multiple wallets across various blockchains and hold funds in centralized exchanges or self-custody solutions like Gnosis Safe,” she said. This is where Tactic comes in. Tactic says it is tackling the problem of accounting for a business’s cryptocurrency holdings and on-chain activity by aggregating data across disparate sources to give businesses “a full treasury view of their balances and activities.” Its software, Jaskiw said, helps companies automatically categorize transactions and apply accounting logic such as calculating $USD gain/loss and taxable events. Accountants can then reconcile a business’s crypto-subledger to traditional accounting software like QuickBooks. “It doesn’t matter what they’re building, it can be any on-chain transaction,” Jaskiw said. “But there’s just no cohesive audit trail if you’re a crypto company. So if you have a normal bank account, you have all your clean inflows and outflows, and you may have more than one bank account but it’s usually in a single spot — whereas crypto transactions can span a dozen different wallets or products.” After talking to hundreds of companies, Tactic found that decentralized finance or “DeFi” transactions were the most problematic. For example, according to Jaskiw, a single interaction with a smart contract can generate hundreds of “nested transactions,” all of which need to be broken out for accounting purposes. Tactic, she said, has partnered with accounting firms to help interpret accounting guidelines for DeFi-specific activities such as staking, NFT minting and airdrops. Since its 2021 launch, Tactic says it has signed up “dozens” of customers, ranging from early-stage startups to billion-dollar enterprises across industries including NFTs, protocols and DeFi. The company is designing its offering to work with businesses that have “hundreds of thousands” in transaction volumes per month. “This is a pain point for everyone,” Jaskiw told TechCrunch. “The bigger an organization gets, the more complex and worse the problem gets. So that’s where we’re seeing the most excitement about this.” She also believes that a common misconception about the crypto space is that a lot of people are trying to avoid regulation. Tactic, Jaskiw said, has found the opposite to be true. “A lot of companies, the private C corps in the U.S. specifically, are really trying to do the right thing, follow the rules and stay compliant,” she said. “They just right now lack some of the tooling and guidance to be able to do that efficiently.” Image Credits: Tactic John Dempsey, Tactic’s VP of strategy and ops, says that Tactic makes it “easy” for businesses to transact in cryptocurrency, “knowing they can manage their financial activity in a clean, compliant way.” Dempsey is former VP of product at blockchain forensics firm Chainalysis, a blockchain analysis company that last March closed on a $100 million Series D financing, doubling its valuation to over $2 billion. But it’s not just web3 companies struggling with the issue. Crypto is “rapidly penetrating” even non-crypto companies, according to Scott Orn , COO of Kruze Consulting , a CPA firm that serves startups. “Crypto is quickly becoming part of the financial infrastructure of many startups. We are seeing 5% to 10% of our non-crypto SaaS companies engaging in crypto transactions — those are SaaS companies that have nothing to do with crypto,” Orn told TechCrunch. “Two years ago almost no non-crypto companies were using crypto — that’s pretty amazingly fast growth.” Meanwhile, he added, crypto introduces a host of accounting issues that should be solved by software, including booking transactions correctly into the general ledger, recording tax planning information and handling smart contract-generated transactions. Crypto transactions can create taxable events, points out Orn. For example, a company has a contract to get paid a specific number of crypto tokens, and if those tokens increase in value before the company actually gets paid, that could result in “huge revenue spikes.” “This could push a startup into profitability, meaning taxes are owed,” Orn added. “And selling crypto assets that have increased in value creates a taxable gain. We’ve seen both of these scenarios, and keeping track of it all manually is difficult in a high-volume situation.” Founders Fund Principal Leigh Marie Braswell said that Tactic’s product is “already saving crypto accounting teams days each month.” “We believe Tactic has the potential to become a massive player as more companies move into web3,” she added. Eric Glyman, Ramp CEO and co-founder, told TechCrunch that his company invested in Tactic based on the belief that there is a need for “simple, intuitive solutions for businesses transacting with crypto.” “We anticipate that demand will only grow in the future,” he said. Glyman also saw what he described as “strategic alignment” with Ramp’s long-term vision (Note: The company secured its own funding earlier this year at an $8.1 billion valuation ). “Tactic is built with the intent to save businesses time and it’s unique in that the platform works for companies that have high transaction volumes,” he said. “And everything we do at Ramp is in support of saving businesses time and money.” Tactic plans to use its new capital to build out its product and team. “We h aven’t had to do any external marketing or running of ads,” Jaskiw said. “We’ve been getting a lot of inbound excitement.” 5 crypto tax tools that could save your ass on Tax Day",
      image_url: null,
      source_id: "techcrunch",
      country: ["united states of america"],
      category: ["technology"],
      language: "english",
    },
    {
      title: "Quicksave Interactive and gif.games launch Tezotopia Battles",
      link: "https://venturebeat.com/2022/05/04/quicksave-interactive-and-gif-games-launch-tezotopia-battles/",
      keywords: [
        "GamesBeat",
        "PC Gaming",
        "blockchain",
        "category-/Games/Computer & Video Games/Strategy Games",
        "NFT",
        "PC gaming",
        "Tezos",
      ],
      creator: ["Jason McMaster"],
      video_url: null,
      description:
        "QuickSave Interactive and gif.games combine to create Tezotopia Battles - an NFT and blockchain based space adventure",
      content:
        "QuickSave Interactive and gif.games combine to create Tezotopia Battles - an NFT and blockchain based space adventureRead More",
      pubDate: "2022-05-04 14:00:00",
      image_url: null,
      source_id: "venturebeat",
      country: ["united states of america"],
      category: ["technology", "science"],
      language: "english",
    },
    {
      title:
        "SnackClub raises $9M for blockchain gaming in developing countries",
      link: "https://venturebeat.com/2022/05/04/snackclub-raises-9m-for-blockchain-gaming-in-developing-countries/",
      keywords: [
        "GamesBeat",
        "PC Gaming",
        "category-/Business & Industrial/Business Finance",
        "category-/Finance/Investing",
        "DeanBeat News",
        "Jean Ortega",
        "Loud",
        "PC gaming",
        "SnackClub",
      ],
      creator: ["Dean Takahashi"],
      video_url: null,
      description:
        "SnackClub has raised $9 million for blockchain gaming. It is creating a decentralized autonomous organization for gamers.",
      content:
        "SnackClub has raised $9 million for blockchain gaming. It is creating a decentralized autonomous organization for gamers.Read More",
      pubDate: "2022-05-04 14:00:00",
      image_url: null,
      source_id: "venturebeat",
      country: ["united states of america"],
      category: ["technology", "science"],
      language: "english",
    },
    {
      title: "Texas Bitcoin Miners Seek Cheap Power, Land and a Place to Stay",
      link: "https://www.bloombergquint.com/business/texas-bitcoin-miners-seek-cheap-power-land-and-a-place-to-stay",
      keywords: [
        "ALLTOP",
        "BUSINESS",
        "CMD",
        "COS",
        "MARKETS",
        "NORTHAM",
        "TOP",
        "US",
        "WWTOP",
        "WORLD",
        "BASIC",
        "INDUSTRIES",
        "BON",
        "FIN",
        "TEC",
        "GEN",
        "METMNG",
        "INDUSTRIAL",
        "TLS",
        "TMT",
        "CST",
        "REL",
        "TECSVC",
        "Bloomberg",
        "WWTOPAM",
        "WWTOPAS",
        "WWTOPEU",
        "DIGITALCUR",
      ],
      creator: ["Shelly Hagan"],
      video_url: null,
      description:
        "Texas Bitcoin Miners Seek Cheap Power, Land and a Place to Stay",
      content:
        "(Bloomberg) -- Bitcoin mining company Argo Blockchain Plc posted an unusual job opening a few months back: It needed a housekeeper in rural Texas to clean and maintain a five-bedroom home.Continue Reading. Read more on Business News by BloombergQuint.",
      pubDate: "2022-05-04 13:00:20",
      image_url: null,
      source_id: "bloombergquint",
      country: ["india"],
      category: ["business"],
      language: "english",
    },
    {
      title: "Beijing ramps up Covid-19 curbs with Shanghai still in lockdown",
      link: "https://www.irishtimes.com/news/world/asia-pacific/beijing-ramps-up-covid-19-curbs-with-shanghai-still-in-lockdown-1.4869291?localLinksEnabled=false",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Beijing shut scores of metro stations and bus routes and extended Covid-19 curbs on many public venues on Wednesday, focusing efforts to avoid the fate of Shanghai, where millions have been under strict lockdown for more than a month. The central city of Zhengzhou earlier also announced restrictions, joining dozens of big population centres under some form of lockdown as China seeks to eliminate a virus believed to have first emerged in Wuhan city in late 2019. But that uncompromising battle is undermining its growth and hurting international companies invested there, data shows, and has also fuelled rare public outbursts of discontent. With dozens of new cases a day, Beijing is hoping mass testing will find and isolate the virus before it spreads. Twelve of 16 city districts held the second of three rounds of tests this week. The city of 22 million on Wednesday shut more than 60 metro stations, about 15 per cent of the network, and 158 bus routes, service providers said, most in the Chaoyang district at the epicentre of Beijing’s outbreak. Beijing officials also said closures of schools, restaurants, gyms and entertainment venues – as well as some businesses and residential buildings – would extend beyond the April 30th-May 4th Labour Day break, without giving a timeframe. Residents were encouraged to work from home from Thursday, rather than return to offices where possible. Late on Tuesday, Zhengzhou, home to 12.6 million people and a factory of Apple’s iPhone manufacturer Foxconn, announced work-from-home and other Covid curbs for the coming week. Foxconn said on Wednesday it was continuing production there. In Shanghai, meanwhile, a full lockdown remains in force. After more than a month, most people in mainland China’s biggest city still cannot leave their housing compounds. Some have benefited from a tentative easing of restrictions since Sunday, with usually just one member of a household allowed out for a stroll and grocery shopping. Latest data showed Shanghai found 63 new cases outside areas under the strictest curbs, suggesting it has a way to go before reaching the goal of no cases for several days for curbs to ease significantly. The isolation has led to a cat-and-mouse game between censors and social media users striving to keep evidence of the hardship circulating. Some have turned to blockchain technology to protect videos, photos and artwork on the topic from deletion. Such acts of defiance are awkward for the ruling Communist Party in a year in which President Xi Jinping is expected to secure a third leadership term. Authorities say their zero-Covid policy aims to save lives, pointing to the millions killed by the virus outside China, where many countries are adopting a “live with Covid” strategy amid spreading infections. But the policy is hurting domestic consumption and output, disrupting global supply chains and shrinking revenues for international brands including Apple, Gucci parent Kering and Taco Bell-owner Yum China. Numerous factories were shut after Shanghai went into lockdown from March. While some have started reopening, getting workers back and unsnarling supply chains has proven difficult. In the city’s Lingang free trade zone area, 252 firms, or 52 per cent of the total, had resumed work as of May 3rd, the Xinhua news agency reported. Authorities were subsidising the screening of workers for Covid, and providing rent relief, it said. – Reuters",
      content: null,
      pubDate: "2022-05-04 12:50:09",
      image_url:
        "https://www.irishtimes.com/polopoly_fs/1.4869290.1651668604!/image/image.jpg_gen/derivatives/landscape_940/image.jpg",
      source_id: "irishtimes",
      country: ["ireland"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "Masa Finance gets $3.5M pre-seed to build its decentralized credit protocol",
      link: "https://techcrunch.com/2022/05/04/masa-finance-gets-3-5m-pre-seed-to-build-its-decentralized-credit-protocol/",
      keywords: [
        "Blockchain",
        "Finance",
        "Recent Funding",
        "Startups",
        "TC",
        "articles",
        "blockchains",
        "borrowing",
        "ceo",
        "coinbase",
        "Coinbase Ventures",
        "connect",
        "cryptocurrencies",
        "decentralization",
        "Decentralized Finance",
        "ethereum",
        "finance",
        "financial tools",
        "Fintech",
        "General Partner",
        "Goldfinch",
        "kenya",
        "Lateral Capital",
        "lending",
        "Masa Finance",
        "money",
        "Nigeria",
        "Philippines",
        "Pngme",
        "Tanzania",
        "Uganda",
        "Unshackled Ventures",
        "web3",
      ],
      creator: ["Tage Kene-Okafor"],
      video_url: null,
      description:
        "Masa Finance, a hybrid credit protocol and decentralized credit bureau founded by Pngme CEO Brendan Playford in late 2020, has raised $3.5 million in pre-seed funding. According to a statement, the company seeks to “disrupt traditional centralized credit infrastructure by providing individuals, businesses and developers with the tools to access credit” via blockchain technology. The […]",
      content:
        "Masa Finance, a hybrid credit protocol and decentralized credit bureau founded by Pngme CEO Brendan Playford in late 2020, has raised $3.5 million in pre-seed funding. According to a statement, the company seeks to “disrupt traditional centralized credit infrastructure by providing individuals, businesses and developers with the tools to access credit” via blockchain technology. The core principle for blockchain centers on the ownership of assets, including money and financial data. The system somewhat tries to reduce the control of traditional financial institutions such as banks and credit bureaus which have, for decades, collected and stored financial information of the world’s banked people. Decentralized finance’s premise transcends this segment of banked people. Analysts have argued that the technology can reach places not covered by these financial institutions. According to them, blockchain can allow the unbanked to have faster access to services such as lending, borrowing and buying insurance. Yet, there’s still room for collaboration between both worlds, or at least in Masa Finance’s case, even as it targets underserved people. Masa Finance links traditional financial accounts and assets from credit bureau systems and bank data to crypto holdings of users. This connection allows the company to create non-fungible credit reports for users, which they can use to access credit and other financial tools. “The vision that I’ve had for a very long time has been how do credit bureaus evolve and what would they look like in the future,” founder Playford told TechCrunch on a call. “The future of the Masa protocol is to be fully decentralized, turning governance and management into a DAO structure.” Before starting Pngme, an open finance startup that has raised over $18 million in VC funding, Playford actively worked in the blockchain and crypto space for almost a decade. Last February, he revealed that this involvement led him to offer short-term crypto loans to entrepreneurs, particularly in Kenya and Tanzania — and traditional loans via Pngme before pivoting to an open finance play. Masa Finance is the result of these collective ventures. According to Playford, the company is built on three blocks: unlocking financial data (which Pngme does), new sources of capital, and allowing individuals to own their credit history and share it with any lender themselves. The startup’s web3 infrastructure works with over 10,000 off-chain data sources from credit bureaus, bank data aggregators, and alternative data across 78 countries allowing Masa to create on-chain credit scoring for its users. Thus, by aggregating off-chain and on-chain data into a non-fungible credit report, Masa says it gives lenders, and developers access to the tools needed to evaluate borrower risk and launch lending products for individuals and businesses globally. “The world we’re building for is where people’s data are owned themselves. This will connect an off-chain world with centralized data to a new on-chain world that will be growing over the next 10 to 20 years,” remarked Playford, who runs Masa with the chief of staff Dusty Swartz. “So you can connect different data sources to create a credit profile stored on Masa in a decentralized way and have sovereignty over your decentralized credit profile.” Masa says its on-chain data covers 26 integrations, from exchanges to wallets — opening up a 4.95 billion-person market where 67% are credit invisible. These wallets include Binance, Coinbase, FTX, Gemini and Metamask. “The reason why they’re partnering with credit bureaus is it increases coverage for the most number of users. Our mission is to bring the next billion people to DeFi by providing credit bureau reports. And to do that, you have to support existing infrastructure and partner with those currently in the market,” said Playford when asked why Masa chose a hybrid model instead of a full decentralized model.” Playford said Masa is building on Celo and Ethereum, and the platform, which is launching out of beta, has 36,000 people signed up already. Most of its current users are based in sub-Saharan Africa — Nigeria and Kenya in particular. Users from these countries, including Uganda and the Philippines, are responsible for the highest volume of loans received in Goldfinch, a competitor that raised $25 million from a16z and Coinbase Ventures in January. Goldfinch raises $25M from a16z to power its DeFi lending protocol for borrowers in developing countries Masa Finance says it has more than 2,100 node operators on its live testnet, supporting zero-knowledge private transactions and smart contracts. There are also up to 300 developer registrations, with seven projects registered to integrate. The first credit products launching on the protocol include a credit builder loan, uncollateralized loans and an SME line of credit through its app, the company said in a statement. Aided by the new capital, Masa claims to have recorded double-digit growth each month since the start of the year. The round, which has no lead investor, comes from traditional and web3-focused VCs. They include Unshackled Ventures and Lateral Capital (backers of Pngme), executives from GoldenTree Asset Management, Flori Ventures, and GSR. Other participating investors are Decentranet Intersect VC, Peer VC, Alves Ventures and some angel investors in the fintech/blockchain space. “This is Unshackled‘s second time backing Brendan Playford, and it’s no accident,” said Manan Mehta, founding general partner of Unshackled Ventures. “What Masa reflects is a more equitable future that provides access to capital to a global population, mostly overlooked by traditional finance.” What’s next for Masa is to raise a seed round, it said in a statement. The subsequent funding will allow the company to hire more engineers, launch the protocol’s production release, conduct a public token sale, scale node operators, and bring developers and lenders to the platform. African fintech Pngme raises $15M for its financial data infrastructure platform Binance-backed Xend Finance launches DeFi platform for credit unions in Africa",
      pubDate: "2022-05-04 12:26:45",
      full_description:
        "Masa Finance , a hybrid credit protocol and decentralized credit bureau founded by Pngme CEO Brendan Playford in late 2020, has raised $3.5 million in pre-seed funding. According to a statement, the company seeks to “disrupt traditional centralized credit infrastructure by providing individuals, businesses and developers with the tools to access credit” via blockchain technology. The core principle for blockchain centers on the ownership of assets, including money and financial data . The system somewhat tries to reduce the control of traditional financial institutions such as banks and credit bureaus which have, for decades, collected and stored financial information of the world’s banked people. Decentralized finance’s premise transcends this segment of banked people. Analysts have argued that the technology can reach places not covered by these financial institutions . According to them, blockchain can allow the unbanked to have faster access to services such as lending, borrowing and buying insurance. Yet, there’s still room for collaboration between both worlds, or at least in Masa Finance’s case, even as it targets underserved people. Masa Finance links traditional financial accounts and assets from credit bureau systems and bank data to crypto holdings of users. This connection allows the company to create non-fungible credit reports for users, which they can use to access credit and other financial tools. “The vision that I’ve had for a very long time has been how do credit bureaus evolve and what would they look like in the future,” founder Playford told TechCrunch on a call. “ The future of the Masa protocol is to be fully decentralized, turning governance and management into a DAO structure .” Before starting Pngme, an open finance startup that has raised over $18 million in VC funding, Playford actively worked in the blockchain and crypto space for almost a decade. Last February, he revealed that this involvement led him to offer short-term crypto loans to entrepreneurs, particularly in Kenya and Tanzania — and traditional loans via Pngme before pivoting to an open finance play. Masa Finance is the result of these collective ventures. According to Playford, the company i s built on three blocks: unlocking financial data (which Pngme does), new sources of capital, and allowing individuals to own their credit history and share it with any lender themselves. The startup’s web3 infrastructure works with over 10,000 off-chain data sources from credit bureaus, bank data aggregators, and alternative data across 78 countries allowing Masa to create on-chain credit scoring for its users . Thus, by aggregating off-chain and on-chain data into a non-fungible credit report, Masa says it gives lenders, and developers access to the tools needed to evaluate borrower risk and launch lending products for individuals and businesses globally. “The world we’re building for is where people’s data are owned themselves. This will connect an off-chain world with centralized data to a new on-chain world that will be growing over the next 10 to 20 years,” remarked Playford, who runs Masa with the chief of staff Dusty Swartz . “So you can connect different data sources to create a credit profile stored on Masa in a decentralized way and have sovereignty over your decentralized credit profile.” Masa says its on-chain data covers 26 integrations , from exchanges to wallets — opening up a 4.95 billion-person market where 67% are credit invisible. These wallets include Binance, Coinbase, FTX, Gemini and Metamask. “The reason why they’re partnering with credit bureaus is it increases coverage for the most number of users . Our mission is to bring the next billion people to DeFi by providing credit bureau reports. And to do that, you have to support existing infrastructure and partner with those currently in the market,” said Playford when asked why Masa chose a hybrid model instead of a full decentralized model.” Playford said Masa is building on Celo and Ethereum, and the platform, which is launching out of beta, has 36,000 people signed up already. Most of its current users are based in sub-Saharan Africa — Nigeria and Kenya in particular. Users from these countries, including Uganda and the Philippines, are responsible for the highest volume of loans received in Goldfinch, a competitor that raised $25 million from a16z and Coinbase Ventures in January. Goldfinch raises $25M from a16z to power its DeFi lending protocol for borrowers in developing countries Masa Finance says it has more than 2,100 node operators on its live testnet, supporting zero-knowledge private transactions and smart contracts. There are also up to 300 developer registrations, with seven projects registered to integrate. The first credit products launching on the protocol include a credit builder loan, uncollateralized loans and an SME line of credit through its app, the company said in a statement. Aided by the new capital, Masa claims to have recorded double-digit growth each month since the start of the year. The round, which has no lead investor, comes from traditional and web3-focused VCs . They include Unshackled Ventures and Lateral Capital (backers of Pngme), executives from GoldenTree Asset Management, Flori Ventures, and GSR. Other participating investors are Decentranet Intersect VC, Peer VC, Alves Ventures and some angel investors in the fintech/blockchain space. “This is Unshackled ‘s second time backing Brendan Playford, and it’s no accident,” said Manan Mehta, founding general partner of Unshackled Ventures. “ What Masa reflects is a more equitable future that provides access to capital to a global population, mostly overlooked by traditional finance. ” What’s next for Masa is to raise a seed round, it said in a statement. The subsequent funding will allow the company to hire more engineers, launch the protocol’s production release, conduct a public token sale, scale node operators, and bring developers and lenders to the platform. African fintech Pngme raises $15M for its financial data infrastructure platform Binance-backed Xend Finance launches DeFi platform for credit unions in Africa",
      image_url: null,
      source_id: "techcrunch",
      country: ["united states of america"],
      category: ["technology"],
      language: "english",
    },
    {
      title:
        "#1 New York Times Bestselling Author &amp; Personal Finance Luminary Ric Edelman Releases a Fun, Practical Guide to Crypto--the New Frontier in Investments",
      link: "https://www.prnewswire.com:443/news-releases/1-new-york-times-bestselling-author--personal-finance-luminary-ric-edelman-releases-a-fun-practical-guide-to-cryptothe-new-frontier-in-investments-301539475.html",
      keywords: [
        "Computer & Electronics",
        "Retail",
        "Books",
        "Publishing & Information Services",
        "Banking & Financial Services",
        "Cryptocurrency",
        "BKS",
        "PUB",
        "FIN",
        "CPR",
        "REA",
        "ICO",
      ],
      creator: null,
      video_url: null,
      description:
        "THE TRUTH ABOUT CRYPTO: A Practical, Easy-to-Understand Guide to Bitcoin, Blockchain, NFTs, and Other Digital Assets THE TRUTH ABOUT CRYPTO is available for pre-order and releases on May 10, 2022 GREAT FALLS, Va., May 4, 2022 /PRNewswire/ -- Ric Edelman, the #1 New York Times bestselling...",
      content: null,
      pubDate: "2022-05-04 12:26:00",
      full_description:
        'THE TRUTH ABOUT CRYPTO: A Practical, Easy-to-Understand Guide to Bitcoin, Blockchain, NFTs, and Other Digital Assets THE TRUTH ABOUT CRYPTO is available for pre-order and releases on May 10, 2022 GREAT FALLS, Va. , May 4, 2022 /PRNewswire/ -- Ric Edelman, the #1 New York Times bestselling author of 10 books, globally renowned personal finance expert, and host of The Truth About Your Future radio show and podcast, has announced the release of The Truth About Crypto , his latest, must-read guide for achieving investment success today and in the future. In The Truth About Crypto ( May 10 , 2022/ $19.99 paperback), Edelman offers sound advice for investing in digital assets, such as bitcoin and NFT (non-fungible tokens), through his fun, easy-to-understand book, e-book and audio book. He explains how blockchain works, reveals the difference between digital currencies and digital assets, and shows readers how to invest—and avoid scams. Blockchain technology, Edelman writes, is revolutionary—perhaps the most profound innovation for global commerce since the invention of the internet. Bitcoin and other digital assets represent a potentially huge opportunity for investors, but most don\'t know how to navigate this new asset class. "Digital assets are a trend, not a fad. By the end of this decade, 70 percent of the global economy will be digital," said Ric Edelman . "In The Truth About Crypto , I remove the mystery, giving readers the information they need, so they can make well-informed decisions in their best interest." Edelman is widely known for his proven advice and trademark humor, and his new book, The Truth About Crypto is the ultimate guide for anyone who wants to benefit from this new financial landscape. The book has received rave reviews from leaders in both the financial services and crypto communities. "This book provides the most useful explanations about blockchain and digital assets, and how they are profoundly changing our economy. Whether you are an investor, a financial advisor, or a student, The Truth About Crypto will open your eyes and your mind to what this all means for the future." — Caleb Silver, Editor in Chief, Investopedia "In The Truth About Crypto, Ric reduces the complexity, and truly delivers these concepts in a way that\'s interesting and engaging for investors and advisors alike. An outstanding read that I highly recommend!" — Jenny Johnson , President & CEO, Franklin Templeton "Ric Edelman once again uses his visionary insight, practicality, and deep knowledge to give readers an easy-to-understand, comprehensive and practical guide on blockchain and digital assets for financial advisors and investors who are trying to understand the massive investment opportunities available. The Truth About Crypto is a must-read if you want to understand this massively important new investment marketplace."— Anthony Scaramucci , Founder & CEO, Skybridge Capital "The implications of blockchain technology and digital assets are vast and profound. With The Truth About Crypto, Ric has done the nearly impossible—taken a highly complex, often confusing topic and made it accessible and interesting for investors." — Marty Flanagan , President & CEO, Invesco "The Truth About Crypto is a delightful, easy read and I learned much about crypto, blockchain technology, and the exciting possibilities that lay just ahead for commerce and consumers. It\'s educational, enlightening, and motivating. I highly recommend this book!" — Skip Schweiss , Board Chair, Financial Planning Association; CEO, Sierra Investment Management "Investing in crypto is complicated. As Ric tackles it, though, it becomes accessible, actionable, achievable. If you\'ve felt like a blockhead about blockchain, this is the place to begin." — Jean Chatzky , CEO, HerMoney Media, and Bestselling Author "More information is needed around this asset class, and The Truth About Crypto is a good resource for both financial advisors and investors who are seeking more knowledge in this area." — Joseph V. Maugeri , CFP, Managing Director, Certified Financial Planner Board of Standards "Blockchain technology is driving one of the most revolutionary periods in finance since the Renaissance. As we stand upon the threshold of this moment, investors of every type should be paying close attention and reading voraciously. The Truth About Crypto is an excellent place to start." — Downtown Josh Brown , CEO of Ritholtz Wealth, star of CNBC\'s The Halftime Report "Ric has done it again! He\'s taken a wide-ranging and constantly evolving subject and made it relevant and accessible to the widest possible audience. The Truth About Crypto is incredibly clear and very difficult to put down. Ric provides convincing evidence that ignoring crypto is the least rational response to it, and he offers a wealth of advice on how best to embrace this explosive innovation. This book should be required reading—not just for individual investors, but for legislators, regulators, financial advisors, and tax professionals as well."— Gary L. Perlin , Retired CFO, The World Bank & Capital One Financial Corporation About the Author Ric Edelman is a #1 New York Times bestselling author of ten books on personal finance. He\'s among the financial profession\'s most influential people according to Investment Advisor , RIABiz , and InvestmentNews . Barron\'s ranked him the nation\'s #1 Independent Financial Advisor three times and he\'s in Research Magazine\'s Financial Advisor Hall of Fame. Edelman is the industry\'s top financial educator, hosting an award-winning national personal finance radio show for thirty years and producing award-winning specials for public television. He taught personal finance at Georgetown University and is now a Distinguished Lecturer at Rowan University . He and his wife Jean live in Northern Virginia . About the Book Title: The Truth About Crypto: A Practical, Easy-to-Understand Guide to Blockchain, Bitcoin, NFTs, and Other Digital Assets Author: Ric Edelman Publisher: Simon & Schuster Publication date: May 10 , 2022 Length: 400 pages Available in Paperback (ISBN: 9781668002322), eBook (ISBN: 9781668002346), and eAudio (ISBN: 9781797144160). Visit: https://www.simonandschuster.com/books/The-Truth-About-Crypto/Ric-Edelman/9781668002322 About DACFP Ric Edelman founded the Digital Assets Council of Financial Professionals four years ago. Today, DACFP is the premier provider of digital assets education for financial advisors. Its flagship program, the Certificate in Blockchain and Digital Assets, is the first and largest certificate program of its kind—an online self-study program featuring a world-class faculty and 13 Continuing Education credits. Thousands of financial professionals from hundreds of firms in eight countries have already enrolled. Contact for Ric Edelman, TTAYF & DACFP: Ryan Graham , JConnelly, 862-777-4274 [email protected] Contact Simon & Schuster: Rebecca Rozenberg , 908-670-1041 [email protected] Related Links: https://www.simonandschuster.com/authors/Ric-Edelman/19984658 https://dacfp.com/ https://www.thetayf.com/ SOURCE Digital Assets Council of Financial Professionals (DACFP)',
      image_url:
        "https://mma.prnewswire.com/media/1810586/DACFP.jpg?p=original",
      source_id: "cision",
      country: ["singapore"],
      category: ["entertainment"],
      language: "english",
    },
  ],
  nextPage: 1,
};

let blockpage1 = {
  status: "success",
  totalResults: 88,
  results: [
    {
      title:
        "Square Enix selling Marvel game rights to Embracer Group after $200m loss",
      link: "https://www.dexerto.com/gaming/embracer-group-take-marvels-avengers-and-guardians-of-the-galaxy-from-square-enix-1816694/",
      keywords: [
        "Gaming",
        "marvel's avengers",
        "Marvel's Guardians of the Galaxy",
        "Square Enix",
      ],
      creator: ["Sourav Banik"],
      video_url: null,
      description:
        "Embracer Group takeover Marvel's Avengers and Guardians of the Galaxy games from Square Enix despite facing a huge loss. The post Square Enix selling Marvel game rights to Embracer Group after $200m loss appeared first on Dexerto.",
      content:
        "Embracer Group wants to take Marvel’s Avengers and Guardians of the Galaxy games from Square Enix despite facing a loss of $200 million. While Guardians of the Galaxy was more or less successful, Marvel’s Avengers turned out to be a disappointment. It single-handedly caused huge losses for Square Enix due to its poor results in terms of both sales and reviews. Selling off the authorities due to the failure of the Marvel franchise-related games was justified, but fans cannot understand why the studio sold the likes of Tomb Raider and Dues Ex franchises. Square Enix has enough funds to invest in future projects SQUARE ENIX HOLDINGS CO., LTD. enters into an agreement with Embracer Group for the acquisition of Crystal Dynamics, Eidos-Montréal, Square Enix Montréal, and IP. Press Release: https://t.co/ooOYacp4PW pic.twitter.com/2PmQE967gk — Square Enix (@SquareEnix) May 2, 2022 Square Enix is one of the most financially stable companies in the market. They did face a huge loss due to the failure of Marvel’s Avengers and Guardians of the Galaxy, but there is no doubt they have enough funds to invest in their future projects. It needs to be seen how Embracer Group improvises after acquiring some of the most well-known franchises. The aforementioned games were failures in terms of sales numbers. Prioritizing them less seems to be the most likely path taken by the company. Read More: Square Enix sells Tomb Raider, Deus Ex & studios to Embracer Group in $300m deal While the above statement favors Guardians more than Marvel’s Avengers. This is because the former is a single-player title while the latter is a live service game. These games are supposed to get a constant supply of new content, but it’s unclear if Embracer Group is willing to fund that any longer. Franchises like Tomb Raider brought a ton of profits for Square Enix. Selling the rights of such a franchise is still unclear. However, David Gibson did mention the reason for this sell-off. Retweet to scare Square Enix CEOs. https://t.co/khZlHjPWRW — Skill Up (@SkillUpYT) May 4, 2022 The company wanted to invest more in Blockchain Technology. This might be one of the reasons for such an action. Embrace has already started to tease new projects from both developers. It has been confirmed that Crystal Dynamics will continue working on the upcoming Tomb Raider. More details are expected to be revealed as the days go by. Until then, fans will need to wait patiently and enjoy the existing titles from both studios. The post Square Enix selling Marvel game rights to Embracer Group after $200m loss appeared first on Dexerto.",
      pubDate: "2022-05-04 12:07:55",
      full_description:
        "Embracer Group wants to take Marvel’s Avengers and Guardians of the Galaxy games from Square Enix despite facing a loss of $200 million. While Guardians of the Galaxy was more or less successful, Marvel’s Avengers turned out to be a disappointment. It single-handedly caused huge losses for Square Enix due to its poor results in terms of both sales and reviews. Selling off the authorities due to the failure of the Marvel franchise-related games was justified, but fans cannot understand why the studio sold the likes of Tomb Raider and Dues Ex franchises. Square Enix has enough funds to invest in future projects SQUARE ENIX HOLDINGS CO., LTD. enters into an agreement with Embracer Group for the acquisition of Crystal Dynamics, Eidos-Montréal, Square Enix Montréal, and IP. Press Release: https://t.co/ooOYacp4PW pic.twitter.com/2PmQE967gk — Square Enix (@SquareEnix) May 2, 2022 Square Enix is one of the most financially stable companies in the market. They did face a huge loss due to the failure of Marvel’s Avengers and Guardians of the Galaxy, but there is no doubt they have enough funds to invest in their future projects. Advertisement It needs to be seen how Embracer Group improvises after acquiring some of the most well-known franchises. The aforementioned games were failures in terms of sales numbers. Prioritizing them less seems to be the most likely path taken by the company. Read More: Square Enix sells Tomb Raider, Deus Ex & studios to Embracer Group in $300m deal While the above statement favors Guardians more than Marvel’s Avengers. This is because the former is a single-player title while the latter is a live service game. These games are supposed to get a constant supply of new content, but it’s unclear if Embracer Group is willing to fund that any longer. Franchises like Tomb Raider brought a ton of profits for Square Enix. Selling the rights of such a franchise is still unclear. However, David Gibson did mention the reason for this sell-off. Advertisement Retweet to scare Square Enix CEOs. https://t.co/khZlHjPWRW — Skill Up (@SkillUpYT) May 4, 2022 The company wanted to invest more in Blockchain Technology . This might be one of the reasons for such an action. Embrace has already started to tease new projects from both developers. It has been confirmed that Crystal Dynamics will continue working on the upcoming Tomb Raider. More details are expected to be revealed as the days go by. Until then, fans will need to wait patiently and enjoy the existing titles from both studios.",
      image_url: null,
      source_id: "dexerto",
      country: ["singapore"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "Amberdata raises $30M to chase the “unlimited opportunity” of bringing traditional finance into web3",
      link: "https://techcrunch.com/2022/05/04/amberdata-raises-30m-to-chase-the-unlimited-opportunity-to-bring-traditional-finance-into-web3/",
      keywords: [
        "Cryptocurrency",
        "TC",
        "Crypto Economy",
        "cryptocurrencies",
        "cryptography",
        "data",
        "data analytics",
        "finance",
        "financial infrastructure",
        "series B",
      ],
      creator: ["Jacquelyn Melinek"],
      video_url: null,
      description:
        "Amberdata, an institutionally-focused digital asset data provider, has raised $30 million in its Series B, its CEO Shawn Douglass exclusively told TechCrunch. The company is now valued at $330 million and has raised a total of $47 million to date, including its seed round worth $2 million and Series A totaling $15 million. “We decided […]",
      content:
        "Amberdata, an institutionally-focused digital asset data provider, has raised $30 million in its Series B, its CEO Shawn Douglass exclusively told TechCrunch. The company is now valued at $330 million and has raised a total of $47 million to date, including its seed round worth $2 million and Series A totaling $15 million. “We decided to do this raise right now because we grew so much in the past year that there’s an unlimited opportunity to go out and be the infrastructure that enables all institutions to onboard digital assets,” Douglass said. The capital will be used to build new product lines and although Amberdata has existing deals in the US, UK, Latin America, Singapore and Australia, it wants to expand more globally, Douglass said. As its name suggests, Amberdata provides data and insights into blockchain networks, crypto exchanges and decentralized finance for some of the largest financial and digital asset institutions like Citi, Coinbase, Nasdaq, Franklin Templeton, among others. “If you think about this, digital assets will touch every person and business on the planet and transform finance and that requires data and insights to be able to embrace that,” Douglass said. The round was led by Knollwood Investment Advisory and includes investments from Susquehanna International Group, Nasdaq Ventures, NAB Ventures, Chicago Trading Company, Nexo, Coinbase and Innovius. Previous investors who also joined in the round include Citi, Franklin Templeton, Aspenwood Ventures, Rovida Kruptos Assets, and Boldstart Ventures. When Amberdata was first launched in 2017, there were a lot of big expectations about institutions and enterprises entering the space at the time, but they didn’t, Douglass said. “Today, every single bank, every single trading firm on the planet is embracing digital assets and they know if they don’t they’re going to be irrelevant,” Douglass said. “So there is a tsunami of adoption and we help them by accelerating their time to market and to be intelligent and make data driven decisions.” But what’s most important, right now? What’s happening in the market, Eliot Durbin, general partner at Boldstart Ventures and investor in Amberdata’s capital raise, told TechCrunch. “In the next three years, we’ll see more money in this market than [there has been] managed to date because institutions are stepping up and getting ready to do so right now,” Durbin said. Although the exact timeline is debatable, Durbin said he believes the top five banks will hold crypto very soon and will need this institutional data to navigate the market. “Banks are going to get in, big institutions are going to get in and they’re going to need [data] to do their taxes, accounting, treasury management and all the compliance policies they’re building right now,” Durbin said. There’s a paradigm shift occurring across the market that is fundamentally changing the entire fabric of financial services, Douglass argued. Financial products are being spun out to create transparency and openness, while running 24/7 around the clock to be accessible, he said. “This has garnered the attention of every bank, every exchange and every financial service business, every insurance company, every regulator, everyone,” Douglass said. “They all need to have data to make important decisions and we provide that comprehensive view across the entire crypto economy.”",
      pubDate: "2022-05-04 12:00:53",
      full_description:
        "Amberdata , an institutionally-focused digital asset data provider, has raised $30 million in its Series B, its CEO Shawn Douglass exclusively told TechCrunch. The company is now valued at $330 million and has raised a total of $47 million to date, including its seed round worth $2 million and Series A totaling $15 million. “We decided to do this raise right now because we grew so much in the past year that there’s an unlimited opportunity to go out and be the infrastructure that enables all institutions to onboard digital assets,” Douglass said. The capital will be used to build new product lines and although Amberdata has existing deals in the US, UK, Latin America, Singapore and Australia, it wants to expand more globally, Douglass said. As its name suggests, Amberdata provides data and insights into blockchain networks, crypto exchanges and decentralized finance for some of the largest financial and digital asset institutions like Citi, Coinbase, Nasdaq, Franklin Templeton, among others. “If you think about this, digital assets will touch every person and business on the planet and transform finance and that requires data and insights to be able to embrace that,” Douglass said. The round was led by Knollwood Investment Advisory and includes investments from Susquehanna International Group, Nasdaq Ventures, NAB Ventures, Chicago Trading Company, Nexo, Coinbase and Innovius. Previous investors who also joined in the round include Citi, Franklin Templeton, Aspenwood Ventures, Rovida Kruptos Assets, and Boldstart Ventures. When Amberdata was first launched in 2017, there were a lot of big expectations about institutions and enterprises entering the space at the time, but they didn’t, Douglass said. “Today, every single bank, every single trading firm on the planet is embracing digital assets and they know if they don’t they’re going to be irrelevant,” Douglass said. “So there is a tsunami of adoption and we help them by accelerating their time to market and to be intelligent and make data driven decisions.” But what’s most important, right now? What’s happening in the market , Eliot Durbin, general partner at Boldstart Ventures and investor in Amberdata’s capital raise, told TechCrunch. “In the next three years, we’ll see more money in this market than [there has been] managed to date because institutions are stepping up and getting ready to do so right now,” Durbin said. Although the exact timeline is debatable, Durbin said he believes the top five banks will hold crypto very soon and will need this institutional data to navigate the market. “Banks are going to get in, big institutions are going to get in and they’re going to need [data] to do their taxes, accounting, treasury management and all the compliance policies they’re building right now,” Durbin said. There’s a paradigm shift occurring across the market that is fundamentally changing the entire fabric of financial services, Douglass argued. Financial products are being spun out to create transparency and openness, while running 24/7 around the clock to be accessible, he said. “This has garnered the attention of every bank, every exchange and every financial service business, every insurance company, every regulator, everyone,” Douglass said. “They all need to have data to make important decisions and we provide that comprehensive view across the entire crypto economy.”",
      image_url: null,
      source_id: "techcrunch",
      country: ["united states of america"],
      category: ["technology"],
      language: "english",
    },
    {
      title: "Cryptography pioneer Silvio Micali on where crypto is headed",
      link: "https://www.latimes.com/business/story/2022-05-04/milken-conference-silvio-micali-algorand-cryptocurrency-blockchain",
      keywords: null,
      creator: ["Laurence Darmiento"],
      video_url: null,
      description:
        "Silvio Micali's work helped make secure internet communications possible. Now Silvio Micali is focused on making a blockchain that's faster, more secure and less energy-intensive than bitcoin.",
      content:
        "Silvio Micali's work helped make secure internet communications possible. Now Silvio Micali is focused on making a blockchain that's faster, more secure and less energy-intensive than bitcoin.",
      pubDate: "2022-05-04 12:00:23",
      image_url:
        "https://ca-times.brightspotcdn.com/dims4/default/f4cbdc2/2147483647/strip/true/crop/2700x1800+0+0/resize/1500x1000!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdf%2F30%2F1a23d8cd4cbfb83dfe0dc8893956%2Falgorand.jpg",
      source_id: "latimes",
      country: ["united states of america"],
      category: ["business"],
      language: "english",
    },
    {
      title: "Mitzuki Adventures Returns To The Roots Of NFT Collections",
      link: "https://www.outlookindia.com/magazine/outlook-spotlight/mitzuki-adventures-returns-to-the-roots-of-nft-collections-news-194883",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Mitzuki Adventures is an exciting NFT project that will be released soon. It tells the narrative of an orphan who traverses the world in search of answers to her questions. On the Ethereum Blockchain, the initiative is underpinned by its sophisticated AI.",
      content: null,
      pubDate: "2022-05-04 11:59:28",
      image_url: null,
      source_id: "outlookindia",
      country: ["india"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "Shanghai Residents Turn To Blockchain To Record Lockdown Memories",
      link: "https://www.ndtv.com/business/shanghai-residents-turn-to-blockchain-to-record-lockdown-memories-2945249",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Shanghai residents are turning to the blockchain to preserve memories of the city's month-long COVID-19 lockdown",
      content: null,
      pubDate: "2022-05-04 11:27:51",
      full_description:
        "Shanghai residents are turning to NFTs to record their memories during lockdown Shanghai residents are turning to the blockchain to preserve memories of the city's month-long COVID-19 lockdown, minting videos, photos and artworks capturing their ordeal as non-fungible tokens to ensure they can be shared and avoid deletion. Unable to leave their homes for weeks at a time, many of the city's 25 million residents have been unleashing their frustrations online, venting about draconian lockdown curbs and difficulties procuring food, and sharing stories of hardship, such as patients unable to get medical treatment. That has intensified the cat-and-mouse game with Chinese censors, which have vowed to step up policing of the internet and group chats to prevent what they describe as rumours and efforts to stoke discord over seething public frustration with the lockdown. While some people have defiantly continued reposting such content, others are turning to NFT marketplaces like the world's largest, OpenSea, where users can mint content and buy or sell it using cryptocurrencies, attracted in part by the fact that data recorded on the blockchain is unerasable. The height of Shanghai's lockdown minting moment is rooted in April 22, when netizens battled censors overnight to share a six-minute video entitled \"The Voice of April\", a montage of voices recorded over the course of the Shanghai outbreak. As of Monday, 786 different items related to the video can be found on OpenSea, alongside hundreds of other NFTs related to the lockdown in Shanghai. On April 23, a Chinese Twitter user with the handle imFong said in a widely retweeted post, \"I have minted the 'Voice of April' video into an NFT and have frozen its metadata. This video will exist forever on the IPFS,\" referring to the interplanetary file system, a type of distributed network. Like most major foreign social media and news platforms, Twitter is blocked in China, although residents can access it using VPNs. A Shanghai-based programmer told Reuters that he was among those in the city who viewed their effort to keep the video alive as part of a \"people's rebellion”. He has himself minted an NFT based on a screenshot of Shanghai's COVID lockdown map, showing how most of the city has been sealed off from the outside world. \"Being stuck at home because of the outbreak leaves me a lot of time,\" he said, speaking on the condition of anoymity. Other Shanghai content available on OpenSea as NFTs for sale includes Weibo posts containing complaints about the curbs, images from inside quarantine centres, and works of art inspired by life under lockdown. Simon Fong, a 49-year-old freelance designer from Malaysia who has been living in Shanghai for nine years, began creating satirical illustrations on life under lockdown in the style of Mao-era propaganda posters. He started minting them into NFTs, having dabbled in the market since late last year, and has now managed to sell nine of his works for an average price of 0.1 ether ($290) His pieces include scenes dramatising PCR testing, as well as residents' demands for government rations. \"I chose the Mao-era propaganda style for these pieces because some people are saying that the lockdown situation is taking Shanghai backward,\" Mr Fong said. While China has banned cryptocurrency trading, it sees the blockchain as a promising technology and NFTs have been gaining traction in the country, embraced by state media outlets and even tech companies including Ant Group and Tencent Holdings. The protracted lockdown in Shanghai, China's financial hub, is party of Beijing's controversial zero-COVID strategy, a policy which has growing risks to its economy. The COVID outbreak in Shanghai, which began in March, has been China's worst since the early months of the pandemic in 2020. Hundreds of thousands have been infected in the city. (Except for the headline, this story has not been edited by NDTV staff and is published from a syndicated feed.)",
      image_url:
        "https://c.ndtvimg.com/2022-05/dbcmr06o_shanghai1_120x90_04_May_22.jpg",
      source_id: "ndtv",
      country: ["india"],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "Square Enix Sells Major Franchises to Help Fund Blockchain Projects",
      link: "https://gadgets360.com/cryptocurrency/news/square-enix-tomb-raider-embracer-group-blockchain-gaming-crypto-2944883",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Japanese video game publisher Square Enix announced that it would be divesting its popular Tomb Raider franchise for $300 million and investing the proceeds into blockchain, artificial intelligence...",
      content: null,
      pubDate: "2022-05-04 09:48:41",
      full_description:
        "Japanese gaming giant Square Enix has sold $300 million (roughly Rs. 2,295 crore) worth of intellectual property tied to major franchises — Tomb Raider, Legend of Kain, and Deus Ex, alongside a number of its foreign studios with rights to over 50 titles — in favor of funding its blockchain initiatives. The properties will be acquired by Sweden-based Embracer Group, and although the sale agreement has been wrapped up, the sale itself is expected to close between July and September. In a press release , Square Enix stated that the sale would give them the needed resources to advance the company's growth in the digital entertainment industry. Square Enix also revealed that proceeds from the sale would be directed into blockchain technology, AI, and cloud computing. The release read, \"In addition, the transaction enables the launch of new businesses by moving forward with investments in fields including blockchain, AI, and the cloud. The move is based on the policy of business structure optimization that the company set forth under the medium-term business strategy unveiled on May 13, 2021.\" In April, the company's president, Yosuke Matsuda, re-emphasized his pro-blockchain gaming stance in an interview with Yahoo Japan ( spotted and translated by those over at Video Games Chronicle). Matsuda revealed that he believed that gamers would want more than what traditional games currently offer in the future. The executive also noted that Square Enix could, in the future, change its approach toward building games, moving away from building games that are defined 100 percent by the developers to something which gamers can contribute to. It is not the first time the Square Enix Chief has thrown his weight behind the disruptive technology. In a New Year's letter to customers, the executive revealed that he was excited by the possibilities brought on by the new technology and advancements in NFTs and the metaverse. Matsuda has also hinted at the company creating a cryptocurrency. Cryptocurrency is an unregulated digital currency, not a legal tender and subject to market risks. The information provided in the article is not intended to be and does not constitute financial advice, trading advice or any other advice or recommendation of any sort offered or endorsed by NDTV. NDTV shall not be responsible for any loss arising from any investment based on any perceived recommendation, forecast or any other information contained in the article.",
      image_url:
        "https://i.gadgets360cdn.com/large/Square_enix_tomb_raider_official_small_1651656727928.jpg",
      source_id: "ndtv",
      country: ["india"],
      category: ["technology"],
      language: "english",
    },
    {
      title: "Argo Blockchain Borrows $70M From NYDIG to Buy Mining Rigs",
      link: "https://www.coindesk.com/business/2022/05/04/argo-blockchain-borrows-70m-from-nydig-to-buy-mining-rigs/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      keywords: null,
      creator: ["Eliza Gkritsi"],
      video_url: null,
      description:
        "The loan brings Argo's debt to build out its 200 MW Helios facility in Texas to $97.2 million.",
      content: null,
      pubDate: "2022-05-04 09:10:54",
      image_url:
        "https://www.coindesk.com/resizer/iSHx_NqUKCv-Jul_28An8BmK2G0=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SSGODOWNFJBHDEHUQBLHU6LR3Q.JPG",
      source_id: "coindesk",
      country: ["united states of america"],
      category: ["top", "business"],
      language: "english",
    },
    {
      title: "CoinShares Lists Chainlink & Uniswap ETPs on Xetra",
      link: "https://www.headlinesoftoday.com/topic/press-releases/coinshares-lists-chainlink-uniswap-etps-on-xetra.html",
      keywords: ["Press-Releases"],
      creator: ["PR Newswire"],
      video_url: null,
      description:
        "Double launch brings the firm’s total number of ETPs listed to seven so far in 2022. SAINT HELIER, Jersey, May 4, 2022 /PRNewswire/ — CoinShares (“the Company”) (Nasdaq First North Growth Market: CS; US OTCQX: CNSRF), Europe’s largest digital asset investment firm with US$3.3bn* in AUM, today announced the launch of two physically-backed ETPs on […]",
      content:
        "Double launch brings the firm’s total number of ETPs listed to seven so far in 2022. SAINT HELIER, Jersey, May 4, 2022 /PRNewswire/ — CoinShares (“the Company”) (Nasdaq First North Growth Market: CS; US OTCQX: CNSRF), Europe’s largest digital asset investment firm with US$3.3bn* in AUM, today announced the launch of two physically-backed ETPs on Germany’s main market Xetra. CoinShares Physical Chainlink (Ticker: CCHA) and CoinShares Physical Uniswap (Ticker: CIWP) have been built to leverage the Company’s technology platform, Galata, which connects CeFi platforms to digital asset protocols and markets and will allow investors to capture the growth and continued adoption of new form financial services replicated on cryptocurrency rails. CoinShares Physical Chainlink Management Fee: 1.50% p.a. ISIN: GB00BMWB4910 Ticker: CCHA WKN: A3GYRF Chainlink is an oracle protocol designed to bridge real-world information to the smart contracts running on a blockchain platform. While often serving as a key foundational support in general crypto applications, Chainlink is a primary data provider for exchange, lending, and asset management protocols. As a result, Chainlink price feeds are a critical reference point in the integrity of DeFi markets, providing the information necessary to trigger liquidation, mint/burn operations, and settle derivative agreements. CoinShares Physical Uniswap Management Fee: 1.50% p.a. ISIN: GB00BNRRG624 Ticker: CIWP WKN: A3GYRG Launched in 2018, Uniswap is a tenured exchange application that remains the leader in enabling users to transact digital assets within a cryptocurrency platform. Uniswap’s novel design enables users to both trade and provide the liquidity that supports trading activities within its application, creating a two-sided and self-sustaining marketplace whereby liquidity providers share in the revenue generated by traders’ fees. To sum up, Uniswap is a leading alternative to centralized exchanges. Frank Spiteri, CoinShares’ Chief Revenue Officer, commented on the news, “As the digital assets sector evolves, so too does investor interest in protocols beyond Bitcoin and Ethereum. A more thematic approach to digital assets is emerging amongst those most familiar with crypto, and we expect that trend to continue as research and investor education improves. We are excited to add both Chainlink and Uniswap to our lineup of ETPs, allowing investors to access specific key areas of the digital asset ecosystem via cost-effective, listed regulated products.” This double launch brings the total number of ETPs listed by CoinShares so far in 2022 to seven. Last week, the firm announced the launch of CoinShares FTX Physical FTX Token in partnership with leading regulated cryptocurrency exchange FTX, with seed capital of approximately US$40M. *As of 29 April 2022 About the CoinShares Group CoinShares is Europe’s largest digital asset investment firm, managing billions of assets on behalf of a global client base. Our mission is to expand access to the digital asset ecosystem by pioneering new financial products and services that provide investors with trust and transparency when accessing this new asset class. CoinShares is publicly listed on the Nasdaq First North Growth Market under ticker CS and the OTCQX under the ticker CNSRF. To learn more about CoinShares, please visit: www.coinshares.com CoinShares Media ContactJay Morakis+1 646 859 5951press@coinshares.com Certified AdvisorMangold Fondkommission AB+46 (0)8 503 015 50ca@mangold.se Logo – https://mma.prnewswire.com/media/1502126/CoinShares_Logo.jpg Source link The content is by PR Newswire. Headlines of Today Media is not responsible for the content provided or any links related to this content. Headlines of Today Media is not responsible for the correctness, topicality or the quality of the content.",
      pubDate: "2022-05-04 09:03:00",
      image_url: null,
      source_id: "headlinesoftoday",
      country: ["india"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "Finance School Bentley University Now Accepts Cryptocurrency Payments for Tuition",
      link: "https://news.bitcoin.com/finance-school-bentley-university-now-accepts-cryptocurrency-payments-for-tuition/",
      keywords: [
        "News",
        "Alex Kim",
        "Bentley Blockchain Association",
        "Bentley student",
        "Bentley students",
        "Bentley University",
        "Bitcoin",
        "BTC",
        "business and finance",
        "Coinbase",
        "Crypto",
        "crypto payments",
        "E. LaBrent Chrite",
        "ETH",
        "Ethereum",
        "finance school",
        "Higher Education",
        "tuition payments",
        "usd coin",
        "USDC",
      ],
      creator: ["Jamie Redman"],
      video_url: null,
      description:
        "Bentley University, the private university located in Waltham, Massachusetts, has revealed it now accepts digital currencies for tuition payments. Bentley University’s president explained that the school has been “at the forefront in preparing business leaders” and further remarked that the faculty is “proud to embrace” the same technology its students are learning about today. Bentley […]",
      content:
        "Bentley University, the private university located in Waltham, Massachusetts, has revealed it now accepts digital currencies for tuition payments. Bentley University’s president explained that the school has been “at the forefront in preparing business leaders” and further remarked that the faculty is “proud to embrace” the same technology its students are learning about today. Bentley University Partners With Coinbase to Accept 3 Digital Currencies According to an announcement stemming from Bentley’s newsroom, the school of accounting and finance has partnered with Coinbase in order to give students and their families the ability to pay tuition with crypto. Bentley will accept three crypto assets including bitcoin (BTC), ethereum (ETH), and usd coin (USDC). Bentley president E. LaBrent Chrite explained that the school founded 105 years ago is embracing a technology that may shift the traditional financial landscape entirely. “Bentley University is at the forefront in preparing business leaders with the skills and knowledge to succeed in the changing world economy,” the university president said in a statement. “We’re proud to embrace this technology that our students are learning about, which will soon transform the global business landscape they’re about to enter.” Bentley Scholar Says Students ‘Have a Real Interest in Knowing More About Blockchain’ Universities all around the world accept cryptocurrencies including the University of Cumbria in Carlisle, England, the Financial Business School in Paris, France, and the Innovation and Entrepreneurship Business School in Spain. Moreover, Lucerne University of Applied Sciences, Switzerland accepts crypto. In addition to Bentley University in Massachusetts, in the United States King’s College in Wilkes-Barre, Pennsylvania, accepts bitcoin as well, and the University of Pennsylvania accepts cryptocurrencies. Furthermore, the University of California, Berkeley (UC Berkeley) accepts crypto asset payments. The Bentley announcement further highlighted a student named Alex Kim who launched the Bentley Blockchain Association. “Students have a real interest in knowing more about blockchain, decentralized finance, and cryptocurrency investments,” said Kim in the press statement. “These technologies are influencing the industries where they will be working,” the Bentley student added. What do you think about the finance school Bentley University accepting cryptocurrency payments? Let us know what you think about this subject in the comments section below.",
      pubDate: "2022-05-04 08:30:57",
      full_description:
        "Finance School Bentley University Now Accepts Cryptocurrency Payments for Tuition Bentley University, the private university located in Waltham, Massachusetts, has revealed it now accepts digital currencies for tuition payments. Bentley University’s president explained that the school has been “at the forefront in preparing business leaders” and further remarked that the faculty is “proud to embrace” the same technology its students are learning about today. Bentley University Partners With Coinbase to Accept 3 Digital Currencies According to an announcement stemming from Bentley’s newsroom, the school of accounting and finance has partnered with Coinbase in order to give students and their families the ability to pay tuition with crypto. Bentley will accept three crypto assets including bitcoin ( BTC ), ethereum ( ETH ), and usd coin (USDC). Bentley president E. LaBrent Chrite explained that the school founded 105 years ago is embracing a technology that may shift the traditional financial landscape entirely. “Bentley University is at the forefront in preparing business leaders with the skills and knowledge to succeed in the changing world economy,” the university president said in a statement. “We’re proud to embrace this technology that our students are learning about, which will soon transform the global business landscape they’re about to enter.” Bentley Scholar Says Students ‘Have a Real Interest in Knowing More About Blockchain’ Universities all around the world accept cryptocurrencies including the University of Cumbria in Carlisle, England, the Financial Business School in Paris, France, and the Innovation and Entrepreneurship Business School in Spain. Moreover, Lucerne University of Applied Sciences, Switzerland accepts crypto. In addition to Bentley University in Massachusetts, in the United States King’s College in Wilkes-Barre, Pennsylvania, accepts bitcoin as well, and the University of Pennsylvania accepts cryptocurrencies. Furthermore, the University of California, Berkeley (UC Berkeley) accepts crypto asset payments. The Bentley announcement further highlighted a student named Alex Kim who launched the Bentley Blockchain Association . “Students have a real interest in knowing more about blockchain, decentralized finance, and cryptocurrency investments,” said Kim in the press statement. “These technologies are influencing the industries where they will be working,” the Bentley student added. Tags in this story Alex Kim , Bentley Blockchain Association , Bentley student , Bentley students , Bentley University , Bitcoin , BTC , business and finance , Coinbase , Crypto , crypto payments , E. LaBrent Chrite , ETH , Ethereum , finance school , Higher Education , tuition payments , usd coin , USDC What do you think about the finance school Bentley University accepting cryptocurrency payments? Let us know what you think about this subject in the comments section below. Jamie Redman Jamie Redman is the News Lead at Bitcoin.com News and a financial tech journalist living in Florida. Redman has been an active member of the cryptocurrency community since 2011. He has a passion for Bitcoin, open-source code, and decentralized applications. Since September 2015, Redman has written more than 5,000 articles for Bitcoin.com News about the disruptive protocols emerging today. Report: 100,000 Cubans Are Using Cryptocurrencies to Bypass Financial Sanctions NEWS | 11 hours ago Weiss Ratings Report Claims Crypto-Backed Home Loans Spell Trouble NEWS | 12 hours ago Image Credits : Shutterstock, Pixabay, Wiki Commons Previous article Pakistan Forms Committees to Decide Whether Crypto Should Be Legalized or Banned Show comments More Popular News In Case You Missed It Oman to Incorporate Real Estate Tokenization in Virtual Assets Regulatory Framework Real estate tokenization is set to be incorporated into Oman Capital Markets Authority (OCMA)'s virtual asset regulatory framework. According to an advisor with the authority, the tokenizing of real estate will open investment opportunities for local and foreign investors. Real ... read more. UAE Airliner Emirates to Launch NFTs and Experiences in the Metaverse Goldman Predicts US Recession Odds at 35% in 2 Years, John Mauldin Wouldn't Be Surprised if Stocks Fell 40% Privacy-Centric Monero Plans for July Hard Fork, Plans Include Ring Signature, Bulletproof Upgrade Interest in Real Estate Investments in Spain Grew 400%, With Some Using Crypto and Stocks as Payment Method",
      image_url: null,
      source_id: "bitcoin",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
        "singapore",
        "saudi arabia",
        "canada",
      ],
      category: ["business"],
      language: "english",
    },
    {
      title:
        "How do online casinos in India use technology to increase the security of players?",
      link: "https://www.thehansindia.com/technology/tech-news/how-do-online-casinos-in-india-use-technology-to-increase-the-security-of-players-740996",
      keywords: ["Tech,Tech News"],
      creator: ["The Hans India"],
      video_url: null,
      description:
        "Indian casino industry from land-based to online was a plausible success only because the gaming industry embraced digital technology on the dot",
      content:
        "For representational purpose onlyFor representational purpose onlyThe gradual shift of the Indian casino industry from land-based to online was a plausible success only because the gaming industry embraced digital technology on the dot. It can be presumed that it is due to consistent technological advancements in the area of gameplay & security, that online casinos enjoy the stature that they do. We cannot turn a blind eye to the time when online casinos in India started gaining popularity and also gave rise to fraudulent activities. To resolve this extremity, highly reputable online casinos in India make use of various technologies to ensure security. In this article, we will focus on those modern security measures along with some tips on how to identify rogue online casinos. 1. Secure Socket Layer (SSL) Encryption The first and foremost way in which online casinos extend protection to their players in India is SSL encryption. SSL is renowned as the standard technology that guarantees a secure connection and shields the data that is exchanged between two systems. Concerning online casinos, SSL is a security regime that encodes all the data that is shared between the player & the casino. This signifies that in case someone tries to obstruct the traffic, they will not be able to comprehend the data. This security measure holds a great significance because it makes sure that players' data like their credit card information is guarded. Since casinos can't comprehend the data they won't also be able to manipulate the results, ensuring fair play. 2. Two Factor Authentication Two-factor authentication otherwise known as 2FA is a multi-layered verification process that heightens the access security by demanding two methods to verify your identity. In simpler terms, 2FA is an additional layer of security extended to make sure that anyone who tries to log in to the online account is who they say they are. In this process, a user firstly will enter their username & a password. They don't immediately gain access but will have to submit another piece of information that is only known to them. 2FA is often used to prevent unauthorized login and is a remarkable security measure for online casinos in India as it will prevent hacking by agonizing the process of identity theft. 3. Artificial Intelligence (AI) The importance of artificial intelligence in the new digital era of India & online casinos cannot be disregarded. AI permits machine learning and independent machine compliance. In the context of online casinos, AI makes use of algorithms and advanced technology known as machine learning which can determine unusual wagering patterns by employing experience and data. Online casinos have to be careful of hackers that form algorithms in the game system by employing machine learning technology that will tackle this issue. AI holds quite an importance when it comes to online casinos. They are effective & efficient as this kind of hacking is almost impossible to dig out & avoid. 4. Account attestation One more efficient way that online casinos employ to secure their players is by verifying their accounts. In this case, the players are required to submit their identity in any form available to them in order, to begin with, the wager. Players can submit driver's license, national ID card, passport, etc. This form of verification helps to prevent any kind of trickery or deceit. It also permits the casinos to check & confirm if the player is of legal gambling age which is 18 or 21 depending upon administration. 5. Cryptocurrency as a payment method Cryptocurrencies have gained immense popularity and have become an essential component of online casinos in India. Many Indian players are worried about the security of their personal information and anyone familiar with the basics of cryptocurrency recognizes how secure the transactions are. That is because cryptocurrency makes use of blockchain technology. Blockchain technology keeps a virtual track of transactions in an open database. These transactions are heavily encrypted and it is laborious to change the transactions which in turn makes them fully secure. 6. Regulatory bodies & Independent audits All reputable casinos are bound to go through the process of licensing issued by a reliable administration. The most renowned licenses are from the United Kingdom, Malta & the Isle of Man. These regulatory bodies possess strict guidelines due to which online casinos have to go through regular auditing to sustain their license. The frequent auditing guarantees that online casinos are not engaging in foul play. Auditing companies like eCOGA, make sure that the RNG software which is the random number generator is genuinely giving out random results while also assessing the casino's payment & deposits. How to identify Rogue online Casinos in India? Although it is of utmost importance for all the Indian players to possess knowledge of security measures that online casinos are employing, it won't be right to not lay any emphasis on how you can help yourself. No amount of technology will be able to help you until you promise to play your part carefully. Let's first understand what Rogue casinos are. Any casino that denies a player's winnings, swaps their RTP or their games, advertises falsely, and is not transparent, is called Rogue Casinos. Now let's dig a little deeper and understand how you can identify them. a. Portray offers that are too good to be true Anything that seems too good to be true is bound to come under suspicion. Thousands of euros in bonus money, 100 free spins, etc. Offers like these raise a lot of questions. Always pay attention to the dozens of terms & conditions that you might have to fulfill to redeem them. You might not even receive the bonus once you make the deposit. All the above mentioned are red flags. b. Bad Reviews The best way to find out whether an online casino is authentic or not is by gauging through their reviews. You can go through reliable gaming portals like AskGamblers which offer licensed and regulated casinos along with transparent and impartial casino reviews by real players intending to generate transparency. The reviews are valuable and are the first-hand experience of players with various casinos. Using reviews as your guide is an ultimate way to protect yourselves from casinos that have the intention of scamming you. c. They don't pay you Although, withdrawals are not always instant. The withdrawal time depends upon the payment provider you choose, but you can expect your winning amount to reach you within 30 days. If you are unable to obtain your money after 30 days, that's a rogue casino for you. If you try & contact their customer support, they assert that you have not accomplished the relevant obligations. You cannot do much once this happens and take this as a lesson. Renowned casinos that enjoy exemplary reputations give precedence to the financial & personal information of the players. While singling out potential casinos, both beginners & seasoned players give due importance to protection & security. Ensuring that customers are immersed and their personal details are safeguarded, falls under the accountability of casinos. However, there are things you can do to enhance security, for instance, using competent passwords while creating an account and combining additional authentication. Along with that, refer to reviews and please make sure that you are changing your password frequently and are not sharing them with anyone. Even the best technology won't be able to preserve a player's information if he/she shares it easily.",
      pubDate: "2022-05-04 07:52:10",
      image_url:
        "https://assets.thehansindia.com/h-upload/2022/05/04/500x300_1290250-online-casino.jpg",
      source_id: "thehansindia",
      country: ["india"],
      category: ["technology"],
      language: "english",
    },
  ],
  nextPage: 2,
};
let nbapage1 = {
  status: "success",
  totalResults: 259,
  results: [
    {
      title: "Draymond Green Reacts After Flipping Off Grizzlies Fans",
      link: "https://www.hotnewhiphop.com/draymond-green-reacts-after-flipping-off-grizzlies-fans-news.151473.html",
      keywords: null,
      creator: ["Alexander Cole"],
      video_url: null,
      description:
        "Draymond Green and Grizzlies fans do not like each other.https://www.hotnewhiphop.com/draymond-green-reacts-after-flipping-off-grizzlies-fans-news.151473.html",
      content:
        'If you have been paying attention, then you would know that the series between the Memphis Grizzlies and the Golden State Warriors has been filled with some vitriol. The Warriors are veterans looking to prove that they still got it, while the Grizzlies are a scrappy set of young guns who want to show that they can beat anyone.After being ejected in Game 1, Draymond Green of the Warriors furthered his villain status as he gave Grizzlies fans the finger while going back to the locker room. Green did this after suffering a facial injury that left him all bloody. The Grizzlies fans were cheering the injury, and Green had had enough of it.Following the match, Green was very adamant that he does not care about a potential fine as he already makes a lot of money. Simply put, he is daring the NBA to punish him.“It felt really good to flip [the Grizzlies’ fans] off…I’m assuming the cheers was because they know I’ll get fined, great…I make $25M per year I should be just fine," Green said matter of factly.With the series tied up at one game apiece, there is no doubt that we are in for a long and scrappy series. Hopefully, we see even more dramatics as the series goes on.',
      pubDate: "2022-05-04 15:43:25",
      full_description:
        'If you have been paying attention, then you would know that the series between the Memphis Grizzlies and the Golden State Warriors has been filled with some vitriol. The Warriors are veterans looking to prove that they still got it, while the Grizzlies are a scrappy set of young guns who want to show that they can beat anyone. After being ejected in Game 1, Draymond Green of the Warriors furthered his villain status as he gave Grizzlies fans the finger while going back to the locker room. Green did this after suffering a facial injury that left him all bloody. The Grizzlies fans were cheering the injury, and Green had had enough of it. Following the match, Green was very adamant that he does not care about a potential fine as he already makes a lot of money. Simply put, he is daring the NBA to punish him. “It felt really good to flip [the Grizzlies’ fans] off…I’m assuming the cheers was because they know I’ll get fined, great…I make $25M per year I should be just fine," Green said matter of factly. With the series tied up at one game apiece, there is no doubt that we are in for a long and scrappy series. Hopefully, we see even more dramatics as the series goes on.',
      image_url:
        "https://www.hotnewhiphop.com/image/620x412c/cover/1651677996_d1f3f01bbd3a57f2e66b5199f5159f36.jpg/450f11da7a203c6034ad7460b2f23fdd/1651677996_d1bc39dda9becf51056d82179e7b5757.jpg",
      source_id: "realhotnewhiphop",
      country: ["united states of america"],
      category: ["top"],
      language: "english",
    },
    {
      title: "Should the Jazz Trade Donovan Mitchell or Rudy Gobert?",
      link: "https://www.si.com/nba/2022/05/04/utah-jazz-donovan-mitchell-rudy-gobert-future",
      keywords: ["HP Feature", "NBA", "News And Analysis"],
      creator: ["Chris Mannix and Howard Beck"],
      video_url: null,
      description:
        "With rumors swirling about Utah's star duo, we debate the future of the franchise.",
      content:
        "With rumors swirling about Utah's star duo, we debate the future of the franchise. View the original article to see embedded media. Mannix: Alright, Beck, the Jazz’s season is over and there may not be a more interesting offseason than what’s coming in Utah. For the third time in the last four years the Jazz have been bounced in the first round and with a new CEO in (Trader) Danny Ainge, there’s a real chance we see some substantial changes. Let’s start here: Do you believe Donovan Mitchell and Rudy Gobert are the foundation of a championship-level team?Beck: Sure, Mitchell-Gobert could be the foundation of a title team … if the Jazz acquire Jayson Tatum. Or Luka Dončić. Or Kevin Durant. Can Mitchell + Gobert + role players win it all? No. Clearly, no. They’ve had five seasons together, and the Jazz have yet to advance past the second round. They’ve been bounced in the first round in three of the last four years.To their credit, the Jazz found a formula for regular-season success—Gobert anchoring an elite defense, Mitchell driving the offense and lots of shooting around them. But they’ve taken this formula as far as it can go. Just swapping out a bunch of role players for (presumably) better role players isn’t going to raise their ceiling much—not in a conference dominated by MVP candidates in Dallas (Dončić), Golden State (Steph Curry), Denver (Nikola Jokić) and Memphis (Ja Morant), to say nothing of the ultratalented, ultradeep Suns. It’s time to break this crew up and try something new.Mannix: First, a disclaimer: I am the lead attorney for the Rudy Gobert defense team. The slander directed toward Gobert last week was ridiculous. Yes, Dallas carved up the Mavericks defense. But the idea that it was Gobert’s fault, when his perimeter defenders failed him, is crazy. I talked to one Mavs assistant after that series. He said the Jazz wanted Gobert to guard everyone. You can’t win when your best defender is your only defender, and that’s what Gobert was. That said, I’m not ready to give up on Mitchell/Gobert. And I completely disagree that they can’t win without the right role players. What they need are defenders. Mike Conley is a terrific offensive player, but he’s not the answer defensively. Bogdan Bogdanovic is a terrific scorer, but he can’t defend either. You’re telling me the Mitchell/Gobert tandem won’t be more dangerous with a group of defenders around them?Beck: I’m telling you the Jazz’s issue goes way beyond defense (which, we should note, is always excellent in the regular season, albeit exploitable in the playoffs). As our friend Bobby Marks at ESPN noted, the Jazz ranked 23rd in clutch time net rating this season. Also per Marks: Mitchell shot 33 percent during clutch time—the third-worst rate among the 37 players with at least 50 attempts in the final five minutes of the fourth quarter or overtime, with the game within five points. So the Jazz have some offensive concerns, too—including an overdependence on Mitchell.Here’s the thing: The Jazz have an All-Star duo. That’s great. You need two stars, minimum, to win a championship in this league. But it’s not that simple, and Utah’s stars have glaring flaws. Gobert is a walking top-five defense, but he’s not a scorer. Mitchell is one of the league’s better scorers, but he’s only average from three-point range, average as a playmaker/passer and a net negative on defense.Unless one or both of them make massive leaps in their games, the Jazz don’t have the firepower to match the Suns or Warriors, or the Nuggets and Clippers at full strength, or even the Mavericks.So you want to keep the Jazz together and just pray for a better result than they’ve had the last five years? Isn’t that sorta the definition of insanity?Mannix: Of course not. But Mitchell and Gobert are both under contract through at least 2025. I’d like to try to change the tires before I turn in the car. Conley has two years and $46-ish million left on his contract. I’d like to see the Jazz turn the point guard keys over to Mitchell—who I agree, does need to improve defensively—and see if Conley can bring back a decent wing defender. Same thing with Bogdanovic. It feels rushed to break up two established All-Stars before at least attempting to tweak the team around them. Troy Taormina/USA TODAY Sports Beck: Rushed? Rushed?! Five years is a lifetime in this league. In the half-decade Gobert and Mitchell have been co-stars, James Harden and Kyrie Irving have played for a combined five teams! The Kings and Knicks have gone through (approximately) 57 coaches and GMs in that span!You don’t get much longer than five years to build a contender in this era, especially if you’re perpetually stuck in the good-not-great tier, which is where the Jazz are. People start getting fired. Stars start getting impatient and (cough, cough) asking for trades—either for themselves or for their co-stars. The Jazz can’t keep tinkering and expect Mitchell to keep cool, no matter how many years are left on his deal. We’ve seen multiple stars with long-term contracts force trades in recent years. You can’t assume anything. And you can’t afford to stand still.Mannix: No one is suggesting the Jazz stand still. But combinations like Mitchell and Gobert are tough to come by. Think about how the Jazz did: Gobert was the 27th pick in 2013. Mitchell went 13th in 2017 (I still can’t believe Frank Ntilikina, Dennis Smith and Malik Monk went ahead of him). And what are you going to get for them? If you trade Gobert, you better get dollar-for-dollar value back if you want to keep Mitchell happy. Does Andrew Wiggins and one of the Warriors’ young players offer that? We’ve all heard the buzz about Mitchell’s desire to be in New York. So tell me: Are you suggesting trading one and attempting to win with the other, or do you want Ainge to Gordon Gekko this thing and strip it down for parts, er, picks?Beck: I’d keep Mitchell and trade Gobert. You can manufacture a top-10 defense without an elite, high-priced rim protector. (The Mavericks, Clippers and Raptors all did it this season.) The Jazz have too many needs to have $41 mil per year tied up in a shot blocker who may or may not get along with your primary star. Gobert can help a lot of teams and should bring back a nice haul in a trade. Mitchell is just 25 and still entering his prime. If you’re going to hit the reset button and try a new approach, now is the time.Mannix: You can manufacture a top-10 defense with that team? You saw the numbers. They were the No. 1 defensive team with Gobert last season. They were bottom third in the NBA without him. Swap him out for a veteran wing and some young talent/picks and they won’t play enough D to win the Final Four, much less an NBA championship. And I can’t imagine Mitchell is going to be motivated to (eventually) sign a contract extension with a team like that. Oh well, we’ll never agree! But I think we both acknowledge that it will be a fascinating offseason in Utah. More NBA Coverage:Celtics Swing Back vs. Bucks to Even SeriesThe Sixers’ Best Chance Going Forward Without Joel EmbiidWhy the Suns’ Game 1 Win Was SignificantRanking the Remaining NBA Playoff Teams",
      pubDate: "2022-05-04 15:42:18",
      full_description:
        "Mannix: Alright, Beck, the Jazz’s season is over and there may not be a more interesting offseason than what’s coming in Utah. For the third time in the last four years the Jazz have been bounced in the first round and with a new CEO in (Trader) Danny Ainge, there’s a real chance we see some substantial changes. Let’s start here: Do you believe Donovan Mitchell and Rudy Gobert are the foundation of a championship-level team? Beck: Sure, Mitchell-Gobert could be the foundation of a title team … if the Jazz acquire Jayson Tatum. Or Luka Dončić. Or Kevin Durant. Can Mitchell + Gobert + role players win it all? No. Clearly, no. They’ve had five seasons together, and the Jazz have yet to advance past the second round. They’ve been bounced in the first round in three of the last four years. To their credit, the Jazz found a formula for regular-season success —Gobert anchoring an elite defense, Mitchell driving the offense and lots of shooting around them. But they’ve taken this formula as far as it can go. Just swapping out a bunch of role players for (presumably) better role players isn’t going to raise their ceiling much—not in a conference dominated by MVP candidates in Dallas (Dončić), Golden State (Steph Curry), Denver (Nikola Jokić) and Memphis (Ja Morant), to say nothing of the ultratalented, ultradeep Suns. It’s time to break this crew up and try something new. Mannix: First, a disclaimer: I am the lead attorney for the Rudy Gobert defense team. The slander directed toward Gobert last week was ridiculous. Yes, Dallas carved up the Mavericks defense. But the idea that it was Gobert’s fault, when his perimeter defenders failed him, is crazy . I talked to one Mavs assistant after that series. He said the Jazz wanted Gobert to guard everyone. You can’t win when your best defender is your only defender, and that’s what Gobert was. That said, I’m not ready to give up on Mitchell/Gobert. And I completely disagree that they can’t win without the right role players. What they need are defenders. Mike Conley is a terrific offensive player, but he’s not the answer defensively. Bogdan Bogdanovic is a terrific scorer, but he can’t defend either. You’re telling me the Mitchell/Gobert tandem won’t be more dangerous with a group of defenders around them? Beck: I’m telling you the Jazz’s issue goes way beyond defense (which, we should note, is always excellent in the regular season, albeit exploitable in the playoffs). As our friend Bobby Marks at ESPN noted, the Jazz ranked 23rd in clutch time net rating this season. Also per Marks: Mitchell shot 33 percent during clutch time—the third-worst rate among the 37 players with at least 50 attempts in the final five minutes of the fourth quarter or overtime, with the game within five points. So the Jazz have some offensive concerns, too—including an overdependence on Mitchell. Here’s the thing: The Jazz have an All-Star duo. That’s great. You need two stars, minimum, to win a championship in this league. But it’s not that simple, and Utah’s stars have glaring flaws. Gobert is a walking top-five defense, but he’s not a scorer. Mitchell is one of the league’s better scorers, but he’s only average from three-point range, average as a playmaker/passer and a net negative on defense. Unless one or both of them make massive leaps in their games, the Jazz don’t have the firepower to match the Suns or Warriors, or the Nuggets and Clippers at full strength, or even the Mavericks. So you want to keep the Jazz together and just pray for a better result than they’ve had the last five years? Isn’t that sorta the definition of insanity? Mannix: Of course not. But Mitchell and Gobert are both under contract through at least 2025. I’d like to try to change the tires before I turn in the car. Conley has two years and $46-ish million left on his contract. I’d like to see the Jazz turn the point guard keys over to Mitchell—who I agree, does need to improve defensively—and see if Conley can bring back a decent wing defender. Same thing with Bogdanovic. It feels rushed to break up two established All-Stars before at least attempting to tweak the team around them. Troy Taormina/USA TODAY Sports Beck: Rushed? Rushed?! Five years is a lifetime in this league. In the half-decade Gobert and Mitchell have been co-stars, James Harden and Kyrie Irving have played for a combined five teams! The Kings and Knicks have gone through (approximately) 57 coaches and GMs in that span! You don’t get much longer than five years to build a contender in this era, especially if you’re perpetually stuck in the good-not-great tier, which is where the Jazz are. People start getting fired. Stars start getting impatient and (cough, cough) asking for trades—either for themselves or for their co-stars. The Jazz can’t keep tinkering and expect Mitchell to keep cool, no matter how many years are left on his deal. We’ve seen multiple stars with long-term contracts force trades in recent years. You can’t assume anything. And you can’t afford to stand still. Mannix: No one is suggesting the Jazz stand still. But combinations like Mitchell and Gobert are tough to come by. Think about how the Jazz did: Gobert was the 27th pick in 2013. Mitchell went 13th in 2017 (I still can’t believe Frank Ntilikina, Dennis Smith and Malik Monk went ahead of him). And what are you going to get for them? If you trade Gobert, you better get dollar-for-dollar value back if you want to keep Mitchell happy. Does Andrew Wiggins and one of the Warriors’ young players offer that? We’ve all heard the buzz about Mitchell’s desire to be in New York. So tell me: Are you suggesting trading one and attempting to win with the other, or do you want Ainge to Gordon Gekko this thing and strip it down for parts, er, picks? Beck: I’d keep Mitchell and trade Gobert. You can manufacture a top-10 defense without an elite, high-priced rim protector. (The Mavericks, Clippers and Raptors all did it this season.) The Jazz have too many needs to have $41 mil per year tied up in a shot blocker who may or may not get along with your primary star. Gobert can help a lot of teams and should bring back a nice haul in a trade. Mitchell is just 25 and still entering his prime. If you’re going to hit the reset button and try a new approach, now is the time. Mannix: You can manufacture a top-10 defense with that team? You saw the numbers. They were the No. 1 defensive team with Gobert last season. They were bottom third in the NBA without him. Swap him out for a veteran wing and some young talent/picks and they won’t play enough D to win the Final Four, much less an NBA championship. And I can’t imagine Mitchell is going to be motivated to (eventually) sign a contract extension with a team like that. Oh well, we’ll never agree! But I think we both acknowledge that it will be a fascinating offseason in Utah. More NBA Coverage:",
      image_url:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTg5MjQ0ODY2NzEzMTAyMjI3/donovan-mitchell-rudy-gobert-jazz-future.jpg",
      source_id: "si",
      country: ["united states of america"],
      category: ["sports"],
      language: "english",
    },
    {
      title:
        "F1 star George Russell heads to NBA game with stunning girlfriend as Mercedes driver prepares for Miami Grand Prix",
      link: "https://www.thesun.ie/sport/8745403/george-russell-nba-girlfriend-f1-miami-grand-prix/",
      keywords: ["Motorsport", "Sport", "F1", "Mercedes-Benz"],
      creator: ["Giacomo Pisa"],
      video_url: null,
      description:
        "FORMULA ONE star George Russell relaxed at an NBA game in Miami on Monday night ahead of this weekend’s Grand Prix in the Florida city. The Mercedes driver took in the action alongside stunning girlfriend Carmen Montero Mundt. With the F1 action at Miami’s International Autodrome doesn’t get underway until this weekend, Russell had plenty […]",
      content:
        "FORMULA ONE star George Russell relaxed at an NBA game in Miami on Monday night ahead of this weekend’s Grand Prix in the Florida city. The Mercedes driver took in the action alongside stunning girlfriend Carmen Montero Mundt. Instagram / @carmenmmundt George Russell and girlfriend Carmen Montero Mundt were courtside in Miami to watch basketball[/caption] APThe couple smiled and laughed as they took in the action at the FTX Arena[/caption] Instagram @georgerussell63Mercedes star Russell was captured on the Jumbotron at the arena[/caption] With the F1 action at Miami’s International Autodrome doesn’t get underway until this weekend, Russell had plenty of time to kick back and relax. And he was courtside to watch the Miami Heat’s 106-92 Eastern conference semi-final win over the Philadelphia 76ers. The 24-year-old made it onto the Jumbotron at the FTX Arena during the basketball clash and posed for the camera. Posting the footage to his Instagram account, Russell threw up a peace sign and grinned after partner Carmen pointed out that he was on the big screen. Read More In F1 BEN HUNT F1 first with Miami Grand Prix to have fake marina as yachts head to Florida BIG ONE Get £30 in FREE BETS when you stake £10 on horse racing today with William Hill The stadium announcer can be heard calling out Russell’s name during a break in play during the fourth quarter, with the crowd cheering on the Mercedes driver after seeing him. Russell captioned the video: “Turning up the heat,” after showing his support for the local team alongside his gorgeous partner. The F1 star and Carmen have reportedly been together since 2020, with the beauty believed to work at a London investment firm. The happy couple were snapped together earlier this year holidaying in the Caribbean before the start of the F1 season. Most read in Motorsport AMERICAN DREAM F1 Miami Grand Prix: Date, UK start time, live stream, TV channel FORGET LEW Hamilton snub as chief claims Norris is only driver in same league as Verstappen COVER STARS Hamilton & Verstappen on front cover of new Champions F1 game after shock snub FUMING LEW Rosberg says Lewis Hamilton will be 'angry' at finishing behind George Russell HE'S NO LEWSER Hamilton's early season problems 'no fault of his own' claims Webber 'SPECIAL' Tributes to British F1 legend Tony Brooks who was sport pioneer as he dies at 90 SUN BINGO GET £50 BONUS & 50 FREE SPINS TODAY While Russell’s Mercedes team-mate Lewis Hamilton has endured a shocking start to the F1 season, the Brit has fared better during his debut campaign with the team. Russell has not finished lower than fifth in the four races already completed in the 2022 F1 calendar, and is currently fourth in the Driver Standings. But he has tipped team-mate Hamilton to come back stronger -despite the seven-time world champ currently trailing Russell by 21 points in the standings. GettyRussell and Carmen have reportedly been together since 2020[/caption] Instagram / @carmenmmundtCarmen regularly travels the world to watch boyfriend Russell in action[/caption] Instagram / @carmenmmundt Carmen keeps fans up to date on her travels through Instagram[/caption]",
      pubDate: "2022-05-04 15:39:17",
      image_url: null,
      source_id: "thesun_ie",
      country: ["ireland"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "Draymond Green Gives Perfect Answer When Asked About Getting Fined",
      link: "https://www.si.com/extra-mustard/2022/05/04/draymond-green-on-double-bird-fine-warriors-nba",
      keywords: [
        "Traina Thoughts",
        "HP Feature",
        "Extra Mustard",
        "News And Analysis",
        "NBA",
      ],
      creator: ["Jimmy Traina"],
      video_url: null,
      description:
        "The Warriors forward on possible double-bird fine: ‘I make $25 million a year.’",
      content:
        "The Warriors forward on possible double-bird fine: ‘I make $25 million a year.’1. Last week, I took issue with Draymond Green questioning Bill Simmons’s qualifications when it comes to voting on NBA awards.Today, I come in full praise of Green. As I said last week, the Warriors star is a breath of fresh air among today’s athletes because of his brutal honesty. Last night, he put that quality on display.After getting bloodied by an elbow to the face from Memphis’s Xavier Tillman, the Grizzlies fans hurled boos at Green. He responded by giving the home crowd a double bird.For some weird reason, people still, in 2022, act like giving someone the finger is a felony, so naturally, Green was asked about his double bird in his postgame press conference.Instead of doing the fake apology thing, Green doubled down. And he did so beautifully.“If you’re gonna boo somebody who got elbowed in the eye and face running down blood, you should get flipped off. So I’ll take the fine. I’ll do an appearance and make up the money. But it felt really good to flip them off. You’re gonna boo someone that gets elbowed in the eye and blood running down their face? I could’ve had a concussion or anything. If they’re gonna be that nasty, I can be nasty, too. I’m assuming the cheers were because they know I’ll get fined.Great. I make $25 million a year. I’ll be just fine.”YES! YES! YES!It was so refreshing to finally hear an athlete say the quiet part out loud. The majority of time, sports fines are a complete joke because athletes are making tens or hundreds of millions of dollars. But nobody wants to brag about their salaries and admit the fines are a joke.The entire practice is comical when you think about it. Draymond Green, a 32-year-old, is going to get punished because he gave the middle finger. And everybody just goes along with it like it’s a normal thing.Luckily, Draymond Green is not everybody. 2. Props to TNT (and thank you for reading Traina Thoughts) for making the right decision and giving the Western Conference play-by-play assignment to the very deserving Kevin Harlan, who will be joined by Reggie Miller and Stan Van Gundy.3. The NFL announced today the international games that will be played in the 2022 season because the NFL knows how to sell things that aren't a big deal better than anyone. Anyway, I mention this because the Broncos at Jaguars game in Week 8 will air exclusively on ESPN+. Not ESPN, not ESPN2. Just the ESPN+ streaming service, so just make sure if you're a sports fan that you subscribe and pay for every single streaming service available.4. Underrated and versatile play-by-play broadcaster Dave Pasch has signed a new contract with ESPN, and the network used his college basketball partner Bill Walton to help make the announcement.5. Tom Brady. Guns. That's all.6. A brand-new SI Media Podcast dropped this morning, and it features a conversation with Ryen Russillo of The Ringer.The host of the very popular Ryen Russillo Podcast shared his thoughts on everything from the NBA playoffs to Kevin Durant vs. TNT to the power of Inside the NBA to which sports have the worst officials to his favorite NBA announcers to how much trouble Major League Baseball is in, to the state of podcasting to Elon Musk’s buying Twitter.The podcast closes with our weekly “Traina Thoughts” segment featuring Sal Licata from WFAN radio and SNY TV in New York. This week, Jimmy and Sal discuss the NFL’s reportedly scheduling three games Christmas Day this season and a game Black Friday beginning in 2023, as well as HBO’s Winning Time series and more.You can listen to the podcast below or download it on Apple, Spotify and Google.7. RANDOM VIDEO OF THE DAY: On this date in 1995, we learned that Cosmo Kramer likes to bet on flight arrivals.Be sure to catch up on past editions of Traina Thoughts and check out the Sports Illustrated Media Podcast hosted by Jimmy Traina on Apple, Spotify or Google. You can also follow Jimmy on Twitter, Instagram and TikTok.",
      pubDate: "2022-05-04 15:31:06",
      full_description:
        "1. Last week , I took issue with Draymond Green questioning Bill Simmons’s qualifications when it comes to voting on NBA awards. Today, I come in full praise of Green. As I said last week, the Warriors star is a breath of fresh air among today’s athletes because of his brutal honesty. Last night, he put that quality on display. After getting bloodied by an elbow to the face from Memphis’s Xavier Tillman, the Grizzlies fans hurled boos at Green. He responded by giving the home crowd a double bird. For some weird reason, people still, in 2022, act like giving someone the finger is a felony, so naturally, Green was asked about his double bird in his postgame press conference. Instead of doing the fake apology thing, Green doubled down. And he did so beautifully. “If you’re gonna boo somebody who got elbowed in the eye and face running down blood, you should get flipped off. So I’ll take the fine. I’ll do an appearance and make up the money. But it felt really good to flip them off. You’re gonna boo someone that gets elbowed in the eye and blood running down their face? I could’ve had a concussion or anything. If they’re gonna be that nasty, I can be nasty, too. I’m assuming the cheers were because they know I’ll get fined. Great. I make $25 million a year. I’ll be just fine.” YES! YES! YES! It was so refreshing to finally hear an athlete say the quiet part out loud. The majority of time, sports fines are a complete joke because athletes are making tens or hundreds of millions of dollars. But nobody wants to brag about their salaries and admit the fines are a joke. The entire practice is comical when you think about it. Draymond Green, a 32-year-old, is going to get punished because he gave the middle finger. And everybody just goes along with it like it’s a normal thing. Luckily, Draymond Green is not everybody. 2. Props to TNT ( and thank you for reading Traina Thoughts ) for making the right decision and giving the Western Conference play-by-play assignment to the very deserving Kevin Harlan, who will be joined by Reggie Miller and Stan Van Gundy. 3. The NFL announced today the international games that will be played in the 2022 season because the NFL knows how to sell things that aren't a big deal better than anyone. Anyway, I mention this because the Broncos at Jaguars game in Week 8 will air exclusively on ESPN+. Not ESPN, not ESPN2. Just the ESPN+ streaming service, so just make sure if you're a sports fan that you subscribe and pay for every single streaming service available. 4. Underrated and versatile play-by-play broadcaster Dave Pasch has signed a new contract with ESPN, and the network used his college basketball partner Bill Walton to help make the announcement. 5. Tom Brady. Guns. That's all. 6. A brand-new SI Media Podcast dropped this morning, and it features a conversation with Ryen Russillo of The Ringer . The host of the very popular Ryen Russillo Podcast shared his thoughts on everything from the NBA playoffs to Kevin Durant vs. TNT to the power of Inside the NBA to which sports have the worst officials to his favorite NBA announcers to how much trouble Major League Baseball is in, to the state of podcasting to Elon Musk’s buying Twitter. The podcast closes with our weekly “Traina Thoughts” segment featuring Sal Licata from WFAN radio and SNY TV in New York. This week, Jimmy and Sal discuss the NFL’s reportedly scheduling three games Christmas Day this season and a game Black Friday beginning in 2023, as well as HBO’s Winning Time series and more. You can listen to the podcast below or download it on Apple , Spotify and Google . 7. RANDOM VIDEO OF THE DAY: On this date in 1995, we learned that Cosmo Kramer likes to bet on flight arrivals. Be sure to catch up on past editions of Traina Thoughts and check out the Sports Illustrated Media Podcast hosted by Jimmy Traina on Apple , Spotify or Google . You can also follow Jimmy on Twitter , Instagram and TikTok .",
      image_url:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTg5MjQ0MDc2OTc1OTkwNTUy/draymond-green.jpg",
      source_id: "si",
      country: ["united states of america"],
      category: ["sports"],
      language: "english",
    },
    {
      title:
        "Kim Kardashian keen to marry again amid budding Pete Davidson romance: ‘Fourth time is a charm’",
      link: "https://metro.co.uk/2022/05/04/kim-kardashian-keen-to-marry-again-amid-budding-pete-davidson-romance-16587099/",
      keywords: [
        "TV",
        "Kanye West",
        "Kim Kardashian",
        "Pete Davidson",
        "US TV news",
      ],
      creator: ["Rishma Dosani"],
      video_url: null,
      description: "Over to you, Pete...",
      content:
        "Kim Kardashian would be keen to walk down the aisle again for the fourth and final time. The reality star filed for divorce from third husband Kanye West last February, and was legally declared single. She is currently dating Pete Davidson and confirmed that their romance is definitely serious with a string of loved-up red carpet appearances in recent days. Speaking of her love life in the upcoming episode of the Kardashians, the mom-of-four revealed that she would tie the knot once more – with all eyes now on Pete to see whether he’ll get the hint. In scenes filmed just after the pair shared their first kiss on SNL, and before they were ever publicly linked, she was seen getting hyped for Travis Barker popping the question to sister Kourtney. Discussing how Scott Disick would react, Kim couldn’t help but make a quip about her own failed marriages. Kim Kardashian announced that she would get married again (Picture: Hulu) ‘He already knew that they were trying for a baby. To me, [with] a baby you’re stuck for life,’ she said, cackling. ‘Marriages come and go… No offense guys. Take it from me… ‘I believe in love. That’s why hopefully there will be just one more wedding for me. Fourth time’s a charm.’ Kim filed for divorce from Kanye West last year (Picture: AP) Kim first walked down the aisle in 2000, eloping with music producer Damon Thomas when she was just 19 – but they split three years later. She famously tied the knot with NBA star Kris Humphries in 2011, with their wildly lavish ceremony playing out on Keeping Up With The Kardashians. However, despite the fairytale ceremony, they called time on their brief marriage just 72 days after saying their vows. Kim and Pete Davidson made their Met Gala debut together on Monday (Picture: Getty) Kimmy officially started dating Ye in 2012 and announced her pregnancy with daughter North soon after – with the couple confirming their engagement in October, 2013, and hosting swanky nuptials in Italy the following year. It wasn’t to last and she filed for divorce last February, with the fall-out from their split currently playing out on the Kardashians. More: TVDerry Girls fans go wild after romance is finally confirmed: 'I'm losing my mind'Selling Sunset's Chrishell Stause dating 'non-binary singer' after Jason Oppenheim splitFreeze The Fear: Holly Willoughby snaps as Patrice Evra refuses to get out of ice bath She has since gone public with her new romance with Pete – who unveiled his tattoo dedications to their romance, including one which appeared to include the initials of the children she shares with Ye. The Kardashians is available to stream on Hulu and Disney +. Got a story? If you’ve got a celebrity story, video or pictures get in touch with the Metro.co.uk entertainment team by emailing us celebtips@metro.co.uk, calling 020 3615 2145 or by visiting our Submit Stuff page – we’d love to hear from you. MORE : All the times Kim Kardashian sacrificed basic movement for fashion as clip shows her struggling to walk up Met Gala steps in Marilyn Monroe’s dress MORE : Rylan Clark lets his hair down for boozy night out at London pub following radio awards",
      pubDate: "2022-05-04 15:30:00",
      image_url:
        "https://metro.co.uk/wp-content/uploads/2022/05/SEI_101885418-e1651677167394.jpg?quality=90&strip=all",
      source_id: "metro",
      country: ["united kingdom"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "“Let someone brush Skip Bayless like Dillon Brooks did to Gary Payton II and we’ll see what he says then!”: NBA Twitter is outraged by the analyst’s take on last night’s Flagrant-2 call",
      link: "https://thesportsrush.com/nba-news-let-someone-brush-skip-bayless-like-dillon-brooks-did-to-gary-payton-ii-and-well-see-what-he-says-then-nba-twitter-is-outraged-by-the-analysts-take-on-last-nights-flagrant-2-call/",
      keywords: [
        "Basketball",
        "dillon brooks",
        "Gary Payton II",
        "Golden State Warriors",
        "Memphis Grizzlies",
        "NBA",
        "Skip Bayless",
      ],
      creator: ["Raahib Singh"],
      video_url: null,
      description:
        "FS1 Analyst Skip Bayless claims Dillon Brooks didn’t deserve a Flagrant 2 call, NBA Twitter shows him ‘No Mercy’ Last night, the Golden State Warriors were back at the FedEx Forum for Game 2 against the Grizzlies. After a 117-116 win on Sunday, the Warriors wanted to go up 2-0 before heading back home to… The post “Let someone brush Skip Bayless like Dillon Brooks did to Gary Payton II and we’ll see what he says then!”: NBA Twitter is outraged by the analyst’s take on last night’s Flagrant-2 call appeared first on The SportsRush.",
      content:
        "FS1 Analyst Skip Bayless claims Dillon Brooks didn’t deserve a Flagrant 2 call, NBA Twitter shows him ‘No Mercy’ Last night, the Golden State Warriors were back at the FedEx Forum for Game 2 against the Grizzlies. After a 117-116 win on Sunday, the Warriors wanted to go up 2-0 before heading back home to the Bay. On the other hand, the Grizzlies wanted to level things before they headed out on the road. Ja Morant and co showed they wanted the win more. They did everything in their possible power to get the win, and that included injuring two of the Warriors’ starters. Within the first 3 minutes of the game, Memphis sent Gary Payton II and Draymond Green back to the locker room. GP2 takes a hard fall after getting fouled by Dillon Brooks. Brooks was given a Flagrant 2 foul and has been ejected from Game 2pic.twitter.com/FPLHkcIkx3 — Warriors on NBCS (@NBCSWarriors) May 4, 2022 Gary Payton II did not get back to the game, and was found to have a fractured left elbow. Dillon Brooks was assessed a Flagrant 2 foul for the same, and was tossed from the game. Also Read: “Dillon Brooks was out of line… He broke the code!”: Warriors’ Stephen Curry and Steve Kerr discuss the foul on Gary Payton II However, Skip Bayless does not feel the Grizzlies’ guard deserved the foul. Skip Bayless defends Dillon Brooks, gets roasted by NBA Twitter for the same Skip Bayless, as we all know, likes to side with his emotions over facts when giving his ‘analysis’. He did the same on Undisputed today, as he claimed Dillon Brooks did not deserve a Flagrant 2 foul. .@RealSkipBayless reacts to Dillon Brooks being ejected for a flagrant 2 foul: “If this meets the criteria of a flagrant 2, then the NBA is in trouble, because the game is about to be ruined. That was a flat out joke.” pic.twitter.com/ycyZlP8mUs — UNDISPUTED (@undisputed) May 4, 2022 NBA Twitter could not handle the sh*t the Fox Sports analyst was spewing and spoke up about it. Skip is beyond wrong on this one. A brush? Let someone brush skip and see how he takes it. — RedneckBob (@RobertH37222958) May 4, 2022 A blind man can tell that’s a flagrant 2 with a suspension he almost broke his arm — Aamer (@54_aa) May 4, 2022 Skip says you can’t take stars out of games . Who tf thinks Dillon Brooks is a star? — Pedro Jacquez (@pete913) May 4, 2022 Skip on drugs if that ain’t a flagrant 2, buddy done for the playoffs off that https://t.co/tvkAYMBM48 — bills get paid (@BigSim_ba) May 4, 2022 Also Read: “I make $25 million a year, I’ll take the fine!”: Warriors’ Draymond Green goes after the Memphis crowd for booing him while he was bleeding from the eye I don’t know what Skip is on, but it was clear from the video that the foul was reckless and we know the kind of damage it did to GP2. The analyst sure has fallen off. The post “Let someone brush Skip Bayless like Dillon Brooks did to Gary Payton II and we’ll see what he says then!”: NBA Twitter is outraged by the analyst’s take on last night’s Flagrant-2 call appeared first on The SportsRush.",
      pubDate: "2022-05-04 15:29:09",
      image_url: null,
      source_id: "thesportsrush",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
      ],
      category: ["sports"],
      language: "english",
    },
    {
      title:
        "NBA playoff picks May 4: Suns poised to stay hot as home favourites in Game 2",
      link: "https://www.thestar.com/sports/sports-betting/2022/05/04/nba-playoff-picks-may-4-suns-poised-to-stay-hot-as-home-favourites-in-game-2.html",
      keywords: null,
      creator: ["Avery Perri - NorthStar Bets"],
      video_url: null,
      description: null,
      content: null,
      pubDate: "2022-05-04 15:26:25",
      full_description:
        "The NBA playoffs keep on rolling as two more games are on tap Wednesday night. The pregame narrative: Both home teams have a chance to head on the road with a 2-0 series lead. The Miami Heat shuttered the Joel Embiid-less Philadelphia 76ers in Game 1, while the Phoenix Suns are three games away from making their second consecutive Western Conference final. Here are our best NBA playoff picks for May 4. Premium betting is coming to Ontario. Register here for exclusive benefits, promos and NorthStar Bets content. Best bet: Suns -6.5 (-100) Phoenix has had its way with Dallas this year. The Suns are 4-0 against the Mavericks and would have covered each game by a 6.5-point margin, though none of the contests have been blowouts. Each game has been decided within eight points. Can the Suns continue this tightrope act? Read More: Key NBA betting strategies Phoenix certainly deserved to in Game 1, leading 109-93 with just under 4:30 to go in the fourth quarter. The 5.5-point spread was almost backdoored, but Devin Booker hit two clutch free throws to ensure Suns backers a win. In the regular season, the Suns held the Mavs to 101.7 points per 100 possessions, the third-lowest mark against them in the league. In Game 1, Dallas averaged nearly 20 points more than that (120.2). Doncic and the Mavs actually had a solid game but still couldn’t cover. And that’s the problem. Six different Suns players scored 10-plus points in the series opener. They scored 48.8% of their Game 1 buckets from the mid-range area, proving they don’t need to lean on the deep ball. With a fully healthy and rolling Suns squad, the Mavericks are in trouble. They haven’t won against the Suns in 10 straight games and we don’t expect that to change tonight. Take the Suns to cover the number in the desert. Key stat : The Suns are 5-2 ATS in the playoffs thus far. 76ers vs. Heat under 207.5 (-110): Let’s go back to the well with the under in this series. The first game fell 10.5 points clear of the 208.5 mark as both teams were ice cold from beyond the arc (15-of-70 combined). The under is a perfect 6-0 in Heat playoff games and is once again the better play with Embiid and Kyle Lowry sidelined for Game 2. Read more: How to bet on the NBA Harden under 32.5 points + assists (-115): It’s gotten to the point where many are wondering if Harden is capable of returning to form. He would have only surpassed this prop in two of his seven playoff games thus far and didn’t even come close in Game 1 without Embiid in the lineup. Fade The Beard in South Beach. Odds courtesy of SportingBet as of 10:26 a.m. ET on 05/04/2022. Disclaimer This content was produced as part of a partnership and therefore it may not meet the standards of impartial or independent journalism.",
      image_url: null,
      source_id: "thestar",
      country: ["canada"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "Kevin Durant Reveals His Latest Business Venture",
      link: "https://www.hotnewhiphop.com/kevin-durant-reveals-his-latest-business-venture-news.151471.html",
      keywords: null,
      creator: ["Alexander Cole"],
      video_url: null,
      description:
        "Kevin Durant continues to make big moves.https://www.hotnewhiphop.com/kevin-durant-reveals-his-latest-business-venture-news.151471.html",
      content:
        'Kevin Durant is one of the biggest names in the entire NBA right now. He is considered to be the best player in the league and while he wasn\'t very successful in the playoffs this year, he is still highly rated amongst fans and peers. Durant is extremely successful and his wealth has allowed him to create business endeavors such as 35 Ventures, with Rich Kleiman.The two have made some big investments together, and recently, it was announced that they just purchased a minority stake in Gotham FC which is a team in the National Women\'s Soccer League. Gotham FC is a New York-based team, and it only makes sense that KD would want to get in on the action. Elsa/Getty Images"As a New York-based company, the opportunity for us to partner with a forward-thinking team like Gotham FC was a no brainer," Kleiman explained. "There’s been so much growth in the NWSL in recent years, and the chance to be a part of that growth and work directly with the Gotham FC executive team and players is really exciting."KD also commented on the big news as he wrote "Let’s get it @GothamFC."This is definitely big news for the league as it just goes to show that women\'s soccer is growing at a rapid rate.',
      pubDate: "2022-05-04 15:21:21",
      full_description:
        'Kevin Durant is one of the biggest names in the entire NBA right now. He is considered to be the best player in the league and while he wasn\'t very successful in the playoffs this year , he is still highly rated amongst fans and peers. Durant is extremely successful and his wealth has allowed him to create business endeavors such as 35 Ventures, with Rich Kleiman. The two have made some big investments together, and recently, it was announced that they just purchased a minority stake in Gotham FC which is a team in the National Women\'s Soccer League. Gotham FC is a New York-based team, and it only makes sense that KD would want to get in on the action. "As a New York-based company, the opportunity for us to partner with a forward-thinking team like Gotham FC was a no brainer," Kleiman explained. "There’s been so much growth in the NWSL in recent years, and the chance to be a part of that growth and work directly with the Gotham FC executive team and players is really exciting." KD also commented on the big news as he wrote " Let’s get it @GothamFC ." This is definitely big news for the league as it just goes to show that women\'s soccer is growing at a rapid rate.',
      image_url:
        "https://www.hotnewhiphop.com/image/620x412c/cover/1651676344_0d7868a23deca86c8de9dea6017d1e51.jpg/b82f6bd35ec6b17a1714d9000935e948/1651676344_2e8c3d7ddb1080332f518290d250d37a.jpg",
      source_id: "realhotnewhiphop",
      country: ["united states of america"],
      category: ["top"],
      language: "english",
    },
    {
      title:
        "Stanley Cup Playoffs What To Watch For: Can Leafs stifle Lightning again?",
      link: "https://www.sportsnet.ca/nhl/article/stanley-cup-playoffs-what-to-watch-for-can-leafs-stifle-lightning-again/",
      keywords: null,
      creator: ["Rory Boylen"],
      video_url: null,
      description:
        "With two nights of the Stanley Cup Playoffs in the books, we move on to Game 2 for Boston-Carolina, Toronto-Tampa Bay, Edmonton-Los Angeles and Minnesota-St. Louis. Here’s a look at some things to keep an eye out for tonight. The post Maple Leafs’ Nylander played through bad sushi in Game 1 appeared first on Sportsnet.ca.",
      content:
        'With two nights of the Stanley Cup Playoffs in the books, we move on to Game 2 for Boston-Carolina, Toronto-Tampa Bay, Edmonton-Los Angeles and Minnesota-St. Louis. Here’s a look at some things to keep an eye out for tonight. And May the fourth be with you. Get 4 Months of SN NOW for Only $50. SN NOW has launched a new pass in time for the Stanley Cup Playoffs. Save 17% by signing up for a 4 Month SN NOW STANDARD pass and stream every game of the Stanley Cup Playoffs, Blue Jays & MLB, Raptors & NBA and more. MORE DETAILS .acf-block-preview .br-snippet { display: grid; grid-template-columns: 200px 1fr; gap: 20px; width: 100%; margin: 0 auto; padding: 16px; border: 1px solid #CECECE; background-color: #FFF; border-radius: 4px; } .acf-block-preview .br-snippet-info a { text-decoration: none; } .acf-block-preview .br-snippet-info .br-snippet-title { color: #343434; font-family: \'roboto\'; font-size: 20px; font-weight: 600; line-height: 22px; margin-bottom: 10px; top: -3px; } .acf-block-preview .br-snippet-info .br-snippet-body { color: #343434; font-family: \'urw-din\'; font-size: 16px; line-height: 20px; margin-bottom: 12px; } .acf-block-preview .br-snippet-info .br-snippet-link-title { display: inline-block; font-family: \'urw-din\'; font-size: 16px; list-style-type: none; width: auto; } .acf-block-preview .br-snippet-info .br-snippet-link-title:not(:last-child):after { content: \' | \'; color: #343434; } Will the penalty standards from Game 1 continue? The first two nights of the Stanley Cup Playoffs brought more power plays than were averaged in the regular season. On the first night especially the number of calls being made was discussed and noticed all over. Was this the beginning of a standard that we’re not quite used to, or a one off? “You look around the league there’s penalties everywhere,” Wild coach Dean Evason said. “Obviously there was a, I don’t know if it was a mandate, but obviously they were making sure everything was tight right away. Everybody’s ramped up and running around so they were trying to take care of it.” Minnesota-St. Louis was the most penalized game on the first night, with Toronto-Tampa Bay close behind. Lightning coach Jon Cooper maybe put a little blame on that with Leafs coach Sheldon Keefe, who commented “I expect it to be a very physical, borderline violent series in a lot of ways,” before the puck had even been dropped. Cooper suggested those comments brought “heightened awareness” from officials in Game 1. A lot of calls were fair and square. Some you might have seen in the regular season and not batted an eye. But others seemed out of place in post-season hockey, where the reputation is for the whistles to go away, physicality to reign, and that the players decide the outcome. Unfairly take possession or remove a scoring chance? That’s a penalty. Being physical? Not usually. Jordan Greenway took this penalty while the Blues had possession going the other way. Playoff penalty? Call me old-fashioned, but I think not. In Toronto, Mikhail Sergachev picked up a cross-checking penalty on this play, which seemed to be the sort of physical battle we’re used to around this time on the calendar. David Kampf’s drive had stopped and with it the scoring chance. One night makes a small sample size, but it was a curious tone to set out of the gate. On the first night of the playoffs there was an average of 9.25 power plays per game, which was way up over the regular-season average of 5.7 per game. Could it be just a whistle-happy start? Perhaps, though through the first seven games of the 2021 playoffs, there was an average of just 5.4 power plays per game. The second night of the Stanley Cup Playoffs had a total of 29 power plays for an average of 7.25 per game. Something may be afoot. So what will the first batch of Game 2s look like — an extension of what we saw on the first night, or a slow walk back to a more traditional standard? .acf-block-preview .instagram-twitter-container { width: 340px; margin: 0 auto; } Can the Maple Leafs shut down the Lightning again? How impressive was the Maple Leafs forecheck and PK in Game 1? A five-minute power play for Tampa Bay that could have been a game-tilting moment in their favour instead swung wildly Toronto’s way when they killed it off and out-chanced the Lightning. The ‘Power Kill’ was on display. It was just shocking how the Leafs dominated the Lightning so soon after getting hammered 8-1 at the end of the regular season. Was it the influence of the first home sell out playoff crowd in two years? Are we witnessing the final maturation of a Toronto roster that’s lost five series in a row? Will the Lightning remind us who they are in Game 2 and make all these questions look silly? Quite possibly. But the Leafs made the Lightning look slow in Game 1, as they had done in a few other regular season meetings. .acf-block-preview .instagram-twitter-container { width: 340px; margin: 0 auto; } Tampa Bay’s power play went 0-for-5 in Game 1, and all of their top guns were out-chanced at 5-on-5, too. Andrei Vasilevskiy, while not to blame for the loss, seemed very…human. He didn’t flash, he didn’t steal goals away — he continued a bit of a struggle that has followed him through the month of April. Now, giving this series to the Maple Leafs already is fool-hardy for all sorts of obvious reasons. Not least of those are that the Lightning are the back-to-back champs and that’s about as soft or undisciplined an effort as you’ll see from them all series. “I’m not so sure the Maple Leafs had to play particularly well to beat us tonight,” Cooper said. “You gotta win four, but you don’t want to give teams any freebies and we probably gave them a freebie tonight. I think it’s hard to judge either team tonight.” Game 2 could bring a much different vibe. var adServerUrl = ""; var $el = $( "#video_container-289317" ); var permalink = $el.closest(\'.snet-single-article\').data(\'permalink\'); /* if ( "1" == true && \'undefined\' !== typeof window.getIndexAds ) { var so = {preroll:{1:{1:{siteID:191888},2:{siteID:191889}}}}; adServerUrl = window.getIndexAds( \'http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305568444112&cmsid=384\', so, permalink); } else { adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305568444112&cmsid=384"; } */ adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305568444112&cmsid=384"; var adServerUrl_result = adServerUrl.includes("cust_params"); var queryString=\'\'; if(adServerUrl_result){ var gettheDUFI = localStorage.getItem("theRED_loc") if(gettheDUFI){ queryString += "dufiid=" + gettheDUFI + \'&\'; queryString += "ppid=" + gettheDUFI + \'&\'; var ppid = "ppid=" + gettheDUFI + \'&\'; } var DUFI_IP = sessionStorage.getItem("DUFI_IP") if(DUFI_IP){ queryString += "dufiip=" + DUFI_IP + \'&\'; } adServerUrl = adServerUrl.replace(/cust_params=/, ppid + \'cust_params=\' + encodeURIComponent(queryString) ); } $el.after( unescape("%3Cscript src=\\"" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js\\" %3E%3C/script%3E") ); $( document ).one( \'ready\', function() { $( "#video_container-289317" ).SNPlayer( { bc_account_id: "1704050871", bc_player_id: "JCdte3tMv", //autoplay: true, //is_has_autoplay_switch: false, bc_videos: 6305568444112, is_has_continuous_play: "false", adserverurl: adServerUrl, section: "", thumbnail: "https://www.sportsnet.ca/wp-content/uploads/2022/05/6305568444112-1024x576.jpg", direct_url: "https://www.sportsnet.ca/nhl/video/will-maple-leafs-lightning-series-decided-takes-fewer-penalties/" }); }); var adServerUrl = ""; var $el = $( "#video_container-198910" ); var permalink = $el.closest(\'.snet-single-article\').data(\'permalink\'); /* if ( "1" == true && \'undefined\' !== typeof window.getIndexAds ) { var so = {preroll:{1:{1:{siteID:191888},2:{siteID:191889}}}}; adServerUrl = window.getIndexAds( \'http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305568444112&cmsid=384\', so, permalink); } else { adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305568444112&cmsid=384"; } */ adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305568444112&cmsid=384"; var adServerUrl_result = adServerUrl.includes("cust_params"); var queryString=\'\'; if(adServerUrl_result){ var gettheDUFI = localStorage.getItem("theRED_loc") if(gettheDUFI){ queryString += "dufiid=" + gettheDUFI + \'&\'; queryString += "ppid=" + gettheDUFI + \'&\'; var ppid = "ppid=" + gettheDUFI + \'&\'; } var DUFI_IP = sessionStorage.getItem("DUFI_IP") if(DUFI_IP){ queryString += "dufiip=" + DUFI_IP + \'&\'; } adServerUrl = adServerUrl.replace(/cust_params=/, ppid + \'cust_params=\' + encodeURIComponent(queryString) ); } $el.after( unescape("%3Cscript src=\\"" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js\\" %3E%3C/script%3E") ); $( document ).one( \'ready\', function() { $( "#video_container-198910" ).SNPlayer( { bc_account_id: "1704050871", bc_player_id: "JCdte3tMv", //autoplay: false, //is_has_autoplay_switch: false, bc_videos: 6305568444112, is_has_continuous_play: "false", adserverurl: adServerUrl, section: "", thumbnail: "https://www.sportsnet.ca/wp-content/uploads/2022/05/6305568444112-1024x576.jpg", direct_url: "https://www.sportsnet.ca/nhl/video/will-maple-leafs-lightning-series-decided-takes-fewer-penalties/" }); }); .acf-block-preview .br-video-thumbnail::before { content: ""; position: absolute; top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0); -moz-transform: translate3d(-50%, -50%, 0); -ms-transform: translate3d(-50%, -50%, 0); -o-transform: translate3d(-50%, -50%, 0); -webkit-transform: translate3d(-50%, -50%, 0); width: 20px; height: 24px; border-top: 14px solid transparent; border-left: 22px solid #fff; border-bottom: 14px solid transparent; margin-left: 3px; } Will Brad Marchand make some noise after quiet Game 1? Following a 5-1 loss in Game 1, the Bruins are looking for their own pushback, their own spark, before this one gets away from them — and when the Bruins need a little vinegar you can look for Brad Marchand to stick his nose in there. The motormouth and dangerous scorer was kept off the score sheet in the opener, tossed up a minus-3 and generated just two shots. His line still, for the most part, had play on their side, but not to a dominating level they’re used to. How long will it be before Marchand offers a a controversial play that puts his stamp on the series? How long until he goes full heel, scores a road ice goal and pulls the crowd into it? How long until he toes the line, as he does so famously well? And then how long until we discuss if he stepped over it or not? It’s unlikely that we’ll go through another game without Marchand announcing his presence in a big way — not with the Bruins losing so decisively in Game 1 and needing some emotion. Can the Oilers beat Phillip Danault and his line? Anze Kopitar has been one of the game’s top two-way pivots for some time and a tough defensive matchup for the best players in the world. Adding Phillip Danault to the mix gave the Kings a 1-2 punch down the middle that, they hoped, would translate to playoff success. So far, so good. Aside from Carey Price, Danault was one of Montreal’s most important players in their unlikely run to the Cup Final last year. He was a shutdown master, even though he wasn’t on the ice for much offence. Through the entire run, Danault was on the ice for just six 5-on-5 goals against. He smothered the Maple Leafs stars. He shut out the Jets. Against the high-powered Lightning in the Final, Danault was on the ice for a single goal against at 5-on-5. This year, in Game 1 versus Edmonton, Danault’s line with Alex Iafallo and Trevor Moore was the best on the ice. They outshot their opponents 13-6 at 5-on-5 and outscored them 3-0. Leon Draisaitl’s line, for contrast, was outshot 6-1 at 5-on-5 and kept off the board. That offence is something that could be a little different for Danault this year. While his defence was stellar in Montreal’s 2021 run, he didn’t generate offence and was actually still outscored on the ice. He had five goals in 53 games for the Canadiens all season. In Los Angeles, he scored 27 times in 79 games to far and away set a new career-best. And he scored the winner against Edmonton Monday night on a deflection right in front of the net. Can the Oilers fight back and overcome Danault’s frustrating excellence? Or will the same story about his shutdown defence start to be written again in 2022, and plague the Oilers throughout? var adServerUrl = ""; var $el = $( "#video_container-721121" ); var permalink = $el.closest(\'.snet-single-article\').data(\'permalink\'); /* if ( "1" == true && \'undefined\' !== typeof window.getIndexAds ) { var so = {preroll:{1:{1:{siteID:191888},2:{siteID:191889}}}}; adServerUrl = window.getIndexAds( \'http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305539780112&cmsid=384\', so, permalink); } else { adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305539780112&cmsid=384"; } */ adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305539780112&cmsid=384"; var adServerUrl_result = adServerUrl.includes("cust_params"); var queryString=\'\'; if(adServerUrl_result){ var gettheDUFI = localStorage.getItem("theRED_loc") if(gettheDUFI){ queryString += "dufiid=" + gettheDUFI + \'&\'; queryString += "ppid=" + gettheDUFI + \'&\'; var ppid = "ppid=" + gettheDUFI + \'&\'; } var DUFI_IP = sessionStorage.getItem("DUFI_IP") if(DUFI_IP){ queryString += "dufiip=" + DUFI_IP + \'&\'; } adServerUrl = adServerUrl.replace(/cust_params=/, ppid + \'cust_params=\' + encodeURIComponent(queryString) ); } $el.after( unescape("%3Cscript src=\\"" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js\\" %3E%3C/script%3E") ); $( document ).one( \'ready\', function() { $( "#video_container-721121" ).SNPlayer( { bc_account_id: "1704050871", bc_player_id: "JCdte3tMv", //autoplay: true, //is_has_autoplay_switch: false, bc_videos: 6305539780112, is_has_continuous_play: "false", adserverurl: adServerUrl, section: "", thumbnail: "https://www.sportsnet.ca/wp-content/uploads/2022/05/6305539780112-1024x576.jpg", direct_url: "https://www.sportsnet.ca/nhl/video/smith-scrambles-make-save-kings-danault-score-just/" }); }); var adServerUrl = ""; var $el = $( "#video_container-925435" ); var permalink = $el.closest(\'.snet-single-article\').data(\'permalink\'); /* if ( "1" == true && \'undefined\' !== typeof window.getIndexAds ) { var so = {preroll:{1:{1:{siteID:191888},2:{siteID:191889}}}}; adServerUrl = window.getIndexAds( \'http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305539780112&cmsid=384\', so, permalink); } else { adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305539780112&cmsid=384"; } */ adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305539780112&cmsid=384"; var adServerUrl_result = adServerUrl.includes("cust_params"); var queryString=\'\'; if(adServerUrl_result){ var gettheDUFI = localStorage.getItem("theRED_loc") if(gettheDUFI){ queryString += "dufiid=" + gettheDUFI + \'&\'; queryString += "ppid=" + gettheDUFI + \'&\'; var ppid = "ppid=" + gettheDUFI + \'&\'; } var DUFI_IP = sessionStorage.getItem("DUFI_IP") if(DUFI_IP){ queryString += "dufiip=" + DUFI_IP + \'&\'; } adServerUrl = adServerUrl.replace(/cust_params=/, ppid + \'cust_params=\' + encodeURIComponent(queryString) ); } $el.after( unescape("%3Cscript src=\\"" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js\\" %3E%3C/script%3E") ); $( document ).one( \'ready\', function() { $( "#video_container-925435" ).SNPlayer( { bc_account_id: "1704050871", bc_player_id: "JCdte3tMv", //autoplay: false, //is_has_autoplay_switch: false, bc_videos: 6305539780112, is_has_continuous_play: "false", adserverurl: adServerUrl, section: "", thumbnail: "https://www.sportsnet.ca/wp-content/uploads/2022/05/6305539780112-1024x576.jpg", direct_url: "https://www.sportsnet.ca/nhl/video/smith-scrambles-make-save-kings-danault-score-just/" }); }); .acf-block-preview .br-video-thumbnail::before { content: ""; position: absolute; top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0); -moz-transform: translate3d(-50%, -50%, 0); -ms-transform: translate3d(-50%, -50%, 0); -o-transform: translate3d(-50%, -50%, 0); -webkit-transform: translate3d(-50%, -50%, 0); width: 20px; height: 24px; border-top: 14px solid transparent; border-left: 22px solid #fff; border-bottom: 14px solid transparent; margin-left: 3px; } Will the Wild overcome, or get bogged down in frustration? Special teams is not where the Wild will win this series and, unfortunately for them, it’s where a lot of Game 1 was spent. Both teams got six power plays, but where St. Louis’ second-ranked PP went 33 per cent, Minnesota’s 18th-ranked PP was shut out against a Blues kill that was also top five in the regular season. While a couple calls may have been questionable, others were mistakes on the part of the players. The one that sticks out is Jared Spurgeon, who was lucky to escape suspension for his out-of-character cheap shot in the third period. var adServerUrl = ""; var $el = $( "#video_container-384115" ); var permalink = $el.closest(\'.snet-single-article\').data(\'permalink\'); /* if ( "1" == true && \'undefined\' !== typeof window.getIndexAds ) { var so = {preroll:{1:{1:{siteID:191888},2:{siteID:191889}}}}; adServerUrl = window.getIndexAds( \'http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305543744112&cmsid=384\', so, permalink); } else { adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305543744112&cmsid=384"; } */ adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305543744112&cmsid=384"; var adServerUrl_result = adServerUrl.includes("cust_params"); var queryString=\'\'; if(adServerUrl_result){ var gettheDUFI = localStorage.getItem("theRED_loc") if(gettheDUFI){ queryString += "dufiid=" + gettheDUFI + \'&\'; queryString += "ppid=" + gettheDUFI + \'&\'; var ppid = "ppid=" + gettheDUFI + \'&\'; } var DUFI_IP = sessionStorage.getItem("DUFI_IP") if(DUFI_IP){ queryString += "dufiip=" + DUFI_IP + \'&\'; } adServerUrl = adServerUrl.replace(/cust_params=/, ppid + \'cust_params=\' + encodeURIComponent(queryString) ); } $el.after( unescape("%3Cscript src=\\"" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js\\" %3E%3C/script%3E") ); $( document ).one( \'ready\', function() { $( "#video_container-384115" ).SNPlayer( { bc_account_id: "1704050871", bc_player_id: "JCdte3tMv", //autoplay: true, //is_has_autoplay_switch: false, bc_videos: 6305543744112, is_has_continuous_play: "false", adserverurl: adServerUrl, section: "", thumbnail: "https://www.sportsnet.ca/wp-content/uploads/2022/05/6305543744112-1024x576.jpg", direct_url: "https://www.sportsnet.ca/nhl/video/wilds-spurgeon-heads-penalty-box-nasty-cross-check-buchnevich/" }); }); var adServerUrl = ""; var $el = $( "#video_container-206754" ); var permalink = $el.closest(\'.snet-single-article\').data(\'permalink\'); /* if ( "1" == true && \'undefined\' !== typeof window.getIndexAds ) { var so = {preroll:{1:{1:{siteID:191888},2:{siteID:191889}}}}; adServerUrl = window.getIndexAds( \'http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305543744112&cmsid=384\', so, permalink); } else { adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305543744112&cmsid=384"; } */ adServerUrl = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x360&cust_params=domain%3Dsportsnet.ca&iu=%2F7326%2Fen.sportsnet.web%2FVideo&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&ad_rule=1&vid=6305543744112&cmsid=384"; var adServerUrl_result = adServerUrl.includes("cust_params"); var queryString=\'\'; if(adServerUrl_result){ var gettheDUFI = localStorage.getItem("theRED_loc") if(gettheDUFI){ queryString += "dufiid=" + gettheDUFI + \'&\'; queryString += "ppid=" + gettheDUFI + \'&\'; var ppid = "ppid=" + gettheDUFI + \'&\'; } var DUFI_IP = sessionStorage.getItem("DUFI_IP") if(DUFI_IP){ queryString += "dufiip=" + DUFI_IP + \'&\'; } adServerUrl = adServerUrl.replace(/cust_params=/, ppid + \'cust_params=\' + encodeURIComponent(queryString) ); } $el.after( unescape("%3Cscript src=\\"" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js\\" %3E%3C/script%3E") ); $( document ).one( \'ready\', function() { $( "#video_container-206754" ).SNPlayer( { bc_account_id: "1704050871", bc_player_id: "JCdte3tMv", //autoplay: false, //is_has_autoplay_switch: false, bc_videos: 6305543744112, is_has_continuous_play: "false", adserverurl: adServerUrl, section: "", thumbnail: "https://www.sportsnet.ca/wp-content/uploads/2022/05/6305543744112-1024x576.jpg", direct_url: "https://www.sportsnet.ca/nhl/video/wilds-spurgeon-heads-penalty-box-nasty-cross-check-buchnevich/" }); }); .acf-block-preview .br-video-thumbnail::before { content: ""; position: absolute; top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0); -moz-transform: translate3d(-50%, -50%, 0); -ms-transform: translate3d(-50%, -50%, 0); -o-transform: translate3d(-50%, -50%, 0); -webkit-transform: translate3d(-50%, -50%, 0); width: 20px; height: 24px; border-top: 14px solid transparent; border-left: 22px solid #fff; border-bottom: 14px solid transparent; margin-left: 3px; } “When Jared Spurgeon does something like that, that means your group is off-kilter a little bit,” Wild coach Dean Evason said. “So they’ll rein it back in and he’ll be the guy to do it.” At 5-on-5, the Wild actually carried most of the play, outshooting St. Louis 23-15 and outchancing them in the high danger area 12-4. But the score advantage read 2-0 St. Louis in that spot. It will be key for the Wild, a team that beefed up at the deadline with Nic Deslauriers and Jacob Middleton, to toe the edge of the line but not cross it. More even strength play will be needed in Game 2, which will have as much to do with the standard the game will be called at, as it does Minnesota’s ability to maintain composure. “It’s way easier to hold your composure when you have the lead,” Evason said. “When you don’t have the lead it’s more difficult. You’re frustrated and you let your emotions get the best of you. And you retaliate as opposed to initiate. “We will learn from our mistakes.” The other thing to watch for is who starts for Minnesota? Evason said he’d change up some of the looks on his power play unit and when asked if he would make any other lineup changes he said…”yep,” without getting into detail what those moves might be. The goalie situation is fluid in Minnesota. Cam Talbot was the better performer post-deadline and never lost a regulation game after Marc-Andre Fleury came to town. Fleury had no offensive help in Game 1 and isn’t to blame for the loss. He’ll get the nod in Game 2 as well. But beyond that? Stay tuned. More from Sportsnet Michael Bunting idolized Darcy Tucker. Now, he’s ready to make a similar playoff impact After Game 1 stumble, Oilers must exorcise playoff demons in a hurry .acf-block-preview .br-related-links-wrapper { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; } .acf-block-preview .br-related-links-wrapper a { pointer-events: none; cursor: default; text-decoration: none; color: black; }',
      pubDate: "2022-05-04 15:09:26",
      image_url: "\n",
      source_id: "sportsnet",
      country: ["canada"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "Ja Morant Reveals ‘Friendly Words’ He Had for Steph Curry",
      link: "https://www.si.com/nba/2022/05/04/ja-morant-friendly-words-steph-curry-after-game-2-warriors-grizzlies",
      keywords: ["Breaking", "NBA", "Wire"],
      creator: ["Zach Koons"],
      video_url: null,
      description:
        "The Grizzlies guard was able to return the message that the Warriors sharpshooter gave him after the series opener.",
      content:
        "The Grizzlies guard was able to return the message that the Warriors sharpshooter gave him after the series opener. View the original article to see embedded media. After the Grizzlies closed out a 106–101 victory against the Warriors and streamers fell down from the ceiling at FedExForum on Tuesday night, Memphis point guard Ja Morant walked by Steph Curry. As he did, he had a few words for the Golden State star: “We’re going to have some fun.”Morant revealed the reason for the interaction during his postgame press conference, explaining that all he was doing was dishing back out what Curry had said to him after Game 1.“Had some friendly words with Steph [Curry]. After Game 1 he came to me and Jaren [Jackson] and said, ‘It’s going to be a battle. We’re going to have some fun.’ I was able to, you know, return that message tonight, saying the same thing,” Morant said of his exchange with Curry, per Ben Golliver of The Washington Post. “I always say this is my favorite matchup, playing against a guy like him, a great talent. It’s going to be a battle.”Morant had every right to celebrate after Game 2. He scored 47 points in the Grizzlies 106–101 win, joining LeBron James and Kobe Bryant as the only players with multiple 45-point games in the playoffs before turning 23 years old, according to ESPN Stats & Info. He dropped in Memphis’s final 13 points of the night, closing out Golden State as the best player on the court on Tuesday night.Most importantly, Morant’s performance resulted in the Grizzlies evening up the series against the Warriors. Now tied 1–1, the two teams will head to the Bay Area for the next leg of the Western Conference semifinals.Time will tell who is having more fun, Morant or Curry, after Game 3 wraps up on Saturday. Tip-off of that game is set for 8:30 p.m. ET.More NBA Coverage:Draymond Green Comments on Flipping Off Memphis FansReport: Warriors’ Gary Payton II Suffers Fractured ElbowJa Morant Delivers Superstar Performance as Grizzlies Even Series Against WarriorsDaily Cover: New Information on Allegations of Tanking Against the Browns ",
      pubDate: "2022-05-04 15:01:44",
      full_description:
        "After the Grizzlies closed out a 106–101 victory against the Warriors and streamers fell down from the ceiling at FedExForum on Tuesday night, Memphis point guard Ja Morant walked by Steph Curry. As he did, he had a few words for the Golden State star: “We’re going to have some fun.” Morant revealed the reason for the interaction during his postgame press conference, explaining that all he was doing was dishing back out what Curry had said to him after Game 1. “Had some friendly words with Steph [Curry]. After Game 1 he came to me and Jaren [Jackson] and said, ‘It’s going to be a battle. We’re going to have some fun.’ I was able to, you know, return that message tonight, saying the same thing,” Morant said of his exchange with Curry, per Ben Golliver of The Washington Post . “I always say this is my favorite matchup, playing against a guy like him, a great talent. It’s going to be a battle.” Morant had every right to celebrate after Game 2. He scored 47 points in the Grizzlies 106–101 win, joining LeBron James and Kobe Bryant as the only players with multiple 45-point games in the playoffs before turning 23 years old, according to ESPN Stats & Info . He dropped in Memphis’s final 13 points of the night, closing out Golden State as the best player on the court on Tuesday night . Most importantly, Morant’s performance resulted in the Grizzlies evening up the series against the Warriors. Now tied 1–1, the two teams will head to the Bay Area for the next leg of the Western Conference semifinals. Time will tell who is having more fun, Morant or Curry, after Game 3 wraps up on Saturday. Tip-off of that game is set for 8:30 p.m. ET. More NBA Coverage:",
      image_url:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTg5MjQzNzc4MjA3MzI4MTQ3/morant-curry.jpg",
      source_id: "si",
      country: ["united states of america"],
      category: ["sports"],
      language: "english",
    },
  ],
  nextPage: 2,
};
let nbapage0 = {
  status: "success",
  totalResults: 259,
  results: [
    {
      title:
        "“People scammed me and told me they would turn my million dollars into $10 million”: When Shaq broke down how he fell for get-rich-quick schemes when younger",
      link: "https://thesportsrush.com/nba-news-people-scammed-me-and-told-me-they-would-turn-my-million-dollars-into-10-million-when-shaq-broke-down-how-he-fell-for-get-rich-quick-schemes-when-younger/",
      keywords: ["Basketball", "Shaq"],
      creator: ["Samir Mehdi"],
      video_url: null,
      description:
        "Shaq talked about how he decides on investments and also on how he learned to not trust every financial idea thrown his way. Shaq established himself as one of the greatest players in the history of the game 10 years before he even retired from the league. Three championships, three Finals MVPs, a regular season… The post “People scammed me and told me they would turn my million dollars into $10 million”: When Shaq broke down how he fell for get-rich-quick schemes when younger appeared first on The SportsRush.",
      content:
        "Shaq talked about how he decides on investments and also on how he learned to not trust every financial idea thrown his way. Shaq established himself as one of the greatest players in the history of the game 10 years before he even retired from the league. Three championships, three Finals MVPs, a regular season MVP and countless All-NBA and All-Star nods were enough for O’Neal to retire in 2002. He would of course, win another ring and many more accolades until retiring in 2011 due to an Achille tear with the Boston Celtics. During the course of his 19-year career, Shaquille O’Neal amassed a total of $292 million which comes to about $434 million when adjusting the US Dollar for inflation in today’s time. However, his career earnings are far from what his actual net worth is at it stands at a mighty $400 million, over a decade after receiving his last paycheck as an active player for the NBA. Also read: “I spent $1 million in just 30 minutes!”: When Shaquille O’Neal spoke about his spending problem as NBA star, and the incident that made him change drastically This is due to the fact that Shaq has made a plethora of incredibly business savvy decisions in terms of investments and endorsements. Shaq on his worst financial decisions to date. It may be easy for Charles Barkley and the ‘Inside the NBA’ crew to poke fun at Shaq for being the face of every other brand in the United States as an ambassador but it’s all an incredibly smart ploy by the 4x champ. O’Neal has everything from food chains like 17 Auntie Annie’s and a Krispy Kreme outlet to the flex of being an early investor in Google during the 1990s. However, during those 1990s, ‘The Big Aristotle’ had several hits and misses. Also read: “Charles Barkley, you sound stupid right now! I passed Dikembe Mutombo on the all-time blocks list!”: Shaquille O’Neal claimed he was a better shot blocker than Mutombo He would explain that when he was in his early days in the league, he would fall for several get-rich-quick schemes. “I lost a lot of money in get-rich-quick schemes- if someone said, ‘give me a million and in three years, it’ll be $10 million,’; deals like that, I would take every time. No research, no due diligence.” Shaq would go on to talk about his worst investment being in a paper company that turned out to be a complete scam. He does have some great advice though that he’s said on several platforms where he tears a piece of paper to demonstrate how anybody should save 75% of their earnings and use the remaining $25 for whatever they want. The post “People scammed me and told me they would turn my million dollars into $10 million”: When Shaq broke down how he fell for get-rich-quick schemes when younger appeared first on The SportsRush.",
      pubDate: "2022-05-04 16:30:40",
      full_description:
        "Shaq talked about how he decides on investments and also on how he learned to not trust every financial idea thrown his way. Shaq established himself as one of the greatest players in the history of the game 10 years before he even retired from the league. Three championships, three Finals MVPs, a regular season MVP and countless All-NBA and All-Star nods were enough for O’Neal to retire in 2002. He would of course, win another ring and many more accolades until retiring in 2011 due to an Achille tear with the Boston Celtics. During the course of his 19-year career, Shaquille O’Neal amassed a total of $292 million which comes to about $434 million when adjusting the US Dollar for inflation in today’s time. However, his career earnings are far from what his actual net worth is at it stands at a mighty $400 million, over a decade after receiving his last paycheck as an active player for the NBA. Also read: “I spent $1 million in just 30 minutes!”: When Shaquille O’Neal spoke about his spending problem as NBA star, and the incident that made him change drastically This is due to the fact that Shaq has made a plethora of incredibly business savvy decisions in terms of investments and endorsements. It may be easy for Charles Barkley and the ‘Inside the NBA’ crew to poke fun at Shaq for being the face of every other brand in the United States as an ambassador but it’s all an incredibly smart ploy by the 4x champ. O’Neal has everything from food chains like 17 Auntie Annie’s and a Krispy Kreme outlet to the flex of being an early investor in Google during the 1990s. However, during those 1990s, ‘The Big Aristotle’ had several hits and misses. Also read: “Charles Barkley, you sound stupid right now! I passed Dikembe Mutombo on the all-time blocks list!”: Shaquille O’Neal claimed he was a better shot blocker than Mutombo He would explain that when he was in his early days in the league, he would fall for several get-rich-quick schemes. “I lost a lot of money in get-rich-quick schemes- if someone said, ‘give me a million and in three years, it’ll be $10 million,’; deals like that, I would take every time. No research, no due diligence.” Shaq would go on to talk about his worst investment being in a paper company that turned out to be a complete scam. He does have some great advice though that he’s said on several platforms where he tears a piece of paper to demonstrate how anybody should save 75% of their earnings and use the remaining $25 for whatever they want.",
      image_url: null,
      source_id: "thesportsrush",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
      ],
      category: ["sports"],
      language: "english",
    },
    {
      title:
        "“Ja Morant is box office unlike Tim Duncan and Kawhi Leonard!”: Stephen A Smith firmly believes Grizzlies star is box office following 47 point explosion against Warriors",
      link: "https://thesportsrush.com/nba-news-ja-morant-is-box-office-unlike-tim-duncan-and-kawhi-leonard-stephen-a-smith-firmly-believes-grizzlies-star-is-box-office-following-47-point-explosion-against-warriors/",
      keywords: [
        "Basketball",
        "Grizzlies",
        "ja morant",
        "Kawhi Leonard",
        "Stephen A Smith",
        "Tim Duncan",
      ],
      creator: ["Samir Mehdi"],
      video_url: null,
      description:
        "Ja Morant gets an enormous amount of praise from Stephen A Smith as the analyst claims he’s box office, unlike NBA greats like Tim Duncan. Ja Morant has been nothing but spectacular during the Playoffs throughout his young career. The 22-year old has played in merely 13 games in the postseason and has already dropped… The post “Ja Morant is box office unlike Tim Duncan and Kawhi Leonard!”: Stephen A Smith firmly believes Grizzlies star is box office following 47 point explosion against Warriors appeared first on The SportsRush.",
      content:
        "Ja Morant gets an enormous amount of praise from Stephen A Smith as the analyst claims he’s box office, unlike NBA greats like Tim Duncan. Ja Morant has been nothing but spectacular during the Playoffs throughout his young career. The 22-year old has played in merely 13 games in the postseason and has already dropped 47 points on two separate occasions, with the first time being in a loss to the Utah Jazz in last year’s Playoffs in just Game 2. Morant’s averages during the Playoffs stand at an impressive 27.8 points and 9.4 assists a game, all while shooting 45% from the field. His efficiency did go down a bit this year but that has to do with the fact that he’s yet to develop a reliable shot from the outside and defenses are sagging off him at times, daring him to shoot. Also read: “Ja Morant is a DIFFERENT breed, never fails to show up in the biggest moments”: NBA Twitter erupts as the 2022 MIP records 47 points in Game 2 joining LeBron James and Kobe Bryant in a historic feat This didn’t work last night however as he rained in five 3s in a Game 2 win over the Golden State Warriors after having made just 4 shots from beyond the arc in 6 games against the Timberwolves. Also, the fact that Ja Morant is officially ‘The Man’ on the Grizzlies and this being his first year being defended that way in the Playoffs has something to do with the fact that his efficiency isn’t all too great. Stephen A Smith on Ja Morant and his marketability. Ja Morant seems to be paving the way for a new age of NBA superstars who are constantly on social media, interacting with fans, controlling narratives, and when on the court, being as present as possible. The marketability that Ja possesses, everything from his trash-talk to him doing the griddy, is something that can’t be taught. Stephen A Smith being a guy from New York and loving the Knicks, knows exactly what it’s like for a a star to be extremely marketable. His Knicks were unfortunately a pick away from drafting Ja Morant in 2019, something he regrets to this day but this doesn’t stop him from giving the Murray State alum his flowers. Also read: “Ja Morant is a star, no way he should have been on the MIP conversation!”: LeBron James praises Grizzlies star, bashes media, NBA Twitter reacts According to Smith, Ja Morant has the ability to transcend into more than just a superstar, that being the face of the entire league. He compares Morant to Tim Duncan and Kawhi Leonard, two relatively low-key guys with all the talent in the world but not enough marketability. .@stephenasmith believes Ja Morant has a chance to be a face in the NBA. “Moments define stardom. And this is what Ja Morant is not hesitant to give you.” pic.twitter.com/ng7sMuNPgm — First Take (@FirstTake) May 4, 2022 Ja has been generating views as if he were an established veteran like Steph Curry and LeBron James and he’s merely in his 3rd season. Stephen A correctly points out here that to be the face of the NBA, you need to be marketable. And Ja is all that and more. The post “Ja Morant is box office unlike Tim Duncan and Kawhi Leonard!”: Stephen A Smith firmly believes Grizzlies star is box office following 47 point explosion against Warriors appeared first on The SportsRush.",
      pubDate: "2022-05-04 16:30:39",
      full_description:
        "Ja Morant gets an enormous amount of praise from Stephen A Smith as the analyst claims he’s box office, unlike NBA greats like Tim Duncan. Ja Morant has been nothing but spectacular during the Playoffs throughout his young career. The 22-year old has played in merely 13 games in the postseason and has already dropped 47 points on two separate occasions, with the first time being in a loss to the Utah Jazz in last year’s Playoffs in just Game 2. Morant’s averages during the Playoffs stand at an impressive 27.8 points and 9.4 assists a game, all while shooting 45% from the field. His efficiency did go down a bit this year but that has to do with the fact that he’s yet to develop a reliable shot from the outside and defenses are sagging off him at times, daring him to shoot. Also read: “Ja Morant is a DIFFERENT breed, never fails to show up in the biggest moments”: NBA Twitter erupts as the 2022 MIP records 47 points in Game 2 joining LeBron James and Kobe Bryant in a historic feat This didn’t work last night however as he rained in five 3s in a Game 2 win over the Golden State Warriors after having made just 4 shots from beyond the arc in 6 games against the Timberwolves. Also, the fact that Ja Morant is officially ‘The Man’ on the Grizzlies and this being his first year being defended that way in the Playoffs has something to do with the fact that his efficiency isn’t all too great. Ja Morant seems to be paving the way for a new age of NBA superstars who are constantly on social media, interacting with fans, controlling narratives, and when on the court, being as present as possible. The marketability that Ja possesses, everything from his trash-talk to him doing the griddy, is something that can’t be taught. Stephen A Smith being a guy from New York and loving the Knicks, knows exactly what it’s like for a a star to be extremely marketable. His Knicks were unfortunately a pick away from drafting Ja Morant in 2019, something he regrets to this day but this doesn’t stop him from giving the Murray State alum his flowers. Also read: “Ja Morant is a star, no way he should have been on the MIP conversation!”: LeBron James praises Grizzlies star, bashes media, NBA Twitter reacts According to Smith, Ja Morant has the ability to transcend into more than just a superstar, that being the face of the entire league. He compares Morant to Tim Duncan and Kawhi Leonard, two relatively low-key guys with all the talent in the world but not enough marketability. . @stephenasmith believes Ja Morant has a chance to be a face in the NBA. “Moments define stardom. And this is what Ja Morant is not hesitant to give you.” pic.twitter.com/ng7sMuNPgm — First Take (@FirstTake) May 4, 2022 Ja has been generating views as if he were an established veteran like Steph Curry and LeBron James and he’s merely in his 3 rd season. Stephen A correctly points out here that to be the face of the NBA, you need to be marketable. And Ja is all that and more.",
      image_url: null,
      source_id: "thesportsrush",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
      ],
      category: ["sports"],
      language: "english",
    },
    {
      title: "Top 25 Men’s Players in Hoops Transfer Portal",
      link: "https://www.si.com/college/2022/05/04/transfer-portal-rankings-basketball-bates-hunter",
      keywords: [
        "College Basketball",
        "HP Feature",
        "College",
        "News And Analysis",
      ],
      creator: ["Kevin Sweeney"],
      video_url: null,
      description:
        "After a flurry of new entrants ahead of the deadline, there is plenty of talent out there on the market.",
      content:
        "After a flurry of new entrants ahead of the deadline, there is plenty of talent out there on the market.The May 1 deadline for college basketball players to transfer schools and receive immediate eligibility has come and gone, which means the vast majority of players that will be on the move this offseason have now put their name in the portal. After a mad rush of high-profile names entered the portal in the week leading up to the cut-off date, as well as a number of key commitments among previous top available transfers, it’s a good time to update the best available players that could make an impact on men’s college basketball with new teams in 2022–23. Many of these players are testing the NBA draft process and may eventually decide to turn pro rather than stay in college, but here are the 25 best players still open to a new NCAA destination.Listed school is where player entered portal from. Left to right: Emoni Bates, Tyrese Hunter and Keion Brooks Jr.Petre Thomas; Michael C. Johnson; Nelson Chenault/USA TODAY Sports 1. Tyrese Hunter, Iowa StateHunter was given the keys to Iowa State’s offense from the moment he stepped on campus in Ames and became a key reason the Cyclones were perhaps the most improved team in the country this season. He’s undersized and not a great shooter (27% from deep as a freshman) but makes up for it with tremendous poise, sharp defensive instincts and great feel running a team. He’s expected to be an NBA draft prospect in 2023, so whoever lands him may only have him for a year. The six schools in the mix for his services: Tennessee, Kansas, Louisville, Gonzaga, Texas and Purdue.2. Pete Nance, NorthwesternNance is focused on the NBA draft process and has a good chance to at least get a two-way contract should he turn pro this summer. But if he elects to use his extra year of eligibility, he’ll be among the best players to change teams this spring. Nance is a highly skilled 6’10” big man capable of playing center or power forward. He shot 45% from three this season at relatively high volume and is a gifted passer. His new team may not design its offense around him quite the way Northwestern did, but Nance will look even better if surrounded with better guards than he played with in Evanston.3. Kevin McCullar, Texas TechHe’s not an explosive offensive player, but every team in the country would gladly take a player like McCullar in its rotation. A terrific defender who has played in two NCAA tournaments and can play four positions, McCullar is considering Gonzaga and Kansas should he elect to return to school. Texas Tech used him as a point guard for much of this past season, though his natural position is more as a secondary ballhandler. But his length, physicality and feel makes him one of the most valuable commodities in the portal at this point.4. AJ Green, Northern IowaGreen was a star at Northern Iowa from the moment he stepped on campus, earning a reputation among Missouri Valley coaches as not just a high-level shotmaker but also an elite competitor and winner. In fact, the main reason he wound up at UNI in the first place was his father, Kyle, was an assistant for the Panthers. Now, the elder Green is on staff at Iowa State, which has fueled belief around the sport that AJ will end up teaming up with his father again in Ames. If not, he’ll have plenty of other suitors from across the college hoops landscape.5. Matthew Mayer, BaylorThe 2021 national champion is reportedly completely focused on the NBA draft process, but entered the portal ahead of the May 1 deadline in order to keep his options open. Mayer didn’t make the leap some expected in ’21–22 as he shifted into a more featured role in the Baylor offense, but still has plenty of intrigue as a long wing/forward who can stroke it from beyond the arc. If he chooses to return to school, plenty of high-majors would want a guy with championship experience and his skill set.6. Kenneth Lofton Jr., Louisiana TechCoaches at top programs across the country had been waiting for Lofton’s name to hit the portal since Eric Konkol took the Tulsa job in March. The burly forward burst onto national radars last summer when he helped lead Team USA to a gold medal at the U-19 World Cup alongside the likes of top draft prospects Chet Holmgren, Johnny Davis and Jaden Ivey. Lofton’s 6’7”, 275-pound frame makes him less of an ideal fit at the next level, but he should be a highly productive high-major player and has had contact with a laundry list of big-name schools since entering the portal.7. Jamarion Sharp, Western KentuckySharp may not be the best player in the transfer portal, but he’s certainly the biggest. The 7’5” giant had a productive first season at Western Kentucky after a stint at John A. Logan community college to begin his career, tying Auburn’s Walker Kessler for the most blocked shots per game nationally while shooting nearly 73% from the field. His extremely lean frame and raw skill set make him somewhat limited still, but he’s capable of taking over a game because of his ability to protect the rim. One school to watch here: Missouri, which hired Kyle Smithpeters (Sharp’s former juco head coach) as an assistant coach this offseason.8. Osun Osunniyi, St. BonaventureOne of the best rim-protectors in the sport, Osunniyi hit the portal late in April after spending four years as a critical piece for St. Bonaventure. His massive wingspan and elite instincts have made him one of the sport’s most-feared shot blockers, and he’s also a strong offensive weapon because of his impressive hands and soft touch. He’ll have no shortage of suitors in the coming days.9. Isiaih Mosley, Missouri StateMosley is one of just three men’s Division I players in the last 30 years to average 20 points per game on 50% from the field, 40% from three and 90% from the free throw line. That stat alone is enough to know why he’ll be pursued at the highest level by high-level programs, despite some athletic and defensive limitations. He can flat-out score in isolation, as highlighted by his 40-point outburst against an elite Loyola Chicago defense in January. Few teams at the highest level will build their offense around him like Missouri State did, but he’ll be impactful as a scorer anywhere he goes.10. Malachi Smith, ChattanoogaThe 2021–22 SoCon Player of the Year, Smith is testing the NBA waters while also exploring other college options this spring. He led Chattanooga to the NCAA tournament and nearly a first-round upset of Illinois, and is one of the best all-around guards available in the portal. Smith can create in ball screens and can play either guard spot, and he’s physical enough to get downhill and score through contact at the rim. Plus, he’s an excellent defensive player.11. Keion Brooks Jr., KentuckyBrooks is a throwback power forward, more known for his physicality than ability to space the floor. He was a productive starter for a top-10 team this past season, playing off Oscar Tshiebwe and averaging double-figure scoring for the second season in a row. Brooks probably isn’t a guy you want to build your team around, but anyone in need of a plug-and-play starter at the power forward position would be wise to get involved here.12. Courtney Ramey, TexasWith more than 100 career starts in the Big 12 under his belt, Ramey is as proven a transfer as they come for high-major teams in need of guard help. He can play on or off the ball, has shot 37% from deep in his career and is known as a strong perimeter defender. Pretty much any coach could plug Ramey into their system and find a role for him, which is perhaps the reason he has heard from the likes of Villanova, Kentucky, UConn, Gonzaga and Maryland since hitting the portal.13. Emoni Bates, MemphisIt’s incredibly difficult to rank Bates in a list like this as he hits the portal trying to rebuild his stock after a disastrous 2021–22 season. He’s far from the prospect he was anointed to be at 15 years old, but still is a five-star talent who could be impactful in the right context. Bates needs to be coached and brought along slowly at his new destination; being thrust into the point guard role at Memphis at 17 years old wasn’t fair to his development. Louisville and DePaul are perceived to be favorites to land his services.14. Patrick Baldwin Jr., UW-MilwaukeeA former five-star recruit, Baldwin spurned offers from Duke and pretty much every other high-major program in the country to play for his father at UW-Milwaukee. One injury-plagued season later, Baldwin’s NBA stock has dropped some, and his father has been fired. Despite that, Baldwin has a good chance to be a first-round NBA pick thanks to his high-level shooting ability at 6’10”. But, he’s in the portal to keep his options open and, like Bates, is a more-than-worthwhile reclamation project should he not get good NBA feedback this spring.15. Efe Abogidi, Washington StateThe 6’10” big man didn’t have the breakout sophomore season some were projecting in Pullman, but Abogidi still presents a high-upside option for teams looking for a talent injection in their frontcourt. He has been a key cog for two seasons in the Pac-12, and really grew as a shot blocker this season, posting close to a 10% block rate. Plus, the Nigerian big man has impressive shooting touch, making 80% of his free throws over his two years at Wazzu and flashing the occasional ability to hit from deep.16. Antoine Davis, Detroit MercyThere’s no active player in college basketball who has scored more points in his career than Davis, who tallied more than 2,700 points in his four years at Detroit Mercy before entering the portal this spring for his extra year of eligibility. He’s considering four schools in addition to a return to Detroit, and all four are situations in which teams would make him a featured part of the offense: BYU, Georgetown, Kansas State and Maryland. If he plays out a full season, he’ll likely end up in the top 10 and potentially the top five all-time in scoring in D-I men’s basketball history. Davis played four seasons for his father Mike at Detroit Mercy.Raj Mehta/USA TODAY Sports 17. Manny Bates, NC StateBates remains among the best options for teams in need of frontcourt help despite playing just one minute all season due to a shoulder injury. The best trait Bates brings to the table is his ability to block shots—he posted a block rate better than 10% (among the top 20 nationally) in 2020–21. Without him this season, NC State’s defense fell off a cliff, becoming one of the worst high-major defenses in the country. Bates has great size, finishes well at the rim and has great shot-blocking instincts. He visited Butler and has interest from several other high-major programs.18. Mouhamed Gueye, Washington StateSo many portal additions are about finding proven contributors who can easily plug into roles. Gueye is a bit different, an upside play in adding a 6’11” former top-100 recruit with tremendous potential thanks to his smooth outside stroke. Gueye was in the rotation this past season for a Washington State team that reached the semifinals of the NIT, but his best basketball is ahead of him and he may eventually have a future in the NBA. How productive he’ll be next season remains to be seen, but recruiting Gueye is like getting a somewhat more proven four- or five-star recruit.19. Isaac Likekele, Oklahoma StateLikekele is one of the more unique players in college basketball, a 6’5” bowling ball of a guard capable of playing point guard and defending power forwards. That skill set makes him a tricky fit: He’s probably best in a context like how he was showcased at the Fiba U-19 World Cup in 2019—as a glue guy and defensive wrecker capable of attacking in transition—but played in a higher-usage role in his four years at Oklahoma State. Virtually every team could use Likekele as a switchable defender and energy guy, but if he’s looking for a spot to put the ball in his hands the fit is trickier.20. Umoja Gibson, OklahomaGibson is undersized for the shooting guard position, but he’s a knockdown shooter that would provide a major boost for teams in need of floor spacing. He knocked down 92 threes at a 39% clip this past season and has shot 36% or better from deep in all four of his collegiate seasons. Gibson may not be a great defender or a high-level scorer in isolation, but his ability to make shots made him one of the most highly coveted names to enter the portal in the final days before May 1.21. Kyle Lofton, St. BonaventureAtlantic 10 coaches rave about Lofton as the consummate point guard, a leader and a winner whose ability to distribute and make clutch plays was a huge reason for St. Bonaventure’s success in his four seasons in Olean. Now, the New Jersey native will use his extra year of eligibility elsewhere, and plenty of high-majors in need of help at the point guard spot have already reached out. Lofton’s a poor outside shooter and isn’t the most dynamic shot creator in the world, but he’s crafty and tough, and I trust him late in games to make winning plays.22. Ricky Council IV, Wichita StateThe AAC’s Sixth Man of the Year in 2021–22, Council is the most sought-after name from the Shockers’ offseason mass exodus. Currently considering Alabama, Arkansas, Georgia Tech, Iowa State, Kansas and Mississippi State, the 6’6” wing projects as a plug-and-play option for teams in need of versatility and scoring help. He’s capable of guarding multiple positions and is a solid outside shooter. He’ll be an easy addition to the starting lineup for a high-major team looking to round out a rotation.23. Grant Sherfield, NevadaThere’s a lot to like with Sherfield: He’s put up consecutive impressive statistical seasons at Nevada, is a skilled operator in ball screens and has made his fair share of clutch shots over the last two seasons. So what holds him back from being higher on this list? First, he’s a second-time transfer, which means he’s not guaranteed to be immediately eligible (though many coaches believe all transfers will eventually be made eligible). Second, he was part of a Nevada team this season that was one of the most disappointing in the country, one that seemed riddled with chemistry issues. Maybe a change of scenery helps, but Sherfield’s being the leader of a team that fell apart as spectacularly as the Wolf Pack did may give some teams cause for pause.24. Jarod Lucas, Oregon StateSharpshooters are a valuable commodity in the portal, and Lucas can knock down threes with the best of them. He’s perhaps best known for his role in bringing Oregon State to the Elite Eight in 2021, drilling multiple threes in all nine games across those magical Pac-12 and NCAA tournament runs. He averaged more than 13 points per game this season in a brutal three-win year for the Beavers. Teams out West in need of shooting will be in pursuit.25. Keyontae Johnson, FloridaThere are far more questions than answers regarding Johnson’s future, but a player of his talent level being in the portal warrants consideration for this list. On basketball ability alone, Johnson would be the clear top player on this list. But Johnson was never cleared by Florida’s medical staff to return to action after he collapsed on the floor during a December 2020 game against Florida State that left the Gators star in a coma. Any school bringing in Johnson would need the support of its medical staff. And on top of the on-court medical concerns, Gainesville Police has accused Johnson of felony sexual assault tied to an incident in late February. More College Basketball Coverage:• With Scheierman Transfer, Creighton in Mix for No. 1• NIL, ‘Booster Banks’ and Recruiting Wars• Inside Highs and Lows of the Transfer Portal",
      pubDate: "2022-05-04 16:21:56",
      full_description:
        "The May 1 deadline for college basketball players to transfer schools and receive immediate eligibility has come and gone, which means the vast majority of players that will be on the move this offseason have now put their name in the portal. After a mad rush of high-profile names entered the portal in the week leading up to the cut-off date, as well as a number of key commitments among previous top available transfers, it’s a good time to update the best available players that could make an impact on men’s college basketball with new teams in 2022–23. Many of these players are testing the NBA draft process and may eventually decide to turn pro rather than stay in college, but here are the 25 best players still open to a new NCAA destination. Listed school is where player entered portal from. Left to right: Emoni Bates, Tyrese Hunter and Keion Brooks Jr. Petre Thomas; Michael C. Johnson; Nelson Chenault/USA TODAY Sports Hunter was given the keys to Iowa State’s offense from the moment he stepped on campus in Ames and became a key reason the Cyclones were perhaps the most improved team in the country this season. He’s undersized and not a great shooter (27% from deep as a freshman) but makes up for it with tremendous poise, sharp defensive instincts and great feel running a team. He’s expected to be an NBA draft prospect in 2023, so whoever lands him may only have him for a year. The six schools in the mix for his services: Tennessee, Kansas, Louisville, Gonzaga, Texas and Purdue. Nance is focused on the NBA draft process and has a good chance to at least get a two-way contract should he turn pro this summer. But if he elects to use his extra year of eligibility, he’ll be among the best players to change teams this spring. Nance is a highly skilled 6’10” big man capable of playing center or power forward. He shot 45% from three this season at relatively high volume and is a gifted passer. His new team may not design its offense around him quite the way Northwestern did, but Nance will look even better if surrounded with better guards than he played with in Evanston. He’s not an explosive offensive player, but every team in the country would gladly take a player like McCullar in its rotation. A terrific defender who has played in two NCAA tournaments and can play four positions, McCullar is considering Gonzaga and Kansas should he elect to return to school. Texas Tech used him as a point guard for much of this past season, though his natural position is more as a secondary ballhandler. But his length, physicality and feel makes him one of the most valuable commodities in the portal at this point. Green was a star at Northern Iowa from the moment he stepped on campus, earning a reputation among Missouri Valley coaches as not just a high-level shotmaker but also an elite competitor and winner. In fact, the main reason he wound up at UNI in the first place was his father, Kyle, was an assistant for the Panthers. Now, the elder Green is on staff at Iowa State, which has fueled belief around the sport that AJ will end up teaming up with his father again in Ames. If not, he’ll have plenty of other suitors from across the college hoops landscape. The 2021 national champion is reportedly completely focused on the NBA draft process, but entered the portal ahead of the May 1 deadline in order to keep his options open. Mayer didn’t make the leap some expected in ’21–22 as he shifted into a more featured role in the Baylor offense, but still has plenty of intrigue as a long wing/forward who can stroke it from beyond the arc. If he chooses to return to school, plenty of high-majors would want a guy with championship experience and his skill set. Coaches at top programs across the country had been waiting for Lofton’s name to hit the portal since Eric Konkol took the Tulsa job in March. The burly forward burst onto national radars last summer when he helped lead Team USA to a gold medal at the U-19 World Cup alongside the likes of top draft prospects Chet Holmgren, Johnny Davis and Jaden Ivey. Lofton’s 6’7”, 275-pound frame makes him less of an ideal fit at the next level, but he should be a highly productive high-major player and has had contact with a laundry list of big-name schools since entering the portal. Sharp may not be the best player in the transfer portal, but he’s certainly the biggest. The 7’5” giant had a productive first season at Western Kentucky after a stint at John A. Logan community college to begin his career, tying Auburn’s Walker Kessler for the most blocked shots per game nationally while shooting nearly 73% from the field. His extremely lean frame and raw skill set make him somewhat limited still, but he’s capable of taking over a game because of his ability to protect the rim. One school to watch here: Missouri, which hired Kyle Smithpeters (Sharp’s former juco head coach) as an assistant coach this offseason. One of the best rim-protectors in the sport, Osunniyi hit the portal late in April after spending four years as a critical piece for St. Bonaventure. His massive wingspan and elite instincts have made him one of the sport’s most-feared shot blockers, and he’s also a strong offensive weapon because of his impressive hands and soft touch. He’ll have no shortage of suitors in the coming days. Mosley is one of just three men’s Division I players in the last 30 years to average 20 points per game on 50% from the field, 40% from three and 90% from the free throw line. That stat alone is enough to know why he’ll be pursued at the highest level by high-level programs, despite some athletic and defensive limitations. He can flat-out score in isolation, as highlighted by his 40-point outburst against an elite Loyola Chicago defense in January. Few teams at the highest level will build their offense around him like Missouri State did, but he’ll be impactful as a scorer anywhere he goes. The 2021–22 SoCon Player of the Year, Smith is testing the NBA waters while also exploring other college options this spring. He led Chattanooga to the NCAA tournament and nearly a first-round upset of Illinois, and is one of the best all-around guards available in the portal. Smith can create in ball screens and can play either guard spot, and he’s physical enough to get downhill and score through contact at the rim. Plus, he’s an excellent defensive player. Brooks is a throwback power forward, more known for his physicality than ability to space the floor. He was a productive starter for a top-10 team this past season, playing off Oscar Tshiebwe and averaging double-figure scoring for the second season in a row. Brooks probably isn’t a guy you want to build your team around, but anyone in need of a plug-and-play starter at the power forward position would be wise to get involved here. With more than 100 career starts in the Big 12 under his belt, Ramey is as proven a transfer as they come for high-major teams in need of guard help. He can play on or off the ball, has shot 37% from deep in his career and is known as a strong perimeter defender. Pretty much any coach could plug Ramey into their system and find a role for him, which is perhaps the reason he has heard from the likes of Villanova, Kentucky, UConn, Gonzaga and Maryland since hitting the portal. It’s incredibly difficult to rank Bates in a list like this as he hits the portal trying to rebuild his stock after a disastrous 2021–22 season. He’s far from the prospect he was anointed to be at 15 years old , but still is a five-star talent who could be impactful in the right context. Bates needs to be coached and brought along slowly at his new destination; being thrust into the point guard role at Memphis at 17 years old wasn’t fair to his development. Louisville and DePaul are perceived to be favorites to land his services. A former five-star recruit, Baldwin spurned offers from Duke and pretty much every other high-major program in the country to play for his father at UW-Milwaukee. One injury-plagued season later, Baldwin’s NBA stock has dropped some, and his father has been fired. Despite that, Baldwin has a good chance to be a first-round NBA pick thanks to his high-level shooting ability at 6’10”. But, he’s in the portal to keep his options open and, like Bates, is a more-than-worthwhile reclamation project should he not get good NBA feedback this spring. The 6’10” big man didn’t have the breakout sophomore season some were projecting in Pullman, but Abogidi still presents a high-upside option for teams looking for a talent injection in their frontcourt. He has been a key cog for two seasons in the Pac-12, and really grew as a shot blocker this season, posting close to a 10% block rate. Plus, the Nigerian big man has impressive shooting touch, making 80% of his free throws over his two years at Wazzu and flashing the occasional ability to hit from deep. There’s no active player in college basketball who has scored more points in his career than Davis, who tallied more than 2,700 points in his four years at Detroit Mercy before entering the portal this spring for his extra year of eligibility. He’s considering four schools in addition to a return to Detroit, and all four are situations in which teams would make him a featured part of the offense: BYU, Georgetown, Kansas State and Maryland. If he plays out a full season, he’ll likely end up in the top 10 and potentially the top five all-time in scoring in D-I men’s basketball history. Davis played four seasons for his father Mike at Detroit Mercy. Raj Mehta/USA TODAY Sports Bates remains among the best options for teams in need of frontcourt help despite playing just one minute all season due to a shoulder injury. The best trait Bates brings to the table is his ability to block shots—he posted a block rate better than 10% (among the top 20 nationally) in 2020–21. Without him this season, NC State’s defense fell off a cliff, becoming one of the worst high-major defenses in the country. Bates has great size, finishes well at the rim and has great shot-blocking instincts. He visited Butler and has interest from several other high-major programs. So many portal additions are about finding proven contributors who can easily plug into roles. Gueye is a bit different, an upside play in adding a 6’11” former top-100 recruit with tremendous potential thanks to his smooth outside stroke. Gueye was in the rotation this past season for a Washington State team that reached the semifinals of the NIT, but his best basketball is ahead of him and he may eventually have a future in the NBA. How productive he’ll be next season remains to be seen, but recruiting Gueye is like getting a somewhat more proven four- or five-star recruit. Likekele is one of the more unique players in college basketball, a 6’5” bowling ball of a guard capable of playing point guard and defending power forwards. That skill set makes him a tricky fit: He’s probably best in a context like how he was showcased at the Fiba U-19 World Cup in 2019—as a glue guy and defensive wrecker capable of attacking in transition—but played in a higher-usage role in his four years at Oklahoma State. Virtually every team could use Likekele as a switchable defender and energy guy, but if he’s looking for a spot to put the ball in his hands the fit is trickier. [Update: Likekele committed to Ohio State on May 4.] Gibson is undersized for the shooting guard position, but he’s a knockdown shooter that would provide a major boost for teams in need of floor spacing. He knocked down 92 threes at a 39% clip this past season and has shot 36% or better from deep in all four of his collegiate seasons. Gibson may not be a great defender or a high-level scorer in isolation, but his ability to make shots made him one of the most highly coveted names to enter the portal in the final days before May 1. Atlantic 10 coaches rave about Lofton as the consummate point guard, a leader and a winner whose ability to distribute and make clutch plays was a huge reason for St. Bonaventure’s success in his four seasons in Olean. Now, the New Jersey native will use his extra year of eligibility elsewhere, and plenty of high-majors in need of help at the point guard spot have already reached out. Lofton’s a poor outside shooter and isn’t the most dynamic shot creator in the world, but he’s crafty and tough, and I trust him late in games to make winning plays. The AAC’s Sixth Man of the Year in 2021–22, Council is the most sought-after name from the Shockers’ offseason mass exodus. Currently considering Alabama, Arkansas, Georgia Tech, Iowa State, Kansas and Mississippi State, the 6’6” wing projects as a plug-and-play option for teams in need of versatility and scoring help. He’s capable of guarding multiple positions and is a solid outside shooter. He’ll be an easy addition to the starting lineup for a high-major team looking to round out a rotation. There’s a lot to like with Sherfield: He’s put up consecutive impressive statistical seasons at Nevada, is a skilled operator in ball screens and has made his fair share of clutch shots over the last two seasons. So what holds him back from being higher on this list? First, he’s a second-time transfer, which means he’s not guaranteed to be immediately eligible (though many coaches believe all transfers will eventually be made eligible). Second, he was part of a Nevada team this season that was one of the most disappointing in the country, one that seemed riddled with chemistry issues. Maybe a change of scenery helps, but Sherfield’s being the leader of a team that fell apart as spectacularly as the Wolf Pack did may give some teams cause for pause. Sharpshooters are a valuable commodity in the portal, and Lucas can knock down threes with the best of them. He’s perhaps best known for his role in bringing Oregon State to the Elite Eight in 2021, drilling multiple threes in all nine games across those magical Pac-12 and NCAA tournament runs. He averaged more than 13 points per game this season in a brutal three-win year for the Beavers. Teams out West in need of shooting will be in pursuit. There are far more questions than answers regarding Johnson’s future, but a player of his talent level being in the portal warrants consideration for this list. On basketball ability alone, Johnson would be the clear top player on this list. But Johnson was never cleared by Florida’s medical staff to return to action after he collapsed on the floor during a December 2020 game against Florida State that left the Gators star in a coma. Any school bringing in Johnson would need the support of its medical staff. And on top of the on-court medical concerns, Gainesville Police has accused Johnson of felony sexual assault tied to an incident in late February. More College Basketball Coverage: • With Scheierman Transfer, Creighton in Mix for No. 1 • NIL, ‘Booster Banks’ and Recruiting Wars • Inside Highs and Lows of the Transfer Portal",
      image_url:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTg5MjQ1ODUyNjc2NTMxOTky/transfer-portal-emoni-bates-tyrese-hunter-keion-brooks.jpg",
      source_id: "si",
      country: ["united states of america"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "Breanna Stewart Says WNBA Is ‘At A Tipping Point’",
      link: "https://www.si.com/wnba/2022/05/04/breanna-stewart-says-wnba-tipping-point-restrictive-salary-cap",
      keywords: ["Wire", "Breaking", "WNBA"],
      creator: ["Zach Koons"],
      video_url: null,
      description:
        "The former MVP called upon the league to make changes to its current structure ahead of the 2022 season.",
      content:
        "The former MVP called upon the league to make changes to its current structure ahead of the 2022 season. View the original article to see embedded media. Amid a string of roster cuts from teams around the WNBA, star forward Breanna Stewart became the latest high-profile figure to call for change to the league’s current cap structure.In a Twitter thread posted on Wednesday, the two-time WNBA champion gave her thoughts on how the hard salary cap has contributed to teams waiving young players and 2022 draft picks this week.“I hate seeing so many great players being cut from WNBA teams,” Stewart began. “Salaries went up, but a very restrictive hard cap has put teams in a bind. We need to soften it to allow [sic] our league to grow.”The 2018 league MVP continued, arguing that the WNBA needs to step in to protect players on their rookie contracts from getting cut from rosters early on in their careers. “The WNBA needs to adjust ASAP (before the next CBA) to allow teams more flexibility to keep rookies contract players on the roster,” Stewart continued. “Call them practice players and make sure they don’t hit the cap. We need to be developing young talent and taking advantage of the momentum newly drafted players bring from the college game.”Stewart ended the thread, saying that the league is at a “tipping point” and could run into further problems if “tweaks” aren’t made to the cap.Stewart is just the latest figure around the league to comment on this week’s roster cuts with the season set to begin Friday, May 6. On Tuesday, Sun coach Curt Miller spoke about the precarious balance of choosing a roster but squeezing in under the cap.“The underrated part is the hard salary cap,” Miller explained, per Lila Bromberg of the Hartford Courant. “And after your six guaranteed contracts, there’s a ton of different combinations of how those other five fit the puzzle pieces of your salary cap. And there was the combinations that didn’t allow you to keep everybody, there was combinations that included [third-year player] Kaila [Charles] that then would prohibit you from keeping other people. And so you had to play into fact all those combinations that either work together or didn’t work together.“And so what the general public forgets at times, it’s not always about the best 11 players, it’s the best 11 players that fit under your salary cap. And that is two different statements. The best 11 players aren’t always the best 11 that fit under the salary cap. So you have to make tough decisions to fit under a league that has a hard salary cap.”Sparks forward Chiney Ogwumike offered up a possible solution to the events of the last few days, suggesting that the WNBA would benefit from the creation of a developmental league, much like the NBA’s G League.“I was just looking at some of the names that have been cut … they’re like high draft picks,” the former No. 1 pick said in a Tuesday press conference, per Mirjam Swanson. “In no circumstances should we have a league when high draft picks aren’t on a roster.”WNBA teams have until the season begins to cut their rosters to 12 players, but some clubs will only end up carrying 11 due to salary-cap space. The Lynx shocked the league yesterday by waiving six players, including 2020 Rookie of the Year Crystal Dangerfield and both of their recent draft picks, Kayla Jones and Hannah Sjerven.The 2022 WNBA season tips off on Friday.More WNBA Coverage:Female Athletes Speak Out Against Potential Roe v. Wade ReversalThe U.S. Government Now Considers Brittney Griner “Wrongfully Detained” By The Russian GovernmentFive Biggest Questions Ahead of 2022 WNBA SeasonDaily Cover: Bob Baffert Won’t Be at the Kentucky Derby, but Racing Still Can’t Shake Him ",
      pubDate: "2022-05-04 16:21:12",
      full_description:
        "Amid a string of roster cuts from teams around the WNBA, star forward Breanna Stewart became the latest high-profile figure to call for change to the league’s current cap structure. In a Twitter thread posted on Wednesday , the two-time WNBA champion gave her thoughts on how the hard salary cap has contributed to teams waiving young players and 2022 draft picks this week. “I hate seeing so many great players being cut from WNBA teams,” Stewart began. “Salaries went up, but a very restrictive hard cap has put teams in a bind. We need to soften it to allow [sic] our league to grow.” The 2018 league MVP continued, arguing that the WNBA needs to step in to protect players on their rookie contracts from getting cut from rosters early on in their careers. “The WNBA needs to adjust ASAP (before the next CBA) to allow teams more flexibility to keep rookies contract players on the roster,” Stewart continued. “Call them practice players and make sure they don’t hit the cap. We need to be developing young talent and taking advantage of the momentum newly drafted players bring from the college game.” Stewart ended the thread, saying that the league is at a “tipping point” and could run into further problems if “tweaks” aren’t made to the cap. Stewart is just the latest figure around the league to comment on this week’s roster cuts with the season set to begin Friday, May 6. On Tuesday, Sun coach Curt Miller spoke about the precarious balance of choosing a roster but squeezing in under the cap. “The underrated part is the hard salary cap,” Miller explained, per Lila Bromberg of the Hartford Courant . “And after your six guaranteed contracts, there’s a ton of different combinations of how those other five fit the puzzle pieces of your salary cap. And there was the combinations that didn’t allow you to keep everybody, there was combinations that included [third-year player] Kaila [Charles] that then would prohibit you from keeping other people. And so you had to play into fact all those combinations that either work together or didn’t work together. “And so what the general public forgets at times, it’s not always about the best 11 players, it’s the best 11 players that fit under your salary cap. And that is two different statements. The best 11 players aren’t always the best 11 that fit under the salary cap. So you have to make tough decisions to fit under a league that has a hard salary cap.” Sparks forward Chiney Ogwumike offered up a possible solution to the events of the last few days, suggesting that the WNBA would benefit from the creation of a developmental league, much like the NBA’s G League. “I was just looking at some of the names that have been cut … they’re like high draft picks,” the former No. 1 pick said in a Tuesday press conference , per Mirjam Swanson. “In no circumstances should we have a league when high draft picks aren’t on a roster.” WNBA teams have until the season begins to cut their rosters to 12 players, but some clubs will only end up carrying 11 due to salary-cap space. The Lynx shocked the league yesterday by waiving six players , including 2020 Rookie of the Year Crystal Dangerfield and both of their recent draft picks, Kayla Jones and Hannah Sjerven. The 2022 WNBA season tips off on Friday. More WNBA Coverage:",
      image_url:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Ch_1200%2Cq_auto:good%2Cw_1200/MTg5MjQ1NDc1MjU2MjgwOTc5/breanna-stewart.jpg",
      source_id: "si",
      country: ["united states of america"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "Grizzlies edge Warriors; Celtics demolish Bucks",
      link: "https://www.manilatimes.net/2022/05/05/sports/grizzlies-edge-warriors-celtics-demolish-bucks/1842405",
      keywords: ["Sports"],
      creator: ["Agence France-Presse"],
      video_url: null,
      description:
        "LOS ANGELES: Ja Morant erupted for 47 points as the Memphis Grizzlies outmuscled the Golden State Warriors to level their Western Conference NBA playoff series with a bruising 106-101 victory on Tuesday (Wednesday in Manila).Morant's career-high playoff points total dragged Memphis over the line to square the best-of-seven semifinal series at 1-1 after a nail-biting duel at the FedEx Forum in Tennessee.But a physical encounter was shrouded in controversy, with the Grizzlies' Dillon Brooks ejected after only three minutes for flattening the Warriors' Gary Payton 2nd as he drove for a basket.Payton played no further part in the contest and Warriors coach Steve Kerr later confirmed he had suffered a fractured elbow.The Warriors' Draymond Green, ejected in game one on Sunday, was also on the receiving end of the Grizzlies' robust tactics, needing prolonged treatment in the locker room in the first quarter after being stiff-armed by Xavier Tillman.Kerr later described the Grizzlies first-quarter approach as \"dirty not physical\" and accused Brooks of \"breaking the code\" amongst NBA professionals.\"There's a code in this league that players follow where you never put a guy's season or career in jeopardy by taking somebody out in mid-air and clubbing him across the head and ultimately fracturing Gary's elbow,\" Kerr said. \"Dillon Brooks broke the code. That's how I see it.\"Despite the physical nature of Memphis's play, it was the silky skills of Morant that ultimately proved decisive, the 22-year-old pouring in 18 of his team's fourth-quarter points to seal victory as the teams head back to California for game three on Saturday (Sunday).Victory was sweet for Morant, who admitted he had been tormented by what would have been a game-winning missed layup in a one-point loss in game one.Stephen Curry led the Warriors scoring with 27 points while Jordan Poole finished with 20.In Boston, Jaylen Brown finished with 30 points as the Celtics bounced back to defeat the Milwaukee Bucks 109-86 and level their Eastern Conference playoff series.Brown produced a masterclass of shooting as the Celtics sprinted away from the NBA champions in a rampant first-half display at the TD Garden which saw them surge into a decisive 65-40 lead.Brown went 9-for-10 from the field in the first two quarters, including five three-pointers, in a devastating points blitz which left the Bucks scrambling to gain a foothold in the contest.The 25-year-old shooting guard finished with 30 points, five rebounds and six assists while Jayson Tatum had 29 points with eight assists.Grant Williams added 21 from the bench as Boston completed a wire-to-wire victory just two days after being humbled 101-89 in game one on Sunday (Monday).Giannis Antetokounmpo led the Bucks scorers with 28 points, nine rebounds and seven assists while Jrue Holiday contributed 19 for the Bucks, who will now return to Milwaukee for game three of the best-of-seven series on Saturday.",
      content: null,
      pubDate: "2022-05-04 16:13:00",
      full_description:
        "IN YOUR FACE, BUDDY Jaylen Brown (7) of the Boston Celtics attempts to dunk the ball against Brook Lopez (11) of the Milwaukee Bucks during the third quarter of Game Two of the Eastern Conference Semifinals at TD Garden on Tuesday, May 3, 2022 in Boston, Massachusetts (May 4 in Manila). PHOTO BY MADDIE MEYER/AFP LOS ANGELES: Ja Morant erupted for 47 points as the Memphis Grizzlies outmuscled the Golden State Warriors to level their Western Conference NBA playoff series with a bruising 106-101 victory on Tuesday (Wednesday in Manila). Morant's career-high playoff points total dragged Memphis over the line to square the best-of-seven semifinal series at 1-1 after a nail-biting duel at the FedEx Forum in Tennessee. But a physical encounter was shrouded in controversy, with the Grizzlies' Dillon Brooks ejected after only three minutes for flattening the Warriors' Gary Payton 2nd as he drove for a basket. Payton played no further part in the contest and Warriors coach Steve Kerr later confirmed he had suffered a fractured elbow. The Warriors' Draymond Green, ejected in game one on Sunday, was also on the receiving end of the Grizzlies' robust tactics, needing prolonged treatment in the locker room in the first quarter after being stiff-armed by Xavier Tillman. Kerr later described the Grizzlies first-quarter approach as \"dirty not physical\" and accused Brooks of \"breaking the code\" amongst NBA professionals. \"There's a code in this league that players follow where you never put a guy's season or career in jeopardy by taking somebody out in mid-air and clubbing him across the head and ultimately fracturing Gary's elbow,\" Kerr said. \"Dillon Brooks broke the code. That's how I see it.\" Despite the physical nature of Memphis's play, it was the silky skills of Morant that ultimately proved decisive, the 22-year-old pouring in 18 of his team's fourth-quarter points to seal victory as the teams head back to California for game three on Saturday (Sunday). Victory was sweet for Morant, who admitted he had been tormented by what would have been a game-winning missed layup in a one-point loss in game one. Stephen Curry led the Warriors scoring with 27 points while Jordan Poole finished with 20. In Boston, Jaylen Brown finished with 30 points as the Celtics bounced back to defeat the Milwaukee Bucks 109-86 and level their Eastern Conference playoff series. Brown produced a masterclass of shooting as the Celtics sprinted away from the NBA champions in a rampant first-half display at the TD Garden which saw them surge into a decisive 65-40 lead. Brown went 9-for-10 from the field in the first two quarters, including five three-pointers, in a devastating points blitz which left the Bucks scrambling to gain a foothold in the contest. The 25-year-old shooting guard finished with 30 points, five rebounds and six assists while Jayson Tatum had 29 points with eight assists. Grant Williams added 21 from the bench as Boston completed a wire-to-wire victory just two days after being humbled 101-89 in game one on Sunday (Monday). Giannis Antetokounmpo led the Bucks scorers with 28 points, nine rebounds and seven assists while Jrue Holiday contributed 19 for the Bucks, who will now return to Milwaukee for game three of the best-of-seven series on Saturday.",
      image_url:
        "https://www.manilatimes.net/manilatimes/uploads/images/2022/05/04/68230.jpg",
      source_id: "manilatimes",
      country: ["philippines"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "Herro named NBA's Sixth Man of Year",
      link: "https://www.manilatimes.net/2022/05/05/sports/herro-named-nbas-sixth-man-of-year/1842400",
      keywords: ["Sports"],
      creator: ["Associated Press"],
      video_url: null,
      description:
        'MIAMI: Tyler Herro was told before the season began that he wouldn\'t be in the Miami Heat starting lineup. To his credit, he saw that as an opportunity."I said, \'Let\'s go for Sixth Man of the Year,\'" Herro said.And that\'s what he got.Herro was announced Tuesday (Wednesday in Manila) as the NBA\'s top sixth man this season, the first player to win the award as a member of the Heat. He averaged 20.7 points, nearly four more per game than any other reserve in the league, plus had a huge role in Miami securing the No. 1 seed for the Eastern Conference playoffs."It means a lot," Herro said. "I accepted the sixth-man role for a reason. I wanted to be the best sixth man in the league."By overwhelming agreement of the 100 sportswriters and broadcasters who cover the league and vote on season-ending awards, that\'s what Herro was. He received 96 first-place votes and 488 total points, well ahead of runner-up Kevin Love of the Cleveland Cavaliers. Cameron Johnson of the Phoenix Suns was third."Everyone who knows me knows I love Tyler Herro\'s game (and swag) — much respect on an incredible 6th man campaign," Love tweeted.Love got three first-place votes and 214 points in the system where players received five points for a first-place nod, three for second place and one for third. Johnson got one first-place vote and 128 points."Tyler was ignitable for this team," Heat coach Erik Spoelstra said. "He was that way all season."Herro had eight 30-point games off the bench this season, more than any other three players combined. The last time a reserve had more than eight 30-point games was 2017-18, when Lou Williams had 11 for the Los Angeles Clippers. Before that, it was 1989-90, when Ricky Pierce had 17 for Milwaukee.',
      content: null,
      pubDate: "2022-05-04 16:09:00",
      image_url:
        "https://www.manilatimes.net/manilatimes/uploads/images/2022/05/04/68226.jpg",
      source_id: "manilatimes",
      country: ["philippines"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "UPset city",
      link: "https://www.manilatimes.net/2022/05/05/sports/upset-city/1842394",
      keywords: ["Sports"],
      creator: ["Michael Angelo B. Asis"],
      video_url: null,
      description:
        "THE 39-game winning streak of the Ateneo Blue Eagles is longer than the 1971-72 LA Lakers' streak, which is the longest streak in the NBA (and possibly the Big Three US pro sports). It is a remarkable feat, and their last loss was in 2018. This paints a picture of just how dominant Ateneo was, and in college basketball, the key to their dominance is attributed to the coach.Coach Tab Baldwin is truly a master of the game and I am still mourning his departure from Gilas. It's easy to lose focus when you have already secured the top spot, so the idea that the Blue Eagles kept their intensity for 39 games in three years is a reflection of his relentless commitment to his craft.The roster of the UP Fighting Maroons is a match against the Blue Eagles. The De La Salle Green Archers also have interesting new recruits, but in the first round, Coach Tab displayed his mastery by beating the two new powerhouses.More than just a recruiterCoach Goldwyn Monteverde has already cemented his legacy at the high school level. He is highly regarded not just as a recruiter of talent but also as an in-game coach when his NU Bullpups defeated the Kai Sotto-led Blue Eaglets (do they still call them that?).After the turmoil at NU, Monteverde took his talents — and his recruits, to Diliman. The glittering prize then was Carl Tamayo — a 6'8 forward who was determined to hone his already impressive skills. Now, he has developed into a taller, more fluid Ranidel de Ocampo. I see him as a fixture for Gilas just as Ranidel was.Pundits had their eye on Coach Monteverde, wanting to see just how he could manage such a loaded roster. UP secured Zavier Lucero, who was heavily recruited by both Ateneo and La Salle. A few years ago, UP would not have stood a chance at a blue chip prospect and was often the destination of junior players who didn't make their senior squad.With Coach Gold at the helm, UP was now a top destination. After Ricci Rivero transferred to UP and Kobe Paras also chose his father's alma mater, Monteverde knew it would make sense to set up camp in State U. The influx of talent was phenomenal, because aside from bringing Tamayo and other members of his multititled junior squad, the Maroons also got Lowell Briones Jr and his younger brother who were both rumored to enrol in other schools.By defeating Coach Tab, Monteverde proved he is not just a recruiter, a la John Calipari of the Kentucky Wildcats and that is already an achievement worth three UAAP seasons. We'll finally see a Final Four when UP faces DLSU again. Will they end up 3-0 against Coach Derek Pumaren's Archers which boast of spitfire guards and rebounding titans?The Doc misdiagnosedThere was a private joke among Lakers fans when the rumors regarding Philadelphia Sixers' coach Doc Rivers' potential interest in returning to LA, this time with the Lakers, spread on the net.While Rivers' 2008 \"Ubuntu\" Celtics defeated the Lakers, he is now more associated with blowing playoff series leads. Thus, Lakers fans joked that they should support Philadelphia in the playoffs to prevent a Doc implosion that could lead to his ouster with the volatile Sixers.However, Doc never fails to shoot himself in the foot. He is being blamed for not pulling out MVP candidate Joel Embiid while they were up by 29 points over the hapless Toronto Raptors. That led to an elbow to the face, forcing Embiid to miss 3 to 4 games.Against the top-seed Miami Heat, the Sixers would likely end up with a 0-3 record before he returns. Of course, Doc didn't know what would happen, but as the head coach, he was supposed to manage the risk. A 0-3 playoff deficit is a virtual kiss of death in the NBA. The Sixers could be in that hole when Embiid returns.",
      content: null,
      pubDate: "2022-05-04 16:06:00",
      image_url:
        "https://www.manilatimes.net/manilatimes/uploads/images/2022/05/04/68215.jpg",
      source_id: "manilatimes",
      country: ["philippines"],
      category: ["sports"],
      language: "english",
    },
    {
      title: "76ers-Heat, Mavericks-Suns Game 2 Semifinals Bets",
      link: "https://www.si.com/betting/2022/05/04/nba-playoffs-game-2-lines-odds-mavericks-suns-76ers-heat",
      keywords: ["NBA Betting", "Fantasy/Betting", "Betting", "NBA"],
      creator: ["Kyle Wood"],
      video_url: null,
      description:
        "Bets and analysis for Wednesday’s pair of Game 2s featuring the Heat against the 76ers and the Suns hosting the Mavericks.",
      content:
        "Bets and analysis for Wednesday’s pair of Game 2s featuring the Heat against the 76ers and the Suns hosting the Mavericks.Two more Game 2s are on the NBA playoff schedule Wednesday night.The top-seeded Heat host the 76ers after running away with Game 1 in the second half Monday. Joel Embiid and Kyle Lowry both remain out for Game 2. Bet the NBA Playoffs at SI Sportsbook And the No. 1 Suns get the Mavericks at home again after handling Dallas despite Luka Dončić’s offensive explosion in the first meeting. Regular-season record: 117-113-2Play-in/playoffs record: 44-39 Marta Lavandier/AP No. 4 Philadelphia 76ers vs. No. 1 Miami Heat (Miami leads series, 1-0)Time: 7:30 p.m. ET | TNTSpread: 76ers +8.5 (-118) | Heat -8.5 (+100)Moneyline: 76ers (+310) | Heat (-400)Total: Under 207.5 (-110) | Over 207.5 (-110)It’s apparent the 76ers need more from James Harden to even make this series competitive. A lot more. After a solid first half, Philadelphia’s All-Star guard tailed off and Miami’s lead ballooned. The Heat didn’t even play particularly well in Game 1 yet they still came away with a 106-92 win.The only 76ers player who played well enough to win was Tobias Harris. He scored 27 points, his most in these playoffs, and was the only volume shooter who shot above 50% from the field. Harden played poorly, tallying 16 points and five turnovers to cancel out his five assists, though Doc Rivers’ is rightfully taking about as much heat as Harden. He elected to play Deandre Jordan 17 minutes—more than Paul Reed—whose lackluster defense allowed Miami to feast inside. The team played much better going small than trying to match the Heat’s size with Jordan. The lineups Philly uses while Embiid (concussion, orbital fracture) recovers will decide whether this series can be salvaged or not if or when he does return. View the original article to see embedded media. Miami, still playing without its point guard in Lowry (hamstring), didn’t get much from the stars of the Atlanta series. Jimmy Butler didn’t shoot the ball well (5-16) and neither did Gabe Vincent (4-12) or Max Strus (2-8). Bam Adebayo and Tyler Herro, who sleepwalked through the Hawks series, woke up against the 76ers.Adebayo was dominant, scoring 24 points and grabbing 12 rebounds and Herro, on the night he won Sixth Man of the Year, came off the bench to deliver 25 points and seven assists. The Heat compensated for below-average shooting by outrebounding the 76ers by 10, grabbing 15 offensive rebounds and winning the turnover battle.Outside shots have to drop for Philadelphia to have any chance. The 76ers have been one of the better three-point shooting teams in the postseason so far and they connected on 6-34 shots from beyond the arc. That included Maxey’s 1-6 three-point shooting in a down game for the second-year guard.The Heat trailed, 51-50, at halftime and simply ran away with the game in the final 24 minutes, but Philly showed it can hang with Miami. It’s on Maxey, Harden and role players like Georges Niang to not shoot 0-7 from deep to make that happen for a full game, not just a half. This line is too rich for me, I’ll take the 76ers to keep it close.BETS: 76ers +8.5 (-110); James Harden Over 22.5 Points (-116) Matt York/AP No. 4 Dallas Mavericks vs. No. 1 Phoenix Suns (Phoenix leads series, 1-0)Time: 10 p.m. ET | TNTSpread: Mavericks +6.5 (-118) | Suns -6.5 (+100)Moneyline: Mavericks (+205) | Suns (-250)Total: Under 215.5 (-110) | Over 215.5 (-110)Game 1 was not as close as the final score may have indicated. The Suns led by double-digits for the majority of the final frame before a late Mavericks’ push made the final score more palatable for Dallas. That the game was never truly in doubt despite Luka Dončić exploding for 45 points is an indication of just how much better the Suns are than the Jazz, the Mavericks’ previous playoff opponent.The Mavericks are less known for their defense with Dončić as the face of the franchise, but they finished the regular season with the third-best defensive rating in the league. Dallas held Utah, which had the No. 1 offensive rating, under 100 points on average over the course of its six-games first round series. Phoenix scored 121 points on that unit, more than it scored against New Orleans in any game. View the original article to see embedded media. Even with the slight Chris Paul running the show, the Suns have a size advantage and that played out in Game 1. They won the rebounding battle, 51-36, and Deandre Ayton was dominant, finishing with 25 points and eight boards. Every Suns’ starter grabbed at least five rebounds—Dončić led his team with 12 and no one else corralled more than six.Dallas outshot the Suns, 16-11, from outside, but Dončić did not get the help he needed from Jalen Brunson (playoff-low 13 points) or Spencer Dinwiddie (eight points) against Phoenix’s fearsome defense.Everything the Suns did in Game 1 felt highly replicable. What Dončić did, amazing as he is, isn’t—especially if he’s not at 100%. Phoenix’s size advantage is difficult to overcome and, as Jason Kidd pointed out before the series, the Suns' bigs are a bigger problem than Utah’s. The Suns take a 2-0 lead into Dallas over the weekend.BETS: Suns -6.5 (-110); Dorian Finney-Smith Over 12.5 Points (-102) Check the Latest Odds at SI SportsbookGet fantasy and betting analysis in your inbox by signing up for the Winners Club newsletterMore Betting, Fantasy and NBA:• NHL Playoffs Betting Preview• NBA Eastern Conference Betting Preview• NBA Western Conference Betting Preview• NBA Championship Futures• Kentucky Derby Betting Profiles• NFL Offensive Rookie of the Year Odds• NFL Defensive Rookie of the Year Odds• NFL Draft Fantasy Winners and Losers• Ja Morant’s Superstar Performance",
      pubDate: "2022-05-04 15:55:58",
      full_description:
        "Two more Game 2s are on the NBA playoff schedule Wednesday night. The top-seeded Heat host the 76ers after running away with Game 1 in the second half Monday. Joel Embiid and Kyle Lowry both remain out for Game 2. Bet the NBA Playoffs at SI Sportsbook And the No. 1 Suns get the Mavericks at home again after handling Dallas despite Luka Dončić’s offensive explosion in the first meeting. Regular-season record: 117-113-2 Play-in/playoffs record: 44-39 Marta Lavandier/AP Time: 7:30 p.m. ET | TNT Spread: 76ers +8.5 (-118) | Heat -8.5 (+100) Moneyline: 76ers (+310) | Heat (-400) Total: Under 207.5 (-110) | Over 207.5 (-110) It’s apparent the 76ers need more from James Harden to even make this series competitive. A lot more. After a solid first half, Philadelphia’s All-Star guard tailed off and Miami’s lead ballooned. The Heat didn’t even play particularly well in Game 1 yet they still came away with a 106-92 win. The only 76ers player who played well enough to win was Tobias Harris. He scored 27 points, his most in these playoffs, and was the only volume shooter who shot above 50% from the field. Harden played poorly, tallying 16 points and five turnovers to cancel out his five assists, though Doc Rivers’ is rightfully taking about as much heat as Harden. He elected to play Deandre Jordan 17 minutes—more than Paul Reed—whose lackluster defense allowed Miami to feast inside. The team played much better going small than trying to match the Heat’s size with Jordan. The lineups Philly uses while Embiid (concussion, orbital fracture) recovers will decide whether this series can be salvaged or not if or when he does return . Miami, still playing without its point guard in Lowry (hamstring), didn’t get much from the stars of the Atlanta series. Jimmy Butler didn’t shoot the ball well (5-16) and neither did Gabe Vincent (4-12) or Max Strus (2-8). Bam Adebayo and Tyler Herro, who sleepwalked through the Hawks series, woke up against the 76ers. Adebayo was dominant, scoring 24 points and grabbing 12 rebounds and Herro, on the night he won Sixth Man of the Year , came off the bench to deliver 25 points and seven assists. The Heat compensated for below-average shooting by outrebounding the 76ers by 10, grabbing 15 offensive rebounds and winning the turnover battle. Outside shots have to drop for Philadelphia to have any chance. The 76ers have been one of the better three-point shooting teams in the postseason so far and they connected on 6-34 shots from beyond the arc. That included Maxey’s 1-6 three-point shooting in a down game for the second-year guard. The Heat trailed, 51-50, at halftime and simply ran away with the game in the final 24 minutes, but Philly showed it can hang with Miami. It’s on Maxey, Harden and role players like Georges Niang to not shoot 0-7 from deep to make that happen for a full game, not just a half. This line is too rich for me, I’ll take the 76ers to keep it close. Matt York/AP Time: 10 p.m. ET | TNT Spread: Mavericks +6.5 (-118) | Suns -6.5 (+100) Moneyline: Mavericks (+205) | Suns (-250) Total: Under 215.5 (-110) | Over 215.5 (-110) Game 1 was not as close as the final score may have indicated . The Suns led by double-digits for the majority of the final frame before a late Mavericks’ push made the final score more palatable for Dallas. That the game was never truly in doubt despite Luka Dončić exploding for 45 points is an indication of just how much better the Suns are than the Jazz, the Mavericks’ previous playoff opponent. The Mavericks are less known for their defense with Dončić as the face of the franchise, but they finished the regular season with the third-best defensive rating in the league. Dallas held Utah, which had the No. 1 offensive rating, under 100 points on average over the course of its six-games first round series. Phoenix scored 121 points on that unit, more than it scored against New Orleans in any game. Even with the slight Chris Paul running the show, the Suns have a size advantage and that played out in Game 1. They won the rebounding battle, 51-36, and Deandre Ayton was dominant, finishing with 25 points and eight boards. Every Suns’ starter grabbed at least five rebounds—Dončić led his team with 12 and no one else corralled more than six. Dallas outshot the Suns, 16-11, from outside, but Dončić did not get the help he needed from Jalen Brunson (playoff-low 13 points) or Spencer Dinwiddie (eight points) against Phoenix’s fearsome defense. Everything the Suns did in Game 1 felt highly replicable. What Dončić did, amazing as he is, isn’t—especially if he’s not at 100%. Phoenix’s size advantage is difficult to overcome and, as Jason Kidd pointed out before the series , the Suns' bigs are a bigger problem than Utah’s. The Suns take a 2-0 lead into Dallas over the weekend. Check the Latest Odds at SI Sportsbook Get fantasy and betting analysis in your inbox by signing up for the Winners Club newsletter More Betting, Fantasy and NBA: • NHL Playoffs Betting Preview • NBA Eastern Conference Betting Preview • NBA Western Conference Betting Preview • NBA Championship Futures • Kentucky Derby Betting Profiles • NFL Offensive Rookie of the Year Odds • NFL Defensive Rookie of the Year Odds • NFL Draft Fantasy Winners and Losers • Ja Morant’s Superstar Performance",
      image_url:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Ch_1200%2Cq_auto:good%2Cw_1200/MTg5MjQ0MTk4ODQ1Njg3Njk5/mavericks-suns.png",
      source_id: "si",
      country: ["united states of america"],
      category: ["sports"],
      language: "english",
    },
    {
      title:
        "“The Los Angeles Lakers are going nowhere! They should trade LeBron James!”: Stephen A Smith believes the 17x Champions should trade the King for future assests",
      link: "https://thesportsrush.com/nba-news-the-los-angeles-lakers-are-going-nowhere-they-should-trade-lebron-james-stephen-a-smith-believes-the-17x-champions-should-trade-the-king-for-future-assests/",
      keywords: [
        "Basketball",
        "Lebron James",
        "Los Angeles Lakers",
        "NBA",
        "Stephen A Smith",
      ],
      creator: ["Raahib Singh"],
      video_url: null,
      description:
        "ESPN analyst Stephen A Smith breaks down how trading LeBron James is what would be best for the Los Angeles Lakers At the start of the 2021-22 season, Los Angeles Lakers were Top 2 on most people’s ballots to win the NBA Championship. Come playoff time, the Lakers didn’t even qualify for the play-in tournament.… The post “The Los Angeles Lakers are going nowhere! They should trade LeBron James!”: Stephen A Smith believes the 17x Champions should trade the King for future assests appeared first on The SportsRush.",
      content:
        "ESPN analyst Stephen A Smith breaks down how trading LeBron James is what would be best for the Los Angeles Lakers At the start of the 2021-22 season, Los Angeles Lakers were Top 2 on most people’s ballots to win the NBA Championship. Come playoff time, the Lakers didn’t even qualify for the play-in tournament. What happened one may ask? The Lakers, even though they acquired some great pieces, could never get those pieces in as a team. LeBron James, in his 19th season, put up 30.3 points, 8.2 rebounds, and 6.2 assists. If the Lakers were winning, he would’ve probably won his 5th MVP honors. However, that didn’t happen. Instead, Russell Westbrook and Anthony Davis failed to support the aging King. While Russ was available for the games, he couldn’t get used to giving up the ball as much as he had to. On the other hand, Anthony Davis missed a big chunk of the season due to various injuries. Also Read: ‘Michael Jordan did it 7 times and Kobe Bryant 2 times’: Why LeBron James will always be behind the Bulls and Lakers legends in the GOAT conversation The Lakers have a lot of decisions to make in the offseason, including picking a new Head Coach. Stephen A Smith made a wild suggestion, which if one thinks of it, makes sense. Stephen A Smith believes LeBron James is the only asset on the Lakers who can get them returns An aging Russell Westbrook who seems low on athleticism or an injury-prone Anthony Davis. Which one of these assets could generate the same amount of return a 37-year-old LeBron James can? The answer is neither. Stephen A Smith knows the same, and he tried to talk about the same on First Take today. .@stephenasmith has a solution for the Lakers “I think the Los Angeles Lakers should strongly consider trading LeBron James. That is what I believe.” pic.twitter.com/CI3l7lAqJ7 — First Take (@FirstTake) May 4, 2022 Also Read: “LeBron James’ 51$ tequila is better than Michael Jordan’s overpriced 114$ drink”: Lakers superstar goes head to head with Bulls Legend in yet another GOAT battle With there being at least 7 teams, Suns, Warriors, Grizzlies, Mavericks, Clippers, Timberwolves, and Pelicans(if Zion Williamson actually shows up) that can compete for the ultimate prize, it makes sense for the Lakers to start planning for the future. Trading LeBron James to one of these teams might get them good assets for the future, and let LeBron compete for ring #5 as well. I don’t say it often, but SAS does make a valid point here. The post “The Los Angeles Lakers are going nowhere! They should trade LeBron James!”: Stephen A Smith believes the 17x Champions should trade the King for future assests appeared first on The SportsRush.",
      pubDate: "2022-05-04 15:51:35",
      full_description:
        "ESPN analyst Stephen A Smith breaks down how trading LeBron James is what would be best for the Los Angeles Lakers At the start of the 2021-22 season, Los Angeles Lakers were Top 2 on most people’s ballots to win the NBA Championship. Come playoff time, the Lakers didn’t even qualify for the play-in tournament. What happened one may ask? The Lakers, even though they acquired some great pieces, could never get those pieces in as a team. LeBron James, in his 19th season, put up 30.3 points, 8.2 rebounds, and 6.2 assists. If the Lakers were winning, he would’ve probably won his 5th MVP honors. However, that didn’t happen. Instead, Russell Westbrook and Anthony Davis failed to support the aging King. While Russ was available for the games, he couldn’t get used to giving up the ball as much as he had to. On the other hand, Anthony Davis missed a big chunk of the season due to various injuries. Also Read: ‘Michael Jordan did it 7 times and Kobe Bryant 2 times’: Why LeBron James will always be behind the Bulls and Lakers legends in the GOAT conversation The Lakers have a lot of decisions to make in the offseason, including picking a new Head Coach. Stephen A Smith made a wild suggestion, which if one thinks of it, makes sense. An aging Russell Westbrook who seems low on athleticism or an injury-prone Anthony Davis. Which one of these assets could generate the same amount of return a 37-year-old LeBron James can? The answer is neither. Stephen A Smith knows the same, and he tried to talk about the same on First Take today. . @stephenasmith has a solution for the Lakers 👀 “I think the Los Angeles Lakers should strongly consider trading LeBron James. That is what I believe.” pic.twitter.com/CI3l7lAqJ7 — First Take (@FirstTake) May 4, 2022 Also Read: “LeBron James’ 51$ tequila is better than Michael Jordan’s overpriced 114$ drink”: Lakers superstar goes head to head with Bulls Legend in yet another GOAT battle With there being at least 7 teams, Suns, Warriors, Grizzlies, Mavericks, Clippers, Timberwolves, and Pelicans(if Zion Williamson actually shows up) that can compete for the ultimate prize, it makes sense for the Lakers to start planning for the future. Trading LeBron James to one of these teams might get them good assets for the future, and let LeBron compete for ring #5 as well. I don’t say it often, but SAS does make a valid point here.",
      image_url: null,
      source_id: "thesportsrush",
      country: [
        "united states of america",
        "united kingdom",
        "india",
        "australia",
      ],
      category: ["sports"],
      language: "english",
    },
    {
      title: "Towering Tackle Caden Jones Talks Texas, A&M, LSU and More",
      link: "https://www.si.com/college/2022/05/04/towering-tackle-caden-jones-talks-texas-a-m-lsu-and-more",
      keywords: [
        "texas longhorns",
        "College Football",
        "Texas A&M",
        "lsu tigers",
        "College",
        "Florida State Seminoles",
        "florida gators",
      ],
      creator: ["John Garcia Jr."],
      video_url: null,
      description:
        "More than 20 programs are courting the 6'8\" New Orleans native",
      content:
        'More than 20 programs are courting the 6\'8" New Orleans native View the original article to see embedded media. It\'s hard to miss Caden Jones at 6\'8", 315 pounds. Whether at a prospect camp or among offensive tackle recruits surging up recruiting boards, the New Orleans (La.) De La Salle standout is picking up momentum as the spring evaluation period has college coaches working on the road. Many will stop in to see Jones in person, but many have already added their program to his growing offer list. The class of 2023 standout is now sitting above 20 on the offer list, with Texas coming in most recently after a one-on-one conversation with Steve Sarkisian."I was playing (NBA) 2k with my friends and I was told coach Sark wanted to talk to me,\' Jones told Sports Illustrated. "We got on Facetime, chopped it up and I was speechless. It makes me feel important, it makes me feel special. "When a head coach makes the personal call to offer you, it hits different."Before the Longhorns jumped in, Jones spent the month of March busy checking out regional college campuses for unofficial visits. New offers were added along the way, including from another head coach in the Lone Star State with Jimbo Fisher. Jones has ties to the program, including on the football front with his uncle being Marcus Jasmin. The former A&M interior defensive lineman is also a mentor in Jones\' high school development. SI saw the duo work together at the Battle of the South Camp put on by Albert Brock and Dynasty U in New Orleans late last month."I had a great time, it was a surreal experience," he said. "Coach Jimbo made the offer to me in his office. I never thought I would be sitting in there. Last year, I went to the spring game with my uncle, who is an alum who played nose guard and  mom graduated from that school, too. "It\'s big to the family."  Jones at the Battle of the South camp in New Orleans John Garcia, Jr. The big rising-senior tackle talent also tripped to Mississippi State, Florida State, Florida, Houston, ULL and Southern Miss in March.The visit to Florida featured plenty of familiarity based on the new coaching staff in town under Billy Napier. "It was a great experience, a family vibe because coach Napier and coach (Jabbar) Juluke offered me at UL," Jones said. "So when I got there it was smooth, nothing was forced."Within state lines he checked out Tallahassee and got more face time with a head coach and more on the FSU front. "I talked to coach (Mike) Norvell, coach (Alex) Atkins, the offensive line coach," Jones said. "Coach Atkins actually took me into the room and told me what he liked about me and how he wanted to be a part of my development." Most recently while on the road, the nearby LSU Tigers and its new staff hosted the in-state standout for the first spring game of the Brian Kelly era."I talked to coach Brad Davis at the spring game and had a great time," Jones said. "What I saw with the LSU offensive line was great, especially with the young guys playing. I want to play early when I get to college and my goal is to graduate early so get that going."With more than 20 scholarship offers in hand, Jones says additional programs could add to the list this spring, mentioning Oregon, Arizona State, Baylor and TCU specifically. After that point summer official visits and top contenders are to be revealed before a potential commitment date ahead of De La Salle\'s 2022 season opener. The program made it all the way to the state championship in 2021, with Jones helping lead the Cavaliers to 10 wins on offense. ',
      pubDate: "2022-05-04 15:43:53",
      full_description:
        'It\'s hard to miss Caden Jones at 6\'8", 315 pounds. Whether at a prospect camp or among offensive tackle recruits surging up recruiting boards, the New Orleans (La.) De La Salle standout is picking up momentum as the spring evaluation period has college coaches working on the road. Many will stop in to see Jones in person, but many have already added their program to his growing offer list. The class of 2023 standout is now sitting above 20 on the offer list, with Texas coming in most recently after a one-on-one conversation with Steve Sarkisian. "I was playing (NBA) 2k with my friends and I was told coach Sark wanted to talk to me,\' Jones told Sports Illustrated . "We got on Facetime, chopped it up and I was speechless. It makes me feel important, it makes me feel special. "When a head coach makes the personal call to offer you, it hits different." Before the Longhorns jumped in, Jones spent the month of March busy checking out regional college campuses for unofficial visits. New offers were added along the way, including from another head coach in the Lone Star State with Jimbo Fisher. Jones has ties to the program, including on the football front with his uncle being Marcus Jasmin. The former A&M interior defensive lineman is also a mentor in Jones\' high school development. SI saw the duo work together at the Battle of the South Camp put on by Albert Brock and Dynasty U in New Orleans late last month. "I had a great time, it was a surreal experience," he said. "Coach Jimbo made the offer to me in his office. I never thought I would be sitting in there. Last year, I went to the spring game with my uncle, who is an alum who played nose guard and mom graduated from that school, too. "It\'s big to the family." Jones at the Battle of the South camp in New Orleans John Garcia, Jr. The big rising-senior tackle talent also tripped to Mississippi State, Florida State, Florida, Houston, ULL and Southern Miss in March. The visit to Florida featured plenty of familiarity based on the new coaching staff in town under Billy Napier. "It was a great experience, a family vibe because coach Napier and coach (Jabbar) Juluke offered me at UL," Jones said. "So when I got there it was smooth, nothing was forced." Within state lines he checked out Tallahassee and got more face time with a head coach and more on the FSU front. "I talked to coach (Mike) Norvell, coach (Alex) Atkins, the offensive line coach," Jones said. "Coach Atkins actually took me into the room and told me what he liked about me and how he wanted to be a part of my development." Most recently while on the road, the nearby LSU Tigers and its new staff hosted the in-state standout for the first spring game of the Brian Kelly era. "I talked to coach Brad Davis at the spring game and had a great time," Jones said. "What I saw with the LSU offensive line was great, especially with the young guys playing. I want to play early when I get to college and my goal is to graduate early so get that going." With more than 20 scholarship offers in hand, Jones says additional programs could add to the list this spring, mentioning Oregon, Arizona State, Baylor and TCU specifically. After that point summer official visits and top contenders are to be revealed before a potential commitment date ahead of De La Salle\'s 2022 season opener. The program made it all the way to the state championship in 2021, with Jones helping lead the Cavaliers to 10 wins on offense.',
      image_url:
        "http://www.si.com/.image/c_limit%2Ccs_srgb%2Ch_1200%2Cq_auto:good%2Cw_1200/MTg5MjQ0Mjc1ODg2NjYzNDQ4/caden-jones-abx.png",
      source_id: "si",
      country: ["united states of america"],
      category: ["sports"],
      language: "english",
    },
  ],
  nextPage: 1,
};
