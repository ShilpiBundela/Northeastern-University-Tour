var map;
var infowindow;
var locations = [],
	photoURLs = [],
	markers = [],
	animatedMarker = -1;
elementsLoaded = 0;
currentLocation = 1000;

function initialize() {
	var center = new google.maps.LatLng(42.3392599, -71.0929917);
	map = new google.maps.Map(document.getElementById('map'), {
		center: center,
		zoom: 15,
		streetViewControl: true

	});

	var placetypes = ['cafe', 'bakery', 'bar', 'restaurant', 'meal_delivery', 'meal_takeaway'];

	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
	for (var i = 0; i < placetypes.length; i++) {
		var request = {
			location: center,
			radius: 8047,
			type: placetypes[i]
		};
		service.textSearch(request, callback);
	}
	checkLocations();
}

function callback(results, status) {
	if (status = google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
			locations.push(results[i]);
		}
	}
}


function checkLocations() {
	setTimeout(function() {
		console.log('log : ' + locations.length);
		if (currentLocation != locations.length) {
			currentLocation = locations.length;
			checkLocations();
		} else if (locations.length > 0) {
			markOnMap(locations);
		} else {
			checkLocations();
		}
	}, 10);
}

function markOnMap(mapLocation) {
	console.log('now this is : ' + mapLocation.length);
	for (var i = 0; i < mapLocation.length; i++) {
		//get marker image
		var photo = mapLocation[i].photos,
			photoURL;
		if (!photo) {
			photoURL = '../Images/default__image.png';
		} else {
			photoURL = mapLocation[i].photos[0].getUrl({
				'maxWidth': 150,
				'maxHeight': 100
			});
		}
		photoURLs.push(photoURL);
		createMarker(mapLocation[i], photoURL);
	}
}

function createMarker(place, photoURL) {
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	markers.push(marker);

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent('<img src="' + photoURL + '" height="100" width="125"/>&nbsp;&nbsp;&nbsp;&nbsp;<div style="display:inline-block;"><strong style="font-size:15px; text-decoration:underline;">' + place.name + '</strong><br><br>' +
			place.formatted_address + '<br><span><a href="#" onclick="setDirectionCookie('+ '\'' + place.formatted_address + '\'' +')">Get Directions</a></span></div>');
		infowindow.open(map, this);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

$('.slider-arrow').on('click', function() {
	var panelContent = document.getElementById('panel');
	if ($(this).hasClass('show') && elementsLoaded < locations.length) {
		console.log('panelContent : ' + elementsLoaded);
		for (var i = 0; i < locations.length; i++) {
			var content = '<div class="mapList" onclick=" toggleBounce(' + i + ')" >' +
				'<div class="mapList__image">' +
				'<img src="' + photoURLs[i] + '" height="75px" width="100px" />&nbsp;&nbsp;&nbsp;&nbsp;' +
				'</div>' +
				'<div class="mapList__information">' +
				'<span>' + locations[i].name + '</span>' +
				'<br><br>' + locations[i].formatted_address +
				'</span></div></div>';
			panelContent.innerHTML += content;
			elementsLoaded++;
		}
	} else {
		return;
	}
});


function toggleBounce(i) {
	if(animatedMarker !== -1)
		markers[animatedMarker].setAnimation(null);
	markers[i].setAnimation(google.maps.Animation.BOUNCE);
	animatedMarker = i;
}

function setDirectionCookie(name) {
	document.cookie = JSON.stringify({dest:name , waypts:''});
	console.log(document.cookie);
	setCurrentLoc();
}
