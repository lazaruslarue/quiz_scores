class ScorelistController {
  constructor() {}
  $onInit() {
    this.scores =  this.QuizCtrl.getScores()
  }
  deleteScore(score) {
    var idx = this.scores.indexOf(score)
    this.scores.splice(idx, 1)
    this.QuizCtrl.putScores(this.scores)
  }
  updateScore(score){
    var idx = this.scores.indexOf(score)
    this.scores[idx] = score
    this.QuizCtrl.putScores(this.scores)
  }
}

export default ScorelistController
