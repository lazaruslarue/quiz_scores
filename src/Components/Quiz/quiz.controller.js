class QuizController {
  constructor(QuizService) {
    this.QuizService = QuizService
  }
  $onInit() {
    this.scores =  this.QuizService.getScores()
  }
  $onChanges(changes) {  }
  getScores() {
    return this.scores
  }
  putScores(scores) {
    return this.QuizService.putScores(scores)
  }
  addScore({ score }) {
    if (!score) return
    this.scores.unshift(score)
    this.newScore = {name: '', score: null}
    this.QuizService.putScores(this.scores)
  }
  removeScore({index}) {
    console.log(arguments)
    this.QuizService.removeScore(index)
  }
}

QuizController.$inject = ['QuizService']

export default QuizController
