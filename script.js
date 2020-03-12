$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
});
$('.button').click(function(){
	$('.listpage').fadeIn('slow');
	$('.envelope').hide();
	$('.listpage').css('display','flex');
});