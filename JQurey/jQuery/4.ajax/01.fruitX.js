var showFruits = function(){
	var table = $("tbody");
	
	$("button").bind("click", function(){
		$.ajax({
			url: "../data/fruits.xml",
			success: function(fruits){
				var fruits = $(fruits).find("fruit");
				fruits.each(function(row){
					var fruit = $(this);
					fruit.children().each(function(column){
						var data = $(this).text();
						var tr = table.find("tr").eq(row);
						var td = tr.find("td").eq(column);
						td.text(data);
					});
				});
			},
			error: function(a,b,msg){
				$("body").append($("<p>error:"+msg+"</p>").css("color","red"));
			}
		});
	});
}

$(showFruits);