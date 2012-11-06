// body slider


var slider;
/* moved to html
/*
var images = [
	"_img/sp_images/sp_img_1.jpg",
	"_img/sp_images/sp_img_2.jpg"
];
*/
var index = 0;
var transitionSpeed = 1000;
var imageIntervals = 10000;
var startIntervals;
var intervalSetTime;
var contentOpen = false;

$(document).ready(function(){
	
	slider = $('#sliderContainer').bxSlider({
		mode: 'fade',
		controls: false,
		pause: imageIntervals
	});
	
	for (i=0;i<=images.length - 1;i++){
		$('#sliderThumbs').append('<a href="javascript:goToContent('+ i +')"><img src="'+ images[i] +'?size=thumb" alt="Image '+ i +'" /></a>');
	}
	
	$(function() {
		
		$.preload(images, {
			init: function(loaded, total) {
				$("#slideLoading").html("<img src='img/load.gif' />");	
			},
			
			loaded_all: function(loaded, total) { 
				$('#slideLoading').fadeOut('slow', function() {
					$('#sliderThumbs').fadeIn('slow');
			 
					$.backstretch(images[index], {speed: transitionSpeed});
	
					startIntervals = function (){
						intervalSetTime = setInterval(function() {
						index = (index >= images.length - 1) ? 0 : index + 1;
						$.backstretch(images[index]);
						slider.goToNextSlide()
					}, imageIntervals)};
					
					startIntervals();					
				});
			}
		});
	});
});

function goToContent(slideNum){
	clearInterval(intervalSetTime);
	index = slideNum;
	$.backstretch(images[index]);
	slider.goToSlide(slideNum);
	if (contentOpen == false){
		startIntervals();
	}
};