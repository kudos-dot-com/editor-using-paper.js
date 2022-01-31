// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iKiqL":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _editorjs = require("@editorjs/editorjs");
var _editorjsDefault = parcelHelpers.interopDefault(_editorjs);
// import MyParagraph from 'my-paragraph.js';
const editor = new _editorjsDefault.default({
    holder: editorjs,
    data: {
        "time": 1550476186479,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "html": `<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>`
                }
            }, 
        ],
        "version": "2.8.1"
    }
});
document.getElementById('button').addEventListener('click', function(e) {
    editor.save().then((outputData)=>{
        console.log('Article data: ', outputData);
    }).catch((error)=>{
        console.log('Saving failed: ', error);
    });
});

},{"@editorjs/editorjs":"4eyUD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4eyUD":[function(require,module,exports) {
/*! For license information please see editor.js.LICENSE.txt */ !function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.EditorJS = e() : t.EditorJS = e();
}(window, function() {
    return (function(t1) {
        var e1 = {
        };
        function n(o) {
            if (e1[o]) return e1[o].exports;
            var r = e1[o] = {
                i: o,
                l: !1,
                exports: {
                }
            };
            return t1[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }
        return n.m = t1, n.c = e1, n.d = function(t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            });
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                return t[e];
            }).bind(null, r));
            return o;
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return n.d(e, "a", e), e;
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 186);
    })([
        function(t2, e2, n1) {
            var o = n1(10), r = n1(17), i = n1(27), a = n1(21), s = n1(31), l = function(t, e, n) {
                var c, u, f, d, p = t & l.F, h = t & l.G, v = t & l.S, g = t & l.P, y = t & l.B, b = h ? o : v ? o[e] || (o[e] = {
                }) : (o[e] || {
                }).prototype, m = h ? r : r[e] || (r[e] = {
                }), k = m.prototype || (m.prototype = {
                });
                for(c in h && (n = e), n)f = ((u = !p && b && void 0 !== b[c]) ? b : n)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, b && a(b, c, f, t & l.U), m[c] != f && i(m, c, d), g && k[c] != f && (k[c] = f);
            };
            o.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t2.exports = l;
        },
        function(t3, e) {
            t3.exports = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            };
        },
        function(t4, e3) {
            t4.exports = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            };
        },
        function(t5, e4) {
            function n2(t, e) {
                for(var n = 0; n < e.length; n++){
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                }
            }
            t5.exports = function(t, e, o) {
                return e && n2(t.prototype, e), o && n2(t, o), t;
            };
        },
        function(t6, e5) {
            function n(e) {
                return t6.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                }, n(e);
            }
            t6.exports = n;
        },
        function(t7, e6, n) {
            var o = n(110);
            t7.exports = function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && o(t, e);
            };
        },
        function(t8, e7, n) {
            var o = n(80), r = n(149);
            t8.exports = function(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? r(t) : e;
            };
        },
        function(t9, e8, n3) {
            var o1, r1, i1;
            "undefined" != typeof globalThis || "undefined", r1 = [
                e8,
                n3(23),
                n3(370),
                n3(24),
                n3(398),
                n3(15)
            ], void 0 === (i1 = "function" == typeof (o1 = function(t10, e9, o2, r2, i2, a1) {
                var s1, l1 = n3(1);
                function c1(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log", o = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";
                    if ("console" in window && window.console[n]) {
                        var i = [
                            "info",
                            "log",
                            "warn",
                            "error"
                        ].includes(n), a = [];
                        switch(c1.logLevel){
                            case s1.ERROR:
                                if ("error" !== n) return;
                                break;
                            case s1.WARN:
                                if (![
                                    "error",
                                    "warn"
                                ].includes(n)) return;
                                break;
                            case s1.INFO:
                                if (!i || t) return;
                        }
                        o && a.push(o);
                        var l = "Editor.js ".concat("2.22.2"), u = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                        t && (i ? (a.unshift(u, r), e = "%c".concat(l, "%c ").concat(e)) : e = "( ".concat(l, " )").concat(e));
                        try {
                            if (i) {
                                if (o) {
                                    var f;
                                    (f = console)[n].apply(f, [
                                        "".concat(e, " %o")
                                    ].concat(a));
                                } else {
                                    var d;
                                    (d = console)[n].apply(d, [
                                        e
                                    ].concat(a));
                                }
                            } else console[n](e);
                        } catch (t) {
                        }
                    }
                }
                Object.defineProperty(t10, "__esModule", {
                    value: !0
                }), t10.setLogLevel = function(t) {
                    c1.logLevel = t;
                }, t10.typeOf = d1, t10.isFunction = p, t10.isObject = h, t10.isString = function(t) {
                    return "string" === d1(t);
                }, t10.isBoolean = function(t) {
                    return "boolean" === d1(t);
                }, t10.isNumber = function(t) {
                    return "number" === d1(t);
                }, t10.isUndefined = v, t10.isClass = function(t) {
                    return p(t) && /^\s*class\s+/.test(t.toString());
                }, t10.isEmpty = function(t) {
                    return !t || 0 === Object.keys(t).length && t.constructor === Object;
                }, t10.isPromise = function(t) {
                    return Promise.resolve(t) === t;
                }, t10.isPrintableKey = function(t) {
                    return t > 47 && t < 58 || 32 === t || 13 === t || 229 === t || t > 64 && t < 91 || t > 95 && t < 112 || t > 185 && t < 193 || t > 218 && t < 223;
                }, t10.sequence = function(t) {
                    return g.apply(this, arguments);
                }, t10.array = function(t) {
                    return Array.prototype.slice.call(t);
                }, t10.delay = function(t, e) {
                    return function() {
                        var n = this, o = arguments;
                        window.setTimeout(function() {
                            return t.apply(n, o);
                        }, e);
                    };
                }, t10.getFileExtension = function(t) {
                    return t.name.split(".").pop();
                }, t10.isValidMimeType = function(t) {
                    return /^[-\w]+\/([-+\w]+|\*)$/.test(t);
                }, t10.debounce = function(t, e, n) {
                    var o, r = this;
                    return function() {
                        for(var i = arguments.length, a = new Array(i), s = 0; s < i; s++)a[s] = arguments[s];
                        var l = r, c = function() {
                            o = null, n || t.apply(l, a);
                        }, u = n && !o;
                        window.clearTimeout(o), o = window.setTimeout(c, e), u && t.apply(l, a);
                    };
                }, t10.copyTextToClipboard = function(t) {
                    var e = a1.default.make("div", "codex-editor-clipboard", {
                        innerHTML: t
                    });
                    document.body.appendChild(e);
                    var n = window.getSelection(), o = document.createRange();
                    o.selectNode(e), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
                }, t10.getUserOS = y, t10.capitalize = function(t) {
                    return t[0].toUpperCase() + t.slice(1);
                }, t10.deepMerge = function t(e) {
                    for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i];
                    if (!r.length) return e;
                    var a = r.shift();
                    if (h(e) && h(a)) for(var s in a)h(a[s]) ? (e[s] || Object.assign(e, (0, o2.default)({
                    }, s, {
                    })), t(e[s], a[s])) : Object.assign(e, (0, o2.default)({
                    }, s, a[s]));
                    return t.apply(void 0, [
                        e
                    ].concat(r));
                }, t10.beautifyShortcut = function(t) {
                    var e = y();
                    return t = t.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), t = e.mac ? t.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : t.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
                }, t10.getValidUrl = function(t) {
                    try {
                        return new URL(t).href;
                    } catch (t11) {
                    }
                    return "//" === t.substring(0, 2) ? window.location.protocol + t : window.location.origin + t;
                }, t10.generateBlockId = function() {
                    return (0, i2.nanoid)(10);
                }, t10.openTab = function(t) {
                    window.open(t, "_blank");
                }, t10.generateId = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "".concat(t).concat(Math.floor(100000000 * Math.random()).toString(16));
                }, t10.deprecationAssert = function(t, e, n) {
                    var o = "«".concat(e, "» is deprecated and will be removed in the next major release. Please use the «").concat(n, "» instead.");
                    t && f1(o, "warn");
                }, t10.cacheable = function(t12, e10, n4) {
                    var o = n4.value ? "value" : "get", r = n4[o], i = "#".concat(e10, "Cache");
                    if (n4[o] = function() {
                        if (void 0 === this[i]) {
                            for(var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n];
                            this[i] = r.apply.apply(r, [
                                this
                            ].concat(e));
                        }
                        return this[i];
                    }, "get" === o && n4.set) {
                        var a = n4.set;
                        n4.set = function(e) {
                            delete t12[i], a.apply(this, e);
                        };
                    }
                    return n4;
                }, t10.isTouchSupported = t10.logLabeled = t10.log = t10.mouseButtons = t10.keyCodes = t10.LogLevels = void 0, e9 = l1(e9), o2 = l1(o2), r2 = l1(r2), a1 = l1(a1), t10.LogLevels = s1, (function(t) {
                    t.VERBOSE = "VERBOSE", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR";
                })(s1 || (t10.LogLevels = s1 = {
                })), t10.keyCodes = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    DOWN: 40,
                    RIGHT: 39,
                    DELETE: 46,
                    META: 91
                }, t10.mouseButtons = {
                    LEFT: 0,
                    WHEEL: 1,
                    RIGHT: 2,
                    BACKWARD: 3,
                    FORWARD: 4
                }, c1.logLevel = s1.VERBOSE;
                var u1 = c1.bind(window, !1);
                t10.log = u1;
                var f1 = c1.bind(window, !0);
                function d1(t) {
                    return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                }
                function p(t) {
                    return "function" === d1(t);
                }
                function h(t) {
                    return "object" === d1(t);
                }
                function v(t) {
                    return "undefined" === d1(t);
                }
                function g() {
                    return (g = (0, r2.default)(e9.default.mark(function t13(n5) {
                        var o3, i, a, s, l = arguments;
                        return e9.default.wrap(function(t14) {
                            for(;;)switch(t14.prev = t14.next){
                                case 0:
                                    return s = function() {
                                        return (s = (0, r2.default)(e9.default.mark(function t15(n, o, r) {
                                            return e9.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, n.function(n.data);
                                                    case 3:
                                                        return t.next = 5, o(v(n.data) ? {
                                                        } : n.data);
                                                    case 5:
                                                        t.next = 10;
                                                        break;
                                                    case 7:
                                                        t.prev = 7, t.t0 = t.catch(0), r(v(n.data) ? {
                                                        } : n.data);
                                                    case 10:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t15, null, [
                                                [
                                                    0,
                                                    7
                                                ]
                                            ]);
                                        }))).apply(this, arguments);
                                    }, a = function(t, e, n) {
                                        return s.apply(this, arguments);
                                    }, o3 = l.length > 1 && void 0 !== l[1] ? l[1] : function() {
                                    }, i = l.length > 2 && void 0 !== l[2] ? l[2] : function() {
                                    }, t14.abrupt("return", n5.reduce(function() {
                                        var t16 = (0, r2.default)(e9.default.mark(function t17(n, r) {
                                            return e9.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.next = 2, n;
                                                    case 2:
                                                        return t.abrupt("return", a(r, o3, i));
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t17);
                                        }));
                                        return function(e, n) {
                                            return t16.apply(this, arguments);
                                        };
                                    }(), Promise.resolve()));
                                case 5:
                                case "end":
                                    return t14.stop();
                            }
                        }, t13);
                    }))).apply(this, arguments);
                }
                function y() {
                    var t18 = {
                        win: !1,
                        mac: !1,
                        x11: !1,
                        linux: !1
                    }, e = Object.keys(t18).find(function(t) {
                        return -1 !== navigator.appVersion.toLowerCase().indexOf(t);
                    });
                    return e ? (t18[e] = !0, t18) : t18;
                }
                t10.logLabeled = f1;
                var b = "ontouchstart" in document.documentElement;
                t10.isTouchSupported = b;
            }) ? o1.apply(e8, r1) : o1) || (t9.exports = i1);
        },
        function(t19, e11, n6) {
            var o = n6(80);
            function r() {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap;
                return r = function() {
                    return t;
                }, t;
            }
            t19.exports = function(t) {
                if (t && t.__esModule) return t;
                if (null === t || "object" !== o(t) && "function" != typeof t) return {
                    default: t
                };
                var e = r();
                if (e && e.has(t)) return e.get(t);
                var n = {
                }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var a in t)if (Object.prototype.hasOwnProperty.call(t, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
                }
                return n.default = t, e && e.set(t, n), n;
            };
        },
        function(t20, e12, n7) {
            var o4, r3, i3;
            "undefined" != typeof globalThis || "undefined", r3 = [
                e12,
                n7(2),
                n7(3),
                n7(375)
            ], void 0 === (i3 = "function" == typeof (o4 = function(o5, r4, i4, a2) {
                var s = n7(1);
                function l(t21) {
                    if ("undefined" == typeof Symbol || null == t21[Symbol.iterator]) {
                        if (Array.isArray(t21) || (t21 = (function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return c(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                            }
                        })(t21))) {
                            var e13 = 0, n8 = function() {
                            };
                            return {
                                s: n8,
                                n: function() {
                                    return e13 >= t21.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t21[e13++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: n8
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o, r, i = !0, a = !1;
                    return {
                        s: function() {
                            o = t21[Symbol.iterator]();
                        },
                        n: function() {
                            var t = o.next();
                            return i = t.done, t;
                        },
                        e: function(t) {
                            a = !0, r = t;
                        },
                        f: function() {
                            try {
                                i || null == o.return || o.return();
                            } finally{
                                if (a) throw r;
                            }
                        }
                    };
                }
                function c(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                    return o;
                }
                Object.defineProperty(o5, "__esModule", {
                    value: !0
                }), o5.default = void 0, r4 = s(r4), i4 = s(i4), a2 = s(a2);
                var u = function() {
                    function t22(e15) {
                        var n = this, o6 = e15.config, i = e15.eventsDispatcher;
                        if ((0, r4.default)(this, t22), this.nodes = {
                        }, this.listeners = new a2.default, this.readOnlyMutableListeners = {
                            on: function(t, e, o) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                n.mutableListenerIds.push(n.listeners.on(t, e, o, r));
                            },
                            clearAll: function() {
                                var t, e = l(n.mutableListenerIds);
                                try {
                                    for(e.s(); !(t = e.n()).done;){
                                        var o = t.value;
                                        n.listeners.offById(o);
                                    }
                                } catch (t23) {
                                    e.e(t23);
                                } finally{
                                    e.f();
                                }
                                n.mutableListenerIds = [];
                            }
                        }, this.mutableListenerIds = [], (this instanceof t22 ? this.constructor : void 0) === t22) throw new TypeError("Constructors for abstract class Module are not allowed.");
                        this.config = o6, this.eventsDispatcher = i;
                    }
                    return (0, i4.default)(t22, [
                        {
                            key: "removeAllNodes",
                            value: function() {
                                for(var t in this.nodes){
                                    var e = this.nodes[t];
                                    e instanceof HTMLElement && e.remove();
                                }
                            }
                        },
                        {
                            key: "state",
                            set: function(t) {
                                this.Editor = t;
                            }
                        },
                        {
                            key: "isRtl",
                            get: function() {
                                return "rtl" === this.config.i18n.direction;
                            }
                        }
                    ]), t22;
                }();
                o5.default = u, u.displayName = "Module", t20.exports = e12.default;
            }) ? o4.apply(e12, r3) : o4) || (t20.exports = i3);
        },
        function(t, e) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n);
        },
        function(t24, e) {
            t24.exports = function(t) {
                try {
                    return !!t();
                } catch (t25) {
                    return !0;
                }
            };
        },
        function(t26, e, n) {
            var o = n(13);
            t26.exports = function(t) {
                if (!o(t)) throw TypeError(t + " is not an object!");
                return t;
            };
        },
        function(t27, e) {
            t27.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t;
            };
        },
        function(t28, e, n) {
            var o = n(68)("wks"), r = n(44), i = n(10).Symbol, a = "function" == typeof i;
            (t28.exports = function(t) {
                return o[t] || (o[t] = a && i[t] || (a ? i : r)("Symbol." + t));
            }).store = o;
        },
        function(t29, e16, n10) {
            var o7, r5, i5;
            "undefined" != typeof globalThis || "undefined", r5 = [
                e16,
                n10(42),
                n10(2),
                n10(3),
                n10(7)
            ], void 0 === (i5 = "function" == typeof (o7 = function(o8, r, i6, a3, s) {
                var l = n10(8), c = n10(1);
                Object.defineProperty(o8, "__esModule", {
                    value: !0
                }), o8.default = void 0, r = c(r), i6 = c(i6), a3 = c(a3), s = l(s);
                var u = function() {
                    function t30() {
                        (0, i6.default)(this, t30);
                    }
                    return (0, a3.default)(t30, null, [
                        {
                            key: "isSingleTag",
                            value: function(t) {
                                return t.tagName && [
                                    "AREA",
                                    "BASE",
                                    "BR",
                                    "COL",
                                    "COMMAND",
                                    "EMBED",
                                    "HR",
                                    "IMG",
                                    "INPUT",
                                    "KEYGEN",
                                    "LINK",
                                    "META",
                                    "PARAM",
                                    "SOURCE",
                                    "TRACK",
                                    "WBR"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "isLineBreakTag",
                            value: function(t) {
                                return t && t.tagName && [
                                    "BR",
                                    "WBR"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "make",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                }, i = document.createElement(t);
                                for(var a in Array.isArray(n) ? (e = i.classList).add.apply(e, (0, r.default)(n)) : n && i.classList.add(n), o)Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
                                return i;
                            }
                        },
                        {
                            key: "text",
                            value: function(t) {
                                return document.createTextNode(t);
                            }
                        },
                        {
                            key: "svg",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14, o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                return o.classList.add("icon", "icon--" + t), o.setAttribute("width", e + "px"), o.setAttribute("height", n + "px"), o.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t, '"></use>'), o;
                            }
                        },
                        {
                            key: "append",
                            value: function(t, e17) {
                                Array.isArray(e17) ? e17.forEach(function(e) {
                                    return t.appendChild(e);
                                }) : t.appendChild(e17);
                            }
                        },
                        {
                            key: "prepend",
                            value: function(t, e18) {
                                Array.isArray(e18) ? (e18 = e18.reverse()).forEach(function(e) {
                                    return t.prepend(e);
                                }) : t.prepend(e18);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                var n = document.createElement("div"), o = t.parentNode;
                                o.insertBefore(n, t), o.insertBefore(t, e), o.insertBefore(e, n), o.removeChild(n);
                            }
                        },
                        {
                            key: "find",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, e = arguments.length > 1 ? arguments[1] : void 0;
                                return t.querySelector(e);
                            }
                        },
                        {
                            key: "get",
                            value: function(t) {
                                return document.getElementById(t);
                            }
                        },
                        {
                            key: "findAll",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, e = arguments.length > 1 ? arguments[1] : void 0;
                                return t.querySelectorAll(e);
                            }
                        },
                        {
                            key: "findAllInputs",
                            value: function(e19) {
                                return s.array(e19.querySelectorAll(t30.allInputsSelector)).reduce(function(e, n) {
                                    return t30.isNativeInput(n) || t30.containsOnlyInlineElements(n) ? [].concat((0, r.default)(e), [
                                        n
                                    ]) : [].concat((0, r.default)(e), (0, r.default)(t30.getDeepestBlockElements(n)));
                                }, []);
                            }
                        },
                        {
                            key: "getDeepestNode",
                            value: function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = n ? "lastChild" : "firstChild", r = n ? "previousSibling" : "nextSibling";
                                if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
                                    var i = e[o];
                                    if (t30.isSingleTag(i) && !t30.isNativeInput(i) && !t30.isLineBreakTag(i)) {
                                        if (i[r]) i = i[r];
                                        else {
                                            if (!i.parentNode[r]) return i.parentNode;
                                            i = i.parentNode[r];
                                        }
                                    }
                                    return this.getDeepestNode(i, n);
                                }
                                return e;
                            }
                        },
                        {
                            key: "isElement",
                            value: function(t) {
                                return !s.isNumber(t) && t && t.nodeType && t.nodeType === Node.ELEMENT_NODE;
                            }
                        },
                        {
                            key: "isFragment",
                            value: function(t) {
                                return !s.isNumber(t) && t && t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                            }
                        },
                        {
                            key: "isContentEditable",
                            value: function(t) {
                                return "true" === t.contentEditable;
                            }
                        },
                        {
                            key: "isNativeInput",
                            value: function(t) {
                                return !(!t || !t.tagName) && [
                                    "INPUT",
                                    "TEXTAREA"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "canSetCaret",
                            value: function(e) {
                                var n = !0;
                                if (t30.isNativeInput(e)) switch(e.type){
                                    case "file":
                                    case "checkbox":
                                    case "radio":
                                    case "hidden":
                                    case "submit":
                                    case "button":
                                    case "image":
                                    case "reset":
                                        n = !1;
                                }
                                else n = t30.isContentEditable(e);
                                return n;
                            }
                        },
                        {
                            key: "isNodeEmpty",
                            value: function(t) {
                                return !(this.isSingleTag(t) && !this.isLineBreakTag(t)) && 0 === (this.isElement(t) && this.isNativeInput(t) ? t.value : t.textContent.replace("​", "")).trim().length;
                            }
                        },
                        {
                            key: "isLeaf",
                            value: function(t) {
                                return !!t && 0 === t.childNodes.length;
                            }
                        },
                        {
                            key: "isEmpty",
                            value: function(t) {
                                t.normalize();
                                for(var e = [
                                    t
                                ]; e.length > 0;)if (t = e.shift()) {
                                    if (this.isLeaf(t) && !this.isNodeEmpty(t)) return !1;
                                    t.childNodes && e.push.apply(e, (0, r.default)(Array.from(t.childNodes)));
                                }
                                return !0;
                            }
                        },
                        {
                            key: "isHTMLString",
                            value: function(e) {
                                var n = t30.make("div");
                                return n.innerHTML = e, n.childElementCount > 0;
                            }
                        },
                        {
                            key: "getContentLength",
                            value: function(e) {
                                return t30.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
                            }
                        },
                        {
                            key: "containsOnlyInlineElements",
                            value: function(e20) {
                                var n11;
                                return s.isString(e20) ? (n11 = document.createElement("div")).innerHTML = e20 : n11 = e20, Array.from(n11.children).every(function e(n) {
                                    return !t30.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(e);
                                });
                            }
                        },
                        {
                            key: "getDeepestBlockElements",
                            value: function(e21) {
                                return t30.containsOnlyInlineElements(e21) ? [
                                    e21
                                ] : Array.from(e21.children).reduce(function(e, n) {
                                    return [].concat((0, r.default)(e), (0, r.default)(t30.getDeepestBlockElements(n)));
                                }, []);
                            }
                        },
                        {
                            key: "getHolder",
                            value: function(t) {
                                return s.isString(t) ? document.getElementById(t) : t;
                            }
                        },
                        {
                            key: "isExtensionNode",
                            value: function(t) {
                                return t && [
                                    "GRAMMARLY-EXTENSION"
                                ].includes(t.nodeName);
                            }
                        },
                        {
                            key: "isAnchor",
                            value: function(t) {
                                return "a" === t.tagName.toLowerCase();
                            }
                        },
                        {
                            key: "allInputsSelector",
                            get: function() {
                                return "[contenteditable=true], textarea, input:not([type]), " + [
                                    "text",
                                    "password",
                                    "email",
                                    "number",
                                    "search",
                                    "tel",
                                    "url"
                                ].map(function(t) {
                                    return 'input[type="'.concat(t, '"]');
                                }).join(", ");
                            }
                        },
                        {
                            key: "blockElements",
                            get: function() {
                                return [
                                    "address",
                                    "article",
                                    "aside",
                                    "blockquote",
                                    "canvas",
                                    "div",
                                    "dl",
                                    "dt",
                                    "fieldset",
                                    "figcaption",
                                    "figure",
                                    "footer",
                                    "form",
                                    "h1",
                                    "h2",
                                    "h3",
                                    "h4",
                                    "h5",
                                    "h6",
                                    "header",
                                    "hgroup",
                                    "hr",
                                    "li",
                                    "main",
                                    "nav",
                                    "noscript",
                                    "ol",
                                    "output",
                                    "p",
                                    "pre",
                                    "ruby",
                                    "section",
                                    "table",
                                    "tr",
                                    "tfoot",
                                    "ul",
                                    "video"
                                ];
                            }
                        }
                    ]), t30;
                }();
                o8.default = u, u.displayName = "Dom", t29.exports = e16.default;
            }) ? o7.apply(e16, r5) : o7) || (t29.exports = i5);
        },
        function(t31, e, n) {
            var o = n(33), r = Math.min;
            t31.exports = function(t) {
                return t > 0 ? r(o(t), 9007199254740991) : 0;
            };
        },
        function(t, e) {
            var n = t.exports = {
                version: "2.6.11"
            };
            "number" == typeof __e && (__e = n);
        },
        function(t, e, n) {
            t.exports = !n(11)(function() {
                return 7 != Object.defineProperty({
                }, "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        function(t32, e22, n12) {
            var o = n12(12), r = n12(113), i = n12(40), a = Object.defineProperty;
            e22.f = n12(18) ? Object.defineProperty : function(t, e, n) {
                if (o(t), e = i(e, !0), o(n), r) try {
                    return a(t, e, n);
                } catch (t33) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t;
            };
        },
        function(t34, e, n) {
            var o = n(38);
            t34.exports = function(t) {
                return Object(o(t));
            };
        },
        function(t35, e23, n13) {
            var o = n13(10), r = n13(27), i = n13(26), a = n13(44)("src"), s2 = n13(191), l = ("" + s2).split("toString");
            n13(17).inspectSource = function(t) {
                return s2.call(t);
            }, (t35.exports = function(t, e, n, s) {
                var c = "function" == typeof n;
                c && (i(n, "name") || r(n, "name", e)), t[e] !== n && (c && (i(n, a) || r(n, a, t[e] ? "" + t[e] : l.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)));
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s2.call(this);
            });
        },
        function(t36, e24, n14) {
            var o9 = n14(0), r6 = n14(11), i = n14(38), a = /"/g, s3 = function(t, e, n, o) {
                var r = String(i(t)), s = "<" + e;
                return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + r + "</" + e + ">";
            };
            t36.exports = function(t, e25) {
                var n = {
                };
                n[t] = e25(s3), o9(o9.P + o9.F * r6(function() {
                    var e = ""[t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3;
                }), "String", n);
            };
        },
        function(t, e, n) {
            t.exports = n(144);
        },
        function(t37, e26) {
            function n15(t, e, n, o, r, i, a) {
                try {
                    var s = t[i](a), l = s.value;
                } catch (t38) {
                    return void n(t38);
                }
                s.done ? e(l) : Promise.resolve(l).then(o, r);
            }
            t37.exports = function(t39) {
                return function() {
                    var e = this, o = arguments;
                    return new Promise(function(r, i) {
                        var a = t39.apply(e, o);
                        function s(t) {
                            n15(a, r, i, s, l, "next", t);
                        }
                        function l(t) {
                            n15(a, r, i, s, l, "throw", t);
                        }
                        s(void 0);
                    });
                };
            };
        },
        function(t40, e27, n16) {
            var o10, r7, i7;
            "undefined" != typeof globalThis || "undefined", r7 = [
                e27,
                n16(2),
                n16(3),
                n16(7),
                n16(15)
            ], void 0 === (i7 = "function" == typeof (o10 = function(o11, r8, i8, a, s) {
                var l = n16(8), c = n16(1);
                Object.defineProperty(o11, "__esModule", {
                    value: !0
                }), o11.default = void 0, r8 = c(r8), i8 = c(i8), a = l(a), s = c(s);
                var u = function() {
                    function t41() {
                        (0, r8.default)(this, t41), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
                    }
                    return (0, i8.default)(t41, [
                        {
                            key: "removeFakeBackground",
                            value: function() {
                                this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
                            }
                        },
                        {
                            key: "setFakeBackground",
                            value: function() {
                                document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                this.savedSelectionRange = t41.range;
                            }
                        },
                        {
                            key: "restore",
                            value: function() {
                                if (this.savedSelectionRange) {
                                    var t = window.getSelection();
                                    t.removeAllRanges(), t.addRange(this.savedSelectionRange);
                                }
                            }
                        },
                        {
                            key: "clearSaved",
                            value: function() {
                                this.savedSelectionRange = null;
                            }
                        },
                        {
                            key: "collapseToEnd",
                            value: function() {
                                var t = window.getSelection(), e = document.createRange();
                                e.selectNodeContents(t.focusNode), e.collapse(!1), t.removeAllRanges(), t.addRange(e);
                            }
                        },
                        {
                            key: "findParentTag",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, o12 = window.getSelection(), r = null;
                                if (!o12 || !o12.anchorNode || !o12.focusNode) return null;
                                var i9 = [
                                    o12.anchorNode,
                                    o12.focusNode
                                ];
                                return i9.forEach(function(o) {
                                    for(var i = n; i > 0 && o.parentNode && (o.tagName !== t || (r = o, e && o.classList && !o.classList.contains(e) && (r = null), !r));)o = o.parentNode, i--;
                                }), r;
                            }
                        },
                        {
                            key: "expandToTag",
                            value: function(t) {
                                var e = window.getSelection();
                                e.removeAllRanges();
                                var n = document.createRange();
                                n.selectNodeContents(t), e.addRange(n);
                            }
                        }
                    ], [
                        {
                            key: "isSelectionAtEditor",
                            value: function(e) {
                                if (!e) return !1;
                                var n = e.anchorNode || e.focusNode;
                                n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                                var o = null;
                                return n && n instanceof Element && (o = n.closest(".".concat(t41.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE;
                            }
                        },
                        {
                            key: "isRangeAtEditor",
                            value: function(e) {
                                if (e) {
                                    var n = e.startContainer;
                                    n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                                    var o = null;
                                    return n && n instanceof Element && (o = n.closest(".".concat(t41.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE;
                                }
                            }
                        },
                        {
                            key: "getRangeFromSelection",
                            value: function(t) {
                                return t && t.rangeCount ? t.getRangeAt(0) : null;
                            }
                        },
                        {
                            key: "get",
                            value: function() {
                                return window.getSelection();
                            }
                        },
                        {
                            key: "setCursor",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = document.createRange(), o = window.getSelection();
                                if (s.default.isNativeInput(t)) {
                                    if (!s.default.canSetCaret(t)) return;
                                    return t.focus(), t.selectionStart = t.selectionEnd = e, t.getBoundingClientRect();
                                }
                                return n.setStart(t, e), n.setEnd(t, e), o.removeAllRanges(), o.addRange(n), n.getBoundingClientRect();
                            }
                        },
                        {
                            key: "addFakeCursor",
                            value: function(e) {
                                var n = t41.range, o = s.default.make("span", "codex-editor__fake-cursor");
                                o.dataset.mutationFree = "true", !n || e && !e.contains(n.startContainer) || (n.collapse(), n.insertNode(o));
                            }
                        },
                        {
                            key: "removeFakeCursor",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body, e = s.default.find(t, ".codex-editor__fake-cursor");
                                e && e.remove();
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    editorWrapper: "codex-editor",
                                    editorZone: "codex-editor__redactor"
                                };
                            }
                        },
                        {
                            key: "anchorNode",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.anchorNode : null;
                            }
                        },
                        {
                            key: "anchorElement",
                            get: function() {
                                var t = window.getSelection();
                                if (!t) return null;
                                var e = t.anchorNode;
                                return e ? s.default.isElement(e) ? e : e.parentElement : null;
                            }
                        },
                        {
                            key: "anchorOffset",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.anchorOffset : null;
                            }
                        },
                        {
                            key: "isCollapsed",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.isCollapsed : null;
                            }
                        },
                        {
                            key: "isAtEditor",
                            get: function() {
                                return this.isSelectionAtEditor(t41.get());
                            }
                        },
                        {
                            key: "isSelectionExists",
                            get: function() {
                                return !!t41.get().anchorNode;
                            }
                        },
                        {
                            key: "range",
                            get: function() {
                                return this.getRangeFromSelection(this.get());
                            }
                        },
                        {
                            key: "rect",
                            get: function() {
                                var t, e = document.selection, n = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                };
                                if (e && "Control" !== e.type) return t = e.createRange(), n.x = t.boundingLeft, n.y = t.boundingTop, n.width = t.boundingWidth, n.height = t.boundingHeight, n;
                                if (!window.getSelection) return a.log("Method window.getSelection is not supported", "warn"), n;
                                if (null === (e = window.getSelection()).rangeCount || isNaN(e.rangeCount)) return a.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;
                                if (0 === e.rangeCount) return n;
                                if ((t = e.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = t.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
                                    var o = document.createElement("span");
                                    if (o.getBoundingClientRect) {
                                        o.appendChild(document.createTextNode("​")), t.insertNode(o), n = o.getBoundingClientRect();
                                        var r = o.parentNode;
                                        r.removeChild(o), r.normalize();
                                    }
                                }
                                return n;
                            }
                        },
                        {
                            key: "text",
                            get: function() {
                                return window.getSelection ? window.getSelection().toString() : "";
                            }
                        }
                    ]), t41;
                }();
                o11.default = u, u.displayName = "SelectionUtils", t40.exports = e27.default;
            }) ? o10.apply(e27, r7) : o10) || (t40.exports = i7);
        },
        function(t42, e28) {
            var n = {
            }.hasOwnProperty;
            t42.exports = function(t, e) {
                return n.call(t, e);
            };
        },
        function(t43, e29, n17) {
            var o = n17(19), r = n17(43);
            t43.exports = n17(18) ? function(t, e, n) {
                return o.f(t, e, r(1, n));
            } : function(t, e, n) {
                return t[e] = n, t;
            };
        },
        function(t44, e, n) {
            var o = n(61), r = n(38);
            t44.exports = function(t) {
                return o(r(t));
            };
        },
        function(t45, e30, n) {
            "use strict";
            var o = n(11);
            t45.exports = function(t, e) {
                return !!t && o(function() {
                    e ? t.call(null, function() {
                    }, 1) : t.call(null);
                });
            };
        },
        function(t46, e31, n) {
            var o = n(360), r = n(361), i = n(145), a = n(362);
            t46.exports = function(t, e) {
                return o(t) || r(t, e) || i(t, e) || a();
            };
        },
        function(t47, e32, n18) {
            var o13 = n18(32);
            t47.exports = function(t, e, n19) {
                if (o13(t), void 0 === e) return t;
                switch(n19){
                    case 1:
                        return function(n) {
                            return t.call(e, n);
                        };
                    case 2:
                        return function(n, o) {
                            return t.call(e, n, o);
                        };
                    case 3:
                        return function(n, o, r) {
                            return t.call(e, n, o, r);
                        };
                }
                return function() {
                    return t.apply(e, arguments);
                };
            };
        },
        function(t48, e) {
            t48.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t;
            };
        },
        function(t49, e) {
            var n = Math.ceil, o = Math.floor;
            t49.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
            };
        },
        function(t50, e33, n) {
            var o = n(62), r = n(43), i = n(28), a = n(40), s = n(26), l = n(113), c = Object.getOwnPropertyDescriptor;
            e33.f = n(18) ? c : function(t, e) {
                if (t = i(t), e = a(e, !0), l) try {
                    return c(t, e);
                } catch (t51) {
                }
                if (s(t, e)) return r(!o.f.call(t, e), t[e]);
            };
        },
        function(t, e34, n20) {
            var o = n20(0), r = n20(17), i = n20(11);
            t.exports = function(t, e) {
                var n = (r.Object || {
                })[t] || Object[t], a = {
                };
                a[t] = e(n), o(o.S + o.F * i(function() {
                    n(1);
                }), "Object", a);
            };
        },
        function(t52, e35, n21) {
            var o = n21(31), r = n21(61), i = n21(20), a = n21(16), s4 = n21(129);
            t52.exports = function(t, e36) {
                var n = 1 == t, l = 2 == t, c = 3 == t, u = 4 == t, f = 6 == t, d = 5 == t || f, p = e36 || s4;
                return function(e, s, h) {
                    for(var v, g, y = i(e), b = r(y), m = o(s, h, 3), k = a(b.length), x = 0, w = n ? p(e, k) : l ? p(e, 0) : void 0; k > x; x++)if ((d || x in b) && (g = m(v = b[x], x, y), t)) {
                        if (n) w[x] = g;
                        else if (g) switch(t){
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return x;
                            case 2:
                                w.push(v);
                        }
                        else if (u) return !1;
                    }
                    return f ? -1 : c || u ? u : w;
                };
            };
        },
        function(t53, e) {
            var n = {
            }.toString;
            t53.exports = function(t) {
                return n.call(t).slice(8, -1);
            };
        },
        function(t54, e) {
            t54.exports = function(t) {
                if (null == t) throw TypeError("Can't call method on  " + t);
                return t;
            };
        },
        function(t55, e37, n22) {
            "use strict";
            if (n22(18)) {
                var o14 = n22(45), r9 = n22(10), i10 = n22(11), a4 = n22(0), s5 = n22(79), l2 = n22(109), c2 = n22(31), u2 = n22(57), f2 = n22(43), d2 = n22(27), p1 = n22(58), h1 = n22(33), v = n22(16), g = n22(140), y1 = n22(47), b1 = n22(40), m1 = n22(26), k = n22(63), x = n22(13), w1 = n22(20), S1 = n22(101), T = n22(48), E = n22(50), B = n22(49).f, C1 = n22(103), _1 = n22(44), O1 = n22(14), I1 = n22(36), M = n22(69), R = n22(64), A = n22(105), N = n22(55), P = n22(72), L = n22(56), D = n22(104), j = n22(131), F = n22(19), U = n22(34), H = F.f, z = U.f, W = r9.RangeError, Y = r9.TypeError, V = r9.Uint8Array, X = Array.prototype, G = l2.ArrayBuffer, K = l2.DataView, Z = I1(0), q = I1(2), J = I1(3), $ = I1(4), Q = I1(5), tt = I1(6), et = M(!0), nt = M(!1), ot = A.values, rt = A.keys, it = A.entries, at = X.lastIndexOf, st = X.reduce, lt = X.reduceRight, ct = X.join, ut = X.sort, ft = X.slice, dt = X.toString, pt = X.toLocaleString, ht = O1("iterator"), vt = O1("toStringTag"), gt = _1("typed_constructor"), yt = _1("def_constructor"), bt = s5.CONSTR, mt = s5.TYPED, kt = s5.VIEW, xt = I1(1, function(t, e) {
                    return Bt(R(t, t[yt]), e);
                }), wt = i10(function() {
                    return 1 === new V(new Uint16Array([
                        1
                    ]).buffer)[0];
                }), St = !!V && !!V.prototype.set && i10(function() {
                    new V(1).set({
                    });
                }), Tt = function(t, e) {
                    var n = h1(t);
                    if (n < 0 || n % e) throw W("Wrong offset!");
                    return n;
                }, Et = function(t) {
                    if (x(t) && mt in t) return t;
                    throw Y(t + " is not a typed array!");
                }, Bt = function(t, e) {
                    if (!x(t) || !(gt in t)) throw Y("It is not a typed array constructor!");
                    return new t(e);
                }, Ct = function(t, e) {
                    return _t(R(t, t[yt]), e);
                }, _t = function(t, e) {
                    for(var n = 0, o = e.length, r = Bt(t, o); o > n;)r[n] = e[n++];
                    return r;
                }, Ot = function(t, e, n) {
                    H(t, e, {
                        get: function() {
                            return this._d[n];
                        }
                    });
                }, It = function(t) {
                    var e, n, o, r, i, a, s = w1(t), l = arguments.length, u = l > 1 ? arguments[1] : void 0, f = void 0 !== u, d = C1(s);
                    if (null != d && !S1(d)) {
                        for(a = d.call(s), o = [], e = 0; !(i = a.next()).done; e++)o.push(i.value);
                        s = o;
                    }
                    for(f && l > 2 && (u = c2(u, arguments[2], 2)), e = 0, n = v(s.length), r = Bt(this, n); n > e; e++)r[e] = f ? u(s[e], e) : s[e];
                    return r;
                }, Mt = function() {
                    for(var t = 0, e = arguments.length, n = Bt(this, e); e > t;)n[t] = arguments[t++];
                    return n;
                }, Rt = !!V && i10(function() {
                    pt.call(new V(1));
                }), At = function() {
                    return pt.apply(Rt ? ft.call(Et(this)) : Et(this), arguments);
                }, Nt = {
                    copyWithin: function(t, e) {
                        return j.call(Et(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    every: function(t) {
                        return $(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    fill: function(t) {
                        return D.apply(Et(this), arguments);
                    },
                    filter: function(t) {
                        return Ct(this, q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    find: function(t) {
                        return Q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    findIndex: function(t) {
                        return tt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    forEach: function(t) {
                        Z(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    indexOf: function(t) {
                        return nt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    includes: function(t) {
                        return et(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    join: function(t) {
                        return ct.apply(Et(this), arguments);
                    },
                    lastIndexOf: function(t) {
                        return at.apply(Et(this), arguments);
                    },
                    map: function(t) {
                        return xt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    reduce: function(t) {
                        return st.apply(Et(this), arguments);
                    },
                    reduceRight: function(t) {
                        return lt.apply(Et(this), arguments);
                    },
                    reverse: function() {
                        for(var t, e = Et(this).length, n = Math.floor(e / 2), o = 0; o < n;)t = this[o], this[o++] = this[--e], this[e] = t;
                        return this;
                    },
                    some: function(t) {
                        return J(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    sort: function(t) {
                        return ut.call(Et(this), t);
                    },
                    subarray: function(t, e) {
                        var n = Et(this), o = n.length, r = y1(t, o);
                        return new (R(n, n[yt]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, v((void 0 === e ? o : y1(e, o)) - r));
                    }
                }, Pt = function(t, e) {
                    return Ct(this, ft.call(Et(this), t, e));
                }, Lt = function(t) {
                    Et(this);
                    var e = Tt(arguments[1], 1), n = this.length, o = w1(t), r = v(o.length), i = 0;
                    if (r + e > n) throw W("Wrong length!");
                    for(; i < r;)this[e + i] = o[i++];
                }, Dt = {
                    entries: function() {
                        return it.call(Et(this));
                    },
                    keys: function() {
                        return rt.call(Et(this));
                    },
                    values: function() {
                        return ot.call(Et(this));
                    }
                }, jt = function(t, e) {
                    return x(t) && t[mt] && "symbol" != typeof e && e in t && String(+e) == String(e);
                }, Ft = function(t, e) {
                    return jt(t, e = b1(e, !0)) ? f2(2, t[e]) : z(t, e);
                }, Ut = function(t, e, n) {
                    return !(jt(t, e = b1(e, !0)) && x(n) && m1(n, "value")) || m1(n, "get") || m1(n, "set") || n.configurable || m1(n, "writable") && !n.writable || m1(n, "enumerable") && !n.enumerable ? H(t, e, n) : (t[e] = n.value, t);
                };
                bt || (U.f = Ft, F.f = Ut), a4(a4.S + a4.F * !bt, "Object", {
                    getOwnPropertyDescriptor: Ft,
                    defineProperty: Ut
                }), i10(function() {
                    dt.call({
                    });
                }) && (dt = pt = function() {
                    return ct.call(this);
                });
                var Ht = p1({
                }, Nt);
                p1(Ht, Dt), d2(Ht, ht, Dt.values), p1(Ht, {
                    slice: Pt,
                    set: Lt,
                    constructor: function() {
                    },
                    toString: dt,
                    toLocaleString: At
                }), Ot(Ht, "buffer", "b"), Ot(Ht, "byteOffset", "o"), Ot(Ht, "byteLength", "l"), Ot(Ht, "length", "e"), H(Ht, vt, {
                    get: function() {
                        return this[mt];
                    }
                }), t55.exports = function(t56, e, n23, l4) {
                    var c = t56 + ((l4 = !!l4) ? "Clamped" : "") + "Array", f4 = "get" + t56, p3 = "set" + t56, h = r9[c], y3 = h || {
                    }, b = h && E(h), m = !h || !s5.ABV, w = {
                    }, S = h && h.prototype, C = function(t57, n24) {
                        H(t57, n24, {
                            get: function() {
                                return (function(t, n) {
                                    var o = t._d;
                                    return o.v[f4](n * e + o.o, wt);
                                })(this, n24);
                            },
                            set: function(t58) {
                                return (function(t, n, o) {
                                    var r = t._d;
                                    l4 && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.v[p3](n * e + r.o, o, wt);
                                })(this, n24, t58);
                            },
                            enumerable: !0
                        });
                    };
                    m ? (h = n23(function(t, n, o, r) {
                        u2(t, h, c, "_d");
                        var i, a, s, l, f = 0, p = 0;
                        if (x(n)) {
                            if (!(n instanceof G || "ArrayBuffer" == (l = k(n)) || "SharedArrayBuffer" == l)) return mt in n ? _t(h, n) : It.call(h, n);
                            i = n, p = Tt(o, e);
                            var y = n.byteLength;
                            if (void 0 === r) {
                                if (y % e) throw W("Wrong length!");
                                if ((a = y - p) < 0) throw W("Wrong length!");
                            } else if ((a = v(r) * e) + p > y) throw W("Wrong length!");
                            s = a / e;
                        } else s = g(n), i = new G(a = s * e);
                        for(d2(t, "_d", {
                            b: i,
                            o: p,
                            l: a,
                            e: s,
                            v: new K(i)
                        }); f < s;)C(t, f++);
                    }), S = h.prototype = T(Ht), d2(S, "constructor", h)) : i10(function() {
                        h(1);
                    }) && i10(function() {
                        new h(-1);
                    }) && P(function(t) {
                        new h, new h(null), new h(1.5), new h(t);
                    }, !0) || (h = n23(function(t, n, o, r) {
                        var i;
                        return u2(t, h, c), x(n) ? n instanceof G || "ArrayBuffer" == (i = k(n)) || "SharedArrayBuffer" == i ? void 0 !== r ? new y3(n, Tt(o, e), r) : void 0 !== o ? new y3(n, Tt(o, e)) : new y3(n) : mt in n ? _t(h, n) : It.call(h, n) : new y3(g(n));
                    }), Z(b !== Function.prototype ? B(y3).concat(B(b)) : B(y3), function(t) {
                        t in h || d2(h, t, y3[t]);
                    }), h.prototype = S, o14 || (S.constructor = h));
                    var _ = S[ht], O = !!_ && ("values" == _.name || null == _.name), I = Dt.values;
                    d2(h, gt, !0), d2(S, mt, c), d2(S, kt, !0), d2(S, yt, h), (l4 ? new h(1)[vt] == c : vt in S) || H(S, vt, {
                        get: function() {
                            return c;
                        }
                    }), w[c] = h, a4(a4.G + a4.W + a4.F * (h != y3), w), a4(a4.S, c, {
                        BYTES_PER_ELEMENT: e
                    }), a4(a4.S + a4.F * i10(function() {
                        y3.of.call(h, 1);
                    }), c, {
                        from: It,
                        of: Mt
                    }), "BYTES_PER_ELEMENT" in S || d2(S, "BYTES_PER_ELEMENT", e), a4(a4.P, c, Nt), L(c), a4(a4.P + a4.F * St, c, {
                        set: Lt
                    }), a4(a4.P + a4.F * !O, c, Dt), o14 || S.toString == dt || (S.toString = dt), a4(a4.P + a4.F * i10(function() {
                        new h(1).slice();
                    }), c, {
                        slice: Pt
                    }), a4(a4.P + a4.F * (i10(function() {
                        return [
                            1,
                            2
                        ].toLocaleString() != new h([
                            1,
                            2
                        ]).toLocaleString();
                    }) || !i10(function() {
                        S.toLocaleString.call([
                            1,
                            2
                        ]);
                    })), c, {
                        toLocaleString: At
                    }), N[c] = O ? _ : I, o14 || O || d2(S, ht, I);
                };
            } else t55.exports = function() {
            };
        },
        function(t59, e38, n25) {
            var o = n25(13);
            t59.exports = function(t, e) {
                if (!o(t)) return t;
                var n, r;
                if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
                if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
                if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(t60, e39, n) {
            var o = n(44)("meta"), r = n(13), i = n(26), a = n(19).f, s = 0, l = Object.isExtensible || function() {
                return !0;
            }, c = !n(11)(function() {
                return l(Object.preventExtensions({
                }));
            }), u = function(t) {
                a(t, o, {
                    value: {
                        i: "O" + ++s,
                        w: {
                        }
                    }
                });
            }, f = t60.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, o)) {
                        if (!l(t)) return "F";
                        if (!e) return "E";
                        u(t);
                    }
                    return t[o].i;
                },
                getWeak: function(t, e) {
                    if (!i(t, o)) {
                        if (!l(t)) return !0;
                        if (!e) return !1;
                        u(t);
                    }
                    return t[o].w;
                },
                onFreeze: function(t) {
                    return c && f.NEED && l(t) && !i(t, o) && u(t), t;
                }
            };
        },
        function(t61, e, n) {
            var o = n(367), r = n(368), i = n(145), a = n(369);
            t61.exports = function(t) {
                return o(t) || r(t) || i(t) || a();
            };
        },
        function(t62, e40) {
            t62.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                };
            };
        },
        function(t63, e) {
            var n = 0, o = Math.random();
            t63.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36));
            };
        },
        function(t, e) {
            t.exports = !1;
        },
        function(t64, e, n) {
            var o = n(115), r = n(88);
            t64.exports = Object.keys || function(t) {
                return o(t, r);
            };
        },
        function(t65, e41, n) {
            var o = n(33), r = Math.max, i = Math.min;
            t65.exports = function(t, e) {
                return (t = o(t)) < 0 ? r(t + e, 0) : i(t, e);
            };
        },
        function(t66, e42, n26) {
            var o16 = n26(12), r = n26(116), i = n26(88), a = n26(87)("IE_PROTO"), s = function() {
            }, l = function() {
                var t, e = n26(85)("iframe"), o = i.length;
                for(e.style.display = "none", n26(89).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; o--;)delete l.prototype[i[o]];
                return l();
            };
            t66.exports = Object.create || function(t, e) {
                var n;
                return null !== t ? (s.prototype = o16(t), n = new s, s.prototype = null, n[a] = t) : n = l(), void 0 === e ? n : r(n, e);
            };
        },
        function(t67, e, n) {
            var o = n(115), r = n(88).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return o(t, r);
            };
        },
        function(t68, e, n) {
            var o = n(26), r = n(20), i = n(87)("IE_PROTO"), a = Object.prototype;
            t68.exports = Object.getPrototypeOf || function(t) {
                return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
            };
        },
        function(t, e, n) {
            var o = n(14)("unscopables"), r = Array.prototype;
            null == r[o] && n(27)(r, o, {
            }), t.exports = function(t) {
                r[o][t] = !0;
            };
        },
        function(t69, e43, n) {
            var o = n(13);
            t69.exports = function(t, e) {
                if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                return t;
            };
        },
        function(t70, e44, n27) {
            var o = n27(19).f, r = n27(26), i = n27(14)("toStringTag");
            t70.exports = function(t, e, n) {
                t && !r(t = n ? t : t.prototype, i) && o(t, i, {
                    configurable: !0,
                    value: e
                });
            };
        },
        function(t71, e45, n28) {
            var o = n28(0), r11 = n28(38), i = n28(11), a = n28(91), s7 = "[" + a + "]", l5 = RegExp("^" + s7 + s7 + "*"), c = RegExp(s7 + s7 + "*$"), u = function(t, e, n) {
                var r = {
                }, s = i(function() {
                    return !!a[t]() || "​" != "​"[t]();
                }), l = r[t] = s ? e(f) : a[t];
                n && (r[n] = l), o(o.P + o.F * s, "String", r);
            }, f = u.trim = function(t, e) {
                return t = String(r11(t)), 1 & e && (t = t.replace(l5, "")), 2 & e && (t = t.replace(c, "")), t;
            };
            t71.exports = u;
        },
        function(t, e) {
            t.exports = {
            };
        },
        function(t, e46, n) {
            "use strict";
            var o = n(10), r = n(19), i = n(18), a = n(14)("species");
            t.exports = function(t) {
                var e = o[t];
                i && e && !e[a] && r.f(e, a, {
                    configurable: !0,
                    get: function() {
                        return this;
                    }
                });
            };
        },
        function(t72, e47) {
            t72.exports = function(t, e, n, o) {
                if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
                return t;
            };
        },
        function(t73, e48, n29) {
            var o = n29(21);
            t73.exports = function(t, e, n) {
                for(var r in e)o(t, r, e[r], n);
                return t;
            };
        },
        function(t74, e49, n30) {
            var o17, r12, i12;
            "undefined" != typeof globalThis || "undefined", r12 = [
                e49,
                n30(2),
                n30(3),
                n30(147)
            ], void 0 === (i12 = "function" == typeof (o17 = function(o18, r, i, a) {
                var s = n30(1);
                Object.defineProperty(o18, "__esModule", {
                    value: !0
                }), o18.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t75() {
                        (0, r.default)(this, t75);
                    }
                    return (0, i.default)(t75, null, [
                        {
                            key: "ui",
                            value: function(e, n) {
                                return t75._t(e, n);
                            }
                        },
                        {
                            key: "t",
                            value: function(e, n) {
                                return t75._t(e, n);
                            }
                        },
                        {
                            key: "setDictionary",
                            value: function(e) {
                                t75.currentDictionary = e;
                            }
                        },
                        {
                            key: "_t",
                            value: function(e, n) {
                                var o = t75.getNamespace(e);
                                return o && o[n] ? o[n] : n;
                            }
                        },
                        {
                            key: "getNamespace",
                            value: function(e) {
                                return e.split(".").reduce(function(t, e) {
                                    return t && Object.keys(t).length ? t[e] : {
                                    };
                                }, t75.currentDictionary);
                            }
                        }
                    ]), t75;
                }();
                o18.default = l, l.displayName = "I18n", l.currentDictionary = a.default, t74.exports = e49.default;
            }) ? o17.apply(e49, r12) : o17) || (t74.exports = i12);
        },
        function(t76, e50, n31) {
            var o19, r13, i13;
            "undefined" != typeof globalThis || "undefined", r13 = [
                e50,
                n31(2),
                n31(3),
                n31(380),
                n31(7)
            ], void 0 === (i13 = "function" == typeof (o19 = function(o, r, i, a, s) {
                var l = n31(8), c = n31(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = l(s);
                var u = function() {
                    function t77(e51) {
                        var n = this;
                        (0, r.default)(this, t77), this.iterator = null, this.activated = !1, this.allowArrows = !0, this.onKeyDown = function(e) {
                            if (n.isEventReadyForHandling(e)) switch(t77.usedKeys.includes(e.keyCode) && e.preventDefault(), e.keyCode){
                                case s.keyCodes.TAB:
                                    n.handleTabPress(e);
                                    break;
                                case s.keyCodes.LEFT:
                                case s.keyCodes.UP:
                                    n.flipLeft();
                                    break;
                                case s.keyCodes.RIGHT:
                                case s.keyCodes.DOWN:
                                    n.flipRight();
                                    break;
                                case s.keyCodes.ENTER:
                                    n.handleEnterPress(e);
                            }
                        }, this.allowArrows = !s.isBoolean(e51.allowArrows) || e51.allowArrows, this.iterator = new a.default(e51.items, e51.focusedItemClass), this.activateCallback = e51.activateCallback;
                    }
                    return (0, i.default)(t77, [
                        {
                            key: "activate",
                            value: function(t) {
                                this.activated = !0, t && this.iterator.setItems(t), document.addEventListener("keydown", this.onKeyDown);
                            }
                        },
                        {
                            key: "deactivate",
                            value: function() {
                                this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
                            }
                        },
                        {
                            key: "focusFirst",
                            value: function() {
                                this.dropCursor(), this.flipRight();
                            }
                        },
                        {
                            key: "flipLeft",
                            value: function() {
                                this.iterator.previous();
                            }
                        },
                        {
                            key: "flipRight",
                            value: function() {
                                this.iterator.next();
                            }
                        },
                        {
                            key: "dropCursor",
                            value: function() {
                                this.iterator.dropCursor();
                            }
                        },
                        {
                            key: "isEventReadyForHandling",
                            value: function(t) {
                                var e = [
                                    s.keyCodes.TAB,
                                    s.keyCodes.ENTER
                                ], n = this.iterator.currentItem == document.activeElement;
                                return this.allowArrows && !n && e.push(s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.UP, s.keyCodes.DOWN), this.activated && -1 !== e.indexOf(t.keyCode);
                            }
                        },
                        {
                            key: "handleTabPress",
                            value: function(t) {
                                switch(t.shiftKey ? a.default.directions.LEFT : a.default.directions.RIGHT){
                                    case a.default.directions.RIGHT:
                                        this.flipRight();
                                        break;
                                    case a.default.directions.LEFT:
                                        this.flipLeft();
                                }
                            }
                        },
                        {
                            key: "handleEnterPress",
                            value: function(t) {
                                this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), s.isFunction(this.activateCallback) && this.activateCallback(this.iterator.currentItem), t.preventDefault(), t.stopPropagation());
                            }
                        },
                        {
                            key: "currentItem",
                            get: function() {
                                return this.iterator.currentItem;
                            }
                        }
                    ], [
                        {
                            key: "usedKeys",
                            get: function() {
                                return [
                                    s.keyCodes.TAB,
                                    s.keyCodes.LEFT,
                                    s.keyCodes.RIGHT,
                                    s.keyCodes.ENTER,
                                    s.keyCodes.UP,
                                    s.keyCodes.DOWN
                                ];
                            }
                        }
                    ]), t77;
                }();
                o.default = u, u.displayName = "Flipper", t76.exports = e50.default;
            }) ? o19.apply(e50, r13) : o19) || (t76.exports = i13);
        },
        function(t78, e, n) {
            var o = n(37);
            t78.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == o(t) ? t.split("") : Object(t);
            };
        },
        function(t, e) {
            e.f = ({
            }).propertyIsEnumerable;
        },
        function(t79, e52, n32) {
            var o = n32(37), r = n32(14)("toStringTag"), i = "Arguments" == o(function() {
                return arguments;
            }());
            t79.exports = function(t80) {
                var e, n, a;
                return void 0 === t80 ? "Undefined" : null === t80 ? "Null" : "string" == typeof (n = function(t, e) {
                    try {
                        return t[e];
                    } catch (t81) {
                    }
                }(e = Object(t80), r)) ? n : i ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a;
            };
        },
        function(t82, e53, n33) {
            var o = n33(12), r = n33(32), i = n33(14)("species");
            t82.exports = function(t, e) {
                var n, a = o(t).constructor;
                return void 0 === a || null == (n = o(a)[i]) ? e : r(n);
            };
        },
        function(t83, e54, n34) {
            var o20, r14, i14;
            "undefined" != typeof globalThis || "undefined", r14 = [
                e54,
                n34(7),
                n34(378)
            ], void 0 === (i14 = "function" == typeof (o20 = function(t84, e55, o21) {
                var r15 = n34(1), i15 = n34(8);
                function a6(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    }, n = {
                        tags: e
                    }, r = new o21.default(n);
                    return r.clean(t);
                }
                function s(t85, n35) {
                    var o22, r16, i16;
                    return Array.isArray(t85) ? (i16 = n35, t85.map(function(t) {
                        return s(t, i16);
                    })) : e55.isObject(t85) ? (function(t, n) {
                        var o, r = {
                        };
                        for(var i in t)if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var a = t[i], l = (o = n[i], e55.isObject(o) || e55.isBoolean(o) || e55.isFunction(o) ? n[i] : n);
                            r[i] = s(a, l);
                        }
                        return r;
                    })(t85, n35) : e55.isString(t85) ? (o22 = t85, r16 = n35, e55.isObject(r16) ? a6(o22, r16) : !1 === r16 ? a6(o22, {
                    }) : o22) : t85;
                }
                Object.defineProperty(t84, "__esModule", {
                    value: !0
                }), t84.sanitizeBlocks = function(t86, n) {
                    return t86.map(function(t) {
                        var o = e55.isFunction(n) ? n(t.tool) : n;
                        return e55.isEmpty(o) || (t.data = s(t.data, o)), t;
                    });
                }, t84.clean = a6, e55 = i15(e55), o21 = r15(o21);
            }) ? o20.apply(e54, r14) : o20) || (t83.exports = i14);
        },
        function(t87, e56, n36) {
            var o23, r17, i17;
            "undefined" != typeof globalThis || "undefined", r17 = [
                e56,
                n36(30),
                n36(23),
                n36(24),
                n36(42),
                n36(2),
                n36(3),
                n36(149),
                n36(168),
                n36(5),
                n36(6),
                n36(4),
                n36(15),
                n36(7),
                n36(111),
                n36(25),
                n36(151)
            ], void 0 === (i17 = "function" == typeof (o23 = function(t88, e57, o24, r18, i18, a7, s8, l6, c4, u4, f5, d, p, h, v, g, y4) {
                var b, m3 = n36(8), k1 = n36(1);
                function x() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(t88, "__esModule", {
                    value: !0
                }), t88.default = t88.BlockToolAPI = void 0, e57 = k1(e57), o24 = k1(o24), r18 = k1(r18), i18 = k1(i18), a7 = k1(a7), s8 = k1(s8), l6 = k1(l6), c4 = k1(c4), u4 = k1(u4), f5 = k1(f5), d = k1(d), p = k1(p), h = m3(h), v = k1(v), g = k1(g), y4 = k1(y4), t88.BlockToolAPI = b, (function(t) {
                    t.APPEND_CALLBACK = "appendCallback", t.RENDERED = "rendered", t.MOVED = "moved", t.UPDATED = "updated", t.REMOVED = "removed", t.ON_PASTE = "onPaste";
                })(b || (t88.BlockToolAPI = b = {
                }));
                var w3 = function(t89) {
                    (0, u4.default)(S, t89);
                    var n37, y, m, k, w = (n37 = S, function() {
                        var t, e = (0, d.default)(n37);
                        if (x()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(e, arguments, o);
                        } else t = e.apply(this, arguments);
                        return (0, f5.default)(this, t);
                    });
                    function S(t90) {
                        var e58, n38 = t90.id, o25 = void 0 === n38 ? h.generateBlockId() : n38, r = t90.data, s = t90.tool, c = t90.api, u = t90.readOnly, f = t90.tunesData;
                        return (0, a7.default)(this, S), (e58 = w.call(this)).cachedInputs = [], e58.tunesInstances = new Map, e58.defaultTunesInstances = new Map, e58.unavailableTunesData = {
                        }, e58.inputIndex = 0, e58.modificationDebounceTimer = 450, e58.didMutated = h.debounce(function(t91) {
                            !t91.some(function(t92) {
                                var e = t92.addedNodes, n = void 0 === e ? [] : e, o = t92.removedNodes;
                                return [].concat((0, i18.default)(Array.from(n)), (0, i18.default)(Array.from(o))).some(function(t) {
                                    return p.default.isElement(t) && "true" === t.dataset.mutationFree;
                                });
                            }) && (e58.cachedInputs = [], e58.updateCurrentInput(), e58.call(b.UPDATED), e58.emit("didMutated", (0, l6.default)(e58)));
                        }, e58.modificationDebounceTimer), e58.handleFocus = function() {
                            e58.cachedInputs = [], e58.updateCurrentInput();
                        }, e58.name = s.name, e58.id = o25, e58.settings = s.settings, e58.config = s.settings.config || {
                        }, e58.api = c, e58.blockAPI = new v.default((0, l6.default)(e58)), e58.mutationObserver = new MutationObserver(e58.didMutated), e58.tool = s, e58.toolInstance = s.create(r, e58.blockAPI, u), e58.tunes = s.tunes, e58.composeTunes(f), e58.holder = e58.compose(), e58;
                    }
                    return (0, s8.default)(S, [
                        {
                            key: "call",
                            value: function(t, e) {
                                if (h.isFunction(this.toolInstance[t])) {
                                    t === b.APPEND_CALLBACK && h.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
                                    try {
                                        this.toolInstance[t].call(this.toolInstance, e);
                                    } catch (e) {
                                        h.log("Error during '".concat(t, "' call: ").concat(e.message), "error");
                                    }
                                }
                            }
                        },
                        {
                            key: "mergeWith",
                            value: (k = (0, r18.default)(o24.default.mark(function t93(e) {
                                return o24.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return t.next = 2, this.toolInstance.merge(e);
                                        case 2:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t93, this);
                            })), function(t) {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "save",
                            value: (m = (0, r18.default)(o24.default.mark(function t94() {
                                var n39, r, a, s, l = this;
                                return o24.default.wrap(function(t95) {
                                    for(;;)switch(t95.prev = t95.next){
                                        case 0:
                                            return t95.next = 2, this.toolInstance.save(this.pluginsContent);
                                        case 2:
                                            return n39 = t95.sent, r = this.unavailableTunesData, [].concat((0, i18.default)(this.tunesInstances.entries()), (0, i18.default)(this.defaultTunesInstances.entries())).forEach(function(t) {
                                                var n = (0, e57.default)(t, 2), o = n[0], i = n[1];
                                                if (h.isFunction(i.save)) try {
                                                    r[o] = i.save();
                                                } catch (t96) {
                                                    h.log("Tune ".concat(i.constructor.name, " save method throws an Error %o"), "warn", t96);
                                                }
                                            }), a = window.performance.now(), t95.abrupt("return", Promise.resolve(n39).then(function(t) {
                                                return s = window.performance.now(), {
                                                    id: l.id,
                                                    tool: l.name,
                                                    data: t,
                                                    tunes: r,
                                                    time: s - a
                                                };
                                            }).catch(function(t) {
                                                h.log("Saving proccess for ".concat(l.name, " tool failed due to the ").concat(t), "log", "red");
                                            }));
                                        case 7:
                                        case "end":
                                            return t95.stop();
                                    }
                                }, t94, this);
                            })), function() {
                                return m.apply(this, arguments);
                            })
                        },
                        {
                            key: "validate",
                            value: (y = (0, r18.default)(o24.default.mark(function t97(e) {
                                var n;
                                return o24.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = !0, !(this.toolInstance.validate instanceof Function)) {
                                                t.next = 5;
                                                break;
                                            }
                                            return t.next = 4, this.toolInstance.validate(e);
                                        case 4:
                                            n = t.sent;
                                        case 5:
                                            return t.abrupt("return", n);
                                        case 6:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t97, this);
                            })), function(t) {
                                return y.apply(this, arguments);
                            })
                        },
                        {
                            key: "renderTunes",
                            value: function() {
                                var t98 = document.createDocumentFragment(), e59 = document.createDocumentFragment();
                                return this.tunesInstances.forEach(function(e) {
                                    p.default.append(t98, e.render());
                                }), this.defaultTunesInstances.forEach(function(t) {
                                    p.default.append(e59, t.render());
                                }), [
                                    t98,
                                    e59
                                ];
                            }
                        },
                        {
                            key: "updateCurrentInput",
                            value: function() {
                                this.currentInput = p.default.isNativeInput(document.activeElement) || !g.default.anchorNode ? document.activeElement : g.default.anchorNode;
                            }
                        },
                        {
                            key: "willSelect",
                            value: function() {
                                this.mutationObserver.observe(this.holder.firstElementChild, {
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !0,
                                    attributes: !0
                                }), this.addInputEvents();
                            }
                        },
                        {
                            key: "willUnselect",
                            value: function() {
                                this.mutationObserver.disconnect(), this.removeInputEvents();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                (0, c4.default)((0, d.default)(S.prototype), "destroy", this).call(this), h.isFunction(this.toolInstance.destroy) && this.toolInstance.destroy();
                            }
                        },
                        {
                            key: "renderSettings",
                            value: function() {
                                if (h.isFunction(this.toolInstance.renderSettings)) return this.toolInstance.renderSettings();
                            }
                        },
                        {
                            key: "compose",
                            value: function() {
                                var t99 = p.default.make("div", S.CSS.wrapper), e60 = p.default.make("div", S.CSS.content), n = this.toolInstance.render();
                                e60.appendChild(n);
                                var o = e60;
                                return [].concat((0, i18.default)(this.tunesInstances.values()), (0, i18.default)(this.defaultTunesInstances.values())).forEach(function(t) {
                                    if (h.isFunction(t.wrap)) try {
                                        o = t.wrap(o);
                                    } catch (e) {
                                        h.log("Tune ".concat(t.constructor.name, " wrap method throws an Error %o"), "warn", e);
                                    }
                                }), t99.appendChild(o), t99;
                            }
                        },
                        {
                            key: "composeTunes",
                            value: function(t100) {
                                var n = this;
                                Array.from(this.tunes.values()).forEach(function(e) {
                                    (e.isInternal ? n.defaultTunesInstances : n.tunesInstances).set(e.name, e.create(t100[e.name], n.blockAPI));
                                }), Object.entries(t100).forEach(function(t) {
                                    var o = (0, e57.default)(t, 2), r = o[0], i = o[1];
                                    n.tunesInstances.has(r) || (n.unavailableTunesData[r] = i);
                                });
                            }
                        },
                        {
                            key: "addInputEvents",
                            value: function() {
                                var t = this;
                                this.inputs.forEach(function(e) {
                                    e.addEventListener("focus", t.handleFocus), p.default.isNativeInput(e) && e.addEventListener("input", t.didMutated);
                                });
                            }
                        },
                        {
                            key: "removeInputEvents",
                            value: function() {
                                var t = this;
                                this.inputs.forEach(function(e) {
                                    e.removeEventListener("focus", t.handleFocus), p.default.isNativeInput(e) && e.removeEventListener("input", t.didMutated);
                                });
                            }
                        },
                        {
                            key: "inputs",
                            get: function() {
                                if (0 !== this.cachedInputs.length) return this.cachedInputs;
                                var t = p.default.findAllInputs(this.holder);
                                return this.inputIndex > t.length - 1 && (this.inputIndex = t.length - 1), this.cachedInputs = t, t;
                            }
                        },
                        {
                            key: "currentInput",
                            get: function() {
                                return this.inputs[this.inputIndex];
                            },
                            set: function(t) {
                                var e61 = this.inputs.findIndex(function(e) {
                                    return e === t || e.contains(t);
                                });
                                -1 !== e61 && (this.inputIndex = e61);
                            }
                        },
                        {
                            key: "firstInput",
                            get: function() {
                                return this.inputs[0];
                            }
                        },
                        {
                            key: "lastInput",
                            get: function() {
                                var t = this.inputs;
                                return t[t.length - 1];
                            }
                        },
                        {
                            key: "nextInput",
                            get: function() {
                                return this.inputs[this.inputIndex + 1];
                            }
                        },
                        {
                            key: "previousInput",
                            get: function() {
                                return this.inputs[this.inputIndex - 1];
                            }
                        },
                        {
                            key: "data",
                            get: function() {
                                return this.save().then(function(t) {
                                    return t && !h.isEmpty(t.data) ? t.data : {
                                    };
                                });
                            }
                        },
                        {
                            key: "sanitize",
                            get: function() {
                                return this.tool.sanitizeConfig;
                            }
                        },
                        {
                            key: "mergeable",
                            get: function() {
                                return h.isFunction(this.toolInstance.merge);
                            }
                        },
                        {
                            key: "isEmpty",
                            get: function() {
                                var t = p.default.isEmpty(this.pluginsContent), e = !this.hasMedia;
                                return t && e;
                            }
                        },
                        {
                            key: "hasMedia",
                            get: function() {
                                return !!this.holder.querySelector([
                                    "img",
                                    "iframe",
                                    "video",
                                    "audio",
                                    "source",
                                    "input",
                                    "textarea",
                                    "twitterwidget"
                                ].join(","));
                            }
                        },
                        {
                            key: "focused",
                            set: function(t) {
                                this.holder.classList.toggle(S.CSS.focused, t);
                            },
                            get: function() {
                                return this.holder.classList.contains(S.CSS.focused);
                            }
                        },
                        {
                            key: "selected",
                            set: function(t) {
                                t ? (this.holder.classList.add(S.CSS.selected), g.default.addFakeCursor(this.holder)) : (this.holder.classList.remove(S.CSS.selected), g.default.removeFakeCursor(this.holder));
                            },
                            get: function() {
                                return this.holder.classList.contains(S.CSS.selected);
                            }
                        },
                        {
                            key: "stretched",
                            set: function(t) {
                                this.holder.classList.toggle(S.CSS.wrapperStretched, t);
                            },
                            get: function() {
                                return this.holder.classList.contains(S.CSS.wrapperStretched);
                            }
                        },
                        {
                            key: "dropTarget",
                            set: function(t) {
                                this.holder.classList.toggle(S.CSS.dropTarget, t);
                            }
                        },
                        {
                            key: "pluginsContent",
                            get: function() {
                                var t = this.holder.querySelector(".".concat(S.CSS.content));
                                if (t && t.childNodes.length) for(var e = t.childNodes.length - 1; e >= 0; e--){
                                    var n = t.childNodes[e];
                                    if (!p.default.isExtensionNode(n)) return n;
                                }
                                return null;
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "ce-block",
                                    wrapperStretched: "ce-block--stretched",
                                    content: "ce-block__content",
                                    focused: "ce-block--focused",
                                    selected: "ce-block--selected",
                                    dropTarget: "ce-block--drop-target"
                                };
                            }
                        }
                    ]), S;
                }(y4.default);
                t88.default = w3, w3.displayName = "Block";
            }) ? o23.apply(e56, r17) : o23) || (t87.exports = i17);
        },
        function(t101, e62, n40) {
            var o26, r19, i19;
            "undefined" != typeof globalThis || "undefined", r19 = [
                e62,
                n40(2),
                n40(3),
                n40(7)
            ], void 0 === (i19 = "function" == typeof (o26 = function(t102, e, o27, r20) {
                var i20, a8, s9, l7, c5, u5, f = n40(8), d = n40(1);
                Object.defineProperty(t102, "__esModule", {
                    value: !0
                }), t102.default = t102.InternalTuneSettings = t102.InternalInlineToolSettings = t102.InternalBlockToolSettings = t102.CommonInternalSettings = t102.UserSettings = t102.ToolType = void 0, e = d(e), o27 = d(o27), r20 = f(r20), t102.ToolType = i20, (function(t) {
                    t[t.Block = 0] = "Block", t[t.Inline = 1] = "Inline", t[t.Tune = 2] = "Tune";
                })(i20 || (t102.ToolType = i20 = {
                })), t102.UserSettings = a8, (function(t) {
                    t.Shortcut = "shortcut", t.Toolbox = "toolbox", t.EnabledInlineTools = "inlineToolbar", t.EnabledBlockTunes = "tunes", t.Config = "config";
                })(a8 || (t102.UserSettings = a8 = {
                })), t102.CommonInternalSettings = s9, (function(t) {
                    t.Shortcut = "shortcut", t.SanitizeConfig = "sanitize";
                })(s9 || (t102.CommonInternalSettings = s9 = {
                })), t102.InternalBlockToolSettings = l7, (function(t) {
                    t.IsEnabledLineBreaks = "enableLineBreaks", t.Toolbox = "toolbox", t.ConversionConfig = "conversionConfig", t.IsReadOnlySupported = "isReadOnlySupported", t.PasteConfig = "pasteConfig";
                })(l7 || (t102.InternalBlockToolSettings = l7 = {
                })), t102.InternalInlineToolSettings = c5, (function(t) {
                    t.IsInline = "isInline", t.Title = "title";
                })(c5 || (t102.InternalInlineToolSettings = c5 = {
                })), t102.InternalTuneSettings = u5, (function(t) {
                    t.IsTune = "isTune";
                })(u5 || (t102.InternalTuneSettings = u5 = {
                }));
                var p = function() {
                    function t103(n) {
                        var o = n.name, r = n.constructable, i = n.config, a = n.api, s = n.isDefault, l = n.isInternal, c = void 0 !== l && l, u = n.defaultPlaceholder;
                        (0, e.default)(this, t103), this.api = a, this.name = o, this.constructable = r, this.config = i, this.isDefault = s, this.isInternal = c, this.defaultPlaceholder = u;
                    }
                    return (0, o27.default)(t103, [
                        {
                            key: "reset",
                            value: function() {
                                if (r20.isFunction(this.constructable.reset)) return this.constructable.reset();
                            }
                        },
                        {
                            key: "prepare",
                            value: function() {
                                if (r20.isFunction(this.constructable.prepare)) return this.constructable.prepare({
                                    toolName: this.name,
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "isInline",
                            value: function() {
                                return this.type === i20.Inline;
                            }
                        },
                        {
                            key: "isBlock",
                            value: function() {
                                return this.type === i20.Block;
                            }
                        },
                        {
                            key: "isTune",
                            value: function() {
                                return this.type === i20.Tune;
                            }
                        },
                        {
                            key: "settings",
                            get: function() {
                                var t = this.config[a8.Config] || {
                                };
                                return this.isDefault && !("placeholder" in t) && this.defaultPlaceholder && (t.placeholder = this.defaultPlaceholder), t;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                var t = this.constructable[s9.Shortcut];
                                return this.config[a8.Shortcut] || t;
                            }
                        },
                        {
                            key: "sanitizeConfig",
                            get: function() {
                                return this.constructable[s9.SanitizeConfig] || {
                                };
                            }
                        }
                    ]), t103;
                }();
                t102.default = p, p.displayName = "BaseTool";
            }) ? o26.apply(e62, r19) : o26) || (t101.exports = i19);
        },
        function(t, e63, n) {
            var o = n(17), r = n(10), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {
            });
            (t.exports = function(t, e) {
                return i[t] || (i[t] = void 0 !== e ? e : {
                });
            })("versions", []).push({
                version: o.version,
                mode: n(45) ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            });
        },
        function(t104, e64, n41) {
            var o = n41(28), r = n41(16), i = n41(47);
            t104.exports = function(t) {
                return function(e, n, a) {
                    var s, l = o(e), c = r(l.length), u = i(a, c);
                    if (t && n != n) {
                        for(; c > u;)if ((s = l[u++]) != s) return !0;
                    } else for(; c > u; u++)if ((t || u in l) && l[u] === n) return t || u || 0;
                    return !t && -1;
                };
            };
        },
        function(t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        function(t105, e, n) {
            var o = n(37);
            t105.exports = Array.isArray || function(t) {
                return "Array" == o(t);
            };
        },
        function(t107, e65, n42) {
            var o = n42(14)("iterator"), r = !1;
            try {
                var i = [
                    7
                ][o]();
                i.return = function() {
                    r = !0;
                }, Array.from(i, function() {
                    throw 2;
                });
            } catch (t106) {
            }
            t107.exports = function(t, e) {
                if (!e && !r) return !1;
                var n = !1;
                try {
                    var i = [
                        7
                    ], a = i[o]();
                    a.next = function() {
                        return {
                            done: n = !0
                        };
                    }, i[o] = function() {
                        return a;
                    }, t(i);
                } catch (t108) {
                }
                return n;
            };
        },
        function(t109, e66, n) {
            "use strict";
            var o = n(12);
            t109.exports = function() {
                var t = o(this), e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
            };
        },
        function(t110, e67, n43) {
            "use strict";
            var o = n43(63), r = RegExp.prototype.exec;
            t110.exports = function(t, e) {
                var n = t.exec;
                if ("function" == typeof n) {
                    var i = n.call(t, e);
                    if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return i;
                }
                if ("RegExp" !== o(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
                return r.call(t, e);
            };
        },
        function(t111, e68, n44) {
            "use strict";
            n44(133);
            var o28 = n44(21), r21 = n44(27), i = n44(11), a = n44(38), s = n44(14), l = n44(106), c = s("species"), u = !i(function() {
                var t112 = /./;
                return t112.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t;
                }, "7" !== "".replace(t112, "$<a>");
            }), f = function() {
                var t = /(?:)/, e = t.exec;
                t.exec = function() {
                    return e.apply(this, arguments);
                };
                var n = "ab".split(t);
                return 2 === n.length && "a" === n[0] && "b" === n[1];
            }();
            t111.exports = function(t113, e69, n45) {
                var d = s(t113), p = !i(function() {
                    var e = {
                    };
                    return e[d] = function() {
                        return 7;
                    }, 7 != ""[t113](e);
                }), h = p ? !i(function() {
                    var e = !1, n = /a/;
                    return n.exec = function() {
                        return e = !0, null;
                    }, "split" === t113 && (n.constructor = {
                    }, n.constructor[c] = function() {
                        return n;
                    }), n[d](""), !e;
                }) : void 0;
                if (!p || !h || "replace" === t113 && !u || "split" === t113 && !f) {
                    var v = /./[d], g = n45(a, d, ""[t113], function(t, e, n, o, r) {
                        return e.exec === l ? p && !r ? {
                            done: !0,
                            value: v.call(e, n, o)
                        } : {
                            done: !0,
                            value: t.call(n, e, o)
                        } : {
                            done: !1
                        };
                    }), y = g[0], b = g[1];
                    o28(String.prototype, t113, y), r21(RegExp.prototype, d, 2 == e69 ? function(t, e) {
                        return b.call(t, this, e);
                    } : function(t) {
                        return b.call(t, this);
                    });
                }
            };
        },
        function(t114, e70, n46) {
            var o = n46(31), r = n46(128), i = n46(101), a = n46(12), s = n46(16), l = n46(103), c = {
            }, u = {
            };
            (e70 = t114.exports = function(t, e, n, f, d) {
                var p, h, v, g, y = d ? function() {
                    return t;
                } : l(t), b = o(n, f, e ? 2 : 1), m = 0;
                if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                if (i(y)) {
                    for(p = s(t.length); p > m; m++)if ((g = e ? b(a(h = t[m])[0], h[1]) : b(t[m])) === c || g === u) return g;
                } else for(v = y.call(t); !(h = v.next()).done;)if ((g = r(v, b, h.value, e)) === c || g === u) return g;
            }).BREAK = c, e70.RETURN = u;
        },
        function(t, e, n) {
            var o = n(10).navigator;
            t.exports = o && o.userAgent || "";
        },
        function(t115, e71, n47) {
            "use strict";
            var o29 = n47(10), r = n47(0), i = n47(21), a = n47(58), s = n47(41), l = n47(76), c = n47(57), u = n47(13), f = n47(11), d = n47(72), p = n47(53), h = n47(92);
            t115.exports = function(t116, e72, n48, v, g, y) {
                var b = o29[t116], m = b, k = g ? "set" : "add", x = m && m.prototype, w = {
                }, S = function(t117) {
                    var e = x[t117];
                    i(x, t117, "delete" == t117 || "has" == t117 ? function(t) {
                        return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t);
                    } : "get" == t117 ? function(t) {
                        return y && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                    } : "add" == t117 ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this;
                    } : function(t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this;
                    });
                };
                if ("function" == typeof m && (y || x.forEach && !f(function() {
                    (new m).entries().next();
                }))) {
                    var T = new m, E = T[k](y ? {
                    } : -0, 1) != T, B = f(function() {
                        T.has(1);
                    }), C = d(function(t) {
                        new m(t);
                    }), _ = !y && f(function() {
                        for(var t = new m, e = 5; e--;)t[k](e, e);
                        return !t.has(-0);
                    });
                    C || ((m = e72(function(e, n) {
                        c(e, m, t116);
                        var o = h(new b, e, m);
                        return null != n && l(n, g, o[k], o), o;
                    })).prototype = x, x.constructor = m), (B || _) && (S("delete"), S("has"), g && S("get")), (_ || E) && S(k), y && x.clear && delete x.clear;
                } else m = v.getConstructor(e72, t116, g, k), a(m.prototype, n48), s.NEED = !0;
                return p(m, t116), w[t116] = m, r(r.G + r.W + r.F * (m != b), w), y || v.setStrong(m, t116, g), m;
            };
        },
        function(t, e, n) {
            for(var o, r = n(10), i = n(27), a = n(44), s = a("typed_array"), l = a("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(o = r[d[f++]]) ? (i(o.prototype, s, !0), i(o.prototype, l, !0)) : u = !1;
            t.exports = {
                ABV: c,
                CONSTR: u,
                TYPED: s,
                VIEW: l
            };
        },
        function(t118, e73) {
            function n(e) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t118.exports = n = function(t) {
                    return typeof t;
                } : t118.exports = n = function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, n(e);
            }
            t118.exports = n;
        },
        function(t119, e74, n49) {
            var o30, r22, i21;
            "undefined" != typeof globalThis || "undefined", r22 = [
                e74,
                n49(2),
                n49(3),
                n49(5),
                n49(6),
                n49(4),
                n49(9)
            ], void 0 === (i21 = "function" == typeof (o30 = function(o31, r, i, a, s, l, c) {
                var u = n49(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o31, "__esModule", {
                    value: !0
                }), o31.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t120) {
                    (0, a.default)(o32, t120);
                    var e, n50 = (e = o32, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o32() {
                        return (0, r.default)(this, o32), n50.apply(this, arguments);
                    }
                    return (0, i.default)(o32, [
                        {
                            key: "getMethodsForTool",
                            value: function(t) {
                                return Object.assign(this.methods, {
                                    i18n: this.Editor.I18nAPI.getMethodsForTool(t)
                                });
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    blocks: this.Editor.BlocksAPI.methods,
                                    caret: this.Editor.CaretAPI.methods,
                                    events: this.Editor.EventsAPI.methods,
                                    listeners: this.Editor.ListenersAPI.methods,
                                    notifier: this.Editor.NotifierAPI.methods,
                                    sanitizer: this.Editor.SanitizerAPI.methods,
                                    saver: this.Editor.SaverAPI.methods,
                                    selection: this.Editor.SelectionAPI.methods,
                                    styles: this.Editor.StylesAPI.classes,
                                    toolbar: this.Editor.ToolbarAPI.methods,
                                    inlineToolbar: this.Editor.InlineToolbarAPI.methods,
                                    tooltip: this.Editor.TooltipAPI.methods,
                                    i18n: this.Editor.I18nAPI.methods,
                                    readOnly: this.Editor.ReadOnlyAPI.methods
                                };
                            }
                        }
                    ]), o32;
                }((c = u(c)).default);
                o31.default = d, d.displayName = "API", t119.exports = e74.default;
            }) ? o30.apply(e74, r22) : o30) || (t119.exports = i21);
        },
        function(t121, e75, n51) {
            var o33, r23, i22;
            "undefined" != typeof globalThis || "undefined", r23 = [
                e75,
                n51(2),
                n51(3),
                n51(379)
            ], void 0 === (i22 = "function" == typeof (o33 = function(o, r, i, a) {
                var s = n51(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t122() {
                        (0, r.default)(this, t122), this.lib = new a.default;
                    }
                    return (0, i.default)(t122, [
                        {
                            key: "destroy",
                            value: function() {
                                this.lib.destroy();
                            }
                        },
                        {
                            key: "show",
                            value: function(t, e, n) {
                                this.lib.show(t, e, n);
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                this.lib.hide();
                            }
                        },
                        {
                            key: "onHover",
                            value: function(t, e, n) {
                                this.lib.onHover(t, e, n);
                            }
                        }
                    ]), t122;
                }();
                o.default = l, l.displayName = "Tooltip", t121.exports = e75.default;
            }) ? o33.apply(e75, r23) : o33) || (t121.exports = i22);
        },
        function(t123, e76, n52) {
            var o34, r24, i23;
            "undefined" != typeof globalThis || "undefined", r24 = [
                e76,
                n52(2),
                n52(3),
                n52(5),
                n52(6),
                n52(4),
                n52(9),
                n52(15),
                n52(7),
                n52(59),
                n52(84),
                n52(82)
            ], void 0 === (i23 = "function" == typeof (o34 = function(o35, r25, i24, a9, s, l, c, u, f, d, p, h) {
                var v = n52(8), g = n52(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o35, "__esModule", {
                    value: !0
                }), o35.default = void 0, r25 = g(r25), i24 = g(i24), a9 = g(a9), s = g(s), l = g(l), c = g(c), u = g(u), f = v(f), d = g(d), h = g(h);
                var b = function(t124) {
                    (0, a9.default)(o36, t124);
                    var e77, n53 = (e77 = o36, function() {
                        var t, n = (0, l.default)(e77);
                        if (y()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o36(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r25.default)(this, o36), (e = n53.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).tooltip = new h.default, e;
                    }
                    return (0, i24.default)(o36, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? (this.destroy(), this.Editor.Toolbox.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
                            }
                        },
                        {
                            key: "move",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                t && (this.Editor.Toolbox.close(), this.Editor.BlockSettings.close());
                                var e = this.Editor.BlockManager.currentBlock.holder;
                                if (e) {
                                    var n = this.Editor.UI.isMobile, o = e.offsetHeight, r = e.offsetTop;
                                    if (n) r += o;
                                    else {
                                        var i = Math.floor(o / 2);
                                        this.nodes.plusButton.style.transform = "translate3d(0, calc(".concat(i, "px - 50%), 0)"), this.Editor.Toolbox.nodes.toolbox.style.transform = "translate3d(0, calc(".concat(i, "px - 50%), 0)");
                                    }
                                    this.nodes.wrapper.style.transform = "translate3D(0, ".concat(Math.floor(r), "px, 0)");
                                }
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                f.delay(function() {
                                    t.move(n), t.nodes.wrapper.classList.add(t.CSS.toolbarOpened), e ? t.blockActions.show() : t.blockActions.hide();
                                }, 50)();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.Editor.Toolbox.close(), this.Editor.BlockSettings.close();
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = this;
                                this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), [
                                    "content",
                                    "actions"
                                ].forEach(function(e) {
                                    t.nodes[e] = u.default.make("div", t.CSS[e]);
                                }), u.default.append(this.nodes.wrapper, this.nodes.content), u.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), u.default.append(this.nodes.plusButton, u.default.svg("plus", 14, 14)), u.default.append(this.nodes.content, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", function() {
                                    t.plusButtonClicked();
                                }, !1);
                                var e = u.default.make("div");
                                e.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Add"))), e.appendChild(u.default.make("div", this.CSS.plusButtonShortcut, {
                                    textContent: "⇥ Tab"
                                })), this.tooltip.onHover(this.nodes.plusButton, e), this.nodes.blockActionsButtons = u.default.make("div", this.CSS.blockActionsButtons), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
                                var n = u.default.svg("dots", 8, 8);
                                u.default.append(this.nodes.settingsToggler, n), u.default.append(this.nodes.blockActionsButtons, this.nodes.settingsToggler), u.default.append(this.nodes.actions, this.nodes.blockActionsButtons), this.tooltip.onHover(this.nodes.settingsToggler, d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler, "Click to tune"), {
                                    placement: "top"
                                }), u.default.append(this.nodes.content, this.Editor.Toolbox.nodes.toolbox), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
                            }
                        },
                        {
                            key: "plusButtonClicked",
                            value: function() {
                                this.Editor.Toolbox.toggle();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", function(e) {
                                    e.stopPropagation(), t.settingsTogglerClicked();
                                }, !0);
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "settingsTogglerClicked",
                            value: function() {
                                this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open();
                            }
                        },
                        {
                            key: "drawUI",
                            value: function() {
                                this.Editor.BlockSettings.make(), this.Editor.Toolbox.make(), this.make();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAllNodes(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    toolbar: "ce-toolbar",
                                    content: "ce-toolbar__content",
                                    actions: "ce-toolbar__actions",
                                    actionsOpened: "ce-toolbar__actions--opened",
                                    toolbarOpened: "ce-toolbar--opened",
                                    plusButton: "ce-toolbar__plus",
                                    plusButtonShortcut: "ce-toolbar__plus-shortcut",
                                    plusButtonHidden: "ce-toolbar__plus--hidden",
                                    blockActionsButtons: "ce-toolbar__actions-buttons",
                                    settingsToggler: "ce-toolbar__settings-btn"
                                };
                            }
                        },
                        {
                            key: "opened",
                            get: function() {
                                return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
                            }
                        },
                        {
                            key: "plusButton",
                            get: function() {
                                var t = this;
                                return {
                                    hide: function() {
                                        return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden);
                                    },
                                    show: function() {
                                        t.Editor.Toolbox.isEmpty || t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden);
                                    }
                                };
                            }
                        },
                        {
                            key: "blockActions",
                            get: function() {
                                var t = this;
                                return {
                                    hide: function() {
                                        t.nodes.actions.classList.remove(t.CSS.actionsOpened);
                                    },
                                    show: function() {
                                        t.nodes.actions.classList.add(t.CSS.actionsOpened);
                                    }
                                };
                            }
                        }
                    ]), o36;
                }(c.default);
                o35.default = b, b.displayName = "Toolbar", t123.exports = e76.default;
            }) ? o34.apply(e76, r24) : o34) || (t123.exports = i23);
        },
        function(t125, e78, n54) {
            var o37, r26, i25;
            "undefined" != typeof globalThis || "undefined", r26 = [
                e78,
                n54(30),
                n54(147),
                n54(7)
            ], void 0 === (i25 = "function" == typeof (o37 = function(t126, e, o38, r) {
                var i26 = n54(1);
                Object.defineProperty(t126, "__esModule", {
                    value: !0
                }), t126.I18nInternalNS = void 0, e = i26(e);
                var a10 = function t127(n55, o) {
                    var i = {
                    };
                    return Object.entries(n55).forEach(function(n) {
                        var a = (0, e.default)(n, 2), s = a[0], l = a[1];
                        if ((0, r.isObject)(l)) {
                            var c = o ? "".concat(o, ".").concat(s) : s, u = Object.values(l).every(function(t) {
                                return (0, r.isString)(t);
                            });
                            i[s] = u ? c : t127(l, c);
                        } else i[s] = l;
                    }), i;
                }((o38 = i26(o38)).default);
                t126.I18nInternalNS = a10;
            }) ? o37.apply(e78, r26) : o37) || (t125.exports = i25);
        },
        function(t128, e, n) {
            var o = n(13), r = n(10).document, i = o(r) && o(r.createElement);
            t128.exports = function(t) {
                return i ? r.createElement(t) : {
                };
            };
        },
        function(t, e, n) {
            e.f = n(14);
        },
        function(t129, e, n) {
            var o = n(68)("keys"), r = n(44);
            t129.exports = function(t) {
                return o[t] || (o[t] = r(t));
            };
        },
        function(t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        function(t, e, n) {
            var o = n(10).document;
            t.exports = o && o.documentElement;
        },
        function(t130, e79, n56) {
            var o39 = n56(13), r = n56(12), i = function(t, e) {
                if (r(t), !o39(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
            };
            t130.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {
                } ? (function(t132, e, o) {
                    try {
                        (o = n56(31)(Function.call, n56(34).f(Object.prototype, "__proto__").set, 2))(t132, []), e = !(t132 instanceof Array);
                    } catch (t131) {
                        e = !0;
                    }
                    return function(t, n) {
                        return i(t, n), e ? t.__proto__ = n : o(t, n), t;
                    };
                })({
                }, !1) : void 0),
                check: i
            };
        },
        function(t, e) {
            t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
        },
        function(t133, e80, n57) {
            var o = n57(13), r = n57(90).set;
            t133.exports = function(t, e, n) {
                var i, a = e.constructor;
                return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(t, i), t;
            };
        },
        function(t134, e81, n58) {
            "use strict";
            var o = n58(33), r = n58(38);
            t134.exports = function(t) {
                var e = String(r(this)), n = "", i = o(t);
                if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
                for(; i > 0; (i >>>= 1) && (e += e))1 & i && (n += e);
                return n;
            };
        },
        function(t135, e) {
            t135.exports = Math.sign || function(t) {
                return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
            };
        },
        function(t136, e) {
            var n = Math.expm1;
            t136.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -0.00000000000000002 != n(-0.00000000000000002) ? function(t) {
                return 0 == (t = +t) ? t : t > -0.000001 && t < 0.000001 ? t + t * t / 2 : Math.exp(t) - 1;
            } : n;
        },
        function(t137, e82, n59) {
            var o = n59(33), r = n59(38);
            t137.exports = function(t) {
                return function(e, n) {
                    var i, a, s = String(r(e)), l = o(n), c = s.length;
                    return l < 0 || l >= c ? t ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : i : t ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
                };
            };
        },
        function(t138, e83, n60) {
            "use strict";
            var o = n60(45), r = n60(0), i = n60(21), a = n60(27), s = n60(55), l = n60(127), c = n60(53), u = n60(50), f = n60(14)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
                return this;
            };
            t138.exports = function(t139, e, n, h, v, g, y) {
                l(n, e, h);
                var b, m, k, x = function(t) {
                    if (!d && t in E) return E[t];
                    switch(t){
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t);
                            };
                    }
                    return function() {
                        return new n(this, t);
                    };
                }, w = e + " Iterator", S = "values" == v, T = !1, E = t139.prototype, B = E[f] || E["@@iterator"] || v && E[v], C = B || x(v), _ = v ? S ? x("entries") : C : void 0, O = "Array" == e && E.entries || B;
                if (O && (k = u(O.call(new t139))) !== Object.prototype && k.next && (c(k, w, !0), o || "function" == typeof k[f] || a(k, f, p)), S && B && "values" !== B.name && (T = !0, C = function() {
                    return B.call(this);
                }), o && !y || !d && !T && E[f] || a(E, f, C), s[e] = C, s[w] = p, v) {
                    if (b = {
                        values: S ? C : x("values"),
                        keys: g ? C : x("keys"),
                        entries: _
                    }, y) for(m in b)m in E || i(E, m, b[m]);
                    else r(r.P + r.F * (d || T), e, b);
                }
                return b;
            };
        },
        function(t140, e84, n61) {
            var o = n61(99), r = n61(38);
            t140.exports = function(t, e, n) {
                if (o(e)) throw TypeError("String#" + n + " doesn't accept regex!");
                return String(r(t));
            };
        },
        function(t141, e85, n) {
            var o = n(13), r = n(37), i = n(14)("match");
            t141.exports = function(t) {
                var e;
                return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t));
            };
        },
        function(t, e86, n) {
            var o = n(14)("match");
            t.exports = function(t) {
                var e = /./;
                try {
                    "/./"[t](e);
                } catch (n) {
                    try {
                        return e[o] = !1, !"/./"[t](e);
                    } catch (t) {
                    }
                }
                return !0;
            };
        },
        function(t142, e, n) {
            var o = n(55), r = n(14)("iterator"), i = Array.prototype;
            t142.exports = function(t) {
                return void 0 !== t && (o.Array === t || i[r] === t);
            };
        },
        function(t143, e87, n62) {
            "use strict";
            var o = n62(19), r = n62(43);
            t143.exports = function(t, e, n) {
                e in t ? o.f(t, e, r(0, n)) : t[e] = n;
            };
        },
        function(t144, e, n) {
            var o = n(63), r = n(14)("iterator"), i = n(55);
            t144.exports = n(17).getIteratorMethod = function(t) {
                if (null != t) return t[r] || t["@@iterator"] || i[o(t)];
            };
        },
        function(t145, e88, n63) {
            "use strict";
            var o = n63(20), r = n63(47), i = n63(16);
            t145.exports = function(t) {
                for(var e = o(this), n = i(e.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n); c > s;)e[s++] = t;
                return e;
            };
        },
        function(t146, e89, n64) {
            "use strict";
            var o = n64(51), r = n64(132), i = n64(55), a = n64(28);
            t146.exports = n64(97)(Array, "Array", function(t, e) {
                this._t = a(t), this._i = 0, this._k = e;
            }, function() {
                var t = this._t, e = this._k, n = this._i++;
                return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [
                    n,
                    t[n]
                ]);
            }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
        },
        function(t147, e90, n65) {
            "use strict";
            var o40, r27, i = n65(73), a = RegExp.prototype.exec, s = String.prototype.replace, l8 = a, c = (o40 = /a/, r27 = /b*/g, a.call(o40, "a"), a.call(r27, "a"), 0 !== o40.lastIndex || 0 !== r27.lastIndex), u = void 0 !== /()??/.exec("")[1];
            (c || u) && (l8 = function(t) {
                var e, n, o, r, l = this;
                return u && (n = new RegExp("^" + l.source + "$(?!\\s)", i.call(l))), c && (e = l.lastIndex), o = a.call(l, t), c && o && (l.lastIndex = l.global ? o.index + o[0].length : e), u && o && o.length > 1 && s.call(o[0], n, function() {
                    for(r = 1; r < arguments.length - 2; r++)void 0 === arguments[r] && (o[r] = void 0);
                }), o;
            }), t147.exports = l8;
        },
        function(t148, e91, n66) {
            "use strict";
            var o = n66(96)(!0);
            t148.exports = function(t, e, n) {
                return e + (n ? o(t, e).length : 1);
            };
        },
        function(t149, e92, n67) {
            var o, r, i, a = n67(31), s = n67(121), l = n67(89), c = n67(85), u = n67(10), f = u.process, d = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, v = u.Dispatch, g = 0, y = {
            }, b = function() {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e();
                }
            }, m = function(t) {
                b.call(t.data);
            };
            d && p || (d = function(t) {
                for(var e = [], n = 1; arguments.length > n;)e.push(arguments[n++]);
                return y[++g] = function() {
                    s("function" == typeof t ? t : Function(t), e);
                }, o(g), g;
            }, p = function(t) {
                delete y[t];
            }, "process" == n67(37)(f) ? o = function(t) {
                f.nextTick(a(b, t, 1));
            } : v && v.now ? o = function(t) {
                v.now(a(b, t, 1));
            } : h ? (i = (r = new h).port2, r.port1.onmessage = m, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(t) {
                u.postMessage(t + "", "*");
            }, u.addEventListener("message", m, !1)) : o = "onreadystatechange" in c("script") ? function(t) {
                l.appendChild(c("script")).onreadystatechange = function() {
                    l.removeChild(this), b.call(t);
                };
            } : function(t) {
                setTimeout(a(b, t, 1), 0);
            }), t149.exports = {
                set: d,
                clear: p
            };
        },
        function(t150, e93, n68) {
            "use strict";
            var o41 = n68(10), r28 = n68(18), i27 = n68(45), a11 = n68(79), s10 = n68(27), l9 = n68(58), c6 = n68(11), u6 = n68(57), f = n68(33), d4 = n68(16), p = n68(140), h = n68(49).f, v = n68(19).f, g = n68(104), y = n68(53), b = o41.ArrayBuffer, m = o41.DataView, k = o41.Math, x = o41.RangeError, w = o41.Infinity, S = b, T = k.abs, E = k.pow, B = k.floor, C = k.log, _ = k.LN2, O = r28 ? "_b" : "buffer", I = r28 ? "_l" : "byteLength", M = r28 ? "_o" : "byteOffset";
            function R(t, e, n) {
                var o, r, i, a = new Array(n), s = 8 * n - e - 1, l = (1 << s) - 1, c = l >> 1, u = 23 === e ? E(2, -24) - E(2, -77) : 0, f = 0, d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for((t = T(t)) != t || t === w ? (r = t != t ? 1 : 0, o = l) : (o = B(C(t) / _), t * (i = E(2, -o)) < 1 && (o--, i *= 2), (t += o + c >= 1 ? u / i : u * E(2, 1 - c)) * i >= 2 && (o++, i /= 2), o + c >= l ? (r = 0, o = l) : o + c >= 1 ? (r = (t * i - 1) * E(2, e), o += c) : (r = t * E(2, c - 1) * E(2, e), o = 0)); e >= 8; a[f++] = 255 & r, r /= 256, e -= 8);
                for(o = o << e | r, s += e; s > 0; a[f++] = 255 & o, o /= 256, s -= 8);
                return a[--f] |= 128 * d, a;
            }
            function A(t, e, n) {
                var o, r = 8 * n - e - 1, i = (1 << r) - 1, a = i >> 1, s = r - 7, l = n - 1, c = t[l--], u = 127 & c;
                for(c >>= 7; s > 0; u = 256 * u + t[l], l--, s -= 8);
                for(o = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; o = 256 * o + t[l], l--, s -= 8);
                if (0 === u) u = 1 - a;
                else {
                    if (u === i) return o ? NaN : c ? -w : w;
                    o += E(2, e), u -= a;
                }
                return (c ? -1 : 1) * o * E(2, u - e);
            }
            function N(t) {
                return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
            }
            function P(t) {
                return [
                    255 & t
                ];
            }
            function L(t) {
                return [
                    255 & t,
                    t >> 8 & 255
                ];
            }
            function D(t) {
                return [
                    255 & t,
                    t >> 8 & 255,
                    t >> 16 & 255,
                    t >> 24 & 255
                ];
            }
            function j(t) {
                return R(t, 52, 8);
            }
            function F(t) {
                return R(t, 23, 4);
            }
            function U(t, e, n) {
                v(t.prototype, e, {
                    get: function() {
                        return this[n];
                    }
                });
            }
            function H(t, e, n, o) {
                var r = p(+n);
                if (r + e > t[I]) throw x("Wrong index!");
                var i = t[O]._b, a = r + t[M], s = i.slice(a, a + e);
                return o ? s : s.reverse();
            }
            function z(t, e, n, o, r, i) {
                var a = p(+n);
                if (a + e > t[I]) throw x("Wrong index!");
                for(var s = t[O]._b, l = a + t[M], c = o(+r), u = 0; u < e; u++)s[l + u] = c[i ? u : e - u - 1];
            }
            if (a11.ABV) {
                if (!c6(function() {
                    b(1);
                }) || !c6(function() {
                    new b(-1);
                }) || c6(function() {
                    return new b, new b(1.5), new b(NaN), "ArrayBuffer" != b.name;
                })) {
                    for(var W, Y = (b = function(t) {
                        return u6(this, b), new S(p(t));
                    }).prototype = S.prototype, V = h(S), X = 0; V.length > X;)(W = V[X++]) in b || s10(b, W, S[W]);
                    i27 || (Y.constructor = b);
                }
                var G = new m(new b(2)), K = m.prototype.setInt8;
                G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || l9(m.prototype, {
                    setInt8: function(t, e) {
                        K.call(this, t, e << 24 >> 24);
                    },
                    setUint8: function(t, e) {
                        K.call(this, t, e << 24 >> 24);
                    }
                }, !0);
            } else b = function(t) {
                u6(this, b, "ArrayBuffer");
                var e = p(t);
                this._b = g.call(new Array(e), 0), this[I] = e;
            }, m = function(t, e, n) {
                u6(this, m, "DataView"), u6(t, b, "DataView");
                var o = t[I], r = f(e);
                if (r < 0 || r > o) throw x("Wrong offset!");
                if (r + (n = void 0 === n ? o - r : d4(n)) > o) throw x("Wrong length!");
                this[O] = t, this[M] = r, this[I] = n;
            }, r28 && (U(b, "byteLength", "_l"), U(m, "buffer", "_b"), U(m, "byteLength", "_l"), U(m, "byteOffset", "_o")), l9(m.prototype, {
                getInt8: function(t) {
                    return H(this, 1, t)[0] << 24 >> 24;
                },
                getUint8: function(t) {
                    return H(this, 1, t)[0];
                },
                getInt16: function(t) {
                    var e = H(this, 2, t, arguments[1]);
                    return (e[1] << 8 | e[0]) << 16 >> 16;
                },
                getUint16: function(t) {
                    var e = H(this, 2, t, arguments[1]);
                    return e[1] << 8 | e[0];
                },
                getInt32: function(t) {
                    return N(H(this, 4, t, arguments[1]));
                },
                getUint32: function(t) {
                    return N(H(this, 4, t, arguments[1])) >>> 0;
                },
                getFloat32: function(t) {
                    return A(H(this, 4, t, arguments[1]), 23, 4);
                },
                getFloat64: function(t) {
                    return A(H(this, 8, t, arguments[1]), 52, 8);
                },
                setInt8: function(t, e) {
                    z(this, 1, t, P, e);
                },
                setUint8: function(t, e) {
                    z(this, 1, t, P, e);
                },
                setInt16: function(t, e) {
                    z(this, 2, t, L, e, arguments[2]);
                },
                setUint16: function(t, e) {
                    z(this, 2, t, L, e, arguments[2]);
                },
                setInt32: function(t, e) {
                    z(this, 4, t, D, e, arguments[2]);
                },
                setUint32: function(t, e) {
                    z(this, 4, t, D, e, arguments[2]);
                },
                setFloat32: function(t, e) {
                    z(this, 4, t, F, e, arguments[2]);
                },
                setFloat64: function(t, e) {
                    z(this, 8, t, j, e, arguments[2]);
                }
            });
            y(b, "ArrayBuffer"), y(m, "DataView"), s10(m.prototype, a11.VIEW, !0), e93.ArrayBuffer = b, e93.DataView = m;
        },
        function(t151, e94) {
            function n(e95, o) {
                return t151.exports = n = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                }, n(e95, o);
            }
            t151.exports = n;
        },
        function(t152, e96, n69) {
            var o42, r, i;
            "undefined" != typeof globalThis || "undefined", r = [
                e96
            ], void 0 === (i = "function" == typeof (o42 = function(n70) {
                Object.defineProperty(n70, "__esModule", {
                    value: !0
                }), n70.default = void 0;
                var o = function(t) {
                    var e97 = {
                        get id () {
                            return t.id;
                        },
                        get name () {
                            return t.name;
                        },
                        get config () {
                            return t.config;
                        },
                        get holder () {
                            return t.holder;
                        },
                        get isEmpty () {
                            return t.isEmpty;
                        },
                        get selected () {
                            return t.selected;
                        },
                        set stretched (e){
                            t.stretched = e;
                        },
                        get stretched () {
                            return t.stretched;
                        },
                        call: function(e, n) {
                            return t.call(e, n);
                        },
                        save: function() {
                            return t.save();
                        },
                        validate: function(e) {
                            return t.validate(e);
                        }
                    };
                    Object.setPrototypeOf(this, e97);
                };
                n70.default = o, t152.exports = e96.default;
            }) ? o42.apply(e96, r) : o42) || (t152.exports = i);
        },
        function(t153, e98, n71) {
            var o43, r29, i28;
            "undefined" != typeof globalThis || "undefined", r29 = [
                e98,
                n71(42),
                n71(2),
                n71(3),
                n71(383)
            ], void 0 === (i28 = "function" == typeof (o43 = function(o44, r, i, a, s) {
                var l = n71(1);
                Object.defineProperty(o44, "__esModule", {
                    value: !0
                }), o44.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s);
                var c = function() {
                    function t154() {
                        (0, i.default)(this, t154), this.registeredShortcuts = new Map;
                    }
                    return (0, a.default)(t154, [
                        {
                            key: "add",
                            value: function(t) {
                                if (this.findShortcut(t.on, t.name)) throw Error("Shortcut ".concat(t.name, " is already registered for ").concat(t.on, ". Please remove it before add a new handler."));
                                var e = new s.default({
                                    name: t.name,
                                    on: t.on,
                                    callback: t.handler
                                }), n = this.registeredShortcuts.get(t.on) || [];
                                this.registeredShortcuts.set(t.on, [].concat((0, r.default)(n), [
                                    e
                                ]));
                            }
                        },
                        {
                            key: "remove",
                            value: function(t155, e) {
                                var n = this.findShortcut(t155, e);
                                if (n) {
                                    n.remove();
                                    var o = this.registeredShortcuts.get(t155);
                                    this.registeredShortcuts.set(t155, o.filter(function(t) {
                                        return t !== n;
                                    }));
                                }
                            }
                        },
                        {
                            key: "findShortcut",
                            value: function(t156, e) {
                                return (this.registeredShortcuts.get(t156) || []).find(function(t) {
                                    return t.name === e;
                                });
                            }
                        }
                    ]), t154;
                }();
                c.displayName = "Shortcuts";
                var u = new c;
                o44.default = u, t153.exports = e98.default;
            }) ? o43.apply(e98, r29) : o43) || (t153.exports = i28);
        },
        function(t, e, n) {
            t.exports = !n(18) && !n(11)(function() {
                return 7 != Object.defineProperty(n(85)("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        function(t157, e99, n) {
            var o = n(10), r = n(17), i = n(45), a = n(86), s = n(19).f;
            t157.exports = function(t) {
                var e = r.Symbol || (r.Symbol = i ? {
                } : o.Symbol || {
                });
                "_" == t.charAt(0) || t in e || s(e, t, {
                    value: a.f(t)
                });
            };
        },
        function(t158, e100, n72) {
            var o = n72(26), r = n72(28), i = n72(69)(!1), a = n72(87)("IE_PROTO");
            t158.exports = function(t, e) {
                var n, s = r(t), l = 0, c = [];
                for(n in s)n != a && o(s, n) && c.push(n);
                for(; e.length > l;)o(s, n = e[l++]) && (~i(c, n) || c.push(n));
                return c;
            };
        },
        function(t159, e101, n73) {
            var o = n73(19), r = n73(12), i = n73(46);
            t159.exports = n73(18) ? Object.defineProperties : function(t, e) {
                r(t);
                for(var n, a = i(e), s = a.length, l = 0; s > l;)o.f(t, n = a[l++], e[n]);
                return t;
            };
        },
        function(t160, e, n) {
            var o = n(28), r = n(49).f, i = {
            }.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t160.exports.f = function(t161) {
                return a && "[object Window]" == i.call(t161) ? (function(t) {
                    try {
                        return r(t);
                    } catch (t162) {
                        return a.slice();
                    }
                })(t161) : r(o(t161));
            };
        },
        function(t163, e102, n74) {
            "use strict";
            var o45 = n74(18), r = n74(46), i = n74(70), a = n74(62), s = n74(20), l = n74(61), c7 = Object.assign;
            t163.exports = !c7 || n74(11)(function() {
                var t164 = {
                }, e = {
                }, n = Symbol(), o = "abcdefghijklmnopqrst";
                return t164[n] = 7, o.split("").forEach(function(t) {
                    e[t] = t;
                }), 7 != c7({
                }, t164)[n] || Object.keys(c7({
                }, e)).join("") != o;
            }) ? function(t, e) {
                for(var n = s(t), c = arguments.length, u = 1, f = i.f, d = a.f; c > u;)for(var p, h = l(arguments[u++]), v = f ? r(h).concat(f(h)) : r(h), g = v.length, y = 0; g > y;)p = v[y++], o45 && !d.call(h, p) || (n[p] = h[p]);
                return n;
            } : c7;
        },
        function(t165, e103) {
            t165.exports = Object.is || function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            };
        },
        function(t166, e104, n75) {
            "use strict";
            var o46 = n75(32), r30 = n75(13), i = n75(121), a = [].slice, s11 = {
            }, l = function(t, e, n) {
                if (!(e in s11)) {
                    for(var o = [], r = 0; r < e; r++)o[r] = "a[" + r + "]";
                    s11[e] = Function("F,a", "return new F(" + o.join(",") + ")");
                }
                return s11[e](t, n);
            };
            t166.exports = Function.bind || function(t) {
                var e = o46(this), n = a.call(arguments, 1), s = function() {
                    var o = n.concat(a.call(arguments));
                    return this instanceof s ? l(e, o.length, o) : i(e, o, t);
                };
                return r30(e.prototype) && (s.prototype = e.prototype), s;
            };
        },
        function(t167, e105) {
            t167.exports = function(t, e, n) {
                var o = void 0 === n;
                switch(e.length){
                    case 0:
                        return o ? t() : t.call(n);
                    case 1:
                        return o ? t(e[0]) : t.call(n, e[0]);
                    case 2:
                        return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                    case 3:
                        return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                    case 4:
                        return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
                }
                return t.apply(n, e);
            };
        },
        function(t168, e106, n76) {
            var o = n76(10).parseInt, r = n76(54).trim, i = n76(91), a = /^[-+]?0[xX]/;
            t168.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function(t, e) {
                var n = r(String(t), 3);
                return o(n, e >>> 0 || (a.test(n) ? 16 : 10));
            } : o;
        },
        function(t169, e107, n77) {
            var o = n77(10).parseFloat, r = n77(54).trim;
            t169.exports = 1 / o(n77(91) + "-0") != -1 / 0 ? function(t) {
                var e = r(String(t), 3), n = o(e);
                return 0 === n && "-" == e.charAt(0) ? -0 : n;
            } : o;
        },
        function(t170, e108, n) {
            var o = n(37);
            t170.exports = function(t, e) {
                if ("number" != typeof t && "Number" != o(t)) throw TypeError(e);
                return +t;
            };
        },
        function(t171, e, n) {
            var o = n(13), r = Math.floor;
            t171.exports = function(t) {
                return !o(t) && isFinite(t) && r(t) === t;
            };
        },
        function(t172, e) {
            t172.exports = Math.log1p || function(t) {
                return (t = +t) > -0.00000001 && t < 0.00000001 ? t - t * t / 2 : Math.log(1 + t);
            };
        },
        function(t173, e109, n78) {
            "use strict";
            var o = n78(48), r = n78(43), i = n78(53), a = {
            };
            n78(27)(a, n78(14)("iterator"), function() {
                return this;
            }), t173.exports = function(t, e, n) {
                t.prototype = o(a, {
                    next: r(1, n)
                }), i(t, e + " Iterator");
            };
        },
        function(t174, e110, n79) {
            var o = n79(12);
            t174.exports = function(t, e, n, r) {
                try {
                    return r ? e(o(n)[0], n[1]) : e(n);
                } catch (e111) {
                    var i = t.return;
                    throw void 0 !== i && o(i.call(t)), e111;
                }
            };
        },
        function(t175, e112, n) {
            var o = n(281);
            t175.exports = function(t, e) {
                return new (o(t))(e);
            };
        },
        function(t176, e113, n80) {
            var o = n80(32), r = n80(20), i = n80(61), a = n80(16);
            t176.exports = function(t, e, n, s, l) {
                o(e);
                var c = r(t), u = i(c), f = a(c.length), d = l ? f - 1 : 0, p = l ? -1 : 1;
                if (n < 2) for(;;){
                    if (d in u) {
                        s = u[d], d += p;
                        break;
                    }
                    if (d += p, l ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value");
                }
                for(; l ? d >= 0 : f > d; d += p)d in u && (s = e(s, u[d], d, c));
                return s;
            };
        },
        function(t177, e114, n81) {
            "use strict";
            var o = n81(20), r = n81(47), i = n81(16);
            t177.exports = [].copyWithin || function(t, e) {
                var n = o(this), a = i(n.length), s = r(t, a), l = r(e, a), c = arguments.length > 2 ? arguments[2] : void 0, u = Math.min((void 0 === c ? a : r(c, a)) - l, a - s), f = 1;
                for(l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0;)l in n ? n[s] = n[l] : delete n[s], s += f, l += f;
                return n;
            };
        },
        function(t178, e115) {
            t178.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                };
            };
        },
        function(t, e, n) {
            "use strict";
            var o = n(106);
            n(0)({
                target: "RegExp",
                proto: !0,
                forced: o !== /./.exec
            }, {
                exec: o
            });
        },
        function(t, e, n) {
            n(18) && "g" != /./g.flags && n(19).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n(73)
            });
        },
        function(t179, e116, n82) {
            "use strict";
            var o47, r31, i29, a12, s12 = n82(45), l10 = n82(10), c8 = n82(31), u7 = n82(63), f = n82(0), d = n82(13), p = n82(32), h = n82(57), v = n82(76), g = n82(64), y = n82(108).set, b = n82(301)(), m = n82(136), k = n82(302), x = n82(77), w = n82(137), S = l10.TypeError, T = l10.process, E = T && T.versions, B = E && E.v8 || "", C = l10.Promise, _ = "process" == u7(T), O = function() {
            }, I = r31 = m.f, M = !!function() {
                try {
                    var t180 = C.resolve(1), e = (t180.constructor = {
                    })[n82(14)("species")] = function(t) {
                        t(O, O);
                    };
                    return (_ || "function" == typeof PromiseRejectionEvent) && t180.then(O) instanceof e && 0 !== B.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
                } catch (t) {
                }
            }(), R = function(t) {
                var e;
                return !(!d(t) || "function" != typeof (e = t.then)) && e;
            }, A = function(t182, e117) {
                if (!t182._n) {
                    t182._n = !0;
                    var n83 = t182._c;
                    b(function() {
                        for(var o = t182._v, r = 1 == t182._s, i30 = 0, a13 = function(e) {
                            var n, i, a, s = r ? e.ok : e.fail, l = e.resolve, c = e.reject, u = e.domain;
                            try {
                                s ? (r || (2 == t182._h && L(t182), t182._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === e.promise ? c(S("Promise-chain cycle")) : (i = R(n)) ? i.call(n, l, c) : l(n)) : c(o);
                            } catch (t) {
                                u && !a && u.exit(), c(t);
                            }
                        }; n83.length > i30;)a13(n83[i30++]);
                        t182._c = [], t182._n = !1, e117 && !t182._h && N(t182);
                    });
                }
            }, N = function(t) {
                y.call(l10, function() {
                    var e, n, o, r = t._v, i = P(t);
                    if (i && (e = k(function() {
                        _ ? T.emit("unhandledRejection", r, t) : (n = l10.onunhandledrejection) ? n({
                            promise: t,
                            reason: r
                        }) : (o = l10.console) && o.error && o.error("Unhandled promise rejection", r);
                    }), t._h = _ || P(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v;
                });
            }, P = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length;
            }, L = function(t) {
                y.call(l10, function() {
                    var e;
                    _ ? T.emit("rejectionHandled", t) : (e = l10.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    });
                });
            }, D = function(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), A(e, !0));
            }, j = function(t183) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t183) throw S("Promise can't be resolved itself");
                        (e = R(t183)) ? b(function() {
                            var o = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t183, c8(j, o, 1), c8(D, o, 1));
                            } catch (t) {
                                D.call(o, t);
                            }
                        }) : (n._v = t183, n._s = 1, A(n, !1));
                    } catch (t) {
                        D.call({
                            _w: n,
                            _d: !1
                        }, t);
                    }
                }
            };
            M || (C = function(t) {
                h(this, C, "Promise", "_h"), p(t), o47.call(this);
                try {
                    t(c8(j, this, 1), c8(D, this, 1));
                } catch (t184) {
                    D.call(this, t184);
                }
            }, (o47 = function(t) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
            }).prototype = n82(58)(C.prototype, {
                then: function(t, e) {
                    var n = I(g(this, C));
                    return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _ ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise;
                },
                catch: function(t) {
                    return this.then(void 0, t);
                }
            }), i29 = function() {
                var t = new o47;
                this.promise = t, this.resolve = c8(j, t, 1), this.reject = c8(D, t, 1);
            }, m.f = I = function(t) {
                return t === C || t === a12 ? new i29(t) : r31(t);
            }), f(f.G + f.W + f.F * !M, {
                Promise: C
            }), n82(53)(C, "Promise"), n82(56)("Promise"), a12 = n82(17).Promise, f(f.S + f.F * !M, "Promise", {
                reject: function(t) {
                    var e = I(this);
                    return (0, e.reject)(t), e.promise;
                }
            }), f(f.S + f.F * (s12 || !M), "Promise", {
                resolve: function(t) {
                    return w(s12 && this === a12 ? C : this, t);
                }
            }), f(f.S + f.F * !(M && n82(72)(function(t) {
                C.all(t).catch(O);
            })), "Promise", {
                all: function(t185) {
                    var e = this, n85 = I(e), o = n85.resolve, r = n85.reject, i31 = k(function() {
                        var n = [], i = 0, a = 1;
                        v(t185, !1, function(t186) {
                            var s = i++, l = !1;
                            n.push(void 0), a++, e.resolve(t186).then(function(t) {
                                l || (l = !0, n[s] = t, --a || o(n));
                            }, r);
                        }), --a || o(n);
                    });
                    return i31.e && r(i31.v), n85.promise;
                },
                race: function(t187) {
                    var e = this, n = I(e), o = n.reject, r = k(function() {
                        v(t187, !1, function(t) {
                            e.resolve(t).then(n.resolve, o);
                        });
                    });
                    return r.e && o(r.v), n.promise;
                }
            });
        },
        function(t188, e118, n86) {
            "use strict";
            var o48 = n86(32);
            function r(t189) {
                var e, n;
                this.promise = new t189(function(t, o) {
                    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                    e = t, n = o;
                }), this.resolve = o48(e), this.reject = o48(n);
            }
            t188.exports.f = function(t) {
                return new r(t);
            };
        },
        function(t190, e119, n87) {
            var o = n87(12), r = n87(13), i = n87(136);
            t190.exports = function(t, e) {
                if (o(t), r(e) && e.constructor === t) return e;
                var n = i.f(t);
                return (0, n.resolve)(e), n.promise;
            };
        },
        function(t191, e120, n88) {
            "use strict";
            var o49 = n88(19).f, r32 = n88(48), i32 = n88(58), a = n88(31), s = n88(57), l = n88(76), c = n88(97), u8 = n88(132), f = n88(56), d = n88(18), p = n88(41).fastKey, h = n88(52), v = d ? "_s" : "size", g = function(t, e) {
                var n, o = p(e);
                if ("F" !== o) return t._i[o];
                for(n = t._f; n; n = n.n)if (n.k == e) return n;
            };
            t191.exports = {
                getConstructor: function(t192, e, n89, c) {
                    var u = t192(function(t, o) {
                        s(t, u, e, "_i"), t._t = e, t._i = r32(null), t._f = void 0, t._l = void 0, t[v] = 0, null != o && l(o, n89, t[c], t);
                    });
                    return i32(u.prototype, {
                        clear: function() {
                            for(var t = h(this, e), n = t._i, o = t._f; o; o = o.n)o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                            t._f = t._l = void 0, t[v] = 0;
                        },
                        delete: function(t) {
                            var n = h(this, e), o = g(n, t);
                            if (o) {
                                var r = o.n, i = o.p;
                                delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[v]--;
                            }
                            return !!o;
                        },
                        forEach: function(t) {
                            h(this, e);
                            for(var n, o = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)for(o(n.v, n.k, this); n && n.r;)n = n.p;
                        },
                        has: function(t) {
                            return !!g(h(this, e), t);
                        }
                    }), d && o49(u.prototype, "size", {
                        get: function() {
                            return h(this, e)[v];
                        }
                    }), u;
                },
                def: function(t, e, n) {
                    var o, r, i = g(t, e);
                    return i ? i.v = n : (t._l = i = {
                        i: r = p(e, !0),
                        k: e,
                        v: n,
                        p: o = t._l,
                        n: void 0,
                        r: !1
                    }, t._f || (t._f = i), o && (o.n = i), t[v]++, "F" !== r && (t._i[r] = i)), t;
                },
                getEntry: g,
                setStrong: function(t193, e121, n90) {
                    c(t193, e121, function(t, n) {
                        this._t = h(t, e121), this._k = n, this._l = void 0;
                    }, function() {
                        for(var t = this._k, e = this._l; e && e.r;)e = e.p;
                        return this._t && (this._l = e = e ? e.n : this._t._f) ? u8(0, "keys" == t ? e.k : "values" == t ? e.v : [
                            e.k,
                            e.v
                        ]) : (this._t = void 0, u8(1));
                    }, n90 ? "entries" : "values", !n90, !0), f(e121);
                }
            };
        },
        function(t194, e122, n91) {
            "use strict";
            var o50 = n91(58), r = n91(41).getWeak, i = n91(12), a = n91(13), s = n91(57), l = n91(76), c9 = n91(36), u = n91(26), f = n91(52), d = c9(5), p = c9(6), h = 0, v = function(t) {
                return t._l || (t._l = new g);
            }, g = function() {
                this.a = [];
            }, y = function(t195, e) {
                return d(t195.a, function(t) {
                    return t[0] === e;
                });
            };
            g.prototype = {
                get: function(t) {
                    var e = y(this, t);
                    if (e) return e[1];
                },
                has: function(t) {
                    return !!y(this, t);
                },
                set: function(t, e) {
                    var n = y(this, t);
                    n ? n[1] = e : this.a.push([
                        t,
                        e
                    ]);
                },
                delete: function(t) {
                    var e123 = p(this.a, function(e) {
                        return e[0] === t;
                    });
                    return ~e123 && this.a.splice(e123, 1), !!~e123;
                }
            }, t194.exports = {
                getConstructor: function(t196, e, n92, i) {
                    var c = t196(function(t, o) {
                        s(t, c, e, "_i"), t._t = e, t._i = h++, t._l = void 0, null != o && l(o, n92, t[i], t);
                    });
                    return o50(c.prototype, {
                        delete: function(t) {
                            if (!a(t)) return !1;
                            var n = r(t);
                            return !0 === n ? v(f(this, e)).delete(t) : n && u(n, this._i) && delete n[this._i];
                        },
                        has: function(t) {
                            if (!a(t)) return !1;
                            var n = r(t);
                            return !0 === n ? v(f(this, e)).has(t) : n && u(n, this._i);
                        }
                    }), c;
                },
                def: function(t, e, n) {
                    var o = r(i(e), !0);
                    return !0 === o ? v(t).set(e, n) : o[t._i] = n, t;
                },
                ufstore: v
            };
        },
        function(t197, e124, n93) {
            var o = n93(33), r = n93(16);
            t197.exports = function(t) {
                if (void 0 === t) return 0;
                var e = o(t), n = r(e);
                if (e !== n) throw RangeError("Wrong length!");
                return n;
            };
        },
        function(t198, e125, n94) {
            var o = n94(49), r = n94(70), i = n94(12), a = n94(10).Reflect;
            t198.exports = a && a.ownKeys || function(t) {
                var e = o.f(i(t)), n = r.f;
                return n ? e.concat(n(t)) : e;
            };
        },
        function(t199, e126, n95) {
            var o = n95(16), r = n95(93), i = n95(38);
            t199.exports = function(t, e, n, a) {
                var s = String(i(t)), l = s.length, c = void 0 === n ? " " : String(n), u = o(e);
                if (u <= l || "" == c) return s;
                var f = u - l, d = r.call(c, Math.ceil(f / c.length));
                return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
            };
        },
        function(t200, e127, n96) {
            var o = n96(18), r = n96(46), i = n96(28), a = n96(62).f;
            t200.exports = function(t) {
                return function(e) {
                    for(var n, s = i(e), l = r(s), c = l.length, u = 0, f = []; c > u;)n = l[u++], o && !a.call(s, n) || f.push(t ? [
                        n,
                        s[n]
                    ] : s[n]);
                    return f;
                };
            };
        },
        function(t201, e128, n97) {
            var o51 = function(t202) {
                var e129 = Object.prototype, n98 = e129.hasOwnProperty, o52 = "function" == typeof Symbol ? Symbol : {
                }, r33 = o52.iterator || "@@iterator", i33 = o52.asyncIterator || "@@asyncIterator", a14 = o52.toStringTag || "@@toStringTag";
                function s13(t203, e130, n99, o53) {
                    var r34 = e130 && e130.prototype instanceof u9 ? e130 : u9, i34 = Object.create(r34.prototype), a15 = new w(o53 || []);
                    return i34._invoke = (function(t, e, n) {
                        var o = "suspendedStart";
                        return function(r, i) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === r) throw i;
                                return T();
                            }
                            for(n.method = r, n.arg = i;;){
                                var a = n.delegate;
                                if (a) {
                                    var s = m(a, n);
                                    if (s) {
                                        if (s === c10) continue;
                                        return s;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === o) throw o = "completed", n.arg;
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = "executing";
                                var u = l11(t, e, n);
                                if ("normal" === u.type) {
                                    if (o = n.done ? "completed" : "suspendedYield", u.arg === c10) continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    };
                                }
                                "throw" === u.type && (o = "completed", n.method = "throw", n.arg = u.arg);
                            }
                        };
                    })(t203, n99, a15), i34;
                }
                function l11(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        };
                    } catch (t204) {
                        return {
                            type: "throw",
                            arg: t204
                        };
                    }
                }
                t202.wrap = s13;
                var c10 = {
                };
                function u9() {
                }
                function f6() {
                }
                function d() {
                }
                var p = {
                };
                p[r33] = function() {
                    return this;
                };
                var h = Object.getPrototypeOf, v = h && h(h(S([])));
                v && v !== e129 && n98.call(v, r33) && (p = v);
                var g = d.prototype = u9.prototype = Object.create(p);
                function y(t205) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(e) {
                        t205[e] = function(t) {
                            return this._invoke(e, t);
                        };
                    });
                }
                function b(t206, e) {
                    var o54;
                    this._invoke = function(r, i35) {
                        function a16() {
                            return new e(function(o55, a17) {
                                !function o(r, i, a, s) {
                                    var c = l11(t206[r], t206, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg, f = u.value;
                                        return f && "object" == typeof f && n98.call(f, "__await") ? e.resolve(f.__await).then(function(t) {
                                            o("next", t, a, s);
                                        }, function(t) {
                                            o("throw", t, a, s);
                                        }) : e.resolve(f).then(function(t) {
                                            u.value = t, a(u);
                                        }, function(t) {
                                            return o("throw", t, a, s);
                                        });
                                    }
                                    s(c.arg);
                                }(r, i35, o55, a17);
                            });
                        }
                        return o54 = o54 ? o54.then(a16, a16) : a16();
                    };
                }
                function m(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, m(t, e), "throw" === e.method)) return c10;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return c10;
                    }
                    var o = l11(n, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, c10;
                    var r = o.arg;
                    return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c10) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c10);
                }
                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
                }
                function x(t) {
                    var e = t.completion || {
                    };
                    e.type = "normal", delete e.arg, t.completion = e;
                }
                function w(t) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], t.forEach(k, this), this.reset(!0);
                }
                function S(t) {
                    if (t) {
                        var e131 = t[r33];
                        if (e131) return e131.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1, i = function e() {
                                for(; ++o < t.length;)if (n98.call(t, o)) return e.value = t[o], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e;
                            };
                            return i.next = i;
                        }
                    }
                    return {
                        next: T
                    };
                }
                function T() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return f6.prototype = g.constructor = d, d.constructor = f6, d[a14] = f6.displayName = "GeneratorFunction", t202.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f6 || "GeneratorFunction" === (e.displayName || e.name));
                }, t202.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, a14 in t || (t[a14] = "GeneratorFunction")), t.prototype = Object.create(g), t;
                }, t202.awrap = function(t) {
                    return {
                        __await: t
                    };
                }, y(b.prototype), b.prototype[i33] = function() {
                    return this;
                }, t202.AsyncIterator = b, t202.async = function(e, n, o, r, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(s13(e, n, o, r), i);
                    return t202.isGeneratorFunction(n) ? a : a.next().then(function(t) {
                        return t.done ? t.value : a.next();
                    });
                }, y(g), g[a14] = "Generator", g[r33] = function() {
                    return this;
                }, g.toString = function() {
                    return "[object Generator]";
                }, t202.keys = function(t) {
                    var e = [];
                    for(var n100 in t)e.push(n100);
                    return e.reverse(), function n() {
                        for(; e.length;){
                            var o = e.pop();
                            if (o in t) return n.value = o, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, t202.values = S, w.prototype = {
                    constructor: w,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t) for(var e in this)"t" === e.charAt(0) && n98.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;
                        function o56(n, o) {
                            return a.type = "throw", a.arg = t, e.next = n, o && (e.method = "next", e.arg = void 0), !!o;
                        }
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var i = this.tryEntries[r], a = i.completion;
                            if ("root" === i.tryLoc) return o56("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n98.call(i, "catchLoc"), l = n98.call(i, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < i.catchLoc) return o56(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o56(i.finallyLoc);
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return o56(i.catchLoc, !0);
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o56(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for(var o = this.tryEntries.length - 1; o >= 0; --o){
                            var r = this.tryEntries[o];
                            if (r.tryLoc <= this.prev && n98.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break;
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {
                        };
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, c10) : this.complete(a);
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c10;
                    },
                    finish: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), c10;
                        }
                    },
                    catch: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var r = o.arg;
                                    x(n);
                                }
                                return r;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), c10;
                    }
                }, t202;
            }(t201.exports);
            try {
                regeneratorRuntime = o51;
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(o51);
            }
        },
        function(t207, e133, n101) {
            var o = n101(146);
            t207.exports = function(t, e) {
                if (t) {
                    if ("string" == typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                }
            };
        },
        function(t208, e134) {
            t208.exports = function(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                return o;
            };
        },
        function(t) {
            t.exports = JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}');
        },
        function(t209, e135, n102) {
            var o57, r35, i36;
            "undefined" != typeof globalThis || "undefined", r35 = [
                e135,
                n102(2),
                n102(5),
                n102(6),
                n102(4),
                n102(150)
            ], void 0 === (i36 = "function" == typeof (o57 = function(t210, e136, o58, r, i, a18) {
                var s14 = n102(1);
                function l() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(t210, "__esModule", {
                    value: !0
                }), t210.CriticalError = void 0, e136 = s14(e136), o58 = s14(o58), r = s14(r), i = s14(i);
                var c = function(t211) {
                    (0, o58.default)(s, t211);
                    var n, a = (n = s, function() {
                        var t, e = (0, i.default)(n);
                        if (l()) {
                            var o = (0, i.default)(this).constructor;
                            t = Reflect.construct(e, arguments, o);
                        } else t = e.apply(this, arguments);
                        return (0, r.default)(this, t);
                    });
                    function s() {
                        return (0, e136.default)(this, s), a.apply(this, arguments);
                    }
                    return s;
                }((0, (a18 = s14(a18)).default)(Error));
                t210.CriticalError = c, c.displayName = "CriticalError";
            }) ? o57.apply(e135, r35) : o57) || (t209.exports = i36);
        },
        function(t212, e) {
            t212.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            };
        },
        function(t213, e137, n103) {
            var o = n103(4), r = n103(110), i = n103(371), a = n103(372);
            function s(e138) {
                var n = "function" == typeof Map ? new Map : void 0;
                return t213.exports = s = function(t) {
                    if (null === t || !i(t)) return t;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(t)) return n.get(t);
                        n.set(t, e);
                    }
                    function e() {
                        return a(t, arguments, o(this).constructor);
                    }
                    return e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), r(e, t);
                }, s(e138);
            }
            t213.exports = s;
        },
        function(t214, e139, n104) {
            var o59, r36, i37;
            "undefined" != typeof globalThis || "undefined", r36 = [
                e139,
                n104(2),
                n104(3),
                n104(7)
            ], void 0 === (i37 = "function" == typeof (o59 = function(o60, r37, i38, a19) {
                var s = n104(1);
                Object.defineProperty(o60, "__esModule", {
                    value: !0
                }), o60.default = void 0, r37 = s(r37), i38 = s(i38);
                var l = function() {
                    function t215() {
                        (0, r37.default)(this, t215), this.subscribers = {
                        };
                    }
                    return (0, i38.default)(t215, [
                        {
                            key: "on",
                            value: function(t, e) {
                                t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(e);
                            }
                        },
                        {
                            key: "once",
                            value: function(t, e) {
                                var n = this;
                                t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(function o(r) {
                                    var i = e(r), a = n.subscribers[t].indexOf(o);
                                    return -1 !== a && n.subscribers[t].splice(a, 1), i;
                                });
                            }
                        },
                        {
                            key: "emit",
                            value: function(t216, e140) {
                                !(0, a19.isEmpty)(this.subscribers) && this.subscribers[t216] && this.subscribers[t216].reduce(function(t, e) {
                                    return e(t) || t;
                                }, e140);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e) {
                                for(var n = 0; n < this.subscribers[t].length; n++)if (this.subscribers[t][n] === e) {
                                    delete this.subscribers[t][n];
                                    break;
                                }
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.subscribers = null;
                            }
                        }
                    ]), t215;
                }();
                o60.default = l, l.displayName = "EventsDispatcher", t214.exports = e139.default;
            }) ? o59.apply(e139, r36) : o59) || (t214.exports = i37);
        },
        function(t217, e141, n105) {
            var o61, r38, i39;
            "undefined" != typeof globalThis || "undefined", r38 = [
                e141,
                n105(2),
                n105(3),
                n105(5),
                n105(6),
                n105(4),
                n105(7),
                n105(111),
                n105(9)
            ], void 0 === (i39 = "function" == typeof (o61 = function(o62, r39, i40, a, s, l, c, u, f) {
                var d = n105(8), p = n105(1);
                function h() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o62, "__esModule", {
                    value: !0
                }), o62.default = void 0, r39 = p(r39), i40 = p(i40), a = p(a), s = p(s), l = p(l), c = d(c), u = p(u);
                var v = function(t218) {
                    (0, a.default)(o63, t218);
                    var e142, n106 = (e142 = o63, function() {
                        var t, n = (0, l.default)(e142);
                        if (h()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o63() {
                        var t;
                        return (0, r39.default)(this, o63), (t = n106.apply(this, arguments)).insert = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.config.defaultBlock, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            }, o = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0), r = arguments.length > 4 ? arguments[4] : void 0;
                            t.Editor.BlockManager.insert({
                                tool: e,
                                data: n,
                                index: o,
                                needToFocus: r
                            });
                        }, t.update = function(e, n) {
                            var o = t.Editor.BlockManager, r = o.getBlockById(e);
                            if (r) {
                                var i = o.getBlockIndex(r);
                                o.insert({
                                    id: r.id,
                                    tool: r.name,
                                    data: n,
                                    index: i,
                                    replace: !0,
                                    tunes: r.tunes
                                });
                            } else c.log("blocks.update(): Block with passed id was not found", "warn");
                        }, t;
                    }
                    return (0, i40.default)(o63, [
                        {
                            key: "getBlocksCount",
                            value: function() {
                                return this.Editor.BlockManager.blocks.length;
                            }
                        },
                        {
                            key: "getCurrentBlockIndex",
                            value: function() {
                                return this.Editor.BlockManager.currentBlockIndex;
                            }
                        },
                        {
                            key: "getBlockByIndex",
                            value: function(t) {
                                var e = this.Editor.BlockManager.getBlockByIndex(t);
                                if (void 0 !== e) return new u.default(e);
                                c.logLabeled("There is no block at index `" + t + "`", "warn");
                            }
                        },
                        {
                            key: "getById",
                            value: function(t) {
                                var e = this.Editor.BlockManager.getBlockById(t);
                                return void 0 === e ? (c.logLabeled("There is no block with id `" + t + "`", "warn"), null) : new u.default(e);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                c.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(t, e), this.Editor.Toolbar.move(!1);
                            }
                        },
                        {
                            key: "move",
                            value: function(t, e) {
                                this.Editor.BlockManager.move(t, e), this.Editor.Toolbar.move(!1);
                            }
                        },
                        {
                            key: "delete",
                            value: function(t) {
                                try {
                                    this.Editor.BlockManager.removeBlock(t);
                                } catch (t219) {
                                    return void c.logLabeled(t219, "warn");
                                }
                                0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "render",
                            value: function(t) {
                                return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t.blocks);
                            }
                        },
                        {
                            key: "renderFromHTML",
                            value: function(t) {
                                return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t, !0);
                            }
                        },
                        {
                            key: "stretchBlock",
                            value: function(t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                c.deprecationAssert(!0, "blocks.stretchBlock()", "BlockAPI");
                                var n = this.Editor.BlockManager.getBlockByIndex(t);
                                n && (n.stretched = e);
                            }
                        },
                        {
                            key: "insertNewBlock",
                            value: function() {
                                c.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    clear: function() {
                                        return t.clear();
                                    },
                                    render: function(e) {
                                        return t.render(e);
                                    },
                                    renderFromHTML: function(e) {
                                        return t.renderFromHTML(e);
                                    },
                                    delete: function(e) {
                                        return t.delete(e);
                                    },
                                    swap: function(e, n) {
                                        return t.swap(e, n);
                                    },
                                    move: function(e, n) {
                                        return t.move(e, n);
                                    },
                                    getBlockByIndex: function(e) {
                                        return t.getBlockByIndex(e);
                                    },
                                    getById: function(e) {
                                        return t.getById(e);
                                    },
                                    getCurrentBlockIndex: function() {
                                        return t.getCurrentBlockIndex();
                                    },
                                    getBlocksCount: function() {
                                        return t.getBlocksCount();
                                    },
                                    stretchBlock: function(e) {
                                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        return t.stretchBlock(e, n);
                                    },
                                    insertNewBlock: function() {
                                        return t.insertNewBlock();
                                    },
                                    insert: this.insert,
                                    update: this.update
                                };
                            }
                        }
                    ]), o63;
                }((f = p(f)).default);
                o62.default = v, v.displayName = "BlocksAPI", t217.exports = e141.default;
            }) ? o61.apply(e141, r38) : o61) || (t217.exports = i39);
        },
        function(t220, e143, n107) {
            var o64, r40, i41;
            "undefined" != typeof globalThis || "undefined", r40 = [
                e143,
                n107(2),
                n107(3),
                n107(5),
                n107(6),
                n107(4),
                n107(9)
            ], void 0 === (i41 = "function" == typeof (o64 = function(o65, r, i, a, s, l, c) {
                var u = n107(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o65, "__esModule", {
                    value: !0
                }), o65.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t221) {
                    (0, a.default)(o66, t221);
                    var e144, n108 = (e144 = o66, function() {
                        var t, n = (0, l.default)(e144);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o66() {
                        var t;
                        return (0, r.default)(this, o66), (t = n108.apply(this, arguments)).setToFirstBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.firstBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock, e, n), !0);
                        }, t.setToLastBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.lastBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock, e, n), !0);
                        }, t.setToPreviousBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.previousBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock, e, n), !0);
                        }, t.setToNextBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.nextBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock, e, n), !0);
                        }, t.setToBlock = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Editor.Caret.positions.DEFAULT, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            return !!t.Editor.BlockManager.blocks[e] && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e], n, o), !0);
                        }, t.focus = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return e ? t.setToLastBlock(t.Editor.Caret.positions.END) : t.setToFirstBlock(t.Editor.Caret.positions.START);
                        }, t;
                    }
                    return (0, i.default)(o66, [
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    setToFirstBlock: this.setToFirstBlock,
                                    setToLastBlock: this.setToLastBlock,
                                    setToPreviousBlock: this.setToPreviousBlock,
                                    setToNextBlock: this.setToNextBlock,
                                    setToBlock: this.setToBlock,
                                    focus: this.focus
                                };
                            }
                        }
                    ]), o66;
                }((c = u(c)).default);
                o65.default = d, d.displayName = "CaretAPI", t220.exports = e143.default;
            }) ? o64.apply(e143, r40) : o64) || (t220.exports = i41);
        },
        function(t222, e145, n109) {
            var o67, r41, i42;
            "undefined" != typeof globalThis || "undefined", r41 = [
                e145,
                n109(2),
                n109(3),
                n109(5),
                n109(6),
                n109(4),
                n109(9)
            ], void 0 === (i42 = "function" == typeof (o67 = function(o68, r, i, a, s, l, c) {
                var u = n109(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o68, "__esModule", {
                    value: !0
                }), o68.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t223) {
                    (0, a.default)(o69, t223);
                    var e146, n110 = (e146 = o69, function() {
                        var t, n = (0, l.default)(e146);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o69() {
                        return (0, r.default)(this, o69), n110.apply(this, arguments);
                    }
                    return (0, i.default)(o69, [
                        {
                            key: "on",
                            value: function(t, e) {
                                this.eventsDispatcher.on(t, e);
                            }
                        },
                        {
                            key: "emit",
                            value: function(t, e) {
                                this.eventsDispatcher.emit(t, e);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e) {
                                this.eventsDispatcher.off(t, e);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    emit: function(e, n) {
                                        return t.emit(e, n);
                                    },
                                    off: function(e, n) {
                                        return t.off(e, n);
                                    },
                                    on: function(e, n) {
                                        return t.on(e, n);
                                    }
                                };
                            }
                        }
                    ]), o69;
                }((c = u(c)).default);
                o68.default = d, d.displayName = "EventsAPI", t222.exports = e145.default;
            }) ? o67.apply(e145, r41) : o67) || (t222.exports = i42);
        },
        function(t224, e147, n111) {
            var o70, r42, i43;
            "undefined" != typeof globalThis || "undefined", r42 = [
                e147,
                n111(2),
                n111(3),
                n111(5),
                n111(6),
                n111(4),
                n111(59),
                n111(7),
                n111(9)
            ], void 0 === (i43 = "function" == typeof (o70 = function(o71, r, i, a, s, l, c, u, f) {
                var d = n111(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o71, "__esModule", {
                    value: !0
                }), o71.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c);
                var h = function(t225) {
                    (0, a.default)(o72, t225);
                    var e148, n112 = (e148 = o72, function() {
                        var t, n = (0, l.default)(e148);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o72() {
                        return (0, r.default)(this, o72), n112.apply(this, arguments);
                    }
                    return (0, i.default)(o72, [
                        {
                            key: "getMethodsForTool",
                            value: function(t) {
                                return Object.assign(this.methods, {
                                    t: function(e) {
                                        return c.default.t(o72.getNamespace(t), e);
                                    }
                                });
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    t: function() {
                                        (0, u.logLabeled)("I18n.t() method can be accessed only from Tools", "warn");
                                    }
                                };
                            }
                        }
                    ], [
                        {
                            key: "getNamespace",
                            value: function(t) {
                                return t.isTune() ? "blockTunes.".concat(t.name) : "tools.".concat(t.name);
                            }
                        }
                    ]), o72;
                }((f = d(f)).default);
                o71.default = h, h.displayName = "I18nAPI", t224.exports = e147.default;
            }) ? o70.apply(e147, r42) : o70) || (t224.exports = i43);
        },
        function(t226, e149, n113) {
            var o73, r43, i44;
            "undefined" != typeof globalThis || "undefined", r43 = [
                e149,
                n113(2),
                n113(3),
                n113(5),
                n113(6),
                n113(4),
                n113(9)
            ], void 0 === (i44 = "function" == typeof (o73 = function(o74, r, i, a, s, l, c) {
                var u = n113(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o74, "__esModule", {
                    value: !0
                }), o74.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t227) {
                    (0, a.default)(o75, t227);
                    var e, n114 = (e = o75, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o75() {
                        return (0, r.default)(this, o75), n114.apply(this, arguments);
                    }
                    return (0, i.default)(o75, [
                        {
                            key: "open",
                            value: function() {
                                this.Editor.InlineToolbar.tryToShow();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    close: function() {
                                        return t.close();
                                    },
                                    open: function() {
                                        return t.open();
                                    }
                                };
                            }
                        }
                    ]), o75;
                }((c = u(c)).default);
                o74.default = d, d.displayName = "InlineToolbarAPI", t226.exports = e149.default;
            }) ? o73.apply(e149, r43) : o73) || (t226.exports = i44);
        },
        function(t228, e150, n115) {
            var o76, r44, i45;
            "undefined" != typeof globalThis || "undefined", r44 = [
                e150,
                n115(2),
                n115(3),
                n115(5),
                n115(6),
                n115(4),
                n115(9)
            ], void 0 === (i45 = "function" == typeof (o76 = function(o77, r45, i, a, s, l, c) {
                var u = n115(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o77, "__esModule", {
                    value: !0
                }), o77.default = void 0, r45 = u(r45), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t229) {
                    (0, a.default)(o78, t229);
                    var e151, n116 = (e151 = o78, function() {
                        var t, n = (0, l.default)(e151);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o78() {
                        return (0, r45.default)(this, o78), n116.apply(this, arguments);
                    }
                    return (0, i.default)(o78, [
                        {
                            key: "on",
                            value: function(t, e, n, o) {
                                this.listeners.on(t, e, n, o);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e, n, o) {
                                this.listeners.off(t, e, n, o);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    on: function(e, n, o, r) {
                                        return t.on(e, n, o, r);
                                    },
                                    off: function(e, n, o, r) {
                                        return t.off(e, n, o, r);
                                    }
                                };
                            }
                        }
                    ]), o78;
                }((c = u(c)).default);
                o77.default = d, d.displayName = "ListenersAPI", t228.exports = e150.default;
            }) ? o76.apply(e150, r44) : o76) || (t228.exports = i45);
        },
        function(t230, e152, n117) {
            var o79, r46, i46;
            "undefined" != typeof globalThis || "undefined", r46 = [
                e152,
                n117(2),
                n117(3),
                n117(5),
                n117(6),
                n117(4),
                n117(376),
                n117(9)
            ], void 0 === (i46 = "function" == typeof (o79 = function(o80, r, i47, a20, s, l, c, u) {
                var f = n117(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o80, "__esModule", {
                    value: !0
                }), o80.default = void 0, r = f(r), i47 = f(i47), a20 = f(a20), s = f(s), l = f(l), c = f(c);
                var p = function(t231) {
                    (0, a20.default)(o81, t231);
                    var e153, n118 = (e153 = o81, function() {
                        var t, n = (0, l.default)(e153);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o81(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r.default)(this, o81), (e = n118.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).notifier = new c.default, e;
                    }
                    return (0, i47.default)(o81, [
                        {
                            key: "show",
                            value: function(t) {
                                return this.notifier.show(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    show: function(e) {
                                        return t.show(e);
                                    }
                                };
                            }
                        }
                    ]), o81;
                }((u = f(u)).default);
                o80.default = p, p.displayName = "NotifierAPI", t230.exports = e152.default;
            }) ? o79.apply(e152, r46) : o79) || (t230.exports = i46);
        },
        function(t232, e154, n119) {
            var o82, r47, i48;
            "undefined" != typeof globalThis || "undefined", r47 = [
                e154,
                n119(2),
                n119(3),
                n119(5),
                n119(6),
                n119(4),
                n119(9)
            ], void 0 === (i48 = "function" == typeof (o82 = function(o83, r, i, a, s, l, c) {
                var u = n119(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o83, "__esModule", {
                    value: !0
                }), o83.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t233) {
                    (0, a.default)(o84, t233);
                    var e155, n120 = (e155 = o84, function() {
                        var t, n = (0, l.default)(e155);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o84() {
                        return (0, r.default)(this, o84), n120.apply(this, arguments);
                    }
                    return (0, i.default)(o84, [
                        {
                            key: "toggle",
                            value: function(t) {
                                return this.Editor.ReadOnly.toggle(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    toggle: function(e) {
                                        return t.toggle(e);
                                    },
                                    isEnabled: this.isEnabled
                                };
                            }
                        },
                        {
                            key: "isEnabled",
                            get: function() {
                                return this.Editor.ReadOnly.isEnabled;
                            }
                        }
                    ]), o84;
                }((c = u(c)).default);
                o83.default = d, d.displayName = "ReadOnlyAPI", t232.exports = e154.default;
            }) ? o82.apply(e154, r47) : o82) || (t232.exports = i48);
        },
        function(t234, e156, n121) {
            var o85, r48, i49;
            "undefined" != typeof globalThis || "undefined", r48 = [
                e156,
                n121(2),
                n121(3),
                n121(5),
                n121(6),
                n121(4),
                n121(9),
                n121(65)
            ], void 0 === (i49 = "function" == typeof (o85 = function(o86, r, i, a, s, l, c, u) {
                var f = n121(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o86, "__esModule", {
                    value: !0
                }), o86.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t235) {
                    (0, a.default)(o87, t235);
                    var e157, n122 = (e157 = o87, function() {
                        var t, n = (0, l.default)(e157);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o87() {
                        return (0, r.default)(this, o87), n122.apply(this, arguments);
                    }
                    return (0, i.default)(o87, [
                        {
                            key: "clean",
                            value: function(t, e) {
                                return (0, u.clean)(t, e);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    clean: function(e, n) {
                                        return t.clean(e, n);
                                    }
                                };
                            }
                        }
                    ]), o87;
                }((c = f(c)).default);
                o86.default = p, p.displayName = "SanitizerAPI", t234.exports = e156.default;
            }) ? o85.apply(e156, r48) : o85) || (t234.exports = i49);
        },
        function(t236, e158, n123) {
            var o88, r49, i50;
            "undefined" != typeof globalThis || "undefined", r49 = [
                e158,
                n123(2),
                n123(3),
                n123(5),
                n123(6),
                n123(4),
                n123(7),
                n123(9)
            ], void 0 === (i50 = "function" == typeof (o88 = function(o89, r, i, a, s, l, c, u) {
                var f = n123(8), d = n123(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o89, "__esModule", {
                    value: !0
                }), o89.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = f(c);
                var h = function(t237) {
                    (0, a.default)(o90, t237);
                    var e, n124 = (e = o90, function() {
                        var t, n = (0, l.default)(e);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o90() {
                        return (0, r.default)(this, o90), n124.apply(this, arguments);
                    }
                    return (0, i.default)(o90, [
                        {
                            key: "save",
                            value: function() {
                                var t = "Editor's content can not be saved in read-only mode";
                                return this.Editor.ReadOnly.isEnabled ? (c.logLabeled(t, "warn"), Promise.reject(new Error(t))) : this.Editor.Saver.save();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    save: function() {
                                        return t.save();
                                    }
                                };
                            }
                        }
                    ]), o90;
                }((u = d(u)).default);
                o89.default = h, h.displayName = "SaverAPI", t236.exports = e158.default;
            }) ? o88.apply(e158, r49) : o88) || (t236.exports = i50);
        },
        function(t238, e159, n125) {
            var o91, r50, i51;
            "undefined" != typeof globalThis || "undefined", r50 = [
                e159,
                n125(2),
                n125(3),
                n125(5),
                n125(6),
                n125(4),
                n125(25),
                n125(9)
            ], void 0 === (i51 = "function" == typeof (o91 = function(o92, r, i, a, s, l, c, u) {
                var f = n125(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o92, "__esModule", {
                    value: !0
                }), o92.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(t239) {
                    (0, a.default)(o93, t239);
                    var e160, n126 = (e160 = o93, function() {
                        var t, n = (0, l.default)(e160);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o93() {
                        return (0, r.default)(this, o93), n126.apply(this, arguments);
                    }
                    return (0, i.default)(o93, [
                        {
                            key: "findParentTag",
                            value: function(t, e) {
                                return (new c.default).findParentTag(t, e);
                            }
                        },
                        {
                            key: "expandToTag",
                            value: function(t) {
                                (new c.default).expandToTag(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    findParentTag: function(e, n) {
                                        return t.findParentTag(e, n);
                                    },
                                    expandToTag: function(e) {
                                        return t.expandToTag(e);
                                    }
                                };
                            }
                        }
                    ]), o93;
                }((u = f(u)).default);
                o92.default = p, p.displayName = "SelectionAPI", t238.exports = e159.default;
            }) ? o91.apply(e159, r50) : o91) || (t238.exports = i51);
        },
        function(t240, e161, n127) {
            var o94, r51, i52;
            "undefined" != typeof globalThis || "undefined", r51 = [
                e161,
                n127(2),
                n127(3),
                n127(5),
                n127(6),
                n127(4),
                n127(9)
            ], void 0 === (i52 = "function" == typeof (o94 = function(o95, r, i, a, s, l, c) {
                var u = n127(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o95, "__esModule", {
                    value: !0
                }), o95.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t241) {
                    (0, a.default)(o96, t241);
                    var e, n128 = (e = o96, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o96() {
                        return (0, r.default)(this, o96), n128.apply(this, arguments);
                    }
                    return (0, i.default)(o96, [
                        {
                            key: "classes",
                            get: function() {
                                return {
                                    block: "cdx-block",
                                    inlineToolButton: "ce-inline-tool",
                                    inlineToolButtonActive: "ce-inline-tool--active",
                                    input: "cdx-input",
                                    loader: "cdx-loader",
                                    button: "cdx-button",
                                    settingsButton: "cdx-settings-button",
                                    settingsButtonActive: "cdx-settings-button--active"
                                };
                            }
                        }
                    ]), o96;
                }((c = u(c)).default);
                o95.default = d, d.displayName = "StylesAPI", t240.exports = e161.default;
            }) ? o94.apply(e161, r51) : o94) || (t240.exports = i52);
        },
        function(t242, e162, n129) {
            var o97, r52, i53;
            "undefined" != typeof globalThis || "undefined", r52 = [
                e162,
                n129(2),
                n129(3),
                n129(5),
                n129(6),
                n129(4),
                n129(9),
                n129(7)
            ], void 0 === (i53 = "function" == typeof (o97 = function(o98, r, i, a, s, l, c, u) {
                var f = n129(8), d = n129(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o98, "__esModule", {
                    value: !0
                }), o98.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
                var h = function(t243) {
                    (0, a.default)(o99, t243);
                    var e163, n130 = (e163 = o99, function() {
                        var t, n = (0, l.default)(e163);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o99() {
                        return (0, r.default)(this, o99), n130.apply(this, arguments);
                    }
                    return (0, i.default)(o99, [
                        {
                            key: "open",
                            value: function() {
                                this.Editor.Toolbar.open();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "toggleBlockSettings",
                            value: function(t) {
                                if (-1 !== this.Editor.BlockManager.currentBlockIndex) {
                                    var e = null != t ? t : !this.Editor.BlockSettings.opened;
                                    t !== this.Editor.BlockSettings.opened && (e ? (this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(!0, !1), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close());
                                } else u.logLabeled("Could't toggle the Toolbar because there is no block selected ", "warn");
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    close: function() {
                                        return t.close();
                                    },
                                    open: function() {
                                        return t.open();
                                    },
                                    toggleBlockSettings: function(e) {
                                        return t.toggleBlockSettings(e);
                                    }
                                };
                            }
                        }
                    ]), o99;
                }(c.default);
                o98.default = h, h.displayName = "ToolbarAPI", t242.exports = e162.default;
            }) ? o97.apply(e162, r52) : o97) || (t242.exports = i53);
        },
        function(t244, e164, n131) {
            var o100, r53, i54;
            "undefined" != typeof globalThis || "undefined", r53 = [
                e164,
                n131(2),
                n131(3),
                n131(5),
                n131(6),
                n131(4),
                n131(9),
                n131(82)
            ], void 0 === (i54 = "function" == typeof (o100 = function(o101, r, i55, a21, s, l, c, u) {
                var f = n131(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o101, "__esModule", {
                    value: !0
                }), o101.default = void 0, r = f(r), i55 = f(i55), a21 = f(a21), s = f(s), l = f(l), c = f(c), u = f(u);
                var p = function(t245) {
                    (0, a21.default)(o102, t245);
                    var e165, n132 = (e165 = o102, function() {
                        var t, n = (0, l.default)(e165);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o102(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r.default)(this, o102), (e = n132.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).tooltip = new u.default, e;
                    }
                    return (0, i55.default)(o102, [
                        {
                            key: "destroy",
                            value: function() {
                                this.tooltip.destroy();
                            }
                        },
                        {
                            key: "show",
                            value: function(t, e, n) {
                                this.tooltip.show(t, e, n);
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                this.tooltip.hide();
                            }
                        },
                        {
                            key: "onHover",
                            value: function(t, e, n) {
                                this.tooltip.onHover(t, e, n);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    show: function(e, n, o) {
                                        return t.show(e, n, o);
                                    },
                                    hide: function() {
                                        return t.hide();
                                    },
                                    onHover: function(e, n, o) {
                                        return t.onHover(e, n, o);
                                    }
                                };
                            }
                        }
                    ]), o102;
                }(c.default);
                o101.default = p, p.displayName = "TooltipAPI", t244.exports = e164.default;
            }) ? o100.apply(e164, r53) : o100) || (t244.exports = i54);
        },
        function(t246, e166, n133) {
            var o103, r54, i56;
            "undefined" != typeof globalThis || "undefined", r54 = [
                e166,
                n133(2),
                n133(3),
                n133(5),
                n133(6),
                n133(4),
                n133(9),
                n133(7),
                n133(25),
                n133(60)
            ], void 0 === (i56 = "function" == typeof (o103 = function(o104, r55, i57, a22, s15, l12, c, u, f, d) {
                var p = n133(8), h = n133(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o104, "__esModule", {
                    value: !0
                }), o104.default = void 0, r55 = h(r55), i57 = h(i57), a22 = h(a22), s15 = h(s15), l12 = h(l12), c = h(c), u = p(u), f = h(f), d = h(d);
                var g = function(t247) {
                    (0, a22.default)(o105, t247);
                    var e167, n134 = (e167 = o105, function() {
                        var t, n = (0, l12.default)(e167);
                        if (v()) {
                            var o = (0, l12.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s15.default)(this, t);
                    });
                    function o105() {
                        return (0, r55.default)(this, o105), n134.apply(this, arguments);
                    }
                    return (0, i57.default)(o105, [
                        {
                            key: "keydown",
                            value: function(t) {
                                switch(this.beforeKeydownProcessing(t), t.keyCode){
                                    case u.keyCodes.BACKSPACE:
                                        this.backspace(t);
                                        break;
                                    case u.keyCodes.ENTER:
                                        this.enter(t);
                                        break;
                                    case u.keyCodes.DOWN:
                                    case u.keyCodes.RIGHT:
                                        this.arrowRightAndDown(t);
                                        break;
                                    case u.keyCodes.UP:
                                    case u.keyCodes.LEFT:
                                        this.arrowLeftAndUp(t);
                                        break;
                                    case u.keyCodes.TAB:
                                        this.tabPressed(t);
                                }
                            }
                        },
                        {
                            key: "beforeKeydownProcessing",
                            value: function(t) {
                                this.needToolbarClosing(t) && u.isPrintableKey(t.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t)));
                            }
                        },
                        {
                            key: "keyup",
                            value: function(t) {
                                t.shiftKey || this.Editor.UI.checkEmptiness();
                            }
                        },
                        {
                            key: "tabPressed",
                            value: function(t) {
                                this.Editor.BlockSelection.clearSelection(t);
                                var e = this.Editor, n = e.BlockManager, o = e.InlineToolbar, r = e.ConversionToolbar, i = n.currentBlock;
                                if (i) {
                                    var a = i.tool.isDefault && i.isEmpty, s = !i.isEmpty && r.opened, l = !i.isEmpty && !f.default.isCollapsed && o.opened;
                                    a ? this.activateToolbox() : s || l || this.activateBlockSettings();
                                }
                            }
                        },
                        {
                            key: "dragOver",
                            value: function(t) {
                                this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !0;
                            }
                        },
                        {
                            key: "dragLeave",
                            value: function(t) {
                                this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !1;
                            }
                        },
                        {
                            key: "handleCommandC",
                            value: function(t) {
                                var e = this.Editor.BlockSelection;
                                e.anyBlockSelected && e.copySelectedBlocks(t);
                            }
                        },
                        {
                            key: "handleCommandX",
                            value: function(t) {
                                var e168 = this.Editor, n = e168.BlockSelection, o = e168.BlockManager, r = e168.Caret;
                                n.anyBlockSelected && n.copySelectedBlocks(t).then(function() {
                                    var e = o.removeSelectedBlocks(), i = o.insertDefaultBlockAtIndex(e, !0);
                                    r.setToBlock(i, r.positions.START), n.clearSelection(t);
                                });
                            }
                        },
                        {
                            key: "enter",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.UI;
                                if (!n.currentBlock.tool.isLineBreaksEnabled && !(o.someToolbarOpened && o.someFlipperButtonFocused || t.shiftKey)) {
                                    var r = this.Editor.BlockManager.currentBlock;
                                    this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : r = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r), r.tool.isDefault && r.isEmpty && (this.Editor.Toolbar.open(!1), this.Editor.Toolbar.plusButton.show()), t.preventDefault();
                                }
                            }
                        },
                        {
                            key: "backspace",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret, i = n.currentBlock, a = i.tool;
                                if (i.selected || i.isEmpty && i.currentInput === i.firstInput) {
                                    t.preventDefault();
                                    var s = n.currentBlockIndex;
                                    return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), r.setToBlock(n.currentBlock, s ? r.positions.END : r.positions.START), this.Editor.Toolbar.close(), void o.clearSelection(t);
                                }
                                if (!a.isLineBreaksEnabled || r.isAtStart) {
                                    var l = 0 === n.currentBlockIndex;
                                    r.isAtStart && f.default.isCollapsed && i.currentInput === i.firstInput && !l && (t.preventDefault(), this.mergeBlocks());
                                }
                            }
                        },
                        {
                            key: "mergeBlocks",
                            value: function() {
                                var t = this.Editor, e = t.BlockManager, n = t.Caret, o = t.Toolbar, r = e.previousBlock, i = e.currentBlock;
                                if (i.name !== r.name || !r.mergeable) return 0 === r.inputs.length || r.isEmpty ? (e.removeBlock(e.currentBlockIndex - 1), n.setToBlock(e.currentBlock), void o.close()) : void (n.navigatePrevious() && o.close());
                                n.createShadow(r.pluginsContent), e.mergeBlocks(r, i).then(function() {
                                    n.restoreCaret(r.pluginsContent), r.pluginsContent.normalize(), o.close();
                                });
                            }
                        },
                        {
                            key: "arrowRightAndDown",
                            value: function(t) {
                                var e = this, n = d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB);
                                if (!this.Editor.UI.someToolbarOpened || !n) {
                                    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                                    var o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                                    t.shiftKey && t.keyCode === u.keyCodes.DOWN && o ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : ((t.keyCode === u.keyCodes.DOWN || t.keyCode === u.keyCodes.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? t.preventDefault() : u.delay(function() {
                                        e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
                                    }, 20)(), this.Editor.BlockSelection.clearSelection(t));
                                }
                            }
                        },
                        {
                            key: "arrowLeftAndUp",
                            value: function(t) {
                                var e = this;
                                if (this.Editor.UI.someToolbarOpened) {
                                    if (d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB)) return;
                                    this.Editor.UI.closeAllToolbars();
                                }
                                this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                                var n = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                                t.shiftKey && t.keyCode === u.keyCodes.UP && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1) : ((t.keyCode === u.keyCodes.UP || t.keyCode === u.keyCodes.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? t.preventDefault() : u.delay(function() {
                                    e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
                                }, 20)(), this.Editor.BlockSelection.clearSelection(t));
                            }
                        },
                        {
                            key: "needToolbarClosing",
                            value: function(t) {
                                var e = t.keyCode === u.keyCodes.ENTER && this.Editor.Toolbox.opened, n = t.keyCode === u.keyCodes.ENTER && this.Editor.BlockSettings.opened, o = t.keyCode === u.keyCodes.ENTER && this.Editor.InlineToolbar.opened, r = t.keyCode === u.keyCodes.ENTER && this.Editor.ConversionToolbar.opened, i = t.keyCode === u.keyCodes.TAB;
                                return !(t.shiftKey || i || e || n || o || r);
                            }
                        },
                        {
                            key: "activateToolbox",
                            value: function() {
                                this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(!1, !1), this.Editor.Toolbar.plusButton.show()), this.Editor.Toolbox.open();
                            }
                        },
                        {
                            key: "activateBlockSettings",
                            value: function() {
                                this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.open(!0, !1), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
                            }
                        }
                    ]), o105;
                }(c.default);
                o104.default = g, g.displayName = "BlockEvents", t246.exports = e166.default;
            }) ? o103.apply(e166, r54) : o103) || (t246.exports = i56);
        },
        function(t248, e169, n135) {
            var o106, r56, i58;
            "undefined" != typeof globalThis || "undefined", r56 = [
                e169,
                n135(23),
                n135(24),
                n135(2),
                n135(3),
                n135(5),
                n135(6),
                n135(4),
                n135(66),
                n135(9),
                n135(15),
                n135(7),
                n135(382),
                n135(111)
            ], void 0 === (i58 = "function" == typeof (o106 = function(o107, r57, i59, a23, s16, l13, c11, u10, f7, d5, p4, h3, v1, g) {
                var y5 = n135(8), b = n135(1);
                function m() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o107, "__esModule", {
                    value: !0
                }), o107.default = void 0, r57 = b(r57), i59 = b(i59), a23 = b(a23), s16 = b(s16), l13 = b(l13), c11 = b(c11), u10 = b(u10), f7 = y5(f7), d5 = b(d5), p4 = b(p4), h3 = y5(h3), v1 = b(v1), g = b(g);
                var k = function(t249) {
                    (0, l13.default)(y, t249);
                    var e170, n136, o108, d6 = (e170 = y, function() {
                        var t, n = (0, u10.default)(e170);
                        if (m()) {
                            var o = (0, u10.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c11.default)(this, t);
                    });
                    function y() {
                        var t;
                        return (0, a23.default)(this, y), (t = d6.apply(this, arguments))._currentBlockIndex = -1, t._blocks = null, t;
                    }
                    return (0, s16.default)(y, [
                        {
                            key: "prepare",
                            value: function() {
                                var t = this, e171 = new v1.default(this.Editor.UI.nodes.redactor);
                                this._blocks = new Proxy(e171, {
                                    set: v1.default.set,
                                    get: v1.default.get
                                }), this.listeners.on(document, "copy", function(e) {
                                    return t.Editor.BlockEvents.handleCommandC(e);
                                });
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "composeBlock",
                            value: function(t) {
                                var e = t.tool, n = t.data, o = void 0 === n ? {
                                } : n, r = t.id, i = void 0 === r ? void 0 : r, a = t.tunes, s = void 0 === a ? {
                                } : a, l = this.Editor.ReadOnly.isEnabled, c = this.Editor.Tools.blockTools.get(e), u = new f7.default({
                                    id: i,
                                    data: o,
                                    tool: c,
                                    api: this.Editor.API,
                                    readOnly: l,
                                    tunesData: s
                                });
                                return l || this.bindBlockEvents(u), u;
                            }
                        },
                        {
                            key: "insert",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                }, e = t.id, n = void 0 === e ? void 0 : e, o = t.tool, r = void 0 === o ? this.config.defaultBlock : o, i = t.data, a = void 0 === i ? {
                                } : i, s = t.index, l = t.needToFocus, c = void 0 === l || l, u = t.replace, f = void 0 !== u && u, d = t.tunes, p = void 0 === d ? {
                                } : d, h = s;
                                void 0 === h && (h = this.currentBlockIndex + (f ? 0 : 1));
                                var v = this.composeBlock({
                                    id: n,
                                    tool: r,
                                    data: a,
                                    tunes: p
                                });
                                return this._blocks.insert(h, v, f), this.blockDidMutated(v), c ? this.currentBlockIndex = h : h <= this.currentBlockIndex && this.currentBlockIndex++, v;
                            }
                        },
                        {
                            key: "replace",
                            value: function(t) {
                                var e = t.tool, n = void 0 === e ? this.config.defaultBlock : e, o = t.data, r = void 0 === o ? {
                                } : o;
                                return this.insert({
                                    tool: n,
                                    data: r,
                                    index: this.currentBlockIndex,
                                    replace: !0
                                });
                            }
                        },
                        {
                            key: "paste",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = this.insert({
                                    tool: t,
                                    replace: n
                                });
                                try {
                                    o.call(f7.BlockToolAPI.ON_PASTE, e);
                                } catch (e172) {
                                    h3.log("".concat(t, ": onPaste callback call is failed"), "error", e172);
                                }
                                return o;
                            }
                        },
                        {
                            key: "insertDefaultBlockAtIndex",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.composeBlock({
                                    tool: this.config.defaultBlock
                                });
                                return this._blocks[t] = n, this.blockDidMutated(n), e ? this.currentBlockIndex = t : t <= this.currentBlockIndex && this.currentBlockIndex++, n;
                            }
                        },
                        {
                            key: "insertAtEnd",
                            value: function() {
                                return this.currentBlockIndex = this.blocks.length - 1, this.insert();
                            }
                        },
                        {
                            key: "mergeBlocks",
                            value: (o108 = (0, i59.default)(r57.default.mark(function t250(e, n) {
                                var o, i;
                                return r57.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (o = this._blocks.indexOf(n), !n.isEmpty) {
                                                t.next = 3;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            return t.next = 5, n.data;
                                        case 5:
                                            if (i = t.sent, h3.isEmpty(i)) {
                                                t.next = 9;
                                                break;
                                            }
                                            return t.next = 9, e.mergeWith(i);
                                        case 9:
                                            this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e);
                                        case 11:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t250, this);
                            })), function(t, e) {
                                return o108.apply(this, arguments);
                            })
                        },
                        {
                            key: "removeBlock",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentBlockIndex;
                                if (!this.validateIndex(t)) throw new Error("Can't find a Block to remove");
                                var e = this._blocks[t];
                                e.destroy(), this._blocks.remove(t), this.blockDidMutated(e), this.currentBlockIndex >= t && this.currentBlockIndex--, this.blocks.length ? 0 === t && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
                            }
                        },
                        {
                            key: "removeSelectedBlocks",
                            value: function() {
                                for(var t, e = this.blocks.length - 1; e >= 0; e--)this.blocks[e].selected && (this.removeBlock(e), t = e);
                                return t;
                            }
                        },
                        {
                            key: "removeAllBlocks",
                            value: function() {
                                for(var t = this.blocks.length - 1; t >= 0; t--)this._blocks.remove(t);
                                this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
                            }
                        },
                        {
                            key: "split",
                            value: function() {
                                var t = this.Editor.Caret.extractFragmentFromCaretPosition(), e = p4.default.make("div");
                                e.appendChild(t);
                                var n = {
                                    text: p4.default.isEmpty(e) ? "" : e.innerHTML
                                };
                                return this.insert({
                                    data: n
                                });
                            }
                        },
                        {
                            key: "getBlockByIndex",
                            value: function(t) {
                                return this._blocks[t];
                            }
                        },
                        {
                            key: "getBlockIndex",
                            value: function(t) {
                                return this._blocks.indexOf(t);
                            }
                        },
                        {
                            key: "getBlockById",
                            value: function(t) {
                                return this._blocks.array.find(function(e) {
                                    return e.id === t;
                                });
                            }
                        },
                        {
                            key: "getBlock",
                            value: function(t) {
                                p4.default.isElement(t) || (t = t.parentNode);
                                var e = this._blocks.nodes, n = t.closest(".".concat(f7.default.CSS.wrapper)), o = e.indexOf(n);
                                if (o >= 0) return this._blocks[o];
                            }
                        },
                        {
                            key: "highlightCurrentNode",
                            value: function() {
                                this.clearFocused(), this.currentBlock.focused = !0;
                            }
                        },
                        {
                            key: "clearFocused",
                            value: function() {
                                this.blocks.forEach(function(t) {
                                    t.focused = !1;
                                });
                            }
                        },
                        {
                            key: "setCurrentBlockByChildNode",
                            value: function(t) {
                                p4.default.isElement(t) || (t = t.parentNode);
                                var e = t.closest(".".concat(f7.default.CSS.wrapper));
                                if (e) {
                                    var n = e.closest(".".concat(this.Editor.UI.CSS.editorWrapper));
                                    if (null == n ? void 0 : n.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(e), this.currentBlock.updateCurrentInput(), this.currentBlock;
                                }
                            }
                        },
                        {
                            key: "getBlockByChildNode",
                            value: function(t251) {
                                p4.default.isElement(t251) || (t251 = t251.parentNode);
                                var e = t251.closest(".".concat(f7.default.CSS.wrapper));
                                return this.blocks.find(function(t) {
                                    return t.holder === e;
                                });
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                this._blocks.swap(t, e), this.currentBlockIndex = e;
                            }
                        },
                        {
                            key: "move",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentBlockIndex;
                                isNaN(t) || isNaN(e) ? h3.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(t) && this.validateIndex(e) ? (this._blocks.move(t, e), this.currentBlockIndex = t, this.blockDidMutated(this.currentBlock)) : h3.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
                            }
                        },
                        {
                            key: "dropPointer",
                            value: function() {
                                this.currentBlockIndex = -1, this.clearFocused();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this._blocks.removeAll(), this.dropPointer(), t && this.insert(), this.Editor.UI.checkEmptiness();
                            }
                        },
                        {
                            key: "destroy",
                            value: (n136 = (0, i59.default)(r57.default.mark(function t252() {
                                return r57.default.wrap(function(t253) {
                                    for(;;)switch(t253.prev = t253.next){
                                        case 0:
                                            return t253.next = 2, Promise.all(this.blocks.map(function(t) {
                                                return t.destroy();
                                            }));
                                        case 2:
                                        case "end":
                                            return t253.stop();
                                    }
                                }, t252, this);
                            })), function() {
                                return n136.apply(this, arguments);
                            })
                        },
                        {
                            key: "bindBlockEvents",
                            value: function(t254) {
                                var e = this, n = this.Editor.BlockEvents;
                                this.readOnlyMutableListeners.on(t254.holder, "keydown", function(t) {
                                    n.keydown(t);
                                }), this.readOnlyMutableListeners.on(t254.holder, "keyup", function(t) {
                                    n.keyup(t);
                                }), this.readOnlyMutableListeners.on(t254.holder, "dragover", function(t) {
                                    n.dragOver(t);
                                }), this.readOnlyMutableListeners.on(t254.holder, "dragleave", function(t) {
                                    n.dragLeave(t);
                                }), t254.on("didMutated", function(t) {
                                    return e.blockDidMutated(t);
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(document, "cut", function(e) {
                                    return t.Editor.BlockEvents.handleCommandX(e);
                                }), this.blocks.forEach(function(e) {
                                    t.bindBlockEvents(e);
                                });
                            }
                        },
                        {
                            key: "validateIndex",
                            value: function(t) {
                                return !(t < 0 || t >= this._blocks.length);
                            }
                        },
                        {
                            key: "blockDidMutated",
                            value: function(t) {
                                return this.Editor.ModificationsObserver.onChange(new g.default(t)), t;
                            }
                        },
                        {
                            key: "currentBlockIndex",
                            get: function() {
                                return this._currentBlockIndex;
                            },
                            set: function(t) {
                                this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t] && this._blocks[t].willSelect(), this._currentBlockIndex = t;
                            }
                        },
                        {
                            key: "firstBlock",
                            get: function() {
                                return this._blocks[0];
                            }
                        },
                        {
                            key: "lastBlock",
                            get: function() {
                                return this._blocks[this._blocks.length - 1];
                            }
                        },
                        {
                            key: "currentBlock",
                            get: function() {
                                return this._blocks[this.currentBlockIndex];
                            }
                        },
                        {
                            key: "nextBlock",
                            get: function() {
                                return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
                            }
                        },
                        {
                            key: "nextContentfulBlock",
                            get: function() {
                                return this.blocks.slice(this.currentBlockIndex + 1).find(function(t) {
                                    return !!t.inputs.length;
                                });
                            }
                        },
                        {
                            key: "previousContentfulBlock",
                            get: function() {
                                return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function(t) {
                                    return !!t.inputs.length;
                                });
                            }
                        },
                        {
                            key: "previousBlock",
                            get: function() {
                                return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1];
                            }
                        },
                        {
                            key: "blocks",
                            get: function() {
                                return this._blocks.array;
                            }
                        },
                        {
                            key: "isEditorEmpty",
                            get: function() {
                                return this.blocks.every(function(t) {
                                    return t.isEmpty;
                                });
                            }
                        }
                    ]), y;
                }(d5.default);
                o107.default = k, k.displayName = "BlockManager", t248.exports = e169.default;
            }) ? o106.apply(e169, r56) : o106) || (t248.exports = i58);
        },
        function(t255, e173, n137) {
            var o = n137(381);
            function r58(e174, n138, i60) {
                return "undefined" != typeof Reflect && Reflect.get ? t255.exports = r58 = Reflect.get : t255.exports = r58 = function(t, e, n) {
                    var r = o(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value;
                    }
                }, r58(e174, n138, i60 || e174);
            }
            t255.exports = r58;
        },
        function(t256, e175, n139) {
            var o109, r59, i61;
            "undefined" != typeof globalThis || "undefined", r59 = [
                e175,
                n139(2),
                n139(3),
                n139(5),
                n139(6),
                n139(4),
                n139(9),
                n139(7),
                n139(15),
                n139(112),
                n139(25),
                n139(65)
            ], void 0 === (i61 = "function" == typeof (o109 = function(o110, r60, i62, a24, s17, l14, c, u, f, d, p, h) {
                var v = n139(8), g = n139(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o110, "__esModule", {
                    value: !0
                }), o110.default = void 0, r60 = g(r60), i62 = g(i62), a24 = g(a24), s17 = g(s17), l14 = g(l14), c = g(c), u = v(u), f = g(f), d = g(d), p = g(p);
                var b = function(t257) {
                    (0, a24.default)(o111, t257);
                    var e176, n140 = (e176 = o111, function() {
                        var t, n = (0, l14.default)(e176);
                        if (y()) {
                            var o = (0, l14.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s17.default)(this, t);
                    });
                    function o111() {
                        var t;
                        return (0, r60.default)(this, o111), (t = n140.apply(this, arguments)).anyBlockSelectedCache = null, t.needToSelectAll = !1, t.nativeInputSelected = !1, t.readyToBlockSelection = !1, t;
                    }
                    return (0, i62.default)(o111, [
                        {
                            key: "prepare",
                            value: function() {
                                var t = this;
                                this.selection = new p.default, d.default.add({
                                    name: "CMD+A",
                                    handler: function(e) {
                                        var n = t.Editor, o = n.BlockManager;
                                        if (n.ReadOnly.isEnabled) return e.preventDefault(), void t.selectAllBlocks();
                                        o.currentBlock && t.handleCommandA(e);
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                p.default.get().removeAllRanges(), this.allBlocksSelected = !1;
                            }
                        },
                        {
                            key: "unSelectBlockByIndex",
                            value: function(t) {
                                var e = this.Editor.BlockManager;
                                (isNaN(t) ? e.currentBlock : e.getBlockByIndex(t)).selected = !1, this.clearCache();
                            }
                        },
                        {
                            key: "clearSelection",
                            value: function(t) {
                                var e177 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.Editor, o = n.BlockManager, r = n.Caret, i = n.RectangleSelection;
                                this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
                                var a = t && t instanceof KeyboardEvent, s = a && u.isPrintableKey(t.keyCode);
                                if (this.anyBlockSelected && a && s && !p.default.isSelectionExists) {
                                    var l = o.removeSelectedBlocks();
                                    o.insertDefaultBlockAtIndex(l, !0), r.setToBlock(o.currentBlock), u.delay(function() {
                                        var e = t.key;
                                        r.insertContentAtCaretPosition(e.length > 1 ? "" : e);
                                    }, 20)();
                                }
                                this.Editor.CrossBlockSelection.clear(t), this.anyBlockSelected && !i.isRectActivated() ? (e177 && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection();
                            }
                        },
                        {
                            key: "copySelectedBlocks",
                            value: function(t258) {
                                var e = this;
                                t258.preventDefault();
                                var n141 = f.default.make("div");
                                this.selectedBlocks.forEach(function(t) {
                                    var o = (0, h.clean)(t.holder.innerHTML, e.sanitizerConfig), r = f.default.make("p");
                                    r.innerHTML = o, n141.appendChild(r);
                                });
                                var o112 = Array.from(n141.childNodes).map(function(t) {
                                    return t.textContent;
                                }).join("\n\n"), r61 = n141.innerHTML;
                                return t258.clipboardData.setData("text/plain", o112), t258.clipboardData.setData("text/html", r61), Promise.all(this.selectedBlocks.map(function(t) {
                                    return t.save();
                                })).then(function(n) {
                                    try {
                                        t258.clipboardData.setData(e.Editor.Paste.MIME_TYPE, JSON.stringify(n));
                                    } catch (t) {
                                    }
                                });
                            }
                        },
                        {
                            key: "selectBlockByIndex",
                            value: function(t) {
                                var e, n = this.Editor.BlockManager;
                                n.clearFocused(), e = isNaN(t) ? n.currentBlock : n.getBlockByIndex(t), this.selection.save(), p.default.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "clearCache",
                            value: function() {
                                this.anyBlockSelectedCache = null;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                d.default.remove(this.Editor.UI.nodes.redactor, "CMD+A");
                            }
                        },
                        {
                            key: "handleCommandA",
                            value: function(t) {
                                if (this.Editor.RectangleSelection.clearSelection(), !f.default.isNativeInput(t.target) || this.readyToBlockSelection) {
                                    var e = this.Editor.BlockManager.getBlock(t.target).inputs;
                                    e.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = !0 : 1 !== e.length || this.needToSelectAll ? this.needToSelectAll ? (t.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (t.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0) : this.needToSelectAll = !0;
                                } else this.readyToBlockSelection = !0;
                            }
                        },
                        {
                            key: "selectAllBlocks",
                            value: function() {
                                this.selection.save(), p.default.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "sanitizerConfig",
                            get: function() {
                                return {
                                    p: {
                                    },
                                    h1: {
                                    },
                                    h2: {
                                    },
                                    h3: {
                                    },
                                    h4: {
                                    },
                                    h5: {
                                    },
                                    h6: {
                                    },
                                    ol: {
                                    },
                                    ul: {
                                    },
                                    li: {
                                    },
                                    br: !0,
                                    img: {
                                        src: !0,
                                        width: !0,
                                        height: !0
                                    },
                                    a: {
                                        href: !0
                                    },
                                    b: {
                                    },
                                    i: {
                                    },
                                    u: {
                                    }
                                };
                            }
                        },
                        {
                            key: "allBlocksSelected",
                            get: function() {
                                return this.Editor.BlockManager.blocks.every(function(t) {
                                    return !0 === t.selected;
                                });
                            },
                            set: function(t) {
                                this.Editor.BlockManager.blocks.forEach(function(e) {
                                    e.selected = t;
                                }), this.clearCache();
                            }
                        },
                        {
                            key: "anyBlockSelected",
                            get: function() {
                                var t259 = this.Editor.BlockManager;
                                return null === this.anyBlockSelectedCache && (this.anyBlockSelectedCache = t259.blocks.some(function(t) {
                                    return !0 === t.selected;
                                })), this.anyBlockSelectedCache;
                            }
                        },
                        {
                            key: "selectedBlocks",
                            get: function() {
                                return this.Editor.BlockManager.blocks.filter(function(t) {
                                    return t.selected;
                                });
                            }
                        }
                    ]), o111;
                }(c.default);
                o110.default = b, b.displayName = "BlockSelection", t256.exports = e175.default;
            }) ? o109.apply(e175, r59) : o109) || (t256.exports = i61);
        },
        function(t260, e178, n142) {
            var o113, r62, i63;
            "undefined" != typeof globalThis || "undefined", r62 = [
                e178,
                n142(2),
                n142(3),
                n142(5),
                n142(6),
                n142(4),
                n142(25),
                n142(9),
                n142(15),
                n142(7)
            ], void 0 === (i63 = "function" == typeof (o113 = function(o114, r63, i64, a25, s18, l, c, u, f, d) {
                var p = n142(8), h = n142(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o114, "__esModule", {
                    value: !0
                }), o114.default = void 0, r63 = h(r63), i64 = h(i64), a25 = h(a25), s18 = h(s18), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);
                var g = function(t261) {
                    (0, a25.default)(o115, t261);
                    var e179, n143 = (e179 = o115, function() {
                        var t, n = (0, l.default)(e179);
                        if (v()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s18.default)(this, t);
                    });
                    function o115() {
                        return (0, r63.default)(this, o115), n143.apply(this, arguments);
                    }
                    return (0, i64.default)(o115, [
                        {
                            key: "setToBlock",
                            value: function(t) {
                                var e, n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = this.Editor.BlockManager;
                                switch(o){
                                    case this.positions.START:
                                        e = t.firstInput;
                                        break;
                                    case this.positions.END:
                                        e = t.lastInput;
                                        break;
                                    default:
                                        e = t.currentInput;
                                }
                                if (e) {
                                    var a = f.default.getDeepestNode(e, o === this.positions.END), s = f.default.getContentLength(a);
                                    switch(!0){
                                        case o === this.positions.START:
                                            r = 0;
                                            break;
                                        case o === this.positions.END:
                                        case r > s:
                                            r = s;
                                    }
                                    d.delay(function() {
                                        n.set(a, r);
                                    }, 20)(), i.setCurrentBlockByChildNode(t.holder), i.currentBlock.currentInput = e;
                                }
                            }
                        },
                        {
                            key: "setToInput",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = this.Editor.BlockManager.currentBlock, r = f.default.getDeepestNode(t);
                                switch(e){
                                    case this.positions.START:
                                        this.set(r, 0);
                                        break;
                                    case this.positions.END:
                                        this.set(r, f.default.getContentLength(r));
                                        break;
                                    default:
                                        n && this.set(r, n);
                                }
                                o.currentInput = t;
                            }
                        },
                        {
                            key: "set",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = c.default.setCursor(t, e), o = n.top, r = n.bottom, i = window, a = i.innerHeight;
                                o < 0 && window.scrollBy(0, o), r > a && window.scrollBy(0, r - a);
                            }
                        },
                        {
                            key: "setToTheLastBlock",
                            value: function() {
                                var t = this.Editor.BlockManager.lastBlock;
                                if (t) {
                                    if (t.tool.isDefault && t.isEmpty) this.setToBlock(t);
                                    else {
                                        var e = this.Editor.BlockManager.insertAtEnd();
                                        this.setToBlock(e);
                                    }
                                }
                            }
                        },
                        {
                            key: "extractFragmentFromCaretPosition",
                            value: function() {
                                var t = c.default.get();
                                if (t.rangeCount) {
                                    var e = t.getRangeAt(0), n = this.Editor.BlockManager.currentBlock.currentInput;
                                    if (e.deleteContents(), n) {
                                        if (f.default.isNativeInput(n)) {
                                            var o = n, r = document.createDocumentFragment(), i = o.value.substring(0, o.selectionStart), a = o.value.substring(o.selectionStart);
                                            return r.textContent = a, o.value = i, r;
                                        }
                                        var s = e.cloneRange();
                                        return s.selectNodeContents(n), s.setStart(e.endContainer, e.endOffset), s.extractContents();
                                    }
                                }
                            }
                        },
                        {
                            key: "navigateNext",
                            value: function() {
                                var t = this.Editor.BlockManager, e = t.currentBlock, n = t.nextContentfulBlock, o = e.nextInput, r = this.isAtEnd, i = n;
                                if (!i && !o) {
                                    if (e.tool.isDefault || !r) return !1;
                                    i = t.insertAtEnd();
                                }
                                return !!r && (o ? this.setToInput(o, this.positions.START) : this.setToBlock(i, this.positions.START), !0);
                            }
                        },
                        {
                            key: "navigatePrevious",
                            value: function() {
                                var t = this.Editor.BlockManager, e = t.currentBlock, n = t.previousContentfulBlock;
                                if (!e) return !1;
                                var o = e.previousInput;
                                return !(!n && !o || !this.isAtStart || (o ? this.setToInput(o, this.positions.END) : this.setToBlock(n, this.positions.END), 0));
                            }
                        },
                        {
                            key: "createShadow",
                            value: function(t) {
                                var e = document.createElement("span");
                                e.classList.add(o115.CSS.shadowCaret), t.insertAdjacentElement("beforeend", e);
                            }
                        },
                        {
                            key: "restoreCaret",
                            value: function(t262) {
                                var e = t262.querySelector(".".concat(o115.CSS.shadowCaret));
                                e && ((new c.default).expandToTag(e), setTimeout(function() {
                                    var t = document.createRange();
                                    t.selectNode(e), t.extractContents();
                                }, 50));
                            }
                        },
                        {
                            key: "insertContentAtCaretPosition",
                            value: function(t263) {
                                var e = document.createDocumentFragment(), n = document.createElement("div"), o = c.default.get(), r = c.default.range;
                                n.innerHTML = t263, Array.from(n.childNodes).forEach(function(t) {
                                    return e.appendChild(t);
                                }), 0 === e.childNodes.length && e.appendChild(new Text);
                                var i = e.lastChild;
                                r.deleteContents(), r.insertNode(e);
                                var a = document.createRange();
                                a.setStart(i, i.textContent.length), o.removeAllRanges(), o.addRange(a);
                            }
                        },
                        {
                            key: "getHigherLevelSiblings",
                            value: function(t, e) {
                                for(var n = t, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;)n = n.parentNode;
                                for(var r = "left" === e ? "previousSibling" : "nextSibling"; n[r];)n = n[r], o.push(n);
                                return o;
                            }
                        },
                        {
                            key: "positions",
                            get: function() {
                                return {
                                    START: "start",
                                    END: "end",
                                    DEFAULT: "default"
                                };
                            }
                        },
                        {
                            key: "isAtStart",
                            get: function() {
                                var t264 = c.default.get(), e180 = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput), n144 = t264.focusNode;
                                if (f.default.isNativeInput(e180)) return 0 === e180.selectionEnd;
                                if (!t264.anchorNode) return !1;
                                var o116 = n144.textContent.search(/\S/);
                                -1 === o116 && (o116 = 0);
                                var r = t264.focusOffset;
                                return n144.nodeType !== Node.TEXT_NODE && n144.childNodes.length && (n144.childNodes[r] ? (n144 = n144.childNodes[r], r = 0) : r = (n144 = n144.childNodes[r - 1]).textContent.length), !(!f.default.isLineBreakTag(e180) && !f.default.isEmpty(e180) || !this.getHigherLevelSiblings(n144, "left").every(function(t) {
                                    var e = f.default.isLineBreakTag(t), n = 1 === t.children.length && f.default.isLineBreakTag(t.children[0]), o = e || n;
                                    return f.default.isEmpty(t) && !o;
                                }) || r !== o116) || null === e180 || n144 === e180 && r <= o116;
                            }
                        },
                        {
                            key: "isAtEnd",
                            get: function() {
                                var t265 = c.default.get(), e181 = t265.focusNode, n = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
                                if (f.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
                                if (!t265.focusNode) return !1;
                                var o = t265.focusOffset;
                                if (e181.nodeType !== Node.TEXT_NODE && e181.childNodes.length && (e181.childNodes[o - 1] ? o = (e181 = e181.childNodes[o - 1]).textContent.length : (e181 = e181.childNodes[0], o = 0)), f.default.isLineBreakTag(n) || f.default.isEmpty(n)) {
                                    var r = this.getHigherLevelSiblings(e181, "right");
                                    if (r.every(function(t, e) {
                                        return e === r.length - 1 && f.default.isLineBreakTag(t) || f.default.isEmpty(t) && !f.default.isLineBreakTag(t);
                                    }) && o === e181.textContent.length) return !0;
                                }
                                var i = n.textContent.replace(/\s+$/, "");
                                return e181 === n && o >= i.length;
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    shadowCaret: "cdx-shadow-caret"
                                };
                            }
                        }
                    ]), o115;
                }(u.default);
                o114.default = g, g.displayName = "Caret", t260.exports = e178.default;
            }) ? o113.apply(e178, r62) : o113) || (t260.exports = i63);
        },
        function(t266, e182, n145) {
            var o117, r64, i65;
            "undefined" != typeof globalThis || "undefined", r64 = [
                e182,
                n145(23),
                n145(24),
                n145(2),
                n145(3),
                n145(5),
                n145(6),
                n145(4),
                n145(9),
                n145(25),
                n145(7)
            ], void 0 === (i65 = "function" == typeof (o117 = function(o118, r65, i66, a26, s19, l15, c12, u, f8, d, p) {
                var h = n145(8), v = n145(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o118, "__esModule", {
                    value: !0
                }), o118.default = void 0, r65 = v(r65), i66 = v(i66), a26 = v(a26), s19 = v(s19), l15 = v(l15), c12 = v(c12), u = v(u), f8 = v(f8), d = v(d), p = h(p);
                var y = function(t267) {
                    (0, l15.default)(f, t267);
                    var e183, n146, o119 = (e183 = f, function() {
                        var t, n = (0, u.default)(e183);
                        if (g()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c12.default)(this, t);
                    });
                    function f() {
                        var t;
                        return (0, a26.default)(this, f), (t = o119.apply(this, arguments)).onMouseUp = function() {
                            t.listeners.off(document, "mouseover", t.onMouseOver), t.listeners.off(document, "mouseup", t.onMouseUp);
                        }, t.onMouseOver = function(e) {
                            var n = t.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.getBlockByChildNode(e.relatedTarget) || t.lastSelectedBlock, a = o.getBlockByChildNode(e.target);
                            if (i && a && a !== i) {
                                if (i === t.firstSelectedBlock) return d.default.get().removeAllRanges(), i.selected = !0, a.selected = !0, void r.clearCache();
                                if (a === t.firstSelectedBlock) return i.selected = !1, a.selected = !1, void r.clearCache();
                                t.Editor.InlineToolbar.close(), t.toggleBlocksSelectedState(i, a), t.lastSelectedBlock = a;
                            }
                        }, t;
                    }
                    return (0, s19.default)(f, [
                        {
                            key: "prepare",
                            value: (n146 = (0, i66.default)(r65.default.mark(function t268() {
                                var e = this;
                                return r65.default.wrap(function(t269) {
                                    for(;;)switch(t269.prev = t269.next){
                                        case 0:
                                            this.listeners.on(document, "mousedown", function(t) {
                                                e.enableCrossBlockSelection(t);
                                            });
                                        case 1:
                                        case "end":
                                            return t269.stop();
                                    }
                                }, t268, this);
                            })), function() {
                                return n146.apply(this, arguments);
                            })
                        },
                        {
                            key: "watchSelection",
                            value: function(t) {
                                if (t.button === p.mouseButtons.LEFT) {
                                    var e = this.Editor.BlockManager;
                                    this.firstSelectedBlock = e.getBlock(t.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
                                }
                            }
                        },
                        {
                            key: "toggleBlockSelectedState",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = this.Editor, n = e.BlockManager, o = e.BlockSelection;
                                this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = n.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), d.default.get().removeAllRanges());
                                var r = n.blocks.indexOf(this.lastSelectedBlock) + (t ? 1 : -1), i = n.blocks[r];
                                i && (this.lastSelectedBlock.selected !== i.selected ? (i.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = i, this.Editor.InlineToolbar.close(), i.holder.scrollIntoView({
                                    block: "nearest"
                                }));
                            }
                        },
                        {
                            key: "clear",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret, i = n.blocks.indexOf(this.firstSelectedBlock), a = n.blocks.indexOf(this.lastSelectedBlock);
                                if (o.anyBlockSelected && i > -1 && a > -1) {
                                    if (t && t instanceof KeyboardEvent) switch(t.keyCode){
                                        case p.keyCodes.DOWN:
                                        case p.keyCodes.RIGHT:
                                            r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                            break;
                                        case p.keyCodes.UP:
                                        case p.keyCodes.LEFT:
                                            r.setToBlock(n.blocks[Math.min(i, a)], r.positions.START);
                                            break;
                                        default:
                                            r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                    }
                                    else r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                }
                                this.firstSelectedBlock = this.lastSelectedBlock = null;
                            }
                        },
                        {
                            key: "enableCrossBlockSelection",
                            value: function(t) {
                                var e = this.Editor.UI;
                                d.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t), e.nodes.redactor.contains(t.target) ? this.watchSelection(t) : this.Editor.BlockSelection.clearSelection(t);
                            }
                        },
                        {
                            key: "toggleBlocksSelectedState",
                            value: function(t, e) {
                                for(var n = this.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.blocks.indexOf(t), a = o.blocks.indexOf(e), s = t.selected !== e.selected, l = Math.min(i, a); l <= Math.max(i, a); l++){
                                    var c = o.blocks[l];
                                    c !== this.firstSelectedBlock && c !== (s ? t : e) && (o.blocks[l].selected = !o.blocks[l].selected, r.clearCache());
                                }
                            }
                        },
                        {
                            key: "isCrossBlockSelectionStarted",
                            get: function() {
                                return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
                            }
                        }
                    ]), f;
                }(f8.default);
                o118.default = y, y.displayName = "CrossBlockSelection", t266.exports = e182.default;
            }) ? o117.apply(e182, r64) : o117) || (t266.exports = i65);
        },
        function(t270, e184, n147) {
            var o120, r66, i67;
            "undefined" != typeof globalThis || "undefined", r66 = [
                e184,
                n147(23),
                n147(24),
                n147(2),
                n147(3),
                n147(5),
                n147(6),
                n147(4),
                n147(25),
                n147(9)
            ], void 0 === (i67 = "function" == typeof (o120 = function(o121, r, i68, a27, s20, l16, c, u, f, d7) {
                var p = n147(1);
                function h() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o121, "__esModule", {
                    value: !0
                }), o121.default = void 0, r = p(r), i68 = p(i68), a27 = p(a27), s20 = p(s20), l16 = p(l16), c = p(c), u = p(u), f = p(f);
                var v = function(t271) {
                    (0, l16.default)(d, t271);
                    var e185, n148, o122 = (e185 = d, function() {
                        var t, n = (0, u.default)(e185);
                        if (h()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c.default)(this, t);
                    });
                    function d() {
                        var t;
                        return (0, a27.default)(this, d), (t = o122.apply(this, arguments)).isStartedAtEditor = !1, t;
                    }
                    return (0, s20.default)(d, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this, e186 = this.Editor.UI;
                                this.readOnlyMutableListeners.on(e186.nodes.holder, "drop", function() {
                                    var e187 = (0, i68.default)(r.default.mark(function e188(n) {
                                        return r.default.wrap(function(e) {
                                            for(;;)switch(e.prev = e.next){
                                                case 0:
                                                    return e.next = 2, t.processDrop(n);
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                        }, e188);
                                    }));
                                    return function(t) {
                                        return e187.apply(this, arguments);
                                    };
                                }(), !0), this.readOnlyMutableListeners.on(e186.nodes.holder, "dragstart", function() {
                                    t.processDragStart();
                                }), this.readOnlyMutableListeners.on(e186.nodes.holder, "dragover", function(e) {
                                    t.processDragOver(e);
                                }, !0);
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "processDrop",
                            value: (n148 = (0, i68.default)(r.default.mark(function t272(e) {
                                var n, o, i, a, s, l;
                                return r.default.wrap(function(t273) {
                                    for(;;)switch(t273.prev = t273.next){
                                        case 0:
                                            return n = this.Editor, o = n.BlockManager, i = n.Caret, a = n.Paste, e.preventDefault(), o.blocks.forEach(function(t) {
                                                t.dropTarget = !1;
                                            }), f.default.isAtEditor && !f.default.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1, (s = o.setCurrentBlockByChildNode(e.target)) ? this.Editor.Caret.setToBlock(s, i.positions.END) : (l = o.setCurrentBlockByChildNode(o.lastBlock.holder), this.Editor.Caret.setToBlock(l, i.positions.END)), t273.next = 9, a.processDataTransfer(e.dataTransfer, !0);
                                        case 9:
                                        case "end":
                                            return t273.stop();
                                    }
                                }, t272, this);
                            })), function(t) {
                                return n148.apply(this, arguments);
                            })
                        },
                        {
                            key: "processDragStart",
                            value: function() {
                                f.default.isAtEditor && !f.default.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "processDragOver",
                            value: function(t) {
                                t.preventDefault();
                            }
                        }
                    ]), d;
                }((d7 = p(d7)).default);
                o121.default = v, v.displayName = "DragNDrop", t270.exports = e184.default;
            }) ? o120.apply(e184, r66) : o120) || (t270.exports = i67);
        },
        function(t274, e189, n149) {
            var o123, r67, i69;
            "undefined" != typeof globalThis || "undefined", r67 = [
                e189,
                n149(2),
                n149(3),
                n149(5),
                n149(6),
                n149(4),
                n149(9),
                n149(7)
            ], void 0 === (i69 = "function" == typeof (o123 = function(o124, r, i, a, s, l, c, u) {
                var f = n149(8), d = n149(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o124, "__esModule", {
                    value: !0
                }), o124.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
                var h = function(t275) {
                    (0, a.default)(o125, t275);
                    var e, n150 = (e = o125, function() {
                        var t, n = (0, l.default)(e);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o125() {
                        var t;
                        return (0, r.default)(this, o125), (t = n150.apply(this, arguments)).disabled = !1, t;
                    }
                    return (0, i.default)(o125, [
                        {
                            key: "enable",
                            value: function() {
                                this.disabled = !1;
                            }
                        },
                        {
                            key: "disable",
                            value: function() {
                                this.disabled = !0;
                            }
                        },
                        {
                            key: "onChange",
                            value: function(t) {
                                !this.disabled && u.isFunction(this.config.onChange) && this.config.onChange(this.Editor.API.methods, t);
                            }
                        }
                    ]), o125;
                }(c.default);
                o124.default = h, h.displayName = "ModificationsObserver", t274.exports = e189.default;
            }) ? o123.apply(e189, r67) : o123) || (t274.exports = i69);
        },
        function(t276, e190, n151) {
            var o126, r68, i70;
            "undefined" != typeof globalThis || "undefined", r68 = [
                e190,
                n151(42),
                n151(30),
                n151(23),
                n151(24),
                n151(2),
                n151(3),
                n151(5),
                n151(6),
                n151(4),
                n151(9),
                n151(15),
                n151(7),
                n151(65)
            ], void 0 === (i70 = "function" == typeof (o126 = function(o127, r69, i71, a28, s21, l17, c13, u11, f9, d8, p5, h, v, g) {
                var y6 = n151(8), b3 = n151(1);
                function m() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o127, "__esModule", {
                    value: !0
                }), o127.default = void 0, r69 = b3(r69), i71 = b3(i71), a28 = b3(a28), s21 = b3(s21), l17 = b3(l17), c13 = b3(c13), u11 = b3(u11), f9 = b3(f9), d8 = b3(d8), p5 = b3(p5), h = b3(h), v = y6(v);
                var k2 = function(t277) {
                    (0, u11.default)(T, t277);
                    var e191, n152, o128, p6, y, b, k, x, w, S = (e191 = T, function() {
                        var t, n = (0, d8.default)(e191);
                        if (m()) {
                            var o = (0, d8.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f9.default)(this, t);
                    });
                    function T() {
                        var t278;
                        return (0, l17.default)(this, T), (t278 = S.apply(this, arguments)).MIME_TYPE = "application/x-editor-js", t278.toolsTags = {
                        }, t278.tagsByTool = {
                        }, t278.toolsPatterns = [], t278.toolsFiles = {
                        }, t278.exceptionList = [], t278.processTool = function(e) {
                            try {
                                var n = e.create({
                                }, {
                                }, !1);
                                if (!1 === e.pasteConfig) return void t278.exceptionList.push(e.name);
                                if (!v.isFunction(n.onPaste)) return;
                                t278.getTagsConfig(e), t278.getFilesConfig(e), t278.getPatternsConfig(e);
                            } catch (t) {
                                v.log("Paste handling for «".concat(e.name, "» Tool hasn't been set up because of the error"), "warn", t);
                            }
                        }, t278.handlePasteEvent = (function() {
                            var e192 = (0, s21.default)(a28.default.mark(function e193(n) {
                                var o, r, i;
                                return a28.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (o = t278.Editor, r = o.BlockManager, i = o.Toolbar, r.currentBlock && (!t278.isNativeBehaviour(n.target) || n.clipboardData.types.includes("Files"))) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (!r.currentBlock || !t278.exceptionList.includes(r.currentBlock.name)) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            n.preventDefault(), t278.processDataTransfer(n.clipboardData), r.clearFocused(), i.close();
                                        case 9:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e193);
                            }));
                            return function(t) {
                                return e192.apply(this, arguments);
                            };
                        })(), t278;
                    }
                    return (0, c13.default)(T, [
                        {
                            key: "prepare",
                            value: (w = (0, s21.default)(a28.default.mark(function t279() {
                                return a28.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            this.processTools();
                                        case 1:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t279, this);
                            })), function() {
                                return w.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.unsetCallback() : this.setCallback();
                            }
                        },
                        {
                            key: "processDataTransfer",
                            value: (x = (0, s21.default)(a28.default.mark(function t280(e) {
                                var n, o, r, i, s, l, c, u, f, d = arguments;
                                return a28.default.wrap(function(t281) {
                                    for(;;)switch(t281.prev = t281.next){
                                        case 0:
                                            if (n = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor.Tools, !((r = e.types).includes ? r.includes("Files") : r.contains("Files"))) {
                                                t281.next = 8;
                                                break;
                                            }
                                            return t281.next = 7, this.processFiles(e.files);
                                        case 7:
                                            return t281.abrupt("return");
                                        case 8:
                                            if (i = e.getData(this.MIME_TYPE), s = e.getData("text/plain"), l = e.getData("text/html"), !i) {
                                                t281.next = 19;
                                                break;
                                            }
                                            return t281.prev = 12, this.insertEditorJSData(JSON.parse(i)), t281.abrupt("return");
                                        case 17:
                                            t281.prev = 17, t281.t0 = t281.catch(12);
                                        case 19:
                                            if (n && s.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : s) + "</p>"), c = Object.keys(this.toolsTags).reduce(function(t, e) {
                                                return t[e.toLowerCase()] = !0, t;
                                            }, {
                                            }), u = Object.assign({
                                            }, c, o.getAllInlineToolsSanitizeConfig(), {
                                                br: {
                                                }
                                            }), (f = (0, g.clean)(l, u)).trim() && f.trim() !== s && h.default.isHTMLString(f)) {
                                                t281.next = 28;
                                                break;
                                            }
                                            return t281.next = 26, this.processText(s);
                                        case 26:
                                            t281.next = 30;
                                            break;
                                        case 28:
                                            return t281.next = 30, this.processText(f, !0);
                                        case 30:
                                        case "end":
                                            return t281.stop();
                                    }
                                }, t280, this, [
                                    [
                                        12,
                                        17
                                    ]
                                ]);
                            })), function(t) {
                                return x.apply(this, arguments);
                            })
                        },
                        {
                            key: "processText",
                            value: (k = (0, s21.default)(a28.default.mark(function t282(e194) {
                                var n153, o, r, i, l, c, u, f = this, d = arguments;
                                return a28.default.wrap(function(t283) {
                                    for(;;)switch(t283.prev = t283.next){
                                        case 0:
                                            if (n153 = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor, r = o.Caret, i = o.BlockManager, (l = n153 ? this.processHTML(e194) : this.processPlain(e194)).length) {
                                                t283.next = 5;
                                                break;
                                            }
                                            return t283.abrupt("return");
                                        case 5:
                                            if (1 !== l.length) {
                                                t283.next = 8;
                                                break;
                                            }
                                            return l[0].isBlock ? this.processSingleBlock(l.pop()) : this.processInlinePaste(l.pop()), t283.abrupt("return");
                                        case 8:
                                            c = i.currentBlock && i.currentBlock.tool.isDefault, u = c && i.currentBlock.isEmpty, l.map(function() {
                                                var t284 = (0, s21.default)(a28.default.mark(function t285(e, n) {
                                                    return a28.default.wrap(function(t) {
                                                        for(;;)switch(t.prev = t.next){
                                                            case 0:
                                                                return t.abrupt("return", f.insertBlock(e, 0 === n && u));
                                                            case 1:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                    }, t285);
                                                }));
                                                return function(e, n) {
                                                    return t284.apply(this, arguments);
                                                };
                                            }()), i.currentBlock && r.setToBlock(i.currentBlock, r.positions.END);
                                        case 12:
                                        case "end":
                                            return t283.stop();
                                    }
                                }, t282, this);
                            })), function(t) {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "setCallback",
                            value: function() {
                                this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
                            }
                        },
                        {
                            key: "unsetCallback",
                            value: function() {
                                this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
                            }
                        },
                        {
                            key: "processTools",
                            value: function() {
                                var t = this.Editor.Tools.blockTools;
                                Array.from(t.values()).forEach(this.processTool);
                            }
                        },
                        {
                            key: "getTagsConfig",
                            value: function(t286) {
                                var e = this, n154 = t286.pasteConfig.tags || [];
                                n154.forEach(function(n) {
                                    Object.prototype.hasOwnProperty.call(e.toolsTags, n) ? v.log("Paste handler for «".concat(t286.name, "» Tool on «").concat(n, "» tag is skipped ") + "because it is already used by «".concat(e.toolsTags[n].tool.name, "» Tool."), "warn") : e.toolsTags[n.toUpperCase()] = {
                                        tool: t286
                                    };
                                }), this.tagsByTool[t286.name] = n154.map(function(t) {
                                    return t.toUpperCase();
                                });
                            }
                        },
                        {
                            key: "getFilesConfig",
                            value: function(t) {
                                var e195 = t.pasteConfig.files, n = void 0 === e195 ? {
                                } : e195, o = n.extensions, r = n.mimeTypes;
                                (o || r) && (o && !Array.isArray(o) && (v.log("«extensions» property of the onDrop config for «".concat(t.name, "» Tool should be an array")), o = []), r && !Array.isArray(r) && (v.log("«mimeTypes» property of the onDrop config for «".concat(t.name, "» Tool should be an array")), r = []), r && (r = r.filter(function(e) {
                                    return !!v.isValidMimeType(e) || (v.log("MIME type value «".concat(e, "» for the «").concat(t.name, "» Tool is not a valid MIME type"), "warn"), !1);
                                })), this.toolsFiles[t.name] = {
                                    extensions: o || [],
                                    mimeTypes: r || []
                                });
                            }
                        },
                        {
                            key: "getPatternsConfig",
                            value: function(t) {
                                var e = this;
                                t.pasteConfig.patterns && !v.isEmpty(t.pasteConfig.patterns) && Object.entries(t.pasteConfig.patterns).forEach(function(n) {
                                    var o = (0, i71.default)(n, 2), r = o[0], a = o[1];
                                    a instanceof RegExp || v.log("Pattern ".concat(a, " for «").concat(t.name, "» Tool is skipped because it should be a Regexp instance."), "warn"), e.toolsPatterns.push({
                                        key: r,
                                        pattern: a,
                                        tool: t
                                    });
                                });
                            }
                        },
                        {
                            key: "isNativeBehaviour",
                            value: function(t) {
                                return h.default.isNativeInput(t);
                            }
                        },
                        {
                            key: "processFiles",
                            value: (b = (0, s21.default)(a28.default.mark(function t287(e196) {
                                var n, o, r, i, s = this;
                                return a28.default.wrap(function(t288) {
                                    for(;;)switch(t288.prev = t288.next){
                                        case 0:
                                            return n = this.Editor.BlockManager, t288.next = 3, Promise.all(Array.from(e196).map(function(t) {
                                                return s.processFile(t);
                                            }));
                                        case 3:
                                            o = (o = t288.sent).filter(function(t) {
                                                return !!t;
                                            }), r = n.currentBlock.tool.isDefault, i = r && n.currentBlock.isEmpty, o.forEach(function(t, e) {
                                                n.paste(t.type, t.event, 0 === e && i);
                                            });
                                        case 8:
                                        case "end":
                                            return t288.stop();
                                    }
                                }, t287, this);
                            })), function(t) {
                                return b.apply(this, arguments);
                            })
                        },
                        {
                            key: "processFile",
                            value: (y = (0, s21.default)(a28.default.mark(function t289(e197) {
                                var n155, o129, r70, s22, l18;
                                return a28.default.wrap(function(t290) {
                                    for(;;)switch(t290.prev = t290.next){
                                        case 0:
                                            if (n155 = v.getFileExtension(e197), o129 = Object.entries(this.toolsFiles).find(function(t291) {
                                                var o130 = (0, i71.default)(t291, 2), r71 = (o130[0], o130[1]), a = r71.mimeTypes, s = r71.extensions, l = e197.type.split("/"), c = (0, i71.default)(l, 2), u = c[0], f = c[1], d = s.find(function(t) {
                                                    return t.toLowerCase() === n155.toLowerCase();
                                                }), p = a.find(function(t) {
                                                    var e = t.split("/"), n = (0, i71.default)(e, 2), o = n[0], r = n[1];
                                                    return o === u && (r === f || "*" === r);
                                                });
                                                return !!d || !!p;
                                            })) {
                                                t290.next = 4;
                                                break;
                                            }
                                            return t290.abrupt("return");
                                        case 4:
                                            return r70 = (0, i71.default)(o129, 1), s22 = r70[0], l18 = this.composePasteEvent("file", {
                                                file: e197
                                            }), t290.abrupt("return", {
                                                event: l18,
                                                type: s22
                                            });
                                        case 7:
                                        case "end":
                                            return t290.stop();
                                    }
                                }, t289, this);
                            })), function(t) {
                                return y.apply(this, arguments);
                            })
                        },
                        {
                            key: "processHTML",
                            value: function(t292) {
                                var e = this, n = this.Editor.Tools, o131 = h.default.make("DIV");
                                return o131.innerHTML = t292, this.getNodes(o131).map(function(t293) {
                                    var o, r = n.defaultTool, i = !1;
                                    switch(t293.nodeType){
                                        case Node.DOCUMENT_FRAGMENT_NODE:
                                            (o = h.default.make("div")).appendChild(t293);
                                            break;
                                        case Node.ELEMENT_NODE:
                                            o = t293, i = !0, e.toolsTags[o.tagName] && (r = e.toolsTags[o.tagName].tool);
                                    }
                                    var a = r.pasteConfig.tags.reduce(function(t, e) {
                                        return t[e.toLowerCase()] = {
                                        }, t;
                                    }, {
                                    }), s = Object.assign({
                                    }, a, r.baseSanitizeConfig);
                                    o.innerHTML = (0, g.clean)(o.innerHTML, s);
                                    var l = e.composePasteEvent("tag", {
                                        data: o
                                    });
                                    return {
                                        content: o,
                                        isBlock: i,
                                        tool: r.name,
                                        event: l
                                    };
                                }).filter(function(t) {
                                    return !h.default.isNodeEmpty(t.content) || h.default.isSingleTag(t.content);
                                });
                            }
                        },
                        {
                            key: "processPlain",
                            value: function(t294) {
                                var e = this, n156 = this.config.defaultBlock;
                                if (!t294) return [];
                                var o = n156;
                                return t294.split(/\r?\n/).filter(function(t) {
                                    return t.trim();
                                }).map(function(t) {
                                    var n = h.default.make("div");
                                    n.textContent = t;
                                    var r = e.composePasteEvent("tag", {
                                        data: n
                                    });
                                    return {
                                        content: n,
                                        tool: o,
                                        isBlock: !1,
                                        event: r
                                    };
                                });
                            }
                        },
                        {
                            key: "processSingleBlock",
                            value: (p6 = (0, s21.default)(a28.default.mark(function t295(e) {
                                var n, o, r, i;
                                return a28.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = this.Editor, o = n.Caret, r = n.BlockManager, (i = r.currentBlock) && e.tool === i.name && h.default.containsOnlyInlineElements(e.content.innerHTML)) {
                                                t.next = 5;
                                                break;
                                            }
                                            return this.insertBlock(e, (null == i ? void 0 : i.tool.isDefault) && i.isEmpty), t.abrupt("return");
                                        case 5:
                                            o.insertContentAtCaretPosition(e.content.innerHTML);
                                        case 6:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t295, this);
                            })), function(t) {
                                return p6.apply(this, arguments);
                            })
                        },
                        {
                            key: "processInlinePaste",
                            value: (o128 = (0, s21.default)(a28.default.mark(function t296(e) {
                                var n, o, r, i, s, l, c, u;
                                return a28.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = this.Editor, o = n.BlockManager, r = n.Caret, i = e.content, !(o.currentBlock && o.currentBlock.tool.isDefault && i.textContent.length < T.PATTERN_PROCESSING_MAX_LENGTH)) {
                                                t.next = 12;
                                                break;
                                            }
                                            return t.next = 6, this.processPattern(i.textContent);
                                        case 6:
                                            if (!(s = t.sent)) {
                                                t.next = 12;
                                                break;
                                            }
                                            return l = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty, c = o.paste(s.tool, s.event, l), r.setToBlock(c, r.positions.END), t.abrupt("return");
                                        case 12:
                                            o.currentBlock && o.currentBlock.currentInput ? (u = o.currentBlock.tool.sanitizeConfig, document.execCommand("insertHTML", !1, (0, g.clean)(i.innerHTML, u))) : this.insertBlock(e);
                                        case 13:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t296, this);
                            })), function(t) {
                                return o128.apply(this, arguments);
                            })
                        },
                        {
                            key: "processPattern",
                            value: (n152 = (0, s21.default)(a28.default.mark(function t297(e) {
                                var n157, o;
                                return a28.default.wrap(function(t298) {
                                    for(;;)switch(t298.prev = t298.next){
                                        case 0:
                                            if (n157 = this.toolsPatterns.find(function(t) {
                                                var n = t.pattern.exec(e);
                                                return !!n && e === n.shift();
                                            })) {
                                                t298.next = 3;
                                                break;
                                            }
                                            return t298.abrupt("return");
                                        case 3:
                                            return o = this.composePasteEvent("pattern", {
                                                key: n157.key,
                                                data: e
                                            }), t298.abrupt("return", {
                                                event: o,
                                                tool: n157.tool.name
                                            });
                                        case 5:
                                        case "end":
                                            return t298.stop();
                                    }
                                }, t297, this);
                            })), function(t) {
                                return n152.apply(this, arguments);
                            })
                        },
                        {
                            key: "insertBlock",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = this.Editor, r = o.BlockManager, i = o.Caret, a = r.currentBlock;
                                if (n && a && a.isEmpty) return e = r.paste(t.tool, t.event, !0), void i.setToBlock(e, i.positions.END);
                                e = r.paste(t.tool, t.event), i.setToBlock(e, i.positions.END);
                            }
                        },
                        {
                            key: "insertEditorJSData",
                            value: function(t299) {
                                var e198 = this.Editor, n = e198.BlockManager, o = e198.Caret, r72 = e198.Tools;
                                (0, g.sanitizeBlocks)(t299, function(t) {
                                    return r72.blockTools.get(t).sanitizeConfig;
                                }).forEach(function(t, e) {
                                    var r = t.tool, i = t.data, a = !1;
                                    0 === e && (a = n.currentBlock && n.currentBlock.tool.isDefault && n.currentBlock.isEmpty);
                                    var s = n.insert({
                                        tool: r,
                                        data: i,
                                        replace: a
                                    });
                                    o.setToBlock(s, o.positions.END);
                                });
                            }
                        },
                        {
                            key: "processElementNode",
                            value: function(t300, e199, n) {
                                var o = Object.keys(this.toolsTags), i = t300, a = (this.toolsTags[i.tagName] || {
                                }).tool, s = this.tagsByTool[null == a ? void 0 : a.name] || [], l = o.includes(i.tagName), c = h.default.blockElements.includes(i.tagName.toLowerCase()), u = Array.from(i.children).some(function(t) {
                                    var e = t.tagName;
                                    return o.includes(e) && !s.includes(e);
                                }), f = Array.from(i.children).some(function(t) {
                                    var e = t.tagName;
                                    return h.default.blockElements.includes(e.toLowerCase());
                                });
                                return c || l || u ? l && !u || c && !f && !u ? [].concat((0, r69.default)(e199), [
                                    n,
                                    i
                                ]) : void 0 : (n.appendChild(i), [].concat((0, r69.default)(e199), [
                                    n
                                ]));
                            }
                        },
                        {
                            key: "getNodes",
                            value: function(t301) {
                                var e, n = this;
                                return Array.from(t301.childNodes).reduce(function t(o, i) {
                                    if (h.default.isEmpty(i) && !h.default.isSingleTag(i)) return o;
                                    var a = o[o.length - 1], s = new DocumentFragment;
                                    switch(a && h.default.isFragment(a) && (s = o.pop()), i.nodeType){
                                        case Node.ELEMENT_NODE:
                                            if (e = n.processElementNode(i, o, s)) return e;
                                            break;
                                        case Node.TEXT_NODE:
                                            return s.appendChild(i), [].concat((0, r69.default)(o), [
                                                s
                                            ]);
                                        default:
                                            return [].concat((0, r69.default)(o), [
                                                s
                                            ]);
                                    }
                                    return [].concat((0, r69.default)(o), (0, r69.default)(Array.from(i.childNodes).reduce(t, [])));
                                }, []);
                            }
                        },
                        {
                            key: "composePasteEvent",
                            value: function(t, e) {
                                return new CustomEvent(t, {
                                    detail: e
                                });
                            }
                        }
                    ]), T;
                }(p5.default);
                o127.default = k2, k2.displayName = "Paste", k2.PATTERN_PROCESSING_MAX_LENGTH = 450, t276.exports = e190.default;
            }) ? o126.apply(e190, r68) : o126) || (t276.exports = i70);
        },
        function(t302, e200, n158) {
            var o132, r73, i72;
            "undefined" != typeof globalThis || "undefined", r73 = [
                e200,
                n158(23),
                n158(30),
                n158(24),
                n158(2),
                n158(3),
                n158(5),
                n158(6),
                n158(4),
                n158(9),
                n158(148)
            ], void 0 === (i72 = "function" == typeof (o132 = function(o133, r, i73, a29, s, l, c, u, f, d9, p) {
                var h4 = n158(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o133, "__esModule", {
                    value: !0
                }), o133.default = void 0, r = h4(r), i73 = h4(i73), a29 = h4(a29), s = h4(s), l = h4(l), c = h4(c), u = h4(u), f = h4(f);
                var g = function(t303) {
                    (0, c.default)(h, t303);
                    var e201, n159, o134, d = (e201 = h, function() {
                        var t, n = (0, f.default)(e201);
                        if (v()) {
                            var o = (0, f.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, u.default)(this, t);
                    });
                    function h() {
                        var t;
                        return (0, s.default)(this, h), (t = d.apply(this, arguments)).toolsDontSupportReadOnly = [], t.readOnlyEnabled = !1, t;
                    }
                    return (0, l.default)(h, [
                        {
                            key: "prepare",
                            value: (o134 = (0, a29.default)(r.default.mark(function t304() {
                                var e202, n160, o;
                                return r.default.wrap(function(t305) {
                                    for(;;)switch(t305.prev = t305.next){
                                        case 0:
                                            e202 = this.Editor.Tools, n160 = e202.blockTools, o = [], Array.from(n160.entries()).forEach(function(t) {
                                                var e = (0, i73.default)(t, 2), n = e[0];
                                                e[1].isReadOnlySupported || o.push(n);
                                            }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
                                        case 7:
                                        case "end":
                                            return t305.stop();
                                    }
                                }, t304, this);
                            })), function() {
                                return o134.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggle",
                            value: (n159 = (0, a29.default)(r.default.mark(function t306() {
                                var e, n, o, i, a = arguments;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            (e = a.length > 0 && void 0 !== a[0] ? a[0] : !this.readOnlyEnabled) && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError(), n = this.readOnlyEnabled, this.readOnlyEnabled = e, t.t0 = r.default.keys(this.Editor);
                                        case 5:
                                            if ((t.t1 = t.t0()).done) {
                                                t.next = 12;
                                                break;
                                            }
                                            if (o = t.t1.value, this.Editor[o].toggleReadOnly) {
                                                t.next = 9;
                                                break;
                                            }
                                            return t.abrupt("continue", 5);
                                        case 9:
                                            this.Editor[o].toggleReadOnly(e), t.next = 5;
                                            break;
                                        case 12:
                                            if (n !== e) {
                                                t.next = 14;
                                                break;
                                            }
                                            return t.abrupt("return", this.readOnlyEnabled);
                                        case 14:
                                            return t.next = 16, this.Editor.Saver.save();
                                        case 16:
                                            return i = t.sent, t.next = 19, this.Editor.BlockManager.clear();
                                        case 19:
                                            return t.next = 21, this.Editor.Renderer.render(i.blocks);
                                        case 21:
                                            return t.abrupt("return", this.readOnlyEnabled);
                                        case 22:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t306, this);
                            })), function() {
                                return n159.apply(this, arguments);
                            })
                        },
                        {
                            key: "throwCriticalError",
                            value: function() {
                                throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", "), " don't support read-only mode."));
                            }
                        },
                        {
                            key: "isEnabled",
                            get: function() {
                                return this.readOnlyEnabled;
                            }
                        }
                    ]), h;
                }((d9 = h4(d9)).default);
                o133.default = g, g.displayName = "ReadOnly", t302.exports = e200.default;
            }) ? o132.apply(e200, r73) : o132) || (t302.exports = i72);
        },
        function(t307, e203, n161) {
            var o135, r74, i74;
            "undefined" != typeof globalThis || "undefined", r74 = [
                e203,
                n161(2),
                n161(3),
                n161(5),
                n161(6),
                n161(4),
                n161(9),
                n161(15),
                n161(25),
                n161(66)
            ], void 0 === (i74 = "function" == typeof (o135 = function(o136, r75, i75, a30, s23, l19, c14, u12, f10, d10) {
                var p = n161(1);
                function h(t308) {
                    if ("undefined" == typeof Symbol || null == t308[Symbol.iterator]) {
                        if (Array.isArray(t308) || (t308 = (function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return v(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0;
                            }
                        })(t308))) {
                            var e204 = 0, n162 = function() {
                            };
                            return {
                                s: n162,
                                n: function() {
                                    return e204 >= t308.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t308[e204++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: n162
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o, r, i = !0, a = !1;
                    return {
                        s: function() {
                            o = t308[Symbol.iterator]();
                        },
                        n: function() {
                            var t = o.next();
                            return i = t.done, t;
                        },
                        e: function(t) {
                            a = !0, r = t;
                        },
                        f: function() {
                            try {
                                i || null == o.return || o.return();
                            } finally{
                                if (a) throw r;
                            }
                        }
                    };
                }
                function v(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                    return o;
                }
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o136, "__esModule", {
                    value: !0
                }), o136.default = void 0, r75 = p(r75), i75 = p(i75), a30 = p(a30), s23 = p(s23), l19 = p(l19), c14 = p(c14), u12 = p(u12), f10 = p(f10), d10 = p(d10);
                var y = function(t309) {
                    (0, a30.default)(o137, t309);
                    var e206, n164 = (e206 = o137, function() {
                        var t, n = (0, l19.default)(e206);
                        if (g()) {
                            var o = (0, l19.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s23.default)(this, t);
                    });
                    function o137() {
                        var t;
                        return (0, r75.default)(this, o137), (t = n164.apply(this, arguments)).isRectSelectionActivated = !1, t.SCROLL_SPEED = 3, t.HEIGHT_OF_SCROLL_ZONE = 40, t.BOTTOM_SCROLL_ZONE = 1, t.TOP_SCROLL_ZONE = 2, t.MAIN_MOUSE_BUTTON = 0, t.mousedown = !1, t.isScrolling = !1, t.inScrollZone = null, t.startX = 0, t.startY = 0, t.mouseX = 0, t.mouseY = 0, t.stackOfSelected = [], t.listenerIds = [], t;
                    }
                    return (0, i75.default)(o137, [
                        {
                            key: "prepare",
                            value: function() {
                                this.enableModuleBindings();
                            }
                        },
                        {
                            key: "startSelection",
                            value: function(t310, e) {
                                var n = document.elementFromPoint(t310 - window.pageXOffset, e - window.pageYOffset);
                                n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
                                var o = [
                                    ".".concat(d10.default.CSS.content),
                                    ".".concat(this.Editor.Toolbar.CSS.toolbar),
                                    ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)
                                ], r = n.closest("." + this.Editor.UI.CSS.editorWrapper), i = o.some(function(t) {
                                    return !!n.closest(t);
                                });
                                r && !i && (this.mousedown = !0, this.startX = t310, this.startY = e);
                            }
                        },
                        {
                            key: "endSelection",
                            value: function() {
                                this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
                            }
                        },
                        {
                            key: "isRectActivated",
                            value: function() {
                                return this.isRectSelectionActivated;
                            }
                        },
                        {
                            key: "clearSelection",
                            value: function() {
                                this.isRectSelectionActivated = !1;
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this, e207 = this.genHTML().container;
                                this.listeners.on(e207, "mousedown", function(e) {
                                    t.processMouseDown(e);
                                }, !1), this.listeners.on(document.body, "mousemove", function(e) {
                                    t.processMouseMove(e);
                                }, !1), this.listeners.on(document.body, "mouseleave", function() {
                                    t.processMouseLeave();
                                }), this.listeners.on(window, "scroll", function(e) {
                                    t.processScroll(e);
                                }, !1), this.listeners.on(document.body, "mouseup", function() {
                                    t.processMouseUp();
                                }, !1);
                            }
                        },
                        {
                            key: "processMouseDown",
                            value: function(t) {
                                t.button === this.MAIN_MOUSE_BUTTON && (null !== t.target.closest(u12.default.allInputsSelector) || this.startSelection(t.pageX, t.pageY));
                            }
                        },
                        {
                            key: "processMouseMove",
                            value: function(t) {
                                this.changingRectangle(t), this.scrollByZones(t.clientY);
                            }
                        },
                        {
                            key: "processMouseLeave",
                            value: function() {
                                this.clearSelection(), this.endSelection();
                            }
                        },
                        {
                            key: "processScroll",
                            value: function(t) {
                                this.changingRectangle(t);
                            }
                        },
                        {
                            key: "processMouseUp",
                            value: function() {
                                this.endSelection();
                            }
                        },
                        {
                            key: "scrollByZones",
                            value: function(t) {
                                this.inScrollZone = null, t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1;
                            }
                        },
                        {
                            key: "genHTML",
                            value: function() {
                                var t = this.Editor.UI, e = t.nodes.holder.querySelector("." + t.CSS.editorWrapper), n = u12.default.make("div", o137.CSS.overlay, {
                                }), r = u12.default.make("div", o137.CSS.overlayContainer, {
                                }), i = u12.default.make("div", o137.CSS.rect, {
                                });
                                return r.appendChild(i), n.appendChild(r), e.appendChild(n), this.overlayRectangle = i, {
                                    container: e,
                                    overlay: n
                                };
                            }
                        },
                        {
                            key: "scrollVertical",
                            value: function(t) {
                                var e = this;
                                if (this.inScrollZone && this.mousedown) {
                                    var n = window.pageYOffset;
                                    window.scrollBy(0, t), this.mouseY += window.pageYOffset - n, setTimeout(function() {
                                        e.scrollVertical(t);
                                    }, 0);
                                }
                            }
                        },
                        {
                            key: "changingRectangle",
                            value: function(t) {
                                if (this.mousedown) {
                                    void 0 !== t.pageY && (this.mouseX = t.pageX, this.mouseY = t.pageY);
                                    var e = this.genInfoForMouseSelection(), n = e.rightPos, o = e.leftPos, r = e.index, i = this.startX > n && this.mouseX > n, a = this.startX < o && this.mouseX < o;
                                    this.rectCrossesBlocks = !(i || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), void 0 !== r && (this.trySelectNextBlock(r), this.inverseSelection(), f10.default.get().removeAllRanges(), t.preventDefault());
                                }
                            }
                        },
                        {
                            key: "shrinkRectangleToPoint",
                            value: function() {
                                this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
                            }
                        },
                        {
                            key: "inverseSelection",
                            value: function() {
                                var t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
                                if (this.rectCrossesBlocks && !t) {
                                    var e, n = h(this.stackOfSelected);
                                    try {
                                        for(n.s(); !(e = n.n()).done;){
                                            var o = e.value;
                                            this.Editor.BlockSelection.selectBlockByIndex(o);
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                }
                                if (!this.rectCrossesBlocks && t) {
                                    var r, i = h(this.stackOfSelected);
                                    try {
                                        for(i.s(); !(r = i.n()).done;){
                                            var a = r.value;
                                            this.Editor.BlockSelection.unSelectBlockByIndex(a);
                                        }
                                    } catch (t) {
                                        i.e(t);
                                    } finally{
                                        i.f();
                                    }
                                }
                            }
                        },
                        {
                            key: "updateRectangleSize",
                            value: function() {
                                this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
                            }
                        },
                        {
                            key: "genInfoForMouseSelection",
                            value: function() {
                                var t311, e = document.body.offsetWidth / 2, n = this.mouseY - window.pageYOffset, o = document.elementFromPoint(e, n), r = this.Editor.BlockManager.getBlockByChildNode(o);
                                void 0 !== r && (t311 = this.Editor.BlockManager.blocks.findIndex(function(t) {
                                    return t.holder === r.holder;
                                }));
                                var i = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d10.default.CSS.content), a = Number.parseInt(window.getComputedStyle(i).width, 10) / 2;
                                return {
                                    index: t311,
                                    leftPos: e - a,
                                    rightPos: e + a
                                };
                            }
                        },
                        {
                            key: "addBlockInSelection",
                            value: function(t) {
                                this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t), this.stackOfSelected.push(t);
                            }
                        },
                        {
                            key: "trySelectNextBlock",
                            value: function(t) {
                                var e = this, n = this.stackOfSelected[this.stackOfSelected.length - 1] === t, o = this.stackOfSelected.length;
                                if (!n) {
                                    var r = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0, i = 0;
                                    o > 1 && (i = r ? 1 : -1);
                                    var a = t > this.stackOfSelected[o - 1] && 1 === i, s = t < this.stackOfSelected[o - 1] && -1 === i, l = !(a || s || 0 === i);
                                    if (l || !(t > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                                        if (!l && t < this.stackOfSelected[o - 1]) for(var c = this.stackOfSelected[o - 1] - 1; c >= t; c--)this.addBlockInSelection(c);
                                        else if (l) {
                                            var u, f = o - 1;
                                            for(u = t > this.stackOfSelected[o - 1] ? function() {
                                                return t > e.stackOfSelected[f];
                                            } : function() {
                                                return t < e.stackOfSelected[f];
                                            }; u();)this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]), this.stackOfSelected.pop(), f--;
                                        }
                                    } else for(var d = this.stackOfSelected[o - 1] + 1 || t; d <= t; d++)this.addBlockInSelection(d);
                                }
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    overlay: "codex-editor-overlay",
                                    overlayContainer: "codex-editor-overlay__container",
                                    rect: "codex-editor-overlay__rectangle",
                                    topScrollZone: "codex-editor-overlay__scroll-zone--top",
                                    bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
                                };
                            }
                        }
                    ]), o137;
                }(c14.default);
                o136.default = y, y.displayName = "RectangleSelection", t307.exports = e203.default;
            }) ? o135.apply(e203, r74) : o135) || (t307.exports = i74);
        },
        function(t312, e208, n165) {
            var o138, r76, i76;
            "undefined" != typeof globalThis || "undefined", r76 = [
                e208,
                n165(23),
                n165(24),
                n165(2),
                n165(3),
                n165(5),
                n165(6),
                n165(4),
                n165(9),
                n165(7)
            ], void 0 === (i76 = "function" == typeof (o138 = function(o139, r, i77, a31, s24, l20, c15, u13, f11, d) {
                var p7 = n165(8), h = n165(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o139, "__esModule", {
                    value: !0
                }), o139.default = void 0, r = h(r), i77 = h(i77), a31 = h(a31), s24 = h(s24), l20 = h(l20), c15 = h(c15), u13 = h(u13), f11 = h(f11), d = p7(d);
                var g = function(t313) {
                    (0, l20.default)(p, t313);
                    var e209, n166, o140, f12 = (e209 = p, function() {
                        var t, n = (0, u13.default)(e209);
                        if (v()) {
                            var o = (0, u13.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c15.default)(this, t);
                    });
                    function p() {
                        return (0, a31.default)(this, p), f12.apply(this, arguments);
                    }
                    return (0, s24.default)(p, [
                        {
                            key: "render",
                            value: (o140 = (0, i77.default)(r.default.mark(function t314(e) {
                                var n, o, i = this;
                                return r.default.wrap(function(t315) {
                                    for(;;)switch(t315.prev = t315.next){
                                        case 0:
                                            return n = e.map(function(t) {
                                                return {
                                                    function: function() {
                                                        return i.insertBlock(t);
                                                    }
                                                };
                                            }), this.Editor.ModificationsObserver.disable(), t315.next = 4, d.sequence(n);
                                        case 4:
                                            return o = t315.sent, this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), t315.abrupt("return", o);
                                        case 8:
                                        case "end":
                                            return t315.stop();
                                    }
                                }, t314, this);
                            })), function(t) {
                                return o140.apply(this, arguments);
                            })
                        },
                        {
                            key: "insertBlock",
                            value: (n166 = (0, i77.default)(r.default.mark(function t316(e) {
                                var n, o, i, a, s, l, c, u, f;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = this.Editor, o = n.Tools, i = n.BlockManager, a = e.type, s = e.data, l = e.tunes, c = e.id, !o.available.has(a)) {
                                                t.next = 13;
                                                break;
                                            }
                                            t.prev = 3, i.insert({
                                                id: c,
                                                tool: a,
                                                data: s,
                                                tunes: l
                                            }), t.next = 11;
                                            break;
                                        case 7:
                                            throw t.prev = 7, t.t0 = t.catch(3), d.log("Block «".concat(a, "» skipped because of plugins error"), "warn", s), Error(t.t0);
                                        case 11:
                                            t.next = 18;
                                            break;
                                        case 13:
                                            u = {
                                                savedData: {
                                                    id: c,
                                                    type: a,
                                                    data: s
                                                },
                                                title: a
                                            }, o.unavailable.has(a) && (f = o.unavailable.get(a).toolbox, u.title = (null == f ? void 0 : f.title) || u.title), i.insert({
                                                id: c,
                                                tool: o.stubTool,
                                                data: u
                                            }).stretched = !0, d.log("Tool «".concat(a, "» is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                                        case 18:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t316, this, [
                                    [
                                        3,
                                        7
                                    ]
                                ]);
                            })), function(t) {
                                return n166.apply(this, arguments);
                            })
                        }
                    ]), p;
                }(f11.default);
                o139.default = g, g.displayName = "Renderer", t312.exports = e208.default;
            }) ? o138.apply(e208, r76) : o138) || (t312.exports = i76);
        },
        function(t317, e210, n167) {
            var o141, r77, i78;
            "undefined" != typeof globalThis || "undefined", r77 = [
                e210,
                n167(23),
                n167(24),
                n167(2),
                n167(3),
                n167(5),
                n167(6),
                n167(4),
                n167(9),
                n167(7),
                n167(65)
            ], void 0 === (i78 = "function" == typeof (o141 = function(o142, r78, i79, a32, s25, l21, c16, u14, f13, d, p) {
                var h5 = n167(8), v = n167(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o142, "__esModule", {
                    value: !0
                }), o142.default = void 0, r78 = v(r78), i79 = v(i79), a32 = v(a32), s25 = v(s25), l21 = v(l21), c16 = v(c16), u14 = v(u14), f13 = v(f13), d = h5(d);
                var y = function(t318) {
                    (0, l21.default)(h, t318);
                    var e211, n168, o143, f = (e211 = h, function() {
                        var t, n = (0, u14.default)(e211);
                        if (g()) {
                            var o = (0, u14.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c16.default)(this, t);
                    });
                    function h() {
                        return (0, a32.default)(this, h), f.apply(this, arguments);
                    }
                    return (0, s25.default)(h, [
                        {
                            key: "save",
                            value: (o143 = (0, i79.default)(r78.default.mark(function t319() {
                                var e, n, o, i, a, s, l, c, u = this;
                                return r78.default.wrap(function(t320) {
                                    for(;;)switch(t320.prev = t320.next){
                                        case 0:
                                            return e = this.Editor, n = e.BlockManager, o = e.Tools, i = e.ModificationsObserver, a = n.blocks, s = [], t320.prev = 2, i.disable(), a.forEach(function(t) {
                                                s.push(u.getSavedData(t));
                                            }), t320.next = 7, Promise.all(s);
                                        case 7:
                                            return l = t320.sent, t320.next = 10, (0, p.sanitizeBlocks)(l, function(t) {
                                                return o.blockTools.get(t).sanitizeConfig;
                                            });
                                        case 10:
                                            return c = t320.sent, t320.abrupt("return", this.makeOutput(c));
                                        case 14:
                                            t320.prev = 14, t320.t0 = t320.catch(2), d.logLabeled("Saving failed due to the Error %o", "error", t320.t0);
                                        case 17:
                                            return t320.prev = 17, i.enable(), t320.finish(17);
                                        case 20:
                                        case "end":
                                            return t320.stop();
                                    }
                                }, t319, this, [
                                    [
                                        2,
                                        14,
                                        17,
                                        20
                                    ]
                                ]);
                            })), function() {
                                return o143.apply(this, arguments);
                            })
                        },
                        {
                            key: "getSavedData",
                            value: (n168 = (0, i79.default)(r78.default.mark(function t321(e) {
                                var n, o;
                                return r78.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return t.next = 2, e.save();
                                        case 2:
                                            if (n = t.sent, t.t0 = n, !t.t0) {
                                                t.next = 8;
                                                break;
                                            }
                                            return t.next = 7, e.validate(n.data);
                                        case 7:
                                            t.t0 = t.sent;
                                        case 8:
                                            return o = t.t0, t.abrupt("return", Object.assign(Object.assign({
                                            }, n), {
                                                isValid: o
                                            }));
                                        case 10:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t321);
                            })), function(t) {
                                return n168.apply(this, arguments);
                            })
                        },
                        {
                            key: "makeOutput",
                            value: function(t322) {
                                var e = this, n = 0, o = [];
                                return d.log("[Editor.js saving]:", "groupCollapsed"), t322.forEach(function(t) {
                                    var r = t.id, i = t.tool, a = t.data, s = t.tunes, l = t.time, c = t.isValid;
                                    if (n += l, d.log("".concat(i.charAt(0).toUpperCase() + i.slice(1)), "group"), !c) return d.log("Block «".concat(i, "» skipped because saved data is invalid")), void d.log(void 0, "groupEnd");
                                    if (d.log(a), d.log(void 0, "groupEnd"), i !== e.Editor.Tools.stubTool) {
                                        var u = Object.assign({
                                            id: r,
                                            type: i,
                                            data: a
                                        }, !d.isEmpty(s) && {
                                            tunes: s
                                        });
                                        o.push(u);
                                    } else o.push(a);
                                }), d.log("Total", "log", n), d.log(void 0, "groupEnd"), {
                                    time: +new Date,
                                    blocks: o,
                                    version: "2.22.2"
                                };
                            }
                        }
                    ]), h;
                }(f13.default);
                o142.default = y, y.displayName = "Saver", t317.exports = e210.default;
            }) ? o141.apply(e210, r77) : o141) || (t317.exports = i78);
        },
        function(t323, e212, n169) {
            var o144, r79, i80;
            "undefined" != typeof globalThis || "undefined", r79 = [
                e212,
                n169(30),
                n169(2),
                n169(3),
                n169(5),
                n169(6),
                n169(4),
                n169(9),
                n169(15),
                n169(60),
                n169(7),
                n169(25)
            ], void 0 === (i80 = "function" == typeof (o144 = function(o145, r, i, a, s, l, c, u, f, d, p, h) {
                var v = n169(8), g = n169(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o145, "__esModule", {
                    value: !0
                }), o145.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);
                var b = function(t324) {
                    (0, s.default)(o146, t324);
                    var e213, n170 = (e213 = o146, function() {
                        var t, n = (0, c.default)(e213);
                        if (y()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o146() {
                        var t;
                        return (0, i.default)(this, o146), (t = n170.apply(this, arguments)).buttons = [], t.flipper = null, t.selection = new h.default, t;
                    }
                    return (0, a.default)(o146, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.wrapper = f.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = f.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = f.default.make("div", this.CSS.defaultSettings), f.default.append(this.nodes.wrapper, [
                                    this.nodes.toolSettings,
                                    this.nodes.defaultSettings
                                ]), this.enableFlipper();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.selection.save(), this.Editor.BlockManager.currentBlock.selected = !0, this.Editor.BlockSelection.clearCache(), this.addToolSettings(), this.addTunes(), this.eventsDispatcher.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons);
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), h.default.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = !1), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.eventsDispatcher.emit(this.events.closed), this.buttons = [], this.flipper.deactivate();
                            }
                        },
                        {
                            key: "addToolSettings",
                            value: function() {
                                var t = this.Editor.BlockManager.currentBlock.renderSettings();
                                t && f.default.append(this.nodes.toolSettings, t);
                            }
                        },
                        {
                            key: "addTunes",
                            value: function() {
                                var t = this.Editor.BlockManager.currentBlock.renderTunes(), e = (0, r.default)(t, 2), n = e[0], o = e[1];
                                f.default.append(this.nodes.toolSettings, n), f.default.append(this.nodes.defaultSettings, o);
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                var t = this;
                                this.flipper = new d.default({
                                    focusedItemClass: this.CSS.focusedButton,
                                    activateCallback: function(e) {
                                        e && f.default.canSetCaret(e) ? t.close() : p.delay(function() {
                                            t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock);
                                        }, 50)();
                                    }
                                });
                            }
                        },
                        {
                            key: "events",
                            get: function() {
                                return {
                                    opened: "block-settings-opened",
                                    closed: "block-settings-closed"
                                };
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "ce-settings",
                                    wrapperOpened: "ce-settings--opened",
                                    toolSettings: "ce-settings__plugin-zone",
                                    defaultSettings: "ce-settings__default-zone",
                                    button: "ce-settings__button",
                                    focusedButton: "ce-settings__button--focused",
                                    focusedButtonAnimated: "ce-settings__button--focused-animated"
                                };
                            }
                        },
                        {
                            key: "opened",
                            get: function() {
                                return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened);
                            }
                        },
                        {
                            key: "blockTunesButtons",
                            get: function() {
                                var t = this, e214 = this.Editor.StylesAPI;
                                if (0 !== this.buttons.length) return this.buttons;
                                var n = this.nodes.toolSettings.querySelectorAll(".".concat(e214.classes.settingsButton, ", ").concat(f.default.allInputsSelector)), o = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
                                return n.forEach(function(e) {
                                    t.buttons.push(e);
                                }), o.forEach(function(e) {
                                    t.buttons.push(e);
                                }), this.buttons;
                            }
                        }
                    ]), o146;
                }(u.default);
                o145.default = b, b.displayName = "BlockSettings", t323.exports = e212.default;
            }) ? o144.apply(e212, r79) : o144) || (t323.exports = i80);
        },
        function(t325, e215, n171) {
            var o147, r80, i81;
            "undefined" != typeof globalThis || "undefined", r80 = [
                e215,
                n171(30),
                n171(23),
                n171(24),
                n171(42),
                n171(2),
                n171(3),
                n171(5),
                n171(6),
                n171(4),
                n171(9),
                n171(15),
                n171(7),
                n171(60),
                n171(59),
                n171(84),
                n171(65)
            ], void 0 === (i81 = "function" == typeof (o147 = function(o148, r81, i82, a33, s26, l22, c17, u15, f14, d11, p8, h, v, g, y, b, m) {
                var k = n171(8), x = n171(1);
                function w() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o148, "__esModule", {
                    value: !0
                }), o148.default = void 0, r81 = x(r81), i82 = x(i82), a33 = x(a33), s26 = x(s26), l22 = x(l22), c17 = x(c17), u15 = x(u15), f14 = x(f14), d11 = x(d11), p8 = x(p8), h = x(h), v = k(v), g = x(g), y = x(y);
                var S = function(t326) {
                    (0, u15.default)(p9, t326);
                    var e216, n172, o149 = (e216 = p9, function() {
                        var t, n = (0, d11.default)(e216);
                        if (w()) {
                            var o = (0, d11.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f14.default)(this, t);
                    });
                    function p9() {
                        var t;
                        return (0, l22.default)(this, p9), (t = o149.apply(this, arguments)).opened = !1, t.tools = {
                        }, t.flipper = null, t.togglingCallback = null, t;
                    }
                    return (0, c17.default)(p9, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.wrapper = h.default.make("div", [
                                    p9.CSS.conversionToolbarWrapper
                                ].concat((0, s26.default)(this.isRtl ? [
                                    this.Editor.UI.CSS.editorRtlFix
                                ] : []))), this.nodes.tools = h.default.make("div", p9.CSS.conversionToolbarTools);
                                var t = h.default.make("div", p9.CSS.conversionToolbarLabel, {
                                    textContent: y.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter, "Convert to")
                                });
                                return this.addTools(), this.enableFlipper(), h.default.append(this.nodes.wrapper, t), h.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
                            }
                        },
                        {
                            key: "toggle",
                            value: function(t) {
                                this.opened ? this.close() : this.open(), v.isFunction(t) && (this.togglingCallback = t);
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t327 = this;
                                this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(p9.CSS.conversionToolbarShowed), setTimeout(function() {
                                    t327.flipper.activate(Object.values(t327.tools).filter(function(t) {
                                        return !t.classList.contains(p9.CSS.conversionToolHidden);
                                    })), t327.flipper.focusFirst(), v.isFunction(t327.togglingCallback) && t327.togglingCallback(!0);
                                }, 50);
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(p9.CSS.conversionToolbarShowed), v.isFunction(this.togglingCallback) && this.togglingCallback(!1);
                            }
                        },
                        {
                            key: "hasTools",
                            value: function() {
                                var t = Object.keys(this.tools);
                                return !(1 === t.length && t.shift() === this.config.defaultBlock);
                            }
                        },
                        {
                            key: "replaceWithBlock",
                            value: (n172 = (0, a33.default)(i82.default.mark(function t328(e) {
                                var n, o, r, a, s, l, c, u, f, d, p = this;
                                return i82.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return n = this.Editor.BlockManager.currentBlock.tool, o = this.Editor.BlockManager.currentBlock.name, t.next = 4, this.Editor.BlockManager.currentBlock.save();
                                        case 4:
                                            if (r = t.sent, a = r.data, o === e && (e = this.config.defaultBlock), s = this.Editor.Tools.blockTools.get(e), l = "", c = n.conversionConfig.export, !v.isFunction(c)) {
                                                t.next = 14;
                                                break;
                                            }
                                            l = c(a), t.next = 20;
                                            break;
                                        case 14:
                                            if (!v.isString(c)) {
                                                t.next = 18;
                                                break;
                                            }
                                            l = a[c], t.next = 20;
                                            break;
                                        case 18:
                                            return v.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), t.abrupt("return");
                                        case 20:
                                            if (u = (0, m.clean)(l, s.sanitizeConfig), f = {
                                            }, d = s.conversionConfig.import, !v.isFunction(d)) {
                                                t.next = 27;
                                                break;
                                            }
                                            f = d(u), t.next = 33;
                                            break;
                                        case 27:
                                            if (!v.isString(d)) {
                                                t.next = 31;
                                                break;
                                            }
                                            f[d] = u, t.next = 33;
                                            break;
                                        case 31:
                                            return v.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), t.abrupt("return");
                                        case 33:
                                            this.Editor.BlockManager.replace({
                                                tool: e,
                                                data: f
                                            }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), v.delay(function() {
                                                p.Editor.Caret.setToBlock(p.Editor.BlockManager.currentBlock);
                                            }, 10)();
                                        case 38:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t328, this);
                            })), function(t) {
                                return n172.apply(this, arguments);
                            })
                        },
                        {
                            key: "addTools",
                            value: function() {
                                var t = this, e217 = this.Editor.Tools.blockTools;
                                Array.from(e217.entries()).forEach(function(e) {
                                    var n = (0, r81.default)(e, 2), o = n[0], i = n[1], a = i.toolbox, s = i.conversionConfig;
                                    !v.isEmpty(a) && a.icon && s && s.import && t.addTool(o, a.icon, a.title);
                                });
                            }
                        },
                        {
                            key: "addTool",
                            value: function(t, e218, n) {
                                var o = this, r = h.default.make("div", [
                                    p9.CSS.conversionTool
                                ]), s = h.default.make("div", [
                                    p9.CSS.conversionToolIcon
                                ]);
                                r.dataset.tool = t, s.innerHTML = e218, h.default.append(r, s), h.default.append(r, h.default.text(y.default.t(b.I18nInternalNS.toolNames, n || v.capitalize(t)))), h.default.append(this.nodes.tools, r), this.tools[t] = r, this.listeners.on(r, "click", (0, a33.default)(i82.default.mark(function e219() {
                                    return i82.default.wrap(function(e) {
                                        for(;;)switch(e.prev = e.next){
                                            case 0:
                                                return e.next = 2, o.replaceWithBlock(t);
                                            case 2:
                                            case "end":
                                                return e.stop();
                                        }
                                    }, e219);
                                })));
                            }
                        },
                        {
                            key: "filterTools",
                            value: function() {
                                var t = this.Editor.BlockManager.currentBlock;
                                Object.entries(this.tools).forEach(function(e) {
                                    var n = (0, r81.default)(e, 2), o = n[0], i = n[1];
                                    i.hidden = !1, i.classList.toggle(p9.CSS.conversionToolHidden, o === t.name);
                                });
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new g.default({
                                    focusedItemClass: p9.CSS.conversionToolFocused
                                });
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    conversionToolbarWrapper: "ce-conversion-toolbar",
                                    conversionToolbarShowed: "ce-conversion-toolbar--showed",
                                    conversionToolbarTools: "ce-conversion-toolbar__tools",
                                    conversionToolbarLabel: "ce-conversion-toolbar__label",
                                    conversionTool: "ce-conversion-tool",
                                    conversionToolHidden: "ce-conversion-tool--hidden",
                                    conversionToolIcon: "ce-conversion-tool__icon",
                                    conversionToolFocused: "ce-conversion-tool--focused",
                                    conversionToolActive: "ce-conversion-tool--active"
                                };
                            }
                        }
                    ]), p9;
                }(p8.default);
                o148.default = S, S.displayName = "ConversionToolbar", t325.exports = e215.default;
            }) ? o147.apply(e215, r80) : o147) || (t325.exports = i81);
        },
        function(t329, e220, n173) {
            var o150, r82, i83;
            "undefined" != typeof globalThis || "undefined", r82 = [
                e220,
                n173(42),
                n173(30),
                n173(2),
                n173(3),
                n173(5),
                n173(6),
                n173(4),
                n173(9),
                n173(15),
                n173(25),
                n173(7),
                n173(60),
                n173(59),
                n173(84),
                n173(112),
                n173(82),
                n173(67)
            ], void 0 === (i83 = "function" == typeof (o150 = function(o151, r83, i84, a34, s27, l, c, u, f, d, p, h, v, g, y, b, m, k) {
                var x = n173(8), w = n173(1);
                function S() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o151, "__esModule", {
                    value: !0
                }), o151.default = void 0, r83 = w(r83), i84 = w(i84), a34 = w(a34), s27 = w(s27), l = w(l), c = w(c), u = w(u), f = w(f), d = w(d), p = w(p), h = x(h), v = w(v), g = w(g), b = w(b), m = w(m);
                var T = function(t330) {
                    (0, l.default)(o152, t330);
                    var e221, n174 = (e221 = o152, function() {
                        var t, n = (0, u.default)(e221);
                        if (S()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c.default)(this, t);
                    });
                    function o152(t) {
                        var e, r = t.config, i = t.eventsDispatcher;
                        return (0, a34.default)(this, o152), (e = n174.call(this, {
                            config: r,
                            eventsDispatcher: i
                        })).CSS = {
                            inlineToolbar: "ce-inline-toolbar",
                            inlineToolbarShowed: "ce-inline-toolbar--showed",
                            inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
                            inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
                            inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
                            buttonsWrapper: "ce-inline-toolbar__buttons",
                            actionsWrapper: "ce-inline-toolbar__actions",
                            inlineToolButton: "ce-inline-tool",
                            inputField: "cdx-input",
                            focusedButton: "ce-inline-tool--focused",
                            conversionToggler: "ce-inline-toolbar__dropdown",
                            conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
                            conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
                            togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
                        }, e.opened = !1, e.toolbarVerticalMargin = 5, e.buttonsList = null, e.width = 0, e.flipper = null, e.tooltip = new m.default, e;
                    }
                    return (0, s27.default)(o152, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
                            }
                        },
                        {
                            key: "tryToShow",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                this.allowedToShow() ? (this.move(), this.open(e), this.Editor.Toolbar.close()) : t && this.close();
                            }
                        },
                        {
                            key: "move",
                            value: function() {
                                var t = p.default.rect, e = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), n = {
                                    x: t.x - e.left,
                                    y: t.y + t.height - e.top + this.toolbarVerticalMargin
                                };
                                t.width && (n.x += Math.floor(t.width / 2));
                                var o = n.x - this.width / 2, r = n.x + this.width / 2;
                                this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px";
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                var t = this;
                                this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(function(e) {
                                    var n = (0, i84.default)(e, 2), o = n[0], r = n[1], a = t.getToolShortcut(o);
                                    a && b.default.remove(t.Editor.UI.nodes.redactor, a), h.isFunction(r.clear) && r.clear();
                                }), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t331 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                if (!this.opened) {
                                    this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = !0, t331 && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
                                    var e = Array.from(this.buttonsList);
                                    e.unshift(this.nodes.conversionToggler), e = e.filter(function(t) {
                                        return !t.hidden;
                                    }), this.flipper.activate(e);
                                }
                            }
                        },
                        {
                            key: "containsNode",
                            value: function(t) {
                                return this.nodes.wrapper.contains(t);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = this;
                                this.nodes.wrapper = d.default.make("div", [
                                    this.CSS.inlineToolbar
                                ].concat((0, r83.default)(this.isRtl ? [
                                    this.Editor.UI.CSS.editorRtlFix
                                ] : []))), this.nodes.togglerAndButtonsWrapper = d.default.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = d.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = d.default.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", function(e) {
                                    e.target.closest(".".concat(t.CSS.actionsWrapper)) || e.preventDefault();
                                }), d.default.append(this.nodes.wrapper, [
                                    this.nodes.togglerAndButtonsWrapper,
                                    this.nodes.actions
                                ]), d.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), d.default.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
                            }
                        },
                        {
                            key: "allowedToShow",
                            value: function() {
                                var t = p.default.get(), e = p.default.text;
                                if (!t || !t.anchorNode) return !1;
                                if (t.isCollapsed || e.length < 1) return !1;
                                var n = d.default.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
                                if (t && [
                                    "IMG",
                                    "INPUT"
                                ].includes(n.tagName)) return !1;
                                if (null === n.closest('[contenteditable="true"]')) return !1;
                                var o = this.Editor.BlockManager.getBlock(t.anchorNode);
                                return !!o && 0 !== o.tool.inlineTools.size;
                            }
                        },
                        {
                            key: "recalculateWidth",
                            value: function() {
                                this.width = this.nodes.wrapper.offsetWidth;
                            }
                        },
                        {
                            key: "addConversionToggler",
                            value: function() {
                                var t = this;
                                this.nodes.conversionToggler = d.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = d.default.make("div", this.CSS.conversionTogglerContent);
                                var e222 = d.default.svg("toggler-down", 13, 13);
                                this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e222), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", function() {
                                    t.Editor.ConversionToolbar.toggle(function(e) {
                                        !e && t.opened ? t.flipper.activate() : t.opened && t.flipper.deactivate();
                                    });
                                }), this.tooltip.onHover(this.nodes.conversionToggler, g.default.ui(y.I18nInternalNS.ui.inlineToolbar.converter, "Convert to"), {
                                    placement: "top",
                                    hidingDelay: 100
                                });
                            }
                        },
                        {
                            key: "setConversionTogglerContent",
                            value: function() {
                                var t = this.Editor.BlockManager.currentBlock, e = t.name, n = t.tool.conversionConfig, o = n && n.export;
                                this.nodes.conversionToggler.hidden = !o, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !o);
                                var r = t.tool.toolbox || {
                                };
                                this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || h.capitalize(e);
                            }
                        },
                        {
                            key: "prepareConversionToolbar",
                            value: function() {
                                var t = this.Editor.ConversionToolbar.make();
                                d.default.append(this.nodes.wrapper, t);
                            }
                        },
                        {
                            key: "addToolsFiltered",
                            value: function() {
                                var t = this, e223 = p.default.get(), n = this.Editor.BlockManager.getBlock(e223.anchorNode);
                                this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = new Map, Array.from(n.tool.inlineTools.values()).forEach(function(e) {
                                    t.addTool(e);
                                }), this.recalculateWidth();
                            }
                        },
                        {
                            key: "addTool",
                            value: function(t332) {
                                var e = this, n = t332.create(), o = n.render();
                                if (o) {
                                    if (o.dataset.tool = t332.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(t332.name, n), h.isFunction(n.renderActions)) {
                                        var r = n.renderActions();
                                        this.nodes.actions.appendChild(r);
                                    }
                                    this.listeners.on(o, "click", function(t) {
                                        e.toolClicked(n), t.preventDefault();
                                    });
                                    var i = this.getToolShortcut(t332.name);
                                    if (i) try {
                                        this.enableShortcuts(n, i);
                                    } catch (t) {
                                    }
                                    var a = d.default.make("div"), s = g.default.t(y.I18nInternalNS.toolNames, t332.title || h.capitalize(t332.name));
                                    a.appendChild(d.default.text(s)), i && a.appendChild(d.default.make("div", this.CSS.inlineToolbarShortcut, {
                                        textContent: h.beautifyShortcut(i)
                                    })), this.tooltip.onHover(o, a, {
                                        placement: "top",
                                        hidingDelay: 100
                                    }), n.checkState(p.default.get());
                                } else h.log("Render method must return an instance of Node", "warn", t332.name);
                            }
                        },
                        {
                            key: "getToolShortcut",
                            value: function(t) {
                                var e = this.Editor.Tools, n = e.inlineTools.get(t), o = e.internal.inlineTools;
                                return Array.from(o.keys()).includes(t) ? this.inlineTools[t][k.CommonInternalSettings.Shortcut] : n.shortcut;
                            }
                        },
                        {
                            key: "enableShortcuts",
                            value: function(t, e224) {
                                var n = this;
                                b.default.add({
                                    name: e224,
                                    handler: function(e) {
                                        var o = n.Editor.BlockManager.currentBlock;
                                        o && o.tool.enabledInlineTools && (e.preventDefault(), n.toolClicked(t));
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "toolClicked",
                            value: function(t) {
                                var e = p.default.range;
                                t.surround(e), this.checkToolsState();
                            }
                        },
                        {
                            key: "checkToolsState",
                            value: function() {
                                this.toolsInstances.forEach(function(t) {
                                    t.checkState(p.default.get());
                                });
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new v.default({
                                    focusedItemClass: this.CSS.focusedButton,
                                    allowArrows: !1
                                });
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                var t = {
                                };
                                return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(function(e) {
                                    var n = (0, i84.default)(e, 2), o = n[0], r = n[1];
                                    t[o] = r.create();
                                }), t;
                            }
                        }
                    ]), o152;
                }(f.default);
                o151.default = T, T.displayName = "InlineToolbar", t329.exports = e220.default;
            }) ? o150.apply(e220, r82) : o150) || (t329.exports = i83);
        },
        function(t333, e225, n175) {
            var o153, r84, i85;
            "undefined" != typeof globalThis || "undefined", r84 = [
                e225,
                n175(2),
                n175(3),
                n175(5),
                n175(6),
                n175(4),
                n175(9),
                n175(15),
                n175(7),
                n175(60),
                n175(66),
                n175(59),
                n175(84),
                n175(112),
                n175(82)
            ], void 0 === (i85 = "function" == typeof (o153 = function(o154, r85, i86, a35, s, l, c, u, f, d, p, h, v, g, y) {
                var b = n175(8), m = n175(1);
                function k() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o154, "__esModule", {
                    value: !0
                }), o154.default = void 0, r85 = m(r85), i86 = m(i86), a35 = m(a35), s = m(s), l = m(l), c = m(c), u = m(u), f = b(f), d = m(d), h = m(h), g = m(g), y = m(y);
                var x = function(t334) {
                    (0, a35.default)(o155, t334);
                    var e226, n176 = (e226 = o155, function() {
                        var t, n = (0, l.default)(e226);
                        if (k()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o155(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r85.default)(this, o155), (e = n176.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).nodes = {
                            toolbox: null,
                            buttons: []
                        }, e.opened = !1, e.displayedToolsCount = 0, e.flipper = null, e.tooltip = new y.default, e;
                    }
                    return (0, i86.default)(o155, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.toolbox = u.default.make("div", this.CSS.toolbox), this.addTools(), this.enableFlipper();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.removeAllShortcuts(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "toolButtonActivate",
                            value: function(t, e) {
                                this.insertNewBlock(e);
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                this.isEmpty || (this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier), this.nodes.toolbox.classList.add(this.CSS.toolboxOpened), this.opened = !0, this.flipper.activate());
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened), this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier), this.opened = !1, this.flipper.deactivate();
                            }
                        },
                        {
                            key: "toggle",
                            value: function() {
                                this.opened ? this.close() : this.open();
                            }
                        },
                        {
                            key: "addTools",
                            value: function() {
                                var t = this, e227 = this.Editor.Tools.blockTools;
                                Array.from(e227.values()).forEach(function(e) {
                                    return t.addTool(e);
                                });
                            }
                        },
                        {
                            key: "addTool",
                            value: function(t) {
                                var e = this, n177 = t.toolbox;
                                if (n177) {
                                    if (!n177 || n177.icon) {
                                        var o = u.default.make("li", [
                                            this.CSS.toolboxButton
                                        ]);
                                        o.dataset.tool = t.name, o.innerHTML = n177.icon, u.default.append(this.nodes.toolbox, o), this.nodes.toolbox.appendChild(o), this.nodes.buttons.push(o), this.listeners.on(o, "click", function(n) {
                                            e.toolButtonActivate(n, t.name);
                                        });
                                        var r = this.drawTooltip(t);
                                        this.tooltip.onHover(o, r, {
                                            placement: "bottom",
                                            hidingDelay: 200
                                        });
                                        var i = t.shortcut;
                                        i && this.enableShortcut(t.name, i), this.displayedToolsCount++;
                                    } else f.log("Toolbar icon is missed. Tool %o skipped", "warn", t.name);
                                }
                            }
                        },
                        {
                            key: "drawTooltip",
                            value: function(t) {
                                var e = t.toolbox || {
                                }, n = h.default.t(v.I18nInternalNS.toolNames, e.title || t.name), o = t.shortcut, r = u.default.make("div", this.CSS.buttonTooltip), i = document.createTextNode(f.capitalize(n));
                                return r.appendChild(i), o && (o = f.beautifyShortcut(o), r.appendChild(u.default.make("div", this.CSS.buttonShortcut, {
                                    textContent: o
                                }))), r;
                            }
                        },
                        {
                            key: "enableShortcut",
                            value: function(t, e228) {
                                var n = this;
                                g.default.add({
                                    name: e228,
                                    handler: function(e) {
                                        e.preventDefault(), n.insertNewBlock(t);
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "removeAllShortcuts",
                            value: function() {
                                var t = this, e229 = this.Editor.Tools.blockTools;
                                Array.from(e229.values()).forEach(function(e) {
                                    var n = e.shortcut;
                                    n && g.default.remove(t.Editor.UI.nodes.redactor, n);
                                });
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                var t = Array.from(this.nodes.toolbox.childNodes);
                                this.flipper = new d.default({
                                    items: t,
                                    focusedItemClass: this.CSS.toolboxButtonActive
                                });
                            }
                        },
                        {
                            key: "insertNewBlock",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.Caret, r = n.currentBlock, i = n.insert({
                                    tool: t,
                                    replace: r.isEmpty
                                });
                                i.call(p.BlockToolAPI.APPEND_CALLBACK), this.Editor.Caret.setToBlock(i), 0 === i.inputs.length && (i === n.lastBlock ? (n.insertAtEnd(), o.setToBlock(n.lastBlock)) : o.setToBlock(n.nextBlock)), this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    toolbox: "ce-toolbox",
                                    toolboxButton: "ce-toolbox__button",
                                    toolboxButtonActive: "ce-toolbox__button--active",
                                    toolboxOpened: "ce-toolbox--opened",
                                    openedToolbarHolderModifier: "codex-editor--toolbox-opened",
                                    buttonTooltip: "ce-toolbox-button-tooltip",
                                    buttonShortcut: "ce-toolbox-button-tooltip__shortcut"
                                };
                            }
                        },
                        {
                            key: "isEmpty",
                            get: function() {
                                return 0 === this.displayedToolsCount;
                            }
                        }
                    ]), o155;
                }(c.default);
                o154.default = x, x.displayName = "Toolbox", t333.exports = e225.default;
            }) ? o153.apply(e225, r84) : o153) || (t333.exports = i85);
        },
        function(t335, e230, n178) {
            var o156, r86, i87;
            "undefined" != typeof globalThis || "undefined", r86 = [
                e230,
                n178(42),
                n178(30),
                n178(23),
                n178(24),
                n178(2),
                n178(3),
                n178(5),
                n178(6),
                n178(4),
                n178(80),
                n178(384),
                n178(9),
                n178(7),
                n178(385),
                n178(386),
                n178(387),
                n178(388),
                n178(389),
                n178(393),
                n178(394),
                n178(395),
                n178(184)
            ], void 0 === (i87 = "function" == typeof (o156 = function(o157, r87, i88, a36, s28, l, c, u, f, d, p10, h, v, g, y, b, m, k, x, w, S, T, E) {
                var B = n178(8), C = n178(1);
                function _() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o157, "__esModule", {
                    value: !0
                }), o157.default = void 0, r87 = C(r87), i88 = C(i88), a36 = C(a36), s28 = C(s28), l = C(l), c = C(c), u = C(u), f = C(f), d = C(d), p10 = C(p10), h = C(h), v = C(v), g = B(g), y = C(y), b = C(b), m = C(m), k = C(k), x = C(x), w = C(w), S = C(S), T = C(T), E = C(E);
                var O = function(t, e, n, o) {
                    var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, p10.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else for(var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                }, I = function(t336) {
                    (0, u.default)(p, t336);
                    var e231, n179, o158 = (e231 = p, function() {
                        var t, n = (0, d.default)(e231);
                        if (_()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f.default)(this, t);
                    });
                    function p() {
                        var t;
                        return (0, l.default)(this, p), (t = o158.apply(this, arguments)).stubTool = "stub", t.toolsAvailable = new E.default, t.toolsUnavailable = new E.default, t;
                    }
                    return (0, c.default)(p, [
                        {
                            key: "prepare",
                            value: (n179 = (0, s28.default)(a36.default.mark(function t337() {
                                var e, n, o = this;
                                return a36.default.wrap(function(t338) {
                                    for(;;)switch(t338.prev = t338.next){
                                        case 0:
                                            if (this.validateTools(), this.config.tools = g.deepMerge({
                                            }, this.internalTools, this.config.tools), Object.prototype.hasOwnProperty.call(this.config, "tools") && 0 !== Object.keys(this.config.tools).length) {
                                                t338.next = 4;
                                                break;
                                            }
                                            throw Error("Can't start without tools");
                                        case 4:
                                            if (e = this.prepareConfig(), this.factory = new x.default(e, this.config, this.Editor.API), 0 !== (n = this.getListOfPrepareFunctions(e)).length) {
                                                t338.next = 9;
                                                break;
                                            }
                                            return t338.abrupt("return", Promise.resolve());
                                        case 9:
                                            return t338.next = 11, g.sequence(n, function(t) {
                                                o.toolPrepareMethodSuccess(t);
                                            }, function(t) {
                                                o.toolPrepareMethodFallback(t);
                                            });
                                        case 11:
                                            this.prepareBlockTools();
                                        case 12:
                                        case "end":
                                            return t338.stop();
                                    }
                                }, t337, this);
                            })), function() {
                                return n179.apply(this, arguments);
                            })
                        },
                        {
                            key: "getAllInlineToolsSanitizeConfig",
                            value: function() {
                                var t = {
                                };
                                return Array.from(this.inlineTools.values()).forEach(function(e) {
                                    Object.assign(t, e.sanitizeConfig);
                                }), t;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                Object.values(this.available).forEach(function() {
                                    var t339 = (0, s28.default)(a36.default.mark(function t340(e) {
                                        return a36.default.wrap(function(t) {
                                            for(;;)switch(t.prev = t.next){
                                                case 0:
                                                    if (!g.isFunction(e.reset)) {
                                                        t.next = 3;
                                                        break;
                                                    }
                                                    return t.next = 3, e.reset();
                                                case 3:
                                                case "end":
                                                    return t.stop();
                                            }
                                        }, t340);
                                    }));
                                    return function(e) {
                                        return t339.apply(this, arguments);
                                    };
                                }());
                            }
                        },
                        {
                            key: "toolPrepareMethodSuccess",
                            value: function(t) {
                                var e = this.factory.get(t.toolName);
                                if (e.isInline()) {
                                    var n = [
                                        "render",
                                        "surround",
                                        "checkState"
                                    ].filter(function(t) {
                                        return !e.create()[t];
                                    });
                                    if (n.length) return g.log("Incorrect Inline Tool: ".concat(e.name, ". Some of required methods is not implemented %o"), "warn", n), void this.toolsUnavailable.set(e.name, e);
                                }
                                this.toolsAvailable.set(e.name, e);
                            }
                        },
                        {
                            key: "toolPrepareMethodFallback",
                            value: function(t) {
                                this.toolsUnavailable.set(t.toolName, this.factory.get(t.toolName));
                            }
                        },
                        {
                            key: "getListOfPrepareFunctions",
                            value: function(t341) {
                                var e = [];
                                return Object.entries(t341).forEach(function(t) {
                                    var n = (0, i88.default)(t, 2), o = n[0], r = n[1];
                                    e.push({
                                        function: g.isFunction(r.class.prepare) ? r.class.prepare : function() {
                                        },
                                        data: {
                                            toolName: o
                                        }
                                    });
                                }), e;
                            }
                        },
                        {
                            key: "prepareBlockTools",
                            value: function() {
                                var t = this;
                                Array.from(this.blockTools.values()).forEach(function(e) {
                                    t.assignInlineToolsToBlockTool(e), t.assignBlockTunesToBlockTool(e);
                                });
                            }
                        },
                        {
                            key: "assignInlineToolsToBlockTool",
                            value: function(t342) {
                                var e = this;
                                !1 !== this.config.inlineToolbar && (!0 !== t342.enabledInlineTools ? Array.isArray(t342.enabledInlineTools) && (t342.inlineTools = new E.default(t342.enabledInlineTools.map(function(t) {
                                    return [
                                        t,
                                        e.inlineTools.get(t)
                                    ];
                                }))) : t342.inlineTools = new E.default(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map(function(t) {
                                    return [
                                        t,
                                        e.inlineTools.get(t)
                                    ];
                                }) : Array.from(this.inlineTools.entries())));
                            }
                        },
                        {
                            key: "assignBlockTunesToBlockTool",
                            value: function(t343) {
                                var e = this;
                                if (!1 !== t343.enabledBlockTunes) {
                                    if (Array.isArray(t343.enabledBlockTunes)) {
                                        var n = new E.default(t343.enabledBlockTunes.map(function(t) {
                                            return [
                                                t,
                                                e.blockTunes.get(t)
                                            ];
                                        }));
                                        t343.tunes = new E.default([].concat((0, r87.default)(n), (0, r87.default)(this.blockTunes.internalTools)));
                                    } else if (Array.isArray(this.config.tunes)) {
                                        var o = new E.default(this.config.tunes.map(function(t) {
                                            return [
                                                t,
                                                e.blockTunes.get(t)
                                            ];
                                        }));
                                        t343.tunes = new E.default([].concat((0, r87.default)(o), (0, r87.default)(this.blockTunes.internalTools)));
                                    } else t343.tunes = this.blockTunes.internalTools;
                                }
                            }
                        },
                        {
                            key: "validateTools",
                            value: function() {
                                for(var t in this.config.tools)if (Object.prototype.hasOwnProperty.call(this.config.tools, t)) {
                                    if (t in this.internalTools) return;
                                    var e = this.config.tools[t];
                                    if (!g.isFunction(e) && !g.isFunction(e.class)) throw Error("Tool «".concat(t, "» must be a constructor function or an object with function in the «class» property"));
                                }
                            }
                        },
                        {
                            key: "prepareConfig",
                            value: function() {
                                var t = {
                                };
                                for(var e in this.config.tools)g.isObject(this.config.tools[e]) ? t[e] = this.config.tools[e] : t[e] = {
                                    class: this.config.tools[e]
                                };
                                return t;
                            }
                        },
                        {
                            key: "available",
                            get: function() {
                                return this.toolsAvailable;
                            }
                        },
                        {
                            key: "unavailable",
                            get: function() {
                                return this.toolsUnavailable;
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                return this.available.inlineTools;
                            }
                        },
                        {
                            key: "blockTools",
                            get: function() {
                                return this.available.blockTools;
                            }
                        },
                        {
                            key: "blockTunes",
                            get: function() {
                                return this.available.blockTunes;
                            }
                        },
                        {
                            key: "defaultTool",
                            get: function() {
                                return this.blockTools.get(this.config.defaultBlock);
                            }
                        },
                        {
                            key: "internal",
                            get: function() {
                                return this.available.internalTools;
                            }
                        },
                        {
                            key: "internalTools",
                            get: function() {
                                return {
                                    bold: {
                                        class: y.default,
                                        isInternal: !0
                                    },
                                    italic: {
                                        class: b.default,
                                        isInternal: !0
                                    },
                                    link: {
                                        class: m.default,
                                        isInternal: !0
                                    },
                                    paragraph: {
                                        class: h.default,
                                        inlineToolbar: !0,
                                        isInternal: !0
                                    },
                                    stub: {
                                        class: k.default,
                                        isInternal: !0
                                    },
                                    moveUp: {
                                        class: T.default,
                                        isInternal: !0
                                    },
                                    delete: {
                                        class: S.default,
                                        isInternal: !0
                                    },
                                    moveDown: {
                                        class: w.default,
                                        isInternal: !0
                                    }
                                };
                            }
                        }
                    ]), p;
                }(v.default);
                o157.default = I, I.displayName = "Tools", O([
                    g.cacheable
                ], I.prototype, "getAllInlineToolsSanitizeConfig", null), t335.exports = e230.default;
            }) ? o156.apply(e230, r86) : o156) || (t335.exports = i87);
        },
        function(t344, e232, n180) {
            var o159, r88, i89;
            "undefined" != typeof globalThis || "undefined", r88 = [
                e232,
                n180(30),
                n180(2),
                n180(3),
                n180(5),
                n180(6),
                n180(4),
                n180(150)
            ], void 0 === (i89 = "function" == typeof (o159 = function(o160, r, i, a, s, l, c, u) {
                var f = n180(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o160, "__esModule", {
                    value: !0
                }), o160.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(t345) {
                    (0, s.default)(o161, t345);
                    var e, n181 = (e = o161, function() {
                        var t, n = (0, c.default)(e);
                        if (d()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o161() {
                        return (0, i.default)(this, o161), n181.apply(this, arguments);
                    }
                    return (0, a.default)(o161, [
                        {
                            key: "blockTools",
                            get: function() {
                                return new o161(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isBlock();
                                }));
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                return new o161(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isInline();
                                }));
                            }
                        },
                        {
                            key: "blockTunes",
                            get: function() {
                                return new o161(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isTune();
                                }));
                            }
                        },
                        {
                            key: "internalTools",
                            get: function() {
                                return new o161(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isInternal;
                                }));
                            }
                        },
                        {
                            key: "externalTools",
                            get: function() {
                                return new o161(Array.from(this.entries()).filter(function(t) {
                                    return !(0, r.default)(t, 2)[1].isInternal;
                                }));
                            }
                        }
                    ]), o161;
                }((0, (u = f(u)).default)(Map));
                o160.default = p, p.displayName = "ToolsCollection", t344.exports = e232.default;
            }) ? o159.apply(e232, r88) : o159) || (t344.exports = i89);
        },
        function(t346, e233, n182) {
            var o162, r89, i90;
            "undefined" != typeof globalThis || "undefined", r89 = [
                e233,
                n182(30),
                n182(42),
                n182(23),
                n182(24),
                n182(2),
                n182(3),
                n182(5),
                n182(6),
                n182(4),
                n182(396),
                n182(9),
                n182(15),
                n182(7),
                n182(25),
                n182(66),
                n182(60)
            ], void 0 === (i90 = "function" == typeof (o162 = function(o163, r90, i91, a37, s29, l23, c18, u16, f, d, p, h6, v, g, y, b, m) {
                var k3 = n182(8), x = n182(1);
                function w() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o163, "__esModule", {
                    value: !0
                }), o163.default = void 0, r90 = x(r90), i91 = x(i91), a37 = x(a37), s29 = x(s29), l23 = x(l23), c18 = x(c18), u16 = x(u16), f = x(f), d = x(d), p = x(p), h6 = x(h6), v = x(v), g = k3(g), y = x(y), b = x(b), m = x(m);
                var S = function(t347) {
                    (0, u16.default)(k, t347);
                    var e234, o164, h = (e234 = k, function() {
                        var t, n = (0, d.default)(e234);
                        if (w()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f.default)(this, t);
                    });
                    function k() {
                        var t;
                        return (0, l23.default)(this, k), (t = h.apply(this, arguments)).isMobile = !1, t.contentRectCache = void 0, t.resizeDebouncer = g.debounce(function() {
                            t.windowResize();
                        }, 200), t;
                    }
                    return (0, c18.default)(k, [
                        {
                            key: "addLoader",
                            value: function() {
                                this.nodes.loader = v.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
                            }
                        },
                        {
                            key: "removeLoader",
                            value: function() {
                                this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
                            }
                        },
                        {
                            key: "prepare",
                            value: (o164 = (0, s29.default)(a37.default.mark(function t348() {
                                return a37.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            this.checkIsMobile(), this.make(), this.addLoader(), this.appendSVGSprite(), this.loadStyles();
                                        case 5:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t348, this);
                            })), function() {
                                return o164.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "checkEmptiness",
                            value: function() {
                                var t = this.Editor.BlockManager;
                                this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t.isEditorEmpty);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.nodes.holder.innerHTML = "";
                            }
                        },
                        {
                            key: "closeAllToolbars",
                            value: function() {
                                var t = this.Editor, e = t.Toolbox, n = t.BlockSettings, o = t.InlineToolbar, r = t.ConversionToolbar;
                                n.close(), o.close(), r.close(), e.close();
                            }
                        },
                        {
                            key: "checkIsMobile",
                            value: function() {
                                this.isMobile = window.innerWidth < 650;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                this.nodes.holder = v.default.getHolder(this.config.holder), this.nodes.wrapper = v.default.make("div", [
                                    this.CSS.editorWrapper
                                ].concat((0, i91.default)(this.isRtl ? [
                                    this.CSS.editorRtlFix
                                ] : []))), this.nodes.redactor = v.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
                            }
                        },
                        {
                            key: "loadStyles",
                            value: function() {
                                var t = n182(397);
                                if (!v.default.get("editor-js-styles")) {
                                    var e = v.default.make("style", null, {
                                        id: "editor-js-styles",
                                        textContent: t.toString()
                                    });
                                    v.default.prepend(document.head, e);
                                }
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(this.nodes.redactor, "click", function(e) {
                                    t.redactorClicked(e);
                                }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", function(e) {
                                    t.documentTouched(e);
                                }, !0), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", function(e) {
                                    t.documentTouched(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "keydown", function(e) {
                                    t.documentKeydown(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "mousedown", function(e) {
                                    t.documentClicked(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "selectionchange", function(e) {
                                    t.selectionChanged(e);
                                }, !0), this.readOnlyMutableListeners.on(window, "resize", function() {
                                    t.resizeDebouncer();
                                }, {
                                    passive: !0
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "windowResize",
                            value: function() {
                                this.contentRectCache = null, this.checkIsMobile();
                            }
                        },
                        {
                            key: "documentKeydown",
                            value: function(t) {
                                switch(t.keyCode){
                                    case g.keyCodes.ENTER:
                                        this.enterPressed(t);
                                        break;
                                    case g.keyCodes.BACKSPACE:
                                        this.backspacePressed(t);
                                        break;
                                    case g.keyCodes.ESC:
                                        this.escapePressed(t);
                                        break;
                                    default:
                                        this.defaultBehaviour(t);
                                }
                            }
                        },
                        {
                            key: "defaultBehaviour",
                            value: function(t) {
                                var e = this.Editor.BlockManager.currentBlock, n = t.target.closest(".".concat(this.CSS.editorWrapper)), o = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                                void 0 === e || null !== n ? n || e && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close()) : this.Editor.BlockEvents.keydown(t);
                            }
                        },
                        {
                            key: "backspacePressed",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret;
                                if (o.anyBlockSelected && !y.default.isSelectionExists) {
                                    var i = n.removeSelectedBlocks();
                                    r.setToBlock(n.insertDefaultBlockAtIndex(i, !0), r.positions.START), o.clearSelection(t), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                                }
                            }
                        },
                        {
                            key: "escapePressed",
                            value: function(t) {
                                this.Editor.BlockSelection.clearSelection(t), this.Editor.Toolbox.opened ? this.Editor.Toolbox.close() : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "enterPressed",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = n.currentBlockIndex >= 0;
                                if (o.anyBlockSelected && !y.default.isSelectionExists) return o.clearSelection(t), t.preventDefault(), t.stopImmediatePropagation(), void t.stopPropagation();
                                if (!this.someToolbarOpened && r && "BODY" === t.target.tagName) {
                                    var i = this.Editor.BlockManager.insert();
                                    this.Editor.Caret.setToBlock(i), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.move(), this.Editor.Toolbar.plusButton.show();
                                }
                                this.Editor.BlockSelection.clearSelection(t);
                            }
                        },
                        {
                            key: "documentClicked",
                            value: function(t) {
                                if (t.isTrusted) {
                                    var e = t.target;
                                    this.nodes.holder.contains(e) || y.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.InlineToolbar.close(), this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close()), this.Editor.BlockSelection.clearSelection(t);
                                }
                            }
                        },
                        {
                            key: "documentTouched",
                            value: function(t) {
                                var e = t.target;
                                if (e === this.nodes.redactor) {
                                    var n = t instanceof MouseEvent ? t.clientX : t.touches[0].clientX, o = t instanceof MouseEvent ? t.clientY : t.touches[0].clientY;
                                    e = document.elementFromPoint(n, o);
                                }
                                try {
                                    this.Editor.BlockManager.setCurrentBlockByChildNode(e), this.Editor.BlockManager.highlightCurrentNode();
                                } catch (t349) {
                                    this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
                                }
                                this.Editor.Toolbar.open(), this.Editor.Toolbar.plusButton.hide();
                            }
                        },
                        {
                            key: "redactorClicked",
                            value: function(t) {
                                var e = this.Editor.BlockSelection;
                                if (y.default.isCollapsed) {
                                    var n = function() {
                                        t.stopImmediatePropagation(), t.stopPropagation();
                                    }, o = t.target, r = t.metaKey || t.ctrlKey;
                                    if (v.default.isAnchor(o) && r) {
                                        n();
                                        var i = o.getAttribute("href"), a = g.getValidUrl(i);
                                        g.openTab(a);
                                    } else {
                                        if (t.target instanceof Element && t.target.isEqualNode(this.nodes.redactor) && !e.anyBlockSelected) {
                                            n();
                                            var s = this.Editor, l = s.BlockManager, c = s.Caret, u = s.Toolbar;
                                            l.lastBlock.tool.isDefault && l.lastBlock.isEmpty || l.insertAtEnd(), c.setToTheLastBlock(), u.move();
                                        }
                                        this.Editor.BlockManager.currentBlock.tool.isDefault && (n(), this.Editor.BlockManager.currentBlock.isEmpty && this.Editor.Toolbar.plusButton.show());
                                    }
                                }
                            }
                        },
                        {
                            key: "selectionChanged",
                            value: function(t) {
                                var e = this.Editor, n = e.CrossBlockSelection, o = e.BlockSelection, r = y.default.anchorElement;
                                if (n.isCrossBlockSelectionStarted && o.anyBlockSelected && y.default.get().removeAllRanges(), r) {
                                    var i = null === r.closest(".".concat(b.default.CSS.content));
                                    if (i && (this.Editor.InlineToolbar.containsNode(r) || this.Editor.InlineToolbar.close(), "true" !== r.dataset.inlineToolbar)) return;
                                    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(r);
                                    var a = !0 !== i;
                                    this.Editor.InlineToolbar.tryToShow(!0, a);
                                } else y.default.range || this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "appendSVGSprite",
                            value: function() {
                                var t = v.default.make("div");
                                t.hidden = !0, t.style.display = "none", t.innerHTML = p.default, v.default.append(this.nodes.wrapper, t);
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    editorWrapper: "codex-editor",
                                    editorWrapperNarrow: "codex-editor--narrow",
                                    editorZone: "codex-editor__redactor",
                                    editorZoneHidden: "codex-editor__redactor--hidden",
                                    editorLoader: "codex-editor__loader",
                                    editorEmpty: "codex-editor--empty",
                                    editorRtlFix: "codex-editor--rtl"
                                };
                            }
                        },
                        {
                            key: "contentRect",
                            get: function() {
                                if (this.contentRectCache) return this.contentRectCache;
                                var t = this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));
                                return t ? (this.contentRectCache = t.getBoundingClientRect(), this.contentRectCache) : {
                                    width: 650,
                                    left: 0,
                                    right: 0
                                };
                            }
                        },
                        {
                            key: "someToolbarOpened",
                            get: function() {
                                var t = this.Editor, e = t.Toolbox, n = t.BlockSettings, o = t.InlineToolbar, r = t.ConversionToolbar;
                                return n.opened || o.opened || r.opened || e.opened;
                            }
                        },
                        {
                            key: "someFlipperButtonFocused",
                            get: function() {
                                return Object.entries(this.Editor).filter(function(t) {
                                    var e = (0, r90.default)(t, 2);
                                    return e[0], e[1].flipper instanceof m.default;
                                }).some(function(t) {
                                    var e = (0, r90.default)(t, 2);
                                    return e[0], e[1].flipper.currentItem;
                                });
                            }
                        }
                    ]), k;
                }(h6.default);
                o163.default = S, S.displayName = "UI", t346.exports = e233.default;
            }) ? o162.apply(e233, r89) : o162) || (t346.exports = i90);
        },
        function(t, e, n) {
            n(187), t.exports = n(359);
        },
        function(t, e, n) {
            n(188);
        },
        function(t, e, n) {
            "use strict";
            n(189), n(332), n(334), n(337), n(339), n(341), n(343), n(345), n(347), n(349), n(351), n(353), n(355), n(144);
        },
        function(t, e, n) {
            n(190), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(271), n(272), n(274), n(275), n(276), n(277), n(278), n(279), n(280), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(105), n(295), n(133), n(296), n(134), n(297), n(298), n(299), n(300), n(135), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), t.exports = n(17);
        },
        function(t350, e235, n183) {
            "use strict";
            var o165 = n183(10), r91 = n183(26), i92 = n183(18), a38 = n183(0), s = n183(21), l = n183(41).KEY, c = n183(11), u = n183(68), f = n183(53), d = n183(44), p = n183(14), h = n183(86), v = n183(114), g = n183(192), y = n183(71), b = n183(12), m = n183(13), k = n183(20), x = n183(28), w = n183(40), S = n183(43), T = n183(48), E = n183(117), B = n183(34), C = n183(70), _ = n183(19), O = n183(46), I = B.f, M = _.f, R = E.f, A = o165.Symbol, N = o165.JSON, P = N && N.stringify, L = p("_hidden"), D = p("toPrimitive"), j = {
            }.propertyIsEnumerable, F = u("symbol-registry"), U = u("symbols"), H = u("op-symbols"), z = Object.prototype, W = "function" == typeof A && !!C.f, Y = o165.QObject, V = !Y || !Y.prototype || !Y.prototype.findChild, X = i92 && c(function() {
                return 7 != T(M({
                }, "a", {
                    get: function() {
                        return M(this, "a", {
                            value: 7
                        }).a;
                    }
                })).a;
            }) ? function(t, e, n) {
                var o = I(z, e);
                o && delete z[e], M(t, e, n), o && t !== z && M(z, e, o);
            } : M, G = function(t) {
                var e = U[t] = T(A.prototype);
                return e._k = t, e;
            }, K = W && "symbol" == typeof A.iterator ? function(t) {
                return "symbol" == typeof t;
            } : function(t) {
                return t instanceof A;
            }, Z = function(t, e, n) {
                return t === z && Z(H, e, n), b(t), e = w(e, !0), b(n), r91(U, e) ? (n.enumerable ? (r91(t, L) && t[L][e] && (t[L][e] = !1), n = T(n, {
                    enumerable: S(0, !1)
                })) : (r91(t, L) || M(t, L, S(1, {
                })), t[L][e] = !0), X(t, e, n)) : M(t, e, n);
            }, q = function(t, e) {
                b(t);
                for(var n, o = g(e = x(e)), r = 0, i = o.length; i > r;)Z(t, n = o[r++], e[n]);
                return t;
            }, J = function(t) {
                var e = j.call(this, t = w(t, !0));
                return !(this === z && r91(U, t) && !r91(H, t)) && (!(e || !r91(this, t) || !r91(U, t) || r91(this, L) && this[L][t]) || e);
            }, $ = function(t, e) {
                if (t = x(t), e = w(e, !0), t !== z || !r91(U, e) || r91(H, e)) {
                    var n = I(t, e);
                    return !n || !r91(U, e) || r91(t, L) && t[L][e] || (n.enumerable = !0), n;
                }
            }, Q = function(t) {
                for(var e, n = R(x(t)), o = [], i = 0; n.length > i;)r91(U, e = n[i++]) || e == L || e == l || o.push(e);
                return o;
            }, tt = function(t) {
                for(var e, n = t === z, o = R(n ? H : x(t)), i = [], a = 0; o.length > a;)!r91(U, e = o[a++]) || n && !r91(z, e) || i.push(U[e]);
                return i;
            };
            W || (s((A = function() {
                if (this instanceof A) throw TypeError("Symbol is not a constructor!");
                var t = d(arguments.length > 0 ? arguments[0] : void 0), e = function(n) {
                    this === z && e.call(H, n), r91(this, L) && r91(this[L], t) && (this[L][t] = !1), X(this, t, S(1, n));
                };
                return i92 && V && X(z, t, {
                    configurable: !0,
                    set: e
                }), G(t);
            }).prototype, "toString", function() {
                return this._k;
            }), B.f = $, _.f = Z, n183(49).f = E.f = Q, n183(62).f = J, C.f = tt, i92 && !n183(45) && s(z, "propertyIsEnumerable", J, !0), h.f = function(t) {
                return G(p(t));
            }), a38(a38.G + a38.W + a38.F * !W, {
                Symbol: A
            });
            for(var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;)p(et[nt++]);
            for(var ot = O(p.store), rt = 0; ot.length > rt;)v(ot[rt++]);
            a38(a38.S + a38.F * !W, "Symbol", {
                for: function(t) {
                    return r91(F, t += "") ? F[t] : F[t] = A(t);
                },
                keyFor: function(t) {
                    if (!K(t)) throw TypeError(t + " is not a symbol!");
                    for(var e in F)if (F[e] === t) return e;
                },
                useSetter: function() {
                    V = !0;
                },
                useSimple: function() {
                    V = !1;
                }
            }), a38(a38.S + a38.F * !W, "Object", {
                create: function(t, e) {
                    return void 0 === e ? T(t) : q(T(t), e);
                },
                defineProperty: Z,
                defineProperties: q,
                getOwnPropertyDescriptor: $,
                getOwnPropertyNames: Q,
                getOwnPropertySymbols: tt
            });
            var it = c(function() {
                C.f(1);
            });
            a38(a38.S + a38.F * it, "Object", {
                getOwnPropertySymbols: function(t) {
                    return C.f(k(t));
                }
            }), N && a38(a38.S + a38.F * (!W || c(function() {
                var t = A();
                return "[null]" != P([
                    t
                ]) || "{}" != P({
                    a: t
                }) || "{}" != P(Object(t));
            })), "JSON", {
                stringify: function(t351) {
                    for(var e236, n, o = [
                        t351
                    ], r = 1; arguments.length > r;)o.push(arguments[r++]);
                    if (n = e236 = o[1], (m(e236) || void 0 !== t351) && !K(t351)) return y(e236) || (e236 = function(t, e) {
                        if ("function" == typeof n && (e = n.call(this, t, e)), !K(e)) return e;
                    }), o[1] = e236, P.apply(N, o);
                }
            }), A.prototype[D] || n183(27)(A.prototype, D, A.prototype.valueOf), f(A, "Symbol"), f(Math, "Math", !0), f(o165.JSON, "JSON", !0);
        },
        function(t, e, n) {
            t.exports = n(68)("native-function-to-string", Function.toString);
        },
        function(t352, e237, n184) {
            var o = n184(46), r = n184(70), i = n184(62);
            t352.exports = function(t) {
                var e = o(t), n = r.f;
                if (n) for(var a, s = n(t), l = i.f, c = 0; s.length > c;)l.call(t, a = s[c++]) && e.push(a);
                return e;
            };
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                create: n(48)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F * !n(18), "Object", {
                defineProperty: n(19).f
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F * !n(18), "Object", {
                defineProperties: n(116)
            });
        },
        function(t353, e238, n) {
            var o = n(28), r = n(34).f;
            n(35)("getOwnPropertyDescriptor", function() {
                return function(t, e) {
                    return r(o(t), e);
                };
            });
        },
        function(t354, e, n) {
            var o = n(20), r = n(50);
            n(35)("getPrototypeOf", function() {
                return function(t) {
                    return r(o(t));
                };
            });
        },
        function(t355, e, n) {
            var o = n(20), r = n(46);
            n(35)("keys", function() {
                return function(t) {
                    return r(o(t));
                };
            });
        },
        function(t, e, n) {
            n(35)("getOwnPropertyNames", function() {
                return n(117).f;
            });
        },
        function(t356, e239, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("freeze", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t357, e240, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("seal", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t358, e241, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("preventExtensions", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t359, e242, n) {
            var o = n(13);
            n(35)("isFrozen", function(t) {
                return function(e) {
                    return !o(e) || !!t && t(e);
                };
            });
        },
        function(t360, e243, n) {
            var o = n(13);
            n(35)("isSealed", function(t) {
                return function(e) {
                    return !o(e) || !!t && t(e);
                };
            });
        },
        function(t361, e244, n) {
            var o = n(13);
            n(35)("isExtensible", function(t) {
                return function(e) {
                    return !!o(e) && (!t || t(e));
                };
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F, "Object", {
                assign: n(118)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                is: n(119)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                setPrototypeOf: n(90).set
            });
        },
        function(t, e, n) {
            "use strict";
            var o = n(63), r = {
            };
            r[n(14)("toStringTag")] = "z", r + "" != "[object z]" && n(21)(Object.prototype, "toString", function() {
                return "[object " + o(this) + "]";
            }, !0);
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Function", {
                bind: n(120)
            });
        },
        function(t, e, n) {
            var o = n(19).f, r = Function.prototype, i = /^\s*function ([^ (]*)/;
            "name" in r || n(18) && o(r, "name", {
                configurable: !0,
                get: function() {
                    try {
                        return ("" + this).match(i)[1];
                    } catch (t) {
                        return "";
                    }
                }
            });
        },
        function(t362, e, n) {
            "use strict";
            var o = n(13), r = n(50), i = n(14)("hasInstance"), a = Function.prototype;
            i in a || n(19).f(a, i, {
                value: function(t) {
                    if ("function" != typeof this || !o(t)) return !1;
                    if (!o(this.prototype)) return t instanceof this;
                    for(; t = r(t);)if (this.prototype === t) return !0;
                    return !1;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(122);
            o(o.G + o.F * (parseInt != r), {
                parseInt: r
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(123);
            o(o.G + o.F * (parseFloat != r), {
                parseFloat: r
            });
        },
        function(t363, e245, n185) {
            "use strict";
            var o166 = n185(10), r92 = n185(26), i93 = n185(37), a39 = n185(92), s = n185(40), l24 = n185(11), c19 = n185(49).f, u17 = n185(34).f, f = n185(19).f, d = n185(54).trim, p = o166.Number, h = p, v = p.prototype, g = "Number" == i93(n185(48)(v)), y = "trim" in String.prototype, b = function(t) {
                var e = s(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    var n, o, r, i = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
                    } else if (48 === i) {
                        switch(e.charCodeAt(1)){
                            case 66:
                            case 98:
                                o = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, r = 55;
                                break;
                            default:
                                return +e;
                        }
                        for(var a, l = e.slice(2), c = 0, u = l.length; c < u; c++)if ((a = l.charCodeAt(c)) < 48 || a > r) return NaN;
                        return parseInt(l, o);
                    }
                }
                return +e;
            };
            if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
                p = function(t) {
                    var e = arguments.length < 1 ? 0 : t, n = this;
                    return n instanceof p && (g ? l24(function() {
                        v.valueOf.call(n);
                    }) : "Number" != i93(n)) ? a39(new h(b(e)), n, p) : b(e);
                };
                for(var m, k = n185(18) ? c19(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++)r92(h, m = k[x]) && !r92(p, m) && f(p, m, u17(h, m));
                p.prototype = v, v.constructor = p, n185(21)(o166, "Number", p);
            }
        },
        function(t364, e246, n186) {
            "use strict";
            var o167 = n186(0), r = n186(33), i = n186(124), a = n186(93), s30 = 1..toFixed, l25 = Math.floor, c20 = [
                0,
                0,
                0,
                0,
                0,
                0
            ], u = "Number.toFixed: incorrect invocation!", f = function(t, e) {
                for(var n = -1, o = e; ++n < 6;)o += t * c20[n], c20[n] = o % 10000000, o = l25(o / 10000000);
            }, d = function(t) {
                for(var e = 6, n = 0; --e >= 0;)n += c20[e], c20[e] = l25(n / t), n = n % t * 10000000;
            }, p = function() {
                for(var t = 6, e = ""; --t >= 0;)if ("" !== e || 0 === t || 0 !== c20[t]) {
                    var n = String(c20[t]);
                    e = "" === e ? n : e + a.call("0", 7 - n.length) + n;
                }
                return e;
            }, h = function(t, e, n) {
                return 0 === e ? n : e % 2 == 1 ? h(t, e - 1, n * t) : h(t * t, e / 2, n);
            };
            o167(o167.P + o167.F * (!!s30 && ("0.000" !== 0.00008.toFixed(3) || "1" !== 0.9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 1000000000000000100..toFixed(0)) || !n186(11)(function() {
                s30.call({
                });
            })), "Number", {
                toFixed: function(t365) {
                    var e247, n187, o, s, l = i(this, u), c = r(t365), v = "", g = "0";
                    if (c < 0 || c > 20) throw RangeError(u);
                    if (l != l) return "NaN";
                    if (l <= -1000000000000000000000 || l >= 1000000000000000000000) return String(l);
                    if (l < 0 && (v = "-", l = -l), l > 0.000000000000000000001) {
                        if (n187 = (e247 = (function(t) {
                            for(var e = 0, n = t; n >= 4096;)e += 12, n /= 4096;
                            for(; n >= 2;)e += 1, n /= 2;
                            return e;
                        })(l * h(2, 69, 1)) - 69) < 0 ? l * h(2, -e247, 1) : l / h(2, e247, 1), n187 *= 4503599627370496, (e247 = 52 - e247) > 0) {
                            for(f(0, n187), o = c; o >= 7;)f(10000000, 0), o -= 7;
                            for(f(h(10, o, 1), 0), o = e247 - 1; o >= 23;)d(8388608), o -= 23;
                            d(1 << o), f(1, 1), d(2), g = p();
                        } else f(0, n187), f(1 << -e247, 0), g = p() + a.call("0", c);
                    }
                    return g = c > 0 ? v + ((s = g.length) <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : v + g;
                }
            });
        },
        function(t366, e248, n) {
            "use strict";
            var o = n(0), r = n(11), i = n(124), a = 1..toPrecision;
            o(o.P + o.F * (r(function() {
                return "1" !== a.call(1, void 0);
            }) || !r(function() {
                a.call({
                });
            })), "Number", {
                toPrecision: function(t) {
                    var e = i(this, "Number#toPrecision: incorrect invocation!");
                    return void 0 === t ? a.call(e) : a.call(e, t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                EPSILON: Math.pow(2, -52)
            });
        },
        function(t367, e, n) {
            var o = n(0), r = n(10).isFinite;
            o(o.S, "Number", {
                isFinite: function(t) {
                    return "number" == typeof t && r(t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                isInteger: n(125)
            });
        },
        function(t368, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                isNaN: function(t) {
                    return t != t;
                }
            });
        },
        function(t369, e, n) {
            var o = n(0), r = n(125), i = Math.abs;
            o(o.S, "Number", {
                isSafeInteger: function(t) {
                    return r(t) && i(t) <= 9007199254740991;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                MIN_SAFE_INTEGER: -9007199254740991
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(123);
            o(o.S + o.F * (Number.parseFloat != r), "Number", {
                parseFloat: r
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(122);
            o(o.S + o.F * (Number.parseInt != r), "Number", {
                parseInt: r
            });
        },
        function(t370, e, n) {
            var o = n(0), r = n(126), i = Math.sqrt, a = Math.acosh;
            o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
                acosh: function(t) {
                    return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + i(t - 1) * i(t + 1));
                }
            });
        },
        function(t371, e249, n) {
            var o = n(0), r = Math.asinh;
            o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", {
                asinh: function t(e) {
                    return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e;
                }
            });
        },
        function(t372, e, n) {
            var o = n(0), r = Math.atanh;
            o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", {
                atanh: function(t) {
                    return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
                }
            });
        },
        function(t373, e, n) {
            var o = n(0), r = n(94);
            o(o.S, "Math", {
                cbrt: function(t) {
                    return r(t = +t) * Math.pow(Math.abs(t), 1 / 3);
                }
            });
        },
        function(t374, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                clz32: function(t) {
                    return (t >>>= 0) ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E) : 32;
                }
            });
        },
        function(t375, e, n) {
            var o = n(0), r = Math.exp;
            o(o.S, "Math", {
                cosh: function(t) {
                    return (r(t = +t) + r(-t)) / 2;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(95);
            o(o.S + o.F * (r != Math.expm1), "Math", {
                expm1: r
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                fround: n(235)
            });
        },
        function(t376, e250, n188) {
            var o = n188(94), r93 = Math.pow, i = r93(2, -52), a = r93(2, -23), s = r93(2, 127) * (2 - a), l = r93(2, -126);
            t376.exports = Math.fround || function(t) {
                var e, n, r = Math.abs(t), c = o(t);
                return r < l ? c * (r / l / a + 1 / i - 1 / i) * l * a : (n = (e = (1 + a / i) * r) - (e - r)) > s || n != n ? c * (1 / 0) : c * n;
            };
        },
        function(t, e, n189) {
            var o168 = n189(0), r = Math.abs;
            o168(o168.S, "Math", {
                hypot: function(t, e) {
                    for(var n, o, i = 0, a = 0, s = arguments.length, l = 0; a < s;)l < (n = r(arguments[a++])) ? (i = i * (o = l / n) * o + 1, l = n) : i += n > 0 ? (o = n / l) * o : n;
                    return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(i);
                }
            });
        },
        function(t377, e251, n190) {
            var o169 = n190(0), r94 = Math.imul;
            o169(o169.S + o169.F * n190(11)(function() {
                return -5 != r94(4294967295, 5) || 2 != r94.length;
            }), "Math", {
                imul: function(t, e) {
                    var n = +t, o = +e, r = 65535 & n, i = 65535 & o;
                    return 0 | r * i + ((65535 & n >>> 16) * i + r * (65535 & o >>> 16) << 16 >>> 0);
                }
            });
        },
        function(t378, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log10: function(t) {
                    return Math.log(t) * Math.LOG10E;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log1p: n(126)
            });
        },
        function(t379, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log2: function(t) {
                    return Math.log(t) / Math.LN2;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                sign: n(94)
            });
        },
        function(t380, e, n) {
            var o = n(0), r = n(95), i = Math.exp;
            o(o.S + o.F * n(11)(function() {
                return -0.00000000000000002 != !Math.sinh(-0.00000000000000002);
            }), "Math", {
                sinh: function(t) {
                    return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2);
                }
            });
        },
        function(t381, e252, n191) {
            var o = n191(0), r = n191(95), i = Math.exp;
            o(o.S, "Math", {
                tanh: function(t) {
                    var e = r(t = +t), n = r(-t);
                    return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t));
                }
            });
        },
        function(t382, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                trunc: function(t) {
                    return (t > 0 ? Math.floor : Math.ceil)(t);
                }
            });
        },
        function(t, e253, n192) {
            var o170 = n192(0), r = n192(47), i = String.fromCharCode, a40 = String.fromCodePoint;
            o170(o170.S + o170.F * (!!a40 && 1 != a40.length), "String", {
                fromCodePoint: function(t) {
                    for(var e, n = [], o = arguments.length, a = 0; o > a;){
                        if (e = +arguments[a++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                        n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
                    }
                    return n.join("");
                }
            });
        },
        function(t383, e254, n193) {
            var o171 = n193(0), r = n193(28), i = n193(16);
            o171(o171.S, "String", {
                raw: function(t) {
                    for(var e = r(t.raw), n = i(e.length), o = arguments.length, a = [], s = 0; n > s;)a.push(String(e[s++])), s < o && a.push(String(arguments[s]));
                    return a.join("");
                }
            });
        },
        function(t384, e, n) {
            "use strict";
            n(54)("trim", function(t) {
                return function() {
                    return t(this, 3);
                };
            });
        },
        function(t385, e255, n194) {
            "use strict";
            var o = n194(96)(!0);
            n194(97)(String, "String", function(t) {
                this._t = String(t), this._i = 0;
            }, function() {
                var t, e = this._t, n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = o(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                });
            });
        },
        function(t386, e, n) {
            "use strict";
            var o = n(0), r = n(96)(!1);
            o(o.P, "String", {
                codePointAt: function(t) {
                    return r(this, t);
                }
            });
        },
        function(t387, e256, n195) {
            "use strict";
            var o172 = n195(0), r = n195(16), i = n195(98), a = "".endsWith;
            o172(o172.P + o172.F * n195(100)("endsWith"), "String", {
                endsWith: function(t) {
                    var e = i(this, t, "endsWith"), n = arguments.length > 1 ? arguments[1] : void 0, o = r(e.length), s = void 0 === n ? o : Math.min(r(n), o), l = String(t);
                    return a ? a.call(e, l, s) : e.slice(s - l.length, s) === l;
                }
            });
        },
        function(t388, e, n) {
            "use strict";
            var o = n(0), r = n(98);
            o(o.P + o.F * n(100)("includes"), "String", {
                includes: function(t) {
                    return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "String", {
                repeat: n(93)
            });
        },
        function(t389, e257, n196) {
            "use strict";
            var o173 = n196(0), r = n196(16), i = n196(98), a = "".startsWith;
            o173(o173.P + o173.F * n196(100)("startsWith"), "String", {
                startsWith: function(t) {
                    var e = i(this, t, "startsWith"), n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)), o = String(t);
                    return a ? a.call(e, o, n) : e.slice(n, n + o.length) === o;
                }
            });
        },
        function(t390, e258, n) {
            "use strict";
            n(22)("anchor", function(t) {
                return function(e) {
                    return t(this, "a", "name", e);
                };
            });
        },
        function(t391, e, n) {
            "use strict";
            n(22)("big", function(t) {
                return function() {
                    return t(this, "big", "", "");
                };
            });
        },
        function(t392, e, n) {
            "use strict";
            n(22)("blink", function(t) {
                return function() {
                    return t(this, "blink", "", "");
                };
            });
        },
        function(t393, e, n) {
            "use strict";
            n(22)("bold", function(t) {
                return function() {
                    return t(this, "b", "", "");
                };
            });
        },
        function(t394, e, n) {
            "use strict";
            n(22)("fixed", function(t) {
                return function() {
                    return t(this, "tt", "", "");
                };
            });
        },
        function(t395, e259, n) {
            "use strict";
            n(22)("fontcolor", function(t) {
                return function(e) {
                    return t(this, "font", "color", e);
                };
            });
        },
        function(t396, e260, n) {
            "use strict";
            n(22)("fontsize", function(t) {
                return function(e) {
                    return t(this, "font", "size", e);
                };
            });
        },
        function(t397, e, n) {
            "use strict";
            n(22)("italics", function(t) {
                return function() {
                    return t(this, "i", "", "");
                };
            });
        },
        function(t398, e261, n) {
            "use strict";
            n(22)("link", function(t) {
                return function(e) {
                    return t(this, "a", "href", e);
                };
            });
        },
        function(t399, e, n) {
            "use strict";
            n(22)("small", function(t) {
                return function() {
                    return t(this, "small", "", "");
                };
            });
        },
        function(t400, e, n) {
            "use strict";
            n(22)("strike", function(t) {
                return function() {
                    return t(this, "strike", "", "");
                };
            });
        },
        function(t401, e, n) {
            "use strict";
            n(22)("sub", function(t) {
                return function() {
                    return t(this, "sub", "", "");
                };
            });
        },
        function(t402, e, n) {
            "use strict";
            n(22)("sup", function(t) {
                return function() {
                    return t(this, "sup", "", "");
                };
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Date", {
                now: function() {
                    return (new Date).getTime();
                }
            });
        },
        function(t, e262, n197) {
            "use strict";
            var o = n197(0), r = n197(20), i = n197(40);
            o(o.P + o.F * n197(11)(function() {
                return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                    toISOString: function() {
                        return 1;
                    }
                });
            }), "Date", {
                toJSON: function(t) {
                    var e = r(this), n = i(e);
                    return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(270);
            o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", {
                toISOString: r
            });
        },
        function(t403, e263, n198) {
            "use strict";
            var o174 = n198(11), r = Date.prototype.getTime, i = Date.prototype.toISOString, a = function(t) {
                return t > 9 ? t : "0" + t;
            };
            t403.exports = o174(function() {
                return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001));
            }) || !o174(function() {
                i.call(new Date(NaN));
            }) ? function() {
                if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
                var t = this, e = t.getUTCFullYear(), n = t.getUTCMilliseconds(), o = e < 0 ? "-" : e > 9999 ? "+" : "";
                return o + ("00000" + Math.abs(e)).slice(o ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
            } : i;
        },
        function(t404, e, n) {
            var o = Date.prototype, r = o.toString, i = o.getTime;
            new Date(NaN) + "" != "Invalid Date" && n(21)(o, "toString", function() {
                var t = i.call(this);
                return t == t ? r.call(this) : "Invalid Date";
            });
        },
        function(t, e, n) {
            var o = n(14)("toPrimitive"), r = Date.prototype;
            o in r || n(27)(r, o, n(273));
        },
        function(t405, e, n) {
            "use strict";
            var o = n(12), r = n(40);
            t405.exports = function(t) {
                if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
                return r(o(this), "number" != t);
            };
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Array", {
                isArray: n(71)
            });
        },
        function(t406, e264, n199) {
            "use strict";
            var o = n199(31), r95 = n199(0), i = n199(20), a = n199(128), s = n199(101), l = n199(16), c = n199(102), u = n199(103);
            r95(r95.S + r95.F * !n199(72)(function(t) {
                Array.from(t);
            }), "Array", {
                from: function(t) {
                    var e, n, r, f, d = i(t), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, g = void 0 !== v, y = 0, b = u(d);
                    if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b)) for(n = new p(e = l(d.length)); e > y; y++)c(n, y, g ? v(d[y], y) : d[y]);
                    else for(f = b.call(d), n = new p; !(r = f.next()).done; y++)c(n, y, g ? a(f, v, [
                        r.value,
                        y
                    ], !0) : r.value);
                    return n.length = y, n;
                }
            });
        },
        function(t407, e265, n200) {
            "use strict";
            var o = n200(0), r = n200(102);
            o(o.S + o.F * n200(11)(function() {
                function t() {
                }
                return !(Array.of.call(t) instanceof t);
            }), "Array", {
                of: function() {
                    for(var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;)r(n, t, arguments[t++]);
                    return n.length = e, n;
                }
            });
        },
        function(t408, e, n) {
            "use strict";
            var o = n(0), r = n(28), i = [].join;
            o(o.P + o.F * (n(61) != Object || !n(29)(i)), "Array", {
                join: function(t) {
                    return i.call(r(this), void 0 === t ? "," : t);
                }
            });
        },
        function(t409, e266, n201) {
            "use strict";
            var o175 = n201(0), r96 = n201(89), i = n201(37), a = n201(47), s = n201(16), l = [].slice;
            o175(o175.P + o175.F * n201(11)(function() {
                r96 && l.call(r96);
            }), "Array", {
                slice: function(t, e) {
                    var n = s(this.length), o = i(this);
                    if (e = void 0 === e ? n : e, "Array" == o) return l.call(this, t, e);
                    for(var r = a(t, n), c = a(e, n), u = s(c - r), f = new Array(u), d = 0; d < u; d++)f[d] = "String" == o ? this.charAt(r + d) : this[r + d];
                    return f;
                }
            });
        },
        function(t410, e, n) {
            "use strict";
            var o = n(0), r = n(32), i = n(20), a = n(11), s = [].sort, l = [
                1,
                2,
                3
            ];
            o(o.P + o.F * (a(function() {
                l.sort(void 0);
            }) || !a(function() {
                l.sort(null);
            }) || !n(29)(s)), "Array", {
                sort: function(t) {
                    return void 0 === t ? s.call(i(this)) : s.call(i(this), r(t));
                }
            });
        },
        function(t411, e, n) {
            "use strict";
            var o = n(0), r = n(36)(0), i = n(29)([].forEach, !0);
            o(o.P + o.F * !i, "Array", {
                forEach: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t412, e267, n) {
            var o = n(13), r = n(71), i = n(14)("species");
            t412.exports = function(t) {
                var e;
                return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), o(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e;
            };
        },
        function(t413, e, n) {
            "use strict";
            var o = n(0), r = n(36)(1);
            o(o.P + o.F * !n(29)([].map, !0), "Array", {
                map: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t414, e, n) {
            "use strict";
            var o = n(0), r = n(36)(2);
            o(o.P + o.F * !n(29)([].filter, !0), "Array", {
                filter: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t415, e, n) {
            "use strict";
            var o = n(0), r = n(36)(3);
            o(o.P + o.F * !n(29)([].some, !0), "Array", {
                some: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t416, e, n) {
            "use strict";
            var o = n(0), r = n(36)(4);
            o(o.P + o.F * !n(29)([].every, !0), "Array", {
                every: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t417, e, n) {
            "use strict";
            var o = n(0), r = n(130);
            o(o.P + o.F * !n(29)([].reduce, !0), "Array", {
                reduce: function(t) {
                    return r(this, t, arguments.length, arguments[1], !1);
                }
            });
        },
        function(t418, e, n) {
            "use strict";
            var o = n(0), r = n(130);
            o(o.P + o.F * !n(29)([].reduceRight, !0), "Array", {
                reduceRight: function(t) {
                    return r(this, t, arguments.length, arguments[1], !0);
                }
            });
        },
        function(t419, e, n) {
            "use strict";
            var o = n(0), r = n(69)(!1), i = [].indexOf, a = !!i && 1 / [
                1
            ].indexOf(1, -0) < 0;
            o(o.P + o.F * (a || !n(29)(i)), "Array", {
                indexOf: function(t) {
                    return a ? i.apply(this, arguments) || 0 : r(this, t, arguments[1]);
                }
            });
        },
        function(t420, e268, n202) {
            "use strict";
            var o176 = n202(0), r = n202(28), i = n202(33), a = n202(16), s = [].lastIndexOf, l = !!s && 1 / [
                1
            ].lastIndexOf(1, -0) < 0;
            o176(o176.P + o176.F * (l || !n202(29)(s)), "Array", {
                lastIndexOf: function(t) {
                    if (l) return s.apply(this, arguments) || 0;
                    var e = r(this), n = a(e.length), o = n - 1;
                    for(arguments.length > 1 && (o = Math.min(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)if (o in e && e[o] === t) return o || 0;
                    return -1;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Array", {
                copyWithin: n(131)
            }), n(51)("copyWithin");
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Array", {
                fill: n(104)
            }), n(51)("fill");
        },
        function(t421, e, n) {
            "use strict";
            var o = n(0), r = n(36)(5), i = !0;
            "find" in [] && Array(1).find(function() {
                i = !1;
            }), o(o.P + o.F * i, "Array", {
                find: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)("find");
        },
        function(t422, e, n) {
            "use strict";
            var o = n(0), r = n(36)(6), i = "findIndex", a = !0;
            i in [] && Array(1)[i](function() {
                a = !1;
            }), o(o.P + o.F * a, "Array", {
                findIndex: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)(i);
        },
        function(t, e, n) {
            n(56)("Array");
        },
        function(t423, e269, n203) {
            var o177 = n203(10), r = n203(92), i94 = n203(19).f, a = n203(49).f, s = n203(99), l = n203(73), c = o177.RegExp, u = c, f = c.prototype, d = /a/g, p = /a/g, h = new c(d) !== d;
            if (n203(18) && (!h || n203(11)(function() {
                return p[n203(14)("match")] = !1, c(d) != d || c(p) == p || "/a/i" != c(d, "i");
            }))) {
                c = function(t, e) {
                    var n = this instanceof c, o = s(t), i = void 0 === e;
                    return !n && o && t.constructor === c && i ? t : r(h ? new u(o && !i ? t.source : t, e) : u((o = t instanceof c) ? t.source : t, o && i ? l.call(t) : e), n ? this : f, c);
                };
                for(var v = function(t) {
                    (t in c) || i94(c, t, {
                        configurable: !0,
                        get: function() {
                            return u[t];
                        },
                        set: function(e) {
                            u[t] = e;
                        }
                    });
                }, g = a(u), y = 0; g.length > y;)v(g[y++]);
                f.constructor = c, c.prototype = f, n203(21)(o177, "RegExp", c);
            }
            n203(56)("RegExp");
        },
        function(t424, e, n) {
            "use strict";
            n(134);
            var o = n(12), r = n(73), i = n(18), a = /./.toString, s = function(t) {
                n(21)(RegExp.prototype, "toString", t, !0);
            };
            n(11)(function() {
                return "/a/b" != a.call({
                    source: "a",
                    flags: "b"
                });
            }) ? s(function() {
                var t = o(this);
                return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? r.call(t) : void 0);
            }) : "toString" != a.name && s(function() {
                return a.call(this);
            });
        },
        function(t425, e270, n204) {
            "use strict";
            var o178 = n204(12), r97 = n204(16), i = n204(107), a = n204(74);
            n204(75)("match", 1, function(t426, e271, n205, s) {
                return [
                    function(n) {
                        var o = t426(this), r = null == n ? void 0 : n[e271];
                        return void 0 !== r ? r.call(n, o) : new RegExp(n)[e271](String(o));
                    },
                    function(t) {
                        var e = s(n205, t, this);
                        if (e.done) return e.value;
                        var l = o178(t), c = String(this);
                        if (!l.global) return a(l, c);
                        var u = l.unicode;
                        l.lastIndex = 0;
                        for(var f, d = [], p = 0; null !== (f = a(l, c));){
                            var h = String(f[0]);
                            d[p] = h, "" === h && (l.lastIndex = i(c, r97(l.lastIndex), u)), p++;
                        }
                        return 0 === p ? null : d;
                    }
                ];
            });
        },
        function(t427, e272, n206) {
            "use strict";
            var o179 = n206(12), r98 = n206(20), i95 = n206(16), a41 = n206(33), s31 = n206(107), l26 = n206(74), c21 = Math.max, u18 = Math.min, f15 = Math.floor, d12 = /\$([$&`']|\d\d?|<[^>]*>)/g, p11 = /\$([$&`']|\d\d?)/g;
            n206(75)("replace", 2, function(t428, e273, n207, h) {
                function v(t, e, o, i, a, s32) {
                    var l = o + t.length, c = i.length, u19 = p11;
                    return void 0 !== a && (a = r98(a), u19 = d12), n207.call(s32, u19, function(n, r) {
                        var s;
                        switch(r.charAt(0)){
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return e.slice(0, o);
                            case "'":
                                return e.slice(l);
                            case "<":
                                s = a[r.slice(1, -1)];
                                break;
                            default:
                                var u = +r;
                                if (0 === u) return n;
                                if (u > c) {
                                    var d = f15(u / 10);
                                    return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? r.charAt(1) : i[d - 1] + r.charAt(1) : n;
                                }
                                s = i[u - 1];
                        }
                        return void 0 === s ? "" : s;
                    });
                }
                return [
                    function(o, r) {
                        var i = t428(this), a = null == o ? void 0 : o[e273];
                        return void 0 !== a ? a.call(o, i, r) : n207.call(String(i), o, r);
                    },
                    function(t, e) {
                        var r = h(n207, t, this, e);
                        if (r.done) return r.value;
                        var f = o179(t), d = String(this), p = "function" == typeof e;
                        p || (e = String(e));
                        var g = f.global;
                        if (g) {
                            var y = f.unicode;
                            f.lastIndex = 0;
                        }
                        for(var b = [];;){
                            var m = l26(f, d);
                            if (null === m) break;
                            if (b.push(m), !g) break;
                            "" === String(m[0]) && (f.lastIndex = s31(d, i95(f.lastIndex), y));
                        }
                        for(var k, x = "", w = 0, S = 0; S < b.length; S++){
                            m = b[S];
                            for(var T = String(m[0]), E = c21(u18(a41(m.index), d.length), 0), B = [], C = 1; C < m.length; C++)B.push(void 0 === (k = m[C]) ? k : String(k));
                            var _ = m.groups;
                            if (p) {
                                var O = [
                                    T
                                ].concat(B, E, d);
                                void 0 !== _ && O.push(_);
                                var I = String(e.apply(void 0, O));
                            } else I = v(T, d, E, B, _, e);
                            E >= w && (x += d.slice(w, E) + I, w = E + T.length);
                        }
                        return x + d.slice(w);
                    }
                ];
            });
        },
        function(t429, e274, n208) {
            "use strict";
            var o180 = n208(12), r99 = n208(119), i = n208(74);
            n208(75)("search", 1, function(t430, e275, n209, a) {
                return [
                    function(n) {
                        var o = t430(this), r = null == n ? void 0 : n[e275];
                        return void 0 !== r ? r.call(n, o) : new RegExp(n)[e275](String(o));
                    },
                    function(t) {
                        var e = a(n209, t, this);
                        if (e.done) return e.value;
                        var s = o180(t), l = String(this), c = s.lastIndex;
                        r99(c, 0) || (s.lastIndex = 0);
                        var u = i(s, l);
                        return r99(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index;
                    }
                ];
            });
        },
        function(t431, e276, n210) {
            "use strict";
            var o181 = n210(99), r100 = n210(12), i96 = n210(64), a42 = n210(107), s33 = n210(16), l27 = n210(74), c22 = n210(106), u20 = n210(11), f16 = Math.min, d13 = [].push, p12 = "length", h7 = !u20(function() {
                RegExp(4294967295, "y");
            });
            n210(75)("split", 2, function(t432, e277, n211, u21) {
                var v2;
                return v2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p12] || 2 != "ab".split(/(?:ab)*/)[p12] || 4 != ".".split(/(.?)(.?)/)[p12] || ".".split(/()()/)[p12] > 1 || "".split(/.?/)[p12] ? function(t, e) {
                    var r = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!o181(t)) return n211.call(r, t, e);
                    for(var i, a, s, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, h = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, u + "g"); (i = c22.call(v, r)) && !((a = v.lastIndex) > f && (l.push(r.slice(f, i.index)), i[p12] > 1 && i.index < r[p12] && d13.apply(l, i.slice(1)), s = i[0][p12], f = a, l[p12] >= h));)v.lastIndex === i.index && v.lastIndex++;
                    return f === r[p12] ? !s && v.test("") || l.push("") : l.push(r.slice(f)), l[p12] > h ? l.slice(0, h) : l;
                } : "0".split(void 0, 0)[p12] ? function(t, e) {
                    return void 0 === t && 0 === e ? [] : n211.call(this, t, e);
                } : n211, [
                    function(n, o) {
                        var r = t432(this), i = null == n ? void 0 : n[e277];
                        return void 0 !== i ? i.call(n, r, o) : v2.call(String(r), n, o);
                    },
                    function(t, e) {
                        var o = u21(v2, t, this, e, v2 !== n211);
                        if (o.done) return o.value;
                        var c = r100(t), d = String(this), p = i96(c, RegExp), g = c.unicode, y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (h7 ? "y" : "g"), b = new p(h7 ? c : "^(?:" + c.source + ")", y), m = void 0 === e ? 4294967295 : e >>> 0;
                        if (0 === m) return [];
                        if (0 === d.length) return null === l27(b, d) ? [
                            d
                        ] : [];
                        for(var k = 0, x = 0, w = []; x < d.length;){
                            b.lastIndex = h7 ? x : 0;
                            var S, T = l27(b, h7 ? d : d.slice(x));
                            if (null === T || (S = f16(s33(b.lastIndex + (h7 ? 0 : x)), d.length)) === k) x = a42(d, x, g);
                            else {
                                if (w.push(d.slice(k, x)), w.length === m) return w;
                                for(var E = 1; E <= T.length - 1; E++)if (w.push(T[E]), w.length === m) return w;
                                x = k = S;
                            }
                        }
                        return w.push(d.slice(k)), w;
                    }
                ];
            });
        },
        function(t433, e278, n212) {
            var o182 = n212(10), r101 = n212(108).set, i = o182.MutationObserver || o182.WebKitMutationObserver, a = o182.process, s = o182.Promise, l = "process" == n212(37)(a);
            t433.exports = function() {
                var t, e, n, c = function() {
                    var o, r;
                    for(l && (o = a.domain) && o.exit(); t;){
                        r = t.fn, t = t.next;
                        try {
                            r();
                        } catch (o) {
                            throw t ? n() : e = void 0, o;
                        }
                    }
                    e = void 0, o && o.enter();
                };
                if (l) n = function() {
                    a.nextTick(c);
                };
                else if (!i || o182.navigator && o182.navigator.standalone) {
                    if (s && s.resolve) {
                        var u = s.resolve(void 0);
                        n = function() {
                            u.then(c);
                        };
                    } else n = function() {
                        r101.call(o182, c);
                    };
                } else {
                    var f = !0, d = document.createTextNode("");
                    new i(c).observe(d, {
                        characterData: !0
                    }), n = function() {
                        d.data = f = !f;
                    };
                }
                return function(o) {
                    var r = {
                        fn: o,
                        next: void 0
                    };
                    e && (e.next = r), t || (t = r, n()), e = r;
                };
            };
        },
        function(t434, e) {
            t434.exports = function(t) {
                try {
                    return {
                        e: !1,
                        v: t()
                    };
                } catch (t435) {
                    return {
                        e: !0,
                        v: t435
                    };
                }
            };
        },
        function(t436, e279, n) {
            "use strict";
            var o = n(138), r = n(52);
            t436.exports = n(78)("Map", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                get: function(t) {
                    var e = o.getEntry(r(this, "Map"), t);
                    return e && e.v;
                },
                set: function(t, e) {
                    return o.def(r(this, "Map"), 0 === t ? 0 : t, e);
                }
            }, o, !0);
        },
        function(t437, e, n) {
            "use strict";
            var o = n(138), r = n(52);
            t437.exports = n(78)("Set", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(t) {
                    return o.def(r(this, "Set"), t = 0 === t ? 0 : t, t);
                }
            }, o);
        },
        function(t438, e280, n213) {
            "use strict";
            var o, r102 = n213(10), i97 = n213(36)(0), a = n213(21), s = n213(41), l = n213(118), c = n213(139), u = n213(13), f = n213(52), d = n213(52), p = !r102.ActiveXObject && "ActiveXObject" in r102, h = s.getWeak, v = Object.isExtensible, g = c.ufstore, y = function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, b = {
                get: function(t) {
                    if (u(t)) {
                        var e = h(t);
                        return !0 === e ? g(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0;
                    }
                },
                set: function(t, e) {
                    return c.def(f(this, "WeakMap"), t, e);
                }
            }, m = t438.exports = n213(78)("WeakMap", y, b, c, !0, !0);
            d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, b), s.NEED = !0, i97([
                "delete",
                "has",
                "get",
                "set"
            ], function(t) {
                var e281 = m.prototype, n = e281[t];
                a(e281, t, function(e, r) {
                    if (u(e) && !v(e)) {
                        this._f || (this._f = new o);
                        var i = this._f[t](e, r);
                        return "set" == t ? this : i;
                    }
                    return n.call(this, e, r);
                });
            }));
        },
        function(t439, e, n) {
            "use strict";
            var o = n(139), r = n(52);
            n(78)("WeakSet", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(t) {
                    return o.def(r(this, "WeakSet"), t, !0);
                }
            }, o, !1, !0);
        },
        function(t440, e282, n214) {
            "use strict";
            var o183 = n214(0), r103 = n214(79), i98 = n214(109), a = n214(12), s = n214(47), l = n214(16), c23 = n214(13), u22 = n214(10).ArrayBuffer, f = n214(64), d = i98.ArrayBuffer, p = i98.DataView, h8 = r103.ABV && u22.isView, v = d.prototype.slice, g = r103.VIEW;
            o183(o183.G + o183.W + o183.F * (u22 !== d), {
                ArrayBuffer: d
            }), o183(o183.S + o183.F * !r103.CONSTR, "ArrayBuffer", {
                isView: function(t) {
                    return h8 && h8(t) || c23(t) && g in t;
                }
            }), o183(o183.P + o183.U + o183.F * n214(11)(function() {
                return !new d(2).slice(1, void 0).byteLength;
            }), "ArrayBuffer", {
                slice: function(t, e) {
                    if (void 0 !== v && void 0 === e) return v.call(a(this), t);
                    for(var n = a(this).byteLength, o = s(t, n), r = s(void 0 === e ? n : e, n), i = new (f(this, d))(l(r - o)), c = new p(this), u = new p(i), h = 0; o < r;)u.setUint8(h++, c.getUint8(o++));
                    return i;
                }
            }), n214(56)("ArrayBuffer");
        },
        function(t, e, n) {
            var o = n(0);
            o(o.G + o.W + o.F * !n(79).ABV, {
                DataView: n(109).DataView
            });
        },
        function(t441, e283, n215) {
            n215(39)("Int8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t442, e284, n216) {
            n216(39)("Uint8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t443, e285, n217) {
            n217(39)("Uint8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            }, !0);
        },
        function(t444, e286, n218) {
            n218(39)("Int16", 2, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t445, e287, n219) {
            n219(39)("Uint16", 2, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t446, e288, n220) {
            n220(39)("Int32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t447, e289, n221) {
            n221(39)("Uint32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t448, e290, n222) {
            n222(39)("Float32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t449, e291, n223) {
            n223(39)("Float64", 8, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t450, e292, n224) {
            var o184 = n224(0), r = n224(32), i = n224(12), a = (n224(10).Reflect || {
            }).apply, s = Function.apply;
            o184(o184.S + o184.F * !n224(11)(function() {
                a(function() {
                });
            }), "Reflect", {
                apply: function(t, e, n) {
                    var o = r(t), l = i(n);
                    return a ? a(o, e, l) : s.call(o, e, l);
                }
            });
        },
        function(t451, e293, n225) {
            var o185 = n225(0), r = n225(48), i = n225(32), a = n225(12), s = n225(13), l28 = n225(11), c = n225(120), u = (n225(10).Reflect || {
            }).construct, f = l28(function() {
                function t() {
                }
                return !(u(function() {
                }, [], t) instanceof t);
            }), d = !l28(function() {
                u(function() {
                });
            });
            o185(o185.S + o185.F * (f || d), "Reflect", {
                construct: function(t, e) {
                    i(t), a(e);
                    var n = arguments.length < 3 ? t : i(arguments[2]);
                    if (d && !f) return u(t, e, n);
                    if (t == n) {
                        switch(e.length){
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                        }
                        var o = [
                            null
                        ];
                        return o.push.apply(o, e), new (c.apply(t, o));
                    }
                    var l = n.prototype, p = r(s(l) ? l : Object.prototype), h = Function.apply.call(t, p, e);
                    return s(h) ? h : p;
                }
            });
        },
        function(t452, e294, n226) {
            var o = n226(19), r = n226(0), i = n226(12), a = n226(40);
            r(r.S + r.F * n226(11)(function() {
                Reflect.defineProperty(o.f({
                }, 1, {
                    value: 1
                }), 1, {
                    value: 2
                });
            }), "Reflect", {
                defineProperty: function(t, e, n) {
                    i(t), e = a(e, !0), i(n);
                    try {
                        return o.f(t, e, n), !0;
                    } catch (t453) {
                        return !1;
                    }
                }
            });
        },
        function(t454, e295, n227) {
            var o = n227(0), r = n227(34).f, i = n227(12);
            o(o.S, "Reflect", {
                deleteProperty: function(t, e) {
                    var n = r(i(t), e);
                    return !(n && !n.configurable) && delete t[e];
                }
            });
        },
        function(t455, e296, n228) {
            "use strict";
            var o = n228(0), r = n228(12), i = function(t) {
                this._t = r(t), this._i = 0;
                var e, n = this._k = [];
                for(e in t)n.push(e);
            };
            n228(127)(i, "Object", function() {
                var t, e = this._k;
                do {
                    if (this._i >= e.length) return {
                        value: void 0,
                        done: !0
                    };
                }while (!((t = e[this._i++]) in this._t))
                return {
                    value: t,
                    done: !1
                };
            }), o(o.S, "Reflect", {
                enumerate: function(t) {
                    return new i(t);
                }
            });
        },
        function(t456, e297, n229) {
            var o = n229(34), r = n229(50), i = n229(26), a43 = n229(0), s = n229(13), l = n229(12);
            a43(a43.S, "Reflect", {
                get: function t(e, n) {
                    var a, c, u = arguments.length < 3 ? e : arguments[2];
                    return l(e) === u ? e[n] : (a = o.f(e, n)) ? i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(u) : void 0 : s(c = r(e)) ? t(c, n, u) : void 0;
                }
            });
        },
        function(t457, e298, n) {
            var o = n(34), r = n(0), i = n(12);
            r(r.S, "Reflect", {
                getOwnPropertyDescriptor: function(t, e) {
                    return o.f(i(t), e);
                }
            });
        },
        function(t458, e, n) {
            var o = n(0), r = n(50), i = n(12);
            o(o.S, "Reflect", {
                getPrototypeOf: function(t) {
                    return r(i(t));
                }
            });
        },
        function(t459, e299, n) {
            var o = n(0);
            o(o.S, "Reflect", {
                has: function(t, e) {
                    return e in t;
                }
            });
        },
        function(t460, e, n) {
            var o = n(0), r = n(12), i = Object.isExtensible;
            o(o.S, "Reflect", {
                isExtensible: function(t) {
                    return r(t), !i || i(t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Reflect", {
                ownKeys: n(141)
            });
        },
        function(t461, e, n) {
            var o = n(0), r = n(12), i = Object.preventExtensions;
            o(o.S, "Reflect", {
                preventExtensions: function(t) {
                    r(t);
                    try {
                        return i && i(t), !0;
                    } catch (t462) {
                        return !1;
                    }
                }
            });
        },
        function(t463, e300, n230) {
            var o = n230(19), r = n230(34), i = n230(50), a = n230(26), s34 = n230(0), l = n230(43), c = n230(12), u = n230(13);
            s34(s34.S, "Reflect", {
                set: function t(e, n, s) {
                    var f, d, p = arguments.length < 4 ? e : arguments[3], h = r.f(c(e), n);
                    if (!h) {
                        if (u(d = i(e))) return t(d, n, s, p);
                        h = l(0);
                    }
                    if (a(h, "value")) {
                        if (!1 === h.writable || !u(p)) return !1;
                        if (f = r.f(p, n)) {
                            if (f.get || f.set || !1 === f.writable) return !1;
                            f.value = s, o.f(p, n, f);
                        } else o.f(p, n, l(0, s));
                        return !0;
                    }
                    return void 0 !== h.set && (h.set.call(p, s), !0);
                }
            });
        },
        function(t464, e301, n) {
            var o = n(0), r = n(90);
            r && o(o.S, "Reflect", {
                setPrototypeOf: function(t, e) {
                    r.check(t, e);
                    try {
                        return r.set(t, e), !0;
                    } catch (t465) {
                        return !1;
                    }
                }
            });
        },
        function(t, e, n) {
            n(333), t.exports = n(17).Array.includes;
        },
        function(t466, e, n) {
            "use strict";
            var o = n(0), r = n(69)(!0);
            o(o.P, "Array", {
                includes: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)("includes");
        },
        function(t, e, n) {
            n(335), t.exports = n(17).Array.flatMap;
        },
        function(t467, e302, n231) {
            "use strict";
            var o186 = n231(0), r = n231(336), i = n231(20), a = n231(16), s = n231(32), l = n231(129);
            o186(o186.P, "Array", {
                flatMap: function(t) {
                    var e, n, o = i(this);
                    return s(t), e = a(o.length), n = l(o, 0), r(n, o, o, e, 0, 1, t, arguments[1]), n;
                }
            }), n231(51)("flatMap");
        },
        function(t468, e303, n232) {
            "use strict";
            var o = n232(71), r = n232(13), i = n232(16), a = n232(31), s = n232(14)("isConcatSpreadable");
            t468.exports = function t(e, n, l, c, u, f, d, p) {
                for(var h, v, g = u, y = 0, b = !!d && a(d, p, 3); y < c;){
                    if (y in l) {
                        if (h = b ? b(l[y], y, n) : l[y], v = !1, r(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0) g = t(e, n, h, i(h.length), g, f - 1) - 1;
                        else {
                            if (g >= 9007199254740991) throw TypeError();
                            e[g] = h;
                        }
                        g++;
                    }
                    y++;
                }
                return g;
            };
        },
        function(t, e, n) {
            n(338), t.exports = n(17).String.padStart;
        },
        function(t469, e, n) {
            "use strict";
            var o = n(0), r = n(142), i = n(77), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            o(o.P + o.F * a, "String", {
                padStart: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
                }
            });
        },
        function(t, e, n) {
            n(340), t.exports = n(17).String.padEnd;
        },
        function(t470, e, n) {
            "use strict";
            var o = n(0), r = n(142), i = n(77), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            o(o.P + o.F * a, "String", {
                padEnd: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
                }
            });
        },
        function(t, e, n) {
            n(342), t.exports = n(17).String.trimLeft;
        },
        function(t471, e, n) {
            "use strict";
            n(54)("trimLeft", function(t) {
                return function() {
                    return t(this, 1);
                };
            }, "trimStart");
        },
        function(t, e, n) {
            n(344), t.exports = n(17).String.trimRight;
        },
        function(t472, e, n) {
            "use strict";
            n(54)("trimRight", function(t) {
                return function() {
                    return t(this, 2);
                };
            }, "trimEnd");
        },
        function(t, e, n) {
            n(346), t.exports = n(86).f("asyncIterator");
        },
        function(t, e, n) {
            n(114)("asyncIterator");
        },
        function(t, e, n) {
            n(348), t.exports = n(17).Object.getOwnPropertyDescriptors;
        },
        function(t473, e304, n233) {
            var o187 = n233(0), r = n233(141), i = n233(28), a = n233(34), s = n233(102);
            o187(o187.S, "Object", {
                getOwnPropertyDescriptors: function(t) {
                    for(var e, n, o = i(t), l = a.f, c = r(o), u = {
                    }, f = 0; c.length > f;)void 0 !== (n = l(o, e = c[f++])) && s(u, e, n);
                    return u;
                }
            });
        },
        function(t, e, n) {
            n(350), t.exports = n(17).Object.values;
        },
        function(t474, e, n) {
            var o = n(0), r = n(143)(!1);
            o(o.S, "Object", {
                values: function(t) {
                    return r(t);
                }
            });
        },
        function(t, e, n) {
            n(352), t.exports = n(17).Object.entries;
        },
        function(t475, e, n) {
            var o = n(0), r = n(143)(!0);
            o(o.S, "Object", {
                entries: function(t) {
                    return r(t);
                }
            });
        },
        function(t, e, n) {
            "use strict";
            n(135), n(354), t.exports = n(17).Promise.finally;
        },
        function(t476, e305, n234) {
            "use strict";
            var o = n234(0), r = n234(17), i = n234(10), a = n234(64), s = n234(137);
            o(o.P + o.R, "Promise", {
                finally: function(t) {
                    var e = a(this, r.Promise || i.Promise), n235 = "function" == typeof t;
                    return this.then(n235 ? function(n) {
                        return s(e, t()).then(function() {
                            return n;
                        });
                    } : t, n235 ? function(n) {
                        return s(e, t()).then(function() {
                            throw n;
                        });
                    } : t);
                }
            });
        },
        function(t, e, n) {
            n(356), n(357), n(358), t.exports = n(17);
        },
        function(t477, e306, n236) {
            var o188 = n236(10), r104 = n236(0), i = n236(77), a = [].slice, s = /MSIE .\./.test(i), l = function(t) {
                return function(e, n) {
                    var o = arguments.length > 2, r = !!o && a.call(arguments, 2);
                    return t(o ? function() {
                        ("function" == typeof e ? e : Function(e)).apply(this, r);
                    } : e, n);
                };
            };
            r104(r104.G + r104.B + r104.F * s, {
                setTimeout: l(o188.setTimeout),
                setInterval: l(o188.setInterval)
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(108);
            o(o.G + o.B, {
                setImmediate: r.set,
                clearImmediate: r.clear
            });
        },
        function(t, e, n) {
            for(var o = n(105), r = n(46), i = n(21), a = n(10), s = n(27), l = n(55), c = n(14), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, h = r(p), v = 0; v < h.length; v++){
                var g, y = h[v], b = p[y], m = a[y], k = m && m.prototype;
                if (k && (k[u] || s(k, u, d), k[f] || s(k, f, y), l[y] = d, b)) for(g in o)k[g] || i(k, g, o[g], !0);
            }
        },
        function(t478, e307, n237) {
            var o189, r105, i99;
            "undefined" != typeof globalThis || "undefined", r105 = [
                e307,
                n237(30),
                n237(2),
                n237(3),
                n237(363),
                n237(365),
                n237(366),
                n237(7)
            ], void 0 === (i99 = "function" == typeof (o189 = function(o190, r106, i, a44, s, l, c, u) {
                var f = n237(8), d = n237(1);
                Object.defineProperty(o190, "__esModule", {
                    value: !0
                }), o190.default = void 0, r106 = d(r106), i = d(i), a44 = d(a44), c = d(c), u = f(u);
                var p = function() {
                    function t479(e) {
                        var n = this;
                        (0, i.default)(this, t479);
                        var o = function() {
                        };
                        u.isObject(e) && u.isFunction(e.onReady) && (o = e.onReady);
                        var r = new c.default(e);
                        this.isReady = r.isReady.then(function() {
                            n.exportAPI(r), o();
                        });
                    }
                    return (0, a44.default)(t479, [
                        {
                            key: "exportAPI",
                            value: function(t480) {
                                var e = this;
                                [
                                    "configuration"
                                ].forEach(function(n) {
                                    e[n] = t480[n];
                                }), this.destroy = function() {
                                    for(var n in Object.values(t480.moduleInstances).forEach(function(t) {
                                        u.isFunction(t.destroy) && t.destroy(), t.listeners.removeAll();
                                    }), t480 = null, e)Object.prototype.hasOwnProperty.call(e, n) && delete e[n];
                                    Object.setPrototypeOf(e, null);
                                }, Object.setPrototypeOf(this, t480.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
                                    blocks: {
                                        clear: "clear",
                                        render: "render"
                                    },
                                    caret: {
                                        focus: "focus"
                                    },
                                    events: {
                                        on: "on",
                                        off: "off",
                                        emit: "emit"
                                    },
                                    saver: {
                                        save: "save"
                                    }
                                }).forEach(function(n238) {
                                    var o191 = (0, r106.default)(n238, 2), i = o191[0], a = o191[1];
                                    Object.entries(a).forEach(function(n) {
                                        var o = (0, r106.default)(n, 2), a = o[0], s = o[1];
                                        e[s] = t480.moduleInstances.API.methods[i][a];
                                    });
                                });
                            }
                        }
                    ], [
                        {
                            key: "version",
                            get: function() {
                                return "2.22.2";
                            }
                        }
                    ]), t479;
                }();
                o190.default = p, p.displayName = "EditorJS", t478.exports = e307.default;
            }) ? o189.apply(e307, r105) : o189) || (t478.exports = i99);
        },
        function(t481, e) {
            t481.exports = function(t) {
                if (Array.isArray(t)) return t;
            };
        },
        function(t482, e308) {
            t482.exports = function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var n = [], o = !0, r = !1, i = void 0;
                    try {
                        for(var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0);
                    } catch (t) {
                        r = !0, i = t;
                    } finally{
                        try {
                            o || null == s.return || s.return();
                        } finally{
                            if (r) throw i;
                        }
                    }
                    return n;
                }
            };
        },
        function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(t483, e, n) {
            (e = t483.exports = function(...t) {
                return r(...t);
            }).__esModule = !0;
            const o = n(364), r = o.default;
            Object.assign(e, o);
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
            }, e.revert = function() {
            };
        },
        function(t484, e309, n239) {
            var o, r, i;
            "undefined" != typeof globalThis || "undefined", r = [], void 0 === (i = "function" == typeof (o = function() {
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
                    for(var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);
                    return n > -1;
                }), Element.prototype.closest || (Element.prototype.closest = function(t) {
                    var e = this;
                    if (!document.documentElement.contains(e)) return null;
                    do {
                        if (e.matches(t)) return e;
                        e = e.parentElement || e.parentNode;
                    }while (null !== e)
                    return null;
                }), Element.prototype.prepend || (Element.prototype.prepend = function(t485) {
                    var e = document.createDocumentFragment();
                    Array.isArray(t485) || (t485 = [
                        t485
                    ]), t485.forEach(function(t) {
                        var n = t instanceof Node;
                        e.appendChild(n ? t : document.createTextNode(t));
                    }), this.insertBefore(e, this.firstChild);
                });
            }) ? o.apply(e309, r) : o) || (t484.exports = i);
        },
        function(t486, e310, n240) {
            var o192, r107, i100;
            "undefined" != typeof globalThis || "undefined", r107 = [
                e310,
                n240(23),
                n240(24),
                n240(2),
                n240(3),
                n240(15),
                n240(7),
                n240(59),
                n240(148),
                n240(151)
            ], void 0 === (i100 = "function" == typeof (o192 = function(o193, r, i101, a, s35, l, c, u, f, d) {
                var p = n240(8), h = n240(1);
                Object.defineProperty(o193, "__esModule", {
                    value: !0
                }), o193.default = void 0, r = h(r), i101 = h(i101), a = h(a), s35 = h(s35), l = h(l), c = p(c), u = h(u), d = h(d);
                var v = n240(374), g = [];
                v.keys().forEach(function(t) {
                    t.match(/^\.\/[^_][\w/]*\.([tj])s$/) && g.push(v(t));
                });
                var y = function() {
                    function t487(e312) {
                        var n, o194, s = this;
                        (0, a.default)(this, t487), this.moduleInstances = {
                        }, this.eventsDispatcher = new d.default, this.isReady = new Promise(function(t, e) {
                            n = t, o194 = e;
                        }), Promise.resolve().then((0, i101.default)(r.default.mark(function t488() {
                            return r.default.wrap(function(t489) {
                                for(;;)switch(t489.prev = t489.next){
                                    case 0:
                                        return s.configuration = e312, t489.next = 3, s.validate();
                                    case 3:
                                        return t489.next = 5, s.init();
                                    case 5:
                                        return t489.next = 7, s.start();
                                    case 7:
                                        c.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout((0, i101.default)(r.default.mark(function t490() {
                                            var e, o, i;
                                            return r.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.next = 2, s.render();
                                                    case 2:
                                                        s.configuration.autofocus && (e = s.moduleInstances, o = e.BlockManager, (i = e.Caret).setToBlock(o.blocks[0], i.positions.START), o.highlightCurrentNode()), s.moduleInstances.UI.removeLoader(), n();
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t490);
                                        })), 500);
                                    case 9:
                                    case "end":
                                        return t489.stop();
                                }
                            }, t488);
                        }))).catch(function(t) {
                            c.log("Editor.js is not ready because of ".concat(t), "error"), o194(t);
                        });
                    }
                    var e311, n241;
                    return (0, s35.default)(t487, [
                        {
                            key: "validate",
                            value: (n241 = (0, i101.default)(r.default.mark(function t491() {
                                var e, n, o;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (e = this.config, n = e.holderId, o = e.holder, !n || !o) {
                                                t.next = 3;
                                                break;
                                            }
                                            throw Error("«holderId» and «holder» param can't assign at the same time.");
                                        case 3:
                                            if (!c.isString(o) || l.default.get(o)) {
                                                t.next = 5;
                                                break;
                                            }
                                            throw Error("element with ID «".concat(o, "» is missing. Pass correct holder's ID."));
                                        case 5:
                                            if (!o || !c.isObject(o) || l.default.isElement(o)) {
                                                t.next = 7;
                                                break;
                                            }
                                            throw Error("«holder» value must be an Element node");
                                        case 7:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t491, this);
                            })), function() {
                                return n241.apply(this, arguments);
                            })
                        },
                        {
                            key: "init",
                            value: function() {
                                this.constructModules(), this.configureModules();
                            }
                        },
                        {
                            key: "start",
                            value: (e311 = (0, i101.default)(r.default.mark(function t492() {
                                var e313, n = this;
                                return r.default.wrap(function(t493) {
                                    for(;;)switch(t493.prev = t493.next){
                                        case 0:
                                            return e313 = [
                                                "Tools",
                                                "UI",
                                                "BlockManager",
                                                "Paste",
                                                "BlockSelection",
                                                "RectangleSelection",
                                                "CrossBlockSelection",
                                                "ReadOnly"
                                            ], t493.next = 3, e313.reduce(function(t494, e) {
                                                return t494.then((0, i101.default)(r.default.mark(function t495() {
                                                    return r.default.wrap(function(t) {
                                                        for(;;)switch(t.prev = t.next){
                                                            case 0:
                                                                return t.prev = 0, t.next = 3, n.moduleInstances[e].prepare();
                                                            case 3:
                                                                t.next = 10;
                                                                break;
                                                            case 5:
                                                                if (t.prev = 5, t.t0 = t.catch(0), !(t.t0 instanceof f.CriticalError)) {
                                                                    t.next = 9;
                                                                    break;
                                                                }
                                                                throw new Error(t.t0.message);
                                                            case 9:
                                                                c.log("Module ".concat(e, " was skipped because of %o"), "warn", t.t0);
                                                            case 10:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                    }, t495, null, [
                                                        [
                                                            0,
                                                            5
                                                        ]
                                                    ]);
                                                })));
                                            }, Promise.resolve());
                                        case 3:
                                        case "end":
                                            return t493.stop();
                                    }
                                }, t492);
                            })), function() {
                                return e311.apply(this, arguments);
                            })
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.moduleInstances.Renderer.render(this.config.data.blocks);
                            }
                        },
                        {
                            key: "constructModules",
                            value: function() {
                                var t496 = this;
                                g.forEach(function(e) {
                                    var n = c.isFunction(e) ? e : e.default;
                                    try {
                                        t496.moduleInstances[n.displayName] = new n({
                                            config: t496.configuration,
                                            eventsDispatcher: t496.eventsDispatcher
                                        });
                                    } catch (t) {
                                        c.log("Module ".concat(n.displayName, " skipped because"), "warn", t);
                                    }
                                });
                            }
                        },
                        {
                            key: "configureModules",
                            value: function() {
                                for(var t in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances, t) && (this.moduleInstances[t].state = this.getModulesDiff(t));
                            }
                        },
                        {
                            key: "getModulesDiff",
                            value: function(t) {
                                var e = {
                                };
                                for(var n in this.moduleInstances)n !== t && (e[n] = this.moduleInstances[n]);
                                return e;
                            }
                        },
                        {
                            key: "configuration",
                            set: function(t) {
                                var e, n;
                                c.isObject(t) ? this.config = Object.assign({
                                }, t) : this.config = {
                                    holder: t
                                }, c.deprecationAssert(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = c.LogLevels.VERBOSE), c.setLogLevel(this.config.logLevel), c.deprecationAssert(Boolean(this.config.initialBlock), "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
                                var o = {
                                    type: this.config.defaultBlock,
                                    data: {
                                    }
                                };
                                this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
                                    p: !0,
                                    b: !0,
                                    a: !0
                                }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {
                                }, this.config.i18n = this.config.i18n || {
                                }, this.config.data = this.config.data || {
                                    blocks: []
                                }, this.config.onReady = this.config.onReady || function() {
                                }, this.config.onChange = this.config.onChange || function() {
                                }, this.config.inlineToolbar = void 0 === this.config.inlineToolbar || this.config.inlineToolbar, !c.isEmpty(this.config.data) && this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data = {
                                    blocks: [
                                        o
                                    ]
                                }), this.config.readOnly = this.config.readOnly || !1, (null === (e = this.config.i18n) || void 0 === e ? void 0 : e.messages) && u.default.setDictionary(this.config.i18n.messages), this.config.i18n.direction = (null === (n = this.config.i18n) || void 0 === n ? void 0 : n.direction) || "ltr";
                            },
                            get: function() {
                                return this.config;
                            }
                        }
                    ]), t487;
                }();
                o193.default = y, y.displayName = "Core", t486.exports = e310.default;
            }) ? o192.apply(e310, r107) : o192) || (t486.exports = i100);
        },
        function(t497, e, n) {
            var o = n(146);
            t497.exports = function(t) {
                if (Array.isArray(t)) return o(t);
            };
        },
        function(t498, e) {
            t498.exports = function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            };
        },
        function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(t499, e314) {
            t499.exports = function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            };
        },
        function(t500, e) {
            t500.exports = function(t) {
                return -1 !== Function.toString.call(t).indexOf("[native code]");
            };
        },
        function(t501, e315, n242) {
            var o = n242(110), r108 = n242(373);
            function i102(e316, n243, a) {
                return r108() ? t501.exports = i102 = Reflect.construct : t501.exports = i102 = function(t, e, n) {
                    var r = [
                        null
                    ];
                    r.push.apply(r, e);
                    var i = new (Function.bind.apply(t, r));
                    return n && o(i, n.prototype), i;
                }, i102.apply(null, arguments);
            }
            t501.exports = i102;
        },
        function(t, e) {
            t.exports = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    })), !0;
                } catch (t) {
                    return !1;
                }
            };
        },
        function(t502, e317, n) {
            var o = {
                "./api": 81,
                "./api/": 81,
                "./api/blocks": 152,
                "./api/blocks.ts": 152,
                "./api/caret": 153,
                "./api/caret.ts": 153,
                "./api/events": 154,
                "./api/events.ts": 154,
                "./api/i18n": 155,
                "./api/i18n.ts": 155,
                "./api/index": 81,
                "./api/index.ts": 81,
                "./api/inlineToolbar": 156,
                "./api/inlineToolbar.ts": 156,
                "./api/listeners": 157,
                "./api/listeners.ts": 157,
                "./api/notifier": 158,
                "./api/notifier.ts": 158,
                "./api/readonly": 159,
                "./api/readonly.ts": 159,
                "./api/sanitizer": 160,
                "./api/sanitizer.ts": 160,
                "./api/saver": 161,
                "./api/saver.ts": 161,
                "./api/selection": 162,
                "./api/selection.ts": 162,
                "./api/styles": 163,
                "./api/styles.ts": 163,
                "./api/toolbar": 164,
                "./api/toolbar.ts": 164,
                "./api/tooltip": 165,
                "./api/tooltip.ts": 165,
                "./blockEvents": 166,
                "./blockEvents.ts": 166,
                "./blockManager": 167,
                "./blockManager.ts": 167,
                "./blockSelection": 169,
                "./blockSelection.ts": 169,
                "./caret": 170,
                "./caret.ts": 170,
                "./crossBlockSelection": 171,
                "./crossBlockSelection.ts": 171,
                "./dragNDrop": 172,
                "./dragNDrop.ts": 172,
                "./modificationsObserver": 173,
                "./modificationsObserver.ts": 173,
                "./paste": 174,
                "./paste.ts": 174,
                "./readonly": 175,
                "./readonly.ts": 175,
                "./rectangleSelection": 176,
                "./rectangleSelection.ts": 176,
                "./renderer": 177,
                "./renderer.ts": 177,
                "./saver": 178,
                "./saver.ts": 178,
                "./toolbar": 83,
                "./toolbar/": 83,
                "./toolbar/blockSettings": 179,
                "./toolbar/blockSettings.ts": 179,
                "./toolbar/conversion": 180,
                "./toolbar/conversion.ts": 180,
                "./toolbar/index": 83,
                "./toolbar/index.ts": 83,
                "./toolbar/inline": 181,
                "./toolbar/inline.ts": 181,
                "./toolbar/toolbox": 182,
                "./toolbar/toolbox.ts": 182,
                "./tools": 183,
                "./tools.ts": 183,
                "./ui": 185,
                "./ui.ts": 185
            };
            function r(t) {
                var e = i(t);
                return n(e);
            }
            function i(t) {
                if (!n.o(o, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e;
                }
                return o[t];
            }
            r.keys = function() {
                return Object.keys(o);
            }, r.resolve = i, t502.exports = r, r.id = 374;
        },
        function(t503, e318, n244) {
            var o195, r109, i103;
            "undefined" != typeof globalThis || "undefined", r109 = [
                e318,
                n244(2),
                n244(3),
                n244(7)
            ], void 0 === (i103 = "function" == typeof (o195 = function(o196, r110, i104, a) {
                var s36 = n244(8), l = n244(1);
                Object.defineProperty(o196, "__esModule", {
                    value: !0
                }), o196.default = void 0, r110 = l(r110), i104 = l(i104), a = s36(a);
                var c = function() {
                    function t504() {
                        (0, r110.default)(this, t504), this.allListeners = [];
                    }
                    return (0, i104.default)(t504, [
                        {
                            key: "on",
                            value: function(t, e, n) {
                                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = a.generateId("l"), i = {
                                    id: r,
                                    element: t,
                                    eventType: e,
                                    handler: n,
                                    options: o
                                }, s = this.findOne(t, e, n);
                                if (!s) return this.allListeners.push(i), t.addEventListener(e, n, o), r;
                            }
                        },
                        {
                            key: "off",
                            value: function(t505, e, n245, o) {
                                var r = this, i = this.findAll(t505, e, n245);
                                i.forEach(function(t, e) {
                                    var n = r.allListeners.indexOf(i[e]);
                                    n > -1 && (r.allListeners.splice(n, 1), t.element.removeEventListener(t.eventType, t.handler, t.options));
                                });
                            }
                        },
                        {
                            key: "offById",
                            value: function(t) {
                                var e = this.findById(t);
                                e && e.element.removeEventListener(e.eventType, e.handler, e.options);
                            }
                        },
                        {
                            key: "findOne",
                            value: function(t, e, n) {
                                var o = this.findAll(t, e, n);
                                return o.length > 0 ? o[0] : null;
                            }
                        },
                        {
                            key: "findAll",
                            value: function(t506, e, n) {
                                var o = t506 ? this.findByEventTarget(t506) : [];
                                return t506 && e && n ? o.filter(function(t) {
                                    return t.eventType === e && t.handler === n;
                                }) : t506 && e ? o.filter(function(t) {
                                    return t.eventType === e;
                                }) : o;
                            }
                        },
                        {
                            key: "removeAll",
                            value: function() {
                                this.allListeners.map(function(t) {
                                    t.element.removeEventListener(t.eventType, t.handler, t.options);
                                }), this.allListeners = [];
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAll();
                            }
                        },
                        {
                            key: "findByEventTarget",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.element === t) return e;
                                });
                            }
                        },
                        {
                            key: "findByType",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.eventType === t) return e;
                                });
                            }
                        },
                        {
                            key: "findByHandler",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.handler === t) return e;
                                });
                            }
                        },
                        {
                            key: "findById",
                            value: function(t) {
                                return this.allListeners.find(function(e) {
                                    return e.id === t;
                                });
                            }
                        }
                    ]), t504;
                }();
                o196.default = c, c.displayName = "Listeners", t503.exports = e318.default;
            }) ? o195.apply(e318, r109) : o195) || (t503.exports = i103);
        },
        function(t507, e, n) {
            var o197, r111, i105;
            "undefined" != typeof globalThis || "undefined", r111 = [
                e,
                n(2),
                n(3),
                n(377)
            ], void 0 === (i105 = "function" == typeof (o197 = function(o, r, i, a) {
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t508() {
                        (0, r.default)(this, t508);
                    }
                    return (0, i.default)(t508, [
                        {
                            key: "show",
                            value: function(t) {
                                a.default.show(t);
                            }
                        }
                    ]), t508;
                }();
                o.default = l, l.displayName = "Notifier", t507.exports = e.default;
            }) ? o197.apply(e, r111) : o197) || (t507.exports = i105);
        },
        function(t509, e319, n246) {
            t509.exports = (function(t510) {
                var e320 = {
                };
                function n(o) {
                    if (e320[o]) return e320[o].exports;
                    var r = e320[o] = {
                        i: o,
                        l: !1,
                        exports: {
                        }
                    };
                    return t510[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t510, n.c = e320, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "/", n(n.s = 0);
            })([
                function(t511, e321, n247) {
                    "use strict";
                    n247(1), t511.exports = (function() {
                        var t = n247(6), e = null;
                        return {
                            show: function(n) {
                                if (n.message) {
                                    !function() {
                                        if (e) return !0;
                                        e = t.getWrapper(), document.body.appendChild(e);
                                    }();
                                    var o = null, r = n.time || 8000;
                                    switch(n.type){
                                        case "confirm":
                                            o = t.confirm(n);
                                            break;
                                        case "prompt":
                                            o = t.prompt(n);
                                            break;
                                        default:
                                            o = t.alert(n), window.setTimeout(function() {
                                                o.remove();
                                            }, r);
                                    }
                                    e.appendChild(o), o.classList.add("cdx-notify--bounce-in");
                                }
                            }
                        };
                    })();
                },
                function(t, e, n) {
                    var o = n(2);
                    "string" == typeof o && (o = [
                        [
                            t.i,
                            o,
                            ""
                        ]
                    ]), n(4)(o, {
                        hmr: !0,
                        transform: void 0,
                        insertInto: void 0
                    }), o.locals && (t.exports = o.locals);
                },
                function(t, e, n) {
                    (t.exports = n(3)(!1)).push([
                        t.i,
                        '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',
                        ""
                    ]);
                },
                function(t512, e322) {
                    t512.exports = function(t513) {
                        var e323 = [];
                        return e323.toString = function() {
                            return this.map(function(e324) {
                                var n248 = function(t514, e) {
                                    var n, o = t514[1] || "", r = t514[3];
                                    if (!r) return o;
                                    if (e && "function" == typeof btoa) {
                                        var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), a = r.sources.map(function(t) {
                                            return "/*# sourceURL=" + r.sourceRoot + t + " */";
                                        });
                                        return [
                                            o
                                        ].concat(a).concat([
                                            i
                                        ]).join("\n");
                                    }
                                    return [
                                        o
                                    ].join("\n");
                                }(e324, t513);
                                return e324[2] ? "@media " + e324[2] + "{" + n248 + "}" : n248;
                            }).join("");
                        }, e323.i = function(t, n) {
                            "string" == typeof t && (t = [
                                [
                                    null,
                                    t,
                                    ""
                                ]
                            ]);
                            for(var o = {
                            }, r = 0; r < this.length; r++){
                                var i = this[r][0];
                                "number" == typeof i && (o[i] = !0);
                            }
                            for(r = 0; r < t.length; r++){
                                var a = t[r];
                                "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e323.push(a));
                            }
                        }, e323;
                    };
                },
                function(t515, e325, n249) {
                    var o198, r112, i106 = {
                    }, a45 = (o198 = function() {
                        return window && document && document.all && !window.atob;
                    }, function() {
                        return void 0 === r112 && (r112 = o198.apply(this, arguments)), r112;
                    }), s37 = function(t516) {
                        var e = {
                        };
                        return function(t517) {
                            if ("function" == typeof t517) return t517();
                            if (void 0 === e[t517]) {
                                var n = (function(t) {
                                    return document.querySelector(t);
                                }).call(this, t517);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                                e[t517] = n;
                            }
                            return e[t517];
                        };
                    }(), l29 = null, c = 0, u = [], f = n249(5);
                    function d(t, e) {
                        for(var n = 0; n < t.length; n++){
                            var o = t[n], r = i106[o.id];
                            if (r) {
                                r.refs++;
                                for(var a = 0; a < r.parts.length; a++)r.parts[a](o.parts[a]);
                                for(; a < o.parts.length; a++)r.parts.push(b(o.parts[a], e));
                            } else {
                                var s = [];
                                for(a = 0; a < o.parts.length; a++)s.push(b(o.parts[a], e));
                                i106[o.id] = {
                                    id: o.id,
                                    refs: 1,
                                    parts: s
                                };
                            }
                        }
                    }
                    function p(t, e) {
                        for(var n = [], o = {
                        }, r = 0; r < t.length; r++){
                            var i = t[r], a = e.base ? i[0] + e.base : i[0], s = {
                                css: i[1],
                                media: i[2],
                                sourceMap: i[3]
                            };
                            o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                                id: a,
                                parts: [
                                    s
                                ]
                            });
                        }
                        return n;
                    }
                    function h(t, e) {
                        var n = s37(t.insertInto);
                        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                        var o = u[u.length - 1];
                        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);
                        else if ("bottom" === t.insertAt) n.appendChild(e);
                        else {
                            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                            var r = s37(t.insertInto + " " + t.insertAt.before);
                            n.insertBefore(e, r);
                        }
                    }
                    function v(t) {
                        if (null === t.parentNode) return !1;
                        t.parentNode.removeChild(t);
                        var e = u.indexOf(t);
                        e >= 0 && u.splice(e, 1);
                    }
                    function g(t) {
                        var e = document.createElement("style");
                        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
                    }
                    function y(t, e) {
                        Object.keys(e).forEach(function(n) {
                            t.setAttribute(n, e[n]);
                        });
                    }
                    function b(t518, e326) {
                        var n250, o199, r113, i107;
                        if (e326.transform && t518.css) {
                            if (!(i107 = e326.transform(t518.css))) return function() {
                            };
                            t518.css = i107;
                        }
                        if (e326.singleton) {
                            var a = c++;
                            n250 = l29 || (l29 = g(e326)), o199 = x.bind(null, n250, a, !1), r113 = x.bind(null, n250, a, !0);
                        } else t518.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n250 = (function(t) {
                            var e = document.createElement("link");
                            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
                        })(e326), o199 = (function(t, e, n) {
                            var o = n.css, r = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && r;
                            (e.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                            var a = new Blob([
                                o
                            ], {
                                type: "text/css"
                            }), s = t.href;
                            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
                        }).bind(null, n250, e326), r113 = function() {
                            v(n250), n250.href && URL.revokeObjectURL(n250.href);
                        }) : (n250 = g(e326), o199 = (function(t, e) {
                            var n = e.css, o = e.media;
                            if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                            else {
                                for(; t.firstChild;)t.removeChild(t.firstChild);
                                t.appendChild(document.createTextNode(n));
                            }
                        }).bind(null, n250), r113 = function() {
                            v(n250);
                        });
                        return o199(t518), function(e) {
                            if (e) {
                                if (e.css === t518.css && e.media === t518.media && e.sourceMap === t518.sourceMap) return;
                                o199(t518 = e);
                            } else r113();
                        };
                    }
                    t515.exports = function(t519, e) {
                        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                        (e = e || {
                        }).attrs = "object" == typeof e.attrs ? e.attrs : {
                        }, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a45()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                        var n = p(t519, e);
                        return d(n, e), function(t) {
                            for(var o = [], r = 0; r < n.length; r++){
                                var a = n[r];
                                (s = i106[a.id]).refs--, o.push(s);
                            }
                            for(t && d(p(t, e), e), r = 0; r < o.length; r++){
                                var s;
                                if (0 === (s = o[r]).refs) {
                                    for(var l = 0; l < s.parts.length; l++)s.parts[l]();
                                    delete i106[s.id];
                                }
                            }
                        };
                    };
                    var m, k = (m = [], function(t, e) {
                        return m[t] = e, m.filter(Boolean).join("\n");
                    });
                    function x(t, e, n, o) {
                        var r = n ? "" : o.css;
                        if (t.styleSheet) t.styleSheet.cssText = k(e, r);
                        else {
                            var i = document.createTextNode(r), a = t.childNodes;
                            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                        }
                    }
                },
                function(t520, e327) {
                    t520.exports = function(t521) {
                        var e328 = "undefined" != typeof window && window.location;
                        if (!e328) throw new Error("fixUrls requires window.location");
                        if (!t521 || "string" != typeof t521) return t521;
                        var n = e328.protocol + "//" + e328.host, o = n + e328.pathname.replace(/\/[^\/]*$/, "/");
                        return t521.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e329) {
                            var r, i = e329.trim().replace(/^"(.*)"$/, function(t, e) {
                                return e;
                            }).replace(/^'(.*)'$/, function(t, e) {
                                return e;
                            });
                            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
                        });
                    };
                },
                function(t522, e330, n251) {
                    "use strict";
                    var o200, r, i108, a46, s, l;
                    t522.exports = (o200 = "cdx-notify", r = "cdx-notify__cross", i108 = "cdx-notify__button--confirm", a46 = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
                        alert: l = function(t) {
                            var e = document.createElement("DIV"), n = document.createElement("DIV"), i = t.message, a = t.style;
                            return e.classList.add(o200), a && e.classList.add(o200 + "--" + a), e.innerHTML = i, n.classList.add(r), n.addEventListener("click", e.remove.bind(e)), e.appendChild(n), e;
                        },
                        confirm: function(t) {
                            var e = l(t), n = document.createElement("div"), o = document.createElement("button"), c = document.createElement("button"), u = e.querySelector("." + r), f = t.cancelHandler, d = t.okHandler;
                            return n.classList.add(s), o.innerHTML = t.okText || "Confirm", c.innerHTML = t.cancelText || "Cancel", o.classList.add(a46), c.classList.add(a46), o.classList.add(i108), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", e.remove.bind(e)), c.addEventListener("click", e.remove.bind(e)), n.appendChild(o), n.appendChild(c), e.appendChild(n), e;
                        },
                        prompt: function(t) {
                            var e = l(t), n = document.createElement("div"), o = document.createElement("button"), c = document.createElement("input"), u = e.querySelector("." + r), f = t.cancelHandler, d = t.okHandler;
                            return n.classList.add(s), o.innerHTML = t.okText || "Ok", o.classList.add(a46), o.classList.add(i108), c.classList.add("cdx-notify__input"), t.placeholder && c.setAttribute("placeholder", t.placeholder), t.default && (c.value = t.default), t.inputType && (c.type = t.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", function() {
                                d(c.value);
                            }), o.addEventListener("click", e.remove.bind(e)), n.appendChild(c), n.appendChild(o), e.appendChild(n), e;
                        },
                        getWrapper: function() {
                            var t = document.createElement("DIV");
                            return t.classList.add("cdx-notifies"), t;
                        }
                    });
                }
            ]);
        },
        function(t523, e331, n252) {
            var o201, r114;
            void 0 === (r114 = "function" == typeof (o201 = function() {
                function t524(t525) {
                    var e = t525.tags;
                    if (!Object.keys(e).map(function(t) {
                        return typeof e[t];
                    }).every(function(t) {
                        return "object" === t || "boolean" === t || "function" === t;
                    })) throw new Error("The configuration was invalid");
                    this.config = t525;
                }
                var e332 = [
                    "P",
                    "LI",
                    "TD",
                    "TH",
                    "DIV",
                    "H1",
                    "H2",
                    "H3",
                    "H4",
                    "H5",
                    "H6",
                    "PRE"
                ];
                function n253(t) {
                    return -1 !== e332.indexOf(t.nodeName);
                }
                var o202 = [
                    "A",
                    "B",
                    "STRONG",
                    "I",
                    "EM",
                    "SUB",
                    "SUP",
                    "U",
                    "STRIKE"
                ];
                function r(t) {
                    return -1 !== o202.indexOf(t.nodeName);
                }
                function i(t, e, n) {
                    return "function" == typeof t.tags[e] ? t.tags[e](n) : t.tags[e];
                }
                function a(t, e) {
                    return void 0 === e || "boolean" == typeof e && !e;
                }
                function s(t, e, n) {
                    var o = t.name.toLowerCase();
                    return !0 !== e && ("function" == typeof e[o] ? !e[o](t.value, n) : void 0 === e[o] || !1 === e[o] || "string" == typeof e[o] && e[o] !== t.value);
                }
                return t524.prototype.clean = function(t) {
                    const e = document.implementation.createHTMLDocument(), n = e.createElement("div");
                    return n.innerHTML = t, this._sanitize(e, n), n.innerHTML;
                }, t524.prototype._sanitize = function(t526, e333) {
                    var o = function(t, e) {
                        return t.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
                    }(t526, e333), l = o.firstChild();
                    if (l) do {
                        if (l.nodeType !== Node.TEXT_NODE) {
                            if (l.nodeType === Node.COMMENT_NODE) {
                                e333.removeChild(l), this._sanitize(t526, e333);
                                break;
                            }
                            var c, u = r(l);
                            u && (c = Array.prototype.some.call(l.childNodes, n253));
                            var f = !!e333.parentNode, d = n253(e333) && n253(l) && f, p = l.nodeName.toLowerCase(), h = i(this.config, p, l);
                            if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
                                if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName) for(; l.childNodes.length > 0;)e333.insertBefore(l.childNodes[0], l);
                                e333.removeChild(l), this._sanitize(t526, e333);
                                break;
                            }
                            for(var v = 0; v < l.attributes.length; v += 1){
                                var g = l.attributes[v];
                                s(g, h, l) && (l.removeAttribute(g.name), v -= 1);
                            }
                            this._sanitize(t526, l);
                        } else if ("" === l.data.trim() && (l.previousElementSibling && n253(l.previousElementSibling) || l.nextElementSibling && n253(l.nextElementSibling))) {
                            e333.removeChild(l), this._sanitize(t526, e333);
                            break;
                        }
                    }while (l = o.nextSibling())
                }, t524;
            }) ? o201.call(e331, n252, e331, t523) : o201) || (t523.exports = r114);
        },
        function(t527, e334, n254) {
            t527.exports = (function(t528) {
                var e335 = {
                };
                function n(o) {
                    if (e335[o]) return e335[o].exports;
                    var r = e335[o] = {
                        i: o,
                        l: !1,
                        exports: {
                        }
                    };
                    return t528[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t528, n.c = e335, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "", n(n.s = 0);
            })([
                function(t, e, n) {
                    t.exports = n(1);
                },
                function(t529, e336, n255) {
                    "use strict";
                    n255.r(e336), n255.d(e336, "default", function() {
                        return o203;
                    });
                    class o203 {
                        constructor(){
                            this.nodes = {
                                wrapper: null,
                                content: null
                            }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = ()=>{
                                this.showed && this.hide(!0);
                            }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, {
                                passive: !0
                            });
                        }
                        get CSS() {
                            return {
                                tooltip: "ct",
                                tooltipContent: "ct__content",
                                tooltipShown: "ct--shown",
                                placement: {
                                    left: "ct--left",
                                    bottom: "ct--bottom",
                                    right: "ct--right",
                                    top: "ct--top"
                                }
                            };
                        }
                        show(t, e, n) {
                            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                            const o = Object.assign({
                                placement: "bottom",
                                marginTop: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                delay: 70,
                                hidingDelay: 0
                            }, n);
                            if (o.hidingDelay && (this.hidingDelay = o.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof e) this.nodes.content.appendChild(document.createTextNode(e));
                            else {
                                if (!(e instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof e + " given.");
                                this.nodes.content.appendChild(e);
                            }
                            switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o.placement){
                                case "top":
                                    this.placeTop(t, o);
                                    break;
                                case "left":
                                    this.placeLeft(t, o);
                                    break;
                                case "right":
                                    this.placeRight(t, o);
                                    break;
                                case "bottom":
                                default:
                                    this.placeBottom(t, o);
                            }
                            o && o.delay ? this.showingTimeout = setTimeout(()=>{
                                this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
                            }, o.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
                        }
                        hide(t = !1) {
                            if (this.hidingDelay && !t) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(()=>{
                                this.hide(!0);
                            }, this.hidingDelay));
                            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
                        }
                        onHover(t, e, n) {
                            t.addEventListener("mouseenter", ()=>{
                                this.show(t, e, n);
                            }), t.addEventListener("mouseleave", ()=>{
                                this.hide();
                            });
                        }
                        destroy() {
                            this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
                        }
                        prepare() {
                            this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
                        }
                        loadStyles() {
                            const t = "codex-tooltips-style";
                            if (document.getElementById(t)) return;
                            const e = n255(2), o = this.make("style", null, {
                                textContent: e.toString(),
                                id: t
                            });
                            this.prepend(document.head, o);
                        }
                        placeBottom(t, e) {
                            const n = t.getBoundingClientRect(), o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n.bottom + window.pageYOffset + this.offsetTop + e.marginTop;
                            this.applyPlacement("bottom", o, r);
                        }
                        placeTop(t, e) {
                            const n = t.getBoundingClientRect(), o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                            this.applyPlacement("top", o, r);
                        }
                        placeLeft(t, e) {
                            const n = t.getBoundingClientRect(), o = n.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e.marginLeft, r = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                            this.applyPlacement("left", o, r);
                        }
                        placeRight(t, e) {
                            const n = t.getBoundingClientRect(), o = n.right + this.offsetRight + e.marginRight, r = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                            this.applyPlacement("right", o, r);
                        }
                        applyPlacement(t, e, n) {
                            this.nodes.wrapper.classList.add(this.CSS.placement[t]), this.nodes.wrapper.style.left = e + "px", this.nodes.wrapper.style.top = n + "px";
                        }
                        make(t, e = null, n = {
                        }) {
                            const o = document.createElement(t);
                            Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
                            for(const t530 in n)n.hasOwnProperty(t530) && (o[t530] = n[t530]);
                            return o;
                        }
                        append(t, e337) {
                            Array.isArray(e337) ? e337.forEach((e)=>t.appendChild(e)
                            ) : t.appendChild(e337);
                        }
                        prepend(t, e338) {
                            Array.isArray(e338) ? (e338 = e338.reverse()).forEach((e)=>t.prepend(e)
                            ) : t.prepend(e338);
                        }
                    }
                },
                function(t, e) {
                    t.exports = '.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}';
                }
            ]).default;
        },
        function(t531, e339, n256) {
            var o204, r115, i109;
            "undefined" != typeof globalThis || "undefined", r115 = [
                e339,
                n256(2),
                n256(3),
                n256(15),
                n256(7),
                n256(25)
            ], void 0 === (i109 = "function" == typeof (o204 = function(o205, r, i, a, s, l) {
                var c = n256(8), u = n256(1);
                Object.defineProperty(o205, "__esModule", {
                    value: !0
                }), o205.default = void 0, r = u(r), i = u(i), a = u(a), s = c(s), l = u(l);
                var f = function() {
                    function t532(e, n) {
                        (0, r.default)(this, t532), this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = n;
                    }
                    return (0, i.default)(t532, [
                        {
                            key: "setItems",
                            value: function(t) {
                                this.items = t;
                            }
                        },
                        {
                            key: "next",
                            value: function() {
                                this.cursor = this.leafNodesAndReturnIndex(t532.directions.RIGHT);
                            }
                        },
                        {
                            key: "previous",
                            value: function() {
                                this.cursor = this.leafNodesAndReturnIndex(t532.directions.LEFT);
                            }
                        },
                        {
                            key: "dropCursor",
                            value: function() {
                                -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
                            }
                        },
                        {
                            key: "leafNodesAndReturnIndex",
                            value: function(e) {
                                var n = this;
                                if (0 === this.items.length) return this.cursor;
                                var o = this.cursor;
                                return -1 === o ? o = e === t532.directions.RIGHT ? -1 : 0 : this.items[o].classList.remove(this.focusedCssClass), o = e === t532.directions.RIGHT ? (o + 1) % this.items.length : (this.items.length + o - 1) % this.items.length, a.default.canSetCaret(this.items[o]) && s.delay(function() {
                                    return l.default.setCursor(n.items[o]);
                                }, 50)(), this.items[o].classList.add(this.focusedCssClass), o;
                            }
                        },
                        {
                            key: "currentItem",
                            get: function() {
                                return -1 === this.cursor ? null : this.items[this.cursor];
                            }
                        }
                    ]), t532;
                }();
                o205.default = f, f.displayName = "DomIterator", f.directions = {
                    RIGHT: "right",
                    LEFT: "left"
                }, t531.exports = e339.default;
            }) ? o204.apply(e339, r115) : o204) || (t531.exports = i109);
        },
        function(t533, e340, n) {
            var o = n(4);
            t533.exports = function(t, e) {
                for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = o(t)););
                return t;
            };
        },
        function(t534, e341, n257) {
            var o206, r116, i110;
            "undefined" != typeof globalThis || "undefined", r116 = [
                e341,
                n257(2),
                n257(3),
                n257(7),
                n257(15),
                n257(66)
            ], void 0 === (i110 = "function" == typeof (o206 = function(o207, r117, i111, a47, s, l) {
                var c = n257(8), u = n257(1);
                Object.defineProperty(o207, "__esModule", {
                    value: !0
                }), o207.default = void 0, r117 = u(r117), i111 = u(i111), a47 = c(a47), s = u(s);
                var f = function() {
                    function t535(e) {
                        (0, r117.default)(this, t535), this.blocks = [], this.workingArea = e;
                    }
                    return (0, i111.default)(t535, [
                        {
                            key: "push",
                            value: function(t) {
                                this.blocks.push(t), this.insertToDOM(t);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                var n = this.blocks[e];
                                s.default.swap(this.blocks[t].holder, n.holder), this.blocks[e] = this.blocks[t], this.blocks[t] = n;
                            }
                        },
                        {
                            key: "move",
                            value: function(t, e) {
                                var n = this.blocks.splice(e, 1)[0], o = t - 1, r = Math.max(0, o), i = this.blocks[r];
                                t > 0 ? this.insertToDOM(n, "afterend", i) : this.insertToDOM(n, "beforebegin", i), this.blocks.splice(t, 0, n);
                                var a = this.composeBlockEvent("move", {
                                    fromIndex: e,
                                    toIndex: t
                                });
                                n.call(l.BlockToolAPI.MOVED, a);
                            }
                        },
                        {
                            key: "insert",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (this.length) {
                                    t > this.length && (t = this.length), n && (this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED));
                                    var o = n ? 1 : 0;
                                    if (this.blocks.splice(t, o, e), t > 0) {
                                        var r = this.blocks[t - 1];
                                        this.insertToDOM(e, "afterend", r);
                                    } else {
                                        var i = this.blocks[t + 1];
                                        i ? this.insertToDOM(e, "beforebegin", i) : this.insertToDOM(e);
                                    }
                                } else this.push(e);
                            }
                        },
                        {
                            key: "remove",
                            value: function(t) {
                                isNaN(t) && (t = this.length - 1), this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED), this.blocks.splice(t, 1);
                            }
                        },
                        {
                            key: "removeAll",
                            value: function() {
                                this.workingArea.innerHTML = "", this.blocks.forEach(function(t) {
                                    return t.call(l.BlockToolAPI.REMOVED);
                                }), this.blocks.length = 0;
                            }
                        },
                        {
                            key: "insertAfter",
                            value: function(t, e) {
                                var n = this.blocks.indexOf(t);
                                this.insert(n + 1, e);
                            }
                        },
                        {
                            key: "get",
                            value: function(t) {
                                return this.blocks[t];
                            }
                        },
                        {
                            key: "indexOf",
                            value: function(t) {
                                return this.blocks.indexOf(t);
                            }
                        },
                        {
                            key: "insertToDOM",
                            value: function(t, e, n) {
                                e ? n.holder.insertAdjacentElement(e, t.holder) : this.workingArea.appendChild(t.holder), t.call(l.BlockToolAPI.RENDERED);
                            }
                        },
                        {
                            key: "composeBlockEvent",
                            value: function(t, e) {
                                return new CustomEvent(t, {
                                    detail: e
                                });
                            }
                        },
                        {
                            key: "length",
                            get: function() {
                                return this.blocks.length;
                            }
                        },
                        {
                            key: "array",
                            get: function() {
                                return this.blocks;
                            }
                        },
                        {
                            key: "nodes",
                            get: function() {
                                return a47.array(this.workingArea.children);
                            }
                        }
                    ], [
                        {
                            key: "set",
                            value: function(t, e, n) {
                                return isNaN(Number(e)) ? (Reflect.set(t, e, n), !0) : (t.insert(+e, n), !0);
                            }
                        },
                        {
                            key: "get",
                            value: function(t, e) {
                                return isNaN(Number(e)) ? Reflect.get(t, e) : t.get(+e);
                            }
                        }
                    ]), t535;
                }();
                o207.default = f, f.displayName = "Blocks", t534.exports = e341.default;
            }) ? o206.apply(e341, r116) : o206) || (t534.exports = i110);
        },
        function(t536, e342, n258) {
            t536.exports = (function(t537) {
                var e343 = {
                };
                function n(o) {
                    if (e343[o]) return e343[o].exports;
                    var r = e343[o] = {
                        i: o,
                        l: !1,
                        exports: {
                        }
                    };
                    return t537[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t537, n.c = e343, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "", n(n.s = 0);
            })([
                function(t538, e344, n259) {
                    "use strict";
                    function o208(t, e) {
                        for(var n = 0; n < e.length; n++){
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    function r118(t, e, n) {
                        return e && o208(t.prototype, e), n && o208(t, n), t;
                    }
                    n259.r(e344);
                    var i112 = function() {
                        function t539(e345) {
                            var n = this;
                            !function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t539), this.commands = {
                            }, this.keys = {
                            }, this.name = e345.name, this.parseShortcutName(e345.name), this.element = e345.on, this.callback = e345.callback, this.executeShortcut = function(t) {
                                n.execute(t);
                            }, this.element.addEventListener("keydown", this.executeShortcut, !1);
                        }
                        return r118(t539, null, [
                            {
                                key: "supportedCommands",
                                get: function() {
                                    return {
                                        SHIFT: [
                                            "SHIFT"
                                        ],
                                        CMD: [
                                            "CMD",
                                            "CONTROL",
                                            "COMMAND",
                                            "WINDOWS",
                                            "CTRL"
                                        ],
                                        ALT: [
                                            "ALT",
                                            "OPTION"
                                        ]
                                    };
                                }
                            },
                            {
                                key: "keyCodes",
                                get: function() {
                                    return {
                                        0: 48,
                                        1: 49,
                                        2: 50,
                                        3: 51,
                                        4: 52,
                                        5: 53,
                                        6: 54,
                                        7: 55,
                                        8: 56,
                                        9: 57,
                                        A: 65,
                                        B: 66,
                                        C: 67,
                                        D: 68,
                                        E: 69,
                                        F: 70,
                                        G: 71,
                                        H: 72,
                                        I: 73,
                                        J: 74,
                                        K: 75,
                                        L: 76,
                                        M: 77,
                                        N: 78,
                                        O: 79,
                                        P: 80,
                                        Q: 81,
                                        R: 82,
                                        S: 83,
                                        T: 84,
                                        U: 85,
                                        V: 86,
                                        W: 87,
                                        X: 88,
                                        Y: 89,
                                        Z: 90,
                                        BACKSPACE: 8,
                                        ENTER: 13,
                                        ESCAPE: 27,
                                        LEFT: 37,
                                        UP: 38,
                                        RIGHT: 39,
                                        DOWN: 40,
                                        INSERT: 45,
                                        DELETE: 46
                                    };
                                }
                            }
                        ]), r118(t539, [
                            {
                                key: "parseShortcutName",
                                value: function(e) {
                                    e = e.split("+");
                                    for(var n = 0; n < e.length; n++){
                                        e[n] = e[n].toUpperCase();
                                        var o = !1;
                                        for(var r in t539.supportedCommands)if (t539.supportedCommands[r].includes(e[n])) {
                                            o = this.commands[r] = !0;
                                            break;
                                        }
                                        o || (this.keys[e[n]] = !0);
                                    }
                                    for(var i in t539.supportedCommands)this.commands[i] || (this.commands[i] = !1);
                                }
                            },
                            {
                                key: "execute",
                                value: function(e) {
                                    var n, o = {
                                        CMD: e.ctrlKey || e.metaKey,
                                        SHIFT: e.shiftKey,
                                        ALT: e.altKey
                                    }, r = !0;
                                    for(n in this.commands)this.commands[n] !== o[n] && (r = !1);
                                    var i, a = !0;
                                    for(i in this.keys)a = a && e.keyCode === t539.keyCodes[i];
                                    r && a && this.callback(e);
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    this.element.removeEventListener("keydown", this.executeShortcut);
                                }
                            }
                        ]), t539;
                    }();
                    e344.default = i112;
                }
            ]).default;
        },
        function(t540, e346, n260) {
            t540.exports = (function(t541) {
                var e347 = {
                };
                function n(o) {
                    if (e347[o]) return e347[o].exports;
                    var r = e347[o] = {
                        i: o,
                        l: !1,
                        exports: {
                        }
                    };
                    return t541[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t541, n.c = e347, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "/", n(n.s = 0);
            })([
                function(t542, e348, n261) {
                    function o209(t, e) {
                        for(var n = 0; n < e.length; n++){
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    function r119(t, e, n) {
                        return e && o209(t.prototype, e), n && o209(t, n), t;
                    }
                    n261(1).toString();
                    var i113 = function() {
                        function t543(e349) {
                            var n = e349.data, o = e349.config, r = e349.api, i = e349.readOnly;
                            !function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t543), this.api = r, this.readOnly = i, this._CSS = {
                                block: this.api.styles.block,
                                wrapper: "ce-paragraph"
                            }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o.placeholder ? o.placeholder : t543.DEFAULT_PLACEHOLDER, this._data = {
                            }, this._element = this.drawView(), this._preserveBlank = void 0 !== o.preserveBlank && o.preserveBlank, this.data = n;
                        }
                        return r119(t543, null, [
                            {
                                key: "DEFAULT_PLACEHOLDER",
                                get: function() {
                                    return "";
                                }
                            }
                        ]), r119(t543, [
                            {
                                key: "onKeyUp",
                                value: function(t) {
                                    "Backspace" !== t.code && "Delete" !== t.code || "" === this._element.textContent && (this._element.innerHTML = "");
                                }
                            },
                            {
                                key: "drawView",
                                value: function() {
                                    var t = document.createElement("DIV");
                                    return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = !1, t.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (t.contentEditable = !0, t.addEventListener("keyup", this.onKeyUp)), t;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return this._element;
                                }
                            },
                            {
                                key: "merge",
                                value: function(t) {
                                    var e = {
                                        text: this.data.text + t.text
                                    };
                                    this.data = e;
                                }
                            },
                            {
                                key: "validate",
                                value: function(t) {
                                    return !("" === t.text.trim() && !this._preserveBlank);
                                }
                            },
                            {
                                key: "save",
                                value: function(t) {
                                    return {
                                        text: t.innerHTML
                                    };
                                }
                            },
                            {
                                key: "onPaste",
                                value: function(t) {
                                    var e = {
                                        text: t.detail.data.innerHTML
                                    };
                                    this.data = e;
                                }
                            },
                            {
                                key: "data",
                                get: function() {
                                    var t = this._element.innerHTML;
                                    return this._data.text = t, this._data;
                                },
                                set: function(t) {
                                    this._data = t || {
                                    }, this._element.innerHTML = this._data.text || "";
                                }
                            }
                        ], [
                            {
                                key: "conversionConfig",
                                get: function() {
                                    return {
                                        export: "text",
                                        import: "text"
                                    };
                                }
                            },
                            {
                                key: "sanitize",
                                get: function() {
                                    return {
                                        text: {
                                            br: !0
                                        }
                                    };
                                }
                            },
                            {
                                key: "isReadOnlySupported",
                                get: function() {
                                    return !0;
                                }
                            },
                            {
                                key: "pasteConfig",
                                get: function() {
                                    return {
                                        tags: [
                                            "P"
                                        ]
                                    };
                                }
                            },
                            {
                                key: "toolbox",
                                get: function() {
                                    return {
                                        icon: n261(5).default,
                                        title: "Text"
                                    };
                                }
                            }
                        ]), t543;
                    }();
                    t542.exports = i113;
                },
                function(t, e, n) {
                    var o = n(2), r = n(3);
                    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
                        [
                            t.i,
                            r,
                            ""
                        ]
                    ]), o(r, {
                        insert: "head",
                        singleton: !1
                    }), t.exports = r.locals || {
                    };
                },
                function(t544, e350, n262) {
                    "use strict";
                    var o210, r120 = function() {
                        var t = {
                        };
                        return function(e) {
                            if (void 0 === t[e]) {
                                var n = document.querySelector(e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head;
                                } catch (t545) {
                                    n = null;
                                }
                                t[e] = n;
                            }
                            return t[e];
                        };
                    }(), i114 = [];
                    function a48(t) {
                        for(var e = -1, n = 0; n < i114.length; n++)if (i114[n].identifier === t) {
                            e = n;
                            break;
                        }
                        return e;
                    }
                    function s38(t, e) {
                        for(var n = {
                        }, o = [], r = 0; r < t.length; r++){
                            var s = t[r], l = e.base ? s[0] + e.base : s[0], c = n[l] || 0, u = "".concat(l, " ").concat(c);
                            n[l] = c + 1;
                            var f = a48(u), d = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3]
                            };
                            -1 !== f ? (i114[f].references++, i114[f].updater(d)) : i114.push({
                                identifier: u,
                                updater: v(d, e),
                                references: 1
                            }), o.push(u);
                        }
                        return o;
                    }
                    function l30(t547) {
                        var e = document.createElement("style"), o = t547.attributes || {
                        };
                        if (void 0 === o.nonce) {
                            var i = n262.nc;
                            i && (o.nonce = i);
                        }
                        if (Object.keys(o).forEach(function(t) {
                            e.setAttribute(t, o[t]);
                        }), "function" == typeof t547.insert) t547.insert(e);
                        else {
                            var a = r120(t547.insert || "head");
                            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                            a.appendChild(e);
                        }
                        return e;
                    }
                    var c24, u23 = (c24 = [], function(t, e) {
                        return c24[t] = e, c24.filter(Boolean).join("\n");
                    });
                    function f17(t, e, n, o) {
                        var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
                        if (t.styleSheet) t.styleSheet.cssText = u23(e, r);
                        else {
                            var i = document.createTextNode(r), a = t.childNodes;
                            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                        }
                    }
                    function d14(t, e, n) {
                        var o = n.css, r = n.media, i = n.sourceMap;
                        if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = o;
                        else {
                            for(; t.firstChild;)t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(o));
                        }
                    }
                    var p = null, h = 0;
                    function v(t548, e351) {
                        var n, o, r;
                        if (e351.singleton) {
                            var i = h++;
                            n = p || (p = l30(e351)), o = f17.bind(null, n, i, !1), r = f17.bind(null, n, i, !0);
                        } else n = l30(e351), o = d14.bind(null, n, e351), r = function() {
                            !function(t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            }(n);
                        };
                        return o(t548), function(e) {
                            if (e) {
                                if (e.css === t548.css && e.media === t548.media && e.sourceMap === t548.sourceMap) return;
                                o(t548 = e);
                            } else r();
                        };
                    }
                    t544.exports = function(t549, e) {
                        (e = e || {
                        }).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === o210 && (o210 = Boolean(window && document && document.all && !window.atob)), o210));
                        var n = s38(t549 = t549 || [], e);
                        return function(t) {
                            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                                for(var o = 0; o < n.length; o++){
                                    var r = a48(n[o]);
                                    i114[r].references--;
                                }
                                for(var l = s38(t, e), c = 0; c < n.length; c++){
                                    var u = a48(n[c]);
                                    0 === i114[u].references && (i114[u].updater(), i114.splice(u, 1));
                                }
                                n = l;
                            }
                        };
                    };
                },
                function(t, e, n) {
                    (e = n(4)(!1)).push([
                        t.i,
                        ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",
                        ""
                    ]), t.exports = e;
                },
                function(t550, e352, n263) {
                    "use strict";
                    t550.exports = function(t551) {
                        var e353 = [];
                        return e353.toString = function() {
                            return this.map(function(e354) {
                                var n264 = function(t552, e) {
                                    var n, o, r, i = t552[1] || "", a = t552[3];
                                    if (!a) return i;
                                    if (e && "function" == typeof btoa) {
                                        var s = (n = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */")), l = a.sources.map(function(t) {
                                            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(t, " */");
                                        });
                                        return [
                                            i
                                        ].concat(l).concat([
                                            s
                                        ]).join("\n");
                                    }
                                    return [
                                        i
                                    ].join("\n");
                                }(e354, t551);
                                return e354[2] ? "@media ".concat(e354[2], " {").concat(n264, "}") : n264;
                            }).join("");
                        }, e353.i = function(t, n, o) {
                            "string" == typeof t && (t = [
                                [
                                    null,
                                    t,
                                    ""
                                ]
                            ]);
                            var r = {
                            };
                            if (o) for(var i = 0; i < this.length; i++){
                                var a = this[i][0];
                                null != a && (r[a] = !0);
                            }
                            for(var s = 0; s < t.length; s++){
                                var l = [].concat(t[s]);
                                o && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), e353.push(l));
                            }
                        }, e353;
                    };
                },
                function(t, e, n) {
                    "use strict";
                    n.r(e), e.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n';
                }
            ]);
        },
        function(t553, e355, n) {
            var o211, r121, i115;
            "undefined" != typeof globalThis || "undefined", r121 = [
                e355,
                n(2),
                n(3),
                n(15)
            ], void 0 === (i115 = "function" == typeof (o211 = function(o, r, i, a) {
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t() {
                        (0, r.default)(this, t), this.commandName = "bold", this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--bold"
                        }, this.nodes = {
                            button: void 0
                        };
                    }
                    return (0, i.default)(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                document.execCommand(this.commandName);
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = document.queryCommandState(this.commandName);
                                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+B";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    b: {
                                    }
                                };
                            }
                        }
                    ]), t;
                }();
                o.default = l, l.displayName = "BoldInlineTool", l.isInline = !0, l.title = "Bold", t553.exports = e355.default;
            }) ? o211.apply(e355, r121) : o211) || (t553.exports = i115);
        },
        function(t554, e356, n) {
            var o212, r122, i116;
            "undefined" != typeof globalThis || "undefined", r122 = [
                e356,
                n(2),
                n(3),
                n(15)
            ], void 0 === (i116 = "function" == typeof (o212 = function(o, r, i, a) {
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t() {
                        (0, r.default)(this, t), this.commandName = "italic", this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--italic"
                        }, this.nodes = {
                            button: null
                        };
                    }
                    return (0, i.default)(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 4, 11)), this.nodes.button;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                document.execCommand(this.commandName);
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = document.queryCommandState(this.commandName);
                                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+I";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    i: {
                                    }
                                };
                            }
                        }
                    ]), t;
                }();
                o.default = l, l.displayName = "ItalicInlineTool", l.isInline = !0, l.title = "Italic", t554.exports = e356.default;
            }) ? o212.apply(e356, r122) : o212) || (t554.exports = i116);
        },
        function(t555, e357, n265) {
            var o213, r123, i117;
            "undefined" != typeof globalThis || "undefined", r123 = [
                e357,
                n265(2),
                n265(3),
                n265(25),
                n265(15),
                n265(7)
            ], void 0 === (i117 = "function" == typeof (o213 = function(o214, r, i, a, s, l) {
                var c = n265(8), u = n265(1);
                Object.defineProperty(o214, "__esModule", {
                    value: !0
                }), o214.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = c(l);
                var f = function() {
                    function t556(e) {
                        var n = e.api;
                        (0, r.default)(this, t556), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--link",
                            buttonUnlink: "ce-inline-tool--unlink",
                            input: "ce-inline-tool-input",
                            inputShowed: "ce-inline-tool-input--showed"
                        }, this.nodes = {
                            button: null,
                            input: null
                        }, this.inputOpened = !1, this.toolbar = n.toolbar, this.inlineToolbar = n.inlineToolbar, this.notifier = n.notifier, this.i18n = n.i18n, this.selection = new a.default;
                    }
                    return (0, i.default)(t556, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 14, 10)), this.nodes.button.appendChild(s.default.svg("unlink", 15, 11)), this.nodes.button;
                            }
                        },
                        {
                            key: "renderActions",
                            value: function() {
                                var t = this;
                                return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function(e) {
                                    e.keyCode === t.ENTER_KEY && t.enterPressed(e);
                                }), this.nodes.input;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                if (t) {
                                    this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                                    var e = this.selection.findParentTag("A");
                                    if (e) return this.selection.expandToTag(e), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
                                }
                                this.toggleActions();
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = this.selection.findParentTag("A");
                                if (e) {
                                    this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                                    var n = e.getAttribute("href");
                                    this.nodes.input.value = "null" !== n ? n : "", this.selection.save();
                                } else this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                                return !!e;
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.closeActions();
                            }
                        },
                        {
                            key: "toggleActions",
                            value: function() {
                                this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
                            }
                        },
                        {
                            key: "openActions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.nodes.input.classList.add(this.CSS.inputShowed), t && this.nodes.input.focus(), this.inputOpened = !0;
                            }
                        },
                        {
                            key: "closeActions",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                if (this.selection.isFakeBackgroundEnabled) {
                                    var e = new a.default;
                                    e.save(), this.selection.restore(), this.selection.removeFakeBackground(), e.restore();
                                }
                                this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t && this.selection.clearSaved(), this.inputOpened = !1;
                            }
                        },
                        {
                            key: "enterPressed",
                            value: function(t) {
                                var e = this.nodes.input.value || "";
                                return e.trim() ? this.validateURL(e) ? (e = this.prepareLink(e), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.selection.collapseToEnd(), void this.inlineToolbar.close()) : (this.notifier.show({
                                    message: "Pasted link is not valid.",
                                    style: "error"
                                }), void l.log("Incorrect Link pasted", "warn", e)) : (this.selection.restore(), this.unlink(), t.preventDefault(), void this.closeActions());
                            }
                        },
                        {
                            key: "validateURL",
                            value: function(t) {
                                return !/\s/.test(t);
                            }
                        },
                        {
                            key: "prepareLink",
                            value: function(t) {
                                return t = t.trim(), t = this.addProtocol(t);
                            }
                        },
                        {
                            key: "addProtocol",
                            value: function(t) {
                                if (/^(\w+):(\/\/)?/.test(t)) return t;
                                var e = /^\/[^/\s]/.test(t), n = "#" === t.substring(0, 1), o = /^\/\/[^/\s]/.test(t);
                                return e || n || o || (t = "http://" + t), t;
                            }
                        },
                        {
                            key: "insertLink",
                            value: function(t) {
                                var e = this.selection.findParentTag("A");
                                e && this.selection.expandToTag(e), document.execCommand(this.commandLink, !1, t);
                            }
                        },
                        {
                            key: "unlink",
                            value: function() {
                                document.execCommand(this.commandUnlink);
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+K";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    a: {
                                        href: !0,
                                        target: "_blank",
                                        rel: "nofollow"
                                    }
                                };
                            }
                        }
                    ]), t556;
                }();
                o214.default = f, f.displayName = "LinkInlineTool", f.isInline = !0, f.title = "Link", t555.exports = e357.default;
            }) ? o213.apply(e357, r123) : o213) || (t555.exports = i117);
        },
        function(t557, e358, n266) {
            var o215, r124, i118;
            "undefined" != typeof globalThis || "undefined", r124 = [
                e358,
                n266(2),
                n266(3),
                n266(15)
            ], void 0 === (i118 = "function" == typeof (o215 = function(o216, r125, i, a) {
                var s = n266(1);
                Object.defineProperty(o216, "__esModule", {
                    value: !0
                }), o216.default = void 0, r125 = s(r125), i = s(i), a = s(a);
                var l = function() {
                    function t558(e) {
                        var n = e.data, o = e.api;
                        (0, r125.default)(this, t558), this.CSS = {
                            wrapper: "ce-stub",
                            info: "ce-stub__info",
                            title: "ce-stub__title",
                            subtitle: "ce-stub__subtitle"
                        }, this.api = o, this.title = n.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = n.savedData, this.wrapper = this.make();
                    }
                    return (0, i.default)(t558, [
                        {
                            key: "render",
                            value: function() {
                                return this.wrapper;
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                return this.savedData;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = a.default.make("div", this.CSS.wrapper), e = a.default.svg("sad-face", 52, 52), n = a.default.make("div", this.CSS.info), o = a.default.make("div", this.CSS.title, {
                                    textContent: this.title
                                }), r = a.default.make("div", this.CSS.subtitle, {
                                    textContent: this.subtitle
                                });
                                return t.appendChild(e), n.appendChild(o), n.appendChild(r), t.appendChild(n), t;
                            }
                        }
                    ]), t558;
                }();
                o216.default = l, l.displayName = "Stub", l.isReadOnlySupported = !0, t557.exports = e358.default;
            }) ? o215.apply(e358, r124) : o215) || (t557.exports = i118);
        },
        function(t559, e359, n267) {
            var o217, r126, i119;
            "undefined" != typeof globalThis || "undefined", r126 = [
                e359,
                n267(2),
                n267(3),
                n267(67),
                n267(390),
                n267(391),
                n267(392)
            ], void 0 === (i119 = "function" == typeof (o217 = function(o218, r127, i120, a, s, l, c) {
                var u = n267(1);
                Object.defineProperty(o218, "__esModule", {
                    value: !0
                }), o218.default = void 0, r127 = u(r127), i120 = u(i120), s = u(s), l = u(l), c = u(c);
                var f = function(t, e) {
                    var n = {
                    };
                    for(var o in t)Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for(o = Object.getOwnPropertySymbols(t); r < o.length; r++)e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
                    }
                    return n;
                }, d = function() {
                    function t560(e, n, o) {
                        (0, r127.default)(this, t560), this.api = o, this.config = e, this.editorConfig = n;
                    }
                    return (0, i120.default)(t560, [
                        {
                            key: "get",
                            value: function(t) {
                                var e = this.config[t], n = e.class, o = e.isInternal, r = void 0 !== o && o, i = f(e, [
                                    "class",
                                    "isInternal"
                                ]);
                                return new (this.getConstructor(n))({
                                    name: t,
                                    constructable: n,
                                    config: i,
                                    api: this.api,
                                    isDefault: t === this.editorConfig.defaultBlock,
                                    defaultPlaceholder: this.editorConfig.placeholder,
                                    isInternal: r
                                });
                            }
                        },
                        {
                            key: "getConstructor",
                            value: function(t) {
                                switch(!0){
                                    case t[a.InternalInlineToolSettings.IsInline]:
                                        return s.default;
                                    case t[a.InternalTuneSettings.IsTune]:
                                        return l.default;
                                    default:
                                        return c.default;
                                }
                            }
                        }
                    ]), t560;
                }();
                o218.default = d, d.displayName = "ToolsFactory", t559.exports = e359.default;
            }) ? o217.apply(e359, r126) : o217) || (t559.exports = i119);
        },
        function(t561, e360, n268) {
            var o219, r128, i121;
            "undefined" != typeof globalThis || "undefined", r128 = [
                e360,
                n268(2),
                n268(3),
                n268(5),
                n268(6),
                n268(4),
                n268(67)
            ], void 0 === (i121 = "function" == typeof (o219 = function(o220, r, i, a, s, l, c) {
                var u = n268(8), f = n268(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o220, "__esModule", {
                    value: !0
                }), o220.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t562) {
                    (0, a.default)(o221, t562);
                    var e, n269 = (e = o221, function() {
                        var t, n = (0, l.default)(e);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o221() {
                        var t;
                        return (0, r.default)(this, o221), (t = n269.apply(this, arguments)).type = c.ToolType.Inline, t;
                    }
                    return (0, i.default)(o221, [
                        {
                            key: "create",
                            value: function() {
                                return new this.constructable({
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "title",
                            get: function() {
                                return this.constructable[c.InternalInlineToolSettings.Title];
                            }
                        }
                    ]), o221;
                }((c = u(c)).default);
                o220.default = p, p.displayName = "InlineTool", t561.exports = e360.default;
            }) ? o219.apply(e360, r128) : o219) || (t561.exports = i121);
        },
        function(t563, e361, n270) {
            var o222, r129, i122;
            "undefined" != typeof globalThis || "undefined", r129 = [
                e361,
                n270(2),
                n270(3),
                n270(5),
                n270(6),
                n270(4),
                n270(67)
            ], void 0 === (i122 = "function" == typeof (o222 = function(o223, r, i, a, s, l, c) {
                var u = n270(8), f = n270(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o223, "__esModule", {
                    value: !0
                }), o223.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t564) {
                    (0, a.default)(o224, t564);
                    var e362, n271 = (e362 = o224, function() {
                        var t, n = (0, l.default)(e362);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o224() {
                        var t;
                        return (0, r.default)(this, o224), (t = n271.apply(this, arguments)).type = c.ToolType.Tune, t;
                    }
                    return (0, i.default)(o224, [
                        {
                            key: "create",
                            value: function(t, e) {
                                return new this.constructable({
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings,
                                    block: e,
                                    data: t
                                });
                            }
                        }
                    ]), o224;
                }((c = u(c)).default);
                o223.default = p, p.displayName = "BlockTune", t563.exports = e361.default;
            }) ? o222.apply(e361, r129) : o222) || (t563.exports = i122);
        },
        function(t565, e363, n272) {
            var o225, r130, i123;
            "undefined" != typeof globalThis || "undefined", r130 = [
                e363,
                n272(2),
                n272(3),
                n272(168),
                n272(5),
                n272(6),
                n272(4),
                n272(80),
                n272(67),
                n272(7),
                n272(184)
            ], void 0 === (i123 = "function" == typeof (o225 = function(o226, r131, i124, a49, s39, l, c, u, f, d, p) {
                var h = n272(8), v = n272(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        })), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o226, "__esModule", {
                    value: !0
                }), o226.default = void 0, r131 = v(r131), i124 = v(i124), a49 = v(a49), s39 = v(s39), l = v(l), c = v(c), u = v(u), f = h(f), d = h(d), p = v(p);
                var y = function(t, e, n, o) {
                    var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, u.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else for(var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                }, b = function(t566) {
                    (0, s39.default)(o227, t566);
                    var e364, n273 = (e364 = o227, function() {
                        var t, n = (0, c.default)(e364);
                        if (g()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o227() {
                        var t;
                        return (0, r131.default)(this, o227), (t = n273.apply(this, arguments)).type = f.ToolType.Block, t.inlineTools = new p.default, t.tunes = new p.default, t;
                    }
                    return (0, i124.default)(o227, [
                        {
                            key: "create",
                            value: function(t, e, n) {
                                return new this.constructable({
                                    data: t,
                                    block: e,
                                    readOnly: n,
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "isReadOnlySupported",
                            get: function() {
                                return !0 === this.constructable[f.InternalBlockToolSettings.IsReadOnlySupported];
                            }
                        },
                        {
                            key: "isLineBreaksEnabled",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.IsEnabledLineBreaks];
                            }
                        },
                        {
                            key: "toolbox",
                            get: function() {
                                var t = this.constructable[f.InternalBlockToolSettings.Toolbox], e = this.config[f.UserSettings.Toolbox];
                                if (!d.isEmpty(t) && !1 !== (null != e ? e : t)) return Object.assign({
                                }, t, e);
                            }
                        },
                        {
                            key: "conversionConfig",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.ConversionConfig];
                            }
                        },
                        {
                            key: "enabledInlineTools",
                            get: function() {
                                return this.config[f.UserSettings.EnabledInlineTools] || !1;
                            }
                        },
                        {
                            key: "enabledBlockTunes",
                            get: function() {
                                return this.config[f.UserSettings.EnabledBlockTunes];
                            }
                        },
                        {
                            key: "pasteConfig",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.PasteConfig] || {
                                };
                            }
                        },
                        {
                            key: "sanitizeConfig",
                            get: function() {
                                var t = (0, a49.default)((0, c.default)(o227.prototype), "sanitizeConfig", this), e = this.baseSanitizeConfig;
                                if (d.isEmpty(t)) return e;
                                var n = {
                                };
                                for(var r in t)if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    var i = t[r];
                                    d.isObject(i) ? n[r] = Object.assign({
                                    }, e, i) : n[r] = i;
                                }
                                return n;
                            }
                        },
                        {
                            key: "baseSanitizeConfig",
                            get: function() {
                                var t = {
                                };
                                return Array.from(this.inlineTools.values()).forEach(function(e) {
                                    return Object.assign(t, e.sanitizeConfig);
                                }), Array.from(this.tunes.values()).forEach(function(e) {
                                    return Object.assign(t, e.sanitizeConfig);
                                }), t;
                            }
                        }
                    ]), o227;
                }(f.default);
                o226.default = b, b.displayName = "BlockTool", y([
                    d.cacheable
                ], b.prototype, "sanitizeConfig", null), y([
                    d.cacheable
                ], b.prototype, "baseSanitizeConfig", null), t565.exports = e363.default;
            }) ? o225.apply(e363, r130) : o225) || (t565.exports = i123);
        },
        function(t567, e365, n274) {
            var o228, r132, i125;
            "undefined" != typeof globalThis || "undefined", r132 = [
                e365,
                n274(2),
                n274(3),
                n274(15)
            ], void 0 === (i125 = "function" == typeof (o228 = function(o229, r133, i126, a50) {
                var s40 = n274(1);
                Object.defineProperty(o229, "__esModule", {
                    value: !0
                }), o229.default = void 0, r133 = s40(r133), i126 = s40(i126), a50 = s40(a50);
                var l = function() {
                    function t568(e) {
                        var n = e.api;
                        (0, r133.default)(this, t568), this.CSS = {
                            button: "ce-settings__button",
                            wrapper: "ce-tune-move-down",
                            animation: "wobble"
                        }, this.api = n;
                    }
                    return (0, i126.default)(t568, [
                        {
                            key: "render",
                            value: function() {
                                var t = this, e = a50.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.wrapper
                                ], {
                                });
                                return e.appendChild(a50.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e, "click", function(n) {
                                    return t.handleClick(n, e);
                                }, !1), this.api.tooltip.onHover(e, this.api.i18n.t("Move down"), {
                                    hidingDelay: 300
                                }), e;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t, e) {
                                var n = this, o = this.api.blocks.getCurrentBlockIndex(), r = this.api.blocks.getBlockByIndex(o + 1);
                                if (!r) return e.classList.add(this.CSS.animation), void window.setTimeout(function() {
                                    e.classList.remove(n.CSS.animation);
                                }, 500);
                                var i = r.holder, a = i.getBoundingClientRect(), s = Math.abs(window.innerHeight - i.offsetHeight);
                                a.top < window.innerHeight && (s = window.scrollY + i.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(o + 1), this.api.tooltip.hide();
                            }
                        }
                    ]), t568;
                }();
                o229.default = l, l.displayName = "MoveDownTune", l.isTune = !0, t567.exports = e365.default;
            }) ? o228.apply(e365, r132) : o228) || (t567.exports = i125);
        },
        function(t569, e366, n275) {
            var o230, r134, i127;
            "undefined" != typeof globalThis || "undefined", r134 = [
                e366,
                n275(2),
                n275(3),
                n275(15)
            ], void 0 === (i127 = "function" == typeof (o230 = function(o231, r, i, a) {
                var s = n275(1);
                Object.defineProperty(o231, "__esModule", {
                    value: !0
                }), o231.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t570(e) {
                        var n = this, o = e.api;
                        (0, r.default)(this, t570), this.CSS = {
                            button: "ce-settings__button",
                            buttonDelete: "ce-settings__button--delete",
                            buttonConfirm: "ce-settings__button--confirm"
                        }, this.nodes = {
                            button: null
                        }, this.api = o, this.resetConfirmation = function() {
                            n.setConfirmation(!1);
                        };
                    }
                    return (0, i.default)(t570, [
                        {
                            key: "render",
                            value: function() {
                                var t = this;
                                return this.nodes.button = a.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.buttonDelete
                                ], {
                                }), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function(e) {
                                    return t.handleClick(e);
                                }, !1), this.api.tooltip.onHover(this.nodes.button, this.api.i18n.t("Delete"), {
                                    hidingDelay: 300
                                }), this.nodes.button;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t) {
                                this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), this.api.tooltip.hide(), t.stopPropagation()) : (this.setConfirmation(!0), this.api.events.on("block-settings-closed", this.resetConfirmation));
                            }
                        },
                        {
                            key: "setConfirmation",
                            value: function(t) {
                                this.needConfirmation = t, this.nodes.button.classList.add(this.CSS.buttonConfirm);
                            }
                        }
                    ]), t570;
                }();
                o231.default = l, l.displayName = "DeleteTune", l.isTune = !0, t569.exports = e366.default;
            }) ? o230.apply(e366, r134) : o230) || (t569.exports = i127);
        },
        function(t571, e367, n276) {
            var o232, r135, i128;
            "undefined" != typeof globalThis || "undefined", r135 = [
                e367,
                n276(2),
                n276(3),
                n276(15)
            ], void 0 === (i128 = "function" == typeof (o232 = function(o233, r136, i129, a51) {
                var s41 = n276(1);
                Object.defineProperty(o233, "__esModule", {
                    value: !0
                }), o233.default = void 0, r136 = s41(r136), i129 = s41(i129), a51 = s41(a51);
                var l31 = function() {
                    function t572(e) {
                        var n = e.api;
                        (0, r136.default)(this, t572), this.CSS = {
                            button: "ce-settings__button",
                            wrapper: "ce-tune-move-up",
                            animation: "wobble"
                        }, this.api = n;
                    }
                    return (0, i129.default)(t572, [
                        {
                            key: "render",
                            value: function() {
                                var t = this, e = a51.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.wrapper
                                ], {
                                });
                                return e.appendChild(a51.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e, "click", function(n) {
                                    return t.handleClick(n, e);
                                }, !1), this.api.tooltip.onHover(e, this.api.i18n.t("Move up"), {
                                    hidingDelay: 300
                                }), e;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t, e) {
                                var n = this, o = this.api.blocks.getCurrentBlockIndex(), r = this.api.blocks.getBlockByIndex(o), i = this.api.blocks.getBlockByIndex(o - 1);
                                if (0 === o || !r || !i) return e.classList.add(this.CSS.animation), void window.setTimeout(function() {
                                    e.classList.remove(n.CSS.animation);
                                }, 500);
                                var a, s = r.holder, l = i.holder, c = s.getBoundingClientRect(), u = l.getBoundingClientRect();
                                a = u.top > 0 ? Math.abs(c.top) - Math.abs(u.top) : window.innerHeight - Math.abs(c.top) + Math.abs(u.top), window.scrollBy(0, -1 * a), this.api.blocks.move(o - 1), this.api.tooltip.hide();
                            }
                        }
                    ]), t572;
                }();
                o233.default = l31, l31.displayName = "MoveUpTune", l31.isTune = !0, t571.exports = e367.default;
            }) ? o232.apply(e367, r135) : o232) || (t571.exports = i128);
        },
        function(t, e, n) {
            "use strict";
            n.r(e), e.default = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 8 8">\n  <circle cx="6.5" cy="1.5" r="1.5"/>\n  <circle cx="6.5" cy="6.5" r="1.5"/>\n  <circle cx="1.5" cy="1.5" r="1.5"/>\n  <circle cx="1.5" cy="6.5" r="1.5"/>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>';
        },
        function(t, e) {
            t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 35px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:-30px;top:5px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:-28px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:18px;height:18px;color:#707684;cursor:pointer;background:#eff2f5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn:hover{color:#1d202b}@media (max-width:650px){.ce-toolbar__settings-btn{background:transparent}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:-11px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-34px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-34px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}';
        },
        function(t573, e368, n277) {
            "use strict";
            n277.r(e368), n277.d(e368, "nanoid", function() {
                return s42;
            }), n277.d(e368, "customAlphabet", function() {
                return a;
            }), n277.d(e368, "customRandom", function() {
                return i130;
            }), n277.d(e368, "urlAlphabet", function() {
                return o234;
            }), n277.d(e368, "random", function() {
                return r137;
            });
            let o234 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
            let r137 = (t)=>crypto.getRandomValues(new Uint8Array(t))
            , i130 = (t, e, n)=>{
                let o = (2 << Math.log(t.length - 1) / Math.LN2) - 1, r = -~(1.6 * o * e / t.length);
                return ()=>{
                    let i = "";
                    for(;;){
                        let a = n(r), s = r;
                        for(; s--;)if (i += t[a[s] & o] || "", i.length === e) return i;
                    }
                };
            }, a = (t, e)=>i130(t, e, r137)
            , s42 = (t = 21)=>{
                let e = "", n = crypto.getRandomValues(new Uint8Array(t));
                for(; t--;){
                    let o = 63 & n[t];
                    e += o < 36 ? o.toString(36) : o < 62 ? (o - 26).toString(36).toUpperCase() : o < 63 ? "_" : "-";
                }
                return e;
            };
        }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["iKiqL","bB7Pu"], "bB7Pu", "parcelRequire0da0")

//# sourceMappingURL=index.3d214d75.js.map
