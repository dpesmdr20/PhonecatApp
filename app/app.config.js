angular.
module('phonecatApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).
        when('/phones', {
            template: '<phone-list></phone-list>'
        }).

        otherwise('/phones');
    }
]);