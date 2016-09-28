/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardController', BoardController);

    /** @ngInject */
    function BoardController($scope, $rootScope, FirebaseService, $log, $timeout, $document) {
        var vm = this;

        // Data
        vm.addingNewList = false;
        vm.newList = {};
        vm.board = $scope.board;
        vm.title = '';
        vm.lists = [];

        // Methods
        vm.showAddNewListForm = showAddNewListForm;
        vm.cancelNewList = cancelNewList;
        vm.addList = addList;

        init();

        function init() {
            $scope.$watch('board', function () {
                vm.board = $scope.board;
                vm.lists = FirebaseService.getListsByBoardId(vm.board ? vm.board.$id : null);
            });


            var userStateChangeFn = $rootScope.$on('userStateChange', function ($event, user) {
                if (!user) {
                    vm.lists.$destroy();
                }
            });

            $scope.$on('$destroy', userStateChangeFn);
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