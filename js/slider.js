const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 5,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1.3,
        slideShadows: false,
    },
});
