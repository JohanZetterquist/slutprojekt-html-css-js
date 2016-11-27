//Responsive menu
function menuToggle() {
	var x = document.getElementById("myTopnav");

	if (x.className === "topnav-nav") {
		x.className += " responsive";
	}

	else {
		x.className = "topnav-nav";
	}
}

$(document).ready(function(){

	//Carousel
	function imageSlider(){

	var currentImage = $(".img-shown");
	var nextImage = currentImage.next();
	var x = nextImage.length;
	if (x == 0)
	{
		nextImage = $(".slider-image img").first();
	}

	currentImage.removeClass("img-shown").addClass("img-hidden").css("z-index", -10);
	nextImage.addClass("img-shown").removeClass("img-hidden").css("z-index", 10);
	$(".slider img").not([currentImage, nextImage]).css("z-index", 1);
	};

	//Autoplay on image slider
	setInterval(imageSlider, 4000);

	//Slidetoggle 

	 $(".btn-dropdown").click(function(){
	 	$(".responsive-iframe").slideToggle("slow");
	 })
});