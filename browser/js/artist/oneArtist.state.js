
juke.config(function($stateProvider){
	$stateProvider.state("oneArtist", {
		templateUrl: "/js/artist/oneArtist.html",
		url:"/artists/:id",
		controller: "ArtistCtrl"
	});

	$stateProvider.state("oneArtist.showAlbums", {
		templateUrl: "/js/album/showAlbums.html",
		url:"/showAlbums"
	})

	$stateProvider.state("oneArtist.showSongs",{
		templateUrl: "/js/artist/showSongs.html",
		url:"/showSongs"
	})
});