// typing animation
let text = "BHARATHI 💖";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,150);
}
}

typing();

// slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
},3000);

// floating hearts
function createHeart(){
const heart=document.createElement("span");
heart.innerHTML="💖";
heart.style.left=Math.random()*100+"%";
document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);
}

setInterval(createHeart,500);

// celebration button
function startParty(){
document.getElementById("music").play();
alert("🎂 Happy Birthday Bharathi! 🎉");
startConfetti();
}

// confetti
function startConfetti(){

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let confetti=[];

for(let i=0;i<150;i++){
confetti.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

for(let c of confetti){

ctx.beginPath();
ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)";
ctx.fill();

c.y+=2;

if(c.y>canvas.height){
c.y=0;
}

}

}

setInterval(draw,20);

}