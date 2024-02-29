const popClose = document.querySelector ('.loNoti_close');
const popBtn = document.querySelector ('.open_btn');
const pop = document.querySelector('.loNoti')

popBtn.addEventListener('click',()=>{
  pop.classList.add('popOpen')
})

popClose.addEventListener('click',()=>{
  pop.classList.remove('popOpen')
})

const mBtn = document.querySelector('.mobile_btn');
const mainMenu = document.querySelector('.main_menu');

// 모바일 - 햄버거 버튼 클릭 시 X로 변경후 메뉴띄움
mBtn.addEventListener('click',()=>{
  mBtn.classList.toggle('on');
  mainMenu.classList.toggle('on');
})
