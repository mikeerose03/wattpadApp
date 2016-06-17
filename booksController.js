(function(){
	angular
		.module('app')
		.controller('booksController',  [ '$q', '$scope', 'booksService', booksController]);

		function booksController($q, $scope, booksService){
			var vm= this;
			vm.data = {};

			console.log('Controller is up')
			booksService.getData().then(function(data){
				vm.data = data;
				// vm.data = JSON.parse(vm.data1);
				 console.log('data received in controller! ', vm.data);
			}).catch(function(){
				vm.error = 'unable to fetch data'
			});
		};
}());