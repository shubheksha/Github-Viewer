(function () {
	var app = angular.module("githubViewer", []);
	var MainController = function ($http) {
		this.message = "Hi, Angular!";
		var onResponse = function (response) {
			this.user = response.data;
		};

		var onError = function () {
			this.err = "Couldn't fetch any data, sorry!";
		};

		$http.get("https://api.github.com/users/odetocode")
			.then(onResponse.bind(this), onError.bind(this));

	};
	app.controller("MainController", MainController);


}());