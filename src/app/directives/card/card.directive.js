/**
 * Created by zura on 9/23/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .directive('lobilistCard', LobilistCardDirective);

    /** @ngInject */
    function LobilistCardDirective() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/card/card.html',
            scope: {
                card: '=lobiCard'
            },
            controller: 'CardController',
            controllerAs: 'vm'
        };
    }
})();