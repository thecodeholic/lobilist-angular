(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController(FirebaseService, currentAuth) {
        var vm = this;

        // Data
        vm.selectedBoard = null;
        vm.boards = [];

        // Methods
        vm.selectBoard = selectBoard;

        init();

        /////////////

        function init() {

            FirebaseService
                .getBoards()
                .then(function(result){
                    vm.boards = result;
                    vm.selectedBoard = vm.boards[0];
                });
        }

        function selectBoard(board){
            vm.selectedBoard = board;
        }

    }
})();
