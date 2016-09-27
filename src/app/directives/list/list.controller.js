/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($rootScope, $scope, $log, FirebaseService){
        var vm = this;

        // Data
        vm.boardController = $scope.$parent.$parent.vm;
        vm.addingNewCard = false;
        vm.list = $scope.list;
        vm.cards = FirebaseService.getCardsByBoardAndListId(vm.boardController.board.$id, vm.list.$id);
        vm.newCard = {};

        // Methods
        vm.addCard = addCard;
        vm.showAddNewCardForm = showAddNewCardForm;

        init ();

        function init(){
            $rootScope.$on('userStateChange', function($event, user){
                 if (!user){
                     vm.cards.$destroy();
                 }
            });
        }

        function addCard(){
            $log.debug(vm.newCard);

            vm.addingNewCard = false;
            vm.cards.$add(vm.newCard);
        }

        function showAddNewCardForm(){
            vm.addingNewCard = true;
        }
    }
})();