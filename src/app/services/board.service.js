/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('BoardService', BoardService);

    /** @ngInject */
    function BoardService(FirebaseService) {
        var boards = FirebaseService.getBoards();

        boards.$loaded().then(function(){
            console.log(arguments, "loadedddddddd");
        });
        return {
            boards : boards
        };
    }
})();