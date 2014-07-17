/*global $:false */
'use strict';

/**
 * @ngdoc function
 * @name quizAngularApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizAngularApp
 */
angular.module('quizAngularApp')
  .controller('QuizCtrl', function ($scope, QuizFactory, $location, $routeParams) {
    
    QuizFactory.setQuiz( $routeParams.quizTitle );

    $scope.questionNumber = QuizFactory.getCount();
    $scope.question = QuizFactory.getQuestion();
    $scope.choices  = QuizFactory.getChoices();

    $scope.count  = QuizFactory.getCount();
    $scope.quizLength = QuizFactory.getQuizLength();

    $scope.showAlert    = false;
    $scope.alertClass   = '';
    $scope.alertMessage = '';

    var makeAlert = function( isCorrect, userAnswer ){
      
      $('.alert').removeClass('alert-danger alert-success');
      $scope.showAlert = true;

      if( isCorrect ){
        $('.alert').addClass('alert-success');
        $scope.alertMessage = userAnswer + ' is Correct!';
      } else {
        $('.alert').addClass('alert-danger');
        $scope.alertMessage = 'Dummy! ' + userAnswer + ' is wrong! ' + QuizFactory.getAnswer() + ' is the correct answer!';
      }
    };

    var refresh = function(){
      $scope.question = QuizFactory.getQuestion();
      $scope.choices  = QuizFactory.getChoices();
      $scope.count  = QuizFactory.getCount();
    };

    $scope.answerQuestion = function( answer ){
      var isCorrect = QuizFactory.checkAnswer( answer );
      makeAlert( isCorrect, answer );
    };

    $scope.nextQuestion = function(){
      $scope.showAlert = false;
      if( QuizFactory.nextQuestion() ){
        refresh();
      } else {
        $location.path('/score');
      }
    };
  });
