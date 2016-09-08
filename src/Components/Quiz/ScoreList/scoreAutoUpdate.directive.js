import angular from 'angular';

class UpdateOnChange {
  constructor(){
    this.restrict = 'A'

  }
  link($scope, $element, $attrs) {

    $element.on('blur keyup', function functionName(evt) {

      if (evt.key !== "Enter" && evt.type !=="blur" ) return;
      if (!this.value) debugger
      if (evt.key==="Enter" || evt.type==="blur") {
        $scope.$ctrl.onUpdate($scope.$ctrl.$score, 'score')
      }
    })
  }

}

export default UpdateOnChange;
