import angular from 'angular'
import angularCookies   from 'angular-cookies'
import AppComponent from './app.component'
import Components from './Components'



angular
  .module('app', [
    angularCookies,
    Components
  ])
  .component('app', AppComponent)
