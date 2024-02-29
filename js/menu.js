const mBtn = document.querySelector('.mobile_btn');
const mainMenu = document.querySelector('.main_menu');

// 모바일 - 햄버거 버튼 클릭 시 X로 변경후 메뉴띄움
mBtn.addEventListener('click',()=>{
  mBtn.classList.toggle('on');
  mainMenu.classList.toggle('on');
})


// 메뉴 hover시
const elMenus = document.querySelectorAll('.de_ul > li')
const elSelect = document.querySelector('.select_bar')

function init(){
  elMenus[0].classList.add('selected')
  elSelect.style = `
      width:${elMenus[0].offsetWidth}px;
      left:${elMenus[0].offsetLeft}px;
    `
}
init();

window.addEventListener('resize',init);

elMenus.forEach(function(menu,idx){
  menu.onmouseenter = function(){
    elMenus[0].classList.remove('selected')
    this.classList.add('selected');

    elSelect.style = `
      width:${this.offsetWidth}px;
      left:${this.offsetLeft}px;
    `
  }
  menu.onmouseleave = function(){
    this.classList.remove('selected');
    init();
  }
})

//탑 버튼
const $topBtn = document.querySelector('.top_btn')
window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  if( scroll > 100 ){
    $topBtn.classList.add('active')
  } else {
    $topBtn.classList.remove('active')
  }
})

$topBtn.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
})
