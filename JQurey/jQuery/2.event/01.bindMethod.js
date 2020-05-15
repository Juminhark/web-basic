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

// mouseover 마우스를 올려놓았을때 이벤트 발생
// mouseout  마우스가 바깥에 있을때 이벤트 발생
// mousedown 마우스를 누르고 있을때 이벤트 발생
// mouseup   마우스를 놓았을때 이벤트 발생