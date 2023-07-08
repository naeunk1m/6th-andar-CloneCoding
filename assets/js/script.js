$(function () {


// 맨 위 배너 슬라이드
var BntSwiper = new Swiper(".bnr-slide", {
  effect: "fade",
    loop: true,
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    }
});
// 맨 위 배너 슬라이드

// 사이드 메뉴 열기 
$('.btn-menu').click(function(e){
  e.preventDefault();
  $('.group-menu, .bg').addClass('show')
  $('body').css('overflow', 'hidden')
})
$(".btn-area .btn-close, .bg").click(function(e){
  e.preventDefault();
  $('.group-menu,.bg').removeClass('show')
  $('body').css('overflow', 'auto')
})
// 사이드 메뉴 열기 

// 사이드 메뉴 소메뉴
$('.show-btn').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings(".show-list").stop().slideToggle();
})
// 사이드 메뉴 소메뉴

// 검색창 열기
$('.btn-search').click(function(e){
  e.preventDefault();
  if($('.header-search').hasClass('show')){
    $('.header-search').removeClass('show')
  }else{
    $('.header-search').addClass('show')
  }
})

$(".header-search .btn-close").click(function(e){
  e.preventDefault();
  $(".header-search").removeClass("show")
})
// 검색창 열기

// 메인 슬라이드 영역
const swiper = new Swiper(".slide", {
  effect: "fade",
  loop: true,
  autoplay: {
  delay: 4000,
  disableOnInteraction: false,
},  
pagination: {
  el: ".swiper-pagination",
},
});
// 메인 슬라이드 영역









  $(window).trigger('scroll');
  $('.moreBtn').click(function () {
    $('header-btm').toggleClass('active');
    $('.btm-all').stop().slideToggle();
  });

  $('btn-more').click(function () {
    if($('menu-list').hasClass('active')){
      $('menu-list.all').addClass('show')
      $('menu-list.active').removeClass('active')
    }else{
      $('menu-list.active').addClass('active')
      $('menu-list.all').removeClass('show')
    }
  })

  let lastScroll = 0;

  $(window).scroll(function(){
    curr = $(this).scrollTop();
    if(curr > 0){
        $('.header').addClass('fixed')
    }else{
        $('.header').removeClass('fixed')
    }

    if(curr == 0){

      $('.fix-btn').removeClass('show')

    }else{

      if (curr > lastScroll) {
        $('.fix-btn').removeClass('show')
      } else {
        $('.fix-btn').addClass('show')
      }
    }
    lastScroll = curr;

  })

  $('#topBtn').click(function(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:'smooth'})
  })

});
