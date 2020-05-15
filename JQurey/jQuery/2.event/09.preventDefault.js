$("#link").bind("click", function(event){
	event.preventDefault();
	$("body").append("<h3>stop page link</h3>");
});