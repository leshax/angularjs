
app.directive('myAppAutocomplete', ["fetcher", "$timeout", function(fetcher, $timeout) {

    return {
        restrict: 'E',
        scope: { select: '&' },
        link: function($scope, $element, $attrs) {
          $scope.search = "";
          $scope.results = [];
          $scope.onBlur = function(){
            $timeout(function(){
              $scope.results = [];
            },250);
          }
          $scope.onEdit = function(){
              fetcher.querySearch($scope.search)
              .then(function(results) {
                  $scope.results = results.data;
              })
              .catch(function(e){
                  $scope.results = [];
              });
          }
        },
        templateUrl: "directives/autocomplete/autocomplete.html"
      }


}]);
