function Ticket(movieTitle, movieShowTime, patronAge) {
  this.movieTitle = movieTitle;
  this.movieShowTime = movieShowTime;
  this.patronAge = patronAge;
}

Ticket.prototype.cost = function() {
  var cost = 10;

  if (this.patronAge  < 12 || this.patronAge > 55) {
   cost -= 2;
  }
  return cost;
};

function resetFields(){
  $("input#new-movie-title").val("");
  $("input#new-movie-show-time").val("");
  $("input#new-patron-age").val("");
}

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
    var inputtedMovieTitle = $("input#new-movie-title").val();
    var inputtedMovieShowTime = $("input#new-movie-show-time").val();
    var inputtedPatronAge = parseInt($("input#new-patron-age").val());

    var newTicket = new Ticket(inputtedMovieTitle, inputtedMovieShowTime, inputtedPatronAge);
    $(".ticket-show").show();

    $(".new-ticket").append("Movie Title: " + inputtedMovieTitle + "</br> Movie Show Time: " + inputtedMovieShowTime);
    $(".ticket-cost").text("$" + newTicket.cost() + ".00");

    $(resetFields());
    event.preventDefault();
  });
});
