(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $state, AuthService) {

        $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
            console.log("state change error");
            // We can catch the error thrown when the $requireSignIn promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $state.go(AuthService.loginState);
            }
        });
    }

})();
