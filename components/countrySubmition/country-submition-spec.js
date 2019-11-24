describe('country-submition', function () {
    var element;
    var scope;
    var controller;
    beforeEach(module('myApp'));

    beforeEach(inject(function($compile, $rootScope, $httpBackend){
        $httpBackend.when('GET', 'components/CountrySubmition/country-submition.html').respond();
        scope = $rootScope.$new();
        element = angular.element("<my-app-country-submition></my-app-country-submition>");
        element= $compile(element)(scope);
        $httpBackend.flush();
        scope.$digest();
        controller = element.controller('myAppCountrySubmition');
    }));

    it('select() should add a country to a list if not exists', function(){
      expect(controller.countries.length).toEqual(0);
      controller.select({"name" : "Poland", "isoCode": "POL"});
      expect(controller.countries.length).toEqual(1);
      controller.select({"name" : "Poland", "isoCode": "POL"});
      expect(controller.countries.length).toEqual(1);
    });
});
