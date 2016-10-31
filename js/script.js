$(document).ready(function(){
	var currentYear = new Date().getFullYear();
	var releaseDate = new Date(2016, 10, 11);
	var isReleased = new Date() >=releaseDate;

	jQuery('#year').html(currentYear);

	var releaseText;

	if (isReleased) {
		releaseText = 'Out now';
	} else {
		releaseText = 'Out 11th November';
		jQuery('#released-on').hide();
	}

	jQuery('#release-text').html(releaseText);
});