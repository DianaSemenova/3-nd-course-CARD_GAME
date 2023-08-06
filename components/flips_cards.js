 function flipsСards(
    suitsHTML,
    cardsFlipSide,
    reverseSlideCards,
    duplicateCardsArrSort,
) {
    setTimeout(() => {
        suitsHTML.innerHTML = `${cardsFlipSide.join("")}`;

        //function clickCard() {
        for (const reverseSlideCard of reverseSlideCards) {
            reverseSlideCard.addEventListener("click", () => {
                let cardsIndex = reverseSlideCard.dataset.index;

                console.log(cardsIndex);

                cardsFlipSide[cardsIndex] = duplicateCardsArrSort[cardsIndex];

                let firstCart = duplicateCardsArrSort[cardsIndex];
                console.log(firstCart);

                suitsHTML.innerHTML = `${cardsFlipSide.join("")}`;
            });
        }
        //  }
        // clickCard();
        flipsСards(suitsHTML, cardsFlipSide, reverseSlideCards);
    }, 5000);
}
