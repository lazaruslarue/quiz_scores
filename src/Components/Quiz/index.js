import angular from 'angular'
import QuizComponent from './quiz.component'
import QuizService from './quiz.service'

// import Score from './Score'
import Scorelist from './ScoreList'
import AddScore from './AddScore'

const Quiz = angular
  .module('quiz', [
    Scorelist,
    AddScore
  ])
  .component('quiz', QuizComponent)
  .service('QuizService', QuizService)
  .run(function functionName() {
    console.log('quiz');
  })
  .name


export default Quiz
