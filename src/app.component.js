const AppComponent = {
  template: `
    <h1>Quiz Scores</h1>
      <h2>You should see scores here</h2>
      <ul>
        <li student ng-repeat="student in $ctrl.students"></li>
      </ul>
    <button type="button" name="button">Add Score</button>
  `

}
 export default AppComponent
