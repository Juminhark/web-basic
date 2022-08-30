# HTML(Hypertext Markup Language)

- 웹사이트의 모습을 기술하기 위한 마크업 언어
- HTML은 Element의 조합이다.

## HTML Element
- 기본 스타일
```html
<!-- Bad -->
<table>
<tag name>content</tag name>
```
- 속성값(attributes) : HTML Element의 추가적인 속성관리 요소
```html
// attributes
<img src="" width="300" height="500" />
```

## Semantic Tags

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

## 햇갈리는것

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

## 1. 레이아웃을 위한 tag

![layout](./img/layout.jpg)

- header
- section
- nav
- footer
- aside

## 2. html 구조설계

- 현업에서는 Presentation 문서형태의 기획서나 디자인 파일을 받아서 그것을 기반으로 HTML개발을 시작
- 주어진 화면을 구조를 분석하여 구현
- 상단/본문/네비게이션 이런 식으로 큰 부분부터 분리
- 목록, 이미지, 문단등 나타낼것들의 적절한 태그 사용

## 3. class와 id 속성

- ID : 고유한 속성으로 한 HTML 문서에 하나만 사용 가능합니다. 검색에도 용이
- Class : 하나의 HTML문서 안에 중복해서 사용 가능합니다.
- 약속(convention)을 만들어서 규칙 부여
