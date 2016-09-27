/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.dashboard', [])
        .config(Config);

    /** @ngInject */
    function Config($stateProvider, $translatePartialLoaderProvider) {
        $stateProvider
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/apps/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm'
                    }
                },
                bodyClass: 'dashboard'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/dashboard');
    }
})();