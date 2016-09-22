/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    describe("BoardController", function () {
        var vm;

        beforeEach(module('lobilistAngular'));
        beforeEach(inject(function ($controller) {
            vm = $controller("BoardController");
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