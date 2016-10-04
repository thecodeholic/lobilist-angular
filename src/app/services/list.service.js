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
            deleteList: deleteList,
            updatePosition: updatePosition
        };

        function getListsByBoardId(boardId) {
            boardListsMap[boardId] = $firebaseArray(FirebaseService.listsRef.child(boardId).orderByChild("position"));

            return boardListsMap[boardId];
        }

        function deleteList(list, board) {
            var lists = boardListsMap[board.$id];
            FirebaseService.cardsRef.child(board.$id).child(list.$id).remove();
            return lists.$remove(lists.$indexFor(list.$id));
        }

        function updatePosition(board, oldIndex, newIndex){
            var lists = boardListsMap[board.$id],
                i;

            if (oldIndex > newIndex){
                for (i = oldIndex - 1; i >=newIndex; i--){
                    lists[i].position++;
                    lists.$save(i);
                }
            } else {
                for (i = oldIndex + 1; i <=newIndex; i++){
                    lists[i].position--;
                    lists.$save(i);
                }
            }
            lists[oldIndex].position = newIndex + 1;
            lists.$save(oldIndex);
        }
    }
})();