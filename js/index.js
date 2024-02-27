// 메뉴 스와이퍼(수정예정,,,)
const swiper = new Swiper('.menu-slider', {
  loop: true,
  slidesPerView: 5, //한번에 보일 피자 갯수
  spaceBetween: 20, //피자 사이 간격
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 2000,

  breakpoints: {
    1440: {
      slidesPerView: 5, //한번에 보일 피자 갯수
      spaceBetween: 20, //피자 사이 간격
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    390: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

