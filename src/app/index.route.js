(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'main@': {
                        templateUrl: 'app/layouts/content_only.html'
                    }
                }
            });

    }

})();
