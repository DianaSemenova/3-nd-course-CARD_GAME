import { cardsSuitsArr } from "./array_cards_suits.js";

export function renderLevelGame(level, appEl) {
    let levelGame = level.value;
    const cardsFlipSide = [];
    //let clickCards = false;

    function getCardsFlipSideArr(levelGame) {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" class="game-cards__flip-side" src="./img/рубашка.png">`,
            );
        }
        return;
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
     <div class="game-cards__suits center" id="suits">${cardsFlipSide}</div>
    </div> `;
    appEl.innerHTML = appHTML;

    const reverseSlideCards = document.querySelectorAll(
        ".game-cards__flip-side",
    );

    for (const reverseSlideCard of reverseSlideCards) {
        reverseSlideCard.addEventListener("click", () => {
            const cardsSuitsArraySort = cardsSuitsArr.sort(
                () => Math.random() - 0.5,
            );
            //    const duplicateCardsArr =  (([].concat(cardsSuitsArraySort, cardsSuitsArraySort)).sort()).slice(0, level.value);
            //    console.log(duplicateCardsArr);
            const duplicateCardsArr = cardsSuitsArraySort
                .reduce(
                    (newArr, currentValue) =>
                        newArr.concat([currentValue, currentValue]),
                    [],
                )
                .slice(0, level.value);
            const duplicateCardsArrSort = duplicateCardsArr.sort(
                () => Math.random() - 0.5,
            );

            document.getElementById(
                "suits",
            ).innerHTML = `${duplicateCardsArrSort}`;

            setTimeout(() => {
                renderLevelGame(level, appEl);
            }, 5000);
        });
    }
}
