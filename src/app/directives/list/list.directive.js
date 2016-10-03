/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .directive('lobilistList', LobilistListDirective);

    /** @ngInject */
    function LobilistListDirective() {
        return {
            restrict: 'AE',
            transclude: true,
            templateUrl: 'app/directives/list/list.html',
            scope: {
                list: '=lobiList'
            },
            controller: 'ListController',
            controllerAs: 'vm'
        };
    }
})();