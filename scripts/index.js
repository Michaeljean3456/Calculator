"use strict";
const Number1textbox = document.getElementById("Number1textbox");
const Number2textbox = document.getElementById("Number2textbox");
const addbtn = document.getElementById("addbtn");
const subtractbtn = document.getElementById("subtractbtn");
const multiplybtn = document.getElementById("multiplybtn");
const dividebtn = document.getElementById("dividebtn");
const answertextbox = document.getElementById("answertextbox");

function init(){
    addbtn.onclick = onaddbtnclicked;
    subtractbtn.onclick = onsubtractbtnclicked;
    multiplybtn.onclick = onmultiplybtnclicked;
    dividebtn.onclick = ondividebtnclicked;
    console.log("inside the init function");
   
}
window.onload = init;

function onaddbtnclicked(){
    const num1 = parseFloat(Number1textbox.value);
    const num2 = parseFloat(Number2textbox.value);
    const result = num1 + num2;
    answertextbox.value = result;

  }

  function onsubtractbtnclicked(){
    const num1 = parseFloat(Number1textbox.value);
    const num2 = parseFloat(Number2textbox.value);
    const result = num1 - num2;
    answertextbox.value = result;

  }
  function onmultiplybtnclicked(){
    const num1 = parseFloat(Number1textbox.value);
    const num2 = parseFloat(Number2textbox.value);
    const result = num1 * num2;
    answertextbox.value = result;

  }

  function ondividebtnclicked(){
    const num1 = parseFloat(Number1textbox.value);
    const num2 = parseFloat(Number2textbox.value);
    const result = num1 / num2;
    answertextbox.value = result;

  }