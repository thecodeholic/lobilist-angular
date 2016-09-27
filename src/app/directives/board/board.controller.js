/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardController', BoardController);

    /** @ngInject */
    function BoardController($scope, $rootScope, FirebaseService) {
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
                vm.lists = FirebaseService.getListsByBoardId(vm.board ? vm.board.$id : null);
            });


            $rootScope.$on('userStateChange', function($event, user){
                 if (!user){
                     vm.lists.$destroy();
                 }
            });

        }

        function addList() {
            //@todo
        }
    }
})();