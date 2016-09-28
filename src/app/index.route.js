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
                    },
                    'boards@app': {
                        templateUrl: 'app/sidenavs/boards/boards.html',
                        controller: 'BoardsController as vm'
                    },
                    'boardSettings@app': {
                        templateUrl: 'app/sidenavs/board-settings/board-settings.html',
                        controller: 'BoardSettingsController as vm'
                    }
                }
            });

    }

})();
