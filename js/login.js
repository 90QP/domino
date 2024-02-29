const popClose = document.querySelector ('.loNoti_close');
const popBtn = document.querySelector ('.open_btn');
const pop = document.querySelector('.loNoti')

popBtn.addEventListener('click',()=>{
  pop.classList.add('popOpen')
})

popClose.addEventListener('click',()=>{
  pop.classList.remove('popOpen')
})