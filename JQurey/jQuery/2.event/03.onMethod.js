var box = $(".box");

$("#wrapper").on({
	mouseover : function() {
		var box = $(this);
		box.removeClass().addClass("box over");
		box.find(">p").text("mouseover");
	},
	mouseout : function() {
		var box = $(this);
		box.removeClass().addClass("box out");
		box.find(">p").text("mouseout")
	},
	click : function() {
		var box = $(this);
		box.removeClass().addClass("box click");
		box.find(">p").text("click");
	}
}, ".box");

$("#nav>button").bind("click", function(){
	$("#wrapper").append(box.eq(0).clone());
});