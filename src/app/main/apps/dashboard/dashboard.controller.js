(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($rootScope, $state, $stateParams, $scope, FirebaseService) {
        var vm = this;

        // Data
        vm.selectedBoard = null;
        vm.boards = FirebaseService.getBoards();

        // Methods
        vm.selectBoard = selectBoard;

        init();

        /////////////

        function init() {
            vm.boards.$loaded().then(function(){
                if (!$stateParams.boardId){
                    vm.selectedBoard = vm.boards[0];
                    updateState();
                } else {
                    vm.selectedBoard = vm.boards.$getRecord($stateParams.boardId);
                }
            });
            var userStateChangeFn = $rootScope.$on('userStateChange', function($event, user){
                 if (!user){
                     vm.boards.$destroy();
                 }
            });
            $scope.$on('$destroy', userStateChangeFn);
        }

        function selectBoard(board) {
            vm.selectedBoard = board;
            updateState();
        }

        function updateState(){
            $state.go($state.current, {boardId: vm.selectedBoard.$id}, {notify: false});
        }

    }
})();
