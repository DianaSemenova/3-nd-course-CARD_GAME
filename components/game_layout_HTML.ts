import { renderGameDifficulty } from "./render";

export function getLayoutHTML(
    duplicateCardsArrSort: Array<string>,
    appEl: HTMLElement,
) {
    const appHTML = `   
    <div class="game-cards">
     <header class="game-cards-timer">
         <div class="game-cards-timer__module">  
            <div class="game-cards-timer__init">
                <p class="game-cards-timer__item">min</p>
                <p class="game-cards-timer__item">sec</p>
            </div>   

            <div class="game-cards-timer__counter">
            <span class="game-cards-timer__time" id="min">00</span>
            <span class="game-cards-timer__time">.</span>  
             <span class="game-cards-timer__time" id="sec">00</span> 
        </div>           
         </div>
         <button class="box-game__button" id="submit-button" type="submit">Начать заново</button>
     </header>
     <div class="game-cards__suits center" id="suits">${duplicateCardsArrSort.join(
         "",
     )}</div>
    </div>  `;
    appEl.innerHTML = appHTML;
}

export function getModalWindowGame(
    winGame: boolean,
    modalGameHTML: HTMLElement | null,
    currentDate: Date,
    combDate: string,
) {
    const minutModal: number = 0;
    const secondModal: number = 0;

    function getTimeModalWindow(minutModal: number, secondModal: number) {
        const endDate = new Date();
        const diffDate = endDate.getTime() - currentDate.getTime();

        minutModal = Math.floor(diffDate / 60000);
        secondModal = Math.floor((diffDate % 60000) / 1000);

        combDate = `${
            minutModal < 10
                ? "0" + minutModal.toString()
                : minutModal.toString()
        }:${
            secondModal < 10
                ? "0" + secondModal.toString()
                : secondModal.toString()
        }`;
        return combDate;
    }
    getTimeModalWindow(minutModal, secondModal);

    console.log(combDate);

    const modalHTML = `<div class="modal-result-game">
    ${
        winGame
            ? '<img class="modal__img" src="./static/img/modal_game/celebration.svg" alt="emoji">'
            : '<img class="modal__img" src="./static/img/modal_game/dead.svg" alt="emoji">'
    }
           <h3 class="modal__heading">${
               winGame ? "Вы выиграли!" : "Вы проиграли"
           }</h3>
           <p class="modal__text">Затраченное время</p>   
           <div class="modal__time">${combDate}</div>
           <button class="box-game__button modal__button">Начать заново</button>
           </div>`;

    if (modalGameHTML) {
        modalGameHTML.innerHTML = modalHTML;

        (
            document.querySelector(".modal__button") as HTMLElement
        ).addEventListener("click", () => {
            modalGameHTML.style.display = "none";
            renderGameDifficulty();
        });
    }
    const modalText = document.querySelector(".modal__text");
    console.log(modalText);
}
