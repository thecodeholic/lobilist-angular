/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($rootScope, $scope, $stateParams, $log, FirebaseService, CardService){
        var vm = this;

        // Data
        vm.addingNewCard = false;
        vm.lists = FirebaseService.getListsByBoardId($stateParams.boardId);
        vm.list = $scope.list;
        vm.cards = CardService.getCards($stateParams.boardId, vm.list.$id);
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
            vm.lists.$remove(vm.lists.$indexFor(vm.list.$id));
        }

        function addCard($event){
            $event.preventDefault();

            // Prevent the reply() for key presses rather than the"enter" key.
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