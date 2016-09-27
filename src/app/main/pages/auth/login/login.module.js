/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.auth.login', [])
        .config(Config);

    /** @ngInject */
    function Config($stateProvider, $translatePartialLoaderProvider) {


        $stateProvider
            .state('app.login', {
                url: '/login',
                views: {
                    'main@': {
                        templateUrl: 'app/layouts/content_only.html'
                    },
                    'content@app.login': {
                        templateUrl: 'app/main/pages/auth/login/login.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    }
                },
                bodyClass: 'login'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/login');
    }
})();