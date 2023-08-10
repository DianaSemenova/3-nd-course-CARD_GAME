import { shuffle } from "lodash";
import { cardsSuitsArr } from "./array_cards_suits.js";
import { getLayoutHTML, getModalWindowGame } from "./game_layout_HTML.js";
import { counterTime } from "./timer.js";
import { id } from "../index.js";

export function renderLevelGame(level, appEl, renderGameDifficulty) {
    // let hour = 0;
    let min = "00";
    let sec = "00";


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

    getLayoutHTML(duplicateCardsArrSort, appEl, min, sec);
    const fontGameCards = document.querySelector(".game-cards");
    console.log(fontGameCards);

    const minute = document.getElementById("min");
    console.log(minute);
    const second = document.getElementById("sec");
    console.log(second);

    setTimeout(() => {
        counterTime(+min, +sec, stopTimer, minute, second);
    }, 5000);

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
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];
                    firstIndexCard = cardsIndex;
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
                    );

                    counter = counter - 2;
                    if (counter === 0) {
                        winGame = !winGame;
                        fontGameCards.style.opacity = ".3";
                        getModalWindowGame(winGame);
                        stopTimer = true;
                        counterTime(+min, +sec, stopTimer, minute, second,id);
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
            console.log(stopTimer);
            counterTime(+min, +sec, stopTimer, minute, second,id);
            fontGameCards.style.opacity = ".3";
            getModalWindowGame(winGame);

            console.log(`время =${min}:${sec}`);
        }
    }
    //  });
}
