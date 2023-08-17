const { expect, test, describe } = require("@jest/globals");
const { shuffle } = require("lodash");
const { cardsSuitsArr } = require("./components/array_cards_suits");
const { cardsSuitsArraySort } = require("./components/render_level_game");

describe("lodash: shuffle", () => {
    test("should be defined", () => {
        expect(shuffle).toBeDefined();
    });

    test("should not contain falsy values", () => {
        expect(shuffle(cardsSuitsArraySort)).not.toContain(false);
    });
});

describe("Array: cardsSuitsArr", () => {
    test("should create an array with length 36", () => {
        expect(cardsSuitsArr).toHaveLength(36);
    });
});
