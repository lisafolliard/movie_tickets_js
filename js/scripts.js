function Movie(movieTitle) {
  this.movieTitle = movieTitle
  this.tickets = []
}

function Ticket(movieTime, age) {
  this.movieTime = movieTime
  this.age = age

}

Ticket.prototype.fullTicket = function() {
  return this.movieTime + ", " + this.age;
}
