$(document).ready(function() {
	$('#gallery').backstretch([
		"/assets/images/festival2.jpg",
		"/assets/images/prix.jpg",
		"/assets/images/sota.jpg",
		"/assets/images/festival.jpg"
	], {duration: 3000, fade: 750});
	$("table").addClass("table");
	$("table").addClass("table-hover");
	$("th:first-child").css("width", "30%");
});
