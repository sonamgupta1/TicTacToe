
IonicSideMenuApp.controller('signUpCtrl', function($scope,$state, $cordovaCamera, $stateParams, $http, $rootScope) {

    $scope.user = {};
    $scope.choice = "";

    $scope.user.gender = '';

    console.log("gender",$scope.user.gender);

    $scope.images = [];

    $scope.limitPicture = function(){
        if($scope.images.length<5){
            $scope.takePicture();
        }
        else{
            alert("limit exceed");
        }
    };

    $scope.takePicture = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 200,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };



        $cordovaCamera.getPicture(options).then(function(imageData) {

            var imgURI = "data:image/jpeg;base64," + imageData;

            $scope.images.push(imgURI);

        }, function(err) {
            // An error occured. Show a message to the user
        });

        console.log("length",$scope.images.length);

    };

    $scope.register = function() {
        alert("Comes from registration ...");
        console.log("$scope.user =====", $scope.user);

        var user       = {};
        user.name      = $scope.user.name;
        user.user_name = $scope.user.username;
        user.password  = $scope.user.password;
        user.gender    = $scope.user.gender;

        $http({
            method : 'POST',
            url : 'http://localhost:8100/api/sign_up',
            data : user,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).success(function(result){
            alert(result.message);
            console.log("result =========", result);
            $scope.user = null;
            $state.go('app.dashboard');
        }).error(function(error) {
            alert(error.message);
            console.log("error===========", JSON.stringify(error));
        })
    };

    $scope.checkUserName = function() {
        $http({
            url: 'http://localhost:8100/api/user_name',
            method: "GET",
            params: {user_name: $scope.user.username}
        }).success(function(result){
            console.log("result =========", result.data);
            if(parseInt(result.data) === 1) {
                alert("username already exists...");
            }
        }).error(function(error) {
            console.log("error===========", error);
        });
    };

});


