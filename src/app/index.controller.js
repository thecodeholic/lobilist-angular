/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController($rootScope, UserService, AuthService, $state, $log) {
        var vm = this;

        // Data
        $rootScope.UserService = UserService;

        // Methods

        init();

        ///////////

        function init() {
            $rootScope.$on('userStateChange', function($event, user){
                if (user){
                    $state.go(AuthService.dashboardState);
                } else {
                    $state.go(AuthService.loginState);
                }
            });
        }
    }
})();