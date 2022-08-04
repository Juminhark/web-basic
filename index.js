let el = document.querySelector('.outside');

el.addEventListener('click', (e) => {
  const target = e.target;
  console.log(target);
  console.log(target.innerText);
});
