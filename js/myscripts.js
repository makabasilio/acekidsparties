
$(document).ready(function(){
    
/ scroll spy /

    $('body').scrollspy ({target: "#navegation", 
    	offset: 200}); 

/ scroll spy offset /

    var offset = 94;

	$('.navbar li a').click(function(event) {
	    event.preventDefault();
	    $($(this).attr('href'))[0].scrollIntoView();
	    scrollBy(0, -offset);

	    
	});
	  
/ section prices flip cards /

	 document.querySelector(".card-flip").classList.toggle("flip");


});
