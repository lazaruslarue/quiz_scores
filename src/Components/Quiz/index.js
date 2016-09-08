import angular from 'angular'
// import angularCookies from 'angular-cookies'
import QuizComponent from './quiz.component'
import QuizService from './quiz.service'

// import Score from './Score'
import Scorelist from './ScoreList'
import AddScore from './AddScore'
import Analysis from './Analysis'

const Quiz = angular
  .module('quiz', [
    // angularCookies,
    Scorelist,
    AddScore,
    Analysis
  ])
  .component('quiz', QuizComponent)
  .service('QuizService', QuizService)
  .run(function functionName() {
  })
  .name


export default Quiz
