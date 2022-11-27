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

function updateMeterValues(maxChars) {
  // calculate and update values for the meter colors to make sense
  charsMeter.optimum = Math.floor(maxChars * 0.25);
  charsMeter.low = Math.floor(maxChars * 0.5);
  charsMeter.high = Math.floor(maxChars * 0.8);
  charsMeter.max = maxChars;
  // update editor's max chars count
  editor.maxLength = maxChars;
}

function onMaxCharsUpdate() {
  maxChars = maxCharsInput.value;
  updateMeterValues(maxChars);
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
