var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});


$(window).on('load', function () {
  // Preloader
  $('.loader').fadeOut();
  $('.loader-mask').delay(350).fadeOut('slow');
});


// wow js
new WOW().init();


// Get the button
var backButton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
backButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


function carouselHeight() {
  var maxHeight = $('.carousel-focus-item:nth-of-type(2)').outerHeight()
  $('.carousel-focus-inner').css('height', maxHeight);
}

$(document).ready(function () {
  carouselHeight();
})

$(window).resize(function () {
  carouselHeight();
});

function changeSlide(index, step = 'next') {
  var total = $('.carousel-focus-item').length;
  var temp = step == 'next' ? (index + 1) : (index - 1);
  if (temp < 1) {
    temp = total;
  }

  if (temp > total) {
    temp = 1;
  }

  $('.carousel-focus-item').removeClass('active').hide();
  $('.carousel-focus-item:nth-of-type(' + temp + ')').addClass('active').show();
}

$(document).on('click', '.carousel-focus-controls > .prev', function () {
  var width = $(document).outerWidth();
  if (width <= 767) {
    var activeItem = $('.carousel-focus-item.active');
    var index = activeItem.index() + 1;

    changeSlide(index, 'prev');
  } else {
    $(this).closest('.carousel-focus-inner').find('.carousel-focus-item').first().hide().appendTo('.carousel-focus-items').show();
    $('.carousel-focus-item iframe').detach();
  }

  // getThumbnail()
});

$(document).on('click', '.carousel-focus-controls > .next', function () {
  var width = $(document).outerWidth();
  if (width <= 767) {
    var activeItem = $('.carousel-focus-item.active');
    var index = activeItem.index() + 1;

    changeSlide(index);
  } else {
    $(this).closest('.carousel-focus-inner').find('.carousel-focus-item').last().hide().prependTo('.carousel-focus-items').show();
    $('.carousel-focus-item iframe').detach();
  }
  // getThumbnail()
});

$(document).on('click', '.carousel-focus-item:nth-of-type(1) img', function () {
  $(this).closest('.carousel-focus-item ').insertAfter('.carousel-focus-item:nth-of-type(2)');
});

$(document).on('click', '.carousel-focus-item:nth-of-type(3) img', function () {
  $(this).closest('.carousel-focus-item ').insertBefore('.carousel-focus-item:nth-of-type(2)');
});

// comingsoon page countdown js
(function () {
  if (document.getElementById("days") !== null) {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = '2024',
      dayMonth = "09/14/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        let days = Math.floor(distance / (day));
        let hours = Math.floor((distance % (day)) / (hour));
        let minutes = Math.floor((distance % (hour)) / (minute));
        let seconds = Math.floor((distance % (minute)) / second);

        document.getElementById("days").innerText = days,
          document.getElementById("hours").innerText = hours,
          document.getElementById("minutes").innerText = minutes,
          document.getElementById("seconds").innerText = seconds;

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);
          var items = document.querySelectorAll(".compaign_countdown");
          for (var i = 0; i <= items.length; i++) {
            if (typeof items[i] !== 'undefined') {
              items[i].style.display = "none";
            }
          }
        }
        //seconds
      }, 0)
  }
}());

$(document).ready(function () {
  var owl = $('.testimonial-review-con .owl-carousel');
  owl.owlCarousel({
    margin: 30,
    nav: false,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4500,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  })
})