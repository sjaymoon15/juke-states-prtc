
juke.config(function($stateProvider){
	$stateProvider.state("artists", {
		templateUrl: "/js/artist/artist.html",
		url: "/artists",
		controller: "ArtistsCtrl"
	});
});