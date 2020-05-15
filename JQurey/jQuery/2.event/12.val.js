$("input")
  .bind("ketup",function(){
	  var value = $(this).val();
	  $("p").text(value);
  })
  .ketup();