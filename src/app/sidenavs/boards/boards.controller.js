/**
 * Created by zura on 9/28/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardsController', BoardsController);

    /** @ngInject */
    function BoardsController($state, BoardService){
        var vm = this;

        // Data
        vm.searchBoardTitle = "";
        vm.boards = BoardService.boards;

        // Methods
        vm.selectBoard = selectBoard;

        init();

        ///////////

        function init(){

        }


        function selectBoard(board) {
            $state.go($state.current, {boardId: board.$id});
        }
    }
})();