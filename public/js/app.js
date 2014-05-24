'use strict';

/* App Module */
var demoApp = angular.module('demoApp', ['services', 'angularjs-crypto']);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/get', { templateUrl: 'partials/get.html', controller: DecodeGetController })
        .when('/post', { templateUrl: 'partials/post.html', controller: EncodePostController })
        .when('/key', { templateUrl: 'partials/key.html', controller: KeyController })
        .otherwise({ redirectTo: '/get' });
});
/*demoApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('cryptoHttpInterceptor');
}]);*/
demoApp.run(function(cfCryptoHttpInterceptor, $rootScope) {
    $rootScope.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
    cfCryptoHttpInterceptor.base64Key = $rootScope.base64Key;
    cfCryptoHttpInterceptor.pattern = "_enc"; //default value but for a better understanding it is also defined here
})