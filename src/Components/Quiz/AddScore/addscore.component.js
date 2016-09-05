import controller from './addscore.controller'

const AddScoreComponent = {
  bindings: {
    score: '<',
    onAddScore: '&',
  },
  controller,
  template: `
    <form name="addScore" ng-submit="$ctrl.onSubmit()">
      <input type="text" placeholder="Name..." ng-model="$ctrl.score.name" ng-required="true">
      <input type="text" placeholder="Score..." ng-model="$ctrl.score.score" ng-required="true">
      <button type="submit">Add Score</button>
    </form>
  `
}

export default AddScoreComponent
