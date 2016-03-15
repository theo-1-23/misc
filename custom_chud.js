$(document).ready(function() {

	/*
	* Since you are using the same functions, we could combine them into an array and call one function to fire the event
	*/
	var array_names = [ 'gradus', 'nove', 'go2gether', 'vsma', 'engage', 'fortune', 'logo', 'cards', 'misc', 'selfie' ];

	/*
	* Loop through with the names and for each element,  on hover, change image
	*/
	for (var i = 0; i < array_names.length; i++) {
		$('#thumb-' + array_names[i]).on('mouseenter mouseleave', function() { 
			$(this).siblings().slideToggle(500);
		});
	} 
});
