describe('Movie', function() {
  it("creates a new movie with with a movie name attached", function() {
    var testMovie = new Movie("A League of Their Own");
    expect(testMovie.movieTitle).to.equal("A League of Their Own");
    expect(testMovie.tickets).to.eql([]);
  });
});

//   it("adds the fullName method to all contacts", function() {
//     var testContact = new Contact("Pablo", "Picasso");
//     expect(testContact.fullName()).to.equal("Pablo Picasso");
//   });
// });
//
//
// describe("Address", function() {
//   it("creates a new address with the given specifications", function() {
//     var testAddress = new Address("443 Pinewood Terrace", "Arlington", "VA");
//     expect(testAddress.street).to.equal("443 Pinewood Terrace");
//     expect(testAddress.city).to.equal("Arlington");
//     expect(testAddress.state).to.equal("VA");
//   });
//
//   it("adds the fullAddress method to all the addresses", function() {
//     var testAddress = new Address("4043 Camero Ave", "Los Angeles", "Ca");
//     expect(testAddress.fullAddress()).to.equal("4043 Camero Ave, Los Angeles, Ca")
//   });
// });
