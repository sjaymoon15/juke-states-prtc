
juke.config(function($stateProvider){
	$stateProvider.state("oneAlbum", {
		templateUrl: "/js/album/oneAlbum.html",
		url:"/albums/:id",
		controller: "AlbumCtrl",
		resolve:{
			album: function(AlbumFactory, $stateParams){
				return AlbumFactory.fetchById($stateParams.id);
			}
		}
	});

	$stateProvider.state("oneAlbum.showAlbums", {
		templateUrl: "/js/album/showAlbums.html",
		url:"/showAlbums"
	})
})