/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardController', BoardController);

    /** @ngInject */
    function BoardController($log){
        var vm = this;

        $log.debug(vm);
        // Data
        vm.title = '';
        vm.lists = [
            {
                title: "something"
            }
        ];

        // Methods
        vm.addList = addList;

        init();

        function init(){

        }

        function addList(){
            //@todo
        }
    }
})();