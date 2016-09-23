/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardController', BoardController);

    /** @ngInject */
    function BoardController($scope, $log){
        var vm = this;

        $log.debug($scope);
        // Data
        vm.board = $scope.board;
        vm.title = '';
        vm.lists = [
            {
                id: 1,
                title: "something"
            }
        ];

        // Methods
        vm.addList = addList;

        init();

        function init(){
            $scope.$watch('board', function(){
                console.log("board changed");
                vm.board = $scope.board;
                angular.forEach($scope.board, function (value, key) {
                    vm[key] = value;
                });
            });
        }

        function addList(){
            //@todo
        }
    }
})();