(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.otherwise('');
        $stateProvider
                .state('root', {
                    abstract: true,
                    url: '/',
                    data: {
                        title: 'Home',
                    },
                    views: {
                        'header': {
                            templateUrl: 'core/navigation/headerView.html',
                            controller: 'HeaderController'
                        },
                        'menu': {
                            templateUrl: 'core/navigation/menuView.html',
                            controller: 'MenuController',
                            controllerAs: 'MC'
                        },
                        'content': {
                            template: 'Choose option from menu...'
                        },
                        'footer': {
                            templateUrl: 'core/navigation/footerView.html',
                            controller: 'FooterController'
                        }
                    }
                })
                .state('root.home', {
                    url: 'home',
                    data: {
                        title: 'Popular Titles'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/home/home.html',
                            controller: 'HomeController'
                        }
                    }
                })
                .state('root.series', {
                    abstract: true,
                    url: 'series',
                    data: {
                        title: 'Series'
                    }
                })
                .state('root.series.list', {
                    url: '/list',
                    data: {
                        title: 'Popular Series'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'common/templates/listView.html',
                            controller: 'SeriesListController',
                            controllerAs: 'MLC'
                        }
                    }
                })
                .state('root.movies', {
                    abstract: true,
                    url: 'movies',
                    data: {
                        title: 'Movies',
                    }
                })
                .state('root.movies.list', {
                    url: '/list',
                    data: {
                        title: 'Popular Movies'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'common/templates/listView.html',
                            controller: 'MoviesListController',
                            controllerAs: 'MLC'
                        }
                    }
                })
    }
})();
