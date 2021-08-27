## html

### Semantic Tags

- 중요성

1. SEO(search engine optimization) : 검색 엔진 최적화
2. Accessibility : 웹 접근성
3. Maintainability : 쉬운 구조 이해

- header : 웹사이트 브랜드 로고 / 메뉴 등 상단 노출이 필요한것들
- nav : header안에 여러 메뉴들이 모여있을 경우
- footer : 부가적인 정보나 링크들
- main : 핵심 컨텐츠
- aside : main 안에 핵심 컨텐츠와는 관련없는 경우 / 광고 / 페이지와 관련없는 링크들
- article : main안에서 핵심 컨텐츠에 구분이 필요한 경우 / 각기 독립적인 내용
- section : main안에서 핵심 컨텐츠에 구분이 필요한 경우 / 연관되어있으나 구분이 필요한 경우

### 햇갈리는것

- article vs section : 내용들끼리의 연관성
- i vs em : i는 시각적으로만 / em은 강조하는 이탤릭체
- b vs strong : b는 시각적으로만 / strong은 강조하는 볼드체
- ol vs ul vs dl :

```js
<ul> // 순서가 필요없는 list
  <li>야채</li>
  <li>과일</li>
  <li>고가</li>
</ul>

<ol> // 순서가 필요한 list
  <li> 야채
    <ol>
      <li>오이</li>
      <li>상추</li>
    </ol>
  </li>
</ol>

<dl> // 단어에 설명이 필요한 list
  <dt>strong</dt>
  <dd>강조하는 볼드체</dd>
</dl>
```

- img vs background-image(css) : image가 문서의 구성요소로써 존재할 경우 / 내용과 관계없는 스타일 요소일 경우
- button vs a

```js
// <button></button> : 사용자의 특정한 액션을 위해서
// <a></a> : 링크가 필요할때
```

- table vs css

```js
// <table> : 행열. 다수의 데이터 표기용
// css : Flex, Grid 스타일용
```

## [this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)

- [What is 'this'](https://www.youtube.com/watch?v=kb0Af7dzCTs)

```js
// window
<script>
	console.log(this)
</script>


// true
<script>
  console.log(window === this)
</script>


// window
<script>
  function checkThis() {
    console.log(this)
  }

  checkThis()
</script>


// {value: 0, checkThis: ƒ}
<script>
  const anObject = {
    value: 0,
    checkThis() {
      console.log(this);
    },
  };

  anObject.checkThis();
</script>

// window
<script>
  const anObject = {
    value: 0,
    checkThis() {
      function doit() {
        console.log(this);
      }
      doit();
    },
  };

  anObject.checkThis();
</script>

// undefined
<script>
  'use strict';
  function checkThis() {
    console.log(this);
  }

  checkThis();
</script>

// window
<script>
  'use strict';
  function checkThis() {
    console.log(this);
  }

  checkThis.call(this);
</script>
```

## [Strict mode](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)

- 기존에는 조용히 무시되던 에러들을 throwing합니다.
- JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
- 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.
