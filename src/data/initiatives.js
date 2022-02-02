import React, {useState} from 'react'

export const initiativeList = [{
    
    /*----------Group: Improve marketplace-----------*/

    communityID: 1,
    groupID: 1,
    title: 'Build a castle at the beach',
    image: "https://images.unsplash.com/photo-1642796208527-e492cc61e64f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 1,
    title: 'Go on a beautiful vacation',
    image: 'https://images.unsplash.com/photo-1643400812282-4ef456a7b352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 1,
    title: 'Draw something weird and spacey',
    image: 'https://images.unsplash.com/photo-1643557763588-da65ca5e33a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 1,
    title: 'Build a castle at the beach',
    image: "https://images.unsplash.com/photo-1643508524055-485003425507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 1,
    title: 'Go on a beautiful vacation',
    image: 'https://images.unsplash.com/photo-1643558508095-1b8e14f7b962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3342&q=80',
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 1,
    title: 'Draw something weird and spacey',
    image: 'https://images.unsplash.com/photo-1643551325807-d4acd04bf2ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    
    /*----------Group: Feature Request-----------*/

    communityID: 1,
    groupID: 2,
    title: 'Implement community funding',
    image: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 2,
    title: 'Different voting mechanisms',
    image: 'https://images.unsplash.com/photo-1593739715742-14bb1d064883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80',
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 2,
    title: 'Connect wallet to the application',
    image: 'https://images.unsplash.com/photo-1620109176813-e91290f6c795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 2,
    title: 'Implement advances user management',
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 2,
    title: 'Implement voting on the blockchain',
    image: 'https://images.unsplash.com/photo-1530333821974-f9fcfd6718c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}, {
    communityID: 1,
    groupID: 2,
    title: 'Better chat user experience',
    image: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    description: 'Bacon ipsum dolor amet capicola tri-tip t-bone shoulder. Chuck spare ribs tongue  chuck cupim meatloaf. Short ribs flank ball tip ham tenderloin drumstick pork loin chislic bacon.',
    status: '',
    votes: '',
    owner: '',
    contributors: '',
    website: '',
    instagram: '',
    twitter: '',
    text: '',
}
]


