/**
 * Created by zura on 9/28/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardsController', BoardsController);

    /** @ngInject */
    function BoardsController($state, BoardService, UtilService, $translate, $mdSidenav) {
        var vm = this;

        // Data
        vm.searchBoardTitle = "";
        vm.inCreatingBoard = false;
        vm.newBoard = {};
        vm.boards = BoardService.boards;

        // Methods
        vm.selectBoard = selectBoard;
        vm.showCreateBoardForm = showCreateBoardForm;
        vm.addBoard = addBoard;
        vm.cancelCreatingBoard = cancelCreatingBoard;
        vm.deleteBoard = deleteBoard;

        init();

        ///////////

        function init() {

        }

        function selectBoard(board) {
            $mdSidenav('boards-sidenav').toggle();
            $state.go($state.current, {boardId: board.$id});
        }

        function showCreateBoardForm() {
            vm.inCreatingBoard = true;
        }

        function addBoard($event) {
            $event.preventDefault();

            if ($event && $event.keyCode !== 13) {
                return;
            }

            vm.boards.$add(vm.newBoard)
                .then(function (res) {
                    selectBoard(vm.boards.$getRecord(res.key));
                });
            vm.newBoard = {};
            vm.inCreatingBoard = false;
        }

        function cancelCreatingBoard() {
            vm.inCreatingBoard = false;
        }

        function deleteBoard($event, board) {
            $event.stopPropagation();

            UtilService
                .showConfirm(
                    $translate.instant("BOARDS.DELETE_CONFIRM_TITLE", {boardName: board.title}),
                    $translate.instant("BOARDS.DELETE_BOARD_CONFIRM_CONTENT")
                )
                .then(function successCallback(result) {
                    if (result){
                        BoardService.deleteBoard(board);
                    }
                });
        }
    }
})();