/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('app.pages', [
            'app.pages.auth.login'
        ])
        .config(Config);

    /** @ngInject */
    function Config(){

    }
})();