let editor = document.querySelector('#editor');
let preview = document.querySelector('#preview');
let meter = document.querySelector('#meter');
let maxChars = document.querySelector('#maxChars');

let nbChars;

maxChars.addEventListener('input', function () {
  meter.max = maxChars.value;
});

editor.addEventListener('input', function () {
  preview.innerHTML = editor.value;
  nbChars = editor.value.length;
  meter.value = nbChars;

  let toLimit = meter.max - nbChars;
  console.log(`${toLimit}/${meter.max}`);
});
