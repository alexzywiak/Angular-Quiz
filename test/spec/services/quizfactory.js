'use strict';

describe('Service: QuizFactory', function () {

  // load the service's module
  beforeEach(module('quizAngularApp'));

  // instantiate service
  var QuizFactory;
  beforeEach(inject(function (_QuizFactory_) {
    QuizFactory = _QuizFactory_;
  }));

  it('should do something', function () {
    expect(!!QuizFactory).toBe(true);
  });

});
