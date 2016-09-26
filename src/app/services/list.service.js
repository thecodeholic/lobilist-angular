/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('ListService', ListServiceFn);

    /** @ngInject */
    function ListServiceFn($firebaseArray) {
        var lists = null,
            listsRef = firebase.database().ref().child('lists');

        return {
            getListsByBoardId: getListsByBoardId
        };

        function getListsByBoardId(boardId) {
            if (lists === null){
                lists = $firebaseArray(listsRef.child(boardId));
            }
            return lists;
        }
    }
})();