(function () {
    'use strict';

    describe('MainController', function () {
        var vm;
        var toastr;
        var $rootScope;

        beforeEach(module('lobilistAngular'));
        beforeEach(inject(function (_$controller_, _$rootScope_, _toastr_) {
            spyOn(_toastr_, 'info').and.callThrough();

            $rootScope = _$rootScope_;

            vm = _$controller_('MainController', {$scope: $rootScope.$new()});
            toastr = _toastr_;
        }));

        it('should show a Toastr info and stop animation when invoke showToastr()', function () {
            vm.showToastr();
            expect(toastr.info).toHaveBeenCalled();
            expect(vm.classAnimation).toEqual('');
        });

        it("should have method selectBoard()", function(){
           expect(vm).toHaveMethod('selectBoard');
        });
    });
})();
