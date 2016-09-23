/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    describe('ListController', function () {
        var vm,
            $rootScope;

        beforeEach(module('lobilistAngular'));
        beforeEach(inject(function ($controller, _$rootScope_) {
            $rootScope = _$rootScope_;
            vm = $controller("ListController", {$scope: $rootScope.$new()});
        }));

        it("should have title as string", function () {
            expect(vm.title).toBeString();
        });

        it("should have method addCard()", function () {
            expect(vm).toHaveMethod('addCard');
        });

        it("should have cards array", function () {
            expect(vm).toHaveArray("cards");
        });

    });
})();