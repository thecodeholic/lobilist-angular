/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('ListService', ListServiceFn);

    /** @ngInject */
    function ListServiceFn($q) {
        var ListService = function ListService() {};
        ListService.prototype.getListsByBoardId = getListsByBoardId;

        return new ListService();

        function getListsByBoardId(boardId) {
            var deferred = $q.defer(),
                lists = [
                    {
                        id: 1,
                        title: "Todo"
                    },
                    {
                        id: 2,
                        title: "doing"
                    },
                    {
                        id: 3,
                        title: "testing"
                    },
                    {
                        id: 4,
                        title: "done"
                    }
                ];

            deferred.resolve(lists);

            return deferred.promise;
        }
    }
})();