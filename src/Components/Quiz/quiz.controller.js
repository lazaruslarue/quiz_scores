class QuizControler {
  constructor(QuizService) {
    this.QuizService = QuizService
  }
  $onInit() {
    this.newStudent = {
      name: '',
      score: 0,
    }
    this.scores =  [
      {first: 'joe', score: 10},
      {first: 'joe', score: 10},
      {first: 'joe', score: 10},
    ]
    console.log(this.QuizService.getScores())
  }
  $onChanges(changes) {
    if (changes.quizData) {
      this.scores = object.assign({}, this.scoreData)
    }
  }
  addScore({ score }) {
    console.log(score);
    if (!score) return
    this.scores.unshift(score)
    this.newScore = {
      name: '',
      score: 0
    }
  }
}

QuizControler.$inject = ['QuizService']
export default QuizControler
