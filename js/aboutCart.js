const countid = document.getElementById('one__more__count');
const plusid = document.getElementById('one__more__plus__count');
const minusid = document.getElementById('one__more__minus__count');

let count = 1;

function updateCount() {
   countid.textContent = count;

}

plusid.addEventListener('click', () => {
   count++;
   updateCount();
});

minusid.addEventListener('click', () => {
   if (count > 1) {
      count--;
      updateCount();
   }
});


const colorCircles = document.querySelectorAll('.selector__color__circle');

colorCircles.forEach(circle => {
   circle.addEventListener('click', () => {
      colorCircles.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
   });
});

const chooseColor = document.querySelectorAll('.size__choose');

chooseColor.forEach(color => {
   color.addEventListener('click', () => {
      chooseColor.forEach(c => c.classList.remove('active'));
      color.classList.add('active');
   });
});

const ratingItems = document.querySelectorAll('.rating__header__item');

ratingItems.forEach(item => {
   item.addEventListener('click', () => {
      ratingItems.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
   });
});

const btn = document.querySelectorAll('.one__more__btn');

btn.forEach(iconbtn => {
   iconbtn.addEventListener('click', () => {
      btn.forEach(iconbtn => iconbtn.classList.remove('active'));
      iconbtn.classList.add('active');
   });
});

const rating = document.querySelectorAll('.rating__active');

rating.forEach(ratingbtn => {
   ratingbtn.addEventListener('click', () => {
      rating.forEach(ratingbtn => ratingbtn.classList.remove('active'));
      ratingbtn.classList.add('active');
   });
});


$(function () {
   $('.might__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
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
         }
      ]

   });
})