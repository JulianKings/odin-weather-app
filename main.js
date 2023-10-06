/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/layoutManager.js":
/*!**************************************!*\
  !*** ./src/scripts/layoutManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weatherManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherManager */ "./src/scripts/weatherManager.js");


let farenheit = false;

const updateLayout = () =>
{
    (0,_weatherManager__WEBPACK_IMPORTED_MODULE_0__["default"])("Madrid").then((weatherData) => {
        if(weatherData.error)
        {
            // Notify invalid location
        } else {
            console.log(weatherData);
            // location
            const locationName = document.querySelector('.weather-now-place-city');
            const locationCountry = document.querySelector('.weather-now-place-country');
            const locationHour = document.querySelector('.weather-now-hour');

            locationName.textContent = weatherData.location.name;
            locationCountry.textContent = `${weatherData.location.region}, ${weatherData.location.country}`;
            const hour = weatherData.location.localtime.split(' ')[1];
            locationHour.textContent = hour;

            // current info
            const currentImage = document.querySelector('.weather-now-info-image');
            const currentDegree = document.querySelector('.weather-now-info-caption-degrees');
            const currentStatus = document.querySelector('.weather-now-info-caption-info');
            
            const lImage = new Image();
            lImage.src = weatherData.current.condition.icon;
            currentImage.appendChild(lImage);
            if(farenheit)
            {
                currentDegree.textContent = `${weatherData.current.temp_f}º F`;
            } else {
                currentDegree.textContent = `${weatherData.current.temp_c}º C`;
            }
            currentStatus.textContent = weatherData.current.condition.text;

        }
    }).catch((err) => {
        console.error(err);
    });

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLayout);

/***/ }),

/***/ "./src/scripts/weatherManager.js":
/*!***************************************!*\
  !*** ./src/scripts/weatherManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchWeather = async (location) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c37bc118761049e5815115544230510&q=${location}&days=3&aqi=yes&alerts=yes`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Vary': 'Origin',
            },
        });

        if(response.status === 400) {
            return { error: 'Invalid location' };
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (err)
    {
        console.error(err);
        return null;
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/layoutManager */ "./src/scripts/layoutManager.js");



(0,_scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwyREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2Qyw0QkFBNEIsSUFBSSw2QkFBNkI7QUFDMUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywyQkFBMkI7QUFDMUUsY0FBYztBQUNkLCtDQUErQywyQkFBMkI7QUFDMUU7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7O0FBRUw7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUM3QzNCO0FBQ0E7QUFDQSx5SEFBeUgsU0FBUztBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDeEIzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUN1Qjs7QUFFbkQsa0VBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz8yMzk0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9sYXlvdXRNYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgZmV0Y2hXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJNYW5hZ2VyXCI7XG5cbmxldCBmYXJlbmhlaXQgPSBmYWxzZTtcblxuY29uc3QgdXBkYXRlTGF5b3V0ID0gKCkgPT5cbntcbiAgICBmZXRjaFdlYXRoZXIoXCJNYWRyaWRcIikudGhlbigod2VhdGhlckRhdGEpID0+IHtcbiAgICAgICAgaWYod2VhdGhlckRhdGEuZXJyb3IpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIE5vdGlmeSBpbnZhbGlkIGxvY2F0aW9uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgICAgICAvLyBsb2NhdGlvblxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItbm93LXBsYWNlLWNpdHknKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uQ291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLW5vdy1wbGFjZS1jb3VudHJ5Jyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbkhvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1ub3ctaG91cicpO1xuXG4gICAgICAgICAgICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICAgICAgbG9jYXRpb25Db3VudHJ5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9ufSwgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJylbMV07XG4gICAgICAgICAgICBsb2NhdGlvbkhvdXIudGV4dENvbnRlbnQgPSBob3VyO1xuXG4gICAgICAgICAgICAvLyBjdXJyZW50IGluZm9cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLW5vdy1pbmZvLWltYWdlJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGVncmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItbm93LWluZm8tY2FwdGlvbi1kZWdyZWVzJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItbm93LWluZm8tY2FwdGlvbi1pbmZvJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgbEltYWdlLnNyYyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgICAgICAgICBjdXJyZW50SW1hZ2UuYXBwZW5kQ2hpbGQobEltYWdlKTtcbiAgICAgICAgICAgIGlmKGZhcmVuaGVpdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVncmVlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Z9wrogRmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnREZWdyZWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfY33CuiBDYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRTdGF0dXMudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgICAgIH1cbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTGF5b3V0OyIsImNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YzM3YmMxMTg3NjEwNDllNTgxNTExNTU0NDIzMDUxMCZxPSR7bG9jYXRpb259JmRheXM9MyZhcWk9eWVzJmFsZXJ0cz15ZXNgLCB7XG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAgICAgICAgICAgICAnVmFyeSc6ICdPcmlnaW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBsb2NhdGlvbicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hXZWF0aGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHVwZGF0ZUxheW91dCBmcm9tICcuL3NjcmlwdHMvbGF5b3V0TWFuYWdlcic7XG5cbnVwZGF0ZUxheW91dCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==