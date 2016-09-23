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
            replace: true,
            templateUrl: 'app/directives/board/board.html',
            scope: {
                board: '=lobiBoard'
            },
            controller: 'BoardController',
            controllerAs: 'vm',
            bindToController: true,
            // compile: function (el, attributes) {
            //     attributes.$observe('lobiBoard', function (data) {
            //         console.log("Updated data ", data);
            //     }, true);
            //     console.log("Compiling ", arguments);
            // },
            // link: function (scope, el, attributes,) {
            //     scope.$watch(attributes.lobiBoard, function () {
            //         console.log(attributes.lobiBoard, "aaaaaaaaaaaaaaaaaaaaa");
            //
            //
            //     }, true);
            // }
        };
    }
})();