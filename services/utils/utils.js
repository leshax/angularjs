app.service('utils', function() {
  this.getIsoCodes = function(countries) {
    if(!countries || !countries.length) return null;
    var isoCodes = countries.map(a => a.isoCode);
    var json = JSON.stringify(isoCodes);
    return json;
  }
  this.removeCountryByIsoCode = function(countries, isoCode){
    return countries = countries.filter(function(obj) {
      return obj.isoCode !== isoCode;
    });
  };
  this.isCountryExists = function(countries, name){
    return countries.some(el => el.name === name);
  }
});
