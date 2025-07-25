$(function () {
   // ?===================================================================


   // ?=====================================================================

   $('.custommers__slider__list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      draggable: false,
      dots: false,
      arrows: true,
      prevArrow: $('.custommers__slider-prev'),
      nextArrow: $('.custommers__slider-next'),
      responsive: [
         {
            breakpoint: 1450,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },

         {
            breakpoint: 400,
            settings: {
               slidesToShow: 1
            }
         }
      ]

   });

   $('.arrivalies__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      draggable: true,
      dots: false,
      arrows: false,
      responsive: [
         {
            breakpoint: 1450,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },

         {
            breakpoint: 400,
            settings: {
               slidesToShow: 1
            }
         },
         {
            breakpoint: 99999, // >1450px
            settings: "unslick" // <-- ВОТ ЗДЕСЬ
         }
      ]

   });

   $('.selling__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      draggable: true,
      dots: false,
      arrows: false,
      responsive: [
         {
            breakpoint: 1450,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },

         {
            breakpoint: 400,
            settings: {
               slidesToShow: 1
            }
         },
         {
            breakpoint: 99999, // >1450px
            settings: "unslick" // <-- ВОТ ЗДЕСЬ
         }
      ]

   });

   $(window).on('resize', function () {
      $('.arrivalies__slider, .selling__slider').slick('setPosition');
   });

   // burger btn open =========================================

   $('.burger').on('click', function (e) {
      e.preventDefault();

      const isOpen = $('.header__nav__menu__list').hasClass('header__nav__menu__list--open');

      if (!isOpen) {
         // ОТКРЫТЬ меню и overlay
         $('.header__nav__menu__list').addClass('header__nav__menu__list--open');
         $('.overlay').addClass('overlay--show');
         $('body').css('overflow', 'hidden');
      } else {
         // ЗАКРЫТЬ меню и overlay
         $('.header__nav__menu__list').removeClass('header__nav__menu__list--open');
         $('.overlay').removeClass('overlay--show');
         $('body').css('overflow', '');
      }
   });

   // Закрыть при клике на overlay
   $('.overlay').on('click', function (e) {
      e.preventDefault();
      $('.header__nav__menu__list').removeClass('header__nav__menu__list--open');
      $('.overlay').removeClass('overlay--show');
      $('body').css('overflow', '');
   });
});


