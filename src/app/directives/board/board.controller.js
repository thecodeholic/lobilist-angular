/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('BoardController', BoardController);

    /** @ngInject */
    function BoardController(){
        var vm = this;

        // Data
        vm.lists = [];

        // Methods
        init();

        function init(){

        }
    }
})();