class AddScoreController {
  constructor() {}
  $onInit() {
    console.log('addscoreinit');
  }
  $onChanges(changes) {
    if (changes.score) {
      this.score = Object.assign({}, this.score)
    }
  }
  onSubmit() {
    if (!this.score.name || !this.score.value) return

    this.onAddScore({
      $event: {
        score: this.score,
        name:  this.name
      }
    })
  }
}

export default AddScoreController
