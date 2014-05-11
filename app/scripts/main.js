$(document).ready(function(){
	var movie={};

var movieApp = {
	api_key: 'ed68b87c3d69c256a7f70b7e9cb008e2',
	init: function(pageNumber, titleIndex){

	$.ajax({
	  url: 'http://api.themoviedb.org/3/movie/popular',
	  type: 'GET',
	  data: {api_key: movieApp.api_key, page: pageNumber},
	  dataType: 'jsonp',
	  success: function(response) {
	  	movie.title=response.results[titleIndex].original_title;
	  	movie.imageUrl= response.results[titleIndex].backdrop_path;
	  	console.log(movie);
	  }
	});
	$.ajax({
	  url: 'http://api.themoviedb.org/3/configuration',
	  type: 'GET',
	  data: {api_key: movieApp.api_key},
	  dataType: 'jsonp',
	  success: function(response) {
	  }
	});

	}


};

var reset = function(){
	pageNumber= (Math.floor( Math.random() * 5)+1);
	titleIndex = (Math.floor( Math.random() * 20)+1);

	movieApp.init(pageNumber, titleIndex);
}
	var pageNumber= (Math.floor( Math.random() * 5)+1);
	var titleIndex = (Math.floor( Math.random() * 20)+1);

	movieApp.init(pageNumber, titleIndex);
	console.log(movieApp);

	reset();


});
