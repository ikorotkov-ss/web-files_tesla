// функция отвечает за работу слайдера
$(function() {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  });

  //функция добавляет класс для menu по клику
  $(".header-btn").on("click", function() {
    $(".menu").addClass("active");
  });

  //функция добавляет класс для close-btn по клику
  $(".close-btn").on("click", function() {
    $(".menu").removeClass("active");
  });
});
