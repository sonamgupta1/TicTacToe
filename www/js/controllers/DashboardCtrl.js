IonicSideMenuApp.controller('DashboardCtrl', function($scope, $http) {

    $scope.dashBoardData ="";

    $scope.getDashboard = function() {
        $http({
            url: 'http://localhost:8100/api/dashboard',
            method: "GET",
            params: {access_token: "d39fd0cebfbca91ace90a8b75f678997"}
        }).success(function(result){

            $scope.dashBoardData = result.data;
            console.log(result.message);
            console.log("result.data =======",result.data);

        }).error(function(error) {
            alert("Comes from error");
            console.log("error", error);
        });
    };

    $scope.getDashboard();
});
