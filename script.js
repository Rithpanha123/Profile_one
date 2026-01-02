const words = ["Hi,My name 's Panha...!."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 100;
const pause = 1500;

const textEl = document.getElementById("text");

function type() {
  currentWord = words[i];

  if (isDeleting) {
    textEl.textContent = currentWord.substring(0, j--);
  } else {
    textEl.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, pause);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, speed);
  }
}

type();

/*
window.addEventListener('scroll', function () {
  var element = document.querySelector('.section-content');
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('visible');
  } else {
    element.classList.remove('visible');
  }
});*/

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  //Toggle mobile menu visbility
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Initialize Swiper
const swiper = new Swiper(".swiper-wrapper", {
  // Optional parameters
  loop: true,

  spaceBetween: 25,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*window.addEventListener('scroll', function () {
    var element = document.querySelector('.section-content ');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });*/
AOS.init({
  duration: 2000,
  once: true,
});
