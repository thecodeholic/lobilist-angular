(function() {
  'use strict';

  angular
    .module('lobilistAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
