var text1 = document.getElementById("text1").innerHTML
var text2 = document.getElementById("text2").innerHTML
var text3 = document.getElementById("text3").innerHTML


document.getElementById("item1").innerHTML = text1;
document.getElementById("item2").innerHTML = text2;
document.getElementById("item3").innerHTML = text3;


var page1 = document.querySelector(".page1");


function resizepage1() {


    page1.style.width = window.innerWidth + "px";
    page1.style.height = window.innerHeight + "px";
};


var effect2 = document.querySelector(".effect2 ");
resizepage1();
window.onresize = function () {
    var effect2 = document.querySelector(".effect2 ");
    resizepage1();
};



document.querySelector(".page1").addEventListener("mousemove", function (event) {
	window.eff = document.querySelector(".page1").childNodes[1]
	
    myFunction(event);
});

document.querySelector(".page3").addEventListener("mousemove", function (event) {
	window.eff = document.querySelector(".page3").childNodes[1]
    myFunction(event);
});
document.querySelector(".page4").addEventListener("mousemove", function (event) {
	window.eff = document.querySelector(".page4").childNodes[1]
    myFunction(event);
});
	document.querySelector(".page3").childNodes[1]

function myFunction(e) {

	
	


    var x = e.clientX;
    var y = e.clientY;

    var screenw =  window.innerWidth;
    var screenh = window.innerHeight;

    var muvex = (x / screenw) *100/10;
    var muvey = (y / screenh) * 100/10;
    
    eff.style.left = "-"+10 - muvex+ "%";
    eff.style.top = "-"+10 - muvey+ "%";
   
      




}


var box1 = document.querySelector("#div1");
 
box1.onmouseover= function(){
    document.querySelector("#div2").className ="box2 hover";
   
    
};
var box2 = document.querySelector("#div3");
box2.onmouseover= function(){
    document.querySelector("#div4").className ="box2 hover";
    
};


function clicka(){
	
	var ab = document.querySelector(".one").childNodes[1].childNodes[0];
ab.click()
};
function clickb(){
	
	var ab = document.querySelector(".one").childNodes[2].childNodes[0];
ab.click()
};




	
	
	
	



