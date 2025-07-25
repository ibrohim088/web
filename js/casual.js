$(function () {
   const minRange = $("#min-range");
   const maxRange = $("#max-range");
   const minPrice = $("#min-price");
   const maxPrice = $("#max-price");
   const sliderTrack = $(".slider-track");

   function updateSlider() {
      let minVal = parseInt(minRange.val());
      let maxVal = parseInt(maxRange.val());

      if (minVal > maxVal - 10) {
         minVal = maxVal - 10;
         minRange.val(minVal);
      }

      if (maxVal < minVal + 10) {
         maxVal = minVal + 10;
         maxRange.val(maxVal);
      }

      minPrice.text(`$${minVal}`);
      maxPrice.text(`$${maxVal}`);

      const percent1 = (minVal / 500) * 100;
      const percent2 = (maxVal / 500) * 100;

      sliderTrack.css({
         background: `linear-gradient(to right, #ddd ${percent1}%, black ${percent1}%, black ${percent2}%, #ddd ${percent2}%)`
      });
   }

   minRange.on("input", updateSlider);
   maxRange.on("input", updateSlider);

   updateSlider();

});

// --------------------------------
// set color
// --------------------------------
const vividColor = document.querySelectorAll('.vivid__circle');

vividColor.forEach(vivid => {
   vivid.addEventListener('click', () => {
      vividColor.forEach(vivid => vivid.classList.remove('active__vivid'));
      vivid.classList.add('active__vivid');
   });
});



// -------------------------------
// set size
// -------------------------------


const sizeButtons = document.querySelectorAll('.size__choose');

sizeButtons.forEach(button => {
   button.addEventListener('click', () => {
      sizeButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
   });
});





// accordion sidebar -------------------------------------------------------
$('.acc__dec__link').on('click', function (e) {
   if (!$(e.target).closest('.acc__dec__info').length) {
      // раскрываем/закрываем блок
      if ($(this).hasClass('acc__dec__link--active')) {
         $(this).removeClass('acc__dec__link--active');
         $(this).next('.acc__dec__info').slideUp();
      } else {
         $('.acc__dec__link').removeClass('acc__dec__link--active');
         $('.acc__dec__info').slideUp();

         $(this).addClass('acc__dec__link--active');
         $(this).next('.acc__dec__info').slideDown();
      }
   }

})




// filter btn open =====================================================================

$('.open__sidebar__btn, .filter__btn').on('click', function (e) {
   e.preventDefault();

   const isOpen = $('.sidebar').hasClass('sidebar--open');

   if (!isOpen) {
      $('.sidebar').addClass('sidebar--open');
      $('.overlay').addClass('overlay--show');
      $('body').css('overflow', 'hidden');
   } else {
      $('.sidebar').removeClass('sidebar--open');
      $('.overlay').removeClass('overlay--show');
      $('body').css('overflow', '');
   }
});

// Закрытие по клику на overlay
$('.overlay').on('click', function (e) {
   e.preventDefault();
   $('.sidebar').removeClass('sidebar--open');
   $('.overlay').removeClass('overlay--show');
   $('body').css('overflow', '');
});






// ? pagination activ funciton and adaptive for mobile
// ? pagination activ funciton and adaptive for mobile


// page arrows -----------------------------------------------
const pageArrowBtn = document.querySelectorAll('.page__arrows');

pageArrowBtn.forEach(arrows => {
   arrows.addEventListener('click', () => {
      pageArrowBtn.forEach(arrows => arrows.classList.remove('active__arrows'));
      arrows.classList.add('active__arrows');
   });
});



// dots arrows ------------------------------------------------
const dotItems = document.querySelectorAll('.dots__page__item');

dotItems.forEach(item => {
   item.addEventListener('click', () => {
      dotItems.forEach(el => el.classList.remove('dots__arrows'));
      item.classList.add('dots__arrows');
   });
});



function adjustPaginationForMobile() {
   const windowWidth = $(window).width();

   const $items = $('.dots__page__item');
   const $active = $('.dots__page__item.dots__arrows');
   const activeIndex = $items.index($active);

   if (windowWidth <= 800) {
      $items.removeClass('show');
      $items.each(function (index) {
         if (Math.abs(index - activeIndex) <= 1) {
            $(this).addClass('show');
         }
      });
   } else {
      $items.addClass('show');
   }
}

$(document).ready(adjustPaginationForMobile);
$(window).on('resize', adjustPaginationForMobile);