/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/createNode.js":
/*!******************************!*\
  !*** ./src/js/createNode.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar createNode = function createNode(el, classList) {\n  var node = document.createElement(\"\".concat(el));\n  node.classList.add(classList);\n  return node;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createNode);\n\n//# sourceURL=webpack:///./src/js/createNode.js?");

/***/ }),

/***/ "./src/js/getData.js":
/*!***************************!*\
  !*** ./src/js/getData.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storageData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageData.js */ \"./src/js/storageData.js\");\n/* harmony import */ var _createNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNode.js */ \"./src/js/createNode.js\");\n/**\r\n * @file\r\n */\n\n\nvar lightboard = document.querySelector('.lightboard');\nvar current = '';\nvar collumn = '';\n\nvar renderData = function renderData() {\n  var sorted = _storageData_js__WEBPACK_IMPORTED_MODULE_0__[\"storageData\"].sort(function (a, b) {\n    if (a.specialist > b.specialist) {\n      return 1;\n    } else if (a.specialist < b.specialist) {\n      return -1;\n    } else {\n      if (a.number > b.number) {\n        return 1;\n      } else {\n        return -1;\n      }\n    }\n  });\n  sorted.forEach(function (item) {\n    if (item.specialist !== current) {\n      collumn = Object(_createNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"lightboard__data\");\n      lightboard ? lightboard.appendChild(collumn) : '';\n      current = item.specialist;\n      var markup = \"\\n      <p class=\\\"lightboard__number\\\">\".concat(item.number, \"</p>\\n      <p class=\\\"lightboard__name\\\">Vardas: \").concat(item.name, \"</p>\\n      <p class=\\\"lightboard__specialist\\\">Specialistas: \").concat(item.specialist, \"</p>\\n    \");\n      collumn.innerHTML = markup;\n    }\n  });\n};\n\nlocalStorage.length !== 0 && lightboard ? renderData() : lightboard ? lightboard.innerText = \"No data\" : '';\n\n//# sourceURL=webpack:///./src/js/getData.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_components_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/components.scss */ \"./src/styles/components.scss\");\n/* harmony import */ var _styles_components_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_components_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData.js */ \"./src/js/getData.js\");\n/* harmony import */ var _updateData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateData.js */ \"./src/js/updateData.js\");\n/* harmony import */ var _saveData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveData.js */ \"./src/js/saveData.js\");\n/* harmony import */ var _saveData_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_saveData_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _manageData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manageData.js */ \"./src/js/manageData.js\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/manageData.js":
/*!******************************!*\
  !*** ./src/js/manageData.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storageData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageData.js */ \"./src/js/storageData.js\");\n/* harmony import */ var _createNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNode.js */ \"./src/js/createNode.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nvar newStorageData = _storageData_js__WEBPACK_IMPORTED_MODULE_0__[\"storageData\"];\nvar specialist = document.querySelector('.specialist__select');\nvar dataContainer = document.querySelector('.specialist__data');\nvar checked = [];\n\nvar rederData = function rederData() {\n  var getDataRender = function getDataRender() {\n    // Get all different specialists\n    newStorageData.map(function (item) {\n      !checked.includes(item.specialist) ? checked.push(item.specialist) : '';\n      return checked;\n    }); // render options\n\n    specialist ? specialist.innerHTML = '' : '';\n    checked.map(function (item) {\n      var option = Object(_createNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"option\", 'specialist__option');\n      specialist ? specialist.appendChild(option) : '';\n      option.innerHTML = item;\n    });\n  };\n\n  getDataRender();\n\n  var onChangeHandler = function onChangeHandler() {\n    dataContainer.innerHTML = '';\n    var clientData = newStorageData.filter(function (item) {\n      return item.specialist === specialist.value;\n    });\n\n    var dataMap = function dataMap() {\n      clientData.map(function (item) {\n        var div = Object(_createNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'specialist__row');\n        dataContainer.appendChild(div);\n        var markUp = \"\\n            <p class=\\\"specialist__client-name\\\">\".concat(item.name, \"</p>\\n            <p class=\\\"specialist__client-no\\\">\").concat(item.number, \"</p>\\n            <button data-id=\\\"\").concat(item.number, \"\\\" class='specialist__delete button'>Aptarnauta</button>\\n    \");\n        div.innerHTML = markUp;\n      });\n    };\n\n    dataMap();\n  };\n\n  var deleteHandler = function deleteHandler() {\n    document.addEventListener('click', function (e) {\n      if (e.target.matches('.specialist__delete')) {\n        var id = e.target.dataset.id;\n        var newList = newStorageData.filter(function (list) {\n          return list.number !== id;\n        });\n        localStorage.removeItem('clients');\n        localStorage.setItem('clients', JSON.stringify({\n          clients: _toConsumableArray(newList)\n        }));\n        newStorageData = JSON.parse(localStorage.getItem('clients')).clients;\n        onChangeHandler();\n      }\n    }, false);\n  };\n\n  specialist ? specialist.onchange = function () {\n    deleteHandler();\n    onChangeHandler();\n  } : '';\n};\n\nlocalStorage.length !== 0 ? rederData() : specialist ? specialist.innerText = \"No data\" : '';\n\n//# sourceURL=webpack:///./src/js/manageData.js?");

/***/ }),

/***/ "./src/js/saveData.js":
/*!****************************!*\
  !*** ./src/js/saveData.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var button = document.querySelector('.save');\n\nvar getData = function getData(callback) {\n  fetch('src/js/json/clients.json').then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    callback(res);\n  });\n};\n\nvar loadData = function loadData(e) {\n  e.preventDefault();\n  getData(function (res) {\n    var stringData = JSON.stringify(res);\n    localStorage.setItem('clients', stringData);\n  });\n  alert('Pavyzdiniai duomenys išaugoti');\n};\n\nbutton ? button.addEventListener('click', loadData) : '';\n\n//# sourceURL=webpack:///./src/js/saveData.js?");

/***/ }),

/***/ "./src/js/storageData.js":
/*!*******************************!*\
  !*** ./src/js/storageData.js ***!
  \*******************************/
/*! exports provided: storageData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storageData\", function() { return storageData; });\nvar storageData = localStorage.length !== 0 ? JSON.parse(localStorage.getItem('clients')).clients : '';\n\n//# sourceURL=webpack:///./src/js/storageData.js?");

/***/ }),

/***/ "./src/js/updateData.js":
/*!******************************!*\
  !*** ./src/js/updateData.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storageData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageData.js */ \"./src/js/storageData.js\");\n/* harmony import */ var _createNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNode.js */ \"./src/js/createNode.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nvar newStorageData = _storageData_js__WEBPACK_IMPORTED_MODULE_0__[\"storageData\"];\nvar adminNode = document.querySelector('.admin');\nvar newClientName = document.querySelector('.client--admin');\nvar newSpecialisttName = document.querySelector('.specialist--admin');\nvar updateForm = document.querySelector('.admin__form');\nvar currentNumber = [0];\n\nvar getNumber = function getNumber() {\n  newStorageData.filter(function (item) {\n    return currentNumber.push(item.number);\n  });\n  currentNumber.sort();\n  var clientNumber = ++currentNumber[currentNumber.length - 1];\n  return clientNumber;\n};\n\nvar renderConfirmation = function renderConfirmation() {\n  var markup = \"\\n      <p class=\\\"admin__confirmation-text\\\"> Klientas irasytas </p>\\n  \";\n  var confirmationNode = Object(_createNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'admin__warning');\n  updateForm.appendChild(confirmationNode);\n  confirmationNode.innerHTML = markup;\n};\n\nvar validation = function validation(e) {\n  e.preventDefault();\n  var regExp = new RegExp(\"[a-zA-Z]+$\");\n\n  if (newClientName.value.match(regExp) && newSpecialisttName.value.match(regExp)) {\n    updateData();\n  } else {\n    document.write('Prasome ivesti tinkamus simbolius. Tuoj galesite meginti dar karta');\n    setTimeout(function () {\n      location.reload();\n    }, 3000);\n  }\n};\n\nvar updateData = function updateData() {\n  var clientNumber = getNumber();\n  var newList = [].concat(_toConsumableArray(newStorageData), [{\n    \"name\": newClientName.value,\n    \"specialist\": newSpecialisttName.value,\n    \"number\": \"\".concat(clientNumber)\n  }]);\n  localStorage.setItem('clients', JSON.stringify({\n    clients: _toConsumableArray(newList)\n  }));\n  newStorageData = JSON.parse(localStorage.getItem('clients')).clients;\n  updateForm.reset();\n  renderConfirmation();\n  setTimeout(function () {\n    location.reload();\n  }, 1500);\n};\n\nupdateForm ? updateForm.addEventListener('submit', validation) : '';\n\n//# sourceURL=webpack:///./src/js/updateData.js?");

/***/ }),

/***/ "./src/styles/components.scss":
/*!************************************!*\
  !*** ./src/styles/components.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/components.scss?");

/***/ })

/******/ });