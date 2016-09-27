/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($scope, $state, $log){
        var vm = this;

        // Data


        // Methods


        init();

        ///////////

        function init(){
            $log.debug("login controller");
        }
    }
})();