class AddScoreController {
  constructor() {}
  $onInit() { }
  $onChanges(changes) {
    if (changes.score) {
      this.score = Object.assign({}, this.score)
    }
  }
  onSubmit() {
    if (!this.score.name || !this.score.score) return

    this.onAddScore({
      $event: {
        score: this.score,
        name:  this.name
      }
    })
  }
}

export default AddScoreController
