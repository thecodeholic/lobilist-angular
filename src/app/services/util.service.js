/**
 * Created by zura on 10/3/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('UtilService', UtilService);

    /** @ngInject */
    function UtilService($mdDialog, $translate) {
        return {
            showConfirm: showConfirm
        };


        /**
         * Show confirm
         *
         * @param title
         * @param content
         * @param ev
         */
        function showConfirm(title, content, ev) {
            var confirm = $mdDialog.confirm()
                .title(title)
                .htmlContent(content)
                .ariaLabel(title);

            if (ev) {
                confirm.targetEvent(ev);
            }
            confirm
                .ok($translate.instant('OK'))
                .cancel($translate.instant('CANCEL'));

            return $mdDialog.show(confirm);
        }
    }
})();