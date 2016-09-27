(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($rootScope, FirebaseService, $firebaseArray, currentAuth) {
        var vm = this;

        // Data
        vm.selectedBoard = null;
        vm.boards = [];

        // Methods
        vm.selectBoard = selectBoard;

        init();

        /////////////

        function init() {
            vm.boards = FirebaseService.getBoards();
            vm.boards.$loaded().then(function(){
                vm.selectedBoard = vm.boards[0];
            });
            $rootScope.$on('userStateChange', function($event, user){
                 if (!user){
                     vm.boards.$destroy();
                 }
            });
        }

        function selectBoard(board) {
            vm.selectedBoard = board;
        }

    }
})();
