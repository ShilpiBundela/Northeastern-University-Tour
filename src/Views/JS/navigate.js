function setCurrentLoc() {

	var startPositionLatitude, startPositionLongitude;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var destination = JSON.parse(document.cookie);
			startPositionLatitude = position.coords.latitude;
			startPositionLongitude = position.coords.longitude;
			console.log('lat : ' + startPositionLatitude + ' long : ' + startPositionLongitude);
			initMap(startPositionLatitude, startPositionLongitude, destination);
		});
	}
}

function initMap(s_lat, s_long, destination) {
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var directionsService = new google.maps.DirectionsService;

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: {
			lat: s_lat, //42.3584308,
			lng: s_long //-71.0597732
		}
	});
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('panel'));

	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay, s_lat, s_long, destination);
	};

	$(document).ready(onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, s_lat, s_long, destination) {

	// var start = "360 huntington avenue, boston, ma";
	var start = {
		lat: s_lat,
		lng: s_long
	};
	var end = destination['dest'];
	var waypts = destination['waypts'];
	var wayPointsOpts = [];
	waypts = waypts.split('&BznY&');
	if (waypts.length !== 0) {
		for (waypt in waypts) {
			if (waypts[waypt] !== '') {
				var options = {
					location: waypts[waypt],
					stopover: true
				}
				wayPointsOpts.push(options);
			}
		}
	}
	for (waypt in wayPointsOpts) {
		console.log('waypt : ' + wayPointsOpts[waypt].location);
	}
	directionsService.route({
		origin: start,
		destination: end,
		waypoints: wayPointsOpts,
		optimizeWaypoints: true,
		travelMode: google.maps.TravelMode.DRIVING
	}, function(response, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
			var route = response.routes[0];
			var summaryPanel = document.getElementById('panel');
			summaryPanel.innerHTML = '';
			// For each route, display summary information.
			summaryPanel.innerHTML += '<button class="print__button" onclick="window.print()">PRINT</button><br>';
			for (var i = 0; i < route.legs.length; i++) {
				var routeSegment = i + 1;
				summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
					'</b><br>';
				summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
				summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
				summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
			}
			$("#panel").animate({
				left: "+=430"
			}, 700);
			if ($(".slider-arrow").is(":visible")) {
				$(".slider-arrow").hide();
			}
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}
