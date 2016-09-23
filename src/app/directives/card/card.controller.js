/**
 * Created by zura on 9/23/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('CardController', CardController);

    /** @ngInject */
    function CardController($scope) {
        var vm = this;

        // Data
        vm.card = $scope.card;
        vm.title = "";

        // Methods

        init();

        function init() {

        }
    }
})();