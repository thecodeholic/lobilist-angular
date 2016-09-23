/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('ListService', ListServiceFn);

    /** @ngInject */
    function ListServiceFn($q, $firebaseArray) {
        var listsRef = firebase.database().ref().child('lists');
        var ListService = function ListService() {};
        ListService.prototype.getListsByBoardId = getListsByBoardId;

        return new ListService();

        function getListsByBoardId(boardId) {

            var deferred = $q.defer(),
                lists = $firebaseArray(listsRef.child(boardId));

            deferred.resolve(lists);

            return deferred.promise;
        }
    }
})();