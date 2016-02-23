var reminder = angular.module('reminder',[]);
reminder.controller('rdCtrl', ['$scope', function($scope){
	var d = localStorage.data;
	$scope.shijianliebiao = d?JSON.parse(d):[];

	$scope.colors = ['purple','green','blue','yellow','brow','pink','orange'];

	$scope.cindex = 0;

	$scope.setItem = function(index) {
		$scope.cindex = index;
	}

	$scope.addItem = function() {
		var data = {
			name:'新列表 ' + ($scope.shijianliebiao.length+1),
			color:$scope.colors[$scope.shijianliebiao.length%7],
			items:[]
		};
		$scope.shijianliebiao.push(data);
		localStorage.data = JSON.stringify($scope.shijianliebiao);
	}

	$scope.deleteItem = function() {
		var r = [];
		for(var i=0; i<$scope.shijianliebiao.length; i++){
			if(i != $scope.cindex){
				r.push($scope.shijianliebiao[i]);
			}
		}
		$scope.shijianliebiao = r;
		$scope.cindex = 0;
		localStorage.data = JSON.stringify($scope.shijianliebiao);
	}
	// $scope.clear = function() {
	// 	localStorage.clear();
	// 	location.reload();
	// }
	// $scope.zz = function(ev) {
	// 	ev.stopPropagation();
	// }
}])