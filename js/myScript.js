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
function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================
include('js/jquery.cookie.js');

/* Easing library
 ========================================================
include('js/jquery.easing.1.3.js');

/* PointerEvents
 ========================================================*/
;
(function ($) {
    if(isIE() && isIE() < 11){
        include('js/pointer-events.js');
        $('html').addClass('lt-ie11');
        $(document).ready(function(){
            PointerEventsPolyfill.initialize({});
        });
    }
})(jQuery);

/* Stick up menus
 ========================================================*/












/*
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-angle-up'
            });
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* RD Smoothscroll
=============================================
;(function ($) {
    include('js/rd-smoothscroll.min.js');
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/* Superfish menus
 ========================================================
;
(function ($) {
    include('js/superfish.js');
})(jQuery);

/* Navbar
 ========================================================
;
(function ($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);


/* Google Map
 ========================================================*/
;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
        include('//maps.google.com/maps/api/js?sensor=false');
        include('js/jquery.rd-google-map.js');

        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap({
                    styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
                });
            }
        });
    }
})
(jQuery);

/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Mailform
=============================================
;(function ($) {
    include('js/mailform/jquery.form.min.js');
    include('js/mailform/jquery.rd-mailform.min.c.js');
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Owl Carousel
 ========================================================*/
;
(function ($) {
    
    var o = $('.owl-carousel');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 20,
                smartSpeed: 450,
                loop: true,
                dots: true,
                dotsEach: 1,
                nav: false,
                responsive: {
                    0: {items: 1},
                   767: {items: 2},
                   900: {items:3},
                    1000: {items:4}
                    
                }
            });
        });
    }
})(jQuery);

/* Owl Carousel2
 ========================================================*/
;
(function ($) {
    var o = $('.owl-carousel2');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 20,
                smartSpeed: 450,
                loop: true,
                dots: true,
                dotsEach: 1,
                nav: false,
                responsive: {
                    0: {items: 1},
                    767: {items: 2},
                    1000: {items:3}
                   
                }
            });
        });
    }
})(jQuery);
/* Owl Carousel1
 ========================================================*/
;
(function ($) {
    var o = $('.owl-carousel1');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 20,
                smartSpeed: 450,
                loop: false,
                dots: true,
                dotsEach: 1,
                nav: false,
                responsive: {
                     0: {items: 1},
                    767: {items: 1},
                    1000: {items:2}
                  
                   
                }
            });
        });
    }
})(jQuery);

/* FancyBox
 ========================================================*/
;
(function ($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include('js/jquery.fancybox.js');
        include('js/jquery.fancybox-media.js');
        include('js/jquery.fancybox-buttons.js');
        $(document).ready(function () {
            o.fancybox();
        });
    }
})(jQuery);

/* Parallax
 =============================================*/
;
(function ($) {
    include('js/jquery.rd-parallax.js');
})(jQuery);
/*javascript 3
===================================================*/



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


function h2p (i){
    var targeta = i.target.id;
    var text = i.target.parentNode.children[1];
    var artcle = document.getElementsByClassName("art");
    var artcleh1 = artcle[0].children[0].children[1]
    var artcleh2 = artcle[1].children[0].children[1]
    var artcleh3 = artcle[2].children[0].children[1]
    
    
    
    
    
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
        
    
    
    
}

    
    
    
    
    
    
    }



document.getElementById("about").addEventListener("click", h2p, false);









    
    
    
    






  
