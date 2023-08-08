import { shuffle } from "lodash";
import { cardsSuitsArr } from "./array_cards_suits.js";
import { getLayoutHTML } from "./game_layout_HTML.js";

export function renderLevelGame(level, appEl, renderGameDifficulty) {
    let levelGame = level.value;
    const cardsFlipSide = [];

    const cardsSuitsArraySort = shuffle(cardsSuitsArr).slice(0, levelGame / 2);

    const duplicateCardsArrSort = shuffle(
        cardsSuitsArraySort.concat(cardsSuitsArraySort),
    );
    // const duplicateCardsArrSort = shuffle(duplicateCardsArr);

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

    // const appHTML = `
    // <div class="game-cards">
    //  <header class="game-cards-timer">
    //      <div class="game-cards-timer__module">
    //         <div class="game-cards-timer__init">
    //             <p class="game-cards-timer__item">min</p>
    //             <p class="game-cards-timer__item">sec</p>
    //         </div>
    //          <p class="game-cards-timer__time">00.00</p>
    //      </div>
    //      <button class="box-game__button" id="submit-button" type="submit">Начать заново</button>
    //  </header>
    //  <div class="game-cards__suits center" id="suits">${duplicateCardsArrSort.join(
    //      "",
    //  )}</div>
    // </div> `;
    // appEl.innerHTML = appHTML;

    getLayoutHTML(duplicateCardsArrSort, appEl);

    let clickCards = true;
    let firstIndexCard = null;
    let secondIndexCard = null;
    let counter = levelGame;

    const startOverGameButtons = document.getElementById("submit-button");
    startOverGameButtons.addEventListener("click", () => {
        renderGameDifficulty(renderLevelGame);
    });

    function flipsСards() {
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
                        alert("Выиграл");
                    }
                }
                clickCards = !clickCards;
            });
        }
    }

    setTimeout(flipsСards, 5000);

    function comparingTwoCard(firstIndexCard, secondIndexCard, counter) {
        if (cardsFlipSide[firstIndexCard] === cardsFlipSide[secondIndexCard]) {
            flipsСards();
        } else {
            alert("проиграл");
        }
    }
}
