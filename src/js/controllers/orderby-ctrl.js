/*
Dropdown Controller
Current files being worked on with button control
Events (tables.html)
*/

angular
		.module('RDash')
		.controller('OrderbyCtrl', ['$scope', function($scope) {

		/* THIS WILL DEFINITELY NOT BE HARDCODED INFORMATION */
  	$scope.events = [
    	{id: 1, buidling: 'NAAB', floor: 2, room: 207, title: 'Code Samurai Talk'},
    	{id: 2, buidling: 'NAAB', floor: 2, room: 205, title: 'Big Data Talk'},
    	{id: 3, buidling: 'STEM', floor: 4, room: 411, title: 'Biology Group Meeting'},
    	{id: 4, buidling: 'GLAB', floor: 5, room: 501, title: 'Designer Central Discussion'},
    	{id: 5, buidling: 'STEM', floor: 3, room: 309, title: 'Chemistry and Romance'},
			{id: 6, building: 'NAAB', floor: 2, room: 206, title: 'ACM Meeting'}
  	];

}]);
