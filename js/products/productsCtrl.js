var app = angular.module("miniRoute");

app.controller("productsCtrl", function($scope, $routeParams, productService){
	if($routeParams.id === "shoes"){
		$scope.productData = productService.shoeData;
		console.log("got here")
	}	else if ($routeParams.id === "socks") {
		$scope.productData = productService.sockData;
	}
});