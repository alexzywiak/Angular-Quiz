'use strict';

/**
 * @ngdoc service
 * @name quizAngularApp.questions
 * @description
 * # questions
 * Factory in the quizAngularApp.
 */
angular.module('quizAngularApp')
  .factory('questions', function () {

    var quizList = [
      {
        title : 'CapitalQuiz',
        questions :[
          {
            question  : 'What is the capital of Brazil?',
            choices   : ['Mexico', 'Lima', 'Brussels', 'Brasilia'],
            answer    : 'Brasilia'
          },
          {
            question  : 'What is the capital of Mexico?',
            choices   : ['America', 'Peru', 'Mexico City', 'Tacos'],
            answer    : 'Mexico City'
          },
          {
            question  : 'What is the capital of Canada?',
            choices   : ['NHL', 'Tim Hortons', 'Moosejaw', 'Ottawa'],
            answer    : 'Ottawa'
          }
        ]
      },
      {
        title : 'Catch22Quiz',
        questions :[
          {
            question  : 'What does General Peckham dread?',
            choices   : ['Peaches', 'Yossarian', 'A Black Eye', 'A Feather in His Cap'],
            answer    : 'A Black Eye'
          },
          {
            question  : 'Who is Yossarians first tentmate?',
            choices   : ['Oar', 'Nately', 'Natelys Whore', 'Yo-Yo'],
            answer    : 'Oar'
          },
          {
            question  : 'What does Oar keep in his cheeks?',
            choices   : ['A Cat', 'Chief White Halfoat', 'Cotton', 'Crab Apples'],
            answer    : 'Crab Apples'
          }
        ]
      },
      {
        title : 'ElementsQuiz',
        questions :[
          {
            question  : 'What goes with Earth and Wind?',
            choices   : ['Passing Gas', 'Fire', '70s Funk', 'Weed'],
            answer    : 'Fire'
          },
          {
            question  : 'What is the Moleular formula for sulfuric acid?',
            choices   : ['LSD', 'Trippin Ballz', 'H2S04', 'That shit Burns!'],
            answer    : 'H2S04'
          },
          {
            question  : 'Why does Batman like Sodium?',
            choices   : ['Potato Chips', 'Na Na Na Na Na Batman!', 'Joker Hates It', 'I failed Chem'],
            answer    : 'Na Na Na Na Na Batman!'
          }
        ]
      }
    ];

    return {
      getQuizList: function() {
        var titles = [];

        for( var i = 0, len = quizList.length; i < len; i++){
          titles.push( quizList[i].title );
        }
        return titles;
      },

      getQuestions: function( quizTitle ){
        for( var i = 0, len = quizList.length; i < len; i++){
          if( quizTitle === quizList[i].title ){
            return quizList[i].questions;
          }
        }
      }
    };
  });
