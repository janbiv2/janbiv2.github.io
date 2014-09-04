$(document).ready(function() {
	$('.anchorLink2').click(function(event) {
//		alert("skills button clicked");
		event.stopPropagation();
		var idTo = $(this).attr('href');
//		alert(idTo);
		var Position = $('[id="' + idTo + '"]').offset().top;
//		alert(Position);
		$('html, body').animate({ scrollTo: Postion }, 'slow');
		return false;
	});
});

// Hides the collapsible menu after making a selection
$(document).on('click','.navbar-collapse.in', function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
