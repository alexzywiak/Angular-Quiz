'use strict';

/**
 * @ngdoc service
 * @name quizAngularApp.QuizFactory
 * @description
 * # QuizFactory
 * Factory in the quizAngularApp.
 */
angular.module('quizAngularApp')
  .factory('QuizFactory', ['questions', function ( questions ) {
      
      var questionList  = questions.getQuestions( 'CapitalQuiz' ),
          count = 0,
          score = { right: 0, wrong: 0};

      var check = function( userAnswer ){
        var isCorrect = false;
        if( userAnswer === questionList[ count ].answer ){
          isCorrect = true;
        } else {
          isCorrect = false;
        }
        addScore( isCorrect );
        return isCorrect;
      };

      var addScore = function( isCorrect ){
        if( isCorrect ){
          score.right++;
        } else {
          score.wrong++;
        }
      };

      return {
        setQuiz: function( quizTitle ){
          questionList = questions.getQuestions( quizTitle );
        },

        nextQuestion: function(){
          count++;
          if( count < questionList.length ){
            return true;
          } else {
            return false;
          }
        },

        getScore: function(){
          return score;
        },

        getCount: function(){
          return count+1;
        },

        getQuizLength: function(){
          return questionList.length;
        },

        getQuestion: function() {
          return questionList[ count ].question;
        },

        getChoices: function(){
          return questionList[ count ].choices;
        },

        getAnswer: function(){
          return questionList[ count ].answer;
        },

        checkAnswer : function( userAnswer ){
          return check( userAnswer );
        }
      };
    }]);
