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
        vm.addingNewCard = false;
        vm.list = $scope.list;
        vm.title = "";
        vm.cards = vm.list.cards || [];
        vm.newCard = {};

        // Methods
        vm.addCard = addCard;
        vm.showAddNewCardForm = showAddNewCardForm;
        vm.saveNewCard = saveNewCard;

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

        function showAddNewCardForm(){
            vm.addingNewCard = true;
        }

        function saveNewCard(){
            $log.debug(vm.newCard);
        }
    }
})();