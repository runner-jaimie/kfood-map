var container = document.getElementById('map'); //DOM References in the area for the map
var options = { //Default options when creating a map
	center: new kakao.maps.LatLng(33.450701, 126.570667), //Center coordinates of the map
	level: 3 //The level of the map
};

var map = new kakao.maps.Map(container, options); //Create a map and return an object