/**
 * Created by zura on 9/26/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('FirebaseService', FirebaseServiceFn);

    /** @ngInject */
    function FirebaseServiceFn($firebaseRef, $firebaseArray, $firebaseObject) {
        var rootRef = $firebaseRef,
            boardsRef = rootRef.boards,
            listsRef = rootRef.lists,
            cardsRef = rootRef.cards;

        return {
            rootRef: rootRef,
            boardsRef: boardsRef,
            listsRef: listsRef,
            getBoards: getBoards,
            getBoardById: getBoardById,
            getListsByBoardId: getListsByBoardId,
            getCardsByBoardAndListId: getCardsByBoardAndListId
        };

        function getBoards() {
            return $firebaseArray(boardsRef);
        }

        function getBoardById(boardId) {
            return $firebaseObject(boardsRef.child(boardId));
        }

        function getListsByBoardId(boardId) {
            return $firebaseArray(listsRef.child(boardId).orderByChild("position"));
        }

        function getCardsByBoardAndListId(boardId, listId){
            return boardId && listId ? $firebaseArray(cardsRef.child(boardId+"/"+listId).orderByChild("position")) : [];
        }
    }
})();