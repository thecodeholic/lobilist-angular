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
            var $scope = $rootScope.$new();
            $scope.list = {
                $id: 90,
                title: 'Some list title'
            };
            vm = $controller("ListController", {$scope: $scope});
        }));

        it("should have method addCard()", function () {
            expect(vm).toHaveMethod('addCard');
        });

        it("should have cards array", function () {
            expect(vm).toHaveArray("cards");
        });

    });
})();