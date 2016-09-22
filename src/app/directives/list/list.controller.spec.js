/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    describe('ListController', function () {
        var vm;

        beforeEach(module('lobilistAngular'));
        beforeEach(inject(function ($controller) {
            vm = $controller('ListController');
        }));

        it("should have title as string", function(){
            expect(angular.isString(vm.title)).toBeTruthy();
        });
    });
})();