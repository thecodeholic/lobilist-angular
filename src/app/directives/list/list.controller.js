/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController(){
        var vm = this;

        // Data
        vm.title = "";
        vm.cards = [];

        // Methods
        vm.addCard = addCard;

        init ();

        function init(){
            // @todo
        }

        function addCard(){
            // @todo
        }
    }
})();