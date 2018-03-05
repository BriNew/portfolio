$(document).ready(function() {

	$('a[href="#intro_nav"]').click(function(){
		$('#about').hide();
		$('#projects').hide();
		$('#intro').fadeIn();
		$('#about_title').hide();
	})

	$('a[href="#projects_nav"]').click(function(){
		$('#projects').fadeIn();
		$('#about').hide();
		$('#intro').hide();
		$('#about_title').hide();
	})

	$('a[href="#about_nav"]').click(function(){
		$('#about').fadeIn();
		$('#projects').hide();
		$('#intro').hide();
		$('#about_title').fadeIn();
	})

	$('a[href="#intro_nav"]').on({
		click: function(){
			$(this).css('font-size', '20px');
			$('.projects_nav').css('font-size', '16px');
			$('.about_nav').css('font-size', '16px');
		}
	})

	$('a[href="#projects_nav"]').on({
		click: function(){
			$(this).css('font-size', '20px');
			$('.about_nav').css('font-size', '16px');
			$('.name_nav').css('font-size', '16px');
		}
	})

	$('a[href="#about_nav"]').on({
		click: function(){
			$(this).css('font-size', '20px');
			$('.projects_nav').css('font-size', '16px');
			$('.name_nav').css('font-size', '16px');
		}
	})

})