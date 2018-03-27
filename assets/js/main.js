$('#nav-button').click(() => {
	if ($('#nav').hasClass('active')) {
		$('#nav').removeClass('active');
	} else {
		$('#nav').addClass('active');
	}
});