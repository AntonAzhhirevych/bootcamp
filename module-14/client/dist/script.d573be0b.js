// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/micromodal/dist/micromodal.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var version = "0.3.2",
    classCallCheck = function (e, o) {
  if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
},
    createClass = function () {
  function e(e, o) {
    for (var t = 0; t < o.length; t++) {
      var n = o[t];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  return function (o, t, n) {
    return t && e(o.prototype, t), n && e(o, n), o;
  };
}(),
    toConsumableArray = function (e) {
  if (Array.isArray(e)) {
    for (var o = 0, t = Array(e.length); o < e.length; o++) t[o] = e[o];

    return t;
  }

  return Array.from(e);
},
    MicroModal = function () {
  var e = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
      o = function () {
    function o(e) {
      var t = e.targetModal,
          n = e.triggers,
          i = void 0 === n ? [] : n,
          a = e.onShow,
          r = void 0 === a ? function () {} : a,
          s = e.onClose,
          l = void 0 === s ? function () {} : s,
          c = e.openTrigger,
          d = void 0 === c ? "data-micromodal-trigger" : c,
          u = e.closeTrigger,
          h = void 0 === u ? "data-micromodal-close" : u,
          f = e.disableScroll,
          v = void 0 !== f && f,
          m = e.disableFocus,
          g = void 0 !== m && m,
          b = e.awaitCloseAnimation,
          y = void 0 !== b && b,
          k = e.debugMode,
          w = void 0 !== k && k;
      classCallCheck(this, o), this.modal = document.getElementById(t), this.config = {
        debugMode: w,
        disableScroll: v,
        openTrigger: d,
        closeTrigger: h,
        onShow: r,
        onClose: l,
        awaitCloseAnimation: y,
        disableFocus: g
      }, i.length > 0 && this.registerTriggers.apply(this, toConsumableArray(i)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
    }

    return createClass(o, [{
      key: "registerTriggers",
      value: function () {
        for (var e = this, o = arguments.length, t = Array(o), n = 0; n < o; n++) t[n] = arguments[n];

        t.filter(Boolean).forEach(function (o) {
          o.addEventListener("click", function () {
            return e.showModal();
          });
        });
      }
    }, {
      key: "showModal",
      value: function () {
        this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add("is-open"), this.setFocusToFirstNode(), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.onShow(this.modal);
      }
    }, {
      key: "closeModal",
      value: function () {
        var e = this.modal;
        this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus(), this.config.onClose(this.modal), this.config.awaitCloseAnimation ? this.modal.addEventListener("animationend", function o() {
          e.classList.remove("is-open"), e.removeEventListener("animationend", o, !1);
        }, !1) : e.classList.remove("is-open");
      }
    }, {
      key: "closeModalById",
      value: function (e) {
        this.modal = document.getElementById(e), this.modal && this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function (e) {
        if (this.config.disableScroll) {
          var o = document.querySelector("body");

          switch (e) {
            case "enable":
              Object.assign(o.style, {
                overflow: "",
                height: ""
              });
              break;

            case "disable":
              Object.assign(o.style, {
                overflow: "hidden",
                height: "100vh"
              });
          }
        }
      }
    }, {
      key: "addEventListeners",
      value: function () {
        this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function () {
        this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function (e) {
        e.target.hasAttribute(this.config.closeTrigger) && (this.closeModal(), e.preventDefault());
      }
    }, {
      key: "onKeydown",
      value: function (e) {
        27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.maintainFocus(e);
      }
    }, {
      key: "getFocusableNodes",
      value: function () {
        var o = this.modal.querySelectorAll(e);
        return Array.apply(void 0, toConsumableArray(o));
      }
    }, {
      key: "setFocusToFirstNode",
      value: function () {
        if (!this.config.disableFocus) {
          var e = this.getFocusableNodes();
          e.length && e[0].focus();
        }
      }
    }, {
      key: "maintainFocus",
      value: function (e) {
        var o = this.getFocusableNodes();

        if (this.modal.contains(document.activeElement)) {
          var t = o.indexOf(document.activeElement);
          e.shiftKey && 0 === t && (o[o.length - 1].focus(), e.preventDefault()), e.shiftKey || t !== o.length - 1 || (o[0].focus(), e.preventDefault());
        } else o[0].focus();
      }
    }]), o;
  }(),
      t = null,
      n = function (e, o) {
    var t = [];
    return e.forEach(function (e) {
      var n = e.attributes[o].value;
      void 0 === t[n] && (t[n] = []), t[n].push(e);
    }), t;
  },
      i = function (e) {
    if (!document.getElementById(e)) return console.warn("MicroModal v" + version + ": ❗Seems like you have missed %c'" + e + "'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="' + e + '"></div>'), !1;
  },
      a = function (e) {
    if (e.length <= 0) return console.warn("MicroModal v" + version + ": ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'), !1;
  },
      r = function (e, o) {
    if (a(e), !o) return !0;

    for (var t in o) i(t);

    return !0;
  };

  return {
    init: function (e) {
      var t = Object.assign({}, {
        openTrigger: "data-micromodal-trigger"
      }, e),
          i = [].concat(toConsumableArray(document.querySelectorAll("[" + t.openTrigger + "]"))),
          a = n(i, t.openTrigger);
      if (!0 !== t.debugMode || !1 !== r(i, a)) for (var s in a) {
        var l = a[s];
        t.targetModal = s, t.triggers = [].concat(toConsumableArray(l)), new o(t);
      }
    },
    show: function (e, n) {
      var a = n || {};
      a.targetModal = e, !0 === a.debugMode && !1 === i(e) || (t = new o(a)).showModal();
    },
    close: function (e) {
      e ? t.closeModalById(e) : t.closeModal();
    }
  };
}();

var _default = MicroModal;
exports.default = _default;
},{}],"js/servises/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePost = exports.deletePost = exports.savePost = exports.getPost = exports.URL = void 0;
var URL = 'http://localhost:3000/posts'; // адрес нашего бекенда
// ПРОСМОТР ЗАМЕТОК

exports.URL = URL;

var getPost = function getPost() {
  return fetch(URL).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('запрос на сервер' + response.statusText);
  }); // .then(console.log);
}; //по http запросу можно посилать только строку
// ДОБАВЛЕНИЕ ЗАМЕТКИ
// создали обєкт settings которий содержет информация для роботи с даними на сервере
// делаем проверку с возвратом актуальной инф


exports.getPost = getPost;

var savePost = function savePost(post) {
  var settings = {
    method: 'POST',
    // POST-добавить
    headers: {
      'Content-Type': 'application/json' // формат контента

    },
    body: JSON.stringify(post) // весь контент переводим в строку

  };
  return fetch(URL, settings).then(function (response) {
    if (response.ok) {
      // если response true то вернем в json формате
      // console.log(response.ok);
      return response.json();
    }

    throw new Error('запрос на сервер' + response.statusText); // если будет ошибка то вернем ошибку
  });
}; //УДАЛЕНИЕ ЗАМЕТКИ
// settings - обект с инф о роботе с сервером


exports.savePost = savePost;

var deletePost = function deletePost(id) {
  var opt = {
    method: 'DELETE' // метод удаления

  };
  return fetch("".concat(URL, "/").concat(id), opt).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('запрос на сервер' + response.statusText);
  });
}; // ИЗМЕНЕНИЯ


exports.deletePost = deletePost;

var updatePost = function updatePost(id, post) {
  var opts = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  };
  return fetch("".concat(URL, "/").concat(id), opts).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('запрос на сервер' + response.statusText);
  });
};

exports.updatePost = updatePost;
},{}],"js/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var api = _interopRequireWildcard(require("./servises/api"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// МОДЕЛЬ ЗАМЕТОК С МЕТОДАМИ РОБОТИ С НИМИ
// notes - масив для отрисовки интерфейса
var Notepad =
/*#__PURE__*/
function () {
  function Notepad() {
    var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Notepad);

    this.notes = notes;
  }

  _createClass(Notepad, [{
    key: "get",
    value: function get() {
      var _this = this;

      return api.getPost().then(function (posts) {
        console.log(posts);
        _this.notes = posts;
        console.log(_this.notes); // console.log(this.notes);

        return _this.notes;
      });
    }
  }, {
    key: "add",
    value: function add(item) {
      var _this2 = this;

      return api.savePost(item).then(function (saveItem) {
        _this2.notes.push(saveItem); // добавим в заметки для дальнейшой отрисовки интерфейса


        console.log(_this2.notes);
        return saveItem;
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var _this3 = this;

      return api.deletePost(id).then(function () {
        _this3.notes = _this3.notes.filter(function (item) {
          return item.id !== id;
        });
        console.log(_this3.items);
        return id;
      });
    }
  }, {
    key: "updatePost",
    value: function updatePost(id, post) {
      var _this4 = this;

      return api.updatePost(id, post).then(function (updateitem) {
        _this4.notes.map(function (item) {
          return item.id === updateitem.id ? updateitem : item;
        });
      });
    }
  }]);

  return Notepad;
}();

var _default = Notepad;
exports.default = _default;
},{"./servises/api":"js/servises/api.js"}],"js/servises/handle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleShowForm = handleShowForm;
exports.handleFilterChange = handleFilterChange;
exports.handleSubmit = handleSubmit;
exports.handleDeleteNote = handleDeleteNote;

var _script = require("../script");

// import { addItemToList, removeListItem, renderNoteList } from './render';
function handleShowForm() {
  console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

  _script.MicroModal.show('modal-id');
}

function handleFilterChange(event) {
  var filterNotes = _script.notepad.filterNotesByQuery(event.target.value);

  renderNoteList(_script.REFS.noteList, filterNotes);
  event.preventDefault();
}

function handleSubmit(event) {
  event.preventDefault();

  var title = _script.REFS.titleInput.value.trim(); // .trim - убрать все пробели


  var body = _script.REFS.bodyInput.value.trim();

  if (title !== '' && body !== '') {
    _script.REFS.form.reset(); // очистит поля для ввода после сохранения


    addItemToList(title, body); // рендер функция

    _script.MicroModal.close('note-editor-modal');
  } else {
    _script.notyf.error('Для добавления заметки необходимо заполнить все поля!!!');
  }
}

function handleDeleteNote(event) {
  if (event.target.parentNode.dataset.action === 'delete-note') {
    removeListItem(event.target.closest('li'));
  }
}
},{"../script":"js/script.js"}],"js/script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MicroModal", {
  enumerable: true,
  get: function () {
    return _micromodal.default;
  }
});
exports.REFS = exports.notepad = void 0;

var _micromodal = _interopRequireDefault(require("../../node_modules/micromodal"));

var _model = _interopRequireDefault(require("./model"));

var _api = _interopRequireDefault(require("./servises/api"));

var _handle = require("./servises/handle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notepad = new _model.default(_api.default);
exports.notepad = notepad;
console.log(notepad); // require('handlebars');

_micromodal.default.init(); // require('handlebars/runtime');
//--REFERENSE


var REFS = {
  noteList: document.querySelector('.note-list'),
  //ul
  noteListLi: document.querySelector('note-list__item'),
  //ul > li
  form: document.querySelector('.note-editor'),
  // форма для создания новой заметки
  titleInput: document.querySelector('.note_title'),
  // название заметки
  bodyInput: document.querySelector('.note_body'),
  // текст
  searchForm: document.querySelector('.search-form__input'),
  // поле для фильтрации заметок
  deleteNote: document.querySelector('button[data-action="edit-note"]'),
  button: document.querySelector('button[data-action="open-editor"]'),
  newForm: document.querySelector('.modal')
}; //--LISTENER

exports.REFS = REFS;
REFS.button.addEventListener('click', _handle.handleShowForm);
REFS.searchForm.addEventListener('input', _handle.handleFilterChange);
REFS.form.addEventListener('submit', _handle.handleSubmit);
REFS.noteList.addEventListener('click', _handle.handleDeleteNote); //--TEMPLATE

var template = document.querySelector('#template').innerHTML.trim();
console.log(template); // console.log(Hanglebars);
// const card = Handlebars.compile(template);
// console.log(card);
// renderNoteList(REFS.noteList, notepad.notes);
// model.post({ name: 'tony' }).then(console.log);
// model.delete(1);
// ПО ПОЛУЧЕНОМУ ПРОМИСУ ОТРИСОВУЕМ ИНТЕРФЕЙС
//
// notepad.get();
// notepad
//   .add({ title: 'title NEW', body: 'body NEW' })
//   .then(prom => console.log('COOL', prom))
//   .catch(err => console.log('PROBLEM', err));
// console.log(notepad.notes);
// model.delete(4);
// notepad.updatePost(8, { title: 'HEEEEELL444444444444444' });
// model.delete(2);
},{"../../node_modules/micromodal":"../node_modules/micromodal/dist/micromodal.es.js","./model":"js/model.js","./servises/api":"js/servises/api.js","./servises/handle":"js/servises/handle.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55336" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map