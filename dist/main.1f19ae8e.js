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
})({"main.js":[function(require,module,exports) {
$(document).ready(function () {
  var portfolioItems = $('.portfolio-overlay');
  var servicesContentColumnIds = document.querySelectorAll('.services__content-column h2');
  var faqQuestion = $('.faq__question');

  var showToggle = function showToggle(els) {
    $(els).each(function (i, el) {
      $(el).click(function (evt) {
        var siblings = $(evt.currentTarget).siblings().find('p');
        siblings.each(function (i, el) {
          $(el).hide();
        });
        var text = $(evt.currentTarget).find('p');

        if (text.css('display') == 'block') {
          text.fadeOut('fast');
        } else {
          text.fadeIn('fast');
        }

        evt.stopPropagation();
      });
    });
  };

  var scrollSpyContainer = $('.scrollspy li');

  var scrollSpyAction = function scrollSpyAction(scrollSpyContainer) {
    scrollSpyContainer.each(function (i, el) {
      $(el).on('click', function (evt) {
        var link = $(evt.currentTarget).find('a');
        var href = link.attr('href');
        $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 500);
      });
    });
  };

  portfolioItems.each(function (i, el) {
    $(el).click(function (evt) {
      var target = evt.currentTarget;
      $('.underlay').fadeIn();
      $(el).find('.portfolio-content').fadeIn();
      $(el).find('ion-icon').fadeIn();
      $('html').css('overflow-y', 'hidden');
      evt.stopPropagation();
    });
    $(el).find('ion-icon').click(function (evt) {
      var target = evt.currentTarget;
      $('.underlay').fadeOut();
      $(target).fadeOut();
      $(el).find('.portfolio-content').fadeOut();
      $('html').css('overflow-y', 'scroll');
      evt.stopPropagation();
    });
    $('.underlay').click(function (evt) {
      var target = evt.currentTarget;
      $(target).fadeOut();
      $('.portfolio-content').fadeOut();
      $('.portfolio-content').find('ion-icon').fadeOut();
      $('html').css('overflow-y', 'scroll');
      evt.stopPropagation();
    });
  });
  $('#canvasOne').attr('width', window.innerWidth);
  $('#canvasOne').attr('height', window.innerHeight);

  var servicesDropdown = function servicesDropdown() {
    var activeIndex = 0;
    var servicesContent = $('.services__content');
    var dropdownButtons = $('.services__buttons h2');
    var activeDropdown = $('.services__content.active-service');
    dropdownButtons.each(function (i, el) {
      $(el).on('click', function (evt) {
        var element = $(evt.currentTarget).parent();
        element.addClass('active-service');
        var siblings = element.siblings();
        siblings.removeClass('active-service');
        activeIndex = i; // Set the content to the current active element

        servicesContent.each(function (i, el) {
          var siblings = $(el).siblings();
          siblings.removeClass('active-content');

          if (i == activeIndex) {
            // Event loop will remove the classes after they were added 
            // thus not showing the correct elements
            setTimeout(function () {
              $(el).addClass('active-content');
            }, 0);
          }
        });
      });
    });
  };

  var navbarResponsive = function navbarResponsive() {
    var navbar = $('.navbar__responsive__left').find('.hamburger');
    var navbarLayout = $('.navbar__responsive__left');
    navbar.on('click', function (evt) {
      var element = navbarLayout;
      var button = $(element).find('.hamburger ');
      var icon = $(element).find('.hamburger ion-icon');
      var language = $('.navbar__responsive__right');
      var responsiveContent = $('.navbar__responsive-content');

      if (button.hasClass('is-active')) {
        responsiveContent.hide();
        $(element).animate({
          width: '70px',
          height: '50px'
        }, 300, function () {
          $(element).css('position', 'relative');
          language.fadeIn();
          button.removeClass('is-active');
          icon.attr('name', 'reorder-three-outline'); // Animation complete.
        });
      } else {
        button.addClass('is-active');
        language.hide();
        button.css('height', 'fit-content');
        $(element).css('position', 'fixed');
        $(element).animate({
          width: '100%',
          height: '100%'
        }, 300, function () {
          responsiveContent.css('display', 'flex'); // Animation complete.
        });
      }

      icon.attr('name', 'close-outline');
      evt.stopPropagation();
    });
  };

  showToggle(faqQuestion);
  scrollSpyAction(scrollSpyContainer);
  servicesDropdown();
  navbarResponsive();
});
},{}],"C:/Users/Alex/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52553" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["C:/Users/Alex/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map