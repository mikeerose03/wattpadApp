(function(){
	angular
	.module("app")
	.factory("booksService", bookFactory);

	bookFactory.$inject = ['$q', '$http', 'constants'];

	function bookFactory($q, $http, constants){
			console.log('getfact')
			var dataObj = {
				booksData: getBooks
			};

			var getBooks = function() {
				var result = {};
				console.log("getbooks")
				 $http({
					method: 'GET',
					url: constants.API_URL,
					headers: {
						'Authorization': constants.API_KEY,
						'Host': constants.API_HOST
					}
				})
				.success(function(res){
					result = res.data;
				});
				return result;
				console.log("result returned");
			}

			return dataObj;
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