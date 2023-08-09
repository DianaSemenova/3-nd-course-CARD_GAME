// import { renderGameDifficulty } from "./render.js";
// import { renderLevelGame } from "./render_level_game.js";

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
    </div>  `;
    appEl.innerHTML = appHTML;
}

export function getModalWindowGame(winGame) {
    let modalGameHTML = document.getElementById("modal-window-game");
    let modalHTML = `<div class="modal-result-game">
    ${
        winGame
            ? '<img class="modal__img" src="./static/img/modal_game/celebration.svg" alt="emoji">'
            : '<img class="modal__img" src="./static/img/modal_game/dead.svg" alt="emoji">'
    }
           <h3 class="modal__heading">${
               winGame ? "Вы выиграли!" : "Вы проиграли"
           }</h3>
           <p class="modal__text">Затраченное время</p>   
           <div class="modal__time">0:0:0</div>
           <button class="box-game__button modal__button">Начать заново</button>
           </div>`;

    modalGameHTML.innerHTML = modalHTML;

    // document.querySelector(".modal__button").addEventListener("click", () => {
    //     renderGameDifficulty(renderLevelGame);
    // });
}
