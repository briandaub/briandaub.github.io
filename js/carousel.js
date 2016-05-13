$(document).ready(function() {
    var timer = setInterval(function(){
        $('.slideshow ul').animate({marginLeft:-300},1000, function() {
            $(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},5000);
});