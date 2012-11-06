// Web Media website scripts

$(document).ready(function() {
	
	/* 
	page height */
	var pageHeight = $(window).height();
	$('.page, .sliderPage').height(pageHeight);
	$('.page.lastPage').height(pageHeight-340);
	
	
	/* 
	rolling pages function
	http://www.insitedesignlab.com/how-to-make-a-single-page-website/ */
	function filterPath(string) {
	return string
	  .replace(/^\//,'')
	  .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
	  .replace(/\/$/,'');
	}
	$('a[href*=#]').each(function() {
		if ( filterPath(location.pathname) == filterPath(this.pathname)
		&& location.hostname == this.hostname
		&& this.hash.replace(/#/,'') ) {
		  var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
		  var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
		   if ($target) {
			 var targetOffset = $target.offset().top-140;
			 $(this).click(function() {
			   $('html, body').animate({scrollTop: targetOffset}, 400);
			   var d = document.createElement("div");
					d.style.height = "101%";
					d.style.overflow = "hidden";
					document.body.appendChild(d);
					window.scrollTo(0,scrollTo);
					setTimeout(function() {
					d.parentNode.removeChild(d);
				}, 10);
			   return false;
			 });
		  }
		}
	});
  

	/* 
	form fields hints function */
	jQuery.fn.hint = function (blurClass) {
	  if (!blurClass) { 
		blurClass = 'blur';
	  }
	  return this.each(function () {
		var $input = jQuery(this),
		title = $input.attr('title'),
		$form = jQuery(this.form),
		$win = jQuery(window);
		function remove() {
		  if ($input.val() === title && $input.hasClass(blurClass)) {
			$input.val('').removeClass(blurClass);
		  }
		}
		if (title) { 
		  $input.blur(function () {
			if (this.value === '') {
			  $input.val(title).addClass(blurClass);
			}
		  }).focus(remove).blur(); 
	
		  $form.submit(remove);
		  $win.unload(remove); 
		}
	  });
	};
	// set hints
	$('input[title!=""]').hint();
	$('textarea[title!=""]').hint();
	
	
	/*
	accordion */
	$('.accordion .head').click(function(e){
		var allPanels = $('.accordion .content').not(':animated').slideUp();
		e.preventDefault();
		$(this).closest('li').find('.content').not(':animated').slideToggle();
	});
	
  
});