$("input").bind("click", function(){
	$("#redBox").css('left', 10).delay(100).animate({
		left : '90%'
	});
	
	$("#greenBox").css('left', 10).delay(200).animate({
		left : '90%'
	});
	
	$("#blueBox").css('left', 10).delay(300).animate({
		left : '90%'
	});
	
	$("#yellowBox").css('left', 10).delay(400).animate({
		left : '90%'
	});
});