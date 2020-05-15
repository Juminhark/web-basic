var box = $(".box");

$("#wrapper").on({
	mouseover : function(){
		var box = $(this);
		box.removeClass().addClass("box over");
		box.find(">p").text("mouseover");
	},
	mouseout : function(){
		var box = $(this);
		box.removeClass().addClass("box out");
		box.find(">p").text("mouseover");
	},
	click : function() {
		var box = $(this);
		box.removeClass().addClass("box click");
		box.find(">p").text("click");
	}
}, ".box");

$("#nav>:input:eq(0)").bind("click", function(){
	$("#wrapper").append(box.eq(0).clone());
});

$("#nav>:input:eq(1)").bind("click", function(){
	$("#wrapper").off("mouseover");
});