$(document).ready(function () {
  var Lowl = $("#owl-demo");
  Lowl.owlCarousel({
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [991, 2], // 3 items betweem 900px and 601px
    itemsTablet: [600, 2], //2 items between 600 and 0;
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    dots: false,
    stagePadding: Number, //stagePadding: 50,
    // loop: true,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    margin: -120,
  });

  $(".next").click(function () {
    Lowl.trigger("owl.next");
  });

  $(".prev").click(function () {
    Lowl.trigger("owl.prev");
  });

    Lowl.trigger("owl.play", false);
});