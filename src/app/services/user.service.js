/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('UserService', UserService);

    /** @ngInject */
    function UserService(AuthService, $rootScope, $state, $log) {
        var users = {
            current: null
        };

        AuthService.$onAuthStateChanged(function (firebaseUser) {
            users.current = firebaseUser;
            $rootScope.$emit('userStateChange', firebaseUser);

            // if (!firebaseUser) {
            //     $log.debug("Go to " + AuthService.loginState);
            //     $state.go(AuthService.loginState);
            // } else {
            //     $log.debug("Go to " + AuthService.dashboardState);
            //     $state.go(AuthService.dashboardState);
            // }
        });

        return users;
    }
})();