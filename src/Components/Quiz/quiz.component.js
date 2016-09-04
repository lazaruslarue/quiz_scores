import controller from './quiz.controller'

const QuizComponent = {
  controller,
  template: `
    <h1>Quiz Scores</h1>
    <score></score>
    <button type="button" name="button">Add Score</button>
  `

}

export default QuizComponent
