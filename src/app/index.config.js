(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .config(config);

    /** @ngInject */
    function config($mdIconProvider, $logProvider, toastrConfig, $translateProvider, $locationProvider) {
        $mdIconProvider.fontSet('md', 'material-icons');

        $locationProvider.html5Mode(true);

        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;


        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/{part}/i18n/{lang}.json'
        });
        $translateProvider.preferredLanguage('en');
    }

})();
