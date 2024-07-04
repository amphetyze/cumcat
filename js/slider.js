const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    loop: true,
    centeredSlider: true,
    sliderPerView: 3,
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});