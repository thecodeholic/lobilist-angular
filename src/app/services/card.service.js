/**
 * Created by zura on 9/27/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('CardService', CardService);

    /** @ngInject */
    function CardService(FirebaseService) {

        return {
            getCards: getCards
        };

        function getCards(boardId, listId){
            return FirebaseService.getCardsByBoardAndListId(boardId, listId);
        }

    }
})();