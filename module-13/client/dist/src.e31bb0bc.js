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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/libs/micromodal.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/micromodal/dist/micromodal.es.js":[function(require,module,exports) {
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
},{}],"../node_modules/notyf/notyf.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotyfView = exports.DEFAULT_OPTIONS = exports.NotyfArray = exports.NotyfArrayEvent = exports.NotyfNotification = exports.Notyf = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var NotyfNotification =
/** @class */
function () {
  function NotyfNotification(options) {
    this.options = options;
  }

  return NotyfNotification;
}();

exports.NotyfNotification = NotyfNotification;
var NotyfArrayEvent;
exports.NotyfArrayEvent = NotyfArrayEvent;

(function (NotyfArrayEvent) {
  NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";
  NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";
})(NotyfArrayEvent || (exports.NotyfArrayEvent = NotyfArrayEvent = {}));

var NotyfArray =
/** @class */
function () {
  function NotyfArray() {
    this.notifications = [];
  }

  NotyfArray.prototype.push = function (elem) {
    this.notifications.push(elem);
    this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
  };

  NotyfArray.prototype.splice = function (index, num) {
    var elem = this.notifications.splice(index, num)[0];
    this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
  };

  NotyfArray.prototype.indexOf = function (elem) {
    return this.notifications.indexOf(elem);
  };

  NotyfArray.prototype.onupdate = function (fn) {
    this.updateFn = fn;
  };

  return NotyfArray;
}();

exports.NotyfArray = NotyfArray;
var DEFAULT_OPTIONS = {
  types: [{
    type: 'success',
    className: 'notyf__toast--success',
    backgroundColor: '#3dc763',
    icon: {
      className: 'notyf__icon--success',
      tagName: 'i'
    }
  }, {
    type: 'error',
    className: 'notyf__toast--error',
    backgroundColor: '#ed3d3d',
    icon: {
      className: 'notyf__icon--error',
      tagName: 'i'
    }
  }],
  duration: 2000,
  ripple: true
};
exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;

var NotyfView =
/** @class */
function () {
  function NotyfView() {
    this.notifications = []; // Creates the main notifications container

    var docFrag = document.createDocumentFragment();

    var notyfContainer = this._createHTLMElement({
      tagName: 'div',
      className: 'notyf'
    });

    docFrag.appendChild(notyfContainer);
    document.body.appendChild(docFrag);
    this.container = notyfContainer; // Identifies the main animation end event

    this.animationEndEventName = this._getAnimationEndEventName();

    this._createA11yContainer();
  }

  NotyfView.prototype.update = function (notification, type) {
    if (type === NotyfArrayEvent.Add) {
      this.addNotification(notification);
    } else if (type === NotyfArrayEvent.Remove) {
      this.removeNotification(notification);
    }
  };

  NotyfView.prototype.removeNotification = function (notification) {
    var _this = this;

    var renderedNotification = this._popRenderedNotification(notification);

    var node;

    if (!renderedNotification) {
      return;
    }

    node = renderedNotification.node;
    node.classList.add('notyf__toast--disappear');
    var handleEvent;
    node.addEventListener(this.animationEndEventName, handleEvent = function (event) {
      if (event.target === node) {
        node.removeEventListener(_this.animationEndEventName, handleEvent);

        _this.container.removeChild(node);
      }
    });
  };

  NotyfView.prototype.addNotification = function (notification) {
    var node = this._renderNotification(notification);

    this.notifications.push({
      notification: notification,
      node: node
    }); // For a11y purposes, we still want to announce that there's a notification in the screen
    // even if it comes with no message.

    this._announce(notification.options.message || 'Notification');
  };

  NotyfView.prototype._renderNotification = function (notification) {
    var card = this._buildNotificationCard(notification);

    var className = notification.options.className;

    if (className) {
      card.classList.add(className);
    }

    this.container.appendChild(card);
    return card;
  };

  NotyfView.prototype._popRenderedNotification = function (notification) {
    var idx = -1;

    for (var i = 0; i < this.notifications.length && idx < 0; i++) {
      if (this.notifications[i].notification === notification) {
        idx = i;
      }
    }

    if (idx !== -1) {
      return this.notifications.splice(idx, 1)[0];
    }

    return;
  };

  NotyfView.prototype._buildNotificationCard = function (notification) {
    var options = notification.options;
    var iconOpts = options.icon; // Create elements

    var notificationElem = this._createHTLMElement({
      tagName: 'div',
      className: 'notyf__toast'
    });

    var ripple = this._createHTLMElement({
      tagName: 'div',
      className: 'notyf__ripple'
    });

    var wrapper = this._createHTLMElement({
      tagName: 'div',
      className: 'notyf__wrapper'
    });

    var message = this._createHTLMElement({
      tagName: 'div',
      className: 'notyf__message'
    });

    message.innerHTML = options.message || '';
    var color = options.backgroundColor; // build the icon and append it to the card

    if (iconOpts && typeof iconOpts === 'object') {
      var iconContainer = this._createHTLMElement({
        tagName: 'div',
        className: 'notyf__icon'
      });

      var icon = this._createHTLMElement({
        tagName: iconOpts.tagName || 'i',
        className: iconOpts.className,
        text: iconOpts.text
      });

      if (color) {
        icon.style.color = color;
      }

      iconContainer.appendChild(icon);
      wrapper.appendChild(iconContainer);
    }

    wrapper.appendChild(message);
    notificationElem.appendChild(wrapper); // add ripple if applicable, else just paint the full toast

    if (color) {
      if (options.ripple) {
        ripple.style.backgroundColor = color;
        notificationElem.appendChild(ripple);
      } else {
        notificationElem.style.backgroundColor = color;
      }
    }

    return notificationElem;
  };

  NotyfView.prototype._createHTLMElement = function (_a) {
    var tagName = _a.tagName,
        className = _a.className,
        text = _a.text;
    var elem = document.createElement(tagName);

    if (className) {
      elem.className = className;
    }

    elem.textContent = text || null;
    return elem;
  };
  /**
   * Creates an invisible container which will announce the notyfs to
   * screen readers
   */


  NotyfView.prototype._createA11yContainer = function () {
    var a11yContainer = this._createHTLMElement({
      tagName: 'div',
      className: 'notyf-announcer'
    });

    a11yContainer.setAttribute('aria-atomic', 'true');
    a11yContainer.setAttribute('aria-live', 'polite'); // Set the a11y container to be visible hidden. Can't use display: none as
    // screen readers won't read it.

    a11yContainer.style.border = '0';
    a11yContainer.style.clip = 'rect(0 0 0 0)';
    a11yContainer.style.height = '1px';
    a11yContainer.style.margin = '-1px';
    a11yContainer.style.overflow = 'hidden';
    a11yContainer.style.padding = '0';
    a11yContainer.style.position = 'absolute';
    a11yContainer.style.width = '1px';
    a11yContainer.style.outline = '0';
    document.body.appendChild(a11yContainer);
    this.a11yContainer = a11yContainer;
  };
  /**
   * Announces a message to screenreaders.
   */


  NotyfView.prototype._announce = function (message) {
    var _this = this;

    this.a11yContainer.textContent = ''; // This 100ms timeout is necessary for some browser + screen-reader combinations:
    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
    //   second time without clearing and then using a non-zero delay.
    // (using JAWS 17 at time of this writing).
    // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts

    setTimeout(function () {
      _this.a11yContainer.textContent = message;
    }, 100);
  };
  /**
   * Determine which animationend event is supported
   */


  NotyfView.prototype._getAnimationEndEventName = function () {
    var el = document.createElement('_fake');
    var transitions = {
      MozTransition: 'animationend',
      OTransition: 'oAnimationEnd',
      WebkitTransition: 'webkitAnimationEnd',
      transition: 'animationend'
    };
    var t;

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    } // No supported animation end event. Using "animationend" as a fallback


    return 'animationend';
  };

  return NotyfView;
}();
/**
 * Main controller class. Defines the main Notyf API.
 */


exports.NotyfView = NotyfView;

var Notyf =
/** @class */
function () {
  function Notyf(opts) {
    var _this = this;

    this.notifications = new NotyfArray();
    this.view = new NotyfView();
    var types = this.registerTypes(opts);
    this.options = __assign({}, DEFAULT_OPTIONS, opts);
    this.options.types = types;
    this.notifications.onupdate(function (elem, type) {
      _this.view.update(elem, type);
    });
  }

  Notyf.prototype.error = function (payload) {
    var options = this.normalizeOptions('error', payload);
    this.open(options);
  };

  Notyf.prototype.success = function (payload) {
    var options = this.normalizeOptions('success', payload);
    this.open(options);
  };

  Notyf.prototype.open = function (options) {
    var defaultOpts = this.options.types.find(function (_a) {
      var type = _a.type;
      return type === options.type;
    }) || {};

    var config = __assign({}, defaultOpts, options);

    config.ripple = config.ripple === undefined ? this.options.ripple : config.ripple;
    var notification = new NotyfNotification(config);

    this._pushNotification(notification);
  };

  Notyf.prototype._pushNotification = function (notification) {
    var _this = this;

    this.notifications.push(notification);
    var duration = notification.options.duration || this.options.duration;
    setTimeout(function () {
      var index = _this.notifications.indexOf(notification);

      _this.notifications.splice(index, 1);
    }, duration);
  };

  Notyf.prototype.normalizeOptions = function (type, payload) {
    var options = {
      type: type
    };

    if (typeof payload === 'string') {
      options.message = payload;
    } else if (typeof payload === 'object') {
      options = __assign({}, options, payload);
    }

    return options;
  };

  Notyf.prototype.registerTypes = function (opts) {
    var incomingTypes = (opts && opts.types || []).slice();
    var finalTypes = DEFAULT_OPTIONS.types.map(function (defaultType) {
      // find if there's a default type within the user input's types, if so, it means the user
      // wants to change some of the default settings
      var userTypeIdx = incomingTypes.findIndex(function (t) {
        return t.type === defaultType.type;
      });
      var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
      return __assign({}, defaultType, userType);
    });
    return finalTypes.concat(incomingTypes);
  };

  return Notyf;
}();

exports.Notyf = Notyf;
},{}],"../node_modules/notyf/notyf.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/servises/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNotes = exports.deleteNotes = exports.saveNotes = exports.getNotes = exports.URL = void 0;
// import notepad from '../script';
var URL = 'http://localhost:3000/posts'; // адреса сервера
// ПРОСМОТР ЗАМЕТОК

exports.URL = URL;

var getNotes = function getNotes() {
  return fetch(URL).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('запрос на сервер' + response.statusText);
  });
}; //по http  можемо надсилати тільки строку
// ДОБАВЛЕНИЕ
// створили обєкт settings який несе информацію для роботи з даними на сервери
// робмо перевірку з поверненням актуальної інформації


exports.getNotes = getNotes;

var saveNotes = function saveNotes(post) {
  var settings = {
    method: 'POST',
    // POST-добавити
    headers: {
      'Content-Type': 'application/json' // формат контента

    },
    body: JSON.stringify(post) // весь контент переводимо в строку

  };
  return fetch(URL, settings).then(function (response) {
    if (response.ok) {
      // якщо response true то повернемо в json форматі
      // console.log(response.ok);
      return response.json();
    }

    throw new Error('запрос на сервер' + response.statusText); // якщо буде помилка то повернемо помилку
  });
}; //УДАЛЕНИЕ ЗАМЕТКИ
// settings - обект  з информациєю по роботі з сервером


exports.saveNotes = saveNotes;

var deleteNotes = function deleteNotes(id) {
  console.log('TEST ID', id);
  var opt = {
    method: 'DELETE' // метод видалення

  };
  return fetch("".concat(URL, "/").concat(id), opt).then(function (response) {
    if (response.ok) {
      console.log('response.ok :', response.ok);
      return response.json();
    }

    console.log('response.ok :', response.ok);
    throw new Error('запрос на сервер : ' + response.statusText);
  });
}; // ИЗМЕНЕНИЯ


exports.deleteNotes = deleteNotes;

var updateNotes = function updateNotes(id, post) {
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

exports.updateNotes = updateNotes;
},{}],"js/servises/render.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItemToList = addItemToList;
exports.renderNoteList = renderNoteList;
exports.card = exports.removeListItem = void 0;

var _script = require("../script");

//TEMPLATE/HANDLEBARS
var template = document.querySelector('#template').innerHTML.trim();
var card = Handlebars.compile(template); // функция для добавления новой заметки

exports.card = card;

function addItemToList(name, text) {
  var listItemNote = {
    title: name,
    body: text,
    priority: 0
  }; //запускаємо функцію по збереженню нової заметки

  _script.notepad.add(listItemNote).then(function () {});
} //видалення


var removeListItem = function removeListItem(item) {
  _script.notepad.delete(item.dataset.id); // REMOVE - ВИДАЛЕННЯ ВУЗЛА З ДОМ ДЕРЕВА


  item.remove();

  _script.notyf.success('Заметка успешно удалена!!!');
}; // функция для  отрисовки заметок
// listRef - куда добавити
// notes - що добавити


exports.removeListItem = removeListItem;

function renderNoteList(listRef, notes) {
  var cards = notes.map(function (note) {
    return card(note);
  });
  listRef.innerHTML = ''; // делает изначально ul пустим

  _script.REFS.noteList.insertAdjacentHTML('beforeend', cards.join(' ')); // добавить в ul


  return listRef;
}
},{"../script":"js/script.js"}],"js/notes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var api = _interopRequireWildcard(require("./servises/api"));

var _render = require("./servises/render");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

      return api.getNotes().then(function (posts) {
        posts.map(function (post) {
          return _this.notes.push(post);
        });
        return _this.notes;
      });
    }
  }, {
    key: "add",
    value: function add(item) {
      var _this2 = this;

      // після виконнаня функції  saveNotes виконаємо наступне
      return api.saveNotes(item).then(function (saveItem) {
        //заметку додали  на сервер в функції saveNotes,
        //на сервері було сформовано ID,
        // тепер повністю готову заметку додаємо в масив
        _this2.notes.push(saveItem); //+ додамо в HTML


        var listItem = document.querySelector('.note-list');
        var item = (0, _render.card)(saveItem);
        listItem.insertAdjacentHTML('beforeend', item); //повернемо

        return saveItem;
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var _this3 = this;

      // видаляємо на сервери
      return api.deleteNotes(id).then(function () {
        //після того як видалили на сервери ми видаляємо з масиву
        return _this3.notes = _this3.notes.filter(function (item) {
          return item.id !== id;
        });
      });
    }
  }, {
    key: "updateNotes",
    value: function updateNotes(id, post) {
      var _this4 = this;

      return api.updateNotes(id, post).then(function (updateitem) {
        _this4.notes.map(function (item) {
          return item.id === updateitem.id ? updateitem : item;
        });
      });
    } //результат пошуку

  }, {
    key: "filterNotesByQuery",
    value: function filterNotesByQuery(query) {
      var _this5 = this;

      return new Promise(function (resolve) {
        var newArr = []; //перебераємо масив заметок

        _this5.notes.filter(function (obj) {
          // переводимо в потрібний нам регістр
          var titleLower = obj.title.toLowerCase();
          var bodyLower = obj.body.toLowerCase(); //якщо введенні символи співпадають повернемо новий масив

          if (titleLower.includes(query.toLowerCase()) || bodyLower.includes(query.toLowerCase())) {
            // додаємо в новий масив
            newArr.push(obj);
          } //повертаємо проміс


          resolve(newArr);
        });
      });
    }
  }]);

  return Notepad;
}();

var _default = Notepad;
exports.default = _default;
},{"./servises/api":"js/servises/api.js","./servises/render":"js/servises/render.js"}],"js/servises/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTE_ACTIONS = exports.ICON_TYPES = exports.NOTIFICATION_MESSAGES = exports.PRIORITY_TYPES = void 0;
var PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};
exports.PRIORITY_TYPES = PRIORITY_TYPES;
var NOTIFICATION_MESSAGES = {
  NOTE_DELETED_SUCCESS: 'Заметка успешно удалена!!!',
  NOTE_ADDED_SUCCESS: 'Заметка успешно добавлена!!!',
  EDITOR_FIELDS_EMPTY: 'Заполните поля редактора!!!'
};
exports.NOTIFICATION_MESSAGES = NOTIFICATION_MESSAGES;
var NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority'
};
exports.NOTE_ACTIONS = NOTE_ACTIONS;
var ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less'
};
exports.ICON_TYPES = ICON_TYPES;
},{}],"js/servises/handle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleShowForm = handleShowForm;
exports.handleFilterChange = handleFilterChange;
exports.handleSubmit = handleSubmit;
exports.handleDeleteNote = handleDeleteNote;

var _render = require("./render");

var _script = require("../script");

var _constants = require("../servises/constants");

function handleShowForm() {
  _script.MicroModal.show('note-editor-modal');
}

function handleFilterChange(event) {
  _script.notepad.filterNotesByQuery(event.target.value).then(function (response) {
    (0, _render.renderNoteList)(_script.REFS.noteList, response);
    event.preventDefault();
  });
}

function handleSubmit(event) {
  event.preventDefault();

  var title = _script.REFS.titleInput.value.trim(); // .trim - убрать все пробели


  var body = _script.REFS.bodyInput.value.trim();

  if (title !== '' && body !== '') {
    _script.REFS.form.reset(); // очистит поля для ввода после сохранения


    (0, _render.addItemToList)(title, body); // рендер функция

    _script.notyf.success(_constants.NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);

    _script.MicroModal.close('note-editor-modal');
  } else {
    _script.notyf.error(_constants.NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }
}

function handleDeleteNote(event) {
  if (event.target.parentNode.dataset.action === 'delete-note') {
    console.log(event.target.closest('li'));
    (0, _render.removeListItem)(event.target.closest('li'));
  }
}
},{"./render":"js/servises/render.js","../script":"js/script.js","../servises/constants":"js/servises/constants.js"}],"js/script.js":[function(require,module,exports) {
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
exports.notyf = exports.REFS = exports.notepad = void 0;

var _micromodal = _interopRequireDefault(require("micromodal"));

var _notyf = require("notyf");

require("notyf/notyf.min.css");

var _notes = _interopRequireDefault(require("./notes"));

var _render = require("./servises/render");

var _handle = require("./servises/handle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for React and Vue
//--NOTEPAD
var notepad = new _notes.default(); //--PLAGINS

exports.notepad = notepad;
var notyf = new _notyf.Notyf();
exports.notyf = notyf;

_micromodal.default.init(); //--REFERENSE


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
  button: document.querySelector('button[data-action="open-editor"]'),
  newForm: document.querySelector('.modal'),
  update: document.querySelector('.modal__btn')
}; //--LISTENER

exports.REFS = REFS;
REFS.button.addEventListener('click', _handle.handleShowForm);
REFS.searchForm.addEventListener('input', _handle.handleFilterChange);
REFS.form.addEventListener('submit', _handle.handleSubmit);
REFS.noteList.addEventListener('click', _handle.handleDeleteNote);
notepad.get().then(function (initialNotes) {
  return (0, _render.renderNoteList)(REFS.noteList, initialNotes);
});
},{"micromodal":"../node_modules/micromodal/dist/micromodal.es.js","notyf":"../node_modules/notyf/notyf.es.js","notyf/notyf.min.css":"../node_modules/notyf/notyf.min.css","./notes":"js/notes.js","./servises/render":"js/servises/render.js","./servises/handle":"js/servises/handle.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

require("./sass/libs/micromodal.scss");

require("./js/script");
},{"./sass/main.scss":"sass/main.scss","./sass/libs/micromodal.scss":"sass/libs/micromodal.scss","./js/script":"js/script.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52627" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map