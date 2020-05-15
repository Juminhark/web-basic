// 투명도 0 은 안보이고 1은 보인다

$("input:eq(0)").bind("click",function(){
	$("#box").fadeTo(600, 0.13);
});

$("input:eq(1)").bind("click",function(){
	$("#box").fadeTo(400, 1);
});