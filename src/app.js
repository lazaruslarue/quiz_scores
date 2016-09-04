import angular from 'angular'
import AppComponent from './app.component'
import Components from './Components'

angular
  .module('app', [
    Components
  ])
  .component('app', AppComponent)
