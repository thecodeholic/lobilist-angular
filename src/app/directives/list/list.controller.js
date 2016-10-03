/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($rootScope, $scope, $stateParams, $log, FirebaseService, CardService, ListService){
        var vm = this;

        // Data
        vm.addingNewCard = false;
        vm.selectedBoard = FirebaseService.getBoardById($stateParams.boardId);
        vm.lists = ListService.getListsByBoardId($stateParams.boardId);
        vm.list = $scope.list;
        vm.cards = CardService.getCardsByBoardAndListId($stateParams.boardId, vm.list.$id);
        vm.newCard = {};

        // Methods
        vm.archiveList = archiveList;
        vm.addCard = addCard;
        vm.showAddNewCardForm = showAddNewCardForm;
        vm.cancelNewCard = cancelNewCard;

        init ();

        function init(){
            var userStateChangeFn = $rootScope.$on('userStateChange', function($event, user){
                 if (!user){
                     vm.cards.$destroy();
                 }
            });
            $scope.$on('$destroy', userStateChangeFn);
        }

        function archiveList(){
            ListService.deleteList(vm.list, vm.selectedBoard);
        }

        function addCard($event){
            $event.preventDefault();

            if ($event && $event.keyCode !== 13) {
                return;
            }

            vm.addingNewCard = false;
            vm.newCard.position = getMaxPosition() + 1;
            vm.cards.$add(vm.newCard);
            vm.newCard = {};
        }

        function showAddNewCardForm(){
            vm.addingNewCard = true;
        }

        function cancelNewCard(){
            vm.addingNewCard = false;
        }

        function getMaxPosition() {
            var max = 0;
            angular.forEach(vm.cards, function (list) {
                max = Math.max(max, list.position);
            });
            return max;
        }
    }
})();