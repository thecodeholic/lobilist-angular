/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(AuthService, $firebaseAuth, $log){
        var vm = this;

        // Data

        // Methods
        vm.loginWithGoogle = loginWithGoogle;

        init();

        ///////////

        function init(){

        }

        function loginWithGoogle(){
            var provider = new $firebaseAuth.GoogleAuthProvider();

            AuthService
                .$signInWithPopup(provider)
                .then(function(){
                    $log.debug("Sign in with popup callback", arguments);
                });
        }
    }
})();