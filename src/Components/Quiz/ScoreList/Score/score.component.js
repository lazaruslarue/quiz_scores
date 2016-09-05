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
    <div class="student-score">
      Name: <input
        ng-model="$ctrl.score.name"
        ng-required="true"
        pattern="[A-Za-z]+$"></input>
      Score: <input
        type="number"
        ng-model="$ctrl.score.score"
        ng-class="{'has-problem': $ctrl.score.score < 65}" ></input>
      <button ng-click="$ctrl.delete()" >X</button>
    </div>
  `
}

export default ScoreComponent
