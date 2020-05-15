var box = $("#box");

$(".left").bind("click", function(){
	box.animate({
		left : 50
	}, {
		duration : 500,
		easing : "swing",
		complete : function() {
			console.log("left");
			console.log(this);
		}
	});
});

$(".right").bind("click", function(){
	var properties = {
		left : 500
	};
	var options = {
		duration : 400,
		easing : "swing",
		complete : onComplete		
	};
	
	box.animate(properties, options);
});

function onComplete() {
	console.log("right");
	console.log($(this));
}