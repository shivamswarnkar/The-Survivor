
function animateName(id, initial_Size){
	var elem = document.getElementById(id).style;
	var size = elem.fontSize.slice(0, elem.fontSize.length-3);
	var mult = .5;
	if(size <= initial_Size ){

	}
	else{
		
	}


}

function play(){
	document.getElementById("play_button").style.visibility = "hidden";
	var game = document.getElementById("game");
	var game_head = document.getElementById("game_head");
	var img = document.getElementById("image");
	game.style.background = "url("+"load.svg"+")";
	game.style.backgroundColor = "White";
	game.style.color = "red";
	game_head.innerHTML = "Loading. . .";
	//img.src = "load.svg";
	//img.style.visibility = "visible";
}