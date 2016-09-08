class ScoreController {
  constructor() {
  }
  delete() {
    this.onDelete()
  }
  blur(evt) {
    debugger
    if (!this.score.name || !this.score.score) return
    debugger
    this.onUpdate()
  }
  keyup(evt) {
    if (evt.key !== "Enter" ) return;
    this.onUpdate()
  }
}
export default ScoreController
