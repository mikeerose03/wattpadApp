(function(){
	angular
		.module('app')
		.controller('listController', listController);

		function listController(){
			var vm = this;
			vm.current=0;
			vm.prev=0;
			vm.next= vm.current + 1; 
		}
}());