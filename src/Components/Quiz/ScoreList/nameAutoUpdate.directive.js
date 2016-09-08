import angular from 'angular';

class UpdateOnChange {
  constructor(){
    this.restrict = 'A'
  }
  link($scope, $element, $attrs) {
console.log($scope.$ctrl.score);
    $element.on('blur keyup', function functionName(evt) {
      let newVal = this.value
      if (evt.key !== "Enter" && evt.type !=="blur" ) return;
      if (this.value !== $scope.$ctrl.score.name) {
        $scope.$ctrl.onUpdate($scope.$ctrl.$index, newVal, 'name')
      }
    })
  }

}

export default UpdateOnChange;
