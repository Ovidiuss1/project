$(document).ready(function(){

	$.fn.fade = function() {
		this.fadeTo(400, 0.33 );

	};

	$.fn.fadeO = function() {
		this.fadeTo(400, 1);

	}
	
////////////////////////////////////////////////////////////////////////////////////////


	$(".reddit1").on("mouseenter", function(){
		$(this).animate({top: '-30px'},200);
		$(".twitch1, .google1").fade();
		$(".title").hide();
		$(".rtitle").css("display", "block")

	});
	$(".reddit1").on("mouseleave", function(){

		$(this).animate({top: '0px'});
		$(".twitch1, .google1").fadeO();
		$(".title").show();
		$(".rtitle").hide();

	});

	$(".twitch1").on("mouseenter", function(){
		
		$(this).animate({top: '-30px'},200);
		$(".reddit1, .google1").fade();
		$(".title").hide()
		$(".ttitle").css("display", "block");

	});
	$(".twitch1").on("mouseleave", function(){

		$(this).animate({top: '0px'});
		$(".reddit1, .google1").fadeO();
		$(".title").show();
		$(".ttitle").hide();
	});

	$(".google1").on("mouseenter", function(){
		
		$(this).animate({top: '-30px'},200);
		$(".twitch1, .reddit1").fade();
		$(".title").hide();
		$(".gtitle").css("display", "block");

	});
	$(".google1").on("mouseleave", function(){

		$(this).animate({top: '0px'});
		$(".twitch1, .reddit1").fadeO();
		$(".title").show();
		$(".gtitle").hide();

	});




});