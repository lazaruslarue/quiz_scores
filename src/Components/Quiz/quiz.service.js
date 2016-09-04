class QuizService {
  constructor($cookies) {
    this.$cookies = $cookies
  }
  getScores() {
    return this.$cookes.get('scores').then(r => r.data)
  }
}

QuizService.$inject = ['$cookies']

export default QuizService
