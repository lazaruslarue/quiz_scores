const ScoreComponent = {
  template: `
    <h2>You should see scores here</h2>
    <div class="student-score">
      <span>
        <p>
          {{student.first}} {{student.last}}
        </p>
        <input value="{{student.score}}"></input>
      </span>
    </div>
  `
}

export default ScoreComponent
