var box = $("#box");
box.bind({
	mouseover : function(){
		var box = $(this);
		box.removeClass().addClass("over");
		box.find(">p").text("mouseover");
	},
	mouseout : function(){
		var box = $(this);
		box.removeClass().addClass("out");
		box.find(">p").text("mouseout");
	},
	click : function() {
		var box = $(this);
		box.removeClass().addClass("click");
		box.find(">p").text("click");
	}
});

var nav = $("#nav");
nav.find(">.mouseover").bind("click", function(){
	box.trigger("mouseover");
});

nav.find(">.mouseout").bind("click", function(){
	box.trigger("mouseout");
});

nav.find(">.click").bind("click", function(){
	box.trigger("click");
});