
//------------------LANGUAGE BUTTON MOBILE---------------------------------

const elementClicked = document.querySelector(".selected-lang-mobile");
const elementToShow = document.querySelector(".lang-menu-mobile ul");

elementClicked.addEventListener("click", ()=>{
  elementToShow.classList.toggle("invisible");
});

//------------------MENU OVERLAY EFFECT---------------------------------

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

window.onscroll = function() {
    if(window.screen.width >= 768){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
              document.querySelector(".logomarca").style.width = "110px";
              document.querySelector("nav").style.height = "70px";
              document.querySelector("header").style.fontSize = "14px";
              
        } else {
                document.querySelector(".logomarca").style.width = "140px";
                document.querySelector("nav").style.height = "100px";
                document.querySelector("header").style.fontSize = "16px";
        }
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

//---------------Underline on Scroll-------------------------------------

let scrollpos = window.scrollY;
const inicio = document.querySelector(".slider");
const sobre = document.querySelector("#quemsomos");
const servicos = document.querySelector('#nossos-servicos');
const orcamento = document.querySelector('#solicite-orcamento');
const contato = document.querySelector('#entre-contato');

const inicioHeight = inicio.offsetHeight;
const sobreHeight = sobre.offsetHeight;
const servicosHeight = servicos.offsetHeight;
const orcamentoHeight = orcamento.offsetHeight;
const contatoHeight = contato.offsetHeight;

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY
  if (scrollpos < inicioHeight) { 
    document.querySelector('.inicio').classList.add('active');
    document.querySelector('.sobre').classList.remove('active');
    document.querySelector('.serviços').classList.remove('active');
    document.querySelector('.parceiros').classList.remove('active');
    document.querySelector('.contato').classList.remove('active');

  }  else if (scrollpos >= inicioHeight & scrollpos < (inicioHeight + sobreHeight -50)) { 
    document.querySelector('.inicio').classList.remove('active');
    document.querySelector('.sobre').classList.add('active');
    document.querySelector('.serviços').classList.remove('active');
    document.querySelector('.parceiros').classList.remove('active');
    document.querySelector('.contato').classList.remove('active');

  }  else if (scrollpos >= (inicioHeight + sobreHeight -50) & scrollpos < (inicioHeight + sobreHeight + servicosHeight)) { 
    document.querySelector('.inicio').classList.remove('active');
    document.querySelector('.sobre').classList.remove('active');
    document.querySelector('.serviços').classList.add('active');
    document.querySelector('.parceiros').classList.remove('active');
    document.querySelector('.contato').classList.remove('active');

  }  else if (scrollpos >= (inicioHeight + sobreHeight + servicosHeight) & scrollpos < (inicioHeight + sobreHeight + servicosHeight + orcamentoHeight)) { 
    document.querySelector('.inicio').classList.remove('active');
    document.querySelector('.sobre').classList.remove('active');
    document.querySelector('.serviços').classList.remove('active');
    document.querySelector('.parceiros').classList.add('active');
    document.querySelector('.contato').classList.remove('active');

  }  else { 
    document.querySelector('.inicio').classList.remove('active');
    document.querySelector('.sobre').classList.remove('active');
    document.querySelector('.serviços').classList.remove('active');
    document.querySelector('.parceiros').classList.remove('active');
    document.querySelector('.contato').classList.add('active');
    }
})

//---------------Show btn whatsapp on Scroll-------------------------------------

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY
  if (scrollpos > 200) { 
    document.querySelector('#zap').style.opacity = '1';
  } else {
    document.querySelector('#zap').style.opacity = '0';
  }
})

//---------------Show btn up on Scroll-------------------------------------

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY
  if (scrollpos > 4000) { 
    document.querySelector('#up').style.opacity = '1';
  } else {
    document.querySelector('#up').style.opacity = '0';
  }
})

//---------------Button flip cards-------------------------------------
btnMais1 = document.querySelector('.btn-mais-1');
btnMais2 = document.querySelector('.btn-mais-2');
btnMais3 = document.querySelector('.btn-mais-3');
btnMais4 = document.querySelector('.btn-mais-4');
btnMais5 = document.querySelector('.btn-mais-5');
btnMais6 = document.querySelector('.btn-mais-6');

btnVoltar1 = document.querySelector('.btn-voltar-1');
btnVoltar2 = document.querySelector('.btn-voltar-2');
btnVoltar3 = document.querySelector('.btn-voltar-3');
btnVoltar4 = document.querySelector('.btn-voltar-4');
btnVoltar5 = document.querySelector('.btn-voltar-5');
btnVoltar6 = document.querySelector('.btn-voltar-6');

btnMais1.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = 'rotateY(-180deg)';
});
btnVoltar1.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = '';
});


btnMais2.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = 'rotateY(-180deg)';
});
btnVoltar2.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = '';
});


btnMais3.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = 'rotateY(-180deg)';
});
btnVoltar3.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = '';
});


btnMais4.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = 'rotateY(-180deg)';
});
btnVoltar4.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = '';
});


btnMais5.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = 'rotateY(-180deg)';
});
btnVoltar5.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = '';
});


btnMais6.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = 'rotateY(-180deg)';
});
btnVoltar6.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.parentElement.style.transform = '';
});
