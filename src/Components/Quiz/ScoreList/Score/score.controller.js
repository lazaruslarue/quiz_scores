class ScoreController {
  constructor() {
  }
  delete() {
    this.onDelete()
  }
  blur(evt) {
    if (!this.score.name || !this.score.score) return
    this.onUpdate()
  }
  keyup(evt) {
    if (evt.key !== "Enter" ) return;
    this.onUpdate()
  }
}
export default ScoreController
