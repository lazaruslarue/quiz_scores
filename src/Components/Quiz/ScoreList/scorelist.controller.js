class ScorelistController {
  constructor(QuizService) {
    this.QuizService = QuizService
  }
  $onInit() {
    this.scores =  this.QuizService.getScores()
  }
  $onChanges(changes) {

  }
  deleteScore(score) {
    var idx = this.scores.indexOf(score)
    this.scores.splice(idx, 1)
    this.QuizService.putScores(this.scores)
  }
}

ScorelistController.$inject = ['QuizService']

export default ScorelistController
