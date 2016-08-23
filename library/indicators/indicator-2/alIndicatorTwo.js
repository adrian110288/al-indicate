angular.module('alIndicate').directive('alIndicatorTwo', ['_', function() {
    return {
        restrict: "E",
        template: '<div class="indicator-two"><div class="node node-{{i}}" ng-repeat="i in nodesRange"></div></div>',
        scope: {},
        controller:function($scope, _) {
            $scope.nodesRange = _.range(0,20);
            console.log($scope.nodesRange);
        },
        link: function(scope, el, attr) {

        }
    }
}]);
