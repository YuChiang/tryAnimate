$(function(){
//	 預設的透明度值
	var _opacity = 0.3;
 
//	 讓 .black-div img 的透明度為預設的透明度值
	$('.black-div').css('opacity', _opacity);
});


$(document).ready(function(){
    $('.project').on('mouseenter', 'img', function(){
         $(this).closest('.project').find('a').slideToggle();
    });
    $('.project').on('mouseleave', 'img', function(){
         $(this).closest('.project').find('a').slideToggle();
    });
});