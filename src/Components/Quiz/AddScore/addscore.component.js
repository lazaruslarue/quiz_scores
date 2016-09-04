import controller from './addscore.controller'

const AddScoreComponent = {
  bindings: {
    score: '<',
    onAddScore: '&'
  },
  controller,
  template: `
    <form name="addScore" ng-submit="$ctrl.onSubmit()">
      <input type="text" placeholder="Name..." ng-model="$ctrl.score.name">
      <input type="text" placeholder="Score..." ng-model="$ctrl.score.value">
      <button type="submit">Add Score</button>
  `
}
