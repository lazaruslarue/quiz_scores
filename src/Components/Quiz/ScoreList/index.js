import angular from 'angular'
import ScorelistComponent from './scorelist.component'
import Score from './Score'
// import ScoreAutoUpdate from './scoreAutoUpdate.directive'
// import NameAutoUpdate from './nameAutoUpdate.directive'
export default angular
  .module('scorelist',[
    Score
  ])
  // .directive('nameAutoUpdate', ()=> new NameAutoUpdate)
  // .directive('scoreAutoUpdate', ()=> new ScoreAutoUpdate)
  .component('scorelist', ScorelistComponent)
  .run(function functionName() {
  }).name
