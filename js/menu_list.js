import products from "./json/pizza.json" assert {type:"json"}

const createNewItem = (product) => {
  const ulEl = document.querySelector('.menu_new')
  const li = document.createElement('li')
  const a = document.createElement('a')
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const spanL = document.createElement('span')
  const spanR = document.createElement('span')

  li.setAttribute('id',product.id)
  img.src = product.img 

  a.setAttribute('href','details.html')

  div.setAttribute('class','menu_txt')

  h4.classList.add('menu_name');
  h4.innerText = product.name

  p.classList.add('menu_info')
  p.innerText = product.info

  spanL.classList.add('menu_Lprice')
  spanL.innerText = product.priceL

  spanR.classList.add('menu_Rprice')
  spanR.innerText = product.priceM

  li.append(a)
  a.append(img,div)
  div.append(h4,p,spanL,spanR)
  ulEl.append(li)
}
const createPreItem = (product) => {
  const ulEl = document.querySelector('.menu_Premium')
  const li = document.createElement('li')
  const a = document.createElement('a')
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const spanL = document.createElement('span')
  const spanR = document.createElement('span')

  li.setAttribute('id',product.id)
  img.src = product.img 

  a.setAttribute('href','details.html')

  div.setAttribute('class','menu_txt')

  h4.classList.add('menu_name');
  h4.innerText = product.name

  p.classList.add('menu_info')
  p.innerText = product.info

  spanL.classList.add('menu_Lprice')
  spanL.innerText = product.priceL

  spanR.classList.add('menu_Rprice')
  spanR.innerText = product.priceM

  li.append(a)
  a.append(img,div)
  div.append(h4,p,spanL,spanR)
  ulEl.append(li)
}
const createHalfItem = (product) => {
  const ulEl = document.querySelector('.menu_half')
  const li = document.createElement('li')
  const a = document.createElement('a')
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const spanL = document.createElement('span')
  const spanR = document.createElement('span')

  li.setAttribute('id',product.id)
  img.src = product.img 

  a.setAttribute('href','details.html')

  div.setAttribute('class','menu_txt')

  h4.classList.add('menu_name');
  h4.innerText = product.name

  p.classList.add('menu_info')
  p.innerText = product.info

  spanL.classList.add('menu_Lprice')
  spanL.innerText = product.priceL

  spanR.classList.add('menu_Rprice')
  spanR.innerText = product.priceM

  li.append(a)
  a.append(img,div)
  div.append(h4,p,spanL,spanR)
  ulEl.append(li)
}
const createClassicItem = (product) => {
  const ulEl = document.querySelector('.menu_classic')
  const li = document.createElement('li')
  const a = document.createElement('a')
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  const p = document.createElement('p')
  const spanL = document.createElement('span')
  const spanR = document.createElement('span')

  li.setAttribute('id',product.id)
  img.src = product.img 

  a.setAttribute('href','details.html')

  div.setAttribute('class','menu_txt')

  h4.classList.add('menu_name');
  h4.innerText = product.name

  p.classList.add('menu_info')
  p.innerText = product.info

  spanL.classList.add('menu_Lprice')
  spanL.innerText = product.priceL

  spanR.classList.add('menu_Rprice')
  spanR.innerText = product.priceM

  li.append(a)
  a.append(img,div)
  div.append(h4,p,spanL,spanR)
  ulEl.append(li)
}

function importData(){
products.data.map((item)=>{
  if(!document.getElementById(item.id)){

    if(item.category == "new"){
      createNewItem(item)
    } else if(item.category == "premium"){
      createPreItem(item)
    } else if(item.category == "half"){
      createHalfItem(item)
    } else if(item.category == "classic"){
      createClassicItem(item)
    }
  }
})
}

window.addEventListener('load', importData)