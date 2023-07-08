$(function () {

  var BntSwiper = new Swiper(".bnr-slide", {
    effect: "fade",
      loop: true,
      autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      }
  });

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
