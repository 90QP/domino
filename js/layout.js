const $body = document.querySelector('body');
const mBtn = document.querySelector('.mobile_btn');
const mainMenu = document.querySelector('.main_menu');
const $topBtn = document.querySelector('.top_btn')

// 스크롤하면 헤더 메뉴 흰색으로 변경
window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  if( scroll > 100 ){
    $body.classList.add('scrolling')
    $topBtn.classList.add('active')
  } else {
    $body.classList.remove('scrolling')
    $topBtn.classList.remove('active')
  }
})

// 모바일 - 햄버거 버튼 클릭 시 X로 변경후 메뉴띄움
mBtn.addEventListener('click',()=>{
  mBtn.classList.toggle('on');
  mainMenu.classList.toggle('on');
})


//탑 버튼
$topBtn.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
})