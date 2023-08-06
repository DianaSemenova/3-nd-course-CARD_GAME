import { shuffle } from "lodash";
import { cardsSuitsArr } from "./array_cards_suits.js";

export function renderLevelGame(level, appEl) {
    let levelGame = level.value;
    const cardsFlipSide = [];

    const cardsSuitsArraySort = shuffle(cardsSuitsArr).slice(0, levelGame / 2);

    const duplicateCardsArr = cardsSuitsArraySort.concat(cardsSuitsArraySort);
    const duplicateCardsArrSort = shuffle(duplicateCardsArr);
    // const comparisonArrCards = duplicateCardsArrSort;

    function getCardsFlipSideArr() {
        for (let i = 0; i < levelGame; i++) {
            cardsFlipSide.push(
                `<img id="cards-click" data-index="${i}" class="game-cards__flip-side" src="../static/img/рубашка.png">`,
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
     <div class="game-cards__suits center" id="suits">${duplicateCardsArrSort.join(
         "",
     )}</div>
    </div> `;
    appEl.innerHTML = appHTML;

    let clickCards = true;
    let firstIndexCard = null;
    // function setfirstIndexCard(newIndex) {
    //     let firstIndexCard = newIndex;
    //     return firstIndexCard;
    // }




    

    function flipsСards() {

        setTimeout(() => {
            // const suitsHTML = document.getElementById("suits");
            document.getElementById("suits").innerHTML = `${cardsFlipSide.join(
                "",
            )}`;

            const reverseSlideCards = document.querySelectorAll(
                ".game-cards__flip-side",
            );
            //function clickCard() {
            for (const reverseSlideCard of reverseSlideCards) {
                reverseSlideCard.addEventListener("click", () => {
                    let cardsIndex = reverseSlideCard.dataset.index;

                    if (clickCards) {
                        console.log(clickCards);
                        cardsFlipSide[cardsIndex] =
                            duplicateCardsArrSort[cardsIndex];
                        firstIndexCard = cardsIndex;
                        setfirstIndexCard(firstIndexCard);

                        console.log(firstIndexCard);
                        document.getElementById(
                            "suits",
                        ).innerHTML = `${cardsFlipSide.join("")}`;
                        flipsСards();
                    } else {
                        cardsFlipSide[cardsIndex] =
                            duplicateCardsArrSort[cardsIndex];

                        let secondIndexCard = cardsIndex;
                        console.log(secondIndexCard);
                        document.getElementById(
                            "suits",
                        ).innerHTML = `${cardsFlipSide.join("")}`;

                        comparingTwoCard(firstIndexCard, secondIndexCard);

                        flipsСards();

                        console.log(clickCards);
                    }
                    clickCards = !clickCards;
                });
            }
            //  }
            // clickCard();
            //flipsСards();
        }, 5000);
    }

    flipsСards();

    function comparingTwoCard(firstIndexCard, secondIndexCard) {
        if (cardsFlipSide[firstIndexCard] === cardsFlipSide[secondIndexCard]) {
            alert("выиграл");
        } else {
            alert("проиграл");
        }
    }
}
