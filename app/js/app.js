/**
* @fileOverview Angular application bootstrapper
* @version 0.0.1
*/

'use strict';

/**
* Setup our Angular module.
* @name angularTemplate
*/
angular.module('angularTemplate', [
    'ngSanitize',
    'ngRoute',
    'route-segment',
    'view-segment',
    'ngAnimate',
    'angularMoment',
    'ui.bootstrap'
])
    .config(function($routeSegmentProvider, $routeProvider, $locationProvider, $httpProvider) {
        $routeSegmentProvider.options.autoLoadTemplates = true;
        $routeSegmentProvider
            .when("/", "main") // for now, the homepage

        // Setup app routes
        $routeSegmentProvider.segment("main", {
            templateUrl: "js/main/views/main.html",
            controller: "MainCtrl"
        });

        $routeProvider.otherwise({
            redirectTo: "/"
        });

        $locationProvider.html5Mode(true);
    })
    .run(function($rootScope, $location) {

        $rootScope.url = function(url){
            $location.path(url);
        };
    });
