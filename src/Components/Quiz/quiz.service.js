class QuizService {
  constructor($cookies) {
    this.$cookies = $cookies
  }
  getScores() {
    return this.$cookies.getObject('scores') || []
  }
  putScores(scores) {

     this.$cookies.putObject('scores', scores)
    console.log(this.$cookies.getObject('scores', scores));
  }
  removeScore({index}) {
    var scores = this.getScores()
    scores.splice(index, 1)
    return this.putScores(scores)
  }
}

QuizService.$inject = ['$cookies']

export default QuizService
