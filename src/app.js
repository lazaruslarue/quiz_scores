import angular from 'angular'
import AppComponent from './app.component'
import Quiz from './Components/Quiz'
import QuizScore from './Components/QuizScore'

angular
  .module('app', [
    Quiz,
    QuizScore,
  ])
  .component('app', AppComponent)
  .run(function butts() {
    console.log("don't forget to eat your soggy donuts");
  })
