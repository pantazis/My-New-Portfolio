var galleryH = $( ".container-fluid" )[0].offsetHeight;
   console.log(galleryH);
$( ".galleryImg" ).each(function(  ) {
  
  this.style.height= galleryH/3.608333333333333 + "px";
});
