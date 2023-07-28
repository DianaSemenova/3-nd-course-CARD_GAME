import {renderLevelGame} from "./components/render_level_game.js"

function renderGameDifficulty() {
    let appEl = document.getElementById('app');

    const appHTML = `
    <div class="top center">
    <form id="form-level" class="box-game" method="POST" action="#">
        <h1 class="box-game__title">Выбери<br>сложность</h1>

        <div class="box-difficulty-level">

            <input class="box-difficulty-level__radio" type="radio" id="radio1" name="radios" value="6">
            <label class="box-difficulty-level__label" for="radio1">1</label>

            <input class="box-difficulty-level__radio" type="radio" id="radio2" name="radios" value="12">
            <label class="box-difficulty-level__label" for="radio2">2</label>

            <input class="box-difficulty-level__radio" type="radio" id="radio3" name="radios" value="18">
            <label class="box-difficulty-level__label" for="radio3">3</label>

        </div>
        <button class="box-game__button" id="submit-button" type="submit">Старт</button>
    </form>
</div>`;

    appEl.innerHTML = appHTML;


    document.getElementById('form-level').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e);

        let levels = document.querySelectorAll('.box-difficulty-level__radio');

        for (const level of levels) {
            if (level.checked) {
                console.log(level.value);

                renderLevelGame(level, appEl);
            }
        }
    })
}

renderGameDifficulty();