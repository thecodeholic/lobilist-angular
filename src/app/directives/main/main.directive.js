/**
 * Created by zura on 9/23/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .directive('lobilistMain', LobilistListDirective);

    /** @ngInject */
    function LobilistListDirective() {

        return {
            restrict: 'E',
            replace: true,
            templateUrl: function(el, attributes){
                console.log(attributes);
                var template = attributes.lobiTemplate || "bootstrap";
                return 'app/directives/main/templates/'+template+'.main.html';
            },
            scope: {
                lobiList: '='
            },
            controller: 'MainController',
            controllerAs: 'vm',
            bindToController: true,
            link: function(scope, el, attributes, controller){
                angular.forEach(controller.lobiList, function (value, key) {
                    controller[key] = value;
                });
            }
        };
    }
})();