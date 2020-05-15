
// CSS Selector 문법을 사용한다
// jquery selector는 collection을 리턴한다

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
// 한칸 띄우면 자식객체를 검색
// # 은 id , . 은 class

// [Pseudo=Selectors]  슈두-가짜의
// <a class="external">
// <a class="external">
$("a.external:first");
$("tr:odd");    // 홀수
$("div:visible");

// Select all input-like elements a form (more on this below).
// <form id=
//		<input ~> <textarea> 도 input 계열 
// </form>
$("myForm :input");

// jquery가 index를 부여

// All except the first three divs. 인덱스 3번 div
$("div:gt(2)");

// All currently animated divs
$("div:animated");




// [Choosing Selectors]
// Find all <a> elements whose rel attribute ends with "thinger".
// <a rel="do-nothinger">
$("a[rel$='thinger']");

//Doesn`t work!  collection을 리턴.
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
$("div.foo").has("p");
$("h1").not(".bar");  // h1 elements that don`t have a class of bar
$("ul li").filter(".current");  // unordered list items with class of current
$("ul li").eq(5); //the sixth


// [Selecting Form Elements]
// Using the :button pseudo-selector targets any <button> elements 
$("form :button");

// Using the :checkbox pseudo-selector targets any <input> elements with a type="button"
$("form :checkbox");

// :checked targets checked checkboxes, but keep in mind that this selector works also for checked
// radio buttons, and select elements (for select elements only, use the :selected selector):
$("form :checked");

// Using the :disabled pseudo-selector targets any <input> elements with the disabled attribute:
$("form :disabled");

// Basically the inverse of the :disabled pseudo-selector, the :enabled pseudo-selector targets
// any elements that do not have a disabled attribute:
$("form :enabled");

// Using the :file pseudo(가짜)-selector targets any <input> elements that have a type ="file":
$("form :file");

// Using the :image pseudo-selector targets any <input> elements that have a type ="image":
$("form :image");

// Using the :input selector selects all <input>, <textarea>, <select>, and <button> elements
$("form :input");

// Using the :password pseudo-selector targets any <input> elements with a type ="password":
$("form :password");

// Using the :radio pseudo-selector targets any <input> elements that have a type ="radio":
$("form :radio");

// Selects all radio buttons with the name attribute of gender.
$("form :input[name='gender']:radio");

// Using the :reset pseudo-selector targets any <input> elements that have a type ="reset":
$("form :reset");

// Using the :selected pseudo-selector targets any selected items in <option> elements:
$("form :selected");

// Using the :submit pseudo-selector targets any <button> or <input> elements with a type="submit"
$("form :submit");

// Using the :text pseudo-selector targets any <input> elements with a type="text":
$("form :text");

