import controller from './quiz.controller'

const QuizComponent = {
  controller,
  template: `
    <h1>Quiz Scores</h1>
    <h2>Add or remove scores</h2>
    <add-score
      score="$ctrl.newScore"
      on-add-score="$ctrl.addScore($event)"></add-score>
    <scorelist></scorelist>
    <score-details
      scores="$ctrl.scores"</score-details>

  `

}

export default QuizComponent
