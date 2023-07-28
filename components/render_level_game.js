export function renderLevelGame(level, appEl) {
    const appHTML = `
            <div class="top center">
            <div class="box-game">       
            <h2 class="box-game__title">${level.value} карточек</h2>
            </div></div>
            `;
    appEl.innerHTML = appHTML;
}