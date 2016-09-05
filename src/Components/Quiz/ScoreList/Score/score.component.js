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
      Name: <input value="{{$ctrl.score.name}}" ng-model="$ctrl.score.name"></input>
      Score: <input value="{{$ctrl.score.score}}" ng-model="$ctrl.score.score" ng-class="{'has-problem': $ctrl.score.score < 65}"></input>
      <button ng-click="$ctrl.delete()" >X</button>
    </div>
  `
}

export default ScoreComponent
