(function(){
	angular
	.module("app")
	.service("booksService", ['$q', '$http', 'constants', booksService]);

	function booksService($q, $http, constants){
		
		console.log('Service is up')
		var defer = $q.defer();
		
		var getData = function(){

			 $http.get(constants.API_URL, {
				headers: {
					'Authorization': constants.API_KEY,
					'Accept': 'application/json' 
				}
			}).then(function(response){
				defer.resolve(response.data);
			}, function(response){
				defer.reject(response)
			});

			return defer.promise
		};
			
		return{
			getData: getData
		};
	}




		// function getBookById(bookID){
		// 	return $http.get(constants.API_URL + '/' + bookID, {
		// 		headers: {
		// 			'Authorization': constants.API_KEY,
		// 			'Host': constants.API_HOST
		// 		} 
		// 	});
		// }
	
//https://api.wattpad.com:443/v4/stories -- request url 

}());