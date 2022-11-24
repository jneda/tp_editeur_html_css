let a = document.querySelector('#a');
let b = document.querySelector('#b');
let meter = document.querySelector('#meter');

let c = a.value.length;

a.addEventListener('input', function () {
  b.innerHTML = a.value;

  let toLimit = 200 - a.value.length;
  console.log(toLimit);
});