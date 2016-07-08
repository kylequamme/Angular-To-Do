angular.module('myAngularApp', []);

angular.module('myAngularApp').controller('AppController', function($scope){
  $scope.viewToDo = false;
  $scope.list = [];
  var id = 0;
  $scope.submitToDo = function(){
    $scope.viewToDo = true;
    $scope.list.push({id : id, desc: $scope.inputToDo, rm: false});
    id++;
  };
  $scope.markForRemoval = function(item){
    if(!item.rm){
      item.rm = true;
    }else{
      item.rm = false;
    }
    // console.log('marked for removal', item.rm);
  };
  $scope.removeItems = function(){
    for (var i = 0; i < $scope.list.length; i++) {
      if($scope.list[i].rm){
        $scope.list.splice(i, 1);
        i--;
      }
    }
  }

})
