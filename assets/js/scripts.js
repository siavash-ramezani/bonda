// navbar bg
$(window).scroll(function() {
  var height = $(window).scrollTop();

  if (height > 20) {
    $(".navbar").css("background-color", "rgba(255,255,255,0.95)");
    $(".navbar").css("padding", "15px");
    $(".navbar").css("box-shadow", "0 2px 10px rgba(0,0,0,0.4)");
    $(".menu-item").css("color", "rgb(86, 86, 86)");
  }
  if (height < 20) {
    $(".navbar").css("background-color", "transparent");
    $(".navbar").css("padding", ".5rem 1rem");
    $(".navbar").css("box-shadow", "none");
    $(".menu-item").css("color", "white");
  }
});

// image aspect ratio
var cw = $(".top-card-image-wrapper").width();
$(".top-card-image-wrapper").css({ height: cw + "px" });

let firstCard = $(".blog-card:nth-child(1)");
let secondCard = $(".blog-card:nth-child(2)");
let thirdCard = $(".blog-card:nth-child(3)");
var width = $(window).width();
if (width > 817) {
  secondCard.children(".bg-white").addClass("opacity-6");
  secondCard.css("margin-left", "-15%");
  $(".blog-card:nth-child(1)")
    .children(".bg-white")
    .addClass("opacity-9");
  firstCard.css("margin-left", "-15%");
  thirdCard.children(".bg-white").addClass("zindex--1");

  secondCard.mouseover(function() {
    firstCard.children(".bg-white").addClass("opacity-6");
    firstCard.children(".bg-white").removeClass("opacity-9");
    thirdCard.children(".bg-white").addClass("opacity-6");
    thirdCard.addClass("zindex-1");
    secondCard.children(".bg-white").removeClass("opacity-6");
    secondCard.addClass("zindex-2");
    thirdCard.children(".bg-white").removeClass("zindex--1");
    secondCard.children(".bg-white").addClass("zindex--1");
  });
  secondCard.mouseleave(function() {
    firstCard.children(".bg-white").removeClass("opacity-6");
    firstCard.children(".bg-white").addClass("opacity-9");
    thirdCard.children(".bg-white").removeClass("opacity-6");
    thirdCard.removeClass("zindex-1");
    secondCard.children(".bg-white").addClass("opacity-6");
    secondCard.removeClass("zindex-2");
    thirdCard.children(".bg-white").addClass("zindex--1");
    secondCard.children(".bg-white").removeClass("zindex--1");
  });
  firstCard.mouseover(function() {
    firstCard.addClass("zindex-3");
    firstCard.children(".bg-white").removeClass("opacity-9");
    secondCard.addClass("zindex-2");
    secondCard.children(".bg-white").addClass("opacity-6");
    thirdCard.addClass("zindex-1");
    thirdCard.children(".bg-white").addClass("opacity-9");
    secondCard.children(".bg-white").removeClass("zindex--1");
    thirdCard.children(".bg-white").removeClass("zindex--1");
    firstCard.children(".bg-white").addClass("zindex--1");
  });
  firstCard.mouseleave(function() {
    firstCard.removeClass("zindex-3");
    firstCard.children(".bg-white").addClass("opacity-9");
    secondCard.removeClass("zindex-2");
    thirdCard.removeClass("zindex-1");
    thirdCard.children(".bg-white").removeClass("opacity-9");
    firstCard.children(".bg-white").removeClass("zindex--1");
    thirdCard.children(".bg-white").addClass("zindex--1");
  });
}
