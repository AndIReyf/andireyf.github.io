$(function () {
  
  var mixer = mixitup('.product__inner-box');

  $(".rate-star").rateYo({
    rating: 5,
    fullStar: true,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false
  });
  
});