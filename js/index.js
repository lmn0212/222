/*global $*/
$(function () {
    $(window).scroll(function() {
        var scrolled = window.pageYOffset || $(document).scrollTop();
        if(scrolled >= 0) {
            $('.scrollbar-nav .main span').addClass('in-viewport');
            $('.scrollbar-nav .main i').addClass('active-area');
        } 
        if (scrolled > 300) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .main i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').addClass('in-viewport');
            $('.scrollbar-nav .catalog i').addClass('active-area');
        } else {
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .catalog i').removeClass('active-area');
        }
        if (scrolled > 880) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .catalog i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages span').addClass('in-viewport');
            $('.scrollbar-nav .advantages i').addClass('active-area');
        } else {
            $('.scrollbar-nav .advantages span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages i').removeClass('active-area');
        }
        
        if (scrolled >= 1200) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages span').removeClass('in-viewport');
            $('.scrollbar-nav .couters span').addClass('in-viewport');
            $('.scrollbar-nav .couters i').addClass('active-area');
        } else {
            $('.scrollbar-nav .couters span').removeClass('in-viewport');
            $('.scrollbar-nav .couters i').removeClass('active-area');
        }
        if (scrolled >= 1300) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .couters i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages span').removeClass('in-viewport');
            $('.scrollbar-nav .couters span').removeClass('in-viewport');
            $('.scrollbar-nav .new span').addClass('in-viewport');
            $('.scrollbar-nav .new i').addClass('active-area');
        } else {
            $('.scrollbar-nav .new span').removeClass('in-viewport');
            $('.scrollbar-nav .new i').removeClass('active-area');
        }
        
         if (scrolled >= 1650) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .new i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages span').removeClass('in-viewport');
            $('.scrollbar-nav .couters span').removeClass('in-viewport');
            $('.scrollbar-nav .new span').removeClass('in-viewport');
            $('.scrollbar-nav .feeds span').addClass('in-viewport');
            $('.scrollbar-nav .feeds i').addClass('active-area');
        } else {
            $('.scrollbar-nav .feeds span').removeClass('in-viewport');
            $('.scrollbar-nav .feeds i').removeClass('active-area');
        }
    });
    $('.faq-item-1').click(function () {
        $('.faq-block-1 .faq-info p').toggleClass('on-active');
        $('.faq-item-1 span').toggleClass('focused');
    });
    $('.faq-item-2').click(function () {
        $('.faq-block-2 .faq-info p').toggleClass('on-active');
        $('.faq-item-2 span').toggleClass('focused');
    });
    $('.faq-item-3').click(function () {
        $('.faq-block-3 .faq-info p').toggleClass('on-active');
        $('.faq-item-3 span').toggleClass('focused');
    });
    $('.faq-item-4').click(function () {
        $('.faq-block-4 .faq-info p').toggleClass('on-active');
        $('.faq-item-4 span').toggleClass('focused');
    });
    $('.faq-item-5').click(function () {
        $('.faq-block-5 .faq-info p').toggleClass('on-active');
        $('.faq-item-5 span').toggleClass('focused');
    });
    $('.faq-item-6').click(function () {
        $('.faq-block-6 .faq-info p').toggleClass('on-active');
        $('.faq-item-6 span').toggleClass('focused');
    });
});
$('.feedback-carousel').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: true,
  dots: true,
  dotsClass: 'carousel-indicators',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1
      }
    }
  ]
});
