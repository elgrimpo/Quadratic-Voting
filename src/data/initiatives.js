import React from "react";
import {userList} from './users'

export const initiativeList = [
  {
    /*----------Group: Improve marketplace-----------*/

    communityID: 1,
    groupID: 1,
    title: "Build a castle at the beach",
    image:
      "https://images.unsplash.com/photo-1642796208527-e492cc61e64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description:
      "As a protocol, Umbra defines a simple set of standards, coupled with a singleton smart contract instance, to enable stealth addresses on Ethereum. With a stealth address, a payer can send Ether or ERC20 tokens to an address controlled by the receiver, but no one except the two parties know who that receiver is. ",
    status: "",
    votes: "",
    owner: userList[2],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {
      return (
        <article>
          <h1 style={{marginBottom:12}}>Build a castle at the beach</h1>
          <h3 style={{marginBottom:12}}>What's the point of this?</h3>
          <p style={{marginBottom:12}}>
            As a protocol, Umbra defines a simple set of standards, coupled with
            a singleton smart contract instance, to enable stealth addresses on
            Ethereum. With a stealth address, a payer can send Ether or ERC20
            tokens to an address controlled by the receiver, but no one except
            the two parties know who that receiver is. 
            
            On chain, the transaction
            looks like a simple transfer to an otherwise unused address on the
            Ethereum network. Off chain, the sender has used a public key
            published by the receiver using ENS to generate the new address. By
            encrypting the data used to generate the address, and announcing it
            via the Umbra smart contract, the sender can let the receiver know
            theyve sent them a payment to a new stealth address. Only the
            receiver can generate the private key needed to withdraw the funds.
            By leveraging meta-transactions Umbra enables withdrawers to pay
            relayers for gas using the tokens theyve received. This avoids the
            need to fund stealth addresses with Ether before withdrawing.
          </p>
          <h3 style={{marginBottom:12}}>What is the projects status?</h3>
          <p>
            The Umbra MVP went live on mainnet in June 2021. You can visit
            https://app.umbra.cash to send and receive stealth payments using
            Umbra. Since our launch, weve made iterative improvements based on
            user feedback. These included better mobile responsiveness and other
            UX enhancements. Weve also laid the groundwork for bigger changes
            that are just on the horizon, including a newer, easier to user
            stealth key registry system, and multi-network deployments.
          </p>
        </article>
      );
    },
  },
  {
    communityID: 1,
    groupID: 1,
    title: "Go on a beautiful vacation",
    image:
      "https://images.unsplash.com/photo-1643400812282-4ef456a7b352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[3],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 1,
    title: "Draw something weird and spacey",
    image:
      "https://images.unsplash.com/photo-1643557763588-da65ca5e33a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[4],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 1,
    title: "Build a castle at the beach",
    image:
      "https://images.unsplash.com/photo-1643508524055-485003425507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[4],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 1,
    title: "Go on a beautiful vacation",
    image:
      "https://images.unsplash.com/photo-1643558508095-1b8e14f7b962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3342&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[5],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 1,
    title: "Draw something weird and spacey",
    image:
      "https://images.unsplash.com/photo-1643551325807-d4acd04bf2ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[6],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    /*----------Group: Feature Request-----------*/

    communityID: 1,
    groupID: 2,
    title: "Implement community funding",
    image:
      "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[7],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 2,
    title: "Different voting mechanisms",
    image:
      "https://images.unsplash.com/photo-1593739715742-14bb1d064883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[0],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 2,
    title: "Connect wallet to the application",
    image:
      "https://images.unsplash.com/photo-1620109176813-e91290f6c795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[1],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 2,
    title: "Implement advances user management",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[2],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 2,
    title: "Implement voting on the blockchain",
    image:
      "https://images.unsplash.com/photo-1530333821974-f9fcfd6718c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[3],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
  {
    communityID: 1,
    groupID: 2,
    title: "Better chat user experience",
    image:
      "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    description:
      "Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.",
    status: "",
    votes: "",
    owner: userList[4],
    contributors: "",
    website: "",
    instagram: "",
    twitter: "",
    text() {},
  },
];
