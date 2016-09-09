webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	var _Components = __webpack_require__(2);

	var _Components2 = _interopRequireDefault(_Components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(24)();
	// import angular from 'angular'
	// import ngCookies   from 'angular-cookies'


	var angularCookies = angular.module('ngCookies').name;
	angular.module('app', [angular.module('ngCookies').name, _Components2.default]).config(function ($cookiesProvider) {
	  $cookiesProvider.defaults = {
	    domain: 'localhost',
	    secure: true
	  };
	}).component('app', _app2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var AppComponent = {
	  template: "\n    <quiz></quiz>\n  "
	};
	exports.default = AppComponent;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Quiz = __webpack_require__(3);

	var _Quiz2 = _interopRequireDefault(_Quiz);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Components = angular.module('app.components', [_Quiz2.default]).name; // import angular from 'angular'
	exports.default = Components;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(4);

	var _angular2 = _interopRequireDefault(_angular);

	var _quiz = __webpack_require__(5);

	var _quiz2 = _interopRequireDefault(_quiz);

	var _quiz3 = __webpack_require__(7);

	var _quiz4 = _interopRequireDefault(_quiz3);

	var _ScoreList = __webpack_require__(8);

	var _ScoreList2 = _interopRequireDefault(_ScoreList);

	var _AddScore = __webpack_require__(18);

	var _AddScore2 = _interopRequireDefault(_AddScore);

	var _Analysis = __webpack_require__(21);

	var _Analysis2 = _interopRequireDefault(_Analysis);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Quiz = _angular2.default.module('app.quiz', [_ScoreList2.default, _AddScore2.default, _Analysis2.default]).component('quiz', _quiz2.default).service('QuizService', _quiz4.default).run(function functionName() {}).name;

	// import Score from './Score'
	exports.default = Quiz;

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _quiz = __webpack_require__(6);

	var _quiz2 = _interopRequireDefault(_quiz);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuizComponent = {
	  controller: _quiz2.default,
	  template: '\n    <h1>Quiz Scores</h1>\n    <h2>Add or remove scores</h2>\n    <scorelist\n      ></scorelist>\n    <add-score\n      score="$ctrl.newScore"\n      on-add-score="$ctrl.addScore($event)"></add-score>\n    <analysis scores="$ctrl.scores"></analysis>\n\n  '

	};

	exports.default = QuizComponent;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var QuizController = function () {
	  function QuizController(QuizService) {
	    _classCallCheck(this, QuizController);

	    this.QuizService = QuizService;
	  }

	  _createClass(QuizController, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.scores = this.QuizService.getScores();
	    }
	  }, {
	    key: '$onChanges',
	    value: function $onChanges(changes) {}
	  }, {
	    key: 'getScores',
	    value: function getScores() {
	      return this.scores;
	    }
	  }, {
	    key: 'putScores',
	    value: function putScores(scores) {
	      return this.QuizService.putScores(scores);
	    }
	  }, {
	    key: 'addScore',
	    value: function addScore(_ref) {
	      var score = _ref.score;

	      if (!score) return;
	      this.scores.unshift(score);
	      this.newScore = { name: '', score: null };
	      this.QuizService.putScores(this.scores);
	    }
	  }, {
	    key: 'removeScore',
	    value: function removeScore(_ref2) {
	      var index = _ref2.index;

	      this.QuizService.removeScore(index);
	    }
	  }]);

	  return QuizController;
	}();

	QuizController.$inject = ['QuizService'];

	exports.default = QuizController;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var QuizService = function () {
	  function QuizService($cookies) {
	    _classCallCheck(this, QuizService);

	    this.$cookies = $cookies;
	    this.storage = window.localStorage;
	  }

	  _createClass(QuizService, [{
	    key: 'getScores',
	    value: function getScores() {
	      console.log(this.$cookies);
	      debugger;
	      return JSON.parse(this.storage.getItem('scores')) || [];
	      // return this.$cookies.getObject('scores') || []
	    }
	  }, {
	    key: 'putScores',
	    value: function putScores(scores) {
	      // console.log(this.$cookies);
	      // this.$cookies.putObject('scores', 'test')
	      // console.log( this.$cookies.getObject('scores') );
	      return this.storage.scores = JSON.stringify(scores);
	      // return this.$cookies.putObject('scores', scores)
	    }
	  }, {
	    key: 'removeScore',
	    value: function removeScore(_ref) {
	      var index = _ref.index;

	      var scores = this.getScores();
	      scores.splice(index, 1);
	      return this.putScores(scores);
	    }
	  }]);

	  return QuizService;
	}();

	QuizService.$inject = ['$cookies'];

	exports.default = QuizService;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(4);

	var _angular2 = _interopRequireDefault(_angular);

	var _scorelist = __webpack_require__(9);

	var _scorelist2 = _interopRequireDefault(_scorelist);

	var _Score = __webpack_require__(11);

	var _Score2 = _interopRequireDefault(_Score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import ScoreAutoUpdate from './scoreAutoUpdate.directive'
	// import NameAutoUpdate from './nameAutoUpdate.directive'
	exports.default = _angular2.default.module('scorelist', [_Score2.default])
	// .directive('nameAutoUpdate', ()=> new NameAutoUpdate)
	// .directive('scoreAutoUpdate', ()=> new ScoreAutoUpdate)
	.component('scorelist', _scorelist2.default).run(function functionName() {}).name;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _scorelist = __webpack_require__(10);

	var _scorelist2 = _interopRequireDefault(_scorelist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScorelistComponent = {
	  bindings: {
	    scores: '<'
	  },
	  require: {
	    QuizCtrl: '^quiz'
	  },
	  controller: _scorelist2.default,
	  template: '\n    <form name="studentScores"\n      ng-submit="$ctrl.onSubmit()">\n        <score\n        ng-repeat="score in $ctrl.scores track by $index"\n        score="score"\n        index="$index"\n        on-delete="$ctrl.deleteScore(score)"\n        on-update="$ctrl.updateScore(score)"></score>\n    </form>\n  '
	};

	exports.default = ScorelistComponent;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ScorelistController = function () {
	  function ScorelistController() {
	    _classCallCheck(this, ScorelistController);
	  }

	  _createClass(ScorelistController, [{
	    key: "$onInit",
	    value: function $onInit() {
	      this.scores = this.QuizCtrl.getScores();
	    }
	  }, {
	    key: "deleteScore",
	    value: function deleteScore(score) {
	      var idx = this.scores.indexOf(score);
	      this.scores.splice(idx, 1);
	      this.QuizCtrl.putScores(this.scores);
	    }
	  }, {
	    key: "updateScore",
	    value: function updateScore(score) {
	      var idx = this.scores.indexOf(score);
	      this.scores[idx] = score;
	      this.QuizCtrl.putScores(this.scores);
	    }
	  }]);

	  return ScorelistController;
	}();

	exports.default = ScorelistController;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(4);

	var _angular2 = _interopRequireDefault(_angular);

	var _score = __webpack_require__(12);

	var _score2 = _interopRequireDefault(_score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(14);

	exports.default = _angular2.default.module('score', []).component('score', _score2.default).run(function functionName() {}).name;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _score = __webpack_require__(13);

	var _score2 = _interopRequireDefault(_score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ScoreComponent = {
	  bindings: {
	    score: '<',
	    index: '<',
	    onDelete: '&',
	    onUpdate: '&'
	  },
	  controller: _score2.default,
	  template: '\n    <label class="student-score">\n      Name: <input\n        ng-model="$ctrl.score.name"\n        name="recordName"\n        ng-required="true"\n        ng-blur="$valid && $ctrl.blur($event)"\n        ng-keyup="$valid && $ctrl.keyup($event)"\n        pattern="[A-Za-z]+$"></input></label>\n      <label>Score: <input\n        type="number"\n        name="recordScore"\n        ng-model="$ctrl.score.score"\n        score-auto-update\n        ng-class="{\'has-problem\': $ctrl.score.score < 65}" ></input></label>\n      <a ng-click="$ctrl.delete()" >remove score</a><br>\n  '
	};

	exports.default = ScoreComponent;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ScoreController = function () {
	  function ScoreController() {
	    _classCallCheck(this, ScoreController);
	  }

	  _createClass(ScoreController, [{
	    key: "delete",
	    value: function _delete() {
	      this.onDelete();
	    }
	  }, {
	    key: "blur",
	    value: function blur(evt) {
	      debugger;
	      if (!this.score.name || !this.score.score) return;
	      debugger;
	      this.onUpdate();
	    }
	  }, {
	    key: "keyup",
	    value: function keyup(evt) {
	      if (evt.key !== "Enter") return;
	      this.onUpdate();
	    }
	  }]);

	  return ScoreController;
	}();

	exports.default = ScoreController;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports


	// module
	exports.push([module.id, ".has-problem {\n  color: red;\n  background-color: yellow; }\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(4);

	var _angular2 = _interopRequireDefault(_angular);

	var _addscore = __webpack_require__(19);

	var _addscore2 = _interopRequireDefault(_addscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('addScore', []).component('addScore', _addscore2.default).name;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _addscore = __webpack_require__(20);

	var _addscore2 = _interopRequireDefault(_addscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddScoreComponent = {
	  bindings: {
	    score: '<',
	    onAddScore: '&'
	  },
	  controller: _addscore2.default,
	  //  todo: this component and the Score component have a good deal of duplicate parts  
	  template: '\n    <form name="addScore" ng-submit="$ctrl.onSubmit()">\n      <input type="text" placeholder="Name..." ng-model="$ctrl.score.name" ng-required="true" pattern="[A-Za-z]+$">\n      <input type="number" placeholder="Score..." ng-model="$ctrl.score.score" ng-required="true" >\n      <button type="submit">Add Score</button>\n    </form>\n  '
	};

	exports.default = AddScoreComponent;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AddScoreController = function () {
	  function AddScoreController() {
	    _classCallCheck(this, AddScoreController);
	  }

	  _createClass(AddScoreController, [{
	    key: "$onInit",
	    value: function $onInit() {}
	  }, {
	    key: "$onChanges",
	    value: function $onChanges(changes) {
	      if (changes.score) {
	        this.score = Object.assign({}, this.score);
	      }
	    }
	  }, {
	    key: "onSubmit",
	    value: function onSubmit() {
	      if (!this.score.name || !this.score.score) return;

	      this.onAddScore({
	        $event: {
	          score: this.score,
	          name: this.name
	        }
	      });
	    }
	  }]);

	  return AddScoreController;
	}();

	exports.default = AddScoreController;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(4);

	var _angular2 = _interopRequireDefault(_angular);

	var _analysis = __webpack_require__(22);

	var _analysis2 = _interopRequireDefault(_analysis);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('analysis', []).component('analysis', _analysis2.default).name;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _analysis = __webpack_require__(23);

	var _analysis2 = _interopRequireDefault(_analysis);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AnalysisComponent = {
	  bindings: {
	    scores: '<'
	  },
	  require: {
	    QuizCtrl: '^quiz'
	  },
	  controller: _analysis2.default,
	  template: '\n    <div>Average: {{$ctrl.average()}}</div>\n    <div>Min: {{$ctrl.min()}}</div>\n    <div>Max: {{$ctrl.max()}}</div>\n  '
	};

	exports.default = AnalysisComponent;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Analysis = function () {
	  function Analysis() {
	    _classCallCheck(this, Analysis);
	  }

	  _createClass(Analysis, [{
	    key: "average",
	    value: function average() {
	      var acc = 0;
	      this.scores.map(function (score) {
	        return acc = acc + parseInt(score.score);
	      });
	      return acc / this.scores.length;
	    }
	  }, {
	    key: "min",
	    value: function min() {
	      var scores = this.scores.map(function (_ref) {
	        var score = _ref.score;
	        return score;
	      });
	      scores.sort(function (a, b) {
	        return a > b;
	      });
	      return scores[0];
	    }
	  }, {
	    key: "max",
	    value: function max() {
	      var scores = this.scores.map(function (_ref2) {
	        var score = _ref2.score;
	        return score;
	      });
	      scores.sort(function (a, b) {
	        return a < b;
	      });
	      return scores[0];
	    }
	  }]);

	  return Analysis;
	}();

	exports.default = Analysis;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function functionName() {
	  __webpack_require__(4);
	  __webpack_require__(25);
	};

/***/ }
]);