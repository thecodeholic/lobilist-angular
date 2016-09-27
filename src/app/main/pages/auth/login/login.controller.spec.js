/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    describe('LoginController', function(){
        var vm,
            $rootScope;

        beforeEach(module('app.pages.auth.login'));
        beforeEach(inject(function(_$controller_, _$rootScope_){
            $rootScope = _$rootScope_;

            vm = _$controller_('LoginController', {$scope: $rootScope.$new()});
        }));
    });

})();