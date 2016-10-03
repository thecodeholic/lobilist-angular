/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController($rootScope, $scope, $stateParams, $timeout, FirebaseService, CardService, ListService) {
        var vm = this;

        // Data
        vm.inTitleEditing = false;
        vm.addingNewCard = false;
        vm.selectedBoard = FirebaseService.getBoardById($stateParams.boardId);
        vm.lists = ListService.getListsByBoardId($stateParams.boardId);
        vm.list = $scope.list;
        vm.cards = CardService.getCardsByBoardAndListId($stateParams.boardId, vm.list.$id);
        vm.newCard = {};
        vm.sortOptions = {
            //restrict move across columns. move only within column.
            /*accept: function (sourceItemHandleScope, destSortableScope) {
             return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
             },*/
            itemMoved: function (event) {
                console.log("item moved");
                // event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
            },
            orderChanged: function (event) {
                console.log("changedd");
            },
            containment: '#board-wrapper'
        };

        // Methods
        vm.archiveList = archiveList;
        vm.addCard = addCard;
        vm.showAddNewCardForm = showAddNewCardForm;
        vm.cancelNewCard = cancelNewCard;
        vm.startTitleEditing = startTitleEditing;
        vm.cancelTitleEditing = cancelTitleEditing;
        vm.finishTitleEditing = finishTitleEditing;
        vm.inputTitleKeyup = inputTitleKeyup;

        init();

        function init() {
            var userStateChangeFn = $rootScope.$on('userStateChange', function ($event, user) {
                if (!user) {
                    vm.cards.$destroy();
                }
            });
            $scope.$on('$destroy', userStateChangeFn);
        }

        function archiveList() {
            ListService.deleteList(vm.list, vm.selectedBoard);
        }

        function addCard($event) {
            $event.preventDefault();

            if ($event && $event.keyCode !== 13) {
                return;
            }

            vm.addingNewCard = false;
            vm.newCard.position = getMaxPosition() + 1;
            vm.cards.$add(vm.newCard);
            vm.newCard = {};
        }

        function showAddNewCardForm() {
            vm.addingNewCard = true;
        }

        function cancelNewCard() {
            vm.addingNewCard = false;
        }

        function startTitleEditing($event) {
            if ($event && $event.button === 0) {
                vm.inTitleEditing = true;
                vm.list.oldTitle = vm.list.title;
                $timeout(function () {
                    document.querySelector(".list-title-edit-form input").focus();
                }, 100);
            }
        }

        function cancelTitleEditing() {
            vm.inTitleEditing = false;
            vm.list.title = vm.list.oldTitle;
            delete vm.list.oldTitle;
        }

        function finishTitleEditing() {
            delete vm.list.oldTitle;

            var index = vm.lists.$indexFor(vm.list.$id);
            vm.lists[index].title = vm.list.title;
            vm.lists
                .$save(index)
                .then(function () {
                    vm.inTitleEditing = false;
                });
        }

        function inputTitleKeyup($event) {
            if ($event.keyCode === 27) {
                cancelTitleEditing();
            } else if ($event.keyCode === 13) {
                finishTitleEditing();
            }
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