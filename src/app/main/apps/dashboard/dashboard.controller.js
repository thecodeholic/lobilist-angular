(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($rootScope, $state, $stateParams, $scope, $timeout, ListService, BoardService) {
        var vm = this;

        // Data
        vm.addingNewList = false;
        vm.newList = {};
        vm.selectedBoard = null;
        vm.boards = BoardService.boards;
        vm.lists = [];
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
                ListService.updatePosition(vm.selectedBoard, event.source.index, event.dest.index);
            },
            containment: '#board-wrapper',
            containerPositioning: 'relative'
        };

        // Methods
        vm.selectBoard = selectBoard;
        vm.showAddNewListForm = showAddNewListForm;
        vm.cancelNewList = cancelNewList;
        vm.addList = addList;

        init();

        /////////////

        function init() {

            vm.boards.$loaded().then(function () {
                var board = $stateParams.boardId && vm.boards.$getRecord($stateParams.boardId);
                if (!board) {
                    board = vm.boards[0];
                }
                selectBoard(board);
            });
            var userStateChangeFn = $rootScope.$on('userStateChange', function ($event, user) {
                if (!user) {
                    vm.boards.$destroy();
                }
            });
            $scope.$on('$destroy', userStateChangeFn);
        }

        function selectBoard(board) {
            if (!board) {
                return;
            }
            vm.selectedBoard = board;
            updateState();
            vm.lists = ListService.getListsByBoardId(vm.selectedBoard.$id);
            console.log(vm.lists);
        }

        function updateState() {
            $state.go($state.current, {boardId: vm.selectedBoard.$id}, {notify: false});
        }

        function showAddNewListForm() {
            vm.addingNewList = true;

            $timeout(function () {
                document.getElementById('new-list-textfield').focus();
                // console.log($document.find('#newListTextfield'));
                // $document.getElementById('newListTextfield').focus();
            }, 40);
        }

        function cancelNewList() {
            vm.addingNewList = false;
        }

        function addList($event) {
            $event.preventDefault();

            // Prevent the reply() for key presses rather than the"enter" key.
            if ($event && $event.keyCode !== 13) {
                return;
            }

            console.log("adding new list");
            vm.addingNewList = false;
            vm.newList.position = getMaxPosition() + 1;
            vm.lists.$add(vm.newList);
            vm.newList = {};
        }

        function getMaxPosition() {
            var max = 0;
            angular.forEach(vm.lists, function (list) {
                max = Math.max(max, list.position);
            });
            return max;
        }

    }
})();
