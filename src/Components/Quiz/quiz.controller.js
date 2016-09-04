class QuizControler {
  constructor() {}
  $onInit() {
    this.newStudent = {
      name: '',
      score: 0,
    }
  }
  $onChanges(changes) {
    if (changes.quizData) {
      this.scores = object.assign({}, this.scoreData)
    }
  }
  addScore({ score }) {
    if (!score) return
    this.scores.unshift(score)
    this.newScore = {
      name: '',
      score: 0
    }
  }
}

export default QuizControler
// angular.module('quiz.').directive('quiz', [ () => {
//   return {
//     restrict: 'AE',
//     templateUrl: './template.html',
//     controller: ['$scope',($scope) => {
//       $scope.students = [
//         {first: 'joe', last: 'balogna', score: 10},
//         {first: 'joe', last: 'balogna', score: 10},
//         {first: 'joe', last: 'balogna', score: 10},
//       ]
//     }]
//   }
// }])
