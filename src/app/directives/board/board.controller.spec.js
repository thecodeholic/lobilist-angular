/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    describe("BoardController", function () {
        var vm,
            $rootScope;

        beforeEach(module('lobilistAngular'));
        beforeEach(inject(function ($controller, _$rootScope_) {
            $rootScope = _$rootScope_;
            vm = $controller("BoardController", {$scope: $rootScope.$new()});
        }));

        it("should have title as string", function () {
            expect(vm.title).toBeString();
        });

        it("should have lists array of objects", function () {
            expect(vm).toHaveArrayOfObjects('lists');
        });

        it("should have method addList()", function () {
            expect(vm).toHaveMethod('addList');
        });

    });
})();