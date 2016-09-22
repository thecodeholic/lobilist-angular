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
            expect(vm.title).toBeString();
        });

        it("should have method addCard()", function(){
            expect(vm).toHaveMethod('addCard');
        });

        it("should have cards array", function(){
            expect(vm).toHaveArray("cards");
        });

    });
})();