'use strict';

/**
 * @ngdoc overview
 * @name quizAngularApp
 * @description
 * # quizAngularApp
 *
 * Main module of the application.
 */
angular
  .module('quizAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/score', {
        templateUrl: 'views/score.html',
        controller: 'ScoreCtrl'
      })
      .when('/quiz/:quizTitle', {
        templateUrl: 'views/quiz.html',
        controller: 'QuizCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
