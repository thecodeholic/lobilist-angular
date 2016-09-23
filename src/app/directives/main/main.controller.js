(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, toastr, $log, BoardService) {
        var vm = this;

        // Data
        vm.selectedBoard = null;
        vm.boards = [];
        vm.showToastr = showToastr;

        // Methods
        vm.selectBoard = selectBoard;

        init();

        /////////////

        function init() {

            BoardService
                .getBoards()
                .then(function(result){
                    vm.boards = result;
                    vm.selectedBoard = vm.boards[0];
                });
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
