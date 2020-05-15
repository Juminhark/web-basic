$(function(){
	$("form").validate({
		rules : {
			topic : {
				required : "#newsletter:checked",
				minlength : 2
			}
		},
		messages : {
			topic: {
				required : "메일 수신 동의를 선택하세요.",
				minlength: "2개 이상 선택해야 합니다."
			}
		}
	});
	
	// code to hide topic selection, disable for demo
	var newsletter = $("#newsletter");
	// newsletter topics are optional, hide at first
	var isReceive = newsletter.is(":checked");
	var mails = $("#mailFieldset")[isReceive ? "removeClass": "addClass"]("gray");
	var topicInputs = mails.find("input").attr("disabled", !isReceive);
	// show when newsletter is checked
	newsletter.bind("click", function(){
		topicInputs.attr("disabled", !this.checked);
	});
});