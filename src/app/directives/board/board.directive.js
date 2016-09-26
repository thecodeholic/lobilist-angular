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
            templateUrl: function(el, attributes){
                var template = attributes.template || "bootstrap";
                return 'app/directives/board/templates/'+template+'.board.html';
            },
            scope: {
                board: '=lobiBoard'
            },
            controller: 'BoardController',
            controllerAs: 'vm'
        };
    }
})();