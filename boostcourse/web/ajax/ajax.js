// 1. 예전 방식
const oReq = new XMLHttpRequest();
oReq.addEventListener('load', function () {
  console.log(this.responseText);
});
oReq.open('GET', './json.txt');
oReq.send();

// 2. 요즘 방식1
fetch('./json.txt')
  .then((response) => {
    // 콜백함수

    if (!response.ok) {
      throw new Error('Error');
    }

    return response.json();
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {});

// 2. 요즘 방식2
async function data() {
  var response = await fetch('./json.txt');
  if (!response.ok) {
    throw new Error('Error');
  }
  var result = await response.json();
  console.log(result);
}

data().catch(() => {
  console.log('Error result');
});

// 3. 외부라이브러리 - jQuery 안에 $.ajax(), React나 Vue에서는 axios를 씀
