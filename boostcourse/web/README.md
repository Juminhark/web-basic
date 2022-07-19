과정에서 배울수있는것.
cs와 프로그래밍에 대한지식
커리어 전환을 원하는 개발자
JAVA, HTML/CSS, SQL의 기초적인 핵심 문법

과정 핵심
HTML/CSS
Javascript
JAVA
Spring
Spring MVC
Spring JDBC
SQL

--

웹(FE/BE)분야의 개발자는 어떤 역략이 중요한가

1. CSS와 같은 선언적인 프로그래밍에도 익숙해야한다
2. interactive한 웹개발 방법과 성능에 유리한 패턴방식 이해
3. 새로운것을 거부감없이 받아들이는 능력
4. 커뮤니케이션 능력 -> 스터디추천 / 구현체에 대해 구현자의 초점을 이해하는 능력

\*\* interactive : 활동적인 / 쌍방향

웹 분야 개발자가 되려면 배워야할것들

1. javascipt
2. html/css 구조 설계 스타일
3. 프로그래밍 언어 1개는 자유자제로 사용 / 역사적인 배경

--

기계어(Machine Language) : 0,1 로 이루어진 언어
어셈블리어(Assembly Language) : 기호를 Compiler를 통해 기계어로 바꾸어 사용하는 프로그램언어

## 웹의 동작(HTTP Protocol 이해)

http
request 형식
request method
response 형식

## WWW(World Widw Web)

## HTTP(Hypertext Transfer Protocol)

- HTTP는 서버와 클라이언트가 인터넷상에서 데이터를 주고받기 위한 프로토콜(protocol)입니다.

## HTTP 작동방식

client 가 server에 request를 보내면 server는 response를 client에게 보냄

stateless방식 : response가 완료되면 연결을 끊는 방식
장점 : 불특정 다수를 대상으로 하는 서비스에 적합. 최대 연결수보다 많은 요청과 응답을 처리 가능
단점 : 연결을 끊어버려서 이전 client 상황을 알수없다.

이런 단점을 해결하기위해 Cookie와 같은 기술이 등장

## URL(Uniform Resource Locator)

접근프로토콜 :// ip 주소 또는 도메인 주소 / 문서의 경로 / 문서이름
=> 특정 웹 서버에 특정파일에 접근하기 위한 경로 / 인터넷상의 자원의 위치

ip : 집주소
포트 : 방

![HTTP작동방식](/boostcourse/http.png)

- 요청메서드 : GET / PUT / POST / OPTIONS
- 요청 URL : 요청하는 자원의 위치

```js
//! 요청 메서드
GET : 정보를 요청하기 위해서 사용한다. (SELECT)
POST : 정보를 밀어넣기 위해서 사용한다. (INSERT)
PUT : 정보를 업데이트하기 위해서 사용한다. (UPDATE)
DELETE : 정보를 삭제하기 위해서 사용한다. (DELETE)
HEAD : (HTTP)헤더 정보만 요청한다. 해당 자원이 존재하는지 혹은 서버에 문제가 없는지를 확인하기 위해서 사용한다.
OPTIONS : 웹서버가 지원하는 메서드의 종류를 요청한다.
TRACE : 클라이언트의 요청을 그대로 반환한다. 예컨데 echo 서비스로 서버 상태를 확인하기 위한 목적으로 주로 사용한다.


!! HTTPS는 Hypertext Transfer Protocol secure의 약자로 HTTP보다 보안이 추가
```

# 웹 프론트 엔드

- 사용자에게 웹을 통해 다양한 콘텐츠(문서, 동영상, 사진등)를 제공
- 사용자의 요청(요구사항)에 반응해서 동작한다.

## 웹 프론트엔드의 역활

- 웹 콘텐츠를 잘 보여주기 위해 구조를 만들어야 한다
- 적절한 배치와 일괄된 디자인등을 제공해야 한다
- 사용자 요청을 잘 반영해야한다

### html 예시

```js
<h1> 우리집에 오신걸 환영합니다 </h1>
<section >
  <h2> 위치</h2>
   <p> 경기도 시흥시 어딘가 위치하고 있어요~</p>
  <h2> 특징</h2>
   <p>  우리집은 마루가 아주 작아요~  하지만 옹기종기 모여있기 좋은 구조에요</p>
</section>
<footer>email : crong@kdd123.com</footer>
```

### css 예시

```js
.window-header-icon {
left: -28px;
position: absolute;
top: 8px
}

.window-header-inline-content {
cursor: default;
display: inline-block;
margin: 4px 6px 0 0
}
```

### js 예시

```js
let aCardList = [];
for (var i = 0; i < cardList.length; i++) {
  let str = `${cardList[i]}번째 카드`;
  let id = `list-${cardList[i]}`;
  aCardList.push(
    <li id={id} key={i} draggable='true' onDragStart={dragStart}>
      {' '}
      {str}{' '}
    </li>
  );
}
```

# 백 엔드(Back-End)란?

- backend는 정보를 처리하고 저장하며, 요청에 따라 정보를 내려주는 역할을 한다. 가령 쇼핑몰이라면, 상품 정보를 가지고 있고, 주문을 받아서 저장하고, 사용자가 관심있어 하는 상품을 골라주는 역할이 back-End의 역할이다

### 백엔드 개발자가 알아야할것들

- 프로그래밍 언어 (Java, Python, PHP, Javascript 등)
- 웹의 동작 원리
- 알고리즘(algorithm), 자료구조 등 프로그래밍 기반 지식
- 운영체제, 네트워크 등에 대한 이해
- 프레임워크에 대한 이해 (Spring)
- DBMS에대한 이해와 사용방법 (MySQL, Oracle 등)

### browser의 동작

![브라우저](/boostcourse/web/browser.png)

- 브라우저는 월드와이드웹(WWW)에서 정보를 검색, 표현하고 탐색하기 위한 소프트웨어입니다.

- 인터넷에서 특정 정보로 이동할 수 있는 주소 입력창이 있고 서버와 HTTP로 정보를 주고 받을 수 있는 네트워크 모듈도 포함하고 있습니다.

- 그리고 서버에서 받은 문서(HTML, CSS, Javascript)를 해석하고 실행하여 화면에 표현하기 위한 해석기(Parser)들을 가지고 있습니다.

- 브라우저마다 서로 다른 엔진을 포함하고 있습니다.

![mainflow](/boostcourse/web/mainflow.png)

- HTML을 해석해서 DOM Tree를 만들고, CSS를 해석해서 역시 CSS Tree(CSS Object Model)을 만듭니다.

- 이 과정에서 Parsing 과정이 필요하며 토큰 단위로 해석되는 방식은 일반적인 소스코드의 컴파일 과정이라고 보시면 됩니다.

- DOM Tree와 CSS Tree, 이 두 개는 연관되어 있으므로 Render Tree로 다시 조합됩니다.

- 이렇게 조합된 결과는 화면에 어떻게 배치할지 크기와 위치 정보를 담고 있습니다.

- 이후에 이렇게 구성된 Render Tree정보를 통해서 화면에 어떤 부분에 어떻게 색칠을 할지 Painting과정을 거치게 됩니다.

- compoiler에서 하는 영역 : parsing => token을 만들고 syntax tree에따라 처리

![cssboxmodel](/boostcourse/web/css-box-model.jpg)
