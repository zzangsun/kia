$(document) .ready(function(){
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        effect:"fade",
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
        
      });
      $(window).scroll(function(){
        //윈도우에 스크롤하면
        //변수를 설정해서 스크롤상단값 저장시키기
        const sct = $(window).scrollTop(); 

        console.log(sct);

        //sct 가 200px 이상일때 .nav-menu,.logo 클래스추가 아닐때는 제거
        if(sct >= 200){
            $('.head').addClass('on');
        } else{
            $('.head').removeClass('on');
        }
    });
  
});
