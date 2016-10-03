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
            getCardsByBoardAndListId: getCardsByBoardAndListId
        };

        function getCardsByBoardAndListId(boardId, listId){
            return boardId && listId ? $firebaseArray(FirebaseService.cardsRef.child(boardId+"/"+listId).orderByChild("position")) : [];
        }

    }
})();