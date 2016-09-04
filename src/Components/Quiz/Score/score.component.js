import ScoreController from './score.controller'
const ScoreComponent = {
  bindings: {
    scores: '<'
  },
  ScoreController,
  template: `
    <h2>You should see scores here</h2>
    <div class="student-scores">
      <li ng-repeat="score in $ctrl.scores">
        <p>{{score.name}}</p>
        <input value="{{score.score}}"></input>
      </li>
    </div>
  `
}

export default ScoreComponent
