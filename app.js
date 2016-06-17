(function(){
	angular
		.module('app', ['ngResource', 'ngDialog'])
		.constant('constants', {
            API_URL: 'https://api.wattpad.com:443/v4/stories',
            API_KEY: 'COmAsfoTl5bHFOoHoKl8uQCo12cA8sl2ytzk2RPu3uRB',
            API_HOST: 'api.wattpad.com'
        });
}());