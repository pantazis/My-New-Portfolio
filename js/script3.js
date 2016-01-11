var text1 = document.getElementById("text1").innerHTML
var text2 = document.getElementById("text2").innerHTML
var text3 = document.getElementById("text3").innerHTML


document.getElementById("item1").innerHTML = text1;
document.getElementById("item2").innerHTML = text2;
document.getElementById("item3").innerHTML = text3;

console.log(document.getElementById("item1"));
console.log(document.getElementById("item2"));
console.log(document.getElementById("item3"));
var page1 = document.querySelector(".page1");

function resizepage1 (){


 page1.style.width = window.innerWidth+"px";
 page1.style.height = window.innerHeight+"px";
}

window.onload = function(){ resizepage1();}
window.onresize = function(){ resizepage1();}

