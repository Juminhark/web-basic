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
