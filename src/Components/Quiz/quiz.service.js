class QuizService {
  constructor($cookies) {
    this.$cookies = $cookies
    $cookies.putObject('scores', {test: 'one'})
  }
  getScores() {
    return this.$cookies.get('scores')
  }
}

QuizService.$inject = ['$cookies']

export default QuizService
