class ScorelistController {
  constructor() {}
  $onInit() {
    this.scores =  this.QuizCtrl.getScores()
  }
  $onChanges(changes) {

  }
  deleteScore(score) {
    var idx = this.scores.indexOf(score)
    this.scores.splice(idx, 1)
    this.QuizCtrl.putScores(this.scores)
  }
}

ScorelistController.$inject = ['QuizService']

export default ScorelistController
