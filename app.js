(function(){
	angular
	.module('app', ['ngResource'])
	.controller('booksController',  booksController);

	booksController.$inject=['constants', 'booksService'];

	function booksController(constants, booksService){
		var vm= this;
		console.log('hello',booksService);
		vm.search = "";
		vm.searchID = "";
		vm.hello = "hello";
		vm.data = booksService.booksData;
		console.log('data:', vm.data);

		// function getBooksSuccess(data){
		// 	vm.data = data;
		// }

		// function errorCallback(res){
		// 	console.log('Error Message: ' + res);
		// }

		// function getBooksComplete(){
		// 	console.log('getAllBooks has completed');
		// }
	}
}());