/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardController', BoardController);

    /** @ngInject */
    function BoardController($scope, ListService) {
        var vm = this;

        // Data
        vm.board = $scope.board;
        vm.title = '';
        vm.lists = [];

        // Methods
        vm.addList = addList;

        init();

        function init() {
            $scope.$watch('board', function () {
                vm.board = $scope.board;
                if (vm.board) {
                    ListService
                        .getListsByBoardId(vm.board.id)
                        .then(function (lists) {
                            vm.lists = lists;
                        });
                }
            });

        }

        function addList() {
            //@todo
        }
    }
})();