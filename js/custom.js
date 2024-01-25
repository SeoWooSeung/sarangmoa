
$(function(){
    
feather.replace();

    $('.main_visual .main_visual_slide').on('init afterChange',function () {
        const current = $('.main_visual .main_visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

$('.main_visual .main_visual_slide').slick({
    arrows:false,
    fade:true,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    pauseOnActive:false,
});

$('.main_visual .arrows .left').on('click',function(){
    $('.main_visual .main_visual_slide').slick('slickPrev');
})

$('.main_visual .arrows .right').on('click',function(){
    $('.main_visual .main_visual_slide').slick('slickNext');
})


$('.main_slide').slick({
    arrows:false,
    autoplay:true,
    fade:true,
// slidesToShow:5,
});

$('.main_banner_sliede').slick({
slidesToShow: 3,
arrows:false,
responsive:[
    {
        breakpoint: 1200,
        settings : {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
    } ,
    {
        breakpoint: 769,
        settings : {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }            
],
});

$('.banner_slide .main_banner_sliede_arrows .left').on('click',function(){
    $('.banner_slide .main_banner_sliede').slick('slickPrev');
})

$('.banner_slide .main_banner_sliede_arrows .right').on('click',function(){
    $('.banner_slide .main_banner_sliede').slick('slickNext');
})

$('.mbt').on("click", function () {
    $('.gnb').toggleClass('on');
    $('.h1').toggleClass('on');
    $('.header').toggleClass('on');
    $('.icon').toggleClass('on');
})


$('.main_visual .wheel').on('click',function(e){
e.preventDefault(); //a태그 때문에 화면 깜빡임 없애기//
// console.log($(this.hash).offset().top);
let H = $(this.hash).offset().top;
$('html,body').animate({scrollTop: H}, 800 )
})


$('.company .pf_left_slide').slick({
    arrows: false,
    fade: true,

    asNavFor: '.company .pf_right_slide'
});

$('.company .pf_right_slide').slick({
    arrows: false,
    slidesToShow: 4,

    asNavFor: '.company .pf_left_slide'
});

$('.company .bt_left').on('click', function () {
    $('.company .pf_left_slide').slick('slickPrev');
});

$('.company .bt_right').on('click', function () {
    $('.company .pf_right_slide').slick('slickNext');
});

}); 