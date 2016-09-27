/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('UserService', UserService);

    /** @ngInject */
    function UserService(AuthService, $rootScope) {
        var users = {
            current: null
        };

        AuthService.$onAuthStateChanged(function (firebaseUser) {
            users.current = firebaseUser;
            $rootScope.$emit('userStateChange', firebaseUser);
        });

        return users;
    }
})();