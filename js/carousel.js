$(document).ready(function() {
    var i = 2, length = 6;
    var timer = setInterval(function(){
        $('.slideshow ul').animate({marginLeft:-300},1000, function() {
            $(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
		if(i <= length){
		    $('.slide' + i ).trigger('click');
		    i++;
		}else{
			i = 1;
		    $('.slide' + i ).trigger('click');
		    i++;
		}
	},5000);
	
	$('.slide1').on('click', function(){
	    $('.quote').addClass('active').removeClass('hidden');
	    $('.weather').addClass('hidden').removeClass('active');
	    $('.tribute').addClass('hidden').removeClass('active');
	    $('.calc').addClass('hidden').removeClass('active');
	    $('.timer').addClass('hidden').removeClass('active');
	    $('.wiki').addClass('hidden').removeClass('active');
	});
	
	$('.slide2').on('click', function(){
	    $('.quote').addClass('hidden').removeClass('active');
	    $('.weather').addClass('active').removeClass('hidden');
	    $('.tribute').addClass('hidden').removeClass('active');
	    $('.calc').addClass('hidden').removeClass('active');
	    $('.timer').addClass('hidden').removeClass('active');
	    $('.wiki').addClass('hidden').removeClass('active');
	});
	
	$('.slide3').on('click', function(){
	    $('.quote').addClass('hidden').removeClass('active');
	    $('.weather').addClass('hidden').removeClass('active');
	    $('.tribute').addClass('active').removeClass('hidden');
	    $('.calc').addClass('hidden').removeClass('active');
	    $('.timer').addClass('hidden').removeClass('active');
	    $('.wiki').addClass('hidden').removeClass('active');
	});

	$('.slide4').on('click', function(){
	    $('.quote').addClass('hidden').removeClass('active');
	    $('.weather').addClass('hidden').removeClass('active');
	    $('.tribute').addClass('hidden').removeClass('active');
	    $('.calc').addClass('active').removeClass('hidden');
	    $('.timer').addClass('hidden').removeClass('active');
	    $('.wiki').addClass('hidden').removeClass('active');
	});

	$('.slide5').on('click', function(){
	    $('.quote').addClass('hidden').removeClass('active');
	    $('.weather').addClass('hidden').removeClass('active');
	    $('.tribute').addClass('hidden').removeClass('active');
	    $('.calc').addClass('hidden').removeClass('active');
	    $('.timer').addClass('active').removeClass('hidden');
	    $('.wiki').addClass('hidden').removeClass('active');
	});

	$('.slide6').on('click', function(){
	    $('.quote').addClass('hidden').removeClass('active');
	    $('.weather').addClass('hidden').removeClass('active');
	    $('.tribute').addClass('hidden').removeClass('active');
	    $('.calc').addClass('hidden').removeClass('active');
	    $('.timer').addClass('hidden').removeClass('active');
	    $('.wiki').addClass('active').removeClass('hidden');
	});
});