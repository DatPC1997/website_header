// slider benefit
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
// slider fell
var benefitas = new Swiper(".benefit-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // breakpoints media <= 320px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 30,
    },
    // breakpoints media <= 640px
    640: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
  },
});
// slider teamDoctor
var teamDoctor = new Swiper(".doctor-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // breakpoints media <= 320px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 30,
    },
    // breakpoints media <= 640px
    640: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetweenSlides: 30,
    },
  },
});
// slider vaccin image
var imgVaccin = new Swiper(".imgVaccin", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    // breakpoints media <= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // breakpoints media <= 640px
    640: {
      slidesPerView: 4,
      spaceBetweenSlides: 30,
    },
    1024: {
      slidesPerView: 7,
      spaceBetweenSlides: 30,
    },
  },
});
var vaccin = new Swiper(".vaccin", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: imgVaccin,
  },
});
// slider video customen
var videoCustomer = new Swiper(".customer", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-customer",
    prevEl: ".prev-customer",
  },
  breakpoints: {
    // breakpoints media <= 320px
    320: {
      slidesPerView: 1,
    },
    // breakpoints media <= 640px
    640: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
  },
});
// slider advise
var advise = new Swiper(".slider-advise", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".next-advise",
    prevEl: ".prev-advise",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
  },
});
