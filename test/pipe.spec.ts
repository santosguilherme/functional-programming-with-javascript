import { pipe } from "../src/utils";

describe("pipe function", () => {
  it("It should be a function", () => {
    expect(typeof pipe).toEqual("function");
  });

  it("It should be a function", () => {
    expect(typeof pipe).toEqual("function");
  });

  it("It should return a function", () => {
    const identity = (x) => x;
    expect(typeof pipe(identity, identity)).toEqual("function");
  });

  it("It should throw an error if no argument is passed", () => {
    expect(() => {
      pipe();
    }).toThrow("Should provide at least 2 functions");
  });

  it("It should call all functions from left to right", () => {
    // Given
    const removeDotsAndCommas = (x) => x.replace(/(\.|\,)/g, "");
    const splitOnSpaces = (x) => x.split(" ");
    const lowerCase = (x) => x.map((e) => e.toLowerCase());
    const joinWithDashes = (x) => x.join("-");

    // When
    const urlSlug = pipe(
      removeDotsAndCommas,
      splitOnSpaces,
      lowerCase,
      joinWithDashes
    );

    const welcomeMessage = (message) => `${message}, Xavier`;
    const upperCase = (x) => x.toUpperCase();
    const displayWelcomeMessage = pipe(welcomeMessage, upperCase);

    // Then
    expect(displayWelcomeMessage("Keep on learning")).toEqual(
      "KEEP ON LEARNING, XAVIER"
    );
    expect(urlSlug("My name is bond. James, Bond.")).toEqual(
      "my-name-is-bond-james-bond"
    );
  });
});
