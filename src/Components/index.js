import angular from 'angular'
import Quiz from './Quiz'
import Score from './Score'


const Components = angular
  .module('quiz.components', [
    Quiz,
    Score,
  ])
  .name


export default Components
