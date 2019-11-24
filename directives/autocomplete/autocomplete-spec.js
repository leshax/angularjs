describe('autocomplete', function () {
    var element;
    var scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function($compile, $rootScope, $httpBackend){
        $httpBackend.when('GET', 'directives/autocomplete/autocomplete.html').respond();
        scope = $rootScope.$new();
        element = angular.element('<my-app-autocomplete select="$ctrl.select(message)"></my-app-autocomplete>');
        element= $compile(element)(scope);
        $httpBackend.flush();
        scope.$digest();
    }));

    it('Empty textbox shoud be present on insertion', function(){
      var textbox = element.find('input');
      expect(textbox).toBeDefined();
      expect(textbox.text()).toEqual('');
    });

    it('onBlur() should trigger deletion of results', inject(function ($timeout) {
        element.isolateScope().results = [{ "name": "Poland", "isoCode": "POL" }];
        expect(element.isolateScope().results.length).toEqual(1);
        element.isolateScope().onBlur();
        $timeout.flush();
        expect(element.isolateScope().results.length).toEqual(0);
    }));

});
