'use strict';

/**
 * @ngdoc function
 * @name quizAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizAngularApp
 */
angular.module('quizAngularApp')
  .controller('MainCtrl', function ($scope, questions, $location) {
 
    $scope.quizList = questions.getQuizList();

    $scope.startQuiz = function( quizTitle ){
      $location.path( '/quiz/' + quizTitle );
    };
  });
