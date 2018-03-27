$('#nav-button').click(() => {
	if ($('#nav').hasClass('active')) {
		$('#nav').removeClass('active');
	} else {
		$('#nav').addClass('active');
	}
});
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        if ($('#nav').hasClass('active')) {
			$('#nav').removeClass('active');
		}
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
$('.btn-search').click(() => {
	window.location.href = "search.html";
});