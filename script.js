$(document).ready(function() {

	$("#main-nav-x").click(function() {
		$("#main-nav-x").hide();
		$(".main-nav-container").fadeOut();
		$("#main-nav-icon").show();
	})

	$("#main-nav-icon").click(function() {
		$("#main-nav-icon").hide();
		$(".main-nav-container").fadeIn();
		$("#main-nav-x").show();
	})

	$("#arrow-up").click(function () {
		window.scrollTo(0, 0);
	})



})