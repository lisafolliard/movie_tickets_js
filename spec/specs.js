describe('Contact', function() {
  it("creates a new contact with given specifications", function() {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Pablo", "Picasso");
    expect(testContact.fullName()).to.equal("Pablo Picasso");
  });
});


describe("Address", function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("443 Pinewood Terrace", "Arlington", "VA");
    expect(testAddress.street).to.equal("443 Pinewood Terrace");
    expect(testAddress.city).to.equal("Arlington");
    expect(testAddress.state).to.equal("VA");
  });

  it("adds the fullAddress method to all the addresses", function() {
    var testAddress = new Address("4043 Camero Ave", "Los Angeles", "Ca");
    expect(testAddress.fullAddress()).to.equal("4043 Camero Ave, Los Angeles, Ca")
  });
});
