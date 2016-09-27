(function () {
    'use strict';

    describe('DashboardController', function () {
        var vm;

        beforeEach(module('lobilistAngular'));
        beforeEach(inject(function (_$controller_, _$rootScope_) {
            vm = _$controller_('DashboardController', {$scope: _$rootScope_.$new()});
        }));

        it("should have method selectBoard()", function(){
           expect(vm).toHaveMethod('selectBoard');
        });
        it("should have boards array", function(){
           expect(vm).toHaveArray('boards');
        });
    });
})();
