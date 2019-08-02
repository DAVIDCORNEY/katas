const { expect } = require("chai");
const { whereForArtThou } = require("../katas/whereForArtThou");

describe("whereForArtThou()", () => {
  it("returns an empty array when passed an empty array", () => {
    expect(whereForArtThou([])).to.eql([]);
  });
  it("returns an array with an object, when passed an array with an object if it includes the key value pair in the second argument", () => {
    expect(whereForArtThou([{ a: 1 }], { a: 1 })).to.eql([{ a: 1 }]);
  });
  it("returns an empty array, when passed an array with an object if it does not include the key value pair in the second argument", () => {
    expect(whereForArtThou([{ a: 1 }], { b: 1 })).to.eql([]);
  });
  it("returns an array with an object, when passed an array with an object of multiple key value pairs, if the passed array includes the key value pair in the second argument", () => {
    expect(whereForArtThou([{ a: 1, b: 2 }], { a: 1 })).to.eql([
      { a: 1, b: 2 }
    ]);
  });
  it("returns an array with an object, when passed an array with multiple objects, if the passed array includes the key value pair in the second argument", () => {
    expect(whereForArtThou([{ a: 1, b: 2 }, { c: 3, d: 4 }], { c: 3 })).to.eql([
      { c: 3, d: 4 }
    ]);
    expect(
      whereForArtThou([{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6, g: 7 }], {
        a: 1,
        b: 2
      })
    ).to.eql([{ a: 1, b: 2 }]);
    expect(
      whereForArtThou(
        [
          { name: "David", age: 42 },
          { name: "James", age: 41, name: "Steven", age: 41 }
        ],
        { name: "David", age: 42 }
      )
    ).to.eql([{ name: "David", age: 42 }]);
  });
});
