var clientx = $("#clientx");
var clienty = $("#clienty");
var offsetx = $("#offsetx");
var offsety = $("#offsety");
var pagex = $("#pagex");
var pagey = $("#pagey");
var screenx = $("#screenx");
var screeny = $("#screeny");

$("#box").bind("mousemove", function(event){
	clientx.text(event.clientX); // 브라우저가 원점
	clienty.text(event.clientY);
	offsetx.text(event.offsetX); // 이벤트 발생 객체가 원점
	offsety.text(event.offsetY);
	pagex.text(event.pageX); // HTML 문서가 원점 <html> ~ </html>
	pagey.text(event.pageY);
	screenx.text(event.screenX); // 모니터가 원점
	screeny.text(event.screenY);
});