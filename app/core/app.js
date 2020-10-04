(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.service',
        'app.home',
        'app.movies.list',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.series.list',
        'angular-loading-bar',
        'ngAnimate'
    ]);
})();
