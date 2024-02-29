

const sizeBtn = document.querySelectorAll('.size_btn');
const priceTotal = document.querySelector('.total');


let totalPrice = 0;

sizeBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    const price = btn.getAttribute('data-price');
    priceTotal.innerHTML = new Intl.NumberFormat('ko-KR', {
      style: 'currency',  //통화단위
      currency: 'KRW'     //원화
    }).format(price)
  })
})


const minus = document.querySelector('.minus')
const num = document.querySelector('.amount_select p')
const plus = document.querySelector('.plus')

let number = 0;

minus.addEventListener('click',()=>{
  if(number < 1){
    return
  } else {
    number--
    changeNum()
  }
})
plus.addEventListener('click',()=>{
    number++
    changeNum()
})

function changeNum () {
  num.innerText = number
}