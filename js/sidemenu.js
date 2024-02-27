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
  elMenus[3].classList.add('selected')
  elSelect.style = `
      width:${elMenus[3].offsetWidth}px;
      left:${elMenus[3].offsetLeft}px;
    `
}
init();

window.addEventListener('resize',init);

elMenus.forEach(function(menu,idx){
  menu.onmouseenter = function(){
    elMenus[3].classList.remove('selected')
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





import products from "./json/side.json" assert {type:"json"}

const createComboItem = (product) => {
  const ulEl = document.querySelector('.menu_combo')
  const li = document.createElement('li')
  const a = document.createElement('a')
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  const spanL = document.createElement('span')

  li.setAttribute('id',product.id)
  img.src = product.img 

  a.setAttribute('href','details.html')

  div.setAttribute('class','menu_txt')

  h4.classList.add('menu_name');
  h4.innerText = product.name

  spanL.classList.add('menu_Lprice')
  spanL.innerText = product.priceL

  li.append(a)
  a.append(img,div)
  div.append(h4,spanL)
  ulEl.append(li)
}
const createSideItem = (product) => {
  const ulEl = document.querySelector('.menu_side')
  const li = document.createElement('li')
  const a = document.createElement('a')
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  const spanL = document.createElement('span')

  li.setAttribute('id',product.id)
  img.src = product.img 

  a.setAttribute('href','details.html')

  div.setAttribute('class','menu_txt')

  h4.classList.add('menu_name');
  h4.innerText = product.name
  spanL.classList.add('menu_Lprice')
  spanL.innerText = product.priceL


  li.append(a)
  a.append(img,div)
  div.append(h4,spanL)
  ulEl.append(li)
}

function importData(){
products.data.map((item)=>{
  if(!document.getElementById(item.id)){

    if(item.category == "combo"){
      createComboItem(item)
    } else if(item.category == "side"){
      createSideItem(item)
    } 
  }
})
}

window.addEventListener('load', importData)