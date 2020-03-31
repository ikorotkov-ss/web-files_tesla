// функция отвечает за работу слайдера
$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true
    });
});