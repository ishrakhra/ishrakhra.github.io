const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  
  circle.style.left = `${randomX}px`;
  circle.style.top = `${randomY}px`;

  // Optional: Adjust circle sizes randomly
  const randomSize = Math.random() * 50 + 30; // Sizes between 30px and 80px
  circle.style.width = `${randomSize}px`;
  circle.style.height = `${randomSize}px`;
});

// Typewriter Effect
const texts = [
  "DEVELOPER",
  "DESIGNER",
  "PROBLEM-SOLVER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
  if (charcterIndex < texts[textIndex].length){
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed); 
  }
  else{
      setTimeout(eraseText, 1000)
  }
}

function eraseText(){
  if(textElements.innerHTML.length > 0){
      textElements.innerHTML = textElements.innerHTML.slice(0,-1);
      setTimeout(eraseText, 50)
  }
  else{
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500)
  }
}

window.onload = typeWriter





var myIndex = 0;
Slideshow();

function Slideshow() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(Slideshow, 5000);   
}

window.addEventListener('DOMContentLoaded', (event) => {
  const progresses = document.querySelectorAll('.progress');
  
  progresses.forEach(progress => {
      let width = 0;
      const targetWidth = progress.style.width;
      const interval = setInterval(() => {
          if (width >= parseInt(targetWidth)) {
              clearInterval(interval);
          } else {
              width++;
              progress.style.width = width + '%';
              progress.innerHTML = width + '%';
          }
      }, 15);
  });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
      alert("Please fill out all required fields.");
      event.preventDefault();
  }
});

// typewriter effect 

document.addEventListener("DOMContentLoaded", function() {
  const texts = [
    "DEVELOPER",
    "DESIGNER",
    "YOUTUBER"
  ]

  let speed  = 100;
  const textElements = document.querySelector(".typewriter-text");

  let textIndex = 0;
  let charcterIndex = 0;

  function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed); 
    } else {
      setTimeout(eraseText, 1000);
    }
  }

  function eraseText() {
    if (textElements.innerHTML.length > 0) {
      textElements.innerHTML = textElements.innerHTML.slice(0, -1);
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500);
    }
  }

  typeWriter(); // Start the typewriter effect
});


