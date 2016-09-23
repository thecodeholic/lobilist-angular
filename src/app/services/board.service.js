/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('BoardService', BoardServiceFn);

    /** @ngInject */
    function BoardServiceFn($q) {
        var BoardService = function BoardService(){};
        BoardService.prototype.getBoards = getBoards;
        return new BoardService();

        function getBoards() {
            var deferred = $q.defer(),
                boards = [
                    {
                        id: 1,
                        title: "Impresico"
                    },
                    {
                        id: 2,
                        title: "Stg intranet"
                    },
                    {
                        id: 3,
                        title: "Lobianijs"
                    },
                    {
                        id: 4,
                        title: "Lobiadmin"
                    }
                ];

            deferred.resolve(boards);

            return deferred.promise;
        }
    }
})();