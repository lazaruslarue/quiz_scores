import ScoreController from './score.controller'
const ScoreComponent = {
  ScoreController,
  template: `
    <h2>You should see scores here</h2>
    <div class="student-scores">
      <li ng-repeat="score in $ctrl.scores">
        <p>
          {{student.first}} {{student.last}}
        </p>
        <input value="{{student.score}}"></input>
      </li>
    </div>
  `
}

export default ScoreComponent
