/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($rootScope, $scope, $stateParams, $log, CardService){
        var vm = this;

        // Data
        vm.addingNewCard = false;
        vm.list = $scope.list;
        vm.cards = CardService.getCards($stateParams.boardId, vm.list.$id);
        vm.newCard = {};

        // Methods
        vm.addCard = addCard;
        vm.showAddNewCardForm = showAddNewCardForm;

        init ();

        function init(){
            var userStateChangeFn = $rootScope.$on('userStateChange', function($event, user){
                 if (!user){
                     vm.cards.$destroy();
                 }
            });
            $scope.$on('$destroy', userStateChangeFn);
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