(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($scope, $mdSidenav, $log, FirebaseService) {
        var vm = this;

        // Data
        vm.selectedBoard = null;
        vm.boards = [];

        // Methods
        vm.selectBoard = selectBoard;
        vm.toggleSidenav = toggleSidenav;

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

        function toggleSidenav(componentId){
            $mdSidenav(componentId).toggle();
        }
    }
})();
