import { shuffle } from "lodash";
import { cardsSuitsArr } from "./array_cards_suits";
import { getLayoutHTML, getModalWindowGame } from "./game_layout_HTML";
import { counterTime } from "./timer";
import { renderGameDifficulty } from "./render";

export function renderLevelGame(levelGame: number, appEl: HTMLElement | null) {
    const min: number = 0;
    const sec: number = 0;
    let currentDate: Date;
    let combDate: string;

    function getCurrentDate() {
        return (currentDate = new Date());
    }

    let winGame: boolean = false;
    let id: NodeJS.Timer;

    const cardsFlipSide: Array<string> = [];
    const cardsSuitsArraySort = shuffle(cardsSuitsArr).slice(0, levelGame / 2);
    const duplicateCardsArrSort = shuffle(
        cardsSuitsArraySort.concat(cardsSuitsArraySort),
    );

    function getCardsFlipSideArr(levelGame: number) {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" data-index="${i}" class="game-cards__flip-side" src="../static/img/рубашка.png">`,
            );
        }
        return cardsFlipSide;
    }

    getCardsFlipSideArr(levelGame);

    if (appEl) {
        appEl.innerHTML = "";
        getLayoutHTML(duplicateCardsArrSort, appEl);
    }

    // const fontGameCards: HTMLElement | null = document.querySelector(".game-cards");
    // console.log(fontGameCards);

    const fontGameCards = document.querySelector(".game-cards");
    console.log(fontGameCards);
    const modalGameHTML = document.getElementById("modal-window-game");

    const minute = document.getElementById("min");
    const second = document.getElementById("sec");

    setTimeout(() => {
        id = counterTime(min, sec, minute, second);
        getCurrentDate();
    }, 5000);

    let clickCards: boolean = true;
    let firstIndexCard: number;
    let secondIndexCard: number;
    let counter: number = levelGame;

    const startOverGameButtons: HTMLElement | null =
        document.getElementById("submit-button");
    if (startOverGameButtons) {
        startOverGameButtons.addEventListener("click", () => {
            renderGameDifficulty();
        });
    }

    function flipsСards() {
        //document.addEventListener("DOMContentLoaded", () => {
        (
            document.getElementById("suits") as HTMLElement
        ).innerHTML = `${cardsFlipSide.join("")}`;

        const reverseSlideCards = document.querySelectorAll(
            ".game-cards__flip-side",
        );
        const reverseSlideCardsArr = Array.from(reverseSlideCards);

        for (const reverseSlideCard of reverseSlideCardsArr) {
            reverseSlideCard.addEventListener("click", () => {
                const cardsIndex = Number(
                    (reverseSlideCard as HTMLElement).dataset.index,
                );
                if (clickCards) {
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];
                    firstIndexCard = cardsIndex;
                    (
                        document.getElementById("suits") as HTMLElement
                    ).innerHTML = `${cardsFlipSide.join("")}`;

                    flipsСards();
                } else {
                    cardsFlipSide[cardsIndex] =
                        duplicateCardsArrSort[cardsIndex];

                    secondIndexCard = cardsIndex;

                    (
                        document.getElementById("suits") as HTMLElement
                    ).innerHTML = `${cardsFlipSide.join("")}`;

                    comparingTwoCard(firstIndexCard, secondIndexCard);

                    counter = counter - 2;
                    if (counter === 0) {
                        winGame = !winGame;
                        (fontGameCards as HTMLElement).style.opacity = ".3";
                        (modalGameHTML as HTMLElement).style.display = "block";
                        getModalWindowGame(
                            winGame,
                            modalGameHTML,
                            currentDate,
                            combDate,
                        );
                        clearInterval(id);
                    }
                }
                clickCards = !clickCards;
            });
        }
        //});
    }

    setTimeout(flipsСards, 5000);

    function comparingTwoCard(firstIndexCard: number, secondIndexCard: number) {
        if (cardsFlipSide[firstIndexCard] === cardsFlipSide[secondIndexCard]) {
            flipsСards();
        } else {
            (fontGameCards as HTMLElement).style.opacity = ".3";
            (modalGameHTML as HTMLElement).style.display = "block";
            getModalWindowGame(winGame, modalGameHTML, currentDate, combDate);
            clearInterval(id);
        }
    }
    //  });
}
