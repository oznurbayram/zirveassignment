(function () {
    'use strict';

    angular.module('app.series.list', ['app.service'])
            .controller('SeriesListController', SeriesListController);

    SeriesListController.$inject = ['service'];

    function SeriesListController(service) {
        var vm = this;
        vm.list = [];
        vm.error = '';

        vm.title = "Popular Series"
        vm.list = service.getAll()
            .then(function (data) {
                vm.list = data.entries.filter((item)=> {
                    return item.releaseYear >= 2010 && item.programType === 'series'
                });
                vm.list=  vm.list.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); 
                console.log('Retrieved series');
            })
            .catch(function () {
                vm.error = 'Oops, something went wrong..'
            });
        }
})();
