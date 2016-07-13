
juke.config(function($stateProvider){
	$stateProvider.state("oneAlbum", {
		templateUrl: "/js/album/oneAlbum.html",
		url:"/albums/:id",
		controller: "AlbumCtrl"
		// controller: function($scope, $stateParams){
		// 	$scope.oneAlbumId = $stateParams.id;
		// }
	});

	$stateProvider.state("oneAlbum.showAlbums", {
		templateUrl: "/js/album/showAlbums.html",
		url:"/showAlbums"
	})
})