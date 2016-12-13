function runTour(tourType) {
	/*FULL TOUR : adds all the locations*/
	if (tourType === 'Full Tour') {
		console.log('Run Full Tour');
		document.cookie = JSON.stringify({
			dest: '360 huntington avenue, boston, ma',
			waypts: '180 huntington avenue, boston, ma&BznY&316 huntington avenue, boston, ma&BznY&440 huntington avenue, boston, ma&BznY&10 Forsyth Street, boston, ma&BznY&400 huntington avenue, boston, ma&BznY&402 huntington avenue, boston, ma&BznY&316 huntington avenue, boston, ma&BznY&420 huntington avenue, boston, ma'
		});
	}
	/*DORM TOUR : adds all the Dorm locations*/
	if (tourType === 'Dorm Tour') {
		document.cookie = JSON.stringify({
			dest: '360 huntington avenue, boston, ma',
			waypts: '334 huntington avenue, boston, ma&BznY&407 huntington avenue, boston, ma&BznY&440 huntington avenue, boston, ma&BznY&10 Forsyth Street, boston, ma&BznY&40A Leon Street, boston, ma&BznY&1155 Tremont Street, boston, ma&BznY&450 Parker Street, boston, ma&BznY&119 Hemenway Street, boston, ma'
		});
	}
	/*REC TOUR : adds all the recreation locations*/
	if (tourType === 'Rec Tour') {
		document.cookie = JSON.stringify({
			dest: '360 huntington avenue, boston, ma',
			waypts: '180 huntington avenue, boston, ma&BznY&359 huntington avenue, boston, ma&BznY&400 huntington avenue, boston, ma&BznY&402 huntington avenue, boston, ma&BznY&238 St. Bodolph Street, boston, ma'
		});
	}
	/*OFFICE TOUR : adds all the office locations*/
	if (tourType === 'Office Tour') {
		document.cookie = JSON.stringify({
			dest: '360 huntington avenue, boston, ma',
			waypts: '376 huntington avenue, boston, ma&BznY&240 huntington avenue, boston, ma&BznY&316 huntington avenue, boston, ma&BznY&420 huntington avenue, boston, ma&BznY&110 Forsyth Street, boston, ma&BznY&115 Forsyth Street, boston, ma&BznY&11 Leon Street, boston, ma&BznY&355A huntington avenue, boston, ma'
		});
	}
	/*CUSTOMIZE TOUR : adds all the customized locations*/
	if (tourType === 'Custom Tour') {
		var customWaypts = '', checkbox = '';
		customWaypts = getCustomWayPoints(customWaypts, checkbox);
		var customTour = {
			dest: '360 huntington avenue, boston, ma',
			waypts: customWaypts.wayPoints,
			checks: customWaypts.checkbox
		}
		document.cookie = JSON.stringify(customTour);
	}
	setCurrentLoc();
	window.location.href = 'navigate.html';
	console.log(document.cookie);
}

function getCustomWayPoints(customWaypts, checkboxes) {
	if (document.getElementById('checkboxSlider').checked) {
		customWaypts += '346 Huntington Avenue, boston, ma';
		checkboxes += '1';
	}
	if (document.getElementById('checkboxSlider1').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '110 Forsyth Street, boston, ma';
		checkboxes += '2';
	}
	if (document.getElementById('checkboxSlider2').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '376 Huntington Avenue, boston, ma';
		checkboxes += '3';
	}
	if (document.getElementById('checkboxSlider3').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '369 Huntington Avenue, boston, ma';
		checkboxes += '4';
	}
	if (document.getElementById('checkboxSlider4').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '40A Leon Street, boston, ma';
		checkboxes += '5';
	}
	if (document.getElementById('checkboxSlider5').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '400 Huntington Avenue, boston, ma';
		checkboxes += '6';
	}
	if (document.getElementById('checkboxSlider6').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '11 Leon Street, boston, ma';
		checkboxes += '7';
	}
	if (document.getElementById('checkboxSlider7').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '115 Forsyth Street, boston, ma';
		checkboxes += '8';
	}
	if (document.getElementById('checkboxSlider8').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '420 Huntington Avenue, boston, ma';
		checkboxes += '9';
	}
	if (document.getElementById('checkboxSlider9').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '100 Forsyth Street, boston, ma';
		checkboxes += '10';
	}
	if (document.getElementById('checkboxSlider10').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '10 Gainsborough Street, boston, ma';
		checkboxes += '11';
	}
	if (document.getElementById('checkboxSlider11').checked) {
		customWaypts += checkIfListIsEmpty(customWaypts);
		checkboxes += checkIfListIsEmpty(customWaypts);
		customWaypts += '316 Huntington Avenue, boston, ma';
		checkboxes += '12';
	}

	console.log('customWaypts : ' + customWaypts);
	return {wayPoints: customWaypts, checkbox: checkboxes};
}

function checkIfListIsEmpty(list) {
	if(list === '') {
		return '';
	} else {
		return '&BznY&';
	}
}
