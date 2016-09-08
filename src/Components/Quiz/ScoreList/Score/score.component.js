import controller from './score.controller'
const ScoreComponent = {
  bindings: {
    score: '<',
    index: '<',
    onDelete: '&',
    onUpdate: '&',
  },
  controller,
  template: `
    <label class="student-score">
      Name: <input
        ng-model="$ctrl.score.name"
        name="recordName"
        ng-required="true"
        ng-blur="$valid && $ctrl.blur($event)"
        ng-keyup="$valid && $ctrl.keyup($event)"
        pattern="[A-Za-z]+$"></input></label>
      <label>Score: <input
        type="number"
        name="recordScore"
        ng-model="$ctrl.score.score"
        score-auto-update
        ng-class="{'has-problem': $ctrl.score.score < 65}" ></input></label>
      <a ng-click="$ctrl.delete()" >remove score</a><br>
  `
}

export default ScoreComponent
