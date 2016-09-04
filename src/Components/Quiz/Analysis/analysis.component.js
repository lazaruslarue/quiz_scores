import controller from './analysis.controller'

const AnalysisComponent = {
  bindings: {
    scores: '<'
  },
  require: {
    QuizCtrl: '^quiz',
  },
  controller,
  template: `
    <div>Average: {{$ctrl.average()}}</div>
    <div>Min: {{$ctrl.min()}}</div>
    <div>Max: {{$ctrl.max()}}</div>
  `
}

export default AnalysisComponent
