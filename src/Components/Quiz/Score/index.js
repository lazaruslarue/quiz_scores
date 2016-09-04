import angular from 'angular'
import ScoreComponent from './score.component'

export default angular.module('score',[])
  .component('scoreList', ScoreComponent)
  .run(function functionName() {
    console.log('but');
  }).name
