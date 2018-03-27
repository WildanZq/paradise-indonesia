$('#nav-button').click(() => {
	if ($('#nav').hasClass('active')) {
		$('#nav').removeClass('active');
	} else {
		$('#nav').addClass('active');
	}
});
$('.love').click((e) => {
	if ($(e.target).hasClass('active')) {
		$(e.target).next()[0].innerHTML = parseInt($(e.target).next()[0].innerHTML) - 1;
		$(e.target).attr('src','assets/icon/love-empty.png');
		$(e.target).removeClass('active');
	} else {
		$(e.target).next()[0].innerHTML = parseInt($(e.target).next()[0].innerHTML) + 1;
		$(e.target).attr('src','assets/icon/love-full.png');
		$(e.target).addClass('active');
	}
});