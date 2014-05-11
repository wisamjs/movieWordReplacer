$(document).ready(function(){
	var movie={};
	var config;
	var addWord = function(title){

		//logic to change word here
		for (var i = title.length; i > 0; i -- ){


		}
		$('h2').append(title);
	};
	var movieApp = {
		api_key: 'ed68b87c3d69c256a7f70b7e9cb008e2',
		test : undefined,
		init: function(pageNumber, titleIndex){
			$.ajax({
				url: 'http://api.themoviedb.org/3/configuration',
				type: 'GET',
		  		data: {api_key: movieApp.api_key},
		  		dataType: 'jsonp',
				success: function(response) {
					console.log(response);
					config = response;
					movieApp.test = response;
				}
		});

		},

		getMovies: function(pageNumber, titleIndex){

		$.ajax({
		  url: 'http://api.themoviedb.org/3/movie/popular',
		  type: 'GET',
		  data: {api_key: movieApp.api_key, page: pageNumber},
		  dataType: 'jsonp',
		  success: function(response) {
		  	movie.title=response.results[titleIndex].original_title;
		  	movie.imageUrl= response.results[titleIndex].backdrop_path;
		  	addWord(movie.title);
		  	
		  

		  }
		});
		}		

		

	};

	var reset = function(){
		pageNumber= (Math.floor( Math.random() * 5)+1);
		titleIndex = (Math.floor( Math.random() * 20)+1);

		$('h2').empty();

		movieApp.getMovies(pageNumber, titleIndex);
	}
		var pageNumber= (Math.floor( Math.random() * 5)+1);
		var titleIndex = (Math.floor( Math.random() * 20)+1);

		movieApp.init();
		movieApp.getMovies(pageNumber, titleIndex);
		console.log("movieApp: " + movieApp);

		$('#button').on('click',function(){
			reset();

		});

		//reset();


});
