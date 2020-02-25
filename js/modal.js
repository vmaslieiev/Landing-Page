$(function($) {
	$('.btn').on('click', function() {
		$('.popup-fade').fadeIn();
	})	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});