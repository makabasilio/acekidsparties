
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

		    
		}); // scroll spy offset ends


	/ section heroes /


		$("li.greenlantern-btn").click (function () {


			$("#starwars").fadeOut(200);
			$("#flash").fadeOut(200);
			$("#batman").fadeOut(200);
			$("#captainamerica").fadeOut(200);
			$("#spiderman").fadeOut(200);
			$("#pirate").fadeOut(200);
			$("#superman").fadeOut(200);
			$("#ninja").fadeOut(200);


			$("#greenlantern").fadeIn(600);


		}); // green lantern ends


		$("li.starwars-btn").click (function () {


			$("#flash").fadeOut(200);
			$("#batman").fadeOut(200);
			$("#captainamerica").fadeOut(200);
			$("#spiderman").fadeOut(200);
			$("#pirate").fadeOut(200);
			$("#superman").fadeOut(200);
			$("#ninja").fadeOut(200);
			$("#greenlantern").fadeOut(200);

			$("#starwars").fadeIn(600);


		}); // starwars ends


		$("li.flash-btn").click (function () {


			$("#starwars").fadeOut(200);
			$("#batman").fadeOut(200);
			$("#captainamerica").fadeOut(200);
			$("#spiderman").fadeOut(200);
			$("#pirate").fadeOut(200);
			$("#superman").fadeOut(200);
			$("#ninja").fadeOut(200);
			$("#greenlantern").fadeOut(200);

			$("#flash").fadeIn(600);


		}); // flash ends


		$("li.batman-btn").click (function () {


			$("#starwars").fadeOut(200);
			$("#flash").fadeOut(200);
			$("#captainamerica").fadeOut(200);
			$("#spiderman").fadeOut(200);
			$("#pirate").fadeOut(200);
			$("#superman").fadeOut(200);
			$("#ninja").fadeOut(200);
			$("#greenlantern").fadeOut(200);

			$("#batman").fadeIn(600);


		}); // batman ends


		$("li.captainamerica-btn").click (function () {


			$("#starwars").fadeOut(200);
			$("#flash").fadeOut(200);
			$("#batman").fadeOut(200);
			$("#spiderman").fadeOut(200);
			$("#pirate").fadeOut(200);
			$("#superman").fadeOut(200);
			$("#ninja").fadeOut(200);
			$("#greenlantern").fadeOut(200);

			$("#captainamerica").fadeIn(600);


		}); // captainamerica ends


		$("li.spiderman-btn").click (function () {


			$("#starwars").fadeOut(200);
			$("#flash").fadeOut(200);
			$("#batman").fadeOut(200);
			$("#captainamerica").fadeOut(200);
			$("#pirate").fadeOut(200);
			$("#superman").fadeOut(200);
			$("#ninja").fadeOut(200);
			$("#greenlantern").fadeOut(200);

			$("#spiderman").fadeIn(600);


		}); // spiderman ends


		$("li.pirate-btn").click (function () {


			$("#starwars").fadeOut(200);
			$("#flash").fadeOut(200);
			$("#batman").fadeOut(200);
			$("#captainamerica").fadeOut(200);
			$("#spiderman").fadeOut(200);
			$("#superman").fadeOut(200);
			$("#ninja").fadeOut(200);
			$("#greenlantern").fadeOut(200);

			$("#pirate").fadeIn(600);


		}); // pirate ends


		$("li.superman-btn").click (function () {


			$("#starwars").fadeOut(200);
			$("#flash").fadeOut(200);
			$("#batman").fadeOut(200);
			$("#captainamerica").fadeOut(200);
			$("#spiderman").fadeOut(200);
			$("#pirate").fadeOut(200);
			$("#ninja").fadeOut(200);
			$("#greenlantern").fadeOut(200);

			$("#superman").fadeIn(600);


		}); // superman ends

		$("li.ninja-btn").click (function () {


			$("#starwars").fadeOut(200);
			$("#flash").fadeOut(200);
			$("#batman").fadeOut(200);
			$("#captainamerica").fadeOut(200);
			$("#spiderman").fadeOut(200);
			$("#pirate").fadeOut(200);
			$("#superman").fadeOut(200);
			$("#ninja").fadeOut(200);
			$("#greenlantern").fadeOut(200);

			$("#ninja").fadeIn(600);


		}); // ninja ends


		  
	/ section prices flip cards /

		 document.querySelector(".card-flip").classList.toggle("flip");



	/ section bookings spiderman slide /

		$("#terms").click( function() {

			$(".spiderman-sliding").animate({top: '0px'} , "slow" , 

				function () {

					$(".tooltips").fadeIn(200);

			});

		});


		$(".accept").click( function() {


			$(".tooltips").fadeOut(200 , function () {

				$(".spiderman-sliding").animate({top: '-500px'} , "slow");
				$(".terms").css({"background-color" : "green"});

					

			});

		});


}); // document ends
