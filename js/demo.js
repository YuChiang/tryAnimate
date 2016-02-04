$(function(){
//	 預設的透明度值
	var _opacity = 0.3;
 
//	 讓 .black-div img 的透明度為預設的透明度值
	$('.black-div').css('opacity', _opacity);
});


$(document).ready(function(){
    $('ul').on('mouseenter', 'li', function(){
         $(this).closest('.project').find('a').slideToggle();
    });
    $('ul').on('mouseleave', 'li', function(){
         $(this).closest('.project').find('a').slideToggle();
    });
});