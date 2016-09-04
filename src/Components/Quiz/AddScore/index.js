import angular from 'angular'
import AddScoreComponent from './addscore.component'

const addScore = angular
  .module('quiz')
  .component('addScore', AddScoreComponent)
  .value('EventEmitter', payload => ({$event: payload}))
  .name

export default addScore;
