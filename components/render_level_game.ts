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

    const cardsSuitsArraySort = shuffle(cardsSuitsArr).slice(0, levelGame / 2);
    const duplicateCardsArrSort = shuffle(
        cardsSuitsArraySort.concat(cardsSuitsArraySort),
    );

    const cardsFlipSide: Array<string> = [];
    function getCardsFlipSideArr(levelGame: number) {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" data-index="${i}" class="game-cards__flip-side close" src="../static/img/рубашка.png">`,
            );
        }
        return cardsFlipSide;
    }

    getCardsFlipSideArr(levelGame);

    if (appEl) {
        appEl.innerHTML = "";
        getLayoutHTML(duplicateCardsArrSort, appEl);
    }

    const fontGameCards: HTMLElement | null =
        document.querySelector(".game-cards");

    const modalGameHTML: HTMLElement | null =
        document.getElementById("modal-window-game");

    const minute = document.getElementById("min");
    const second = document.getElementById("sec");

    setTimeout(() => {
        id = counterTime(min, sec, minute, second);
        getCurrentDate();
    }, 5000);

    let clickCards: boolean = true;
    let firstIndexCard: number | null = null;
    let secondIndexCard: number | null = null;
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

        const suits: HTMLElement | null = document.getElementById("suits");
        if (suits) {
            suits.innerHTML = `${cardsFlipSide.join("")}`;
        }

        const reverseSlideCards = document.querySelectorAll(".close");
        const reverseSlideCardsArr = Array.from(reverseSlideCards);

        for (const reverseSlideCard of reverseSlideCardsArr) {
            if (reverseSlideCard instanceof HTMLElement) {
                reverseSlideCard.addEventListener("click", () => {
                    const cardsIndex = Number(reverseSlideCard.dataset.index);

                    const suits: HTMLElement | null =
                        document.getElementById("suits");

                    if (clickCards) {
                        cardsFlipSide[cardsIndex] =
                            duplicateCardsArrSort[cardsIndex];
                        firstIndexCard = cardsIndex;

                        if (suits) {
                            suits.innerHTML = `${cardsFlipSide.join("")}`;
                        }

                        flipsСards();
                    } else {
                        cardsFlipSide[cardsIndex] =
                            duplicateCardsArrSort[cardsIndex];

                        secondIndexCard = cardsIndex;

                        if (suits) {
                            suits.innerHTML = `${cardsFlipSide.join("")}`;
                        }

                        comparingTwoCard(firstIndexCard, secondIndexCard);

                        counter = counter - 2;
                        if (counter === 0) {
                            winGame = !winGame;
                            if (fontGameCards && modalGameHTML) {
                                fontGameCards.style.opacity = ".3";
                                modalGameHTML.style.display = "block";
                            }

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
        }
        //});
    }

    setTimeout(flipsСards, 5000);

    function comparingTwoCard(
        firstIndexCard: number | null,
        secondIndexCard: number | null,
    ) {
        if (firstIndexCard != null && secondIndexCard != null) {
            if (
                cardsFlipSide[firstIndexCard] === cardsFlipSide[secondIndexCard]
            ) {
                firstIndexCard = null;
                secondIndexCard = null;
                flipsСards();
            } else {
                if (fontGameCards && modalGameHTML) {
                    fontGameCards.style.opacity = ".3";
                    modalGameHTML.style.display = "block";
                }

                getModalWindowGame(
                    winGame,
                    modalGameHTML,
                    currentDate,
                    combDate,
                );
                clearInterval(id);
            }
        }
    }
    //  });
}
