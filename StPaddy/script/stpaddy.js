//Get a random number from 0 to size of image. (image size will be passed in later)
var getRandomNumber = function(size){
	return Math.floor(Math.random()*size);
};

// calculate the distance between where the mouse clicks and the target
var getDistance = function(event, target){
	var diffx = event.offsetx - target.x;
	var diffy = event.offsetY - target.y;
	return Math.sqrt((diffx * diffx) + (diffy*diffy));
}

var getDistanceHint = function(distance){
	if (distance < 10) {
		return "Boiling Hot!"
	} else if(distance < 30) {
		return "Really Hot";
	} else{
		"More hints needed"
	}
}

var height = 600;
var width = 500;
var clicks  = 0;

var target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
}

$("#map").click(function (event){
	click++

	var distance = getDistance(event, target);
	var distanceHint = getDistanceHint(distance);
	$("#distance").text(distanceHint);
	if(distance < 9){
		alert("THIS IS THE ALERT FROM JQUERY")
	}
})