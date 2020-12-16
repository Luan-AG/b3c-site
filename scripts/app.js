
//------------------LANGUAGE BUTTON MOBILE---------------------------------

const elementClicked = document.querySelector(".selected-lang-mobile");
const elementToShow = document.querySelector(".lang-menu-mobile ul");

elementClicked.addEventListener("click", ()=>{
  elementToShow.classList.toggle("invisible");
});

//------------------OVERLAY EFFECT---------------------------------

/* Open when someone clicks on the menu element */
function openNav() {
    document.querySelector('#next').style.transitionDelay = "0s";
    document.getElementById("myNav").style.width = "100%";
    document.querySelector('#next').style.color = "rgba(36, 35, 35, 0)";
    document.querySelector('#prev').style.color = "rgba(36, 35, 35, 0)";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.querySelector('#next').style.transitionDelay = "0.3s";
    document.getElementById("myNav").style.width = "0%";
    document.querySelector('#next').style.color = " rgba(255, 255, 255, 0.8)";
    document.querySelector('#prev').style.color = " rgba(255, 255, 255, 0.8)";
    elementToShow.classList.add('invisible'); 
}

document.querySelector(".botao-overlay1").addEventListener("click", closeNav);
document.querySelector(".botao-overlay2").addEventListener("click", closeNav);
document.querySelector(".botao-overlay3").addEventListener("click", closeNav);
document.querySelector(".botao-overlay4").addEventListener("click", closeNav);
document.querySelector(".botao-overlay5").addEventListener("click", closeNav);


//---------------SHRINK NAVBAR & Appear on scroll section sobre-------------------------------------

window.onscroll = function() {;
    if(window.screen.width > 767){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
              document.querySelector(".logomarca").style.width = "110px";
              document.querySelector("nav").style.height = "70px";
              document.querySelector("header").style.fontSize = "14px";
              if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                document.querySelector(".texto-sobre").style.opacity = "1";
                document.querySelector(".texto-sobre").style.marginTop = "0";
                }
                /* if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
                  document.querySelector(".texto-servicos").style.opacity = "1";
                  document.querySelector(".texto-servicos").style.transform = "translate(0px, 0px)";
                  document.querySelector(".servico-1").style.opacity = "1";
                  document.querySelector(".servico-1").style.transform = "translate(0px, 0px)";
                  document.querySelector(".servico-2").style.opacity = "1";
                  document.querySelector(".servico-2").style.transform = "translate(0px, 0px)";
                }
                  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
                  document.querySelector(".servico-3").style.opacity = "1";
                  document.querySelector(".servico-3").style.transform = "translate(0px, 0px)";
                  document.querySelector(".servico-4").style.opacity = "1";
                  document.querySelector(".servico-4").style.transform = "translate(0px, 0px)";
                  }
                    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
                      document.querySelector(".servico-5").style.opacity = "1";
                      document.querySelector(".servico-5").style.transform = "translate(0px, 0px)";
                      document.querySelector(".servico-6").style.opacity = "1";
                      document.querySelector(".servico-6").style.transform = "translate(0px, 0px)";
                    } */
        } else {
                document.querySelector(".logomarca").style.width = "140px";
                document.querySelector("nav").style.height = "100px";
                document.querySelector("header").style.fontSize = "16px";
        }
    } else {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                document.querySelector(".texto-sobre").style.opacity = "1";
                document.querySelector(".texto-sobre").style.marginTop = "0";
                }
                /* if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
                  document.querySelector(".texto-servicos").style.opacity = "1";
                  document.querySelector(".texto-servicos").style.transform = "translate(0px, 0px)";
                  document.querySelector(".servico-1").style.opacity = "1";
                  document.querySelector(".servico-1").style.transform = "translate(0px, 0px)";
                  document.querySelector(".servico-2").style.opacity = "1";
                  document.querySelector(".servico-2").style.transform = "translate(0px, 0px)";
                }
                  if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
                  document.querySelector(".servico-3").style.opacity = "1";
                  document.querySelector(".servico-3").style.transform = "translate(0px, 0px)";
                  document.querySelector(".servico-4").style.opacity = "1";
                  document.querySelector(".servico-4").style.transform = "translate(0px, 0px)";
                  }
                    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
                      document.querySelector(".servico-5").style.opacity = "1";
                      document.querySelector(".servico-5").style.transform = "translate(0px, 0px)";
                      document.querySelector(".servico-6").style.opacity = "1";
                      document.querySelector(".servico-6").style.transform = "translate(0px, 0px)";
                    } */
    }
}

//---------------SLIDESHOW-------------------------------------

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto slide
const intervalTime = 10000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}