class QuizService {
  constructor($cookies) {
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

QuizService.$inject = ['$cookies']

export default QuizService
