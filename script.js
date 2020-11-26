const navSlide = () => {
  const menu = document.querySelector ('.menu');
  const nav = document.querySelector ('.nav-links');
  const navLinks = document.querySelectorAll ('.nav-links li');

  menu.addEventListener('click',() => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation ='';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
      }
    });
    //menu animation 
    menu.classList.toggle('toggle');
  });

}
navSlide(); 

window.onscroll = function() {myFunction()};

var navBar = document.getElementById("navBar");
var sticky = navBar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}
// Video as background and button, code from w3schools

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


//back to top button code from w3 schools: 
//Get the button:
mybutton = document.getElementById("mytopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}