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
                url: '/dashboard/:boardId',
                views: {
                    'content@app': {
                        templateUrl: 'app/main/apps/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'vm'
                    }
                },
                // resolve: {
                //     // controller will not be loaded until $requireSignIn resolves
                //     // Auth refers to our $firebaseAuth wrapper in the factory below
                //     "currentAuth": ["AuthService", function (AuthService) {
                //         // $requireSignIn returns a promise so the resolve waits for it to complete
                //         // If the promise is rejected, it will throw a $stateChangeError (see above)
                //         return AuthService.$requireSignIn();
                //     }]
                // },
                bodyClass: 'dashboard'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/dashboard');
    }
})();