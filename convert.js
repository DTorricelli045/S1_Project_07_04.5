// JavaScript 6th Edition
// Chapter 4
// Hands-on Project 4-5

// Author: Dominic Torricelli
// Date:   2.22.18

// Filename: convert.js


var kilometersElement = document.getElementById("kValue");
var milesElement = document.getElementById("mValue"); //added quotation to mValue
function convert() {
   var km = milesElement.value * 1.6; //changed equation and added semicolon
   kilometersElement.innerHTML = km;
}

// add backward compatible event listener to Convert to Km button and clear form
var submitButton = document.getElementById("convertButton");
if (submitButton.addEventListener) {
   submitButton.addEventListener("click", convert, false); 
   window.addEventListener("load", function() {
      document.getElementById('mValue').value = ""; // clear last miles value on reload
      document.getElementById('kValue').innerHTML = ""; // clear previous results on reload 
   }, false);
} else if (submitButton.attachEvent)  {
   submitButton.attachEvent("onclick", convert);
   window.attachEvent("onload", function() {
      document.getElementById('mValue').value = ""; // clear last miles value on reload
      document.getElementById('kValue').innerHTML = ""; // clear previous results on reload 
   });
}