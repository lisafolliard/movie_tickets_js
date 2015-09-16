describe('Ticket', function() {
  it("creates a new ticket with movie title", function() {
    var testTicket = new Ticket("A League of Their Own");
    expect(testTicket.movieTitle).to.equal("A League of Their Own");
  });

//   it("adds the fullMovie method to all the tickets", function() {
//     var testMovie = new Movie("2200", "13");
//     expect(testMovie.fullMovie()).to.equal("2200, 13");
//   });
// });
//
// describe("Ticket", function() {
//   it("creates a new ticket with values", function() {
//     var testTicket = new Ticket(55);
//     expect(testTicket.age).to.equal(55);
//   });
});
