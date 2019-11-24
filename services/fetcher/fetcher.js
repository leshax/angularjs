app.service('fetcher', ["$http", function($http) {
  this.querySearch = function(searchText) {
    return $http.get("/country?search=" + searchText);
  }
  this.post = function(json){
    console.log("post", json);
    return $http.post("/selectedCountries", json);
  }
}]);
