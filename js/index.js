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



// 스크롤하면 메인메뉴 올라옴

const orderMenu = document.querySelector('.main_order');
window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  if( scroll > 100 ){
    orderMenu.classList.add('order_scroll')
  } else {
    orderMenu.classList.remove('order_scroll')
  }
})



// 가맹안내 hover 
const infoCard = document.querySelectorAll('.info_card_wrap')
const infoArti = document.querySelectorAll('.main_info_wrap > article')

function infoinit(){
  infoCard[1].classList.add('hover_card')
}
infoinit();

infoCard.forEach((card)=>{
  card.addEventListener('mouseover',()=>{
    infoCard[1].classList.remove('hover_card')
    card.classList.add('hover_card')
  })
  card.addEventListener('mouseout',()=>{
    card.classList.remove('hover_card');infoCard[1].classList.add('hover_card')
  })
})




//gsap
let funcObj = {

  section2 : function(){
    const tl = gsap.timeline(); 

    tl.to('.section2 h2 ' , { 
      opacity:1,
      duration:0.5, 
      y: 0,
    }) ,

    tl.to('.section2 .swiper-wrapper > * ' , { 
      opacity:1,
      duration:0.5, 
      stagger: 0.2, 
      y: 0,
    }) 
  },

  section3 : function(){
    const tl = gsap.timeline(); 

    tl.to('.section3 > * ' , { 
      opacity:1,
      duration:1, 
      y: -30,
    }) 
  },

  section4 : function(){
    const tl = gsap.timeline(); 

    tl.to('.section4 h2 ' , { 
      opacity:1,
      duration:1, 
      y: 0,
  }) ,

    tl.to('.section4 > div' , { 
      opacity:1,
      duration:1, 
      stagger: 0.3, 
      y: 0,
    })
  },

  section5 : function(){
    const tl = gsap.timeline(); 

    tl.to('.section5 .main_search_wrap > * ' , { 
      opacity:1,
      duration:1, 
      stagger: 0.3, 
      y: 0,
    }) 
  },

  section6 : function(){
    const tl = gsap.timeline(); 

    tl.to('.section6 > .main_info_wrap > article ' , { 
      duration:1, 
      stagger: 0.3, 
      y: 0,
    }) 
  }
}


const sections = document.querySelectorAll('section');
const io = new IntersectionObserver((entries, observer)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      console.log(entry.target.classList.value)
      const objName = entry.target.classList.value
      if (objName === 'section1') {
        return
      } else { funcObj[objName](); }
      
    }
  })
})

sections.forEach( section => io.observe(section))