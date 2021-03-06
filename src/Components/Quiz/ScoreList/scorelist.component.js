import controller from './scorelist.controller'
const ScorelistComponent = {
  bindings: {
    scores: '<',
  },
  require: {
    QuizCtrl: '^quiz'
  },
  controller,
  template: `
    <form name="studentScores"
      ng-submit="$ctrl.onSubmit()">
        <score
        ng-repeat="score in $ctrl.scores track by $index"
        score="score"
        index="$index"
        on-delete="$ctrl.deleteScore(score)"
        on-update="$ctrl.updateScore(score)"></score>
    </form>
  `
}

export default ScorelistComponent
