const navTrigger = $(".nav-trigger");

if (navTrigger) {
  const body = $("body");
  const ACTIVE_CLASS = "menu-fix_active";

  navTrigger.on("click", function () {
    body.toggleClass(ACTIVE_CLASS);
  });
}

//new
$(document).ready(function () {
  // Delete that line if you don't want the first Div to be displayed by default
  $(".accordion-content div:first").css("display", "block");

  //
  $(".accordion-content h3").click(function () {
    $(this).next().slideToggle(500);
    $(".accordion-content div").not($(this).next()).slideUp(500);

    // how to rotate the icon JUST h3>i
    // $("i").css({'transform':'rotate(180deg)'});
  });
});

var menu = ["HOME", "TOKENOMICS", "ROADMAP", "MOONSHEET", "INFO"];
var mySwiper = new Swiper(".swiper-container", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + menu[index] + "</li>";
    },
  },
  allowTouchMove: false, // Tắt sự kiện kéo ngang
  speed: 500,
  effect: "fade",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Bắt sự kiện cuộn chuột
var canScroll = true;
var scrollDelay = 500; // Thời gian chậm (miligiây)

window.addEventListener('wheel', function (e) {
  if (canScroll) {
    canScroll = false;
    
    setTimeout(function() {
      canScroll = true;
    }, scrollDelay);

    if (e.deltaY > 0) {
      // Cuộn xuống - chuyển đến trang trình diễn tiếp theo
      mySwiper.slideNext();
    } else {
      // Cuộn lên - chuyển đến trang trình diễn trước
      mySwiper.slidePrev();
    }
  }
});
