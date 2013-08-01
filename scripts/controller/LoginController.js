'use strict';

function LoginController($scope, $routeParams, $location,$rootScope, dataService, notifierService) {

	var restAuth = dataService.restAuth;

	$scope.login = function() {
		sessionStorage.removeItem("username");
		sessionStorage.removeItem("access");
		var user = $scope.user;
		restAuth.login(user, {
			contentType: "application/json",
			success : function(data) {
				var role = $.inArray("admin", data.roles) >= 0 ? 1 : 0;
				sessionStorage.setItem("username", data.loginName);
				sessionStorage.setItem("access", role);
                AeroGear.SimplePushClient({ simplePushServerURL: "http://localhost:7777/simplepush", onConnect: function() {
                  var message = "loginDone";
                  $rootScope.$broadcast('loginDone', message);
                  notifierService.connector();
                } });
                $location.path('/Leads');
				$scope.$apply();


			},
			error : function(data) {

			}
		});
	};

	$scope.logout = function() {
		sessionStorage.removeItem("username");
		sessionStorage.removeItem("access");
		var user = $scope.user;
		restAuth.logout();
	};

	$scope.isAdmin = function() {
		return sessionStorage.getItem("access") == 1;
	};

	$scope.isLoggedIn = function() {
		return sessionStorage.getItem("username") != undefined;
	};
};