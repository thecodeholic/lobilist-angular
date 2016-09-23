/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('CardService', CardServiceFn);

    /** @ngInject */
    function CardServiceFn($q) {
        var CardService = function CardService() {};
        CardService.prototype.getCardsByListId = getCardsByListId;
        return new CardService();

        function getCardsByListId() {
            var deferred = $q.defer(),
                cards = [
                    {
                        id: 1,
                        listId: 1,
                        title: "Create firstname, lastname is user registration"
                    },
                    {
                        id: 2,
                        listId: 1,
                        title: "Make username optional"
                    },
                    {
                        id: 3,
                        listId: 1,
                        title: "User creation does not work"
                    },
                    {
                        id: 4,
                        listId: 1,
                        title: "Video uploading does not work"
                    }
                ];

            deferred.resolve(cards);

            return deferred.promise;
        }
    }
})();