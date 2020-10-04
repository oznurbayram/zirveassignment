(function () {
    'use strict';

    angular.module('app.service', [])

            .factory('service', service);

    service.$inject = ['$http', '$q'];

    function service($http, $q) {
        return {
            getAll: getAll
        };

        function getAll() {
            return $http.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
                    .then(getAllComplete)
                    .catch(getAllFailed);

            function getAllComplete(response) {
                console.log(response);
                return response.data;
            }

            function getAllFailed(e) {
                console.log(e);
                return $q.reject(e);
            }
        }
    }
})();
