/**
 * Created by sonam on 13/8/15.
 */
IonicTabApp.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})
