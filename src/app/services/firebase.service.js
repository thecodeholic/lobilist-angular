/**
 * Created by zura on 9/26/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('FirebaseService', FirebaseServiceFn);

    /** @ngInject */
    function FirebaseServiceFn($firebaseRef, $firebaseArray) {
        var rootRef = $firebaseRef,
            boardsRef = rootRef.boards,
            listsRef = rootRef.lists,
            cardsRef = rootRef.cards;

        return {
            rootRef: rootRef,
            boardsRef: boardsRef,
            listsRef: listsRef,
            getBoards: getBoards,
            getListsByBoardId: getListsByBoardId,
            getCardsByBoardAndListId: getCardsByBoardAndListId
        };

        function getBoards() {
            return $firebaseArray(boardsRef);
        }

        function getListsByBoardId(boardId) {
            return boardId ? $firebaseArray(listsRef.child(boardId)) : [];
        }

        function getCardsByBoardAndListId(boardId, listId){
            return boardId && listId ? $firebaseArray(cardsRef.child(boardId+"/"+listId)) : [];
        }
    }
})();