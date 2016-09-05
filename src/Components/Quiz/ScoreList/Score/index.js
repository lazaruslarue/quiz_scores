import angular from 'angular'
import ScoreComponent from './score.component'
require('./style.scss')

export default angular
  .module('score',[])
  .component('score', ScoreComponent)
  .run(function functionName() {
  }).name
