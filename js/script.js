// JavaScript Document

$(document).ready(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });
});


//add class to menu

//if()
function addClass (i) {
    var trg = i.target.parentElement;
  
    if(trg.nodeName==="LI"){trg.classList.add("active");}
    
    
    

    
}











function addclassweb(event){
	
	switch (event.target.classList[1]) {
    case "galleryImg1":
         window.getw = document.getElementById("web1");
		 getw.style.display="block";
		 document.getElementById("web2").style.display="none";
		 document.getElementById("web3").style.display="none";
		 
		 
		
        break;
    case "galleryImg2":
       window.getw = document.getElementById("web2");
	   getw.style.display="block";
	   	 document.getElementById("web1").style.display="none";
		 document.getElementById("web3").style.display="none";
        break;
      case "galleryImg3":
        window.getw = document.getElementById("web3");
		getw.style.display="block";
		document.getElementById("web1").style.display="none";
		document.getElementById("web2").style.display="none";
        break;
	};
	
	
	
	
	if(getw.classList.contains("asd2")==true){
		getw.classList.remove("asd2");
		}
		getw.classList.add("asd");
	
	
	
	
	};
	function addclassweb2(){
	
	getw.classList.add("asd2");
	getw.classList.remove("asd");
	
	
	
	
	};

	
	function loading (){
		document.getElementById("loading").style.display = "none";
		
		};
