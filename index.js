"use strict";

window.onload = init;

function init() {
  const addBtn = document.getElementById("addBtn");
  addBtn.onclick = onAddBtnClicked;
}


function init() {
    const addBtn = document.getElementById("subtractBtn");
    addBtn.onclick = onSubtractBtnClicked;
  }

  function init() {
    const addBtn = document.getElementById("multiplyBtn");
    addBtn.onclick = onMultipleBtnClicked;
  }


  function init() {
    const addBtn = document.getElementById("divideBtn");
    addBtn.onclick = onDivideBtnClicked;
  }
  






function onAddBtnClicked() {
  let numberField = document.getElementById("number1Field");
  let addbtnNumber = number1Field.value;
  alert(addbtnNumber);
}