resvApp = angular.module('resvApp',[]);
    resvApp.service('serverUtilities', ['$http', function ($http) {
    this.uploadDataToServer = function (url, method, data, headers, success, failure) {
        var request;

        if (url) {
            method = method || 'GET';
            data = data || {};
            headers = headers || {};
            success = success || function () {
                };
            failure = failure || function () {
                };
            request = {
                method: method,
                url: url,
                data: data,
                headers: headers
            };

            $http(request)
                .then(function (result) {
                    success(result);
                }, function (result) {
                    failure(result);
                });
        }
    }
}]);

resvApp .controller("mycontrol", function ($scope, $timeout, $window, serverUtilities) {
    $scope.resvList = [{
        "_id": {
            "$oid": "58fd16503d79f6244cc0e137"
        },
        "resv_id": 1,
        "resv_name": "dummy",
        "resv_lat": "37.498632",
        "resv_lng": "-122.220852",
        "resv_maxCap": 5000,
        "__v": 0
    }];
    $scope.selectedResv = {
        "resv_id": 1,
        "curr_val": 12,
        "max_val": 132,
        "min_val": 13
    };




});



