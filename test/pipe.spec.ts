import { compose } from "../src/utils";

describe("compose function", () => {
  it("It should be a function", () => {
    expect(typeof compose).toEqual("function");
  });

  it("It should take two functions as parameters parameters", () => {
    expect(compose.length).toEqual(2);
  });

  it("It should return a function", () => {
    // Given
    const sendMessage = (message) => `${message}, Xavier`;
    const upperCase = (phrase) => phrase.toUpperCase();

    // When
    const actual = compose(upperCase, sendMessage);

    // then
    expect(typeof actual).toEqual("function");
  });

  it("The returned function should take 0 or more arguments", () => {
    // Given
    const identity = (...args) => args;
    const composedIdentity = compose(identity, identity);
    const obj = { composedIdentity };

    // When
    const spy = jest.spyOn(obj, "composedIdentity");
    obj.composedIdentity("one two args");

    // Then
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("one two args");
  });

  it("It should apply the functions from right to left", () => {
    // Given
    const sendMessage = (message) => `${message}, Xavier`;
    const upperCase = (phrase) => phrase.toUpperCase();

    // When
    const composed = compose(upperCase, sendMessage);
    const actual = composed("You are part of the team");

    // Then
    expect(actual).toEqual("YOU ARE PART OF THE TEAM, XAVIER");
  });
});
