var typed = new Typed(".text", {
    strings: ["Full-Stack Developer", "Front-end Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 800,
    loop: true
  });
  

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
};

function closeMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.remove('show');
};


var h = document.querySelector(".theme")
var work = document.querySelector(".work")

h.addEventListener("mouseover", function(){
    work.style.display = "block"
    
})

h.addEventListener("mouseout", function(){
    work.style.display = "none"
    
})