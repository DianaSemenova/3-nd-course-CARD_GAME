import { shuffle } from "lodash";
import { cardsSuitsArr } from "./array_cards_suits.js";

export function renderLevelGame(level, appEl) {
    let levelGame = level.value;
    const cardsFlipSide = [];
    //let clickCards = false;

    function getCardsFlipSideArr(levelGame) {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" class="game-cards__flip-side" src="../static/img/рубашка.png">`,
            );
        }
        return cardsFlipSide;
    }

    getCardsFlipSideArr(levelGame);

    const appHTML = `   
    <div class="game-cards">
     <header class="game-cards-timer">
         <div class="game-cards-timer__module">  
            <div class="game-cards-timer__init">
                <p class="game-cards-timer__item">min</p>
                <p class="game-cards-timer__item">sec</p>
            </div>   
             <p class="game-cards-timer__time">00.00</p>         
         </div>
         <button class="box-game__button" id="submit-button" type="submit">Начать заново</button>
     </header>
     <div class="game-cards__suits center" id="suits">${cardsFlipSide.join(
         "",
     )}</div>
    </div> `;
    appEl.innerHTML = appHTML;

    const reverseSlideCards = document.querySelectorAll(
        ".game-cards__flip-side",
    );

    for (const reverseSlideCard of reverseSlideCards) {
        reverseSlideCard.addEventListener("click", () => {
            const cardsSuitsArraySort = shuffle(cardsSuitsArr).slice(
                0,
                level.value / 2,
            );

            const duplicateCardsArr = cardsSuitsArraySort
                .concat(cardsSuitsArraySort);
            const duplicateCardsArrSort = shuffle(duplicateCardsArr);

            document.getElementById(
                "suits",
            ).innerHTML = `${duplicateCardsArrSort.join("")}`;

            setTimeout(() => {
                renderLevelGame(level, appEl);
            }, 5000);
        });
    }
}
