/**
 * Created by zura on 10/3/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('ListService', ListService);

    /** @ngInject */
    function ListService(FirebaseService, $firebaseArray) {
        var boardListsMap = {};

        return {
            getListsByBoardId: getListsByBoardId,
            deleteList: deleteList
        };

        function getListsByBoardId(boardId) {
            var lists = $firebaseArray(FirebaseService.listsRef.child(boardId).orderByChild("position"));

            lists.$loaded().then(function(){
                boardListsMap[boardId] = lists;
            });

            return lists;
        }

        function deleteList(list, board) {
            var lists = boardListsMap[board.$id];
            FirebaseService.cardsRef.child(board.$id).child(list.$id).remove();
            return lists.$remove(lists.$indexFor(list.$id));
        }
    }
})();