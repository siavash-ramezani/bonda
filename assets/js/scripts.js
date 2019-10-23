// navbar bg
$(window).scroll(function() {
  var height = $(window).scrollTop();

  if (height > 20) {
    $(".navbar").css("background-color", "white");
    $(".navbar").css("padding", "15px");
    $(".navbar").css("box-shadow", "0 2px 10px rgba(0,0,0,0.4)");
    $(".menu-item").css("color", "black");
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
