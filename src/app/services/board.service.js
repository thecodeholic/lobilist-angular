/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('BoardService', BoardServiceFn);

    /** @ngInject */
    function BoardServiceFn($q, $firebaseArray) {
        var boards = null,
            boardsRef = firebase.database().ref().child('boards');

        return {
            getBoards: getBoards
        };

        function getBoards() {
            var deferred = $q.defer();

            if (boards === null) {
                boards = $firebaseArray(boardsRef);
            }
            boards.$loaded().then(function(){
                var newBoards = [];
                angular.forEach(boards, function (value) {
                    newBoards.push({
                        id: value.$id,
                        title: value.title,
                        cards: value.cards
                    });
                });
                deferred.resolve(newBoards);
            });

            return deferred.promise;
        }
    }
})();