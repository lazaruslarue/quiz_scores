class QuizService {
  constructor() {
    this.storage = window.localStorage
  }
  getScores() {
    return JSON.parse(this.storage.getItem('scores')) || []
  }
  putScores(scores) {
    return this.storage.scores = JSON.stringify(scores)
  }
  removeScore({index}) {
    var scores = this.getScores()
    scores.splice(index, 1)
    return this.putScores(scores)
  }
}


export default QuizService
