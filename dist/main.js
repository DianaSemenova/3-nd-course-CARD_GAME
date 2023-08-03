/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/array_cards_suits.js":
/*!*****************************************!*\
  !*** ./components/array_cards_suits.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardsSuitsArr: () => (/* binding */ cardsSuitsArr)\n/* harmony export */ });\nconst cardsSuitsArr = [\n    `<img class=\"game-cards__flip-side\" src=\"./img/6 бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/6 крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/6 пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/6 черви.png\">`,\n\n    `<img class=\"game-cards__flip-side\" src=\"./img/7 бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/7 крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/7 пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/7 черви.png\">`,\n\n    `<img class=\"game-cards__flip-side\" src=\"./img/8 бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/8 крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/8 пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/8 черви.png\">`,\n\n    `<img class=\"game-cards__flip-side\" src=\"./img/9 бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/9 крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/9 пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/9 черви.png\">`,\n\n    `<img class=\"game-cards__flip-side\" src=\"./img/10 бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/10 крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/10 пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/10 черви.png\">`,\n\n    `<img class=\"game-cards__flip-side\" src=\"./img/валет бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/валет крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/валет пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/валет черви.png\">`,\n\n    `<img class=\"game-cards__flip-side\" src=\"./img/дама бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/дама крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/дама пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/дама черви.png\">`,\n\n    `<img class=\"game-cards__flip-side\" src=\"./img/король бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/король крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/король пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/король черви.png\">`,\n\n    `<img class=\"game-cards__flip-side\" src=\"./img/туз бубны.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/туз крести.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/туз пики.png\">`,\n    `<img class=\"game-cards__flip-side\" src=\"./img/туз черви.png\">`,\n];\n\n\n//# sourceURL=webpack://3-nd-course-card_game/./components/array_cards_suits.js?");

/***/ }),

/***/ "./components/render_level_game.js":
/*!*****************************************!*\
  !*** ./components/render_level_game.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLevelGame: () => (/* binding */ renderLevelGame)\n/* harmony export */ });\n/* harmony import */ var _array_cards_suits_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array_cards_suits.js */ \"./components/array_cards_suits.js\");\n\n\nfunction renderLevelGame(level, appEl) {\n    let levelGame = level.value;\n    const cardsFlipSide = [];\n    //let clickCards = false;\n\n    function getCardsFlipSideArr(levelGame) {\n        for (let i = 0; i < levelGame; i++) {\n            cardsFlipSide.push(\n                `<img id=\"cards-click\" class=\"game-cards__flip-side\" src=\"./img/рубашка.png\">`,\n            );\n        }\n        return;\n    }\n\n    getCardsFlipSideArr(levelGame);\n\n    const appHTML = `   \n    <div class=\"game-cards\">\n     <header class=\"game-cards-timer\">\n         <div class=\"game-cards-timer__module\">  \n            <div class=\"game-cards-timer__init\">\n                <p class=\"game-cards-timer__item\">min</p>\n                <p class=\"game-cards-timer__item\">sec</p>\n            </div>   \n             <p class=\"game-cards-timer__time\">00.00</p>         \n         </div>\n         <button class=\"box-game__button\" id=\"submit-button\" type=\"submit\">Начать заново</button>\n     </header>\n     <div class=\"game-cards__suits center\" id=\"suits\">${cardsFlipSide}</div>\n    </div> `;\n    appEl.innerHTML = appHTML;\n\n    const reverseSlideCards = document.querySelectorAll(\n        \".game-cards__flip-side\",\n    );\n\n    for (const reverseSlideCard of reverseSlideCards) {\n        reverseSlideCard.addEventListener(\"click\", () => {\n            const cardsSuitsArraySort = _array_cards_suits_js__WEBPACK_IMPORTED_MODULE_0__.cardsSuitsArr.sort(\n                () => Math.random() - 0.5,\n            );\n            //    const duplicateCardsArr =  (([].concat(cardsSuitsArraySort, cardsSuitsArraySort)).sort()).slice(0, level.value);\n            //    console.log(duplicateCardsArr);\n            const duplicateCardsArr = cardsSuitsArraySort\n                .reduce(\n                    (newArr, currentValue) =>\n                        newArr.concat([currentValue, currentValue]),\n                    [],\n                )\n                .slice(0, level.value);\n            const duplicateCardsArrSort = duplicateCardsArr.sort(\n                () => Math.random() - 0.5,\n            );\n\n            document.getElementById(\n                \"suits\",\n            ).innerHTML = `${duplicateCardsArrSort}`;\n\n            setTimeout(() => {\n                renderLevelGame(level, appEl);\n            }, 5000);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://3-nd-course-card_game/./components/render_level_game.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_render_level_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render_level_game.js */ \"./components/render_level_game.js\");\n\n\nfunction renderGameDifficulty() {\n    let appEl = document.getElementById(\"app\");\n\n    const appHTML = `\n    <div class=\"top center\">\n    <form id=\"form-level\" class=\"box-game\" method=\"POST\" action=\"#\">\n        <h1 class=\"box-game__title\">Выбери<br>сложность</h1>\n\n        <div class=\"box-difficulty-level\">\n\n            <input class=\"box-difficulty-level__radio\" type=\"radio\" id=\"radio1\" name=\"radios\" value=\"6\">\n            <label class=\"box-difficulty-level__label\" for=\"radio1\">1</label>\n\n            <input class=\"box-difficulty-level__radio\" type=\"radio\" id=\"radio2\" name=\"radios\" value=\"12\">\n            <label class=\"box-difficulty-level__label\" for=\"radio2\">2</label>\n\n            <input class=\"box-difficulty-level__radio\" type=\"radio\" id=\"radio3\" name=\"radios\" value=\"18\">\n            <label class=\"box-difficulty-level__label\" for=\"radio3\">3</label>\n\n        </div>\n        <button class=\"box-game__button\" id=\"submit-button\" type=\"submit\">Старт</button>\n    </form>\n</div>`;\n\n    appEl.innerHTML = appHTML;\n\n    document.getElementById(\"form-level\").addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        console.log(e);\n\n        let levels = document.querySelectorAll(\".box-difficulty-level__radio\");\n\n        for (const level of levels) {\n            if (level.checked) {\n                console.log(level.value);\n\n                (0,_components_render_level_game_js__WEBPACK_IMPORTED_MODULE_0__.renderLevelGame)(level, appEl);\n            }\n        }\n    });\n}\n\nrenderGameDifficulty();\n\n\n//# sourceURL=webpack://3-nd-course-card_game/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;