console.log('hello');

window.onload=function(){

var maleButton = document.querySelector("#maleButton");
var femaleButton = document.querySelector("#femaleButton");
var maleImage = document.querySelector("#maleImage");
var femaleImage = document.querySelector("#femaleImage");

maleButton.onclick = function(){
  console.log('clicked on male button');
}

femaleButton.onclick = function(){
  femaleImage.style.visibility = "visible";
  maleImage.style.visibility = "hidden";
}

maleButton.onclick = function(){
  femaleImage.style.visibility = "hidden";
  maleImage.style.visibility = "visible";
}





}
