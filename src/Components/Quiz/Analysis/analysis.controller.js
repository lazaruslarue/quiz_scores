class Analysis {
  constructor() {}
  $onChanges(changes) {
    console.log('changes in analysis',changes);
  }
  average(){
    let acc = 0;
    this.scores.map((score)=> acc = acc + parseInt(score.score))
    return acc / this.scores.length
  }
  min(){
    let scores = this.scores.map(({score})=> score)
    scores.sort((a,b)=> a>b)
    return scores[0]
  }
  max(){
    let scores = this.scores.map(({score})=> score)
    scores.sort((a,b)=> a<b)
    return scores[0]
  }
}

export default Analysis
