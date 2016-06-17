(function(){
	angular
		.module('app')
		.controller('booksController',  ['$q', '$scope', 'booksService', booksController]);

		function booksController($q, $scope, booksService, $ngDialog){
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

			vm.openDialog = function(){
				ngDialog.open({
					template: 'template.html'
				});
			};

			vm.changeCurrentStory= function(index){
				vm.activeStory = index;
				// console.log('current: ', vm.activeStory);
			}
		};



}());