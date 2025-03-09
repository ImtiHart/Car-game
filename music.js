const form = document.querySelector("#audio_form");
let currentAudio = null; 

form.addEventListener("submit", (e) => {
e.preventDefault();
const data = new FormData(form); 
const selectedAudio = data.get("audio"); 
console.log("Selected Audio:", selectedAudio); 

    
if (currentAudio) {
    currentAudio.pause(); 
    currentAudio.currentTime = 0; 
}

               
if (selectedAudio === "No Music") {
    console.log("No music & audio stop");
} else if (selectedAudio === "KRS-One - Sound of da Police") {
    currentAudio = new Audio("Music/KRS-One - Sound of da Police (Official Video).mp3");
    currentAudio.loop = true;
    currentAudio.play();
}else if (selectedAudio === "M𝚊𝚝𝚞𝚜𝚑𝚔𝚊  U𝚕𝚝𝚛𝚊𝚏𝚞𝚗𝚔") {
    currentAudio = new Audio("Music/M𝚊𝚝𝚞𝚜𝚑𝚔𝚊  U𝚕𝚝𝚛𝚊𝚏𝚞𝚗𝚔.mp3");
    currentAudio.loop = true;
    currentAudio.play();
}else if (selectedAudio === "Al Qowlu Qowlu") {
    currentAudio = new Audio("Music/Al Qowlu Qowlu Sawarimnasheed for muslimAbu Ali NasheedIST.mp3");
    currentAudio.loop = true;
    currentAudio.play();
} else if (selectedAudio === "Katy Perry - I Kissed A Girl") {
    currentAudio = new Audio("Music/Katy Perry - I Kissed A Girl (Lyrics).mp3");
    currentAudio.loop = true;
    currentAudio.play();
} else if (selectedAudio === "Gangsta Rap Nigga Nigga Nigga") {
    currentAudio = new Audio("Music/Gangsta Rap Nigga Nigga Nigga lyrics.mp3");
    currentAudio.loop = true;
    currentAudio.play();
} else if (selectedAudio === "Game-Over") {
    currentAudio = new Audio("Music/game-over-252897.mp3");
    currentAudio.loop = true;
    currentAudio.play();
} else if (selectedAudio === "Dandadan Opening by Creepy Nuts") {
    currentAudio = new Audio("Music/Dandadan - Opening FULL Otonoke by Creepy Nuts (Lyrics).mp3");
    currentAudio.loop = true;
    currentAudio.play();
} else if (selectedAudio === "Biggy - Dames") {
    currentAudio = new Audio("Music/Biggy - Dames.mp3");
    currentAudio.loop = true;
    currentAudio.play();
} else if (selectedAudio === "ABC Song Gracies Corner") {
    currentAudio = new Audio("Music/ABC Song  Gracies Corner  Kids Song  Nursery Rhymes.mp3");
    currentAudio.loop = true;
    currentAudio.play();
} else if (selectedAudio === "Mario Kart") {
    currentAudio = new Audio("Music/8-bit-background-music-for-arcade-game-come-on-mario-164702.mp3");
    currentAudio.loop = true;
    currentAudio.play();
} else {
    console.log("No audio selected or invalid selection.");
}
});