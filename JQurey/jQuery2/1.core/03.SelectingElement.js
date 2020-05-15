// Selecting Elements by ID
// Note IDs must be unique per page.
$("#myId"); //<div id="myId>

// Selecting Elements by Class Name
$(".myClass"); // <div class="myClass">

// Selecting Elements by Attribute
// <input name="first_name">
$("input[name='first_name']");

// Selecting Elements by Compound CSS Selector
// <div id="contents">
// 	  	<ul class="people">
//			<li></li><li></li>
// 	  	</ul>
// </div>
$("#content ul.people li");

// [Pseudo(가짜)-Selectors]
// <a class="external">
// <a class="external">
$("a.external:first");
$("tr:odd");
$("div:visible");

// Select all input-like elements a form (more on this below).
// <form id=
//		<input ~> <textarea>
// </form>
$("myForm :input");

// All except the first three divs. 인덱스 3번부터 div    >2  
$("div:gt(2)");


// All currently animated divs
$("div:animated");

// [Choosing Selectors]
// Find all <a> elements whose rel attribute ends with "thinger".
// <a rel="do-nothinger">
$("a[rel$='thinger']");

//Doesn`t work!  항상 collection을 리턴하기 때문에 
/* if ($("div.foo")){
   ...
   } */
//Testing whether a selection constains elements.
if($("div.foo").length){
	
}

// Saving Selections
var divs = $("div");

// Refining & Flitering Selections
// div.foo elements that contain <p> tags
// <div class="foo"><p></p></div>
// <div class="foo"></div>
// <ul>
//   <li> </li>
//   <li class="current"> </li>
//   <li> </li>
//   <li> </li>
//   <li> </li>
//   <li> </li>
//</ul>
$("div.foo").has("p");  //p를 가진 div.foo
$("h1").not(".bar");  // h1 elements that don`t have a class of bar  .bar를 가지지않은 h1
$("ul li").filter(".current");  // unordered list items with class of current  .filter를 가진
$("ul li").eq(5); //the sixth   인덱스5번 ul li

//[Selecting Form Elements]
//Using the :button pseudo-selector targets any <button> elements 
$("form :button");  // <button>, <input type="button">

//Using the :checkbox pseudo-selector targets any <input> elements with a type="button"
$("form :checkbox");  // <input type="checkbox">

//:checked targets checked checkboxes, but keep in mind that this selector works also for checked
//radio buttons, and select elements (for select elements only, use the :selected selector):
$("form :checked");  // <input type="checkbox"> <input type="radio"> <select>

//Using the :disabled pseudo-selector targets any <input> elements with the disabled attribute:
$("form :disabled"); 

//Basically the inverse of the :disabled pseudo-selector, the :enabled pseudo-selector targets
//any elements that do not have a disabled attribute:
$("form :enabled");  //disable 아니면 다 enable 마우스, 키보드 입력가능창

//Using the :file pseudo(가짜)-selector targets any <input> elements that have a type ="file":
$("form :file");  // <input type="file">

//Using the :image pseudo-selector targets any <input> elements that have a type ="image":
$("form :image");  // <input type="image"> 

//Using the :input selector selects all <input>, <textarea>, <select>, and <button> elements
$("form :input"); 

//Using the :password pseudo-selector targets any <input> elements with a type ="password":
$("form :password");

//Using the :radio pseudo-selector targets any <input> elements that have a type ="radio":
$("form :radio");  // <input type="radio"> 

//Selects all radio buttons with the name attribute of gender.
$("form :input[name='gender']:radio");   // <input type="radio" name="gender"> 

//Using the :reset pseudo-selector targets any <input> elements that have a type ="reset":
$("form :reset");   // <input type="reset">  reset:누르면 form 초기화 

//Using the :selected pseudo-selector targets any selected items in <option> elements:
$("form :selected");  // <select> 

//Using the :submit pseudo-selector targets any <button> or <input> elements with a type="submit"
$("form :submit");   // <input type="submit"> 

//Using the :text pseudo-selector targets any <input> elements with a type="text":
$("form :text");   // <input type="text"> 


