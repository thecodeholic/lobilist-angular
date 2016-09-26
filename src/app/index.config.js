(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .config(config);

    /** @ngInject */
    function config($mdIconProvider, $logProvider, toastrConfig, $translateProvider) {
        $mdIconProvider.fontSet('md', 'material-icons');

        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;


        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.useStaticFilesLoader({
            files: [
                {
                    prefix: 'app/directives/main/i18n/',
                    suffix: '.json'
                },
                {
                    prefix: 'app/directives/board/i18n/',
                    suffix: '.json'
                },
                {
                    prefix: 'app/directives/list/i18n/',
                    suffix: '.json'
                },
                {
                    prefix: 'app/directives/card/i18n/',
                    suffix: '.json'
                }
            ]
        });
        $translateProvider.preferredLanguage('en');
    }

})();
