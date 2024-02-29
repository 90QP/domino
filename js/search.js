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



/////map/////

var map;
var button = document.getElementById('map_button');
button.addEventListener('click', changeCenter);

function initMap() {
  var gyeongbokgung = { lat: 37.57979553563185, lng: 126.97706245552442 };
  map = new google.maps.Map( document.getElementById('map'), {
      zoom: 15,
      center: gyeongbokgung
    });

  var mainMarker = new google.maps.Marker({
    position: gyeongbokgung,
    map: map,
    label: {
        text: "경복궁",
        color: "#C70E20"
    },
    icon: {
        url: "pooh_marker.png",
        labelOrigin: new google.maps.Point(100, 55)
    }
  });

  var subMarkerPoint = { lat: 37.57956596361732, lng: 126.9803240214433};
  var subMarker = new google.maps.Marker({
      position: subMarkerPoint,
      map: map,
      label: "국립현대미술관",
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
        labelOrigin: new google.maps.Point(20, 47),
        anchor: new google.maps.Point(50,32)
      }
    });
}

function changeCenter() {
  var gyeongbokgung = { lat: 37.57979553563185, lng: 126.97706245552442 };
  map.panTo(gyeongbokgung);
  map.setZoom(15);
}


/* tap */

$('.search_header li>a').addClass('active'); 

$('.search_page_tab > section:gt(0)').hide();

$('.search_header li>a').click(function(){
  var num = $(this).index();
  console.log(num)
  $('.search_header li').removeClass('active');
  $(this).addClass('active')

  $('.search_page_tab > section').hide();
  $('.search_page_tab > section').eq(num).show()
})