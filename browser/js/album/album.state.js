
juke.config(function($stateProvider){
	$stateProvider.state("albums", {
		templateUrl: '/js/album/album.html',
		url: '/albums',
		controller: "AlbumsCtrl"
	});
});
