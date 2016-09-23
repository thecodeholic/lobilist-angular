/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardController', BoardController);

    /** @ngInject */
    function BoardController($scope, $log, ListService){
        var vm = this;

        $log.debug($scope);
        // Data
        vm.board = $scope.board;
        vm.title = '';
        vm.lists = [];

        // Methods
        vm.addList = addList;

        init();

        function init(){
            $scope.$watch('board', function(){
                vm.board = $scope.board;
                angular.forEach($scope.board, function (value, key) {
                    vm[key] = value;
                });
            });

            ListService
                .getListsByBoardId(1)
                .then(function(lists){
                    vm.lists = lists;
                });
        }

        function addList(){
            //@todo
        }
    }
})();