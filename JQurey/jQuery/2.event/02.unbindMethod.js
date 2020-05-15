$("#box").bind({
	mouseover : function() {
		var box = $(this);
		box.removeClass().addClass("mouseover");
		box.find(">p").text("mouseover");
	},
	mouseout : function() {
		var box = $(this);
		box.removeClass().addClass("mouseout");
		box.find(">p").text("mouseout");
	},
	mousedown : function() {
		var box = $(this);
		box.removeClass().addClass("mousedown");
		box.find(">p").text("mousedown");
	},
	mouseup : function() {
		var box = $(this);
		box.removeClass().addClass("mouseup");
		box.find(">p").text("mouseup");
	}
});

$("#btn1").bind("click",function() {
	$("#box").unbind("mouseout");
});

$("#btn2").bind("click",function() {
	$("#box").unbind();
});

//unbind 기능 없애기
