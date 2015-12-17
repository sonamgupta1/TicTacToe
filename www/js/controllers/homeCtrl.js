IonicSideMenuApp.controller('homeCtrl', function($scope,$state, $ionicModal, $timeout) {


    $scope.signUpPage = function(){

        $state.go('app.signUp');
    }

    $scope.login = function(){
        $state.go('app.dashboard');
    }
})
