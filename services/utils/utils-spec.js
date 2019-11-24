describe('Utils service', function() {
    var utils;
    var data;
    
    beforeEach(module('myApp'));

    beforeEach(inject(function(_utils_) {
      utils = _utils_;
    }));

    beforeEach(function(){
    data  = [
       {
         "name": "Poland",
         "isoCode": "POL"
       },
       {
         "name": "Portugal",
         "isoCode": "PRT"
       },
       {
         "name": "Romania",
         "isoCode": "RO"
       },
       {
         "name": "Switzerland",
         "isoCode": "CH"
       }
      ];
    })

    it('isCountryExists() should return true if there is a specific country in a country array', function() {
      var result = utils.isCountryExists(data, "Poland");
      expect(result).toEqual(true);
    });

    it('isCountryExists() should return false if there is no such country in country array', function() {
      var result = utils.isCountryExists(data, "US");
      expect(result).toEqual(false);
    });

    it('removeCountryByIsoCode() should return an array without country with specied ISO code', function() {
      var result = utils.removeCountryByIsoCode(data, "POL");
      expect(result.length).toEqual(data.length-1);
      expect(result[0].isoCode).toEqual("PRT");
    });

    it('getIsoCodes() should return ISO JSO codes only from country array in as a JSON string', function(){
      var result = utils.getIsoCodes(data);
      expect(result).toEqual('["POL","PRT","RO","CH"]');
    })
});
