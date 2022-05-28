new WOW().init();

$('.reset').click(function () {
  new WOW().init();
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".navbar-light").addClass('nav-white');
    }
    else {
      $(".navbar-light").removeClass('nav-white');
    }
  })
});

//SWIPER SLIDER
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// NAVBAR COLOR CHANGE
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".navbar-light").addClass('nav-white');
    }
    else {
      $(".navbar-light").removeClass('nav-white');
    }
  })
});

// SWIPER SLIDER
$(document).ready(function () {
  // Swiper: Slider
  new Swiper('.swiper-container', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    freeMode: true,
    centeredSlides: true,
    speed: 5000,
    autoplaySpeed: 5000,
    breakpoints: {
      1440: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      320: {
        slidesPerView:1,
        spaceBetween:5
      }
    }
  });
});

$(document).ready(function () {
  // Swiper: Slider
  new Swiper('.swiper-container-2', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 5,
    paginationClickable: true,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },

    centeredSlides: true,
    speed: 5000,
    autoplaySpeed: 5000,
    breakpoints: {
      1440: {
        slidesPerView: 5  ,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      320: {
        slidesPerView:1,
        spaceBetween:5
      }
    }
  });
});

//TIMELINE

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();


//TEAM MEMBER SLIDER
$('.team-slider').slick({
  slidesToShow: 3.5,
  slidesToScroll: 1,
  dots: false,
  prevArrow: $(".slick-arrow-left"),
  nextArrow: $(".slick-arrow-right"),
  focusOnSelect: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        
      } 
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

//BLOG SLIDER
$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: true,
  infinite: false,
  arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      },
    },
  ],
});

//HAMBURGER BUTTON
$(document).ready(function(){
  $('.btn--menu').click(function(e){
    e.preventDefault();
    $(this).toggleClass('actived');
  })
});