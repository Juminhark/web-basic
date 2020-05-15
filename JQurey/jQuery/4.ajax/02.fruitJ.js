var showFruits = function(){
	var table = $("tbody");
	
	$("button").bind("click", function(){
		$.ajax({
			url: "../data/fruits.json",
			seccess: function(data){
				var fruits = data.fruits;
				for(var row in fruits){
					var fruit = fruits[row];
					var column = 0;
					for(var prop in fruit) {
						var text = fruit[prop];
						var tr = table.find("tr").eq(row);
						var td = tr.find("td").eq(column++);
						td.text(text);
					}
				}
			},
			error: function(a,b,msg){
				$("body").append($("<p>error:"+msg+"</p>").css("color","red"));
			}
		});
	});
}

$(showFruits);