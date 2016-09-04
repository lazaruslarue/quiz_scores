import angular from 'angular'
import QuizComponent from './quiz.component'


const Quiz = angular
  .module('quiz', [])
  .component('quiz', QuizComponent)
  .run(function functionName() {
    console.log('ass');
  })
  .name


export default Quiz
