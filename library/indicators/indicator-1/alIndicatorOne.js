angular.module('alIndicate').directive('alIndicatorOne', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="indicator-one"><div class="indicator-one-progress-container"></div></div>',
    scope: {
      progress: "=",
      onComplete: "&"
    },
    controller: function($scope) {

    },
    link: function(scope, el, attrs) {
      scope.$watch('progress', function(newVal) {
          var progressContainer = el[0].querySelector('.indicator-one-progress-container');
          progressContainer.style.width = 100*newVal + "%";

          if(newVal >= 1.0) {
              scope.onComplete();
          }

      });
  }
}
})
