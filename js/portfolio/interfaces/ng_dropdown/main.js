var myApp = angular.module('ulkeBolgeSehir', []);

myApp.controller('ngReady', ['$scope', function ($scope) {

    $scope.test = "Hello World!";

    $scope.Turkey = [
        { Region: 'Marmara', Cities: [ 'İstanbul', 'Bursa', 'Edirne' ] },
        { Region: 'Doğu Anadolu', Cities: [ 'Ağrı', 'Muş' ] },
        { Region: 'Karadeniz', Cities: [ 'Trabzon', 'Rize', 'Ordu', 'Giresun' ] },
        { Region: 'Ege', Cities: [ 'İzmir', 'Aydın', 'Edirne' ] }
    ];
    $scope.Germany = [
        { Region: 'Bavyera', Cities: [ 'foo', 'bar', 'foobar' ] },
        { Region: 'Bremen', Cities: [ 'barfoo', 'Mitte' ] },
        { Region: 'Brandenburg', Cities: [ 'foofoo', 'barbar' ] }
    ];
    $scope.Faroe = [
        { Region: 'Kuzey', Cities: [ 'Stremoy', 'Eysturoy' ] },
        { Region: 'Güney', Cities: [ 'Suduroy', 'Sandoy' ] }
    ];
    $scope.countries = [
        { country: 'Türkiye', displayRegions: 'Region', displayCities: 'Cities', data: $scope.Turkey, subdata: $scope.Turkey.Cities },
        { country: 'Almanya', displayRegions: 'Region', displayCities: 'Cities', data: $scope.Germany, subdata: $scope.Germany.Cities },
        { country: 'Faroe Adaları', displayRegions: 'Region', displayCities: 'Cities', data: $scope.Faroe, subdata: $scope.Faroe.Cities }
    ];

}]);

myApp.filter('change', function () {
    return function (name) {
        return name.replace('Hello', 'Goodbye');
    }
});