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

    //sort section
    
    
    // $( ".sortTags button" ).toggle(function() {
    //     // alert( "First handler for .toggle() called." );
    //     $(this).css({
    //         'background-color': ''
    //     });
    // }, 
    // // function() {
    // //     $(this).css({
    // //         'background-color': '#434343'
    // //     });
    // });

    // $( ".sortTags button" ).toggle(
    //     function() {
    //         $( this ).addClass( "selected" );
    //     }, function() {
    //         $( this ).removeClass( "selected" );
    //     }
    // );
    $('.sortTags').on('click', 'button', function(){
        console.log($(this));
        console.log('hi');
        $(this).css({
            'background-color' : '#74D1EA',
            'color' : 'white',
        });
    });
    
});