
$(document).ready(function(){
    
	/* scroll spy */

	    $('body').scrollspy ({target: "#navegation", 
	    	offset: 200}); 

	/ scroll spy offset /

	    
		$('.navbar li a').click(function(event) {
		    
		    $("html , body").animate({ 
		    	scrollTop: $( $.attr(this, "href") ).offset().top - 68 //offset position
		    }, 2000);

		    event.preventDefault();


		    
		}); // scroll spy offset ends


	/* section heroes */


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


		  
	/* section prices flip cards */

		 document.querySelector(".card-flip").classList.toggle("flip");



	/* section bookings spiderman slide */

		$("#terms").click( function() {

			$(".spiderman-sliding").animate({top: '-70px'} , "slow" , 

				function () {

					$(".tooltips").fadeIn(200);

			});

		});


		$(".accept").click( function() {


			$(".tooltips").fadeOut(200 , function () {


				$(".tooltips2").fadeIn(200);
				$(".tooltips2").delay(1200).fadeOut(200 , function () {

					$(".spiderman-sliding").animate({top: '-600px'} , "slow");
					$(".terms").css({"background-color" : "green"});


				});					

			});

		});


		/* Invitation previews */


		$("td#preview-btn1").click (function () {


			$("#starwars-preview").fadeOut(200);
			$("#flash-preview").fadeOut(200);
			$("#batman-preview").fadeOut(200);
			$("#captainamerica-preview").fadeOut(200);
			$("#spiderman-preview").fadeOut(200);
			$("#pirate-preview").fadeOut(200);
			$("#greenlantern-preview").fadeOut(200);
			$("#ninja-preview").fadeOut(200);


			$("#superman-preview").fadeIn(600);

		}); // preview btn1 ends	


		$("td#preview-btn2").click (function () {


			$("#starwars-preview").fadeOut(200);
			$("#flash-preview").fadeOut(200);
			$("#superman-preview").fadeOut(200);
			$("#captainamerica-preview").fadeOut(200);
			$("#spiderman-preview").fadeOut(200);
			$("#pirate-preview").fadeOut(200);
			$("#greenlantern-preview").fadeOut(200);
			$("#ninja-preview").fadeOut(200);


			$("#batman-preview").fadeIn(600);

		}); // preview btn2 ends	


		$("td#preview-btn3").click (function () {


			$("#starwars-preview").fadeOut(200);
			$("#flash-preview").fadeOut(200);
			$("#superman-preview").fadeOut(200);
			$("#captainamerica-preview").fadeOut(200);
			$("#batman-preview").fadeOut(200);
			$("#pirate-preview").fadeOut(200);
			$("#greenlantern-preview").fadeOut(200);
			$("#ninja-preview").fadeOut(200);


			$("#spiderman-preview").fadeIn(600);

		}); // preview btn3 ends


		$("td#preview-btn4").click (function () {


			$("#starwars-preview").fadeOut(200);
			$("#flash-preview").fadeOut(200);
			$("#batman-preview").fadeOut(200);
			$("#captainamerica-preview").fadeOut(200);
			$("#spiderman-preview").fadeOut(200);
			$("#pirate-preview").fadeOut(200);
			$("#superman-preview").fadeOut(200);
			$("#ninja-preview").fadeOut(200);


			$("#greenlantern-preview").fadeIn(600);

		}); // preview btn4 ends	


		$("td#preview-btn5").click (function () {


			$("#starwars-preview").fadeOut(200);
			$("#batman-preview").fadeOut(200);
			$("#superman-preview").fadeOut(200);
			$("#captainamerica-preview").fadeOut(200);
			$("#spiderman-preview").fadeOut(200);
			$("#pirate-preview").fadeOut(200);
			$("#greenlantern-preview").fadeOut(200);
			$("#ninja-preview").fadeOut(200);


			$("#flash-preview").fadeIn(600);

		}); // preview btn5 ends	


		$("td#preview-btn6").click (function () {


			$("#starwars-preview").fadeOut(200);
			$("#flash-preview").fadeOut(200);
			$("#superman-preview").fadeOut(200);
			$("#spiderman-preview").fadeOut(200);
			$("#batman-preview").fadeOut(200);
			$("#pirate-preview").fadeOut(200);
			$("#greenlantern-preview").fadeOut(200);
			$("#ninja-preview").fadeOut(200);


			$("#captainamerica-preview").fadeIn(600);

		}); // preview btn6 ends


		$("td#preview-btn7").click (function () {


			$("#superman-preview").fadeOut(200);
			$("#flash-preview").fadeOut(200);
			$("#batman-preview").fadeOut(200);
			$("#captainamerica-preview").fadeOut(200);
			$("#spiderman-preview").fadeOut(200);
			$("#pirate-preview").fadeOut(200);
			$("#superman-preview").fadeOut(200);
			$("#ninja-preview").fadeOut(200);


			$("#starwars-preview").fadeIn(600);

		}); // preview btn7 ends	


		$("td#preview-btn8").click (function () {


			$("#starwars-preview").fadeOut(200);
			$("#flash-preview").fadeOut(200);
			$("#superman-preview").fadeOut(200);
			$("#captainamerica-preview").fadeOut(200);
			$("#spiderman-preview").fadeOut(200);
			$("#pirate-preview").fadeOut(200);
			$("#greenlantern-preview").fadeOut(200);
			$("#batman-preview").fadeOut(200);


			$("#ninja-preview").fadeIn(600);

		}); // preview btn8 ends	


		$("td#preview-btn9").click (function () {


			$("#starwars-preview").fadeOut(200);
			$("#flash-preview").fadeOut(200);
			$("#superman-preview").fadeOut(200);
			$("#captainamerica-preview").fadeOut(200);
			$("#batman-preview").fadeOut(200);
			$("#spiderman-preview").fadeOut(200);
			$("#greenlantern-preview").fadeOut(200);
			$("#ninja-preview").fadeOut(200);


			$("#pirate-preview").fadeIn(600);

		}); // preview btn9 ends	


}); // document ends
