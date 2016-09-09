import angular from 'angular'
import ScorelistComponent from './scorelist.component'
import Score from './Score'

export default angular
  .module('scorelist',[
    Score
  ])
  .component('scorelist', ScorelistComponent)
  .name
