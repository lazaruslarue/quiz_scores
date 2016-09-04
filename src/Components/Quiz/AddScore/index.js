import angular from 'angular'
import AddScoreComponent from './addscore.component'

export default angular
  .module('addScore',[])
  .component('addScore', AddScoreComponent)
  .value('EventEmitter', payload => ({$event: payload}))
  .run(function functionName() {
    console.log('addscore');
  }).name
