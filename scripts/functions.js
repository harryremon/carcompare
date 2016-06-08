var app = angular.module('servicesApp', []);
app.controller('mainController', function ($scope) {
    $scope.uberxSurge = 1.0;
    $scope.uberSelectSurge = 1.0;
    $scope.careemSurge = 1.0;
    $scope.careemBusinessSurge = 1.0;

    var uberx = { name: "UberX", img: "/assets/uber.png", start: 3, km: 1.30, min: 0.20, avail: 80 };
    var uberselect = { name: "UberSELECT", img: "/assets/uber.png", start: 5, km: 1.40, min: 0.30, avail: 70 };
    var careem = { name: "Careem Economy", img: "/assets/careem.png", start: 5, km: 1.50, min: 0.40, avail: 75 };
    var careemBusiness = { name: "Careem Business", img: "/assets/careem.png", start: 10, km: 2.30, min: 0.40, avail: 65 };
    var ousta = { name: "Ousta Super Saver", img: "/assets/ousta.png", start: 4, km: 1.45, min: 0.25, avail: 40 };
    var oustaEconomy = { name: "Ousta Economy", img: "/assets/ousta.png", start: 6.5, km: 1.75, min: 0.30, avail: 30 };
    var whiteTaxi = { name: "Cairo White Taxi", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TAXI.jpg/640px-TAXI.jpg", start: 3, km: 1.40, min: 0.25, avail: 100 };
    var serviceList = new Array();
    serviceList.push(uberx);
    serviceList.push(uberselect);
    serviceList.push(careem);
    serviceList.push(careemBusiness);
    serviceList.push(ousta);
    serviceList.push(oustaEconomy);
    serviceList.push(whiteTaxi);

    $scope.propertyName = 'start';
    $scope.reverse = false;
    $scope.serviceList = serviceList;

    $scope.sortBy = function (propertyName) {
        if (propertyName === "avail")
            $scope.reverse = true;
        else
            $scope.reverse = false;
        $scope.propertyName = propertyName;
    };
    $scope.setSurge = function () {
        var uberx = { name: "UberX", img: "/assets/uber.png", start: Math.round((3*$scope.uberxSurge)*100)/100, km: Math.round((1.30*$scope.uberxSurge)*100)/100, min: Math.round((0.20*$scope.uberxSurge)*100)/100, avail: 80 };
        var uberselect = { name: "UberSELECT", img: "/assets/uber.png", start: Math.round((5*$scope.uberSelectSurge)*100)/100, km: Math.round((1.40*$scope.uberSelectSurge)*100)/100, min: Math.round((0.30*$scope.uberSelectSurge)*100)/100, avail: 70 };
        var careem = { name: "Careem Economy", img: "/assets/careem.png", start: Math.round((5*$scope.careemSurge)*100)/100, km: Math.round((1.50*$scope.careemSurge)*100)/100, min: Math.round((0.40*$scope.careemSurge)*100)/100, avail: 75 };
        var careemBusiness = { name: "Careem Business", img: "/assets/careem.png", start: Math.round((10*$scope.careemBusinessSurge)*100)/100, km: Math.round((2.30*$scope.careemBusinessSurge)*100)/100, min: Math.round((0.40*$scope.careemBusinessSurge)*100)/100, avail: 65 };
        var ousta = { name: "Ousta Super Saver", img: "/assets/ousta.png", start: 4, km: 1.45, min: 0.25, avail: 40 };
        var oustaEconomy = { name: "Ousta Economy", img: "/assets/ousta.png", start: 6.5, km: 1.75, min: 0.30, avail: 30 };
        var whiteTaxi = { name: "Cairo White Taxi", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TAXI.jpg/640px-TAXI.jpg", start: 3, km: 1.40, min: 0.25, avail: 100 };
        if($scope.uberxSurge>1)
        uberx.name = "UberX (x"+$scope.uberxSurge+")"
        if($scope.uberSelectSurge>1)
        uberselect.name = "UberSELECT (x"+$scope.uberSelectSurge+")"
        if($scope.careemSurge>1)
        careem.name = "Careem Economy (x"+$scope.careemSurge+")"
        if($scope.careemSurge>1)
        careemBusiness.name = "Careem Business (x"+$scope.careemBusinessSurge+")"
        var newServiceList = new Array();
        newServiceList.push(uberx);
        newServiceList.push(uberselect);
        newServiceList.push(careem);
        newServiceList.push(careemBusiness);
        newServiceList.push(ousta);
        newServiceList.push(oustaEconomy);
        newServiceList.push(whiteTaxi);
        $scope.serviceList = newServiceList;
    }
});
