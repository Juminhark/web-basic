var data = "hello";

var handler = function(event) {
	document.write(event.data);
};

$(document).bind("click", data, handler);