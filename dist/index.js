(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [function(t, e) {
    t.exports = function(t) {
      var e = [];
      return e.toString = function() {
        return this.map((function(e) {
          var n = function(t, e) {
            var n = t[1] || "",
              r = t[3];
            if (!r) return n;
            if (e && "function" == typeof btoa) {
              var a = (o = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                i = r.sources.map((function(t) { return "/*# sourceURL=" + r.sourceRoot + t + " */" }));
              return [n].concat(i).concat([a]).join("\n")
            }
            var o;
            return [n].join("\n")
          }(e, t);
          return e[2] ? "@media " + e[2] + "{" + n + "}" : n
        })).join("")
      }, e.i = function(t, n) {
        "string" == typeof t && (t = [
          [null, t, ""]
        ]);
        for (var r = {}, a = 0; a < this.length; a++) { var i = this[a][0]; "number" == typeof i && (r[i] = !0) }
        for (a = 0; a < t.length; a++) { var o = t[a]; "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o)) }
      }, e
    }
  }, function(t, e, n) {
    var r, a, i = {},
      o = (r = function() { return window && document && document.all && !window.atob }, function() { return void 0 === a && (a = r.apply(this, arguments)), a }),
      s = function(t, e) { return e ? e.querySelector(t) : document.querySelector(t) },
      l = function(t) {
        var e = {};
        return function(t, n) {
          if ("function" == typeof t) return t();
          if (void 0 === e[t]) {
            var r = s.call(this, t, n);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try { r = r.contentDocument.head } catch (t) { r = null }
            e[t] = r
          }
          return e[t]
        }
      }(),
      c = null,
      d = 0,
      C = [],
      f = n(19);

    function p(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          a = i[r.id];
        if (a) { a.refs++; for (var o = 0; o < a.parts.length; o++) a.parts[o](r.parts[o]); for (; o < r.parts.length; o++) a.parts.push(w(r.parts[o], e)) } else {
          var s = [];
          for (o = 0; o < r.parts.length; o++) s.push(w(r.parts[o], e));
          i[r.id] = { id: r.id, refs: 1, parts: s }
        }
      }
    }

    function u(t, e) {
      for (var n = [], r = {}, a = 0; a < t.length; a++) {
        var i = t[a],
          o = e.base ? i[0] + e.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] };
        r[o] ? r[o].parts.push(s) : n.push(r[o] = { id: o, parts: [s] })
      }
      return n
    }

    function h(t, e) {
      var n = l(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var r = C[C.length - 1];
      if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), C.push(e);
      else if ("bottom" === t.insertAt) n.appendChild(e);
      else {
        if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        var a = l(t.insertAt.before, n);
        n.insertBefore(e, a)
      }
    }

    function v(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = C.indexOf(t);
      e >= 0 && C.splice(e, 1)
    }

    function m(t) {
      var e = document.createElement("style");
      if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
        var r = function() { 0; return n.nc }();
        r && (t.attrs.nonce = r)
      }
      return _(e, t.attrs), h(t, e), e
    }

    function _(t, e) { Object.keys(e).forEach((function(n) { t.setAttribute(n, e[n]) })) }

    function w(t, e) {
      var n, r, a, i;
      if (e.transform && t.css) {
        if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
        t.css = i
      }
      if (e.singleton) {
        var o = d++;
        n = c || (c = m(e)), r = L.bind(null, n, o, !1), a = L.bind(null, n, o, !0)
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) { var e = document.createElement("link"); return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", _(e, t.attrs), h(t, e), e }(e), r = x.bind(null, n, e), a = function() { v(n), n.href && URL.revokeObjectURL(n.href) }) : (n = m(e), r = y.bind(null, n), a = function() { v(n) });
      return r(t),
        function(e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            r(t = e)
          } else a()
        }
    }
    t.exports = function(t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = u(t, e);
      return p(n, e),
        function(t) {
          for (var r = [], a = 0; a < n.length; a++) {
            var o = n[a];
            (s = i[o.id]).refs--, r.push(s)
          }
          t && p(u(t, e), e);
          for (a = 0; a < r.length; a++) {
            var s;
            if (0 === (s = r[a]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();
              delete i[s.id]
            }
          }
        }
    };
    var g, b = (g = [], function(t, e) { return g[t] = e, g.filter(Boolean).join("\n") });

    function L(t, e, n, r) {
      var a = n ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = b(e, a);
      else {
        var i = document.createTextNode(a),
          o = t.childNodes;
        o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(i, o[e]) : t.appendChild(i)
      }
    }

    function y(t, e) {
      var n = e.css,
        r = e.media;
      if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;
      else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }

    function x(t, e, n) {
      var r = n.css,
        a = n.sourceMap,
        i = void 0 === e.convertToAbsoluteUrls && a;
      (e.convertToAbsoluteUrls || i) && (r = f(r)), a && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
      var o = new Blob([r], { type: "text/css" }),
        s = t.href;
      t.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
    }
  }, function(t, e) {
    var n;
    n = function() { return this }();
    try { n = n || new Function("return this")() } catch (t) { "object" == typeof window && (n = window) }
    t.exports = n
  }, function(t, e, n) {
    var r = n(18);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(r, a);
    r.locals && (t.exports = r.locals)
  }, function(t, e, n) {
    var r = n(21);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(r, a);
    r.locals && (t.exports = r.locals)
  }, function(t, e, n) {
    var r = n(23);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(r, a);
    r.locals && (t.exports = r.locals)
  }, function(t, e, n) {
    var r = n(26);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(r, a);
    r.locals && (t.exports = r.locals)
  }, function(t, e, n) {
    var r = n(32);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(r, a);
    r.locals && (t.exports = r.locals)
  }, function(t, e, n) {
    var r = n(36);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(r, a);
    r.locals && (t.exports = r.locals)
  }, function(t, e, n) {
    var r = n(38);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(r, a);
    r.locals && (t.exports = r.locals)
  }, function(t, e, n) {
    var r = n(40);
    "string" == typeof r && (r = [
      [t.i, r, ""]
    ]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(r, a);
    r.locals && (t.exports = r.locals)
  }, function(t, e, n) {
    (function(t, e) {
      ! function(t, n) {
        "use strict";
        if (!t.setImmediate) {
          var r, a, i, o, s, l = 1,
            c = {},
            d = !1,
            C = t.document,
            f = Object.getPrototypeOf && Object.getPrototypeOf(t);
          f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) { e.nextTick((function() { u(t) })) } : ! function() {
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                n = t.onmessage;
              return t.onmessage = function() { e = !1 }, t.postMessage("", "*"), t.onmessage = n, e
            }
          }() ? t.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(t) { u(t.data) }, r = function(t) { i.port2.postMessage(t) }) : C && "onreadystatechange" in C.createElement("script") ? (a = C.documentElement, r = function(t) {
            var e = C.createElement("script");
            e.onreadystatechange = function() { u(t), e.onreadystatechange = null, a.removeChild(e), e = null }, a.appendChild(e)
          }) : r = function(t) { setTimeout(u, 0, t) } : (o = "setImmediate$" + Math.random() + "$", s = function(e) { e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(o) && u(+e.data.slice(o.length)) }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function(e) { t.postMessage(o + e, "*") }), f.setImmediate = function(t) { "function" != typeof t && (t = new Function("" + t)); for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1]; var a = { callback: t, args: e }; return c[l] = a, r(l), l++ }, f.clearImmediate = p
        }

        function p(t) { delete c[t] }

        function u(t) {
          if (d) setTimeout(u, 0, t);
          else {
            var e = c[t];
            if (e) {
              d = !0;
              try {
                ! function(t) {
                  var e = t.callback,
                    n = t.args;
                  switch (n.length) {
                    case 0:
                      e();
                      break;
                    case 1:
                      e(n[0]);
                      break;
                    case 2:
                      e(n[0], n[1]);
                      break;
                    case 3:
                      e(n[0], n[1], n[2]);
                      break;
                    default:
                      e.apply(void 0, n)
                  }
                }(e)
              } finally { p(t), d = !1 }
            }
          }
        }
      }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(2), n(12))
  }, function(t, e) {
    var n, r, a = t.exports = {};

    function i() { throw new Error("setTimeout has not been defined") }

    function o() { throw new Error("clearTimeout has not been defined") }

    function s(t) { if (n === setTimeout) return setTimeout(t, 0); if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0); try { return n(t, 0) } catch (e) { try { return n.call(null, t, 0) } catch (e) { return n.call(this, t, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : i } catch (t) { n = i } try { r = "function" == typeof clearTimeout ? clearTimeout : o } catch (t) { r = o } }();
    var l, c = [],
      d = !1,
      C = -1;

    function f() { d && l && (d = !1, l.length ? c = l.concat(c) : C = -1, c.length && p()) }

    function p() {
      if (!d) {
        var t = s(f);
        d = !0;
        for (var e = c.length; e;) {
          for (l = c, c = []; ++C < e;) l && l[C].run();
          C = -1, e = c.length
        }
        l = null, d = !1,
          function(t) { if (r === clearTimeout) return clearTimeout(t); if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t); try { r(t) } catch (e) { try { return r.call(null, t) } catch (e) { return r.call(this, t) } } }(t)
      }
    }

    function u(t, e) { this.fun = t, this.array = e }

    function h() {}
    a.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      c.push(new u(t, e)), 1 !== c.length || d || s(p)
    }, u.prototype.run = function() { this.fun.apply(null, this.array) }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function(t) { return [] }, a.binding = function(t) { throw new Error("process.binding is not supported") }, a.cwd = function() { return "/" }, a.chdir = function(t) { throw new Error("process.chdir is not supported") }, a.umask = function() { return 0 }
  }, , function(t, e, n) { t.exports = n(24) }, function(t, e, n) {
    (function(t) {
      var r = void 0 !== t && t || "undefined" != typeof self && self || window,
        a = Function.prototype.apply;

      function i(t, e) { this._id = t, this._clearFn = e }
      e.setTimeout = function() { return new i(a.call(setTimeout, r, arguments), clearTimeout) }, e.setInterval = function() { return new i(a.call(setInterval, r, arguments), clearInterval) }, e.clearTimeout = e.clearInterval = function(t) { t && t.close() }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() { this._clearFn.call(r, this._id) }, e.enroll = function(t, e) { clearTimeout(t._idleTimeoutId), t._idleTimeout = e }, e.unenroll = function(t) { clearTimeout(t._idleTimeoutId), t._idleTimeout = -1 }, e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout((function() { t._onTimeout && t._onTimeout() }), e))
      }, n(11), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, n(2))
  }, function(t, e, n) { t.exports = n(42) }, function(t, e, n) {
    "use strict";
    var r = n(3);
    n.n(r).a
  }, function(t, e, n) {
    (t.exports = n(0)(!1)).push([t.i, '\n.scroll-up[data-v-6ec0d22c] {\n\tpadding-top: 5px;\n}\n.scroll-to-top[data-v-6ec0d22c]:before {\n\tposition: absolute;\n\ttop: calc(50% - 5px);\n\tleft: calc(50% - 6px);\n\ttransform: rotate(135deg);\n\tdisplay: block;\n\twidth: 12px;\n\theight: 12px;\n\tcontent: "";\n\tborder: 2px solid white;\n\tborder-width: 0px 0 2px 2px;\n}\n.scroll-to-top[data-v-6ec0d22c]{\n\tposition: fixed;\n\tright: 10px;\n\tbottom: 10px;\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%;\n\tcolor: white;\n\tbackground-color:#4C4973;\n\tborder: none;\n\toutline: none;\n\tcursor: pointer;\n}\n.scroll-to-top[data-v-6ec0d22c]:active{\n\tbackground-color: black\n}\n.fade-enter-active[data-v-6ec0d22c], .fade-leave-active[data-v-6ec0d22c] {\n  transition: opacity .5s;\n}\n.fade-enter[data-v-6ec0d22c], .fade-leave-to[data-v-6ec0d22c] /* .fade-leave-active below version 2.1.8 */ {\n\topacity: 0;\n}\n', ""])
  }, function(t, e) {
    t.exports = function(t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host,
        r = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(t, e) { var a, i = e.trim().replace(/^"(.*)"$/, (function(t, e) { return e })).replace(/^'(.*)'$/, (function(t, e) { return e })); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (a = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")") }))
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(4);
    n.n(r).a
  }, function(t, e, n) {
    (t.exports = n(0)(!1)).push([t.i, "\n.scroll-down[data-v-2347e825] {\n\topacity: 1;\n\t-webkit-transition: all .5s ease-in 3s;\n\ttransition: all .5s ease-in 3s;\n}\n.scroll-down[data-v-2347e825] {\n\tbackground-color: #4C4973;\n\tposition: absolute;\n\tbottom: 30px;\n\tleft: 50%;\n\tmargin-left: -110px;\n\tdisplay: block;\n\tborder: 2px solid #FFF;\n\toutline: none;\n\tbackground-size: 14px auto;\n\tborder-radius: 10%;\n\tz-index: 2;\n\t-webkit-animation: bounce-data-v-2347e825 2s infinite 1s;\n\tanimation: bounce-data-v-2347e825 2s infinite 1s;\n\t-webkit-transition: all .2s ease-in;\n\ttransition: all .2s ease-in;\n}\n.scroll-down[data-v-2347e825]:active {\n\tbackground-color: black;\n}\n/* .scroll-down:before {\n\t\tposition: absolute;\n\t\ttop: calc(50% - 8px);\n\t\tleft: calc(50% - 7px);\n\t\ttransform: rotate(-45deg);\n\t\tdisplay: block;\n\t\twidth: 12px;\n\t\theight: 12px;\n\t\tcontent: \"\";\n\t\tborder: 2px solid white;\n\t\tborder-width: 0px 0 2px 2px;\n} */\n.btn[data-v-2347e825] {\n\t\tborder: 2px solid #4C4973;\n\t\tbackground: none;\n\t\tpadding: 10px 20px;\n\t\tfont-size: 20px;\n\t\tfont-family: 'Courier New', Courier, monospace;\n\t\toutline: none;\n\t\tcursor: pointer;\n\t\ttransition: 0.5s;\n\t\toverflow: hidden;\n\t\tborder-radius: 20px 10px;\n\t\twidth: 230px;\n\t\tcolor: #4C4973;\n\t\tbackground-color: white;\n}\n.btn[data-v-2347e825]:hover {\n\t\tbackground-color: #4C4973;\n\t\tcolor: white;\n\t\tborder: 2px solid white;\n}\n.btn[data-v-2347e825]:active {\n\t\tbackground-color: black;\n}\n@keyframes bounce-data-v-2347e825 {\n0%,\n\t100%,\n\t20%,\n\t50%,\n\t80% {\n\t\t-webkit-transform: translateY(0);\n\t\t-ms-transform: translateY(0);\n\t\ttransform: translateY(0);\n}\n40% {\n\t\t-webkit-transform: translateY(-10px);\n\t\t-ms-transform: translateY(-10px);\n\t\ttransform: translateY(-10px);\n}\n60% {\n\t\t-webkit-transform: translateY(-5px);\n\t\t-ms-transform: translateY(-5px);\n\t\ttransform: translateY(-5px);\n}\n}\n.fade-enter-active[data-v-2347e825], .fade-leave-active[data-v-2347e825] {\n  transition: opacity .5s;\n}\n.fade-enter[data-v-2347e825], .fade-leave-to[data-v-2347e825] /* .fade-leave-active below version 2.1.8 */ {\n\topacity: 0;\n}\n", ""])
  }, function(t, e, n) {
    "use strict";
    var r = n(5);
    n.n(r).a
  }, function(t, e, n) {
    (t.exports = n(0)(!1)).push([t.i, "\n#waves[data-v-b76ae9e6] {\n\t\t-webkit-animation: wave-movement-data-v-b76ae9e6 3s infinite 1s;\n\t\tanimation: wave-movement-data-v-b76ae9e6 3s infinite 1s;\n}\n#rays[data-v-b76ae9e6] {\n\t\t-webkit-animation: ray-movement-data-v-b76ae9e6 2s infinite 1s;\n\t\tanimation: ray-movement-data-v-b76ae9e6 2s infinite 1s;\n}\n#beach-clouds[data-v-b76ae9e6], #cloud1[data-v-b76ae9e6], #cloud2[data-v-b76ae9e6], #cloud3[data-v-b76ae9e6] {\n\t\t-webkit-animation: cloud-movement-data-v-b76ae9e6 2s infinite 2s;\n\t\tanimation: cloud-movement-data-v-b76ae9e6 2s infinite 2s;\n}\n#Vector_16[data-v-b76ae9e6], #Vector_31[data-v-b76ae9e6], #Vector_33[data-v-b76ae9e6]{\n\t\t-webkit-animation: ray-movement-data-v-b76ae9e6 2s infinite 2s;\n\t\tanimation: ray-movement-data-v-b76ae9e6 2s infinite 2s;\n}\n#snows[data-v-b76ae9e6] {\n\t\t-webkit-animation: falling-data-v-b76ae9e6 2s linear infinite;\n\t\tanimation: falling-data-v-b76ae9e6 2s linear infinite;\n}\n@keyframes falling-data-v-b76ae9e6{\n0%{\n\t\t\t-webkit-transform: translateY(0);\n\t\t\t\t-ms-transform: translateY(0);\n\t\t\t\ttransform: translateY(0);\n}\n20%{\n\t\t\t-webkit-transform: translateY(10px);\n\t\t\t\t-ms-transform: translateY(10px);\n\t\t\t\ttransform: translateY(10px);\n}\n50%{\n\t\t\t-webkit-transform: translateY(20px);\n\t\t\t\t-ms-transform: translateY(20px);\n\t\t\t\ttransform: translateY(20px);\n}\n80%{\n\t\t\t-webkit-transform: translateY(30px);\n\t\t\t\t-ms-transform: translateY(30px);\n\t\t\t\ttransform: translateY(30px);\n}\n100%{\n\t\t\t-webkit-transform: translateY(40px);\n\t\t\t\t-ms-transform: translateY(40px);\n\t\t\t\ttransform: translateY(40px);\n}\n}\n@keyframes cloud-movement-data-v-b76ae9e6 {\n0%,\n\t\t80% {\n\t\t\t-webkit-transform: translateX(0);\n\t\t\t-ms-transform: translateX(0);\n\t\t\ttransform: translateX(0);\n}\n20% {\n\t\t\t-webkit-transform: translateX(-10px);\n\t\t\t-ms-transform: translateX(-10px);\n\t\t\ttransform: translateX(-10px);\n}\n40% {\n\t\t\t-webkit-transform: translateX(-20px);\n\t\t\t-ms-transform: translateX(-20px);\n\t\t\ttransform: translateX(-20px);\n}\n60% {\n\t\t\t-webkit-transform: translateX(-5px);\n\t\t\t-ms-transform: translateX(-5px);\n\t\t\ttransform: translateX(-5px);\n}\n}\n@keyframes wave-movement-data-v-b76ae9e6 {\n0%,\n\t\t90% {\n\t\t\t-webkit-transform: pers translateX(0);\n\t\t\t-ms-transform: translateX(0);\n\t\t\ttransform: translateX(0);\n\t\t\t/* transform: skew(0deg, 5deg); */\n}\n80%, 10% {\n\t\t\t-webkit-transform: translateX(10px);\n\t\t\t-ms-transform: translateX(10px);\n\t\t\ttransform: translateX(10px);\n}\n70%, 20% {\n\t\t\t-webkit-transform: translateX(20px);\n\t\t\t-ms-transform: translateX(20px);\n\t\t\ttransform: translateX(20px);\n}\n60%, 30% {\n\t\t\t-webkit-transform: translateX(30px);\n\t\t\t-ms-transform: translateX(30px);\n\t\t\ttransform: translateX(30px);\n}\n50%, 40% {\n\t\t\t-webkit-transform: translateX(40px);\n\t\t\t-ms-transform: translateX(40px);\n\t\t\ttransform: translateX(40px);\n}\n}\n@keyframes ray-movement-data-v-b76ae9e6 {\n0%,\n\t\t80% {\n\t\t\t-webkit-transform: translateY(0);\n\t\t\t-ms-transform: translateY(0);\n\t\t\ttransform: translateY(0);\n}\n40% {\n\t\t\t-webkit-transform: translateY(-10px);\n\t\t\t-ms-transform: translateY(-10px);\n\t\t\ttransform: translateY(-10px);\n}\n60% {\n\t\t\t-webkit-transform: translateY(-5px);\n\t\t\t-ms-transform: translateY(-5px);\n\t\t\ttransform: translateY(-5px);\n}\n}\n.fluid[data-v-b76ae9e6]{\n\t\tmargin: 5% 0 0 10%;\n\t\twidth: 80%;\n\t\theight: 80%;\n}\n@media (max-width: 640px)\n\t{\n.fluid[data-v-b76ae9e6]{\n\t\t\tmargin: 20% 0 0 0%;\n\t\t\twidth: 100%;\n\t\t\theight: 340px;\n}\n}\n", ""])
  }, function(t, e, n) {
    var r = function(t) {
      "use strict";
      var e = Object.prototype,
        n = e.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        a = r.iterator || "@@iterator",
        i = r.asyncIterator || "@@asyncIterator",
        o = r.toStringTag || "@@toStringTag";

      function s(t, e, n, r) {
        var a = e && e.prototype instanceof d ? e : d,
          i = Object.create(a.prototype),
          o = new L(r || []);
        return i._invoke = function(t, e, n) {
          var r = "suspendedStart";
          return function(a, i) {
            if ("executing" === r) throw new Error("Generator is already running");
            if ("completed" === r) { if ("throw" === a) throw i; return x() }
            for (n.method = a, n.arg = i;;) {
              var o = n.delegate;
              if (o) { var s = w(o, n); if (s) { if (s === c) continue; return s } }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw r = "completed", n.arg;
                n.dispatchException(n.arg)
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var d = l(t, e, n);
              if ("normal" === d.type) { if (r = n.done ? "completed" : "suspendedYield", d.arg === c) continue; return { value: d.arg, done: n.done } }
              "throw" === d.type && (r = "completed", n.method = "throw", n.arg = d.arg)
            }
          }
        }(t, n, o), i
      }

      function l(t, e, n) { try { return { type: "normal", arg: t.call(e, n) } } catch (t) { return { type: "throw", arg: t } } }
      t.wrap = s;
      var c = {};

      function d() {}

      function C() {}

      function f() {}
      var p = {};
      p[a] = function() { return this };
      var u = Object.getPrototypeOf,
        h = u && u(u(y([])));
      h && h !== e && n.call(h, a) && (p = h);
      var v = f.prototype = d.prototype = Object.create(p);

      function m(t) {
        ["next", "throw", "return"].forEach((function(e) { t[e] = function(t) { return this._invoke(e, t) } }))
      }

      function _(t, e) {
        var r;
        this._invoke = function(a, i) {
          function o() {
            return new e((function(r, o) {
              ! function r(a, i, o, s) {
                var c = l(t[a], t, i);
                if ("throw" !== c.type) {
                  var d = c.arg,
                    C = d.value;
                  return C && "object" == typeof C && n.call(C, "__await") ? e.resolve(C.__await).then((function(t) { r("next", t, o, s) }), (function(t) { r("throw", t, o, s) })) : e.resolve(C).then((function(t) { d.value = t, o(d) }), (function(t) { return r("throw", t, o, s) }))
                }
                s(c.arg)
              }(a, i, r, o)
            }))
          }
          return r = r ? r.then(o, o) : o()
        }
      }

      function w(t, e) {
        var n = t.iterator[e.method];
        if (void 0 === n) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return c;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return c
        }
        var r = l(n, t.iterator, e.arg);
        if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, c;
        var a = r.arg;
        return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c)
      }

      function g(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
      }

      function b(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
      }

      function L(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(g, this), this.reset(!0) }

      function y(t) {
        if (t) {
          var e = t[a];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              i = function e() {
                for (; ++r < t.length;)
                  if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                return e.value = void 0, e.done = !0, e
              };
            return i.next = i
          }
        }
        return { next: x }
      }

      function x() { return { value: void 0, done: !0 } }
      return C.prototype = v.constructor = f, f.constructor = C, f[o] = C.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) { var e = "function" == typeof t && t.constructor; return !!e && (e === C || "GeneratorFunction" === (e.displayName || e.name)) }, t.mark = function(t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, o in t || (t[o] = "GeneratorFunction")), t.prototype = Object.create(v), t }, t.awrap = function(t) { return { __await: t } }, m(_.prototype), _.prototype[i] = function() { return this }, t.AsyncIterator = _, t.async = function(e, n, r, a, i) { void 0 === i && (i = Promise); var o = new _(s(e, n, r, a), i); return t.isGeneratorFunction(n) ? o : o.next().then((function(t) { return t.done ? t.value : o.next() })) }, m(v), v[o] = "Generator", v[a] = function() { return this }, v.toString = function() { return "[object Generator]" }, t.keys = function(t) {
        var e = [];
        for (var n in t) e.push(n);
        return e.reverse(),
          function n() { for (; e.length;) { var r = e.pop(); if (r in t) return n.value = r, n.done = !1, n } return n.done = !0, n }
      }, t.values = y, L.prototype = {
        constructor: L,
        reset: function(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(b), !t)
            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
        },
        stop: function() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval },
        dispatchException: function(t) {
          if (this.done) throw t;
          var e = this;

          function r(n, r) { return o.type = "throw", o.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              o = i.completion;
            if ("root" === i.tryLoc) return r("end");
            if (i.tryLoc <= this.prev) {
              var s = n.call(i, "catchLoc"),
                l = n.call(i, "finallyLoc");
              if (s && l) { if (this.prev < i.catchLoc) return r(i.catchLoc, !0); if (this.prev < i.finallyLoc) return r(i.finallyLoc) } else if (s) { if (this.prev < i.catchLoc) return r(i.catchLoc, !0) } else { if (!l) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return r(i.finallyLoc) }
            }
          }
        },
        abrupt: function(t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) { var a = this.tryEntries[r]; if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) { var i = a; break } }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var o = i ? i.completion : {};
          return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, c) : this.complete(o)
        },
        complete: function(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c },
        finish: function(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), b(n), c } },
        catch: function(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ("throw" === r.type) {
                var a = r.arg;
                b(n)
              }
              return a
            }
          }
          throw new Error("illegal catch attempt")
        },
        delegateYield: function(t, e, n) { return this.delegate = { iterator: y(t), resultName: e, nextLoc: n }, "next" === this.method && (this.arg = void 0), c }
      }, t
    }(t.exports);
    try { regeneratorRuntime = r } catch (t) { Function("r", "regeneratorRuntime = r")(r) }
  }, function(t, e, n) {
    "use strict";
    var r = n(6);
    n.n(r).a
  }, function(t, e, n) {
    (t.exports = n(0)(!1)).push([t.i, '\n.scroll-down[data-v-977f23e2] {\n\topacity: 1;\n\t-webkit-transition: all .5s ease-in 3s;\n\ttransition: all .5s ease-in 3s;\n}\n.scroll-down[data-v-977f23e2] {\n\tbackground-color: #4C4973;\n\tposition: absolute;\n\tbottom: -250px;\n\tleft: 50%;\n\tmargin-left: -30px;\n\theight: 50px;\n\twidth: 50px;\n\tborder-radius: 50%;\n\tborder: 2px solid #FFF;\n\toutline: none;\n\tbackground-size: 14px auto;\n\tz-index: 2;\n\t-webkit-animation: bounce-data-v-977f23e2 2s infinite 1s;\n\tanimation: bounce-data-v-977f23e2 2s infinite 1s;\n\t-webkit-transition: all .2s ease-in;\n\ttransition: all .2s ease-in;\n}\n.scroll-down[data-v-977f23e2]:active {\n\tbackground-color: black;\n}\n.scroll-down[data-v-977f23e2]:before {\n\tposition: absolute;\n\ttop: calc(50% - 8px);\n\tleft: calc(50% - 7px);\n\ttransform: rotate(-45deg);\n\tdisplay: block;\n\twidth: 12px;\n\theight: 12px;\n\tcontent: "";\n\tborder: 2px solid white;\n\tborder-width: 0px 0 2px 2px;\n}\n@keyframes bounce-data-v-977f23e2 {\n0%,\n\t100%,\n\t20%,\n\t50%,\n\t80% {\n\t\t-webkit-transform: translateY(0);\n\t\t-ms-transform: translateY(0);\n\t\ttransform: translateY(0);\n}\n40% {\n\t\t-webkit-transform: translateY(-10px);\n\t\t-ms-transform: translateY(-10px);\n\t\ttransform: translateY(-10px);\n}\n60% {\n\t\t-webkit-transform: translateY(-5px);\n\t\t-ms-transform: translateY(-5px);\n\t\ttransform: translateY(-5px);\n}\n}\n.fade-enter-active[data-v-977f23e2], .fade-leave-active[data-v-977f23e2] {\n  transition: opacity .5s;\n}\n.fade-enter[data-v-977f23e2], .fade-leave-to[data-v-977f23e2] /* .fade-leave-active below version 2.1.8 */ {\n\topacity: 0;\n}\n', ""])
  }, function(t, e) { t.exports = "./../assets/mail.png" }, function(t, e) { t.exports = "./../assets/linkedin.png" }, function(t, e) { t.exports = "./../assets/instagram.webp" }, function(t, e) { t.exports = "./../assets/twitter.png" }, function(t, e, n) {
    "use strict";
    var r = n(7);
    n.n(r).a
  }, function(t, e, n) {
    var r = n(33);
    (t.exports = n(0)(!1)).push([t.i, "\n.footer[data-v-53b5ff14] {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tmargin: 100px 0 0 150px;\n}\n.footer-text[data-v-53b5ff14] {\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t\tfont-size: 20px;\n\t\tfont-family: 'Courier New', Courier, monospace;\n}\n.avatar[data-v-53b5ff14] {\n    width: 150px;\n    height: 150px;\n    background-size: cover;\n    background-position: top center;\n    border-radius: 70%;\n}\n.avatar1[data-v-53b5ff14] {\n    background-image: url(" + r(n(34)) + ");\n}\n", ""])
  }, function(t, e) { t.exports = function(t) { return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t) } }, function(t, e) { t.exports = "./../assets/goalAvatar.png" }, function(t, e, n) {
    "use strict";
    var r = n(8);
    n.n(r).a
  }, function(t, e, n) {
    (t.exports = n(0)(!1)).push([t.i, "\n#sun-rays[data-v-fbad838a] {\n\t\t-webkit-animation: rotate-data-v-fbad838a 3s linear infinite;\n\t\tanimation: rotate-data-v-fbad838a 3s linear infinite;\n\t\ttransform-origin: center;\n\t\ttransform-box: fill-box;\n}\n.loader[data-v-fbad838a] {\n\t\tdisplay: flex;\n    justify-content: center;\n    align-items: center;\n\t\tflex-direction: row;\n\t\twidth: 100%;\n\t\theight: auto;\n}\n@keyframes rotate-data-v-fbad838a {\nfrom {\n\t\t\ttransform: rotateZ(0deg);\n}\nto {\n\t\t\ttransform: rotateZ(360deg);\n}\n}\n.text[data-v-fbad838a] {\n\t\tfont-family: Helvetica, 'Helvetica Neue', sans-serif;\n\t\tletter-spacing: 1px;\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t\tfont-size: 11px;\n\t\tcolor: #4C4973;\n\t\twidth: 200px;\n\t\tdisplay: flex;\n\t\theight: 20vh;\n\t\tmargin: 0 30px 0 0;\n}\n@media (max-width: 640px)\n\t{\n.text[data-v-fbad838a] {\n\t\tfont-family: Helvetica, 'Helvetica Neue', sans-serif;\n\t\tletter-spacing: 1px;\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t\tfont-size: 11px;\n\t\tcolor: white;\n\t\twidth: 200px;\n\t\tdisplay: flex;\n\t\theight: 20vh;\n\t\tmargin: 0 30px 0 0;\n}\n}\n", ""])
  }, function(t, e, n) {
    "use strict";
    var r = n(9);
    n.n(r).a
  }, function(t, e, n) {
    (t.exports = n(0)(!1)).push([t.i, "\n.weather[data-v-bcda9366] {\n\tfont-size: 60%;\n\tmargin-top: 0px;\n}\n.location[data-v-bcda9366] { \n\tdisplay: flex;\n}\n.temperature[data-v-bcda9366] {\n\tfont-family: 'Courier New', Courier, monospace;\n\tflex-direction: column;\n\tcursor: pointer;\n}\n.temperature[data-v-bcda9366]:active {\n\tcolor: white\n}\n.degree-section[data-v-bcda9366] {\n\talign-items: center;\n}\n.degree-section span[data-v-bcda9366], .temperature-description[data-v-bcda9366] {\n\tpadding-bottom: 20px;\n\tfont-size: 45px;\n}\n.degree-section h2[data-v-bcda9366] {\n\tfont-size: 50px;\n}\n", ""])
  }, function(t, e, n) {
    "use strict";
    var r = n(10);
    n.n(r).a
  }, function(t, e, n) {
    (t.exports = n(0)(!1)).push([t.i, "\n.fluid[data-v-48c930d6] {\n\tmargin: 100px 0 100px 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tfont-family: sans-serif;\n\tfont-family: 'Courier New', Courier, monospace;\n\ttext-align: center;\n\tfont-size: 30px;\n}\n@media (max-width: 640px)\n{\n.fluid[data-v-48c930d6] {\n\t\tmargin: 100px 0 100px 0;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t\tfont-family: sans-serif;\n\t\tfont-family: 'Courier New', Courier, monospace;\n\t\ttext-align: center;\n\t\tfont-size: 30px;\n}\n}\n", ""])
  }, , function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(13),
      a = n.n(r),
      i = { data: function() { return { scrolled: !1, scrollPosition: this.$parent.scrollPosition } }, methods: { scrollToTop: function() { window.scroll({ top: 0, left: 0, behavior: "smooth" }) } }, watch: { scrollPosition: { handler: function(t) { t.scrollYPosition > 20 ? this.scrolled = !0 : this.scrolled = !1 }, deep: !0 } } };
    n(17);

    function o(t, e, n, r, a, i, o, s) {
      var l, c = "function" == typeof t ? t.options : t;
      if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), i && (c._scopeId = "data-v-" + i), o ? (l = function(t) {
          (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), a && a.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
        }, c._ssrRegister = l) : a && (l = s ? function() { a.call(this, this.$root.$options.shadowRoot) } : a), l)
        if (c.functional) {
          c._injectStyles = l;
          var d = c.render;
          c.render = function(t, e) { return l.call(e), d(t, e) }
        } else {
          var C = c.beforeCreate;
          c.beforeCreate = C ? [].concat(C, l) : [l]
        }
      return { exports: t, options: c }
    }
    var s = o(i, (function() {
        var t = this.$createElement,
          e = this._self._c || t;
        return e("transition", { attrs: { name: "fade" } }, [this.scrolled ? e("button", { staticClass: "scroll-to-top", on: { click: this.scrollToTop } }) : this._e()])
      }), [], !1, null, "6ec0d22c", null).exports,
      l = { data: function() { return { display: !0, scrollPosition: this.$parent.scrollPosition } }, methods: { scrollDown: function() { this.$root.StatusData.weatherRequested = !0, this.$root.StatusData.weatherReqLocal = !0, this.display = !1, window.scroll({ top: 800, left: 0, behavior: "smooth" }) } }, watch: { scrollPosition: { handler: function(t) { t.scrollYPosition < 100 ? (this.display = !0, this.$root.StatusData.scrolledUp = !0, this.$root.StatusData.weatherReqLocal = !1) : (this.display = !1, this.$root.StatusData.scrolledUp = !1, this.$root.StatusData.weatherReqLocal = !0) }, deep: !0 } } },
      c = (n(20), o(l, (function() {
        var t = this.$createElement,
          e = this._self._c || t;
        return e("a", { attrs: { href: "#weather-content" } }, [e("transition", { attrs: { name: "fade" } }, [this.display ? e("button", { staticClass: "scroll-down btn", on: { click: this.scrollDown } }, [this._v("\n\t\t\tGet the weather around you!\n\t\t")]) : this._e()])], 1)
      }), [], !1, null, "2347e825", null).exports),
      d = {},
      C = (n(22), o(d, (function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [n("svg", { staticClass: "fluid", attrs: { width: "3381", height: "1861", viewBox: "0 0 3381 1861", fill: "none", xmlns: "http://www.w3.org/2000/svg" } }, [n("g", { attrs: { id: "undraw_weather_notification_4sbo 1" } }, [n("g", { attrs: { "clip-path": "url(#clip0)" } }, [n("g", { attrs: { id: "beach 1" } }, [n("g", { attrs: { id: "waves" } }, [n("g", { attrs: { id: "Group" } }, [n("g", { attrs: { id: "Group_2" } }, [n("path", { attrs: { id: "Vector", d: "M1626.03 972.347C1573.02 972.347 1546.19 982.712 1520.24 992.734C1496.32 1001.97 1473.72 1010.7 1427.43 1010.7C1381.13 1010.7 1358.54 1001.98 1334.61 992.734C1308.66 982.712 1281.83 972.347 1228.83 972.347C1175.85 972.347 1149.04 982.714 1123.1 992.737C1099.2 1001.98 1076.62 1010.7 1030.36 1010.7C984.087 1010.7 961.5 1001.98 937.588 992.737C911.649 982.712 884.827 972.347 831.839 972.347C778.867 972.347 752.052 982.714 726.12 992.737C702.215 1001.98 679.638 1010.7 633.381 1010.7C587.138 1010.7 564.566 1001.98 540.668 992.737C514.743 982.712 487.936 972.347 434.974 972.347C425.047 972.347 417 980.381 417 990.291C417 1000.2 425.047 1008.24 434.974 1008.24C481.216 1008.24 503.786 1016.96 527.686 1026.2C553.612 1036.23 580.419 1046.59 633.381 1046.59C686.353 1046.59 713.167 1036.23 739.099 1026.2C763.004 1016.96 785.582 1008.24 831.839 1008.24C878.112 1008.24 900.699 1016.96 924.611 1026.2C950.551 1036.23 977.375 1046.59 1030.36 1046.59C1083.34 1046.59 1110.15 1036.23 1136.08 1026.2C1159.99 1016.96 1182.57 1008.24 1228.83 1008.24C1275.12 1008.24 1297.72 1016.96 1321.64 1026.21C1347.59 1036.23 1374.42 1046.59 1427.43 1046.59C1480.44 1046.59 1507.26 1036.23 1533.21 1026.21C1557.13 1016.97 1579.73 1008.24 1626.03 1008.24C1635.95 1008.24 1644 1000.2 1644 990.291C1644 980.381 1635.95 972.347 1626.03 972.347Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_3" } }, [n("g", { attrs: { id: "Group_4" } }, [n("path", { attrs: { id: "Vector_2", d: "M1546.75 1078.48C1543.18 1069.23 1532.77 1064.63 1523.51 1068.19L1520.23 1069.45C1509.41 1073.63 1499.19 1077.58 1487.03 1080.74C1477.42 1083.23 1471.66 1093.02 1474.15 1102.62C1476.25 1110.7 1483.55 1116.05 1491.54 1116.05C1493.03 1116.05 1494.55 1115.86 1496.07 1115.47C1510.24 1111.8 1521.91 1107.29 1533.21 1102.92L1536.44 1101.68C1545.7 1098.11 1550.32 1087.72 1546.75 1078.48Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_5" } }, [n("g", { attrs: { id: "Group_6" } }, [n("path", { attrs: { id: "Vector_3", d: "M1415.36 1087.21C1377.01 1085.83 1356.42 1077.88 1334.61 1069.45C1308.66 1059.43 1281.83 1049.07 1228.83 1049.07C1175.85 1049.07 1149.04 1059.43 1123.1 1069.45C1099.2 1078.69 1076.62 1087.42 1030.36 1087.42C984.087 1087.42 961.503 1078.69 937.588 1069.45C911.649 1059.43 884.827 1049.06 831.839 1049.06C778.867 1049.06 752.052 1059.43 726.12 1069.45C704.367 1077.86 683.82 1085.8 645.629 1087.2C635.708 1087.57 627.963 1095.89 628.327 1105.79C628.691 1115.7 637.031 1123.41 646.947 1123.07C691.172 1121.45 715.54 1112.03 739.102 1102.92C763.007 1093.68 785.584 1084.95 831.841 1084.95C878.115 1084.95 900.702 1093.68 924.614 1102.92C950.553 1112.94 977.377 1123.31 1030.37 1123.31C1083.34 1123.31 1110.15 1112.94 1136.09 1102.92C1159.99 1093.68 1182.57 1084.95 1228.83 1084.95C1275.12 1084.95 1297.72 1093.68 1321.64 1102.92C1345.26 1112.05 1369.68 1121.48 1414.06 1123.08C1423.92 1123.43 1432.32 1115.7 1432.67 1105.79C1433.03 1095.89 1425.28 1087.57 1415.36 1087.21Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_7" } }, [n("g", { attrs: { id: "Group_8" } }, [n("path", { attrs: { id: "Vector_4", d: "M1228.83 1125.78C1175.85 1125.78 1149.04 1136.15 1123.1 1146.17C1099.2 1155.41 1076.62 1164.14 1030.36 1164.14C984.087 1164.14 961.503 1155.41 937.588 1146.17C911.649 1136.15 884.827 1125.78 831.839 1125.78C821.912 1125.78 813.865 1133.82 813.865 1143.73C813.865 1153.64 821.912 1161.67 831.839 1161.67C878.112 1161.67 900.699 1170.4 924.614 1179.64C950.553 1189.67 977.375 1200.03 1030.36 1200.03C1083.34 1200.03 1110.15 1189.66 1136.08 1179.64C1159.99 1170.4 1182.57 1161.67 1228.83 1161.67C1238.75 1161.67 1246.8 1153.64 1246.8 1143.73C1246.8 1133.82 1238.75 1125.78 1228.83 1125.78Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_9" } }, [n("g", { attrs: { id: "Group_10" } }, [n("path", { attrs: { id: "Vector_5", d: "M573.996 1080.78C561.762 1077.61 551.508 1073.65 540.651 1069.45C531.396 1065.87 520.984 1070.46 517.398 1079.7C513.813 1088.94 518.41 1099.33 527.665 1102.91C539 1107.3 550.721 1111.83 564.976 1115.52C566.488 1115.91 568.005 1116.1 569.498 1116.1C577.49 1116.1 584.785 1110.73 586.884 1102.65C589.377 1093.06 583.606 1083.27 573.996 1080.78Z", fill: "#4C4973" } })])])]), t._v(" "), n("g", { attrs: { id: "Group_11" } }, [n("g", { attrs: { id: "Group_12" } }, [n("path", { attrs: { id: "Vector_6", d: "M1266.03 730.759C1212.33 653.854 1124.29 607.941 1030.5 607.941C872.294 607.941 743.581 736.441 743.581 894.395C743.578 901.211 743.82 908.09 744.3 914.839C744.968 924.295 752.86 931.52 762.211 931.52C762.638 931.52 763.064 931.506 763.496 931.475C773.398 930.776 780.858 922.196 780.158 912.31C779.739 906.396 779.528 900.369 779.528 894.395C779.528 756.233 892.113 643.829 1030.5 643.829C1112.54 643.829 1189.56 683.998 1236.54 751.282C1242.22 759.41 1253.42 761.405 1261.56 755.742C1269.71 750.074 1271.71 738.889 1266.03 730.759Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "rays" } }, [n("g", { attrs: { id: "Group_13" } }, [n("g", { attrs: { id: "Group_14" } }, [n("path", { attrs: { id: "Vector_7", d: "M665.501 876.453H550.237C540.311 876.453 532.264 884.487 532.264 894.397C532.264 904.307 540.311 912.341 550.237 912.341H665.501C675.427 912.341 683.475 904.307 683.475 894.397C683.475 884.487 675.427 876.453 665.501 876.453Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_15" } }, [n("g", { attrs: { id: "Group_16" } }, [n("path", { attrs: { id: "Vector_8", d: "M1030.5 396.97C1020.57 396.97 1012.53 405.005 1012.53 414.915V529.991C1012.53 539.903 1020.57 547.935 1030.5 547.935C1040.43 547.935 1048.47 539.901 1048.47 529.991V414.915C1048.47 405.005 1040.43 396.97 1030.5 396.97Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_17" } }, [n("g", { attrs: { id: "Group_18" } }, [n("path", { attrs: { id: "Vector_9", d: "M1382.81 542.664C1375.79 535.656 1364.41 535.656 1357.39 542.664L1275.89 624.036C1268.87 631.043 1268.87 642.406 1275.89 649.411C1279.39 652.914 1283.99 654.668 1288.59 654.668C1293.19 654.668 1297.79 652.916 1301.3 649.411L1382.81 568.04C1389.83 561.032 1389.83 549.669 1382.81 542.664Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_19" } }, [n("g", { attrs: { id: "Group_20" } }, [n("path", { attrs: { id: "Vector_10", d: "M907.426 550.863L892.724 515.424C888.925 506.268 878.412 501.923 869.241 505.713C860.069 509.505 855.715 520.004 859.513 529.158L874.216 564.597C877.082 571.507 883.775 575.679 890.828 575.679C893.121 575.679 895.451 575.239 897.699 574.308C906.87 570.516 911.224 560.017 907.426 550.863Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_21" } }, [n("g", { attrs: { id: "Group_22" } }, [n("path", { attrs: { id: "Vector_11", d: "M1419.82 733.4C1416.02 724.246 1405.51 719.897 1396.34 723.689L1360.84 738.367C1351.67 742.157 1347.31 752.656 1351.11 761.812C1353.98 768.722 1360.67 772.895 1367.72 772.895C1370.02 772.895 1372.35 772.454 1374.59 771.524L1410.09 756.845C1419.26 753.053 1423.62 742.554 1419.82 733.4Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_23" } }, [n("g", { attrs: { id: "Group_24" } }, [n("path", { attrs: { id: "Vector_12", d: "M1191.76 505.713C1182.59 501.921 1172.07 506.268 1168.28 515.424L1153.57 550.863C1149.78 560.017 1154.13 570.514 1163.3 574.308C1165.55 575.239 1167.88 575.679 1170.17 575.679C1177.22 575.679 1183.92 571.507 1186.78 564.597L1201.49 529.158C1205.29 520.001 1200.93 509.505 1191.76 505.713Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_25" } }, [n("g", { attrs: { id: "Group_26" } }, [n("path", { attrs: { id: "Vector_13", d: "M700.161 738.365L664.665 723.686C655.491 719.894 644.98 724.242 641.181 733.398C637.383 742.554 641.737 753.051 650.909 756.843L686.405 771.521C688.656 772.452 690.985 772.892 693.276 772.892C700.329 772.892 707.022 768.72 709.889 761.81C713.687 752.653 709.333 742.157 700.161 738.365Z", fill: "#4C4973" } })])])]), t._v(" "), n("g", { attrs: { id: "beach-clouds" } }, [n("g", { attrs: { id: "Group_27" } }, [n("g", { attrs: { id: "Group_28" } }, [n("path", { attrs: { id: "Vector_14", d: "M697.058 512.049C670.51 512.049 644.874 520.882 623.752 537.125C614.13 534.118 604.213 532.596 594.146 532.596C538.837 532.596 493.841 577.519 493.841 632.737C493.841 642.647 501.888 650.682 511.814 650.682H799.973C809.899 650.682 817.946 642.647 817.946 632.737C817.946 566.19 763.716 512.049 697.058 512.049ZM532.343 614.791C540.139 588.068 564.894 568.485 594.146 568.485C603.001 568.485 611.714 570.346 620.044 574.019C626.608 576.911 634.265 575.631 639.526 570.76C655.424 556.041 675.859 547.935 697.06 547.935C737.731 547.935 771.816 576.622 780.089 614.791H532.343Z", fill: "#4C4973" } })])]), t._v(" "), n("g", { attrs: { id: "Group_29" } }, [n("g", { attrs: { id: "Group_30" } }, [n("path", { attrs: { id: "Vector_15", d: "M1332.38 813.435C1322.31 813.435 1312.4 814.954 1302.77 817.964C1281.65 801.72 1256.01 792.887 1229.47 792.887C1162.81 792.887 1108.58 847.029 1108.58 913.576C1108.58 923.486 1116.63 931.52 1126.55 931.52H1414.71C1424.64 931.52 1432.69 923.486 1432.69 913.576C1432.69 858.358 1387.69 813.435 1332.38 813.435ZM1146.44 895.631C1154.71 857.463 1188.8 828.776 1229.47 828.776C1250.67 828.776 1271.1 836.882 1287 851.601C1292.27 856.47 1299.92 857.747 1306.48 854.857C1314.81 851.185 1323.53 849.323 1332.38 849.323C1361.63 849.323 1386.39 868.906 1394.19 895.631H1146.44Z", fill: "#4C4973" } })])])])]), t._v(" "), n("g", { attrs: { id: "man" } }, [n("path", { attrs: { id: "Vector_16", d: "M454.063 1755.34H451.815C335.368 1755.34 224.846 1749.99 140.608 1740.28L137.21 1739.87C134.906 1739.59 132.631 1739.31 130.383 1739.03C117.162 1737.42 104.222 1735.61 91.9353 1733.66C30.9294 1723.85 0 1712.16 0 1698.91C0 1687.92 20.2869 1678.34 62.0204 1669.62C82.0997 1665.43 106.887 1661.57 135.694 1658.14C140.942 1657.49 146.345 1656.88 151.87 1656.3C234.386 1647.39 340.911 1642.48 451.815 1642.48C473.737 1642.48 495.921 1642.67 517.748 1643.06C703.6 1646.35 903.629 1665.23 903.629 1698.91C903.629 1719.03 831.305 1732.01 770.632 1739.36C686.172 1749.59 573.746 1755.26 454.063 1755.34ZM451.815 1646.94C341.093 1646.94 234.767 1651.84 152.424 1660.74C146.923 1661.32 141.556 1661.92 136.323 1662.56C107.654 1665.97 83.0176 1669.81 63.0869 1673.97C10.508 1684.95 4.83224 1695.07 4.83224 1698.91C4.83224 1703.79 13.3996 1716.51 92.7587 1729.27C104.979 1731.21 117.855 1733 131.029 1734.61C133.276 1734.89 135.545 1735.17 137.838 1735.45L141.225 1735.86C225.253 1745.54 335.561 1750.88 451.815 1750.88H454.062C720.091 1750.71 898.797 1723.87 898.797 1698.91C898.797 1676.96 756.232 1651.74 517.656 1647.52C495.859 1647.13 473.706 1646.94 451.815 1646.94Z", fill: "#3F3D56" } }), t._v(" "), n("path", { attrs: { id: "Vector_17", d: "M757.454 1698.91C757.454 1728.77 639.708 1752.95 494.211 1753.11H492.888C421.868 1753.11 357.377 1747.38 309.855 1738.07C307.821 1737.65 305.815 1737.24 303.852 1736.82C295.773 1735.15 288.22 1733.34 281.265 1731.47C248.023 1722.38 228.323 1711.11 228.323 1698.91C228.323 1689.02 241.21 1679.79 263.727 1671.8C277.815 1667 292.268 1663.18 306.967 1660.35C310.054 1659.7 313.226 1659.1 316.469 1658.52C363.28 1649.93 425.111 1644.71 492.888 1644.71C506.06 1644.71 519.018 1644.91 531.677 1645.29C659.394 1649.13 757.454 1671.66 757.454 1698.91Z", fill: "#3F3D56" } }), t._v(" "), n("path", { attrs: { id: "Vector_18", d: "M359.829 1207.76L371.121 1289.1C371.121 1289.1 375.638 1316.22 380.154 1330.82C380.154 1330.82 375.638 1407.99 411.771 1462.21L434.354 1501.84L438.871 1560.24L495.329 1566.5L484.038 1478.9C484.038 1478.9 479.521 1437.19 484.038 1420.5C488.554 1403.82 461.454 1326.64 461.454 1326.64C461.454 1326.64 497.588 1218.19 470.488 1191.07C443.388 1163.96 359.829 1207.76 359.829 1207.76Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_19", d: "M459.196 1543.56C459.196 1543.56 434.354 1543.56 432.096 1549.81C429.838 1556.07 393.704 1612.38 393.704 1612.38C393.704 1612.38 362.088 1658.27 407.254 1660.36C452.421 1662.44 465.971 1643.67 465.971 1643.67C465.971 1643.67 506.621 1583.18 508.879 1572.76C511.138 1562.33 491.911 1539.98 491.911 1539.98C491.911 1539.98 465.971 1556.07 459.196 1543.56Z", fill: "#4C4973" } }), t._v(" "), n("path", { attrs: { id: "Vector_20", d: "M490.813 521.568C533.219 521.568 567.596 489.819 567.596 450.655C567.596 411.49 533.219 379.741 490.813 379.741C448.407 379.741 414.03 411.49 414.03 450.655C414.03 489.819 448.407 521.568 490.813 521.568Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_21", d: "M428.709 472.555C428.709 472.555 428.709 549.725 399.35 555.982C369.992 562.239 440 633.153 478.392 624.81C516.784 616.467 532.592 560.154 532.592 560.154C532.592 560.154 498.717 520.525 512.267 499.669C525.817 478.812 428.709 472.555 428.709 472.555Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_22", d: "M466.427 579.968C455.369 579.656 444.553 576.967 434.884 572.125C425.215 567.284 416.973 560.43 410.845 552.137C410.845 552.137 378.387 557.025 373.754 559.111C369.12 561.196 288.031 584.139 269.496 632.11L343.635 717.623C343.635 717.623 327.417 838.593 343.635 892.821C353.292 925.302 350.851 959.737 336.684 990.849C336.684 990.849 329.734 992.934 341.318 997.106C352.902 1001.28 619.339 953.306 623.973 940.792C628.606 928.278 619.339 928.278 626.289 922.021C633.24 915.764 651.775 878.221 633.24 865.707C614.705 853.193 603.121 715.537 603.121 715.537L651.775 604.996C651.775 604.996 562.854 541.021 530.858 549.023C530.858 549.023 524.348 579.968 466.427 579.968Z", fill: "#4C4973" } }), t._v(" "), n("path", { attrs: { id: "Vector_23", d: "M490.813 1166.05C490.813 1166.05 486.296 1257.82 495.329 1293.27C504.363 1328.73 504.363 1343.33 504.363 1343.33C504.363 1343.33 490.813 1403.82 497.588 1460.13C504.363 1516.44 489.684 1607.21 489.684 1607.21L545.013 1622.81L578.888 1464.3C578.888 1464.3 605.988 1366.27 590.179 1320.39C590.179 1320.39 599.213 1180.65 605.988 1166.05C612.763 1151.45 490.813 1166.05 490.813 1166.05Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_24", d: "M430.214 463.285C431.232 456.633 433.385 449.377 439.526 445.778C445.902 442.04 454.132 443.573 461.663 444.082C469.194 444.591 478.423 442.851 480.898 436.262C482.441 432.154 480.774 427.245 483.182 423.508C487.014 417.561 498.714 418.24 500.731 411.576C501.371 409.465 500.749 407.109 501.672 405.089C502.916 402.365 506.411 401.279 509.53 400.612C520.934 398.175 532.65 397.222 544.339 397.779C545.483 397.968 546.663 397.753 547.643 397.175C548.159 396.703 548.527 396.11 548.709 395.461C551.353 388.158 548.552 379.872 543.29 373.899C537.701 368.146 530.811 363.599 523.107 360.579C506.049 352.939 487.558 348.401 468.644 347.212C454.239 346.377 439.118 347.825 426.848 354.845C423.212 356.969 419.837 359.454 416.784 362.254C403.437 374.616 394.734 390.606 391.955 407.874C389.261 425.101 391.348 442.678 398.021 458.956C401.919 468.756 408.068 478.876 417.582 484.915C422.682 488.151 427.078 491.139 429.196 485.644C431.441 479.816 429.225 469.743 430.214 463.285Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_25", d: "M346.279 978.334C346.279 978.334 312.404 1020.05 319.179 1049.25C325.954 1078.45 350.796 1126.42 350.796 1126.42C350.796 1126.42 337.246 1220.27 359.829 1220.27C382.413 1220.27 479.521 1216.1 481.779 1205.67C484.038 1195.25 475.004 1090.96 475.004 1090.96C475.004 1090.96 486.296 1182.73 493.071 1182.73C499.846 1182.73 617.279 1193.16 621.796 1186.9C626.313 1180.65 635.346 1020.05 635.346 1020.05C635.346 1020.05 647.663 944.307 608.759 934.207C569.854 924.107 346.279 978.334 346.279 978.334Z", fill: "#4C4973" } }), t._v(" "), n("path", { attrs: { id: "Vector_26", d: "M526.946 1606.13C526.946 1606.13 486.296 1585.27 484.038 1601.96C481.779 1618.64 456.938 1679.13 456.938 1679.13C456.938 1679.13 432.096 1727.1 486.296 1729.18C540.496 1731.27 554.046 1708.33 554.046 1697.9C554.046 1687.47 547.972 1615.92 547.972 1615.92L526.946 1606.13Z", fill: "#4C4973" } }), t._v(" "), n("path", { attrs: { id: "Vector_27", d: "M666.963 717.623L678.254 809.393C678.254 809.393 691.804 859.45 682.771 880.307C673.738 901.164 639.863 997.106 639.863 997.106C639.863 997.106 630.829 944.963 608.246 938.706L621.796 819.822C621.796 819.822 589.463 745.635 596.596 735.801C603.729 725.966 666.963 717.623 666.963 717.623Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_28", d: "M264.979 723.88L269.496 807.308C269.496 807.308 253.688 880.307 285.304 957.478L289.821 990.849L319.179 1042.99C319.179 1042.99 325.954 992.934 339.504 992.934C339.504 992.934 325.954 959.563 330.471 940.792C334.988 922.021 328.213 821.908 328.213 821.908L339.504 740.919L264.979 723.88Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_29", d: "M617.279 602.91H642.121C642.121 602.91 700.838 728.052 678.254 730.137C655.671 732.223 583.404 748.908 581.146 740.566C578.888 732.223 617.279 602.91 617.279 602.91Z", fill: "#D0CDE1" } }), t._v(" "), n("path", { attrs: { id: "Vector_30", d: "M289.821 613.339L269.496 632.11C269.496 632.11 242.396 725.966 262.721 736.394C283.046 746.823 359.829 759.337 364.346 750.994C368.863 742.652 289.821 613.339 289.821 613.339Z", fill: "#D0CDE1" } }), t._v(" "), n("path", { attrs: { id: "Vector_31", d: "M233.729 1651.5L231.136 1650.61C230.566 1650.41 173.853 1630.34 147.286 1584.84C120.719 1539.33 133.728 1484.55 133.862 1484L134.474 1481.5L137.066 1482.4C137.636 1482.6 194.348 1502.67 220.916 1548.17C247.483 1593.67 234.474 1648.46 234.34 1649.01L233.729 1651.5ZM151.541 1582.72C174.002 1621.19 218.818 1640.91 230.173 1645.42C232.332 1634.18 239.103 1588.72 216.661 1550.29C194.223 1511.86 149.389 1492.11 138.029 1487.59C135.869 1498.84 129.101 1544.29 151.541 1582.72Z", fill: "#3F3D56" } })]), t._v(" "), n("g", { attrs: { id: "mobile" } }, [n("path", { attrs: { id: "Vector_32", d: "M3236.49 132.581V1685.29C3236.51 1695.37 3233.98 1705.34 3229.08 1714.5C3224.18 1723.66 3217.03 1731.79 3208.12 1738.34C3193.58 1749.13 3175 1755.05 3155.79 1755.02H2426.77C2410.7 1755.03 2394.99 1750.9 2381.67 1743.16C2370.7 1736.74 2361.72 1728.12 2355.52 1718.03C2349.31 1707.94 2346.07 1696.7 2346.07 1685.29V132.581C2346.05 123.439 2348.11 114.382 2352.16 105.928C2356.2 97.4733 2362.13 89.7868 2369.63 83.3071C2377.12 76.8274 2386.03 71.6816 2395.83 68.1633C2405.64 64.6451 2416.15 62.8234 2426.77 62.8024H2535.87V74.8992C2535.83 90.1002 2542.8 104.694 2555.26 115.471C2567.72 126.247 2584.64 132.324 2602.3 132.365H2973.09C2987.28 132.388 3001.1 128.455 3012.48 121.155C3014.79 119.705 3016.97 118.121 3019.02 116.412C3025.52 111.041 3030.68 104.595 3034.21 97.4601C3037.73 90.3257 3039.54 82.6512 3039.52 74.8992V62.8024H3155.79C3166.42 62.8214 3176.93 64.6417 3186.74 68.1592C3196.54 71.6768 3205.45 76.8226 3212.94 83.3026C3220.44 89.7827 3226.37 97.47 3230.42 105.925C3234.46 114.381 3236.52 123.438 3236.49 132.581Z", fill: "#4C4973" } }), t._v(" "), n("g", { attrs: { id: "clouds" } }, [n("path", { attrs: { id: "cloud2", d: "M3144.54 516.041C3146.02 509.871 3145.51 503.47 3143.06 497.533C3140.61 491.595 3136.32 486.348 3130.65 482.361C3124.98 478.374 3118.16 475.799 3110.91 474.916C3103.66 474.032 3096.27 474.874 3089.53 477.35C3079.85 466.745 3066.49 459.077 3051.39 455.461C3036.28 451.846 3020.24 452.472 3005.58 457.249C2991.63 443.675 2973.22 434.066 2952.79 429.694C2932.35 425.323 2910.86 426.395 2891.15 432.769C2871.44 439.143 2854.44 450.517 2842.41 465.387C2830.38 480.257 2823.88 497.921 2823.77 516.041H3144.54Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "cloud1", d: "M2698.28 630.904C2698.28 612.744 2691.85 595.014 2679.86 580.071C2667.87 565.128 2650.88 553.68 2631.15 547.248C2611.41 540.816 2589.87 539.705 2569.38 544.063C2548.9 548.422 2530.44 558.042 2516.46 571.646C2499.03 565.966 2479.74 566.186 2462.49 572.261C2445.24 578.336 2431.31 589.814 2423.5 604.38C2413.26 602.864 2402.74 604.832 2394.16 609.868C2385.57 614.904 2379.6 622.614 2377.5 631.37H2698.27C2698.27 631.214 2698.28 631.06 2698.28 630.904Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "cloud3", d: "M3122.56 730.243C3122.56 715.026 3117.18 700.169 3107.13 687.647C3097.08 675.125 3082.84 665.531 3066.3 660.142C3049.77 654.752 3031.72 653.821 3014.55 657.473C2997.38 661.125 2981.91 669.187 2970.2 680.587C2955.59 675.827 2939.43 676.011 2924.98 681.102C2910.52 686.192 2898.85 695.811 2892.31 708.017C2883.73 706.746 2874.91 708.395 2867.72 712.616C2860.52 716.836 2855.52 723.296 2853.76 730.633H3122.55C3122.55 730.503 3122.56 730.373 3122.56 730.243Z", fill: "#EFEFEF" } })]), t._v(" "), n("g", { attrs: { id: "snows" } }, [n("path", { attrs: { id: "snow7", d: "M2927.65 619.998L2920.08 613.019L2908.48 622.328L2919.3 632.308L2927.65 625.608L2930.9 622.999L2927.65 619.998ZM2919.35 630.826L2910.2 622.374L2920.01 614.501L2927.65 621.536L2929.17 622.943L2927.65 624.173L2919.35 630.826Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "snow6", d: "M3026.2 557.11L3014.6 566.419L3025.42 576.399L3037.01 567.09L3026.2 557.11ZM3016.32 566.465L3026.13 558.591L3035.29 567.034L3025.47 574.917L3016.32 566.465Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "snow5", d: "M2587.52 778.799L2575.92 788.108L2586.74 798.088L2598.34 788.779L2587.52 778.799ZM2577.65 788.164L2587.46 780.28L2596.62 788.732L2586.81 796.606L2577.65 788.164Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "snow4", d: "M3042.43 820.312L3035.81 814.208L3024.21 823.517L3035.03 833.497L3042.43 827.561L3046.63 824.188L3042.43 820.312ZM3035.1 832.015L3025.94 823.573L3035.75 815.69L3042.43 821.849L3044.91 824.141L3042.43 826.135L3035.1 832.015Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "snow3", opacity: "0.3", d: "M2516.17 721.138L2516.05 721.026L2504.46 730.335L2515.28 740.315L2516.17 739.597L2526.87 731.006L2516.17 721.138ZM2515.34 738.833L2506.18 730.391L2515.99 722.508L2516.17 722.675L2525.15 730.959L2516.17 738.162L2515.34 738.833Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "snow2", d: "M2652.74 681.07V694.712H2668.6V681.07H2652.74ZM2667.38 693.668H2653.96V682.113H2667.38V693.668Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "snow1", d: "M2939.69 788.229V801.871H2955.55V788.229L2939.69 788.229ZM2954.33 800.827H2940.91V789.273H2954.33V800.827Z", fill: "#EFEFEF" } })]), t._v(" "), n("g", { attrs: { id: "frames" } }, [n("path", { attrs: { id: "frame11", opacity: "0.2", d: "M2395.48 387.151V780.733C2384.22 773.676 2373.38 766.131 2363 758.127V410.056C2373.38 401.957 2384.22 394.313 2395.48 387.151Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame10", opacity: "0.2", d: "M2477.78 344.819V822.265C2466.61 817.764 2455.78 813.012 2445.3 808.008V359.383C2455.78 354.286 2466.61 349.431 2477.78 344.819Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame9", opacity: "0.2", d: "M2560.07 317.144V849.148C2549.03 846.306 2538.2 843.24 2527.59 839.951V326.658C2538.19 323.266 2549.02 320.095 2560.07 317.144Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame8", opacity: "0.2", d: "M2642.37 299.933V865.576C2631.39 863.991 2620.56 862.199 2609.89 860.199V305.617C2620.55 303.521 2631.38 301.626 2642.37 299.933Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame7", opacity: "0.2", d: "M2724.66 291.37V873.356C2713.73 872.853 2702.9 872.151 2692.18 871.25V293.783C2702.9 292.786 2713.73 291.982 2724.66 291.37Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame6", opacity: "0.2", d: "M2806.96 290.615V873.31C2796.23 873.813 2785.4 874.12 2774.47 874.232V290C2785.39 290.009 2796.22 290.214 2806.96 290.615Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame5", opacity: "0.2", d: "M2889.25 297.65V865.492C2878.56 867.039 2867.73 868.387 2856.77 869.536V293.904C2867.72 294.948 2878.55 296.196 2889.25 297.65Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame4", opacity: "0.2", d: "M2971.55 313.23V849.129C2960.91 851.859 2950.08 854.378 2939.06 856.686V305.981C2950.08 308.18 2960.91 310.596 2971.55 313.23Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame3", opacity: "0.2", d: "M3053.84 339.023V822.544C3043.3 826.737 3032.47 830.698 3021.36 834.425V327.45C3032.46 331.075 3043.29 334.932 3053.84 339.023Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame2", opacity: "0.2", d: "M3136.14 378.905V781.861C3125.79 788.198 3114.96 794.254 3103.65 800.032V361.061C3114.94 366.717 3125.77 372.665 3136.14 378.905Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "frame1", opacity: "0.2", d: "M3218.43 444.766V715.208C3208.45 726.222 3197.6 736.627 3185.95 746.349V413.941C3197.6 423.549 3208.46 433.849 3218.43 444.766Z", fill: "black" } })])]), t._v(" "), n("g", { attrs: { id: "undraw_weather_notification_4sbo" } }, [n("path", { attrs: { id: "Vector_33", d: "M3138.5 932.328V1651.69C3138.51 1656.37 3137.5 1660.98 3135.55 1665.23C3133.59 1669.47 3130.74 1673.24 3127.19 1676.28C3121.39 1681.28 3113.98 1684.02 3106.33 1684H2815.67C2809.27 1684.01 2803 1682.1 2797.69 1678.51C2793.32 1675.53 2789.74 1671.54 2787.27 1666.86C2784.79 1662.19 2783.5 1656.98 2783.5 1651.69V932.328C2783.49 928.093 2784.31 923.897 2785.92 919.98C2787.54 916.063 2789.9 912.502 2792.89 909.5C2795.88 906.498 2799.43 904.114 2803.34 902.484C2807.25 900.854 2811.44 900.01 2815.67 900H2859.17V905.604C2859.15 912.647 2861.93 919.408 2866.9 924.401C2871.87 929.394 2878.61 932.209 2885.66 932.228H3033.48C3039.14 932.239 3044.65 930.417 3049.19 927.034C3050.11 926.363 3050.98 925.629 3051.8 924.837C3054.39 922.349 3056.45 919.362 3057.85 916.057C3059.25 912.752 3059.98 909.196 3059.97 905.604V900H3106.33C3110.56 900.009 3114.75 900.852 3118.66 902.482C3122.57 904.111 3126.12 906.496 3129.11 909.498C3132.1 912.5 3134.47 916.061 3136.08 919.979C3137.69 923.896 3138.51 928.093 3138.5 932.328V932.328Z", fill: "#3F3D56" } }), t._v(" "), n("path", { attrs: { id: "Vector_34", opacity: "0.1", d: "M2964.74 1545.15C3013.56 1545.15 3053.13 1537.23 3053.13 1527.47C3053.13 1517.71 3013.56 1509.79 2964.74 1509.79C2915.93 1509.79 2876.36 1517.71 2876.36 1527.47C2876.36 1537.23 2915.93 1545.15 2964.74 1545.15Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_35", d: "M3092.67 1084.47C3093.26 1081.61 3093.06 1078.65 3092.08 1075.89C3091.1 1073.14 3089.39 1070.71 3087.13 1068.87C3084.87 1067.02 3082.15 1065.83 3079.26 1065.42C3076.37 1065.01 3073.42 1065.4 3070.74 1066.54C3066.88 1061.63 3061.55 1058.08 3055.53 1056.4C3049.51 1054.73 3043.11 1055.02 3037.27 1057.23C3031.71 1050.94 3024.37 1046.49 3016.22 1044.47C3008.07 1042.44 2999.5 1042.94 2991.65 1045.89C2983.79 1048.84 2977.01 1054.11 2972.21 1061C2967.42 1067.89 2964.83 1076.08 2964.78 1084.47H3092.67Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_36", d: "M2911.68 1141.24C2911.68 1132.83 2909.12 1124.61 2904.34 1117.69C2899.56 1110.77 2892.79 1105.46 2884.92 1102.48C2877.05 1099.5 2868.46 1098.99 2860.29 1101.01C2852.13 1103.03 2844.77 1107.48 2839.19 1113.79C2832.24 1111.15 2824.56 1111.26 2817.68 1114.07C2810.8 1116.89 2805.25 1122.2 2802.13 1128.95C2798.05 1128.25 2793.86 1129.16 2790.43 1131.49C2787.01 1133.83 2784.63 1137.4 2783.79 1141.46H2911.68C2911.68 1141.38 2911.68 1141.31 2911.68 1141.24Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_37", d: "M3071.85 1187.47C3071.85 1180.42 3069.7 1173.53 3065.7 1167.73C3061.69 1161.93 3056.01 1157.49 3049.42 1154.99C3042.83 1152.49 3035.63 1152.06 3028.79 1153.75C3021.94 1155.45 3015.77 1159.18 3011.1 1164.46C3005.28 1162.26 2998.84 1162.34 2993.07 1164.7C2987.31 1167.06 2982.66 1171.52 2980.05 1177.17C2976.63 1176.58 2973.11 1177.35 2970.25 1179.3C2967.38 1181.26 2965.38 1184.25 2964.68 1187.65H3071.84C3071.85 1187.59 3071.85 1187.53 3071.85 1187.47Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_38", d: "M2994.14 1136.39L2991.12 1133.16L2986.5 1137.47L2990.81 1142.09L2994.14 1138.99L2995.43 1137.78L2994.14 1136.39ZM2990.83 1141.41L2987.18 1137.49L2991.1 1133.84L2994.14 1137.1L2994.75 1137.76L2994.14 1138.33L2990.83 1141.41Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_39", d: "M3033.43 1107.26L3028.81 1111.57L3033.12 1116.19L3037.74 1111.88L3033.43 1107.26ZM3029.49 1111.59L3033.4 1107.94L3037.06 1111.85L3033.14 1115.51L3029.49 1111.59Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_40", d: "M2858.53 1209.96L2853.91 1214.28L2858.22 1218.9L2862.85 1214.59L2858.53 1209.96ZM2854.6 1214.3L2858.51 1210.65L2862.16 1214.57L2858.25 1218.21L2854.6 1214.3Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_41", d: "M3039.9 1229.2L3037.26 1226.37L3032.64 1230.68L3036.95 1235.31L3039.9 1232.56L3041.58 1230.99L3039.9 1229.2ZM3036.98 1234.62L3033.33 1230.71L3037.24 1227.06L3039.9 1229.91L3040.89 1230.97L3039.9 1231.89L3036.98 1234.62Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_42", d: "M2830.09 1183.25L2830.04 1183.2L2825.42 1187.51L2829.73 1192.13L2830.09 1191.8L2834.35 1187.82L2830.09 1183.25ZM2829.76 1191.45L2826.1 1187.54L2830.02 1183.88L2830.09 1183.96L2833.67 1187.8L2830.09 1191.14L2829.76 1191.45Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_43", d: "M2884.54 1164.69V1171.01H2890.86V1164.69H2884.54ZM2890.37 1170.52H2885.02V1165.17H2890.37V1170.52Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_44", d: "M2998.94 1214.33V1220.65H3005.26V1214.33L2998.94 1214.33ZM3004.78 1220.17H2999.43V1214.82H3004.78V1220.17Z", fill: "#EFEFEF" } }), t._v(" "), n("path", { attrs: { id: "Vector_45", opacity: "0.2", d: "M2810.23 1060.83V1243.18C2805.74 1239.91 2801.42 1236.41 2797.28 1232.7V1071.44C2801.42 1067.69 2805.74 1064.15 2810.23 1060.83Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_46", opacity: "0.2", d: "M2843.04 1041.22V1262.42C2838.59 1260.33 2834.27 1258.13 2830.09 1255.81V1047.96C2834.27 1045.6 2838.59 1043.35 2843.04 1041.22Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_47", opacity: "0.2", d: "M2875.85 1028.39V1274.87C2871.45 1273.55 2867.13 1272.13 2862.9 1270.61V1032.8C2867.13 1031.23 2871.44 1029.76 2875.85 1028.39Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_48", opacity: "0.2", d: "M2908.66 1020.42V1282.48C2904.28 1281.75 2899.97 1280.92 2895.71 1279.99V1023.05C2899.96 1022.08 2904.28 1021.21 2908.66 1020.42Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_49", opacity: "0.2", d: "M2941.47 1016.45V1286.09C2937.11 1285.85 2932.79 1285.53 2928.52 1285.11V1017.57C2932.79 1017.11 2937.11 1016.74 2941.47 1016.45Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_50", opacity: "0.2", d: "M2974.28 1016.1V1286.07C2970 1286.3 2965.69 1286.44 2961.33 1286.49V1015.82C2965.68 1015.82 2970 1015.92 2974.28 1016.1Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_51", opacity: "0.2", d: "M3007.09 1019.36V1282.44C3002.83 1283.16 2998.51 1283.78 2994.14 1284.32V1017.63C2998.5 1018.11 3002.82 1018.69 3007.09 1019.36Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_52", opacity: "0.2", d: "M3039.9 1026.58V1274.86C3035.66 1276.13 3031.34 1277.29 3026.95 1278.36V1023.22C3031.34 1024.24 3035.66 1025.36 3039.9 1026.58Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_53", opacity: "0.2", d: "M3072.71 1038.53V1262.55C3068.51 1264.49 3064.19 1266.32 3059.76 1268.05V1033.17C3064.18 1034.85 3068.5 1036.64 3072.71 1038.53Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_54", opacity: "0.2", d: "M3105.52 1057.01V1243.7C3101.39 1246.63 3097.08 1249.44 3092.57 1252.12V1048.74C3097.07 1051.36 3101.38 1054.12 3105.52 1057.01Z", fill: "black" } }), t._v(" "), n("g", { attrs: { id: "Frame" } }, [n("path", { attrs: { id: "Vector_55", d: "M2778.62 1290.13C2765.7 1290.13 2759.17 1292.14 2752.84 1294.08C2747.01 1295.87 2741.51 1297.56 2730.23 1297.56C2718.94 1297.56 2713.44 1295.87 2707.61 1294.08C2701.28 1292.14 2694.75 1290.13 2681.83 1290.13C2668.92 1290.13 2662.39 1292.14 2656.07 1294.08C2650.24 1295.87 2644.74 1297.56 2633.47 1297.56C2622.19 1297.56 2616.69 1295.87 2610.86 1294.08C2604.54 1292.14 2598 1290.13 2585.09 1290.13C2572.18 1290.13 2565.65 1292.14 2559.33 1294.08C2553.5 1295.87 2548 1297.56 2536.73 1297.56C2525.46 1297.56 2519.96 1295.87 2514.14 1294.08C2507.82 1292.14 2501.29 1290.13 2488.38 1290.13C2485.96 1290.13 2484 1291.69 2484 1293.61C2484 1295.52 2485.96 1297.08 2488.38 1297.08C2499.65 1297.08 2505.15 1298.77 2510.97 1300.55C2517.29 1302.49 2523.82 1304.5 2536.73 1304.5C2549.64 1304.5 2556.17 1302.49 2562.49 1300.55C2568.32 1298.77 2573.82 1297.08 2585.09 1297.08C2596.37 1297.08 2601.87 1298.77 2607.7 1300.55C2614.02 1302.49 2620.55 1304.5 2633.47 1304.5C2646.38 1304.5 2652.91 1302.49 2659.23 1300.55C2665.05 1298.77 2670.56 1297.08 2681.83 1297.08C2693.11 1297.08 2698.62 1298.77 2704.45 1300.55C2710.77 1302.49 2717.31 1304.5 2730.23 1304.5C2743.14 1304.5 2749.68 1302.49 2756 1300.55C2761.83 1298.77 2767.34 1297.08 2778.62 1297.08C2781.04 1297.08 2783 1295.52 2783 1293.61C2783 1291.69 2781.04 1290.13 2778.62 1290.13Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_56", d: "M2759.3 1310.67C2758.43 1308.88 2755.9 1307.99 2753.64 1308.68L2752.84 1308.92C2750.2 1309.73 2747.71 1310.49 2744.75 1311.1C2742.41 1311.59 2741 1313.48 2741.61 1315.34C2742.12 1316.9 2743.9 1317.94 2745.85 1317.94C2746.21 1317.94 2746.58 1317.9 2746.95 1317.82C2750.4 1317.11 2753.25 1316.24 2756 1315.4L2756.79 1315.16C2759.05 1314.47 2760.17 1312.46 2759.3 1310.67Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_57", d: "M2727.28 1312.36C2717.94 1312.09 2712.92 1310.55 2707.61 1308.92C2701.28 1306.98 2694.75 1304.98 2681.83 1304.98C2668.92 1304.98 2662.39 1306.98 2656.07 1308.92C2650.24 1310.71 2644.74 1312.4 2633.47 1312.4C2622.19 1312.4 2616.69 1310.71 2610.86 1308.92C2604.54 1306.98 2598 1304.98 2585.09 1304.98C2572.18 1304.98 2565.65 1306.98 2559.33 1308.92C2554.03 1310.55 2549.02 1312.08 2539.71 1312.36C2537.3 1312.43 2535.41 1314.04 2535.5 1315.95C2535.59 1317.87 2537.62 1319.36 2540.03 1319.29C2550.81 1318.98 2556.75 1317.16 2562.49 1315.4C2568.32 1313.61 2573.82 1311.92 2585.09 1311.92C2596.37 1311.92 2601.87 1313.61 2607.7 1315.4C2614.02 1317.34 2620.55 1319.34 2633.47 1319.34C2646.38 1319.34 2652.91 1317.34 2659.23 1315.4C2665.06 1313.61 2670.56 1311.92 2681.83 1311.92C2693.11 1311.92 2698.62 1313.61 2704.45 1315.4C2710.2 1317.16 2716.15 1318.99 2726.97 1319.3C2729.37 1319.36 2731.42 1317.87 2731.5 1315.95C2731.59 1314.04 2729.7 1312.43 2727.28 1312.36Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_58", d: "M2681.83 1319.82C2668.92 1319.82 2662.39 1321.82 2656.07 1323.76C2650.24 1325.55 2644.74 1327.24 2633.47 1327.24C2622.19 1327.24 2616.69 1325.55 2610.86 1323.76C2604.54 1321.82 2598 1319.82 2585.09 1319.82C2582.67 1319.82 2580.71 1321.37 2580.71 1323.29C2580.71 1325.21 2582.67 1326.76 2585.09 1326.76C2596.37 1326.76 2601.87 1328.45 2607.7 1330.24C2614.02 1332.18 2620.55 1334.18 2633.47 1334.18C2646.38 1334.18 2652.91 1332.18 2659.23 1330.24C2665.05 1328.45 2670.56 1326.76 2681.83 1326.76C2684.25 1326.76 2686.21 1325.21 2686.21 1323.29C2686.21 1321.37 2684.25 1319.82 2681.83 1319.82Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_59", d: "M2522.26 1311.11C2519.28 1310.5 2516.78 1309.73 2514.13 1308.92C2511.88 1308.23 2509.34 1309.12 2508.47 1310.9C2507.59 1312.69 2508.71 1314.7 2510.97 1315.39C2513.73 1316.24 2516.59 1317.12 2520.06 1317.83C2520.43 1317.91 2520.8 1317.95 2521.16 1317.95C2523.11 1317.95 2524.89 1316.91 2525.4 1315.34C2526.01 1313.49 2524.6 1311.59 2522.26 1311.11Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_60", d: "M2690.9 1243.39C2677.81 1228.52 2656.35 1219.63 2633.5 1219.63C2594.95 1219.63 2563.58 1244.49 2563.58 1275.05C2563.58 1276.37 2563.64 1277.7 2563.76 1279.01C2563.92 1280.84 2565.84 1282.24 2568.12 1282.24C2568.23 1282.24 2568.33 1282.23 2568.44 1282.23C2570.85 1282.09 2572.67 1280.43 2572.5 1278.52C2572.39 1277.37 2572.34 1276.21 2572.34 1275.05C2572.34 1248.32 2599.78 1226.58 2633.5 1226.58C2653.49 1226.58 2672.26 1234.35 2683.71 1247.36C2685.09 1248.94 2687.82 1249.32 2689.81 1248.23C2691.79 1247.13 2692.28 1244.97 2690.9 1243.39Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_61", d: "M2544.56 1271.58H2516.47C2514.05 1271.58 2512.09 1273.14 2512.09 1275.05C2512.09 1276.97 2514.05 1278.52 2516.47 1278.52H2544.56C2546.97 1278.52 2548.94 1276.97 2548.94 1275.05C2548.94 1273.14 2546.97 1271.58 2544.56 1271.58Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_62", d: "M2633.5 1178.82C2631.08 1178.82 2629.12 1180.37 2629.12 1182.29V1204.55C2629.12 1206.47 2631.08 1208.02 2633.5 1208.02C2635.92 1208.02 2637.88 1206.47 2637.88 1204.55V1182.29C2637.88 1180.37 2635.92 1178.82 2633.5 1178.82Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_63", d: "M2719.35 1207C2717.64 1205.65 2714.87 1205.65 2713.16 1207L2693.3 1222.75C2691.59 1224.1 2691.59 1226.3 2693.3 1227.66C2694.15 1228.33 2695.27 1228.67 2696.39 1228.67C2697.51 1228.67 2698.64 1228.33 2699.49 1227.66L2719.35 1211.91C2721.06 1210.56 2721.06 1208.36 2719.35 1207Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_64", d: "M2603.51 1208.59L2599.93 1201.73C2599 1199.96 2596.44 1199.12 2594.2 1199.85C2591.97 1200.59 2590.91 1202.62 2591.83 1204.39L2595.42 1211.25C2596.11 1212.58 2597.75 1213.39 2599.46 1213.39C2600.02 1213.39 2600.59 1213.31 2601.14 1213.13C2603.37 1212.39 2604.43 1210.36 2603.51 1208.59Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_65", d: "M2728.37 1243.91C2727.44 1242.13 2724.88 1241.29 2722.65 1242.03L2714 1244.87C2711.76 1245.6 2710.7 1247.63 2711.63 1249.4C2712.33 1250.74 2713.96 1251.55 2715.68 1251.55C2716.23 1251.55 2716.8 1251.46 2717.35 1251.28L2726 1248.44C2728.23 1247.71 2729.3 1245.68 2728.37 1243.91Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_66", d: "M2672.8 1199.85C2670.56 1199.12 2668 1199.96 2667.07 1201.73L2663.49 1208.59C2662.57 1210.36 2663.63 1212.39 2665.86 1213.13C2666.41 1213.31 2666.98 1213.39 2667.54 1213.39C2669.25 1213.39 2670.89 1212.58 2671.58 1211.25L2675.17 1204.39C2676.09 1202.62 2675.03 1200.59 2672.8 1199.85Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_67", d: "M2553 1244.87L2544.35 1242.03C2542.12 1241.29 2539.56 1242.13 2538.63 1243.9C2537.7 1245.68 2538.76 1247.71 2541 1248.44L2549.65 1251.28C2550.2 1251.46 2550.77 1251.55 2551.32 1251.55C2553.04 1251.55 2554.67 1250.74 2555.37 1249.4C2556.3 1247.63 2555.24 1245.6 2553 1244.87Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_68", d: "M2552.25 1201.08C2545.78 1201.08 2539.53 1202.79 2534.38 1205.93C2532.04 1205.35 2529.62 1205.06 2527.17 1205.06C2513.69 1205.06 2502.72 1213.75 2502.72 1224.43C2502.72 1226.35 2504.69 1227.9 2507.1 1227.9H2577.32C2579.74 1227.9 2581.7 1226.35 2581.7 1224.43C2581.7 1211.56 2568.49 1201.08 2552.25 1201.08ZM2512.11 1220.96C2514.01 1215.79 2520.04 1212 2527.17 1212C2529.33 1212 2531.45 1212.36 2533.48 1213.07C2535.08 1213.63 2536.94 1213.38 2538.23 1212.44C2542.1 1209.59 2547.08 1208.02 2552.25 1208.02C2562.16 1208.02 2570.46 1213.57 2572.48 1220.96H2512.11Z", fill: "white" } }), t._v(" "), n("path", { attrs: { id: "Vector_69", d: "M2707.06 1259.39C2704.61 1259.39 2702.19 1259.68 2699.85 1260.27C2694.7 1257.12 2688.45 1255.41 2681.99 1255.41C2665.74 1255.41 2652.53 1265.89 2652.53 1278.76C2652.53 1280.68 2654.49 1282.24 2656.91 1282.24H2727.13C2729.55 1282.24 2731.51 1280.68 2731.51 1278.76C2731.51 1268.08 2720.54 1259.39 2707.06 1259.39ZM2661.75 1275.29C2663.77 1267.91 2672.07 1262.36 2681.99 1262.36C2687.15 1262.36 2692.13 1263.93 2696.01 1266.77C2697.29 1267.72 2699.15 1267.96 2700.75 1267.4C2702.78 1266.69 2704.91 1266.33 2707.06 1266.33C2714.19 1266.33 2720.22 1270.12 2722.12 1275.29H2661.75Z", fill: "white" } })]), t._v(" "), n("path", { attrs: { id: "Vector_70", opacity: "0.2", d: "M3138.33 1087.52V1212.82C3134.35 1217.92 3130.02 1222.74 3125.38 1227.25V1073.24C3130.03 1077.69 3134.35 1082.46 3138.33 1087.52Z", fill: "black" } }), t._v(" "), n("g", { attrs: { id: "Group 1" } }, [n("path", { attrs: { id: "Vector_71", d: "M2630.5 1708.71C2630.5 1722.09 2581.77 1732.93 2521.55 1733H2521C2491.61 1733 2464.91 1730.43 2445.24 1726.26C2444.4 1726.07 2443.57 1725.89 2442.76 1725.7C2439.42 1724.95 2436.29 1724.14 2433.41 1723.3C2419.65 1719.23 2411.5 1714.18 2411.5 1708.71C2411.5 1704.28 2416.83 1700.14 2426.15 1696.56C2431.98 1694.41 2437.97 1692.7 2444.05 1691.43C2445.33 1691.14 2446.64 1690.87 2447.98 1690.61C2467.36 1686.76 2492.95 1684.42 2521 1684.42C2526.45 1684.42 2531.81 1684.51 2537.05 1684.68C2589.91 1686.4 2630.5 1696.5 2630.5 1708.71Z", fill: "#3F3D56" } }), t._v(" "), n("path", { attrs: { id: "Vector_72", d: "M2465.93 1488.6L2470.6 1525.06C2470.6 1525.06 2472.47 1537.21 2474.34 1543.75C2474.34 1543.75 2472.47 1578.33 2487.43 1602.64L2496.77 1620.4L2498.64 1646.57L2522.01 1649.37L2517.34 1610.11C2517.34 1610.11 2515.47 1591.42 2517.34 1583.94C2519.21 1576.46 2507.99 1541.88 2507.99 1541.88C2507.99 1541.88 2522.94 1493.28 2511.73 1481.13C2500.51 1468.98 2465.93 1488.6 2465.93 1488.6Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_73", d: "M2507.06 1639.09C2507.06 1639.09 2496.77 1639.09 2495.84 1641.89C2494.9 1644.7 2479.95 1669.93 2479.95 1669.93C2479.95 1669.93 2466.86 1690.5 2485.56 1691.43C2504.25 1692.37 2509.86 1683.95 2509.86 1683.95C2509.86 1683.95 2526.68 1656.85 2527.62 1652.18C2528.55 1647.5 2520.6 1637.49 2520.6 1637.49C2520.6 1637.49 2509.86 1644.7 2507.06 1639.09Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_74", d: "M2520.14 1181.09C2537.69 1181.09 2551.92 1166.86 2551.92 1149.31C2551.92 1131.76 2537.69 1117.53 2520.14 1117.53C2502.59 1117.53 2488.36 1131.76 2488.36 1149.31C2488.36 1166.86 2502.59 1181.09 2520.14 1181.09Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_75", d: "M2494.44 1159.12C2494.44 1159.12 2494.44 1193.71 2482.29 1196.51C2470.13 1199.32 2499.11 1231.1 2515 1227.36C2530.89 1223.62 2537.43 1198.38 2537.43 1198.38C2537.43 1198.38 2523.41 1180.62 2529.02 1171.28C2534.63 1161.93 2494.44 1159.12 2494.44 1159.12Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_76", d: "M2507.99 1207.26C2503.53 1207.12 2499.17 1205.92 2495.26 1203.75C2491.36 1201.58 2488.04 1198.51 2485.57 1194.79C2485.57 1194.79 2472.47 1196.98 2470.6 1197.91C2468.73 1198.85 2436.02 1209.13 2428.54 1230.63L2458.45 1268.95C2458.45 1268.95 2451.91 1323.16 2458.45 1347.46C2462.35 1362.02 2461.36 1377.45 2455.65 1391.4C2455.65 1391.4 2452.84 1392.33 2457.52 1394.2C2462.19 1396.07 2569.68 1374.57 2571.55 1368.96C2573.42 1363.35 2569.68 1363.35 2572.48 1360.55C2575.29 1357.75 2582.77 1340.92 2575.29 1335.31C2567.81 1329.71 2563.14 1268.02 2563.14 1268.02L2582.77 1218.48C2582.77 1218.48 2546.89 1189.81 2533.98 1193.39C2533.98 1193.39 2531.36 1207.26 2507.99 1207.26Z", fill: "#D0CDE1" } }), t._v(" "), n("path", { attrs: { id: "Vector_77", d: "M2520.14 1469.91C2520.14 1469.91 2518.27 1511.04 2522.01 1526.93C2525.75 1542.82 2525.75 1549.36 2525.75 1549.36C2525.75 1549.36 2520.14 1576.46 2522.94 1601.7C2525.75 1626.94 2519.67 1667.62 2519.67 1667.62L2542.57 1674.61L2556.59 1603.57C2556.59 1603.57 2567.81 1559.64 2561.27 1539.08C2561.27 1539.08 2565.01 1476.45 2567.81 1469.91C2570.61 1463.37 2520.14 1469.91 2520.14 1469.91Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_78", d: "M2495.06 1154.97C2495.48 1151.99 2496.37 1148.74 2498.91 1147.12C2501.55 1145.45 2504.96 1146.14 2508.08 1146.36C2511.19 1146.59 2515.01 1145.81 2516.04 1142.86C2516.68 1141.02 2515.99 1138.82 2516.98 1137.14C2518.57 1134.48 2523.41 1134.78 2524.25 1131.8C2524.51 1130.85 2524.25 1129.79 2524.64 1128.89C2525.15 1127.67 2526.6 1127.18 2527.89 1126.88C2532.61 1125.79 2537.46 1125.36 2542.29 1125.61C2542.77 1125.7 2543.26 1125.6 2543.66 1125.34C2543.88 1125.13 2544.03 1124.87 2544.1 1124.57C2545.2 1121.3 2544.04 1117.59 2541.86 1114.91C2539.55 1112.33 2536.7 1110.3 2533.51 1108.94C2526.45 1105.52 2518.79 1103.49 2510.97 1102.95C2505 1102.58 2498.75 1103.23 2493.67 1106.37C2492.16 1107.32 2490.76 1108.44 2489.5 1109.69C2483.98 1115.23 2480.38 1122.4 2479.23 1130.14C2478.11 1137.86 2478.97 1145.73 2481.74 1153.03C2483.35 1157.42 2485.89 1161.96 2489.83 1164.66C2491.94 1166.11 2493.76 1167.45 2494.64 1164.99C2495.57 1162.38 2494.65 1157.86 2495.06 1154.97Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_79", d: "M2460.32 1385.79C2460.32 1385.79 2446.3 1404.48 2449.1 1417.57C2451.91 1430.65 2462.19 1452.15 2462.19 1452.15C2462.19 1452.15 2456.58 1494.21 2465.93 1494.21C2475.28 1494.21 2515.47 1492.34 2516.4 1487.67C2517.34 1483 2513.6 1436.26 2513.6 1436.26C2513.6 1436.26 2518.27 1477.39 2521.08 1477.39C2523.88 1477.39 2572.48 1482.06 2574.35 1479.26C2576.22 1476.45 2579.96 1404.48 2579.96 1404.48C2579.96 1404.48 2585.06 1370.54 2568.96 1366.01C2552.86 1361.49 2460.32 1385.79 2460.32 1385.79Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_80", d: "M2535.1 1667.13C2535.1 1667.13 2518.27 1657.78 2517.34 1665.26C2516.4 1672.74 2506.12 1699.84 2506.12 1699.84C2506.12 1699.84 2495.84 1721.34 2518.27 1722.28C2540.7 1723.21 2546.31 1712.93 2546.31 1708.26C2546.31 1703.58 2543.8 1671.52 2543.8 1671.52L2535.1 1667.13Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_81", d: "M2593.05 1268.95L2597.72 1310.08C2597.72 1310.08 2603.33 1332.51 2599.59 1341.86C2595.85 1351.2 2581.83 1394.2 2581.83 1394.2C2581.83 1394.2 2578.09 1370.83 2568.74 1368.03L2574.35 1314.75C2574.35 1314.75 2560.97 1281.5 2563.92 1277.1C2566.88 1272.69 2593.05 1268.95 2593.05 1268.95Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_82", d: "M2426.67 1271.75L2428.54 1309.14C2428.54 1309.14 2422 1341.86 2435.08 1376.44L2436.95 1391.4L2449.1 1414.76C2449.1 1414.76 2451.91 1392.33 2457.52 1392.33C2457.52 1392.33 2451.91 1377.38 2453.78 1368.96C2455.65 1360.55 2452.84 1315.69 2452.84 1315.69L2457.52 1279.39L2426.67 1271.75Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_83", d: "M2572.48 1217.54H2582.77C2582.77 1217.54 2607.07 1273.62 2597.72 1274.56C2588.37 1275.49 2558.46 1282.97 2557.53 1279.23C2556.59 1275.49 2572.48 1217.54 2572.48 1217.54Z", fill: "#D0CDE1" } }), t._v(" "), n("path", { attrs: { id: "Vector_84", d: "M2436.95 1222.22L2428.54 1230.63C2428.54 1230.63 2417.32 1272.69 2425.74 1277.36C2434.15 1282.04 2465.93 1287.64 2467.8 1283.91C2469.67 1280.17 2436.95 1222.22 2436.95 1222.22Z", fill: "#D0CDE1" } })])])])]), t._v(" "), n("defs", [n("clipPath", { attrs: { id: "clip0" } }, [n("rect", { attrs: { width: "3381", height: "1861", fill: "white" } })])])])])
      }), [], !1, null, "b76ae9e6", null).exports),
      f = n(14),
      p = n.n(f),
      u = { data: function() { return { display: !0 } }, methods: { scrollDown: function() { this.$root.StatusData.weatherRequested = !0, this.display = !1, window.scroll({ top: 1600, left: 0, behavior: "smooth" }) } } },
      h = (n(25), o(u, (function() {
        var t = this.$createElement,
          e = this._self._c || t;
        return e("transition", { attrs: { name: "fade" } }, [this.display ? e("button", { staticClass: "scroll-down", on: { click: this.scrollDown } }) : this._e()])
      }), [], !1, null, "977f23e2", null).exports),
      v = [function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("div", { staticClass: "footer" }, [r("div", { staticClass: "footer-text" }, [r("p", [t._v("Hi!")]), t._v(" "), r("h3", [r("p", [t._v("Wanna say something, or grab a cup of coffee, or discuss on any projects,")]), t._v(" "), r("p", [t._v("Connect with me on")]), t._v(" "), r("a", { attrs: { href: "mailto:balajilitsv@gmail.com", target: "_blank" } }, [r("img", { attrs: { src: n(27), width: "40px", height: "50px", alt: "mail" } })]), t._v(" "), r("a", { attrs: { href: "https://www.linkedin.com/in/balaji-saravanan/", target: "_blank" } }, [r("img", { attrs: { src: n(28), width: "50px", height: "50px", alt: "linkedin" } })]), t._v(" "), r("a", { attrs: { href: "https://www.instagram.com/balaji_twoby12", target: "_blank" } }, [r("img", { attrs: { src: n(29), width: "45px", height: "45px", alt: "instagram" } })]), t._v(" "), r("a", { attrs: { href: "https://twitter.com/balaji_twoby12", target: "_blank" } }, [r("img", { attrs: { src: n(30), width: "45px", height: "45px", alt: "twitter" } })])]), t._v(" "), r("h1", [t._v("\n\t\t\t\t-Balaji SV\n\t\t\t")])]), t._v(" "), r("div", { staticClass: "avatar-combo" }, [r("div", { staticClass: "avatar avatar1" })])])
      }],
      m = (n(31), o({}, (function() {
        var t = this.$createElement;
        this._self._c;
        return this._m(0)
      }), v, !1, null, "53b5ff14", null).exports),
      _ = { props: { text: { type: String, required: !0 } } },
      w = (n(35), o(_, (function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "loader" }, [n("svg", { attrs: { width: "517", height: "422", viewBox: "0 0 517 422", fill: "none", xmlns: "http://www.w3.org/2000/svg" } }, [n("g", { attrs: { id: "undraw_weather_app_i5sm 1" } }, [n("g", { attrs: { id: "sun-rays" } }, [n("path", { attrs: { id: "Vector", d: "M164.536 101.5H164.536C156.839 101.5 150.595 107.71 150.595 115.375V142.553C150.595 150.218 156.839 156.428 164.536 156.428H164.536C172.232 156.428 178.476 150.218 178.476 142.553V115.375C178.476 107.71 172.232 101.5 164.536 101.5Z", fill: "#4C4973", stroke: "#4F4F4F" } }), t._v(" "), n("path", { attrs: { id: "Vector_2", d: "M268.426 161.397L268.426 161.397C264.576 154.76 256.049 152.488 249.382 156.318L225.73 169.907C219.063 173.738 216.777 182.222 220.628 188.859L220.628 188.859C224.479 195.496 233.005 197.769 239.672 193.938L263.324 180.349C269.991 176.519 272.277 168.034 268.426 161.397Z", fill: "#4C4973", stroke: "#4F4F4F" } }), t._v(" "), n("path", { attrs: { id: "Vector_3", d: "M60.2866 280.57L60.2866 280.57C64.1372 287.207 72.6641 289.48 79.3309 285.649L102.983 272.06C109.65 268.23 111.936 259.745 108.085 253.108C104.234 246.471 95.7075 244.199 89.0406 248.029L65.3888 261.618C58.7219 265.449 56.436 273.933 60.2866 280.57Z", fill: "#4C4973", stroke: "#4F4F4F" } }), t._v(" "), n("path", { attrs: { id: "Vector_4", d: "M60.4658 161.088L60.4658 161.088C56.6152 167.725 58.9011 176.21 65.568 180.041L89.2198 193.63C95.8867 197.46 104.414 195.188 108.264 188.551L108.264 188.551C112.115 181.914 109.829 173.429 103.162 169.598L79.5101 156.009C72.8433 152.179 64.3164 154.451 60.4658 161.088Z", fill: "#4C4973", stroke: "#4F4F4F" } }), t._v(" "), n("path", { attrs: { id: "Vector_5", d: "M224.425 253.945L224.425 253.945C220.574 260.582 222.86 269.067 229.527 272.897L253.179 286.486C259.846 290.316 268.373 288.044 272.223 281.407L272.223 281.407C276.074 274.77 273.788 266.285 267.121 262.455L243.469 248.866C236.803 245.035 228.276 247.308 224.425 253.945Z", fill: "#4C4973", stroke: "#4F4F4F" } }), t._v(" "), n("path", { attrs: { id: "Vector_6", d: "M161.079 282.111H161.079C153.382 282.111 147.138 288.321 147.138 295.986V323.164C147.138 330.829 153.382 337.039 161.079 337.039H161.079C168.776 337.039 175.019 330.829 175.019 323.164V295.986C175.019 288.321 168.776 282.111 161.079 282.111Z", fill: "#4C4973", stroke: "#4F4F4F" } })]), t._v(" "), n("path", { attrs: { id: "Vector_7", d: "M164.356 275.554C194.642 275.554 219.193 251.122 219.193 220.984C219.193 190.846 194.642 166.414 164.356 166.414C134.071 166.414 109.52 190.846 109.52 220.984C109.52 251.122 134.071 275.554 164.356 275.554Z", fill: "#4C4973" } }), t._v(" "), n("path", { attrs: { id: "Vector_8", d: "M346.429 269.259L347.3 270.125L348.32 269.443C362.885 259.706 380.36 253.665 398.757 252.028C417.153 250.39 435.71 253.223 452.309 260.195C468.907 267.167 482.862 277.989 492.607 291.402C502.351 304.812 507.5 320.277 507.5 336.038L509 336.038L507.5 336.038C507.502 341.914 506.791 347.775 505.378 353.526L505.355 353.62L505.344 353.716C503.284 371.925 493.401 388.879 477.537 401.248C461.668 413.621 440.97 420.499 419.471 420.5H116.359C115.086 420.5 113.818 420.471 112.551 420.424L112.494 420.422L112.436 420.424C111.212 420.472 109.984 420.5 108.752 420.5C95.8791 420.5 83.2067 417.814 71.8267 412.68C60.4468 407.547 50.7121 400.126 43.4451 391.074C36.1795 382.023 31.5969 371.612 30.0681 360.739C28.5395 349.867 30.106 338.834 34.6431 328.582C39.1813 318.328 46.562 309.15 56.1737 301.85C65.7862 294.549 77.3357 289.352 89.8337 286.72C102.332 284.088 115.389 284.104 127.878 286.765C140.368 289.427 151.9 294.651 161.489 301.974L163.101 303.205L163.806 301.303C169.543 285.833 179.987 271.926 194.095 261.031C208.204 250.134 225.459 242.651 244.088 239.371C262.717 236.091 282.027 237.137 300.024 242.398C318.02 247.659 334.035 256.939 346.429 269.259Z", fill: "white", stroke: "#4C4973", "stroke-width": "3" } }), t._v(" "), n("g", { attrs: { id: "girl" } }, [n("path", { attrs: { id: "Vector_9", opacity: "0.1", d: "M382.951 106.343C382.951 106.343 386.583 121.523 381.136 123.33C375.688 125.137 370.966 132.365 370.966 132.365L378.956 145.738L406.195 152.605L414.549 144.654L420.723 127.667L414.549 123.33C414.549 123.33 408.738 125.137 408.375 119.354C408.201 115.014 408.322 110.667 408.738 106.343L382.951 106.343Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_10", d: "M420.723 206.095C420.723 206.095 400.021 201.036 393.121 204.65C386.22 208.264 365.882 208.625 365.882 208.625C365.882 208.625 348.812 236.093 352.807 250.189C356.802 264.284 373.509 272.958 373.509 272.958L429.803 273.32L438.882 236.455C438.882 236.455 434.524 211.155 430.892 209.71C427.26 208.264 420.723 206.095 420.723 206.095Z", fill: "#3F3D56" } }), t._v(" "), n("path", { attrs: { id: "Vector_11", d: "M444.33 323.919L434.887 343.074C434.887 343.074 417.817 340.906 424.718 363.314C424.718 363.314 422.902 380.301 419.27 383.915C415.638 387.529 422.176 411.383 435.25 404.516C442.605 400.653 443.065 396.219 442.059 393.078C440.499 388.394 440.194 383.386 441.176 378.549C442.488 372.435 444.852 364.616 449.052 357.892C457.405 344.52 465.395 331.509 465.395 331.509L444.33 323.919Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_12", d: "M394.5 111C407.479 111 418 97.1208 418 80C418 62.8792 407.479 49 394.5 49C381.521 49 371 62.8792 371 80C371 97.1208 381.521 111 394.5 111Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_13", d: "M395.663 144.654L374.598 125.498C374.598 125.498 365.155 133.45 364.066 133.45C362.976 133.45 348.812 137.787 348.449 139.594C348.085 141.401 360.797 160.556 360.797 160.556C360.797 160.556 357.892 174.652 360.797 180.796C363.703 186.94 361.523 213.324 361.523 213.324C361.523 213.324 380.772 206.457 390.942 209.71C401.111 212.962 430.892 209.71 430.892 209.71C430.892 209.71 435.25 181.88 433.435 178.266C431.619 174.652 431.255 154.051 431.255 154.051L446.872 137.064C446.872 137.064 443.604 124.053 431.255 123.33C418.907 122.607 411.28 121.884 411.28 121.884L395.663 144.654Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_14", d: "M370.966 233.563C370.966 233.563 330.289 215.131 313.946 206.457C297.602 197.783 272.542 204.65 280.533 224.167C288.523 243.683 333.195 262.839 333.195 262.839C333.195 262.839 347.722 273.681 356.439 273.32C365.155 272.958 377.685 273.139 377.685 273.139L370.966 233.563Z", fill: "#3F3D56" } }), t._v(" "), n("path", { attrs: { id: "Vector_15", d: "M433.798 236.093C433.798 236.093 506.798 236.816 502.077 263.923C497.356 291.029 469.39 336.207 464.305 337.291C459.221 338.376 440.698 330.424 440.698 327.894C440.698 325.364 458.494 278.741 458.494 278.741L414.912 265.369L433.798 236.093Z", fill: "#3F3D56" } }), t._v(" "), n("path", { attrs: { id: "Vector_16", d: "M447.599 155.135C447.599 155.135 451.957 196.698 449.778 203.204C447.599 209.71 439.972 227.419 430.166 236.093C420.36 244.768 406.559 288.5 398.932 267.537C391.305 246.575 411.28 235.009 411.28 235.009L431.303 206.975L431.491 161.351L447.599 155.135Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_17", opacity: "0.1", d: "M365.882 242.238C365.882 242.238 401.837 254.887 405.832 253.08C409.827 251.273 418.544 257.779 418.544 257.779C422.572 256.921 426.731 256.862 430.782 257.606C434.833 258.35 438.696 259.883 442.151 262.116C453.773 269.706 456.315 278.38 453.773 278.741C451.231 279.103 442.151 275.127 442.151 275.127C442.151 275.127 428.35 272.236 419.997 274.766C411.643 277.295 400.756 271.962 400.756 271.962L356.439 262.116L365.882 242.238Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_18", d: "M348.449 170.676C348.449 170.676 348.812 215.492 354.26 220.914C359.707 226.335 365.518 233.563 370.966 236.816C376.414 240.069 379.32 247.659 379.32 247.659C379.32 247.659 405.469 285.608 405.832 268.26C406.195 250.912 392.394 237.178 392.394 237.178L389.693 234.618C383.784 229.084 378.441 222.98 373.742 216.397C372.67 214.827 371.367 213.425 369.877 212.24C365.155 208.625 364.066 168.869 364.066 168.869L348.449 170.676Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_19", d: "M439.246 132.727L446.873 137.064C446.873 137.064 449.778 156.219 451.231 158.749C452.684 161.279 433.435 167.785 430.529 165.978C427.624 164.171 426.171 146.461 426.171 146.461L439.246 132.727Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_20", d: "M353.17 139.232H348.449C348.449 139.232 343.364 144.654 343.727 156.219C344.09 167.785 339.369 175.013 342.274 176.097C345.18 177.182 359.673 171.443 359.508 173.047C359.344 174.652 366.971 171.76 366.971 171.76L361.887 152.605L353.17 139.232Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_21", opacity: "0.1", d: "M316.67 213.324C316.67 213.324 338.825 222.721 344.999 224.167C351.173 225.612 371.128 242.529 371.128 242.529L357.507 263.113C357.507 263.113 343.546 261.393 335.919 259.947C328.292 258.502 282.894 228.504 290.521 223.444C298.148 218.384 316.67 213.324 316.67 213.324Z", fill: "black" } }), t._v(" "), n("path", { attrs: { id: "Vector_22", d: "M312.13 213.324C312.13 213.324 334.284 222.721 340.458 224.167C346.633 225.612 370.966 242.238 370.966 242.238L358.981 265.369C358.981 265.369 339.006 261.393 331.379 259.947C323.752 258.502 278.353 228.504 285.98 223.444C293.607 218.384 312.13 213.324 312.13 213.324Z", fill: "#3F3D56" } }), t._v(" "), n("path", { attrs: { id: "Vector_23", d: "M396 89C408.15 89 418 75.3447 418 58.5C418 41.6553 408.15 28 396 28C383.85 28 374 41.6553 374 58.5C374 75.3447 383.85 89 396 89Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_24", d: "M397.528 48.9137C405.551 48.9137 412.055 42.4412 412.055 34.4569C412.055 26.4726 405.551 20 397.528 20C389.504 20 383 26.4726 383 34.4569C383 42.4412 389.504 48.9137 397.528 48.9137Z", fill: "#2F2E41" } }), t._v(" "), n("path", { attrs: { id: "Vector_25", d: "M365.882 242.238C365.882 242.238 401.837 254.887 405.832 253.08C409.827 251.273 418.544 257.779 418.544 257.779C422.572 256.921 426.731 256.862 430.782 257.606C434.833 258.35 438.696 259.883 442.151 262.116C453.773 269.706 456.315 278.38 453.773 278.741C451.231 279.103 442.151 275.127 442.151 275.127C442.151 275.127 428.35 272.236 419.997 274.766C411.643 277.295 400.756 271.962 400.756 271.962L356.439 262.116L365.882 242.238Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_26", d: "M382.951 106.343C382.951 106.343 386.583 121.523 381.136 123.33C375.688 125.137 370.966 132.365 370.966 132.365L378.956 145.738L406.195 152.605L414.549 144.654L420.723 127.667L414.549 123.33C414.549 123.33 408.738 125.137 408.375 119.354C408.201 115.014 408.322 110.667 408.738 106.343L382.951 106.343Z", fill: "#A0616A" } }), t._v(" "), n("path", { attrs: { id: "Vector_27", d: "M396.154 111.093C408.39 111.093 418.309 101.223 418.309 89.0467C418.309 76.8706 408.39 67 396.154 67C383.919 67 374 76.8706 374 89.0467C374 101.223 383.919 111.093 396.154 111.093Z", fill: "#A0616A" } })])])]), t._v(" "), n("div", { staticClass: "text" }, [t._v("\n\t\t" + t._s(this.text) + "\n\t")])])
      }), [], !1, null, "fbad838a", null).exports),
      g = { props: { weatherDetails: { type: Object, required: !0 } } };
    n(37);

    function b(t, e, n, r, a, i, o) {
      try {
        var s = t[i](o),
          l = s.value
      } catch (t) { return void n(t) }
      s.done ? e(l) : Promise.resolve(l).then(r, a)
    }
    var L = {
        components: {
          WeatherContent: o(g, (function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [n("div", { staticClass: "weather" }, [n("div", { staticClass: "location" }, [n("h1", { staticClass: "location-timezone" }, [t._v("Timezone of " + t._s(this.weatherDetails.timezone) + " | " + t._s(this.weatherDetails.country_code))])]), t._v(" "), n("h1", { staticClass: "location-city" }, [t._v(t._s(this.weatherDetails.city_name))]), t._v(" "), n("div", { staticClass: "temperature" }, [n("div", { staticClass: "degree-section" }, [n("h2", { staticClass: "temperature-degree" }, [t._v(t._s(this.weatherDetails.temp)), n("span", [t._v("℃")])])]), t._v(" "), n("div", { staticClass: "temperature-description" }, [t._v(t._s(this.weatherDetails.weather.description))])]), t._v(" "), n("h6", [t._v("Observed on " + t._s(this.weatherDetails.ob_time))])])])
          }), [], !1, null, "bcda9366", null).exports,
          Loader: w,
          ScrollDown: h,
          InfoFooter: m
        },
        data: function() { return { statusData: {}, userInfoText: "LOOKING OUTSIDE FOR YOU... ONE SEC", location: { lat: "", lon: "" }, weatherDetails: {} } },
        methods: {
          getUrl: function(t, e) { return "".concat("https://cors-anywhere.herokuapp.com/", "http://api.weatherbit.io/v2.0/current?lat=").concat(t, "&lon=").concat(e, "&key=6978a8871b084f49a232ced8c597f445") },
          getWeather: function(t) {
            var e, n = this;
            return (e = p.a.mark((function e() {
              var r, a, i;
              return p.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, fetch(t);
                  case 2:
                    return r = e.sent, e.next = 5, r.json();
                  case 5:
                    r = e.sent, n.weatherDetails = r.data[0], a = (new Date).getMinutes(), i = { lat: n.location.lat, lon: n.location.lon, time: Math.floor(a / 15) }, sessionStorage.setItem(JSON.stringify(i), JSON.stringify(n.weatherDetails)), n.$root.StatusData.weatherReceived = !0;
                  case 11:
                  case "end":
                    return e.stop()
                }
              }), e)
            })), function() {
              var t = this,
                n = arguments;
              return new Promise((function(r, a) {
                var i = e.apply(t, n);

                function o(t) { b(i, r, a, o, s, "next", t) }

                function s(t) { b(i, r, a, o, s, "throw", t) }
                o(void 0)
              }))
            })()
          },
          getLocation: function() {
            var t = this;
            navigator.geolocation.getCurrentPosition((function(e) {
              t.location.lat = e.coords.latitude, t.location.lon = e.coords.longitude;
              var n = t.getUrl(t.location.lat, t.location.lon),
                r = (new Date).getMinutes(),
                a = { lat: t.location.lat, lon: t.location.lon, time: Math.floor(r / 15) };
              t.weatherDetails = sessionStorage.getItem(JSON.stringify(a)), t.weatherDetails || t.getWeather(n), t.weatherDetails && (t.weatherDetails = JSON.parse(t.weatherDetails), t.$root.StatusData.weatherReceived = !0)
            }), (function(e) { t.$root.StatusData.errorLocation = !0 }))
          }
        },
        mounted: function() { window.scroll({ top: 800, left: 0, behavior: "smooth" }) },
        created: function() { this.statusData = this.$root.StatusData, this.$root.StatusData.weatherReceived = !1, this.getLocation() },
        watch: { statusData: { handler: function() {!0 === this.$root.StatusData.weatherReqLocal ? this.userInfoText = "LOOKING OUTSIDE FOR YOU... ONE SEC" : this.userInfoText = "HOW'S THE WEATHER TODAY?", this.$root.StatusData.errorLocation && (this.userInfoText = "LOOKS LIKE LOCATION IS TURNED OFF! TURN IT ON AND TRY AGAIN") }, deep: !0 } }
      },
      y = (n(39), o(L, (function() {
        var t = this.$createElement,
          e = this._self._c || t;
        return e("div", { staticClass: "fluid", attrs: { id: "weather-content" } }, [!this.$root.StatusData.weatherReceived || this.$root.StatusData.scrolledUp ? e("Loader", { attrs: { text: this.userInfoText } }) : this._e(), this._v(" "), this.$root.StatusData.weatherReceived && !this.$root.StatusData.scrolledUp ? e("WeatherContent", { attrs: { weatherDetails: this.weatherDetails } }) : this._e(), this._v(" "), this.$root.StatusData.weatherRequested ? e("InfoFooter") : this._e()], 1)
      }), [], !1, null, "48c930d6", null)),
      x = o({
        components: { ScrollToTop: s, WeatherDown: c, IntroImage: C, Weather: y.exports },
        data: function() { return { scrollPosition: { scrollYPosition: "" } } },
        methods: {},
        created: function() {
          var t = this;
          window.onscroll = function() { t.scrollPosition.scrollYPosition = window.pageYOffset }
        }
      }, (function() {
        var t = this.$createElement,
          e = this._self._c || t;
        return e("div", [e("IntroImage"), this._v(" "), e("ScrollToTop"), this._v(" "), e("WeatherDown"), this._v(" "), this.$root.StatusData.weatherRequested ? e("Weather") : this._e()], 1)
      }), [], !1, null, null, null).exports;
    new a.a({ data: function() { return { StatusData: { scrolledUp: !0, scrolledDown: !1, weatherRequested: !1, weatherReceived: !1, weatherReqLocal: !1 } } }, render: function(t) { return t(x) } }).$mount("#weather-watch")
  }],
  [
    [16, 1, 2]
  ]
]);