app.component('myAppCountrySubmition', {
    controller: ['$http','fetcher','utils', function($http, fetcher, utils) {
        var $ctrl = this;
        $ctrl.submitLogs = "";
        $ctrl.countries = [];
        $ctrl.select = function(item){
          if(!item) return;
          var found = utils.isCountryExists($ctrl.countries, item.name);
          if(!found) $ctrl.countries.push(item);
        }
        $ctrl.submit = function () {
          var codes = utils.getIsoCodes($ctrl.countries);
          if(!codes) {
            $ctrl.submitLogs = "Please select at least one country";
            return;
          }
          fetcher.post(codes, $ctrl.submitLogs).then(function(response) {
              $ctrl.submitLogs = response;
          }).catch(function(response){
              $ctrl.submitLogs = response;
          });
        }
        $ctrl.remove = function(isoCode){
          $ctrl.countries = utils.removeCountryByIsoCode($ctrl.countries, isoCode);
        }
    }],
    templateUrl: "components/CountrySubmition/country-submition.html"
});
