$("#target").bind("click", function(event){
	event.stopPropagation();
	$(this).css("background-color", "black");
});

$("#wrapper").bind("click", function(){
	$("body").append("<h3>stop page link </h3>");
});