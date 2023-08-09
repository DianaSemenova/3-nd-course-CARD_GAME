export function getLayoutHTML(duplicateCardsArrSort, appEl, hour, min, sec) {
    const appHTML = `   
    <div class="game-cards">
     <header class="game-cards-timer">
         <div class="game-cards-timer__module">  
            <div class="game-cards-timer__init">
                <p class="game-cards-timer__item">min</p>
                <p class="game-cards-timer__item">sec</p>
            </div>   
             <p class="game-cards-timer__time">${hour}:${min}:${sec}</p>         
         </div>
         <button class="box-game__button" id="submit-button" type="submit">Начать заново</button>
     </header>
     <div class="game-cards__suits center" id="suits">${duplicateCardsArrSort.join(
         "",
     )}</div>
    </div> `;
    appEl.innerHTML = appHTML;
}

