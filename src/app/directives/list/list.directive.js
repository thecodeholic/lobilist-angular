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
        var directive = {
            restrict: 'E',
            templateUrl: 'app/directives/list/list.html',
            scope: {
                lobiList: '='
            },
            controller: 'ListController',
            controllerAs: 'vm',
            bindToController: true,
            link: function(scope, el, attributes, controller){
                angular.forEach(controller.lobiList, function (value, key) {
                    controller[key] = value;
                });
            }
        };

        return directive;
    }
})();