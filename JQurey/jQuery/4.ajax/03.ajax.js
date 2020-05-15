$(function(){
	//Using the core $.ajax() method
	$.ajax({
		//the URL for the request
		url: "../data/ajax.json",
		
		//the data to send
		data:{
			id: 123
		},
		
		// whether this is a POST or GET request
		type: "get",
		
		// the type of data we expext back
		dataType : "json",
		
		// code to run if the request secceeds;
		// the response is passed to the function
		success: function(data, status, xhr){
			$("<h3>").text(data.title).appendTo("body");
			$("<div>").html(data.content).appendTo("body");
			console.log("Success, status: " + status);
			console.dir(xhr);
		},
		
		// code to run if the request fails; the raw request and
		// status codes are passes to the function
		error: function(xhr, status, msg){
			console.log("Error: "+ msg);
			console.log("Status: "+status);
			console.dir(xhr);
		},
		
		// code to run regardless of success or failure
		complete:function(xhr, status){
			console.log("Complete, status: " + status);
			console.dir(xhr);
		}
	});
});