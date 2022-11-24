const editor = document.querySelector(".editor");
const preview = document.querySelector(".preview");

const maxCharsInput = document.querySelector(".max-chars-input");

const charsMeter = document.querySelector(".chars-meter");
const countParagraph = document.querySelector(".chars-count");

let charsCount = 0;
let maxChars = 200;

function init() {
  editor.value = "";
  preview.value = "";
  maxCharsInput.value = maxChars;
  onEditorUpdate();
}

function updatePreview() {  
  // update preview
  preview.innerHTML = editor.value;
}

function getTextCount() {
  return editor.value.replace(/<.*?>/g, '').length;
}

function updateCountUI() {
  getTextCount();
  // update char count
  charsCount = getTextCount();
  // update count paragraph
  countParagraph.innerText = `${charsCount}/${maxChars}`;
  // update meter
  charsMeter.value = charsCount;
}

function onMaxCharsUpdate() {
  maxChars = maxCharsInput.value;
  charsMeter.max = maxChars;
  updateCountUI();
}

function onEditorUpdate() {
  // update UI
  updateCountUI();
  updatePreview();
}

editor.addEventListener("input", onEditorUpdate);
maxCharsInput.addEventListener("input", onMaxCharsUpdate);

window.addEventListener("load", init);
