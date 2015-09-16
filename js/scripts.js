function Ticket(movieTitle, movieShowTime, patronAge) {
  this.movieTitle = movieTitle;
  this.movieShowTime = movieShowTime;
  this.patronAge = patronAge;
}

Ticket.prototype.cost = function() {
 var cost = 10;

 if (this.patronAge <== 12 || this.patronAge >== 55) {
   cost += 2;
 }
  return cost;
};


function resetFields(){
  $("input#new-movie-title").val("");
  $("input#new-movie-time").val("");
  $("div.hide-form").not(':first').remove();
}


$(document).ready(function() {
  $("form#new-movie").submit(function(event) {
    var inputtedMovieTitle = $("input#new-movie-title").val();
    var inputtedMovieTime = $("input#new-movie-time").val();

    var newMovie = new Movie(inputtedMovieTitle, inputtedMovieTime);

    $("ul#movies").append("<li><span class='movie'>" + newMovie.fullMovie() + "</span></li>");

    $(".movie").last().click(function() {
      $("#show-movie h2").text("No Movies for You");
      $("#show-movie").show();

      });


    $(resetFields());
    event.preventDefault();
  });
});
