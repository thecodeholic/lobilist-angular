/**
 * Created by zura on 9/22/2016.
 */
(function () {
    'use strict';

    angular
        .module('lobilistAngular')
        .factory('CardService', CardServiceFn);

    /** @ngInject */
    function CardServiceFn($firebaseArray) {
        return {
            save: save
        };

        function save(cardData, list){
            var cardsRef = $firebaseArray(list.child('cards'));
            cardsRef.push(cardData);
        }
    }
})();