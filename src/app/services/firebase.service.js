/**
 * Created by zura on 9/26/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('FirebaseService', FirebaseServiceFn);

    /** @ngInject */
    function FirebaseServiceFn($rootScope, $q, $firebaseArray) {
        var rootRef = firebase.database().ref(),
            boardsRef = rootRef.child('boards'),
            listsRef = rootRef.child('lists'),
            cardsRef = rootRef.child('cards');

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
            return boardId ? $firebaseArray(listsRef.child(boardId)) : null;
        }

        function getCardsByBoardAndListId(boardId, listId){
            return boardId && listId ? $firebaseArray(cardsRef.child(boardId+"/"+listId)) : null;
        }

        /**
         * Find board by id
         *
         * @param boardId
         * @returns {board}
         */
        function findBoardById(boardId) {
            var newBoards = boards.filter(function (board) {
                return board.id === boardId;
            });
            return newBoards.length > 0 ? newBoards[0] : null;
        }
    }
})();