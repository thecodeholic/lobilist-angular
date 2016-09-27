(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'main@': {
                        templateUrl: 'app/layouts/default.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'app/toolbar/toolbar.html',
                        controller: 'ToolbarController as vm'
                    }
                }
            });

    }

})();
