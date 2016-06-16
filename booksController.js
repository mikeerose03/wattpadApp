(function(){
	angular
		.module('app')
		.controller('booksController',  [ '$q', '$scope', 'booksService', booksController]);

		function booksController($q, $scope, booksService){
			var vm= this;
			
			console.log('Controller is up')

			booksService.getData().then(function(data){
				console.log('data received in controller!');
				vm.data = data;
			}).catch(function(){
				vm.error = 'unable to fetch data'
			});
		};
}());