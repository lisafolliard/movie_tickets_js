describe('Movie', function() {
  it("creates a new movie with with a movie name attached", function() {
    var testMovie = new Movie("A League of Their Own", 2100);
    expect(testMovie.movieTime).to.equal(2100);
    expect(testMovie.movieTitle).to.equal("A League of Their Own");
    expect(testMovie.tickets).to.eql([]);
  });

  it("adds the fullMovie method to all the tickets", function() {
    var testMovie = new Movie("2200", "13");
    expect(testMovie.fullMovie()).to.equal("2200, 13");
  });
});

describe("Ticket", function() {
  it("creates a new ticket with values", function() {
    var testTicket = new Ticket(55);
    expect(testTicket.age).to.equal(55);
  });
});
