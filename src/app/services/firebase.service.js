/**
 * Created by zura on 9/26/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('FirebaseService', FirebaseServiceFn);

    /** @ngInject */
    function FirebaseServiceFn($q, $firebaseArray) {
        var rootRef = firebase.database().ref(),
            boardsRef = rootRef.child('boards'),
            listsRef = rootRef.child('lists'),
            firebaseBoards = null,
            boards = null,
            lists = null;

        return {
            getBoards: getBoards,
            getListsByBoardId: getListsByBoardId
        };

        function getBoards() {
            var deferred = $q.defer();

            if (boards === null) {
                firebaseBoards = $firebaseArray(boardsRef);
                firebaseBoards.$loaded().then(function () {
                    boards = [];
                    angular.forEach(firebaseBoards, function (value) {
                        boards.push({
                            id: value.$id,
                            title: value.title,
                            cards: value.cards
                        });
                    });
                    deferred.resolve(boards);
                });
            } else {
                deferred.resolve(boards);
            }

            return deferred.promise;
        }

        function getListsByBoardId(boardId) {
            if (lists === null){
                lists = $firebaseArray(listsRef.child(boardId));
            }
            return lists;
        }
    }
})();