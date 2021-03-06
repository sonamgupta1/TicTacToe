// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var IonicSideMenuApp = angular.module('starter', ['ionic','ngCordova'])

IonicSideMenuApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

IonicSideMenuApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.logOut', {
    url: '/logOut',
    views: {
      'menuContent': {
        templateUrl: 'templates/logOut.html'
      }
    }
  })

  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })

      .state('app.home', {
          url: '/home',
          views: {
              'menuContent': {
                  templateUrl: 'templates/home.html',
                  controller:'homeCtrl'
              }
          }
      })
      .state('app.signUp', {
          url: '/signUp',
          views: {
              'menuContent': {
                  templateUrl: 'templates/signUp.html',
                  controller: 'signUpCtrl'
              }
          }
      })
      .state('app.dashboard', {
          url: '/dashboard',
          views: {
              'menuContent': {
                  templateUrl: 'templates/dashboard.html',
                  controller:'DashboardCtrl'
              }
          }
      })
      .state('app.newGame', {
          url: '/newGame',
          views: {
              'menuContent': {
                  templateUrl : 'templates/newGame.html',
                  controller  :'newGameCtrl'
              }
          }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
