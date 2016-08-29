angular
  .module('alIndicate')
  .directive('alIndicatorThree', myDirective);

function myDirective() {
  // Usage: ...
  var directive = {
    restrict: 'E',
    template: '<div class="indicator-three"><div class="indicator-progress-container"><div class="node" ng-repeat="node in nodesRange"></div></div></div>',
    scope: {
      progress: "="
    },
    link: link
  };
  return directive;

  ////////////////////////////

  function link(scope, element, attrs) {
    scope.nodesRange = _.range(0, 50);

    scope.$watch('progress', function(newVal) {
      var nodes = $(element[0]).find('.node');
      var nodesOn = nodes.slice(0, Math.floor(newVal * scope.nodesRange.length));
      var nodesOff = nodes.slice(nodesOn.length + 1, scope.nodesRange.length);
      $(nodesOn).addClass('highlight');
      $(nodesOff).removeClass('highlight');
    });
  }

}
