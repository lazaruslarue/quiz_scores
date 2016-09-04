import controller from './quiz.controller'

const QuizComponent = {
  controller,
  template: `
    <h1>Quiz Scores</h1>
    <div class="quiz">
      <score-list
        scores="$ctrl.scores"></scores-list>
      <add-score
        score="$ctrl.newScore"
        on-add-score="$ctrl.addScore($event)"></add-score>
    </div>
  `

}

export default QuizComponent
