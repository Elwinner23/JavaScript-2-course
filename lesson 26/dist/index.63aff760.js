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
})({"3Hl15":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"adjPd":[function(require,module,exports) {
// import { cardValidator } from './index.js';
// import{ detectCardType, validateCVVORCVCCode, validateExpirationDate, validateCreditCardNumber } from "./node_modules/card-validator-utils/index.js";
var _creditcardJs = require("creditcard.js");
(0, _creditcardJs.isValid)("4916108926268679"); // returns true
(0, _creditcardJs.isExpirationDateValid)("02", "2020"); // returns true
(0, _creditcardJs.isSecurityCodeValid)("4556603578296676", "250"); // returns true
(0, _creditcardJs.getCreditCardNameByNumber)("4539578763621486"); // returns 'Visa'
let inputCarta = document.getElementById("nomer");
inputCarta.addEventListener("input", function(e) {
    const inputText = e.target.value.replaceAll(" ", "").replace(/\D/g, "").slice(0, 16);
    const formattedText = inputText.replace(/(.{4})/g, "$1 ");
    e.target.value = formattedText.trim();
    if (formattedText.length < 20) e.target.style.border = "2px solid red";
    else e.target.style.border = "none";
    if (formattedText.length > 5) {
        let cardInfo = new CardInfo(formattedText, {
            banksLogosPath: "./node_modules/card-info/dist/banks-logos/",
            brandsLogosPath: "./node_modules/card-info/dist/brands-logos/"
        });
        console.log(cardInfo.bankName);
        console.log(cardInfo.brandLogo);
        document.querySelector(".imagee").style.backgroundImage = `url(${cardInfo.brandLogo})`;
    }
// let cardValid = cardValidator(formattedText);
//   if (cardValid) {
//     console.log('Валидна');
//   } else {
//     console.log('Не валидна');
//   }
});
let inputsrok = document.getElementById("one");
inputsrok.addEventListener("input", function(e) {
    const inputText = e.target.value.replaceAll(" ", "").replace(/\D/g, "").slice(0, 4);
    const formattedText = inputText.replace(/(.{2})/g, "$1/");
    e.target.value = formattedText.trim();
    if (formattedText.length < 5) e.target.style.border = "2px solid red";
    else e.target.style.border = "none";
});
let inputKod = document.getElementById("two");
inputKod.addEventListener("input", function(e) {
    const inputText = e.target.value.replaceAll(" ", "").replace(/\D/g, "").slice(0, 3);
    const formattedText = inputText.replace(/(.{0})/g, "$1");
    e.target.value = formattedText.trim();
    if (formattedText.length < 3) e.target.style.border = "2px solid red";
    else e.target.style.border = "none";
});
const email_regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function isEmailValid(value) {
    return email_regexp.test(value);
}
const email = document.getElementById("email");
email.addEventListener("input", function(e) {
    if (isEmailValid(email.value)) email.style.border = "none";
    else email.style.border = "2px solid red";
});
const button = document.querySelector("button");
function checkConditions() {
    if (inputCarta.value.length >= 15 && inputsrok.value.length >= 4 && inputKod.value.length === 3 && email.style.border === "none") {
        button.style.color = "black";
        button.style.backgroundColor = "yellow";
    } else button.style.backgroundColor = "";
}
email.addEventListener("input", checkConditions);
inputKod.addEventListener("input", checkConditions);
inputsrok.addEventListener("input", checkConditions);
inputCarta.addEventListener("input", checkConditions);
// import { isValid,isExpirationDateValid,isSecurityCodeValid,getCreditCardNameByNumber } from './node_modules/creditcard.js/dist/creditcard.js';
inputsrok.addEventListener("input", function() {
    const inputValue = inputsrok.value;
    const [month, year] = inputValue.split("/");
    const numericMonth = Number(month);
    const numericYear = Number(year);
    const isValid = (0, _creditcardJs.isExpirationDateValid)(numericMonth, numericYear);
    console.log("\u041C\u0435\u0441\u044F\u0446:", numericMonth);
    console.log("\u0413\u043E\u0434:", numericYear);
    console.log("\u0414\u0430\u0442\u0430 \u0432\u0430\u043B\u0438\u0434\u043D\u0430", isValid);
});
inputCarta.addEventListener("input", function() {
    const number = inputCarta.value;
    const isValid = isValidCardNumber(number);
    let cardName = "";
    if (isValid) cardName = (0, _creditcardJs.getCreditCardNameByNumber)(number);
    //
    console.log("\u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B:", number);
    console.log("\u0412\u0430\u043B\u0438\u0434\u0435\u043D", isValid);
    console.log("\u0418\u043C\u044F \u043A\u0430\u0440\u0442\u044B:", cardName);
});

},{"creditcard.js":"lyHGp"}],"lyHGp":[function(require,module,exports) {
/**
 * @name creditcard.js 3.0.32
 * @license MIT
 * @author ContaAzul (contaazul.com)
 */ (function(g, f) {
    f(exports);
})(this, function(exports1) {
    "use strict";
    var CARDS = [
        {
            name: "Banescard",
            bins: /^(603182)[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: "Maxxvan",
            bins: /^(603182)[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: "Cabal",
            bins: /^(604324|604330|604337|604203|604338)[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: "GoodCard",
            bins: /^(606387|605680|605674|603574)[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: "Elo",
            bins: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(6509[0-9])|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}/,
            codeLength: 3
        },
        {
            name: "Diners",
            bins: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            codeLength: 3
        },
        {
            name: "Discover",
            bins: /^6(?:011|5[0-9]{2}|4[4-9][0-9]{1}|(22(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[01][0-9]|92[0-5]$)[0-9]{10}$))[0-9]{12}$/,
            codeLength: 4
        },
        {
            name: "Amex",
            bins: /^3[47][0-9]{13}$/,
            codeLength: 4
        },
        {
            name: "Aura",
            bins: /^50[0-9]{14,17}$/,
            codeLength: 3
        },
        {
            name: "Mastercard",
            bins: /^(603136|603689|608619|606200|603326|605919|608783|607998|603690|604891|603600|603134|608718|603680|608710|604998)|(5[1-5][0-9]{14}|2221[0-9]{12}|222[2-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[01][0-9]{13}|2720[0-9]{12})$/,
            codeLength: 3
        },
        {
            name: "Visa",
            bins: /^4[0-9]{12}(?:[0-9]{3})?$/,
            codeLength: 3
        },
        {
            name: "Hipercard",
            bins: /^(38[0-9]{17}|60[0-9]{14})$/,
            codeLength: 3
        },
        {
            name: "JCB",
            bins: /^(?:2131|1800|35\d{3})\d{11}$/,
            codeLength: 3
        }
    ];
    var MILLENNIUM = 1000;
    var DEFAULT_CODE_LENGTH = 3;
    var getCreditCardNameByNumber = function getCreditCardNameByNumber(number) {
        return findCreditCardObjectByNumber(number).name || "Credit card is invalid!";
    };
    var isSecurityCodeValid = function isSecurityCodeValid(creditCardNumber, securityCode) {
        var numberLength = getCreditCardCodeLengthByNumber(creditCardNumber);
        return new RegExp("^[0-9]{".concat(numberLength, "}$")).test(securityCode);
    };
    var isExpirationDateValid = function isExpirationDateValid(month, year) {
        return isValidMonth(month) && isValidYear(year) && isFutureOrPresentDate(month, year);
    };
    var isValid = function isValid(number) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var cards = options.cards;
        var rawNumber = removeNonNumbersCaracteres(number);
        if (hasSomeInvalidDigit(number) || !hasCorrectLength(rawNumber)) return false;
        var sum = sumNumber(rawNumber);
        return checkSum(sum) && validateCardsWhenRequired(number, cards);
    };
    function validateCardsWhenRequired(number, cards) {
        return !cards || !cards.length || validateCards(number, cards);
    }
    function validateCards(number, cards) {
        return areCardsSupported(cards) && cards.map(function(c) {
            return c.toLowerCase();
        }).includes(getCreditCardNameByNumber(number).toLowerCase());
    }
    function hasCorrectLength(number) {
        return number && number.length <= 19;
    }
    function removeNonNumbersCaracteres(number) {
        return number.replace(/\D/g, "");
    }
    function hasSomeInvalidDigit(creditcardNumber) {
        var invalidDigits = new RegExp("[^0-9- ]");
        return invalidDigits.test(creditcardNumber);
    }
    function checkSum(sum) {
        return sum > 0 && sum % 10 === 0;
    }
    function areCardsSupported(passedCards) {
        var supportedCards = CARDS.map(function(c) {
            return c.name.toLowerCase();
        });
        return passedCards.every(function(c) {
            return supportedCards.includes(c.toLowerCase());
        });
    }
    function findCreditCardObjectByNumber(number) {
        if (!number) return {};
        var numberOnly = number.replace(/[^\d]/g, "");
        return CARDS.find(function(card) {
            return card.bins.test(numberOnly) && card;
        }) || {};
    }
    function getCreditCardCodeLengthByNumber(number) {
        return findCreditCardObjectByNumber(number).codeLength || DEFAULT_CODE_LENGTH;
    }
    function isValidMonth(month) {
        return !isNaN(month) && month >= 1 && month <= 12;
    }
    function isValidYear(year) {
        return !isNaN(year) && isValidFullYear(formatFullYear(year));
    }
    function formatFullYear(year) {
        if (year.length === 2) return dateRange(year);
        return year.length === 4 ? year : 0;
    }
    function dateRange() {
        var increaseYear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var year = parseInt(increaseYear);
        var today = new Date();
        return Math.floor(today.getFullYear() / MILLENNIUM) * MILLENNIUM + year;
    }
    function isValidFullYear(year) {
        return year >= dateRange() && year <= dateRange(MILLENNIUM);
    }
    function isFutureOrPresentDate(month, year) {
        var fullYear = formatFullYear(year);
        var currentDate = new Date();
        var expirationDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear(), currentDate.getMonth(), 1);
        expirationDate.setFullYear(fullYear, month - 1, 1);
        return currentDate <= expirationDate;
    }
    function sumNumber(number) {
        var computed = [
            0,
            2,
            4,
            6,
            8,
            1,
            3,
            5,
            7,
            9
        ];
        var sum = 0;
        var digit = 0;
        var i = number.length;
        var even = true;
        while(i--){
            digit = Number(number[i]);
            sum += (even = !even) ? computed[digit] : digit;
        }
        return sum;
    }
    exports1.getCreditCardNameByNumber = getCreditCardNameByNumber;
    exports1.isExpirationDateValid = isExpirationDateValid;
    exports1.isSecurityCodeValid = isSecurityCodeValid;
    exports1.isValid = isValid;
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
});

},{}]},["3Hl15","adjPd"], "adjPd", "parcelRequire94c2")

//# sourceMappingURL=index.63aff760.js.map
