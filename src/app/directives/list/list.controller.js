/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($scope, $log, CardService){
        var vm = this;

        // Data
        vm.list = $scope.list;
        vm.title = "";
        vm.cards = vm.list.cards || [];

        // Methods
        vm.addCard = addCard;

        init ();

        function init(){
            // CardService
            //     .getCardsByListId(1)
            //     .then(function(cards){
            //         vm.cards = cards;
            //     });
        }

        function addCard(){
            // @todo
        }
    }
})();