class QuizService {
  constructor($cookies) {
    this.$cookies = $cookies
    // $cookies.putObject('scores', [
    //   {name: 'elzapatista', score: 101},
    //   {name: 'daveguy', score: 89},
    //   {name: 'dingleberry', score: 23},
    //
    // ] )
  }
  getScores() {
    return this.$cookies.getObject('scores')
  }
  putScores(scores) {
    return this.$cookies.putObject('scores', scores)
  }
  removeScore({index}) {
    var scores = this.getScores()
    scores.splice(index, 1)
    return this.putScores(scores)
  }
}

QuizService.$inject = ['$cookies']

export default QuizService
