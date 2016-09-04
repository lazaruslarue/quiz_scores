import angular from 'angular'
import QuizComponent from './quiz.component'
import QuizService from './quiz.service'

import Score from './Score'

const Quiz = angular
  .module('quiz', [Score])
  .component('quiz', QuizComponent)
  .service('QuizService', QuizService)
  .run(function functionName() {
    console.log('ass');
  })
  .name


export default Quiz
