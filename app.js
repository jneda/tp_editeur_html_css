let editor = document.querySelector('#editor');
let preview = document.querySelector('#preview');
let meter = document.querySelector('#meter');
let nbChars;

editor.addEventListener('input', function () {
  preview.innerHTML = editor.value;
  nbChars = editor.value.length;
  meter.value = nbChars;

  let toLimit = 200 - nbChars;
  console.log(toLimit);
});