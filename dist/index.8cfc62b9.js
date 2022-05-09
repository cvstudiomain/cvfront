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
})({"jWVwA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
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

},{}],"6rimH":[function(require,module,exports) {
const state = {
    templateToUse: "",
    templates: [],
    resumes: [],
    templateToBeDownload: [],
    userListTemplates: {
        userTemplate1: `<div class="template template1">
        <button class="custom-btn btn-5">USE THIS</button>
    
        <div class="user-name-and-profession">
          <h1 class="user-name">Jesica Devis</h1>
          <p class="profession">Graphic Designer</p>
        </div>
    
        <div class="passportDateOfBirth">
          <div class="passport-box">
            
          </div>
    
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>12/12/1990</p>
          </div>
    
        </div>
    
        <div class="large-content">
    
          <div class="profile informationContainer">
            <h3 class="inforHeader">Profile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iure veniam hic nemo commodi odio.
            </p>
          </div>
    
          <div class="recent-experience informationContainer">
            <h3 class="inforHeader">Experience</h3>
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
    
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="educational-background informationContainer">
            <h3 class="inforHeader">Education</h3>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="objective informationContainer">
            <h3 class="inforHeader">Objective</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis repudiandae sequi, consequatur nihil recusandae
              impedit molestiae maxime saepe quisquam sit molestias,
              dolores vitae quod qui?
            </p>
          </div>
    
          <div class="certification informationContainer">
            <h3 class="inforHeader">Certification</h3>
            <ul class="content-wrapper">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
    
        <div class="tiny-content">
          <div class="contact-information informationContainer">
            <h3 class="inforHeader">Contact information</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">Email:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">phone:</p>
                <p class="inforVal">ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">country:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">state:</p>
                <p class="inforVal">Lorem ipsum.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">city:</p>
                <p class="inforVal">dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">address:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">zipcode:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">idnumber:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
    
          <div class="social-media-links informationContainer">
            <h3 class="inforHeader">Social media links</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">facebook:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">instagram:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">twitter:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">linkedin:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
    
          <div class="skills informationContainer">
            <h3 class="inforHeader">Skills</h3>
            <ul class="content-wrapper">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
    
          <div class="references informationContainer">
            <h3 class="inforHeader">Refrence</h3>
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>`,
        userTemplate2: `<div class="template template2">
        <button class="custom-btn btn-5">USE THIS</button>
        <div class="user-name-and-profession">
          <h1 class="user-name">Rechard Morgan</h1>
          <p class="profession">internet marketter</p>
        </div>
        <div class="tiny-content">
          <div class="passportDateOfBirth">
            <div class="passport-box">
              
            </div>
            <div class="date-of-birth">
              <p class="dateOfBirth">date of birth:</p>
              <p>12/12/1990</p>
            </div>
          </div>
    
          <div class="contact-information informationContainer">
            <h3 class="inforHeader">Contact information</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">Email:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">phone:</p>
                <p class="inforVal">ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">country:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">state:</p>
                <p class="inforVal">Lorem ipsum.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">city:</p>
                <p class="inforVal">dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">address:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">zipcode:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">idnumber:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
    
          <div class="social-media-links informationContainer">
            <h3 class="inforHeader">Social media links</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">facebook:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">instagram:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">twitter:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">linkedin:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
    
          <div class="skills informationContainer">
            <h3 class="inforHeader">Skills</h3>
            <ul class="content-wrapper">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
    
          <div class="references informationContainer">
            <h3 class="inforHeader">Refrence</h3>
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
    
        <div class="large-content">
          <div class="profile informationContainer">
            <h3 class="inforHeader">Profile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iure veniam hic nemo commodi odio.
            </p>
          </div>
    
          <div class="recent-experience informationContainer">
            <h3 class="inforHeader">Experience</h3>
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
    
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="educational-background informationContainer">
            <h3 class="inforHeader">Education</h3>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="objective informationContainer">
            <h3 class="inforHeader">Objective</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis repudiandae sequi, consequatur nihil recusandae
              impedit molestiae maxime saepe quisquam sit molestias,
              dolores vitae quod qui?
            </p>
          </div>
    
          <div class="certification informationContainer">
            <h3 class="inforHeader">Certification</h3>
            <ul class="content-wrapper">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>`,
        userTemplate3: `<div class="template template3">
        <button class="custom-btn btn-5">USE THIS</button>
    
        <div class="large-profile">
        <div class="passportDateOfBirth">
          <div class="passport-box">
            
          </div>
    
          <div class="date-of-birth">
            <p class="dateOfBirth">date of birth:</p>
            <p>12/12/1990</p>
          </div>
        </div>
        
          <div class="profile informationContainer">
            <h3 class="inforHeader">Profile</h3>
            <p>
              Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt quidem quam cum! Provident rerum
              modi suscipit magnam nam repudiandae! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Lorem ipsum dolor sit
              amet. Qui mollitia ipsa id hic cumque? Sit. sit amet
              consectetur adipisicing elit. Perspiciatis iure veniam hic
              nemo commodi odio.
            </p>
          </div>
        </div>
    
    
    
    
        <div class="user-name-and-profession">
          <p class="profession">internet marketter</p>
          <h1 class="user-name">Richard Anderson</h1>
        </div>
        <div class="tiny-content">
          <div class="contact-information informationContainer">
            <h3 class="inforHeader">Contact information</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">Email:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">phone:</p>
                <p class="inforVal">ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">country:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">state:</p>
                <p class="inforVal">Lorem ipsum.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">city:</p>
                <p class="inforVal">dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">address:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">zipcode:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">idnumber:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
    
          <div class="social-media-links informationContainer">
            <h3 class="inforHeader">Social media links</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">facebook:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">instagram:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">twitter:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">linkedin:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
    
          <div class="skills informationContainer">
            <h3 class="inforHeader">Skills</h3>
            <ul class="content-wrapper">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
    
          <div class="references informationContainer">
            <h3 class="inforHeader">Refrence</h3>
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
    
        <div class="large-content">
          <div class="recent-experience informationContainer">
            <h3 class="inforHeader">Experience</h3>
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
    
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="educational-background informationContainer">
            <h3 class="inforHeader">Education</h3>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="objective informationContainer">
            <h3 class="inforHeader">Objective</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis repudiandae sequi, consequatur nihil recusandae
              impedit molestiae maxime saepe quisquam sit molestias,
              dolores vitae quod qui?
            </p>
          </div>
    
          <div class="certification informationContainer">
            <h3 class="inforHeader">Certification</h3>
            <ul class="content-wrapper">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>`,
        userTemplate4: `<div class="template template4">
        <button class="custom-btn btn-5">USE THIS</button>
        <div class="contact-information informationContainer">
          <div class="contact-container">
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">Email:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">phone:</p>
                <p class="inforVal">ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">country:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">state:</p>
                <p class="inforVal">Lorem ipsum.</p>
              </div>
            </div>
    
            <div class="content-wrapper secondContent">
              <div class="information">
                <p class="inforLabel">city:</p>
                <p class="inforVal">dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">address:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">zipcode:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">idnumber:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
    
        <div class="user-name-and-profession">
          <div class="passportDateOfBirth">
            <div class="passport-box">
              
            </div>
            <div class="date-of-birth">
              <p class="dateOfBirth">date of birth:</p>
              <p>12/12/1990</p>
            </div>
          </div>
    
          <h1 class="user-name">Michael Johnson</h1>
          <p class="profession">internet marketter</p>
        </div>
        <div class="tiny-content">
          <div class="objective informationContainer">
            <h3 class="inforHeader">Objective</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis repudiandae sequi, consequatur nihil recusandae
              impedit molestiae maxime saepe quisquam sit molestias,
              dolores vitae quod qui?
            </p>
          </div>
    
          <div class="social-media-links informationContainer">
            <h3 class="inforHeader">Social media links</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">facebook:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">instagram:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">twitter:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">linkedin:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
    
          <div class="skills informationContainer">
            <h3 class="inforHeader">Skills</h3>
            <ul class="content-wrapper">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
    
          <div class="references informationContainer">
            <h3 class="inforHeader">Refrence</h3>
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
    
        <div class="large-content">
          <div class="profile informationContainer">
            <h3 class="inforHeader">Profile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iure veniam hic nemo commodi odio.
            </p>
          </div>
    
          <div class="recent-experience informationContainer">
            <h3 class="inforHeader">Experience</h3>
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
    
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="educational-background informationContainer">
            <h3 class="inforHeader">Education</h3>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="certification informationContainer">
            <h3 class="inforHeader">Certification</h3>
            <ul class="content-wrapper">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>`,
        userTemplate5: `<div class="template template5">
        <button class="custom-btn btn-5">USE THIS</button>
        
        <div class="tiny-content">
          <div class="passportDateOfBirth">
            <div class="passport-box">
              
            </div>
            <div class="date-of-birth">
              <p class="dateOfBirth">date of birth:</p>
              <p>12/12/1990</p>
            </div>
          </div>
          <div class="contact-information informationContainer">
            <h3 class="inforHeader">Contact information</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">Email:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">phone:</p>
                <p class="inforVal">ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">country:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">state:</p>
                <p class="inforVal">Lorem ipsum.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">city:</p>
                <p class="inforVal">dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">address:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">zipcode:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">idnumber:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
    
          <div class="social-media-links informationContainer">
            <h3 class="inforHeader">Social media links</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">facebook:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">instagram:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">twitter:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">linkedin:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
    
          <div class="skills informationContainer">
            <h3 class="inforHeader">Skills</h3>
            <ul class="content-wrapper">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
    
          <div class="references informationContainer">
            <h3 class="inforHeader">Refrence</h3>
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          
        </div>
    
        <div class="large-content">
          <div class="user-name-and-profession">
            <h1 class="user-name">Jesica Devis</h1>
            <p class="profession">Graphic Designer</p>
          </div>
    
          <div class="profile informationContainer">
            <h3 class="inforHeader">Profile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iure veniam hic nemo commodi odio.
            </p>
          </div>
    
          <div class="recent-experience informationContainer">
            <h3 class="inforHeader">Experience</h3>
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
    
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="educational-background informationContainer">
            <h3 class="inforHeader">Education</h3>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="objective informationContainer">
            <h3 class="inforHeader">Objective</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis repudiandae sequi, consequatur nihil recusandae
              impedit molestiae maxime saepe quisquam sit molestias,
              dolores vitae quod qui?
            </p>
          </div>
    
          <div class="certification informationContainer">
            <h3 class="inforHeader">Certification</h3>
            <ul class="content-wrapper">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>`,
        userTemplate6: `<div class="template template6">
        <button class="custom-btn btn-5">USE THIS</button>
    
        <div class="user-name-and-profession">
          <h1 class="user-name">Roland Huffman</h1>
          <p class="profession">Web developer</p>
        </div>
        <div class="large-content">
          <div class="profile informationContainer">
            <h3 class="inforHeader">Profile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis iure veniam hic nemo commodi odio.
            </p>
          </div>
    
          <div class="recent-experience informationContainer">
            <h3 class="inforHeader">Experience</h3>
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
    
            <div class="experience content-wrapper">
              <div class="start-and-end-date">
                <p class="start">3/1882 to</p>
                <p class="end">5/1999</p>
              </div>
              <p class="jobtitle">Computer programmer</p>
              <p class="experienceOptain">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor
                sit amet. adipisicing elit. Ipsum explicabo adipisci ut
                voluptate soluta ipsam.
              </p>
              <p class="organizationAndAddress">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="educational-background informationContainer">
            <h3 class="inforHeader">Education</h3>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
    
            <div class="education content-wrapper">
              <div class="start-and-end-date">
                <p class="start">2015 to</p>
                <p class="end">2020</p>
              </div>
              <p class="qualification">B-tech in Lorem, ipsum dolor.</p>
              <p class="school-and-address">
                University of Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
    
          <div class="objective informationContainer">
            <h3 class="inforHeader">Objective</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis repudiandae sequi, consequatur nihil recusandae
              impedit molestiae maxime saepe quisquam sit molestias,
              dolores vitae quod qui?
            </p>
          </div>
    
          <div class="certification informationContainer">
            <h3 class="inforHeader">Certification</h3>
            <ul class="content-wrapper">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
    
        <div class="tiny-content">
          <div class="contact-information informationContainer">
            <h3 class="inforHeader">Contact information</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">Email:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">phone:</p>
                <p class="inforVal">ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">country:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">state:</p>
                <p class="inforVal">Lorem ipsum.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">city:</p>
                <p class="inforVal">dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">address:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">zipcode:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
    
              <div class="information">
                <p class="inforLabel">idnumber:</p>
                <p class="inforVal">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
    
          <div class="social-media-links informationContainer">
            <h3 class="inforHeader">Social media links</h3>
            <div class="content-wrapper">
              <div class="information">
                <p class="inforLabel">facebook:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">instagram:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">twitter:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
              <div class="information">
                <p class="inforLabel">linkedin:</p>
                <p class="inforVal">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
    
          <div class="skills informationContainer">
            <h3 class="inforHeader">Skills</h3>
            <ul class="content-wrapper">
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
    
          <div class="references informationContainer">
            <h3 class="inforHeader">Refrence</h3>
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
    
            <div class="reference content-wrapper">
              <p class="refName">Dr. Lorem ipsum dolor sit.</p>
              <p class="titleandorg">
                manager Lorem ipsum dolor sit amet.
              </p>
              <p class="email">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
    
          <div class="passportDateOfBirth">
            <div class="passport-box">
              
            </div>
            <div class="date-of-birth">
              <p class="dateOfBirth">date of birth:</p>
              <p>12/12/1990</p>
            </div>
          </div>
        </div>
      </div>`
    },
    searchResult: "",
    user: {
        initials: "",
        myTemplates: [],
        myResumes: [],
        siteUserName: "",
        images: {
        },
        inputData: [],
        persData1: "",
        persData2: "",
        socLinks: "",
        eduData: [],
        expeData: [],
        summeryData: [],
        educations: [],
        certifications: [],
        experiences: [],
        skills: [],
        hobies: [],
        reffrences: [],
        template: "",
        file: "",
        token: "",
        email: "",
        password: "",
        userid: ""
    },
    allData: "",
    page: 1,
    resume: {
    },
    cloud_image: {
    }
};
const btnNext1 = document.querySelector("#next1");
const btnNext2 = document.querySelector("#next2");
const btnNext3 = document.querySelector("#next3");
const btnNext4 = document.querySelector("#next4");
const btnNext5 = document.querySelector("#next5");
const btnNext6 = document.querySelector("#next6");
const btnback1 = document.querySelector("#back1");
const btnback2 = document.querySelector("#back2");
const btnback3 = document.querySelector("#back3");
const btnback4 = document.querySelector("#back4");
const btnback5 = document.querySelector("#back5");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");
const noResumeInfor = document.querySelector(".no-resume-infor");
let sectionName = document.querySelector(".user-section-name");
const progress = document.querySelector("#progress");
const templates = document.querySelector(".templates");
const htmlParent = document.querySelector("html");
const btnLogin = document.querySelector(".btn-login");
const myResume = document.querySelector(".myResume");
const resumesViewer = document.querySelector(".resumesViewer");
const myTemplates = document.querySelector(".myTemplates");
const noTemplateInor = document.querySelector(".no-template-infor-container");
const toRegister = document.querySelector(".to-register");
const toLogin = document.querySelector(".to-login");
const btnSignup = document.querySelector(".btn-signup");
const userDashBoard = document.querySelector(".userDashBoard");
const formBtn = document.querySelector(".generateCv");
const cvDataForm = document.querySelector(".cv-form");
const cvFormContainer = document.querySelector(".cv-form-container");
let userlist = document.querySelector(".user-list");
const message2 = document.querySelector(".message1");
let paginationBox = document.querySelector(".pagination");
let userResums = document.querySelector(".user-res-cl-container");
let templateHeader = document.querySelector(".template-header");
let image_input = document.getElementById("image_input");
let uploaded_image = "";
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
const objectOutOfArray = function(data) {
    return Object.fromEntries(...[
        data
    ]);
};
// document.getElementById("pdf-content").style.display = "none";
const allUserSiteButtons = document.querySelectorAll(".user-site-button");
const allUserContentChilds = document.querySelectorAll(".user-content-child");
resumesViewer.addEventListener("click", async function(e) {
    if (!e.target.classList.contains("viewerBtn")) return console.log("not button");
    if (e.target.closest("button").classList.contains("btnCloseView")) return resumesViewer.classList.remove("showIt");
    let container = e.target.closest(".resumesViewer");
    let myCv = container.querySelector(".template");
    resumesViewer.classList.remove("showIt");
    myResume.innerHTML = `<div class="loader"></div>`;
    htmlParent.style.fontSize = "16px";
    var opt = {
        pagebreak: {
            avoid: [
                ".objective",
                ".content-wrapper",
                ".school-and-address",
                "h3",
                "p",
                "li"
            ]
        },
        filename: "cv.pdf",
        image: {
            type: "jpeg",
            quality: 0.98
        },
        html2canvas: {
            scale: 2,
            useCORS: true
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        }
    };
    resumesViewer.classList.remove("showIt");
    await html2pdf().from(myCv).set(opt).save();
    htmlParent.style.fontSize = "6px";
    setTimeout(()=>{
        myResume.innerHTML = state.user.myResumes;
    }, 3000);
});
myResume.addEventListener("click", function(e) {
    // console.log(e.target.closest('.template'))
    if (!e.target.classList.contains("create-new") && !e.target.closest(".template")) return;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    if (e.target.closest(".template")) {
        let id = e.target.closest(".template").getAttribute("id");
        let marckupData = "";
        state.resumes.forEach((resume)=>resume._id === id ? marckupData = resume : ""
        );
        let marckup = createPdfMarckup(marckupData);
        resumesViewer.innerHTML = "";
        resumesViewer.insertAdjacentHTML("afterbegin", `${marckup}<button type="button" class="btnCloseView "> <i
    class="fa fa-times icon-mobile-nav viewerBtn"
    
    aria-hidden="true"
  ></i></button>
  <button type="button" class="btn downloadCv viewerBtn">Download</button>
 `);
        resumesViewer.classList.add("showIt");
        return;
    }
    allUserContentChilds.forEach((child)=>{
        if (!child.classList.contains("hiddenClass")) child.classList.add("hiddenClass");
    });
    allUserSiteButtons.forEach((btn)=>{
        if (btn.classList.contains("active")) btn.classList.remove("active");
    });
    sectionName.innerText = "My Templates";
    myTemplates.classList.remove("hiddenClass");
    document.querySelector(`#${myTemplates.classList[0]}`).classList.add("active");
});
document.querySelector(".closeForm").addEventListener("click", function(e) {
    cvFormContainer.classList.remove("showIt");
});
document.querySelector(".site-menu").addEventListener("click", function(e) {
    e.preventDefault();
    let buttonId = e.target.closest("li").getAttribute("id");
    if (!buttonId) return;
    headerEl.classList.remove("nav-open");
    let targetElement = document.querySelector(`#${buttonId}`);
    let allTargetButtons = e.target.closest(".site-menu").querySelectorAll("li");
    let sectionText = targetElement.querySelector("a").innerText;
    let allSections = document.querySelectorAll(".user-content-child");
    allSections.forEach((sect)=>{
        if (!sect.classList.contains("hiddenClass")) sect.classList.add("hiddenClass");
    });
    allTargetButtons.forEach((btn)=>{
        if (btn.classList.contains("active")) btn.classList.remove("active");
    });
    if (buttonId === "myResume") {
        document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
        targetElement.classList.add("active");
        sectionName.innerText = sectionText;
        if (state.resumes.length !== 0) {
            let marckup = state.resumes.map((resume)=>createPdfMarckup(resume)
            );
            generateMarckup(marckup);
        }
        templates.classList.add("hiddenClass");
    }
    if (buttonId === "myProfile") {
        targetElement.classList.add("active");
        sectionName.innerText = sectionText;
        document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
    }
    if (buttonId === "myTemplates") {
        targetElement.classList.add("active");
        sectionName.innerText = sectionText;
        document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
    }
    if (buttonId === "templates") {
        targetElement.classList.add("active");
        sectionName.innerText = sectionText;
        document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
    }
    if (buttonId === "mySite") {
        targetElement.classList.add("active");
        sectionName.innerText = sectionText;
        document.querySelector(`.${buttonId}`).classList.remove("hiddenClass");
    }
});
formBtn.addEventListener("click", async function(e) {
    try {
        e.preventDefault();
        [
            ...new FormData(e.target.closest("form"))
        ].filter((val)=>val[1] !== "" && state.user.summeryData.push(val)
        );
        let eduCol = [];
        state.user.eduData && state.user.eduData.forEach((val)=>val[0] !== "certification" && val[1] !== "" && eduCol.push(val)
        );
        eduCol.length !== 0 && state.user.educations.push(eduCol);
        let expCol = [];
        state.user.expeData && state.user.expeData.forEach((val)=>val[1] !== "" && expCol.push(val)
        );
        expCol.length !== 0 && state.user.experiences.push(expCol);
        state.eduData && state.user.eduData.forEach((val)=>{
            if (val[0] === "certification" && val[1] !== "") state.user.certifications.push(val);
        });
        state.user.summeryData && state.user.summeryData.forEach((val)=>{
            if (val[0] === "skill" && val[1] !== "" && val.length !== 0) state.user.skills.push(val);
        });
        state.user.summeryData && state.user.summeryData.forEach((val)=>{
            if (val[0] === "interest" && val[1] !== "" && val.length !== 0) state.user.hobies.push(val);
        });
        let refCol = [];
        state.user.summeryData && state.user.summeryData.forEach((val)=>val[0] !== "interest" && val[0] !== "skill" && val[0] !== "profile" && val[1] !== "" && refCol.push(val)
        );
        refCol.length !== 0 && state.user.reffrences.push(refCol);
        state.user.inputData = {
            userid: state.user.userid,
            template: state.templateToUse,
            ...objectOutOfArray(state.user.persData1),
            ...objectOutOfArray(state.user.persData2),
            ...objectOutOfArray(state.user.socLinks),
            skills: [
                ...state.user.skills.filter((val)=>val[1] !== ""
                ).map((val)=>val[1]
                ), 
            ],
            certifications: [
                ...state.user.certifications.filter((val)=>val[1] !== ""
                ).map((val)=>val[1]
                ), 
            ],
            interest: [
                ...state.user.hobies.filter((val)=>val[1] !== ""
                ).map((val)=>val[1]
                ), 
            ],
            profile: state.user.summeryData && state.user.summeryData.filter((val)=>val[0] === "profile"
            ).map((val)=>val[1]
            ).toString(),
            educations: state.user.educations.map((val)=>objectOutOfArray(val)
            ),
            experiences: state.user.experiences.map((val)=>objectOutOfArray(val)
            ),
            reffrences: state.user.reffrences.map((val)=>objectOutOfArray(val)
            ),
            images: {
            }
        };
        if (state.user.file) {
            let formData = new FormData();
            let token = state.user.token;
            formData.append("file", state.user.file);
            let res = await axios.post("http://localhost:5000/upload/", formData, {
                headers: {
                    "content-type": "multipart/form-data",
                    Authorization: token
                }
            });
            state.user.inputData.images = res.data;
        }
        const res = await axios.post("http://localhost:5000/resume/create", {
            ...state.user.inputData
        });
        state.resume = res.data.data;
        state.resumes.push(state.resume);
        state.user.myResumes.push(createPdfMarckup(state.resume));
        noResumeInfor.classList.add("hiddenClass");
        myTemplates.classList.add("hiddenClass");
        document.querySelector("#myTemplates").classList.remove("active");
        myResume.classList.remove("hiddenClass");
        document.querySelector("#myResume").classList.add("active");
        myResume.innerHTML = "";
        state.resumes.forEach((resume)=>{
            myResume.insertAdjacentHTML("afterbegin", createPdfMarckup(resume));
        });
        cvFormContainer.classList.remove("showIt");
    } catch (error) {
        console.log(error);
    }
});
const generateMarckup = function(marckup) {
    myResume.innerHTML = "";
    myResume.insertAdjacentHTML("afterbegin", marckup);
};
document.querySelector(".log-out").addEventListener("click", (e)=>{
    e.preventDefault();
    location.reload();
});
const deletUserAndResumes = async function(id) {
    let confirmAction = confirm("Are you sure to execute this action?");
    if (!confirmAction) return;
    const res = await axios.delete(`http://localhost:5000/user/delete/:${id}`);
    renderUserData();
    console.log(res);
};
document.querySelector(".user-list").addEventListener("click", function(e) {
    const userInforRow = e.target.closest(".user-infor-row");
    if (!userInforRow) return;
    const id = userInforRow.getAttribute("id");
    if (e.target.classList.contains("btn-delete")) return deletUserAndResumes(id);
});
document.querySelector(".admin-nav-bar").addEventListener("click", function(e) {
    if (!e.target.classList.contains("admin-nav-element")) return;
    let allSectionsInAdmin = document.querySelectorAll(".section-in-admin");
    allSectionsInAdmin.forEach((section)=>{
        if (!section.classList.contains("hideMe")) section.classList.add("hideMe");
        document.querySelector(`.${e.target.getAttribute("id")}`).classList.remove("hideMe");
    });
});
const getAndGenerateMarckup = function(listofuser) {
    const marckup = listofuser.map((user)=>`
      <tr class="user-infor-row" id="${user._id}"><td>${user.userName}</td><td>e${user.email}</td><td>${user.phone}</td><td>${new Date(user.date).toDateString()}</td><td><span class="btn-delete list-btn">delete</span><span class="list-btn btn-view">view</span></td></tr>`
    ).join("");
    document.querySelector(".user-list").insertAdjacentHTML("afterbegin", marckup);
};
const renderUserData = async function() {
    const usersData = await axios.get("http://localhost:5000/user/", {
        ...state.user
    });
    userlist.innerHTML = "";
    // userResums.innerHTML = "";
    // if (!userResums.classList.contains("hiddenClass"))
    //   userResums.classList.add("hiddenClass");
    state.page = 1;
    state.allData = usersData.data;
    state.searchResult = getSearchResultPage(state.page);
    getAndGenerateMarckup(state.searchResult);
    generatePaginationMarkcup(state.allData.users);
    document.querySelector(".current-users").innerText = state.allData.users.length;
    document.querySelector(".current-cvs").innerText = state.allData.cvs.length;
};
const getTheTemplates = function(data) {
    data.forEach((template)=>{
        let i = 1;
        while(i <= 6){
            if (template.template === `template${i}`) state.user.myTemplates.push(state.userListTemplates[`userTemplate${i}`]);
            i++;
        }
    });
};
btnLogin.addEventListener("click", async function(e) {
    try {
        e.preventDefault();
        const formData = Object.fromEntries([
            ...new FormData(this.closest("form")), 
        ]);
        const { password , email  } = formData;
        if (!email) return document.querySelector(".message2").textContent = "Can not supmit without email";
        state.user.email = email;
        state.user.password = password;
        document.querySelector(".message2").textContent = `please wait...`;
        const res = await axios.post("http://localhost:5000/user/login", {
            ...state.user
        });
        if (res.data.data === "1") {
            document.querySelector(".logAndRegisContainer").classList.add("hiddenClass");
            document.querySelector(".admin-dashboard").classList.remove("hiddenClass");
            renderUserData();
            return console.log("admin");
        }
        const accesstoken = state.user.token = res.data.accesstoken;
        if (!accesstoken) return document.querySelector(".message2").textContent = `${res.data.msg}`;
        let id = state.user.userid = res.data.user._id;
        state.user.siteUserName = res.data.user.userName;
        document.querySelector(".site-user-name").innerText = state.user.siteUserName;
        if (!res.data.user.isVerified) return register(res.data.user);
        document.querySelector(".logAndRegisContainer").classList.add("hiddenClass");
        document.querySelector(".loaderContainer").classList.remove("hiddenClass");
        const resume1 = await axios.post(`http://localhost:5000/resume/:${id}`);
        const templatesRes = await axios.post(`http://localhost:5000/resume/gettemplate/:${id}`);
        userDashBoard.classList.remove("hiddenClass");
        if (resume1.data.cv) {
            state.resumes.push(...resume1.data.cv);
            noResumeInfor.classList.add("hiddenClass");
            state.resumes.forEach((resume)=>{
                state.user.myResumes.push(createPdfMarckup(resume));
            });
            document.querySelector(".no-resume-infor-container").classList.add("hiddenClass");
            state.user.myResumes.forEach((resume)=>myResume.insertAdjacentHTML("beforeend", resume.toString())
            );
        // myResume.innerHTML=[...marckup].join('')
        // myResume.innerHTML= ...marckup.join('');
        // myResume.innerHTML=marckup.join("");
        }
        console.log(state.resumes);
        if (templatesRes.data.templates.length !== 0) {
            state.templates = templatesRes.data.templates;
            getTheTemplates(state.templates);
            noTemplateInor.classList.add("hiddenClass");
            myTemplates.innerHTML = state.user.myTemplates.join("");
        }
        document.querySelector(".loaderContainer").classList.add("hiddenClass");
    } catch (error) {
        console.log(error);
    }
});
const register = async function(user) {
    const res = await axios.post("http://localhost:5000/user/register", {
        ...user
    });
    if (!res.data.accesstoken) return message2.textContent = `${res.data.msg}`;
    document.querySelector(".welcome-message").classList.remove("hiddenClass");
    document.querySelector(".logAndRegisContainer").classList.add("hiddenClass");
};
btnSignup.addEventListener("click", async function(e) {
    e.preventDefault();
    try {
        const formData = Object.fromEntries([
            ...new FormData(this.closest("form")), 
        ]);
        const { password , confirmPassword  } = formData;
        if (password !== confirmPassword) return message2.innerText = "Password did not match";
        state.user = formData;
        register(state.user);
    } catch (error) {
        console.log(error);
    }
});
// templates.addEventListener("click", function (e) {
//   e.preventDefault();
//   htmlParent.style.fontSize = "16px";
//   userDashBoard.style.display = "none";
//   document.querySelector("#cv-form").classList.remove("hiddenClass");
//   let myDivObj = e.target.closest(".template-form").querySelector(".firstPart");
//   templateColor = window.getComputedStyle(myDivObj).backgroundColor;
// });
templates.addEventListener("click", async function(e) {
    if (!e.target.classList.contains("custom-btn")) return console.log("not btn");
    let templateContainer = e.target.closest(".template");
    state.user.template = templateContainer.classList[1];
    const templateData = {
        userid: state.user.userid,
        template: state.user.template
    };
    // templates.classList.add("hiddenClass");
    const res = await axios.post("http://localhost:5000/resume/savetemplate/", {
        templateData
    });
    if (res.data.msg) {
        let messageBox = templateContainer.querySelector(".s7");
        messageBox.style.opacity = "1";
        messageBox.style.left = "0";
        messageBox.style.zIndex = "999";
        setTimeout(()=>{
            messageBox.style.opacity = "0";
            messageBox.style.left = "1000";
            messageBox.style.zIndex = "0";
        }, 2000);
        return console.log(res.data.msg);
    }
    state.templates.push(res.data.result);
    state.user.myTemplates = [];
    myTemplates.classList.remove("hiddenClass");
    getTheTemplates(state.templates);
    myTemplates.innerHTML = state.user.myTemplates.join("");
    noTemplateInor.classList.add("hiddenClass");
    templates.classList.add("hiddenClass");
    sectionName.innerText = "My Templates";
    document.querySelector("#templates").classList.remove("active");
    document.querySelector("#myTemplates").classList.add("active");
});
const allTemplateForms = document.querySelectorAll(".template");
allTemplateForms.forEach((tmf)=>{
    tmf.addEventListener("mouseleave", function(e) {
        let btnUseThis = e.target.closest(".template").querySelector(".custom-btn");
        if (!btnUseThis) return;
        btnUseThis.style.opacity = "0";
        btnUseThis.style.pointerEvents = "auto";
    });
    tmf.addEventListener("mouseenter", function(e) {
        let btnUseThis = e.target.closest(".template").querySelector(".custom-btn");
        if (!btnUseThis) return;
        btnUseThis.style.opacity = "1";
        btnUseThis.style.pointerEvents = "auto";
    });
});
myTemplates.addEventListener("click", function(e) {
    if (e.target.classList.contains(".get-one")) {
        allUserContentChilds.forEach((child)=>{
            if (!child.classList.contains("hiddenClass")) child.classList.add("hiddenClass");
        });
        allUserSiteButtons.forEach((btn)=>{
            if (btn.classList.contains("active")) btn.classList.remove("active");
        });
        templates.classList.remove("hiddenClass");
        document.querySelector(`#${templates.classList[0]}`).classList.add("active");
        return console.log("end of get template button");
    }
    if (e.target.closest(".template")) {
        let templateBtn = e.target.closest(".template").querySelector("button");
        let allUserTemplateButtons = this.querySelectorAll("button");
        allUserTemplateButtons.forEach((btn)=>{
            if (btn.style.opacity === "1") {
                btn.style.pointerEvents = "none";
                btn.style.opacity = "0";
            }
        });
        templateBtn.style.pointerEvents = "auto";
        templateBtn.style.opacity = "1";
        templateBtn.addEventListener("click", function(e) {
            state.templateToUse = this.closest(".template").classList[1];
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            cvFormContainer.classList.add("showIt");
        });
    }
});
// userTemplates = myTemplates.querySelectorAll(".template");
// // userTemplatesButtons.forEach((btn) => console.log(btn));
// userTemplates.forEach(ut=>{
//   ut.addEventListener('click', function(e){
//     console.log(e.target)
// })
// })
image_input.addEventListener("change", async function(e) {
    e.preventDefault();
    try {
        const file = e.target.files[0];
        if (!file) return alert("File not exist.");
        if (file.size > 1048576) return alert("Size too large");
        if (file.type !== "image/jpg" && file.type !== "image/png" && file.type !== "image/jpeg") return alert("File type not supported");
        state.user.file = file;
        let reader = new FileReader();
        reader.onloadend = function() {
            document.getElementById("display_image2").style.backgroundImage = `url(${reader.result})`;
        };
        if (file) reader.readAsDataURL(file);
    } catch (error) {
        console.log(error.message);
    }
});
cvDataForm.addEventListener("click", async function(e) {
    let btn = e.target;
    let newData = "";
    const messageBox = document.querySelector(".s7");
    if (btn.type === "button") {
        newData = [
            ...new FormData(e.target.closest("form"))
        ].filter((val)=>val[1] !== "" && val !== {
            }
        );
        if (newData.length === 0) return console.log("not added");
        messageBox.style.opacity = "1";
        messageBox.style.left = "0";
        if (btn.classList.contains("btnAddEducation")) {
            document.querySelectorAll(".eduInputs").forEach((val)=>val.value = ""
            );
            let eduCol = [];
            newData.forEach((data)=>data[0] !== "certification" && data[1] !== "" && eduCol.push(data)
            );
            eduCol.length !== 0 && state.user.educations.push(eduCol);
        }
        if (btn.classList.contains("btnAddCertification")) {
            document.querySelector(".certInput").value = "";
            state.user.certifications.push(...newData.filter((data)=>data[0] === "certification"
            ));
        }
        if (btn.classList.contains("btnWorkExperience")) {
            document.querySelectorAll(".exInput").forEach((val)=>val.value = ""
            );
            newData.length !== 0 && newData.some((val)=>val[1] !== ""
            ) && state.user.experiences.push(newData);
        }
        if (btn.classList.contains("addskill")) {
            document.querySelector(".skillInput").value = "";
            state.user.skills.push(...newData.filter((val)=>val[0] === "skill"
            ));
        }
        if (btn.classList.contains("addinterest")) {
            document.querySelector(".intInput").value = "";
            state.user.hobies.push(...newData.filter((val)=>val[0] === "interest"
            ));
        }
        if (btn.classList.contains("addrefrence")) {
            document.querySelectorAll(".refInputs").forEach((val)=>val.value = ""
            );
            let refCol = [];
            newData.forEach((val)=>val[0] !== "interest" && val[0] !== "skill" && val[0] !== "profile" && val[1] !== "" && refCol.push(val)
            );
            refCol.length !== 0 && state.user.reffrences.push(refCol);
        }
    }
    newData = "";
    setTimeout(()=>{
        messageBox.style.opacity = "0";
        messageBox.style.left = "1000px";
    }, 1500);
});
toRegister.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector(".register-section").style.left = "40px";
    document.querySelector(".login-section").style.left = "450px";
});
toLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector(".register-section").style.left = "450px";
    document.querySelector(".login-section").style.left = "40px";
});
const useInitial = function(data) {
    return data.split(" ").map((val)=>val[0]
    ).join("").toString().toUpperCase();
};
btnNext1.addEventListener("click", (e)=>{
    e.preventDefault();
    state.user.persData1 = [
        ...new FormData(e.target.closest("form"))
    ];
    s1.querySelector(".fullName").style.borderBottom = "1px solid #999;";
    s1.style.left = "-450px";
    s2.style.left = "40px";
    progress.style.width = "120px";
});
btnback1.addEventListener("click", (e)=>{
    e.preventDefault();
    s2.style.left = "450px";
    s1.style.left = "40px";
    progress.style.width = "60px";
});
btnNext2.addEventListener("click", (e)=>{
    e.preventDefault();
    state.user.persData2 = [
        ...new FormData(e.target.closest("form"))
    ];
    s2.style.left = "-450px";
    s3.style.left = "40px";
    progress.style.width = "180px";
});
btnback2.addEventListener("click", (e)=>{
    e.preventDefault();
    s3.style.left = "450px";
    s2.style.left = "40px";
    progress.style.width = "120px";
});
btnNext3.addEventListener("click", (e)=>{
    e.preventDefault();
    [
        ...new FormData(e.target.closest("form"))
    ].forEach((val)=>val[1] !== "" && state.user.eduData.push(val)
    );
    s3.style.left = "-450px";
    s4.style.left = "40px";
    progress.style.width = "240px";
});
btnback3.addEventListener("click", (e)=>{
    e.preventDefault();
    s4.style.left = "450px";
    s3.style.left = "40px";
    progress.style.width = "180px";
});
btnNext4.addEventListener("click", (e)=>{
    e.preventDefault();
    [
        ...new FormData(e.target.closest("form"))
    ].filter((val)=>val[1] !== "" && state.user.expeData.push(val)
    );
    s4.style.left = "-450px";
    s5.style.left = "40px";
    progress.style.width = "300px";
});
btnback4.addEventListener("click", (e)=>{
    e.preventDefault();
    s5.style.left = "450px";
    s4.style.left = "40px";
    progress.style.width = "240px";
});
btnNext5.addEventListener("click", (e)=>{
    e.preventDefault();
    state.user.socLinks = [
        ...new FormData(e.target.closest("form"))
    ];
    s5.style.left = "-450px";
    s6.style.left = "40px";
    progress.style.width = "100%";
});
btnback5.addEventListener("click", (e)=>{
    s6.style.left = "450px";
    s5.style.left = "40px";
    progress.style.width = "300px";
});
const addTextArea = (e, placeholder, name)=>{
    e.preventDefault();
    let newNode = document.createElement("textarea");
    newNode.setAttribute("name", name);
    newNode.setAttribute("placeholder", placeholder);
    let btnCerobject = this.closest("div").querySelector("button");
    this.closest("div").insertBefore(newNode, btnCerobject);
};
const createPdfMarckup = function(data) {
    let marckup = "";
    if (data.template === "template1") marckup = `<div id="${data._id}" class="template template1">
    <div class="user-name-and-profession">
    <h1 class="user-name">${data.fullName}</h1>
       <p class="profession">${data.profession}</p>
     </div>

       <div class="passportDateOfBirth">
        <div class="passport-box">
        ${data.images ? `<img
          src="${data.images.url}"
          alt=""
          class="passport"
          />` : `<h1 class="initials">${useInitial(data.fullName)}</h1>`} 
        </div>

        <div class="date-of-birth">
          <p class="dateOfBirth">date of birth:</p>
          <p>${data.dateofbirth}</p>
        </div>

      </div>

     <div class="large-content">
     
     ${data.profile ? ` <div class="profile informationContainer">
         <h3 class="inforHeader">Profile</h3>
         <p>
         ${data.profile}  
         </p>
       </div>` : ""}



       ${data.experiences.length !== 0 ? `
         <div class="recent-experience informationContainer">
      <h3 class="inforHeader">Experience</h3>${data.experiences.map((experience)=>{
        return `<div class="experience content-wrapper">
      <div class="start-and-end-date">
          <p class="start">${experience.experiencestarts} to</p>
          <p class="end">${experience.experienceends}</p>
        </div>
        <p class="jobtitle">${experience.jobTitle}</p>
        <p class="experienceOptain">
         ${experience.experience}
        </p>
        <p class="organizationAndAddress">
          ${experience.orgAddress}
        </p>
      </div>`;
    }).join("")}      
      </div>` : ""}
       

${data.educations.length !== 0 ? `
<div class="educational-background informationContainer">
<h3 class="inforHeader">Education</h3>
${data.educations.map((edu)=>{
        return `<div class="education content-wrapper">
  <div class="start-and-end-date">
    <p class="start">${edu.educationstarts} to</p>
    <p class="end">${edu.educationends}</p>
  </div>
  <p class="qualification">${edu.qualification}</p>
  <p class="school-and-address">
  ${edu.eduAndAddress}
  </p>
  </div>
  `;
    }).join("")}
  
  </div>
  ` : ""}


${data.objective.length !== 0 ? `

<div class="objective informationContainer">
<h3 class="inforHeader">Objective</h3>
<p>
  ${data.objective}
  </p>
  </div>
  
` : ""}

${data.certifications.length !== 0 ? `
    <div class="certification informationContainer">
  <h3 class="inforHeader">Certification</h3>
  <ul class="content-wrapper">
  ${data.certifications.map((cert)=>`<li>${cert}</li>`
    ).join("")}
  </ul>
  </div>
  ` : ""}
</div>

<div class="tiny-content">

<div class="contact-information informationContainer">
<h3 class="inforHeader">Contact information</h3>
<div class="content-wrapper">
${data.email ? `<div class="information">
  <p class="inforLabel">Email:</p>
  <p class="inforVal">${data.email}</p>
  </div>
  ` : ""}  
${data.phoneNumber ? ` <div class="information">
  <p class="inforLabel">phone:</p>
  <p class="inforVal">${data.phoneNumber}</p>
  </div>` : ""}
${data.country ? `
  <div class="information">
  <p class="inforLabel">country:</p>
  <p class="inforVal">${data.country}</p>
        </div>` : ""}
         ${data.state ? `
          <div class="information">
          <p class="inforLabel">state:</p>
          <p class="inforVal">${data.state}</p>
          </div>` : ""}
        ${data.city ? `<div class="information">
          <p class="inforLabel">city:</p>
          <p class="inforVal">${data.city}</p>
          </div>` : ""}
        ${data.address ? `<div class="information">
          <p class="inforLabel">address:</p>
          <p class="inforVal">${data.address}</p>
          </div>
          ` : ""}
        ${data.zipCode ? `<div class="information">
          <p class="inforLabel">zipcode:</p>
          <p class="inforVal">${data.zipCode}</p>
        </div>
          ` : ""}
        ${data.idCard ? `    <div class="information">
          <p class="inforLabel">idnumber:</p>
          <p class="inforVal">${data.idCard}</p>
          </div>
          ` : ""}
      </div>

      </div>


       ${data.twitter || data.instagram || data.facebook || data.linkedin ? `
  <div class="social-media-links informationContainer">
  <h3 class="inforHeader">Social media links</h3>
  <div class="content-wrapper">
  ${data.facebook ? `<div class="information">
    <p class="inforLabel">facebook:</p>
    <p class="inforVal">${data.facebook}</p>
    </div>` : ""}
  ${data.instagram ? `<div class="information">
    <p class="inforLabel">instagram:</p>
    <p class="inforVal">${data.instagram}</p>
    </div>` : ""}
  
  ${data.twitter ? `<div class="information">
    <p class="inforLabel">twitter:</p>
    <p class="inforVal">${data.twitter}</p>
    </div>` : ""}
  ${data.linkedin ? `<div class="information">
    <p class="inforLabel">linkedin:</p>
    <p class="inforVal">${data.linkedin}</p>
    </div>` : ""}
  
  </div>
  </div>
  ` : ""}

${data.skills.length !== 0 ? `   <div class="skills informationContainer">
  <h3 class="inforHeader">Skills</h3>
  <ul class="content-wrapper">
  ${data.skills.map((skill)=>`${skill ? `<li>${skill}</li>` : ""}`
    ).join("")}
    </ul>
    </div>
    ` : ""}
       ${data.reffrences.length !== 0 ? `<div class="references informationContainer">
      <h3 class="inforHeader">Refrence</h3>
      ${data.reffrences.map((ref)=>{
        return `
          <div class="reference content-wrapper">
          <p class="refName">${ref.refrenceName}</p>
          <p class="titleandorg">
${ref.referenceTitleAndOrg}
</p>
<p class="email">${ref.refrenceEmail}</p>
</div>
`;
    }).join("")}

        </div>
        ` : ""}
      
      ${data.interest.length !== 0 ? `   <div class="interest informationContainer">
        <h3 class="inforHeader">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest.map((intr)=>`<li>${intr}</li>`
    ).join("")}
        </ul></div>` : ""}
      </div>
        
      </div>
      `;
    if (data.template === "template2") marckup = `  <div id="${data._id}" class="template template2">
    
  <div class="user-name-and-profession">
    <h1 class="user-name">${data.fullName}</h1>
    <p class="profession">${data.profession}</p>
  </div>
  <div class="tiny-content">
       <div class="passportDateOfBirth">
        <div class="passport-box">
        ${data.images ? `<img
          src="${data.images.url}"
          alt=""
          class="passport"
          />` : `<h1 class="initials">${useInitial(data.fullName)}</h1>`} 
        </div>
        <div class="date-of-birth">
          <p class="dateOfBirth">date of birth:</p>
          <p>${data.dateofbirth}</p>
        </div>
      </div>


      <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
      ${data.email ? `<div class="information">
          <p class="inforLabel">Email:</p>
          <p class="inforVal">${data.email}</p>
        </div>
        ` : ""}  
        ${data.phoneNumber ? ` <div class="information">
          <p class="inforLabel">phone:</p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>` : ""}
         ${data.country ? `
          <div class="information">
          <p class="inforLabel">country:</p>
          <p class="inforVal">${data.country}</p>
        </div>` : ""}
         ${data.state ? `
          <div class="information">
          <p class="inforLabel">state:</p>
          <p class="inforVal">${data.state}</p>
        </div>` : ""}
         ${data.city ? `<div class="information">
          <p class="inforLabel">city:</p>
          <p class="inforVal">${data.city}</p>
        </div>` : ""}
        ${data.address ? `<div class="information">
          <p class="inforLabel">address:</p>
          <p class="inforVal">${data.address}</p>
        </div>
          ` : ""}
        ${data.zipCode ? `<div class="information">
          <p class="inforLabel">zipcode:</p>
          <p class="inforVal">${data.zipCode}</p>
        </div>
          ` : ""}
        ${data.idCard ? `    <div class="information">
          <p class="inforLabel">idnumber:</p>
          <p class="inforVal">${data.idCard}</p>
        </div>
      ` : ""}
      </div>
    </div>



      ${data.twitter || data.instagram || data.facebook || data.linkedin ? `
  <div class="social-media-links informationContainer">
  <h3 class="inforHeader">Social media links</h3>
  <div class="content-wrapper">
  ${data.facebook ? `<div class="information">
    <p class="inforLabel">facebook:</p>
    <p class="inforVal">${data.facebook}</p>
    </div>` : ""}
  ${data.instagram ? `<div class="information">
    <p class="inforLabel">instagram:</p>
    <p class="inforVal">${data.instagram}</p>
    </div>` : ""}
  
  ${data.twitter ? `<div class="information">
    <p class="inforLabel">twitter:</p>
    <p class="inforVal">${data.twitter}</p>
    </div>` : ""}
  ${data.linkedin ? `<div class="information">
    <p class="inforLabel">linkedin:</p>
    <p class="inforVal">${data.linkedin}</p>
    </div>` : ""}

  </div>
  </div>
` : ""}

   ${data.skills.length !== 0 ? `   <div class="skills informationContainer">
    <h3 class="inforHeader">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills.map((skill)=>`<li>${skill}</li>`
    ).join("")}
    </ul></div>` : ""}

   ${data.reffrences.length !== 0 ? `
   <div class="references informationContainer">
   <h3 class="inforHeader">Refrence</h3>
      ${data.reffrences.map((ref)=>{
        return `
<div class="reference content-wrapper">
<p class="refName">${ref.refrenceName}</p>
<p class="titleandorg">
${ref.referenceTitleAndOrg}
</p>
<p class="email">${ref.refrenceEmail}</p>
</div>
`;
    }).join("")}

</div>
` : ""}
      ${data.interest.length !== 0 ? `   <div class="interest informationContainer">
        <h3 class="inforHeader">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest.map((intr)=>{
        return `<li>${intr}</li>`;
    }).join("")}
      </ul></div>` : ""}
    </div>
    

    <div class="large-content">
   ${data.profile ? `<div class="profile informationContainer">
         <h3 class="inforHeader">Profile</h3>
         <p>
         ${data.profile}  
         </p>
       </div>
    ` : ""}

    ${data.experiences.length !== 0 ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader">Experience</h3>${data.experiences.map((experience)=>{
        return `<div class="experience content-wrapper">
    <div class="start-and-end-date">
        <p class="start">${experience.experiencestarts} to</p>
        <p class="end">${experience.experienceends}</p>
      </div>
      <p class="jobtitle">${experience.jobTitle}</p>
      <p class="experienceOptain">
       ${experience.experience}
      </p>
      <p class="organizationAndAddress">
        ${experience.orgAddress}
      </p>
    </div>`;
    }).join("")}      
    </div>` : ""}
     

${data.educations.length !== 0 ? `
<div class="educational-background informationContainer">
<h3 class="inforHeader">Education</h3>
${data.educations.map((edu)=>{
        return `<div class="education content-wrapper">
<div class="start-and-end-date">
  <p class="start">${edu.educationstarts} to</p>
  <p class="end">${edu.educationends}</p>
</div>
<p class="qualification">${edu.qualification}</p>
<p class="school-and-address">
${edu.eduAndAddress}
</p>
</div>
`;
    }).join("")}

</div>
` : ""}
${data.certifications.length !== 0 ? `
<div class="certification informationContainer">
    <h3 class="inforHeader">Certification</h3>
    <ul class="content-wrapper">
    ${data.certifications.map((cert)=>`<li>${cert}</li>`
    ).join("")}
    </ul>
    </div>
    ` : ""}
    </div>
    </div>`;
    if (data.template === "template3") marckup = ` <div id="${data._id}" class="template template3"> 
    
    <div class="large-profile">
      <div class="passportDateOfBirth">
        <div class="passport-box">
        ${data.images ? `<img
          src="${data.images.url}"
          alt=""
          class="passport"
          />` : `<h1 class="initials">${useInitial(data.fullName)}</h1>`} 
        </div>
        <div class="date-of-birth">
          <p class="dateOfBirth">date of birth:</p>
          <p>${data.dateofbirth}</p>
        </div>
      </div>

    ${data.profile ? `
      <div class="profile informationContainer">
    <h3 class="inforHeader">Profile</h3>
    <p>
    ${data.profile}  
    </p>
    </div>` : ""}
    
    </div>
    <div class="user-name-and-profession">
    <p class="profession">${data.profession}</p>
       <h1 class="user-name">${data.fullName}</h1>
     </div>


    <div class="tiny-content">

      <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
      ${data.email ? `<div class="information">
          <p class="inforLabel">Email:</p>
          <p class="inforVal">${data.email}</p>
        </div>
        ` : ""}  
        ${data.phoneNumber ? ` <div class="information">
          <p class="inforLabel">phone:</p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>` : ""}
         ${data.country ? `
          <div class="information">
          <p class="inforLabel">country:</p>
          <p class="inforVal">${data.country}</p>
        </div>` : ""}
         ${data.state ? `
          <div class="information">
          <p class="inforLabel">state:</p>
          <p class="inforVal">${data.state}</p>
        </div>` : ""}
         ${data.city ? `<div class="information">
          <p class="inforLabel">city:</p>
          <p class="inforVal">${data.city}</p>
        </div>` : ""}
        ${data.address ? `<div class="information">
          <p class="inforLabel">address:</p>
          <p class="inforVal">${data.address}</p>
        </div>
          ` : ""}
        ${data.zipCode ? `<div class="information">
          <p class="inforLabel">zipcode:</p>
          <p class="inforVal">${data.zipCode}</p>
        </div>
          ` : ""}
        ${data.idCard ? `    <div class="information">
          <p class="inforLabel">idnumber:</p>
          <p class="inforVal">${data.idCard}</p>
        </div>
      ` : ""}
      </div>
    </div>



      ${data.twitter || data.instagram || data.facebook || data.linkedin ? `
  <div class="social-media-links informationContainer">
  <h3 class="inforHeader">Social media links</h3>
  <div class="content-wrapper">
  ${data.facebook ? `<div class="information">
    <p class="inforLabel">facebook:</p>
    <p class="inforVal">${data.facebook}</p>
    </div>` : ""}
  ${data.instagram ? `<div class="information">
    <p class="inforLabel">instagram:</p>
    <p class="inforVal">${data.instagram}</p>
    </div>` : ""}
  
  ${data.twitter ? `<div class="information">
    <p class="inforLabel">twitter:</p>
    <p class="inforVal">${data.twitter}</p>
    </div>` : ""}
  ${data.linkedin ? `<div class="information">
    <p class="inforLabel">linkedin:</p>
    <p class="inforVal">${data.linkedin}</p>
    </div>` : ""}

  </div>
  </div>
` : ""}

   ${data.skills.length !== 0 ? `   <div class="skills informationContainer">
    <h3 class="inforHeader">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills.map((skill)=>`${skill ? `<li>${skill}</li>` : ""}`
    ).join("")}
    </ul>
    </div>
    ` : ""}

       ${data.reffrences.length !== 0 ? `<div class="references informationContainer">
      <h3 class="inforHeader">Refrence</h3>
      ${data.reffrences.filter((val)=>val !== {
        }
    ).map((ref)=>{
        return `
<div class="reference content-wrapper">
<p class="refName">${ref.refrenceName}</p>
<p class="titleandorg">
${ref.referenceTitleAndOrg}
</p>
<p class="email">${ref.refrenceEmail}</p>
</div>
`;
    }).join("")}

</div>
` : ""}

    ${data.interest.length !== 0 ? `   <div class="interest informationContainer">
      <h3 class="inforHeader">Interest</h3>
      <ul class="content-wrapper">
      ${data.interest.map((intr)=>`<li>${intr}</li>`
    ).join("")}
    </ul></div>` : ""}
  </div>
  <div class="large-content">
  ${data.experiences.length !== 0 ? `
  <div class="recent-experience informationContainer">
  <h3 class="inforHeader">Experience</h3>${data.experiences.filter((val)=>val !== {
        }
    ).map((experience)=>{
        return `<div class="experience content-wrapper">
  <div class="start-and-end-date">
      <p class="start">${experience.experiencestarts} to</p>
      <p class="end">${experience.experienceends}</p>
    </div>
    <p class="jobtitle">${experience.jobTitle}</p>
    <p class="experienceOptain">
     ${experience.experience}
    </p>
    <p class="organizationAndAddress">
      ${experience.orgAddress}
    </p>
  </div>`;
    }).join("")}      
  </div>` : ""}
   

${data.educations.length !== 0 ? `
<div class="educational-background informationContainer">
<h3 class="inforHeader">Education</h3>
${data.educations.filter((val)=>val !== {
        }
    ).map((edu)=>{
        return `<div class="education content-wrapper">
<div class="start-and-end-date">
<p class="start">${edu.educationstarts} to</p>
<p class="end">${edu.educationends}</p>
</div>
<p class="qualification">${edu.qualification}</p>
<p class="school-and-address">
${edu.eduAndAddress}
</p>
</div>
`;
    }).join("")}

</div>
` : ""}
      ${data.objective ? `

<div class="objective informationContainer">
<h3 class="inforHeader">Objective</h3>
<p>
  ${data.objective}
</p>
</div>

` : ""}

       ${data.certifications.length !== 0 ? `<div class="certification informationContainer">
    <h3 class="inforHeader">Certification</h3>
    <ul class="content-wrapper">
    ${data.certifications.map((cert)=>`<li>${cert}</li>`
    ).join("")}
    </ul>
    </div>
    ` : ""}
    </div>
  </div>`;
    if (data.template === "template4") marckup = ` <div id="${data._id}" class="template template4">
    
    <div class="contact-information informationContainer">

      <div class="contact-container">
      <div class="content-wrapper">
      ${data.email ? `<div class="information">
          <p class="inforLabel">Email:</p>
          <p class="inforVal">${data.email}</p>
        </div>
        ` : ""}  
        ${data.phoneNumber ? ` <div class="information">
          <p class="inforLabel">phone:</p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>` : ""}
         ${data.country ? `
          <div class="information">
          <p class="inforLabel">country:</p>
          <p class="inforVal">${data.country}</p>
        </div>` : ""}
         ${data.state ? `
          <div class="information">
          <p class="inforLabel">state:</p>
          <p class="inforVal">${data.state}</p>
        </div>` : ""}
         </div>
        
         <div class="content-wrapper secondContent">
         ${data.city ? `<div class="information">
          <p class="inforLabel">city:</p>
          <p class="inforVal">${data.city}</p>
        </div>` : ""}
        ${data.address ? `<div class="information">
          <p class="inforLabel">address:</p>
          <p class="inforVal">${data.address}</p>
        </div>
          ` : ""}
        ${data.zipCode ? `<div class="information">
          <p class="inforLabel">zipcode:</p>
          <p class="inforVal">${data.zipCode}</p>
        </div>
          ` : ""}
        ${data.idCard ? `    <div class="information">
          <p class="inforLabel">idnumber:</p>
          <p class="inforVal">${data.idCard}</p>
        </div>
      ` : ""}
        </div>
      </div>
    </div>
   

    <div class="user-name-and-profession">
   
      <div class="passportDateOfBirth">
        <div class="passport-box">
        ${data.images ? `<img
          src="${data.images.url}"
          alt=""
          class="passport"
          />` : `<h1 class="initials">${useInitial(data.fullName)}</h1>`} 
        </div>
        <div class="date-of-birth">
          <p class="dateOfBirth">date of birth:</p>
          <p>${data.dateofbirth}</p>
        </div>
      </div>

      
      <h1 class="user-name">${data.fullName}</h1>
      <p class="profession">${data.profession}</p>
    
    </div>

    <div class="tiny-content">
    ${data.objective ? `
  
    <div class="objective informationContainer">
    <h3 class="inforHeader">Objective</h3>
    <p>
      ${data.objective}
    </p>
    </div>
    
    ` : ""}

      ${data.twitter || data.instagram || data.facebook || data.linkedin ? `
  <div class="social-media-links informationContainer">
  <h3 class="inforHeader">Social media links</h3>
  <div class="content-wrapper">
  ${data.facebook ? `<div class="information">
    <p class="inforLabel">facebook:</p>
    <p class="inforVal">${data.facebook}</p>
    </div>` : ""}
  ${data.instagram ? `<div class="information">
    <p class="inforLabel">instagram:</p>
    <p class="inforVal">${data.instagram}</p>
    </div>` : ""}
  
  ${data.twitter ? `<div class="information">
    <p class="inforLabel">twitter:</p>
    <p class="inforVal">${data.twitter}</p>
    </div>` : ""}
  ${data.linkedin ? `<div class="information">
    <p class="inforLabel">linkedin:</p>
    <p class="inforVal">${data.linkedin}</p>
    </div>` : ""}

  </div>
  </div>
` : ""}

   ${data.skills.length !== 0 ? `   <div class="skills informationContainer">
    <h3 class="inforHeader">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills.map((skill)=>`${skill ? `<li>${skill}</li>` : ""}`
    ).join("")}
    </ul>
    </div>
    ` : ""}

       ${data.reffrences.length !== 0 ? `<div class="references informationContainer">
      <h3 class="inforHeader">Refrence</h3>
      ${data.reffrences.map((ref)=>{
        return `
<div class="reference content-wrapper">
<p class="refName">${ref.refrenceName}</p>
<p class="titleandorg">
${ref.referenceTitleAndOrg}
</p>
<p class="email">${ref.refrenceEmail}</p>
</div>
`;
    }).join("")}

</div>
` : ""}
       ${data.interest.length !== 0 ? `   <div class="interest informationContainer">
        <h3 class="inforHeader">Interest</h3>
        <ul class="content-wrapper">
        ${data.interest.map((intr)=>`<li>${intr}</li>`
    ).join("")}
      </ul></div>` : ""}
    </div>

    <div class="large-content">
    ${data.profile ? `
      <div class="profile informationContainer">
    <h3 class="inforHeader">Profile</h3>
    <p>
    ${data.profile}  
    </p>
    </div>` : ""}

    ${data.experiences.length !== 0 ? `
    <div class="recent-experience informationContainer">
    <h3 class="inforHeader">Experience</h3>${data.experiences.map((experience)=>{
        return `<div class="experience content-wrapper">
    <div class="start-and-end-date">
        <p class="start">${experience.experiencestarts} to</p>
        <p class="end">${experience.experienceends}</p>
      </div>
      <p class="jobtitle">${experience.jobTitle}</p>
      <p class="experienceOptain">
       ${experience.experience}
      </p>
      <p class="organizationAndAddress">
        ${experience.orgAddress}
      </p>
    </div>`;
    }).join("")}      
    </div>` : ""}
   
  
    ${data.educations.length !== 0 ? `
  
    <div class="educational-background informationContainer">
    <h3 class="inforHeader">Education</h3>
    ${data.educations.map((edu)=>{
        return `<div class="education content-wrapper">
      <div class="start-and-end-date">
        <p class="start">${edu.educationstarts} to</p>
        <p class="end">${edu.educationends}</p>
      </div>
      <p class="qualification">${edu.qualification}</p>
      <p class="school-and-address">
      ${edu.eduAndAddress}
      </p>
    </div>
    `;
    }).join("")}
  </div>
    ` : ""}
    
  
    
    ${data.certifications.length !== 0 ? `<div class="certification informationContainer">
      <h3 class="inforHeader">Certification</h3>
      <ul class="content-wrapper">
      ${data.certifications.map((cert)=>`<li>${cert}</li>`
    ).join("")}
      </ul>
      </div>
      ` : ""}
    </div>
  </div>
`;
    if (data.template === "template5") marckup = `
    
    <div id="${data._id}" class="template template5">
      <div class="tiny-content">     

        <div class="passportDateOfBirth">
        <div class="passport-box">
        ${data.images ? `<img
          src="${data.images.url}"
          alt=""
          class="passport"
          />` : `<h1 class="initials">${useInitial(data.fullName)}</h1>`} 
        </div>
        <div class="date-of-birth">
          <p class="dateOfBirth">date of birth:</p>
          <p>${data.dateofbirth}</p>
        </div>
      </div>
 
      <div class="contact-information informationContainer">
      <h3 class="inforHeader">Contact information</h3>
      <div class="content-wrapper">
      ${data.email ? `<div class="information">
          <p class="inforLabel">Email:</p>
          <p class="inforVal">${data.email}</p>
        </div>
        ` : ""}  
        ${data.phoneNumber ? ` <div class="information">
          <p class="inforLabel">phone:</p>
          <p class="inforVal">${data.phoneNumber}</p>
        </div>` : ""}
         ${data.country ? `
          <div class="information">
          <p class="inforLabel">country:</p>
          <p class="inforVal">${data.country}</p>
        </div>` : ""}
         ${data.state ? `
          <div class="information">
          <p class="inforLabel">state:</p>
          <p class="inforVal">${data.state}</p>
        </div>` : ""}
         ${data.city ? `<div class="information">
          <p class="inforLabel">city:</p>
          <p class="inforVal">${data.city}</p>
        </div>` : ""}
        ${data.address ? `<div class="information">
          <p class="inforLabel">address:</p>
          <p class="inforVal">${data.address}</p>
        </div>
          ` : ""}
        ${data.zipCode ? `<div class="information">
          <p class="inforLabel">zipcode:</p>
          <p class="inforVal">${data.zipCode}</p>
        </div>
          ` : ""}
        ${data.idCard ? `    <div class="information">
          <p class="inforLabel">idnumber:</p>
          <p class="inforVal">${data.idCard}</p>
        </div>
      ` : ""}
      </div>
    </div>

${data.twitter || data.instagram || data.facebook || data.linkedin ? `
  <div class="social-media-links informationContainer">
  <h3 class="inforHeader">Social media links</h3>
  <div class="content-wrapper">
  ${data.facebook ? `<div class="information">
    <p class="inforLabel">facebook:</p>
    <p class="inforVal">${data.facebook}</p>
    </div>` : ""}
  ${data.instagram ? `<div class="information">
    <p class="inforLabel">instagram:</p>
    <p class="inforVal">${data.instagram}</p>
    </div>` : ""}
  
  ${data.twitter ? `<div class="information">
    <p class="inforLabel">twitter:</p>
    <p class="inforVal">${data.twitter}</p>
    </div>` : ""}
  ${data.linkedin ? `<div class="information">
    <p class="inforLabel">linkedin:</p>
    <p class="inforVal">${data.linkedin}</p>
    </div>` : ""}

  </div>
  </div>
` : ""}
  ${data.skills.length !== 0 ? `   <div class="skills informationContainer">
    <h3 class="inforHeader">Skills</h3>
    <ul class="content-wrapper">
    ${data.skills.map((skill)=>`${skill ? `<li>${skill}</li>` : ""}`
    ).join("")}
    </ul>
    </div>
    ` : ""}
  

    ${data.reffrences.length !== 0 ? `<div class="references informationContainer">
      <h3 class="inforHeader">Refrence</h3>
      ${data.reffrences.map((ref)=>{
        return `
<div class="reference content-wrapper">
<p class="refName">${ref.refrenceName}</p>
<p class="titleandorg">
${ref.referenceTitleAndOrg}
</p>
<p class="email">${ref.refrenceEmail}</p>
</div>
`;
    }).join("")}

</div>
` : ""}
    ${data.interest.length !== 0 ? `   <div class="interest informationContainer">
      <h3 class="inforHeader">Interest</h3>
      <ul class="content-wrapper">
      ${data.interest.map((intr)=>`<li>${intr}</li>`
    ).join("")}
      </ul>
    </div>
      ` : ""}
      </div>

  <div class="large-content">
    <div class="user-name-and-profession">
      <h1 class="user-name">${data.fullName}</h1>
      <p class="profession">${data.profession}</p>
    </div>
    ${data.profile ? `
      <div class="profile informationContainer">
    <h3 class="inforHeader">Profile</h3>
    <p>
    ${data.profile}  
    </p>
  </div>` : ""}

  ${data.experiences.length !== 0 ? `
  <div class="recent-experience informationContainer">
  <h3 class="inforHeader">Experience</h3>${data.experiences.map((experience)=>{
        console.log(Object.keys(experience).length === 0);
        return `${Object.keys(experience).length !== 0 ? `<div class="experience content-wrapper">
  <div class="start-and-end-date">
      <p class="start">${experience.experiencestarts} to</p>
      <p class="end">${experience.experienceends}</p>
    </div>
    <p class="jobtitle">${experience.jobTitle}</p>
    <p class="experienceOptain">
     ${experience.experience}
    </p>
    <p class="organizationAndAddress">
      ${experience.orgAddress}
    </p>
  </div>` : ""}`;
    }).join("")}      
  </div>` : ""}
 

  ${data.educations.length !== 0 ? `

  <div class="educational-background informationContainer">
  <h3 class="inforHeader">Education</h3>
  ${data.educations.map((edu)=>{
        return `<div class="education content-wrapper">
    <div class="start-and-end-date">
      <p class="start">${edu.educationstarts} to</p>
      <p class="end">${edu.educationends}</p>
    </div>
    <p class="qualification">${edu.qualification}</p>
    <p class="school-and-address">
    ${edu.eduAndAddress}
    </p>
  </div>
  `;
    }).join("")}
</div>
  ` : ""}
  

  ${data.objective ? `

  <div class="objective informationContainer">
  <h3 class="inforHeader">Objective</h3>
  <p>
    ${data.objective}
  </p>
  </div>
  
  ` : ""}
  ${data.certifications.length !== 0 ? `<div class="certification informationContainer">
    <h3 class="inforHeader">Certification</h3>
    <ul class="content-wrapper">
    ${data.certifications.map((cert)=>`<li>${cert}</li>`
    ).join("")}
    </ul>
    </div>
    ` : ""}
      </div>
    </div>
`;
    if (data.template === "template6") marckup = `   <div id="${data._id}" class="template template6">
    
    <div class="user-name-and-profession">
    <h1 class="user-name">${data.fullName}</h1>
    <p class="profession">${data.profession}</p>
  </div>
    <div class="large-content">
    ${data.profile ? `
      <div class="profile informationContainer">
    <h3 class="inforHeader">Profile</h3>
    <p>
    ${data.profile}  
    </p>
  </div>` : ""}

  ${data.experiences.length !== 0 ? `
  <div class="recent-experience informationContainer">
  <h3 class="inforHeader">Experience</h3>${data.experiences.map((experience)=>{
        return `${Object.keys(experience).length !== 0 ? `<div class="experience content-wrapper">
  <div class="start-and-end-date">
      <p class="start">${experience.experiencestarts} to</p>
      <p class="end">${experience.experienceends}</p>
    </div>
    <p class="jobtitle">${experience.jobTitle}</p>
    <p class="experienceOptain">
     ${experience.experience}
    </p>
    <p class="organizationAndAddress">
      ${experience.orgAddress}
    </p>
  </div>` : ""}`;
    }).join("")}      
  </div>` : ""}
 

  ${data.educations.length !== 0 ? `

  <div class="educational-background informationContainer">
  <h3 class="inforHeader">Education</h3>
  ${data.educations.map((edu)=>{
        return `<div class="education content-wrapper">
    <div class="start-and-end-date">
      <p class="start">${edu.educationstarts} to</p>
      <p class="end">${edu.educationends}</p>
    </div>
    <p class="qualification">${edu.qualification}</p>
    <p class="school-and-address">
    ${edu.eduAndAddress}
    </p>
  </div>
  `;
    }).join("")}
</div>
  ` : ""}
  

  ${data.objective ? `

  <div class="objective informationContainer">
  <h3 class="inforHeader">Objective</h3>
  <p>
    ${data.objective}
  </p>
  </div>
  
  ` : ""}
  ${data.certifications.length !== 0 ? `<div class="certification informationContainer">
    <h3 class="inforHeader">Certification</h3>
    <ul class="content-wrapper">
    ${data.certifications.map((cert)=>`<li>${cert}</li>`
    ).join("")}
    </ul>
    </div>
    ` : ""}
    </div>

    <div class="tiny-content">
    <div class="contact-information informationContainer">
    <h3 class="inforHeader">Contact information</h3>
    <div class="content-wrapper">
    ${data.email ? `<div class="information">
        <p class="inforLabel">Email:</p>
        <p class="inforVal">${data.email}</p>
      </div>
      ` : ""}  
      ${data.phoneNumber ? ` <div class="information">
        <p class="inforLabel">phone:</p>
        <p class="inforVal">${data.phoneNumber}</p>
      </div>` : ""}
       ${data.country ? `
        <div class="information">
        <p class="inforLabel">country:</p>
        <p class="inforVal">${data.country}</p>
      </div>` : ""}
       ${data.state ? `
        <div class="information">
        <p class="inforLabel">state:</p>
        <p class="inforVal">${data.state}</p>
      </div>` : ""}
       ${data.city ? `<div class="information">
        <p class="inforLabel">city:</p>
        <p class="inforVal">${data.city}</p>
      </div>` : ""}
      ${data.address ? `<div class="information">
        <p class="inforLabel">address:</p>
        <p class="inforVal">${data.address}</p>
      </div>
        ` : ""}
      ${data.zipCode ? `<div class="information">
        <p class="inforLabel">zipcode:</p>
        <p class="inforVal">${data.zipCode}</p>
      </div>
        ` : ""}
      ${data.idCard ? `    <div class="information">
        <p class="inforLabel">idnumber:</p>
        <p class="inforVal">${data.idCard}</p>
      </div>
    ` : ""}
    </div>
  </div>

${data.twitter || data.instagram || data.facebook || data.linkedin ? `
<div class="social-media-links informationContainer">
<h3 class="inforHeader">Social media links</h3>
<div class="content-wrapper">
${data.facebook ? `<div class="information">
  <p class="inforLabel">facebook:</p>
  <p class="inforVal">${data.facebook}</p>
  </div>` : ""}
${data.instagram ? `<div class="information">
  <p class="inforLabel">instagram:</p>
  <p class="inforVal">${data.instagram}</p>
  </div>` : ""}

${data.twitter ? `<div class="information">
  <p class="inforLabel">twitter:</p>
  <p class="inforVal">${data.twitter}</p>
  </div>` : ""}
${data.linkedin ? `<div class="information">
  <p class="inforLabel">linkedin:</p>
  <p class="inforVal">${data.linkedin}</p>
  </div>` : ""}

</div>
</div>
` : ""}
${data.skills.length !== 0 ? `   <div class="skills informationContainer">
  <h3 class="inforHeader">Skills</h3>
  <ul class="content-wrapper">
  ${data.skills.map((skill)=>`${skill ? `<li>${skill}</li>` : ""}`
    ).join("")}
  </ul>
  </div>
  ` : ""}


  ${data.reffrences.length !== 0 ? `<div class="references informationContainer">
    <h3 class="inforHeader">Refrence</h3>
    ${data.reffrences.map((ref)=>{
        return `
<div class="reference content-wrapper">
<p class="refName">${ref.refrenceName}</p>
<p class="titleandorg">
${ref.referenceTitleAndOrg}
</p>
<p class="email">${ref.refrenceEmail}</p>
</div>
`;
    }).join("")}

</div>
` : ""}
  ${data.interest.length !== 0 ? `   <div class="interest informationContainer">
    <h3 class="inforHeader">Interest</h3>
    <ul class="content-wrapper">
    ${data.interest.map((intr)=>`<li>${intr}</li>`
    ).join("")}
    </ul>
  </div>
    ` : ""}
      
      <div class="passportDateOfBirth">
      <div class="passport-box">
      ${data.images ? `<img
        src="${data.images.url}"
        alt=""
        class="passport"
        />` : `<h1 class="initials">${useInitial(data.fullName)}</h1>`} 
      </div>
      <div class="date-of-birth">
        <p class="dateOfBirth">date of birth:</p>
        <p>${data.dateofbirth}</p>
      </div>
    </div>

    </div>
  </div>`;
    return marckup;
};
const iterableData = function(itrData) {
    return itrData.map((valData)=>`<li>${valData}</li>`
    ).join("");
};
const getSearchResultPage = function(page) {
    state.page = page;
    let start = (page - 1) * 8;
    let end = page * 8;
    //returning a certain page to be rendered
    return state.allData.users.slice(start, end);
};
//pagination
const paginationMarckup = function(searchResult) {
    let curPage = state.page;
    let numberOfUsers = 8;
    const numPages = Math.ceil(searchResult.length / numberOfUsers);
    // if(this._data.page===1 && numPages>1) return '1 and other pages';
    // if(this._data.page===numPages && numPages>1) return 'last page';
    // if(this._data<numPages)return "other page"
    // if(this._data===numPages && numPages===1)return 'only one page'
    const preMarckup = `<button class="btn--inline pagination__btn--prev" data-goto="${curPage - 1}">< Page ${curPage - 1}</button>`;
    const nextMarckup = `<button class="btn--inline pagination__btn--next" data-goto="${curPage + 1}">Page ${curPage + 1} ></button> `;
    if (curPage === 1 && numPages > 1) return nextMarckup;
    if (curPage === numPages && numPages > 1) return preMarckup;
    if (curPage < numPages) return `${preMarckup}${nextMarckup}
  `;
    return "";
};
const generatePaginationMarkcup = function(val) {
    paginationBox.innerHTML = "";
    paginationBox.insertAdjacentHTML("afterbegin", paginationMarckup(val));
};
document.querySelector(".pagination").addEventListener("click", function(e) {
    const btn = e.target.closest(".btn--inline");
    if (!btn) return;
    //console.log(document.querySelector('.user-list'))
    this.innerHTML = "";
    let userlist1 = document.querySelector(".user-list");
    userlist1.innerHTML = "";
    const gotoPage = Number(btn.dataset.goto);
    state.searchResult = getSearchResultPage(gotoPage);
    getAndGenerateMarckup(state.searchResult);
    generatePaginationMarkcup(state.allData.users);
});

},{}]},["jWVwA","6rimH"], "6rimH", "parcelRequire4bbb")

//# sourceMappingURL=index.8cfc62b9.js.map
