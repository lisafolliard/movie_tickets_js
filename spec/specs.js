describe('Ticket', function() {
  it("creates a new ticket with movie title", function() {
    var testTicket = new Ticket("A League of Their Own");
    expect(testTicket.movieTitle).to.equal("A League of Their Own");
  });

  // it("creates a new ticket with show time", function() {
  //   var testTicket = new Ticket("11am");
  //   expect(testTicket.movieShowTime).to.equal("11am");
  // });

  // it("creates a new ticket with patron age", function() {
  //   var testTicket = new Ticket(33);
  //   expect(testTicket.patronAge).to.equal(33);
  // });
});
