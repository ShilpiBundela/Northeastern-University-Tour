function checkCookie() {
	var getCookies = JSON.parse(document.cookie);
	var checkBoxCookies = getCookies['checks'];

	checkBoxCookies = checkBoxCookies.split('&BznY&');

	for (cookie in checkBoxCookies) {
		switch (checkBoxCookies[cookie]) {
			case '1':
				document.getElementById('checkboxSlider').checked = true;
				break;
			case '2':
				document.getElementById('checkboxSlider1').checked = true;
				break;
			case '3':
				document.getElementById('checkboxSlider2').checked = true;
				break;
			case '4':
				document.getElementById('checkboxSlider3').checked = true;
				break;
			case '5':
				document.getElementById('checkboxSlider4').checked = true;
				break;
			case '6':
				document.getElementById('checkboxSlider5').checked = true;
				break;
			case '7':
				document.getElementById('checkboxSlider6').checked = true;
				break;
			case '8':
				document.getElementById('checkboxSlider7').checked = true;
				break;
			case '9':
				document.getElementById('checkboxSlider8').checked = true;
				break;
			case '10':
				document.getElementById('checkboxSlider9').checked = true;
				break;
			case '11':
				document.getElementById('checkboxSlider10').checked = true;
				break;
			case '12':
				document.getElementById('checkboxSlider11').checked = true;
				break;
			default:
				console.log('No Cookies found');
		}
	}
}
