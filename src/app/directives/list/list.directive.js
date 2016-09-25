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
            restrict: 'E',
            replace: true,
            templateUrl: function(el, attributes){
                var template = attributes.template || "bootstrap";
                return 'app/directives/list/templates/'+template+'/list.html';
            },
            scope: {
                list: '=lobiList'
            },
            controller: 'ListController',
            controllerAs: 'vm'
        };
    }
})();