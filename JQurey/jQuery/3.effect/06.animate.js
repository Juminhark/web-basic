//opacity : 투명도

var box = $("#box");

$("input[class='big']").bind("click",function(){
	box.animate({
		width: 400,
		height: 400,
		opacity: 1
	}, 600);
});

$("input[class='small']").bind("click",function(){
	box.animate({
		width: 40,
		height: 40,
		opacity: 0.2
	}, 600);
});

$("input[class='left']").bind("click",function(){
	box.animate({
		left : 0
	}, 600);
});

$("input[class='right']").bind("click",function(){
	box.animate({
		left : "90%"
	}, 600);
});