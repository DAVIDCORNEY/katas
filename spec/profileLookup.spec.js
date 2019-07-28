const { expect } = require("chai");
const { profileLookup } = require("../katas/profileLookup");

describe("profileLookup()", () => {
  it("returns 'No such contact' if passed a name that does not correspond to a contacts firstName", () => {
    const contacts = [
      {
        firstName: "Bill",
        lastName: "Bailey",
        number: "unknown",
        likes: ["JavaScript", "Pizza", "Wine"]
      }
    ];
    expect(profileLookup(contacts, "David")).to.equal("No such contact");
  });
  it("returns the value of the passed prop argument if name corresponds to a contacts firstName and prop is a property of the contact ", () => {
    const contacts = [
      {
        firstName: "David",
        lastName: "Smith",
        number: "unknown",
        likes: ["JavaScript", "React", "Pasta"]
      }
    ];
    expect(profileLookup(contacts, "David", "lastName")).to.equal("Smith");
    expect(profileLookup(contacts, "David", "likes")).to.eql([
      "JavaScript",
      "React",
      "Pasta"
    ]);
  });
  it("returns 'No such property' if a prop does not correspond to any valid properties of a contact found to match name", () => {
    const contacts = [
      {
        firstName: "David",
        lastName: "Smith",
        number: "unknown",
        likes: ["JavaScript", "React", "Pasta"]
      }
    ];
    expect(profileLookup(contacts, "David", "age")).to.equal(
      "No such property"
    );
  });
  it("returns the value of the passed prop argument if name corresponds to a contacts firstName and prop is a property of the contact, when passed an array of multiple contacts ", () => {
    const contacts = [
      {
        firstName: "David",
        lastName: "Smith",
        number: "unknown",
        likes: ["JavaScript", "React", "Pasta"]
      },
      {
        firstName: "Bill",
        lastName: "Bailey",
        number: "0994372684",
        likes: ["Javascript", "Pizza", "Wine"]
      },
      {
        firstName: "Julie",
        lastName: "Bentley",
        number: "0543236543",
        likes: ["Coding", "Tacos", "Skating"]
      }
    ];
    expect(profileLookup(contacts, "Bill", "lastName")).to.equal("Bailey");
    expect(profileLookup(contacts, "Bill", "likes")).to.eql([
      "Javascript",
      "Pizza",
      "Wine"
    ]);
  });
});
