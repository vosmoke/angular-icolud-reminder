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

  $scope.addTodo = function() {
    var cu = $scope.shijianliebiao[$scope.cindex];
    var data = {title:'新条目'+(cu.items.length+1),isDone:false};
    cu.items.push(data);
    localStorage.data = JSON.stringify($scope.shijianliebiao);
  }

  $scope.deleteTodo = function(index) {
    var r = [];
    var cu = $scope.shijianliebiao[$scope.cindex]; 
    for(var i=0 ; i<cu.items.length; i++){
      if( i != index){
        r.push(cu.items[i]);
      }
    } 
    $scope.shijianliebiao[$scope.cindex].items = r; 
    localStorage.data = JSON.stringify($scope.shijianliebiao);
  }
  
  $scope.save = function() {
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