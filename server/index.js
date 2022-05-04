require("dotenv").config();
const express = require("express");
let app = express();
const bodyParser = require("body-parser");
//const helpers = require("../helpers/github.js");
const { default: axios } = require("axios");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.get('/api',(req,res)=>{
  // console.log("query",req.query)
  if (req.query.q.toUpperCase()==="NTF" ){
    res.status(200).send(ntfpage0)
  }
  if (req.query.q==="crypto"){
    res.status(200).send(cryptopage0)
  }
  // axios
  // .get("https://newsdata.io/api/1/news",{params:{apikey:process.env.apikey,q:req.query.q, language:"en"}})
  // .then(response=>{
  //   console.log("q",req.query.q)
  //   console.log("first get",response.data)
  //   res.status(200).send(response.data)

  // })
  // .catch(err=>{console.log(err)
  // res.status(500).send("problematic axios")
  // })
})

app.get('/api/nextpage',(req,res)=>{
  console.log("nextpage query",req.query)
  if (req.query.q.toUpperCase()==="NTF" ){
    res.status(200).send(ntfpage1)
  }
  if (req.query.q==="crypto"){
    res.status(200).send(cryptopage1)
  }
  // axios
  // .get("https://newsdata.io/api/1/news",{params:{apikey:process.env.apikey,q:req.query.q, language:"en", page:req.query.page}})
  // .then(response=>{
  //   console.log("q",req.query.q)
  //   console.log("get page",response.data)
  //   res.status(200).send(response.data)

  // })
  // .catch(err=>{console.log(err)
  // res.status(500).send("problematic axios")
  // })


})





app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

let ntfpage0={
  "status": "success",
  "totalResults": 59,
  "results": [
      {
          "title": "Telegram Users Can Send and Receive Toncoin Within Messenger Chats",
          "link": "https://news.bitcoin.com/telegram-users-can-send-and-receive-toncoin-within-messenger-chats/",
          "keywords": [
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
              "Toncoin"
          ],
          "creator": [
              "Jamie Redman"
          ],
          "video_url": null,
          "description": "Telegram users can now send and receive toncoin directly within the application’s chats, according to a tweet by The Open Network (TON) Foundation. In addition to the toncoin support, users can also purchase bitcoin via the software’s bot system. TON Foundation Reveals Telegram Toncoin Support, Users Can Purchase Bitcoin via Bot The ability to send […]",
          "content": "Telegram users can now send and receive toncoin directly within the application’s chats, according to a tweet by The Open Network (TON) Foundation. In addition to the toncoin support, users can also purchase bitcoin via the software’s bot system. TON Foundation Reveals Telegram Toncoin Support, Users Can Purchase Bitcoin via Bot The ability to send and receive cryptocurrency using Telegram is now possible using the TON Foundation’s toncoin. Sending digital currencies via third-party applications tethered to Telegram was possible before. However, this is the first time toncoin will be available since Telegram settled with the U.S. Securities and Exchange Commission (SEC) in June 2020. The SEC filed a case against Telegram in October 2019 over the toncoin project. On Twitter, the TON Foundation said: “You can now send toncoin directly within Telegram chats. It’s a new way to send Toncoin without transaction fees to any Telegram user. With this service, you’ll no longer need to enter long wallet addresses and wait for confirmations.” While users can send and receive toncoin, they can also purchase BTC using the wallet bot system. Telegram dropped the TON project in August 2020, but in April the community raised $1 billion to further the project’s goals. The TON Foundation has moved into the arena of decentralized finance (defi) and non-fungible tokens (NFTs) as well. Just recently, the foundation announced the launch of Disintar.io, a TON-based NFT marketplace. “On Disintar.io, users can buy, sell, and list NFTs without having any technical knowledge,” the TON Foundation explained. Toncoin saw an all-time high (ATH) on November 12, 2021, six months ago reaching $5.29 per unit. Since then toncoin’s USD value has slid 64.8% lower than the ATH. Today, toncoin is exchanging hands for $1.86 per unit and has seen around $2,746,626 in daily trade volume. What do you think about toncoin being integrated into Telegram so users can send and receive the crypto asset? Let us know what you think about this subject in the comments section below.",
          "pubDate": "2022-05-02 16:30:31",
          "image_url": null,
          "source_id": "bitcoin",
          "country": [
              "united states of america",
              "united kingdom",
              "india",
              "australia",
              "singapore",
              "saudi arabia",
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "BFM Crypto, le Club: BTC/ETH, quel potentiel pour la suite ? - 02/05",
          "link": "https://www.bfmtv.com/economie/replay-emissions/bfm-crypto-le-club/bfm-crypto-le-club-btc-eth-quel-potentiel-pour-la-suite-02-05_VN-202205020545.html",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "Ce lundi 2 mai, Vincent Boy, analyste marchés chez IG, Grégory Raymond, cofondateur et rédacteur en chef de The Big Whale, ainsi que John Karp, co-producteur du podcast NFT Morning, se sont penchés sur le potentiel pour la suite pour le Bitcoin (BTC) et l'Ethereum (ETH), dans BFM Crypto, le Club dans l'émission BFM Bourse présentée par Guillaume Sommerer. BFM Bourse est à voir ou écouter du lundi au vendredi sur BFM Business.",
          "content": null,
          "pubDate": "2022-05-02 16:17:58",
          "image_url": "https://images.bfmtv.com/7CvLUD3uRY58lIUiYWyCC0INWgc=/0x0:1280x720/800x0/images/BFM-Crypto-le-Club-BTC-ETH-quel-potentiel-pour-la-suite-02-05-1405671.jpg",
          "source_id": "bfmtv",
          "country": [
              "france"
          ],
          "category": [
              "business"
          ],
          "language": "french"
      },
      {
          "title": "OpenLocker Announces Legendary Racing Prospects NFT Collection Now for Sale on the OpenStable Platform with Leading Contenders in the Kentucky Derby and Kentucky Oaks",
          "link": "https://www.prnewswire.com:443/news-releases/openlocker-announces-legendary-racing-prospects-nft-collection-now-for-sale-on-the-openstable-platform-with-leading-contenders-in-the-kentucky-derby-and-kentucky-oaks-301537474.html",
          "keywords": [
              "Blockchain",
              "Computer & Electronics",
              "General Sports",
              "SPT",
              "CPR",
              "BLN"
          ],
          "creator": null,
          "video_url": null,
          "description": "RED BANK, N.J., May 2, 2022 /PRNewswire/ -- OpenLocker Inc. has launched the OpenStable marketplace, a fan-friendly blockchain platform to engage the next generation of thoroughbred racing fans. The first limited edition series in the Legendary Racing Prospects Collection of Non-Fungible...",
          "content": null,
          "pubDate": "2022-05-02 16:15:00",
          "image_url": null,
          "source_id": "cision",
          "country": [
              "singapore"
          ],
          "category": [
              "top"
          ],
          "language": "english"
      },
      {
          "title": "Sensorium Signs Strategic Partnership with the Humanity 2.0 Foundation for metaverse NFT and Digital Art Gallery Initiatives",
          "link": "https://www.prnewswire.com:443/news-releases/sensorium-signs-strategic-partnership-with-the-humanity-2-0-foundation-for-metaverse-nft-and-digital-art-gallery-initiatives-301537045.html",
          "keywords": [
              "Blockchain",
              "Computer & Electronics",
              "Computer Software",
              "Art",
              "Entertainment",
              "BLN",
              "ENT",
              "CPR",
              "STW",
              "ART"
          ],
          "creator": null,
          "video_url": null,
          "description": "The public-private partnership aims to extend the availability of the Vatican's heritage – manuscripts, masterpieces, and academic initiatives – to people, who otherwise won't be able to experience it. Sensorium will also become the first metaverse developer to participate in NGO's NFT...",
          "content": null,
          "pubDate": "2022-05-02 16:00:00",
          "image_url": "https://mma.prnewswire.com/media/1807954/Sensorium_Humanity_2.jpg?p=original",
          "source_id": "cision",
          "country": [
              "singapore"
          ],
          "category": [
              "top"
          ],
          "language": "english"
      },
      {
          "title": "BRUT. AND PPLPLEASR PARTNER FOR FIRST-EVER NFT COLLECTION AT THE CANNES FILM FESTIVAL TO BENEFIT THE USC ANNENBERG INCLUSION INITIATIVE",
          "link": "https://www.prnewswire.com:443/news-releases/brut-and-pplpleasr-partner-for-first-ever-nft-collection-at-the-cannes-film-festival-to-benefit-the-usc-annenberg-inclusion-initiative-301537234.html",
          "keywords": [
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
              "PUB"
          ],
          "creator": null,
          "video_url": null,
          "description": "Limited Edition NFT Collection Will Be Available At 9:00am PST On Monday, May 2nd, 2022 NEW YORK, May 2, 2022 /PRNewswire/ -- Brut, the world's largest values-driven media platform, has partnered with globally-celebrated Web3 artist pplpleasr for a first-of-its-kind collection of 75...",
          "content": null,
          "pubDate": "2022-05-02 16:00:00",
          "image_url": "https://mma.prnewswire.com/media/1808536/BRUT_PPLPLEASR_USCANNENBERG_Logo.jpg?p=original",
          "source_id": "cision",
          "country": [
              "singapore"
          ],
          "category": [
              "top"
          ],
          "language": "english"
      },
      {
          "title": "Anuel AA lanzará en verano su primer NFT, \"Génesis\"",
          "link": "https://es-us.deportes.yahoo.com/anuel-aa-lanzar%C3%A1-verano-nft-153431698.html?src=rss",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": null,
          "content": null,
          "pubDate": "2022-05-02 15:34:31",
          "image_url": null,
          "source_id": "yahoo",
          "country": [
              "canada"
          ],
          "category": [
              "sports"
          ],
          "language": "english"
      },
      {
          "title": "Why ApeCoin Is Volatile Today",
          "link": "https://www.fool.com/investing/2022/05/02/why-apecoin-is-volatile-today/?source=iedfolrf0000001",
          "keywords": null,
          "creator": [
              "newsfeedback@fool.com (Bram Berkowitz)"
          ],
          "video_url": null,
          "description": "The price of the new cryptocurrency has been up and down over the last week.",
          "content": "Over the last 24 hours, the cryptocurrency ApeCoin (CRYPTO: APE) has been extremely volatile, at one point rising nearly 16% but now trading more than 11% down as of 10:28 p.m. ET today.It has also been an incredibly volatile week, with ApeCoin, which currently trades at $15.38, having risen to $26.81 last Thursday. The volatility seems to be related to a metaverse land sale the token was involved in.ApeCoin is a relatively new cryptocurrency that dropped in March and has ties to the popular non-fungible token (NFT) collection called the Bored Ape Yacht Club, which is a series of NFTs depicting different apes with different wardrobes and facial expressions. These NFTs are quite popular and have been purchased for large sums of money by a number of celebrities and high net worth individuals. Continue reading",
          "pubDate": "2022-05-02 15:22:03",
          "image_url": null,
          "source_id": "fool",
          "country": [
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "NFT company raises around £227,000,000 in crypto for ‘virtual land’",
          "link": "https://metro.co.uk/2022/05/02/nft-company-raises-around-227000000-in-crypto-for-virtual-land-16569921/",
          "keywords": [
              "Tech",
              "Bitcoin",
              "Cryptocurrency",
              "metaverse",
              "NFT"
          ],
          "creator": [
              "Anugraha Sundaravelu"
          ],
          "video_url": null,
          "description": "People paid $285,000,000 for land which does not physically exist.",
          "content": "The sale disrupted the entire Ethereum blockchain as a flood of users rushed to purchase the NFTs and sent transaction fees soaring (Picture: Reuters) People have collectively paid around £227,000,000 ($285,000,000) in cryptocurrency for land that does not physically exist. Creators of the popular Bored Apes Yacht Club (BAYC) collection of NFTs launched a sale of ‘virtual land’ which had users scrambling for deeds to plot in the metaverse. In an online sale on Saturday, Yuga Labs, the company behind BAYC, sold NFTs called ‘Otherdeeds’, which it said could be exchanged as plots of virtual land in a future Bored Ape-themed online environment called ‘Otherside’. The NFTs or ‘Otherdeeds’ sold by Yuga Labs would represent a plot of land in a virtual world it says it is building. A total of 55,000 Otherdeeds sold at a flat price of 305 ApeCoin, around £4634 ($5,800), at the time of purchase in what was considered the ‘largest NFT mint in history’. The Otherdeed NFT mint is sold out – we are awestruck at the demand shown tonight. Apes and Mutants, the opening of the 21-day claim period is being delayed until the price of gas drops to reasonable levels. Weâ€™ll tweet when the claim opens. https://t.co/iRz64lklbv— OthersideMeta (@OthersideMeta) May 1, 2022 The sale disrupted the entire Ethereum blockchain as a flood of users rushed to purchase the NFTs which sent transaction fees soaring.  The ‘Otherdeeds’ could only be bought using the project’s associated cryptocurrency, called ApeCoin, which launched in March. The Bored Ape Yacht Club NFTs are blockchain-based tokens representing a set of 10,000 computer-generated cartoon apes which exploded in popularity and started selling at thousands of dollars each. BAYC became one of the most prominent NFT brands, with Apes sold at top auction houses and owned by celebrities including Paris Hilton and Madonna. The Bored Ape Yacht Club NFTs are blockchain-based tokens representing a set of 10,000 computer-generated cartoon apes (Picture: BAYC) What is an NFT? Non-fungible tokens (NFTs) are crypto assets that represent digital files such as images, video, or items in an online game. It was not clear how the funds would be distributed, although the company said the ApeCoin would be ‘locked up’ for one year. The sale indicates the continued demand for speculative, high-risk crypto assets related to online virtual worlds. NFTs are largely unregulated, and reports of scams, fakes and market manipulation are common. The Otherside metaverse will be a multi-player gaming environment, according to its website, which says it is currently under development but has no launch date yet. This morning, the official BAYC Instagram account was hacked. The hacker posted a fraudulent link to a copycat of the BAYC website with a fake Airdrop, where users were prompted to sign a â€˜safeTransferFromâ€™ transaction. This transferred their assets to the scammer’s wallet.— Bored Ape Yacht Club (@BoredApeYC) April 25, 2022 Yuga Labs’ Otherdeeds sale comes shortly after the Bored Ape Yacht Club official Instagram account was hacked and a phishing link posted, allowing scammers to steal victims’ NFTs. What is the Metaverse? It’s a world of interconnected virtual communities where people can meet, work and play, using virtual reality headsets, augmented reality glasses, smartphone apps or other devices. MORE : Ubisoft admits to leaked Project Q multiplayer game – promises no NFTs… for now MORE : Jack Dorsey sold an NFT for $2.9 million – now it’s worth $280",
          "pubDate": "2022-05-02 15:15:40",
          "full_description": "People have collectively paid around £227,000,000 ($285,000,000) in cryptocurrency for land that does not physically exist. Creators of the popular Bored Apes Yacht Club (BAYC) collection of NFTs launched a sale of ‘virtual land’ which had users scrambling for deeds to plot in the metaverse . In an online sale on Saturday, Yuga Labs, the company behind BAYC, sold NFTs called ‘Otherdeeds’, which it said could be exchanged as plots of virtual land in a future Bored Ape-themed online environment called ‘Otherside’. The NFTs or ‘Otherdeeds’ sold by Yuga Labs would represent a plot of land in a virtual world it says it is building. A total of 55,000 Otherdeeds sold at a flat price of 305 ApeCoin, around £4634 ($5,800), at the time of purchase in what was considered the ‘largest NFT mint in history’. The Otherdeed NFT mint is sold out – we are awestruck at the demand shown tonight. Apes and Mutants, the opening of the 21-day claim period is being delayed until the price of gas drops to reasonable levels. Weâll tweet when the claim opens. https://t.co/iRz64lklbv The sale disrupted the entire Ethereum blockchain as a flood of users rushed to purchase the NFTs which sent transaction fees soaring. The ‘Otherdeeds’ could only be bought using the project’s associated cryptocurrency, called ApeCoin, which launched in March. The Bored Ape Yacht Club NFTs are blockchain-based tokens representing a set of 10,000 computer-generated cartoon apes which exploded in popularity and started selling at thousands of dollars each. BAYC became one of the most prominent NFT brands, with Apes sold at top auction houses and owned by celebrities including Paris Hilton and Madonna. Non-fungible tokens (NFTs) are crypto assets that represent digital files such as images, video, or items in an online game. It was not clear how the funds would be distributed, although the company said the ApeCoin would be ‘locked up’ for one year. The sale indicates the continued demand for speculative, high-risk crypto assets related to online virtual worlds. NFTs are largely unregulated, and reports of scams, fakes and market manipulation are common. The Otherside metaverse will be a multi-player gaming environment, according to its website, which says it is currently under development but has no launch date yet. This morning, the official BAYC Instagram account was hacked. The hacker posted a fraudulent link to a copycat of the BAYC website with a fake Airdrop, where users were prompted to sign a âsafeTransferFromâ transaction. This transferred their assets to the scammer’s wallet. Yuga Labs’ Otherdeeds sale comes shortly after the Bored Ape Yacht Club official Instagram account was hacked and a phishing link posted, allowing scammers to steal victims’ NFTs. It’s a world of interconnected virtual communities where people can meet, work and play, using virtual reality headsets, augmented reality glasses, smartphone apps or other devices. MORE : Ubisoft admits to leaked Project Q multiplayer game – promises no NFTs… for now MORE : Jack Dorsey sold an NFT for $2.9 million – now it’s worth $280 Not convinced? Find out more »",
          "image_url": "https://metro.co.uk/wp-content/uploads/2022/05/nft-2065.webp",
          "source_id": "metro",
          "country": [
              "united kingdom"
          ],
          "category": [
              "top"
          ],
          "language": "english"
      },
      {
          "title": "Don Moore warns Floyd Mayweather ‘I’m no Logan Paul’ and promises ‘explosive’ exhibition with boxing legend in Dubai",
          "link": "https://www.thesun.co.uk/sport/18384606/don-moore-floyd-mayweather-logan-paul-exhibition-boxing-dubai/",
          "keywords": [
              "Boxing",
              "Sport"
          ],
          "creator": [
              "Jack Figg"
          ],
          "video_url": null,
          "description": "DON MOORE has warned Floyd Mayweather “I’m no Logan Paul” as he promised an “explosive” exhibition with the boxing legend. Mayweather returns to the ring against ex-sparring partner Moore on May 14 with the pair sensationally set to fight on a Dubai HELIPAD. It was only last June the unbeaten American gave away TWO STONE […]",
          "content": "DON MOORE has warned Floyd Mayweather “I’m no Logan Paul” as he promised an “explosive” exhibition with the boxing legend. Mayweather returns to the ring against ex-sparring partner Moore on May 14 with the pair sensationally set to fight on a Dubai HELIPAD. Floyd Mayweather and Don Moore ahead of their exhibitionGetty Images - Getty Logan Paul took Floyd Mayweather the distance in their exhibitionGetty It was only last June the unbeaten American gave away TWO STONE in his spectacle bout with YouTuber Paul. It went the full eight-round distance and lacked little entertainment – but Moore vowed there will be no such complaints this month. He told SunSport: “Floyd is going to understand and figure out that ay, I’m no Logan Paul and I am not no one that you have seen before.  “We’ve sparred and I showcased my talent but on May 14th, I’m not no sparring partner and I mean that from the bottom of my heart.  READ MORE LESS IS MOORE Mayweather to fight Moore in front of 20 fans with NFT tickets costing £150k here comes the money Floyd Mayweather vs Don Moore: Date, UK start time, TV channel, stream “I’m in here to kick ass and that’s what I’m going to do, I’m a fighter.” Mayweather claimed he did minimal training before his exhibition with Paul in Miami. He said at the time: “A little bit here and there. Not every day. But I don’t have to.” Moore, who has 18 wins with one draw, is adamant Mayweather will unfortunately take him as a much more serious threat to his unblemished 50-0 record. Most read in Boxing Average Joe Hearn brutally puts down Paul - but insists \"average\" label is a compliment PAUL ON THE TABLE Jake Paul sets next fight date with Conor McGregor and Mike Tyson linked 'WE'RE BOTH WINNERS' Katie Taylor beats Amanda Serrano in biggest female fight in history SIZING UP Larry Holmes calls for 'size limit' in boxing after 'giant' Fury's win vs Whyte RU ARE YA? Andy Ruiz Jr vs Luis Ortiz fight date CONFIRMED as August 13 in Los Angeles CHAMPION WALK Fury walks around Wilmslow as Gypsy King enjoys retirement after Whyte fight FREE BETS AND SIGN UP DEALS – BEST NEW CUSTOMER OFFERS He said: “I’m not taking away from anybody’s ability to perform, but, Logan Paul isn’t a fighter. I’m a real boxer.  “I’m undefeated, I’m a real fighter, this is very different, the mindset is different, the way Floyd is training is different.  “Floyd said in an interview he only trained ten days for Logan Paul, I wish he would train ten days for me!  “This is a real action-packed exhibition, you guys are going to get a bang for your buck. “Everything is going to be explosive, it’s going to be an exciting exhibition for the whole world to see.” The fight 700ft above sea level at the Burj Al Arab Hotel is set to have only 20 VIP fans in attendance, with tickets purchased as NFTs at £150,000. And he urged those select few, and the paying pay-per-view customers at home, to keep their eyes glued to the action. Moore said: “I’m going to apply a lot of correct pressure, I have the blueprint, with my coach Kenny Johnson, we’ve been studying and training.  Read More on The Sun VLAD’S FURY Russian TV threatens annihilation of UK with radioactive tsunami & Satan-2 nuke HOLIDAY ROMANCE Helen Skelton's husband has 'fled abroad for a holiday with new girlfriend' “It’s going to be very competitive and Floyd is going to understand that listen, I’m not no sparring partner. “It’s going to be an exciting fight, if you turn away to get popcorn, you just might miss something.”  GettyDon Moore during a 2015 sparring session with Floyd Mayweather[/caption]",
          "pubDate": "2022-05-02 15:12:47",
          "image_url": null,
          "source_id": "thesun",
          "country": [
              "united kingdom"
          ],
          "category": [
              "sports"
          ],
          "language": "english"
      },
      {
          "title": "The NBA Released a Dynamic NFT Series Dubbed “The Association”",
          "link": "https://hypebeast.com/2022/5/nba-the-association-nfts-franchise-2022-playoffs",
          "keywords": [
              "Art"
          ],
          "creator": null,
          "video_url": null,
          "description": "To coincide with the excitement of the 2022 NBA Playoffs, the league has released a dynamic NFT series eponymously dubbed \"The Association.\"Made in conjunction with FRANCHISE, the collection features 30,000 NFTs being minted during the postseason — 125 editions per player across the 16 playoff teams. Each is issued as a blind-mint, which means that nobody will know which player they will receive prior to the reveal. View this post on InstagramA post shared by FRANCHISE (@thisisfranchise)Globally recognized for showcasing basketball through the lens of art, design, music and fashion, FRANCHISE creative director Justin Montag tapped Jacob Rochester to create each profile, along with Jen Stark and Rewina Beshue to create the background animations for each token. As the second round rolls on, the remaining players will continue to change in appearance as they achieve a particular accolade or advance throughout the playoffs. For example, a player receives a splash indicator if they score four or more three-pointers made in a game or a dagger icon to those who score a game-winning shot in the final 24 seconds. Somewhat similar to buying a pack of trading cards, players will be assigned randomly and transparently using Chainlink VRF to ensure a fair and equal chance of minting any athlete from any of the 16 playoff teams. Please visit The Association NFT along with OpenSea to learn more on how you can acquire your own. Elsewhere, Perrotin published the first monograph on South Korean artist Lee Bae.Click here to view full gallery at HYPEBEAST",
          "content": "To coincide with the excitement of the 2022 NBA Playoffs, the league has released a dynamic NFT series eponymously dubbed \"The Association.\"Made in conjunction with FRANCHISE, the collection features 30,000 NFTs being minted during the postseason — 125 editions per player across the 16 playoff teams. Each is issued as a blind-mint, which means that nobody will know which player they will receive prior to the reveal. View this post on InstagramA post shared by FRANCHISE (@thisisfranchise)Globally recognized for showcasing basketball through the lens of art, design, music and fashion, FRANCHISE creative director Justin Montag tapped Jacob Rochester to create each profile, along with Jen Stark and Rewina Beshue to create the background animations for each token. As the second round rolls on, the remaining players will continue to change in appearance as they achieve a particular accolade or advance throughout the playoffs. For example, a player receives a splash indicator if they score four or more three-pointers made in a game or a dagger icon to those who score a game-winning shot in the final 24 seconds. Somewhat similar to buying a pack of trading cards, players will be assigned randomly and transparently using Chainlink VRF to ensure a fair and equal chance of minting any athlete from any of the 16 playoff teams. Please visit The Association NFT along with OpenSea to learn more on how you can acquire your own. Elsewhere, Perrotin published the first monograph on South Korean artist Lee Bae. Click here to view full gallery at HYPEBEAST",
          "pubDate": "2022-05-02 14:51:34",
          "image_url": null,
          "source_id": "hypebeast",
          "country": [
              "singapore"
          ],
          "category": [
              "top"
          ],
          "language": "english"
      }
  ],
  "nextPage": 1
}

let cryptopage0={
  "status": "success",
  "totalResults": 154,
  "results": [
      {
          "title": "University in Mass. now accepting crypto for tuition payments",
          "link": "https://www.wcvb.com/article/bentley-university-accepts-cryptocurrency-for-tuition/39895675",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "The school is accepting three cryptocurrencies — Bitcoin, Ethereum and the stablecoin USD coin — giving students and their families new ways to pay tuition.",
          "content": null,
          "pubDate": "2022-05-03 18:02:00",
          "image_url": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/cryptocurrency-advertisement-bitcoin-ap-photo-1651600845.jpg",
          "source_id": "wcvb",
          "country": [
              "united states of america"
          ],
          "category": [
              "top"
          ],
          "language": "english"
      },
      {
          "title": "A diminished Firefox turns 100",
          "link": "https://techcrunch.com/2022/05/03/a-diminished-firefox-turns-100/",
          "keywords": [
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
              "Web browsers"
          ],
          "creator": [
              "Frederic Lardinois"
          ],
          "video_url": null,
          "description": "Mozilla launched version 100 of its Firefox browser today, but more so than a day for celebration, it feels like a day for nostalgia. That’s a nostalgia for a time when Firefox was truly revolutionary after it broke out of the Mozilla Application Suite back in 2002 and quickly threatened the hegemony of the utterly […]",
          "content": "Mozilla launched version 100 of its Firefox browser today, but more so than a day for celebration, it feels like a day for nostalgia. That’s a nostalgia for a time when Firefox was truly revolutionary after it broke out of the Mozilla Application Suite back in 2002 and quickly threatened the hegemony of the utterly dismal Internet Explorer. But also a nostalgia for the open web, which Mozilla was able to champion when Firefox still had a dominant market share. It’s much easier to lead when your product has 30% market share and growing (like Firefox had around 2010) and your biggest competitor is declining quickly, but it’s hard to make your voice heard when you are under 4%. Today’s Mozilla, after many lean years, seems to be on a path to a better financial future, but its dependence on Google makes for an uneasy alliance as Mozilla tries to champion online privacy in a world dominated by the giant advertising company it utterly depends on. Firefox, too, is now a perfectly competent browser — but so is every other browser. It’s no secret that over the years, Mozilla got distracted. There were efforts to build a Firefox OS for affordable smartphones (which still lives as a fork under the KaiOS banner), VR browsers, arguments over whether there should be sponsored tiles on Firefox’s new tab page, a WebRTC video chat service and much more. Today, with Firefox Relay and the Mozilla VPN, it seems the organization has refocused a bit. Its focus on privacy resonates more today than it ever did — but for now, that hasn’t changed the browser’s fortune. Even today, for most users, privacy is a nice to have but not a reason to switch browsers, especially when there are plenty of extensions that can essentially do the same (though Firefox’s Multi-Account Containers are a game changer and should be available in every browser, as far as I’m concerned). Yet with all of the resources being poured into Chromium, it’s hard to see how Firefox and its Gecko engine will remain competitive in the long run. Browsers today are incredibly complex pieces of software. With Servo, Mozilla started a project to build a new engine from scratch. That was in 2012. Ten years later, we’re only seeing pieces of that in Firefox — and when Mozilla laid off many of its employees in 2020, that included the Servo team. There also hasn’t been a lot of innovation around Firefox lately, all while Chromium-based browsers are finding their niches, with Vivaldi, for example, tapping into the market for advanced users who want endless customizability, Brave going for the privacy-conscious crypto fans and Microsoft keeping the Windows faithful happy after finally ditching Internet Explorer (despite occasional missteps into bloatware). It doesn’t help that Mozilla never made it easy to build new user experiences around its browser engine while Chromium made it a core feature. Users may not care about the engine underneath their browsers, but developers who want to experiment with new browser paradigms will always opt for Chromium. The web is better off today because of what Mozilla built with Firefox. I hope we’ll see version 200 eight years from now. Mozilla expects to generate more than $500M in revenue this year",
          "pubDate": "2022-05-03 17:54:23",
          "image_url": null,
          "source_id": "techcrunch",
          "country": [
              "united states of america"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "Wikipedia won't take crypto anymore",
          "link": "https://www.pcgamer.com/wikipedia-wont-take-crypto-anymore",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "But they only made up 0.08% of donations anyway.",
          "content": null,
          "pubDate": "2022-05-03 17:46:03",
          "image_url": null,
          "source_id": "pcgamer",
          "country": [
              "united states of america",
              "united kingdom",
              "australia",
              "canada"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "Belgium Introduces Registration for Crypto Exchange and Wallet Service Providers",
          "link": "https://news.bitcoin.com/belgium-introduces-registration-for-crypto-exchange-and-wallet-service-providers/",
          "keywords": [
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
              "watchdog"
          ],
          "creator": [
              "Lubomir Tassev"
          ],
          "video_url": null,
          "description": "Authorities in Belgium have obliged providers of some crypto exchange and wallet services to register with the country’s financial watchdog. Targeted platforms that fail to comply with the new regulations will face fines, among other penalties, including prohibition to carry out their respective activities. Financial Regulator Imposes Mandatory Registration for Crypto Exchange Service Providers in […]",
          "content": "Authorities in Belgium have obliged providers of some crypto exchange and wallet services to register with the country’s financial watchdog. Targeted platforms that fail to comply with the new regulations will face fines, among other penalties, including prohibition to carry out their respective activities. Financial Regulator Imposes Mandatory Registration for Crypto Exchange Service Providers in Belgium Starting from May 1, 2022, any legal entities established and operating in Belgium that want to provide exchange services between “virtual currencies and legal currencies” are required to register with the Financial Services and Markets Authority (FSMA), the country’s financial regulator. The same applies to companies offering custody wallet services, the agency announced. Cryptocurrency platforms falling under these two categories, which had been working in Belgium before the specified date, should notify the FSMA of their activities before July 1, 2022 and apply for registration prior to a Sept. 1 deadline, the watchdog said. They will be granted “provisional authorization” allowing them to continue operations until the FSMA reviews their registration requests. The affected service providers are Belgian or European companies. The registration is subject to a minimum capital requirement of €50,000 ($53,000), a FAQ section on the authority’s website details. The FSMA also wants to know the identities of the shareholders and the persons in control of the platforms who must have the necessary management qualities. The FSMA notes that by exchange service providers it means entities carrying out purchase or sale transactions using own capital. That’s when the provider acts as a counterparty to a deal, just like traditional currency exchange offices. Platforms that serve as intermediaries in transactions between a client and a third party are not targeted with the new rules. However, operators of automated teller machines (ATMs) for crypto-fiat exchange, will be considered as providers of exchange services for the purposes of the new requirements. The regulator also defines custodial wallet services as services for the custody of private cryptographic keys on behalf of clients for the purpose of holding, storing, and transferring virtual currencies. Persons offering customers such services will be viewed as custodial wallet service providers that need to register with the FSMA. Do you think most crypto service providers in Belgium will be able to meet the new requirements and register with the country’s financial watchdog? Tell us in the comments section below.",
          "pubDate": "2022-05-03 17:30:15",
          "image_url": null,
          "source_id": "bitcoin",
          "country": [
              "united states of america",
              "united kingdom",
              "india",
              "australia",
              "singapore",
              "saudi arabia",
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "The Largest Market Cap Coin You Haven't Heard Of: LUNA",
          "link": "https://www.fool.com/investing/2022/05/03/the-largest-market-cap-coin-you-havent-heard-of-lu/?source=iedfolrf0000001",
          "keywords": null,
          "creator": [
              "newsfeedback@fool.com (Stephen Woicik)"
          ],
          "video_url": null,
          "description": "Terra could be the top performing alt coin in 2022, outperforming ADA, SOL, MATIC, and others.",
          "content": "Terra, with its token LUNA (CRYPTO: LUNA), has the 9th largest market cap at $30 billion. Yet, living in the United States, you may have never heard of it, and you wouldn't be alone. Terra's popularity and growth mostly comes from the Asia-Pacific region of the world. Terra is attempting to build a currency of stable coins, backed by real and digital assets. In 2022 the currency is finally hitting critical mass and activity. Image Source: Getty Images.Continue reading",
          "pubDate": "2022-05-03 17:06:41",
          "full_description": "Terra, with its token LUNA ( LUNA 1.40% ) , has the 9th largest market cap at $30 billion. Yet, living in the United States, you may have never heard of it, and you wouldn't be alone. Terra's popularity and growth mostly comes from the Asia-Pacific region of the world. Terra is attempting to build a currency of stable coins, backed by real and digital assets. In 2022 the currency is finally hitting critical mass and activity. Image Source: Getty Images. Surging Activity The number of wallet addresses on the network has been surging since the end of 2021, from about 900,000 to 3.5 million wallets. This has caused a massive uptick in the buying, selling, and spending of the currency, which increases both its value and utility. The LUNA token may be about to go through the mass market popularity that many alt coins enjoyed in 2021, thanks to its recent introduction to the U.S. market. Being an Asia-Pacific focused company, the U.S. has not been the primary focus. But already it has 220,000 stakers across the globe, who provide a stable network ready to handle growth. Built to Grow Terra already has proven utility, instead of just frothy theoretical value, as many hyped alt coins tend to do. The LUNA blockchain has proven it can handle high transaction volume and the steady number of stakers shows a stable and long-term belief in LUNA. The network has been integrated into apps as a payment platform. It has been built to be faster and cheaper to run than ETH (with 10,000 transactions per second speed compared to 20 on ETH). It has DeFi, staking, and other financial tools already running. Terra is ready to handle the increased activity on its blockchain. Currently it handles a 24 hour volume of about $3.1 billion. Compare that to ADA $900 Million, SOL $1.5 billion, and XRP $1.9 billion. Even with this trading volume, the chain is still processing less transactions per second than the 10,000 limit. Current estimates from Terra is 4,000-7,000 transactions per second. Terra has shown it can handle high volume, and is able to handle more. Terra is trying to be a global currency and money mover, and is succeeding in getting there (with a long way to go still). It could become the cheapest and most efficient way to move currencies globally. Also noteworthy: Terra recently added $3 billion in bitcoin to back their currency (with a goal of adding up to $10 billion). This is a great sign that the currency is growing and its developers are putting as much support as possible behind it. Terra wants its stable coins to be based on the Bitcoin monetary standard and will allow Terra to build a stable coin that is actually decentralized. This is a very unique and complex way of doing stable coins which is traditionally based on a 1 to 1 relationship with a central repository. In a traditional stable coin the cryptocurrency is backed by a traditional bank account. Where 1 token is backed by $1 real dollar in a bank account. Terra is backing its stable coin with assets on the blockchain. There is no central traditional bank holding all the value. Terra is using crypto investments in LUNA to decentralize the assets backing up the stable coins. 2022 and Beyond Terra has laid the groundwork to have a bright future. LUNA may be one of the best performing alt coins in 2022 and beyond.",
          "image_url": null,
          "source_id": "fool",
          "country": [
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Cryptovoxels Is Rebranding to Voxels",
          "link": "https://news.bitcoin.com/cryptovoxels-is-rebranding-to-voxels/",
          "keywords": [
              "Press release",
              "Cryptovoxels",
              "voxels"
          ],
          "creator": [
              "Bitcoin.com Media"
          ],
          "video_url": null,
          "description": "PRESS RELEASE. Cryptovoxels, one of the most significant players in the metaverse space, is rebranding to Voxels. The rebrand will happen on May 3rd at 8pm EDT (May 4th at noon New Zealand time). One of Web 3’s most popular communities, Cryptovoxels is a metaverse on the Ethereum blockchain where players can own land, and […]",
          "content": "PRESS RELEASE. Cryptovoxels, one of the most significant players in the metaverse space, is rebranding to Voxels. The rebrand will happen on May 3rd at 8pm EDT (May 4th at noon New Zealand time). One of Web 3’s most popular communities, Cryptovoxels is a metaverse on the Ethereum blockchain where players can own land, and build and develop online experiences. The user-owned virtual world already hosts a number of art galleries, stores, and party spaces. Far from a mere name change, the rebranding to Voxels represents a pivot to a wider-spread audience that caters to those unfamiliar with cryptocurrency for the New Zealand-based platform. Web 3 promises a whole new internet experience and the metaverse stands at the epicenter of that promise. As interest in the metaverse expands, it is attracting the attention of more and more mainstream brands, companies, and sectors. With the rapid growth of metaverse platforms, Cryptovoxels is broadening its user base horizon from those familiar with cryptocurrency and blockchain technology to a more mainstream audience. As Founder Ben Nolan explained, “Cryptovoxels was founded on April 1st, 2018, before NFTs hit the mainstream. We are honored to have released around the same time as Cryptopunks and Cryptokitties. The word “crypto” can have a negative connotation in the public’s mind, and yet the future of decentralization is bright and we believe in user sovereignty. Cryptovoxels is Voxels. We are rebranding to match our focus of embracing the growth and culturel of Web 3.0.” The Rationale Behind the Rebrand Cryptovoxels has already established itself as a prominent metaverse in the ecosystem. According to data from MetaCat, Cryptovoxels ranks fifth in terms of parcel sales volume ($38MM) and total parcels sold. The platform is regularly ranked just behind Decentraland and The Sandbox in terms of its popularity and user base. Cryptovoxels land is more scarce than that of its competitors, allows users to build on free spaces and submit wearables to public collections for free, and is also mobile-friendly. Leveraging its position as a leading metaverse in the market, Cryptovoxels – soon to be Voxels – intends to broaden the benefits of Web 3 to Web 2 users, non-crypto users, and to accommodate the growing interest in the metaverse among corporations and brands. Voxels will retain the indie feel of Cryptovoxels while pursuing further growth and development. With the metaverse platform seeing a continued expansion of players as we add themed islands, mini-games, and stories. A new character that has been created, VIDDA, the artificial intelligence heart that gives inspiration to new people in the game, has become a symbol of the rebrand, representing a commitment to visuals, intent, design, direction, and atmosphere. Cryptovoxels was the world’s first metaverse ever released. On the rebrand, Lead Developer and Product Owner Benjamin Larcher said that “As a brand, Cryptovoxels grew extensively and maintained an image as the most user-friendly and accessible metaverse. I have been privileged to be a part of this growth, both as a player and as a developer. Today, Cryptovoxels becomes Voxels. We have been fortunate to work with brilliant minds in the community and in the company, and are grateful as they’ve made us what we are today. I am committed to continuing to enhance the Voxels experience. This includes performance improvements, more accessibility, more features, and most importantly, more value to the community. As a player, I am eager to see Voxels become a better Cryptovoxels.” Kicking Off The Newly Created Voxels While Voxels’ new website won’t be launched until the second half of the year, the rebrand on May 3rd will be celebrated with the launch of VoxCon, the newly created Voxels headquarters in the metaverse, on Andromeda Island. VoxCon will host a show to celebrate, with music, two DJs, and an AMA with Ben Nolan and Benjamin Larcher. Any logged-in attendee who signs the Guestbook on the Giving Tree by the entrance will receive at least a dozen collectibles: wearables for their avatars. Cryptovoxels will officially become Voxels – as indicated by a soon-to-be-revealed new logo – on May 3rd, 12am UTC, 8pm EST (May 4, 12pm NZT). Boilerplate Cryptovoxels – soon to be Voxels – is one of the original metaverse platforms in the blockchain sector and boasts a thriving community of players and landowners. Its user-owned virtual world based on the Ethereum network offers visitors a range of experiences, including art, design, music, and other immersive virtual experiences. cryptovoxels.com | Twitter | Discord | Reddit | Wiki | OpenSea     This is a press release. Readers should do their own due diligence before taking any actions related to the promoted company or any of its affiliates or services. Bitcoin.com is not responsible, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods or services mentioned in the press release.",
          "pubDate": "2022-05-03 17:00:48",
          "image_url": null,
          "source_id": "bitcoin",
          "country": [
              "united states of america",
              "united kingdom",
              "india",
              "australia",
              "singapore",
              "saudi arabia",
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Why The Sandbox Cryptocurrency Is Up Today",
          "link": "https://www.fool.com/investing/2022/05/03/why-the-sandbox-cryptocurrency-is-up-today/?source=iedfolrf0000001",
          "keywords": null,
          "creator": [
              "newsfeedback@fool.com (Bram Berkowitz)"
          ],
          "video_url": null,
          "description": "Dubai's digital asset regulator recently announced plans to establish a headquarters in the Sandbox virtual world.",
          "content": "Over the last 24 hours, the price of The Sandbox (CRYPTO: SAND) cryptocurrency traded nearly 5% higher as of 12:07 p.m. ET today after Dubai's virtual asset regulator said it plans to put a virtual headquarters in the Sandbox metaverse.The Sandbox is a virtual gaming world run on the Ethereum blockchain network, where users can create non-fungible tokens (NFTs) to use in the virtual world.Today, Dubai's Virtual Assets Regulatory Authority (VARA), which seeks to promote Dubai as an international leader for virtual assets and to develop a digital economy in Dubai, announced that it plans to create a metaverse headquarters in the Sandbox.Continue reading",
          "pubDate": "2022-05-03 16:44:04",
          "image_url": null,
          "source_id": "fool",
          "country": [
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Biggest Movers: ALGO Boosted by FIFA Partnership News, as AVAX and Near Rise Higher",
          "link": "https://news.bitcoin.com/biggest-movers-algo-boosted-by-fifa-partnership-news-as-avax-and-near-rise-higher/",
          "keywords": [
              "Market Updates",
              "algo",
              "Analysis",
              "FIFA. AVAX",
              "TA",
              "Technical Analysis"
          ],
          "creator": [
              "Eliman Dambell"
          ],
          "video_url": null,
          "description": "ALGO was up by nearly 20% during today’s trading session, following the news of a partnership with football’s governing body, FIFA. NEAR and AVAX were also higher on Tuesday, with AVAX extending a recent bullish run. Algorand (ALGO) ALGO was one of Tuesday’s big gainers, as it was announced that FIFA would be partnering up […]",
          "content": "ALGO was up by nearly 20% during today’s trading session, following the news of a partnership with football’s governing body, FIFA. NEAR and AVAX were also higher on Tuesday, with AVAX extending a recent bullish run. Algorand (ALGO) ALGO was one of Tuesday’s big gainers, as it was announced that FIFA would be partnering up with Algorand for the upcoming 2022 world cup. The partnership will also see Algorand serve as an official sponsor for next year’s Women’s World Cup in Australia and New Zealand. As a result of the news, ALGO/USD rallied to a peak of $0.7357 earlier in today’s session, and this comes less than 24-hours after trading at a low of $0.5824. Overall, ALGO has now risen for a third straight session, however earlier gains have eased, as prices approached a key resistance point. As of writing this, ALGO is now trading at $0.6652, as bulls have vacated earlier positions in order to solidify their gains. Traders now look to see if a breakout of the $0.7500 level will take place in upcoming sessions, and this could occur should we see a second wave of bulls. Avalanche (AVAX) Similar to ALGO, AVAX was also up for a third consecutive session, as prices attempted to move away from multi-month lows. Last week saw AVAX/USD fall to its lowest level since January 21, however bulls have since reappeared and attempted to spur a price reversal. As a result of this, AVAX hit an intraday peak of $62.28 earlier today, and this comes after prices were at a bottom of $57.16 to start the week. Looking at the chart, this recent rally comes as the 14-day Relative Strength Index continues to hover near a four month low, with bulls likely tempted to buy the current weakness. Should this momentum continue, the next key target will likely be the ceiling of $67.30, where bulls typically dominate. Overall, prices have somewhat slipped from earlier highs, however bulls are likely waiting for the opportune time to strike. Will crypto markets begin to rebound in May, following April’s losses? Let us know your thoughts in the comments.",
          "pubDate": "2022-05-03 16:37:15",
          "image_url": null,
          "source_id": "bitcoin",
          "country": [
              "united states of america",
              "united kingdom",
              "india",
              "australia",
              "singapore",
              "saudi arabia",
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "SEC staffs up to police crypto",
          "link": "https://finance.yahoo.com/news/sec-staffs-up-to-police-crypto-163326680.html",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": null,
          "content": null,
          "pubDate": "2022-05-03 16:33:26",
          "image_url": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/da24dc60-287b-11ec-bdfb-1b79f92db31c",
          "source_id": "yahoo_sg",
          "country": [
              "singapore"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Critics see risk in 'algorithmic' stablecoins",
          "link": "https://techxplore.com/news/2022-05-critics-algorithmic-stablecoins.html",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "A new type of digital asset called an algorithmic stablecoin is gaining steam among crypto-enthusiasts—and drawing steam among critics, who warn its risks are in plain sight.",
          "content": null,
          "pubDate": "2022-05-03 15:50:01",
          "full_description": "A new type of digital asset called an algorithmic stablecoin is gaining steam among crypto-enthusiasts—and drawing steam among critics, who warn its risks are in plain sight. Algorithmic stablecoins use market incentives, controlled by the algorithms that give the cryptocurrency its name, to maintain a stable price against a currency such as the dollar, rather than backing the price with assets like cash or Treasury securities, as other stablecoins do. An algorithmic stablecoin called TerraUSD is now the third-largest stablecoin by market value , according to sites that track such value. It is not backed by dollars but instead uses a complex arbitrage system to maintain the price. According to some experts, that makes it inherently fragile. \"The risk is obvious,\" said Vivian Fang, professor of accounting at the University of Minnesota's Carlson School of Management. \"If you have $100 to back up 100 tokens, then we know if anything goes terribly wrong then we should be able to get $100. But with the algorithmic stablecoins, you can't be so confident.\" These assets are growing quickly, though they're still a small slice of the stablecoin pie, Fang said. \"I have my fear about this algorithmic stablecoin because, one, it's not backed by a reserve, so I don't know where that confidence comes from,\" Fang said. \"Computers cannot always guarantee that the market works.\" How it works Ryan Clements, assistant law professor at the University of Calgary, said the idea behind algorithmic stablecoins is the same as the more typical variety: to keep the coins at a constant $1. But the way that's accomplished is entirely different. \"The idea behind an algorithmic stablecoin is that you create an economic incentive with another token in order to maintain its stability,\" Clements said in an interview. Take the TerraUSD coin, for example. The price of the coin—launched by Singapore-based Terraform Labs and built on its own blockchain—could fluctuate according to how many people want it and how much of it is available. But there are two tokens involved in Terra's blockchain: TerraUSD, the stablecoin, and Luna, a so-called governance token. The relationship between the two is meant to keep TerraUSD's dollar value stable. If the price of the stablecoin rises above $1 based on investor demand, a Luna holder can swap $1 worth of Luna for that coin, making a profit from the higher price. Conversely, when the coin drops, traders can then make a profit by swapping it for $1 worth of Luna. This reduces the supply, raising its price. Terra originally relied entirely on this two-coin system but has recently added Bitcoin reserves as a backstop to support its algorithmic model. Do Kwon, the founder of Terraform Labs, tweeted in March that TerraUSD would be backed with $10 billion in Bitcoin reserves. At issue is what supports this arbitrage system. The stablecoin is maintained through incentives and supported by demand from within the Terra decentralized finance ecosystem, including an \"Anchor Protocol.\" This is a program that allows users to lend out their coins and get a nearly 20 percent return. Borrowing demand and income from \"staking,\" which rewards coin owners for holding their crypto on the Terra network, generates the interest to the lenders, Clements said. The system is complex. \"There are currently no regulated standards for disclosures on DeFi borrowing and staking platforms like Anchor,\" Clements said. Terra is betting that the use of a \"network\" of financial applications that use stablecoins and Luna will drive demand, Clements wrote in a paper before Terra began buying Bitcoin. He said that assumption of demand is far from certain. Relying on perpetual interest or motivated actors for sustainability looks like \"standing dominos,\" he said in the paper. \"I think this acquisition of Bitcoin supports the contentions in my paper that the arbitrage dynamic alone is insufficient to maintain a peg because why else would Terra have purchased Bitcoin as a reserve if they thought their original model was stable enough?\" he said. Terraform Labs didn't comment. Regulators and lawmakers Regulators recommended Congress move urgently to install safeguards for stablecoins. Some in Congress have taken heed, drafting legislation that in some cases would require stablecoins to be backed entirely by cash. There could be securities law implications for the financial technology firms designing these types of coins, Securities and Exchange Commission member Hester Peirce, a Republican, said in an interview. Regulators need to bear in mind that room for experimentation, as well as the failures of some ventures, are all right. \"The issue is to make sure that you can achieve the regulatory objectives that you're trying to achieve while still allowing for this experimentation, so that should be the goal,\" Peirce said. As a first step, there should be a roundtable on stablecoins involving the public and regulators allowing for a conversation on what protections make sense, including a focus specifically on algorithmic stablecoins, Peirce said. Sen. Cynthia Lummis, R-Wyo., who is working with Sen. Kirsten Gillibrand, D-N.Y., on a digital asset regulation bill, said algorithmic stablecoins shouldn't be regulated because \"we don't fully understand their impact on our financial system.\" \"They are fundamentally different than other stablecoins, mainly because they do not have as strong of a connection to the traditional financial industry,\" Lummis said in an email. \"There may come a time where that need for regulation changes, but we shouldn't start with a heavy hand.\" Senate Banking Chair Sherrod Brown, D-Ohio, is concerned about the lack of consumer protections in digital asset markets, including algorithmic stablecoins, his office said in an email. \"He is committed to ensuring that these products don't hurt families and our economy,\" the office said. Stablecoins should have some level of regulation, Mark Cuban, a prominent investor and owner of the Dallas Mavericks NBA franchise, said in an email. In particular, they should be defined as \"pegged\" or \"algorithmic,\" with each having rules associated with that definition, Cuban said. \"Pegged should be defined as a 1 for 1 to whatever asset it is pegged to, whether Dollar, Euro, or Bananas, with limited flexibility in the choice of assets available,\" Cuban said. \"And that peg should be fully transparent and publicly disclosed in detail.\" Explore further 2022 CQ-Roll Call, Inc., All Rights Reserved. Distributed by Tribune Content Agency, LLC.",
          "image_url": "https://scx1.b-cdn.net/csz/news/tmb/2018/1-bitcoin.jpg",
          "source_id": "phys",
          "country": [
              "united states of america",
              "united kingdom",
              "india",
              "australia",
              "singapore"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      }
  ],
  "nextPage": 1
}

let cryptopage1={
  "status": "success",
  "totalResults": 154,
  "results": [
      {
          "title": "College Students Say Crying In Exams Activates “Cheating” Eye Tracker Software",
          "link": "https://futurism.com/college-students-exam-software-cheating-eye-tracking-covid",
          "keywords": [
              "Future Society",
              "ai",
              "covid",
              "dystopia",
              "software"
          ],
          "creator": [
              "Lonnie Lee Hood"
          ],
          "video_url": null,
          "description": "Professors these days use digital tools to prevent cheating during online exams because so many people are taking class from home or their dorm rooms after the COVID-19 pandemic — and it’s more than a little stressful. The software tracks eye movements and even anxious sobbing during hard tests, one commenter said underneath a TikTok […]",
          "content": "Colleges and universities are increasingly using digital tools to prevent cheating during online exams, since so many people are taking class from home or their dorm rooms in the era of COVID-19. Needless to say, there are pain points. The programs — angry commenters namechecked software including Pearson VUE and Honorlock — track eye movements and even anxious sobbing during hard tests, one commenter said underneath a TikTok about the controversial trackers. University of Kentucky professor Josef Fruehwald said in his video that he wouldn’t trust professors who use tracking software, prompting 2.3 million views and dozens of comments from stressed out students. “One of my French exams got flagged for cheating because I was crying for the whole thing and my French prof had to watch 45 min of me quietly sobbing,” one user replied. “Since COVID, LSAT uses a proctoring system,” another said. “I was yelled at for having a framed quote from my grandmother on the wall.” No less harrowing, one student said a proctor asked them to change into “something more conservative” during the exam, in the student’s own home. Fruehwald got so many responses he made a Twitter thread about it — whereupon tweeps started sharing even more allegations. “My husband has two classes left for his BFA and one of them is a math class that requires an assessment test before enrolling,” wrote one person. “He should have graduated two years ago but he couldn’t take the friggin math class because THE SOUND OF HIS LAPTOP’S FAN SET OFF THE PROCTOR SOFTWARE.” Eye tracking software isn’t exactly knocking out out of the park in the public opinion lately. One startup is forcing people to watch ads with their eyelids all the way open, and another is offering crypto in exchange for eyeball time. The pandemic has changed a lot about the way society runs, and education seems to be a particularly challenged sector. As teachers quit jobs and students say they’re silently sobbing into eye tracking programs on a computer screen, it’s not hard to see why. More on good decisions it’s never too late to make: Canada Says Astronauts Are No Longer Allowed to Murder Each Other The post College Students Say Crying In Exams Activates “Cheating” Eye Tracker Software appeared first on Futurism.",
          "pubDate": "2022-05-03 14:41:21",
          "image_url": null,
          "source_id": "futurism",
          "country": [
              "united states of america"
          ],
          "category": [
              "technology",
              "science"
          ],
          "language": "english"
      },
      {
          "title": "The SEC is nearly doubling its crypto enforcement unit as the agency sees retail investors 'bearing the brunt of abuses' in the digital asset sector",
          "link": "https://markets.businessinsider.com/news/currencies/sec-boosts-crypto-enforcement-staff-protect-retail-traders-2022-5",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "The Wall Street regulator said it would add 20 positions to its Crypto Assets and Cyber Unit, bringing it to a total of 50.",
          "content": null,
          "pubDate": "2022-05-03 14:40:28",
          "image_url": "https://i.insider.com/627133fffacd1e0019fba945?format=jpeg",
          "source_id": "businessinsider_us",
          "country": [
              "united states of america"
          ],
          "category": [
              "top"
          ],
          "language": "english"
      },
      {
          "title": "Who’s profiting from the Bored Ape digital land sale?",
          "link": "https://techcrunch.com/2022/05/03/whos-profiting-from-the-bored-ape-digital-land-sale/",
          "keywords": [
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
              "Yuga Labs"
          ],
          "creator": [
              "Alex Wilhelm"
          ],
          "video_url": null,
          "description": "We can see that the Yuga Labs world represents a large portion of the aggregate NFT market as we understand it. Is there a bit too much centralization there?",
          "content": "The Yuga Labs digital land sale this weekend, a mass-mint of new NFTs that temporarily clogged the Ethereum blockchain, is not just making money for the company behind the new set of images that may figure in a future digital service. Other parties are also doing rather well from the effort. News coverage from the “Otherdeeds” mint points to massive volumes. Decrypt wrote that “OpenSea set a new one-day record for Ethereum NFT trading on Sunday with $476 million,” with the publication adding that “much” of the sum came from Otherdeed activity. Crypto Bahamas signals stronger ties between old and new worlds of finance The rush of activity to collect what many hope will be incredibly valuable pieces of digital land — cartoon images of land, in effect, with slight variations — was immensely profitable for Yuga Labs, which took in an estimated $320 million from the event. The overall pace of activity driven by the mint was in fact so large that it led to a simply massive amount of ether, the token associated with the Ethereum blockchain, being burned. The Exchange explores startups, markets and money. Read it every morning on TechCrunch+ or get The Exchange newsletter every Saturday. Amid all the large numbers, you might think that it’s bullish times for the NFT market. After all, so much activity was driven by a single collection’s expansion project — the Bored Ape crew has managed to turn a hit NFT set into several collections, huge venture checks, and now a license to print money thanks to speculators snapping up its newly offered digital assets. But I wonder. Parsing the top collection list on OpenSea, we can see that the Yuga Labs world represents a large portion of the aggregate NFT market as we understand it. Is there a bit too much centralization in the NFT market?",
          "pubDate": "2022-05-03 14:35:48",
          "full_description": "The Yuga Labs digital land sale this weekend , a mass-mint of new NFTs that temporarily clogged the Ethereum blockchain, is not just making money for the company behind the new set of images that may figure in a future digital service. Other parties are also doing rather well from the effort. News coverage from the “Otherdeeds” mint points to massive volumes. Decrypt wrote that “OpenSea set a new one-day record for Ethereum NFT trading on Sunday with $476 million,” with the publication adding that “much” of the sum came from Otherdeed activity. Crypto Bahamas signals stronger ties between old and new worlds of finance The rush of activity to collect what many hope will be incredibly valuable pieces of digital land — cartoon images of land, in effect, with slight variations — was immensely profitable for Yuga Labs, which took in an estimated $320 million from the event. The overall pace of activity driven by the mint was in fact so large that it led to a simply massive amount of ether , the token associated with the Ethereum blockchain, being burned. The Exchange explores startups, markets and money. Read it every morning on TechCrunch+ or get The Exchange newsletter every Saturday. Amid all the large numbers, you might think that it’s bullish times for the NFT market. After all, so much activity was driven by a single collection’s expansion project — the Bored Ape crew has managed to turn a hit NFT set into several collections, huge venture checks, and now a license to print money thanks to speculators snapping up its newly offered digital assets. But I wonder. Parsing the top collection list on OpenSea, we can see that the Yuga Labs world represents a large portion of the aggregate NFT market as we understand it. Is there a bit too much centralization in the NFT market?",
          "image_url": null,
          "source_id": "techcrunch",
          "country": [
              "united states of america"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "SEC Nearly Doubles Crypto Enforcement Unit — Regulator Says ‘Crypto Markets Have Exploded in Recent Years’",
          "link": "https://news.bitcoin.com/sec-nearly-doubles-crypto-enforcement-unit-regulator-says-crypto-markets-have-exploded-in-recent-years/",
          "keywords": [
              "Regulation",
              "Bitcoin",
              "Crypto",
              "Cryptocurrency",
              "Gary Gensler",
              "SEC",
              "sec crypto"
          ],
          "creator": [
              "Kevin Helms"
          ],
          "video_url": null,
          "description": "The U.S. Securities and Exchange Commission (SEC) has nearly doubled the size of its Enforcement Division’s crypto unit. SEC Chairman Gary Gensler said the regulator “will be better equipped to police wrongdoing in the crypto markets while continuing to identify disclosure and controls issues with respect to cybersecurity.” SEC Strengthens Enforcement Division’s Crypto Unit The […]",
          "content": "The U.S. Securities and Exchange Commission (SEC) has nearly doubled the size of its Enforcement Division’s crypto unit. SEC Chairman Gary Gensler said the regulator “will be better equipped to police wrongdoing in the crypto markets while continuing to identify disclosure and controls issues with respect to cybersecurity.” SEC Strengthens Enforcement Division’s Crypto Unit The U.S. Securities and Exchange Commission announced Tuesday that it has nearly doubled the size of the Division of Enforcement’s unit “responsible for protecting investors in crypto markets and from cyber-related threats.” Citing “the allocation of 20 additional positions to the unit,” the SEC detailed: The newly renamed Crypto Assets and Cyber Unit (formerly known as the Cyber Unit) in the Division of Enforcement will grow to 50 dedicated positions. The unit has brought more than 80 enforcement actions related to fraudulent and unregistered crypto asset offerings and platforms since its creation in 2017, the SEC revealed, noting that they resulted in monetary relief totaling more than $2 billion. SEC Chair Gary Gensler added that the unit “has successfully brought dozens of cases against those seeking to take advantage of investors in crypto markets.” He elaborated: By nearly doubling the size of this key unit, the SEC will be better equipped to police wrongdoing in the crypto markets while continuing to identify disclosure and controls issues with respect to cybersecurity. The expanded crypto unit will focus on securities law violations involving crypto asset offerings, crypto exchanges, lending and staking products, decentralized finance (defi) platforms, non-fungible tokens (NFTs), and stablecoins. Gurbir S. Grewal, director of the SEC’s Division of Enforcement, commented: Crypto markets have exploded in recent years, with retail investors bearing the brunt of abuses in this space. Meanwhile, cyber-related threats continue to pose existential risks to our financial markets and participants. What do you think about the SEC doubling the size of its crypto enforcement unit? Let us know in the comments section below.",
          "pubDate": "2022-05-03 14:30:22",
          "image_url": null,
          "source_id": "bitcoin",
          "country": [
              "united states of america",
              "united kingdom",
              "india",
              "australia",
              "singapore",
              "saudi arabia",
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Anchor made Spotify the creator platform it is today ",
          "link": "https://www.theverge.com/2022/5/3/23054525/spotify-mignano-rogan-facebook-zuckerberg-anchor",
          "keywords": null,
          "creator": [
              "Ariel Shapiro"
          ],
          "video_url": null,
          "description": null,
          "content": "Hello, audiophiles! I am very excited to bring you my first public edition of Hot Pod. Following the trail blazed by Nick and Ashley, I’ll be in your inbox every Tuesday with scoops, news, analysis, and japes (quality of the latter not guaranteed). And, the closest I will ever get to being in a makeover montage, today I also get to introduce a fresh new look for Hot Pod courtesy of the ace design teams at The Verge and Vox Media. Readers will notice that we have an updated logo and layout with some hotter colors to accompany the Hot Pod name. So, what’s my deal? Like everyone else in modern media, I hopped around a bit before landing at The Verge. I have done stints at MSNBC, Paramount Plus, and, most relevant to you, covering media and entertainment at Forbes. In my former life as a cataloger of capitalist machinations, I was putting together the 2019 list of highest-paid comedians when I started getting tips that Joe Rogan — “you know, the NewsRadio guy” — was making a stupid amount of money from his podcast. So I pitched (and pitched, and pitched) the magazine’s first highest-earning podcaster list. Although nobody was making Kylie money, it was clear that the business was bigger and growing at a faster pace than any of us outside the industry could have anticipated. Cut to: acquisition frenzies, nine-figure licensing deals, and tech giants bending and molding the previously DIY podcasting industry to their will. And somehow after all that, things are no less messy — probably more so. For me, that makes it a dream beat. I look forward to exploring the sources of tension within the industry: suits trying to wring ad dollars out of unwieldy creators, streamers bulking up on podcasting to ease the burden of pricey music royalties, and celebrities starting a podcast because, why not, only to learn it’s a lot more involved than talking into a microphone. Plus, money. Podcasting is projected to be a $2 billion industry by next year, and I intend to figure out where that is flowing. (It can’t all go to Rogan.) I also look forward to hearing from you, dear reader! The good stuff always comes from conversations with people in the industry, rather than press releases. That kind of back and forth makes my job more fun and this newsletter a better read. So feel free to hit me up at ariel.shapiro@theverge.com with tips, recs, and general thoughts. As for shows, I don’t play favorites. Sorry, that’s a lie — I’m Brian Lehrer ride or die. SCOOP: Anchor co-founder Michael Mignano to leave Spotify Another one bites the dust. As I reported yesterday, Spotify’s podcast tech czar Michael Mignano will leave the company at the end of June, the company confirmed. He is the third top podcasting executive at the streamer to depart in the past month. In April, Spotify lost two major figures on the editorial side. First was Lydia Polgreen, a longtime New York Times journalist and former editor-in-chief of HuffPost, who became managing director of Gimlet in 2020. She announced that she will be heading back to the Times as an opinion columnist. Then came the announcement that Courtney Holt, Spotify’s head of studios and video who cut blockbuster deals with Joe Rogan and the Obamas and helped make the streamer a true force in podcasting when Apple was the default, would be leaving as well. Mignano has left a different kind of mark on the company. After co-founding DIY podcast platform Anchor with Nir Zicherman in 2015, Mignano sold the app to Spotify for $150 million in 2019 and came aboard to lead the tech on podcasts, video, and everything not having to do with music. Megaphone, the podcast advertising and publishing platform Spotify bought in 2020, fell under his purview. In 2021, he oversaw the company’s expansion into live audio when it bought Locker Room last year, which has since been rebranded Spotify Live. Mignano’s original app has proven to be his most consequential contribution to Spotify But Mignano’s original app has proven to be his most consequential contribution to Spotify, bulking up the service’s library to 4 million podcasts, up from 1 million podcasts in 2020. The company recently disclosed that 85 percent of its new podcasts are uploaded through Anchor. It’s not that Anchor has created any Joe Rogan or Alex Cooper-esque stars for Spotify (it hasn’t). But the largely unmoderated volume of content it produces has helped shift the company’s perspective on itself: that it is a platform for creators, not a publisher. It’s the argument the company used for defending its hands-off approach to Rogan’s COVID misinformation, a stance that pushed away angry subscribers and folk-rock legends alike. While Spotify attempts to manage that tension, Mignano is stepping away from day-to-day management of creator platforms. He is heading to an early-stage venture capital firm, with details to be announced closer to his departure. Zicherman remains at the company as the head of audiobooks and gated content. Facebook ditches the whole podcasting thing After less than a year in the podcast game, Facebook is out. Starting this week, users will no longer be able to upload new podcasts, and all shows will be removed from the platform starting June 3rd, Bloomberg first reported. The social network announced a slew of audio features last spring, including a central audio hub, shareable clips, and Sound Bites, which allowed users to create short-form audio clips a la TikTok. The hub and Sound Bites will shut down in the next few weeks, the company confirmed. The only real vestige of Facebook’s audio infrastructure that will remain will be its Live Audio Rooms, which will be integrated into Facebook Live. Facebook attempted to go about the shutdown quietly “After a year of learning and iterating on audio-first experiences, we’ve decided to simplify our suite of audio tools on Facebook,” a Meta spokesperson told Hot Pod. “We’re constantly evaluating the features we offer so we can focus on the most meaningful experiences.” Facebook attempted to go about the shutdown quietly. It reportedly informed its audio partners of the decision by email. It will not be informing users of the change and will leave it up to publishers to break the news to their listeners. There is still one Zuckerberg who believes in podcasting, however. On Monday, SiriusXM announced that Mark Zuckerberg’s sister Randi, a radio personality, Web3 advocate, and former Facebook spokesperson, will host a new podcast called Crypto Café With Randi Zuckerberg. Let’s hope it’s as unhinged as her 1980s throwback crypto feminism music video. More big hiring news Because there wasn’t enough news on Monday, iHeartMedia and Freakonomics Radio Network both made big hires. Freakonomics Radio Network has hired NPR podcast head Neal Carruth as its new general manager. He will lead editorial strategy for the network, which has expanded to five regular shows and has a dedicated channel on SiriusXM. Carruth spent 23 years at NPR, where he helped create the morning news podcast Up First and oversaw the development of shows like Planet Money and The NPR Politics Podcast. And iHeartMedia has tapped former Stitcher chief revenue officer Sarah van Mosel to lead its ad-buying service, the iHeart Audience Network. She will also have a hand in podcast partnerships, sales, and publisher development. Van Mosel worked at Stitcher during its acquisition by SiriusXM, after which she oversaw podcast revenue strategy across the company. That’s it for me! Carpe your crypto diem, pals.",
          "pubDate": "2022-05-03 14:30:00",
          "image_url": null,
          "source_id": "theverge",
          "country": [
              "united states of america"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "Foinse, LLC Announces Free Open Bar in NYC for Select .eth Domain Holders",
          "link": "https://www.globenewswire.com/news-release/2022/05/03/2434799/0/en/Foinse-LLC-Announces-Free-Open-Bar-in-NYC-for-Select-eth-Domain-Holders.html",
          "keywords": [
              "deBanked",
              "Foinse",
              "Sean Murray",
              "decashed",
              "cryptocurrency",
              "crypto networking",
              "NYC networking",
              "free open bar NYC"
          ],
          "creator": [
              "Foinse",
              " LLC"
          ],
          "video_url": null,
          "description": "deCashed is hosting an exclusive crypto networking event on May 11th from 6-9pm in New York City deCashed is hosting an exclusive crypto networking event on May 11th from 6-9pm in New York City",
          "content": null,
          "pubDate": "2022-05-03 14:29:00",
          "image_url": null,
          "source_id": "globenewswire",
          "country": [
              "united states of america"
          ],
          "category": [
              "entertainment"
          ],
          "language": "english"
      },
      {
          "title": "SEC nearly doubles its crypto enforcement team to police fraud",
          "link": "https://www.washingtonpost.com/business/2022/05/03/sec-crypto-enforcement-expansion/?utm_source=rss&utm_medium=referral&utm_campaign=wp_business",
          "keywords": null,
          "creator": [
              "By Tory Newmyer"
          ],
          "video_url": null,
          "description": "The top Wall Street regulator is adding manpower to police fraud in the booming cryptocurrency industry.",
          "content": null,
          "pubDate": "2022-05-03 14:12:55",
          "image_url": null,
          "source_id": "washingtonpost",
          "country": [
              "united states of america"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Crypto exchange Kraken to roll out NFT marketplace with promise to cover transaction fees",
          "link": "https://finance.yahoo.com/news/crypto-kraken-nft-marketplace-133945791.html",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": null,
          "content": null,
          "pubDate": "2022-05-03 13:39:45",
          "image_url": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/cf71cb80-cadc-11ec-bbb5-53525817ed59",
          "source_id": "yahoo_sg",
          "country": [
              "singapore"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Bitcoin, Ethereum Technical Analysis: BTC Below $40,000 Prior to Wednesday’s Fed Meeting",
          "link": "https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-btc-below-40000-prior-to-wednesdays-fed-meeting/",
          "keywords": [
              "Market Updates",
              "Analysis",
              "Bitcoin",
              "ETH",
              "FOMC"
          ],
          "creator": [
              "Eliman Dambell"
          ],
          "video_url": null,
          "description": "BTC continued to trade below $40,000 prior to Wednesday’s FOMC meeting, as crypto markets anticipated a potential rate hike. ETH was also trading close to its long-term support level, with many hoping for an end to current bearish sentiment, after tomorrow’s announcement. Bitcoin BTC was trading below $40,000 on Tuesday, as the world’s largest cryptocurrency […]",
          "content": "BTC continued to trade below $40,000 prior to Wednesday’s FOMC meeting, as crypto markets anticipated a potential rate hike. ETH was also trading close to its long-term support level, with many hoping for an end to current bearish sentiment, after tomorrow’s announcement. Bitcoin BTC was trading below $40,000 on Tuesday, as the world’s largest cryptocurrency was marginally above its long-term price floor. Earlier today, BTC/USD fell to an intraday low of $38,156.56, which is just over $600 away from its recent support level of $37,500. This comes following a bearish April, which saw BTC fall by nearly $10,000, with some predicting a similar decline in May. Some believe that a move to $30,000 could still occur, and looking at the chart, should the current ceiling on the 14-day RSI hold firm, we may see more declines soon. Providing the RSI continues to weaken, and drops into the 30s, bears could ramp up selling pressure, and look to take bitcoin to a floor of $33,900. So far this year, we’ve seen prices hit that level on two occasions: Jan. 24 and Feb. 24. Ethereum Although still trading below $3,000, ETH was able to move marginally higher on Tuesday, after hitting its price floor to start the week. Following a low of $2,785.52 during Monday’s session, ETH/USD was able to reach a high of $2,874.15 earlier today. Despite trading over 1% higher on Tuesday, ethereum is trading roughly 5% lower in the last seven days, and over $700 lower in the last month. Currently, the 14-day RSI is tracking at 43.40, which has long been a floor, and should this point once again act as such, we could be looking at a potential rebound this week. The obvious price target would be the $2,950 resistance level, however should bulls come out and push the RSI to a ceiling of 40, then we will likely see ETH above $3,000. Will we see market uncertainty clear after the Fed meeting? Leave your thoughts in the comments below.",
          "pubDate": "2022-05-03 13:36:31",
          "image_url": null,
          "source_id": "bitcoin",
          "country": [
              "united states of america",
              "united kingdom",
              "india",
              "australia",
              "singapore",
              "saudi arabia",
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Crypto Bahamas signals stronger ties between old and new worlds of finance",
          "link": "https://techcrunch.com/2022/05/03/crypto-bahamas-signals-stronger-ties-between-old-and-new-worlds-of-finance/",
          "keywords": [
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
              "visa"
          ],
          "creator": [
              "Jacquelyn Melinek"
          ],
          "video_url": null,
          "description": "Some Crypto Bahamas attendees were dressed in suits, while others wore T-shirts and casual shorts, juxtaposing the professional financial world against the new digital age.",
          "content": "Down in the Caribbean, under the palm trees and hot April sun, about 2,000 individuals gathered last week for the Crypto Bahamas event co-hosted by crypto exchange FTX and investor forum SALT. Goodie bags containing everything from sunscreen and sunglasses to T-shirts and boat hats were handed out as the air conditioning blasted at full force. Attendees flew in from as far away as Singapore and popped over from FTX’s headquarters, which is about a 20-minute drive from the conference. Someone joked that it’s between the millionaires in suits and billionaires in cargo shorts. Anthony Scaramucci “We wanted to create a premier conference geared toward institutions and people who will help shape policy and markets and distinguish it from the more retail-focused conferences,” Brett Harrison, president of FTX.US, told TechCrunch. The three days of speakers began with FTX CEO Sam Bankman-Fried and SALT Chairman Anthony Scaramucci (who is also the founder and co-managing partner of SkyBridge Capital) taking the main stage to discuss where crypto stands in its journey. “There’s a lot of different things going on — my generation needs a further, deeper dive into crypto,” Scaramucci, 58, told TechCrunch. “My generation needs to get comfortable with where this space is going.” Some attendees were dressed in suits, while many others wore hoodies or T-shirts and casual shorts or jeans, juxtaposing the professional financial world against the new – and arguably more progressive – digital age.",
          "pubDate": "2022-05-03 13:34:28",
          "full_description": "Down in the Caribbean, under the palm trees and hot April sun, about 2,000 individuals gathered last week for the Crypto Bahamas event co-hosted by crypto exchange FTX and investor forum SALT. Goodie bags containing everything from sunscreen and sunglasses to T-shirts and boat hats were handed out as the air conditioning blasted at full force. Attendees flew in from as far away as Singapore and popped over from FTX’s headquarters, which is about a 20-minute drive from the conference. “We wanted to create a premier conference geared toward institutions and people who will help shape policy and markets and distinguish it from the more retail-focused conferences,” Brett Harrison, president of FTX.US, told TechCrunch. The three days of speakers began with FTX CEO Sam Bankman-Fried and SALT Chairman Anthony Scaramucci (who is also the founder and co-managing partner of SkyBridge Capital) taking the main stage to discuss where crypto stands in its journey. “There’s a lot of different things going on — my generation needs a further, deeper dive into crypto,” Scaramucci, 58, told TechCrunch. “My generation needs to get comfortable with where this space is going.” Some attendees were dressed in suits, while many others wore hoodies or T-shirts and casual shorts or jeans, juxtaposing the professional financial world against the new – and arguably more progressive – digital age.",
          "image_url": null,
          "source_id": "techcrunch",
          "country": [
              "united states of america"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      }
  ],
  "nextPage": 2
}

let ntfpage1={
  "status": "success",
  "totalResults": 73,
  "results": [
      {
          "title": "NiftyMediaArt announces it will leverage Algorand to Expand the Creator Economy on the world's Greenest Blockchain",
          "link": "https://www.prnewswire.com:443/news-releases/niftymediaart-announces-it-will-leverage-algorand-to-expand-the-creator-economy-on-the-worlds-greenest-blockchain-301538183.html",
          "keywords": [
              "Blockchain",
              "Computer & Electronics",
              "Art",
              "Entertainment",
              "ENT",
              "CPR",
              "BLN",
              "ART"
          ],
          "creator": null,
          "video_url": null,
          "description": "The multimedia NFT company also introduced its first NFT collection created by Academy Award winner Ty Wright at NFT House NYC. WESTMINSTER, Colo., May 3, 2022 /PRNewswire/ -- NiftyMediaArt is excited to announce it will leverage Algorand's green blockchain as the backbone of its NFT...",
          "content": null,
          "pubDate": "2022-05-03 13:00:00",
          "image_url": "https://mma.prnewswire.com/media/1229493/Algorand_Logo.jpg?p=original",
          "source_id": "cision",
          "country": [
              "singapore"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Virtual ‘Playboy mansion’ coming to the metaverse and could rival OnlyFans",
          "link": "https://www.thesun.co.uk/tech/18445819/playboy-mansion-metaverse-digital-onlyfans/",
          "keywords": [
              "News Tech",
              "Tech",
              "Metaverse",
              "Playboy"
          ],
          "creator": [
              "Jamie Harris"
          ],
          "video_url": null,
          "description": "THE infamous Playboy Mansion is set to enter the virtual world in a raunchy push to take on OnlyFans. It means naughty metaverse users could soon find themselves exploring the halls once graced by late founder Hugh Hefner. A load of tech experts have been hired by the entertainment brand as part of a big […]",
          "content": "THE infamous Playboy Mansion is set to enter the virtual world in a raunchy push to take on OnlyFans. It means naughty metaverse users could soon find themselves exploring the halls once graced by late founder Hugh Hefner. GettyHugh Hefner passed away in 2017[/caption] A load of tech experts have been hired by the entertainment brand as part of a big digital reinvention. The company has already jumped on the NFT bandwagon. Almost 12,000 cartoons of Playboy’s iconic bunny, known as Rabbitar, were put up for sale in October last year. A sleepy fairy rabbit has gone for the highest figure so far, at $47,000 / £37,400. Read more about the metaverse HEAD FIRST Mark Zuckerberg making FOUR metaverse headsets including 'laptop for your face' SIXTH SCENTS You'll soon be able to SMELL in the metaverse – including virtual FARTS The NFTs are not only collectibles but also provide access to exclusive offers, giveaways and special metaverse experiences. But the saucy firm is looking to take its digital journey further, after closing down its print magazine for good during the pandemic. It’s created a platform called Centerfold to rival adult subscription site OnlyFans. Rapper Cardi B, drag queen Gigi Goode, model Amanda Cerny and porn star Ana Foxxx have all been enlisted as part of the drive. Most read in News Tech SNAP HAPPY I'm an iPhone expert – hidden camera trick improves your photos instantly PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones “We believe Centerfold can shake up the creator economy just as Playboy Magazine shook up the publishing world,” Playboy told Morning Brew. Front and centre of their move to digital is hiring a Web3 community manager. Web3 is considered the next major iteration of the internet as we know it. In a recent interview with CNBC, Playboy boss Ben Kohn said: “The magazine was one product of the company. “But it was really that rabbit head that’s worth billions and billions of dollars and not replicable. “When you think about what this brand represents, from a marketing perspective, from an awareness perspective, we pretty much have 100% awareness everywhere in the world.” Hefner continued living in the real mansion until his death aged 91 in 2017. Read More on The Sun ON THE SPOT No-nonsense Susanna makes Boris squirm as she grills him over cost of living 'she's been cancelled' Piers savages 'money-grabbing' Meghan in rant about her Netflix axe It was sold for $100million in 2016 under the condition that the Playboy founder could continue to rent it for life. Pictures emerged in 2020 showing the famous party palace undergoing major renovations as its new owner tries to get it back into a liveable state. GettyHefner lived in the Playboy Mansion until his death[/caption] Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
          "pubDate": "2022-05-03 12:35:00",
          "image_url": null,
          "source_id": "thesun",
          "country": [
              "united kingdom"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "Known_Ai Film Festival First to Offer All-Artificial Intelligence-Enhanced Film Slate May 6th",
          "link": "https://www.prnewswire.com:443/news-releases/knownai-film-festival-first-to-offer-all-artificial-intelligence-enhanced-film-slate-may-6th-301538064.html",
          "keywords": [
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
              "AFI"
          ],
          "creator": null,
          "video_url": null,
          "description": "LONDON, May 3, 2022 /PRNewswire/ -- The Metaverse – Ai Cinematics, a producer of artificial intelligence (Ai) assisted films and theatrical shorts, has created the World's first Ai-specific film festival and awards show. Partnering with the UK-based NFT platform provider, KnownOrigin,...",
          "content": null,
          "pubDate": "2022-05-03 12:30:00",
          "image_url": "https://www.youtube.com/watch?v=CoYKBXk__rs",
          "source_id": "cision",
          "country": [
              "singapore"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "Mark Zuckerberg creating FOUR ‘metaverse headsets’ including a ‘laptop for your face’",
          "link": "https://www.thesun.co.uk/tech/18445989/meta-metaverse-headset-quest-cambria-mark-zuckerberg/",
          "keywords": [
              "News Tech",
              "Tech",
              "Meta",
              "Metaverse",
              "Virtual reality"
          ],
          "creator": [
              "Sean Keach"
          ],
          "video_url": null,
          "description": "MARK Zuckerberg is plotting as many as four new “metaverse headsets” that transport you to his virtual world. That’s according to a new report that claims one pair of “Meta goggles” coming soon will be like a “laptop for your face”. Meta (formerly Facebook) is investing billions of dollars to build the metaverse. It’s a […]",
          "content": "MARK Zuckerberg is plotting as many as four new “metaverse headsets” that transport you to his virtual world. That’s according to a new report that claims one pair of “Meta goggles” coming soon will be like a “laptop for your face”. MetaVR headsets are one way Zuckerberg hopes users will enter the metaverse[/caption] Meta (formerly Facebook) is investing billions of dollars to build the metaverse. It’s a series of connected virtual worlds where you can live, work. Meta currently sells a Meta Quest 2 (previously Oculus Quest 2) virtual reality headset that lets you access the metaverse. But a new report from The Information claims that Meta is working on four headsets to launch by 2024. Read more on metaverse SIXTH SCENTS You'll soon be able to SMELL in the metaverse – including virtual FARTS ZUCKING HELL Mark Zuckerberg admits he's lost $3BILLION building metaverse Late last year, Meta teased two upcoming metaverse gadgets. One was the Project Cambria VR headset, and another was a pair of Nazare augmented reality glasses. According to the new report, the Project Cambria is due out in September. This is expected to be more powerful than the current Meta Quest 2. Most read in News Tech PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag SPACE JAM Future of ISS hangs in the balance as Russia says it WILL pull OUT over sanctions WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones Unnamed sources say that this headset will cost $799, which is far pricier than the $299 Meta Quest 2. The big advantage is expected to be a significantly higher-resolution display that will make reading small text much easier. The headset is described as being as fast as a “Chromebook for the face” – or effectively, a cheaper laptop. And a follow-up for this device is expected to launch in 2024, codenamed “Funston”. A further two versions of the Meta Quest headset are also named in the report as “Stinson” and “Cardiff”. These are expected to launch in 2023 and 2024 respectively, but their exact features remain unclear. Finally, Meta’s Nazare smart specs are tipped to launch in 2024 alongside another pair of cheaper AR glasses called Hypernova. Nazare is expected to run on its own, while Hypernova is said to rely on a smartphone for processing. That means Meta is working on as many as four virtual reality reality headsets and two pairs of augmented reality glasses for launch within the next two years. Meta mania Tech giant Facebook has poured billions of dollars into building the “metaverse” already – and recently vowed to hire another 10,000 staff to work on the project. Billionaire Zuckerberg previously revealed how you’ll soon be able to live in virtual Facebook houses – an early stage of the metaverse. And the Harvard drop-out previously told how he wants metaverse citizens to be able to make a living inside the virtual world. Zuckerberg is even opening a physical Meta shop to help people enter the metaverse. But some have warned that the metaverse could be dangerous for children and create a sexual abuse nightmare. Despite criticisms, tech mogul Zuck has described the metaverse as “the next version of the internet”. “This isn’t about spending more times in screens. It’s about making the time we already spend better,” said Zuckerberg, 37, speaking about his vision for the metaverse. Speaking to journalists including The Sun, Facebook VR boss Andrew Bosworth described the company’s bold vision. “The metaverse is a set of virtual 3D spaces where you can share immersive experiences with each other when you can’t be together,” Bosworth explained. “What comes after the internet? Instead of looking at a screen, you get to be in the experiences. Read More on The Sun ON THE SPOT No-nonsense Susanna makes Boris squirm as she grills him over cost of living 'she's been cancelled' Piers savages 'money-grabbing' Meghan in rant about her Netflix axe “You don’t have to experience it in VR. Most people initially will experience it on screens they already have.” We’ve asked Meta for comment and will update this story with any response. Meta / OculusMark Zuckerberg (centre) has previously spoken to the world from inside the metaverse[/caption] Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
          "pubDate": "2022-05-03 11:54:40",
          "image_url": null,
          "source_id": "thesun",
          "country": [
              "united kingdom"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "Venture Capital is Investing Actively in NFT, Crypto Projects",
          "link": "https://gadgets360.com/cryptocurrency/news/venture-capital-investment-crypto-projects-usd-10-billion-fy22-q1-2942456",
          "keywords": null,
          "creator": null,
          "video_url": null,
          "description": "Venture Capital's crypto craze in 2022 has also coincided with a slump in the tech-heavy Nasdaq benchmark, which is down 21 percent.",
          "content": null,
          "pubDate": "2022-05-03 11:52:32",
          "full_description": "Venture capital is making a big move on crypto in 2022. Scared of being left in the digital dust, private equity investors are stampeding towards crypto projects — blockchain-based apps and platforms fuelled by cryptocurrencies that are native to the virtual economies of the metaverse and Web3. VC investment in such projects totalled $10 billion (roughly Rs. 76,600 crore) globally in the first quarter of this year, the largest quarterly sum ever and more than double the level seen in the same period a year ago, according to data from Pitchbook. A trickle has become a torrent: the full-year totals for 2019, 2020 and 2021 were $3.7 billion (roughly Rs. 28,300 crore), $5.5 billion (roughly Rs. 42,100 crore) and $28 billion (roughly Rs. 2,14,400 crore). \"You're seeing a lot of VC investment into a lot of protocols because they all believe, as we do, that some of these protocols are the infrastructure of the future,\" said Steve Ehrlich, CEO of crypto brokerage firm Voyager Digital. Such projects, which can range from crypto and NFT exchanges to decentralized finance applications and token issuers, are often known as protocols in reference to the rules embedded in their computer code. The recent action is different from the past when venture investment levels tended to track the price of Bitcoin , albeit with a short delay, according to Alex Thorn, head of firmwide research at blockchain-focused bank Galaxy Digital in New York. Investment levels in crypto have continued to grow during a Bitcoin price slump this year — it's down about 16 percent — as well as during another decline last summer, Thorn notes. \"This decoupling is demonstrative of investors' disbelief that a prolonged bear market in digital assets is forthcoming, as well as the significant amount of dry powder held by funds seeking to allocate to the sector,\" he wrote last week. The VC crypto craze in 2022 has also coincided with a slump in the tech-heavy Nasdaq benchmark, which is down 21 percent. Average crypto fund size Photo Credit: Reuters/ Pitchbook VC meets Web3 The number of M&A deals involving crypto target companies is also ballooning globally as the buzz grows around the metaverse of virtual worlds and the Web3 decentralized online utopia. The have been 73 deals sealed so far in 2022 with a combined deal value of $8.8 billion (roughly Rs. 67,400 crore), according to Dealogic, versus 51 deals worth $6.8 billion (roughly Rs. 52,100 crore) for the whole of last year. The funding rush means crypto firms can afford to be picky, said Mildred Idada, founding partner at blockchain venture fund and accelerator Open Web Collective. \"Founders are saying, 'There's five funds that want to invest in us, which one is going to bring the most value?',\" she said. In many cases, blockchain tech firms are interested in the brand value of backing from established players and increasing integration with the financial system, Idada added. Some firms have been creative in how they raise money. For example Polygon, a platform for developing and scaling applications on the Ethereum blockchain, raised $450 million (roughly Rs. 3,400 crore) in February through a private sale of its cryptocurrency to investors including SoftBank's Vision Fund 2. \"The larger reason for that raise was to get the institutions on our side and increase the visibility of Polygon,\" said co-founder Sandeep Nailwal. Yet the entrance of traditional venture investors accustomed to red-carpet treatment into online developer communities pushing for decentralisation isn't without culture clashes. Many deep-pocketed venture capitalists find themselves forced to woo those developer communities behind potential targets, according to Alexandra Bertomeu-Gilles, risk manager at decentralized finance (DeFi) firm Aave. \"Some founders now ... when they take money from investors, are creating agreements so that the investors don't have an outsized say in the governance of the company, or they can't overrule something that the majority of the rest of the community wants,\" she said. © Thomson Reuters 2022 Cryptocurrency is an unregulated digital currency, not a legal tender and subject to market risks. The information provided in the article is not intended to be and does not constitute financial advice, trading advice or any other advice or recommendation of any sort offered or endorsed by NDTV. NDTV shall not be responsible for any loss arising from any investment based on any perceived recommendation, forecast or any other information contained in the article.",
          "image_url": "https://i.gadgets360cdn.com/large/Bitcoin_crypto_markets_new_cover_pexels_alesia_kozik_small_1650347297483.jpg",
          "source_id": "ndtv",
          "country": [
              "india"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "Three iPhone safety features you MUST turn on today – they could save your life",
          "link": "https://www.thesun.co.uk/tech/18444368/iphone-safety-features-emergency-sos-medical-id/",
          "keywords": [
              "News Tech",
              "Tech",
              "Apple",
              "iPhone 13",
              "iPhone hacks",
              "Tech How To"
          ],
          "creator": [
              "Sean Keach"
          ],
          "video_url": null,
          "description": "YOUR iPhone has hidden features that could save your life – if you know where to find them. Check your settings now to make sure you’re using Apple’s genius safety tricks. Medical ID Apple has created a feature called Medical ID that quickly displays your key health info. “Medical ID helps emergency responders access your […]",
          "content": "YOUR iPhone has hidden features that could save your life – if you know where to find them. Check your settings now to make sure you’re using Apple’s genius safety tricks. AppleYour iPhone has a brilliant Emergency SOS feature that you should know about[/caption] Medical ID Apple has created a feature called Medical ID that quickly displays your key health info. “Medical ID helps emergency responders access your critical medical information from the Lock Screen, without needing your passcode,” Apple explained. “They can see information such as allergies and medical conditions, as well as who to contact in case of an emergency.” Read more on iPhone APPLE RUMBLE Apple warning: iPhone prices could RISE this year – will you be affected? SNAP HAPPY I'm an iPhone expert – hidden camera trick improves your photos instantly To set it up, go into the Health app then tap your profile picture in the top-right corner. Under the image, tap Medical ID. Now choose Edit and then activate ‘Show When Locked’. You can also select Share During Emergency Call – although this clever iPhone trick only works in the US. Most read in News Tech PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag SPACE JAM Future of ISS hangs in the balance as Russia says it WILL pull OUT over sanctions WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones Now add all of your information and then tap Done. To see your Medical ID, open the Lock Screen then tap the Emergency button. Now tap the red Medical ID button to see the info. Share ETA Activating Share ETA before journeys is a great way to help you stay safe. ETA stands for estimated time of arrival, which means this feature is all about improving safety on your journeys. Activating it will send your friends or family a real-time tracker for your iPhone location. And they’ll even be able to see your route – revealing if you’ve strayed from the fastest way home. Open your Apple Maps app on an iPhone running iOS 13 or later. Then begin a journey by choosing a destination and tapping Directions, then Go. Now open the menu at the bottom by tapping the arrow in the bottom-right corner. Then select Share ETA, which should be the second option down in the menu. You can then share your location with recent contacts, and even multiple people at the same time. If your chosen recipient isn’t in the recent list, you can tap Contacts to search for a specific person. Then tap on the person to begin sharing. You’ll be able to see an alert at the bottom of the screen reminding you that you’re sharing your location – and how many people you’re live-reporting to. You can tap a person’s icon to stop sharing location with them. Emergency Contacts Setting up Emergency Contacts on your iPhone is a must. The iPhone has an Emergency SOS feature that lets you quickly call emergency services. But you can also add Emergency Contacts. Once an emergency call has ended, your iPhone will then alert these emergency contacts with a text message – although this can be cancelled if you prefer. The iPhone will send your current location to your Emergency Contacts. And the contacts will also receive updates if your location changes. To set Emergency Contacts up, go to the Health app, then tap your profile picture. Tap Medical ID and then hit Edit, then scroll to Emergency Contacts. You can then activate Emergency SOS using the “five click” trick. How to activate Emergency SOS There are two ways to activate the Emergency SOS features. Either press the side or top button five times to pull up the Emergency SOS slider. Alternatively on an iPhone 8 or later, press and hold the side button and one volume button until the slider appears. Then drag the emergency slider to begin the call. You can choose the way you want to call by going into Settings > Emergency SOS. Read More on The Sun ON THE SPOT No-nonsense Susanna makes Boris squirm as she grills him over cost of living 'she's been cancelled' Piers savages 'money-grabbing' Meghan in rant about her Netflix axe “If you continue to hold down the side button and volume button, instead of dragging the slider, a countdown will start and an alert will sound,” Apple explained. “If you hold down the buttons until the countdown has finished, your iPhone will automatically call the emergency services.” AppleMake sure you’ve set up your iPhone’s Medical ID[/caption] Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
          "pubDate": "2022-05-03 10:30:45",
          "image_url": null,
          "source_id": "thesun",
          "country": [
              "united kingdom"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "What is DeFi? : Why the fading of intermediaries could be the future of the financial world",
          "link": "https://www.deadlinenews.co.uk/2022/05/03/what-is-defi-why-the-fading-of-intermediaries-could-be-the-future-of-the-financial-world/",
          "keywords": [
              "Uncategorized"
          ],
          "creator": [
              "Guest"
          ],
          "video_url": null,
          "description": "During a cryptocurrency market downturn like today, it’s not that investor can’t find a way to make a profit. On the contrary, in the world of digital assets, around the same time the crypto market fell, it turned out to be the golden minute of ‘DeFi’, or decentralized finance. This word is new. Of course, […] The post <strong>What is DeFi? : Why the fading of intermediaries could be the future of the financial world</strong> appeared first on Deadline News.",
          "content": "During a cryptocurrency market downturn like today, it’s not that investor can’t find a way to make a profit. On the contrary, in the world of digital assets, around the same time the crypto market fell, it turned out to be the golden minute of ‘DeFi’, or decentralized finance. This word is new. Of course, it may never pass many people’s ears. But at the same time, this word is likely to have caught many netizens in recent times. DeFi stands for Decentralized Finance’ Decentralized Finance. There is much software that can help you find out the actual value of bitcoin. If you are interested in bitcoin trading check ethereum classic advantage and disadvantage What is the distribution centre?  It may be explained from the birth of ‘Bitcoin’, the world’s first digital currency, which is now known as the gold of the crypto world because its value is based on mutual investor valuation. Bitcoin was created as a digital currency without any ‘intermediary’ of transactions because the creators did not trust the policy director. When going to a bank, staff will be waiting for deposits and withdrawals. Therefore, the bank here is the intermediary in the transaction. It serves as a service and guarantees the trust of everyone in the property society. Therefore, cryptocurrency transactions are based on the idea that All intermediaries, whether banks, states or policymakers, cannot intervene, authorize, freeze a transaction, or prohibit us from holding the property. If so, who will verify transactions in the crypto world? The answer is that bitcoin operates on blockchain technology. Technology divides data into blocks and connects them to form a chain. When transactions take place on the blockchain, Transaction data is saved, and a duplicate is shared among everyone on the blockchain, thus being transparent and traceable. However, fraud or alteration of information is complex. In other words, the transaction has the ‘computer’ keeping a code recording every step of the way. The function of bitcoin is to be an exchange currency. So what Bitcoin can only do is transfer assets back and forth between people. But in the digital asset world where technology is the heart, investors and developers believe technology will answer the future of global finance. Blockchain’s ‘more advanced technology is known as a ‘smart contract’, a set of computer instructions or programs that can execute by itself once the terms agreed upon before writing are met. Explain further that assuming Mr A buys property from Mr B on a smart contract, using the standard transfer method, Mr A must check if the money has come in before proceeding with the Transfer of Ownership. But with this technology, the computer verifies that the transaction is confirmed. As a result, ownership will be transferred immediately without any intermediary for transferring, stamping or signing documents. An example of an intelligent contract is ‘Ethereum’. The second most popular after Bitcoin) was created by ‘Vitalik Buterin six years ago. Ethereum is a blockchain technology that allows other developers to use the complex programming space. Alternatively, you can plug in other platforms with Ethereum blockchain to create your business platform. For example, many popular NFT art websites are exciting in this era. It also operates on Ethereum. The exchange is, of course, with Ethereum coins. And on smart contracts, that’s where DeFi was born. Many developers say that if they transfer funds without an intermediary, other transactions do not require an intermediary. Whether a loan currency exchange, various guarantees can only happen if we trust each other in the code. DeFi platforms run on a reliable blockchain-based or executable code (smart contract). Suppose the code indicates that only we, the owner, can deposit and withdraw our funds. It will always be like that. So there is no way the owners of the DeFi platform can steal or withdraw our money. And no need to trust humans. We trust the code. “On the contrary, if the code of the DeFi platform is intentionally written to steal our money, and we didn’t check it well. Then, we can also lose money. So I define the world of DeFi as ‘Code is law’. Here is a description of Kannithi Thong Thanakul, founder of the Facebook page Kim DeFi Daddy and Bitcoin Addict Thailand, which he wrote in an article by Techsauce. One business was born because of the world of crypto financial transactions. Need liquidity, a business that is open to crypto holders to deposit money because if you keep it, the value of the tokens remains the same? But if deposited on the platform, when someone borrows or exchanges money (Which has to pay interest or fees already), people who deposit it will eat such interest or fees as well. The post <strong>What is DeFi? : Why the fading of intermediaries could be the future of the financial world</strong> appeared first on Deadline News.",
          "pubDate": "2022-05-03 09:59:18",
          "image_url": null,
          "source_id": "deadlinenews",
          "country": [
              "united kingdom"
          ],
          "category": [
              "top"
          ],
          "language": "english"
      },
      {
          "title": "Global Asset Manager Vaneck Launches Community NFT Project — 1,000 NFTs to Be Airdropped This Week",
          "link": "https://news.bitcoin.com/global-asset-manager-vaneck-launches-community-nft-project-1000-nfts-to-be-airdropped-this-week/",
          "keywords": [
              "Featured",
              "asset management firm nft",
              "asset manager nft",
              "Bitcoin",
              "Crypto",
              "Cryptocurrency",
              "nft",
              "NFTs",
              "vaneck community nft",
              "vaneck nft"
          ],
          "creator": [
              "Kevin Helms"
          ],
          "video_url": null,
          "description": "Vaneck, a global asset management firm with $85.5 billion in assets, is releasing 1,000 non-fungible tokens (NFTs) this week. “We’ve designed the Vaneck Community NFT to function like a digital membership card,” said Vaneck. NFTs by Asset Management Firm Vaneck, a global asset management firm with approximately $85.5 billion in assets, announced Monday the launch […]",
          "content": "Vaneck, a global asset management firm with $85.5 billion in assets, is releasing 1,000 non-fungible tokens (NFTs) this week. “We’ve designed the Vaneck Community NFT to function like a digital membership card,” said Vaneck. NFTs by Asset Management Firm Vaneck, a global asset management firm with approximately $85.5 billion in assets, announced Monday the launch of the Vaneck Community NFT (non-fungible token), which the company described as an innovative way for investors to join the Vaneck crypto community and “the first-ever NFT offered by a global asset manager.” The announcement details: This initiative involves the release of 1,000 Vaneck NFTs and is designed to showcase the real-world utility inherent in the NFT structure. The 1,000 Ethereum-based NFTs will be divided into three categories: commons (which will total 750), rare (approximately 230), and legendary (approximately 20), Vaneck noted. Vaneck Community NFTs are being designed in partnership with South Korea-based NFT agency NUMOMO. They will be released this week via airdrop to the first 1,000 people who sign up. Matthew Bartlett, Vaneck Community NFT co-founder, commented: We’ve designed the Vaneck Community NFT to function like a digital membership card, providing NFT holders with exclusive access to a wide range of events, digital asset research and the insights of an inclusive community of digital assets enthusiasts and investors. Vaneck explained: “The primary purpose of the initiative is to bring together like-minded investors who are interested in the cryptocurrency and blockchain space. The secondary purpose of the initiative is to help educate Vaneck clients on the crypto space, while also providing real-world utility.” The asset management firm noted that its NFTs will not be listed on an NFT marketplace, stating on its website: Vaneck NFTs will be airdropped to those who sign up. Vaneck will not be making a profit from the distribution of NFTs nor collecting a creator fee. What do you think about the asset management firm launching NFTs? Let us know in the comments section below.",
          "pubDate": "2022-05-03 09:30:10",
          "image_url": null,
          "source_id": "bitcoin",
          "country": [
              "united states of america",
              "united kingdom",
              "india",
              "australia",
              "singapore",
              "saudi arabia",
              "canada"
          ],
          "category": [
              "business"
          ],
          "language": "english"
      },
      {
          "title": "I was hit by a dangerous WhatsApp scam – you need to know the three clues that saved me",
          "link": "https://www.thesun.co.uk/tech/18443312/warning-whatsapp-scam-fake-bank/",
          "keywords": [
              "News Tech",
              "Tech",
              "Scams and fraud",
              "Whatsapp"
          ],
          "creator": [
              "Jamie Harris"
          ],
          "video_url": null,
          "description": "A TIKTOKER has revealed her lucky escape from cunning WhatsApp scammers who pretended to be her bank – and her sweet revenge. Amanda Seimetz told followers her “cautionary true story” and how cyber thieves almost convinced her. The 26-year-old Brazilian English teacher was randomly approached on the app by an account claiming to be her […]",
          "content": "A TIKTOKER has revealed her lucky escape from cunning WhatsApp scammers who pretended to be her bank – and her sweet revenge. Amanda Seimetz told followers her “cautionary true story” and how cyber thieves almost convinced her. @teacherseimetzTeacher Amanda Seimetz said she almost fell for the trick[/caption] The 26-year-old Brazilian English teacher was randomly approached on the app by an account claiming to be her bank. The swindlers made out she had to update details to pay bills and receive money. She instantly thought it was a con trick, so asked them to ring her. Expecting them to give up, Amanda was surprised they actually called, which briefly lulled her into a false sense of security. Read more about WhatsApp WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately “I said, ‘I’m sorry, I don’t really feel comfortable discussing this kind of detailed information with my bank through WhatsApp so could you please contact me through the normal ways you usually contact me,” she explained. “They actually called me which I was honestly surprised by, I didn’t expect them to actually call me. “So they made me think, okay, maybe it’s not a scam. “And then, during the call, the guy says, ‘I need you to click on this link and download something or like update something with your information’. Most read in News Tech PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag SPACE JAM Future of ISS hangs in the balance as Russia says it WILL pull OUT over sanctions WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones ” I was like, ‘No, I’m sorry, this is definitely a scam’.” She then did the right thing, which is to say she’ll approach her bank directly herself, instead of them approaching her. Amanda said her developer boyfriend took a look and realised the link the scammers wanted her to click was “phony”. So he helped her get revenge. “I don’t know how he did it – but he was spamming them with a bunch of things and curse words which I’m not gonna say here but it was very funny and I got my little revenge,” she continued. “But all of this is a cautionary tale, a cautionary true story – don’t give your information. “Never give anybody any information on WhatsApp, especially if it’s a code, an email or never click on the link they send you. “If they are good enough at scamming people, if they’re good enough scam artists like the ones who were trying to scam me, they’re going to make it look very realistic, so never give information – don’t fall for that like I almost did.” WhatsApp scams – what to look out for As Amanda explained, being approached by your bank via WhatsApp is not normal and should be an instant red flag. Read More on The Sun ON THE SPOT No-nonsense Susanna makes Boris squirm as she grills him over cost of living 'she's been cancelled' Piers savages 'money-grabbing' Meghan in rant about her Netflix axe Don’t think that they’re real just because they call you – look for the official number of your bank and call them yourself if you want to be sure. Don’t open any dodgy web links. GettyWhatsApp has more than 2billion users[/caption] Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
          "pubDate": "2022-05-03 08:45:12",
          "full_description": "A TIKTOKER has revealed her lucky escape from cunning WhatsApp scammers who pretended to be her bank - and her sweet revenge. Amanda Seimetz told followers her \"cautionary true story\" and how cyber thieves almost convinced her. The 26-year-old Brazilian English teacher was randomly approached on the app by an account claiming to be her bank . The swindlers made out she had to update details to pay bills and receive money. She instantly thought it was a con trick , so asked them to ring her. Expecting them to give up, Amanda was surprised they actually called, which briefly lulled her into a false sense of security. \"I said, 'I'm sorry, I don't really feel comfortable discussing this kind of detailed information with my bank through WhatsApp so could you please contact me through the normal ways you usually contact me,\" she explained. \"They actually called me which I was honestly surprised by, I didn't expect them to actually call me. \"So they made me think, okay, maybe it's not a scam. \"And then, during the call, the guy says, 'I need you to click on this link and download something or like update something with your information'. \" I was like, 'No, I'm sorry, this is definitely a scam'.\" She then did the right thing, which is to say she'll approach her bank directly herself, instead of them approaching her. Amanda said her developer boyfriend took a look and realised the link the scammers wanted her to click was \"phony\". So he helped her get revenge. \"I don't know how he did it - but he was spamming them with a bunch of things and curse words which I'm not gonna say here but it was very funny and I got my little revenge,\" she continued. \"But all of this is a cautionary tale, a cautionary true story - don't give your information. \"Never give anybody any information on WhatsApp , especially if it's a code, an email or never click on the link they send you. \"If they are good enough at scamming people, if they're good enough scam artists like the ones who were trying to scam me, they're going to make it look very realistic, so never give information - don't fall for that like I almost did.\" As Amanda explained, being approached by your bank via WhatsApp is not normal and should be an instant red flag. Don't think that they're real just because they call you - look for the official number of your bank and call them yourself if you want to be sure. Don't open any dodgy web links. Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... Get all the latest WhatsApp , Instagram , Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
          "image_url": null,
          "source_id": "thesun",
          "country": [
              "united kingdom"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      },
      {
          "title": "I’m an iPhone expert – hidden camera trick improves your photos instantly",
          "link": "https://www.thesun.co.uk/tech/18443638/iphone-camera-trick-instagram-story-drawing-post/",
          "keywords": [
              "News Tech",
              "Tech",
              "Apple",
              "iPhone 13",
              "iPhone hacks",
              "Tech How To"
          ],
          "creator": [
              "Sean Keach"
          ],
          "video_url": null,
          "description": "YOUR iPhone has a hidden camera trick that can upgrade your Instagram photos in seconds. The clever hack lets you quickly add sketches – and other creations – to an Instagram Story. First, open your Apple Notes app and then sketch a quick design. Then use the selection tool to circle the object you’ve created. […]",
          "content": "YOUR iPhone has a hidden camera trick that can upgrade your Instagram photos in seconds. The clever hack lets you quickly add sketches – and other creations – to an Instagram Story. Apple / TikTok / @katamogzThere’s a clever Instagram camera trick that works using copy and paste[/caption] First, open your Apple Notes app and then sketch a quick design. Then use the selection tool to circle the object you’ve created. Now hold your finger down and choose copy. Then go to your Instagram Story and create a post. Read more on iPhone SPIT IT OUT You can unlock your iPhone using SPIT - bizarre video shows you how TAP TIP I'm an iPhone expert and use four genius iMessage tricks 'you never knew existed' Open a text box, hold down your finger and then choose the paste option. And your creation will appear on top of the Instagram Story. It means you can use drawing options that might not be available inside Instagram. You could paste other things to your stories too. Most read in News Tech PILLOW TALK Experts reveal EXACTLY how much sleep you need to live a better life STALK SCARE My daughter was 'tracked for FOUR hours' around Disney World by an Apple AirTag SPACE JAM Future of ISS hangs in the balance as Russia says it WILL pull OUT over sanctions WHAT'S APPENING? WhatsApp is getting a huge update that will make it more like Instagram SIGN OFF I'm a WhatsApp expert – three dangerous signs you should delete a text immediately INCOMING! Apple issues safety update to stop people putting you in danger with iPhones The clever hack was shared by Apple whiz Katarina Mogus, who regularly posts iPhone tricks on TikTok. Her video – posted on the @katamogz channel – has already earned thousands of likes. One fan wrote “Wow!!! Amazing tip.” Another said: “This hack is so useful!” That’s not all There’s another iPhone camera trick that you might be interested in. It’s a way to quickly and easily zoom in and out while shooting video with an Apple smartphone. For the uninitiated, zooming is generally done by pinching or spreading your fingers. But this can be tricky to do sometimes while recording on an iPhone. And it can often leave you with a jittery zoom, which won’t look good in final footage. First open your camera app up. The press and hold on the shutter button to begin recording video. Then simply drag your finger up or down the screen to zoom in or out respectively. This means you can create ultra-smooth zooms with just one hand. You can do this from the photo or video modes in the camera app. Ben’s video has already received hundreds of likes in under a day – and is proving popular with Apple fans. Read More on The Sun 'LIKE FLATMATES' Helen Flanagan reveals she hasn't shared bed with fiance Scott for 7 YEARS TROUBLE & STRIFE Daughter who battered own mum at her wedding with stiletto avoids jail One commented: “Woah! I am deffo gonna be using this!” Better still, the trick also works on Snapchat – so you can shoot and zoom using this hack directly inside the app’s own camera. Read all the latest Phones & Gadgets newsKeep up-to-date on Apple storiesGet the latest on Facebook, WhatsApp and Instagram Best Phone and Gadget tips and hacks Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... How to delete your Instagram account What does pending mean on Snapchat? How to check if you’ve been blocked on WhatsApp How to drop a pin on Google Maps How can I change my Facebook password? How to go live on TikTok How to clear the cache on an iPhone What is NFT art? What is OnlyFans? What does Meta mean? Get all the latest WhatsApp, Instagram, Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
          "pubDate": "2022-05-03 08:29:25",
          "full_description": "YOUR iPhone has a hidden camera trick that can upgrade your Instagram photos in seconds. The clever hack lets you quickly add sketches – and other creations – to an Instagram Story. First, open your Apple Notes app and then sketch a quick design. Then use the selection tool to circle the object you've created. Now hold your finger down and choose copy. Then go to your Instagram Story and create a post. Open a text box, hold down your finger and then choose the paste option. And your creation will appear on top of the Instagram Story. It means you can use drawing options that might not be available inside Instagram. You could paste other things to your stories too. The clever hack was shared by Apple whiz Katarina Mogus, who regularly posts iPhone tricks on TikTok . Her video – posted on the @katamogz channel – has already earned thousands of likes. One fan wrote \"Wow!!! Amazing tip.\" Another said: \"This hack is so useful!\" There's another iPhone camera trick that you might be interested in. It's a way to quickly and easily zoom in and out while shooting video with an Apple smartphone . For the uninitiated, zooming is generally done by pinching or spreading your fingers. But this can be tricky to do sometimes while recording on an iPhone. And it can often leave you with a jittery zoom, which won't look good in final footage. First open your camera app up. The press and hold on the shutter button to begin recording video. Then simply drag your finger up or down the screen to zoom in or out respectively. This means you can create ultra-smooth zooms with just one hand. You can do this from the photo or video modes in the camera app . Ben's video has already received hundreds of likes in under a day – and is proving popular with Apple fans. One commented: \"Woah! I am deffo gonna be using this!\" Better still, the trick also works on Snapchat – so you can shoot and zoom using this hack directly inside the app's own camera. Looking for tips and hacks for your phone? Want to find those secret features within social media apps? We have you covered... Get all the latest WhatsApp , Instagram , Facebook and other tech gadget stories here. We pay for your stories! Do you have a story for The Sun Online Tech & Science team? Email us at tech@the-sun.co.uk",
          "image_url": null,
          "source_id": "thesun",
          "country": [
              "united kingdom"
          ],
          "category": [
              "technology"
          ],
          "language": "english"
      }
  ],
  "nextPage": 2
}
