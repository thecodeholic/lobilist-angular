/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController($scope, $rootScope, UserService, AuthService, $state) {
        // var vm = this;

        // Data
        $rootScope.UserService = UserService;

        // Methods

        init();

        ///////////

        function init() {


            var userStateChangeFn = $rootScope.$on('userStateChange', function($event, user){
                if (user){
                    $state.go(AuthService.dashboardState);
                } else {
                    $state.go(AuthService.loginState);
                }
            });
            $scope.$on('$destroy', userStateChangeFn);
        }
    }
})();