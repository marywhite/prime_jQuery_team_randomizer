var teamList = [
				"Cody",
				"Mary",
				"Brian",
				"Alicia",
				"Erik",
				"Michael",
				"Kelly",
				"Chelsea",
				"Luke",
				"Clare",
				"KC",
				"Kaitlin",
				"Michelle",
				"Tracy",
				"Aaron",
				"Terry",
				"Vince",
				"Rom",
				"Steve",
				"Jeanne"
				];

var groupSize = 0;


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function (){
	$(".teamSizeButton").on("click", function(){
		groupSize = $(this).data("teamsize");

	});

	$(".refreshButton").on("click", function(){
		var count = 1;

		teamList = shuffle(teamList);

		$(".teamContainer").empty();

		for(var i = 0; i < groupSize; i++){
			$(".teamContainer").append("<div class='nameList' id='group" + (i+1) + "'>Group " + (i+1) + "</div>");
		}

		var animationArray = [];

		for(i = 0; i < teamList.length; i++){
			var targetParent = $('#group' + count);
			var el = "<p>" + teamList[i] + "</p>";
			
			targetParent.append(el);
			el = targetParent.children().last();

			el.hide().delay(i * 500).slideDown();
			

			count++;
			if(count > groupSize){
				count = 1;
			}
		}

	});
});