/********** 주석  ***********/
//한줄
/*
 * 여
 * 러
 * 줄
 */
/*********************************/

/**********  Whitespace  ***********/
//script안이 아닌 Whitespace는 의미가 없다. Whitespace는 또한 JavaScipt에서 무시된다.
var hello = 'Hello';
var world = 'World!';

//Semantic whitespace promotes readability.
//Readable code is good!
var foo = function () {
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
};

foo();
/************************************/

/*********** 식별자 Identifiers **********/
//유효한 식별자 이름들
var myAwesomeVariable = 'a';
var myAwesomeVariable2 = 'b';
var my_awesome_variable = 'v';
var $my_AwesomeVariable = 'd';
var _my_awesome_variable_$ = 'e';
/**********************************/

// 변수 정의 Variable Definition
var test = 'test';
var test2 = function (a) {
	return console.log(a);
};
var test3 = test2(test);

// 여러개 한번에 정의 가능, 변수 3개선언 명령문 1개
var test4 = 1,
	test5 = function (a) {
		return console.log(a);
	},
	test6 = test5(test4);

var x;
x === undefined; //true
// 좌우 값 비교 연산자 ===
// 변수 선언, 초기화:최초값 설정.
/**********************************/
