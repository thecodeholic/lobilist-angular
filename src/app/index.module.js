(function () {
    'use strict';

    angular
        .module('lobilistAngular', [
            'ngAnimate',
            'ngCookies',
            'ngSanitize',
            'ngMessages',
            'ngAria',
            'ngResource',
            'ui.router',
            'ngMaterial',
            'toastr',
            'pascalprecht.translate',
            'as.sortable',

            'firebase',

            'app.dashboard',
            'app.pages'
        ]);

})();
