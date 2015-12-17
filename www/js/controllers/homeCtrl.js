IonicSideMenuApp.controller('homeCtrl', function($scope,$state, $ionicModal, $timeout) {


    $scope.signUpPage = function(){

        $state.go('app.signUp');
    }

    $scope.login = function(username,password){

        console.log("username",username);
        console.log("password",password);
        $state.go('app.dashboard');
    }
})
