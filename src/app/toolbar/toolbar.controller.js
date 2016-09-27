/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($state, $mdSidenav, AuthService) {
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
            $state.go(AuthService.loginState);
            AuthService.$signOut();
        }

        function toggleSidenav(componentId) {
            $mdSidenav(componentId).toggle();
        }
    }
})();