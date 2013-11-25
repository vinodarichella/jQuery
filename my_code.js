$(document).ready(function() {
	//hide all p tags
	$("p").hide();

	//Toggle all h1 tags
	$("h1").click(function() {
		$(this).next().slideToggle(300);
	});
});