function Movie(movieTitle, movieTime) {
  this.movieTitle = movieTitle
  this.movieTime = movieTime
  this.tickets = []
}

Movie.prototype.fullMovie = function() {
  return this.movieTitle + ", " + this.movieTime;
}

function Ticket(age) {
  this.age = age
}
