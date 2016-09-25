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
        var boardsRef = firebase.database().ref().child('boards');

        var BoardService = function BoardService(){};
        BoardService.prototype.getBoards = getBoards;
        return new BoardService();

        function getBoards() {
            var deferred = $q.defer(),
                boards = $firebaseArray(boardsRef);

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