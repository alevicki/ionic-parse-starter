// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ionicParseApp',
        [ 'ionic', 'ionicParseApp.controllers' ]
    )
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('welcome', {
                url: '/welcome?clear',
                templateUrl: 'templates/welcome.html',
                controller: 'WelcomeController'
            })
            
            .state('main', {
                url: '/main?clear',
                abstract: true,
                templateUrl: 'templates/main.html'
            })

            .state('main.home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'templates/home.html'
                    }
                },
                controller: 'HomeController'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            })

            .state('forgot', {
                url: '/forgot',
                templateUrl: 'templates/forgotPassword.html',
                controller: 'ForgotPasswordController'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html',
                controller: 'RegisterController'
            });

        $urlRouterProvider.otherwise('/welcome');
    })
    .run(function ($state, $rootScope) {
        Parse.initialize('applicationId', 'javascriptKey');
        var currentUser = Parse.User.current();
        if (currentUser) {
            $rootScope.user = currentUser;
            $state.go('main.home');
        }
    });

