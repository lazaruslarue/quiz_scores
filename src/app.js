import angular from 'angular'
import AppComponent from './app.component'
import Components from './Components'

angular
  .module('app', [
    require('angular-cookies'),
    Components
  ])
  .component('app', AppComponent)
