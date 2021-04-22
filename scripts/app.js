
//------------------LANGUAGE BUTTON MOBILE---------------------------------

const elementClicked = document.querySelector(".selected-lang-mobile");
const elementToShow = document.querySelector(".lang-menu-mobile ul");

elementClicked.addEventListener("click", ()=>{
  elementToShow.classList.toggle("invisible");
});

//------------------MENU OVERLAY EFFECT ON MOBILE---------------------------------

function openNav() {
    document.querySelector('#next').style.transitionDelay = "0s";
    document.getElementById("myNav").style.width = "100%";
    document.querySelector('#next').style.color = "rgba(36, 35, 35, 0)";
    document.querySelector('#prev').style.color = "rgba(36, 35, 35, 0)";
  }
  
function closeNav() {
    document.querySelector('#next').style.transitionDelay = "0.3s";
    document.getElementById("myNav").style.width = "0%";
    document.querySelector('#next').style.color = " rgba(255, 255, 255, 0.8)";
    document.querySelector('#prev').style.color = " rgba(255, 255, 255, 0.8)";
    elementToShow.classList.add('invisible'); 
}

let btnOverlay = document.querySelectorAll('.botao-overlay');

btnOverlay.forEach(btn => {
  btn.addEventListener('click', closeNav);
});




//---------------SHRINK NAVBAR-------------------------------------


const shrinkBar = () => {
  window.onscroll = () => {
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
}

shrinkBar();


//---------------SLIDESHOW-------------------------------------
const dot = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto slide
const intervalTime = 10000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  const activeDot = document.querySelector('.active-dot');
  

  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
    activeDot.nextElementSibling.classList.add('active-dot');
    // Remove current class
    current.classList.remove('current');
    activeDot.classList.remove('active-dot');

    
  } else {
    // Add current to start

    slides[0].classList.add('current');

    activeDot.classList.remove('active-dot');
    dot[0].classList.add('active-dot');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  const activeDot = document.querySelector('.active-dot');

  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
    activeDot.previousElementSibling.classList.add('active-dot');
    // Remove current class
    current.classList.remove('current');
    activeDot.classList.remove('active-dot');

  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');

    activeDot.classList.remove('active-dot');
    dot[4].classList.add('active-dot');
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

const inicioHeight = document.querySelector(".slider").offsetHeight;
const sobreHeight = document.querySelector("#quemsomos").offsetHeight;
const servicosHeight = document.querySelector('#nossos-servicos').offsetHeight;
const orcamentoHeight = document.querySelector('#solicite-orcamento').offsetHeight;
const contatoHeight = document.querySelector('#entre-contato').offsetHeight;
const btnNavDesk = document.querySelectorAll('.btn-nav-desk');

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY
  if (scrollpos < inicioHeight) { 
    btnNavDesk.forEach( item => {
      item.classList.remove('active');
      btnNavDesk[0].classList.add('active');
    });

  }  else if (scrollpos >= inicioHeight & scrollpos < (inicioHeight + sobreHeight -50)) { 
    btnNavDesk.forEach( item => {
      item.classList.remove('active');
      btnNavDesk[1].classList.add('active');
    });

  }  else if (scrollpos >= (inicioHeight + sobreHeight -50) & scrollpos < (inicioHeight + sobreHeight + servicosHeight)) { 
    btnNavDesk.forEach( item => {
      item.classList.remove('active');
      btnNavDesk[2].classList.add('active');
    });

  }  else if (scrollpos >= (inicioHeight + sobreHeight + servicosHeight) & scrollpos < (inicioHeight + sobreHeight + servicosHeight + orcamentoHeight)) { 
    btnNavDesk.forEach( item => {
      item.classList.remove('active');
      btnNavDesk[3].classList.add('active');
    });

  }  else { 
    btnNavDesk.forEach( item => {
      item.classList.remove('active');
      btnNavDesk[4].classList.add('active');
    });
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
const flipCards = () => {
  function flipCard(e) {
    e.target.parentElement.parentElement.parentElement.style.transform = 'rotateY(180deg)';
  }
  
  function unFlipCard(e) {
    e.target.parentElement.parentElement.parentElement.style.transform = '';
  }
  
  btnMais = document.querySelectorAll('.btn-read-more');
  btnVoltar = document.querySelectorAll('.btn-back');
  
  btnMais.forEach( btn => {
    btn.addEventListener('click', flipCard);
  });
  
  btnVoltar.forEach( btn => {
    btn.addEventListener('click', unFlipCard);
  });
}

flipCards();




//---------------jQuery Smooth Scrolling-------------------------------------

 $('.btn-barra-nav a, .a-logo, #up, .btn-footer-orcamento-up' ).on('click', function (e) { 
   if (this.hash !== '') {
    e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },1000);
  }
 });


