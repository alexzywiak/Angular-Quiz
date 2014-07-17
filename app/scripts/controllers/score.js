'use strict';

/**
 * @ngdoc function
 * @name quizAngularApp.controller:ScoreCtrl
 * @description
 * # ScoreCtrl
 * Controller of the quizAngularApp
 */
angular.module('quizAngularApp')
  .controller('ScoreCtrl', function ($scope, QuizFactory) {
    $scope.score = QuizFactory.getScore();
    $scope.percentage = Math.round( $scope.score.right / QuizFactory.getQuizLength() * 100);
  });
