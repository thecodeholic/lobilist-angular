/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('CardService', CardService);

    /** @ngInject */
    function CardService(FirebaseService, $firebaseArray) {

        return {
            getCardsByBoardAndListId: getCardsByBoardAndListId,
            updatePosition: updatePosition
        };

        function getCardsByBoardAndListId(boardId, listId){
            return boardId && listId ? $firebaseArray(FirebaseService.cardsRef.child(boardId+"/"+listId).orderByChild("position")) : [];
        }

        function updatePosition(board, list, oldIndex, newIndex){


            getCardsByBoardAndListId(board.$id, list.$id);
            return;
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