function openGift(){

document.querySelector(".gift-container").style.display="none"

document.getElementById("surprise").style.display="block"

document.getElementById("music").play()

startTyping()

confetti()

}


function startTyping(){

let text="You are the most beautiful part of my life. Every moment with you feels magical. Happy Birthday my love ❤️"

let i=0

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i)

i++

setTimeout(typing,50)

}

}

typing()

}


function confetti(){

for(let i=0;i<50;i++){

let heart=document.createElement("div")

heart.innerHTML="❤️"

heart.style.position="fixed"

heart.style.left=Math.random()*100+"vw"

heart.style.top="-10px"

heart.style.fontSize="20px"

document.body.appendChild(heart)

}

}
