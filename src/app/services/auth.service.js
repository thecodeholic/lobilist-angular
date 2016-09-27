/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('AuthService', AuthService);

    /** @ngInject */
    function AuthService($firebaseAuth) {
        var auth = $firebaseAuth();
        auth.loginState = 'app.login';
        auth.dashboardState = 'app.dashboard';

        return auth;
    }
})();