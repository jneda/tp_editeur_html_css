let a = document.querySelector('#a');
let b = document.querySelector('#b');

a.addEventListener('input', function () {
  b.innerHTML = a.value;
});