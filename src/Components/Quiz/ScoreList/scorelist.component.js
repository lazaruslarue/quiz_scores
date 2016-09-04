import controller from './scorelist.controller'
const ScorelistComponent = {
  bindings: {
    scores: '<',
  },
  controller,
  template: `
    <div class="student-scores">
      <score ng-repeat="score in $ctrl.scores track by $index" score="score" index="$index" on-delete="$ctrl.deleteScore(score)" on-update="$ctrl.updateScore(score, prop, value)"></score>
    </div>
  `
}

export default ScorelistComponent
