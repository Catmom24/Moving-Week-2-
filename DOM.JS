//SHUFFLE BUTTON FUNCTION:

//Note: reseting every zIndex to 0. 
// Study Math.Random 

//1. identify and select button 
//2. listen to event click on button 
//3. change image when button is pressed!


let container = document.querySelector(".project_images");
let button = document.querySelector(".project_button");

// console.log(button);

button.addEventListener("click", shuffleImages);

function shuffleImages() {
    //for loop to select random images!
    for (let index = 0; index < container.childElementCount ; index++) {
        const element = container.children[index]; 
        element.style.zIndex="0";
    }
    let random = Math.floor(Math.random() * container.childElementCount);
    container.children[random].style.zIndex="5"
  
    
   
}


//Back Up2: 
//HOVER OVER BUTTON OPTION! 

let p = document.querySelector("p");
let div = document.querySelector("div");
div.addEventListener("mouseover", mouseOverHandler);
div.addEventListener("mouseleave", mouseLeaveHandler);
function mouseOverHandler(e) {
    p[0]
}















//Back UP: 
// Create a button that links to my website! 
// function project_button2(){
//     alert("WELCOME!");
//     document.getElementsByClassName("https://www.silentechoart.com/animation");
// }

//  const btn = document.createElement('button');
//  btn.innerText=('Chelsea Website');
//  document.body.appendChild(btn);
//  btn.addEventListener('click', () => {
//  alert('WELCOME TO THIS PAGE!')
//  });












































// //AUDIO BUTTON FUNCTION: 
// //1. load audio for each person in HTML
// //2. assign class or id to each audio
// //3. add event listeners to each photo
// //4. each even listener calls a different function that plays the corresponding audio! 
// //reference: https://codesandbox.io/s/gifted-tristan-snzip2?file=/src/index.js:64-923

 //let a1 = document.querySelector("James Baldwin_ the Price of the Ticket.mp3");
 //let a2 = document.querySelector("Chadwick Boseman .mp3");
 //let a3 = document.querySelector("Nina Simone - I Wish I Knew How It Would Feel to Be Free (Official Audio).mp3");
 //let a4 = document.querySelector("JUST AS I AM by Cicely Tyson.mp3");
 //let a5 = document.querySelector("Maya Angelou - Rainbow In The Clouds.mp3");
 //let a6 = document.querySelector("James Earl Jones Performs Shakespeare at the White House Poetry Jam_ (3 of 8).mp3");
 //let a7 = document.querySelector("Quiet Nights sung by Diahann Carroll.mp3");
 //let a8 = document.querySelector("Whitney Houston & Brandy - Impossible_It's Possible (Studio Version).mp3");
// let a9 = document.querySelector("EARTHA KITT SPEAKS ON RELATIONSHIPS_ COMPROMISE FOR WHAT_ ᴴᴰ.mp3");
// let a10 = document.querySelector("Toni Morrison on Beloved.mp3");
 //let a11 = document.querySelector("The Thrill Is Gone.mp3");
 //let a12 = document.querySelector("Aretha Franklin - I Say A Little Prayer (Official Lyric Video).mp3");
// let p1 = document.querySelector("James Baldwin.jpg");
// let p2 = document.querySelector("Chadwick Boseman.jpeg");
// let p3 = document.querySelector("Nina Simone .jpeg");
// let p4 = document.querySelector("Cicely Tyson.jpeg");
// let p5 = document.querySelector("Maya Angelou.jpeg");
// let p6 = document.querySelector("James Earl Jones.jpg");
// let p7 = document.querySelector("Diane .jpg");
// let p8 = document.querySelector("Whitney Houston .jpeg");
// let p9 = document.querySelector("Eartha Kitt.jpg");
// let p10 = document.querySelector("Toni Morrison.jpeg");
// let p11 = document.querySelector("BB King.jpeg");
// let p12 = document.querySelector("Aretha Franklin.jpeg");

// //add eventlisteners to each image to pause all other audio and only play the correct corresponding audio
// p1.addEventListener("click", function () {
//   a12.pause();
//   a11.pause();  
//   a10.pause();
//   a9.pause();
//   a8.pause();
//   a7.pause();
//   a6.pause();
//   a5.pause();  
//   a4.pause();
//   a3.pause();
//   a2.pause();
   //a1.play("James Baldwin_ the Price of the Ticket.mp3");
// });
// p2.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a10.pause();
//     a9.pause();
//     a8.pause();
//     a7.pause();
//     a6.pause();
//     a5.pause();  
//     a4.pause();
//     a3.pause();
//     a1.pause();
//     a2.play();
// });
// p3.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a10.pause();
//     a9.pause();
//     a8.pause();
//     a7.pause();
//     a6.pause();
//     a5.pause();  
//     a4.pause();
//     a2.pause();
//     a1.pause();
//     a3.play();
// });
// p4.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a10.pause();
//     a9.pause();
//     a8.pause();
//     a7.pause();
//     a6.pause();
//     a5.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a4.play(); 
// });
// p5.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a10.pause();
//     a9.pause();
//     a8.pause();
//     a7.pause();
//     a6.pause();
//     a4.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a5.play();
//   });
//   p6.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a10.pause();
//     a9.pause();
//     a8.pause();
//     a7.pause();
//     a5.pause();
//     a4.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a6.play();
//   });
//   p7.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a10.pause();
//     a9.pause();
//     a8.pause();
//     a6.pause();
//     a5.pause();
//     a4.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a7.play();
//   });
//   p8.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a10.pause();
//     a9.pause();
//     a7.pause();
//     a6.pause();
//     a5.pause();
//     a4.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a8.play();
//   });
//   p9.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a10.pause();
//     a8.pause();
//     a7.pause();
//     a6.pause();
//     a5.pause();
//     a4.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a9.play();
//   });
//   p10.addEventListener("click", function () {
//     a12.pause();
//     a11.pause();  
//     a9.pause();
//     a8.pause();
//     a7.pause();
//     a6.pause();
//     a5.pause();
//     a4.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a10.play();
//   });
//   p11.addEventListener("click", function () {
//     a12.pause();
//     a10.pause();  
//     a9.pause();
//     a8.pause();
//     a7.pause();
//     a6.pause();
//     a5.pause();
//     a4.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a11.play(); 
//   });
//   p12.addEventListener("click", function () {
//     a11.pause();
//     a10.pause();  
//     a9.pause();
//     a8.pause();
//     a7.pause();
//     a6.pause();
//     a5.pause();
//     a4.pause();  
//     a3.pause();
//     a2.pause();
//     a1.pause();
//     a12.play(); 
//   });