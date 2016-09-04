class QuizController {
  constructor(QuizService) {
    this.QuizService = QuizService
  }
  $onInit() {
    this.scores =  this.QuizService.getScores()
  }
  $onChanges(changes) {
    console.log(changes);
    if (changes.quizData) {
      this.scores = object.assign({}, this.scoreData)
    }
  }
  addScore({ score }) {
    console.log(score);
    if (!score) return
    this.scores.unshift(score)
    this.QuizService.putScores(this.scores)
  }
  removeScore({index}) {
    console.log(arguments)
    this.QuizService.removeScore(index)
  }
}

QuizController.$inject = ['QuizService']
export default QuizController
