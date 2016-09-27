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
            firebaseBoards = null,
            boards = null,
            firebaseLists = null,
            lists = null;

        init();

        return {
            rootRef: rootRef,
            boardsRef: boardsRef,
            listsRef: listsRef,
            getBoards: getBoards,
            getListsByBoardId: getListsByBoardId,
            addCard: addCard
        };

        function init(){
            $rootScope.$on('userStateChange', function($event, user){
                 if (!user){
                     if (firebaseBoards){
                         firebaseBoards.$destroy();
                     }
                     if (firebaseLists){
                         firebaseLists.$destroy();
                     }
                 }
            });
        }

        function getBoards() {
            var deferred = $q.defer();

            if (boards === null) {
                boards = [];
                firebaseBoards = $firebaseArray(boardsRef);
                firebaseBoards.$loaded().then(function () {
                    angular.forEach(firebaseBoards, function (value) {
                        boards.push({
                            id: value.$id,
                            title: value.title
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
            var deferred = $q.defer();

            if (lists === null || lists[boardId] == null) {
                lists = lists || {};
                lists[boardId] = [];
                firebaseLists = $firebaseArray(listsRef.child(boardId));
                firebaseLists
                    .$loaded()
                    .then(function () {
                        angular.forEach(firebaseLists, function (list) {
                            lists[boardId].push({
                                id: list.$id,
                                boardId: boardId,
                                title: list.title,
                                cards: list.cards
                            });
                        });
                        deferred.resolve(lists[boardId]);
                    }, function(){
                        console.log("eeeeeeeeeeeeeerrrrrrrrrrrrrrrrrorrrrrrrrrrrrrrr", arguments);
                    });
            } else {
                deferred.resolve(lists[boardId]);
            }
            return deferred.promise;
        }

        function addCard(cardData, list) {
            var cards = $firebaseArray(listsRef.child(list.boardId).child(list.id).child('cards'));
            return cards
                .$add(cardData)
                .then(function(ref){
                    cardData.id = ref.key;
                });
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