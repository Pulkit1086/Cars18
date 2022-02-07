$(document).ready(function () {
  $(".carousell").slick({
    slidesToShow: 5,
    dots: false,
    centerMode: false,
  });
  $(".slick-prev").html("&larr;");
  $(".slick-next").html("&rarr;");
});
