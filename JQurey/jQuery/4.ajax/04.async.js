$(function(){
	$.ajax({
		url : "../data/ajax.json",
		type : "get",
		dataType : "json",
		async : true,
		success : function(){
			$("body").append("<div>1</div>");
		}
	});
	
	$("body").append("<div>2</div>");
});