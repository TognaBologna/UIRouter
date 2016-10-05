angular.module('miniRouting').controller('productsCtrl', function ($scope, $stateParams, productsService) {
    if ($stateParams.id === 'shoes') {
        $scope.productsData = productsService.shoeData;
    }
    else if ($stateParams.id === 'socks') {
        $scope.productsData = productsService.sockData;
    }
});