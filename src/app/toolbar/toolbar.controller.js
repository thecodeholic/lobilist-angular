/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($mdSidenav, AuthService) {
        var vm = this;

        // Data


        // Methods
        vm.logout = logout;
        vm.toggleSidenav = toggleSidenav;

        init();

        ///////////

        function init() {

        }

        function logout() {
            AuthService.$signOut();
        }

        function toggleSidenav(componentId) {
            $mdSidenav(componentId).toggle();
        }
    }
})();