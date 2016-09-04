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
      Name: {{$ctrl.score.name}}
      Score: {{$ctrl.score.score}}
      <button ng-click="$ctrl.delete()" >X</button>
    </div>
  `
}

export default ScoreComponent
