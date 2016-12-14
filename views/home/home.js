/**
 *
 */
console.log(angular.module("myapp"));
angular.module("myapp")
    .controller("homeCtrl",function($scope,$http,$ionicLoading){
        //无限刷新选项 loadmore()
        $scope.home=[];
        $scope.loadmore=function(){
            //显示刷新等待图标
            $ionicLoading.show();
            $http.get("data.json").success(function(data){
                $ionicLoading.hide();
                Array.prototype.push.apply($scope.home,data);
                //$scope.home=data;
            }).finally(function () {
                $scope.$broadcast("scroll.infiniteScrollComplete")
            })
        };


    });
