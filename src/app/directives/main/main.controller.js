(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, toastr, $log, BoardService) {
        var vm = this;

        // Data
        vm.selectedBoard = null;
        vm.boards = [];
        vm.classAnimation = '';
        vm.creationDate = 1474533260419;
        vm.showToastr = showToastr;

        // Methods
        vm.selectBoard = selectBoard;


        init();

        /////////////

        function init() {

            $log.debug(BoardService);
            BoardService
                .getBoards()
                .then(function(result){
                    vm.boards = result;
                    vm.selectedBoard = vm.boards[0];
                });
            $timeout(function () {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

        function selectBoard(board){
            vm.selectedBoard = board;
        }
    }
})();
