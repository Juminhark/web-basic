var box = $("#box");

$(".open").bind("click", function(){
	box.animate({
		height : 300
	}, {
		duration : 1000
	});
});

$(".close").bind("click", function(){
	box.animate({
		height : 0
	}, {
		duration : 1000
	});
});

$(".stop").bind("click", function(){
	box.stop();
});
