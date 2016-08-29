angular.module('alIndicate').directive('alIndicatorTwo', ['_', function() {
  return {
    restrict: "E",
    template: '<div class="indicator-two"><div class="node node-{{i}}" ng-repeat="i in nodesRange"></div><div class="display-value"><span>{{displayValue}}</span></div>',
    scope: {
      progress: "=",
      displayValue: "="
    },
    controller: function($scope, _) {
      $scope.nodesRange = _.range(0, 120);
    },
    link: function(scope, el, attr) {

      scope.$watch('progress', function(newVal) {
        var nodes = $(el[0]).find('.node');
        var nodesOn = nodes.slice(0, Math.floor(newVal * nodes.length));
        var nodesOff = nodes.slice(nodesOn.length+1, nodes.length);
        $(nodesOn).addClass('highlight');
        $(nodesOff).removeClass('highlight');
      });
    }
  }
}]);
