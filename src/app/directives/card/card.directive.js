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
            templateUrl: function(el, attributes){
                var template = attributes.lobiTemplate || "mdl";
                return 'app/directives/card/templates/'+template+'.card.html';
            },
            scope: {
                card: '=lobiCard'
            },
            controller: 'CardController',
            controllerAs: 'vm'
        };
    }
})();