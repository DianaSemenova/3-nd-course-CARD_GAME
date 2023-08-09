import { shuffle } from "lodash";
import { cardsSuitsArr } from "./array_cards_suits.js";
import { getLayoutHTML, getModalWindowGame } from "./game_layout_HTML.js";
import { counterTime } from "./timer.js";

export function renderLevelGame(level, appEl, renderGameDifficulty) {
    let hour = 0;
    let min = 0;
    let sec = 0;

    let levelGame = level.value;
    let winGame = false;
    let stopTimer = false;

    const cardsFlipSide = [];
    const cardsSuitsArraySort = shuffle(cardsSuitsArr).slice(0, levelGame / 2);
    const duplicateCardsArrSort = shuffle(
        cardsSuitsArraySort.concat(cardsSuitsArraySort),
    );

    function getCardsFlipSideArr() {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" data-index="${i}" class="game-cards__flip-side" src="../static/img/рубашка.png">`,
            );
        }
        return cardsFlipSide;
    }

    getCardsFlipSideArr(levelGame);

    appEl.innerHTML = "";

    counterTime(hour, min, sec, stopTimer);

    getLayoutHTML(duplicateCardsArrSort, appEl, hour, min, sec);
    const fontGameCards = document.querySelector(".game-cards");

    let clickCards = true;
    let firstIndexCard = null;
    let secondIndexCard = null;
    let counter = levelGame;

    const startOverGameButtons = document.getElementById("submit-button");
    startOverGameButtons.addEventListener("click", () => {
        renderGameDifficulty(renderLevelGame);
    });

    function flipsСards() {
        //document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("suits").innerHTML = `${cardsFlipSide.join(
            "",
        )}`;

        const reverseSlideCards = document.querySelectorAll(
            ".game-cards__flip-side",
        );

        for (const reverseSlideCard of reverseSlideCards) {
            reverseSlideCard.addEventListener("click", () => {
                let cardsIndex = reverseSlideCard.dataset.index;
                if (clickCards) {
                    console.log(clickCards);
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];
                    firstIndexCard = cardsIndex;

                    console.log(firstIndexCard);
                    document.getElementById(
                        "suits",
                    ).innerHTML = `${cardsFlipSide.join("")}`;

                    flipsСards();
                } else {
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];

                    secondIndexCard = cardsIndex;

                    document.getElementById(
                        "suits",
                    ).innerHTML = `${cardsFlipSide.join("")}`;

                    comparingTwoCard(
                        firstIndexCard,
                        secondIndexCard,
                        flipsСards,
                        counter,
                    );

                    console.log(clickCards);

                    counter = counter - 2;
                    if (counter === 0) {
                        winGame = !winGame;
                        fontGameCards.style.opacity = ".3";
                        getModalWindowGame(winGame);
                        stopTimer = true;
                        counterTime(hour, min, sec, stopTimer);
                    }
                }
                clickCards = !clickCards;
            });
        }
        //});
    }

    setTimeout(flipsСards, 5000);

    function comparingTwoCard(firstIndexCard, secondIndexCard) {
        if (cardsFlipSide[firstIndexCard] === cardsFlipSide[secondIndexCard]) {
            flipsСards();
        } else {
            alert("проиграл");
            stopTimer = true;
            counterTime(hour, min, sec, stopTimer);
            fontGameCards.style.opacity = ".3";
            getModalWindowGame(winGame);

            console.log(`время = ${hour}:${min}:${sec}`);
        }
    }
    //  });
}
