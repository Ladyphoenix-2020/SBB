$(function(){

$('.slider_inner').slick({
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	infinite: false
	
});

$('.header_btn-menu').on('click', function(){
	$('.menu ul').slideToggle();
})

});


/*фиксация и анимация шапки при скроле*/
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    if(window.pageYOffset > 300){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}