//  invoke animation function  
new WOW().init();


// swiper

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

    autoplay: {
        delay: 5000,
    },
});

