/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .directive('lobilistBoard', LobilistBoardDirective);

    /** @ngInject */
    function LobilistBoardDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/board/board.html',
            scope: {
                lobiBoard: '='
            },
            controller: 'BoardController',
            controllerAs: 'vm',
            bindToController: true,
            link: function (scope, el, attributes, controller) {
                console.log(arguments);

                scope.$watch(attributes.lobiBoard, function () {
                    console.log(attributes.lobiBoard);
                    angular.forEach(controller.lobiBoard, function (value, key) {
                        controller[key] = value;
                    });
                });
            }
        };
    }
})();