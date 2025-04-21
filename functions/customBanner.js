const phrases =[ 
    "[🌿] Non Skeetless dude.",
    "[🌿] KhanMode on top.",
    "[🌿] Lucasmassaroto said hello!",
    "[🌿] God i wish i had KhanMod.",
    "[🌿] Get good get KhanMode!",
    "[🌿] khanMode goes brrrrr" 
];

setInterval(() =>{ 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);