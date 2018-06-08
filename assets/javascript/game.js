$(document).ready(function() {

crystals =["assets/images/saphire-gem.png", "assets/images/pink-gem.png", "assets/images/emerald-gem.png", "assets/images/black-and-white-gem.png"]

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses);


	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $("<img>");
			imageCrystal.attr("data-num", numbers[i]);
			imageCrystal.attr("src", crystals[i]);
			imageCrystal.attr("alt", "crystals");
			imageCrystal.addClass("crystalImage")
			$(".crystals").append(imageCrystal);
		}
	}

	function newGame() {
    alert ("Greetings, padiwan! The day is finally here. You and the other younglings are to hunt for KYBER CRYSTALS in the crystal caves. Kyber crystals are the one material in the galaxy that is strong to power your lightsaber... Except, something is preventing these future Jedi from force-bonding with their crystals, rendering the stones useless. Now's the chance for you to earn your lightsaber and help the other students unlock their gifts!");
		counter = 0;
		$("#yourScore").text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$(".value").text(numberToGuess);


		$(".crystalImage").on('click', function(){
		    counter = counter + parseInt($(this).data('num'));

		    $("#yourScore").text(counter);

		    if (counter == numberToGuess){
		      $("#message").text("You won!");
		      wins ++;
		      $("#win").text(wins);
		      console.log(wins)
		      $(".crystals").empty();
		      newCrystals();
		      newGame();

		    } else if ( counter > numberToGuess){
		        $("#message").text("You lost")
		        losses ++;
		        $("#loss").text(losses);
		        console.log(losses)
		        $(".crystals").empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});
