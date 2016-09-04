import angular from 'angular'
import QuizComponent from './quiz.component'
import QuizService from './quiz.service'

// import Score from './Score'
import Scorelist from './ScoreList'
import AddScore from './AddScore'
import Analysis from './Analysis'

const Quiz = angular
  .module('quiz', [
    Scorelist,
    AddScore,
    Analysis
  ])
  .component('quiz', QuizComponent)
  .service('QuizService', QuizService)
  .run(function functionName() {
    console.log('quiz');
  })
  .name


export default Quiz
