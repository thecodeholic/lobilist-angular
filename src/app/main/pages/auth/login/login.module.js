/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.auth.login', [])
        .config(Config);

    /** @ngInject */
    function Config($stateProvider) {


        $stateProvider
            .state('app.login', {
                url: '/login',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/pages/auth/login/login.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    }
                },
                bodyClass: 'login'
            })
    }
})();