class AddScoreController {
  constructor(EventEmitter) {}
  $onChanges(changes) {
    if (changes.score) {
      this.score = Object.assign({}, this.score)
    }
  }
  onSubmit() {
    if (!this.score.name || !this.score.value) return

    this.onAddScore(
      EventEmitter({
        score: this.score
      })
    )
  }
}

AddScoreController.$inject = ['EventEmitter']

export default AddScoreController
