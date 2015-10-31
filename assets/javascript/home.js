$(document).ready(function() {
	$('#gallery').backstretch(shuffle([
		"/assets/images/singersgallery/singers.jpg",
		"/assets/images/singersgallery/singers2.jpg",
		"/assets/images/singersgallery/singers3.jpg",
		"/assets/images/singersgallery/singers4.jpg",
		"/assets/images/singersgallery/singers5.jpg",
		"/assets/images/singersgallery/singers6.jpg",
		"/assets/images/singersgallery/singers7.jpg",
		"/assets/images/singersgallery/singers8.jpg",
		"/assets/images/singersgallery/singers9.jpg",
		"/assets/images/singersgallery/singers10.jpg"
	]), {duration: 3000, fade: 750});
	$("table").addClass("table");
	$("table").addClass("table-hover");
	$("th:first-child").css("width", "30%");
});
