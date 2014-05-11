'use strict';

$(document).ready(function(){
	var movie={};
	var config;
	var addWord = function(title){
		$('#title').empty();

		//logic to change word here

		//if first word contains the
		if (title.indexOf('The') === 0){
			title = "Mom's " + title.substring(4,title.length);

		}

		//else if title contains more than 1 word and does not start with "The"
		else if (title.indexOf(' ') != -1){
			
			//just 1 space, replace first word
			if(title.indexOf(' ') === title.lastIndexOf(' ')){
				title = "Mom's" +title.substring(title.indexOf(' '), title.length);
			}

			//if more than 1 word, replace the last word with mom
			else {
				title = title.substring(0, title.lastIndexOf(' ')) + " Mom";
			}
		}

		else{
			title = "Mom's" + ' ' +  title;
		}



		$('#title').append(title);
	};

	var getRandomNumber = function(maxNumber){
		return (Math.floor( Math.random() *  maxNumber)+1);
	};

	var addBackground = function(base_url, imageUrl){
		$('#poster').attr('src',base_url + imageUrl);
	};

	var addDate = function(releaseDate){
		$('#date').append('Release Date: ' +releaseDate);

	};
	var movieApp = {
		api_key: 'ed68b87c3d69c256a7f70b7e9cb008e2',
		test : undefined,
		init: function(){
			$.ajax({
				url: 'http://api.themoviedb.org/3/configuration',
				type: 'GET',
				data: {api_key: movieApp.api_key},
				dataType: 'jsonp',
				success: function(response) {
					// console.log(response);
					// config = response;
				}
			});

		},

		getMovies: function(pageNumber, titleIndex){
			$.ajax({
				url: 'http://api.themoviedb.org/3/movie/top_rated',
				type: 'GET',
				data: {api_key: movieApp.api_key, page: pageNumber},
				dataType: 'jsonp',
				success: function(response) {
					console.log(response.results[titleIndex]);
					movie.title=response.results[titleIndex].original_title;
					movie.imageUrl= response.results[titleIndex].backdrop_path;
					movie.releaseDate = response.results[titleIndex].release_date;
					addWord(movie.title);
					addDate(movie.releaseDate);
					addBackground('http://image.tmdb.org/t/p/w500', movie.imageUrl);
				}
			});
		}
	};

	var reset = function(){

		
		$('#date').empty();

		movieApp.getMovies(getRandomNumber(150), getRandomNumber(20));
	};

	movieApp.init();
	movieApp.getMovies(getRandomNumber(150), getRandomNumber(20));
	console.log('movieApp: ' + movieApp);

	$('#button').on('click',function(){
		reset();
	});
});
