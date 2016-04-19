


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

function about (){
var containerfrontW = window.innerWidth /1.1612+"px" ;
var containerfrontH = window.innerHeight /1.4358+"px" ;
document.getElementById("about").style.width = containerfrontW;
document.getElementById("about").style.height = containerfrontH;
}
var about1 = document.getElementById("about").innerHTML;
var about2 = document.getElementById("about2");
about2.innerHTML = about1;
var sreda = document.getElementsByClassName("hidep");
sreda[0].className="arkouda";
sreda[2].className="arkouda";
sreda[3].className="arkouda";



function h2p (i){
	var targeta = i.target.id;
	var text = i.target.parentNode.children[1];
	var artcle = document.getElementsByClassName("artcle");
	var artcleh1 = artcle[0].children[0].children[1]
	var artcleh2 = artcle[1].children[0].children[1]
	var artcleh3 = artcle[2].children[0].children[1]
	
	
	console.log(artcle[0].children[0].children[1]);
	console.log(i.target.parentNode);
	
		switch(i.target.id) {
		
    case "a":
		clickb();

       
        break;
    case "b":
		clickb();


        
        break;
		      
    case "c":
	clickb();

		
        
    break;
	
    
} 

	
	
	function clickb(){

	console.log(text.className);
	
	if (text.className == "none" | text.className == "hidep"|text.className == "div2"){
		artcleh1.className = "div2";
	artcleh2.className = "div2";
	artcleh3.className = "div2";
		
		
	text.className = "div";

		}else if(text.className == "div"){

	


	artcleh1.className = "div2";
	artcleh2.className = "div2";
	artcleh3.className = "div2";
			text.style.display = "div2";
	}
		console.log(text.className);
	
	
	
}

	
	
	
	
	
	
	}



document.getElementById("about").addEventListener("click", h2p, false);









	
	
	
	



