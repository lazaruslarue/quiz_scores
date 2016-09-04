import angular from 'angular'
import ScoreComponent from './score.component'

export default angular
  .module('score',[])
  .component('score', ScoreComponent)
  .run(function functionName() {
  }).name
