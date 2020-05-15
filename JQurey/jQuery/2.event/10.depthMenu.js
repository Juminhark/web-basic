$(document).ready(function(){
	var li = $("#nav>ul>li");
	
	var url = [ "http://hani.co.kr/",
	            "http://www.ddanzi.com/",
	            "http://bunker1.ddanzi.com/",
	            "http://kukmin.tv/"
	           ];
	
	li.on({
		mouseover : function(){
			var li = $(this);
			li.addClass("on");
		},
		mouseout : function(){
			var li = $(this);
			li.removeClass("on");
		},
		click : function(event){
			var li = $(this);
			event.preventDefault();
			var linkURL = url[li.index()];
			location.href = linkURL;
		}
	});
});