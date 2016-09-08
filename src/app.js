import angular from 'angular'
// import angularCookies   from 'angular-cookies'
// require('angular-cookies')
import AppComponent from './app.component'
import Components from './Components'



angular
  .module('app', [
    // angularCookies,
    // 'ngCookies',
    Components
  ])
  .component('app', AppComponent)
