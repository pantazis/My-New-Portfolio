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





var nav1 = document.getElementById("nav1")

nav1.addEventListener("click", addClass,false );
