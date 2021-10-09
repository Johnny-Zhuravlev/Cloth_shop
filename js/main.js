$(document).ready(function(){

    // Header navigation fixed by scroll
    const elementOffset = $('.intro').offset().top;

    $(window).scroll(function(){

        const scrolled = $(this).scrollTop();

        if (scrolled > elementOffset) {
            $('.header-top').addClass('fixed');
        } else if (scrolled < elementOffset) {
            $('.header-top').removeClass('fixed');
        }
    });



    // Show active header-nav__link when click it
    $('.header-nav__link, .burger-menu__link').click(function(){
        $(this).closest('.header-nav__link, .burger-menu__link').addClass('active').siblings().removeClass('active');
    });



    // Search popup
    $('.search').click(function(){

        $(this).toggleClass('active');
        $('.popup__wrapper').fadeIn();
        $('.popup__input').focus();

    });

    $('.popup__close').click(function(){
        $('.popup__wrapper').fadeOut();
    });

    // Search close outside modal
    $(document).mouseup(function (e) {

        const popup = $('.popup');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
            $('.popup__wrapper').fadeOut();
        }

    });


    // Burger and mobile menu
    $('.burger').click(function() {

        $(this).toggleClass('active');
        $('.burger-menu').toggleClass('active')

    });

    // Burger-menu close outside menu zone
    $(document).mouseup(function (e) {

        const popup = $('.burger-wrapper');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0) {
            $('.burger').removeClass('active');
            $('.burger-menu').removeClass('active');
        }

    });

    // Burger-menu close by click on link
    $('.burger-menu__link').click(function(){

        $('.burger').removeClass('active');
        $('.burger-menu').removeClass('active');

    });



    // Footer accordion
    const accordion = function () {
        const data = $('.accordion').attr('data-accordion');

        $('.shop').on('click', function(){
            if (data === 'close'){
                $('.links__wrapper').slideUp();
                if ($(this).hasClass('active')){
                    $(this).toggleClass('active');
                }
                else{
                    $('.shop').removeClass('active');
                    $(this).toggleClass('active');
                }
            }
            else {
                $(this).toggleClass('active');
            }
            $(this).next('.links__wrapper').not(':animated').slideToggle();
            $('.title__plus.shop').toggleClass('rotate');
        });

        $('.title__plus.shop').on('click', function(){
            $(this).toggleClass('rotate');
        });

        $('.help').on('click', function(){
            if (data === 'close'){
                $('.links__wrapper').slideUp();
                if ($(this).hasClass('active')){
                    $(this).toggleClass('active');
                }
                else{
                    $('.help').removeClass('active');
                    $(this).toggleClass('active');
                }
            }
            else {
                $(this).toggleClass('active');
            }
            $(this).next('.links__wrapper').not(':animated').slideToggle();
            $('.title__plus.help').toggleClass('rotate');
        });

        $('.title__plus.help').on('click', function(){
            $(this).toggleClass('rotate');
        });

        $('.about').on('click', function(){

            if (data === 'close'){
                $('.links__wrapper').slideUp();
                if ($(this).hasClass('active')){
                    $(this).toggleClass('active');
                }
                else{
                    $('.about').removeClass('active');
                    $(this).toggleClass('active');
                }
            }
            else {
                $(this).toggleClass('active');
            }
            $(this).next('.links__wrapper').not(':animated').slideToggle();
            $('.title__plus.about').toggleClass('rotate');
        });

        $('.title__plus.about').on('click', function(){
            $(this).toggleClass('rotate');
        });

    }

    accordion();

});