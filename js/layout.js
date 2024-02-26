const $body = document.querySelector('body');
const mBtn = document.querySelector('.mobile_btn');
const mainMenu = document.querySelector('.main_menu');

// 스크롤하면 헤더 메뉴 흰색으로 변경
window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  if( scroll > 100 ){
    $body.classList.add('scrolling')
  } else {
    $body.classList.remove('scrolling')
  }
})

// 모바일 - 햄버거 버튼 클릭 시 X로 변경후 메뉴띄움
mBtn.addEventListener('click',()=>{
  mBtn.classList.toggle('on');
  mainMenu.classList.toggle('on');
})


// 메뉴 스와이퍼(수정예정,,,)
const swiper = new Swiper('.menu-slider', {
  loop: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


