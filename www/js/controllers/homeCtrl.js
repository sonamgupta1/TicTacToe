IonicSideMenuApp.controller('homeCtrl', function($scope,$state, $ionicModal, $timeout, $http) {

    $scope.user = {};

    $scope.signUpPage = function(){

        $state.go('app.signUp');
    };

    $scope.login = function(){

        alert("Comes from Login function ....");
        console.log("$scope.user ====", $scope.user);

        $http({
            url: 'http://localhost:8100/api/login',
            method: "GET",
            params: {user_name: $scope.user.username, password: $scope.user.password}
        }).success(function(result){

            if(parseInt(result.status) === 200) {
                alert(result.message);
                $state.go('app.dashboard');
            } else if(parseInt(result.status) === 400) {
                alert(result.message);
            }
        }).error(function(error) {
            alert("There is something wrong happen !!!!");
            console.log("error", error);
        });

    }
});
