$(function(){

  // console.log(apikey());
  // var api = apikey();
  // console.log(api);




  // console.log(getKey());
  // var api = getKey();


  $('#searchmovies').on('keyup', function(){
    let inputValue = $(this).val();
    // console.log(inputValue);
    $('#output').children().remove();
    $('#output').empty();
    $.ajax({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=911735c5484e20c6e0c3b23279c67d06&page=1&include_adult=false&query=${inputValue}`
    }).done(function(data){
      // console.log(data.results);
      let movies = data.results;

      $.each(movies, function(index, movie){
        var poster = '';
        // console.log(movie.poster_path);
        // console.log(movie.backdrop_path);
        if (movie.poster_path === null) {
          if(movie.backdrop_path){
            poster = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
          }else{
            poster = `http://www.kyoglecinemas.com.au/wp-content/uploads/Movie-Poster-Blank.jpg`;
          }
          //  poster = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
           // console.log(poster);
           $('#output').append(`<div class="col-sm-6 col-md-3 my-3">
            <a href='/movies/${movie.id}'>
              <div class='img-thumbnail h-100 text-center bg-col-sha pt-3'>
                <img class='img-thumbnail img-responsive w-75' src=${poster}>
                <p class='middle'>${movie.title}</p>
              </div>
            </a>
           </div>`);
           // $('#output').children().filter(":gt(19)").remove();
        } else if (movie.poster_path === null && movie.backdrop_path === null) {
          $('#output').append(`<div class="col-sm-6 col-md-3 my-3"><a href='/movies/${movie.id}'><div class='img-thumbnail h-100 text-center bg-col-sha pt-3'><img class='img-thumbnail img-responsive w-75' src="http://www.kyoglecinemas.com.au/wp-content/uploads/Movie-Poster-Blank.jpg"><p class='middle'>${movie.title}</p></div></a></div>`);
          // $('#output').children().filter(":gt(19)").remove();
        } else {
          poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          // console.log(poster);
          $('#output').append(`<div class="col-sm-6 col-md-3 my-3">
            <a href='/movies/${movie.id}'>
              <div class='img-thumbnail h-100 text-center pt-3 bg-col-sha'>
                <img class='img-thumbnail img-responsive w-75' id='image' src=${poster}>
                <p class='middle'>${movie.title}</p>
              </div>
            </a>
          </div>`);
          // $('#output').children().filter(":gt(19)").remove();
        }

    });

    $('#output').children().filter(":gt(19)").remove();

    });
  });

});
