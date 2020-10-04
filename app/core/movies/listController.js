(function () {
    'use strict';

    angular.module('app.movies.list', ['app.service'])
            .controller('MoviesListController', MoviesListController);

    MoviesListController.$inject = ['service'];

    function MoviesListController(service) {
        var vm = this;
        vm.list = [];
        vm.error = '';

        vm.title = "Popular Movies"
        vm.list = service.getAll()
            .then(function (data) {
                vm.list = data.entries.filter((item)=> {
                    return item.releaseYear >= 2010 && item.programType === 'movie'
                });
                vm.list=  vm.list.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 

                console.log('Retrieved movies');
            })
            .catch(function () {
                vm.error = 'Oops, something went wrong..'
            });
    }
})();
