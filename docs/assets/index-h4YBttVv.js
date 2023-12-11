function S0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function k0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function $0(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var fv = { exports: {} },
  ha = {},
  pv = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zi = Symbol.for("react.element"),
  I0 = Symbol.for("react.portal"),
  R0 = Symbol.for("react.fragment"),
  P0 = Symbol.for("react.strict_mode"),
  w0 = Symbol.for("react.profiler"),
  z0 = Symbol.for("react.provider"),
  _0 = Symbol.for("react.context"),
  E0 = Symbol.for("react.forward_ref"),
  D0 = Symbol.for("react.suspense"),
  T0 = Symbol.for("react.memo"),
  L0 = Symbol.for("react.lazy"),
  Gd = Symbol.iterator;
function B0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gd && e[Gd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var vv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mv = Object.assign,
  hv = {};
function yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hv),
    (this.updater = n || vv);
}
yo.prototype.isReactComponent = {};
yo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gv() {}
gv.prototype = yo.prototype;
function eu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = hv),
    (this.updater = n || vv);
}
var tu = (eu.prototype = new gv());
tu.constructor = eu;
mv(tu, yo.prototype);
tu.isPureReactComponent = !0;
var Jd = Array.isArray,
  yv = Object.prototype.hasOwnProperty,
  nu = { current: null },
  xv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cv(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      yv.call(t, r) && !xv.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: zi,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: nu.current,
  };
}
function O0(e, t) {
  return {
    $$typeof: zi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ru(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zi;
}
function M0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Xd = /\/+/g;
function us(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? M0("" + e.key)
    : t.toString(36);
}
function hl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case zi:
          case I0:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + us(l, 0) : r),
      Jd(o)
        ? ((n = ""),
          e != null && (n = e.replace(Xd, "$&/") + "/"),
          hl(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (ru(o) &&
            (o = O0(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Xd, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Jd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + us(i, a);
      l += hl(i, t, n, s, o);
    }
  else if (((s = B0(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + us(i, a++)), (l += hl(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return l;
}
function Ji(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    hl(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function A0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var vt = { current: null },
  gl = { transition: null },
  j0 = {
    ReactCurrentDispatcher: vt,
    ReactCurrentBatchConfig: gl,
    ReactCurrentOwner: nu,
  };
ie.Children = {
  map: Ji,
  forEach: function (e, t, n) {
    Ji(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ji(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ji(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ru(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
ie.Component = yo;
ie.Fragment = R0;
ie.Profiler = w0;
ie.PureComponent = eu;
ie.StrictMode = P0;
ie.Suspense = D0;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j0;
ie.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = mv({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = nu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      yv.call(t, s) &&
        !xv.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: zi, type: e.type, key: o, ref: i, props: r, _owner: l };
};
ie.createContext = function (e) {
  return (
    (e = {
      $$typeof: _0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: z0, _context: e }),
    (e.Consumer = e)
  );
};
ie.createElement = Cv;
ie.createFactory = function (e) {
  var t = Cv.bind(null, e);
  return (t.type = e), t;
};
ie.createRef = function () {
  return { current: null };
};
ie.forwardRef = function (e) {
  return { $$typeof: E0, render: e };
};
ie.isValidElement = ru;
ie.lazy = function (e) {
  return { $$typeof: L0, _payload: { _status: -1, _result: e }, _init: A0 };
};
ie.memo = function (e, t) {
  return { $$typeof: T0, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function (e) {
  var t = gl.transition;
  gl.transition = {};
  try {
    e();
  } finally {
    gl.transition = t;
  }
};
ie.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ie.useCallback = function (e, t) {
  return vt.current.useCallback(e, t);
};
ie.useContext = function (e) {
  return vt.current.useContext(e);
};
ie.useDebugValue = function () {};
ie.useDeferredValue = function (e) {
  return vt.current.useDeferredValue(e);
};
ie.useEffect = function (e, t) {
  return vt.current.useEffect(e, t);
};
ie.useId = function () {
  return vt.current.useId();
};
ie.useImperativeHandle = function (e, t, n) {
  return vt.current.useImperativeHandle(e, t, n);
};
ie.useInsertionEffect = function (e, t) {
  return vt.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function (e, t) {
  return vt.current.useLayoutEffect(e, t);
};
ie.useMemo = function (e, t) {
  return vt.current.useMemo(e, t);
};
ie.useReducer = function (e, t, n) {
  return vt.current.useReducer(e, t, n);
};
ie.useRef = function (e) {
  return vt.current.useRef(e);
};
ie.useState = function (e) {
  return vt.current.useState(e);
};
ie.useSyncExternalStore = function (e, t, n) {
  return vt.current.useSyncExternalStore(e, t, n);
};
ie.useTransition = function () {
  return vt.current.useTransition();
};
ie.version = "18.2.0";
pv.exports = ie;
var g = pv.exports;
const F0 = k0(g),
  Xs = S0({ __proto__: null, default: F0 }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var N0 = g,
  H0 = Symbol.for("react.element"),
  V0 = Symbol.for("react.fragment"),
  W0 = Object.prototype.hasOwnProperty,
  U0 = N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  K0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function bv(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) W0.call(t, r) && !K0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: H0,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: U0.current,
  };
}
ha.Fragment = V0;
ha.jsx = bv;
ha.jsxs = bv;
fv.exports = ha;
var C = fv.exports;
function h() {
  return (
    (h = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    h.apply(this, arguments)
  );
}
function Sn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Sv(e) {
  if (!Sn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Sv(e[n]);
    }),
    t
  );
}
function Ke(e, t, n = { clone: !0 }) {
  const r = n.clone ? h({}, e) : e;
  return (
    Sn(e) &&
      Sn(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Sn(t[o]) && o in e && Sn(e[o])
            ? (r[o] = Ke(e[o], t[o], n))
            : n.clone
              ? (r[o] = Sn(t[o]) ? Sv(t[o]) : t[o])
              : (r[o] = t[o]));
      }),
    r
  );
}
function qn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function W(e) {
  if (typeof e != "string") throw new Error(qn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ys(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {},
  );
}
function G0(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function J0(e, t) {
  return () => null;
}
function xo(e, t) {
  var n, r;
  return (
    g.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
            (r = r._payload) == null ||
            (r = r.value) == null
          ? void 0
          : r.muiName,
    ) !== -1
  );
}
function ln(e) {
  return (e && e.ownerDocument) || document;
}
function ga(e) {
  return ln(e).defaultView || window;
}
function X0(e, t) {
  return () => null;
}
function Ml(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Y0 = typeof window < "u" ? g.useLayoutEffect : g.useEffect,
  Rn = Y0;
let Yd = 0;
function Q0(e) {
  const [t, n] = g.useState(e),
    r = e || t;
  return (
    g.useEffect(() => {
      t == null && ((Yd += 1), n(`mui-${Yd}`));
    }, [t]),
    r
  );
}
const Qd = Xs.useId;
function $t(e) {
  if (Qd !== void 0) {
    const t = Qd();
    return e ?? t;
  }
  return Q0(e);
}
function q0(e, t, n, r, o) {
  return null;
}
function ya({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = g.useRef(e !== void 0),
    [i, l] = g.useState(t),
    a = o ? e : i,
    s = g.useCallback((c) => {
      o || l(c);
    }, []);
  return [a, s];
}
function Qs(e) {
  const t = g.useRef(e);
  return (
    Rn(() => {
      t.current = e;
    }),
    g.useRef((...n) => (0, t.current)(...n)).current
  );
}
function ke(...e) {
  return g.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Ml(n, t);
            });
          },
    e,
  );
}
let xa = !0,
  qs = !1,
  qd;
const Z0 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function ey(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && Z0[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function ty(e) {
  e.metaKey || e.altKey || e.ctrlKey || (xa = !0);
}
function ds() {
  xa = !1;
}
function ny() {
  this.visibilityState === "hidden" && qs && (xa = !0);
}
function ry(e) {
  e.addEventListener("keydown", ty, !0),
    e.addEventListener("mousedown", ds, !0),
    e.addEventListener("pointerdown", ds, !0),
    e.addEventListener("touchstart", ds, !0),
    e.addEventListener("visibilitychange", ny, !0);
}
function oy(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return xa || ey(t);
}
function Ca() {
  const e = g.useCallback((o) => {
      o != null && ry(o.ownerDocument);
    }, []),
    t = g.useRef(!1);
  function n() {
    return t.current
      ? ((qs = !0),
        window.clearTimeout(qd),
        (qd = window.setTimeout(() => {
          qs = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return oy(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function iy(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function kv(e, t) {
  const n = h({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = h({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
              ? (n[r] = i)
              : ((n[r] = h({}, i)),
                Object.keys(o).forEach((l) => {
                  n[r][l] = kv(o[l], i[l]);
                }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function le(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, l) => {
          if (l) {
            const a = t(l);
            a !== "" && i.push(a), n && n[l] && i.push(n[l]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const Zd = (e) => e,
  ly = () => {
    let e = Zd;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Zd;
      },
    };
  },
  ay = ly(),
  ou = ay,
  sy = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function _i(e, t, n = "Mui") {
  const r = sy[t];
  return r ? `${n}-${r}` : `${ou.generate(e)}-${t}`;
}
function Ei(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = _i(e, o, n);
    }),
    r
  );
}
function $v(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var cy =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  uy = $v(function (e) {
    return (
      cy.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function dy(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function fy(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var py = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(fy(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = dy(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ot = "-ms-",
  Al = "-moz-",
  pe = "-webkit-",
  Iv = "comm",
  iu = "rule",
  lu = "decl",
  vy = "@import",
  Rv = "@keyframes",
  my = "@layer",
  hy = Math.abs,
  ba = String.fromCharCode,
  gy = Object.assign;
function yy(e, t) {
  return Qe(e, 0) ^ 45
    ? (((((((t << 2) ^ Qe(e, 0)) << 2) ^ Qe(e, 1)) << 2) ^ Qe(e, 2)) << 2) ^
        Qe(e, 3)
    : 0;
}
function Pv(e) {
  return e.trim();
}
function xy(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, n) {
  return e.replace(t, n);
}
function Zs(e, t) {
  return e.indexOf(t);
}
function Qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function ni(e, t, n) {
  return e.slice(t, n);
}
function fn(e) {
  return e.length;
}
function au(e) {
  return e.length;
}
function Xi(e, t) {
  return t.push(e), e;
}
function Cy(e, t) {
  return e.map(t).join("");
}
var Sa = 1,
  no = 1,
  wv = 0,
  It = 0,
  Ae = 0,
  Co = "";
function ka(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Sa,
    column: no,
    length: l,
    return: "",
  };
}
function Ro(e, t) {
  return gy(ka("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function by() {
  return Ae;
}
function Sy() {
  return (
    (Ae = It > 0 ? Qe(Co, --It) : 0), no--, Ae === 10 && ((no = 1), Sa--), Ae
  );
}
function _t() {
  return (
    (Ae = It < wv ? Qe(Co, It++) : 0), no++, Ae === 10 && ((no = 1), Sa++), Ae
  );
}
function mn() {
  return Qe(Co, It);
}
function yl() {
  return It;
}
function Di(e, t) {
  return ni(Co, e, t);
}
function ri(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function zv(e) {
  return (Sa = no = 1), (wv = fn((Co = e))), (It = 0), [];
}
function _v(e) {
  return (Co = ""), e;
}
function xl(e) {
  return Pv(Di(It - 1, ec(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ky(e) {
  for (; (Ae = mn()) && Ae < 33; ) _t();
  return ri(e) > 2 || ri(Ae) > 3 ? "" : " ";
}
function $y(e, t) {
  for (
    ;
    --t &&
    _t() &&
    !(Ae < 48 || Ae > 102 || (Ae > 57 && Ae < 65) || (Ae > 70 && Ae < 97));

  );
  return Di(e, yl() + (t < 6 && mn() == 32 && _t() == 32));
}
function ec(e) {
  for (; _t(); )
    switch (Ae) {
      case e:
        return It;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ec(Ae);
        break;
      case 40:
        e === 41 && ec(e);
        break;
      case 92:
        _t();
        break;
    }
  return It;
}
function Iy(e, t) {
  for (; _t() && e + Ae !== 57; ) if (e + Ae === 84 && mn() === 47) break;
  return "/*" + Di(t, It - 1) + "*" + ba(e === 47 ? e : _t());
}
function Ry(e) {
  for (; !ri(mn()); ) _t();
  return Di(e, It);
}
function Py(e) {
  return _v(Cl("", null, null, null, [""], (e = zv(e)), 0, [0], e));
}
function Cl(e, t, n, r, o, i, l, a, s) {
  for (
    var c = 0,
      d = 0,
      v = l,
      m = 0,
      y = 0,
      b = 0,
      x = 1,
      $ = 1,
      f = 1,
      p = 0,
      u = "",
      k = o,
      S = i,
      R = r,
      I = u;
    $;

  )
    switch (((b = p), (p = _t()))) {
      case 40:
        if (b != 108 && Qe(I, v - 1) == 58) {
          Zs((I += ve(xl(p), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += xl(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += ky(b);
        break;
      case 92:
        I += $y(yl() - 1, 7);
        continue;
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            Xi(wy(Iy(_t(), yl()), t, n), s);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * x:
        a[c++] = fn(I) * f;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            $ = 0;
          case 59 + d:
            f == -1 && (I = ve(I, /\f/g, "")),
              y > 0 &&
                fn(I) - v &&
                Xi(
                  y > 32
                    ? tf(I + ";", r, n, v - 1)
                    : tf(ve(I, " ", "") + ";", r, n, v - 2),
                  s,
                );
            break;
          case 59:
            I += ";";
          default:
            if (
              (Xi((R = ef(I, t, n, c, d, o, a, u, (k = []), (S = []), v)), i),
              p === 123)
            )
              if (d === 0) Cl(I, t, R, R, k, i, v, a, S);
              else
                switch (m === 99 && Qe(I, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Cl(
                      e,
                      R,
                      R,
                      r && Xi(ef(e, R, R, 0, 0, o, a, u, o, (k = []), v), S),
                      o,
                      S,
                      v,
                      a,
                      r ? k : S,
                    );
                    break;
                  default:
                    Cl(I, R, R, R, [""], S, 0, a, S);
                }
        }
        (c = d = y = 0), (x = f = 1), (u = I = ""), (v = l);
        break;
      case 58:
        (v = 1 + fn(I)), (y = b);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && Sy() == 125) continue;
        }
        switch (((I += ba(p)), p * x)) {
          case 38:
            f = d > 0 ? 1 : ((I += "\f"), -1);
            break;
          case 44:
            (a[c++] = (fn(I) - 1) * f), (f = 1);
            break;
          case 64:
            mn() === 45 && (I += xl(_t())),
              (m = mn()),
              (d = v = fn((u = I += Ry(yl())))),
              p++;
            break;
          case 45:
            b === 45 && fn(I) == 2 && (x = 0);
        }
    }
  return i;
}
function ef(e, t, n, r, o, i, l, a, s, c, d) {
  for (
    var v = o - 1, m = o === 0 ? i : [""], y = au(m), b = 0, x = 0, $ = 0;
    b < r;
    ++b
  )
    for (var f = 0, p = ni(e, v + 1, (v = hy((x = l[b])))), u = e; f < y; ++f)
      (u = Pv(x > 0 ? m[f] + " " + p : ve(p, /&\f/g, m[f]))) && (s[$++] = u);
  return ka(e, t, n, o === 0 ? iu : a, s, c, d);
}
function wy(e, t, n) {
  return ka(e, t, n, Iv, ba(by()), ni(e, 2, -2), 0);
}
function tf(e, t, n, r) {
  return ka(e, t, n, lu, ni(e, 0, r), ni(e, r + 1, -1), r);
}
function Kr(e, t) {
  for (var n = "", r = au(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function zy(e, t, n, r) {
  switch (e.type) {
    case my:
      if (e.children.length) break;
    case vy:
    case lu:
      return (e.return = e.return || e.value);
    case Iv:
      return "";
    case Rv:
      return (e.return = e.value + "{" + Kr(e.children, r) + "}");
    case iu:
      e.value = e.props.join(",");
  }
  return fn((n = Kr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function _y(e) {
  var t = au(e);
  return function (n, r, o, i) {
    for (var l = "", a = 0; a < t; a++) l += e[a](n, r, o, i) || "";
    return l;
  };
}
function Ey(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Dy = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = mn()), o === 38 && i === 12 && (n[r] = 1), !ri(i);

    )
      _t();
    return Di(t, It);
  },
  Ty = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (ri(o)) {
        case 0:
          o === 38 && mn() === 12 && (n[r] = 1), (t[r] += Dy(It - 1, n, r));
          break;
        case 2:
          t[r] += xl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = mn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += ba(o);
      }
    while ((o = _t()));
    return t;
  },
  Ly = function (t, n) {
    return _v(Ty(zv(t), n));
  },
  nf = new WeakMap(),
  By = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !nf.get(r)) &&
        !o
      ) {
        nf.set(t, !0);
        for (
          var i = [], l = Ly(n, i), a = r.props, s = 0, c = 0;
          s < l.length;
          s++
        )
          for (var d = 0; d < a.length; d++, c++)
            t.props[c] = i[s] ? l[s].replace(/&\f/g, a[d]) : a[d] + " " + l[s];
      }
    }
  },
  Oy = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Ev(e, t) {
  switch (yy(e, t)) {
    case 5103:
      return pe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return pe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return pe + e + Al + e + ot + e + e;
    case 6828:
    case 4268:
      return pe + e + ot + e + e;
    case 6165:
      return pe + e + ot + "flex-" + e + e;
    case 5187:
      return (
        pe + e + ve(e, /(\w+).+(:[^]+)/, pe + "box-$1$2" + ot + "flex-$1$2") + e
      );
    case 5443:
      return pe + e + ot + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        pe +
        e +
        ot +
        "flex-line-pack" +
        ve(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return pe + e + ot + ve(e, "shrink", "negative") + e;
    case 5292:
      return pe + e + ot + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        pe +
        "box-" +
        ve(e, "-grow", "") +
        pe +
        e +
        ot +
        ve(e, "grow", "positive") +
        e
      );
    case 4554:
      return pe + ve(e, /([^-])(transform)/g, "$1" + pe + "$2") + e;
    case 6187:
      return (
        ve(
          ve(ve(e, /(zoom-|grab)/, pe + "$1"), /(image-set)/, pe + "$1"),
          e,
          "",
        ) + e
      );
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, pe + "$1$`$1");
    case 4968:
      return (
        ve(
          ve(e, /(.+:)(flex-)?(.*)/, pe + "box-pack:$3" + ot + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        pe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ve(e, /(.+)-inline(.+)/, pe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (fn(e) - 1 - t > 6)
        switch (Qe(e, t + 1)) {
          case 109:
            if (Qe(e, t + 4) !== 45) break;
          case 102:
            return (
              ve(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  pe +
                  "$2-$3$1" +
                  Al +
                  (Qe(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Zs(e, "stretch")
              ? Ev(ve(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Qe(e, t + 1) !== 115) break;
    case 6444:
      switch (Qe(e, fn(e) - 3 - (~Zs(e, "!important") && 10))) {
        case 107:
          return ve(e, ":", ":" + pe) + e;
        case 101:
          return (
            ve(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                pe +
                (Qe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                pe +
                "$2$3$1" +
                ot +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Qe(e, t + 11)) {
        case 114:
          return pe + e + ot + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return pe + e + ot + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return pe + e + ot + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return pe + e + ot + e + e;
  }
  return e;
}
var My = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case lu:
          t.return = Ev(t.value, t.length);
          break;
        case Rv:
          return Kr([Ro(t, { value: ve(t.value, "@", "@" + pe) })], o);
        case iu:
          if (t.length)
            return Cy(t.props, function (i) {
              switch (xy(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Kr(
                    [Ro(t, { props: [ve(i, /:(read-\w+)/, ":" + Al + "$1")] })],
                    o,
                  );
                case "::placeholder":
                  return Kr(
                    [
                      Ro(t, {
                        props: [ve(i, /:(plac\w+)/, ":" + pe + "input-$1")],
                      }),
                      Ro(t, { props: [ve(i, /:(plac\w+)/, ":" + Al + "$1")] }),
                      Ro(t, { props: [ve(i, /:(plac\w+)/, ot + "input-$1")] }),
                    ],
                    o,
                  );
              }
              return "";
            });
      }
  },
  Ay = [My],
  jy = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (x) {
        var $ = x.getAttribute("data-emotion");
        $.indexOf(" ") !== -1 &&
          (document.head.appendChild(x), x.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Ay,
      i = {},
      l,
      a = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (x) {
          for (
            var $ = x.getAttribute("data-emotion").split(" "), f = 1;
            f < $.length;
            f++
          )
            i[$[f]] = !0;
          a.push(x);
        },
      );
    var s,
      c = [By, Oy];
    {
      var d,
        v = [
          zy,
          Ey(function (x) {
            d.insert(x);
          }),
        ],
        m = _y(c.concat(o, v)),
        y = function ($) {
          return Kr(Py($), m);
        };
      s = function ($, f, p, u) {
        (d = p),
          y($ ? $ + "{" + f.styles + "}" : f.styles),
          u && (b.inserted[f.name] = !0);
      };
    }
    var b = {
      key: n,
      sheet: new py({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return b.sheet.hydrate(a), b;
  },
  Dv = { exports: {} },
  ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Je = typeof Symbol == "function" && Symbol.for,
  su = Je ? Symbol.for("react.element") : 60103,
  cu = Je ? Symbol.for("react.portal") : 60106,
  $a = Je ? Symbol.for("react.fragment") : 60107,
  Ia = Je ? Symbol.for("react.strict_mode") : 60108,
  Ra = Je ? Symbol.for("react.profiler") : 60114,
  Pa = Je ? Symbol.for("react.provider") : 60109,
  wa = Je ? Symbol.for("react.context") : 60110,
  uu = Je ? Symbol.for("react.async_mode") : 60111,
  za = Je ? Symbol.for("react.concurrent_mode") : 60111,
  _a = Je ? Symbol.for("react.forward_ref") : 60112,
  Ea = Je ? Symbol.for("react.suspense") : 60113,
  Fy = Je ? Symbol.for("react.suspense_list") : 60120,
  Da = Je ? Symbol.for("react.memo") : 60115,
  Ta = Je ? Symbol.for("react.lazy") : 60116,
  Ny = Je ? Symbol.for("react.block") : 60121,
  Hy = Je ? Symbol.for("react.fundamental") : 60117,
  Vy = Je ? Symbol.for("react.responder") : 60118,
  Wy = Je ? Symbol.for("react.scope") : 60119;
function Lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case su:
        switch (((e = e.type), e)) {
          case uu:
          case za:
          case $a:
          case Ra:
          case Ia:
          case Ea:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case wa:
              case _a:
              case Ta:
              case Da:
              case Pa:
                return e;
              default:
                return t;
            }
        }
      case cu:
        return t;
    }
  }
}
function Tv(e) {
  return Lt(e) === za;
}
ge.AsyncMode = uu;
ge.ConcurrentMode = za;
ge.ContextConsumer = wa;
ge.ContextProvider = Pa;
ge.Element = su;
ge.ForwardRef = _a;
ge.Fragment = $a;
ge.Lazy = Ta;
ge.Memo = Da;
ge.Portal = cu;
ge.Profiler = Ra;
ge.StrictMode = Ia;
ge.Suspense = Ea;
ge.isAsyncMode = function (e) {
  return Tv(e) || Lt(e) === uu;
};
ge.isConcurrentMode = Tv;
ge.isContextConsumer = function (e) {
  return Lt(e) === wa;
};
ge.isContextProvider = function (e) {
  return Lt(e) === Pa;
};
ge.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === su;
};
ge.isForwardRef = function (e) {
  return Lt(e) === _a;
};
ge.isFragment = function (e) {
  return Lt(e) === $a;
};
ge.isLazy = function (e) {
  return Lt(e) === Ta;
};
ge.isMemo = function (e) {
  return Lt(e) === Da;
};
ge.isPortal = function (e) {
  return Lt(e) === cu;
};
ge.isProfiler = function (e) {
  return Lt(e) === Ra;
};
ge.isStrictMode = function (e) {
  return Lt(e) === Ia;
};
ge.isSuspense = function (e) {
  return Lt(e) === Ea;
};
ge.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === $a ||
    e === za ||
    e === Ra ||
    e === Ia ||
    e === Ea ||
    e === Fy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ta ||
        e.$$typeof === Da ||
        e.$$typeof === Pa ||
        e.$$typeof === wa ||
        e.$$typeof === _a ||
        e.$$typeof === Hy ||
        e.$$typeof === Vy ||
        e.$$typeof === Wy ||
        e.$$typeof === Ny))
  );
};
ge.typeOf = Lt;
Dv.exports = ge;
var Uy = Dv.exports,
  Lv = Uy,
  Ky = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Gy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Bv = {};
Bv[Lv.ForwardRef] = Ky;
Bv[Lv.Memo] = Gy;
var Jy = !0;
function Xy(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Ov = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || Jy === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Mv = function (t, n, r) {
    Ov(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Yy(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Qy = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  qy = /[A-Z]|^ms/g,
  Zy = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Av = function (t) {
    return t.charCodeAt(1) === 45;
  },
  rf = function (t) {
    return t != null && typeof t != "boolean";
  },
  fs = $v(function (e) {
    return Av(e) ? e : e.replace(qy, "-$&").toLowerCase();
  }),
  of = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(Zy, function (r, o, i) {
            return (pn = { name: o, styles: i, next: pn }), o;
          });
    }
    return Qy[t] !== 1 && !Av(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function oi(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (pn = { name: n.name, styles: n.styles, next: pn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (pn = { name: r.name, styles: r.styles, next: pn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return e1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = pn,
          l = n(e);
        return (pn = i), oi(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function e1(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += oi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : rf(l) && (r += fs(i) + ":" + of(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var a = 0; a < l.length; a++)
          rf(l[a]) && (r += fs(i) + ":" + of(i, l[a]) + ";");
      else {
        var s = oi(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += fs(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var lf = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  pn,
  du = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    pn = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += oi(r, n, l)))
      : (i += l[0]);
    for (var a = 1; a < t.length; a++) (i += oi(r, n, t[a])), o && (i += l[a]);
    lf.lastIndex = 0;
    for (var s = "", c; (c = lf.exec(i)) !== null; ) s += "-" + c[1];
    var d = Yy(i) + s;
    return { name: d, styles: i, next: pn };
  },
  t1 = function (t) {
    return t();
  },
  jv = Xs.useInsertionEffect ? Xs.useInsertionEffect : !1,
  n1 = jv || t1,
  af = jv || g.useLayoutEffect,
  Fv = g.createContext(typeof HTMLElement < "u" ? jy({ key: "css" }) : null);
Fv.Provider;
var Nv = function (t) {
    return g.forwardRef(function (n, r) {
      var o = g.useContext(Fv);
      return t(n, o, r);
    });
  },
  La = g.createContext({}),
  r1 = Nv(function (e, t) {
    var n = e.styles,
      r = du([n], void 0, g.useContext(La)),
      o = g.useRef();
    return (
      af(
        function () {
          var i = t.key + "-global",
            l = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            s = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]',
            );
          return (
            t.sheet.tags.length && (l.before = t.sheet.tags[0]),
            s !== null &&
              ((a = !0), s.setAttribute("data-emotion", i), l.hydrate([s])),
            (o.current = [l, a]),
            function () {
              l.flush();
            }
          );
        },
        [t],
      ),
      af(
        function () {
          var i = o.current,
            l = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && Mv(t, r.next, !0), l.tags.length)) {
            var s = l.tags[l.tags.length - 1].nextElementSibling;
            (l.before = s), l.flush();
          }
          t.insert("", r, l, !1);
        },
        [t, r.name],
      ),
      null
    );
  });
function Hv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return du(t);
}
var o1 = function () {
    var t = Hv.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  i1 = uy,
  l1 = function (t) {
    return t !== "theme";
  },
  sf = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? i1 : l1;
  },
  cf = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (l) {
              return t.__emotion_forwardProp(l) && i(l);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  a1 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Ov(n, r, o),
      n1(function () {
        return Mv(n, r, o);
      }),
      null
    );
  },
  s1 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var a = cf(t, n, r),
      s = a || sf(o),
      c = !s("as");
    return function () {
      var d = arguments,
        v =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && v.push("label:" + i + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        v.push.apply(v, d);
      else {
        v.push(d[0][0]);
        for (var m = d.length, y = 1; y < m; y++) v.push(d[y], d[0][y]);
      }
      var b = Nv(function (x, $, f) {
        var p = (c && x.as) || o,
          u = "",
          k = [],
          S = x;
        if (x.theme == null) {
          S = {};
          for (var R in x) S[R] = x[R];
          S.theme = g.useContext(La);
        }
        typeof x.className == "string"
          ? (u = Xy($.registered, k, x.className))
          : x.className != null && (u = x.className + " ");
        var I = du(v.concat(k), $.registered, S);
        (u += $.key + "-" + I.name), l !== void 0 && (u += " " + l);
        var P = c && a === void 0 ? sf(p) : s,
          D = {};
        for (var w in x) (c && w === "as") || (P(w) && (D[w] = x[w]));
        return (
          (D.className = u),
          (D.ref = f),
          g.createElement(
            g.Fragment,
            null,
            g.createElement(a1, {
              cache: $,
              serialized: I,
              isStringTag: typeof p == "string",
            }),
            g.createElement(p, D),
          )
        );
      });
      return (
        (b.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (b.defaultProps = t.defaultProps),
        (b.__emotion_real = b),
        (b.__emotion_base = o),
        (b.__emotion_styles = v),
        (b.__emotion_forwardProp = a),
        Object.defineProperty(b, "toString", {
          value: function () {
            return "." + l;
          },
        }),
        (b.withComponent = function (x, $) {
          return e(x, h({}, n, $, { shouldForwardProp: cf(b, $, !0) })).apply(
            void 0,
            v,
          );
        }),
        b
      );
    };
  },
  c1 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
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
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  tc = s1.bind();
c1.forEach(function (e) {
  tc[e] = tc(e);
});
function u1(e) {
  return e == null || Object.keys(e).length === 0;
}
function bl(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(u1(o) ? n : o) : t;
  return C.jsx(r1, { styles: r });
}
function Vv(e, t) {
  return tc(e, t);
}
const d1 = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function Y(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const f1 = ["values", "unit", "step"],
  p1 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => h({}, n, { [r.key]: r.val }), {})
    );
  };
function Wv(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = Y(e, f1),
    i = p1(t),
    l = Object.keys(i);
  function a(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function s(m) {
    return `@media (max-width:${
      (typeof t[m] == "number" ? t[m] : m) - r / 100
    }${n})`;
  }
  function c(m, y) {
    const b = l.indexOf(y);
    return `@media (min-width:${
      typeof t[m] == "number" ? t[m] : m
    }${n}) and (max-width:${
      (b !== -1 && typeof t[l[b]] == "number" ? t[l[b]] : y) - r / 100
    }${n})`;
  }
  function d(m) {
    return l.indexOf(m) + 1 < l.length ? c(m, l[l.indexOf(m) + 1]) : a(m);
  }
  function v(m) {
    const y = l.indexOf(m);
    return y === 0
      ? a(l[1])
      : y === l.length - 1
        ? s(l[y])
        : c(m, l[l.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return h(
    {
      keys: l,
      values: i,
      up: a,
      down: s,
      between: c,
      only: d,
      not: v,
      unit: n,
    },
    o,
  );
}
const v1 = { borderRadius: 4 },
  m1 = v1;
function Ho(e, t) {
  return t ? Ke(e, t, { clone: !1 }) : e;
}
const fu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  uf = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${fu[e]}px)`,
  };
function Pn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || uf;
    return t.reduce((l, a, s) => ((l[i.up(i.keys[s])] = n(t[s])), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || uf;
    return Object.keys(t).reduce((l, a) => {
      if (Object.keys(i.values || fu).indexOf(a) !== -1) {
        const s = i.up(a);
        l[s] = n(t[a], a);
      } else {
        const s = a;
        l[s] = t[s];
      }
      return l;
    }, {});
  }
  return n(t);
}
function h1(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function g1(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function ro(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function jl(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = ro(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function Me(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const a = l[t],
        s = l.theme,
        c = ro(s, r) || {};
      return Pn(l, a, (v) => {
        let m = jl(c, o, v);
        return (
          v === m &&
            typeof v == "string" &&
            (m = jl(c, o, `${t}${v === "default" ? "" : W(v)}`, v)),
          n === !1 ? m : { [n]: m }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function y1(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const x1 = { m: "margin", p: "padding" },
  C1 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  df = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  b1 = y1((e) => {
    if (e.length > 2)
      if (df[e]) e = df[e];
      else return [e];
    const [t, n] = e.split(""),
      r = x1[t],
      o = C1[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  pu = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  vu = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...pu, ...vu];
function Ti(e, t, n, r) {
  var o;
  const i = (o = ro(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (l) => (typeof l == "string" ? l : i * l)
    : Array.isArray(i)
      ? (l) => (typeof l == "string" ? l : i[l])
      : typeof i == "function"
        ? i
        : () => {};
}
function Uv(e) {
  return Ti(e, "spacing", 8);
}
function Li(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function S1(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Li(t, n)), r), {});
}
function k1(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = b1(n),
    i = S1(o, r),
    l = e[n];
  return Pn(e, l, i);
}
function Kv(e, t) {
  const n = Uv(e.theme);
  return Object.keys(e)
    .map((r) => k1(e, t, r, n))
    .reduce(Ho, {});
}
function De(e) {
  return Kv(e, pu);
}
De.propTypes = {};
De.filterProps = pu;
function Te(e) {
  return Kv(e, vu);
}
Te.propTypes = {};
Te.filterProps = vu;
function Gv(e = 8) {
  if (e.mui) return e;
  const t = Uv({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == "number" ? `${l}px` : l;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function Ba(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {},
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Ho(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function At(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Xt(e, t) {
  return Me({ prop: e, themeKey: "borders", transform: t });
}
const $1 = Xt("border", At),
  I1 = Xt("borderTop", At),
  R1 = Xt("borderRight", At),
  P1 = Xt("borderBottom", At),
  w1 = Xt("borderLeft", At),
  z1 = Xt("borderColor"),
  _1 = Xt("borderTopColor"),
  E1 = Xt("borderRightColor"),
  D1 = Xt("borderBottomColor"),
  T1 = Xt("borderLeftColor"),
  L1 = Xt("outline", At),
  B1 = Xt("outlineColor"),
  Oa = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Ti(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Li(t, r) });
      return Pn(e, e.borderRadius, n);
    }
    return null;
  };
Oa.propTypes = {};
Oa.filterProps = ["borderRadius"];
Ba($1, I1, R1, P1, w1, z1, _1, E1, D1, T1, Oa, L1, B1);
const Ma = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ti(e.theme, "spacing", 8),
      n = (r) => ({ gap: Li(t, r) });
    return Pn(e, e.gap, n);
  }
  return null;
};
Ma.propTypes = {};
Ma.filterProps = ["gap"];
const Aa = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ti(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Li(t, r) });
    return Pn(e, e.columnGap, n);
  }
  return null;
};
Aa.propTypes = {};
Aa.filterProps = ["columnGap"];
const ja = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ti(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Li(t, r) });
    return Pn(e, e.rowGap, n);
  }
  return null;
};
ja.propTypes = {};
ja.filterProps = ["rowGap"];
const O1 = Me({ prop: "gridColumn" }),
  M1 = Me({ prop: "gridRow" }),
  A1 = Me({ prop: "gridAutoFlow" }),
  j1 = Me({ prop: "gridAutoColumns" }),
  F1 = Me({ prop: "gridAutoRows" }),
  N1 = Me({ prop: "gridTemplateColumns" }),
  H1 = Me({ prop: "gridTemplateRows" }),
  V1 = Me({ prop: "gridTemplateAreas" }),
  W1 = Me({ prop: "gridArea" });
Ba(Ma, Aa, ja, O1, M1, A1, j1, F1, N1, H1, V1, W1);
function Gr(e, t) {
  return t === "grey" ? t : e;
}
const U1 = Me({ prop: "color", themeKey: "palette", transform: Gr }),
  K1 = Me({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Gr,
  }),
  G1 = Me({ prop: "backgroundColor", themeKey: "palette", transform: Gr });
Ba(U1, K1, G1);
function wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const J1 = Me({ prop: "width", transform: wt }),
  mu = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || fu[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: wt(n) };
      };
      return Pn(e, e.maxWidth, t);
    }
    return null;
  };
mu.filterProps = ["maxWidth"];
const X1 = Me({ prop: "minWidth", transform: wt }),
  Y1 = Me({ prop: "height", transform: wt }),
  Q1 = Me({ prop: "maxHeight", transform: wt }),
  q1 = Me({ prop: "minHeight", transform: wt });
Me({ prop: "size", cssProperty: "width", transform: wt });
Me({ prop: "size", cssProperty: "height", transform: wt });
const Z1 = Me({ prop: "boxSizing" });
Ba(J1, mu, X1, Y1, Q1, q1, Z1);
const ex = {
    border: { themeKey: "borders", transform: At },
    borderTop: { themeKey: "borders", transform: At },
    borderRight: { themeKey: "borders", transform: At },
    borderBottom: { themeKey: "borders", transform: At },
    borderLeft: { themeKey: "borders", transform: At },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: At },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Oa },
    color: { themeKey: "palette", transform: Gr },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Gr,
    },
    backgroundColor: { themeKey: "palette", transform: Gr },
    p: { style: Te },
    pt: { style: Te },
    pr: { style: Te },
    pb: { style: Te },
    pl: { style: Te },
    px: { style: Te },
    py: { style: Te },
    padding: { style: Te },
    paddingTop: { style: Te },
    paddingRight: { style: Te },
    paddingBottom: { style: Te },
    paddingLeft: { style: Te },
    paddingX: { style: Te },
    paddingY: { style: Te },
    paddingInline: { style: Te },
    paddingInlineStart: { style: Te },
    paddingInlineEnd: { style: Te },
    paddingBlock: { style: Te },
    paddingBlockStart: { style: Te },
    paddingBlockEnd: { style: Te },
    m: { style: De },
    mt: { style: De },
    mr: { style: De },
    mb: { style: De },
    ml: { style: De },
    mx: { style: De },
    my: { style: De },
    margin: { style: De },
    marginTop: { style: De },
    marginRight: { style: De },
    marginBottom: { style: De },
    marginLeft: { style: De },
    marginX: { style: De },
    marginY: { style: De },
    marginInline: { style: De },
    marginInlineStart: { style: De },
    marginInlineEnd: { style: De },
    marginBlock: { style: De },
    marginBlockStart: { style: De },
    marginBlockEnd: { style: De },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Ma },
    rowGap: { style: ja },
    columnGap: { style: Aa },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: wt },
    maxWidth: { style: mu },
    minWidth: { transform: wt },
    height: { transform: wt },
    maxHeight: { transform: wt },
    minHeight: { transform: wt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Bi = ex;
function tx(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function nx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rx() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: s = n, themeKey: c, transform: d, style: v } = a;
    if (r == null) return null;
    if (c === "typography" && r === "inherit") return { [n]: r };
    const m = ro(o, c) || {};
    return v
      ? v(l)
      : Pn(l, r, (b) => {
          let x = jl(m, d, b);
          return (
            b === x &&
              typeof b == "string" &&
              (x = jl(m, d, `${n}${b === "default" ? "" : W(b)}`, b)),
            s === !1 ? x : { [s]: x }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : Bi;
    function a(s) {
      let c = s;
      if (typeof s == "function") c = s(i);
      else if (typeof s != "object") return s;
      if (!c) return null;
      const d = h1(i.breakpoints),
        v = Object.keys(d);
      let m = d;
      return (
        Object.keys(c).forEach((y) => {
          const b = nx(c[y], i);
          if (b != null)
            if (typeof b == "object")
              if (l[y]) m = Ho(m, e(y, b, i, l));
              else {
                const x = Pn({ theme: i }, b, ($) => ({ [y]: $ }));
                tx(x, b) ? (m[y] = t({ sx: b, theme: i })) : (m = Ho(m, x));
              }
            else m = Ho(m, e(y, b, i, l));
        }),
        g1(v, m)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Jv = rx();
Jv.filterProps = ["sx"];
const Oi = Jv,
  ox = ["breakpoints", "palette", "spacing", "shape"];
function hu(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = Y(e, ox),
    a = Wv(n),
    s = Gv(o);
  let c = Ke(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: h({ mode: "light" }, r),
      spacing: s,
      shape: h({}, m1, i),
    },
    l,
  );
  return (
    (c = t.reduce((d, v) => Ke(d, v), c)),
    (c.unstable_sxConfig = h({}, Bi, l == null ? void 0 : l.unstable_sxConfig)),
    (c.unstable_sx = function (v) {
      return Oi({ sx: v, theme: this });
    }),
    c
  );
}
function ix(e) {
  return Object.keys(e).length === 0;
}
function Xv(e = null) {
  const t = g.useContext(La);
  return !t || ix(t) ? e : t;
}
const lx = hu();
function gu(e = lx) {
  return Xv(e);
}
function ax({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = gu(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return C.jsx(bl, { styles: o });
}
const sx = ["sx"],
  cx = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Bi;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function yu(e) {
  const { sx: t } = e,
    n = Y(e, sx),
    { systemProps: r, otherProps: o } = cx(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
        ? (i = (...l) => {
            const a = t(...l);
            return Sn(a) ? h({}, r, a) : r;
          })
        : (i = h({}, r, t)),
    h({}, o, { sx: i })
  );
}
function Yv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Yv(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Ve() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Yv(e)) && (r && (r += " "), (r += t));
  return r;
}
const ux = ["className", "component"];
function dx(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = Vv("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(Oi);
  return g.forwardRef(function (s, c) {
    const d = gu(n),
      v = yu(s),
      { className: m, component: y = "div" } = v,
      b = Y(v, ux);
    return C.jsx(
      i,
      h(
        {
          as: y,
          ref: c,
          className: Ve(m, o ? o(r) : r),
          theme: (t && d[t]) || d,
        },
        b,
      ),
    );
  });
}
const fx = ["variant"];
function ff(e) {
  return e.length === 0;
}
function Qv(e) {
  const { variant: t } = e,
    n = Y(e, fx);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += ff(r) ? e[o] : W(e[o]))
          : (r += `${ff(r) ? o : W(o)}${W(e[o].toString())}`);
      }),
    r
  );
}
const px = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function vx(e) {
  return Object.keys(e).length === 0;
}
function mx(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const hx = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Fl = (e) => {
    const t = {};
    return (
      e &&
        e.forEach((n) => {
          const r = Qv(n.props);
          t[r] = n.style;
        }),
      t
    );
  },
  gx = (e, t) => {
    let n = [];
    return (
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants),
      Fl(n)
    );
  },
  Nl = (e, t, n) => {
    const { ownerState: r = {} } = e,
      o = [];
    return (
      n &&
        n.forEach((i) => {
          let l = !0;
          Object.keys(i.props).forEach((a) => {
            r[a] !== i.props[a] && e[a] !== i.props[a] && (l = !1);
          }),
            l && o.push(t[Qv(i.props)]);
        }),
      o
    );
  },
  yx = (e, t, n, r) => {
    var o;
    const i =
      n == null || (o = n.components) == null || (o = o[r]) == null
        ? void 0
        : o.variants;
    return Nl(e, t, i);
  };
function Sl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const xx = hu(),
  Cx = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function kl({ defaultTheme: e, theme: t, themeId: n }) {
  return vx(t) ? e : t[n] || t;
}
function bx(e) {
  return e ? (t, n) => n[e] : null;
}
const pf = ({ styledArg: e, props: t, defaultTheme: n, themeId: r }) => {
  const o = e(
    h({}, t, { theme: kl(h({}, t, { defaultTheme: n, themeId: r })) }),
  );
  let i;
  if ((o && o.variants && ((i = o.variants), delete o.variants), i)) {
    const l = Nl(t, Fl(i), i);
    return [o, ...l];
  }
  return o;
};
function qv(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = xx,
      rootShouldForwardProp: r = Sl,
      slotShouldForwardProp: o = Sl,
    } = e,
    i = (l) =>
      Oi(h({}, l, { theme: kl(h({}, l, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (l, a = {}) => {
      d1(l, (k) => k.filter((S) => !(S != null && S.__mui_systemSx)));
      const {
          name: s,
          slot: c,
          skipVariantsResolver: d,
          skipSx: v,
          overridesResolver: m = bx(Cx(c)),
        } = a,
        y = Y(a, px),
        b = d !== void 0 ? d : (c && c !== "Root" && c !== "root") || !1,
        x = v || !1;
      let $,
        f = Sl;
      c === "Root" || c === "root"
        ? (f = r)
        : c
          ? (f = o)
          : mx(l) && (f = void 0);
      const p = Vv(l, h({ shouldForwardProp: f, label: $ }, y)),
        u = (k, ...S) => {
          const R = S
            ? S.map((w) => {
                if (typeof w == "function" && w.__emotion_real !== w)
                  return (T) =>
                    pf({ styledArg: w, props: T, defaultTheme: n, themeId: t });
                if (Sn(w)) {
                  let T = w,
                    M;
                  return (
                    w &&
                      w.variants &&
                      ((M = w.variants),
                      delete T.variants,
                      (T = (O) => {
                        let F = w;
                        return (
                          Nl(O, Fl(M), M).forEach((E) => {
                            F = Ke(F, E);
                          }),
                          F
                        );
                      })),
                    T
                  );
                }
                return w;
              })
            : [];
          let I = k;
          if (Sn(k)) {
            let w;
            k &&
              k.variants &&
              ((w = k.variants),
              delete I.variants,
              (I = (T) => {
                let M = k;
                return (
                  Nl(T, Fl(w), w).forEach((F) => {
                    M = Ke(M, F);
                  }),
                  M
                );
              }));
          } else
            typeof k == "function" &&
              k.__emotion_real !== k &&
              (I = (w) =>
                pf({ styledArg: k, props: w, defaultTheme: n, themeId: t }));
          s &&
            m &&
            R.push((w) => {
              const T = kl(h({}, w, { defaultTheme: n, themeId: t })),
                M = hx(s, T);
              if (M) {
                const O = {};
                return (
                  Object.entries(M).forEach(([F, B]) => {
                    O[F] =
                      typeof B == "function" ? B(h({}, w, { theme: T })) : B;
                  }),
                  m(w, O)
                );
              }
              return null;
            }),
            s &&
              !b &&
              R.push((w) => {
                const T = kl(h({}, w, { defaultTheme: n, themeId: t }));
                return yx(w, gx(s, T), T, s);
              }),
            x || R.push(i);
          const P = R.length - S.length;
          if (Array.isArray(k) && P > 0) {
            const w = new Array(P).fill("");
            (I = [...k, ...w]), (I.raw = [...k.raw, ...w]);
          }
          const D = p(I, ...R);
          return l.muiName && (D.muiName = l.muiName), D;
        };
      return p.withConfig && (u.withConfig = p.withConfig), u;
    }
  );
}
function Sx(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : kv(t.components[n].defaultProps, r);
}
function Zv({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = gu(n);
  return r && (o = o[r] || o), Sx({ theme: o, name: t, props: e });
}
function em(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function kx(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3,
          )
          .join(", ")})`
      : ""
  );
}
function gr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return gr(kx(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(qn(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o,
      ) === -1)
    )
      throw new Error(qn(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const sr = (e) => {
  const t = gr(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
function xu(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function $x(e) {
  e = gr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    l = (c, d = (c + n / 30) % 12) =>
      o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const s = [
    Math.round(l(0) * 255),
    Math.round(l(8) * 255),
    Math.round(l(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), s.push(t[3])), xu({ type: a, values: s })
  );
}
function vf(e) {
  e = gr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? gr($x(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function Ix(e, t) {
  const n = vf(e),
    r = vf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Rx(e, t) {
  if (((e = gr(e)), (t = em(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return xu(e);
}
function Px(e, t) {
  if (((e = gr(e)), (t = em(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return xu(e);
}
const wx = g.createContext(null),
  tm = wx;
function Cu() {
  return g.useContext(tm);
}
const zx = typeof Symbol == "function" && Symbol.for,
  _x = zx ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ex(e, t) {
  return typeof t == "function" ? t(e) : h({}, e, t);
}
function Dx(e) {
  const { children: t, theme: n } = e,
    r = Cu(),
    o = g.useMemo(() => {
      const i = r === null ? n : Ex(r, n);
      return i != null && (i[_x] = r !== null), i;
    }, [n, r]);
  return C.jsx(tm.Provider, { value: o, children: t });
}
const mf = {};
function hf(e, t, n, r = !1) {
  return g.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof n == "function") {
      const i = n(o),
        l = e ? h({}, t, { [e]: i }) : i;
      return r ? () => l : l;
    }
    return e ? h({}, t, { [e]: n }) : h({}, t, n);
  }, [e, t, n, r]);
}
function Tx(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = Xv(mf),
    i = Cu() || mf,
    l = hf(r, o, n),
    a = hf(r, i, n, !0);
  return C.jsx(Dx, {
    theme: a,
    children: C.jsx(La.Provider, { value: l, children: t }),
  });
}
const bu = "mode",
  Su = "color-scheme",
  nm = "data-color-scheme";
function Lx(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = bu,
    colorSchemeStorageKey: i = Su,
    attribute: l = nm,
    colorSchemeNode: a = "document.documentElement",
  } = e || {};
  return C.jsx(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  var mode = localStorage.getItem('${o}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${i}-dark') || '${r}';
    } else {
      colorScheme = localStorage.getItem('${i}-light') || '${n}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${i}-light') || '${n}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${i}-dark') || '${r}';
  }
  if (colorScheme) {
    ${a}.setAttribute('${l}', colorScheme);
  }
} catch(e){}})();`,
      },
    },
    "mui-color-scheme-init",
  );
}
function gf(e) {
  if (typeof window < "u" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
function rm(e, t) {
  if (e.mode === "light" || (e.mode === "system" && e.systemMode === "light"))
    return t("light");
  if (e.mode === "dark" || (e.mode === "system" && e.systemMode === "dark"))
    return t("dark");
}
function Bx(e) {
  return rm(e, (t) => {
    if (t === "light") return e.lightColorScheme;
    if (t === "dark") return e.darkColorScheme;
  });
}
function ps(e, t) {
  if (typeof window > "u") return;
  let n;
  try {
    (n = localStorage.getItem(e) || void 0), n || localStorage.setItem(e, t);
  } catch {}
  return n || t;
}
function Ox(e) {
  const {
      defaultMode: t = "light",
      defaultLightColorScheme: n,
      defaultDarkColorScheme: r,
      supportedColorSchemes: o = [],
      modeStorageKey: i = bu,
      colorSchemeStorageKey: l = Su,
      storageWindow: a = typeof window > "u" ? void 0 : window,
    } = e,
    s = o.join(","),
    [c, d] = g.useState(() => {
      const $ = ps(i, t),
        f = ps(`${l}-light`, n),
        p = ps(`${l}-dark`, r);
      return {
        mode: $,
        systemMode: gf($),
        lightColorScheme: f,
        darkColorScheme: p,
      };
    }),
    v = Bx(c),
    m = g.useCallback(
      ($) => {
        d((f) => {
          if ($ === f.mode) return f;
          const p = $ || t;
          try {
            localStorage.setItem(i, p);
          } catch {}
          return h({}, f, { mode: p, systemMode: gf(p) });
        });
      },
      [i, t],
    ),
    y = g.useCallback(
      ($) => {
        $
          ? typeof $ == "string"
            ? $ && !s.includes($)
              ? console.error(
                  `\`${$}\` does not exist in \`theme.colorSchemes\`.`,
                )
              : d((f) => {
                  const p = h({}, f);
                  return (
                    rm(f, (u) => {
                      try {
                        localStorage.setItem(`${l}-${u}`, $);
                      } catch {}
                      u === "light" && (p.lightColorScheme = $),
                        u === "dark" && (p.darkColorScheme = $);
                    }),
                    p
                  );
                })
            : d((f) => {
                const p = h({}, f),
                  u = $.light === null ? n : $.light,
                  k = $.dark === null ? r : $.dark;
                if (u)
                  if (!s.includes(u))
                    console.error(
                      `\`${u}\` does not exist in \`theme.colorSchemes\`.`,
                    );
                  else {
                    p.lightColorScheme = u;
                    try {
                      localStorage.setItem(`${l}-light`, u);
                    } catch {}
                  }
                if (k)
                  if (!s.includes(k))
                    console.error(
                      `\`${k}\` does not exist in \`theme.colorSchemes\`.`,
                    );
                  else {
                    p.darkColorScheme = k;
                    try {
                      localStorage.setItem(`${l}-dark`, k);
                    } catch {}
                  }
                return p;
              })
          : d((f) => {
              try {
                localStorage.setItem(`${l}-light`, n),
                  localStorage.setItem(`${l}-dark`, r);
              } catch {}
              return h({}, f, { lightColorScheme: n, darkColorScheme: r });
            });
      },
      [s, l, n, r],
    ),
    b = g.useCallback(
      ($) => {
        c.mode === "system" &&
          d((f) =>
            h({}, f, { systemMode: $ != null && $.matches ? "dark" : "light" }),
          );
      },
      [c.mode],
    ),
    x = g.useRef(b);
  return (
    (x.current = b),
    g.useEffect(() => {
      const $ = (...p) => x.current(...p),
        f = window.matchMedia("(prefers-color-scheme: dark)");
      return f.addListener($), $(f), () => f.removeListener($);
    }, []),
    g.useEffect(() => {
      const $ = (f) => {
        const p = f.newValue;
        typeof f.key == "string" &&
          f.key.startsWith(l) &&
          (!p || s.match(p)) &&
          (f.key.endsWith("light") && y({ light: p }),
          f.key.endsWith("dark") && y({ dark: p })),
          f.key === i &&
            (!p || ["light", "dark", "system"].includes(p)) &&
            m(p || t);
      };
      if (a)
        return (
          a.addEventListener("storage", $),
          () => a.removeEventListener("storage", $)
        );
    }, [y, m, i, l, s, t, a]),
    h({}, c, { colorScheme: v, setMode: m, setColorScheme: y })
  );
}
const Mx = ["colorSchemes", "components", "generateCssVars", "cssVarPrefix"],
  Ax =
    "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function jx(e) {
  const {
    themeId: t,
    theme: n = {},
    attribute: r = nm,
    modeStorageKey: o = bu,
    colorSchemeStorageKey: i = Su,
    defaultMode: l = "light",
    defaultColorScheme: a,
    disableTransitionOnChange: s = !1,
    resolveTheme: c,
    excludeVariablesFromRoot: d,
  } = e;
  (!n.colorSchemes ||
    (typeof a == "string" && !n.colorSchemes[a]) ||
    (typeof a == "object" && !n.colorSchemes[a == null ? void 0 : a.light]) ||
    (typeof a == "object" && !n.colorSchemes[a == null ? void 0 : a.dark])) &&
    console.error(`MUI: \`${a}\` does not exist in \`theme.colorSchemes\`.`);
  const v = g.createContext(void 0),
    m = () => {
      const f = g.useContext(v);
      if (!f) throw new Error(qn(19));
      return f;
    };
  function y({
    children: f,
    theme: p = n,
    modeStorageKey: u = o,
    colorSchemeStorageKey: k = i,
    attribute: S = r,
    defaultMode: R = l,
    defaultColorScheme: I = a,
    disableTransitionOnChange: P = s,
    storageWindow: D = typeof window > "u" ? void 0 : window,
    documentNode: w = typeof document > "u" ? void 0 : document,
    colorSchemeNode: T = typeof document > "u"
      ? void 0
      : document.documentElement,
    colorSchemeSelector: M = ":root",
    disableNestedContext: O = !1,
    disableStyleSheetGeneration: F = !1,
  }) {
    const B = g.useRef(!1),
      E = Cu(),
      _ = g.useContext(v),
      z = !!_ && !O,
      L = p[t],
      V = L || p,
      {
        colorSchemes: K = {},
        components: X = {},
        generateCssVars: fe = () => ({ vars: {}, css: {} }),
        cssVarPrefix: re,
      } = V,
      ae = Y(V, Mx),
      Q = Object.keys(K),
      A = typeof I == "string" ? I : I.light,
      N = typeof I == "string" ? I : I.dark,
      {
        mode: q,
        setMode: ee,
        systemMode: ne,
        lightColorScheme: Pe,
        darkColorScheme: et,
        colorScheme: Yt,
        setColorScheme: ye,
      } = Ox({
        supportedColorSchemes: Q,
        defaultLightColorScheme: A,
        defaultDarkColorScheme: N,
        modeStorageKey: u,
        colorSchemeStorageKey: k,
        defaultMode: R,
        storageWindow: D,
      });
    let Ce = q,
      me = Yt;
    z && ((Ce = _.mode), (me = _.colorScheme));
    const Qt = Ce || (R === "system" ? l : R),
      qt = me || (Qt === "dark" ? N : A),
      { css: Be, vars: Xe } = fe(),
      we = h({}, ae, {
        components: X,
        colorSchemes: K,
        cssVarPrefix: re,
        vars: Xe,
        getColorSchemeSelector: (te) => `[${S}="${te}"] &`,
      }),
      ht = {},
      Rt = {};
    Object.entries(K).forEach(([te, Fe]) => {
      const { css: Zt, vars: On } = fe(te);
      (we.vars = Ke(we.vars, On)),
        te === qt &&
          (Object.keys(Fe).forEach((Mt) => {
            Fe[Mt] && typeof Fe[Mt] == "object"
              ? (we[Mt] = h({}, we[Mt], Fe[Mt]))
              : (we[Mt] = Fe[Mt]);
          }),
          we.palette && (we.palette.colorScheme = te));
      const ar = typeof I == "string" ? I : R === "dark" ? I.dark : I.light;
      if (te === ar) {
        if (d) {
          const Mt = {};
          d(re).forEach(($o) => {
            (Mt[$o] = Zt[$o]), delete Zt[$o];
          }),
            (ht[`[${S}="${te}"]`] = Mt);
        }
        ht[`${M}, [${S}="${te}"]`] = Zt;
      } else Rt[`${M === ":root" ? "" : M}[${S}="${te}"]`] = Zt;
    }),
      (we.vars = Ke(we.vars, Xe)),
      g.useEffect(() => {
        me && T && T.setAttribute(S, me);
      }, [me, S, T]),
      g.useEffect(() => {
        let te;
        if (P && B.current && w) {
          const Fe = w.createElement("style");
          Fe.appendChild(w.createTextNode(Ax)),
            w.head.appendChild(Fe),
            window.getComputedStyle(w.body),
            (te = setTimeout(() => {
              w.head.removeChild(Fe);
            }, 1));
        }
        return () => {
          clearTimeout(te);
        };
      }, [me, P, w]),
      g.useEffect(
        () => (
          (B.current = !0),
          () => {
            B.current = !1;
          }
        ),
        [],
      );
    const J = g.useMemo(
      () => ({
        mode: Ce,
        systemMode: ne,
        setMode: ee,
        lightColorScheme: Pe,
        darkColorScheme: et,
        colorScheme: me,
        setColorScheme: ye,
        allColorSchemes: Q,
      }),
      [Q, me, et, Pe, Ce, ye, ee, ne],
    );
    let Z = !0;
    (F || (z && (E == null ? void 0 : E.cssVarPrefix) === re)) && (Z = !1);
    const oe = C.jsxs(g.Fragment, {
      children: [
        Z &&
          C.jsxs(g.Fragment, {
            children: [
              C.jsx(bl, { styles: { [M]: Be } }),
              C.jsx(bl, { styles: ht }),
              C.jsx(bl, { styles: Rt }),
            ],
          }),
        C.jsx(Tx, {
          themeId: L ? t : void 0,
          theme: c ? c(we) : we,
          children: f,
        }),
      ],
    });
    return z ? oe : C.jsx(v.Provider, { value: J, children: oe });
  }
  const b = typeof a == "string" ? a : a.light,
    x = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: y,
    useColorScheme: m,
    getInitColorSchemeScript: (f) =>
      Lx(
        h(
          {
            attribute: r,
            colorSchemeStorageKey: i,
            defaultMode: l,
            defaultLightColorScheme: b,
            defaultDarkColorScheme: x,
            modeStorageKey: o,
          },
          f,
        ),
      ),
  };
}
function ku(e = "") {
  function t(...r) {
    if (!r.length) return "";
    const o = r[0];
    return typeof o == "string" &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})`
      : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const yf = (e, t, n, r = []) => {
    let o = e;
    t.forEach((i, l) => {
      l === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(i)] = n)
          : o && typeof o == "object" && (o[i] = n)
        : o &&
          typeof o == "object" &&
          (o[i] || (o[i] = r.includes(i) ? [] : {}), (o = o[i]));
    });
  },
  Fx = (e, t, n) => {
    function r(o, i = [], l = []) {
      Object.entries(o).forEach(([a, s]) => {
        (!n || (n && !n([...i, a]))) &&
          s != null &&
          (typeof s == "object" && Object.keys(s).length > 0
            ? r(s, [...i, a], Array.isArray(s) ? [...l, a] : l)
            : t([...i, a], s, l));
      });
    }
    r(e);
  },
  Nx = (e, t) =>
    typeof t == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
          e.includes(r),
        ) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0
        ? t
        : `${t}px`
      : t;
function vs(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    o = {},
    i = {},
    l = {};
  return (
    Fx(
      e,
      (a, s, c) => {
        if (
          (typeof s == "string" || typeof s == "number") &&
          (!r || !r(a, s))
        ) {
          const d = `--${n ? `${n}-` : ""}${a.join("-")}`;
          Object.assign(o, { [d]: Nx(a, s) }),
            yf(i, a, `var(${d})`, c),
            yf(l, a, `var(${d}, ${s})`, c);
        }
      },
      (a) => a[0] === "vars",
    ),
    { css: o, vars: i, varsWithDefaults: l }
  );
}
const Hx = ["colorSchemes", "components"],
  Vx = ["light"];
function Wx(e, t) {
  const { colorSchemes: n = {} } = e,
    r = Y(e, Hx),
    { vars: o, css: i, varsWithDefaults: l } = vs(r, t);
  let a = l;
  const s = {},
    { light: c } = n,
    d = Y(n, Vx);
  if (
    (Object.entries(d || {}).forEach(([m, y]) => {
      const { vars: b, css: x, varsWithDefaults: $ } = vs(y, t);
      (a = Ke(a, $)), (s[m] = { css: x, vars: b });
    }),
    c)
  ) {
    const { css: m, vars: y, varsWithDefaults: b } = vs(c, t);
    (a = Ke(a, b)), (s.light = { css: m, vars: y });
  }
  return {
    vars: a,
    generateCssVars: (m) =>
      m
        ? { css: h({}, s[m].css), vars: s[m].vars }
        : { css: h({}, i), vars: o },
  };
}
const Ux = h({}, Bi, {
    borderRadius: { themeKey: "radius" },
    boxShadow: { themeKey: "shadow" },
    fontFamily: { themeKey: "fontFamily" },
    fontSize: { themeKey: "fontSize" },
    fontWeight: { themeKey: "fontWeight" },
    letterSpacing: { themeKey: "letterSpacing" },
    lineHeight: { themeKey: "lineHeight" },
  }),
  Kx = Ux,
  Gx = {
    grey: {
      50: "#FBFCFE",
      100: "#F0F4F8",
      200: "#DDE7EE",
      300: "#CDD7E1",
      400: "#9FA6AD",
      500: "#636B74",
      600: "#555E68",
      700: "#32383E",
      800: "#171A1C",
      900: "#0B0D0E",
    },
    blue: {
      50: "#EDF5FD",
      100: "#E3EFFB",
      200: "#C7DFF7",
      300: "#97C3F0",
      400: "#4393E4",
      500: "#0B6BCB",
      600: "#185EA5",
      700: "#12467B",
      800: "#0A2744",
      900: "#051423",
    },
    yellow: {
      50: "#FEFAF6",
      100: "#FDF0E1",
      200: "#FCE1C2",
      300: "#F3C896",
      400: "#EA9A3E",
      500: "#9A5B13",
      600: "#72430D",
      700: "#492B08",
      800: "#2E1B05",
      900: "#1D1002",
    },
    red: {
      50: "#FEF6F6",
      100: "#FCE4E4",
      200: "#F7C5C5",
      300: "#F09898",
      400: "#E47474",
      500: "#C41C1C",
      600: "#A51818",
      700: "#7D1212",
      800: "#430A0A",
      900: "#240505",
    },
    green: {
      50: "#F6FEF6",
      100: "#E3FBE3",
      200: "#C7F7C7",
      300: "#A1E8A1",
      400: "#51BC51",
      500: "#1F7A1F",
      600: "#136C13",
      700: "#0A470A",
      800: "#042F04",
      900: "#021D02",
    },
  },
  Po = Gx;
function Jx(e) {
  var t;
  return (
    !!e[0].match(/^(typography|variants|breakpoints)$/) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === "palette" && !!((t = e[1]) != null && t.match(/^(mode)$/))) ||
    (e[0] === "focus" && e[1] !== "thickness")
  );
}
const ce = (e, t) => _i(e, t, "Mui"),
  ue = (e, t) => Ei(e, t, "Mui"),
  Xx = (e) =>
    e &&
    typeof e == "object" &&
    Object.keys(e).some((t) => {
      var n;
      return (n = t.match) == null
        ? void 0
        : n.call(
            t,
            /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/,
          );
    }),
  xf = (e, t, n) => {
    t.includes("Color") && (e.color = n),
      t.includes("Bg") && (e.backgroundColor = n),
      t.includes("Border") && (e.borderColor = n);
  },
  Cf = (e, t, n) => {
    const r = {};
    return (
      Object.entries(t || {}).forEach(([o, i]) => {
        if (o.match(new RegExp(`${e}(color|bg|border)`, "i")) && i) {
          const l = n ? n(o) : i;
          o.includes("Disabled") &&
            ((r.pointerEvents = "none"),
            (r.cursor = "default"),
            (r["--Icon-color"] = "currentColor")),
            o.match(/(Hover|Active|Disabled)/) ||
              (r["--variant-borderWidth"] ||
                (r["--variant-borderWidth"] = "0px"),
              o.includes("Border") &&
                ((r["--variant-borderWidth"] = "1px"),
                (r.border = "var(--variant-borderWidth) solid"))),
            xf(r, o, l);
        }
      }),
      r
    );
  },
  tt = (e, t) => {
    let n = {};
    if (t) {
      const { getCssVar: r, palette: o } = t;
      Object.entries(o).forEach((i) => {
        const [l, a] = i;
        Xx(a) &&
          typeof a == "object" &&
          (n = h({}, n, {
            [l]: Cf(
              e,
              a,
              (s) => `var(--variant-${s}, ${r(`palette-${l}-${s}`, o[l][s])})`,
            ),
          }));
      });
    }
    return (
      (n.context = Cf(e, {
        plainColor: "var(--variant-plainColor)",
        plainHoverColor: "var(--variant-plainHoverColor)",
        plainHoverBg: "var(--variant-plainHoverBg)",
        plainActiveBg: "var(--variant-plainActiveBg)",
        plainDisabledColor: "var(--variant-plainDisabledColor)",
        outlinedColor: "var(--variant-outlinedColor)",
        outlinedBorder: "var(--variant-outlinedBorder)",
        outlinedHoverColor: "var(--variant-outlinedHoverColor)",
        outlinedHoverBorder: "var(--variant-outlinedHoverBorder)",
        outlinedHoverBg: "var(--variant-outlinedHoverBg)",
        outlinedActiveBg: "var(--variant-outlinedActiveBg)",
        outlinedDisabledColor: "var(--variant-outlinedDisabledColor)",
        outlinedDisabledBorder: "var(--variant-outlinedDisabledBorder)",
        softColor: "var(--variant-softColor)",
        softBg: "var(--variant-softBg)",
        softHoverColor: "var(--variant-softHoverColor)",
        softHoverBg: "var(--variant-softHoverBg)",
        softActiveBg: "var(--variant-softActiveBg)",
        softDisabledColor: "var(--variant-softDisabledColor)",
        softDisabledBg: "var(--variant-softDisabledBg)",
        solidColor: "var(--variant-solidColor)",
        solidBg: "var(--variant-solidBg)",
        solidHoverBg: "var(--variant-solidHoverBg)",
        solidActiveBg: "var(--variant-solidActiveBg)",
        solidDisabledColor: "var(--variant-solidDisabledColor)",
        solidDisabledBg: "var(--variant-solidDisabledBg)",
      })),
      n
    );
  },
  Yx = [
    "cssVarPrefix",
    "breakpoints",
    "spacing",
    "components",
    "variants",
    "shouldSkipGeneratingVar",
  ],
  Qx = ["colorSchemes"],
  qx = (e = "joy") => ku(e);
function Zx(e) {
  var t, n, r, o, i, l, a, s, c, d;
  const v = e || {},
    {
      cssVarPrefix: m = "joy",
      breakpoints: y,
      spacing: b,
      components: x,
      variants: $,
      shouldSkipGeneratingVar: f = Jx,
    } = v,
    p = Y(v, Yx),
    u = qx(m),
    k = {
      primary: Po.blue,
      neutral: Po.grey,
      danger: Po.red,
      success: Po.green,
      warning: Po.yellow,
      common: { white: "#FFF", black: "#000" },
    },
    S = (N) => {
      var q;
      const ee = N.split("-"),
        ne = ee[1],
        Pe = ee[2];
      return u(N, (q = k[ne]) == null ? void 0 : q[Pe]);
    },
    R = (N) => ({
      plainColor: S(`palette-${N}-500`),
      plainHoverBg: S(`palette-${N}-100`),
      plainActiveBg: S(`palette-${N}-200`),
      plainDisabledColor: S("palette-neutral-400"),
      outlinedColor: S(`palette-${N}-500`),
      outlinedBorder: S(`palette-${N}-300`),
      outlinedHoverBg: S(`palette-${N}-100`),
      outlinedActiveBg: S(`palette-${N}-200`),
      outlinedDisabledColor: S("palette-neutral-400"),
      outlinedDisabledBorder: S("palette-neutral-200"),
      softColor: S(`palette-${N}-700`),
      softBg: S(`palette-${N}-100`),
      softHoverBg: S(`palette-${N}-200`),
      softActiveColor: S(`palette-${N}-800`),
      softActiveBg: S(`palette-${N}-300`),
      softDisabledColor: S("palette-neutral-400"),
      softDisabledBg: S("palette-neutral-50"),
      solidColor: S("palette-common-white"),
      solidBg: S(`palette-${N}-500`),
      solidHoverBg: S(`palette-${N}-600`),
      solidActiveBg: S(`palette-${N}-700`),
      solidDisabledColor: S("palette-neutral-400"),
      solidDisabledBg: S("palette-neutral-100"),
    }),
    I = (N) => ({
      plainColor: S(`palette-${N}-300`),
      plainHoverBg: S(`palette-${N}-800`),
      plainActiveBg: S(`palette-${N}-700`),
      plainDisabledColor: S("palette-neutral-500"),
      outlinedColor: S(`palette-${N}-200`),
      outlinedBorder: S(`palette-${N}-700`),
      outlinedHoverBg: S(`palette-${N}-800`),
      outlinedActiveBg: S(`palette-${N}-700`),
      outlinedDisabledColor: S("palette-neutral-500"),
      outlinedDisabledBorder: S("palette-neutral-800"),
      softColor: S(`palette-${N}-200`),
      softBg: S(`palette-${N}-800`),
      softHoverBg: S(`palette-${N}-700`),
      softActiveColor: S(`palette-${N}-100`),
      softActiveBg: S(`palette-${N}-600`),
      softDisabledColor: S("palette-neutral-500"),
      softDisabledBg: S("palette-neutral-800"),
      solidColor: S("palette-common-white"),
      solidBg: S(`palette-${N}-500`),
      solidHoverBg: S(`palette-${N}-600`),
      solidActiveBg: S(`palette-${N}-700`),
      solidDisabledColor: S("palette-neutral-500"),
      solidDisabledBg: S("palette-neutral-800"),
    }),
    P = {
      palette: {
        mode: "light",
        primary: h({}, k.primary, R("primary")),
        neutral: h({}, k.neutral, R("neutral"), {
          plainColor: S("palette-neutral-700"),
          plainHoverColor: S("palette-neutral-900"),
          outlinedColor: S("palette-neutral-700"),
        }),
        danger: h({}, k.danger, R("danger")),
        success: h({}, k.success, R("success")),
        warning: h({}, k.warning, R("warning")),
        common: { white: "#FFF", black: "#000" },
        text: {
          primary: S("palette-neutral-800"),
          secondary: S("palette-neutral-700"),
          tertiary: S("palette-neutral-600"),
          icon: S("palette-neutral-500"),
        },
        background: {
          body: S("palette-common-white"),
          surface: S("palette-neutral-50"),
          popup: S("palette-common-white"),
          level1: S("palette-neutral-100"),
          level2: S("palette-neutral-200"),
          level3: S("palette-neutral-300"),
          tooltip: S("palette-neutral-500"),
          backdrop: `rgba(${u(
            "palette-neutral-darkChannel",
            sr(k.neutral[900]),
          )} / 0.25)`,
        },
        divider: `rgba(${u(
          "palette-neutral-mainChannel",
          sr(k.neutral[500]),
        )} / 0.2)`,
        focusVisible: S("palette-primary-500"),
      },
      shadowRing: "0 0 #000",
      shadowChannel: "21 21 21",
      shadowOpacity: "0.08",
    },
    D = {
      palette: {
        mode: "dark",
        primary: h({}, k.primary, I("primary")),
        neutral: h({}, k.neutral, I("neutral"), {
          plainColor: S("palette-neutral-300"),
          plainHoverColor: S("palette-neutral-300"),
        }),
        danger: h({}, k.danger, I("danger")),
        success: h({}, k.success, I("success")),
        warning: h({}, k.warning, I("warning")),
        common: { white: "#FFF", black: "#000" },
        text: {
          primary: S("palette-neutral-100"),
          secondary: S("palette-neutral-300"),
          tertiary: S("palette-neutral-400"),
          icon: S("palette-neutral-400"),
        },
        background: {
          body: S("palette-common-black"),
          surface: S("palette-neutral-900"),
          popup: S("palette-common-black"),
          level1: S("palette-neutral-800"),
          level2: S("palette-neutral-700"),
          level3: S("palette-neutral-600"),
          tooltip: S("palette-neutral-600"),
          backdrop: `rgba(${u(
            "palette-neutral-darkChannel",
            sr(k.neutral[50]),
          )} / 0.25)`,
        },
        divider: `rgba(${u(
          "palette-neutral-mainChannel",
          sr(k.neutral[500]),
        )} / 0.16)`,
        focusVisible: S("palette-primary-500"),
      },
      shadowRing: "0 0 #000",
      shadowChannel: "0 0 0",
      shadowOpacity: "0.6",
    },
    w =
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    T = h(
      {
        body: `"Inter", ${u(`fontFamily-fallback, ${w}`)}`,
        display: `"Inter", ${u(`fontFamily-fallback, ${w}`)}`,
        code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
        fallback: w,
      },
      p.fontFamily,
    ),
    M = h({ sm: 300, md: 500, lg: 600, xl: 700 }, p.fontWeight),
    O = h(
      {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        xl2: "1.5rem",
        xl3: "1.875rem",
        xl4: "2.25rem",
      },
      p.fontSize,
    ),
    F = h(
      { xs: "1.33334", sm: "1.42858", md: "1.5", lg: "1.55556", xl: "1.66667" },
      p.lineHeight,
    ),
    B =
      (t =
        (n = p.colorSchemes) == null || (n = n.light) == null
          ? void 0
          : n.shadowRing) != null
        ? t
        : P.shadowRing,
    E =
      (r =
        (o = p.colorSchemes) == null || (o = o.light) == null
          ? void 0
          : o.shadowChannel) != null
        ? r
        : P.shadowChannel,
    _ =
      (i =
        (l = p.colorSchemes) == null || (l = l.light) == null
          ? void 0
          : l.shadowOpacity) != null
        ? i
        : P.shadowOpacity,
    z = {
      colorSchemes: { light: P, dark: D },
      fontSize: O,
      fontFamily: T,
      fontWeight: M,
      focus: {
        thickness: "2px",
        selector: `&.${ce("", "focusVisible")}, &:focus-visible`,
        default: {
          outlineOffset: `var(--focus-outline-offset, ${u(
            "focus-thickness",
            (a = (s = p.focus) == null ? void 0 : s.thickness) != null
              ? a
              : "2px",
          )})`,
          outline: `${u(
            "focus-thickness",
            (c = (d = p.focus) == null ? void 0 : d.thickness) != null
              ? c
              : "2px",
          )} solid ${u("palette-focusVisible", k.primary[500])}`,
        },
      },
      lineHeight: F,
      radius: { xs: "2px", sm: "6px", md: "8px", lg: "12px", xl: "16px" },
      shadow: {
        xs: `${u("shadowRing", B)}, 0px 1px 2px 0px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)})`,
        sm: `${u("shadowRing", B)}, 0px 1px 2px 0px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)}), 0px 2px 4px 0px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)})`,
        md: `${u("shadowRing", B)}, 0px 2px 8px -2px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)}), 0px 6px 12px -2px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)})`,
        lg: `${u("shadowRing", B)}, 0px 2px 8px -2px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)}), 0px 12px 16px -4px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)})`,
        xl: `${u("shadowRing", B)}, 0px 2px 8px -2px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)}), 0px 20px 24px -4px rgba(${u(
          "shadowChannel",
          E,
        )} / ${u("shadowOpacity", _)})`,
      },
      zIndex: {
        badge: 1,
        table: 10,
        popup: 1e3,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
      },
      typography: {
        h1: {
          fontFamily: u(`fontFamily-display, ${T.display}`),
          fontWeight: u(`fontWeight-xl, ${M.xl}`),
          fontSize: u(`fontSize-xl4, ${O.xl4}`),
          lineHeight: u(`lineHeight-xs, ${F.xs}`),
          letterSpacing: "-0.025em",
          color: u(`palette-text-primary, ${P.palette.text.primary}`),
        },
        h2: {
          fontFamily: u(`fontFamily-display, ${T.display}`),
          fontWeight: u(`fontWeight-xl, ${M.xl}`),
          fontSize: u(`fontSize-xl3, ${O.xl3}`),
          lineHeight: u(`lineHeight-xs, ${F.xs}`),
          letterSpacing: "-0.025em",
          color: u(`palette-text-primary, ${P.palette.text.primary}`),
        },
        h3: {
          fontFamily: u(`fontFamily-display, ${T.display}`),
          fontWeight: u(`fontWeight-lg, ${M.lg}`),
          fontSize: u(`fontSize-xl2, ${O.xl2}`),
          lineHeight: u(`lineHeight-xs, ${F.xs}`),
          letterSpacing: "-0.025em",
          color: u(`palette-text-primary, ${P.palette.text.primary}`),
        },
        h4: {
          fontFamily: u(`fontFamily-display, ${T.display}`),
          fontWeight: u(`fontWeight-lg, ${M.lg}`),
          fontSize: u(`fontSize-xl, ${O.xl}`),
          lineHeight: u(`lineHeight-md, ${F.md}`),
          letterSpacing: "-0.025em",
          color: u(`palette-text-primary, ${P.palette.text.primary}`),
        },
        "title-lg": {
          fontFamily: u(`fontFamily-body, ${T.body}`),
          fontWeight: u(`fontWeight-lg, ${M.lg}`),
          fontSize: u(`fontSize-lg, ${O.lg}`),
          lineHeight: u(`lineHeight-xs, ${F.xs}`),
          color: u(`palette-text-primary, ${P.palette.text.primary}`),
        },
        "title-md": {
          fontFamily: u(`fontFamily-body, ${T.body}`),
          fontWeight: u(`fontWeight-md, ${M.md}`),
          fontSize: u(`fontSize-md, ${O.md}`),
          lineHeight: u(`lineHeight-md, ${F.md}`),
          color: u(`palette-text-primary, ${P.palette.text.primary}`),
        },
        "title-sm": {
          fontFamily: u(`fontFamily-body, ${T.body}`),
          fontWeight: u(`fontWeight-md, ${M.md}`),
          fontSize: u(`fontSize-sm, ${O.sm}`),
          lineHeight: u(`lineHeight-sm, ${F.sm}`),
          color: u(`palette-text-primary, ${P.palette.text.primary}`),
        },
        "body-lg": {
          fontFamily: u(`fontFamily-body, ${T.body}`),
          fontSize: u(`fontSize-lg, ${O.lg}`),
          lineHeight: u(`lineHeight-md, ${F.md}`),
          color: u(`palette-text-secondary, ${P.palette.text.secondary}`),
        },
        "body-md": {
          fontFamily: u(`fontFamily-body, ${T.body}`),
          fontSize: u(`fontSize-md, ${O.md}`),
          lineHeight: u(`lineHeight-md, ${F.md}`),
          color: u(`palette-text-secondary, ${P.palette.text.secondary}`),
        },
        "body-sm": {
          fontFamily: u(`fontFamily-body, ${T.body}`),
          fontSize: u(`fontSize-sm, ${O.sm}`),
          lineHeight: u(`lineHeight-md, ${F.md}`),
          color: u(`palette-text-tertiary, ${P.palette.text.tertiary}`),
        },
        "body-xs": {
          fontFamily: u(`fontFamily-body, ${T.body}`),
          fontWeight: u(`fontWeight-md, ${M.md}`),
          fontSize: u(`fontSize-xs, ${O.xs}`),
          lineHeight: u(`lineHeight-md, ${F.md}`),
          color: u(`palette-text-tertiary, ${P.palette.text.tertiary}`),
        },
      },
    },
    L = p ? Ke(z, p) : z,
    { colorSchemes: V } = L,
    K = Y(L, Qx),
    X = h({ colorSchemes: V }, K, {
      breakpoints: Wv(y ?? {}),
      components: Ke(
        {
          MuiSvgIcon: {
            defaultProps: { fontSize: "xl2" },
            styleOverrides: {
              root: ({ ownerState: N, theme: q }) => {
                var ee;
                const ne = N.instanceFontSize;
                return h(
                  { margin: "var(--Icon-margin)" },
                  N.fontSize &&
                    N.fontSize !== "inherit" && {
                      fontSize: `var(--Icon-fontSize, ${
                        q.vars.fontSize[N.fontSize]
                      })`,
                    },
                  !N.htmlColor &&
                    h(
                      {
                        color: `var(--Icon-color, ${X.vars.palette.text.icon})`,
                      },
                      N.color &&
                        N.color !== "inherit" &&
                        q.vars.palette[N.color] && {
                          color: `rgba(${
                            (ee = q.vars.palette[N.color]) == null
                              ? void 0
                              : ee.mainChannel
                          } / 1)`,
                        },
                    ),
                  ne &&
                    ne !== "inherit" && {
                      "--Icon-fontSize": q.vars.fontSize[ne],
                    },
                );
              },
            },
          },
        },
        x,
      ),
      cssVarPrefix: m,
      getCssVar: u,
      spacing: Gv(b),
    });
  function fe(N, q) {
    Object.keys(q).forEach((ee) => {
      const ne = { main: "500", light: "200", dark: "700" };
      N === "dark" && (ne.main = 400),
        !q[ee].mainChannel &&
          q[ee][ne.main] &&
          (q[ee].mainChannel = sr(q[ee][ne.main])),
        !q[ee].lightChannel &&
          q[ee][ne.light] &&
          (q[ee].lightChannel = sr(q[ee][ne.light])),
        !q[ee].darkChannel &&
          q[ee][ne.dark] &&
          (q[ee].darkChannel = sr(q[ee][ne.dark]));
    });
  }
  Object.entries(X.colorSchemes).forEach(([N, q]) => {
    fe(N, q.palette);
  });
  const re = { prefix: m, shouldSkipGeneratingVar: f },
    { vars: ae, generateCssVars: Q } = Wx(h({ colorSchemes: V }, K), re);
  (X.vars = ae),
    (X.generateCssVars = Q),
    (X.unstable_sxConfig = h({}, Kx, e == null ? void 0 : e.unstable_sxConfig)),
    (X.unstable_sx = function (q) {
      return Oi({ sx: q, theme: this });
    }),
    (X.getColorSchemeSelector = (N) =>
      N === "light"
        ? "&"
        : `&[data-joy-color-scheme="${N}"], [data-joy-color-scheme="${N}"] &`);
  const A = { getCssVar: u, palette: X.colorSchemes.light.palette };
  return (
    (X.variants = Ke(
      {
        plain: tt("plain", A),
        plainHover: tt("plainHover", A),
        plainActive: tt("plainActive", A),
        plainDisabled: tt("plainDisabled", A),
        outlined: tt("outlined", A),
        outlinedHover: tt("outlinedHover", A),
        outlinedActive: tt("outlinedActive", A),
        outlinedDisabled: tt("outlinedDisabled", A),
        soft: tt("soft", A),
        softHover: tt("softHover", A),
        softActive: tt("softActive", A),
        softDisabled: tt("softDisabled", A),
        solid: tt("solid", A),
        solidHover: tt("solidHover", A),
        solidActive: tt("solidActive", A),
        solidDisabled: tt("solidDisabled", A),
      },
      $,
    )),
    (X.palette = h({}, X.colorSchemes.light.palette, { colorScheme: "light" })),
    (X.shouldSkipGeneratingVar = f),
    X
  );
}
const eC = Zx(),
  bo = eC,
  Mi = "$$joy";
function om(e) {
  return C.jsx(ax, h({}, e, { defaultTheme: bo, themeId: Mi }));
}
function tC(e) {
  const { children: t, disableColorScheme: n = !1 } = e;
  return C.jsxs(g.Fragment, {
    children: [
      C.jsx(om, {
        styles: (r) => {
          var o, i;
          const l = {};
          n ||
            Object.entries(r.colorSchemes).forEach(([s, c]) => {
              var d;
              l[r.getColorSchemeSelector(s).replace(/\s*&/, "")] = {
                colorScheme: (d = c.palette) == null ? void 0 : d.mode,
              };
            });
          const a =
            (o =
              (i = r.components) == null ||
              (i = i.JoyTypography) == null ||
              (i = i.defaultProps) == null
                ? void 0
                : i.level) != null
              ? o
              : "body-md";
          return h(
            {
              html: {
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                boxSizing: "border-box",
                WebkitTextSizeAdjust: "100%",
              },
              "*, *::before, *::after": { boxSizing: "inherit" },
              "strong, b": { fontWeight: r.vars.fontWeight.lg },
              body: h(
                {
                  margin: 0,
                  color: r.vars.palette.text.primary,
                  fontFamily: r.vars.fontFamily.body,
                },
                r.typography[a],
                {
                  backgroundColor: r.vars.palette.background.body,
                  "@media print": {
                    backgroundColor: r.vars.palette.common.white,
                  },
                  "&::backdrop": {
                    backgroundColor: r.vars.palette.background.backdrop,
                  },
                },
              ),
            },
            l,
          );
        },
        defaultTheme: bo,
      }),
      t,
    ],
  });
}
const {
    CssVarsProvider: nC,
    useColorScheme: _z,
    getInitColorSchemeScript: Ez,
  } = jx({
    themeId: Mi,
    theme: bo,
    attribute: "data-joy-color-scheme",
    modeStorageKey: "joy-mode",
    colorSchemeStorageKey: "joy-color-scheme",
    defaultColorScheme: { light: "light", dark: "dark" },
  }),
  rC = qv({ defaultTheme: bo, themeId: Mi }),
  H = rC;
function de({ props: e, name: t }) {
  return Zv({
    props: e,
    name: t,
    defaultTheme: h({}, bo, { components: {} }),
    themeId: Mi,
  });
}
var nc = {},
  im = { exports: {} },
  Bt = {},
  lm = { exports: {} },
  am = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, L) {
    var V = z.length;
    z.push(L);
    e: for (; 0 < V; ) {
      var K = (V - 1) >>> 1,
        X = z[K];
      if (0 < o(X, L)) (z[K] = L), (z[V] = X), (V = K);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var L = z[0],
      V = z.pop();
    if (V !== L) {
      z[0] = V;
      e: for (var K = 0, X = z.length, fe = X >>> 1; K < fe; ) {
        var re = 2 * (K + 1) - 1,
          ae = z[re],
          Q = re + 1,
          A = z[Q];
        if (0 > o(ae, V))
          Q < X && 0 > o(A, ae)
            ? ((z[K] = A), (z[Q] = V), (K = Q))
            : ((z[K] = ae), (z[re] = V), (K = re));
        else if (Q < X && 0 > o(A, V)) (z[K] = A), (z[Q] = V), (K = Q);
        else break e;
      }
    }
    return L;
  }
  function o(z, L) {
    var V = z.sortIndex - L.sortIndex;
    return V !== 0 ? V : z.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    c = [],
    d = 1,
    v = null,
    m = 3,
    y = !1,
    b = !1,
    x = !1,
    $ = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function u(z) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= z)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function k(z) {
    if (((x = !1), u(z), !b))
      if (n(s) !== null) (b = !0), E(S);
      else {
        var L = n(c);
        L !== null && _(k, L.startTime - z);
      }
  }
  function S(z, L) {
    (b = !1), x && ((x = !1), f(P), (P = -1)), (y = !0);
    var V = m;
    try {
      for (
        u(L), v = n(s);
        v !== null && (!(v.expirationTime > L) || (z && !T()));

      ) {
        var K = v.callback;
        if (typeof K == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var X = K(v.expirationTime <= L);
          (L = e.unstable_now()),
            typeof X == "function" ? (v.callback = X) : v === n(s) && r(s),
            u(L);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var fe = !0;
      else {
        var re = n(c);
        re !== null && _(k, re.startTime - L), (fe = !1);
      }
      return fe;
    } finally {
      (v = null), (m = V), (y = !1);
    }
  }
  var R = !1,
    I = null,
    P = -1,
    D = 5,
    w = -1;
  function T() {
    return !(e.unstable_now() - w < D);
  }
  function M() {
    if (I !== null) {
      var z = e.unstable_now();
      w = z;
      var L = !0;
      try {
        L = I(!0, z);
      } finally {
        L ? O() : ((R = !1), (I = null));
      }
    } else R = !1;
  }
  var O;
  if (typeof p == "function")
    O = function () {
      p(M);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      B = F.port2;
    (F.port1.onmessage = M),
      (O = function () {
        B.postMessage(null);
      });
  } else
    O = function () {
      $(M, 0);
    };
  function E(z) {
    (I = z), R || ((R = !0), O());
  }
  function _(z, L) {
    P = $(function () {
      z(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || y || ((b = !0), E(S));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (D = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (z) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var V = m;
      m = L;
      try {
        return z();
      } finally {
        m = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, L) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var V = m;
      m = z;
      try {
        return L();
      } finally {
        m = V;
      }
    }),
    (e.unstable_scheduleCallback = function (z, L, V) {
      var K = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? K + V : K))
          : (V = K),
        z)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = V + X),
        (z = {
          id: d++,
          callback: L,
          priorityLevel: z,
          startTime: V,
          expirationTime: X,
          sortIndex: -1,
        }),
        V > K
          ? ((z.sortIndex = V),
            t(c, z),
            n(s) === null &&
              z === n(c) &&
              (x ? (f(P), (P = -1)) : (x = !0), _(k, V - K)))
          : ((z.sortIndex = X), t(s, z), b || y || ((b = !0), E(S))),
        z
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (z) {
      var L = m;
      return function () {
        var V = m;
        m = L;
        try {
          return z.apply(this, arguments);
        } finally {
          m = V;
        }
      };
    });
})(am);
lm.exports = am;
var oC = lm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sm = g,
  Dt = oC;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var cm = new Set(),
  ii = {};
function $r(e, t) {
  oo(e, t), oo(e + "Capture", t);
}
function oo(e, t) {
  for (ii[e] = t, e = 0; e < t.length; e++) cm.add(t[e]);
}
var wn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  rc = Object.prototype.hasOwnProperty,
  iC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bf = {},
  Sf = {};
function lC(e) {
  return rc.call(Sf, e)
    ? !0
    : rc.call(bf, e)
      ? !1
      : iC.test(e)
        ? (Sf[e] = !0)
        : ((bf[e] = !0), !1);
}
function aC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sC(e, t, n, r) {
  if (t === null || typeof t > "u" || aC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function mt(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ze[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ze[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ze[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ze[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ze[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ze[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ze[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $u = /[\-:]([a-z])/g;
function Iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($u, Iu);
    Ze[t] = new mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($u, Iu);
    Ze[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($u, Iu);
  Ze[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ze[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ze[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ru(e, t, n, r) {
  var o = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sC(t, n, o, r) && (n = null),
    r || o === null
      ? lC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tn = sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Yi = Symbol.for("react.element"),
  Lr = Symbol.for("react.portal"),
  Br = Symbol.for("react.fragment"),
  Pu = Symbol.for("react.strict_mode"),
  oc = Symbol.for("react.profiler"),
  um = Symbol.for("react.provider"),
  dm = Symbol.for("react.context"),
  wu = Symbol.for("react.forward_ref"),
  ic = Symbol.for("react.suspense"),
  lc = Symbol.for("react.suspense_list"),
  zu = Symbol.for("react.memo"),
  An = Symbol.for("react.lazy"),
  fm = Symbol.for("react.offscreen"),
  kf = Symbol.iterator;
function wo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kf && e[kf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ee = Object.assign,
  ms;
function Ao(e) {
  if (ms === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ms = (t && t[1]) || "";
    }
  return (
    `
` +
    ms +
    e
  );
}
var hs = !1;
function gs(e, t) {
  if (!e || hs) return "";
  hs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (hs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ao(e) : "";
}
function cC(e) {
  switch (e.tag) {
    case 5:
      return Ao(e.type);
    case 16:
      return Ao("Lazy");
    case 13:
      return Ao("Suspense");
    case 19:
      return Ao("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = gs(e.type, !1)), e;
    case 11:
      return (e = gs(e.type.render, !1)), e;
    case 1:
      return (e = gs(e.type, !0)), e;
    default:
      return "";
  }
}
function ac(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Br:
      return "Fragment";
    case Lr:
      return "Portal";
    case oc:
      return "Profiler";
    case Pu:
      return "StrictMode";
    case ic:
      return "Suspense";
    case lc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case dm:
        return (e.displayName || "Context") + ".Consumer";
      case um:
        return (e._context.displayName || "Context") + ".Provider";
      case wu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zu:
        return (
          (t = e.displayName || null), t !== null ? t : ac(e.type) || "Memo"
        );
      case An:
        (t = e._payload), (e = e._init);
        try {
          return ac(e(t));
        } catch {}
    }
  return null;
}
function uC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ac(t);
    case 8:
      return t === Pu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function pm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function dC(e) {
  var t = pm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qi(e) {
  e._valueTracker || (e._valueTracker = dC(e));
}
function vm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = pm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sc(e, t) {
  var n = t.checked;
  return Ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $f(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function mm(e, t) {
  (t = t.checked), t != null && Ru(e, "checked", t, !1);
}
function cc(e, t) {
  mm(e, t);
  var n = Zn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? uc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && uc(e, t.type, Zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function If(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function uc(e, t, n) {
  (t !== "number" || Hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jo = Array.isArray;
function Jr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function dc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Rf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (jo(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zn(n) };
}
function hm(e, t) {
  var n = Zn(t.value),
    r = Zn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var qi,
  ym = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        qi = qi || document.createElement("div"),
          qi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = qi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function li(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  fC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vo).forEach(function (e) {
  fC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vo[t] = Vo[e]);
  });
});
function xm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vo.hasOwnProperty(e) && Vo[e])
      ? ("" + t).trim()
      : t + "px";
}
function Cm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = xm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var pC = Ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function pc(e, t) {
  if (t) {
    if (pC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function vc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var mc = null;
function _u(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hc = null,
  Xr = null,
  Yr = null;
function wf(e) {
  if ((e = Fi(e))) {
    if (typeof hc != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Wa(t)), hc(e.stateNode, e.type, t));
  }
}
function bm(e) {
  Xr ? (Yr ? Yr.push(e) : (Yr = [e])) : (Xr = e);
}
function Sm() {
  if (Xr) {
    var e = Xr,
      t = Yr;
    if (((Yr = Xr = null), wf(e), t)) for (e = 0; e < t.length; e++) wf(t[e]);
  }
}
function km(e, t) {
  return e(t);
}
function $m() {}
var ys = !1;
function Im(e, t, n) {
  if (ys) return e(t, n);
  ys = !0;
  try {
    return km(e, t, n);
  } finally {
    (ys = !1), (Xr !== null || Yr !== null) && ($m(), Sm());
  }
}
function ai(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Wa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var gc = !1;
if (wn)
  try {
    var zo = {};
    Object.defineProperty(zo, "passive", {
      get: function () {
        gc = !0;
      },
    }),
      window.addEventListener("test", zo, zo),
      window.removeEventListener("test", zo, zo);
  } catch {
    gc = !1;
  }
function vC(e, t, n, r, o, i, l, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Wo = !1,
  Vl = null,
  Wl = !1,
  yc = null,
  mC = {
    onError: function (e) {
      (Wo = !0), (Vl = e);
    },
  };
function hC(e, t, n, r, o, i, l, a, s) {
  (Wo = !1), (Vl = null), vC.apply(mC, arguments);
}
function gC(e, t, n, r, o, i, l, a, s) {
  if ((hC.apply(this, arguments), Wo)) {
    if (Wo) {
      var c = Vl;
      (Wo = !1), (Vl = null);
    } else throw Error(j(198));
    Wl || ((Wl = !0), (yc = c));
  }
}
function Ir(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Rm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zf(e) {
  if (Ir(e) !== e) throw Error(j(188));
}
function yC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ir(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return zf(o), e;
        if (i === r) return zf(o), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Pm(e) {
  return (e = yC(e)), e !== null ? wm(e) : null;
}
function wm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zm = Dt.unstable_scheduleCallback,
  _f = Dt.unstable_cancelCallback,
  xC = Dt.unstable_shouldYield,
  CC = Dt.unstable_requestPaint,
  Oe = Dt.unstable_now,
  bC = Dt.unstable_getCurrentPriorityLevel,
  Eu = Dt.unstable_ImmediatePriority,
  _m = Dt.unstable_UserBlockingPriority,
  Ul = Dt.unstable_NormalPriority,
  SC = Dt.unstable_LowPriority,
  Em = Dt.unstable_IdlePriority,
  Fa = null,
  hn = null;
function kC(e) {
  if (hn && typeof hn.onCommitFiberRoot == "function")
    try {
      hn.onCommitFiberRoot(Fa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var an = Math.clz32 ? Math.clz32 : RC,
  $C = Math.log,
  IC = Math.LN2;
function RC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($C(e) / IC) | 0)) | 0;
}
var Zi = 64,
  el = 4194304;
function Fo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Kl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = Fo(a)) : ((i &= l), i !== 0 && (r = Fo(i)));
  } else (l = n & ~o), l !== 0 ? (r = Fo(l)) : i !== 0 && (r = Fo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - an(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function PC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wC(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - an(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? (!(a & n) || a & r) && (o[l] = PC(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function xc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dm() {
  var e = Zi;
  return (Zi <<= 1), !(Zi & 4194240) && (Zi = 64), e;
}
function xs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ai(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - an(t)),
    (e[t] = n);
}
function zC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - an(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Du(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - an(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var he = 0;
function Tm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Lm,
  Tu,
  Bm,
  Om,
  Mm,
  Cc = !1,
  tl = [],
  Wn = null,
  Un = null,
  Kn = null,
  si = new Map(),
  ci = new Map(),
  Fn = [],
  _C =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ef(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wn = null;
      break;
    case "dragenter":
    case "dragleave":
      Un = null;
      break;
    case "mouseover":
    case "mouseout":
      Kn = null;
      break;
    case "pointerover":
    case "pointerout":
      si.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ci.delete(t.pointerId);
  }
}
function _o(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Fi(t)), t !== null && Tu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function EC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Wn = _o(Wn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Un = _o(Un, e, t, n, r, o)), !0;
    case "mouseover":
      return (Kn = _o(Kn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return si.set(i, _o(si.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ci.set(i, _o(ci.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Am(e) {
  var t = dr(e.target);
  if (t !== null) {
    var n = Ir(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rm(n)), t !== null)) {
          (e.blockedOn = t),
            Mm(e.priority, function () {
              Bm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (mc = r), n.target.dispatchEvent(r), (mc = null);
    } else return (t = Fi(n)), t !== null && Tu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Df(e, t, n) {
  $l(e) && n.delete(t);
}
function DC() {
  (Cc = !1),
    Wn !== null && $l(Wn) && (Wn = null),
    Un !== null && $l(Un) && (Un = null),
    Kn !== null && $l(Kn) && (Kn = null),
    si.forEach(Df),
    ci.forEach(Df);
}
function Eo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Cc ||
      ((Cc = !0),
      Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, DC)));
}
function ui(e) {
  function t(o) {
    return Eo(o, e);
  }
  if (0 < tl.length) {
    Eo(tl[0], e);
    for (var n = 1; n < tl.length; n++) {
      var r = tl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wn !== null && Eo(Wn, e),
      Un !== null && Eo(Un, e),
      Kn !== null && Eo(Kn, e),
      si.forEach(t),
      ci.forEach(t),
      n = 0;
    n < Fn.length;
    n++
  )
    (r = Fn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Fn.length && ((n = Fn[0]), n.blockedOn === null); )
    Am(n), n.blockedOn === null && Fn.shift();
}
var Qr = Tn.ReactCurrentBatchConfig,
  Gl = !0;
function TC(e, t, n, r) {
  var o = he,
    i = Qr.transition;
  Qr.transition = null;
  try {
    (he = 1), Lu(e, t, n, r);
  } finally {
    (he = o), (Qr.transition = i);
  }
}
function LC(e, t, n, r) {
  var o = he,
    i = Qr.transition;
  Qr.transition = null;
  try {
    (he = 4), Lu(e, t, n, r);
  } finally {
    (he = o), (Qr.transition = i);
  }
}
function Lu(e, t, n, r) {
  if (Gl) {
    var o = bc(e, t, n, r);
    if (o === null) zs(e, t, r, Jl, n), Ef(e, r);
    else if (EC(o, e, t, n, r)) r.stopPropagation();
    else if ((Ef(e, r), t & 4 && -1 < _C.indexOf(e))) {
      for (; o !== null; ) {
        var i = Fi(o);
        if (
          (i !== null && Lm(i),
          (i = bc(e, t, n, r)),
          i === null && zs(e, t, r, Jl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else zs(e, t, r, null, n);
  }
}
var Jl = null;
function bc(e, t, n, r) {
  if (((Jl = null), (e = _u(r)), (e = dr(e)), e !== null))
    if (((t = Ir(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Rm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Jl = e), null;
}
function jm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (bC()) {
        case Eu:
          return 1;
        case _m:
          return 4;
        case Ul:
        case SC:
          return 16;
        case Em:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Hn = null,
  Bu = null,
  Il = null;
function Fm() {
  if (Il) return Il;
  var e,
    t = Bu,
    n = t.length,
    r,
    o = "value" in Hn ? Hn.value : Hn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Il = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Rl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function nl() {
  return !0;
}
function Tf() {
  return !1;
}
function Ot(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? nl
        : Tf),
      (this.isPropagationStopped = Tf),
      this
    );
  }
  return (
    Ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = nl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = nl));
      },
      persist: function () {},
      isPersistent: nl,
    }),
    t
  );
}
var So = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ou = Ot(So),
  ji = Ee({}, So, { view: 0, detail: 0 }),
  BC = Ot(ji),
  Cs,
  bs,
  Do,
  Na = Ee({}, ji, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Mu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Do &&
            (Do && e.type === "mousemove"
              ? ((Cs = e.screenX - Do.screenX), (bs = e.screenY - Do.screenY))
              : (bs = Cs = 0),
            (Do = e)),
          Cs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bs;
    },
  }),
  Lf = Ot(Na),
  OC = Ee({}, Na, { dataTransfer: 0 }),
  MC = Ot(OC),
  AC = Ee({}, ji, { relatedTarget: 0 }),
  Ss = Ot(AC),
  jC = Ee({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  FC = Ot(jC),
  NC = Ee({}, So, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  HC = Ot(NC),
  VC = Ee({}, So, { data: 0 }),
  Bf = Ot(VC),
  WC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  UC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  KC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function GC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = KC[e]) ? !!t[e] : !1;
}
function Mu() {
  return GC;
}
var JC = Ee({}, ji, {
    key: function (e) {
      if (e.key) {
        var t = WC[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Rl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? UC[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mu,
    charCode: function (e) {
      return e.type === "keypress" ? Rl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  XC = Ot(JC),
  YC = Ee({}, Na, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Of = Ot(YC),
  QC = Ee({}, ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mu,
  }),
  qC = Ot(QC),
  ZC = Ee({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eb = Ot(ZC),
  tb = Ee({}, Na, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nb = Ot(tb),
  rb = [9, 13, 27, 32],
  Au = wn && "CompositionEvent" in window,
  Uo = null;
wn && "documentMode" in document && (Uo = document.documentMode);
var ob = wn && "TextEvent" in window && !Uo,
  Nm = wn && (!Au || (Uo && 8 < Uo && 11 >= Uo)),
  Mf = " ",
  Af = !1;
function Hm(e, t) {
  switch (e) {
    case "keyup":
      return rb.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Or = !1;
function ib(e, t) {
  switch (e) {
    case "compositionend":
      return Vm(t);
    case "keypress":
      return t.which !== 32 ? null : ((Af = !0), Mf);
    case "textInput":
      return (e = t.data), e === Mf && Af ? null : e;
    default:
      return null;
  }
}
function lb(e, t) {
  if (Or)
    return e === "compositionend" || (!Au && Hm(e, t))
      ? ((e = Fm()), (Il = Bu = Hn = null), (Or = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Nm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ab = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ab[e.type] : t === "textarea";
}
function Wm(e, t, n, r) {
  bm(r),
    (t = Xl(t, "onChange")),
    0 < t.length &&
      ((n = new Ou("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ko = null,
  di = null;
function sb(e) {
  th(e, 0);
}
function Ha(e) {
  var t = jr(e);
  if (vm(t)) return e;
}
function cb(e, t) {
  if (e === "change") return t;
}
var Um = !1;
if (wn) {
  var ks;
  if (wn) {
    var $s = "oninput" in document;
    if (!$s) {
      var Ff = document.createElement("div");
      Ff.setAttribute("oninput", "return;"),
        ($s = typeof Ff.oninput == "function");
    }
    ks = $s;
  } else ks = !1;
  Um = ks && (!document.documentMode || 9 < document.documentMode);
}
function Nf() {
  Ko && (Ko.detachEvent("onpropertychange", Km), (di = Ko = null));
}
function Km(e) {
  if (e.propertyName === "value" && Ha(di)) {
    var t = [];
    Wm(t, di, e, _u(e)), Im(sb, t);
  }
}
function ub(e, t, n) {
  e === "focusin"
    ? (Nf(), (Ko = t), (di = n), Ko.attachEvent("onpropertychange", Km))
    : e === "focusout" && Nf();
}
function db(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ha(di);
}
function fb(e, t) {
  if (e === "click") return Ha(t);
}
function pb(e, t) {
  if (e === "input" || e === "change") return Ha(t);
}
function vb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var cn = typeof Object.is == "function" ? Object.is : vb;
function fi(e, t) {
  if (cn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!rc.call(t, o) || !cn(e[o], t[o])) return !1;
  }
  return !0;
}
function Hf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vf(e, t) {
  var n = Hf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hf(n);
  }
}
function Gm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Gm(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Jm() {
  for (var e = window, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hl(e.document);
  }
  return t;
}
function ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function mb(e) {
  var t = Jm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ju(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Vf(n, i));
        var l = Vf(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var hb = wn && "documentMode" in document && 11 >= document.documentMode,
  Mr = null,
  Sc = null,
  Go = null,
  kc = !1;
function Wf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  kc ||
    Mr == null ||
    Mr !== Hl(r) ||
    ((r = Mr),
    "selectionStart" in r && ju(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Go && fi(Go, r)) ||
      ((Go = r),
      (r = Xl(Sc, "onSelect")),
      0 < r.length &&
        ((t = new Ou("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mr))));
}
function rl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ar = {
    animationend: rl("Animation", "AnimationEnd"),
    animationiteration: rl("Animation", "AnimationIteration"),
    animationstart: rl("Animation", "AnimationStart"),
    transitionend: rl("Transition", "TransitionEnd"),
  },
  Is = {},
  Xm = {};
wn &&
  ((Xm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
  "TransitionEvent" in window || delete Ar.transitionend.transition);
function Va(e) {
  if (Is[e]) return Is[e];
  if (!Ar[e]) return e;
  var t = Ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xm) return (Is[e] = t[n]);
  return e;
}
var Ym = Va("animationend"),
  Qm = Va("animationiteration"),
  qm = Va("animationstart"),
  Zm = Va("transitionend"),
  eh = new Map(),
  Uf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function nr(e, t) {
  eh.set(e, t), $r(t, [e]);
}
for (var Rs = 0; Rs < Uf.length; Rs++) {
  var Ps = Uf[Rs],
    gb = Ps.toLowerCase(),
    yb = Ps[0].toUpperCase() + Ps.slice(1);
  nr(gb, "on" + yb);
}
nr(Ym, "onAnimationEnd");
nr(Qm, "onAnimationIteration");
nr(qm, "onAnimationStart");
nr("dblclick", "onDoubleClick");
nr("focusin", "onFocus");
nr("focusout", "onBlur");
nr(Zm, "onTransitionEnd");
oo("onMouseEnter", ["mouseout", "mouseover"]);
oo("onMouseLeave", ["mouseout", "mouseover"]);
oo("onPointerEnter", ["pointerout", "pointerover"]);
oo("onPointerLeave", ["pointerout", "pointerover"]);
$r(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
$r(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
$r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$r(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
$r(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
$r(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var No =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  xb = new Set("cancel close invalid load scroll toggle".split(" ").concat(No));
function Kf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), gC(r, t, void 0, e), (e.currentTarget = null);
}
function th(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          Kf(o, a, c), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Kf(o, a, c), (i = s);
        }
    }
  }
  if (Wl) throw ((e = yc), (Wl = !1), (yc = null), e);
}
function be(e, t) {
  var n = t[wc];
  n === void 0 && (n = t[wc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (nh(t, e, 2, !1), n.add(r));
}
function ws(e, t, n) {
  var r = 0;
  t && (r |= 4), nh(n, e, r, t);
}
var ol = "_reactListening" + Math.random().toString(36).slice(2);
function pi(e) {
  if (!e[ol]) {
    (e[ol] = !0),
      cm.forEach(function (n) {
        n !== "selectionchange" && (xb.has(n) || ws(n, !1, e), ws(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ol] || ((t[ol] = !0), ws("selectionchange", !1, t));
  }
}
function nh(e, t, n, r) {
  switch (jm(t)) {
    case 1:
      var o = TC;
      break;
    case 4:
      o = LC;
      break;
    default:
      o = Lu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !gc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function zs(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = dr(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Im(function () {
    var c = i,
      d = _u(n),
      v = [];
    e: {
      var m = eh.get(e);
      if (m !== void 0) {
        var y = Ou,
          b = e;
        switch (e) {
          case "keypress":
            if (Rl(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = XC;
            break;
          case "focusin":
            (b = "focus"), (y = Ss);
            break;
          case "focusout":
            (b = "blur"), (y = Ss);
            break;
          case "beforeblur":
          case "afterblur":
            y = Ss;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = MC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = qC;
            break;
          case Ym:
          case Qm:
          case qm:
            y = FC;
            break;
          case Zm:
            y = eb;
            break;
          case "scroll":
            y = BC;
            break;
          case "wheel":
            y = nb;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = HC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Of;
        }
        var x = (t & 4) !== 0,
          $ = !x && e === "scroll",
          f = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var p = c, u; p !== null; ) {
          u = p;
          var k = u.stateNode;
          if (
            (u.tag === 5 &&
              k !== null &&
              ((u = k),
              f !== null && ((k = ai(p, f)), k != null && x.push(vi(p, k, u)))),
            $)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((m = new y(m, b, null, n, d)), v.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== mc &&
            (b = n.relatedTarget || n.fromElement) &&
            (dr(b) || b[zn]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          y
            ? ((b = n.relatedTarget || n.toElement),
              (y = c),
              (b = b ? dr(b) : null),
              b !== null &&
                (($ = Ir(b)), b !== $ || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((y = null), (b = c)),
          y !== b)
        ) {
          if (
            ((x = Lf),
            (k = "onMouseLeave"),
            (f = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Of),
              (k = "onPointerLeave"),
              (f = "onPointerEnter"),
              (p = "pointer")),
            ($ = y == null ? m : jr(y)),
            (u = b == null ? m : jr(b)),
            (m = new x(k, p + "leave", y, n, d)),
            (m.target = $),
            (m.relatedTarget = u),
            (k = null),
            dr(d) === c &&
              ((x = new x(f, p + "enter", b, n, d)),
              (x.target = u),
              (x.relatedTarget = $),
              (k = x)),
            ($ = k),
            y && b)
          )
            t: {
              for (x = y, f = b, p = 0, u = x; u; u = Pr(u)) p++;
              for (u = 0, k = f; k; k = Pr(k)) u++;
              for (; 0 < p - u; ) (x = Pr(x)), p--;
              for (; 0 < u - p; ) (f = Pr(f)), u--;
              for (; p--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Pr(x)), (f = Pr(f));
              }
              x = null;
            }
          else x = null;
          y !== null && Gf(v, m, y, x, !1),
            b !== null && $ !== null && Gf(v, $, b, x, !0);
        }
      }
      e: {
        if (
          ((m = c ? jr(c) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var S = cb;
        else if (jf(m))
          if (Um) S = pb;
          else {
            S = db;
            var R = ub;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = fb);
        if (S && (S = S(e, c))) {
          Wm(v, S, n, d);
          break e;
        }
        R && R(e, m, c),
          e === "focusout" &&
            (R = m._wrapperState) &&
            R.controlled &&
            m.type === "number" &&
            uc(m, "number", m.value);
      }
      switch (((R = c ? jr(c) : window), e)) {
        case "focusin":
          (jf(R) || R.contentEditable === "true") &&
            ((Mr = R), (Sc = c), (Go = null));
          break;
        case "focusout":
          Go = Sc = Mr = null;
          break;
        case "mousedown":
          kc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (kc = !1), Wf(v, n, d);
          break;
        case "selectionchange":
          if (hb) break;
        case "keydown":
        case "keyup":
          Wf(v, n, d);
      }
      var I;
      if (Au)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Or
          ? Hm(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Nm &&
          n.locale !== "ko" &&
          (Or || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Or && (I = Fm())
            : ((Hn = d),
              (Bu = "value" in Hn ? Hn.value : Hn.textContent),
              (Or = !0))),
        (R = Xl(c, P)),
        0 < R.length &&
          ((P = new Bf(P, e, null, n, d)),
          v.push({ event: P, listeners: R }),
          I ? (P.data = I) : ((I = Vm(n)), I !== null && (P.data = I)))),
        (I = ob ? ib(e, n) : lb(e, n)) &&
          ((c = Xl(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Bf("onBeforeInput", "beforeinput", null, n, d)),
            v.push({ event: d, listeners: c }),
            (d.data = I)));
    }
    th(v, t);
  });
}
function vi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ai(e, n)),
      i != null && r.unshift(vi(e, i, o)),
      (i = ai(e, t)),
      i != null && r.push(vi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Pr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gf(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((s = ai(n, i)), s != null && l.unshift(vi(n, s, a)))
        : o || ((s = ai(n, i)), s != null && l.push(vi(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Cb = /\r\n?/g,
  bb = /\u0000|\uFFFD/g;
function Jf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Cb,
      `
`,
    )
    .replace(bb, "");
}
function il(e, t, n) {
  if (((t = Jf(t)), Jf(e) !== t && n)) throw Error(j(425));
}
function Yl() {}
var $c = null,
  Ic = null;
function Rc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Pc = typeof setTimeout == "function" ? setTimeout : void 0,
  Sb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xf = typeof Promise == "function" ? Promise : void 0,
  kb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xf < "u"
        ? function (e) {
            return Xf.resolve(null).then(e).catch($b);
          }
        : Pc;
function $b(e) {
  setTimeout(function () {
    throw e;
  });
}
function _s(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ui(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ui(t);
}
function Gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Yf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ko = Math.random().toString(36).slice(2),
  vn = "__reactFiber$" + ko,
  mi = "__reactProps$" + ko,
  zn = "__reactContainer$" + ko,
  wc = "__reactEvents$" + ko,
  Ib = "__reactListeners$" + ko,
  Rb = "__reactHandles$" + ko;
function dr(e) {
  var t = e[vn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zn] || n[vn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Yf(e); e !== null; ) {
          if ((n = e[vn])) return n;
          e = Yf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Fi(e) {
  return (
    (e = e[vn] || e[zn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Wa(e) {
  return e[mi] || null;
}
var zc = [],
  Fr = -1;
function rr(e) {
  return { current: e };
}
function Se(e) {
  0 > Fr || ((e.current = zc[Fr]), (zc[Fr] = null), Fr--);
}
function xe(e, t) {
  Fr++, (zc[Fr] = e.current), (e.current = t);
}
var er = {},
  at = rr(er),
  xt = rr(!1),
  yr = er;
function io(e, t) {
  var n = e.type.contextTypes;
  if (!n) return er;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ct(e) {
  return (e = e.childContextTypes), e != null;
}
function Ql() {
  Se(xt), Se(at);
}
function Qf(e, t, n) {
  if (at.current !== er) throw Error(j(168));
  xe(at, t), xe(xt, n);
}
function rh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, uC(e) || "Unknown", o));
  return Ee({}, n, r);
}
function ql(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || er),
    (yr = at.current),
    xe(at, e),
    xe(xt, xt.current),
    !0
  );
}
function qf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = rh(e, t, yr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Se(xt),
      Se(at),
      xe(at, e))
    : Se(xt),
    xe(xt, n);
}
var bn = null,
  Ua = !1,
  Es = !1;
function oh(e) {
  bn === null ? (bn = [e]) : bn.push(e);
}
function Pb(e) {
  (Ua = !0), oh(e);
}
function or() {
  if (!Es && bn !== null) {
    Es = !0;
    var e = 0,
      t = he;
    try {
      var n = bn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (bn = null), (Ua = !1);
    } catch (o) {
      throw (bn !== null && (bn = bn.slice(e + 1)), zm(Eu, or), o);
    } finally {
      (he = t), (Es = !1);
    }
  }
  return null;
}
var Nr = [],
  Hr = 0,
  Zl = null,
  ea = 0,
  jt = [],
  Ft = 0,
  xr = null,
  kn = 1,
  $n = "";
function cr(e, t) {
  (Nr[Hr++] = ea), (Nr[Hr++] = Zl), (Zl = e), (ea = t);
}
function ih(e, t, n) {
  (jt[Ft++] = kn), (jt[Ft++] = $n), (jt[Ft++] = xr), (xr = e);
  var r = kn;
  e = $n;
  var o = 32 - an(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - an(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (kn = (1 << (32 - an(t) + o)) | (n << o) | r),
      ($n = i + e);
  } else (kn = (1 << i) | (n << o) | r), ($n = e);
}
function Fu(e) {
  e.return !== null && (cr(e, 1), ih(e, 1, 0));
}
function Nu(e) {
  for (; e === Zl; )
    (Zl = Nr[--Hr]), (Nr[Hr] = null), (ea = Nr[--Hr]), (Nr[Hr] = null);
  for (; e === xr; )
    (xr = jt[--Ft]),
      (jt[Ft] = null),
      ($n = jt[--Ft]),
      (jt[Ft] = null),
      (kn = jt[--Ft]),
      (jt[Ft] = null);
}
var Et = null,
  zt = null,
  Re = !1,
  rn = null;
function lh(e, t) {
  var n = Nt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Et = e), (zt = Gn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Et = e), (zt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = xr !== null ? { id: kn, overflow: $n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Et = e),
            (zt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _c(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ec(e) {
  if (Re) {
    var t = zt;
    if (t) {
      var n = t;
      if (!Zf(e, t)) {
        if (_c(e)) throw Error(j(418));
        t = Gn(n.nextSibling);
        var r = Et;
        t && Zf(e, t)
          ? lh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (Et = e));
      }
    } else {
      if (_c(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (Re = !1), (Et = e);
    }
  }
}
function ep(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Et = e;
}
function ll(e) {
  if (e !== Et) return !1;
  if (!Re) return ep(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Rc(e.type, e.memoizedProps))),
    t && (t = zt))
  ) {
    if (_c(e)) throw (ah(), Error(j(418)));
    for (; t; ) lh(e, t), (t = Gn(t.nextSibling));
  }
  if ((ep(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              zt = Gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      zt = null;
    }
  } else zt = Et ? Gn(e.stateNode.nextSibling) : null;
  return !0;
}
function ah() {
  for (var e = zt; e; ) e = Gn(e.nextSibling);
}
function lo() {
  (zt = Et = null), (Re = !1);
}
function Hu(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
var wb = Tn.ReactCurrentBatchConfig;
function tn(e, t) {
  if (e && e.defaultProps) {
    (t = Ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ta = rr(null),
  na = null,
  Vr = null,
  Vu = null;
function Wu() {
  Vu = Vr = na = null;
}
function Uu(e) {
  var t = ta.current;
  Se(ta), (e._currentValue = t);
}
function Dc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qr(e, t) {
  (na = e),
    (Vu = Vr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function Ut(e) {
  var t = e._currentValue;
  if (Vu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vr === null)) {
      if (na === null) throw Error(j(308));
      (Vr = e), (na.dependencies = { lanes: 0, firstContext: e });
    } else Vr = Vr.next = e;
  return t;
}
var fr = null;
function Ku(e) {
  fr === null ? (fr = [e]) : fr.push(e);
}
function sh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ku(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    _n(e, r)
  );
}
function _n(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jn = !1;
function Gu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ch(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function In(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), se & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      _n(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ku(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    _n(e, n)
  );
}
function Pl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Du(e, n);
  }
}
function tp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ra(e, t, n, r) {
  var o = e.updateQueue;
  jn = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      c = s.next;
    (s.next = null), l === null ? (i = c) : (l.next = c), (l = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== l &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var v = o.baseState;
    (l = 0), (d = c = s = null), (a = i);
    do {
      var m = a.lane,
        y = a.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var b = e,
            x = a;
          switch (((m = t), (y = n), x.tag)) {
            case 1:
              if (((b = x.payload), typeof b == "function")) {
                v = b.call(y, v, m);
                break e;
              }
              v = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = x.payload),
                (m = typeof b == "function" ? b.call(y, v, m) : b),
                m == null)
              )
                break e;
              v = Ee({}, v, m);
              break e;
            case 2:
              jn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [a]) : m.push(a));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (s = v)) : (d = d.next = y),
          (l |= m);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (s = v),
      (o.baseState = s),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (br |= l), (e.lanes = l), (e.memoizedState = v);
  }
}
function np(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var uh = new sm.Component().refs;
function Tc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ka = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ir(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ft(),
      o = Yn(e),
      i = In(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Jn(e, i, o)),
      t !== null && (sn(t, e, o, r), Pl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ft(),
      o = Yn(e),
      i = In(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Jn(e, i, o)),
      t !== null && (sn(t, e, o, r), Pl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ft(),
      r = Yn(e),
      o = In(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Jn(e, o, r)),
      t !== null && (sn(t, e, r, n), Pl(t, e, r));
  },
};
function rp(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !fi(n, r) || !fi(o, i)
        : !0
  );
}
function dh(e, t, n) {
  var r = !1,
    o = er,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ut(i))
      : ((o = Ct(t) ? yr : at.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? io(e, o) : er)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ka),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function op(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ka.enqueueReplaceState(t, t.state, null);
}
function Lc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = uh), Gu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ut(i))
    : ((i = Ct(t) ? yr : at.current), (o.context = io(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Tc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ka.enqueueReplaceState(o, o.state, null),
      ra(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function To(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === uh && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function al(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function ip(e) {
  var t = e._init;
  return t(e._payload);
}
function fh(e) {
  function t(f, p) {
    if (e) {
      var u = f.deletions;
      u === null ? ((f.deletions = [p]), (f.flags |= 16)) : u.push(p);
    }
  }
  function n(f, p) {
    if (!e) return null;
    for (; p !== null; ) t(f, p), (p = p.sibling);
    return null;
  }
  function r(f, p) {
    for (f = new Map(); p !== null; )
      p.key !== null ? f.set(p.key, p) : f.set(p.index, p), (p = p.sibling);
    return f;
  }
  function o(f, p) {
    return (f = Qn(f, p)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, p, u) {
    return (
      (f.index = u),
      e
        ? ((u = f.alternate),
          u !== null
            ? ((u = u.index), u < p ? ((f.flags |= 2), p) : u)
            : ((f.flags |= 2), p))
        : ((f.flags |= 1048576), p)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, p, u, k) {
    return p === null || p.tag !== 6
      ? ((p = As(u, f.mode, k)), (p.return = f), p)
      : ((p = o(p, u)), (p.return = f), p);
  }
  function s(f, p, u, k) {
    var S = u.type;
    return S === Br
      ? d(f, p, u.props.children, k, u.key)
      : p !== null &&
          (p.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === An &&
              ip(S) === p.type))
        ? ((k = o(p, u.props)), (k.ref = To(f, p, u)), (k.return = f), k)
        : ((k = Tl(u.type, u.key, u.props, null, f.mode, k)),
          (k.ref = To(f, p, u)),
          (k.return = f),
          k);
  }
  function c(f, p, u, k) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== u.containerInfo ||
      p.stateNode.implementation !== u.implementation
      ? ((p = js(u, f.mode, k)), (p.return = f), p)
      : ((p = o(p, u.children || [])), (p.return = f), p);
  }
  function d(f, p, u, k, S) {
    return p === null || p.tag !== 7
      ? ((p = mr(u, f.mode, k, S)), (p.return = f), p)
      : ((p = o(p, u)), (p.return = f), p);
  }
  function v(f, p, u) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = As("" + p, f.mode, u)), (p.return = f), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Yi:
          return (
            (u = Tl(p.type, p.key, p.props, null, f.mode, u)),
            (u.ref = To(f, null, p)),
            (u.return = f),
            u
          );
        case Lr:
          return (p = js(p, f.mode, u)), (p.return = f), p;
        case An:
          var k = p._init;
          return v(f, k(p._payload), u);
      }
      if (jo(p) || wo(p))
        return (p = mr(p, f.mode, u, null)), (p.return = f), p;
      al(f, p);
    }
    return null;
  }
  function m(f, p, u, k) {
    var S = p !== null ? p.key : null;
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return S !== null ? null : a(f, p, "" + u, k);
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Yi:
          return u.key === S ? s(f, p, u, k) : null;
        case Lr:
          return u.key === S ? c(f, p, u, k) : null;
        case An:
          return (S = u._init), m(f, p, S(u._payload), k);
      }
      if (jo(u) || wo(u)) return S !== null ? null : d(f, p, u, k, null);
      al(f, u);
    }
    return null;
  }
  function y(f, p, u, k, S) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (f = f.get(u) || null), a(p, f, "" + k, S);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Yi:
          return (f = f.get(k.key === null ? u : k.key) || null), s(p, f, k, S);
        case Lr:
          return (f = f.get(k.key === null ? u : k.key) || null), c(p, f, k, S);
        case An:
          var R = k._init;
          return y(f, p, u, R(k._payload), S);
      }
      if (jo(k) || wo(k)) return (f = f.get(u) || null), d(p, f, k, S, null);
      al(p, k);
    }
    return null;
  }
  function b(f, p, u, k) {
    for (
      var S = null, R = null, I = p, P = (p = 0), D = null;
      I !== null && P < u.length;
      P++
    ) {
      I.index > P ? ((D = I), (I = null)) : (D = I.sibling);
      var w = m(f, I, u[P], k);
      if (w === null) {
        I === null && (I = D);
        break;
      }
      e && I && w.alternate === null && t(f, I),
        (p = i(w, p, P)),
        R === null ? (S = w) : (R.sibling = w),
        (R = w),
        (I = D);
    }
    if (P === u.length) return n(f, I), Re && cr(f, P), S;
    if (I === null) {
      for (; P < u.length; P++)
        (I = v(f, u[P], k)),
          I !== null &&
            ((p = i(I, p, P)), R === null ? (S = I) : (R.sibling = I), (R = I));
      return Re && cr(f, P), S;
    }
    for (I = r(f, I); P < u.length; P++)
      (D = y(I, f, P, u[P], k)),
        D !== null &&
          (e && D.alternate !== null && I.delete(D.key === null ? P : D.key),
          (p = i(D, p, P)),
          R === null ? (S = D) : (R.sibling = D),
          (R = D));
    return (
      e &&
        I.forEach(function (T) {
          return t(f, T);
        }),
      Re && cr(f, P),
      S
    );
  }
  function x(f, p, u, k) {
    var S = wo(u);
    if (typeof S != "function") throw Error(j(150));
    if (((u = S.call(u)), u == null)) throw Error(j(151));
    for (
      var R = (S = null), I = p, P = (p = 0), D = null, w = u.next();
      I !== null && !w.done;
      P++, w = u.next()
    ) {
      I.index > P ? ((D = I), (I = null)) : (D = I.sibling);
      var T = m(f, I, w.value, k);
      if (T === null) {
        I === null && (I = D);
        break;
      }
      e && I && T.alternate === null && t(f, I),
        (p = i(T, p, P)),
        R === null ? (S = T) : (R.sibling = T),
        (R = T),
        (I = D);
    }
    if (w.done) return n(f, I), Re && cr(f, P), S;
    if (I === null) {
      for (; !w.done; P++, w = u.next())
        (w = v(f, w.value, k)),
          w !== null &&
            ((p = i(w, p, P)), R === null ? (S = w) : (R.sibling = w), (R = w));
      return Re && cr(f, P), S;
    }
    for (I = r(f, I); !w.done; P++, w = u.next())
      (w = y(I, f, P, w.value, k)),
        w !== null &&
          (e && w.alternate !== null && I.delete(w.key === null ? P : w.key),
          (p = i(w, p, P)),
          R === null ? (S = w) : (R.sibling = w),
          (R = w));
    return (
      e &&
        I.forEach(function (M) {
          return t(f, M);
        }),
      Re && cr(f, P),
      S
    );
  }
  function $(f, p, u, k) {
    if (
      (typeof u == "object" &&
        u !== null &&
        u.type === Br &&
        u.key === null &&
        (u = u.props.children),
      typeof u == "object" && u !== null)
    ) {
      switch (u.$$typeof) {
        case Yi:
          e: {
            for (var S = u.key, R = p; R !== null; ) {
              if (R.key === S) {
                if (((S = u.type), S === Br)) {
                  if (R.tag === 7) {
                    n(f, R.sibling),
                      (p = o(R, u.props.children)),
                      (p.return = f),
                      (f = p);
                    break e;
                  }
                } else if (
                  R.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === An &&
                    ip(S) === R.type)
                ) {
                  n(f, R.sibling),
                    (p = o(R, u.props)),
                    (p.ref = To(f, R, u)),
                    (p.return = f),
                    (f = p);
                  break e;
                }
                n(f, R);
                break;
              } else t(f, R);
              R = R.sibling;
            }
            u.type === Br
              ? ((p = mr(u.props.children, f.mode, k, u.key)),
                (p.return = f),
                (f = p))
              : ((k = Tl(u.type, u.key, u.props, null, f.mode, k)),
                (k.ref = To(f, p, u)),
                (k.return = f),
                (f = k));
          }
          return l(f);
        case Lr:
          e: {
            for (R = u.key; p !== null; ) {
              if (p.key === R)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === u.containerInfo &&
                  p.stateNode.implementation === u.implementation
                ) {
                  n(f, p.sibling),
                    (p = o(p, u.children || [])),
                    (p.return = f),
                    (f = p);
                  break e;
                } else {
                  n(f, p);
                  break;
                }
              else t(f, p);
              p = p.sibling;
            }
            (p = js(u, f.mode, k)), (p.return = f), (f = p);
          }
          return l(f);
        case An:
          return (R = u._init), $(f, p, R(u._payload), k);
      }
      if (jo(u)) return b(f, p, u, k);
      if (wo(u)) return x(f, p, u, k);
      al(f, u);
    }
    return (typeof u == "string" && u !== "") || typeof u == "number"
      ? ((u = "" + u),
        p !== null && p.tag === 6
          ? (n(f, p.sibling), (p = o(p, u)), (p.return = f), (f = p))
          : (n(f, p), (p = As(u, f.mode, k)), (p.return = f), (f = p)),
        l(f))
      : n(f, p);
  }
  return $;
}
var ao = fh(!0),
  ph = fh(!1),
  Ni = {},
  gn = rr(Ni),
  hi = rr(Ni),
  gi = rr(Ni);
function pr(e) {
  if (e === Ni) throw Error(j(174));
  return e;
}
function Ju(e, t) {
  switch ((xe(gi, t), xe(hi, e), xe(gn, Ni), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fc(t, e));
  }
  Se(gn), xe(gn, t);
}
function so() {
  Se(gn), Se(hi), Se(gi);
}
function vh(e) {
  pr(gi.current);
  var t = pr(gn.current),
    n = fc(t, e.type);
  t !== n && (xe(hi, e), xe(gn, n));
}
function Xu(e) {
  hi.current === e && (Se(gn), Se(hi));
}
var ze = rr(0);
function oa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ds = [];
function Yu() {
  for (var e = 0; e < Ds.length; e++)
    Ds[e]._workInProgressVersionPrimary = null;
  Ds.length = 0;
}
var wl = Tn.ReactCurrentDispatcher,
  Ts = Tn.ReactCurrentBatchConfig,
  Cr = 0,
  _e = null,
  Ne = null,
  Ue = null,
  ia = !1,
  Jo = !1,
  yi = 0,
  zb = 0;
function nt() {
  throw Error(j(321));
}
function Qu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!cn(e[n], t[n])) return !1;
  return !0;
}
function qu(e, t, n, r, o, i) {
  if (
    ((Cr = i),
    (_e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wl.current = e === null || e.memoizedState === null ? Tb : Lb),
    (e = n(r, o)),
    Jo)
  ) {
    i = 0;
    do {
      if (((Jo = !1), (yi = 0), 25 <= i)) throw Error(j(301));
      (i += 1),
        (Ue = Ne = null),
        (t.updateQueue = null),
        (wl.current = Bb),
        (e = n(r, o));
    } while (Jo);
  }
  if (
    ((wl.current = la),
    (t = Ne !== null && Ne.next !== null),
    (Cr = 0),
    (Ue = Ne = _e = null),
    (ia = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Zu() {
  var e = yi !== 0;
  return (yi = 0), e;
}
function dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ue === null ? (_e.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function Kt() {
  if (Ne === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Ue === null ? _e.memoizedState : Ue.next;
  if (t !== null) (Ue = t), (Ne = e);
  else {
    if (e === null) throw Error(j(310));
    (Ne = e),
      (e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      Ue === null ? (_e.memoizedState = Ue = e) : (Ue = Ue.next = e);
  }
  return Ue;
}
function xi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ls(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      c = i;
    do {
      var d = c.lane;
      if ((Cr & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var v = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((a = s = v), (l = r)) : (s = s.next = v),
          (_e.lanes |= d),
          (br |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (l = r) : (s.next = a),
      cn(r, t.memoizedState) || (yt = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (_e.lanes |= i), (br |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bs(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    cn(i, t.memoizedState) || (yt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function mh() {}
function hh(e, t) {
  var n = _e,
    r = Kt(),
    o = t(),
    i = !cn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (yt = !0)),
    (r = r.queue),
    ed(xh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ue !== null && Ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ci(9, yh.bind(null, n, r, o, t), void 0, null),
      Ge === null)
    )
      throw Error(j(349));
    Cr & 30 || gh(n, t, o);
  }
  return o;
}
function gh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function yh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ch(t) && bh(e);
}
function xh(e, t, n) {
  return n(function () {
    Ch(t) && bh(e);
  });
}
function Ch(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !cn(e, n);
  } catch {
    return !0;
  }
}
function bh(e) {
  var t = _n(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function lp(e) {
  var t = dn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Db.bind(null, _e, e)),
    [t.memoizedState, e]
  );
}
function Ci(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sh() {
  return Kt().memoizedState;
}
function zl(e, t, n, r) {
  var o = dn();
  (_e.flags |= e),
    (o.memoizedState = Ci(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ga(e, t, n, r) {
  var o = Kt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ne !== null) {
    var l = Ne.memoizedState;
    if (((i = l.destroy), r !== null && Qu(r, l.deps))) {
      o.memoizedState = Ci(t, n, i, r);
      return;
    }
  }
  (_e.flags |= e), (o.memoizedState = Ci(1 | t, n, i, r));
}
function ap(e, t) {
  return zl(8390656, 8, e, t);
}
function ed(e, t) {
  return Ga(2048, 8, e, t);
}
function kh(e, t) {
  return Ga(4, 2, e, t);
}
function $h(e, t) {
  return Ga(4, 4, e, t);
}
function Ih(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Rh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ga(4, 4, Ih.bind(null, t, e), n)
  );
}
function td() {}
function Ph(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wh(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zh(e, t, n) {
  return Cr & 21
    ? (cn(n, t) || ((n = Dm()), (_e.lanes |= n), (br |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function _b(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ts.transition;
  Ts.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (Ts.transition = r);
  }
}
function _h() {
  return Kt().memoizedState;
}
function Eb(e, t, n) {
  var r = Yn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Eh(e))
  )
    Dh(t, n);
  else if (((n = sh(e, t, n, r)), n !== null)) {
    var o = ft();
    sn(n, e, r, o), Th(n, t, r);
  }
}
function Db(e, t, n) {
  var r = Yn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Eh(e)) Dh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), cn(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Ku(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = sh(e, t, o, r)),
      n !== null && ((o = ft()), sn(n, e, r, o), Th(n, t, r));
  }
}
function Eh(e) {
  var t = e.alternate;
  return e === _e || (t !== null && t === _e);
}
function Dh(e, t) {
  Jo = ia = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Th(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Du(e, n);
  }
}
var la = {
    readContext: Ut,
    useCallback: nt,
    useContext: nt,
    useEffect: nt,
    useImperativeHandle: nt,
    useInsertionEffect: nt,
    useLayoutEffect: nt,
    useMemo: nt,
    useReducer: nt,
    useRef: nt,
    useState: nt,
    useDebugValue: nt,
    useDeferredValue: nt,
    useTransition: nt,
    useMutableSource: nt,
    useSyncExternalStore: nt,
    useId: nt,
    unstable_isNewReconciler: !1,
  },
  Tb = {
    readContext: Ut,
    useCallback: function (e, t) {
      return (dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ut,
    useEffect: ap,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zl(4194308, 4, Ih.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Eb.bind(null, _e, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lp,
    useDebugValue: td,
    useDeferredValue: function (e) {
      return (dn().memoizedState = e);
    },
    useTransition: function () {
      var e = lp(!1),
        t = e[0];
      return (e = _b.bind(null, e[1])), (dn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = _e,
        o = dn();
      if (Re) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Ge === null)) throw Error(j(349));
        Cr & 30 || gh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ap(xh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ci(9, yh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dn(),
        t = Ge.identifierPrefix;
      if (Re) {
        var n = $n,
          r = kn;
        (n = (r & ~(1 << (32 - an(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = yi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = zb++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lb = {
    readContext: Ut,
    useCallback: Ph,
    useContext: Ut,
    useEffect: ed,
    useImperativeHandle: Rh,
    useInsertionEffect: kh,
    useLayoutEffect: $h,
    useMemo: wh,
    useReducer: Ls,
    useRef: Sh,
    useState: function () {
      return Ls(xi);
    },
    useDebugValue: td,
    useDeferredValue: function (e) {
      var t = Kt();
      return zh(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Ls(xi)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: mh,
    useSyncExternalStore: hh,
    useId: _h,
    unstable_isNewReconciler: !1,
  },
  Bb = {
    readContext: Ut,
    useCallback: Ph,
    useContext: Ut,
    useEffect: ed,
    useImperativeHandle: Rh,
    useInsertionEffect: kh,
    useLayoutEffect: $h,
    useMemo: wh,
    useReducer: Bs,
    useRef: Sh,
    useState: function () {
      return Bs(xi);
    },
    useDebugValue: td,
    useDeferredValue: function (e) {
      var t = Kt();
      return Ne === null ? (t.memoizedState = e) : zh(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Bs(xi)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: mh,
    useSyncExternalStore: hh,
    useId: _h,
    unstable_isNewReconciler: !1,
  };
function co(e, t) {
  try {
    var n = "",
      r = t;
    do (n += cC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Os(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ob = typeof WeakMap == "function" ? WeakMap : Map;
function Lh(e, t, n) {
  (n = In(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sa || ((sa = !0), (Uc = r)), Bc(e, t);
    }),
    n
  );
}
function Bh(e, t, n) {
  (n = In(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Bc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Bc(e, t),
          typeof r != "function" &&
            (Xn === null ? (Xn = new Set([this])) : Xn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function sp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ob();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Yb.bind(null, e, t, n)), t.then(e, e));
}
function cp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function up(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = In(-1, 1)), (t.tag = 2), Jn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Mb = Tn.ReactCurrentOwner,
  yt = !1;
function ut(e, t, n, r) {
  t.child = e === null ? ph(t, null, n, r) : ao(t, e.child, n, r);
}
function dp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    qr(t, o),
    (r = qu(e, t, n, r, i, o)),
    (n = Zu()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        En(e, t, o))
      : (Re && n && Fu(t), (t.flags |= 1), ut(e, t, r, o), t.child)
  );
}
function fp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !cd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Oh(e, t, i, r, o))
      : ((e = Tl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fi), n(l, r) && e.ref === t.ref)
    )
      return En(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Qn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Oh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (fi(i, r) && e.ref === t.ref)
      if (((yt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (yt = !0);
      else return (t.lanes = e.lanes), En(e, t, o);
  }
  return Oc(e, t, n, r, o);
}
function Mh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        xe(Ur, Pt),
        (Pt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          xe(Ur, Pt),
          (Pt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        xe(Ur, Pt),
        (Pt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      xe(Ur, Pt),
      (Pt |= r);
  return ut(e, t, o, n), t.child;
}
function Ah(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Oc(e, t, n, r, o) {
  var i = Ct(n) ? yr : at.current;
  return (
    (i = io(t, i)),
    qr(t, o),
    (n = qu(e, t, n, r, i, o)),
    (r = Zu()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        En(e, t, o))
      : (Re && r && Fu(t), (t.flags |= 1), ut(e, t, n, o), t.child)
  );
}
function pp(e, t, n, r, o) {
  if (Ct(n)) {
    var i = !0;
    ql(t);
  } else i = !1;
  if ((qr(t, o), t.stateNode === null))
    _l(e, t), dh(t, n, r), Lc(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ut(c))
      : ((c = Ct(n) ? yr : at.current), (c = io(t, c)));
    var d = n.getDerivedStateFromProps,
      v =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== c) && op(t, l, r, c)),
      (jn = !1);
    var m = t.memoizedState;
    (l.state = m),
      ra(t, r, l, o),
      (s = t.memoizedState),
      a !== r || m !== s || xt.current || jn
        ? (typeof d == "function" && (Tc(t, n, d, r), (s = t.memoizedState)),
          (a = jn || rp(t, n, a, r, m, s, c))
            ? (v ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = c),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      ch(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : tn(t.type, a)),
      (l.props = c),
      (v = t.pendingProps),
      (m = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ut(s))
        : ((s = Ct(n) ? yr : at.current), (s = io(t, s)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== v || m !== s) && op(t, l, r, s)),
      (jn = !1),
      (m = t.memoizedState),
      (l.state = m),
      ra(t, r, l, o);
    var b = t.memoizedState;
    a !== v || m !== b || xt.current || jn
      ? (typeof y == "function" && (Tc(t, n, y, r), (b = t.memoizedState)),
        (c = jn || rp(t, n, c, r, m, b, s) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, b, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, b, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (l.props = r),
        (l.state = b),
        (l.context = s),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Mc(e, t, n, r, i, o);
}
function Mc(e, t, n, r, o, i) {
  Ah(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && qf(t, n, !1), En(e, t, i);
  (r = t.stateNode), (Mb.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = ao(t, e.child, null, i)), (t.child = ao(t, null, a, i)))
      : ut(e, t, a, i),
    (t.memoizedState = r.state),
    o && qf(t, n, !0),
    t.child
  );
}
function jh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qf(e, t.context, !1),
    Ju(e, t.containerInfo);
}
function vp(e, t, n, r, o) {
  return lo(), Hu(o), (t.flags |= 256), ut(e, t, n, r), t.child;
}
var Ac = { dehydrated: null, treeContext: null, retryLane: 0 };
function jc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fh(e, t, n) {
  var r = t.pendingProps,
    o = ze.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    xe(ze, o & 1),
    e === null)
  )
    return (
      Ec(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ya(l, r, 0, null)),
              (e = mr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = jc(n)),
              (t.memoizedState = Ac),
              e)
            : nd(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Ab(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Qn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Qn(a, i)) : ((i = mr(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? jc(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ac),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Qn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nd(e, t) {
  return (
    (t = Ya({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function sl(e, t, n, r) {
  return (
    r !== null && Hu(r),
    ao(t, e.child, null, n),
    (e = nd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ab(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Os(Error(j(422)))), sl(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ya({ mode: "visible", children: r.children }, o, 0, null)),
          (i = mr(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && ao(t, e.child, null, l),
          (t.child.memoizedState = jc(l)),
          (t.memoizedState = Ac),
          i);
  if (!(t.mode & 1)) return sl(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(j(419))), (r = Os(i, r, void 0)), sl(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), yt || a)) {
    if (((r = Ge), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), _n(e, o), sn(r, e, o, -1));
    }
    return sd(), (r = Os(Error(j(421)))), sl(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qb.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (zt = Gn(o.nextSibling)),
      (Et = t),
      (Re = !0),
      (rn = null),
      e !== null &&
        ((jt[Ft++] = kn),
        (jt[Ft++] = $n),
        (jt[Ft++] = xr),
        (kn = e.id),
        ($n = e.overflow),
        (xr = t)),
      (t = nd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Dc(e.return, t, n);
}
function Ms(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Nh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ut(e, t, r.children, n), (r = ze.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mp(e, n, t);
        else if (e.tag === 19) mp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((xe(ze, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && oa(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ms(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && oa(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ms(t, !0, n, null, i);
        break;
      case "together":
        Ms(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _l(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function En(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (br |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Qn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function jb(e, t, n) {
  switch (t.tag) {
    case 3:
      jh(t), lo();
      break;
    case 5:
      vh(t);
      break;
    case 1:
      Ct(t.type) && ql(t);
      break;
    case 4:
      Ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      xe(ta, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (xe(ze, ze.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Fh(e, t, n)
            : (xe(ze, ze.current & 1),
              (e = En(e, t, n)),
              e !== null ? e.sibling : null);
      xe(ze, ze.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Nh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        xe(ze, ze.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mh(e, t, n);
  }
  return En(e, t, n);
}
var Hh, Fc, Vh, Wh;
Hh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fc = function () {};
Vh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), pr(gn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = sc(e, o)), (r = sc(e, r)), (i = []);
        break;
      case "select":
        (o = Ee({}, o, { value: void 0 })),
          (r = Ee({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = dc(e, o)), (r = dc(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Yl);
    }
    pc(n, r);
    var l;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ii.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(c, s))
            : c === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(c, "" + s)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (ii.hasOwnProperty(c)
                  ? (s != null && c === "onScroll" && be("scroll", e),
                    i || a === s || (i = []))
                  : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Wh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Lo(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function rt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Fb(e, t, n) {
  var r = t.pendingProps;
  switch ((Nu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return rt(t), null;
    case 1:
      return Ct(t.type) && Ql(), rt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        so(),
        Se(xt),
        Se(at),
        Yu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rn !== null && (Jc(rn), (rn = null)))),
        Fc(e, t),
        rt(t),
        null
      );
    case 5:
      Xu(t);
      var o = pr(gi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return rt(t), null;
        }
        if (((e = pr(gn.current)), ll(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vn] = t), (r[mi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              be("cancel", r), be("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              be("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < No.length; o++) be(No[o], r);
              break;
            case "source":
              be("error", r);
              break;
            case "img":
            case "image":
            case "link":
              be("error", r), be("load", r);
              break;
            case "details":
              be("toggle", r);
              break;
            case "input":
              $f(r, i), be("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                be("invalid", r);
              break;
            case "textarea":
              Rf(r, i), be("invalid", r);
          }
          pc(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      il(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      il(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : ii.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  be("scroll", r);
            }
          switch (n) {
            case "input":
              Qi(r), If(r, i, !0);
              break;
            case "textarea":
              Qi(r), Pf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Yl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[vn] = t),
            (e[mi] = r),
            Hh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = vc(n, r)), n)) {
              case "dialog":
                be("cancel", e), be("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                be("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < No.length; o++) be(No[o], e);
                o = r;
                break;
              case "source":
                be("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                be("error", e), be("load", e), (o = r);
                break;
              case "details":
                be("toggle", e), (o = r);
                break;
              case "input":
                $f(e, r), (o = sc(e, r)), be("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ee({}, r, { value: void 0 })),
                  be("invalid", e);
                break;
              case "textarea":
                Rf(e, r), (o = dc(e, r)), be("invalid", e);
                break;
              default:
                o = r;
            }
            pc(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? Cm(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && ym(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && li(e, s)
                        : typeof s == "number" && li(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (ii.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && be("scroll", e)
                          : s != null && Ru(e, i, s, l));
              }
            switch (n) {
              case "input":
                Qi(e), If(e, r, !1);
                break;
              case "textarea":
                Qi(e), Pf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Jr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Jr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Yl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return rt(t), null;
    case 6:
      if (e && t.stateNode != null) Wh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = pr(gi.current)), pr(gn.current), ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vn] = t),
            (i = r.nodeValue !== n) && ((e = Et), e !== null))
          )
            switch (e.tag) {
              case 3:
                il(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  il(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vn] = t),
            (t.stateNode = r);
      }
      return rt(t), null;
    case 13:
      if (
        (Se(ze),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && zt !== null && t.mode & 1 && !(t.flags & 128))
          ah(), lo(), (t.flags |= 98560), (i = !1);
        else if (((i = ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[vn] = t;
          } else
            lo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          rt(t), (i = !1);
        } else rn !== null && (Jc(rn), (rn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ze.current & 1 ? He === 0 && (He = 3) : sd())),
          t.updateQueue !== null && (t.flags |= 4),
          rt(t),
          null);
    case 4:
      return (
        so(), Fc(e, t), e === null && pi(t.stateNode.containerInfo), rt(t), null
      );
    case 10:
      return Uu(t.type._context), rt(t), null;
    case 17:
      return Ct(t.type) && Ql(), rt(t), null;
    case 19:
      if ((Se(ze), (i = t.memoizedState), i === null)) return rt(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Lo(i, !1);
        else {
          if (He !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = oa(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Lo(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return xe(ze, (ze.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Oe() > uo &&
            ((t.flags |= 128), (r = !0), Lo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oa(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Lo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !Re)
            )
              return rt(t), null;
          } else
            2 * Oe() - i.renderingStartTime > uo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Lo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Oe()),
          (t.sibling = null),
          (n = ze.current),
          xe(ze, r ? (n & 1) | 2 : n & 1),
          t)
        : (rt(t), null);
    case 22:
    case 23:
      return (
        ad(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Pt & 1073741824 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : rt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Nb(e, t) {
  switch ((Nu(t), t.tag)) {
    case 1:
      return (
        Ct(t.type) && Ql(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        so(),
        Se(xt),
        Se(at),
        Yu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xu(t), null;
    case 13:
      if (
        (Se(ze), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        lo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Se(ze), null;
    case 4:
      return so(), null;
    case 10:
      return Uu(t.type._context), null;
    case 22:
    case 23:
      return ad(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var cl = !1,
  lt = !1,
  Hb = typeof WeakSet == "function" ? WeakSet : Set,
  G = null;
function Wr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Le(e, t, r);
      }
    else n.current = null;
}
function Nc(e, t, n) {
  try {
    n();
  } catch (r) {
    Le(e, t, r);
  }
}
var hp = !1;
function Vb(e, t) {
  if ((($c = Gl), (e = Jm()), ju(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            c = 0,
            d = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              v !== n || (o !== 0 && v.nodeType !== 3) || (a = l + o),
                v !== i || (r !== 0 && v.nodeType !== 3) || (s = l + r),
                v.nodeType === 3 && (l += v.nodeValue.length),
                (y = v.firstChild) !== null;

            )
              (m = v), (v = y);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++c === o && (a = l),
                m === i && ++d === r && (s = l),
                (y = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = y;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ic = { focusedElem: e, selectionRange: n }, Gl = !1, G = t; G !== null; )
    if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (G = e);
    else
      for (; G !== null; ) {
        t = G;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var x = b.memoizedProps,
                    $ = b.memoizedState,
                    f = t.stateNode,
                    p = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : tn(t.type, x),
                      $,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var u = t.stateNode.containerInfo;
                u.nodeType === 1
                  ? (u.textContent = "")
                  : u.nodeType === 9 &&
                    u.documentElement &&
                    u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (k) {
          Le(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (G = e);
          break;
        }
        G = t.return;
      }
  return (b = hp), (hp = !1), b;
}
function Xo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Nc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ja(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Hc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Uh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Uh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vn], delete t[mi], delete t[wc], delete t[Ib], delete t[Rb])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Kh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Yl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vc(e, t, n), e = e.sibling; e !== null; ) Vc(e, t, n), (e = e.sibling);
}
function Wc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wc(e, t, n), e = e.sibling; e !== null; ) Wc(e, t, n), (e = e.sibling);
}
var Ye = null,
  nn = !1;
function Mn(e, t, n) {
  for (n = n.child; n !== null; ) Gh(e, t, n), (n = n.sibling);
}
function Gh(e, t, n) {
  if (hn && typeof hn.onCommitFiberUnmount == "function")
    try {
      hn.onCommitFiberUnmount(Fa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      lt || Wr(n, t);
    case 6:
      var r = Ye,
        o = nn;
      (Ye = null),
        Mn(e, t, n),
        (Ye = r),
        (nn = o),
        Ye !== null &&
          (nn
            ? ((e = Ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null &&
        (nn
          ? ((e = Ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? _s(e.parentNode, n)
              : e.nodeType === 1 && _s(e, n),
            ui(e))
          : _s(Ye, n.stateNode));
      break;
    case 4:
      (r = Ye),
        (o = nn),
        (Ye = n.stateNode.containerInfo),
        (nn = !0),
        Mn(e, t, n),
        (Ye = r),
        (nn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !lt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Nc(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Mn(e, t, n);
      break;
    case 1:
      if (
        !lt &&
        (Wr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Le(n, t, a);
        }
      Mn(e, t, n);
      break;
    case 21:
      Mn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((lt = (r = lt) || n.memoizedState !== null), Mn(e, t, n), (lt = r))
        : Mn(e, t, n);
      break;
    default:
      Mn(e, t, n);
  }
}
function yp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hb()),
      t.forEach(function (r) {
        var o = qb.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function en(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ye = a.stateNode), (nn = !1);
              break e;
            case 3:
              (Ye = a.stateNode.containerInfo), (nn = !0);
              break e;
            case 4:
              (Ye = a.stateNode.containerInfo), (nn = !0);
              break e;
          }
          a = a.return;
        }
        if (Ye === null) throw Error(j(160));
        Gh(i, l, o), (Ye = null), (nn = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (c) {
        Le(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jh(t, e), (t = t.sibling);
}
function Jh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((en(t, e), un(e), r & 4)) {
        try {
          Xo(3, e, e.return), Ja(3, e);
        } catch (x) {
          Le(e, e.return, x);
        }
        try {
          Xo(5, e, e.return);
        } catch (x) {
          Le(e, e.return, x);
        }
      }
      break;
    case 1:
      en(t, e), un(e), r & 512 && n !== null && Wr(n, n.return);
      break;
    case 5:
      if (
        (en(t, e),
        un(e),
        r & 512 && n !== null && Wr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          li(o, "");
        } catch (x) {
          Le(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && mm(o, i),
              vc(a, l);
            var c = vc(a, i);
            for (l = 0; l < s.length; l += 2) {
              var d = s[l],
                v = s[l + 1];
              d === "style"
                ? Cm(o, v)
                : d === "dangerouslySetInnerHTML"
                  ? ym(o, v)
                  : d === "children"
                    ? li(o, v)
                    : Ru(o, d, v, c);
            }
            switch (a) {
              case "input":
                cc(o, i);
                break;
              case "textarea":
                hm(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Jr(o, !!i.multiple, y, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Jr(o, !!i.multiple, i.defaultValue, !0)
                      : Jr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[mi] = i;
          } catch (x) {
            Le(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((en(t, e), un(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          Le(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (en(t, e), un(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ui(t.containerInfo);
        } catch (x) {
          Le(e, e.return, x);
        }
      break;
    case 4:
      en(t, e), un(e);
      break;
    case 13:
      en(t, e),
        un(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (id = Oe())),
        r & 4 && yp(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((lt = (c = lt) || d), en(t, e), (lt = c)) : en(t, e),
        un(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (G = e, d = e.child; d !== null; ) {
            for (v = G = d; G !== null; ) {
              switch (((m = G), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xo(4, m, m.return);
                  break;
                case 1:
                  Wr(m, m.return);
                  var b = m.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (x) {
                      Le(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Wr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Cp(v);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (G = y)) : Cp(v);
            }
            d = d.sibling;
          }
        e: for (d = null, v = e; ; ) {
          if (v.tag === 5) {
            if (d === null) {
              d = v;
              try {
                (o = v.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = v.stateNode),
                      (s = v.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = xm("display", l)));
              } catch (x) {
                Le(e, e.return, x);
              }
            }
          } else if (v.tag === 6) {
            if (d === null)
              try {
                v.stateNode.nodeValue = c ? "" : v.memoizedProps;
              } catch (x) {
                Le(e, e.return, x);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            d === v && (d = null), (v = v.return);
          }
          d === v && (d = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      en(t, e), un(e), r & 4 && yp(e);
      break;
    case 21:
      break;
    default:
      en(t, e), un(e);
  }
}
function un(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (li(o, ""), (r.flags &= -33));
          var i = gp(e);
          Wc(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = gp(e);
          Vc(e, a, l);
          break;
        default:
          throw Error(j(161));
      }
    } catch (s) {
      Le(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wb(e, t, n) {
  (G = e), Xh(e);
}
function Xh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var o = G,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || cl;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || lt;
        a = cl;
        var c = lt;
        if (((cl = l), (lt = s) && !c))
          for (G = o; G !== null; )
            (l = G),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? bp(o)
                : s !== null
                  ? ((s.return = l), (G = s))
                  : bp(o);
        for (; i !== null; ) (G = i), Xh(i), (i = i.sibling);
        (G = o), (cl = a), (lt = c);
      }
      xp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (G = i)) : xp(e);
  }
}
function xp(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              lt || Ja(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !lt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && np(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                np(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var v = d.dehydrated;
                    v !== null && ui(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        lt || (t.flags & 512 && Hc(t));
      } catch (m) {
        Le(t, t.return, m);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function Cp(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function bp(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ja(4, t);
          } catch (s) {
            Le(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Le(t, o, s);
            }
          }
          var i = t.return;
          try {
            Hc(t);
          } catch (s) {
            Le(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Hc(t);
          } catch (s) {
            Le(t, l, s);
          }
      }
    } catch (s) {
      Le(t, t.return, s);
    }
    if (t === e) {
      G = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (G = a);
      break;
    }
    G = t.return;
  }
}
var Ub = Math.ceil,
  aa = Tn.ReactCurrentDispatcher,
  rd = Tn.ReactCurrentOwner,
  Vt = Tn.ReactCurrentBatchConfig,
  se = 0,
  Ge = null,
  je = null,
  qe = 0,
  Pt = 0,
  Ur = rr(0),
  He = 0,
  bi = null,
  br = 0,
  Xa = 0,
  od = 0,
  Yo = null,
  gt = null,
  id = 0,
  uo = 1 / 0,
  Cn = null,
  sa = !1,
  Uc = null,
  Xn = null,
  ul = !1,
  Vn = null,
  ca = 0,
  Qo = 0,
  Kc = null,
  El = -1,
  Dl = 0;
function ft() {
  return se & 6 ? Oe() : El !== -1 ? El : (El = Oe());
}
function Yn(e) {
  return e.mode & 1
    ? se & 2 && qe !== 0
      ? qe & -qe
      : wb.transition !== null
        ? (Dl === 0 && (Dl = Dm()), Dl)
        : ((e = he),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jm(e.type))),
          e)
    : 1;
}
function sn(e, t, n, r) {
  if (50 < Qo) throw ((Qo = 0), (Kc = null), Error(j(185)));
  Ai(e, n, r),
    (!(se & 2) || e !== Ge) &&
      (e === Ge && (!(se & 2) && (Xa |= n), He === 4 && Nn(e, qe)),
      bt(e, r),
      n === 1 && se === 0 && !(t.mode & 1) && ((uo = Oe() + 500), Ua && or()));
}
function bt(e, t) {
  var n = e.callbackNode;
  wC(e, t);
  var r = Kl(e, e === Ge ? qe : 0);
  if (r === 0)
    n !== null && _f(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _f(n), t === 1))
      e.tag === 0 ? Pb(Sp.bind(null, e)) : oh(Sp.bind(null, e)),
        kb(function () {
          !(se & 6) && or();
        }),
        (n = null);
    else {
      switch (Tm(r)) {
        case 1:
          n = Eu;
          break;
        case 4:
          n = _m;
          break;
        case 16:
          n = Ul;
          break;
        case 536870912:
          n = Em;
          break;
        default:
          n = Ul;
      }
      n = rg(n, Yh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yh(e, t) {
  if (((El = -1), (Dl = 0), se & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Zr() && e.callbackNode !== n) return null;
  var r = Kl(e, e === Ge ? qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ua(e, r);
  else {
    t = r;
    var o = se;
    se |= 2;
    var i = qh();
    (Ge !== e || qe !== t) && ((Cn = null), (uo = Oe() + 500), vr(e, t));
    do
      try {
        Jb();
        break;
      } catch (a) {
        Qh(e, a);
      }
    while (!0);
    Wu(),
      (aa.current = i),
      (se = o),
      je !== null ? (t = 0) : ((Ge = null), (qe = 0), (t = He));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = xc(e)), o !== 0 && ((r = o), (t = Gc(e, o)))), t === 1)
    )
      throw ((n = bi), vr(e, 0), Nn(e, r), bt(e, Oe()), n);
    if (t === 6) Nn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Kb(o) &&
          ((t = ua(e, r)),
          t === 2 && ((i = xc(e)), i !== 0 && ((r = i), (t = Gc(e, i)))),
          t === 1))
      )
        throw ((n = bi), vr(e, 0), Nn(e, r), bt(e, Oe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          ur(e, gt, Cn);
          break;
        case 3:
          if (
            (Nn(e, r), (r & 130023424) === r && ((t = id + 500 - Oe()), 10 < t))
          ) {
            if (Kl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ft(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Pc(ur.bind(null, e, gt, Cn), t);
            break;
          }
          ur(e, gt, Cn);
          break;
        case 4:
          if ((Nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - an(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Ub(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pc(ur.bind(null, e, gt, Cn), r);
            break;
          }
          ur(e, gt, Cn);
          break;
        case 5:
          ur(e, gt, Cn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return bt(e, Oe()), e.callbackNode === n ? Yh.bind(null, e) : null;
}
function Gc(e, t) {
  var n = Yo;
  return (
    e.current.memoizedState.isDehydrated && (vr(e, t).flags |= 256),
    (e = ua(e, t)),
    e !== 2 && ((t = gt), (gt = n), t !== null && Jc(t)),
    e
  );
}
function Jc(e) {
  gt === null ? (gt = e) : gt.push.apply(gt, e);
}
function Kb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!cn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Nn(e, t) {
  for (
    t &= ~od,
      t &= ~Xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - an(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sp(e) {
  if (se & 6) throw Error(j(327));
  Zr();
  var t = Kl(e, 0);
  if (!(t & 1)) return bt(e, Oe()), null;
  var n = ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xc(e);
    r !== 0 && ((t = r), (n = Gc(e, r)));
  }
  if (n === 1) throw ((n = bi), vr(e, 0), Nn(e, t), bt(e, Oe()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ur(e, gt, Cn),
    bt(e, Oe()),
    null
  );
}
function ld(e, t) {
  var n = se;
  se |= 1;
  try {
    return e(t);
  } finally {
    (se = n), se === 0 && ((uo = Oe() + 500), Ua && or());
  }
}
function Sr(e) {
  Vn !== null && Vn.tag === 0 && !(se & 6) && Zr();
  var t = se;
  se |= 1;
  var n = Vt.transition,
    r = he;
  try {
    if (((Vt.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (Vt.transition = n), (se = t), !(se & 6) && or();
  }
}
function ad() {
  (Pt = Ur.current), Se(Ur);
}
function vr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Sb(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch ((Nu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ql();
          break;
        case 3:
          so(), Se(xt), Se(at), Yu();
          break;
        case 5:
          Xu(r);
          break;
        case 4:
          so();
          break;
        case 13:
          Se(ze);
          break;
        case 19:
          Se(ze);
          break;
        case 10:
          Uu(r.type._context);
          break;
        case 22:
        case 23:
          ad();
      }
      n = n.return;
    }
  if (
    ((Ge = e),
    (je = e = Qn(e.current, null)),
    (qe = Pt = t),
    (He = 0),
    (bi = null),
    (od = Xa = br = 0),
    (gt = Yo = null),
    fr !== null)
  ) {
    for (t = 0; t < fr.length; t++)
      if (((n = fr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    fr = null;
  }
  return e;
}
function Qh(e, t) {
  do {
    var n = je;
    try {
      if ((Wu(), (wl.current = la), ia)) {
        for (var r = _e.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ia = !1;
      }
      if (
        ((Cr = 0),
        (Ue = Ne = _e = null),
        (Jo = !1),
        (yi = 0),
        (rd.current = null),
        n === null || n.return === null)
      ) {
        (He = 1), (bi = t), (je = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = qe),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            d = a,
            v = d.tag;
          if (!(d.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = cp(l);
          if (y !== null) {
            (y.flags &= -257),
              up(y, l, a, i, t),
              y.mode & 1 && sp(i, c, t),
              (t = y),
              (s = c);
            var b = t.updateQueue;
            if (b === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else b.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              sp(i, c, t), sd();
              break e;
            }
            s = Error(j(426));
          }
        } else if (Re && a.mode & 1) {
          var $ = cp(l);
          if ($ !== null) {
            !($.flags & 65536) && ($.flags |= 256),
              up($, l, a, i, t),
              Hu(co(s, a));
            break e;
          }
        }
        (i = s = co(s, a)),
          He !== 4 && (He = 2),
          Yo === null ? (Yo = [i]) : Yo.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Lh(i, s, t);
              tp(i, f);
              break e;
            case 1:
              a = s;
              var p = i.type,
                u = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (u !== null &&
                    typeof u.componentDidCatch == "function" &&
                    (Xn === null || !Xn.has(u))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = Bh(i, a, t);
                tp(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      eg(n);
    } catch (S) {
      (t = S), je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qh() {
  var e = aa.current;
  return (aa.current = la), e === null ? la : e;
}
function sd() {
  (He === 0 || He === 3 || He === 2) && (He = 4),
    Ge === null || (!(br & 268435455) && !(Xa & 268435455)) || Nn(Ge, qe);
}
function ua(e, t) {
  var n = se;
  se |= 2;
  var r = qh();
  (Ge !== e || qe !== t) && ((Cn = null), vr(e, t));
  do
    try {
      Gb();
      break;
    } catch (o) {
      Qh(e, o);
    }
  while (!0);
  if ((Wu(), (se = n), (aa.current = r), je !== null)) throw Error(j(261));
  return (Ge = null), (qe = 0), He;
}
function Gb() {
  for (; je !== null; ) Zh(je);
}
function Jb() {
  for (; je !== null && !xC(); ) Zh(je);
}
function Zh(e) {
  var t = ng(e.alternate, e, Pt);
  (e.memoizedProps = e.pendingProps),
    t === null ? eg(e) : (je = t),
    (rd.current = null);
}
function eg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nb(n, t)), n !== null)) {
        (n.flags &= 32767), (je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (He = 6), (je = null);
        return;
      }
    } else if (((n = Fb(n, t, Pt)), n !== null)) {
      je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  He === 0 && (He = 5);
}
function ur(e, t, n) {
  var r = he,
    o = Vt.transition;
  try {
    (Vt.transition = null), (he = 1), Xb(e, t, n, r);
  } finally {
    (Vt.transition = o), (he = r);
  }
  return null;
}
function Xb(e, t, n, r) {
  do Zr();
  while (Vn !== null);
  if (se & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (zC(e, i),
    e === Ge && ((je = Ge = null), (qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ul ||
      ((ul = !0),
      rg(Ul, function () {
        return Zr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Vt.transition), (Vt.transition = null);
    var l = he;
    he = 1;
    var a = se;
    (se |= 4),
      (rd.current = null),
      Vb(e, n),
      Jh(n, e),
      mb(Ic),
      (Gl = !!$c),
      (Ic = $c = null),
      (e.current = n),
      Wb(n),
      CC(),
      (se = a),
      (he = l),
      (Vt.transition = i);
  } else e.current = n;
  if (
    (ul && ((ul = !1), (Vn = e), (ca = o)),
    (i = e.pendingLanes),
    i === 0 && (Xn = null),
    kC(n.stateNode),
    bt(e, Oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (sa) throw ((sa = !1), (e = Uc), (Uc = null), e);
  return (
    ca & 1 && e.tag !== 0 && Zr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Kc ? Qo++ : ((Qo = 0), (Kc = e))) : (Qo = 0),
    or(),
    null
  );
}
function Zr() {
  if (Vn !== null) {
    var e = Tm(ca),
      t = Vt.transition,
      n = he;
    try {
      if (((Vt.transition = null), (he = 16 > e ? 16 : e), Vn === null))
        var r = !1;
      else {
        if (((e = Vn), (Vn = null), (ca = 0), se & 6)) throw Error(j(331));
        var o = se;
        for (se |= 4, G = e.current; G !== null; ) {
          var i = G,
            l = i.child;
          if (G.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (G = c; G !== null; ) {
                  var d = G;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo(8, d, i);
                  }
                  var v = d.child;
                  if (v !== null) (v.return = d), (G = v);
                  else
                    for (; G !== null; ) {
                      d = G;
                      var m = d.sibling,
                        y = d.return;
                      if ((Uh(d), d === c)) {
                        G = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (G = m);
                        break;
                      }
                      G = y;
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var x = b.child;
                if (x !== null) {
                  b.child = null;
                  do {
                    var $ = x.sibling;
                    (x.sibling = null), (x = $);
                  } while (x !== null);
                }
              }
              G = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (G = l);
          else
            e: for (; G !== null; ) {
              if (((i = G), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xo(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (G = f);
                break e;
              }
              G = i.return;
            }
        }
        var p = e.current;
        for (G = p; G !== null; ) {
          l = G;
          var u = l.child;
          if (l.subtreeFlags & 2064 && u !== null) (u.return = l), (G = u);
          else
            e: for (l = p; G !== null; ) {
              if (((a = G), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ja(9, a);
                  }
                } catch (S) {
                  Le(a, a.return, S);
                }
              if (a === l) {
                G = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (G = k);
                break e;
              }
              G = a.return;
            }
        }
        if (
          ((se = o), or(), hn && typeof hn.onPostCommitFiberRoot == "function")
        )
          try {
            hn.onPostCommitFiberRoot(Fa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (Vt.transition = t);
    }
  }
  return !1;
}
function kp(e, t, n) {
  (t = co(n, t)),
    (t = Lh(e, t, 1)),
    (e = Jn(e, t, 1)),
    (t = ft()),
    e !== null && (Ai(e, 1, t), bt(e, t));
}
function Le(e, t, n) {
  if (e.tag === 3) kp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Xn === null || !Xn.has(r)))
        ) {
          (e = co(n, e)),
            (e = Bh(t, e, 1)),
            (t = Jn(t, e, 1)),
            (e = ft()),
            t !== null && (Ai(t, 1, e), bt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Yb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ft()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ge === e &&
      (qe & n) === n &&
      (He === 4 || (He === 3 && (qe & 130023424) === qe && 500 > Oe() - id)
        ? vr(e, 0)
        : (od |= n)),
    bt(e, t);
}
function tg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = el), (el <<= 1), !(el & 130023424) && (el = 4194304))
      : (t = 1));
  var n = ft();
  (e = _n(e, t)), e !== null && (Ai(e, t, n), bt(e, n));
}
function Qb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), tg(e, n);
}
function qb(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), tg(e, n);
}
var ng;
ng = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xt.current) yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), jb(e, t, n);
      yt = !!(e.flags & 131072);
    }
  else (yt = !1), Re && t.flags & 1048576 && ih(t, ea, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _l(e, t), (e = t.pendingProps);
      var o = io(t, at.current);
      qr(t, n), (o = qu(null, t, r, e, o, n));
      var i = Zu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ct(r) ? ((i = !0), ql(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Gu(t),
            (o.updater = Ka),
            (t.stateNode = o),
            (o._reactInternals = t),
            Lc(t, r, e, n),
            (t = Mc(null, t, r, !0, i, n)))
          : ((t.tag = 0), Re && i && Fu(t), ut(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_l(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = eS(r)),
          (e = tn(r, e)),
          o)
        ) {
          case 0:
            t = Oc(null, t, r, e, n);
            break e;
          case 1:
            t = pp(null, t, r, e, n);
            break e;
          case 11:
            t = dp(null, t, r, e, n);
            break e;
          case 14:
            t = fp(null, t, r, tn(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        Oc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        pp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((jh(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          ch(e, t),
          ra(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = co(Error(j(423)), t)), (t = vp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = co(Error(j(424)), t)), (t = vp(e, t, r, n, o));
            break e;
          } else
            for (
              zt = Gn(t.stateNode.containerInfo.firstChild),
                Et = t,
                Re = !0,
                rn = null,
                n = ph(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lo(), r === o)) {
            t = En(e, t, n);
            break e;
          }
          ut(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        vh(t),
        e === null && Ec(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Rc(r, o) ? (l = null) : i !== null && Rc(r, i) && (t.flags |= 32),
        Ah(e, t),
        ut(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ec(t), null;
    case 13:
      return Fh(e, t, n);
    case 4:
      return (
        Ju(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ao(t, null, r, n)) : ut(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        dp(e, t, r, o, n)
      );
    case 7:
      return ut(e, t, t.pendingProps, n), t.child;
    case 8:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          xe(ta, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (cn(i.value, l)) {
            if (i.children === o.children && !xt.current) {
              t = En(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = In(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Dc(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(j(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Dc(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ut(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        qr(t, n),
        (o = Ut(o)),
        (r = r(o)),
        (t.flags |= 1),
        ut(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = tn(r, t.pendingProps)),
        (o = tn(r.type, o)),
        fp(e, t, r, o, n)
      );
    case 15:
      return Oh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        _l(e, t),
        (t.tag = 1),
        Ct(r) ? ((e = !0), ql(t)) : (e = !1),
        qr(t, n),
        dh(t, r, o),
        Lc(t, r, o, n),
        Mc(null, t, r, !0, e, n)
      );
    case 19:
      return Nh(e, t, n);
    case 22:
      return Mh(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function rg(e, t) {
  return zm(e, t);
}
function Zb(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Nt(e, t, n, r) {
  return new Zb(e, t, n, r);
}
function cd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function eS(e) {
  if (typeof e == "function") return cd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wu)) return 11;
    if (e === zu) return 14;
  }
  return 2;
}
function Qn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Tl(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) cd(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Br:
        return mr(n.children, o, i, t);
      case Pu:
        (l = 8), (o |= 8);
        break;
      case oc:
        return (
          (e = Nt(12, n, t, o | 2)), (e.elementType = oc), (e.lanes = i), e
        );
      case ic:
        return (e = Nt(13, n, t, o)), (e.elementType = ic), (e.lanes = i), e;
      case lc:
        return (e = Nt(19, n, t, o)), (e.elementType = lc), (e.lanes = i), e;
      case fm:
        return Ya(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case um:
              l = 10;
              break e;
            case dm:
              l = 9;
              break e;
            case wu:
              l = 11;
              break e;
            case zu:
              l = 14;
              break e;
            case An:
              (l = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Nt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function mr(e, t, n, r) {
  return (e = Nt(7, e, r, t)), (e.lanes = n), e;
}
function Ya(e, t, n, r) {
  return (
    (e = Nt(22, e, r, t)),
    (e.elementType = fm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function As(e, t, n) {
  return (e = Nt(6, e, null, t)), (e.lanes = n), e;
}
function js(e, t, n) {
  return (
    (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function tS(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xs(0)),
    (this.expirationTimes = xs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ud(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new tS(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Nt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gu(i),
    e
  );
}
function nS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Lr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function og(e) {
  if (!e) return er;
  e = e._reactInternals;
  e: {
    if (Ir(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ct(n)) return rh(e, n, t);
  }
  return t;
}
function ig(e, t, n, r, o, i, l, a, s) {
  return (
    (e = ud(n, r, !0, e, o, i, l, a, s)),
    (e.context = og(null)),
    (n = e.current),
    (r = ft()),
    (o = Yn(n)),
    (i = In(r, o)),
    (i.callback = t ?? null),
    Jn(n, i, o),
    (e.current.lanes = o),
    Ai(e, o, r),
    bt(e, r),
    e
  );
}
function Qa(e, t, n, r) {
  var o = t.current,
    i = ft(),
    l = Yn(o);
  return (
    (n = og(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = In(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jn(o, t, l)),
    e !== null && (sn(e, o, l, i), Pl(e, o, l)),
    l
  );
}
function da(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $p(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dd(e, t) {
  $p(e, t), (e = e.alternate) && $p(e, t);
}
function rS() {
  return null;
}
var lg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fd(e) {
  this._internalRoot = e;
}
qa.prototype.render = fd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Qa(e, t, null, null);
};
qa.prototype.unmount = fd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Sr(function () {
      Qa(null, e, null, null);
    }),
      (t[zn] = null);
  }
};
function qa(e) {
  this._internalRoot = e;
}
qa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Om();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++);
    Fn.splice(n, 0, e), n === 0 && Am(e);
  }
};
function pd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Za(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ip() {}
function oS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = da(l);
        i.call(c);
      };
    }
    var l = ig(t, r, e, 0, null, !1, !1, "", Ip);
    return (
      (e._reactRootContainer = l),
      (e[zn] = l.current),
      pi(e.nodeType === 8 ? e.parentNode : e),
      Sr(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = da(s);
      a.call(c);
    };
  }
  var s = ud(e, 0, !1, null, null, !1, !1, "", Ip);
  return (
    (e._reactRootContainer = s),
    (e[zn] = s.current),
    pi(e.nodeType === 8 ? e.parentNode : e),
    Sr(function () {
      Qa(t, s, n, r);
    }),
    s
  );
}
function es(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = da(l);
        a.call(s);
      };
    }
    Qa(t, l, e, o);
  } else l = oS(n, t, e, o, r);
  return da(l);
}
Lm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fo(t.pendingLanes);
        n !== 0 &&
          (Du(t, n | 1), bt(t, Oe()), !(se & 6) && ((uo = Oe() + 500), or()));
      }
      break;
    case 13:
      Sr(function () {
        var r = _n(e, 1);
        if (r !== null) {
          var o = ft();
          sn(r, e, 1, o);
        }
      }),
        dd(e, 1);
  }
};
Tu = function (e) {
  if (e.tag === 13) {
    var t = _n(e, 134217728);
    if (t !== null) {
      var n = ft();
      sn(t, e, 134217728, n);
    }
    dd(e, 134217728);
  }
};
Bm = function (e) {
  if (e.tag === 13) {
    var t = Yn(e),
      n = _n(e, t);
    if (n !== null) {
      var r = ft();
      sn(n, e, t, r);
    }
    dd(e, t);
  }
};
Om = function () {
  return he;
};
Mm = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
hc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((cc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Wa(r);
            if (!o) throw Error(j(90));
            vm(r), cc(r, o);
          }
        }
      }
      break;
    case "textarea":
      hm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jr(e, !!n.multiple, t, !1);
  }
};
km = ld;
$m = Sr;
var iS = { usingClientEntryPoint: !1, Events: [Fi, jr, Wa, bm, Sm, ld] },
  Bo = {
    findFiberByHostInstance: dr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  lS = {
    bundleType: Bo.bundleType,
    version: Bo.version,
    rendererPackageName: Bo.rendererPackageName,
    rendererConfig: Bo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Pm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Bo.findFiberByHostInstance || rS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!dl.isDisabled && dl.supportsFiber)
    try {
      (Fa = dl.inject(lS)), (hn = dl);
    } catch {}
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iS;
Bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pd(t)) throw Error(j(200));
  return nS(e, t, null, n);
};
Bt.createRoot = function (e, t) {
  if (!pd(e)) throw Error(j(299));
  var n = !1,
    r = "",
    o = lg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ud(e, 1, !1, null, null, n, !1, r, o)),
    (e[zn] = t.current),
    pi(e.nodeType === 8 ? e.parentNode : e),
    new fd(t)
  );
};
Bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = Pm(t)), (e = e === null ? null : e.stateNode), e;
};
Bt.flushSync = function (e) {
  return Sr(e);
};
Bt.hydrate = function (e, t, n) {
  if (!Za(t)) throw Error(j(200));
  return es(null, e, t, !0, n);
};
Bt.hydrateRoot = function (e, t, n) {
  if (!pd(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = lg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = ig(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[zn] = t.current),
    pi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new qa(t);
};
Bt.render = function (e, t, n) {
  if (!Za(t)) throw Error(j(200));
  return es(null, e, t, !1, n);
};
Bt.unmountComponentAtNode = function (e) {
  if (!Za(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Sr(function () {
        es(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zn] = null);
        });
      }),
      !0)
    : !1;
};
Bt.unstable_batchedUpdates = ld;
Bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Za(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return es(e, t, n, !1, r);
};
Bt.version = "18.2.0-next-9e3b772b8-20220608";
function ag() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ag);
    } catch (e) {
      console.error(e);
    }
}
ag(), (im.exports = Bt);
var sg = im.exports,
  Rp = sg;
(nc.createRoot = Rp.createRoot), (nc.hydrateRoot = Rp.hydrateRoot);
const aS = Ei("MuiBox", ["root"]),
  sS = aS,
  cS = dx({
    themeId: Mi,
    defaultTheme: bo,
    defaultClassName: sS.root,
    generateClassName: ou.generate,
  }),
  dt = cS;
function uS(e) {
  return typeof e == "string";
}
function cg(e, t, n) {
  return e === void 0 || uS(e)
    ? t
    : h({}, t, { ownerState: h({}, t.ownerState, n) });
}
function Pp(e, t, n = (r, o) => r === o) {
  return e.length === t.length && e.every((r, o) => n(r, t[o]));
}
const dS = { disableDefaultClasses: !1 },
  fS = g.createContext(dS);
function pS(e) {
  const { disableDefaultClasses: t } = g.useContext(fS);
  return (n) => (t ? "" : e(n));
}
function pt(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r),
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function ug(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function wp(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function dg(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const y = Ve(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
      ),
      b = h(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style,
      ),
      x = h({}, n, o, r);
    return (
      y.length > 0 && (x.className = y),
      Object.keys(b).length > 0 && (x.style = b),
      { props: x, internalRef: void 0 }
    );
  }
  const l = pt(h({}, o, r)),
    a = wp(r),
    s = wp(o),
    c = t(l),
    d = Ve(
      c == null ? void 0 : c.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className,
    ),
    v = h(
      {},
      c == null ? void 0 : c.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style,
    ),
    m = h({}, c, n, s, a);
  return (
    d.length > 0 && (m.className = d),
    Object.keys(v).length > 0 && (m.style = v),
    { props: m, internalRef: c.ref }
  );
}
const vS = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function fg(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    l = Y(e, vS),
    a = i ? {} : ug(r, o),
    { props: s, internalRef: c } = dg(h({}, l, { externalSlotProps: a })),
    d = ke(
      c,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref,
    );
  return cg(n, h({}, s, { ref: d }), o);
}
function ir(e = {}) {
  const {
      disabled: t = !1,
      focusableWhenDisabled: n,
      href: r,
      rootRef: o,
      tabIndex: i,
      to: l,
      type: a,
    } = e,
    s = g.useRef(),
    [c, d] = g.useState(!1),
    { isFocusVisibleRef: v, onFocus: m, onBlur: y, ref: b } = Ca(),
    [x, $] = g.useState(!1);
  t && !n && x && $(!1),
    g.useEffect(() => {
      v.current = x;
    }, [x, v]);
  const [f, p] = g.useState(""),
    u = (B) => (E) => {
      var _;
      x && E.preventDefault(), (_ = B.onMouseLeave) == null || _.call(B, E);
    },
    k = (B) => (E) => {
      var _;
      y(E), v.current === !1 && $(!1), (_ = B.onBlur) == null || _.call(B, E);
    },
    S = (B) => (E) => {
      var _;
      if (
        (s.current || (s.current = E.currentTarget), m(E), v.current === !0)
      ) {
        var z;
        $(!0), (z = B.onFocusVisible) == null || z.call(B, E);
      }
      (_ = B.onFocus) == null || _.call(B, E);
    },
    R = () => {
      const B = s.current;
      return (
        f === "BUTTON" ||
        (f === "INPUT" &&
          ["button", "submit", "reset"].includes(
            B == null ? void 0 : B.type,
          )) ||
        (f === "A" && (B == null ? void 0 : B.href))
      );
    },
    I = (B) => (E) => {
      if (!t) {
        var _;
        (_ = B.onClick) == null || _.call(B, E);
      }
    },
    P = (B) => (E) => {
      var _;
      t ||
        (d(!0),
        document.addEventListener(
          "mouseup",
          () => {
            d(!1);
          },
          { once: !0 },
        )),
        (_ = B.onMouseDown) == null || _.call(B, E);
    },
    D = (B) => (E) => {
      var _;
      if (
        ((_ = B.onKeyDown) == null || _.call(B, E),
        !E.defaultMuiPrevented &&
          (E.target === E.currentTarget &&
            !R() &&
            E.key === " " &&
            E.preventDefault(),
          E.target === E.currentTarget && E.key === " " && !t && d(!0),
          E.target === E.currentTarget && !R() && E.key === "Enter" && !t))
      ) {
        var z;
        (z = B.onClick) == null || z.call(B, E), E.preventDefault();
      }
    },
    w = (B) => (E) => {
      var _;
      if (
        (E.target === E.currentTarget && d(!1),
        (_ = B.onKeyUp) == null || _.call(B, E),
        E.target === E.currentTarget &&
          !R() &&
          !t &&
          E.key === " " &&
          !E.defaultMuiPrevented)
      ) {
        var z;
        (z = B.onClick) == null || z.call(B, E);
      }
    },
    T = g.useCallback((B) => {
      var E;
      p((E = B == null ? void 0 : B.tagName) != null ? E : "");
    }, []),
    M = ke(T, o, b, s),
    O = {};
  return (
    i !== void 0 && (O.tabIndex = i),
    f === "BUTTON"
      ? ((O.type = a ?? "button"),
        n ? (O["aria-disabled"] = t) : (O.disabled = t))
      : f !== "" &&
        (!r && !l && ((O.role = "button"), (O.tabIndex = i ?? 0)),
        t && ((O["aria-disabled"] = t), (O.tabIndex = n ? i ?? 0 : -1))),
    {
      getRootProps: (B = {}) => {
        const E = h({}, pt(e), pt(B)),
          _ = h({ type: a }, E, O, B, {
            onBlur: k(E),
            onClick: I(E),
            onFocus: S(E),
            onKeyDown: D(E),
            onKeyUp: w(E),
            onMouseDown: P(E),
            onMouseLeave: u(E),
            ref: M,
          });
        return delete _.onFocusVisible, _;
      },
      focusVisible: x,
      setFocusVisible: $,
      active: c,
      rootRef: M,
    }
  );
}
const ts = g.createContext(null);
function mS(e, t) {
  return e === t;
}
const Fs = {},
  zp = () => {};
function Xc(e, t) {
  const n = h({}, e);
  return (
    Object.keys(t).forEach((r) => {
      t[r] !== void 0 && (n[r] = t[r]);
    }),
    n
  );
}
function hS(e) {
  const {
      nextState: t,
      initialState: n,
      stateComparers: r,
      onStateChange: o,
      controlledProps: i,
      lastActionRef: l,
    } = e,
    a = g.useRef(n);
  g.useEffect(() => {
    if (l.current === null) return;
    const s = Xc(a.current, i);
    Object.keys(t).forEach((c) => {
      var d;
      const v = (d = r[c]) != null ? d : mS,
        m = t[c],
        y = s[c];
      if (
        (y == null && m != null) ||
        (y != null && m == null) ||
        (y != null && m != null && !v(m, y))
      ) {
        var b, x;
        o == null ||
          o(
            (b = l.current.event) != null ? b : null,
            c,
            m,
            (x = l.current.type) != null ? x : "",
            t,
          );
      }
    }),
      (a.current = t),
      (l.current = null);
  }, [a, t, l, o, r, i]);
}
function pg(e) {
  const t = g.useRef(null),
    {
      reducer: n,
      initialState: r,
      controlledProps: o = Fs,
      stateComparers: i = Fs,
      onStateChange: l = zp,
      actionContext: a,
    } = e,
    s = g.useCallback(
      (m, y) => {
        t.current = y;
        const b = Xc(m, o);
        return n(b, y);
      },
      [o, n],
    ),
    [c, d] = g.useReducer(s, r),
    v = g.useCallback(
      (m) => {
        d(h({}, m, { context: a }));
      },
      [a],
    );
  return (
    hS({
      nextState: c,
      initialState: r,
      stateComparers: i ?? Fs,
      onStateChange: l ?? zp,
      controlledProps: o,
      lastActionRef: t,
    }),
    [Xc(c, o), v]
  );
}
const on = {
  blur: "dropdown:blur",
  escapeKeyDown: "dropdown:escapeKeyDown",
  toggle: "dropdown:toggle",
  open: "dropdown:open",
  close: "dropdown:close",
};
function gS(e, t) {
  switch (t.type) {
    case on.blur:
      return { open: !1 };
    case on.escapeKeyDown:
      return { open: !1 };
    case on.toggle:
      return { open: !e.open };
    case on.open:
      return { open: !0 };
    case on.close:
      return { open: !1 };
    default:
      throw new Error("Unhandled action");
  }
}
function yS(e = {}) {
  const { defaultOpen: t, onOpenChange: n, open: r } = e,
    [o, i] = g.useState(""),
    [l, a] = g.useState(null),
    s = g.useRef(null),
    c = g.useCallback(
      (b, x, $, f) => {
        x === "open" && (n == null || n(b, $)), (s.current = f);
      },
      [n],
    ),
    d = g.useMemo(() => (r !== void 0 ? { open: r } : {}), [r]),
    [v, m] = pg({
      controlledProps: d,
      initialState: t ? { open: !0 } : { open: !1 },
      onStateChange: c,
      reducer: gS,
    });
  return (
    g.useEffect(() => {
      !v.open &&
        s.current !== null &&
        s.current !== on.blur &&
        (l == null || l.focus());
    }, [v.open, l]),
    {
      contextValue: {
        state: v,
        dispatch: m,
        popupId: o,
        registerPopup: i,
        registerTrigger: a,
        triggerElement: l,
      },
      open: v.open,
    }
  );
}
function xS(e) {
  const { children: t, open: n, defaultOpen: r, onOpenChange: o } = e,
    { contextValue: i } = yS({ defaultOpen: r, onOpenChange: o, open: n });
  return C.jsx(ts.Provider, { value: i, children: t });
}
const CS = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function bS(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function SS(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function kS(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    SS(e)
  );
}
function $S(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(CS)).forEach((r, o) => {
      const i = bS(r);
      i === -1 ||
        !kS(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex,
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function IS() {
  return !0;
}
function RS(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = $S,
      isEnabled: l = IS,
      open: a,
    } = e,
    s = g.useRef(!1),
    c = g.useRef(null),
    d = g.useRef(null),
    v = g.useRef(null),
    m = g.useRef(null),
    y = g.useRef(!1),
    b = g.useRef(null),
    x = ke(t.ref, b),
    $ = g.useRef(null);
  g.useEffect(() => {
    !a || !b.current || (y.current = !n);
  }, [n, a]),
    g.useEffect(() => {
      if (!a || !b.current) return;
      const u = ln(b.current);
      return (
        b.current.contains(u.activeElement) ||
          (b.current.hasAttribute("tabIndex") ||
            b.current.setAttribute("tabIndex", "-1"),
          y.current && b.current.focus()),
        () => {
          o ||
            (v.current &&
              v.current.focus &&
              ((s.current = !0), v.current.focus()),
            (v.current = null));
        }
      );
    }, [a]),
    g.useEffect(() => {
      if (!a || !b.current) return;
      const u = ln(b.current),
        k = (I) => {
          ($.current = I),
            !(r || !l() || I.key !== "Tab") &&
              u.activeElement === b.current &&
              I.shiftKey &&
              ((s.current = !0), d.current && d.current.focus());
        },
        S = () => {
          const I = b.current;
          if (I === null) return;
          if (!u.hasFocus() || !l() || s.current) {
            s.current = !1;
            return;
          }
          if (
            I.contains(u.activeElement) ||
            (r &&
              u.activeElement !== c.current &&
              u.activeElement !== d.current)
          )
            return;
          if (u.activeElement !== m.current) m.current = null;
          else if (m.current !== null) return;
          if (!y.current) return;
          let P = [];
          if (
            ((u.activeElement === c.current || u.activeElement === d.current) &&
              (P = i(b.current)),
            P.length > 0)
          ) {
            var D, w;
            const T = !!(
                (D = $.current) != null &&
                D.shiftKey &&
                ((w = $.current) == null ? void 0 : w.key) === "Tab"
              ),
              M = P[0],
              O = P[P.length - 1];
            typeof M != "string" &&
              typeof O != "string" &&
              (T ? O.focus() : M.focus());
          } else I.focus();
        };
      u.addEventListener("focusin", S), u.addEventListener("keydown", k, !0);
      const R = setInterval(() => {
        u.activeElement && u.activeElement.tagName === "BODY" && S();
      }, 50);
      return () => {
        clearInterval(R),
          u.removeEventListener("focusin", S),
          u.removeEventListener("keydown", k, !0);
      };
    }, [n, r, o, l, a, i]);
  const f = (u) => {
      v.current === null && (v.current = u.relatedTarget),
        (y.current = !0),
        (m.current = u.target);
      const k = t.props.onFocus;
      k && k(u);
    },
    p = (u) => {
      v.current === null && (v.current = u.relatedTarget), (y.current = !0);
    };
  return C.jsxs(g.Fragment, {
    children: [
      C.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: p,
        ref: c,
        "data-testid": "sentinelStart",
      }),
      g.cloneElement(t, { ref: x, onFocus: f }),
      C.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: p,
        ref: d,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
const PS = g.createContext(void 0);
function wS() {
  return g.useContext(PS);
}
function zS(e = {}) {
  const {
      defaultValue: t,
      disabled: n = !1,
      error: r = !1,
      onBlur: o,
      onChange: i,
      onFocus: l,
      required: a = !1,
      value: s,
      inputRef: c,
    } = e,
    d = wS();
  let v, m, y, b, x;
  if (d) {
    var $, f, p;
    (v = void 0),
      (m = ($ = d.disabled) != null ? $ : !1),
      (y = (f = d.error) != null ? f : !1),
      (b = (p = d.required) != null ? p : !1),
      (x = d.value);
  } else (v = t), (m = n), (y = r), (b = a), (x = s);
  const { current: u } = g.useRef(x != null),
    k = g.useCallback((B) => {}, []),
    S = g.useRef(null),
    R = ke(S, c, k),
    [I, P] = g.useState(!1);
  g.useEffect(() => {
    !d && m && I && (P(!1), o == null || o());
  }, [d, m, I, o]);
  const D = (B) => (E) => {
      var _;
      if (d != null && d.disabled) {
        E.stopPropagation();
        return;
      }
      if (((_ = B.onFocus) == null || _.call(B, E), d && d.onFocus)) {
        var z;
        d == null || (z = d.onFocus) == null || z.call(d);
      } else P(!0);
    },
    w = (B) => (E) => {
      var _;
      (_ = B.onBlur) == null || _.call(B, E),
        d && d.onBlur ? d.onBlur() : P(!1);
    },
    T =
      (B) =>
      (E, ..._) => {
        var z, L;
        if (!u && (E.target || S.current) == null) throw new Error(qn(17));
        d == null || (z = d.onChange) == null || z.call(d, E),
          (L = B.onChange) == null || L.call(B, E, ..._);
      },
    M = (B) => (E) => {
      var _;
      S.current && E.currentTarget === E.target && S.current.focus(),
        (_ = B.onClick) == null || _.call(B, E);
    };
  return {
    disabled: m,
    error: y,
    focused: I,
    formControlContext: d,
    getInputProps: (B = {}) => {
      const _ = h({}, { onBlur: o, onChange: i, onFocus: l }, pt(B)),
        z = h({}, _, { onBlur: w(_), onChange: T(_), onFocus: D(_) });
      return h(
        {},
        z,
        {
          "aria-invalid": y || void 0,
          defaultValue: v,
          value: x,
          required: b,
          disabled: m,
        },
        B,
        { ref: R },
        z,
      );
    },
    getRootProps: (B = {}) => {
      const E = pt(e, ["onBlur", "onChange", "onFocus"]),
        _ = h({}, E, pt(B));
      return h({}, B, _, { onClick: M(_) });
    },
    inputRef: R,
    required: b,
    value: x,
  };
}
const Ie = {
  blur: "list:blur",
  focus: "list:focus",
  itemClick: "list:itemClick",
  itemHover: "list:itemHover",
  itemsChange: "list:itemsChange",
  keyDown: "list:keyDown",
  resetHighlight: "list:resetHighlight",
  textNavigation: "list:textNavigation",
  clearSelection: "list:clearSelection",
};
function _S(e, t, n, r, o, i) {
  if (n.length === 0 || (!r && n.every((a, s) => o(a, s)))) return -1;
  let l = e;
  for (;;) {
    if (
      (!i && t === "next" && l === n.length) ||
      (!i && t === "previous" && l === -1)
    )
      return -1;
    if (r ? !1 : o(n[l], l))
      (l += t === "next" ? 1 : -1), i && (l = (l + n.length) % n.length);
    else return l;
  }
}
function it(e, t, n) {
  var r;
  const {
      items: o,
      isItemDisabled: i,
      disableListWrap: l,
      disabledItemsFocusable: a,
      itemComparer: s,
      focusManagement: c,
    } = n,
    d = c === "DOM" ? 0 : -1,
    v = o.length - 1,
    m = e == null ? -1 : o.findIndex((f) => s(f, e));
  let y,
    b,
    x = !l;
  switch (t) {
    case "reset":
      if (d === -1) return null;
      (y = 0), (b = "next"), (x = !1);
      break;
    case "start":
      (y = 0), (b = "next"), (x = !1);
      break;
    case "end":
      (y = v), (b = "previous"), (x = !1);
      break;
    default: {
      const f = m + t;
      f < 0
        ? (!x && m !== -1) || Math.abs(t) > 1
          ? ((y = 0), (b = "next"))
          : ((y = v), (b = "previous"))
        : f > v
          ? !x || Math.abs(t) > 1
            ? ((y = v), (b = "previous"))
            : ((y = 0), (b = "next"))
          : ((y = f), (b = t >= 0 ? "next" : "previous"));
    }
  }
  const $ = _S(y, b, o, a, i, x);
  return $ === -1 && e !== null && !i(e, m) ? e : (r = o[$]) != null ? r : null;
}
function ES(e, t, n, r) {
  return n === "none"
    ? []
    : n === "single"
      ? r(t[0], e)
        ? t
        : [e]
      : t.some((o) => r(o, e))
        ? t.filter((o) => !r(o, e))
        : [...t, e];
}
function vd(e, t, n) {
  const { itemComparer: r, isItemDisabled: o, selectionMode: i, items: l } = n,
    { selectedValues: a } = t,
    s = l.findIndex((d) => r(e, d));
  if (o(e, s)) return t;
  const c = ES(e, a, i, r);
  return h({}, t, { selectedValues: c, highlightedValue: e });
}
function DS(e, t, n) {
  const r = t.highlightedValue,
    { orientation: o, pageSize: i } = n;
  switch (e) {
    case "Home":
      return h({}, t, { highlightedValue: it(r, "start", n) });
    case "End":
      return h({}, t, { highlightedValue: it(r, "end", n) });
    case "PageUp":
      return h({}, t, { highlightedValue: it(r, -i, n) });
    case "PageDown":
      return h({}, t, { highlightedValue: it(r, i, n) });
    case "ArrowUp":
      if (o !== "vertical") break;
      return h({}, t, { highlightedValue: it(r, -1, n) });
    case "ArrowDown":
      if (o !== "vertical") break;
      return h({}, t, { highlightedValue: it(r, 1, n) });
    case "ArrowLeft": {
      if (o === "vertical") break;
      return h({}, t, {
        highlightedValue: it(r, o === "horizontal-ltr" ? -1 : 1, n),
      });
    }
    case "ArrowRight": {
      if (o === "vertical") break;
      return h({}, t, {
        highlightedValue: it(r, o === "horizontal-ltr" ? 1 : -1, n),
      });
    }
    case "Enter":
    case " ":
      return t.highlightedValue === null ? t : vd(t.highlightedValue, t, n);
  }
  return t;
}
function TS(e, t) {
  return t.focusManagement === "DOM" ? e : h({}, e, { highlightedValue: null });
}
function LS(e, t, n) {
  var r;
  const o = (r = n(e)) == null ? void 0 : r.trim().toLowerCase();
  return !o || o.length === 0 ? !1 : o.indexOf(t) === 0;
}
function BS(e, t, n) {
  const {
      items: r,
      isItemDisabled: o,
      disabledItemsFocusable: i,
      getItemAsString: l,
    } = n,
    a = t.length > 1;
  let s = a ? e.highlightedValue : it(e.highlightedValue, 1, n);
  for (let c = 0; c < r.length; c += 1) {
    if (!s || (!a && e.highlightedValue === s)) return e;
    if (LS(s, t, l) && (!o(s, r.indexOf(s)) || i))
      return h({}, e, { highlightedValue: s });
    s = it(s, 1, n);
  }
  return e;
}
function OS(e, t, n, r) {
  var o;
  const { itemComparer: i, focusManagement: l } = r;
  let a = null;
  if (n.highlightedValue != null) {
    var s;
    a = (s = e.find((v) => i(v, n.highlightedValue))) != null ? s : null;
  } else l === "DOM" && t.length === 0 && (a = it(null, "reset", r));
  const d = ((o = n.selectedValues) != null ? o : []).filter((v) =>
    e.some((m) => i(m, v)),
  );
  return h({}, n, { highlightedValue: a, selectedValues: d });
}
function MS(e, t) {
  return h({}, e, { highlightedValue: it(null, "reset", t) });
}
function AS(e, t) {
  return h({}, e, {
    selectedValues: [],
    highlightedValue: it(null, "reset", t),
  });
}
function md(e, t) {
  const { type: n, context: r } = t;
  switch (n) {
    case Ie.keyDown:
      return DS(t.key, e, r);
    case Ie.itemClick:
      return vd(t.item, e, r);
    case Ie.blur:
      return TS(e, r);
    case Ie.textNavigation:
      return BS(e, t.searchString, r);
    case Ie.itemsChange:
      return OS(t.items, t.previousItems, e, r);
    case Ie.resetHighlight:
      return MS(e, r);
    case Ie.clearSelection:
      return AS(e, r);
    default:
      return e;
  }
}
const jS = 500;
function FS(e) {
  const t = g.useRef({ searchString: "", lastTime: null });
  return g.useCallback(
    (n) => {
      if (n.key.length === 1 && n.key !== " ") {
        const r = t.current,
          o = n.key.toLowerCase(),
          i = performance.now();
        r.searchString.length > 0 && r.lastTime && i - r.lastTime > jS
          ? (r.searchString = o)
          : (r.searchString.length !== 1 || o !== r.searchString) &&
            (r.searchString += o),
          (r.lastTime = i),
          e(r.searchString, n);
      }
    },
    [e],
  );
}
const _p = {},
  NS = () => {},
  HS = (e, t) => e === t,
  VS = () => !1,
  WS = (e) => (typeof e == "string" ? e : String(e)),
  US = () => ({ highlightedValue: null, selectedValues: [] });
function vg(e) {
  const {
      controlledProps: t = _p,
      disabledItemsFocusable: n = !1,
      disableListWrap: r = !1,
      focusManagement: o = "activeDescendant",
      getInitialState: i = US,
      getItemDomElement: l,
      getItemId: a,
      isItemDisabled: s = VS,
      rootRef: c,
      onStateChange: d = NS,
      items: v,
      itemComparer: m = HS,
      getItemAsString: y = WS,
      onChange: b,
      onHighlightChange: x,
      onItemsChange: $,
      orientation: f = "vertical",
      pageSize: p = 5,
      reducerActionContext: u = _p,
      selectionMode: k = "single",
      stateReducer: S,
    } = e,
    R = g.useRef(null),
    I = ke(c, R),
    P = g.useCallback(
      (Q, A, N) => {
        if (
          (x == null || x(Q, A, N),
          o === "DOM" &&
            A != null &&
            (N === Ie.itemClick || N === Ie.keyDown || N === Ie.textNavigation))
        ) {
          var q;
          l == null || (q = l(A)) == null || q.focus();
        }
      },
      [l, x, o],
    ),
    D = g.useMemo(
      () => ({ highlightedValue: m, selectedValues: (Q, A) => Pp(Q, A, m) }),
      [m],
    ),
    w = g.useCallback(
      (Q, A, N, q, ee) => {
        switch ((d == null || d(Q, A, N, q, ee), A)) {
          case "highlightedValue":
            P(Q, N, q);
            break;
          case "selectedValues":
            b == null || b(Q, N, q);
            break;
        }
      },
      [P, b, d],
    ),
    T = g.useMemo(
      () => ({
        disabledItemsFocusable: n,
        disableListWrap: r,
        focusManagement: o,
        isItemDisabled: s,
        itemComparer: m,
        items: v,
        getItemAsString: y,
        onHighlightChange: P,
        orientation: f,
        pageSize: p,
        selectionMode: k,
        stateComparers: D,
      }),
      [n, r, o, s, m, v, y, P, f, p, k, D],
    ),
    M = i(),
    O = S ?? md,
    F = g.useMemo(() => h({}, u, T), [u, T]),
    [B, E] = pg({
      reducer: O,
      actionContext: F,
      initialState: M,
      controlledProps: t,
      stateComparers: D,
      onStateChange: w,
    }),
    { highlightedValue: _, selectedValues: z } = B,
    L = FS((Q, A) => E({ type: Ie.textNavigation, event: A, searchString: Q })),
    V = g.useRef([]);
  g.useEffect(() => {
    Pp(V.current, v, m) ||
      (E({
        type: Ie.itemsChange,
        event: null,
        items: v,
        previousItems: V.current,
      }),
      (V.current = v),
      $ == null || $(v));
  }, [v, m, E, $]);
  const K = (Q) => (A) => {
      var N;
      if (((N = Q.onKeyDown) == null || N.call(Q, A), A.defaultMuiPrevented))
        return;
      const q = ["Home", "End", "PageUp", "PageDown"];
      f === "vertical"
        ? q.push("ArrowUp", "ArrowDown")
        : q.push("ArrowLeft", "ArrowRight"),
        o === "activeDescendant" && q.push(" ", "Enter"),
        q.includes(A.key) && A.preventDefault(),
        E({ type: Ie.keyDown, key: A.key, event: A }),
        L(A);
    },
    X = (Q) => (A) => {
      var N, q;
      (N = Q.onBlur) == null || N.call(Q, A),
        !A.defaultMuiPrevented &&
          (((q = R.current) != null && q.contains(A.relatedTarget)) ||
            E({ type: Ie.blur, event: A }));
    },
    fe = (Q = {}) => {
      const A = pt(Q);
      return h(
        {},
        Q,
        {
          "aria-activedescendant":
            o === "activeDescendant" && _ != null ? a(_) : void 0,
          tabIndex: o === "DOM" ? -1 : 0,
          ref: I,
        },
        A,
        { onBlur: X(A), onKeyDown: K(A) },
      );
    },
    re = g.useCallback(
      (Q) => {
        const A = (z ?? []).some((ee) => ee != null && m(Q, ee)),
          N = _ != null && m(Q, _);
        return { focusable: o === "DOM", highlighted: N, selected: A };
      },
      [m, z, _, o],
    ),
    ae = g.useMemo(() => ({ dispatch: E, getItemState: re }), [E, re]);
  return (
    g.useDebugValue({ state: B }),
    { contextValue: ae, dispatch: E, getRootProps: fe, rootRef: I, state: B }
  );
}
const Rr = g.createContext(null);
function mg(e) {
  const { handlePointerOverEvents: t = !1, item: n } = e,
    r = g.useContext(Rr);
  if (!r) throw new Error("useListItem must be used within a ListProvider");
  const { dispatch: o, getItemState: i } = r,
    { highlighted: l, selected: a, focusable: s } = i(n),
    c = g.useCallback(
      (y) => (b) => {
        var x;
        (x = y.onClick) == null || x.call(y, b),
          !b.defaultPrevented && o({ type: Ie.itemClick, item: n, event: b });
      },
      [o, n],
    ),
    d = g.useCallback(
      (y) => (b) => {
        var x;
        (x = y.onMouseOver) == null || x.call(y, b),
          !b.defaultPrevented && o({ type: Ie.itemHover, item: n, event: b });
      },
      [o, n],
    );
  let v;
  return (
    s && (v = l ? 0 : -1),
    {
      getRootProps: (y = {}) => {
        const b = pt(y);
        return h({}, y, {
          onClick: c(b),
          onPointerOver: t ? d(b) : void 0,
          tabIndex: v,
        });
      },
      highlighted: l,
      selected: a,
    }
  );
}
function KS(e, t) {
  if (t.type === Ie.itemHover) return e;
  const n = md(e, t);
  if (n.highlightedValue === null && t.context.items.length > 0)
    return h({}, n, { highlightedValue: t.context.items[0] });
  if (t.type === Ie.keyDown && t.event.key === "Escape")
    return h({}, n, { open: !1 });
  if (t.type === Ie.blur) {
    var r;
    if (
      !(
        (r = t.context.listboxRef.current) != null &&
        r.contains(t.event.relatedTarget)
      )
    ) {
      var o, i;
      const l =
          (o = t.context.listboxRef.current) == null
            ? void 0
            : o.getAttribute("id"),
        a =
          (i = t.event.relatedTarget) == null
            ? void 0
            : i.getAttribute("aria-controls");
      return l && a && l === a
        ? n
        : h({}, n, { open: !1, highlightedValue: t.context.items[0] });
    }
  }
  return n;
}
const ns = g.createContext(null);
ns.displayName = "CompoundComponentContext";
function GS(e) {
  const t = Array.from(e.keys()).map((n) => {
    const r = e.get(n);
    return { key: n, subitem: r };
  });
  return (
    t.sort((n, r) => {
      const o = n.subitem.ref.current,
        i = r.subitem.ref.current;
      return o === null || i === null || o === i
        ? 0
        : o.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_PRECEDING
          ? 1
          : -1;
    }),
    new Map(t.map((n) => [n.key, n.subitem]))
  );
}
function hg() {
  const [e, t] = g.useState(new Map()),
    n = g.useRef(new Set()),
    r = g.useCallback(function (c) {
      n.current.delete(c),
        t((d) => {
          const v = new Map(d);
          return v.delete(c), v;
        });
    }, []),
    o = g.useCallback(
      function (c, d) {
        let v;
        return (
          typeof c == "function" ? (v = c(n.current)) : (v = c),
          n.current.add(v),
          t((m) => {
            const y = new Map(m);
            return y.set(v, d), y;
          }),
          { id: v, deregister: () => r(v) }
        );
      },
      [r],
    ),
    i = g.useMemo(() => GS(e), [e]),
    l = g.useCallback(
      function (c) {
        return Array.from(i.keys()).indexOf(c);
      },
      [i],
    );
  return {
    contextValue: g.useMemo(
      () => ({ getItemIndex: l, registerItem: o, totalSubitemCount: e.size }),
      [l, o, e.size],
    ),
    subitems: i,
  };
}
function gg(e, t) {
  const n = g.useContext(ns);
  if (n === null)
    throw new Error("useCompoundItem must be used within a useCompoundParent");
  const { registerItem: r } = n,
    [o, i] = g.useState(typeof e == "function" ? void 0 : e);
  return (
    Rn(() => {
      const { id: l, deregister: a } = r(e, t);
      return i(l), a;
    }, [r, t, e]),
    {
      id: o,
      index: o !== void 0 ? n.getItemIndex(o) : -1,
      totalItemCount: n.totalSubitemCount,
    }
  );
}
function fo(e, t) {
  return function (r = {}) {
    const o = h({}, r, e(r));
    return h({}, o, t(o));
  };
}
const JS = {
  dispatch: () => {},
  popupId: "",
  registerPopup: () => {},
  registerTrigger: () => {},
  state: { open: !0 },
  triggerElement: null,
};
function XS(e = {}) {
  var t, n;
  const {
      listboxRef: r,
      onItemsChange: o,
      id: i,
      disabledItemsFocusable: l = !0,
      disableListWrap: a = !1,
      autoFocus: s = !0,
    } = e,
    c = g.useRef(null),
    d = ke(c, r),
    v = (t = $t(i)) != null ? t : "",
    {
      state: { open: m },
      dispatch: y,
      triggerElement: b,
      registerPopup: x,
    } = (n = g.useContext(ts)) != null ? n : JS,
    $ = g.useRef(m),
    { subitems: f, contextValue: p } = hg(),
    u = g.useMemo(() => Array.from(f.keys()), [f]),
    k = g.useCallback(
      (_) => {
        var z, L;
        return _ == null
          ? null
          : (z = (L = f.get(_)) == null ? void 0 : L.ref.current) != null
            ? z
            : null;
      },
      [f],
    ),
    S = g.useCallback(
      (_) => {
        var z;
        return (
          (f == null || (z = f.get(_)) == null ? void 0 : z.disabled) || !1
        );
      },
      [f],
    ),
    R = g.useCallback(
      (_) => {
        var z, L;
        return (
          ((z = f.get(_)) == null ? void 0 : z.label) ||
          ((L = f.get(_)) == null || (L = L.ref.current) == null
            ? void 0
            : L.innerText)
        );
      },
      [f],
    ),
    I = g.useMemo(() => ({ listboxRef: c }), [c]),
    {
      dispatch: P,
      getRootProps: D,
      contextValue: w,
      state: { highlightedValue: T },
      rootRef: M,
    } = vg({
      disabledItemsFocusable: l,
      disableListWrap: a,
      focusManagement: "DOM",
      getItemDomElement: k,
      getInitialState: () => ({ selectedValues: [], highlightedValue: null }),
      isItemDisabled: S,
      items: u,
      getItemAsString: R,
      rootRef: d,
      onItemsChange: o,
      reducerActionContext: I,
      selectionMode: "none",
      stateReducer: KS,
    });
  Rn(() => {
    x(v);
  }, [v, x]),
    g.useEffect(() => {
      if (m && s && T && !$.current) {
        var _;
        (_ = f.get(T)) == null ||
          (_ = _.ref) == null ||
          (_ = _.current) == null ||
          _.focus();
      }
    }, [m, s, T, f, u]),
    g.useEffect(() => {
      var _;
      if (
        (_ = c.current) != null &&
        _.contains(document.activeElement) &&
        T !== null
      ) {
        var z;
        f == null ||
          (z = f.get(T)) == null ||
          (z = z.ref.current) == null ||
          z.focus();
      }
    }, [T, f]);
  const O = (_) => (z) => {
      var L, V;
      (L = _.onBlur) == null || L.call(_, z),
        !z.defaultMuiPrevented &&
          (((V = c.current) != null && V.contains(z.relatedTarget)) ||
            z.relatedTarget === b ||
            y({ type: on.blur, event: z }));
    },
    F = (_) => (z) => {
      var L;
      (L = _.onKeyDown) == null || L.call(_, z),
        !z.defaultMuiPrevented &&
          z.key === "Escape" &&
          y({ type: on.escapeKeyDown, event: z });
    },
    B = (_ = {}) => ({ onBlur: O(_), onKeyDown: F(_) }),
    E = (_ = {}) => {
      const z = fo(B, D),
        L = pt(_);
      return h({}, _, L, z(L), { id: v, role: "menu" });
    };
  return (
    g.useDebugValue({ subitems: f, highlightedValue: T }),
    {
      contextValue: h({}, p, w),
      dispatch: P,
      getListboxProps: E,
      highlightedValue: T,
      listboxRef: M,
      menuItems: f,
      open: m,
      triggerElement: b,
    }
  );
}
function YS(e) {
  const { value: t, children: n } = e,
    {
      dispatch: r,
      getItemIndex: o,
      getItemState: i,
      registerItem: l,
      totalSubitemCount: a,
    } = t,
    s = g.useMemo(
      () => ({ dispatch: r, getItemState: i, getItemIndex: o }),
      [r, o, i],
    ),
    c = g.useMemo(
      () => ({ getItemIndex: o, registerItem: l, totalSubitemCount: a }),
      [l, o, a],
    );
  return C.jsx(ns.Provider, {
    value: c,
    children: C.jsx(Rr.Provider, { value: s, children: n }),
  });
}
var St = "top",
  Gt = "bottom",
  Jt = "right",
  kt = "left",
  hd = "auto",
  Hi = [St, Gt, Jt, kt],
  po = "start",
  Si = "end",
  QS = "clippingParents",
  yg = "viewport",
  Oo = "popper",
  qS = "reference",
  Ep = Hi.reduce(function (e, t) {
    return e.concat([t + "-" + po, t + "-" + Si]);
  }, []),
  xg = [].concat(Hi, [hd]).reduce(function (e, t) {
    return e.concat([t, t + "-" + po, t + "-" + Si]);
  }, []),
  ZS = "beforeRead",
  ek = "read",
  tk = "afterRead",
  nk = "beforeMain",
  rk = "main",
  ok = "afterMain",
  ik = "beforeWrite",
  lk = "write",
  ak = "afterWrite",
  sk = [ZS, ek, tk, nk, rk, ok, ik, lk, ak];
function xn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function kr(e) {
  var t = Tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Wt(e) {
  var t = Tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gd(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ck(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !Wt(i) ||
      !xn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (l) {
        var a = o[l];
        a === !1 ? i.removeAttribute(l) : i.setAttribute(l, a === !0 ? "" : a);
      }));
  });
}
function uk(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = l.reduce(function (s, c) {
            return (s[c] = ""), s;
          }, {});
        !Wt(o) ||
          !xn(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (s) {
            o.removeAttribute(s);
          }));
      });
    }
  );
}
const dk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ck,
  effect: uk,
  requires: ["computeStyles"],
};
function yn(e) {
  return e.split("-")[0];
}
var hr = Math.max,
  fa = Math.min,
  vo = Math.round;
function Yc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Cg() {
  return !/^((?!chrome|android).)*safari/i.test(Yc());
}
function mo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    Wt(e) &&
    ((o = (e.offsetWidth > 0 && vo(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && vo(r.height) / e.offsetHeight) || 1));
  var l = kr(e) ? Tt(e) : window,
    a = l.visualViewport,
    s = !Cg() && n,
    c = (r.left + (s && a ? a.offsetLeft : 0)) / o,
    d = (r.top + (s && a ? a.offsetTop : 0)) / i,
    v = r.width / o,
    m = r.height / i;
  return {
    width: v,
    height: m,
    top: d,
    right: c + v,
    bottom: d + m,
    left: c,
    x: c,
    y: d,
  };
}
function yd(e) {
  var t = mo(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function bg(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && gd(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Dn(e) {
  return Tt(e).getComputedStyle(e);
}
function fk(e) {
  return ["table", "td", "th"].indexOf(xn(e)) >= 0;
}
function lr(e) {
  return ((kr(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function rs(e) {
  return xn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (gd(e) ? e.host : null) || lr(e);
}
function Dp(e) {
  return !Wt(e) || Dn(e).position === "fixed" ? null : e.offsetParent;
}
function pk(e) {
  var t = /firefox/i.test(Yc()),
    n = /Trident/i.test(Yc());
  if (n && Wt(e)) {
    var r = Dn(e);
    if (r.position === "fixed") return null;
  }
  var o = rs(e);
  for (gd(o) && (o = o.host); Wt(o) && ["html", "body"].indexOf(xn(o)) < 0; ) {
    var i = Dn(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function Vi(e) {
  for (var t = Tt(e), n = Dp(e); n && fk(n) && Dn(n).position === "static"; )
    n = Dp(n);
  return n &&
    (xn(n) === "html" || (xn(n) === "body" && Dn(n).position === "static"))
    ? t
    : n || pk(e) || t;
}
function xd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qo(e, t, n) {
  return hr(e, fa(t, n));
}
function vk(e, t, n) {
  var r = qo(e, t, n);
  return r > n ? n : r;
}
function Sg() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function kg(e) {
  return Object.assign({}, Sg(), e);
}
function $g(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var mk = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    kg(typeof t != "number" ? t : $g(t, Hi))
  );
};
function hk(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    l = n.modifiersData.popperOffsets,
    a = yn(n.placement),
    s = xd(a),
    c = [kt, Jt].indexOf(a) >= 0,
    d = c ? "height" : "width";
  if (!(!i || !l)) {
    var v = mk(o.padding, n),
      m = yd(i),
      y = s === "y" ? St : kt,
      b = s === "y" ? Gt : Jt,
      x =
        n.rects.reference[d] + n.rects.reference[s] - l[s] - n.rects.popper[d],
      $ = l[s] - n.rects.reference[s],
      f = Vi(i),
      p = f ? (s === "y" ? f.clientHeight || 0 : f.clientWidth || 0) : 0,
      u = x / 2 - $ / 2,
      k = v[y],
      S = p - m[d] - v[b],
      R = p / 2 - m[d] / 2 + u,
      I = qo(k, R, S),
      P = s;
    n.modifiersData[r] = ((t = {}), (t[P] = I), (t.centerOffset = I - R), t);
  }
}
function gk(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (bg(t.elements.popper, o) && (t.elements.arrow = o)));
}
const yk = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: hk,
  effect: gk,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ho(e) {
  return e.split("-")[1];
}
var xk = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ck(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: vo(n * o) / o || 0, y: vo(r * o) / o || 0 };
}
function Tp(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    l = e.offsets,
    a = e.position,
    s = e.gpuAcceleration,
    c = e.adaptive,
    d = e.roundOffsets,
    v = e.isFixed,
    m = l.x,
    y = m === void 0 ? 0 : m,
    b = l.y,
    x = b === void 0 ? 0 : b,
    $ = typeof d == "function" ? d({ x: y, y: x }) : { x: y, y: x };
  (y = $.x), (x = $.y);
  var f = l.hasOwnProperty("x"),
    p = l.hasOwnProperty("y"),
    u = kt,
    k = St,
    S = window;
  if (c) {
    var R = Vi(n),
      I = "clientHeight",
      P = "clientWidth";
    if (
      (R === Tt(n) &&
        ((R = lr(n)),
        Dn(R).position !== "static" &&
          a === "absolute" &&
          ((I = "scrollHeight"), (P = "scrollWidth"))),
      (R = R),
      o === St || ((o === kt || o === Jt) && i === Si))
    ) {
      k = Gt;
      var D = v && R === S && S.visualViewport ? S.visualViewport.height : R[I];
      (x -= D - r.height), (x *= s ? 1 : -1);
    }
    if (o === kt || ((o === St || o === Gt) && i === Si)) {
      u = Jt;
      var w = v && R === S && S.visualViewport ? S.visualViewport.width : R[P];
      (y -= w - r.width), (y *= s ? 1 : -1);
    }
  }
  var T = Object.assign({ position: a }, c && xk),
    M = d === !0 ? Ck({ x: y, y: x }, Tt(n)) : { x: y, y: x };
  if (((y = M.x), (x = M.y), s)) {
    var O;
    return Object.assign(
      {},
      T,
      ((O = {}),
      (O[k] = p ? "0" : ""),
      (O[u] = f ? "0" : ""),
      (O.transform =
        (S.devicePixelRatio || 1) <= 1
          ? "translate(" + y + "px, " + x + "px)"
          : "translate3d(" + y + "px, " + x + "px, 0)"),
      O),
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}),
    (t[k] = p ? x + "px" : ""),
    (t[u] = f ? y + "px" : ""),
    (t.transform = ""),
    t),
  );
}
function bk(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    l = i === void 0 ? !0 : i,
    a = n.roundOffsets,
    s = a === void 0 ? !0 : a,
    c = {
      placement: yn(t.placement),
      variation: ho(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Tp(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: l,
          roundOffsets: s,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Tp(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const Sk = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: bk,
  data: {},
};
var fl = { passive: !0 };
function kk(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    l = r.resize,
    a = l === void 0 ? !0 : l,
    s = Tt(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (d) {
        d.addEventListener("scroll", n.update, fl);
      }),
    a && s.addEventListener("resize", n.update, fl),
    function () {
      i &&
        c.forEach(function (d) {
          d.removeEventListener("scroll", n.update, fl);
        }),
        a && s.removeEventListener("resize", n.update, fl);
    }
  );
}
const $k = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: kk,
  data: {},
};
var Ik = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ll(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Ik[t];
  });
}
var Rk = { start: "end", end: "start" };
function Lp(e) {
  return e.replace(/start|end/g, function (t) {
    return Rk[t];
  });
}
function Cd(e) {
  var t = Tt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function bd(e) {
  return mo(lr(e)).left + Cd(e).scrollLeft;
}
function Pk(e, t) {
  var n = Tt(e),
    r = lr(e),
    o = n.visualViewport,
    i = r.clientWidth,
    l = r.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (i = o.width), (l = o.height);
    var c = Cg();
    (c || (!c && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: l, x: a + bd(e), y: s };
}
function wk(e) {
  var t,
    n = lr(e),
    r = Cd(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = hr(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0,
    ),
    l = hr(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0,
    ),
    a = -r.scrollLeft + bd(e),
    s = -r.scrollTop;
  return (
    Dn(o || n).direction === "rtl" &&
      (a += hr(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: l, x: a, y: s }
  );
}
function Sd(e) {
  var t = Dn(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ig(e) {
  return ["html", "body", "#document"].indexOf(xn(e)) >= 0
    ? e.ownerDocument.body
    : Wt(e) && Sd(e)
      ? e
      : Ig(rs(e));
}
function Zo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ig(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Tt(r),
    l = o ? [i].concat(i.visualViewport || [], Sd(r) ? r : []) : r,
    a = t.concat(l);
  return o ? a : a.concat(Zo(rs(l)));
}
function Qc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function zk(e, t) {
  var n = mo(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function Bp(e, t, n) {
  return t === yg ? Qc(Pk(e, n)) : kr(t) ? zk(t, n) : Qc(wk(lr(e)));
}
function _k(e) {
  var t = Zo(rs(e)),
    n = ["absolute", "fixed"].indexOf(Dn(e).position) >= 0,
    r = n && Wt(e) ? Vi(e) : e;
  return kr(r)
    ? t.filter(function (o) {
        return kr(o) && bg(o, r) && xn(o) !== "body";
      })
    : [];
}
function Ek(e, t, n, r) {
  var o = t === "clippingParents" ? _k(e) : [].concat(t),
    i = [].concat(o, [n]),
    l = i[0],
    a = i.reduce(
      function (s, c) {
        var d = Bp(e, c, r);
        return (
          (s.top = hr(d.top, s.top)),
          (s.right = fa(d.right, s.right)),
          (s.bottom = fa(d.bottom, s.bottom)),
          (s.left = hr(d.left, s.left)),
          s
        );
      },
      Bp(e, l, r),
    );
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function Rg(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? yn(r) : null,
    i = r ? ho(r) : null,
    l = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    s;
  switch (o) {
    case St:
      s = { x: l, y: t.y - n.height };
      break;
    case Gt:
      s = { x: l, y: t.y + t.height };
      break;
    case Jt:
      s = { x: t.x + t.width, y: a };
      break;
    case kt:
      s = { x: t.x - n.width, y: a };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var c = o ? xd(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (i) {
      case po:
        s[c] = s[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Si:
        s[c] = s[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function ki(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    l = i === void 0 ? e.strategy : i,
    a = n.boundary,
    s = a === void 0 ? QS : a,
    c = n.rootBoundary,
    d = c === void 0 ? yg : c,
    v = n.elementContext,
    m = v === void 0 ? Oo : v,
    y = n.altBoundary,
    b = y === void 0 ? !1 : y,
    x = n.padding,
    $ = x === void 0 ? 0 : x,
    f = kg(typeof $ != "number" ? $ : $g($, Hi)),
    p = m === Oo ? qS : Oo,
    u = e.rects.popper,
    k = e.elements[b ? p : m],
    S = Ek(kr(k) ? k : k.contextElement || lr(e.elements.popper), s, d, l),
    R = mo(e.elements.reference),
    I = Rg({ reference: R, element: u, strategy: "absolute", placement: o }),
    P = Qc(Object.assign({}, u, I)),
    D = m === Oo ? P : R,
    w = {
      top: S.top - D.top + f.top,
      bottom: D.bottom - S.bottom + f.bottom,
      left: S.left - D.left + f.left,
      right: D.right - S.right + f.right,
    },
    T = e.modifiersData.offset;
  if (m === Oo && T) {
    var M = T[o];
    Object.keys(w).forEach(function (O) {
      var F = [Jt, Gt].indexOf(O) >= 0 ? 1 : -1,
        B = [St, Gt].indexOf(O) >= 0 ? "y" : "x";
      w[O] += M[B] * F;
    });
  }
  return w;
}
function Dk(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    l = n.padding,
    a = n.flipVariations,
    s = n.allowedAutoPlacements,
    c = s === void 0 ? xg : s,
    d = ho(r),
    v = d
      ? a
        ? Ep
        : Ep.filter(function (b) {
            return ho(b) === d;
          })
      : Hi,
    m = v.filter(function (b) {
      return c.indexOf(b) >= 0;
    });
  m.length === 0 && (m = v);
  var y = m.reduce(function (b, x) {
    return (
      (b[x] = ki(e, { placement: x, boundary: o, rootBoundary: i, padding: l })[
        yn(x)
      ]),
      b
    );
  }, {});
  return Object.keys(y).sort(function (b, x) {
    return y[b] - y[x];
  });
}
function Tk(e) {
  if (yn(e) === hd) return [];
  var t = Ll(e);
  return [Lp(e), t, Lp(t)];
}
function Lk(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        l = n.altAxis,
        a = l === void 0 ? !0 : l,
        s = n.fallbackPlacements,
        c = n.padding,
        d = n.boundary,
        v = n.rootBoundary,
        m = n.altBoundary,
        y = n.flipVariations,
        b = y === void 0 ? !0 : y,
        x = n.allowedAutoPlacements,
        $ = t.options.placement,
        f = yn($),
        p = f === $,
        u = s || (p || !b ? [Ll($)] : Tk($)),
        k = [$].concat(u).reduce(function (re, ae) {
          return re.concat(
            yn(ae) === hd
              ? Dk(t, {
                  placement: ae,
                  boundary: d,
                  rootBoundary: v,
                  padding: c,
                  flipVariations: b,
                  allowedAutoPlacements: x,
                })
              : ae,
          );
        }, []),
        S = t.rects.reference,
        R = t.rects.popper,
        I = new Map(),
        P = !0,
        D = k[0],
        w = 0;
      w < k.length;
      w++
    ) {
      var T = k[w],
        M = yn(T),
        O = ho(T) === po,
        F = [St, Gt].indexOf(M) >= 0,
        B = F ? "width" : "height",
        E = ki(t, {
          placement: T,
          boundary: d,
          rootBoundary: v,
          altBoundary: m,
          padding: c,
        }),
        _ = F ? (O ? Jt : kt) : O ? Gt : St;
      S[B] > R[B] && (_ = Ll(_));
      var z = Ll(_),
        L = [];
      if (
        (i && L.push(E[M] <= 0),
        a && L.push(E[_] <= 0, E[z] <= 0),
        L.every(function (re) {
          return re;
        }))
      ) {
        (D = T), (P = !1);
        break;
      }
      I.set(T, L);
    }
    if (P)
      for (
        var V = b ? 3 : 1,
          K = function (ae) {
            var Q = k.find(function (A) {
              var N = I.get(A);
              if (N)
                return N.slice(0, ae).every(function (q) {
                  return q;
                });
            });
            if (Q) return (D = Q), "break";
          },
          X = V;
        X > 0;
        X--
      ) {
        var fe = K(X);
        if (fe === "break") break;
      }
    t.placement !== D &&
      ((t.modifiersData[r]._skip = !0), (t.placement = D), (t.reset = !0));
  }
}
const Bk = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Lk,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Op(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Mp(e) {
  return [St, Jt, Gt, kt].some(function (t) {
    return e[t] >= 0;
  });
}
function Ok(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    l = ki(t, { elementContext: "reference" }),
    a = ki(t, { altBoundary: !0 }),
    s = Op(l, r),
    c = Op(a, o, i),
    d = Mp(s),
    v = Mp(c);
  (t.modifiersData[n] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: v,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": v,
    }));
}
const Mk = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ok,
};
function Ak(e, t, n) {
  var r = yn(e),
    o = [kt, St].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    l = i[0],
    a = i[1];
  return (
    (l = l || 0),
    (a = (a || 0) * o),
    [kt, Jt].indexOf(r) >= 0 ? { x: a, y: l } : { x: l, y: a }
  );
}
function jk(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    l = xg.reduce(function (d, v) {
      return (d[v] = Ak(v, t.rects, i)), d;
    }, {}),
    a = l[t.placement],
    s = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[r] = l);
}
const Fk = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: jk,
};
function Nk(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Rg({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const Hk = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Nk,
  data: {},
};
function Vk(e) {
  return e === "x" ? "y" : "x";
}
function Wk(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    l = n.altAxis,
    a = l === void 0 ? !1 : l,
    s = n.boundary,
    c = n.rootBoundary,
    d = n.altBoundary,
    v = n.padding,
    m = n.tether,
    y = m === void 0 ? !0 : m,
    b = n.tetherOffset,
    x = b === void 0 ? 0 : b,
    $ = ki(t, { boundary: s, rootBoundary: c, padding: v, altBoundary: d }),
    f = yn(t.placement),
    p = ho(t.placement),
    u = !p,
    k = xd(f),
    S = Vk(k),
    R = t.modifiersData.popperOffsets,
    I = t.rects.reference,
    P = t.rects.popper,
    D =
      typeof x == "function"
        ? x(Object.assign({}, t.rects, { placement: t.placement }))
        : x,
    w =
      typeof D == "number"
        ? { mainAxis: D, altAxis: D }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    M = { x: 0, y: 0 };
  if (R) {
    if (i) {
      var O,
        F = k === "y" ? St : kt,
        B = k === "y" ? Gt : Jt,
        E = k === "y" ? "height" : "width",
        _ = R[k],
        z = _ + $[F],
        L = _ - $[B],
        V = y ? -P[E] / 2 : 0,
        K = p === po ? I[E] : P[E],
        X = p === po ? -P[E] : -I[E],
        fe = t.elements.arrow,
        re = y && fe ? yd(fe) : { width: 0, height: 0 },
        ae = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Sg(),
        Q = ae[F],
        A = ae[B],
        N = qo(0, I[E], re[E]),
        q = u ? I[E] / 2 - V - N - Q - w.mainAxis : K - N - Q - w.mainAxis,
        ee = u ? -I[E] / 2 + V + N + A + w.mainAxis : X + N + A + w.mainAxis,
        ne = t.elements.arrow && Vi(t.elements.arrow),
        Pe = ne ? (k === "y" ? ne.clientTop || 0 : ne.clientLeft || 0) : 0,
        et = (O = T == null ? void 0 : T[k]) != null ? O : 0,
        Yt = _ + q - et - Pe,
        ye = _ + ee - et,
        Ce = qo(y ? fa(z, Yt) : z, _, y ? hr(L, ye) : L);
      (R[k] = Ce), (M[k] = Ce - _);
    }
    if (a) {
      var me,
        Qt = k === "x" ? St : kt,
        qt = k === "x" ? Gt : Jt,
        Be = R[S],
        Xe = S === "y" ? "height" : "width",
        we = Be + $[Qt],
        ht = Be - $[qt],
        Rt = [St, kt].indexOf(f) !== -1,
        J = (me = T == null ? void 0 : T[S]) != null ? me : 0,
        Z = Rt ? we : Be - I[Xe] - P[Xe] - J + w.altAxis,
        oe = Rt ? Be + I[Xe] + P[Xe] - J - w.altAxis : ht,
        te = y && Rt ? vk(Z, Be, oe) : qo(y ? Z : we, Be, y ? oe : ht);
      (R[S] = te), (M[S] = te - Be);
    }
    t.modifiersData[r] = M;
  }
}
const Uk = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Wk,
  requiresIfExists: ["offset"],
};
function Kk(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Gk(e) {
  return e === Tt(e) || !Wt(e) ? Cd(e) : Kk(e);
}
function Jk(e) {
  var t = e.getBoundingClientRect(),
    n = vo(t.width) / e.offsetWidth || 1,
    r = vo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Xk(e, t, n) {
  n === void 0 && (n = !1);
  var r = Wt(t),
    o = Wt(t) && Jk(t),
    i = lr(t),
    l = mo(e, o, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((xn(t) !== "body" || Sd(i)) && (a = Gk(t)),
      Wt(t)
        ? ((s = mo(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop))
        : i && (s.x = bd(i))),
    {
      x: l.left + a.scrollLeft - s.x,
      y: l.top + a.scrollTop - s.y,
      width: l.width,
      height: l.height,
    }
  );
}
function Yk(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function (a) {
      if (!n.has(a)) {
        var s = t.get(a);
        s && o(s);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function Qk(e) {
  var t = Yk(e);
  return sk.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      }),
    );
  }, []);
}
function qk(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Zk(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Ap = { placement: "bottom", modifiers: [], strategy: "absolute" };
function jp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function e$(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? Ap : o;
  return function (a, s, c) {
    c === void 0 && (c = i);
    var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ap, i),
        modifiersData: {},
        elements: { reference: a, popper: s },
        attributes: {},
        styles: {},
      },
      v = [],
      m = !1,
      y = {
        state: d,
        setOptions: function (f) {
          var p = typeof f == "function" ? f(d.options) : f;
          x(),
            (d.options = Object.assign({}, i, d.options, p)),
            (d.scrollParents = {
              reference: kr(a)
                ? Zo(a)
                : a.contextElement
                  ? Zo(a.contextElement)
                  : [],
              popper: Zo(s),
            });
          var u = Qk(Zk([].concat(r, d.options.modifiers)));
          return (
            (d.orderedModifiers = u.filter(function (k) {
              return k.enabled;
            })),
            b(),
            y.update()
          );
        },
        forceUpdate: function () {
          if (!m) {
            var f = d.elements,
              p = f.reference,
              u = f.popper;
            if (jp(p, u)) {
              (d.rects = {
                reference: Xk(p, Vi(u), d.options.strategy === "fixed"),
                popper: yd(u),
              }),
                (d.reset = !1),
                (d.placement = d.options.placement),
                d.orderedModifiers.forEach(function (w) {
                  return (d.modifiersData[w.name] = Object.assign({}, w.data));
                });
              for (var k = 0; k < d.orderedModifiers.length; k++) {
                if (d.reset === !0) {
                  (d.reset = !1), (k = -1);
                  continue;
                }
                var S = d.orderedModifiers[k],
                  R = S.fn,
                  I = S.options,
                  P = I === void 0 ? {} : I,
                  D = S.name;
                typeof R == "function" &&
                  (d = R({ state: d, options: P, name: D, instance: y }) || d);
              }
            }
          }
        },
        update: qk(function () {
          return new Promise(function ($) {
            y.forceUpdate(), $(d);
          });
        }),
        destroy: function () {
          x(), (m = !0);
        },
      };
    if (!jp(a, s)) return y;
    y.setOptions(c).then(function ($) {
      !m && c.onFirstUpdate && c.onFirstUpdate($);
    });
    function b() {
      d.orderedModifiers.forEach(function ($) {
        var f = $.name,
          p = $.options,
          u = p === void 0 ? {} : p,
          k = $.effect;
        if (typeof k == "function") {
          var S = k({ state: d, name: f, instance: y, options: u }),
            R = function () {};
          v.push(S || R);
        }
      });
    }
    function x() {
      v.forEach(function ($) {
        return $();
      }),
        (v = []);
    }
    return y;
  };
}
var t$ = [$k, Hk, Sk, dk, Fk, Bk, Uk, yk, Mk],
  n$ = e$({ defaultModifiers: t$ });
function r$(e) {
  return typeof e == "function" ? e() : e;
}
const Pg = g.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [l, a] = g.useState(null),
    s = ke(g.isValidElement(r) ? r.ref : null, n);
  if (
    (Rn(() => {
      i || a(r$(o) || document.body);
    }, [o, i]),
    Rn(() => {
      if (l && !i)
        return (
          Ml(n, l),
          () => {
            Ml(n, null);
          }
        );
    }, [n, l, i]),
    i)
  ) {
    if (g.isValidElement(r)) {
      const c = { ref: s };
      return g.cloneElement(r, c);
    }
    return C.jsx(g.Fragment, { children: r });
  }
  return C.jsx(g.Fragment, { children: l && sg.createPortal(r, l) });
});
function o$(e) {
  return _i("MuiPopper", e);
}
Ei("MuiPopper", ["root"]);
const i$ = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  l$ = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function a$(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function qc(e) {
  return typeof e == "function" ? e() : e;
}
function s$(e) {
  return e.nodeType !== void 0;
}
const c$ = () => le({ root: ["root"] }, pS(o$)),
  u$ = {},
  d$ = g.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        direction: l,
        disablePortal: a,
        modifiers: s,
        open: c,
        placement: d,
        popperOptions: v,
        popperRef: m,
        slotProps: y = {},
        slots: b = {},
        TransitionProps: x,
      } = t,
      $ = Y(t, i$),
      f = g.useRef(null),
      p = ke(f, n),
      u = g.useRef(null),
      k = ke(u, m),
      S = g.useRef(k);
    Rn(() => {
      S.current = k;
    }, [k]),
      g.useImperativeHandle(m, () => u.current, []);
    const R = a$(d, l),
      [I, P] = g.useState(R),
      [D, w] = g.useState(qc(o));
    g.useEffect(() => {
      u.current && u.current.forceUpdate();
    }),
      g.useEffect(() => {
        o && w(qc(o));
      }, [o]),
      Rn(() => {
        if (!D || !c) return;
        const B = (z) => {
          P(z.placement);
        };
        let E = [
          { name: "preventOverflow", options: { altBoundary: a } },
          { name: "flip", options: { altBoundary: a } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: z }) => {
              B(z);
            },
          },
        ];
        s != null && (E = E.concat(s)),
          v && v.modifiers != null && (E = E.concat(v.modifiers));
        const _ = n$(D, f.current, h({ placement: R }, v, { modifiers: E }));
        return (
          S.current(_),
          () => {
            _.destroy(), S.current(null);
          }
        );
      }, [D, a, s, c, v, R]);
    const T = { placement: I };
    x !== null && (T.TransitionProps = x);
    const M = c$(),
      O = (r = b.root) != null ? r : "div",
      F = fg({
        elementType: O,
        externalSlotProps: y.root,
        externalForwardedProps: $,
        additionalProps: { role: "tooltip", ref: p },
        ownerState: t,
        className: M.root,
      });
    return C.jsx(O, h({}, F, { children: typeof i == "function" ? i(T) : i }));
  }),
  wg = g.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: l = "ltr",
        disablePortal: a = !1,
        keepMounted: s = !1,
        modifiers: c,
        open: d,
        placement: v = "bottom",
        popperOptions: m = u$,
        popperRef: y,
        style: b,
        transition: x = !1,
        slotProps: $ = {},
        slots: f = {},
      } = t,
      p = Y(t, l$),
      [u, k] = g.useState(!0),
      S = () => {
        k(!1);
      },
      R = () => {
        k(!0);
      };
    if (!s && !d && (!x || u)) return null;
    let I;
    if (i) I = i;
    else if (r) {
      const w = qc(r);
      I = w && s$(w) ? ln(w).body : ln(null).body;
    }
    const P = !d && s && (!x || u) ? "none" : void 0,
      D = x ? { in: d, onEnter: S, onExited: R } : void 0;
    return C.jsx(Pg, {
      disablePortal: a,
      container: I,
      children: C.jsx(
        d$,
        h(
          {
            anchorEl: r,
            direction: l,
            disablePortal: a,
            modifiers: c,
            ref: n,
            open: x ? !u : d,
            placement: v,
            popperOptions: m,
            popperRef: y,
            slotProps: $,
            slots: f,
          },
          p,
          {
            style: h({ position: "fixed", top: 0, left: 0, display: P }, b),
            TransitionProps: D,
            children: o,
          },
        ),
      ),
    });
  });
function f$(e = {}) {
  const { disabled: t = !1, focusableWhenDisabled: n, rootRef: r } = e,
    o = g.useContext(ts);
  if (o === null) throw new Error("useMenuButton: no menu context available.");
  const { state: i, dispatch: l, registerTrigger: a, popupId: s } = o,
    {
      getRootProps: c,
      rootRef: d,
      active: v,
    } = ir({ disabled: t, focusableWhenDisabled: n, rootRef: r }),
    m = ke(d, a),
    y = (f) => (p) => {
      var u;
      (u = f.onClick) == null || u.call(f, p),
        !p.defaultMuiPrevented && l({ type: on.toggle, event: p });
    },
    b = (f) => (p) => {
      var u;
      (u = f.onKeyDown) == null || u.call(f, p),
        !p.defaultMuiPrevented &&
          (p.key === "ArrowDown" || p.key === "ArrowUp") &&
          (p.preventDefault(), l({ type: on.open, event: p }));
    },
    x = (f = {}) => ({ onClick: y(f), onKeyDown: b(f) });
  return {
    active: v,
    getRootProps: (f = {}) => {
      const p = pt(f),
        u = fo(c, x);
      return h(
        {
          "aria-haspopup": "menu",
          "aria-expanded": i.open,
          "aria-controls": s,
        },
        f,
        p,
        u(p),
        { tabIndex: 0, ref: m },
      );
    },
    open: i.open,
    rootRef: m,
  };
}
function p$(e) {
  return `menu-item-${e.size}`;
}
const v$ = {
  dispatch: () => {},
  popupId: "",
  registerPopup: () => {},
  registerTrigger: () => {},
  state: { open: !0 },
  triggerElement: null,
};
function m$(e) {
  var t;
  const { disabled: n = !1, id: r, rootRef: o, label: i } = e,
    l = $t(r),
    a = g.useRef(null),
    s = g.useMemo(
      () => ({ disabled: n, id: l ?? "", label: i, ref: a }),
      [n, l, i],
    ),
    { dispatch: c } = (t = g.useContext(ts)) != null ? t : v$,
    { getRootProps: d, highlighted: v } = mg({ item: l }),
    { index: m, totalItemCount: y } = gg(l ?? p$, s),
    {
      getRootProps: b,
      focusVisible: x,
      rootRef: $,
    } = ir({ disabled: n, focusableWhenDisabled: !0 }),
    f = ke($, o, a);
  g.useDebugValue({ id: l, highlighted: v, disabled: n, label: i });
  const p = (S) => (R) => {
      var I;
      (I = S.onClick) == null || I.call(S, R),
        !R.defaultMuiPrevented && c({ type: on.close, event: R });
    },
    u = (S = {}) => h({}, S, { onClick: p(S) });
  function k(S = {}) {
    const R = pt(S),
      I = fo(u, fo(b, d));
    return h({}, S, R, I(R), { id: l, ref: f, role: "menuitem" });
  }
  return l === void 0
    ? {
        getRootProps: k,
        disabled: !1,
        focusVisible: x,
        highlighted: !1,
        index: -1,
        totalItemCount: 0,
        rootRef: f,
      }
    : {
        getRootProps: k,
        disabled: n,
        focusVisible: x,
        highlighted: v,
        index: m,
        totalItemCount: y,
        rootRef: f,
      };
}
function h$(e) {
  const t = g.useContext(Rr);
  if (!t) throw new Error("MenuItem: ListContext was not found.");
  const n = $t(e),
    { getItemState: r, dispatch: o } = t;
  let i;
  n != null
    ? (i = r(n))
    : (i = { focusable: !0, highlighted: !1, selected: !1 });
  const { highlighted: l, selected: a, focusable: s } = i,
    c = g.useCallback(
      (v) => {
        if (v !== n)
          throw new Error(
            [
              "Base UI MenuItem: Tried to access the state of another MenuItem.",
              `itemValue: ${v} | id: ${n}`,
              "This is unsupported when the MenuItem uses the MenuItemContextStabilizer as a performance optimization.",
            ].join("/n"),
          );
        return { highlighted: l, selected: a, focusable: s };
      },
      [l, a, s, n],
    );
  return {
    contextValue: g.useMemo(() => ({ dispatch: o, getItemState: c }), [o, c]),
    id: n,
  };
}
function g$(e) {
  const t = ln(e);
  return t.body === e
    ? ga(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function ei(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Fp(e) {
  return parseInt(ga(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function y$(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Np(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (l) => {
    const a = i.indexOf(l) === -1,
      s = !y$(l);
    a && s && ei(l, o);
  });
}
function Ns(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function x$(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (g$(r)) {
      const l = iy(ln(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Fp(r) + l}px`);
      const a = ln(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (s) => {
        n.push({
          value: s.style.paddingRight,
          property: "padding-right",
          el: s,
        }),
          (s.style.paddingRight = `${Fp(s) + l}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = ln(r).body;
    else {
      const l = r.parentElement,
        a = ga(r);
      i =
        (l == null ? void 0 : l.nodeName) === "HTML" &&
        a.getComputedStyle(l).overflowY === "scroll"
          ? l
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i },
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: l, property: a }) => {
      i ? l.style.setProperty(a, i) : l.style.removeProperty(a);
    });
  };
}
function C$(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class b$ {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && ei(t.modalRef, !1);
    const o = C$(n);
    Np(n, t.mount, t.modalRef, o, !0);
    const i = Ns(this.containers, (l) => l.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = Ns(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = x$(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Ns(this.containers, (l) => l.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && ei(t.modalRef, n),
        Np(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const l = i.modals[i.modals.length - 1];
      l.modalRef && ei(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function S$(e) {
  return typeof e == "function" ? e() : e;
}
function k$(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const $$ = new b$();
function I$(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = $$,
      closeAfterTransition: i = !1,
      onTransitionEnter: l,
      onTransitionExited: a,
      children: s,
      onClose: c,
      open: d,
      rootRef: v,
    } = e,
    m = g.useRef({}),
    y = g.useRef(null),
    b = g.useRef(null),
    x = ke(b, v),
    [$, f] = g.useState(!d),
    p = k$(s);
  let u = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (u = !1);
  const k = () => ln(y.current),
    S = () => (
      (m.current.modalRef = b.current), (m.current.mount = y.current), m.current
    ),
    R = () => {
      o.mount(S(), { disableScrollLock: r }),
        b.current && (b.current.scrollTop = 0);
    },
    I = Qs(() => {
      const E = S$(t) || k().body;
      o.add(S(), E), b.current && R();
    }),
    P = g.useCallback(() => o.isTopModal(S()), [o]),
    D = Qs((E) => {
      (y.current = E), E && (d && P() ? R() : b.current && ei(b.current, u));
    }),
    w = g.useCallback(() => {
      o.remove(S(), u);
    }, [u, o]);
  g.useEffect(
    () => () => {
      w();
    },
    [w],
  ),
    g.useEffect(() => {
      d ? I() : (!p || !i) && w();
    }, [d, w, p, i, I]);
  const T = (E) => (_) => {
      var z;
      (z = E.onKeyDown) == null || z.call(E, _),
        !(_.key !== "Escape" || _.which === 229 || !P()) &&
          (n || (_.stopPropagation(), c && c(_, "escapeKeyDown")));
    },
    M = (E) => (_) => {
      var z;
      (z = E.onClick) == null || z.call(E, _),
        _.target === _.currentTarget && c && c(_, "backdropClick");
    };
  return {
    getRootProps: (E = {}) => {
      const _ = pt(e);
      delete _.onTransitionEnter, delete _.onTransitionExited;
      const z = h({}, _, E);
      return h({ role: "presentation" }, z, { onKeyDown: T(z), ref: x });
    },
    getBackdropProps: (E = {}) => {
      const _ = E;
      return h({ "aria-hidden": !0 }, _, { onClick: M(_), open: d });
    },
    getTransitionProps: () => {
      const E = () => {
          f(!1), l && l();
        },
        _ = () => {
          f(!0), a && a(), i && w();
        };
      return {
        onEnter: Ys(E, s == null ? void 0 : s.props.onEnter),
        onExited: Ys(_, s == null ? void 0 : s.props.onExited),
      };
    },
    rootRef: x,
    portalRef: D,
    isTopModal: P,
    exited: $,
    hasTransition: p,
  };
}
function R$(e) {
  const { value: t, label: n, disabled: r, rootRef: o, id: i } = e,
    { getRootProps: l, highlighted: a, selected: s } = mg({ item: t }),
    c = $t(i),
    d = g.useRef(null),
    v = g.useMemo(
      () => ({ disabled: r, label: n, value: t, ref: d, id: c }),
      [r, n, t, c],
    ),
    { index: m } = gg(t, v),
    y = ke(o, d);
  return {
    getRootProps: (b = {}) => {
      const x = pt(b);
      return h({}, b, l(x), {
        id: c,
        ref: y,
        role: "option",
        "aria-selected": s,
      });
    },
    highlighted: a,
    index: m,
    selected: s,
    rootRef: y,
  };
}
function P$(e) {
  const t = g.useContext(Rr);
  if (!t) throw new Error("Option: ListContext was not found.");
  const { getItemState: n, dispatch: r } = t,
    { highlighted: o, selected: i, focusable: l } = n(e),
    a = g.useCallback(
      (c) => {
        if (c !== e)
          throw new Error(
            [
              "Base UI Option: Tried to access the state of another Option.",
              "This is unsupported when the Option uses the OptionContextStabilizer as a performance optimization.",
            ].join("/n"),
          );
        return { highlighted: o, selected: i, focusable: l };
      },
      [o, i, l, e],
    );
  return {
    contextValue: g.useMemo(() => ({ dispatch: r, getItemState: a }), [r, a]),
  };
}
const pa = { buttonClick: "buttonClick", browserAutoFill: "browserAutoFill" },
  w$ = (e) => {
    const { label: t, value: n } = e;
    return typeof t == "string" ? t : typeof n == "string" ? n : String(e);
  };
function z$(e, t) {
  const { open: n } = e,
    {
      context: { selectionMode: r },
    } = t;
  if (t.type === pa.buttonClick) {
    var o;
    const s =
      (o = e.selectedValues[0]) != null ? o : it(null, "start", t.context);
    return h({}, e, { open: !n, highlightedValue: n ? null : s });
  }
  if (t.type === pa.browserAutoFill) return vd(t.item, e, t.context);
  const i = md(e, t);
  switch (t.type) {
    case Ie.keyDown:
      if (e.open) {
        if (t.event.key === "Escape") return h({}, i, { open: !1 });
        if (r === "single" && (t.event.key === "Enter" || t.event.key === " "))
          return h({}, i, { open: !1 });
      } else {
        if (
          t.event.key === "Enter" ||
          t.event.key === " " ||
          t.event.key === "ArrowDown"
        ) {
          var l;
          return h({}, e, {
            open: !0,
            highlightedValue:
              (l = e.selectedValues[0]) != null
                ? l
                : it(null, "start", t.context),
          });
        }
        if (t.event.key === "ArrowUp") {
          var a;
          return h({}, e, {
            open: !0,
            highlightedValue:
              (a = e.selectedValues[0]) != null
                ? a
                : it(null, "end", t.context),
          });
        }
      }
      break;
    case Ie.itemClick:
      if (r === "single") return h({}, i, { open: !1 });
      break;
    case Ie.blur:
      return h({}, i, { open: !1 });
    default:
      return i;
  }
  return i;
}
const _$ = {
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "inset(50%)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  left: "50%",
  bottom: 0,
};
function E$(e) {
  return Array.isArray(e)
    ? e.length === 0
      ? ""
      : JSON.stringify(e.map((t) => t.value))
    : (e == null ? void 0 : e.value) == null
      ? ""
      : typeof e.value == "string" || typeof e.value == "number"
        ? e.value
        : JSON.stringify(e.value);
}
function D$(e) {
  e.preventDefault();
}
function T$(e) {
  const {
      areOptionsEqual: t,
      buttonRef: n,
      defaultOpen: r = !1,
      defaultValue: o,
      disabled: i = !1,
      listboxId: l,
      listboxRef: a,
      multiple: s = !1,
      name: c,
      required: d,
      onChange: v,
      onHighlightChange: m,
      onOpenChange: y,
      open: b,
      options: x,
      getOptionAsString: $ = w$,
      getSerializedValue: f = E$,
      value: p,
    } = e,
    u = g.useRef(null),
    k = ke(n, u),
    S = g.useRef(null),
    R = $t(l);
  let I;
  p === void 0 && o === void 0
    ? (I = [])
    : o !== void 0 && (s ? (I = o) : (I = o == null ? [] : [o]));
  const P = g.useMemo(() => {
      if (p !== void 0) return s ? p : p == null ? [] : [p];
    }, [p, s]),
    { subitems: D, contextValue: w } = hg(),
    T = g.useMemo(
      () =>
        x != null
          ? new Map(
              x.map((J, Z) => [
                J.value,
                {
                  value: J.value,
                  label: J.label,
                  disabled: J.disabled,
                  ref: g.createRef(),
                  id: `${R}_${Z}`,
                },
              ]),
            )
          : D,
      [x, D, R],
    ),
    M = ke(a, S),
    {
      getRootProps: O,
      active: F,
      focusVisible: B,
      rootRef: E,
    } = ir({ disabled: i, rootRef: k }),
    _ = g.useMemo(() => Array.from(T.keys()), [T]),
    z = g.useCallback(
      (J) => {
        if (t !== void 0) {
          const Z = _.find((oe) => t(oe, J));
          return T.get(Z);
        }
        return T.get(J);
      },
      [T, t, _],
    ),
    L = g.useCallback(
      (J) => {
        var Z;
        const oe = z(J);
        return (Z = oe == null ? void 0 : oe.disabled) != null ? Z : !1;
      },
      [z],
    ),
    V = g.useCallback(
      (J) => {
        const Z = z(J);
        return Z ? $(Z) : "";
      },
      [z, $],
    ),
    K = g.useMemo(() => ({ selectedValues: P, open: b }), [P, b]),
    X = g.useCallback(
      (J) => {
        var Z;
        return (Z = T.get(J)) == null ? void 0 : Z.id;
      },
      [T],
    ),
    fe = g.useCallback(
      (J, Z) => {
        if (s) v == null || v(J, Z);
        else {
          var oe;
          v == null || v(J, (oe = Z[0]) != null ? oe : null);
        }
      },
      [s, v],
    ),
    re = g.useCallback(
      (J, Z) => {
        m == null || m(J, Z ?? null);
      },
      [m],
    ),
    ae = g.useCallback(
      (J, Z, oe) => {
        if (
          Z === "open" &&
          (y == null || y(oe),
          oe === !1 && (J == null ? void 0 : J.type) !== "blur")
        ) {
          var te;
          (te = u.current) == null || te.focus();
        }
      },
      [y],
    ),
    Q = {
      getInitialState: () => {
        var J;
        return {
          highlightedValue: null,
          selectedValues: (J = I) != null ? J : [],
          open: r,
        };
      },
      getItemId: X,
      controlledProps: K,
      itemComparer: t,
      isItemDisabled: L,
      rootRef: E,
      onChange: fe,
      onHighlightChange: re,
      onStateChange: ae,
      reducerActionContext: g.useMemo(() => ({ multiple: s }), [s]),
      items: _,
      getItemAsString: V,
      selectionMode: s ? "multiple" : "single",
      stateReducer: z$,
    },
    {
      dispatch: A,
      getRootProps: N,
      contextValue: q,
      state: { open: ee, highlightedValue: ne, selectedValues: Pe },
      rootRef: et,
    } = vg(Q),
    Yt = (J) => (Z) => {
      var oe;
      if (
        (J == null || (oe = J.onMouseDown) == null || oe.call(J, Z),
        !Z.defaultMuiPrevented)
      ) {
        const te = { type: pa.buttonClick, event: Z };
        A(te);
      }
    };
  Rn(() => {
    if (ne != null) {
      var J;
      const Z = (J = z(ne)) == null ? void 0 : J.ref;
      if (!S.current || !(Z != null && Z.current)) return;
      const oe = S.current.getBoundingClientRect(),
        te = Z.current.getBoundingClientRect();
      te.top < oe.top
        ? (S.current.scrollTop -= oe.top - te.top)
        : te.bottom > oe.bottom &&
          (S.current.scrollTop += te.bottom - oe.bottom);
    }
  }, [ne, z]);
  const ye = g.useCallback((J) => z(J), [z]),
    Ce = (J = {}) =>
      h({}, J, {
        onMouseDown: Yt(J),
        ref: et,
        role: "combobox",
        "aria-expanded": ee,
        "aria-controls": R,
      }),
    me = (J = {}) => {
      const Z = pt(J),
        oe = fo(O, N),
        te = fo(oe, Ce);
      return h({}, J, te(Z));
    },
    Qt = (J = {}) =>
      h({}, J, {
        id: R,
        role: "listbox",
        "aria-multiselectable": s ? "true" : void 0,
        ref: M,
        onMouseDown: D$,
      });
  g.useDebugValue({ selectedOptions: Pe, highlightedOption: ne, open: ee });
  const qt = g.useMemo(() => h({}, q, w), [q, w]);
  let Be;
  e.multiple ? (Be = Pe) : (Be = Pe.length > 0 ? Pe[0] : null);
  let Xe;
  if (s) Xe = Be.map((J) => ye(J)).filter((J) => J !== void 0);
  else {
    var we;
    Xe = (we = ye(Be)) != null ? we : null;
  }
  const ht = (J) => (Z) => {
    var oe;
    if (
      (J == null || (oe = J.onChange) == null || oe.call(J, Z),
      Z.defaultMuiPrevented)
    )
      return;
    const te = T.get(Z.target.value);
    Z.target.value === ""
      ? A({ type: Ie.clearSelection })
      : te !== void 0 &&
        A({ type: pa.browserAutoFill, item: te.value, event: Z });
  };
  return {
    buttonActive: F,
    buttonFocusVisible: B,
    buttonRef: E,
    contextValue: qt,
    disabled: i,
    dispatch: A,
    getButtonProps: me,
    getHiddenInputProps: (J = {}) => {
      const Z = pt(J);
      return h(
        {
          name: c,
          tabIndex: -1,
          "aria-hidden": !0,
          required: d ? !0 : void 0,
          value: f(Xe),
          style: _$,
        },
        J,
        { onChange: ht(Z) },
      );
    },
    getListboxProps: Qt,
    getOptionMetadata: ye,
    listboxRef: et,
    open: ee,
    options: _,
    value: Be,
    highlightedOption: ne,
  };
}
function L$(e) {
  const { value: t, children: n } = e,
    {
      dispatch: r,
      getItemIndex: o,
      getItemState: i,
      registerItem: l,
      totalSubitemCount: a,
    } = t,
    s = g.useMemo(
      () => ({ dispatch: r, getItemState: i, getItemIndex: o }),
      [r, o, i],
    ),
    c = g.useMemo(
      () => ({ getItemIndex: o, registerItem: l, totalSubitemCount: a }),
      [l, o, a],
    );
  return C.jsx(ns.Provider, {
    value: c,
    children: C.jsx(Rr.Provider, { value: s, children: n }),
  });
}
function zg(e) {
  const {
      checked: t,
      defaultChecked: n,
      disabled: r,
      onBlur: o,
      onChange: i,
      onFocus: l,
      onFocusVisible: a,
      readOnly: s,
      required: c,
    } = e,
    [d, v] = ya({
      controlled: t,
      default: !!n,
      name: "Switch",
      state: "checked",
    }),
    m = (P) => (D) => {
      var w;
      D.nativeEvent.defaultPrevented ||
        (v(D.target.checked),
        i == null || i(D),
        (w = P.onChange) == null || w.call(P, D));
    },
    { isFocusVisibleRef: y, onBlur: b, onFocus: x, ref: $ } = Ca(),
    [f, p] = g.useState(!1);
  r && f && p(!1),
    g.useEffect(() => {
      y.current = f;
    }, [f, y]);
  const u = g.useRef(null),
    k = (P) => (D) => {
      var w;
      u.current || (u.current = D.currentTarget),
        x(D),
        y.current === !0 && (p(!0), a == null || a(D)),
        l == null || l(D),
        (w = P.onFocus) == null || w.call(P, D);
    },
    S = (P) => (D) => {
      var w;
      b(D),
        y.current === !1 && p(!1),
        o == null || o(D),
        (w = P.onBlur) == null || w.call(P, D);
    },
    R = ke($, u);
  return {
    checked: d,
    disabled: !!r,
    focusVisible: f,
    getInputProps: (P = {}) =>
      h(
        {
          checked: t,
          defaultChecked: n,
          disabled: r,
          readOnly: s,
          ref: R,
          required: c,
          type: "checkbox",
        },
        P,
        { onChange: m(P), onFocus: k(P), onBlur: S(P) },
      ),
    inputRef: R,
    readOnly: !!s,
  };
}
const B$ = [
    "className",
    "elementType",
    "ownerState",
    "externalForwardedProps",
    "getSlotOwnerState",
    "internalForwardedProps",
  ],
  O$ = ["component", "slots", "slotProps"],
  M$ = ["component"];
function U(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: l,
      internalForwardedProps: a,
    } = t,
    s = Y(t, B$),
    {
      component: c,
      slots: d = { [e]: void 0 },
      slotProps: v = { [e]: void 0 },
    } = i,
    m = Y(i, O$),
    y = d[e] || r,
    b = ug(v[e], o),
    x = dg(
      h({ className: n }, s, {
        externalForwardedProps: e === "root" ? m : void 0,
        externalSlotProps: b,
      }),
    ),
    {
      props: { component: $ },
      internalRef: f,
    } = x,
    p = Y(x.props, M$),
    u = ke(f, b == null ? void 0 : b.ref, t.ref),
    k = l ? l(p) : {},
    S = h({}, o, k),
    R = e === "root" ? $ || c : $,
    I = cg(
      y,
      h(
        {},
        e === "root" && !c && !d[e] && a,
        e !== "root" && !d[e] && a,
        p,
        R && { as: R },
        { ref: u },
      ),
      S,
    );
  return (
    Object.keys(k).forEach((P) => {
      delete I[P];
    }),
    [y, I]
  );
}
function A$(e) {
  return _i("MuiBreadcrumbs", e);
}
Ei("MuiBreadcrumbs", [
  "root",
  "ol",
  "li",
  "separator",
  "sizeSm",
  "sizeMd",
  "sizeLg",
]);
function j$(e) {
  return ce("MuiTypography", e);
}
ue("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "title-lg",
  "title-md",
  "title-sm",
  "body-lg",
  "body-md",
  "body-sm",
  "body-xs",
  "noWrap",
  "gutterBottom",
  "startDecorator",
  "endDecorator",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
]);
const F$ = ["color", "textColor"],
  N$ = [
    "component",
    "gutterBottom",
    "noWrap",
    "level",
    "levelMapping",
    "children",
    "endDecorator",
    "startDecorator",
    "variant",
    "slots",
    "slotProps",
  ],
  go = g.createContext(!1),
  os = g.createContext(!1),
  H$ = (e) => {
    const { gutterBottom: t, noWrap: n, level: r, color: o, variant: i } = e,
      l = {
        root: [
          "root",
          r,
          t && "gutterBottom",
          n && "noWrap",
          o && `color${W(o)}`,
          i && `variant${W(i)}`,
        ],
        startDecorator: ["startDecorator"],
        endDecorator: ["endDecorator"],
      };
    return le(l, j$, {});
  },
  V$ = H("span", {
    name: "JoyTypography",
    slot: "StartDecorator",
    overridesResolver: (e, t) => t.startDecorator,
  })({
    display: "inline-flex",
    marginInlineEnd: "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)",
  }),
  W$ = H("span", {
    name: "JoyTypography",
    slot: "endDecorator",
    overridesResolver: (e, t) => t.endDecorator,
  })({
    display: "inline-flex",
    marginInlineStart: "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)",
  }),
  U$ = H("span", {
    name: "JoyTypography",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l;
    const a =
      t.level !== "inherit"
        ? (n = e.typography[t.level]) == null
          ? void 0
          : n.lineHeight
        : "1";
    return h(
      { "--Icon-fontSize": `calc(1em * ${a})` },
      t.color && { "--Icon-color": "currentColor" },
      { margin: "var(--Typography-margin, 0px)" },
      t.nesting
        ? { display: "inline" }
        : h(
            { display: "block" },
            t.unstable_hasSkeleton && { position: "relative" },
          ),
      (t.startDecorator || t.endDecorator) &&
        h(
          { display: "flex", alignItems: "center" },
          t.nesting &&
            h(
              { display: "inline-flex" },
              t.startDecorator && { verticalAlign: "bottom" },
            ),
        ),
      t.level && t.level !== "inherit" && e.typography[t.level],
      {
        fontSize: `var(--Typography-fontSize, ${
          t.level &&
          t.level !== "inherit" &&
          (r = (o = e.typography[t.level]) == null ? void 0 : o.fontSize) !=
            null
            ? r
            : "inherit"
        })`,
      },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.color && {
        color: `var(--variant-plainColor, rgba(${
          (i = e.vars.palette[t.color]) == null ? void 0 : i.mainChannel
        } / 1))`,
      },
      t.variant &&
        h(
          {
            borderRadius: e.vars.radius.xs,
            paddingBlock: "min(0.1em, 4px)",
            paddingInline: "0.25em",
          },
          !t.nesting && { marginInline: "-0.25em" },
          (l = e.variants[t.variant]) == null ? void 0 : l[t.color],
        ),
    );
  }),
  Hp = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    "title-lg": "p",
    "title-md": "p",
    "title-sm": "p",
    "body-lg": "p",
    "body-md": "p",
    "body-sm": "p",
    "body-xs": "span",
    inherit: "p",
  },
  _g = g.forwardRef(function (t, n) {
    var r;
    const o = de({ props: t, name: "JoyTypography" }),
      { color: i, textColor: l } = o,
      a = Y(o, F$),
      s = g.useContext(go),
      c = g.useContext(os),
      d = yu(h({}, a, { color: l })),
      {
        component: v,
        gutterBottom: m = !1,
        noWrap: y = !1,
        level: b = "body-md",
        levelMapping: x = Hp,
        children: $,
        endDecorator: f,
        startDecorator: p,
        variant: u,
        slots: k = {},
        slotProps: S = {},
      } = d,
      R = Y(d, N$),
      I = (r = t.color) != null ? r : u ? i ?? "neutral" : i,
      P = s || c ? t.level || "inherit" : b,
      D = xo($, ["Skeleton"]),
      w = v || (s ? "span" : x[P] || Hp[P] || "span"),
      T = h({}, d, {
        level: P,
        component: w,
        color: I,
        gutterBottom: m,
        noWrap: y,
        nesting: s,
        variant: u,
        unstable_hasSkeleton: D,
      }),
      M = H$(T),
      O = h({}, R, { component: w, slots: k, slotProps: S }),
      [F, B] = U("root", {
        ref: n,
        className: M.root,
        elementType: U$,
        externalForwardedProps: O,
        ownerState: T,
      }),
      [E, _] = U("startDecorator", {
        className: M.startDecorator,
        elementType: V$,
        externalForwardedProps: O,
        ownerState: T,
      }),
      [z, L] = U("endDecorator", {
        className: M.endDecorator,
        elementType: W$,
        externalForwardedProps: O,
        ownerState: T,
      });
    return C.jsx(go.Provider, {
      value: !0,
      children: C.jsxs(
        F,
        h({}, B, {
          children: [
            p && C.jsx(E, h({}, _, { children: p })),
            D ? g.cloneElement($, { variant: $.props.variant || "inline" }) : $,
            f && C.jsx(z, h({}, L, { children: f })),
          ],
        }),
      ),
    });
  });
_g.muiName = "Typography";
const Ht = _g,
  K$ = [
    "children",
    "className",
    "size",
    "separator",
    "component",
    "slots",
    "slotProps",
  ],
  G$ = (e) => {
    const { size: t } = e,
      n = {
        root: ["root", t && `size${W(t)}`],
        li: ["li"],
        ol: ["ol"],
        separator: ["separator"],
      };
    return le(n, A$, {});
  },
  J$ = H("nav", {
    name: "JoyBreadcrumbs",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) =>
    h(
      {},
      t.size === "sm" && {
        "--Icon-fontSize": e.vars.fontSize.lg,
        gap: "var(--Breadcrumbs-gap, 0.25rem)",
        padding: "0.5rem",
      },
      t.size === "md" && {
        "--Icon-fontSize": e.vars.fontSize.xl,
        gap: "var(--Breadcrumbs-gap, 0.375rem)",
        padding: "0.75rem",
      },
      t.size === "lg" && {
        "--Icon-fontSize": e.vars.fontSize.xl2,
        gap: "var(--Breadcrumbs-gap, 0.5rem)",
        padding: "1rem",
      },
      e.typography[`body-${t.size}`],
    ),
  ),
  X$ = H("ol", {
    name: "JoyBreadcrumbs",
    slot: "Ol",
    overridesResolver: (e, t) => t.ol,
  })({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "inherit",
    padding: 0,
    margin: 0,
    listStyle: "none",
  }),
  Y$ = H("li", {
    name: "JoyBreadcrumbs",
    slot: "Li",
    overridesResolver: (e, t) => t.li,
  })({ display: "flex", alignItems: "center" }),
  Q$ = H("li", {
    name: "JoyBreadcrumbs",
    slot: "Separator",
    overridesResolver: (e, t) => t.separator,
  })({ display: "flex", userSelect: "none" }),
  q$ = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyBreadcrumbs" }),
      {
        children: o,
        className: i,
        size: l = "md",
        separator: a = "/",
        component: s,
        slots: c = {},
        slotProps: d = {},
      } = r,
      v = Y(r, K$),
      m = h({}, r, { separator: a, size: l }),
      y = G$(m),
      b = h({}, v, { component: s, slots: c, slotProps: d }),
      [x, $] = U("root", {
        ref: n,
        className: Ve(y.root, i),
        elementType: J$,
        externalForwardedProps: b,
        ownerState: m,
      }),
      [f, p] = U("ol", {
        className: y.ol,
        elementType: X$,
        externalForwardedProps: b,
        ownerState: m,
      }),
      [u, k] = U("li", {
        className: y.li,
        elementType: Y$,
        externalForwardedProps: b,
        ownerState: m,
      }),
      [S, R] = U("separator", {
        additionalProps: { "aria-hidden": !0 },
        className: y.separator,
        elementType: Q$,
        externalForwardedProps: b,
        ownerState: m,
      }),
      I = g.Children.toArray(o)
        .filter((P) => g.isValidElement(P))
        .map((P, D) => {
          var w;
          return C.jsx(
            u,
            h({}, k, {
              children: xo(P, ["Typography"])
                ? g.cloneElement(P, {
                    component: (w = P.props.component) != null ? w : "span",
                  })
                : P,
            }),
            `child-${D}`,
          );
        });
    return C.jsx(os.Provider, {
      value: !0,
      children: C.jsx(
        x,
        h({}, $, {
          children: C.jsx(
            f,
            h({}, p, {
              children: I.reduce(
                (P, D, w) => (
                  w < I.length - 1
                    ? (P = P.concat(
                        D,
                        C.jsx(S, h({}, R, { children: a }), `separator-${w}`),
                      ))
                    : P.push(D),
                  P
                ),
                [],
              ),
            }),
          ),
        }),
      ),
    });
  }),
  Z$ = q$;
function e2(e) {
  return ce("MuiLink", e);
}
const t2 = ue("MuiLink", [
    "root",
    "disabled",
    "focusVisible",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "focusVisible",
    "variantPlain",
    "variantOutlined",
    "variantSoft",
    "variantSolid",
    "underlineNone",
    "underlineHover",
    "underlineAlways",
    "h1",
    "h2",
    "h3",
    "h4",
    "title-lg",
    "title-md",
    "title-sm",
    "body-lg",
    "body-md",
    "body-sm",
    "body-xs",
    "startDecorator",
    "endDecorator",
  ]),
  Vp = t2,
  n2 = ["color", "textColor", "variant"],
  r2 = [
    "children",
    "disabled",
    "onBlur",
    "onFocus",
    "level",
    "overlay",
    "underline",
    "endDecorator",
    "startDecorator",
    "component",
    "slots",
    "slotProps",
  ],
  o2 = (e) => {
    const {
        level: t,
        color: n,
        variant: r,
        underline: o,
        focusVisible: i,
        disabled: l,
      } = e,
      a = {
        root: [
          "root",
          n && `color${W(n)}`,
          l && "disabled",
          i && "focusVisible",
          t,
          o && `underline${W(o)}`,
          r && `variant${W(r)}`,
        ],
        startDecorator: ["startDecorator"],
        endDecorator: ["endDecorator"],
      };
    return le(a, e2, {});
  },
  i2 = H("span", {
    name: "JoyLink",
    slot: "StartDecorator",
    overridesResolver: (e, t) => t.startDecorator,
  })(({ ownerState: e }) => {
    var t;
    return h(
      {
        display: "inline-flex",
        marginInlineEnd: "clamp(4px, var(--Link-gap, 0.375em), 0.75rem)",
      },
      typeof e.startDecorator != "string" &&
        (e.alignItems === "flex-start" ||
          ((t = e.sx) == null ? void 0 : t.alignItems) === "flex-start") && {
          marginTop: "2px",
        },
    );
  }),
  l2 = H("span", {
    name: "JoyLink",
    slot: "endDecorator",
    overridesResolver: (e, t) => t.endDecorator,
  })(({ ownerState: e }) => {
    var t;
    return h(
      {
        display: "inline-flex",
        marginInlineStart: "clamp(4px, var(--Link-gap, 0.25em), 0.5rem)",
      },
      typeof e.startDecorator != "string" &&
        (e.alignItems === "flex-start" ||
          ((t = e.sx) == null ? void 0 : t.alignItems) === "flex-start") && {
          marginTop: "2px",
        },
    );
  }),
  a2 = H("a", {
    name: "JoyLink",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l, a, s;
    return [
      h(
        {
          "--Icon-fontSize": "1.25em",
          "--Icon-color": "currentColor",
          "--CircularProgress-size": "1.25em",
          "--CircularProgress-thickness": "3px",
        },
        t.level && t.level !== "inherit" && e.typography[t.level],
        t.level === "inherit" && { font: "inherit" },
        t.underline === "none" && { textDecoration: "none" },
        t.underline === "hover" && {
          textDecoration: "none",
          "&:hover": {
            "@media (hover: hover)": { textDecorationLine: "underline" },
          },
        },
        t.underline === "always" && { textDecoration: "underline" },
        t.startDecorator && { verticalAlign: "bottom" },
        {
          textDecorationThickness: "max(0.08em, 1px)",
          textUnderlineOffset: "0.15em",
          display: "inline-flex",
          alignItems: "center",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "transparent",
          outline: 0,
          border: 0,
          margin: 0,
          borderRadius: e.vars.radius.xs,
          padding: 0,
          cursor: "pointer",
          textDecorationColor: `var(--variant-outlinedBorder, rgba(${
            (n = e.vars.palette[t.color]) == null ? void 0 : n.mainChannel
          } / var(--Link-underlineOpacity, 0.72)))`,
        },
        t.variant
          ? h(
              { paddingBlock: "min(0.1em, 4px)", paddingInline: "0.25em" },
              !t.nesting && { marginInline: "-0.25em" },
            )
          : {
              color: `var(--variant-plainColor, rgba(${
                (r = e.vars.palette[t.color]) == null ? void 0 : r.mainChannel
              } / 1))`,
              [`&.${Vp.disabled}`]: {
                pointerEvents: "none",
                color: `var(--variant-plainDisabledColor, rgba(${
                  (o = e.vars.palette[t.color]) == null ? void 0 : o.mainChannel
                } / 0.6))`,
              },
            },
        {
          userSelect: t.component === "button" ? "none" : void 0,
          MozAppearance: "none",
          WebkitAppearance: "none",
          "&::-moz-focus-inner": { borderStyle: "none" },
        },
        t.overlay
          ? {
              position: "initial",
              "&::after": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                borderRadius: "var(--unstable_actionRadius, inherit)",
                margin: "var(--unstable_actionMargin)",
              },
              [`${e.focus.selector}`]: { "&::after": e.focus.default },
            }
          : { position: "relative", [e.focus.selector]: e.focus.default },
      ),
      t.variant &&
        h({}, (i = e.variants[t.variant]) == null ? void 0 : i[t.color], {
          "&:hover": {
            "@media (hover: hover)":
              (l = e.variants[`${t.variant}Hover`]) == null
                ? void 0
                : l[t.color],
          },
          "&:active":
            (a = e.variants[`${t.variant}Active`]) == null
              ? void 0
              : a[t.color],
          [`&.${Vp.disabled}`]:
            (s = e.variants[`${t.variant}Disabled`]) == null
              ? void 0
              : s[t.color],
        }),
    ];
  }),
  s2 = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyLink" }),
      { color: o = "primary", textColor: i, variant: l } = r,
      a = Y(r, n2),
      s = g.useContext(go),
      c = g.useContext(os),
      d = yu(h({}, a, { color: i })),
      {
        children: v,
        disabled: m = !1,
        onBlur: y,
        onFocus: b,
        level: x = "body-md",
        overlay: $ = !1,
        underline: f = "hover",
        endDecorator: p,
        startDecorator: u,
        component: k,
        slots: S = {},
        slotProps: R = {},
      } = d,
      I = Y(d, r2),
      P = s || c ? t.level || "inherit" : x,
      { isFocusVisibleRef: D, onBlur: w, onFocus: T, ref: M } = Ca(),
      [O, F] = g.useState(!1),
      B = ke(n, M),
      E = (A) => {
        w(A), D.current === !1 && F(!1), y && y(A);
      },
      _ = (A) => {
        T(A), D.current === !0 && F(!0), b && b(A);
      },
      z = h({}, d, {
        color: o,
        disabled: m,
        focusVisible: O,
        underline: f,
        variant: l,
        level: P,
        overlay: $,
        nesting: s,
      }),
      L = o2(z),
      V = h({}, I, { component: k, slots: S, slotProps: R }),
      [K, X] = U("root", {
        additionalProps: { onBlur: E, onFocus: _ },
        ref: B,
        className: L.root,
        elementType: a2,
        externalForwardedProps: V,
        ownerState: z,
      }),
      [fe, re] = U("startDecorator", {
        className: L.startDecorator,
        elementType: i2,
        externalForwardedProps: V,
        ownerState: z,
      }),
      [ae, Q] = U("endDecorator", {
        className: L.endDecorator,
        elementType: l2,
        externalForwardedProps: V,
        ownerState: z,
      });
    return C.jsx(go.Provider, {
      value: !0,
      children: C.jsxs(
        K,
        h({}, X, {
          children: [
            u && C.jsx(fe, h({}, re, { children: u })),
            xo(v, ["Skeleton"])
              ? g.cloneElement(v, { variant: v.props.variant || "inline" })
              : v,
            p && C.jsx(ae, h({}, Q, { children: p })),
          ],
        }),
      ),
    });
  }),
  Wp = s2;
var kd = {},
  Eg = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Eg);
var Ln = Eg.exports,
  Hs = {};
function c2(e, t) {
  return h(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t,
  );
}
const u2 = { black: "#000", white: "#fff" },
  $i = u2,
  d2 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  f2 = d2,
  p2 = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  wr = p2,
  v2 = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  zr = v2,
  m2 = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Mo = m2,
  h2 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  _r = h2,
  g2 = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Er = g2,
  y2 = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Dr = y2,
  x2 = ["mode", "contrastThreshold", "tonalOffset"],
  Up = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: $i.white, default: $i.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Vs = {
    text: {
      primary: $i.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: $i.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Kp(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
        ? (e.light = Px(e.main, o))
        : t === "dark" && (e.dark = Rx(e.main, i)));
}
function C2(e = "light") {
  return e === "dark"
    ? { main: _r[200], light: _r[50], dark: _r[400] }
    : { main: _r[700], light: _r[400], dark: _r[800] };
}
function b2(e = "light") {
  return e === "dark"
    ? { main: wr[200], light: wr[50], dark: wr[400] }
    : { main: wr[500], light: wr[300], dark: wr[700] };
}
function S2(e = "light") {
  return e === "dark"
    ? { main: zr[500], light: zr[300], dark: zr[700] }
    : { main: zr[700], light: zr[400], dark: zr[800] };
}
function k2(e = "light") {
  return e === "dark"
    ? { main: Er[400], light: Er[300], dark: Er[700] }
    : { main: Er[700], light: Er[500], dark: Er[900] };
}
function $2(e = "light") {
  return e === "dark"
    ? { main: Dr[400], light: Dr[300], dark: Dr[700] }
    : { main: Dr[800], light: Dr[500], dark: Dr[900] };
}
function I2(e = "light") {
  return e === "dark"
    ? { main: Mo[400], light: Mo[300], dark: Mo[700] }
    : { main: "#ed6c02", light: Mo[500], dark: Mo[900] };
}
function R2(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Y(e, x2),
    i = e.primary || C2(t),
    l = e.secondary || b2(t),
    a = e.error || S2(t),
    s = e.info || k2(t),
    c = e.success || $2(t),
    d = e.warning || I2(t);
  function v(x) {
    return Ix(x, Vs.text.primary) >= n ? Vs.text.primary : Up.text.primary;
  }
  const m = ({
      color: x,
      name: $,
      mainShade: f = 500,
      lightShade: p = 300,
      darkShade: u = 700,
    }) => {
      if (
        ((x = h({}, x)),
        !x.main && x[f] && (x.main = x[f]),
        !x.hasOwnProperty("main"))
      )
        throw new Error(qn(11, $ ? ` (${$})` : "", f));
      if (typeof x.main != "string")
        throw new Error(qn(12, $ ? ` (${$})` : "", JSON.stringify(x.main)));
      return (
        Kp(x, "light", p, r),
        Kp(x, "dark", u, r),
        x.contrastText || (x.contrastText = v(x.main)),
        x
      );
    },
    y = { dark: Vs, light: Up };
  return Ke(
    h(
      {
        common: h({}, $i),
        mode: t,
        primary: m({ color: i, name: "primary" }),
        secondary: m({
          color: l,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: m({ color: a, name: "error" }),
        warning: m({ color: d, name: "warning" }),
        info: m({ color: s, name: "info" }),
        success: m({ color: c, name: "success" }),
        grey: f2,
        contrastThreshold: n,
        getContrastText: v,
        augmentColor: m,
        tonalOffset: r,
      },
      y[t],
    ),
    o,
  );
}
const P2 = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function w2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Gp = { textTransform: "uppercase" },
  Jp = '"Roboto", "Helvetica", "Arial", sans-serif';
function z2(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Jp,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: s = 700,
      htmlFontSize: c = 16,
      allVariants: d,
      pxToRem: v,
    } = n,
    m = Y(n, P2),
    y = o / 14,
    b = v || ((f) => `${(f / c) * y}rem`),
    x = (f, p, u, k, S) =>
      h(
        { fontFamily: r, fontWeight: f, fontSize: b(p), lineHeight: u },
        r === Jp ? { letterSpacing: `${w2(k / p)}em` } : {},
        S,
        d,
      ),
    $ = {
      h1: x(i, 96, 1.167, -1.5),
      h2: x(i, 60, 1.2, -0.5),
      h3: x(l, 48, 1.167, 0),
      h4: x(l, 34, 1.235, 0.25),
      h5: x(l, 24, 1.334, 0),
      h6: x(a, 20, 1.6, 0.15),
      subtitle1: x(l, 16, 1.75, 0.15),
      subtitle2: x(a, 14, 1.57, 0.1),
      body1: x(l, 16, 1.5, 0.15),
      body2: x(l, 14, 1.43, 0.15),
      button: x(a, 14, 1.75, 0.4, Gp),
      caption: x(l, 12, 1.66, 0.4),
      overline: x(l, 12, 2.66, 1, Gp),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Ke(
    h(
      {
        htmlFontSize: c,
        pxToRem: b,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: l,
        fontWeightMedium: a,
        fontWeightBold: s,
      },
      $,
    ),
    m,
    { clone: !1 },
  );
}
const _2 = 0.2,
  E2 = 0.14,
  D2 = 0.12;
function $e(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_2})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${E2})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${D2})`,
  ].join(",");
}
const T2 = [
    "none",
    $e(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    $e(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    $e(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    $e(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    $e(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    $e(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    $e(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    $e(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    $e(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    $e(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    $e(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    $e(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    $e(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    $e(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    $e(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    $e(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    $e(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    $e(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    $e(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    $e(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    $e(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    $e(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    $e(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    $e(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  L2 = T2,
  B2 = ["duration", "easing", "delay"],
  O2 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  M2 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Xp(e) {
  return `${Math.round(e)}ms`;
}
function A2(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function j2(e) {
  const t = h({}, O2, e.easing),
    n = h({}, M2, e.duration);
  return h(
    {
      getAutoHeightDuration: A2,
      create: (o = ["all"], i = {}) => {
        const {
          duration: l = n.standard,
          easing: a = t.easeInOut,
          delay: s = 0,
        } = i;
        return (
          Y(i, B2),
          (Array.isArray(o) ? o : [o])
            .map(
              (c) =>
                `${c} ${typeof l == "string" ? l : Xp(l)} ${a} ${
                  typeof s == "string" ? s : Xp(s)
                }`,
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n },
  );
}
const F2 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  N2 = F2,
  H2 = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function V2(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = Y(e, H2);
  if (e.vars) throw new Error(qn(18));
  const a = R2(r),
    s = hu(e);
  let c = Ke(s, {
    mixins: c2(s.breakpoints, n),
    palette: a,
    shadows: L2.slice(),
    typography: z2(a, i),
    transitions: j2(o),
    zIndex: h({}, N2),
  });
  return (
    (c = Ke(c, l)),
    (c = t.reduce((d, v) => Ke(d, v), c)),
    (c.unstable_sxConfig = h({}, Bi, l == null ? void 0 : l.unstable_sxConfig)),
    (c.unstable_sx = function (v) {
      return Oi({ sx: v, theme: this });
    }),
    c
  );
}
const W2 = V2(),
  Dg = W2,
  Tg = "$$material";
function U2({ props: e, name: t }) {
  return Zv({ props: e, name: t, defaultTheme: Dg, themeId: Tg });
}
const K2 = (e) => Sl(e) && e !== "classes",
  G2 = qv({ themeId: Tg, defaultTheme: Dg, rootShouldForwardProp: K2 }),
  J2 = G2;
function X2(e) {
  return _i("MuiSvgIcon", e);
}
Ei("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const Y2 = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  Q2 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${W(t)}`, `fontSize${W(n)}`],
      };
    return le(o, X2, r);
  },
  q2 = J2("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${W(n.color)}`],
        t[`fontSize${W(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l, a, s, c, d, v, m, y, b;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (l = i.pxToRem) == null
            ? void 0
            : l.call(i, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (s = a.pxToRem) == null
            ? void 0
            : s.call(a, 24)) || "1.5rem",
        large:
          ((c = e.typography) == null || (d = c.pxToRem) == null
            ? void 0
            : d.call(c, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (v =
          (m = (e.vars || e).palette) == null || (m = m[t.color]) == null
            ? void 0
            : m.main) != null
          ? v
          : {
              action:
                (y = (e.vars || e).palette) == null || (y = y.action) == null
                  ? void 0
                  : y.active,
              disabled:
                (b = (e.vars || e).palette) == null || (b = b.action) == null
                  ? void 0
                  : b.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Lg = g.forwardRef(function (t, n) {
    const r = U2({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: l = "inherit",
        component: a = "svg",
        fontSize: s = "medium",
        htmlColor: c,
        inheritViewBox: d = !1,
        titleAccess: v,
        viewBox: m = "0 0 24 24",
      } = r,
      y = Y(r, Y2),
      b = g.isValidElement(o) && o.type === "svg",
      x = h({}, r, {
        color: l,
        component: a,
        fontSize: s,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: m,
        hasSvgAsChild: b,
      }),
      $ = {};
    d || ($.viewBox = m);
    const f = Q2(x);
    return C.jsxs(
      q2,
      h(
        {
          as: a,
          className: Ve(f.root, i),
          focusable: "false",
          color: c,
          "aria-hidden": v ? void 0 : !0,
          role: v ? "img" : void 0,
          ref: n,
        },
        $,
        y,
        b && o.props,
        {
          ownerState: x,
          children: [
            b ? o.props.children : o,
            v ? C.jsx("title", { children: v }) : null,
          ],
        },
      ),
    );
  });
Lg.muiName = "SvgIcon";
const Yp = Lg;
function Wi(e, t) {
  function n(r, o) {
    return C.jsx(
      Yp,
      h({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }),
    );
  }
  return (n.muiName = Yp.muiName), g.memo(g.forwardRef(n));
}
const Z2 = {
    configure: (e) => {
      ou.configure(e);
    },
  },
  eI = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: W,
        createChainedFunction: Ys,
        createSvgIcon: Wi,
        debounce: G0,
        deprecatedPropType: J0,
        isMuiElement: xo,
        ownerDocument: ln,
        ownerWindow: ga,
        requirePropFactory: X0,
        setRef: Ml,
        unstable_ClassNameGenerator: Z2,
        unstable_useEnhancedEffect: Rn,
        unstable_useId: $t,
        unsupportedProp: q0,
        useControlled: ya,
        useEventCallback: Qs,
        useForkRef: ke,
        useIsFocusVisible: Ca,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  tI = $0(eI);
var Qp;
function Bn() {
  return (
    Qp ||
      ((Qp = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = tI;
      })(Hs)),
    Hs
  );
}
var nI = Ln;
Object.defineProperty(kd, "__esModule", { value: !0 });
var $d = (kd.default = void 0),
  rI = nI(Bn()),
  oI = C,
  iI = (0, rI.default)(
    (0, oI.jsx)("path", {
      d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
    }),
    "HomeRounded",
  );
$d = kd.default = iI;
var Id = {},
  lI = Ln;
Object.defineProperty(Id, "__esModule", { value: !0 });
var Bg = (Id.default = void 0),
  aI = lI(Bn()),
  sI = C,
  cI = (0, aI.default)(
    (0, sI.jsx)("path", {
      d: "M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z",
    }),
    "ChevronRightRounded",
  );
Bg = Id.default = cI;
function uI(e) {
  return ce("MuiDivider", e);
}
ue("MuiDivider", [
  "root",
  "horizontal",
  "vertical",
  "insetContext",
  "insetNone",
]);
const dI = [
    "className",
    "children",
    "component",
    "inset",
    "orientation",
    "role",
    "slots",
    "slotProps",
  ],
  fI = (e) => {
    const { orientation: t, inset: n } = e,
      r = { root: ["root", t, n && `inset${W(n)}`] };
    return le(r, uI, {});
  },
  pI = H("hr", {
    name: "JoyDivider",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) =>
    h(
      {
        "--Divider-thickness": "1px",
        "--Divider-lineColor": e.vars.palette.divider,
      },
      t.inset === "none" && { "--_Divider-inset": "0px" },
      t.inset === "context" && {
        "--_Divider-inset": "var(--Divider-inset, 0px)",
      },
      {
        margin: "initial",
        marginInline:
          t.orientation === "vertical" ? "initial" : "var(--_Divider-inset)",
        marginBlock:
          t.orientation === "vertical" ? "var(--_Divider-inset)" : "initial",
        position: "relative",
        alignSelf: "stretch",
        flexShrink: 0,
      },
      t.children
        ? h(
            {
              "--Divider-gap": e.spacing(1),
              "--Divider-childPosition": "50%",
              display: "flex",
              flexDirection: t.orientation === "vertical" ? "column" : "row",
              alignItems: "center",
              whiteSpace: "nowrap",
              textAlign: "center",
              border: 0,
            },
            e.typography["body-sm"],
            {
              "&::before, &::after": {
                position: "relative",
                inlineSize:
                  t.orientation === "vertical"
                    ? "var(--Divider-thickness)"
                    : "initial",
                blockSize:
                  t.orientation === "vertical"
                    ? "initial"
                    : "var(--Divider-thickness)",
                backgroundColor: "var(--Divider-lineColor)",
                content: '""',
              },
              "&::before": {
                marginInlineEnd:
                  t.orientation === "vertical"
                    ? "initial"
                    : "min(var(--Divider-childPosition) * 999, var(--Divider-gap))",
                marginBlockEnd:
                  t.orientation === "vertical"
                    ? "min(var(--Divider-childPosition) * 999, var(--Divider-gap))"
                    : "initial",
                flexBasis: "var(--Divider-childPosition)",
              },
              "&::after": {
                marginInlineStart:
                  t.orientation === "vertical"
                    ? "initial"
                    : "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",
                marginBlockStart:
                  t.orientation === "vertical"
                    ? "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))"
                    : "initial",
                flexBasis: "calc(100% - var(--Divider-childPosition))",
              },
            },
          )
        : {
            border: "none",
            listStyle: "none",
            backgroundColor: "var(--Divider-lineColor)",
            inlineSize:
              t.orientation === "vertical"
                ? "var(--Divider-thickness)"
                : "initial",
            blockSize:
              t.orientation === "vertical"
                ? "initial"
                : "var(--Divider-thickness)",
          },
    ),
  ),
  Og = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyDivider" }),
      {
        className: o,
        children: i,
        component: l = i != null ? "div" : "hr",
        inset: a,
        orientation: s = "horizontal",
        role: c = l !== "hr" ? "separator" : void 0,
        slots: d = {},
        slotProps: v = {},
      } = r,
      m = Y(r, dI),
      y = h({}, r, { inset: a, role: c, orientation: s, component: l }),
      b = fI(y),
      x = h({}, m, { component: l, slots: d, slotProps: v }),
      [$, f] = U("root", {
        ref: n,
        className: Ve(b.root, o),
        elementType: pI,
        externalForwardedProps: x,
        ownerState: y,
        additionalProps: h(
          { as: l, role: c },
          c === "separator" &&
            s === "vertical" && { "aria-orientation": "vertical" },
        ),
      });
    return C.jsx($, h({}, f, { children: i }));
  });
Og.muiName = "Divider";
const Rd = Og;
function vI(e) {
  return ce("MuiIconButton", e);
}
ue("MuiIconButton", [
  "root",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "focusVisible",
  "disabled",
  "sizeSm",
  "sizeMd",
  "sizeLg",
]);
const mI = g.createContext({}),
  Pd = mI,
  hI = g.createContext(void 0),
  Mg = hI,
  gI = [
    "children",
    "action",
    "component",
    "color",
    "disabled",
    "variant",
    "size",
    "slots",
    "slotProps",
  ],
  yI = (e) => {
    const {
        color: t,
        disabled: n,
        focusVisible: r,
        focusVisibleClassName: o,
        size: i,
        variant: l,
      } = e,
      a = {
        root: [
          "root",
          n && "disabled",
          r && "focusVisible",
          l && `variant${W(l)}`,
          t && `color${W(t)}`,
          i && `size${W(i)}`,
        ],
      },
      s = le(a, vI, {});
    return r && o && (s.root += ` ${o}`), s;
  },
  Ag = H("button")(({ theme: e, ownerState: t }) => {
    var n, r, o, i;
    return [
      h(
        {
          "--Icon-margin": "initial",
          "--Icon-color":
            t.color !== "neutral" || t.variant === "solid"
              ? "currentColor"
              : e.vars.palette.text.icon,
        },
        t.instanceSize && {
          "--IconButton-size": { sm: "2rem", md: "2.25rem", lg: "2.75rem" }[
            t.instanceSize
          ],
        },
        t.size === "sm" && {
          "--Icon-fontSize": "calc(var(--IconButton-size, 2rem) / 1.6)",
          "--CircularProgress-size": "20px",
          "--CircularProgress-thickness": "2px",
          minWidth: "var(--IconButton-size, 2rem)",
          minHeight: "var(--IconButton-size, 2rem)",
          fontSize: e.vars.fontSize.sm,
          paddingInline: "2px",
        },
        t.size === "md" && {
          "--Icon-fontSize": "calc(var(--IconButton-size, 2.25rem) / 1.5)",
          "--CircularProgress-size": "20px",
          "--CircularProgress-thickness": "2px",
          minWidth: "var(--IconButton-size, 2.25rem)",
          minHeight: "var(--IconButton-size, 2.25rem)",
          fontSize: e.vars.fontSize.md,
          paddingInline: "0.25rem",
        },
        t.size === "lg" && {
          "--Icon-fontSize": "calc(var(--IconButton-size, 2.75rem) / 1.571)",
          "--CircularProgress-size": "28px",
          "--CircularProgress-thickness": "4px",
          minWidth: "var(--IconButton-size, 2.75rem)",
          minHeight: "var(--IconButton-size, 2.75rem)",
          fontSize: e.vars.fontSize.lg,
          paddingInline: "0.375rem",
        },
        {
          WebkitTapHighlightColor: "transparent",
          paddingBlock: 0,
          fontFamily: e.vars.fontFamily.body,
          fontWeight: e.vars.fontWeight.md,
          margin: "var(--IconButton-margin)",
          borderRadius: `var(--IconButton-radius, ${e.vars.radius.sm})`,
          border: "none",
          boxSizing: "border-box",
          backgroundColor: "transparent",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          [e.focus.selector]: h(
            { "--Icon-color": "currentColor" },
            e.focus.default,
          ),
        },
      ),
      h({}, (n = e.variants[t.variant]) == null ? void 0 : n[t.color], {
        "&:hover": {
          "@media (hover: hover)": h(
            { "--Icon-color": "currentColor" },
            (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color],
          ),
        },
        '&:active, &[aria-pressed="true"]': h(
          { "--Icon-color": "currentColor" },
          (o = e.variants[`${t.variant}Active`]) == null ? void 0 : o[t.color],
        ),
        "&:disabled":
          (i = e.variants[`${t.variant}Disabled`]) == null
            ? void 0
            : i[t.color],
      }),
    ];
  }),
  xI = H(Ag, {
    name: "JoyIconButton",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  jg = g.forwardRef(function (t, n) {
    var r;
    const o = de({ props: t, name: "JoyIconButton" }),
      {
        children: i,
        action: l,
        component: a = "button",
        color: s = "neutral",
        disabled: c,
        variant: d = "plain",
        size: v = "md",
        slots: m = {},
        slotProps: y = {},
      } = o,
      b = Y(o, gI),
      x = g.useContext(Pd),
      $ = g.useContext(Mg),
      f = t.variant || x.variant || d,
      p = t.size || x.size || v,
      u = t.color || x.color || s,
      k = (r = t.disabled) != null ? r : x.disabled || c,
      S = g.useRef(null),
      R = ke(S, n),
      {
        focusVisible: I,
        setFocusVisible: P,
        getRootProps: D,
      } = ir(h({}, o, { disabled: k, rootRef: R }));
    g.useImperativeHandle(
      l,
      () => ({
        focusVisible: () => {
          var _;
          P(!0), (_ = S.current) == null || _.focus();
        },
      }),
      [P],
    );
    const w = h({}, o, {
        component: a,
        color: u,
        disabled: k,
        variant: f,
        size: p,
        focusVisible: I,
        instanceSize: t.size,
      }),
      T = yI(w),
      M = (_) => {
        var z;
        let L = o.onClick;
        if (
          (typeof y.root == "function"
            ? (L = y.root(w).onClick)
            : y.root && (L = y.root.onClick),
          (z = L) == null || z(_),
          $)
        ) {
          var V;
          (V = $.onClick) == null || V.call($, _, o.value);
        }
      };
    let O = o["aria-pressed"];
    typeof y.root == "function"
      ? (O = y.root(w)["aria-pressed"])
      : y.root && (O = y.root["aria-pressed"]),
      $ != null &&
        $.value &&
        (Array.isArray($.value)
          ? (O = $.value.indexOf(o.value) !== -1)
          : (O = $.value === o.value));
    const F = h({}, b, { component: a, slots: m, slotProps: y }),
      [B, E] = U("root", {
        ref: n,
        className: T.root,
        elementType: xI,
        getSlotProps: D,
        externalForwardedProps: F,
        ownerState: w,
        additionalProps: { onClick: M, "aria-pressed": O },
      });
    return C.jsx(B, h({}, E, { children: i }));
  });
jg.muiName = "IconButton";
const wd = jg;
function CI(e) {
  return ce("MuiInput", e);
}
const bI = ue("MuiInput", [
    "root",
    "input",
    "formControl",
    "focused",
    "disabled",
    "error",
    "adornedStart",
    "adornedEnd",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "sizeSm",
    "sizeMd",
    "sizeLg",
    "variantPlain",
    "variantOutlined",
    "variantSoft",
    "variantSolid",
    "fullWidth",
    "startDecorator",
    "endDecorator",
  ]),
  Fg = bI,
  SI = g.createContext(void 0),
  tr = SI,
  kI = [
    "aria-describedby",
    "aria-label",
    "aria-labelledby",
    "autoComplete",
    "autoFocus",
    "className",
    "defaultValue",
    "disabled",
    "error",
    "id",
    "name",
    "onClick",
    "onChange",
    "onKeyDown",
    "onKeyUp",
    "onFocus",
    "onBlur",
    "placeholder",
    "readOnly",
    "required",
    "type",
    "value",
  ];
function $I(e, t) {
  const n = g.useContext(tr),
    {
      "aria-describedby": r,
      "aria-label": o,
      "aria-labelledby": i,
      autoComplete: l,
      autoFocus: a,
      className: s,
      defaultValue: c,
      disabled: d,
      error: v,
      id: m,
      name: y,
      onClick: b,
      onChange: x,
      onKeyDown: $,
      onKeyUp: f,
      onFocus: p,
      onBlur: u,
      placeholder: k,
      readOnly: S,
      required: R,
      type: I,
      value: P,
    } = e,
    D = Y(e, kI),
    {
      getRootProps: w,
      getInputProps: T,
      focused: M,
      error: O,
      disabled: F,
    } = zS({
      disabled: d ?? (n == null ? void 0 : n.disabled),
      defaultValue: c,
      error: v,
      onBlur: u,
      onClick: b,
      onChange: x,
      onFocus: p,
      required: R ?? (n == null ? void 0 : n.required),
      value: P,
    }),
    B = {
      [t.disabled]: F,
      [t.error]: O,
      [t.focused]: M,
      [t.formControl]: !!n,
      [s]: s,
    },
    E = { [t.disabled]: F };
  return h(
    {
      formControl: n,
      propsToForward: {
        "aria-describedby": r,
        "aria-label": o,
        "aria-labelledby": i,
        autoComplete: l,
        autoFocus: a,
        disabled: F,
        id: m,
        onKeyDown: $,
        onKeyUp: f,
        name: y,
        placeholder: k,
        readOnly: S,
        type: I,
      },
      rootStateClasses: B,
      inputStateClasses: E,
      getRootProps: w,
      getInputProps: T,
      focused: M,
      error: O,
      disabled: F,
    },
    D,
  );
}
const zd = (e) => (t) => `--${e ? `${e}-` : ""}${t.replace(/^--/, "")}`,
  Ii = "data-skip-inverted-colors",
  Ng = `& :not([${Ii}], [${Ii}] *)`,
  Hg = (e) => {
    var t, n, r, o, i, l, a, s, c, d, v, m, y, b, x, $, f, p, u, k, S, R;
    const I = zd(e.cssVarPrefix);
    return {
      "--variant-plainColor": "var(--variant-plainColor) !important",
      "--variant-plainHoverColor": "var(--variant-plainHoverColor) !important",
      "--variant-plainHoverBg": "var(--variant-plainHoverBg) !important",
      "--variant-plainActiveBg": "var(--variant-plainActiveBg) !important",
      "--variant-plainDisabledColor":
        "var(--variant-plainDisabledColor) !important",
      "--variant-outlinedColor": "var(--variant-outlinedColor) !important",
      "--variant-outlinedBorder": "var(--variant-outlinedBorder) !important",
      "--variant-outlinedHoverColor":
        "var(--variant-outlinedHoverColor) !important",
      "--variant-outlinedHoverBorder":
        "var(--variant-outlinedHoverBorder) !important",
      "--variant-outlinedHoverBg": "var(--variant-outlinedHoverBg) !important",
      "--variant-outlinedActiveBg":
        "var(--variant-outlinedActiveBg) !important",
      "--variant-outlinedDisabledColor":
        "var(--variant-outlinedDisabledColor) !important",
      "--variant-outlinedDisabledBorder":
        "var(--variant-outlinedDisabledBorder) !important",
      "--variant-softColor": "var(--variant-softColor) !important",
      "--variant-softHoverColor": "var(--variant-softHoverColor) !important",
      "--variant-softBg": "var(--variant-softBg) !important",
      "--variant-softHoverBg": "var(--variant-softHoverBg) !important",
      "--variant-softActiveBg": "var(--variant-softActiveBg) !important",
      "--variant-softActiveColor": "var(--variant-softActiveColor) !important",
      "--variant-softDisabledColor":
        "var(--variant-softDisabledColor) !important",
      "--variant-softDisabledBg": "var(--variant-softDisabledBg) !important",
      "--variant-solidColor": "var(--variant-solidColor) !important",
      "--variant-solidBg": "var(--variant-solidBg) !important",
      "--variant-solidHoverBg": "var(--variant-solidHoverBg) !important",
      "--variant-solidActiveBg": "var(--variant-solidActiveBg) !important",
      "--variant-solidDisabledColor":
        "var(--variant-solidDisabledColor) !important",
      "--variant-solidDisabledBg": "var(--variant-solidDisabledBg) !important",
      "--Badge-ringColor": "var(--Badge-ringColor) !important",
      colorScheme: "unset",
      [e.getColorSchemeSelector("light")]: {
        [I("--palette-focusVisible")]: `${
          (t = e.colorSchemes.light) == null ? void 0 : t.palette.focusVisible
        } !important`,
        [I("--palette-background-body")]: `${
          (n = e.colorSchemes.light) == null
            ? void 0
            : n.palette.background.body
        } !important`,
        [I("--palette-background-surface")]: `${
          (r = e.colorSchemes.light) == null
            ? void 0
            : r.palette.background.surface
        } !important`,
        [I("--palette-background-popup")]: `${
          (o = e.colorSchemes.light) == null
            ? void 0
            : o.palette.background.popup
        } !important`,
        [I("--palette-background-level1")]: `${
          (i = e.colorSchemes.light) == null
            ? void 0
            : i.palette.background.level1
        } !important`,
        [I("--palette-background-level2")]: `${
          (l = e.colorSchemes.light) == null
            ? void 0
            : l.palette.background.level2
        } !important`,
        [I("--palette-background-level3")]: `${
          (a = e.colorSchemes.light) == null
            ? void 0
            : a.palette.background.level3
        } !important`,
        [I("--palette-text-primary")]: `${
          (s = e.colorSchemes.light) == null ? void 0 : s.palette.text.primary
        } !important`,
        [I("--palette-text-secondary")]: `${
          (c = e.colorSchemes.light) == null ? void 0 : c.palette.text.secondary
        } !important`,
        [I("--palette-text-tertiary")]: `${
          (d = e.colorSchemes.light) == null ? void 0 : d.palette.text.tertiary
        } !important`,
        [I("--palette-divider")]: `${
          (v = e.colorSchemes.light) == null ? void 0 : v.palette.divider
        } !important`,
      },
      [e.getColorSchemeSelector("dark")]: {
        [I("--palette-focusVisible")]: `${
          (m = e.colorSchemes.dark) == null ? void 0 : m.palette.focusVisible
        } !important`,
        [I("--palette-background-body")]: `${
          (y = e.colorSchemes.dark) == null ? void 0 : y.palette.background.body
        } !important`,
        [I("--palette-background-surface")]: `${
          (b = e.colorSchemes.dark) == null
            ? void 0
            : b.palette.background.surface
        } !important`,
        [I("--palette-background-popup")]: `${
          (x = e.colorSchemes.dark) == null
            ? void 0
            : x.palette.background.popup
        } !important`,
        [I("--palette-background-level1")]: `${
          ($ = e.colorSchemes.dark) == null
            ? void 0
            : $.palette.background.level1
        } !important`,
        [I("--palette-background-level2")]: `${
          (f = e.colorSchemes.dark) == null
            ? void 0
            : f.palette.background.level2
        } !important`,
        [I("--palette-background-level3")]: `${
          (p = e.colorSchemes.dark) == null
            ? void 0
            : p.palette.background.level3
        } !important`,
        [I("--palette-text-primary")]: `${
          (u = e.colorSchemes.dark) == null ? void 0 : u.palette.text.primary
        } !important`,
        [I("--palette-text-secondary")]: `${
          (k = e.colorSchemes.dark) == null ? void 0 : k.palette.text.secondary
        } !important`,
        [I("--palette-text-tertiary")]: `${
          (S = e.colorSchemes.dark) == null ? void 0 : S.palette.text.tertiary
        } !important`,
        [I("--palette-divider")]: `${
          (R = e.colorSchemes.dark) == null ? void 0 : R.palette.divider
        } !important`,
      },
    };
  };
function II(e) {
  return e.theme !== void 0;
}
const _d = (e) => (t) => {
    const n = II(t) ? t.theme : t,
      r = ku(n.cssVarPrefix),
      o = zd(n.cssVarPrefix),
      i = (l) => {
        const a = l.split("-");
        return r(l, n.palette[a[1]][a[2]]);
      };
    return {
      [Ng]: {
        "--Badge-ringColor": i(`palette-${e}-solidBg`),
        "--Icon-color": "currentColor",
        [`${n.getColorSchemeSelector("light")}, ${n.getColorSchemeSelector(
          "dark",
        )}`]: {
          colorScheme: "dark",
          [o("--palette-focusVisible")]: i(`palette-${e}-200`),
          [o("--palette-background-body")]: "rgba(0 0 0 / 0.1)",
          [o("--palette-background-surface")]: "rgba(0 0 0 / 0.06)",
          [o("--palette-background-popup")]: i(`palette-${e}-700`),
          [o("--palette-background-level1")]: `rgba(${i(
            `palette-${e}-darkChannel`,
          )} / 0.2)`,
          [o("--palette-background-level2")]: `rgba(${i(
            `palette-${e}-darkChannel`,
          )} / 0.36)`,
          [o("--palette-background-level3")]: `rgba(${i(
            `palette-${e}-darkChannel`,
          )} / 0.6)`,
          [o("--palette-text-primary")]: i("palette-common-white"),
          [o("--palette-text-secondary")]: i(`palette-${e}-200`),
          [o("--palette-text-tertiary")]: i(`palette-${e}-300`),
          [o("--palette-text-icon")]: i(`palette-${e}-200`),
          [o("--palette-divider")]: `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.32)`,
          "--variant-plainColor": i(`palette-${e}-50`),
          "--variant-plainHoverColor": "#fff",
          "--variant-plainHoverBg": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.12)`,
          "--variant-plainActiveBg": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.32)`,
          "--variant-plainDisabledColor": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.72)`,
          "--variant-outlinedColor": i(`palette-${e}-50`),
          "--variant-outlinedBorder": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.5)`,
          "--variant-outlinedHoverColor": "#fff",
          "--variant-outlinedHoverBorder": i(`palette-${e}-300`),
          "--variant-outlinedHoverBg": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.12)`,
          "--variant-outlinedActiveBg": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.32)`,
          "--variant-outlinedDisabledColor": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.72)`,
          "--variant-outlinedDisabledBorder": "rgba(255 255 255 / 0.2)",
          "--variant-softColor": i("palette-common-white"),
          "--variant-softHoverColor": i("palette-common-white"),
          "--variant-softBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.24)`,
          "--variant-softHoverBg": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.36)`,
          "--variant-softActiveBg": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.16)`,
          "--variant-softActiveColor": "#fff",
          "--variant-softDisabledColor": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.72)`,
          "--variant-softDisabledBg": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.1)`,
          "--variant-solidColor": i(
            `palette-${e}-${e === "neutral" ? "600" : "500"}`,
          ),
          "--variant-solidBg": i("palette-common-white"),
          "--variant-solidHoverBg": i("palette-common-white"),
          "--variant-solidActiveBg": i(`palette-${e}-100`),
          "--variant-solidDisabledColor": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.72)`,
          "--variant-solidDisabledBg": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.1)`,
        },
      },
      [`&, & [${Ii}]`]: Hg(n),
    };
  },
  Ed = (e) => (t) => {
    const { theme: n = t } = t,
      r = ku(n.cssVarPrefix),
      o = zd(n.cssVarPrefix),
      i = (l) => {
        const a = l.split("-");
        return r(l, n.palette[a[1]][a[2]]);
      };
    return {
      [Ng]: {
        "--Badge-ringColor": i(`palette-${e}-softBg`),
        "--Icon-color": "currentColor",
        [n.getColorSchemeSelector("dark")]: {
          [o("--palette-focusVisible")]: i(`palette-${e}-300`),
          [o("--palette-background-body")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.1)`,
          [o("--palette-background-surface")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.08)`,
          [o("--palette-background-level1")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.2)`,
          [o("--palette-background-level2")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.4)`,
          [o("--palette-background-level3")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.6)`,
          [o("--palette-text-primary")]: i(`palette-${e}-100`),
          [o("--palette-text-secondary")]: `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.72)`,
          [o("--palette-text-tertiary")]: `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.6)`,
          [o("--palette-text-icon")]: `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.6)`,
          [o("--palette-divider")]: `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 0.2)`,
          "--variant-plainColor": `rgba(${i(`palette-${e}-lightChannel`)} / 1)`,
          "--variant-plainHoverColor": i(`palette-${e}-50`),
          "--variant-plainHoverBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.16)`,
          "--variant-plainActiveBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.32)`,
          "--variant-plainDisabledColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.72)`,
          "--variant-outlinedColor": `rgba(${i(
            `palette-${e}-lightChannel`,
          )} / 1)`,
          "--variant-outlinedHoverColor": i(`palette-${e}-50`),
          "--variant-outlinedBg": "initial",
          "--variant-outlinedBorder": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.4)`,
          "--variant-outlinedHoverBorder": i(`palette-${e}-600`),
          "--variant-outlinedHoverBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.16)`,
          "--variant-outlinedActiveBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.32)`,
          "--variant-outlinedDisabledColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.72)`,
          "--variant-outlinedDisabledBorder": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.2)`,
          "--variant-softColor": i(`palette-${e}-200`),
          "--variant-softBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.24)`,
          "--variant-softHoverColor": "#fff",
          "--variant-softHoverBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.32)`,
          "--variant-softActiveBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.48)`,
          "--variant-softDisabledColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.72)`,
          "--variant-softDisabledBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.12)`,
          "--variant-solidColor": "#fff",
          "--variant-solidBg": i(`palette-${e}-500`),
          "--variant-solidHoverColor": "#fff",
          "--variant-solidHoverBg": i(`palette-${e}-600`),
          "--variant-solidActiveBg": i(`palette-${e}-600`),
          "--variant-solidDisabledColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.72)`,
          "--variant-solidDisabledBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.12)`,
        },
        [n.getColorSchemeSelector("light")]: {
          [o("--palette-focusVisible")]: i(`palette-${e}-500`),
          [o("--palette-background-body")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.1)`,
          [o("--palette-background-surface")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.08)`,
          [o("--palette-background-level1")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.2)`,
          [o("--palette-background-level2")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.32)`,
          [o("--palette-background-level3")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.48)`,
          [o("--palette-text-primary")]: i(`palette-${e}-700`),
          [o("--palette-text-secondary")]: `rgba(${i(
            `palette-${e}-darkChannel`,
          )} / 0.8)`,
          [o("--palette-text-tertiary")]: `rgba(${i(
            `palette-${e}-darkChannel`,
          )} / 0.68)`,
          [o("--palette-text-icon")]: i(`palette-${e}-500`),
          [o("--palette-divider")]: `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.32)`,
          "--variant-plainColor": `rgba(${i(
            `palette-${e}-darkChannel`,
          )} / 0.8)`,
          "--variant-plainHoverColor": `rgba(${i(
            `palette-${e}-darkChannel`,
          )} / 1)`,
          "--variant-plainHoverBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.12)`,
          "--variant-plainActiveBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.24)`,
          "--variant-plainDisabledColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.6)`,
          "--variant-outlinedColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 1)`,
          "--variant-outlinedBorder": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.4)`,
          "--variant-outlinedHoverColor": i(`palette-${e}-600`),
          "--variant-outlinedHoverBorder": i(`palette-${e}-300`),
          "--variant-outlinedHoverBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.12)`,
          "--variant-outlinedActiveBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.24)`,
          "--variant-outlinedDisabledColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.6)`,
          "--variant-outlinedDisabledBorder": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.12)`,
          "--variant-softColor": i(`palette-${e}-600`),
          "--variant-softBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.8)`,
          "--variant-softHoverColor": i(`palette-${e}-700`),
          "--variant-softHoverBg": i(`palette-${e}-200`),
          "--variant-softActiveBg": i(`palette-${e}-300`),
          "--variant-softDisabledColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.6)`,
          "--variant-softDisabledBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.08)`,
          "--variant-solidColor": i("palette-common-white"),
          "--variant-solidBg": i(
            `palette-${e}-${e === "neutral" ? "700" : "500"}`,
          ),
          "--variant-solidHoverColor": i("palette-common-white"),
          "--variant-solidHoverBg": i(`palette-${e}-600`),
          "--variant-solidActiveBg": i(`palette-${e}-600`),
          "--variant-solidDisabledColor": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.6)`,
          "--variant-solidDisabledBg": `rgba(${i(
            `palette-${e}-mainChannel`,
          )} / 0.08)`,
        },
      },
      [`&, & [${Ii}]`]: Hg(n),
    };
  },
  RI = [
    "propsToForward",
    "rootStateClasses",
    "inputStateClasses",
    "getRootProps",
    "getInputProps",
    "formControl",
    "focused",
    "error",
    "disabled",
    "fullWidth",
    "size",
    "color",
    "variant",
    "startDecorator",
    "endDecorator",
    "component",
    "slots",
    "slotProps",
  ],
  PI = (e) => {
    const { disabled: t, fullWidth: n, variant: r, color: o, size: i } = e,
      l = {
        root: [
          "root",
          t && "disabled",
          n && "fullWidth",
          r && `variant${W(r)}`,
          o && `color${W(o)}`,
          i && `size${W(i)}`,
        ],
        input: ["input"],
        startDecorator: ["startDecorator"],
        endDecorator: ["endDecorator"],
      };
    return le(l, CI, {});
  },
  wI = H("div")(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l, a;
    const s = (n = e.variants[`${t.variant}`]) == null ? void 0 : n[t.color];
    return [
      h(
        {
          "--Input-radius": e.vars.radius.sm,
          "--Input-gap": "0.5rem",
          "--Input-placeholderColor": "inherit",
          "--Input-placeholderOpacity": 0.64,
          "--Input-decoratorColor": e.vars.palette.text.icon,
          "--Input-focused": "0",
          "--Input-focusedThickness": e.vars.focus.thickness,
          "--Input-focusedHighlight":
            (r = e.vars.palette[t.color === "neutral" ? "primary" : t.color]) ==
            null
              ? void 0
              : r[500],
          [`&:not([${Ii}])`]: h(
            {},
            t.instanceColor && {
              "--_Input-focusedHighlight":
                (o =
                  e.vars.palette[
                    t.instanceColor === "neutral" ? "primary" : t.instanceColor
                  ]) == null
                  ? void 0
                  : o[500],
            },
            {
              "--Input-focusedHighlight": `var(--_Input-focusedHighlight, ${e.vars.palette.focusVisible})`,
            },
          ),
        },
        t.size === "sm" && {
          "--Input-minHeight": "2rem",
          "--Input-paddingInline": "0.5rem",
          "--Input-decoratorChildHeight": "min(1.5rem, var(--Input-minHeight))",
          "--Icon-fontSize": e.vars.fontSize.xl,
        },
        t.size === "md" && {
          "--Input-minHeight": "2.25rem",
          "--Input-paddingInline": "0.75rem",
          "--Input-decoratorChildHeight":
            "min(1.75rem, var(--Input-minHeight))",
          "--Icon-fontSize": e.vars.fontSize.xl2,
        },
        t.size === "lg" && {
          "--Input-minHeight": "2.75rem",
          "--Input-paddingInline": "1rem",
          "--Input-gap": "0.75rem",
          "--Input-decoratorChildHeight":
            "min(2.25rem, var(--Input-minHeight))",
          "--Icon-fontSize": e.vars.fontSize.xl2,
        },
        {
          "--Input-decoratorChildOffset":
            "min(calc(var(--Input-paddingInline) - (var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2), var(--Input-paddingInline))",
          "--_Input-paddingBlock":
            "max((var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2, 0px)",
          "--Input-decoratorChildRadius":
            "max(var(--Input-radius) - var(--variant-borderWidth, 0px) - var(--_Input-paddingBlock), min(var(--_Input-paddingBlock) + var(--variant-borderWidth, 0px), var(--Input-radius) / 2))",
          "--Button-minHeight": "var(--Input-decoratorChildHeight)",
          "--Button-paddingBlock": "0px",
          "--IconButton-size": "var(--Input-decoratorChildHeight)",
          "--Button-radius": "var(--Input-decoratorChildRadius)",
          "--IconButton-radius": "var(--Input-decoratorChildRadius)",
          boxSizing: "border-box",
        },
        t.variant !== "plain" && { boxShadow: e.shadow.xs },
        { minWidth: 0, minHeight: "var(--Input-minHeight)" },
        t.fullWidth && { width: "100%" },
        {
          cursor: "text",
          position: "relative",
          display: "flex",
          paddingInline: "var(--Input-paddingInline)",
          borderRadius: "var(--Input-radius)",
        },
        e.typography[`body-${t.size}`],
        s,
        {
          backgroundColor:
            (i = s == null ? void 0 : s.backgroundColor) != null
              ? i
              : e.vars.palette.background.surface,
          "&:before": {
            boxSizing: "border-box",
            content: '""',
            display: "block",
            position: "absolute",
            pointerEvents: "none",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            borderRadius: "inherit",
            margin: "calc(var(--variant-borderWidth, 0px) * -1)",
            boxShadow:
              "var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)",
          },
        },
      ),
      {
        "&:hover": h(
          {},
          (l = e.variants[`${t.variant}Hover`]) == null ? void 0 : l[t.color],
          { backgroundColor: null },
        ),
        [`&.${Fg.disabled}`]:
          (a = e.variants[`${t.variant}Disabled`]) == null
            ? void 0
            : a[t.color],
        "&:focus-within::before": { "--Input-focused": "1" },
      },
    ];
  }),
  zI = H("input")(({ ownerState: e }) => ({
    border: "none",
    minWidth: 0,
    outline: 0,
    padding: 0,
    flex: 1,
    color: "inherit",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    textOverflow: "ellipsis",
    "&:-webkit-autofill": h(
      { paddingInline: "var(--Input-paddingInline)" },
      !e.startDecorator && {
        marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
        paddingInlineStart: "var(--Input-paddingInline)",
        borderTopLeftRadius:
          "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
        borderBottomLeftRadius:
          "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
      },
      !e.endDecorator && {
        marginInlineEnd: "calc(-1 * var(--Input-paddingInline))",
        paddingInlineEnd: "var(--Input-paddingInline)",
        borderTopRightRadius:
          "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
        borderBottomRightRadius:
          "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
      },
    ),
    "&::-webkit-input-placeholder": {
      color: "var(--Input-placeholderColor)",
      opacity: "var(--Input-placeholderOpacity)",
    },
    "&::-moz-placeholder": {
      color: "var(--Input-placeholderColor)",
      opacity: "var(--Input-placeholderOpacity)",
    },
    "&:-ms-input-placeholder": {
      color: "var(--Input-placeholderColor)",
      opacity: "var(--Input-placeholderOpacity)",
    },
    "&::-ms-input-placeholder": {
      color: "var(--Input-placeholderColor)",
      opacity: "var(--Input-placeholderOpacity)",
    },
  })),
  _I = H("div")({
    "--Button-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
    "--IconButton-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
    "--Icon-margin": "0 0 0 calc(var(--Input-paddingInline) / -4)",
    display: "inherit",
    alignItems: "center",
    paddingBlock: "var(--unstable_InputPaddingBlock)",
    flexWrap: "wrap",
    marginInlineEnd: "var(--Input-gap)",
    color: "var(--Input-decoratorColor)",
    cursor: "initial",
  }),
  EI = H("div")({
    "--Button-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
    "--IconButton-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
    "--Icon-margin": "0 calc(var(--Input-paddingInline) / -4) 0 0",
    display: "inherit",
    alignItems: "center",
    marginInlineStart: "var(--Input-gap)",
    color: "var(--Input-decoratorColor)",
    cursor: "initial",
  }),
  DI = H(wI, {
    name: "JoyInput",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  TI = H(zI, {
    name: "JoyInput",
    slot: "Input",
    overridesResolver: (e, t) => t.input,
  })({}),
  LI = H(_I, {
    name: "JoyInput",
    slot: "StartDecorator",
    overridesResolver: (e, t) => t.startDecorator,
  })({}),
  BI = H(EI, {
    name: "JoyInput",
    slot: "EndDecorator",
    overridesResolver: (e, t) => t.endDecorator,
  })({}),
  OI = g.forwardRef(function (t, n) {
    var r, o, i, l, a, s;
    const c = de({ props: t, name: "JoyInput" }),
      d = $I(c, Fg),
      {
        propsToForward: v,
        rootStateClasses: m,
        inputStateClasses: y,
        getRootProps: b,
        getInputProps: x,
        formControl: $,
        focused: f,
        error: p = !1,
        disabled: u,
        fullWidth: k = !1,
        size: S = "md",
        color: R = "neutral",
        variant: I = "outlined",
        startDecorator: P,
        endDecorator: D,
        component: w,
        slots: T = {},
        slotProps: M = {},
      } = d,
      O = Y(d, RI),
      F =
        (r = (o = t.error) != null ? o : $ == null ? void 0 : $.error) != null
          ? r
          : p,
      B =
        (i = (l = t.size) != null ? l : $ == null ? void 0 : $.size) != null
          ? i
          : S,
      E =
        (a = t.color) != null
          ? a
          : F
            ? "danger"
            : (s = $ == null ? void 0 : $.color) != null
              ? s
              : R,
      _ = h({ instanceColor: F ? "danger" : t.color }, c, {
        fullWidth: k,
        color: E,
        disabled: u,
        error: F,
        focused: f,
        size: B,
        variant: I,
      }),
      z = PI(_),
      L = h({}, O, { component: w, slots: T, slotProps: M }),
      [V, K] = U("root", {
        ref: n,
        className: [z.root, m],
        elementType: DI,
        getSlotProps: b,
        externalForwardedProps: L,
        ownerState: _,
      }),
      [X, fe] = U(
        "input",
        h(
          {},
          $ && {
            additionalProps: {
              id: $.htmlFor,
              "aria-describedby": $["aria-describedby"],
            },
          },
          {
            className: [z.input, y],
            elementType: TI,
            getSlotProps: x,
            internalForwardedProps: v,
            externalForwardedProps: L,
            ownerState: _,
          },
        ),
      ),
      [re, ae] = U("startDecorator", {
        className: z.startDecorator,
        elementType: LI,
        externalForwardedProps: L,
        ownerState: _,
      }),
      [Q, A] = U("endDecorator", {
        className: z.endDecorator,
        elementType: BI,
        externalForwardedProps: L,
        ownerState: _,
      });
    return C.jsxs(
      V,
      h({}, K, {
        children: [
          P && C.jsx(re, h({}, ae, { children: P })),
          C.jsx(X, h({}, fe)),
          D && C.jsx(Q, h({}, A, { children: D })),
        ],
      }),
    );
  }),
  Ri = OI,
  Ui = ({ theme: e, ownerState: t }, n) => {
    let r = {};
    function o(i) {
      if (typeof i == "function") {
        const l = i(e);
        o(l);
      } else
        Array.isArray(i)
          ? i.forEach((l) => {
              typeof l != "boolean" && o(l);
            })
          : typeof i == "object" && (r = h({}, r, i));
    }
    return (
      t.sx &&
        (o(t.sx),
        n.forEach((i) => {
          const l = r[i];
          if (typeof l == "string" || typeof l == "number")
            if (i === "borderRadius")
              if (typeof l == "number") r[i] = `${l}px`;
              else {
                var a;
                r[i] = ((a = e.vars) == null ? void 0 : a.radius[l]) || l;
              }
            else
              ["p", "padding", "m", "margin"].indexOf(i) !== -1 &&
              typeof l == "number"
                ? (r[i] = e.spacing(l))
                : (r[i] = l);
          else typeof l == "function" ? (r[i] = l(e)) : (r[i] = void 0);
        })),
      r
    );
  };
function MI(e) {
  return ce("MuiList", e);
}
ue("MuiList", [
  "root",
  "nesting",
  "scoped",
  "sizeSm",
  "sizeMd",
  "sizeLg",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "horizontal",
  "vertical",
]);
const AI = g.createContext(!1),
  va = AI,
  jI = g.createContext(void 0),
  Vg = jI,
  FI = g.createContext(void 0),
  is = FI,
  NI = g.createContext(!1),
  Ki = NI,
  HI = g.createContext(!1),
  Wg = HI,
  Ug = {
    "--NestedList-marginRight": "0px",
    "--NestedList-marginLeft": "0px",
    "--NestedListItem-paddingLeft": "var(--ListItem-paddingX)",
    "--ListItemButton-marginBlock": "0px",
    "--ListItemButton-marginInline": "0px",
    "--ListItem-marginBlock": "0px",
    "--ListItem-marginInline": "0px",
  };
function ls(e) {
  const { children: t, nested: n, row: r = !1, wrap: o = !1 } = e,
    i = C.jsx(Ki.Provider, {
      value: r,
      children: C.jsx(Wg.Provider, {
        value: o,
        children: g.Children.map(t, (l, a) =>
          g.isValidElement(l)
            ? g.cloneElement(
                l,
                h(
                  {},
                  a === 0 && { "data-first-child": "" },
                  a === g.Children.count(t) - 1 && { "data-last-child": "" },
                ),
              )
            : l,
        ),
      }),
    });
  return n === void 0 ? i : C.jsx(va.Provider, { value: n, children: i });
}
const VI = g.createContext(void 0),
  Dd = VI,
  WI = [
    "component",
    "className",
    "children",
    "size",
    "orientation",
    "wrap",
    "variant",
    "color",
    "role",
    "slots",
    "slotProps",
  ],
  UI = (e) => {
    const {
        variant: t,
        color: n,
        size: r,
        nesting: o,
        orientation: i,
        instanceSize: l,
      } = e,
      a = {
        root: [
          "root",
          i,
          t && `variant${W(t)}`,
          n && `color${W(n)}`,
          !l && !o && r && `size${W(r)}`,
          l && `size${W(l)}`,
          o && "nesting",
        ],
      };
    return le(a, MI, {});
  },
  as = H("ul")(({ theme: e, ownerState: t }) => {
    var n;
    const {
      p: r,
      padding: o,
      borderRadius: i,
    } = Ui({ theme: e, ownerState: t }, ["p", "padding", "borderRadius"]);
    function l(a) {
      return a === "sm"
        ? {
            "--ListDivider-gap": "0.25rem",
            "--ListItem-minHeight": "2rem",
            "--ListItem-paddingY": "3px",
            "--ListItem-paddingX": t.marker ? "3px" : "0.5rem",
            "--ListItem-gap": "0.5rem",
            "--ListItemDecorator-size":
              t.orientation === "horizontal" ? "1.5rem" : "2rem",
            "--Icon-fontSize": e.vars.fontSize.lg,
          }
        : a === "md"
          ? {
              "--ListDivider-gap": "0.375rem",
              "--ListItem-minHeight": "2.25rem",
              "--ListItem-paddingY": "0.25rem",
              "--ListItem-paddingX": t.marker ? "0.25rem" : "0.75rem",
              "--ListItem-gap": "0.625rem",
              "--ListItemDecorator-size":
                t.orientation === "horizontal" ? "1.75rem" : "2.5rem",
              "--Icon-fontSize": e.vars.fontSize.xl,
            }
          : a === "lg"
            ? {
                "--ListDivider-gap": "0.5rem",
                "--ListItem-minHeight": "2.75rem",
                "--ListItem-paddingY": "0.375rem",
                "--ListItem-paddingX": t.marker ? "0.5rem" : "1rem",
                "--ListItem-gap": "0.75rem",
                "--ListItemDecorator-size":
                  t.orientation === "horizontal" ? "2.25rem" : "3rem",
                "--Icon-fontSize": e.vars.fontSize.xl2,
              }
            : {};
    }
    return [
      t.nesting &&
        h(
          {},
          l(t.instanceSize),
          {
            "--ListItem-paddingRight": "var(--ListItem-paddingX)",
            "--ListItem-paddingLeft": "var(--NestedListItem-paddingLeft)",
            "--ListItemButton-marginBlock": "0px",
            "--ListItemButton-marginInline": "0px",
            "--ListItem-marginBlock": "0px",
            "--ListItem-marginInline": "0px",
            padding: 0,
          },
          t.marker && {
            paddingInlineStart: "calc(3ch - var(--_List-markerDeduct, 0px))",
          },
          {
            marginInlineStart: "var(--NestedList-marginLeft)",
            marginInlineEnd: "var(--NestedList-marginRight)",
            marginBlockStart: "var(--List-gap)",
            marginBlockEnd: "initial",
          },
        ),
      !t.nesting &&
        h(
          {},
          l(t.size),
          {
            "--List-gap": "0px",
            "--List-nestedInsetStart": "0px",
            "--ListItem-paddingLeft": "var(--ListItem-paddingX)",
            "--ListItem-paddingRight": "var(--ListItem-paddingX)",
          },
          t.marker && { "--_List-markerDeduct": "1ch" },
          {
            "--unstable_List-childRadius":
              "calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))",
            "--ListItem-radius": "var(--unstable_List-childRadius)",
            "--ListItem-startActionTranslateX":
              "calc(0.5 * var(--ListItem-paddingLeft))",
            "--ListItem-endActionTranslateX":
              "calc(-0.5 * var(--ListItem-paddingRight))",
            margin: "initial",
          },
          e.typography[`body-${t.size}`],
          t.orientation === "horizontal"
            ? h(
                {},
                t.wrap
                  ? {
                      padding: "var(--List-padding)",
                      marginInlineStart: "calc(-1 * var(--List-gap))",
                      marginBlockStart: "calc(-1 * var(--List-gap))",
                    }
                  : {
                      paddingInline:
                        "var(--List-padding, var(--ListDivider-gap))",
                      paddingBlock: "var(--List-padding)",
                    },
              )
            : {
                paddingBlock: "var(--List-padding, var(--ListDivider-gap))",
                paddingInline: "var(--List-padding)",
              },
          t.marker && { paddingInlineStart: "3ch" },
        ),
      h(
        {
          boxSizing: "border-box",
          borderRadius: "var(--List-radius)",
          listStyle: "none",
          display: "flex",
          flexDirection: t.orientation === "horizontal" ? "row" : "column",
        },
        t.wrap && { flexWrap: "wrap" },
        t.marker && {
          "--_List-markerDisplay": "list-item",
          "--_List-markerType": t.marker,
          lineHeight:
            "calc(var(--ListItem-minHeight) - 2 * var(--ListItem-paddingY))",
        },
        { flexGrow: 1, position: "relative" },
        (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
        { "--unstable_List-borderWidth": "var(--variant-borderWidth, 0px)" },
        i !== void 0 && { "--List-radius": i },
        r !== void 0 && { "--List-padding": r },
        o !== void 0 && { "--List-padding": o },
      ),
    ];
  }),
  KI = H(as, {
    name: "JoyList",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  GI = g.forwardRef(function (t, n) {
    var r;
    const o = g.useContext(va),
      i = g.useContext(is),
      l = g.useContext(Dd),
      a = de({ props: t, name: "JoyList" }),
      {
        component: s,
        className: c,
        children: d,
        size: v,
        orientation: m = "vertical",
        wrap: y = !1,
        variant: b = "plain",
        color: x = "neutral",
        role: $,
        slots: f = {},
        slotProps: p = {},
      } = a,
      u = Y(a, WI),
      k = v || ((r = t.size) != null ? r : "md");
    let S;
    i && (S = "group"), l && (S = "presentation"), $ && (S = $);
    const R = h({}, a, {
        instanceSize: t.size,
        size: k,
        nesting: o,
        orientation: m,
        wrap: y,
        variant: b,
        color: x,
        role: S,
      }),
      I = UI(R),
      P = h({}, u, { component: s, slots: f, slotProps: p }),
      [D, w] = U("root", {
        ref: n,
        className: Ve(I.root, c),
        elementType: KI,
        externalForwardedProps: P,
        ownerState: R,
        additionalProps: {
          as: s,
          role: S,
          "aria-labelledby": typeof o == "string" ? o : void 0,
        },
      });
    return C.jsx(
      D,
      h({}, w, {
        children: C.jsx(Vg.Provider, {
          value: `${typeof s == "string" ? s : ""}:${S || ""}`,
          children: C.jsx(ls, {
            row: m === "horizontal",
            wrap: y,
            children: d,
          }),
        }),
      }),
    );
  }),
  qp = GI;
function JI(e) {
  return ce("MuiListItem", e);
}
const XI = ue("MuiListItem", [
    "root",
    "startAction",
    "endAction",
    "nested",
    "nesting",
    "sticky",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "variantPlain",
    "variantSoft",
    "variantOutlined",
    "variantSolid",
  ]),
  Kg = XI,
  YI = g.createContext(void 0),
  QI = YI,
  qI = [
    "component",
    "className",
    "children",
    "nested",
    "sticky",
    "variant",
    "color",
    "startAction",
    "endAction",
    "role",
    "slots",
    "slotProps",
  ],
  ZI = (e) => {
    const { sticky: t, nested: n, nesting: r, variant: o, color: i } = e,
      l = {
        root: [
          "root",
          n && "nested",
          r && "nesting",
          t && "sticky",
          i && `color${W(i)}`,
          o && `variant${W(o)}`,
        ],
        startAction: ["startAction"],
        endAction: ["endAction"],
      };
    return le(l, JI, {});
  },
  Td = H("li")(({ theme: e, ownerState: t }) => {
    var n;
    return [
      !t.nested && {
        "--ListItemButton-marginInline":
          "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
        "--ListItemButton-marginBlock": "calc(-1 * var(--ListItem-paddingY))",
        alignItems: "center",
        gap: "var(--ListItem-gap)",
        marginInline: "var(--ListItem-marginInline)",
      },
      t.nested && {
        "--NestedList-marginRight": "calc(-1 * var(--ListItem-paddingRight))",
        "--NestedList-marginLeft": "calc(-1 * var(--ListItem-paddingLeft))",
        "--NestedListItem-paddingLeft":
          "calc(var(--ListItem-paddingLeft) + var(--List-nestedInsetStart))",
        "--ListItemButton-marginBlock": "0px",
        "--ListItemButton-marginInline":
          "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
        "--ListItem-marginInline":
          "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
        flexDirection: "column",
      },
      h(
        {
          "--unstable_actionRadius":
            "calc(var(--ListItem-radius) - var(--variant-borderWidth, 0px))",
        },
        t.startAction && { "--unstable_startActionWidth": "2rem" },
        t.endAction && { "--unstable_endActionWidth": "2.5rem" },
        {
          boxSizing: "border-box",
          borderRadius: "var(--ListItem-radius)",
          display: "var(--_ListItem-display)",
          "&:not([hidden])": {
            "--_ListItem-display": "var(--_List-markerDisplay, flex)",
          },
          flex: "none",
          listStyleType: "var(--_List-markerType, disc)",
          position: "relative",
          paddingBlockStart: t.nested ? 0 : "var(--ListItem-paddingY)",
          paddingBlockEnd: t.nested ? 0 : "var(--ListItem-paddingY)",
          paddingInlineStart: "var(--ListItem-paddingLeft)",
          paddingInlineEnd: "var(--ListItem-paddingRight)",
        },
        t["data-first-child"] === void 0 &&
          h(
            {},
            t.row
              ? { marginInlineStart: "var(--List-gap)" }
              : { marginBlockStart: "var(--List-gap)" },
          ),
        t.row &&
          t.wrap && {
            marginInlineStart: "var(--List-gap)",
            marginBlockStart: "var(--List-gap)",
          },
        { minBlockSize: "var(--ListItem-minHeight)" },
        t.sticky && {
          position: "sticky",
          top: "var(--ListItem-stickyTop, 0px)",
          zIndex: 1,
          background: `var(--ListItem-stickyBackground, ${e.vars.palette.background.body})`,
        },
        { [`.${Kg.nested} > &`]: { "--_ListItem-display": "flex" } },
      ),
      (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
    ];
  }),
  eR = H(Td, {
    name: "JoyListItem",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  tR = H("div", {
    name: "JoyListItem",
    slot: "StartAction",
    overridesResolver: (e, t) => t.startAction,
  })(({ ownerState: e }) => ({
    display: "inherit",
    position: "absolute",
    top: e.nested ? "calc(var(--ListItem-minHeight) / 2)" : "50%",
    left: 0,
    transform: "translate(var(--ListItem-startActionTranslateX), -50%)",
    zIndex: 1,
  })),
  nR = H("div", {
    name: "JoyListItem",
    slot: "StartAction",
    overridesResolver: (e, t) => t.startAction,
  })(({ ownerState: e }) => ({
    display: "inherit",
    position: "absolute",
    top: e.nested ? "calc(var(--ListItem-minHeight) / 2)" : "50%",
    right: 0,
    transform: "translate(var(--ListItem-endActionTranslateX), -50%)",
  })),
  Gg = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyListItem" }),
      o = g.useContext(is),
      i = g.useContext(Vg),
      l = g.useContext(Ki),
      a = g.useContext(Wg),
      s = g.useContext(va),
      {
        component: c,
        className: d,
        children: v,
        nested: m = !1,
        sticky: y = !1,
        variant: b = "plain",
        color: x = "neutral",
        startAction: $,
        endAction: f,
        role: p,
        slots: u = {},
        slotProps: k = {},
      } = r,
      S = Y(r, qI),
      [R, I] = g.useState(""),
      [P, D] = (i == null ? void 0 : i.split(":")) || ["", ""],
      w = c || (P && !P.match(/^(ul|ol|menu)$/) ? "div" : void 0);
    let T = o === "menu" ? "none" : void 0;
    i && (T = { menu: "none", menubar: "none", group: "presentation" }[D]),
      p && (T = p);
    const M = h({}, r, {
        sticky: y,
        startAction: $,
        endAction: f,
        row: l,
        wrap: a,
        variant: b,
        color: x,
        nesting: s,
        nested: m,
        component: w,
        role: T,
      }),
      O = ZI(M),
      F = h({}, S, { component: w, slots: u, slotProps: k }),
      [B, E] = U("root", {
        additionalProps: { role: T },
        ref: n,
        className: Ve(O.root, d),
        elementType: eR,
        externalForwardedProps: F,
        ownerState: M,
      }),
      [_, z] = U("startAction", {
        className: O.startAction,
        elementType: tR,
        externalForwardedProps: F,
        ownerState: M,
      }),
      [L, V] = U("endAction", {
        className: O.endAction,
        elementType: nR,
        externalForwardedProps: F,
        ownerState: M,
      });
    return C.jsx(QI.Provider, {
      value: I,
      children: C.jsx(va.Provider, {
        value: m ? R || !0 : !1,
        children: C.jsxs(
          B,
          h({}, E, {
            children: [
              $ && C.jsx(_, h({}, z, { children: $ })),
              g.Children.map(v, (K, X) =>
                g.isValidElement(K)
                  ? g.cloneElement(
                      K,
                      h(
                        {},
                        X === 0 && { "data-first-child": "" },
                        xo(K, ["ListItem"]) && {
                          component: K.props.component || "div",
                        },
                      ),
                    )
                  : K,
              ),
              f && C.jsx(L, h({}, V, { children: f })),
            ],
          }),
        ),
      }),
    });
  });
Gg.muiName = "ListItem";
const pl = Gg;
function rR(e) {
  return ce("MuiListItemButton", e);
}
const oR = ue("MuiListItemButton", [
    "root",
    "horizontal",
    "vertical",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "focusVisible",
    "disabled",
    "selected",
    "variantPlain",
    "variantSoft",
    "variantOutlined",
    "variantSolid",
  ]),
  ti = oR,
  iR = g.createContext("horizontal"),
  Jg = iR,
  lR = [
    "children",
    "className",
    "action",
    "component",
    "orientation",
    "role",
    "selected",
    "color",
    "variant",
    "slots",
    "slotProps",
  ],
  aR = (e) => {
    const {
        color: t,
        disabled: n,
        focusVisible: r,
        focusVisibleClassName: o,
        selected: i,
        variant: l,
      } = e,
      a = {
        root: [
          "root",
          n && "disabled",
          r && "focusVisible",
          t && `color${W(t)}`,
          i && "selected",
          l && `variant${W(l)}`,
        ],
      },
      s = le(a, rR, {});
    return r && o && (s.root += ` ${o}`), s;
  },
  ss = H("div")(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l, a;
    return h(
      {
        "--Icon-margin": "initial",
        "--Icon-color":
          t.color !== "neutral" || t.variant === "solid"
            ? "currentColor"
            : e.vars.palette.text.icon,
        WebkitTapHighlightColor: "transparent",
        boxSizing: "border-box",
        position: "relative",
        font: "inherit",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
        gap: "var(--ListItem-gap)",
      },
      t.orientation === "vertical" && {
        flexDirection: "column",
        justifyContent: "center",
      },
      {
        textAlign: "initial",
        textDecoration: "initial",
        backgroundColor: "initial",
        cursor: "pointer",
        marginInline: "var(--ListItemButton-marginInline)",
        marginBlock: "var(--ListItemButton-marginBlock)",
      },
      t["data-first-child"] === void 0 && {
        marginInlineStart: t.row ? "var(--List-gap)" : void 0,
        marginBlockStart: t.row ? void 0 : "var(--List-gap)",
      },
      {
        paddingBlock:
          "calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px))",
        paddingInlineStart:
          "calc(var(--ListItem-paddingLeft) + var(--ListItem-startActionWidth, var(--unstable_startActionWidth, 0px)))",
        paddingInlineEnd:
          "calc(var(--ListItem-paddingRight) + var(--ListItem-endActionWidth, var(--unstable_endActionWidth, 0px)))",
        minBlockSize: "var(--ListItem-minHeight)",
        border: "1px solid transparent",
        borderRadius: "var(--ListItem-radius)",
        flex: "var(--unstable_ListItem-flex, none)",
        fontSize: "inherit",
        lineHeight: "inherit",
        minInlineSize: 0,
        [e.focus.selector]: h({}, e.focus.default, { zIndex: 1 }),
      },
      (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
      {
        "&:active":
          (r = e.variants[`${t.variant}Active`]) == null ? void 0 : r[t.color],
        [`.${Kg.root} > &`]: { "--unstable_ListItem-flex": "1 0 0%" },
        [`&.${ti.selected}`]: h(
          {},
          (o = e.variants[`${t.variant}Active`]) == null ? void 0 : o[t.color],
          { "--Icon-color": "currentColor" },
        ),
        [`&:not(.${ti.selected}, [aria-selected="true"])`]: {
          "&:hover":
            (i = e.variants[`${t.variant}Hover`]) == null ? void 0 : i[t.color],
          "&:active":
            (l = e.variants[`${t.variant}Active`]) == null
              ? void 0
              : l[t.color],
        },
        [`&.${ti.disabled}`]: h(
          {},
          (a = e.variants[`${t.variant}Disabled`]) == null
            ? void 0
            : a[t.color],
        ),
      },
    );
  }),
  sR = H(ss, {
    name: "JoyListItemButton",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) =>
    h(
      {},
      !e.row && { [`&.${ti.selected}`]: { fontWeight: t.vars.fontWeight.md } },
    ),
  ),
  cR = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyListItemButton" }),
      o = g.useContext(Ki),
      {
        children: i,
        className: l,
        action: a,
        component: s = "div",
        orientation: c = "horizontal",
        role: d,
        selected: v = !1,
        color: m = "neutral",
        variant: y = "plain",
        slots: b = {},
        slotProps: x = {},
      } = r,
      $ = Y(r, lR),
      f = g.useRef(null),
      p = ke(f, n),
      {
        focusVisible: u,
        setFocusVisible: k,
        getRootProps: S,
      } = ir(h({}, r, { rootRef: p }));
    g.useImperativeHandle(
      a,
      () => ({
        focusVisible: () => {
          var T;
          k(!0), (T = f.current) == null || T.focus();
        },
      }),
      [k],
    );
    const R = h({}, r, {
        component: s,
        color: m,
        focusVisible: u,
        orientation: c,
        row: o,
        selected: v,
        variant: y,
      }),
      I = aR(R),
      P = h({}, $, { component: s, slots: b, slotProps: x }),
      [D, w] = U("root", {
        ref: n,
        className: Ve(I.root, l),
        elementType: sR,
        externalForwardedProps: P,
        ownerState: R,
        getSlotProps: S,
      });
    return C.jsx(Jg.Provider, {
      value: c,
      children: C.jsx(D, h({}, w, { role: d ?? w.role, children: i })),
    });
  }),
  vl = cR;
function uR(e) {
  return ce("MuiListItemContent", e);
}
ue("MuiListItemContent", ["root"]);
const dR = ["component", "className", "children", "slots", "slotProps"],
  fR = () => le({ root: ["root"] }, uR, {}),
  pR = H("div", {
    name: "JoyListItemContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ flex: "1 1 auto", minWidth: 0 }),
  vR = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyListItemContent" }),
      {
        component: o,
        className: i,
        children: l,
        slots: a = {},
        slotProps: s = {},
      } = r,
      c = Y(r, dR),
      d = h({}, r),
      v = fR(),
      m = h({}, c, { component: o, slots: a, slotProps: s }),
      [y, b] = U("root", {
        ref: n,
        className: Ve(v.root, i),
        elementType: pR,
        externalForwardedProps: m,
        ownerState: d,
      });
    return C.jsx(y, h({}, b, { children: l }));
  }),
  Ws = vR;
function mR(e) {
  return ce("MuiSheet", e);
}
ue("MuiSheet", [
  "root",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
]);
const hR = [
    "className",
    "color",
    "component",
    "variant",
    "invertedColors",
    "slots",
    "slotProps",
  ],
  gR = (e) => {
    const { variant: t, color: n } = e,
      r = { root: ["root", t && `variant${W(t)}`, n && `color${W(n)}`] };
    return le(r, mR, {});
  },
  yR = H("div", {
    name: "JoySheet",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n, r;
    const o = (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
      {
        borderRadius: i,
        bgcolor: l,
        backgroundColor: a,
        background: s,
      } = Ui({ theme: e, ownerState: t }, [
        "borderRadius",
        "bgcolor",
        "backgroundColor",
        "background",
      ]),
      c =
        ro(e, `palette.${l}`) ||
        l ||
        ro(e, `palette.${a}`) ||
        a ||
        s ||
        (o == null ? void 0 : o.backgroundColor) ||
        (o == null ? void 0 : o.background) ||
        e.vars.palette.background.surface;
    return [
      h(
        {
          "--Icon-color":
            t.color !== "neutral" || t.variant === "solid"
              ? "currentColor"
              : e.vars.palette.text.icon,
          "--ListItem-stickyBackground": c === "transparent" ? "initial" : c,
          "--Sheet-background": c === "transparent" ? "initial" : c,
        },
        i !== void 0 && {
          "--List-radius": `calc(${i} - var(--variant-borderWidth, 0px))`,
          "--unstable_actionRadius": `calc(${i} - var(--variant-borderWidth, 0px))`,
        },
        {
          backgroundColor: e.vars.palette.background.surface,
          position: "relative",
        },
      ),
      h(
        {},
        e.typography["body-md"],
        t.variant === "solid" && t.color && t.invertedColors && _d(t.color)(e),
        t.variant === "soft" && t.color && t.invertedColors && Ed(t.color)(e),
        (r = e.variants[t.variant]) == null ? void 0 : r[t.color],
        o,
      ),
    ];
  }),
  xR = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoySheet" }),
      {
        className: o,
        color: i = "neutral",
        component: l = "div",
        variant: a = "plain",
        invertedColors: s = !1,
        slots: c = {},
        slotProps: d = {},
      } = r,
      v = Y(r, hR),
      m = h({}, r, { color: i, component: l, invertedColors: s, variant: a }),
      y = gR(m),
      b = h({}, v, { component: l, slots: c, slotProps: d }),
      [x, $] = U("root", {
        ref: n,
        className: Ve(y.root, o),
        elementType: yR,
        externalForwardedProps: b,
        ownerState: m,
      });
    return C.jsx(x, h({}, $));
  }),
  ma = xR;
var Ld = {},
  CR = Ln;
Object.defineProperty(Ld, "__esModule", { value: !0 });
var Xg = (Ld.default = void 0),
  bR = CR(Bn()),
  SR = C,
  kR = (0, bR.default)(
    (0, SR.jsx)("path", {
      d: "M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    }),
    "SearchRounded",
  );
Xg = Ld.default = kR;
var Bd = {},
  $R = Ln;
Object.defineProperty(Bd, "__esModule", { value: !0 });
var Yg = (Bd.default = void 0),
  IR = $R(Bn()),
  RR = C,
  PR = (0, IR.default)(
    (0, RR.jsx)("path", {
      d: "M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z",
    }),
    "DashboardRounded",
  );
Yg = Bd.default = PR;
var Od = {},
  wR = Ln;
Object.defineProperty(Od, "__esModule", { value: !0 });
var Qg = (Od.default = void 0),
  zR = wR(Bn()),
  _R = C,
  ER = (0, zR.default)(
    (0, _R.jsx)("path", {
      d: "M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23c-.25-.44-.79-.62-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41c-.02.22-.03.44-.03.67s.01.45.03.68l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
    }),
    "SettingsRounded",
  );
Qg = Od.default = ER;
const DR = Wi(
    C.jsx("path", {
      d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
    }),
    "ArrowDownward",
  ),
  TR = Wi(
    C.jsx("path", {
      d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z",
    }),
    "ArrowUpward",
  ),
  LR = Wi(
    C.jsx("path", {
      d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
    }),
    "AttachMoneyOutlined",
  ),
  BR = Wi(
    C.jsx("path", {
      d: "M15 16h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zm-7 6h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zM5 8h2v8H5zM2 4v16h20V4H2zm18 14H4V6h16v12z",
    }),
    "MoneyOutlined",
  );
function OR() {
  return C.jsxs(ma, {
    className: "Sidebar",
    sx: {
      position: { xs: "fixed", md: "sticky" },
      transform: {
        xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
        md: "none",
      },
      transition: "transform 0.4s, width 0.4s",
      zIndex: 1e4,
      height: "100dvh",
      width: "var(--Sidebar-width)",
      top: 0,
      p: 2,
      flex: 1,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      borderRight: "1px solid",
      borderColor: "divider",
    },
    children: [
      C.jsx(om, {
        styles: (e) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [e.breakpoints.up("lg")]: { "--Sidebar-width": "240px" },
          },
        }),
      }),
      C.jsx(dt, {
        className: "Sidebar-overlay",
        sx: {
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        },
      }),
      C.jsxs(dt, {
        sx: { display: "flex", gap: 1, alignItems: "center" },
        children: [
          C.jsx(wd, {
            variant: "soft",
            color: "primary",
            size: "sm",
            children: C.jsx(BR, {}),
          }),
          C.jsx(Ht, { level: "title-lg", children: "Budgeter" }),
        ],
      }),
      C.jsx(Ri, {
        size: "sm",
        startDecorator: C.jsx(Xg, {}),
        placeholder: "Search",
      }),
      C.jsxs(dt, {
        sx: {
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${ti.root}`]: { gap: 1.5 },
        },
        children: [
          C.jsxs(qp, {
            size: "sm",
            sx: {
              gap: 1,
              "--List-nestedInsetStart": "30px",
              "--ListItem-radius": (e) => e.vars.radius.sm,
            },
            children: [
              C.jsx(pl, {
                children: C.jsxs(vl, {
                  children: [
                    C.jsx($d, {}),
                    C.jsx(Ws, {
                      children: C.jsx(Ht, {
                        level: "title-sm",
                        children: "Home",
                      }),
                    }),
                  ],
                }),
              }),
              C.jsx(pl, {
                children: C.jsxs(vl, {
                  children: [
                    C.jsx(Yg, {}),
                    C.jsx(Ws, {
                      children: C.jsx(Ht, {
                        level: "title-sm",
                        children: "Dashboard",
                      }),
                    }),
                  ],
                }),
              }),
              C.jsx(pl, {
                children: C.jsxs(vl, {
                  selected: !0,
                  children: [
                    C.jsx(LR, {}),
                    C.jsx(Ws, {
                      children: C.jsx(Ht, {
                        level: "title-sm",
                        children: "Budget",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          C.jsx(qp, {
            size: "sm",
            sx: {
              mt: "auto",
              flexGrow: 0,
              "--ListItem-radius": (e) => e.vars.radius.sm,
              "--List-gap": "8px",
              mb: 2,
            },
            children: C.jsx(pl, {
              children: C.jsxs(vl, { children: [C.jsx(Qg, {}), "Settings"] }),
            }),
          }),
        ],
      }),
      C.jsx(Rd, {}),
    ],
  });
}
const qg = g.createContext(void 0);
function MR(e, t) {
  let n = t,
    r = e;
  return (
    e === "outlined" && ((n = "neutral"), (r = "plain")),
    e === "plain" && (n = "neutral"),
    { variant: r, color: n }
  );
}
function Zg(e, t, n = !1) {
  const r = g.useContext(qg),
    [o, i] = typeof r == "string" ? r.split(":") : [],
    l = MR(o || void 0, i || void 0);
  return (l.variant = e || l.variant), (l.color = t || (n ? i : l.color)), l;
}
function Md({ children: e, color: t, variant: n }) {
  return C.jsx(qg.Provider, { value: `${n || ""}:${t || ""}`, children: e });
}
function AR(e) {
  return ce("MuiChip", e);
}
const jR = ue("MuiChip", [
    "root",
    "clickable",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "disabled",
    "endDecorator",
    "focusVisible",
    "label",
    "labelSm",
    "labelMd",
    "labelLg",
    "sizeSm",
    "sizeMd",
    "sizeLg",
    "startDecorator",
    "variantPlain",
    "variantSolid",
    "variantSoft",
    "variantOutlined",
  ]),
  Zc = jR,
  FR = g.createContext({ disabled: void 0, variant: void 0, color: void 0 }),
  NR = FR,
  HR = [
    "children",
    "className",
    "color",
    "onClick",
    "disabled",
    "size",
    "variant",
    "startDecorator",
    "endDecorator",
    "component",
    "slots",
    "slotProps",
  ],
  VR = (e) => {
    const {
        disabled: t,
        size: n,
        color: r,
        clickable: o,
        variant: i,
        focusVisible: l,
      } = e,
      a = {
        root: [
          "root",
          t && "disabled",
          r && `color${W(r)}`,
          n && `size${W(n)}`,
          i && `variant${W(i)}`,
          o && "clickable",
        ],
        action: ["action", t && "disabled", l && "focusVisible"],
        label: ["label", n && `label${W(n)}`],
        startDecorator: ["startDecorator"],
        endDecorator: ["endDecorator"],
      };
    return le(a, AR, {});
  },
  WR = H("div", {
    name: "JoyChip",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o;
    const i = (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
      { borderRadius: l } = Ui({ theme: e, ownerState: t }, ["borderRadius"]);
    return [
      h(
        {
          "--Chip-decoratorChildOffset":
            "min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))",
          "--Chip-decoratorChildRadius":
            "max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))",
          "--Chip-deleteRadius": "var(--Chip-decoratorChildRadius)",
          "--Chip-deleteSize": "var(--Chip-decoratorChildHeight)",
          "--Avatar-radius": "var(--Chip-decoratorChildRadius)",
          "--Avatar-size": "var(--Chip-decoratorChildHeight)",
          "--Icon-margin": "initial",
          "--Icon-color": "currentColor",
          "--unstable_actionRadius": "var(--_Chip-radius)",
        },
        t.size === "sm" && {
          "--Chip-paddingInline": "0.375rem",
          "--Chip-decoratorChildHeight":
            "calc(var(--_Chip-minHeight) - 2 * var(--variant-borderWidth))",
          "--Icon-fontSize": e.vars.fontSize.sm,
          "--_Chip-minHeight": "var(--Chip-minHeight, 1.25rem)",
          gap: "3px",
        },
        t.size === "md" && {
          "--Chip-paddingInline": "0.5rem",
          "--Chip-decoratorChildHeight":
            "calc(var(--_Chip-minHeight) - 0.25rem - 2 * var(--variant-borderWidth))",
          "--Icon-fontSize": e.vars.fontSize.md,
          "--_Chip-minHeight": "var(--Chip-minHeight, 1.5rem)",
          gap: "0.25rem",
        },
        t.size === "lg" && {
          "--Chip-paddingInline": "0.75rem",
          "--Chip-decoratorChildHeight":
            "calc(var(--_Chip-minHeight) - 0.375rem - 2 * var(--variant-borderWidth))",
          "--Icon-fontSize": e.vars.fontSize.lg,
          "--_Chip-minHeight": "var(--Chip-minHeight, 1.75rem)",
          gap: "0.375rem",
        },
        {
          "--_Chip-radius": "var(--Chip-radius, 1.5rem)",
          "--_Chip-paddingBlock":
            "max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)",
          minHeight: "var(--_Chip-minHeight)",
          maxWidth: "max-content",
          paddingInline: "var(--Chip-paddingInline)",
          borderRadius: "var(--_Chip-radius)",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
          textDecoration: "none",
          verticalAlign: "middle",
          boxSizing: "border-box",
        },
        e.typography[`body-${{ sm: "xs", md: "sm", lg: "md" }[t.size]}`],
        {
          fontWeight: e.vars.fontWeight.md,
          [`&.${Zc.disabled}`]: {
            color:
              (r = e.variants[`${t.variant}Disabled`]) == null ||
              (r = r[t.color]) == null
                ? void 0
                : r.color,
          },
        },
      ),
      ...(t.clickable
        ? [
            {
              "--variant-borderWidth": "0px",
              color: i == null ? void 0 : i.color,
            },
          ]
        : [
            h({ backgroundColor: e.vars.palette.background.surface }, i, {
              [`&.${Zc.disabled}`]:
                (o = e.variants[`${t.variant}Disabled`]) == null
                  ? void 0
                  : o[t.color],
            }),
          ]),
      l !== void 0 && { "--_Chip-radius": l },
    ];
  }),
  UR = H("span", {
    name: "JoyChip",
    slot: "Label",
    overridesResolver: (e, t) => t.label,
  })(({ ownerState: e }) =>
    h(
      {
        display: "inline-block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        order: 1,
        minInlineSize: 0,
        flexGrow: 1,
      },
      e.clickable && { zIndex: 1, pointerEvents: "none" },
    ),
  ),
  KR = H("button", {
    name: "JoyChip",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i;
    return [
      {
        "--Icon-color":
          t.color !== "neutral" || t.variant === "solid"
            ? "currentColor"
            : e.vars.palette.text.icon,
        position: "absolute",
        zIndex: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        border: "none",
        cursor: "pointer",
        padding: "initial",
        margin: "initial",
        backgroundColor: "initial",
        textDecoration: "none",
        borderRadius: "inherit",
        [e.focus.selector]: e.focus.default,
      },
      h(
        { backgroundColor: e.vars.palette.background.surface },
        (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
      ),
      {
        "&:hover": {
          "@media (hover: hover)":
            (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color],
        },
      },
      {
        "&:active":
          (o = e.variants[`${t.variant}Active`]) == null ? void 0 : o[t.color],
      },
      {
        [`&.${Zc.disabled}`]:
          (i = e.variants[`${t.variant}Disabled`]) == null
            ? void 0
            : i[t.color],
      },
    ];
  }),
  GR = H("span", {
    name: "JoyChip",
    slot: "StartDecorator",
    overridesResolver: (e, t) => t.startDecorator,
  })({
    "--Avatar-marginInlineStart": "calc(var(--Chip-decoratorChildOffset) * -1)",
    "--IconButton-margin":
      "0 calc(-1 * var(--Chip-paddingInline) / 3) 0 calc(var(--Chip-decoratorChildOffset) * -1)",
    "--Icon-margin": "0 0 0 calc(var(--Chip-paddingInline) / -4)",
    display: "inherit",
    order: 0,
    zIndex: 1,
    pointerEvents: "none",
  }),
  JR = H("span", {
    name: "JoyChip",
    slot: "EndDecorator",
    overridesResolver: (e, t) => t.endDecorator,
  })({
    "--IconButton-margin":
      "0 calc(var(--Chip-decoratorChildOffset) * -1) 0 calc(-1 * var(--Chip-paddingInline) / 3)",
    "--Icon-margin": "0 calc(var(--Chip-paddingInline) / -4) 0 0",
    display: "inherit",
    order: 2,
    zIndex: 1,
    pointerEvents: "none",
  }),
  XR = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyChip" }),
      {
        children: o,
        className: i,
        color: l = "neutral",
        onClick: a,
        disabled: s = !1,
        size: c = "md",
        variant: d = "soft",
        startDecorator: v,
        endDecorator: m,
        component: y,
        slots: b = {},
        slotProps: x = {},
      } = r,
      $ = Y(r, HR),
      f = !!a || !!x.action,
      p = h({}, r, {
        disabled: s,
        size: c,
        color: l,
        variant: d,
        clickable: f,
        focusVisible: !1,
      }),
      u = typeof x.action == "function" ? x.action(p) : x.action,
      k = g.useRef(null),
      { focusVisible: S, getRootProps: R } = ir(
        h({}, u, { disabled: s, rootRef: k }),
      );
    p.focusVisible = S;
    const I = VR(p),
      P = h({}, $, { component: y, slots: b, slotProps: x }),
      [D, w] = U("root", {
        ref: n,
        className: Ve(I.root, i),
        elementType: WR,
        externalForwardedProps: P,
        ownerState: p,
      }),
      [T, M] = U("label", {
        className: I.label,
        elementType: UR,
        externalForwardedProps: P,
        ownerState: p,
      }),
      O = $t(M.id),
      [F, B] = U("action", {
        className: I.action,
        elementType: KR,
        externalForwardedProps: P,
        ownerState: p,
        getSlotProps: R,
        additionalProps: {
          "aria-labelledby": O,
          as: u == null ? void 0 : u.component,
          onClick: a,
        },
      }),
      [E, _] = U("startDecorator", {
        className: I.startDecorator,
        elementType: GR,
        externalForwardedProps: P,
        ownerState: p,
      }),
      [z, L] = U("endDecorator", {
        className: I.endDecorator,
        elementType: JR,
        externalForwardedProps: P,
        ownerState: p,
      }),
      V = g.useMemo(() => ({ disabled: s }), [s]);
    return C.jsx(NR.Provider, {
      value: V,
      children: C.jsx(Md, {
        variant: d,
        color: l,
        children: C.jsxs(
          D,
          h({}, w, {
            children: [
              f && C.jsx(F, h({}, B)),
              C.jsx(T, h({}, M, { id: O, children: o })),
              v && C.jsx(E, h({}, _, { children: v })),
              m && C.jsx(z, h({}, L, { children: m })),
            ],
          }),
        ),
      }),
    });
  }),
  Zp = XR;
function YR(e) {
  return ce("MuiFormControl", e);
}
const QR = ue("MuiFormControl", [
    "root",
    "error",
    "disabled",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "sizeSm",
    "sizeMd",
    "sizeLg",
    "horizontal",
    "vertical",
  ]),
  ev = QR,
  qR = ue("MuiSwitch", [
    "root",
    "checked",
    "disabled",
    "action",
    "input",
    "thumb",
    "track",
    "focusVisible",
    "readOnly",
    "colorPrimary",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "sizeSm",
    "sizeMd",
    "sizeLg",
    "variantOutlined",
    "variantSoft",
    "variantSolid",
    "startDecorator",
    "endDecorator",
  ]),
  ZR = qR,
  eP = [
    "id",
    "className",
    "component",
    "disabled",
    "required",
    "error",
    "color",
    "size",
    "orientation",
    "slots",
    "slotProps",
  ],
  tP = (e) => {
    const { disabled: t, error: n, size: r, color: o, orientation: i } = e,
      l = {
        root: [
          "root",
          i,
          t && "disabled",
          n && "error",
          o && `color${W(o)}`,
          r && `size${W(r)}`,
        ],
      };
    return le(l, YR, {});
  },
  nP = H("div", {
    name: "JoyFormControl",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o;
    return h(
      {
        "--unstable_RadioGroup-margin": "0.5rem 0",
        "--FormLabel-alignSelf":
          t.orientation === "horizontal" ? "align-items" : "flex-start",
        "--FormLabel-asteriskColor": e.vars.palette.danger[500],
      },
      t.size === "sm" && {
        "--FormLabel-fontSize": e.vars.fontSize.xs,
        "--FormLabel-lineHeight": e.vars.lineHeight.xl,
        "--FormLabel-margin":
          t.orientation === "horizontal" ? "0 0.5rem 0 0" : "0 0 0.25rem 0",
        "--FormHelperText-fontSize": e.vars.fontSize.xs,
        "--FormHelperText-lineHeight": e.vars.lineHeight.xl,
      },
      t.size === "md" && {
        "--FormLabel-fontSize": e.vars.fontSize.sm,
        "--FormLabel-lineHeight": e.vars.lineHeight.sm,
        "--FormLabel-margin":
          t.orientation === "horizontal" ? "0 0.75rem 0 0" : "0 0 0.375rem 0",
        "--FormHelperText-fontSize": e.vars.fontSize.sm,
        "--FormHelperText-lineHeight": e.vars.lineHeight.sm,
      },
      t.size === "lg" && {
        "--FormLabel-fontSize": e.vars.fontSize.md,
        "--FormLabel-lineHeight": e.vars.lineHeight.md,
        "--FormLabel-margin":
          t.orientation === "horizontal" ? "0 1rem 0 0" : "0 0 0.5rem 0",
        "--FormHelperText-fontSize": e.vars.fontSize.sm,
        "--FormHelperText-lineHeight": e.vars.lineHeight.sm,
      },
      t.color && {
        "--FormHelperText-color":
          (n = e.vars.palette[t.color]) == null ? void 0 : n[500],
      },
      {
        "--FormHelperText-margin": "0.375rem 0 0 0",
        [`&.${ev.error}`]: {
          "--FormHelperText-color": e.vars.palette.danger[500],
        },
        [`&.${ev.disabled}`]: {
          "--FormLabel-color":
            (r = e.variants.plainDisabled) == null ||
            (r = r[t.color || "neutral"]) == null
              ? void 0
              : r.color,
          "--FormHelperText-color":
            (o = e.variants.plainDisabled) == null ||
            (o = o[t.color || "neutral"]) == null
              ? void 0
              : o.color,
        },
        display: "flex",
        position: "relative",
        flexDirection: t.orientation === "horizontal" ? "row" : "column",
      },
      t.orientation === "horizontal" && {
        [`& > label ~ .${ZR.root}`]: {
          "--unstable_Switch-margin": "0 0 0 auto",
        },
      },
    );
  }),
  rP = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyFormControl" }),
      {
        id: o,
        className: i,
        component: l = "div",
        disabled: a = !1,
        required: s = !1,
        error: c = !1,
        color: d,
        size: v = "md",
        orientation: m = "vertical",
        slots: y = {},
        slotProps: b = {},
      } = r,
      x = Y(r, eP),
      $ = $t(o),
      [f, p] = g.useState(null),
      u = h({}, r, {
        id: $,
        component: l,
        color: d,
        disabled: a,
        error: c,
        required: s,
        size: v,
        orientation: m,
      });
    let k;
    const S = tP(u),
      [R, I] = U("root", {
        ref: n,
        className: Ve(S.root, i),
        elementType: nP,
        externalForwardedProps: h({}, x, {
          component: l,
          slots: y,
          slotProps: b,
        }),
        ownerState: u,
      }),
      P = g.useMemo(
        () => ({
          disabled: a,
          required: s,
          error: c,
          color: d,
          size: v,
          htmlFor: $,
          labelId: `${$}-label`,
          "aria-describedby": f ? `${$}-helper-text` : void 0,
          setHelperText: p,
          registerEffect: k,
        }),
        [d, a, c, f, $, k, s, v],
      );
    return C.jsx(tr.Provider, { value: P, children: C.jsx(R, h({}, I)) });
  }),
  Bl = rP;
function oP(e) {
  return ce("MuiFormLabel", e);
}
ue("MuiFormLabel", ["root", "asterisk"]);
const iP = ["children", "component", "slots", "slotProps"],
  lP = () => le({ root: ["root"], asterisk: ["asterisk"] }, oP, {}),
  aP = H("label", {
    name: "JoyFormLabel",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    "--Icon-fontSize": "calc(var(--FormLabel-lineHeight) * 1em)",
    WebkitTapHighlightColor: "transparent",
    alignSelf: "var(--FormLabel-alignSelf)",
    display: "flex",
    gap: "2px",
    alignItems: "center",
    flexWrap: "wrap",
    userSelect: "none",
    fontFamily: e.vars.fontFamily.body,
    fontSize: `var(--FormLabel-fontSize, ${e.vars.fontSize.sm})`,
    fontWeight: e.vars.fontWeight.md,
    lineHeight: `var(--FormLabel-lineHeight, ${e.vars.lineHeight.sm})`,
    color: `var(--FormLabel-color, ${e.vars.palette.text.primary})`,
    margin: "var(--FormLabel-margin, 0px)",
  })),
  sP = H("span", {
    name: "JoyFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })({ color: "var(--FormLabel-asteriskColor)" }),
  cP = g.forwardRef(function (t, n) {
    var r, o;
    const i = de({ props: t, name: "JoyFormLabel" }),
      {
        children: l,
        component: a = "label",
        slots: s = {},
        slotProps: c = {},
      } = i,
      d = Y(i, iP),
      v = g.useContext(tr),
      m =
        (r = (o = t.required) != null ? o : v == null ? void 0 : v.required) !=
        null
          ? r
          : !1,
      y = h({}, i, { required: m }),
      b = lP(),
      x = h({}, d, { component: a, slots: s, slotProps: c }),
      [$, f] = U("root", {
        additionalProps: {
          htmlFor: v == null ? void 0 : v.htmlFor,
          id: v == null ? void 0 : v.labelId,
        },
        ref: n,
        className: b.root,
        elementType: aP,
        externalForwardedProps: x,
        ownerState: y,
      }),
      [p, u] = U("asterisk", {
        additionalProps: { "aria-hidden": !0 },
        className: b.asterisk,
        elementType: sP,
        externalForwardedProps: x,
        ownerState: y,
      });
    return C.jsxs(
      $,
      h({}, f, {
        children: [l, m && C.jsxs(p, h({}, u, { children: [" ", "*"] }))],
      }),
    );
  }),
  Ol = cP;
function uP(e) {
  return ce("MuiTable", e);
}
ue("MuiTable", [
  "root",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "sizeSm",
  "sizeMd",
  "sizeLg",
  "stickyHeader",
  "stickyFooter",
  "noWrap",
  "hoverRow",
  "borderAxisNone",
  "borderAxisX",
  "borderAxisXBetween",
  "borderAxisY",
  "borderAxisYBetween",
  "borderAxisBoth",
  "borderAxisBothBetween",
]);
const dP = [
    "className",
    "component",
    "children",
    "borderAxis",
    "hoverRow",
    "noWrap",
    "size",
    "variant",
    "color",
    "stripe",
    "stickyHeader",
    "stickyFooter",
    "slots",
    "slotProps",
  ],
  fP = (e) => {
    const {
        size: t,
        variant: n,
        color: r,
        borderAxis: o,
        stickyHeader: i,
        stickyFooter: l,
        noWrap: a,
        hoverRow: s,
      } = e,
      c = {
        root: [
          "root",
          i && "stickyHeader",
          l && "stickyFooter",
          a && "noWrap",
          s && "hoverRow",
          o && `borderAxis${W(o)}`,
          n && `variant${W(n)}`,
          r && `color${W(r)}`,
          t && `size${W(t)}`,
        ],
      };
    return le(c, uP, {});
  },
  We = {
    getColumnExceptFirst() {
      return "& tr > *:not(:first-of-type), & tr > th + td, & tr > td + th";
    },
    getCell() {
      return "& th, & td";
    },
    getHeadCell() {
      return "& th";
    },
    getHeaderCell() {
      return "& thead th";
    },
    getHeaderCellOfRow(e) {
      return `& thead tr:nth-of-type(${e}) th`;
    },
    getBottomHeaderCell() {
      return "& thead th:not([colspan])";
    },
    getHeaderNestedFirstColumn() {
      return "& thead tr:not(:first-of-type) th:not([colspan]):first-of-type";
    },
    getDataCell() {
      return "& td";
    },
    getDataCellExceptLastRow() {
      return "& tr:not(:last-of-type) > td";
    },
    getBodyCellExceptLastRow() {
      return `${this.getDataCellExceptLastRow()}, & tr:not(:last-of-type) > th[scope="row"]`;
    },
    getBodyCellOfRow(e) {
      return typeof e == "number" && e < 0
        ? `& tbody tr:nth-last-of-type(${Math.abs(
            e,
          )}) td, & tbody tr:nth-last-of-type(${Math.abs(e)}) th[scope="row"]`
        : `& tbody tr:nth-of-type(${e}) td, & tbody tr:nth-of-type(${e}) th[scope="row"]`;
    },
    getBodyRow(e) {
      return e === void 0 ? "& tbody tr" : `& tbody tr:nth-of-type(${e})`;
    },
    getFooterCell() {
      return "& tfoot th, & tfoot td";
    },
    getFooterFirstRowCell() {
      return "& tfoot tr:not(:last-of-type) th, & tfoot tr:not(:last-of-type) td";
    },
  },
  pP = H("table", {
    name: "JoyTable",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l, a, s;
    const c = (n = e.variants[t.variant]) == null ? void 0 : n[t.color];
    return [
      h(
        {
          "--Table-headerUnderlineThickness": "2px",
          "--TableCell-borderColor":
            (r = c == null ? void 0 : c.borderColor) != null
              ? r
              : e.vars.palette.divider,
          "--TableCell-headBackground": `var(--Sheet-background, ${e.vars.palette.background.surface})`,
        },
        t.size === "sm" && {
          "--unstable_TableCell-height": "var(--TableCell-height, 32px)",
          "--TableCell-paddingX": "0.25rem",
          "--TableCell-paddingY": "0.25rem",
        },
        t.size === "md" && {
          "--unstable_TableCell-height": "var(--TableCell-height, 40px)",
          "--TableCell-paddingX": "0.5rem",
          "--TableCell-paddingY": "0.375rem",
        },
        t.size === "lg" && {
          "--unstable_TableCell-height": "var(--TableCell-height, 48px)",
          "--TableCell-paddingX": "0.75rem",
          "--TableCell-paddingY": "0.5rem",
        },
        {
          tableLayout: "fixed",
          width: "100%",
          borderSpacing: "0px",
          borderCollapse: "separate",
          borderRadius:
            "var(--TableCell-cornerRadius, var(--unstable_actionRadius))",
        },
        e.typography[`body-${{ sm: "xs", md: "sm", lg: "md" }[t.size]}`],
        (o = e.variants[t.variant]) == null ? void 0 : o[t.color],
        {
          "& caption": {
            color: e.vars.palette.text.tertiary,
            padding:
              "calc(2 * var(--TableCell-paddingY)) var(--TableCell-paddingX)",
          },
          [We.getDataCell()]: h(
            {
              padding: "var(--TableCell-paddingY) var(--TableCell-paddingX)",
              height: "var(--unstable_TableCell-height)",
              borderColor: "var(--TableCell-borderColor)",
              backgroundColor: "var(--TableCell-dataBackground)",
            },
            t.noWrap && {
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            },
          ),
          [We.getHeadCell()]: {
            textAlign: "left",
            padding: "var(--TableCell-paddingY) var(--TableCell-paddingX)",
            backgroundColor: "var(--TableCell-headBackground)",
            height: "var(--unstable_TableCell-height)",
            fontWeight: e.vars.fontWeight.lg,
            borderColor: "var(--TableCell-borderColor)",
            color: e.vars.palette.text.secondary,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
          [We.getHeaderCell()]: {
            verticalAlign: "bottom",
            "&:first-of-type": {
              borderTopLeftRadius:
                "var(--TableCell-cornerRadius, var(--unstable_actionRadius))",
            },
            "&:last-of-type": {
              borderTopRightRadius:
                "var(--TableCell-cornerRadius, var(--unstable_actionRadius))",
            },
          },
          "& tfoot tr > *": {
            backgroundColor: `var(--TableCell-footBackground, ${e.vars.palette.background.level1})`,
            "&:first-of-type": {
              borderBottomLeftRadius:
                "var(--TableCell-cornerRadius, var(--unstable_actionRadius))",
            },
            "&:last-of-type": {
              borderBottomRightRadius:
                "var(--TableCell-cornerRadius, var(--unstable_actionRadius))",
            },
          },
        },
      ),
      (((i = t.borderAxis) == null ? void 0 : i.startsWith("x")) ||
        ((l = t.borderAxis) == null ? void 0 : l.startsWith("both"))) && {
        [We.getHeaderCell()]: {
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
        },
        [We.getBottomHeaderCell()]: {
          borderBottomWidth: "var(--Table-headerUnderlineThickness)",
          borderBottomStyle: "solid",
        },
        [We.getBodyCellExceptLastRow()]: {
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
        },
        [We.getFooterCell()]: { borderTopWidth: 1, borderTopStyle: "solid" },
      },
      (((a = t.borderAxis) == null ? void 0 : a.startsWith("y")) ||
        ((s = t.borderAxis) == null ? void 0 : s.startsWith("both"))) && {
        [`${We.getColumnExceptFirst()}, ${We.getHeaderNestedFirstColumn()}`]: {
          borderLeftWidth: 1,
          borderLeftStyle: "solid",
        },
      },
      (t.borderAxis === "x" || t.borderAxis === "both") && {
        [We.getHeaderCellOfRow(1)]: {
          borderTopWidth: 1,
          borderTopStyle: "solid",
        },
        [We.getBodyCellOfRow(-1)]: {
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
        },
        [We.getFooterCell()]: {
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
        },
      },
      (t.borderAxis === "y" || t.borderAxis === "both") && {
        "& tr > *:first-of-type": {
          borderLeftWidth: 1,
          borderLeftStyle: "solid",
        },
        "& tr > *:last-of-type:not(:first-of-type)": {
          borderRightWidth: 1,
          borderRightStyle: "solid",
        },
      },
      t.stripe && {
        [We.getBodyRow(t.stripe)]: {
          background: `var(--TableRow-stripeBackground, ${e.vars.palette.background.level2})`,
          color: e.vars.palette.text.primary,
        },
      },
      t.hoverRow && {
        [We.getBodyRow()]: {
          "&:hover": {
            background: `var(--TableRow-hoverBackground, ${e.vars.palette.background.level3})`,
          },
        },
      },
      t.stickyHeader && {
        [We.getHeaderCell()]: {
          position: "sticky",
          top: 0,
          zIndex: e.vars.zIndex.table,
        },
        [We.getHeaderCellOfRow(2)]: { top: "var(--unstable_TableCell-height)" },
      },
      t.stickyFooter && {
        [We.getFooterCell()]: {
          position: "sticky",
          bottom: 0,
          zIndex: e.vars.zIndex.table,
          color: e.vars.palette.text.secondary,
          fontWeight: e.vars.fontWeight.lg,
        },
        [We.getFooterFirstRowCell()]: {
          bottom: "var(--unstable_TableCell-height)",
        },
      },
    ];
  }),
  vP = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyTable" }),
      {
        className: o,
        component: i,
        children: l,
        borderAxis: a = "xBetween",
        hoverRow: s = !1,
        noWrap: c = !1,
        size: d = "md",
        variant: v = "plain",
        color: m = "neutral",
        stripe: y,
        stickyHeader: b = !1,
        stickyFooter: x = !1,
        slots: $ = {},
        slotProps: f = {},
      } = r,
      p = Y(r, dP),
      u = h({}, r, {
        borderAxis: a,
        hoverRow: s,
        noWrap: c,
        component: i,
        size: d,
        color: m,
        variant: v,
        stripe: y,
        stickyHeader: b,
        stickyFooter: x,
      }),
      k = fP(u),
      S = h({}, p, { component: i, slots: $, slotProps: f }),
      [R, I] = U("root", {
        ref: n,
        className: Ve(k.root, o),
        elementType: pP,
        externalForwardedProps: S,
        ownerState: u,
      });
    return C.jsx(os.Provider, {
      value: !0,
      children: C.jsx(R, h({}, I, { children: l })),
    });
  }),
  mP = vP;
function hP(e) {
  return ce("MuiCheckbox", e);
}
const gP = ue("MuiCheckbox", [
    "root",
    "checkbox",
    "action",
    "input",
    "label",
    "checked",
    "disabled",
    "focusVisible",
    "indeterminate",
    "colorPrimary",
    "colorDanger",
    "colorNeutral",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "sizeSm",
    "sizeMd",
    "sizeLg",
    "variantOutlined",
    "variantSoft",
    "variantSolid",
  ]),
  eo = gP;
function yP(e) {
  return ce("MuiSvgIcon", e);
}
ue("MuiSvgIcon", [
  "root",
  "colorInherit",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "fontSizeInherit",
  "fontSizeXs",
  "fontSizeSm",
  "fontSizeMd",
  "fontSizeLg",
  "fontSizeXl",
  "fontSizeXl2",
  "fontSizeXl3",
  "fontSizeXl4",
  "sizeSm",
  "sizeMd",
  "sizeLg",
]);
const xP = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
    "size",
    "slots",
    "slotProps",
  ],
  CP = (e) => {
    const { color: t, size: n, fontSize: r } = e,
      o = {
        root: [
          "root",
          t && t !== "inherit" && `color${W(t)}`,
          n && `size${W(n)}`,
          r && `fontSize${W(r)}`,
        ],
      };
    return le(o, yP, {});
  },
  tv = { sm: "xl", md: "xl2", lg: "xl3" },
  bP = H("svg", {
    name: "JoySvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n;
    return h(
      {},
      t.instanceSize && {
        "--Icon-fontSize": e.vars.fontSize[tv[t.instanceSize]],
      },
      t.instanceFontSize &&
        t.instanceFontSize !== "inherit" && {
          "--Icon-fontSize": e.vars.fontSize[t.instanceFontSize],
        },
      {
        userSelect: "none",
        margin: "var(--Icon-margin)",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: t.hasSvgAsChild ? void 0 : "currentColor",
        flexShrink: 0,
        fontSize: `var(--Icon-fontSize, ${
          e.vars.fontSize[tv[t.size]] || "unset"
        })`,
      },
      t.fontSize &&
        t.fontSize !== "inherit" && {
          fontSize: `var(--Icon-fontSize, ${e.fontSize[t.fontSize]})`,
        },
      !t.htmlColor &&
        h(
          { color: `var(--Icon-color, ${e.vars.palette.text.icon})` },
          t.color === "inherit" && { color: "inherit" },
          t.color !== "inherit" &&
            e.vars.palette[t.color] && {
              color: `rgba(${
                (n = e.vars.palette[t.color]) == null ? void 0 : n.mainChannel
              } / 1)`,
            },
        ),
    );
  }),
  SP = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoySvgIcon" }),
      {
        children: o,
        className: i,
        color: l,
        component: a = "svg",
        fontSize: s,
        htmlColor: c,
        inheritViewBox: d = !1,
        titleAccess: v,
        viewBox: m = "0 0 24 24",
        size: y = "md",
        slots: b = {},
        slotProps: x = {},
      } = r,
      $ = Y(r, xP),
      f = g.isValidElement(o) && o.type === "svg",
      p = h({}, r, {
        color: l,
        component: a,
        size: y,
        instanceSize: t.size,
        fontSize: s,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: m,
        hasSvgAsChild: f,
      }),
      u = CP(p),
      k = h({}, $, { component: a, slots: b, slotProps: x }),
      [S, R] = U("root", {
        ref: n,
        className: Ve(u.root, i),
        elementType: bP,
        externalForwardedProps: k,
        ownerState: p,
        additionalProps: h(
          { color: c, focusable: !1 },
          v && { role: "img" },
          !v && { "aria-hidden": !0 },
          !d && { viewBox: m },
          f && o.props,
        ),
      });
    return C.jsxs(
      S,
      h({}, R, {
        children: [
          f ? o.props.children : o,
          v ? C.jsx("title", { children: v }) : null,
        ],
      }),
    );
  }),
  nv = SP;
function Gi(e, t) {
  function n(r, o) {
    return C.jsx(
      nv,
      h({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }),
    );
  }
  return (n.muiName = nv.muiName), g.memo(g.forwardRef(n));
}
const kP = Gi(
    C.jsx("path", {
      d: "M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z",
    }),
    "Check",
  ),
  $P = Gi(
    C.jsx("path", {
      d: "M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z",
    }),
    "HorizontalRule",
  ),
  IP = [
    "checked",
    "uncheckedIcon",
    "checkedIcon",
    "label",
    "defaultChecked",
    "disabled",
    "disableIcon",
    "overlay",
    "id",
    "indeterminate",
    "indeterminateIcon",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "onFocusVisible",
    "readOnly",
    "required",
    "value",
    "color",
    "variant",
    "size",
    "component",
    "slots",
    "slotProps",
  ],
  RP = (e) => {
    const {
        checked: t,
        disabled: n,
        disableIcon: r,
        focusVisible: o,
        color: i,
        variant: l,
        size: a,
        indeterminate: s,
      } = e,
      c = {
        root: [
          "root",
          t && "checked",
          n && "disabled",
          o && "focusVisible",
          l && `variant${W(l)}`,
          i && `color${W(i)}`,
          a && `size${W(a)}`,
        ],
        checkbox: [
          "checkbox",
          t && "checked",
          s && "indeterminate",
          n && "disabled",
        ],
        action: [
          "action",
          t && "checked",
          r && n && "disabled",
          o && "focusVisible",
        ],
        input: ["input"],
        label: ["label"],
      };
    return le(c, hP, {});
  },
  PP = H("span", {
    name: "JoyCheckbox",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) => {
    var n, r, o;
    return h(
      { "--Icon-fontSize": "var(--Checkbox-size)" },
      e.size === "sm" && {
        "--Checkbox-size": "1rem",
        "& ~ *": { "--FormHelperText-margin": "0 0 0 1.5rem" },
        fontSize: t.vars.fontSize.sm,
        gap: "var(--Checkbox-gap, 0.5rem)",
      },
      e.size === "md" && {
        "--Checkbox-size": "1.25rem",
        "& ~ *": { "--FormHelperText-margin": "0.25rem 0 0 1.875rem" },
        fontSize: t.vars.fontSize.md,
        gap: "var(--Checkbox-gap, 0.625rem)",
      },
      e.size === "lg" && {
        "--Checkbox-size": "1.5rem",
        "& ~ *": { "--FormHelperText-margin": "0.375rem 0 0 2.25rem" },
        fontSize: t.vars.fontSize.lg,
        gap: "var(--Checkbox-gap, 0.75rem)",
      },
      {
        position: e.overlay ? "initial" : "relative",
        display: "inline-flex",
        fontFamily: t.vars.fontFamily.body,
        lineHeight: "var(--Checkbox-size)",
        color: t.vars.palette.text.primary,
        [`&.${eo.disabled}`]: {
          color:
            (n = t.variants.plainDisabled) == null || (n = n[e.color]) == null
              ? void 0
              : n.color,
        },
      },
      e.disableIcon && {
        color:
          (r = t.variants[e.variant]) == null || (r = r[e.color]) == null
            ? void 0
            : r.color,
        [`&.${eo.disabled}`]: {
          color:
            (o = t.variants[`${e.variant}Disabled`]) == null ||
            (o = o[e.color]) == null
              ? void 0
              : o.color,
        },
      },
    );
  }),
  wP = H("span", {
    name: "JoyCheckbox",
    slot: "Checkbox",
    overridesResolver: (e, t) => t.checkbox,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l;
    const a = (n = e.variants[`${t.variant}`]) == null ? void 0 : n[t.color];
    return [
      h(
        {
          "--Icon-color":
            t.color !== "neutral" || t.variant === "solid"
              ? "currentColor"
              : e.vars.palette.text.icon,
          boxSizing: "border-box",
          borderRadius: `min(${e.vars.radius.sm}, 0.25rem)`,
          width: "var(--Checkbox-size)",
          height: "var(--Checkbox-size)",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        },
        t.disableIcon && { display: "contents" },
        {
          [`&.${eo.checked}, &.${eo.indeterminate}`]: {
            "--Icon-color": "currentColor",
          },
        },
      ),
      ...(t.disableIcon
        ? []
        : [
            h({}, a, {
              backgroundColor:
                (r = a == null ? void 0 : a.backgroundColor) != null
                  ? r
                  : e.vars.palette.background.surface,
            }),
            {
              "&:hover": {
                "@media (hover: hover)":
                  (o = e.variants[`${t.variant}Hover`]) == null
                    ? void 0
                    : o[t.color],
              },
            },
            {
              "&:active":
                (i = e.variants[`${t.variant}Active`]) == null
                  ? void 0
                  : i[t.color],
            },
            {
              [`&.${eo.disabled}`]:
                (l = e.variants[`${t.variant}Disabled`]) == null
                  ? void 0
                  : l[t.color],
            },
          ]),
    ];
  }),
  zP = H("span", {
    name: "JoyCheckbox",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i;
    return [
      {
        borderRadius: `var(--Checkbox-actionRadius, ${
          t.overlay ? "var(--unstable_actionRadius, inherit)" : "inherit"
        })`,
        textAlign: "left",
        position: "absolute",
        top: "calc(-1 * var(--variant-borderWidth, 0px))",
        left: "calc(-1 * var(--variant-borderWidth, 0px))",
        bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
        right: "calc(-1 * var(--variant-borderWidth, 0px))",
        zIndex: 1,
        [e.focus.selector]: e.focus.default,
      },
      ...(t.disableIcon
        ? [
            (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
            {
              "&:hover":
                (r = e.variants[`${t.variant}Hover`]) == null
                  ? void 0
                  : r[t.color],
            },
            {
              "&:active":
                (o = e.variants[`${t.variant}Active`]) == null
                  ? void 0
                  : o[t.color],
            },
            {
              [`&.${eo.disabled}`]:
                (i = e.variants[`${t.variant}Disabled`]) == null
                  ? void 0
                  : i[t.color],
            },
          ]
        : []),
    ];
  }),
  _P = H("input", {
    name: "JoyCheckbox",
    slot: "Input",
    overridesResolver: (e, t) => t.input,
  })(() => ({
    margin: 0,
    opacity: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  })),
  EP = H("label", {
    name: "JoyCheckbox",
    slot: "Label",
    overridesResolver: (e, t) => t.label,
  })(({ ownerState: e }) =>
    h(
      { flex: 1, minWidth: 0 },
      e.disableIcon && { zIndex: 1, pointerEvents: "none" },
    ),
  ),
  DP = C.jsx(kP, {}),
  TP = C.jsx($P, {}),
  LP = g.forwardRef(function (t, n) {
    var r, o, i, l, a;
    const s = de({ props: t, name: "JoyCheckbox" }),
      {
        checked: c,
        uncheckedIcon: d,
        checkedIcon: v = DP,
        label: m,
        defaultChecked: y,
        disabled: b,
        disableIcon: x = !1,
        overlay: $,
        id: f,
        indeterminate: p = !1,
        indeterminateIcon: u = TP,
        name: k,
        onBlur: S,
        onChange: R,
        onFocus: I,
        onFocusVisible: P,
        readOnly: D,
        required: w,
        value: T,
        color: M,
        variant: O,
        size: F = "md",
        component: B,
        slots: E = {},
        slotProps: _ = {},
      } = s,
      z = Y(s, IP),
      L = g.useContext(tr),
      V =
        (r = (o = t.disabled) != null ? o : L == null ? void 0 : L.disabled) !=
        null
          ? r
          : b,
      K =
        (i = (l = t.size) != null ? l : L == null ? void 0 : L.size) != null
          ? i
          : F,
      X = $t(f ?? (L == null ? void 0 : L.htmlFor)),
      fe = {
        checked: c,
        defaultChecked: y,
        disabled: V,
        onBlur: S,
        onChange: R,
        onFocus: I,
        onFocusVisible: P,
      },
      { getInputProps: re, checked: ae, disabled: Q, focusVisible: A } = zg(fe),
      N = ae || p,
      ne = N ? O || "solid" : O || "outlined",
      Pe =
        t.color ||
        (L != null && L.error
          ? "danger"
          : (a = L == null ? void 0 : L.color) != null
            ? a
            : M),
      ye = h({}, s, {
        checked: ae,
        disabled: Q,
        disableIcon: x,
        overlay: $,
        focusVisible: A,
        color: N ? Pe || "primary" : Pe || "neutral",
        variant: ne,
        size: K,
      }),
      Ce = RP(ye),
      me = h({}, z, { component: B, slots: E, slotProps: _ }),
      [Qt, qt] = U("root", {
        ref: n,
        className: Ce.root,
        elementType: PP,
        externalForwardedProps: me,
        ownerState: ye,
      }),
      [Be, Xe] = U("checkbox", {
        className: Ce.checkbox,
        elementType: wP,
        externalForwardedProps: me,
        ownerState: ye,
      }),
      [we, ht] = U("action", {
        className: Ce.action,
        elementType: zP,
        externalForwardedProps: me,
        ownerState: ye,
      }),
      [Rt, J] = U("input", {
        additionalProps: h(
          {
            id: X,
            name: k,
            value: T,
            readOnly: D,
            required: w ?? (L == null ? void 0 : L.required),
            "aria-describedby": L == null ? void 0 : L["aria-describedby"],
          },
          p && { "aria-checked": "mixed" },
        ),
        className: Ce.input,
        elementType: _P,
        externalForwardedProps: me,
        getSlotProps: re,
        ownerState: ye,
      }),
      [Z, oe] = U("label", {
        additionalProps: { htmlFor: X },
        className: Ce.label,
        elementType: EP,
        externalForwardedProps: me,
        ownerState: ye,
      });
    let te = d;
    return (
      x ? (te = null) : p ? (te = u) : ae && (te = v),
      C.jsxs(
        Qt,
        h({}, qt, {
          children: [
            C.jsxs(
              Be,
              h({}, Xe, {
                children: [
                  C.jsx(we, h({}, ht, { children: C.jsx(Rt, h({}, J)) })),
                  te,
                ],
              }),
            ),
            m &&
              C.jsx(go.Provider, {
                value: !0,
                children: C.jsx(Z, h({}, oe, { children: m })),
              }),
          ],
        }),
      )
    );
  }),
  rv = LP;
var Ad = {},
  BP = Ln;
Object.defineProperty(Ad, "__esModule", { value: !0 });
var jd = (Ad.default = void 0),
  OP = BP(Bn()),
  MP = C,
  AP = (0, OP.default)(
    (0, MP.jsx)("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    }),
    "Search",
  );
jd = Ad.default = AP;
const jP = Gi(
  C.jsx("path", {
    d: "m12 5.83 2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 0 0-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34-2.46-2.46a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L12 18.17z",
  }),
  "Unfold",
);
function FP(e) {
  return ce("MuiSelect", e);
}
const NP = ue("MuiSelect", [
    "root",
    "button",
    "indicator",
    "startDecorator",
    "endDecorator",
    "popper",
    "listbox",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "variantPlain",
    "variantOutlined",
    "variantSoft",
    "variantSolid",
    "sizeSm",
    "sizeMd",
    "sizeLg",
    "focusVisible",
    "disabled",
    "expanded",
    "multiple",
  ]),
  to = NP;
var ov;
const HP = [
  "action",
  "autoFocus",
  "children",
  "defaultValue",
  "defaultListboxOpen",
  "disabled",
  "getSerializedValue",
  "placeholder",
  "listboxId",
  "listboxOpen",
  "onChange",
  "onListboxOpenChange",
  "onClose",
  "renderValue",
  "required",
  "value",
  "size",
  "variant",
  "color",
  "startDecorator",
  "endDecorator",
  "indicator",
  "aria-describedby",
  "aria-label",
  "aria-labelledby",
  "id",
  "name",
  "multiple",
  "slots",
  "slotProps",
];
function VP(e) {
  var t;
  return Array.isArray(e)
    ? C.jsx(g.Fragment, { children: e.map((n) => n.label).join(", ") })
    : (t = e == null ? void 0 : e.label) != null
      ? t
      : "";
}
const WP = [
    { name: "offset", options: { offset: [0, 4] } },
    {
      name: "equalWidth",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: ({ state: e }) => {
        e.styles.popper.width = `${e.rects.reference.width}px`;
      },
    },
  ],
  UP = (e) => {
    const {
        color: t,
        disabled: n,
        focusVisible: r,
        size: o,
        variant: i,
        open: l,
        multiple: a,
      } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r && "focusVisible",
          l && "expanded",
          i && `variant${W(i)}`,
          t && `color${W(t)}`,
          o && `size${W(o)}`,
          a && "multiple",
        ],
        button: ["button"],
        startDecorator: ["startDecorator"],
        endDecorator: ["endDecorator"],
        indicator: ["indicator", l && "expanded"],
        listbox: ["listbox", l && "expanded", n && "disabled"],
      };
    return le(s, FP, {});
  },
  KP = H("div", {
    name: "JoySelect",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l;
    const a = (n = e.variants[`${t.variant}`]) == null ? void 0 : n[t.color],
      { borderRadius: s } = Ui({ theme: e, ownerState: t }, ["borderRadius"]);
    return [
      h(
        {
          "--Select-radius": e.vars.radius.sm,
          "--Select-gap": "0.5rem",
          "--Select-placeholderOpacity": 0.64,
          "--Select-decoratorColor": e.vars.palette.text.icon,
          "--Select-focusedThickness": e.vars.focus.thickness,
          "--Select-focusedHighlight":
            (r = e.vars.palette[t.color === "neutral" ? "primary" : t.color]) ==
            null
              ? void 0
              : r[500],
          '&:not([data-inverted-colors="false"])': h(
            {},
            t.instanceColor && {
              "--_Select-focusedHighlight":
                (o =
                  e.vars.palette[
                    t.instanceColor === "neutral" ? "primary" : t.instanceColor
                  ]) == null
                  ? void 0
                  : o[500],
            },
            { "--Select-focusedHighlight": e.vars.palette.focusVisible },
          ),
          "--Select-indicatorColor":
            a != null && a.backgroundColor
              ? a == null
                ? void 0
                : a.color
              : e.vars.palette.text.tertiary,
        },
        t.size === "sm" && {
          "--Select-minHeight": "2rem",
          "--Select-paddingInline": "0.5rem",
          "--Select-decoratorChildHeight":
            "min(1.5rem, var(--Select-minHeight))",
          "--Icon-fontSize": e.vars.fontSize.xl,
        },
        t.size === "md" && {
          "--Select-minHeight": "2.25rem",
          "--Select-paddingInline": "0.75rem",
          "--Select-decoratorChildHeight":
            "min(1.75rem, var(--Select-minHeight))",
          "--Icon-fontSize": e.vars.fontSize.xl2,
        },
        t.size === "lg" && {
          "--Select-minHeight": "2.75rem",
          "--Select-paddingInline": "1rem",
          "--Select-decoratorChildHeight":
            "min(2.375rem, var(--Select-minHeight))",
          "--Icon-fontSize": e.vars.fontSize.xl2,
        },
        {
          "--Select-decoratorChildOffset":
            "min(calc(var(--Select-paddingInline) - (var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2), var(--Select-paddingInline))",
          "--_Select-paddingBlock":
            "max((var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2, 0px)",
          "--Select-decoratorChildRadius":
            "max(var(--Select-radius) - var(--variant-borderWidth, 0px) - var(--_Select-paddingBlock), min(var(--_Select-paddingBlock) + var(--variant-borderWidth, 0px), var(--Select-radius) / 2))",
          "--Button-minHeight": "var(--Select-decoratorChildHeight)",
          "--Button-paddingBlock": "0px",
          "--IconButton-size": "var(--Select-decoratorChildHeight)",
          "--Button-radius": "var(--Select-decoratorChildRadius)",
          "--IconButton-radius": "var(--Select-decoratorChildRadius)",
          boxSizing: "border-box",
        },
        t.variant !== "plain" && { boxShadow: e.shadow.xs },
        {
          minWidth: 0,
          minHeight: "var(--Select-minHeight)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          borderRadius: "var(--Select-radius)",
          cursor: "pointer",
        },
        !(a != null && a.backgroundColor) && {
          backgroundColor: e.vars.palette.background.surface,
        },
        t.size && { paddingBlock: { sm: 2, md: 3, lg: 4 }[t.size] },
        { paddingInline: "var(--Select-paddingInline)" },
        e.typography[`body-${t.size}`],
        a,
        {
          "&::before": {
            boxSizing: "border-box",
            content: '""',
            display: "block",
            position: "absolute",
            pointerEvents: "none",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            borderRadius: "inherit",
            margin: "calc(var(--variant-borderWidth, 0px) * -1)",
          },
          [`&.${to.focusVisible}`]: {
            "--Select-indicatorColor": a == null ? void 0 : a.color,
            "&::before": {
              boxShadow:
                "inset 0 0 0 var(--Select-focusedThickness) var(--Select-focusedHighlight)",
            },
          },
          [`&.${to.disabled}`]: { "--Select-indicatorColor": "inherit" },
        },
      ),
      {
        "&:hover":
          (i = e.variants[`${t.variant}Hover`]) == null ? void 0 : i[t.color],
        [`&.${to.disabled}`]:
          (l = e.variants[`${t.variant}Disabled`]) == null
            ? void 0
            : l[t.color],
      },
      s !== void 0 && { "--Select-radius": s },
    ];
  }),
  GP = H("button", {
    name: "JoySelect",
    slot: "Button",
    overridesResolver: (e, t) => t.button,
  })(({ ownerState: e }) =>
    h(
      {
        border: 0,
        outline: 0,
        background: "none",
        padding: 0,
        fontSize: "inherit",
        color: "inherit",
        alignSelf: "stretch",
        display: "flex",
        alignItems: "center",
        flex: 1,
        fontFamily: "inherit",
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
      (e.value === null || e.value === void 0) && {
        opacity: "var(--Select-placeholderOpacity)",
      },
      {
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: "calc(-1 * var(--variant-borderWidth, 0px))",
          left: "calc(-1 * var(--variant-borderWidth, 0px))",
          right: "calc(-1 * var(--variant-borderWidth, 0px))",
          bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
          borderRadius: "var(--Select-radius)",
        },
      },
    ),
  ),
  JP = H(as, {
    name: "JoySelect",
    slot: "Listbox",
    overridesResolver: (e, t) => t.listbox,
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = (n = e.variants[t.variant]) == null ? void 0 : n[t.color];
    return h(
      {
        "--focus-outline-offset": `calc(${e.vars.focus.thickness} * -1)`,
        "--ListItem-stickyBackground":
          (r == null ? void 0 : r.backgroundColor) ||
          (r == null ? void 0 : r.background) ||
          e.vars.palette.background.popup,
        "--ListItem-stickyTop":
          "calc(var(--List-padding, var(--ListDivider-gap)) * -1)",
      },
      Ug,
      {
        minWidth: "max-content",
        maxHeight: "44vh",
        overflow: "auto",
        outline: 0,
        boxShadow: e.shadow.md,
        borderRadius: `var(--List-radius, ${e.vars.radius.sm})`,
        zIndex: `var(--unstable_popup-zIndex, ${e.vars.zIndex.popup})`,
      },
      !(r != null && r.backgroundColor) && {
        backgroundColor: e.vars.palette.background.popup,
      },
    );
  }),
  XP = H("span", {
    name: "JoySelect",
    slot: "StartDecorator",
    overridesResolver: (e, t) => t.startDecorator,
  })({
    "--Button-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
    "--IconButton-margin":
      "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
    "--Icon-margin": "0 0 0 calc(var(--Select-paddingInline) / -4)",
    display: "inherit",
    alignItems: "center",
    color: "var(--Select-decoratorColor)",
    marginInlineEnd: "var(--Select-gap)",
  }),
  YP = H("span", {
    name: "JoySelect",
    slot: "EndDecorator",
    overridesResolver: (e, t) => t.endDecorator,
  })({
    "--Button-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
    "--IconButton-margin":
      "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
    "--Icon-margin": "0 calc(var(--Select-paddingInline) / -4) 0 0",
    display: "inherit",
    alignItems: "center",
    color: "var(--Select-decoratorColor)",
    marginInlineStart: "var(--Select-gap)",
  }),
  QP = H("span", { name: "JoySelect", slot: "Indicator" })(
    ({ ownerState: e, theme: t }) =>
      h(
        {},
        e.size === "sm" && { "--Icon-fontSize": t.vars.fontSize.lg },
        e.size === "md" && { "--Icon-fontSize": t.vars.fontSize.xl },
        e.size === "lg" && { "--Icon-fontSize": t.vars.fontSize.xl2 },
        {
          "--Icon-color":
            e.color !== "neutral" || e.variant === "solid"
              ? "currentColor"
              : t.vars.palette.text.icon,
          display: "inherit",
          alignItems: "center",
          marginInlineStart: "var(--Select-gap)",
          marginInlineEnd: "calc(var(--Select-paddingInline) / -4)",
          [`.${to.endDecorator} + &`]: {
            marginInlineStart: "calc(var(--Select-gap) / 2)",
          },
          [`&.${to.expanded}, .${to.disabled} > &`]: {
            "--Icon-color": "currentColor",
          },
        },
      ),
  ),
  qP = g.forwardRef(function (t, n) {
    var r, o, i, l, a, s, c;
    const d = de({ props: t, name: "JoySelect" }),
      v = d,
      {
        action: m,
        autoFocus: y,
        children: b,
        defaultValue: x,
        defaultListboxOpen: $ = !1,
        disabled: f,
        getSerializedValue: p,
        placeholder: u,
        listboxId: k,
        listboxOpen: S,
        onChange: R,
        onListboxOpenChange: I,
        onClose: P,
        renderValue: D,
        required: w = !1,
        value: T,
        size: M = "md",
        variant: O = "outlined",
        color: F = "neutral",
        startDecorator: B,
        endDecorator: E,
        indicator: _ = ov || (ov = C.jsx(jP, {})),
        "aria-describedby": z,
        "aria-label": L,
        "aria-labelledby": V,
        id: K,
        name: X,
        multiple: fe = !1,
        slots: re = {},
        slotProps: ae = {},
      } = v,
      Q = Y(v, HP),
      A = g.useContext(tr),
      N =
        (r = (o = t.disabled) != null ? o : A == null ? void 0 : A.disabled) !=
        null
          ? r
          : f,
      q =
        (i = (l = t.size) != null ? l : A == null ? void 0 : A.size) != null
          ? i
          : M,
      ee =
        (a = t.color) != null
          ? a
          : A != null && A.error
            ? "danger"
            : (s = A == null ? void 0 : A.color) != null
              ? s
              : F,
      ne = D ?? VP,
      [Pe, et] = g.useState(null),
      Yt = g.useRef(null),
      ye = g.useRef(null),
      Ce = g.useRef(null),
      me = ke(n, Yt);
    g.useImperativeHandle(
      m,
      () => ({
        focusVisible: () => {
          var st;
          (st = ye.current) == null || st.focus();
        },
      }),
      [],
    ),
      g.useEffect(() => {
        et(Yt.current);
      }, []),
      g.useEffect(() => {
        y && ye.current.focus();
      }, [y]);
    const Qt = g.useCallback(
        (st) => {
          I == null || I(st), st || P == null || P();
        },
        [P, I],
      ),
      {
        buttonActive: qt,
        buttonFocusVisible: Be,
        contextValue: Xe,
        disabled: we,
        getButtonProps: ht,
        getListboxProps: Rt,
        getHiddenInputProps: J,
        getOptionMetadata: Z,
        open: oe,
        value: te,
      } = T$({
        buttonRef: ye,
        defaultOpen: $,
        defaultValue: x,
        disabled: N,
        getSerializedValue: p,
        listboxId: k,
        multiple: fe,
        name: X,
        required: w,
        onChange: R,
        onOpenChange: Qt,
        open: S,
        value: T,
      }),
      Fe = h({}, d, {
        active: qt,
        defaultListboxOpen: $,
        disabled: we,
        focusVisible: Be,
        open: oe,
        renderValue: ne,
        value: te,
        size: q,
        variant: O,
        color: ee,
      }),
      Zt = UP(Fe),
      On = h({}, Q, { slots: re, slotProps: ae }),
      ar = g.useMemo(() => {
        let st;
        if (fe) st = te.map((cs) => Z(cs)).filter((cs) => cs !== void 0);
        else {
          var Kd;
          st = (Kd = Z(te)) != null ? Kd : null;
        }
        return st;
      }, [Z, te, fe]),
      [Mt, $o] = U("root", {
        ref: me,
        className: Zt.root,
        elementType: KP,
        externalForwardedProps: On,
        ownerState: Fe,
      }),
      [f0, p0] = U("button", {
        additionalProps: {
          "aria-describedby": z ?? (A == null ? void 0 : A["aria-describedby"]),
          "aria-label": L,
          "aria-labelledby": V ?? (A == null ? void 0 : A.labelId),
          "aria-required": w ? "true" : void 0,
          id: K ?? (A == null ? void 0 : A.htmlFor),
          name: X,
        },
        className: Zt.button,
        elementType: GP,
        externalForwardedProps: On,
        getSlotProps: ht,
        ownerState: Fe,
      }),
      [v0, Io] = U("listbox", {
        additionalProps: {
          ref: Ce,
          anchorEl: Pe,
          open: oe,
          placement: "bottom",
          keepMounted: !0,
        },
        className: Zt.listbox,
        elementType: JP,
        externalForwardedProps: On,
        getSlotProps: Rt,
        ownerState: h({}, Fe, { nesting: !1, row: !1, wrap: !1 }),
        getSlotOwnerState: (st) => ({
          size: st.size || q,
          variant: st.variant || O,
          color: st.color || (st.disablePortal ? ee : F),
          disableColorInversion: !st.disablePortal,
        }),
      }),
      [m0, h0] = U("startDecorator", {
        className: Zt.startDecorator,
        elementType: XP,
        externalForwardedProps: On,
        ownerState: Fe,
      }),
      [g0, y0] = U("endDecorator", {
        className: Zt.endDecorator,
        elementType: YP,
        externalForwardedProps: On,
        ownerState: Fe,
      }),
      [x0, C0] = U("indicator", {
        className: Zt.indicator,
        elementType: QP,
        externalForwardedProps: On,
        ownerState: Fe,
      }),
      b0 = g.useMemo(() => [...WP, ...(Io.modifiers || [])], [Io.modifiers]);
    let Ud = u;
    return (
      ((Array.isArray(ar) && ar.length > 0) || (!Array.isArray(ar) && ar)) &&
        (Ud = ne(ar)),
      C.jsxs(g.Fragment, {
        children: [
          C.jsxs(
            Mt,
            h({}, $o, {
              children: [
                B && C.jsx(m0, h({}, h0, { children: B })),
                C.jsx(f0, h({}, p0, { children: Ud })),
                E && C.jsx(g0, h({}, y0, { children: E })),
                _ && C.jsx(x0, h({}, C0, { children: _ })),
                C.jsx("input", h({}, J())),
              ],
            }),
          ),
          Pe &&
            C.jsx(
              v0,
              h(
                {},
                Io,
                { className: Ve(Io.className), modifiers: b0 },
                !((c = d.slots) != null && c.listbox) && {
                  as: wg,
                  slots: { root: Io.as || "ul" },
                },
                {
                  children: C.jsx(L$, {
                    value: Xe,
                    children: C.jsx(Md, {
                      variant: O,
                      color: F,
                      children: C.jsx(is.Provider, {
                        value: "select",
                        children: C.jsx(ls, { nested: !0, children: b }),
                      }),
                    }),
                  }),
                },
              ),
            ),
        ],
      })
    );
  }),
  Us = qP;
function ZP(e) {
  return ce("MuiOption", e);
}
const ew = ue("MuiOption", [
    "root",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "focusVisible",
    "disabled",
    "selected",
    "highlighted",
    "variantPlain",
    "variantSoft",
    "variantOutlined",
    "variantSolid",
  ]),
  tw = ew,
  nw = [
    "component",
    "children",
    "disabled",
    "value",
    "label",
    "variant",
    "color",
    "slots",
    "slotProps",
  ],
  rw = (e) => {
    const { disabled: t, highlighted: n, selected: r } = e;
    return le(
      { root: ["root", t && "disabled", n && "highlighted", r && "selected"] },
      ZP,
      {},
    );
  },
  ow = H(ss, {
    name: "JoyOption",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r =
      (n = e.variants[`${t.variant}Hover`]) == null ? void 0 : n[t.color];
    return {
      [`&.${tw.highlighted}:not([aria-selected="true"])`]: {
        backgroundColor: r == null ? void 0 : r.backgroundColor,
      },
    };
  }),
  iw = g.memo(
    g.forwardRef(function (t, n) {
      var r;
      const o = de({ props: t, name: "JoyOption" }),
        {
          component: i = "li",
          children: l,
          disabled: a = !1,
          value: s,
          label: c,
          variant: d = "plain",
          color: v = "neutral",
          slots: m = {},
          slotProps: y = {},
        } = o,
        b = Y(o, nw),
        x = g.useContext(Ki),
        { variant: $ = d, color: f = v } = Zg(t.variant, t.color),
        p = g.useRef(null),
        u = ke(p, n),
        k =
          c ??
          (typeof l == "string"
            ? l
            : (r = p.current) == null
              ? void 0
              : r.innerText),
        {
          getRootProps: S,
          selected: R,
          highlighted: I,
          index: P,
        } = R$({ disabled: a, label: k, value: s, rootRef: u }),
        D = h({}, o, {
          disabled: a,
          selected: R,
          highlighted: I,
          index: P,
          component: i,
          variant: $,
          color: f,
          row: x,
        }),
        w = rw(D),
        T = h({}, b, { component: i, slots: m, slotProps: y }),
        [M, O] = U("root", {
          ref: n,
          getSlotProps: S,
          elementType: ow,
          externalForwardedProps: T,
          className: w.root,
          ownerState: D,
        });
      return C.jsx(M, h({}, O, { children: l }));
    }),
  ),
  lw = g.forwardRef(function (t, n) {
    const { contextValue: r } = P$(t.value);
    return C.jsx(Rr.Provider, {
      value: r,
      children: C.jsx(iw, h({}, t, { ref: n })),
    });
  }),
  ct = lw;
function e0() {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsxs(Bl, {
        size: "sm",
        children: [
          C.jsx(Ol, { children: "Status" }),
          C.jsxs(Us, {
            size: "sm",
            placeholder: "Filter by status",
            slotProps: { button: { sx: { whiteSpace: "nowrap" } } },
            children: [
              C.jsx(ct, { value: "paid", children: "Paid" }),
              C.jsx(ct, { value: "pending", children: "Pending" }),
              C.jsx(ct, { value: "refunded", children: "Refunded" }),
              C.jsx(ct, { value: "cancelled", children: "Cancelled" }),
            ],
          }),
        ],
      }),
      C.jsxs(Bl, {
        size: "sm",
        children: [
          C.jsx(Ol, { children: "Category" }),
          C.jsxs(Us, {
            size: "sm",
            placeholder: "All",
            children: [
              C.jsx(ct, { value: "all", children: "All" }),
              C.jsx(ct, { value: "refund", children: "Refund" }),
              C.jsx(ct, { value: "purchase", children: "Purchase" }),
              C.jsx(ct, { value: "debit", children: "Debit" }),
            ],
          }),
        ],
      }),
      C.jsxs(Bl, {
        size: "sm",
        children: [
          C.jsx(Ol, { children: "Customer" }),
          C.jsxs(Us, {
            size: "sm",
            placeholder: "All",
            children: [
              C.jsx(ct, { value: "all", children: "All" }),
              C.jsx(ct, { value: "olivia", children: "Olivia Rhye" }),
              C.jsx(ct, { value: "steve", children: "Steve Hampton" }),
              C.jsx(ct, { value: "ciaran", children: "Ciaran Murray" }),
              C.jsx(ct, { value: "marina", children: "Marina Macdonald" }),
              C.jsx(ct, { value: "charles", children: "Charles Fulton" }),
              C.jsx(ct, { value: "jay", children: "Jay Hoper" }),
            ],
          }),
        ],
      }),
    ],
  });
}
function aw(e) {
  return ce("MuiCircularProgress", e);
}
ue("MuiCircularProgress", [
  "root",
  "determinate",
  "svg",
  "track",
  "progress",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "sizeSm",
  "sizeMd",
  "sizeLg",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
]);
let sw = (e) => e,
  iv;
const cw = ["color", "backgroundColor"],
  uw = [
    "children",
    "className",
    "color",
    "size",
    "variant",
    "thickness",
    "determinate",
    "value",
    "component",
    "slots",
    "slotProps",
  ],
  dw = o1({
    "0%": { transform: "rotate(-90deg)" },
    "100%": { transform: "rotate(270deg)" },
  }),
  fw = (e) => {
    const { determinate: t, color: n, variant: r, size: o } = e,
      i = {
        root: [
          "root",
          t && "determinate",
          n && `color${W(n)}`,
          r && `variant${W(r)}`,
          o && `size${W(o)}`,
        ],
        svg: ["svg"],
        track: ["track"],
        progress: ["progress"],
      };
    return le(i, aw, {});
  };
function Tr(e, t) {
  return `var(--CircularProgress-${e}Thickness, var(--CircularProgress-thickness, ${t}))`;
}
const pw = H("span", {
    name: "JoyCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) => {
    var n, r, o, i;
    const l = ((n = t.variants[e.variant]) == null ? void 0 : n[e.color]) || {},
      { color: a, backgroundColor: s } = l,
      c = Y(l, cw);
    return h(
      {
        "--Icon-fontSize": "calc(0.4 * var(--_root-size))",
        "--CircularProgress-trackColor": s,
        "--CircularProgress-progressColor": a,
        "--CircularProgress-percent": e.value,
        "--CircularProgress-linecap": "round",
      },
      e.size === "sm" && {
        "--_root-size": "var(--CircularProgress-size, 24px)",
        "--_track-thickness": Tr("track", "3px"),
        "--_progress-thickness": Tr("progress", "3px"),
      },
      e.instanceSize === "sm" && { "--CircularProgress-size": "24px" },
      e.size === "md" && {
        "--_track-thickness": Tr("track", "6px"),
        "--_progress-thickness": Tr("progress", "6px"),
        "--_root-size": "var(--CircularProgress-size, 40px)",
      },
      e.instanceSize === "md" && { "--CircularProgress-size": "40px" },
      e.size === "lg" && {
        "--_track-thickness": Tr("track", "8px"),
        "--_progress-thickness": Tr("progress", "8px"),
        "--_root-size": "var(--CircularProgress-size, 64px)",
      },
      e.instanceSize === "lg" && { "--CircularProgress-size": "64px" },
      e.thickness && {
        "--_track-thickness": `${e.thickness}px`,
        "--_progress-thickness": `${e.thickness}px`,
      },
      {
        "--_thickness-diff":
          "calc(var(--_track-thickness) - var(--_progress-thickness))",
        "--_inner-size":
          "calc(var(--_root-size) - 2 * var(--variant-borderWidth, 0px))",
        "--_outlined-inset":
          "max(var(--_track-thickness), var(--_progress-thickness))",
        width: "var(--_root-size)",
        height: "var(--_root-size)",
        borderRadius: "var(--_root-size)",
        margin: "var(--CircularProgress-margin)",
        boxSizing: "border-box",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        position: "relative",
        color: a,
      },
      e.children && {
        fontFamily: t.vars.fontFamily.body,
        fontWeight: t.vars.fontWeight.md,
        fontSize: "calc(0.2 * var(--_root-size))",
      },
      c,
      e.variant === "outlined" && {
        "&:before": h(
          {
            content: '""',
            display: "block",
            position: "absolute",
            borderRadius: "inherit",
            top: "var(--_outlined-inset)",
            left: "var(--_outlined-inset)",
            right: "var(--_outlined-inset)",
            bottom: "var(--_outlined-inset)",
          },
          c,
        ),
      },
      e.variant === "soft" && {
        "--CircularProgress-trackColor":
          t.variants.soft.neutral.backgroundColor,
        "--CircularProgress-progressColor":
          (r = t.variants.solid) == null ? void 0 : r[e.color].backgroundColor,
      },
      e.variant === "solid" && {
        "--CircularProgress-trackColor":
          (o = t.variants.softHover) == null
            ? void 0
            : o[e.color].backgroundColor,
        "--CircularProgress-progressColor":
          (i = t.variants.solid) == null ? void 0 : i[e.color].backgroundColor,
      },
    );
  }),
  vw = H("svg", {
    name: "JoyCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({
    width: "inherit",
    height: "inherit",
    display: "inherit",
    boxSizing: "inherit",
    position: "absolute",
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
  }),
  mw = H("circle", {
    name: "JoyCircularProgress",
    slot: "track",
    overridesResolver: (e, t) => t.track,
  })({
    cx: "50%",
    cy: "50%",
    r: "calc(var(--_inner-size) / 2 - var(--_track-thickness) / 2 + min(0px, var(--_thickness-diff) / 2))",
    fill: "transparent",
    strokeWidth: "var(--_track-thickness)",
    stroke: "var(--CircularProgress-trackColor)",
  }),
  hw = H("circle", {
    name: "JoyCircularProgress",
    slot: "progress",
    overridesResolver: (e, t) => t.progress,
  })(
    {
      "--_progress-radius":
        "calc(var(--_inner-size) / 2 - var(--_progress-thickness) / 2 - max(0px, var(--_thickness-diff) / 2))",
      "--_progress-length": "calc(2 * 3.1415926535 * var(--_progress-radius))",
      cx: "50%",
      cy: "50%",
      r: "var(--_progress-radius)",
      fill: "transparent",
      strokeWidth: "var(--_progress-thickness)",
      stroke: "var(--CircularProgress-progressColor)",
      strokeLinecap: "var(--CircularProgress-linecap, round)",
      strokeDasharray: "var(--_progress-length)",
      strokeDashoffset:
        "calc(var(--_progress-length) - var(--CircularProgress-percent) * var(--_progress-length) / 100)",
      transformOrigin: "center",
      transform: "rotate(-90deg)",
    },
    ({ ownerState: e }) =>
      !e.determinate &&
      Hv(
        iv ||
          (iv = sw`
      animation: var(--CircularProgress-circulation, 0.8s linear 0s infinite normal none running)
        ${0};
    `),
        dw,
      ),
  ),
  gw = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyCircularProgress" }),
      {
        children: o,
        className: i,
        color: l = "primary",
        size: a = "md",
        variant: s = "soft",
        thickness: c,
        determinate: d = !1,
        value: v = d ? 0 : 25,
        component: m,
        slots: y = {},
        slotProps: b = {},
      } = r,
      x = Y(r, uw),
      $ = h({}, r, {
        color: l,
        size: a,
        variant: s,
        thickness: c,
        value: v,
        determinate: d,
        instanceSize: t.size,
      }),
      f = fw($),
      p = h({}, x, { component: m, slots: y, slotProps: b }),
      [u, k] = U("root", {
        ref: n,
        className: Ve(f.root, i),
        elementType: pw,
        externalForwardedProps: p,
        ownerState: $,
        additionalProps: h(
          { role: "progressbar", style: { "--CircularProgress-percent": v } },
          v &&
            d && {
              "aria-valuenow": Math.round(
                typeof v == "number" ? v : Number(v || 0),
              ),
            },
        ),
      }),
      [S, R] = U("svg", {
        className: f.svg,
        elementType: vw,
        externalForwardedProps: p,
        ownerState: $,
      }),
      [I, P] = U("track", {
        className: f.track,
        elementType: mw,
        externalForwardedProps: p,
        ownerState: $,
      }),
      [D, w] = U("progress", {
        className: f.progress,
        elementType: hw,
        externalForwardedProps: p,
        ownerState: $,
      });
    return C.jsxs(
      u,
      h({}, k, {
        children: [
          C.jsxs(
            S,
            h({}, R, { children: [C.jsx(I, h({}, P)), C.jsx(D, h({}, w))] }),
          ),
          o,
        ],
      }),
    );
  }),
  t0 = gw;
function yw(e) {
  return ce("MuiButton", e);
}
const xw = ue("MuiButton", [
    "root",
    "colorPrimary",
    "colorNeutral",
    "colorDanger",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "variantPlain",
    "variantOutlined",
    "variantSoft",
    "variantSolid",
    "focusVisible",
    "disabled",
    "sizeSm",
    "sizeMd",
    "sizeLg",
    "fullWidth",
    "startDecorator",
    "endDecorator",
    "loading",
    "loadingIndicatorCenter",
  ]),
  lv = xw,
  Cw = [
    "children",
    "action",
    "color",
    "variant",
    "size",
    "fullWidth",
    "startDecorator",
    "endDecorator",
    "loading",
    "loadingPosition",
    "loadingIndicator",
    "disabled",
    "component",
    "slots",
    "slotProps",
  ],
  bw = (e) => {
    const {
        color: t,
        disabled: n,
        focusVisible: r,
        focusVisibleClassName: o,
        fullWidth: i,
        size: l,
        variant: a,
        loading: s,
      } = e,
      c = {
        root: [
          "root",
          n && "disabled",
          r && "focusVisible",
          i && "fullWidth",
          a && `variant${W(a)}`,
          t && `color${W(t)}`,
          l && `size${W(l)}`,
          s && "loading",
        ],
        startDecorator: ["startDecorator"],
        endDecorator: ["endDecorator"],
        loadingIndicatorCenter: ["loadingIndicatorCenter"],
      },
      d = le(c, yw, {});
    return r && o && (d.root += ` ${o}`), d;
  },
  Sw = H("span", {
    name: "JoyButton",
    slot: "StartDecorator",
    overridesResolver: (e, t) => t.startDecorator,
  })({
    "--Icon-margin": "0 0 0 calc(var(--Button-gap) / -2)",
    "--CircularProgress-margin": "0 0 0 calc(var(--Button-gap) / -2)",
    display: "inherit",
    marginRight: "var(--Button-gap)",
  }),
  kw = H("span", {
    name: "JoyButton",
    slot: "EndDecorator",
    overridesResolver: (e, t) => t.endDecorator,
  })({
    "--Icon-margin": "0 calc(var(--Button-gap) / -2) 0 0",
    "--CircularProgress-margin": "0 calc(var(--Button-gap) / -2) 0 0",
    display: "inherit",
    marginLeft: "var(--Button-gap)",
  }),
  $w = H("span", {
    name: "JoyButton",
    slot: "LoadingCenter",
    overridesResolver: (e, t) => t.loadingIndicatorCenter,
  })(({ theme: e, ownerState: t }) => {
    var n, r;
    return h(
      {
        display: "inherit",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        color:
          (n = e.variants[t.variant]) == null || (n = n[t.color]) == null
            ? void 0
            : n.color,
      },
      t.disabled && {
        color:
          (r = e.variants[`${t.variant}Disabled`]) == null ||
          (r = r[t.color]) == null
            ? void 0
            : r.color,
      },
    );
  }),
  n0 = ({ theme: e, ownerState: t }) => {
    var n, r, o, i;
    return [
      h(
        {
          "--Icon-margin": "initial",
          "--Icon-color":
            t.color !== "neutral" || t.variant === "solid"
              ? "currentColor"
              : e.vars.palette.text.icon,
        },
        t.size === "sm" && {
          "--Icon-fontSize": e.vars.fontSize.lg,
          "--CircularProgress-size": "20px",
          "--CircularProgress-thickness": "2px",
          "--Button-gap": "0.375rem",
          minHeight: "var(--Button-minHeight, 2rem)",
          fontSize: e.vars.fontSize.sm,
          paddingBlock: "var(--Button-paddingBlock, 0.25rem)",
          paddingInline: "0.75rem",
        },
        t.size === "md" && {
          "--Icon-fontSize": e.vars.fontSize.xl,
          "--CircularProgress-size": "20px",
          "--CircularProgress-thickness": "2px",
          "--Button-gap": "0.5rem",
          minHeight: "var(--Button-minHeight, 2.25rem)",
          fontSize: e.vars.fontSize.sm,
          paddingBlock: "var(--Button-paddingBlock, 0.375rem)",
          paddingInline: "1rem",
        },
        t.size === "lg" && {
          "--Icon-fontSize": e.vars.fontSize.xl2,
          "--CircularProgress-size": "28px",
          "--CircularProgress-thickness": "4px",
          "--Button-gap": "0.75rem",
          minHeight: "var(--Button-minHeight, 2.75rem)",
          fontSize: e.vars.fontSize.md,
          paddingBlock: "var(--Button-paddingBlock, 0.5rem)",
          paddingInline: "1.5rem",
        },
        {
          WebkitTapHighlightColor: "transparent",
          boxSizing: "border-box",
          borderRadius: `var(--Button-radius, ${e.vars.radius.sm})`,
          margin: "var(--Button-margin)",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textDecoration: "none",
          fontFamily: e.vars.fontFamily.body,
          fontWeight: e.vars.fontWeight.lg,
          lineHeight: e.vars.lineHeight.md,
        },
        t.fullWidth && { width: "100%" },
        { [e.focus.selector]: e.focus.default },
      ),
      h(
        {},
        (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
        {
          "&:hover": {
            "@media (hover: hover)":
              (r = e.variants[`${t.variant}Hover`]) == null
                ? void 0
                : r[t.color],
          },
          '&:active, &[aria-pressed="true"]':
            (o = e.variants[`${t.variant}Active`]) == null
              ? void 0
              : o[t.color],
          [`&.${lv.disabled}`]:
            (i = e.variants[`${t.variant}Disabled`]) == null
              ? void 0
              : i[t.color],
        },
        t.loadingPosition === "center" && {
          [`&.${lv.loading}`]: { color: "transparent" },
        },
      ),
    ];
  },
  Iw = H("button", {
    name: "JoyButton",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(n0),
  r0 = g.forwardRef(function (t, n) {
    var r;
    const o = de({ props: t, name: "JoyButton" }),
      {
        children: i,
        action: l,
        color: a = "primary",
        variant: s = "solid",
        size: c = "md",
        fullWidth: d = !1,
        startDecorator: v,
        endDecorator: m,
        loading: y = !1,
        loadingPosition: b = "center",
        loadingIndicator: x,
        disabled: $,
        component: f,
        slots: p = {},
        slotProps: u = {},
      } = o,
      k = Y(o, Cw),
      S = g.useContext(Pd),
      R = g.useContext(Mg),
      I = t.variant || S.variant || s,
      P = t.size || S.size || c,
      D = t.color || S.color || a,
      w = (r = t.disabled || t.loading) != null ? r : S.disabled || $ || y,
      T = g.useRef(null),
      M = ke(T, n),
      {
        focusVisible: O,
        setFocusVisible: F,
        getRootProps: B,
      } = ir(h({}, o, { disabled: w, rootRef: M })),
      E =
        x ??
        C.jsx(t0, { color: D, thickness: { sm: 2, md: 3, lg: 4 }[P] || 3 });
    g.useImperativeHandle(
      l,
      () => ({
        focusVisible: () => {
          var ee;
          F(!0), (ee = T.current) == null || ee.focus();
        },
      }),
      [F],
    );
    const _ = h({}, o, {
        color: D,
        fullWidth: d,
        variant: I,
        size: P,
        focusVisible: O,
        loading: y,
        loadingPosition: b,
        disabled: w,
      }),
      z = bw(_),
      L = (ee) => {
        var ne;
        let Pe = o.onClick;
        if (
          (typeof u.root == "function"
            ? (Pe = u.root(_).onClick)
            : u.root && (Pe = u.root.onClick),
          (ne = Pe) == null || ne(ee),
          R)
        ) {
          var et;
          (et = R.onClick) == null || et.call(R, ee, o.value);
        }
      };
    let V = o["aria-pressed"];
    typeof u.root == "function"
      ? (V = u.root(_)["aria-pressed"])
      : u.root && (V = u.root["aria-pressed"]),
      R != null &&
        R.value &&
        (Array.isArray(R.value)
          ? (V = R.value.indexOf(o.value) !== -1)
          : (V = R.value === o.value));
    const K = h({}, k, { component: f, slots: p, slotProps: u }),
      [X, fe] = U("root", {
        ref: n,
        className: z.root,
        elementType: Iw,
        externalForwardedProps: K,
        getSlotProps: B,
        ownerState: _,
        additionalProps: { onClick: L, "aria-pressed": V },
      }),
      [re, ae] = U("startDecorator", {
        className: z.startDecorator,
        elementType: Sw,
        externalForwardedProps: K,
        ownerState: _,
      }),
      [Q, A] = U("endDecorator", {
        className: z.endDecorator,
        elementType: kw,
        externalForwardedProps: K,
        ownerState: _,
      }),
      [N, q] = U("loadingIndicatorCenter", {
        className: z.loadingIndicatorCenter,
        elementType: $w,
        externalForwardedProps: K,
        ownerState: _,
      });
    return C.jsxs(
      X,
      h({}, fe, {
        children: [
          (v || (y && b === "start")) &&
            C.jsx(re, h({}, ae, { children: y && b === "start" ? E : v })),
          i,
          y && b === "center" && C.jsx(N, h({}, q, { children: E })),
          (m || (y && b === "end")) &&
            C.jsx(Q, h({}, A, { children: y && b === "end" ? E : m })),
        ],
      }),
    );
  });
r0.muiName = "Button";
const o0 = r0;
function Rw(e) {
  return ce("MuiModal", e);
}
ue("MuiModal", ["root", "hidden", "backdrop"]);
const Pw = g.createContext(void 0),
  i0 = Pw,
  ww = [
    "children",
    "container",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onClose",
    "onKeyDown",
    "open",
    "component",
    "slots",
    "slotProps",
  ],
  zw = (e) => {
    const { open: t } = e;
    return le(
      { root: ["root", !t && "hidden"], backdrop: ["backdrop"] },
      Rw,
      {},
    );
  },
  _w = H("div")(({ ownerState: e, theme: t }) =>
    h(
      {
        "--unstable_popup-zIndex": `calc(${t.vars.zIndex.modal} + 1)`,
        '& ~ [role="listbox"]': {
          "--unstable_popup-zIndex": `calc(${t.vars.zIndex.modal} + 1)`,
        },
        position: "fixed",
        zIndex: t.vars.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !e.open && { visibility: "hidden" },
    ),
  ),
  Ew = H(_w, {
    name: "JoyModal",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Dw = H("div")(({ theme: e }) => ({
    zIndex: -1,
    position: "fixed",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: e.vars.palette.background.backdrop,
    WebkitTapHighlightColor: "transparent",
    backdropFilter: "blur(8px)",
  })),
  Tw = H(Dw, {
    name: "JoyModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({}),
  Lw = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyModal" }),
      {
        children: o,
        container: i,
        disableAutoFocus: l = !1,
        disableEnforceFocus: a = !1,
        disableEscapeKeyDown: s = !1,
        disablePortal: c = !1,
        disableRestoreFocus: d = !1,
        disableScrollLock: v = !1,
        hideBackdrop: m = !1,
        keepMounted: y = !1,
        onClose: b,
        open: x,
        component: $,
        slots: f = {},
        slotProps: p = {},
      } = r,
      u = Y(r, ww),
      k = h({}, r, {
        disableAutoFocus: l,
        disableEnforceFocus: a,
        disableEscapeKeyDown: s,
        disablePortal: c,
        disableRestoreFocus: d,
        disableScrollLock: v,
        hideBackdrop: m,
        keepMounted: y,
      }),
      {
        getRootProps: S,
        getBackdropProps: R,
        rootRef: I,
        portalRef: P,
        isTopModal: D,
      } = I$(h({}, k, { rootRef: n })),
      w = zw(k),
      T = h({}, u, { component: $, slots: f, slotProps: p }),
      [M, O] = U("root", {
        ref: I,
        className: w.root,
        elementType: Ew,
        externalForwardedProps: T,
        getSlotProps: S,
        ownerState: k,
      }),
      [F, B] = U("backdrop", {
        className: w.backdrop,
        elementType: Tw,
        externalForwardedProps: T,
        getSlotProps: R,
        ownerState: k,
      });
    return !y && !x
      ? null
      : C.jsx(i0.Provider, {
          value: b,
          children: C.jsx(Pg, {
            ref: P,
            container: i,
            disablePortal: c,
            children: C.jsxs(
              M,
              h({}, O, {
                children: [
                  m ? null : C.jsx(F, h({}, B)),
                  C.jsx(RS, {
                    disableEnforceFocus: a,
                    disableAutoFocus: l,
                    disableRestoreFocus: d,
                    isEnabled: D,
                    open: x,
                    children:
                      g.Children.only(o) &&
                      g.cloneElement(
                        o,
                        h({}, o.props.tabIndex === void 0 && { tabIndex: -1 }),
                      ),
                  }),
                ],
              }),
            ),
          }),
        });
  }),
  Bw = Lw;
function Ow(e) {
  return ce("MuiModalDialog", e);
}
ue("MuiModalDialog", [
  "root",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "sizeSm",
  "sizeMd",
  "sizeLg",
  "layoutCenter",
  "layoutFullscreen",
]);
const Mw = g.createContext(void 0),
  l0 = Mw,
  Aw = g.createContext(void 0),
  a0 = Aw,
  s0 = H("div")(({ theme: e, ownerState: t }) => {
    var n;
    const {
      p: r,
      padding: o,
      borderRadius: i,
    } = Ui({ theme: e, ownerState: t }, ["p", "padding", "borderRadius"]);
    return [
      h(
        {
          "--Icon-color":
            t.color !== "neutral" || t.variant === "solid"
              ? "currentColor"
              : e.vars.palette.text.icon,
          "--Card-childRadius":
            "max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))",
          "--AspectRatio-radius": "var(--Card-childRadius)",
          "--unstable_actionMargin":
            "calc(-1 * var(--variant-borderWidth, 0px))",
          "--unstable_actionRadius": "var(--Card-radius)",
          "--CardCover-radius":
            "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
          "--CardOverflow-offset": "calc(-1 * var(--Card-padding))",
          "--CardOverflow-radius":
            "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
          "--Divider-inset": "calc(-1 * var(--Card-padding))",
        },
        t.size === "sm" && {
          "--Card-radius": e.vars.radius.sm,
          "--Card-padding": "0.625rem",
          gap: "0.5rem",
        },
        t.size === "md" && {
          "--Card-radius": e.vars.radius.md,
          "--Card-padding": "1rem",
          gap: "0.75rem 1rem",
        },
        t.size === "lg" && {
          "--Card-radius": e.vars.radius.lg,
          "--Card-padding": "1.5rem",
          gap: "1rem 1.5rem",
        },
        {
          padding: "var(--Card-padding)",
          borderRadius: "var(--Card-radius)",
          backgroundColor: e.vars.palette.background.surface,
          position: "relative",
          display: "flex",
          flexDirection: t.orientation === "horizontal" ? "row" : "column",
        },
        e.typography[`body-${t.size}`],
        t.variant === "solid" && t.color && t.invertedColors && _d(t.color)(e),
        t.variant === "soft" && t.color && t.invertedColors && Ed(t.color)(e),
        (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
      ),
      r !== void 0 && { "--Card-padding": r },
      o !== void 0 && { "--Card-padding": o },
      i !== void 0 && { "--Card-radius": i },
    ];
  });
H(s0, { name: "JoyCard", slot: "Root", overridesResolver: (e, t) => t.root })(
  {},
);
const jw = [
    "className",
    "children",
    "invertedColors",
    "orientation",
    "color",
    "component",
    "variant",
    "size",
    "layout",
    "maxWidth",
    "minWidth",
    "slots",
    "slotProps",
  ],
  Fw = (e) => {
    const { variant: t, color: n, size: r, layout: o } = e,
      i = {
        root: [
          "root",
          t && `variant${W(t)}`,
          n && `color${W(n)}`,
          r && `size${W(r)}`,
          o && `layout${W(o)}`,
        ],
      };
    return le(i, Ow, {});
  };
function av(e, t) {
  var n, r;
  return t && (n = e.breakpoints) != null && n.values[t]
    ? `${(r = e.breakpoints) == null ? void 0 : r.values[t]}px`
    : t;
}
const Nw = H(s0, {
    name: "JoyModalDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) =>
    h(
      {
        "--ModalDialog-minWidth":
          typeof t.minWidth == "number" ? `${t.minWidth}px` : av(e, t.minWidth),
        "--ModalDialog-maxWidth":
          typeof t.maxWidth == "number" ? `${t.maxWidth}px` : av(e, t.maxWidth),
        "--ModalClose-radius":
          "max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--ModalClose-inset), min(var(--ModalClose-inset) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))",
      },
      t.variant === "solid" && { "--DialogContent-color": "currentColor" },
      t.size === "sm" && {
        "--Card-padding": "1rem",
        "--ModalDialog-titleOffset": e.spacing(0.25),
        "--ModalDialog-descriptionOffset": e.spacing(0.25),
        "--ModalClose-inset": "0.375rem",
      },
      t.size === "md" && {
        "--Card-padding": "1.25rem",
        "--ModalDialog-titleOffset": e.spacing(0.25),
        "--ModalDialog-descriptionOffset": e.spacing(0.75),
        "--ModalClose-inset": "0.5rem",
      },
      t.size === "lg" && {
        "--Card-padding": "1.5rem",
        "--ModalDialog-titleOffset": e.spacing(0.5),
        "--ModalDialog-descriptionOffset": e.spacing(1),
        "--ModalClose-inset": "0.625rem",
      },
      {
        boxSizing: "border-box",
        boxShadow: e.shadow.md,
        minWidth:
          "min(calc(100vw - 2 * var(--Card-padding)), var(--ModalDialog-minWidth, 300px))",
        outline: 0,
        position: "absolute",
      },
      t.layout === "fullscreen" && {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        borderRadius: 0,
      },
      t.layout === "center" && {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth:
          "min(calc(100vw - 2 * var(--Card-padding)), var(--ModalDialog-maxWidth, 100vw))",
        maxHeight: "calc(100% - 2 * var(--Card-padding))",
      },
      {
        [`& [id="${t["aria-labelledby"]}"]`]: {
          "--Typography-margin":
            "calc(-1 * var(--ModalDialog-titleOffset)) 0 var(--ModalDialog-gap) 0",
          "--Typography-fontSize": "1.125em",
          [`& + [id="${t["aria-describedby"]}"]`]: {
            "--unstable_ModalDialog-descriptionOffset":
              "calc(-1 * var(--ModalDialog-descriptionOffset))",
          },
        },
        [`& [id="${t["aria-describedby"]}"]`]: {
          "--Typography-fontSize": "1em",
          "--Typography-margin":
            "var(--unstable_ModalDialog-descriptionOffset, var(--ModalDialog-gap)) 0 0 0",
          "&:not(:last-child)": {
            "--Typography-margin":
              "var(--unstable_ModalDialog-descriptionOffset, var(--ModalDialog-gap)) 0 var(--ModalDialog-gap) 0",
          },
        },
      },
    ),
  ),
  Hw = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyModalDialog" }),
      {
        className: o,
        children: i,
        invertedColors: l = !1,
        orientation: a = "vertical",
        color: s = "neutral",
        component: c = "div",
        variant: d = "outlined",
        size: v = "md",
        layout: m = "center",
        maxWidth: y,
        minWidth: b,
        slots: x = {},
        slotProps: $ = {},
      } = r,
      f = Y(r, jw),
      p = h({}, r, {
        color: s,
        component: c,
        maxWidth: y,
        minWidth: b,
        layout: m,
        size: v,
        variant: d,
        invertedColors: l,
      }),
      u = Fw(p),
      k = h({}, f, { component: c, slots: x, slotProps: $ }),
      S = $t(),
      R = $t(),
      I = g.useMemo(
        () => ({ variant: d, color: s, labelledBy: S, describedBy: R }),
        [s, d, S, R],
      ),
      [P, D] = U("root", {
        ref: n,
        className: Ve(u.root, o),
        elementType: Nw,
        externalForwardedProps: k,
        ownerState: p,
        additionalProps: {
          as: c,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": S,
          "aria-describedby": R,
        },
      });
    return C.jsx(l0.Provider, {
      value: v,
      children: C.jsx(a0.Provider, {
        value: I,
        children: C.jsx(
          P,
          h({}, D, {
            children: g.Children.map(i, (w, T) => {
              if (!g.isValidElement(w)) return w;
              const M = {};
              if (xo(w, ["Divider"])) {
                M.inset = "inset" in w.props ? w.props.inset : "context";
                const O = a === "vertical" ? "horizontal" : "vertical";
                M.orientation =
                  "orientation" in w.props ? w.props.orientation : O;
              }
              return (
                T === 0 && (M["data-first-child"] = ""),
                T === g.Children.count(i) - 1 && (M["data-last-child"] = ""),
                g.cloneElement(w, M)
              );
            }),
          }),
        ),
      }),
    });
  }),
  Vw = Hw;
function Ww(e) {
  return ce("MuiModalClose", e);
}
ue("MuiModalClose", [
  "root",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "sizeSm",
  "sizeMd",
  "sizeLg",
]);
const Uw = Gi(
  C.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  }),
  "Close",
);
var sv;
const Kw = [
    "component",
    "color",
    "variant",
    "size",
    "onClick",
    "slots",
    "slotProps",
  ],
  Gw = (e) => {
    const { variant: t, color: n, disabled: r, focusVisible: o, size: i } = e,
      l = {
        root: [
          "root",
          r && "disabled",
          o && "focusVisible",
          t && `variant${W(t)}`,
          n && `color${W(n)}`,
          i && `size${W(i)}`,
        ],
      };
    return le(l, Ww, {});
  },
  Jw = H(Ag, {
    name: "JoyModalClose",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) => {
    var n;
    return h(
      {},
      e.size === "sm" && { "--IconButton-size": "1.75rem" },
      e.size === "md" && { "--IconButton-size": "2rem" },
      e.size === "lg" && { "--IconButton-size": "2.25rem" },
      {
        position: "absolute",
        zIndex: 1,
        top: "var(--ModalClose-inset, 0.625rem)",
        right: "var(--ModalClose-inset, 0.625rem)",
        borderRadius: `var(--ModalClose-radius, ${t.vars.radius.sm})`,
      },
      !(
        (n = t.variants[e.variant]) != null &&
        (n = n[e.color]) != null &&
        n.backgroundColor
      ) && { color: t.vars.palette.text.secondary },
    );
  }),
  Xw = { plain: "plain", outlined: "plain", soft: "soft", solid: "solid" },
  Yw = g.forwardRef(function (t, n) {
    var r, o, i, l, a, s;
    const c = de({ props: t, name: "JoyModalClose" }),
      {
        component: d = "button",
        color: v = "neutral",
        variant: m = "plain",
        size: y = "md",
        onClick: b,
        slots: x = {},
        slotProps: $ = {},
      } = c,
      f = Y(c, Kw),
      p = g.useContext(i0),
      u = g.useContext(a0),
      k =
        (r =
          (o = t.variant) != null ? o : Xw[u == null ? void 0 : u.variant]) !=
        null
          ? r
          : m,
      S =
        (i = (l = t.color) != null ? l : u == null ? void 0 : u.color) != null
          ? i
          : v,
      R = g.useContext(l0),
      I = (a = (s = t.size) != null ? s : R) != null ? a : y,
      { focusVisible: P, getRootProps: D } = ir(h({}, c, { rootRef: n })),
      w = h({}, c, {
        color: S,
        component: d,
        variant: k,
        size: I,
        focusVisible: P,
      }),
      T = Gw(w),
      [M, O] = U("root", {
        ref: n,
        elementType: Jw,
        getSlotProps: D,
        externalForwardedProps: h(
          {
            onClick: (F) => {
              p == null || p(F, "closeClick"), b == null || b(F);
            },
          },
          f,
          { component: d, slots: x, slotProps: $ },
        ),
        className: T.root,
        ownerState: w,
      });
    return C.jsx(M, h({}, O, { children: sv || (sv = C.jsx(Uw, {})) }));
  }),
  Qw = Yw;
var Fd = {},
  qw = Ln;
Object.defineProperty(Fd, "__esModule", { value: !0 });
var c0 = (Fd.default = void 0),
  Zw = qw(Bn()),
  e5 = C,
  t5 = (0, Zw.default)(
    (0, e5.jsx)("path", {
      d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z",
    }),
    "FilterAlt",
  );
c0 = Fd.default = t5;
function n5() {
  const [e, t] = g.useState(!1);
  return C.jsxs(ma, {
    className: "SearchAndFilters-mobile",
    sx: { display: { xs: "flex", sm: "none" }, my: 1, gap: 1 },
    children: [
      C.jsx(Ri, {
        size: "sm",
        placeholder: "Search",
        startDecorator: C.jsx(jd, {}),
        sx: { flexGrow: 1 },
      }),
      C.jsx(wd, {
        size: "sm",
        variant: "outlined",
        color: "neutral",
        onClick: () => {
          t(!0);
        },
        children: C.jsx(c0, {}),
      }),
      C.jsx(Bw, {
        open: e,
        onClose: () => {
          t(!1);
        },
        children: C.jsxs(Vw, {
          "aria-labelledby": "filter-modal",
          layout: "fullscreen",
          children: [
            C.jsx(Qw, {}),
            C.jsx(Ht, { id: "filter-modal", level: "h2", children: "Filters" }),
            C.jsx(Rd, { sx: { my: 2 } }),
            C.jsxs(ma, {
              sx: { display: "flex", flexDirection: "column", gap: 2 },
              children: [
                C.jsx(e0, {}),
                C.jsx(o0, {
                  color: "primary",
                  onClick: () => {
                    t(!1);
                  },
                  children: "Submit",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function r5(e) {
  return ce("MuiMenu", e);
}
ue("MuiMenu", [
  "root",
  "listbox",
  "expanded",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "sizeSm",
  "sizeMd",
  "sizeLg",
]);
const o5 = [
    "actions",
    "children",
    "color",
    "component",
    "disablePortal",
    "keepMounted",
    "id",
    "invertedColors",
    "onItemsChange",
    "modifiers",
    "variant",
    "size",
    "slots",
    "slotProps",
  ],
  i5 = (e) => {
    const { open: t, variant: n, color: r, size: o } = e,
      i = {
        root: [
          "root",
          t && "expanded",
          n && `variant${W(n)}`,
          r && `color${W(r)}`,
          o && `size${W(o)}`,
        ],
        listbox: ["listbox"],
      };
    return le(i, r5, {});
  },
  cv = H(as, {
    name: "JoyMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    var n, r;
    const o = (n = e.variants[t.variant]) == null ? void 0 : n[t.color];
    return [
      h(
        {
          "--focus-outline-offset": `calc(${e.vars.focus.thickness} * -1)`,
          "--ListItem-stickyBackground":
            (o == null ? void 0 : o.backgroundColor) ||
            (o == null ? void 0 : o.background) ||
            e.vars.palette.background.popup,
          "--ListItem-stickyTop":
            "calc(var(--List-padding, var(--ListDivider-gap)) * -1)",
        },
        Ug,
        {
          borderRadius: `var(--List-radius, ${e.vars.radius.sm})`,
          boxShadow: e.shadow.md,
          overflow: "auto",
          zIndex: `var(--unstable_popup-zIndex, ${e.vars.zIndex.popup})`,
        },
        !(o != null && o.backgroundColor) && {
          backgroundColor: e.vars.palette.background.popup,
        },
        t.variant === "solid" && t.color && t.invertedColors && _d(t.color)(e),
        t.variant === "soft" && t.color && t.invertedColors && Ed(t.color)(e),
        (r = e.variants[t.variant]) == null ? void 0 : r[t.color],
      ),
    ];
  }),
  l5 = g.forwardRef(function (t, n) {
    var r;
    const o = de({ props: t, name: "JoyMenu" }),
      {
        actions: i,
        children: l,
        color: a = "neutral",
        component: s,
        disablePortal: c = !1,
        keepMounted: d = !1,
        id: v,
        invertedColors: m = !1,
        onItemsChange: y,
        modifiers: b,
        variant: x = "outlined",
        size: $ = "md",
        slots: f = {},
        slotProps: p = {},
      } = o,
      u = Y(o, o5),
      {
        contextValue: k,
        getListboxProps: S,
        dispatch: R,
        open: I,
        triggerElement: P,
      } = XS({ onItemsChange: y, id: v, listboxRef: n });
    g.useImperativeHandle(
      i,
      () => ({
        dispatch: R,
        resetHighlight: () => R({ type: Ie.resetHighlight, event: null }),
      }),
      [R],
    );
    const D = h({}, o, {
        disablePortal: c,
        invertedColors: m,
        color: a,
        variant: x,
        size: $,
        open: I,
        nesting: !1,
        row: !1,
      }),
      w = i5(D),
      T = h({}, u, { component: s, slots: f, slotProps: p }),
      M = g.useMemo(
        () => [{ name: "offset", options: { offset: [0, 4] } }, ...(b || [])],
        [b],
      ),
      O = fg({
        elementType: cv,
        getSlotProps: S,
        externalForwardedProps: T,
        externalSlotProps: {},
        ownerState: D,
        additionalProps: {
          anchorEl: P,
          open: I && P !== null,
          disablePortal: c,
          keepMounted: d,
          modifiers: M,
        },
        className: w.root,
      });
    return C.jsx(
      cv,
      h(
        {},
        O,
        !((r = o.slots) != null && r.root) && {
          as: wg,
          slots: { root: s || "ul" },
        },
        {
          children: C.jsx(YS, {
            value: k,
            children: C.jsx(Md, {
              variant: m ? void 0 : x,
              color: a,
              children: C.jsx(is.Provider, {
                value: "menu",
                children: C.jsx(ls, { nested: !0, children: l }),
              }),
            }),
          }),
        },
      ),
    );
  }),
  a5 = l5;
function s5(e) {
  return ce("MuiMenuButton", e);
}
ue("MuiMenuButton", [
  "root",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "disabled",
  "sizeSm",
  "sizeMd",
  "sizeLg",
  "fullWidth",
  "startDecorator",
  "endDecorator",
  "loading",
  "loadingIndicatorCenter",
]);
const c5 = [
    "children",
    "color",
    "component",
    "disabled",
    "endDecorator",
    "loading",
    "loadingPosition",
    "loadingIndicator",
    "size",
    "slotProps",
    "slots",
    "startDecorator",
    "variant",
  ],
  u5 = (e) => {
    const {
        color: t,
        disabled: n,
        fullWidth: r,
        size: o,
        variant: i,
        loading: l,
      } = e,
      a = {
        root: [
          "root",
          n && "disabled",
          r && "fullWidth",
          i && `variant${W(i)}`,
          t && `color${W(t)}`,
          o && `size${W(o)}`,
          l && "loading",
        ],
        startDecorator: ["startDecorator"],
        endDecorator: ["endDecorator"],
        loadingIndicatorCenter: ["loadingIndicatorCenter"],
      };
    return le(a, s5, {});
  },
  d5 = H("button", {
    name: "JoyMenuButton",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(n0),
  f5 = H("span", {
    name: "JoyMenuButton",
    slot: "StartDecorator",
    overridesResolver: (e, t) => t.startDecorator,
  })({
    "--Icon-margin": "0 0 0 calc(var(--Button-gap) / -2)",
    "--CircularProgress-margin": "0 0 0 calc(var(--Button-gap) / -2)",
    display: "inherit",
    marginRight: "var(--Button-gap)",
  }),
  p5 = H("span", {
    name: "JoyMenuButton",
    slot: "EndDecorator",
    overridesResolver: (e, t) => t.endDecorator,
  })({
    "--Icon-margin": "0 calc(var(--Button-gap) / -2) 0 0",
    "--CircularProgress-margin": "0 calc(var(--Button-gap) / -2) 0 0",
    display: "inherit",
    marginLeft: "var(--Button-gap)",
  }),
  v5 = H("span", {
    name: "JoyMenuButton",
    slot: "LoadingCenter",
    overridesResolver: (e, t) => t.loadingIndicatorCenter,
  })(({ theme: e, ownerState: t }) => {
    var n, r;
    return h(
      {
        display: "inherit",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        color:
          (n = e.variants[t.variant]) == null || (n = n[t.color]) == null
            ? void 0
            : n.color,
      },
      t.disabled && {
        color:
          (r = e.variants[`${t.variant}Disabled`]) == null ||
          (r = r[t.color]) == null
            ? void 0
            : r.color,
      },
    );
  }),
  m5 = g.forwardRef(function (t, n) {
    var r;
    const o = de({ props: t, name: "JoyMenuButton" }),
      {
        children: i,
        color: l = "neutral",
        component: a,
        disabled: s = !1,
        endDecorator: c,
        loading: d = !1,
        loadingPosition: v = "center",
        loadingIndicator: m,
        size: y = "md",
        slotProps: b = {},
        slots: x = {},
        startDecorator: $,
        variant: f = "outlined",
      } = o,
      p = Y(o, c5),
      u = g.useContext(Pd),
      k = t.variant || u.variant || f,
      S = t.size || u.size || y,
      R = (r = t.disabled) != null ? r : u.disabled || s || d,
      { getRootProps: I, open: P, active: D } = f$({ rootRef: n, disabled: R }),
      w =
        m ??
        C.jsx(t0, { color: l, thickness: { sm: 2, md: 3, lg: 4 }[S] || 3 }),
      T = h({}, o, {
        active: D,
        color: l,
        disabled: R,
        open: P,
        size: S,
        variant: k,
      }),
      M = u5(T),
      O = h({}, p, { component: a, slots: x, slotProps: b }),
      [F, B] = U("root", {
        elementType: d5,
        getSlotProps: I,
        externalForwardedProps: O,
        ref: n,
        ownerState: T,
        className: M.root,
      }),
      [E, _] = U("startDecorator", {
        className: M.startDecorator,
        elementType: f5,
        externalForwardedProps: O,
        ownerState: T,
      }),
      [z, L] = U("endDecorator", {
        className: M.endDecorator,
        elementType: p5,
        externalForwardedProps: O,
        ownerState: T,
      }),
      [V, K] = U("loadingIndicatorCenter", {
        className: M.loadingIndicatorCenter,
        elementType: v5,
        externalForwardedProps: O,
        ownerState: T,
      });
    return C.jsxs(
      F,
      h({}, B, {
        children: [
          ($ || (d && v === "start")) &&
            C.jsx(E, h({}, _, { children: d && v === "start" ? w : $ })),
          i,
          d && v === "center" && C.jsx(V, h({}, K, { children: w })),
          (c || (d && v === "end")) &&
            C.jsx(z, h({}, L, { children: d && v === "end" ? w : c })),
        ],
      }),
    );
  }),
  h5 = m5;
function g5(e) {
  return ce("MuiMenuItem", e);
}
ue("MuiMenuItem", [
  "root",
  "focusVisible",
  "disabled",
  "selected",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantSoft",
  "variantOutlined",
  "variantSolid",
]);
const y5 = [
    "children",
    "disabled",
    "component",
    "selected",
    "color",
    "orientation",
    "variant",
    "slots",
    "slotProps",
    "id",
  ],
  x5 = (e) => {
    const {
        focusVisible: t,
        disabled: n,
        selected: r,
        color: o,
        variant: i,
      } = e,
      l = {
        root: [
          "root",
          t && "focusVisible",
          n && "disabled",
          r && "selected",
          o && `color${W(o)}`,
          i && `variant${W(i)}`,
        ],
      };
    return le(l, g5, {});
  },
  C5 = H(ss, {
    name: "JoyMenuItem",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  b5 = g.memo(
    g.forwardRef(function (t, n) {
      const r = de({ props: t, name: "JoyMenuItem" }),
        o = g.useContext(Ki),
        {
          children: i,
          disabled: l = !1,
          component: a = "li",
          selected: s = !1,
          color: c = "neutral",
          orientation: d = "horizontal",
          variant: v = "plain",
          slots: m = {},
          slotProps: y = {},
          id: b,
        } = r,
        x = Y(r, y5),
        { variant: $ = v, color: f = c } = Zg(t.variant, t.color),
        {
          getRootProps: p,
          disabled: u,
          focusVisible: k,
        } = m$({ id: b, disabled: l, rootRef: n }),
        S = h({}, r, {
          component: a,
          color: f,
          disabled: u,
          focusVisible: k,
          orientation: d,
          selected: s,
          row: o,
          variant: $,
        }),
        R = x5(S),
        I = h({}, x, { component: a, slots: m, slotProps: y }),
        [P, D] = U("root", {
          ref: n,
          elementType: C5,
          getSlotProps: p,
          externalForwardedProps: I,
          className: R.root,
          ownerState: S,
        });
      return C.jsx(Jg.Provider, {
        value: d,
        children: C.jsx(P, h({}, D, { children: i })),
      });
    }),
  ),
  S5 = g.forwardRef(function (t, n) {
    const { contextValue: r, id: o } = h$(t.id);
    return C.jsx(Rr.Provider, {
      value: r,
      children: C.jsx(b5, h({}, t, { id: o, ref: n })),
    });
  }),
  ml = S5;
var Nd = {},
  k5 = Ln;
Object.defineProperty(Nd, "__esModule", { value: !0 });
var u0 = (Nd.default = void 0),
  $5 = k5(Bn()),
  I5 = C,
  R5 = (0, $5.default)(
    (0, I5.jsx)("path", {
      d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    }),
    "MoreHorizRounded",
  );
u0 = Nd.default = R5;
function P5({ onDelete: e }) {
  return C.jsxs(xS, {
    children: [
      C.jsx(h5, {
        slots: { root: wd },
        slotProps: { root: { variant: "plain", color: "neutral", size: "sm" } },
        children: C.jsx(u0, {}),
      }),
      C.jsxs(a5, {
        size: "sm",
        sx: { minWidth: 140 },
        children: [
          C.jsx(ml, { children: "Edit" }),
          C.jsx(ml, { children: "Rename" }),
          C.jsx(ml, { children: "Move" }),
          C.jsx(Rd, {}),
          C.jsx(ml, { color: "danger", onClick: e, children: "Delete" }),
        ],
      }),
    ],
  });
}
function w5({ items: e, onDeleteItem: t }) {
  const [n, r] = g.useState([]);
  return C.jsxs(g.Fragment, {
    children: [
      C.jsx(n5, {}),
      C.jsxs(dt, {
        className: "SearchAndFilters-tabletUp",
        sx: {
          borderRadius: "sm",
          py: 2,
          display: { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": { minWidth: { xs: "120px", md: "160px" } },
        },
        children: [
          C.jsxs(Bl, {
            sx: { flex: 1 },
            size: "sm",
            children: [
              C.jsx(Ol, { children: "Search by ..." }),
              C.jsx(Ri, {
                size: "sm",
                placeholder: "Search",
                startDecorator: C.jsx(jd, {}),
              }),
            ],
          }),
          C.jsx(e0, {}),
        ],
      }),
      C.jsx(ma, {
        className: "OrderTableContainer",
        variant: "outlined",
        sx: {
          display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        },
        children: C.jsxs(mP, {
          "aria-labelledby": "tableTitle",
          stickyHeader: !0,
          hoverRow: !0,
          sx: {
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          },
          children: [
            C.jsx("thead", {
              children: C.jsxs("tr", {
                children: [
                  C.jsx("th", {
                    style: {
                      width: 48,
                      textAlign: "center",
                      padding: "12px 6px",
                    },
                    children: C.jsx(rv, {
                      size: "sm",
                      indeterminate: n.length > 0 && n.length !== e.length,
                      checked: n.length === e.length,
                      onChange: (o) => {
                        r(o.target.checked ? e.map((i, l) => l) : []);
                      },
                      color:
                        n.length > 0 || n.length === e.length
                          ? "primary"
                          : void 0,
                      sx: { verticalAlign: "text-bottom" },
                    }),
                  }),
                  C.jsx("th", {
                    style: { width: 120, padding: "12px 6px" },
                    children: "Name",
                  }),
                  C.jsx("th", {
                    style: { width: 140, padding: "12px 6px" },
                    children: "Occurence",
                  }),
                  C.jsx("th", {
                    style: { width: 140, padding: "12px 6px" },
                    children: "Type",
                  }),
                  C.jsx("th", {
                    style: { width: 240, padding: "12px 6px" },
                    children: "Amount",
                  }),
                  C.jsx("th", {
                    style: { width: 140, padding: "12px 6px" },
                    children: "Actions",
                  }),
                ],
              }),
            }),
            C.jsx("tbody", {
              children: e.map((o, i) =>
                C.jsxs(
                  "tr",
                  {
                    children: [
                      C.jsx("td", {
                        style: { textAlign: "center", width: 120 },
                        children: C.jsx(rv, {
                          size: "sm",
                          checked: n.includes(i),
                          color: n.includes(i) ? "primary" : void 0,
                          onChange: (l) => {
                            r((a) =>
                              l.target.checked
                                ? a.concat(i)
                                : a.filter((s) => s !== i),
                            );
                          },
                          slotProps: {
                            checkbox: { sx: { textAlign: "left" } },
                          },
                          sx: { verticalAlign: "text-bottom" },
                        }),
                      }),
                      C.jsx("td", {
                        children: C.jsx(Ht, {
                          level: "body-xs",
                          children: o.name,
                        }),
                      }),
                      C.jsx("td", {}),
                      C.jsx("td", {
                        children: C.jsx(Zp, {
                          variant: "soft",
                          size: "sm",
                          startDecorator: {
                            income: C.jsx(TR, {}),
                            expense: C.jsx(DR, {}),
                          }[o.type],
                          color: { income: "success", expense: "danger" }[
                            o.type
                          ],
                          children: o.type,
                        }),
                      }),
                      C.jsx("td", {
                        children: C.jsx(dt, {
                          sx: { display: "flex", gap: 2, alignItems: "center" },
                          children: C.jsxs(Zp, {
                            size: "sm",
                            children: ["$ ", o.amount],
                          }),
                        }),
                      }),
                      C.jsx("td", {
                        children: C.jsx(dt, {
                          sx: { display: "flex", gap: 2, alignItems: "center" },
                          children: C.jsx(P5, {
                            onDelete: () => {
                              t(i);
                            },
                          }),
                        }),
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
            C.jsx("tfoot", {
              children: C.jsxs("tr", {
                children: [
                  C.jsx("th", {}),
                  C.jsx("td", {}),
                  C.jsx("td", {}),
                  C.jsx("td", {}),
                  C.jsxs("td", {
                    children: [
                      "$",
                      " ",
                      e.reduce(
                        (o, i) =>
                          i.type === "expense" ? o - i.amount : o + i.amount,
                        0,
                      ),
                    ],
                  }),
                  C.jsx("td", {}),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
var Hd = {},
  z5 = Ln;
Object.defineProperty(Hd, "__esModule", { value: !0 });
var d0 = (Hd.default = void 0),
  _5 = z5(Bn()),
  E5 = C,
  D5 = (0, _5.default)(
    (0, E5.jsx)("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z",
    }),
    "PersonRounded",
  );
d0 = Hd.default = D5;
function T5(e) {
  return ce("MuiAccordionGroup", e);
}
ue("MuiAccordionGroup", [
  "root",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "colorContext",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "sizeSm",
  "sizeMd",
  "sizeLg",
]);
function L5(e) {
  return ce("MuiAccordionDetails", e);
}
const B5 = ue("MuiAccordionDetails", ["root", "content", "expanded"]),
  Pi = B5;
function O5(e) {
  return ce("MuiAccordion", e);
}
const M5 = ue("MuiAccordion", ["root", "expanded", "disabled"]),
  A5 = M5,
  j5 = [
    "component",
    "color",
    "children",
    "disableDivider",
    "variant",
    "transition",
    "size",
    "slots",
    "slotProps",
  ],
  F5 = (e) => {
    const { variant: t, color: n, size: r } = e,
      o = {
        root: [
          "root",
          t && `variant${W(t)}`,
          n && `color${W(n)}`,
          r && `size${W(r)}`,
        ],
      };
    return le(o, T5, {});
  },
  N5 = H(as, {
    name: "JoyAccordionGroup",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    let n = {};
    return (
      t.transition &&
        (typeof t.transition == "string" &&
          (n = {
            "--AccordionDetails-transition": `grid-template-rows ${t.transition}, padding-block ${t.transition}`,
          }),
        typeof t.transition == "object" &&
          (n = {
            "--AccordionDetails-transition": `grid-template-rows ${t.transition.initial}, padding-block ${t.transition.initial}`,
            [`& .${Pi.root}.${Pi.expanded}`]: {
              "--AccordionDetails-transition": `grid-template-rows ${t.transition.expanded}, padding-block ${t.transition.expanded}`,
            },
          })),
      h(
        { "--List-padding": "0px", "--ListDivider-gap": "0px" },
        n,
        !t.disableDivider && {
          [`& .${A5.root}:not([data-last-child])`]: {
            "--Accordion-borderBottom": `1px solid ${e.vars.palette.divider}`,
          },
        },
      )
    );
  }),
  H5 = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyAccordionGroup" }),
      {
        component: o = "div",
        color: i = "neutral",
        children: l,
        disableDivider: a = !1,
        variant: s = "plain",
        transition: c = "0.2s ease",
        size: d = "md",
        slots: v = {},
        slotProps: m = {},
      } = r,
      y = Y(r, j5),
      b = h({}, y, { component: o, slots: v, slotProps: m }),
      x = h({}, r, {
        component: o,
        color: i,
        disableDivider: a,
        variant: s,
        transition: c,
        size: d,
      }),
      $ = F5(x),
      [f, p] = U("root", {
        ref: n,
        className: $.root,
        elementType: N5,
        externalForwardedProps: b,
        ownerState: x,
      });
    return C.jsx(f, h({}, p, { children: C.jsx(ls, { children: l }) }));
  }),
  V5 = H5,
  W5 = g.createContext({}),
  Vd = W5,
  U5 = [
    "accordionId",
    "component",
    "color",
    "children",
    "defaultExpanded",
    "disabled",
    "expanded",
    "onChange",
    "variant",
    "slots",
    "slotProps",
  ],
  K5 = (e) => {
    const { variant: t, color: n, expanded: r, disabled: o } = e,
      i = {
        root: [
          "root",
          r && "expanded",
          o && "disabled",
          n && `color${W(n)}`,
          t && `variant${W(t)}`,
        ],
      };
    return le(i, O5, {});
  },
  G5 = H(Td, {
    name: "JoyAccordion",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    borderBottom: "var(--Accordion-borderBottom)",
    "&[data-first-child]": {
      "--ListItem-radius":
        "var(--unstable_List-childRadius) var(--unstable_List-childRadius) 0 0",
    },
    "&[data-last-child]": {
      "--ListItem-radius":
        "0 0 var(--unstable_List-childRadius) var(--unstable_List-childRadius)",
      '& [aria-expanded="true"]': { "--ListItem-radius": "0" },
      [`& .${Pi.root}`]: {
        "--AccordionDetails-radius":
          "0 0 var(--unstable_List-childRadius) var(--unstable_List-childRadius)",
      },
    },
    "&:not([data-first-child]):not([data-last-child])": {
      "--ListItem-radius": "0",
    },
  }),
  J5 = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyAccordion" }),
      {
        accordionId: o,
        component: i = "div",
        color: l = "neutral",
        children: a,
        defaultExpanded: s = !1,
        disabled: c = !1,
        expanded: d,
        onChange: v,
        variant: m = "plain",
        slots: y = {},
        slotProps: b = {},
      } = r,
      x = Y(r, U5),
      $ = $t(o),
      [f, p] = ya({
        controlled: d,
        default: s,
        name: "Accordion",
        state: "expanded",
      }),
      u = g.useCallback(
        (w) => {
          p(!f), v && v(w, !f);
        },
        [f, v, p],
      ),
      k = g.useMemo(
        () => ({ accordionId: $, expanded: f, disabled: c, toggle: u }),
        [$, f, c, u],
      ),
      S = h({}, x, { component: i, slots: y, slotProps: b }),
      R = h({}, r, {
        component: i,
        color: l,
        variant: m,
        expanded: f,
        disabled: c,
        nested: !0,
      }),
      I = K5(R),
      [P, D] = U("root", {
        ref: n,
        className: I.root,
        elementType: G5,
        externalForwardedProps: S,
        ownerState: R,
      });
    return C.jsx(Vd.Provider, {
      value: k,
      children: C.jsx(
        P,
        h({}, D, {
          children: g.Children.map(a, (w, T) =>
            g.isValidElement(w) && T === 0
              ? g.cloneElement(w, { "data-first-child": "" })
              : w,
          ),
        }),
      ),
    });
  }),
  Ks = J5;
function X5(e) {
  return ce("MuiAccordionSummary", e);
}
const Y5 = ue("MuiAccordionSummary", [
    "root",
    "button",
    "indicator",
    "disabled",
    "expanded",
  ]),
  Wd = Y5,
  Q5 = Gi(
    C.jsx("path", {
      d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    }),
    "KeyboardArrowDown",
  );
var uv;
const q5 = [
    "component",
    "color",
    "children",
    "indicator",
    "variant",
    "slots",
    "slotProps",
  ],
  Z5 = (e) => {
    const { disabled: t, expanded: n } = e;
    return le(
      {
        root: ["root", t && "disabled", n && "expanded"],
        button: ["button", t && "disabled", n && "expanded"],
        indicator: ["indicator", t && "disabled", n && "expanded"],
      },
      X5,
      {},
    );
  },
  ez = H(Td, {
    name: "JoyAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    fontWeight: e.vars.fontWeight.md,
    gap: "calc(var(--ListItem-paddingX, 0.75rem) + 0.25rem)",
    [`&.${Wd.expanded}`]: { "--Icon-color": "currentColor" },
  })),
  tz = H(ss, {
    name: "JoyAccordionSummary",
    slot: "Button",
    overridesResolver: (e, t) => t.button,
  })({
    gap: "inherit",
    fontWeight: "inherit",
    justifyContent: "space-between",
    font: "inherit",
    "&:focus-visible": { zIndex: 1 },
    [`.${Wd.root} &`]: { "--unstable_ListItem-flex": "1 0 0%" },
  }),
  nz = H("span", {
    name: "JoyAccordionSummary",
    slot: "Indicator",
    overridesResolver: (e, t) => t.indicator,
  })({
    display: "inline-flex",
    [`&.${Wd.expanded}`]: { transform: "rotate(180deg)" },
  }),
  rz = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyAccordionSummary" }),
      {
        component: o = "div",
        color: i = "neutral",
        children: l,
        indicator: a = uv || (uv = C.jsx(Q5, {})),
        variant: s = "plain",
        slots: c = {},
        slotProps: d = {},
      } = r,
      v = Y(r, q5),
      {
        accordionId: m,
        disabled: y = !1,
        expanded: b = !1,
        toggle: x,
      } = g.useContext(Vd),
      $ = h({}, v, { component: o, slots: c, slotProps: d }),
      f = h({}, r, {
        component: o,
        color: i,
        disabled: y,
        expanded: b,
        variant: s,
      }),
      p = (w) => {
        if ((x && x(w), typeof d.button == "function")) {
          var T, M;
          (T = d.button(f)) == null || (M = T.onClick) == null || M.call(T, w);
        } else {
          var O, F;
          (O = d.button) == null || (F = O.onClick) == null || F.call(O, w);
        }
      },
      u = Z5(f),
      [k, S] = U("root", {
        ref: n,
        className: u.root,
        elementType: ez,
        externalForwardedProps: $,
        ownerState: f,
      }),
      [R, I] = U("button", {
        ref: n,
        className: u.button,
        elementType: tz,
        externalForwardedProps: $,
        additionalProps: {
          component: "button",
          id: `${m}-summary`,
          "aria-expanded": b ? "true" : "false",
          "aria-controls": `${m}-details`,
          disabled: y,
          type: "button",
          onClick: p,
        },
        ownerState: f,
      }),
      [P, D] = U("indicator", {
        ref: n,
        className: u.indicator,
        elementType: nz,
        externalForwardedProps: $,
        ownerState: f,
      });
    return C.jsx(
      k,
      h({}, S, {
        children: C.jsxs(
          R,
          h({}, I, { children: [l, a && C.jsx(P, h({}, D, { children: a }))] }),
        ),
      }),
    );
  }),
  Gs = rz,
  oz = ["component", "children", "color", "variant", "slots", "slotProps"],
  iz = (e) => {
    const { expanded: t } = e;
    return le(
      {
        root: ["root", t && "expanded"],
        content: ["content", t && "expanded"],
      },
      L5,
      {},
    );
  },
  lz = H("div", {
    name: "JoyAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) => {
    var n;
    return h(
      {
        overflow: "hidden",
        borderRadius: "var(--AccordionDetails-radius)",
        display: "grid",
        gridTemplateRows: "1fr",
        marginInline:
          "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
        transition: "var(--AccordionDetails-transition)",
      },
      (n = t.variants[e.variant]) == null ? void 0 : n[e.color],
      { [`&:not(.${Pi.expanded})`]: { gridTemplateRows: "0fr" } },
    );
  }),
  az = H("div", {
    name: "JoyAccordionDetails",
    slot: "Content",
    overridesResolver: (e, t) => t.root,
  })({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    paddingInlineStart: "var(--ListItem-paddingLeft)",
    paddingInlineEnd: "var(--ListItem-paddingRight)",
    paddingBlockStart: "calc(var(--ListItem-paddingY) / 2)",
    paddingBlockEnd: "calc(2.5 * var(--ListItem-paddingY))",
    transition: "var(--AccordionDetails-transition)",
    [`&:not(.${Pi.expanded})`]: { paddingBlock: 0 },
  }),
  sz = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyAccordionDetails" }),
      {
        component: o = "div",
        children: i,
        color: l = "neutral",
        variant: a = "plain",
        slots: s = {},
        slotProps: c = {},
      } = r,
      d = Y(r, oz),
      { accordionId: v, expanded: m = !1 } = g.useContext(Vd),
      y = g.useRef(null),
      b = ke(y, n);
    g.useEffect(() => {
      y.current &&
        y.current
          .querySelectorAll(
            'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
          )
          .forEach((I) => {
            if (m) {
              const P = I.getAttribute("data-prev-tabindex"),
                D = I.getAttribute("tabindex");
              D &&
                P &&
                (I.setAttribute("tabindex", P),
                I.removeAttribute("data-prev-tabindex")),
                !P && !D && I.removeAttribute("tabindex");
            } else
              I.setAttribute(
                "data-prev-tabindex",
                I.getAttribute("tabindex") || "",
              ),
                I.setAttribute("tabindex", "-1");
          });
    }, [m]);
    const x = h({}, d, { component: o, slots: s, slotProps: c }),
      $ = h({}, r, {
        component: o,
        color: l,
        variant: a,
        expanded: m,
        nesting: !0,
      }),
      f = iz($),
      [p, u] = U("root", {
        ref: b,
        className: f.root,
        elementType: lz,
        externalForwardedProps: x,
        additionalProps: {
          id: `${v}-details`,
          "aria-labelledby": `${v}-summary`,
          role: "region",
          hidden: m ? void 0 : !0,
        },
        ownerState: $,
      }),
      [k, S] = U("content", {
        className: f.content,
        elementType: az,
        externalForwardedProps: x,
        ownerState: $,
      });
    return C.jsx(
      p,
      h({}, u, { children: C.jsx(k, h({}, S, { children: i })) }),
    );
  }),
  Js = sz;
function cz(e) {
  return ce("MuiRadioGroup", e);
}
ue("MuiRadioGroup", [
  "root",
  "colorPrimary",
  "colorNeutral",
  "colorDanger",
  "colorSuccess",
  "colorWarning",
  "variantPlain",
  "variantOutlined",
  "variantSoft",
  "variantSolid",
  "sizeSm",
  "sizeMd",
  "sizeLg",
  "horizontal",
  "vertical",
]);
const uz = [
    "className",
    "component",
    "children",
    "name",
    "defaultValue",
    "disableIcon",
    "overlay",
    "value",
    "onChange",
    "color",
    "variant",
    "size",
    "orientation",
    "role",
    "slots",
    "slotProps",
  ],
  dz = (e) => {
    const { orientation: t, size: n, variant: r, color: o } = e,
      i = {
        root: [
          "root",
          t,
          r && `variant${W(r)}`,
          o && `color${W(o)}`,
          n && `size${W(n)}`,
        ],
      };
    return le(i, cz, {});
  },
  fz = H("div", {
    name: "JoyRadioGroup",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) => {
    var n;
    return h(
      {},
      e.size === "sm" && { "--RadioGroup-gap": "0.625rem" },
      e.size === "md" && { "--RadioGroup-gap": "0.875rem" },
      e.size === "lg" && { "--RadioGroup-gap": "1.25rem" },
      {
        display: "flex",
        margin: "var(--unstable_RadioGroup-margin)",
        flexDirection: e.orientation === "horizontal" ? "row" : "column",
        borderRadius: t.vars.radius.sm,
      },
      (n = t.variants[e.variant]) == null ? void 0 : n[e.color],
    );
  }),
  pz = g.forwardRef(function (t, n) {
    const r = de({ props: t, name: "JoyRadioGroup" }),
      {
        className: o,
        component: i,
        children: l,
        name: a,
        defaultValue: s,
        disableIcon: c = !1,
        overlay: d,
        value: v,
        onChange: m,
        color: y = "neutral",
        variant: b = "plain",
        size: x = "md",
        orientation: $ = "vertical",
        role: f = "radiogroup",
        slots: p = {},
        slotProps: u = {},
      } = r,
      k = Y(r, uz),
      [S, R] = ya({ controlled: v, default: s, name: "RadioGroup" }),
      I = g.useContext(tr),
      P = t.size || (I == null ? void 0 : I.size) || x,
      D = h({ orientation: $, size: P, variant: b, color: y, role: f }, r),
      w = dz(D),
      T = $t(a),
      M = g.useMemo(
        () => ({
          disableIcon: c,
          overlay: d,
          orientation: $,
          size: P,
          name: T,
          value: S,
          onChange: (B) => {
            R(B.target.value), m && m(B);
          },
        }),
        [c, T, m, d, $, R, P, S],
      ),
      [O, F] = U("root", {
        ref: n,
        className: Ve(w.root, o),
        elementType: fz,
        externalForwardedProps: h({}, k, {
          component: i,
          slots: p,
          slotProps: u,
        }),
        ownerState: D,
        additionalProps: {
          as: i,
          role: f,
          id: I == null ? void 0 : I.htmlFor,
          "aria-labelledby": I == null ? void 0 : I.labelId,
          "aria-describedby": I == null ? void 0 : I["aria-describedby"],
        },
      });
    return C.jsx(Dd.Provider, {
      value: M,
      children: C.jsx(
        O,
        h({}, F, {
          children: C.jsx(tr.Provider, {
            value: void 0,
            children: g.Children.map(l, (B, E) =>
              g.isValidElement(B)
                ? g.cloneElement(
                    B,
                    h(
                      {},
                      E === 0 && { "data-first-child": "" },
                      E === g.Children.count(l) - 1 && {
                        "data-last-child": "",
                      },
                      { "data-parent": "RadioGroup" },
                    ),
                  )
                : B,
            ),
          }),
        }),
      ),
    });
  }),
  vz = pz;
function mz(e) {
  return ce("MuiRadio", e);
}
const hz = ue("MuiRadio", [
    "root",
    "radio",
    "icon",
    "action",
    "input",
    "label",
    "checked",
    "disabled",
    "focusVisible",
    "colorPrimary",
    "colorDanger",
    "colorNeutral",
    "colorSuccess",
    "colorWarning",
    "colorContext",
    "sizeSm",
    "sizeMd",
    "sizeLg",
    "variantOutlined",
    "variantSoft",
    "variantSolid",
  ]),
  wi = hz,
  gz = [
    "checked",
    "checkedIcon",
    "defaultChecked",
    "disabled",
    "disableIcon",
    "overlay",
    "label",
    "id",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "onFocusVisible",
    "readOnly",
    "required",
    "color",
    "variant",
    "size",
    "uncheckedIcon",
    "value",
    "component",
    "slots",
    "slotProps",
  ],
  yz = (e) => {
    const {
        checked: t,
        disabled: n,
        disableIcon: r,
        focusVisible: o,
        color: i,
        variant: l,
        size: a,
      } = e,
      s = {
        root: [
          "root",
          t && "checked",
          n && "disabled",
          o && "focusVisible",
          l && `variant${W(l)}`,
          i && `color${W(i)}`,
          a && `size${W(a)}`,
        ],
        radio: ["radio", t && "checked", n && "disabled"],
        icon: ["icon"],
        action: [
          "action",
          t && "checked",
          r && n && "disabled",
          o && "focusVisible",
        ],
        input: ["input"],
        label: ["label"],
      };
    return le(s, mz, {});
  };
function xz(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Cz = H("span", {
    name: "JoyRadio",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) => {
    var n, r, o;
    return [
      h(
        {
          "--Icon-fontSize": "var(--Radio-size)",
          "--Icon-color": "currentColor",
        },
        e.size === "sm" && {
          "--Radio-size": "1rem",
          "& ~ *": { "--FormHelperText-margin": "0 0 0 1.5rem" },
          fontSize: t.vars.fontSize.sm,
          gap: "var(--Radio-gap, 0.5rem)",
        },
        e.size === "md" && {
          "--Radio-size": "1.25rem",
          "& ~ *": { "--FormHelperText-margin": "0.25rem 0 0 1.875rem" },
          fontSize: t.vars.fontSize.md,
          gap: "var(--Radio-gap, 0.625rem)",
        },
        e.size === "lg" && {
          "--Radio-size": "1.5rem",
          "& ~ *": { "--FormHelperText-margin": "0.375rem 0 0 2.25rem" },
          fontSize: t.vars.fontSize.lg,
          gap: "var(--Radio-gap, 0.75rem)",
        },
        {
          position: e.overlay ? "initial" : "relative",
          display: "inline-flex",
          boxSizing: "border-box",
          minWidth: 0,
          fontFamily: t.vars.fontFamily.body,
          lineHeight: "var(--Radio-size)",
          color: t.vars.palette.text.primary,
          [`&.${wi.disabled}`]: {
            color:
              (n = t.variants.plainDisabled) == null || (n = n[e.color]) == null
                ? void 0
                : n.color,
          },
        },
        e.disableIcon && {
          color:
            (r = t.variants[e.variant]) == null || (r = r[e.color]) == null
              ? void 0
              : r.color,
          [`&.${wi.disabled}`]: {
            color:
              (o = t.variants[`${e.variant}Disabled`]) == null ||
              (o = o[e.color]) == null
                ? void 0
                : o.color,
          },
        },
        e["data-parent"] === "RadioGroup" &&
          e["data-first-child"] === void 0 && {
            marginInlineStart:
              e.orientation === "horizontal" ? "var(--RadioGroup-gap)" : void 0,
            marginBlockStart:
              e.orientation === "horizontal" ? void 0 : "var(--RadioGroup-gap)",
          },
      ),
    ];
  }),
  bz = H("span", {
    name: "JoyRadio",
    slot: "Radio",
    overridesResolver: (e, t) => t.radio,
  })(({ ownerState: e, theme: t }) => {
    var n, r, o, i, l;
    const a = (n = t.variants[`${e.variant}`]) == null ? void 0 : n[e.color];
    return [
      h(
        {
          "--Icon-color":
            e.color !== "neutral" || e.variant === "solid"
              ? "currentColor"
              : t.vars.palette.text.icon,
          margin: 0,
          boxSizing: "border-box",
          width: "var(--Radio-size)",
          height: "var(--Radio-size)",
          borderRadius: "var(--Radio-size)",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        },
        e.disableIcon && { display: "contents" },
        { [`&.${wi.checked}`]: { "--Icon-color": "currentColor" } },
      ),
      ...(e.disableIcon
        ? []
        : [
            h({}, a, {
              backgroundColor:
                (r = a == null ? void 0 : a.backgroundColor) != null
                  ? r
                  : t.vars.palette.background.surface,
            }),
            {
              "&:hover": {
                "@media (hover: hover)":
                  (o = t.variants[`${e.variant}Hover`]) == null
                    ? void 0
                    : o[e.color],
              },
            },
            {
              "&:active":
                (i = t.variants[`${e.variant}Active`]) == null
                  ? void 0
                  : i[e.color],
            },
            {
              [`&.${wi.disabled}`]:
                (l = t.variants[`${e.variant}Disabled`]) == null
                  ? void 0
                  : l[e.color],
            },
          ]),
    ];
  }),
  Sz = H("span", {
    name: "JoyRadio",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i;
    return [
      {
        position: "absolute",
        textAlign: "left",
        borderRadius: `var(--Radio-actionRadius, ${
          t.overlay ? "var(--unstable_actionRadius, inherit)" : "inherit"
        })`,
        top: "calc(-1 * var(--variant-borderWidth, 0px))",
        left: "calc(-1 * var(--variant-borderWidth, 0px))",
        bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
        right: "calc(-1 * var(--variant-borderWidth, 0px))",
        zIndex: 1,
        [e.focus.selector]: e.focus.default,
      },
      ...(t.disableIcon
        ? [
            (n = e.variants[t.variant]) == null ? void 0 : n[t.color],
            {
              "&:hover": {
                "@media (hover: hover)":
                  (r = e.variants[`${t.variant}Hover`]) == null
                    ? void 0
                    : r[t.color],
              },
            },
            {
              "&:active":
                (o = e.variants[`${t.variant}Active`]) == null
                  ? void 0
                  : o[t.color],
            },
            {
              [`&.${wi.disabled}`]:
                (i = e.variants[`${t.variant}Disabled`]) == null
                  ? void 0
                  : i[t.color],
            },
          ]
        : []),
    ];
  }),
  kz = H("input", {
    name: "JoyRadio",
    slot: "Input",
    overridesResolver: (e, t) => t.input,
  })(() => ({
    margin: 0,
    opacity: 0,
    position: "absolute",
    height: "100%",
    width: "100%",
    cursor: "pointer",
  })),
  $z = H("label", {
    name: "JoyRadio",
    slot: "Label",
    overridesResolver: (e, t) => t.label,
  })(({ ownerState: e }) =>
    h(
      { flex: 1, minWidth: 0 },
      e.disableIcon && { zIndex: 1, pointerEvents: "none" },
    ),
  ),
  Iz = H("span", {
    name: "JoyRadio",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })(({ ownerState: e }) => ({
    width: "calc(var(--Radio-size) / 2)",
    height: "calc(var(--Radio-size) / 2)",
    borderRadius: "inherit",
    color: "inherit",
    backgroundColor: "currentColor",
    transform: e.checked ? "scale(1)" : "scale(0)",
  })),
  Rz = g.forwardRef(function (t, n) {
    var r, o, i, l, a, s, c;
    const d = de({ props: t, name: "JoyRadio" }),
      {
        checked: v,
        checkedIcon: m,
        defaultChecked: y,
        disabled: b,
        disableIcon: x = !1,
        overlay: $ = !1,
        label: f,
        id: p,
        name: u,
        onBlur: k,
        onChange: S,
        onFocus: R,
        onFocusVisible: I,
        readOnly: P,
        required: D,
        color: w,
        variant: T = "outlined",
        size: M = "md",
        uncheckedIcon: O,
        value: F,
        component: B,
        slots: E = {},
        slotProps: _ = {},
      } = d,
      z = Y(d, gz),
      L = g.useContext(tr),
      V = $t(p ?? (L == null ? void 0 : L.htmlFor)),
      K = g.useContext(Dd),
      X =
        L != null && L.error
          ? "danger"
          : (r =
                (o =
                  (i = t.color) != null ? i : L == null ? void 0 : L.color) !=
                null
                  ? o
                  : w) != null
            ? r
            : "primary",
      fe =
        L != null && L.error
          ? "danger"
          : (l =
                (a =
                  (s = t.color) != null ? s : L == null ? void 0 : L.color) !=
                null
                  ? a
                  : w) != null
            ? l
            : "neutral",
      re =
        t.size ||
        (L == null ? void 0 : L.size) ||
        (K == null ? void 0 : K.size) ||
        M,
      ae = t.name || (K == null ? void 0 : K.name) || u,
      Q = t.disableIcon || (K == null ? void 0 : K.disableIcon) || x,
      A = t.overlay || (K == null ? void 0 : K.overlay) || $,
      q = {
        checked: typeof v > "u" && F ? xz(K == null ? void 0 : K.value, F) : v,
        defaultChecked: y,
        disabled: b ?? (L == null ? void 0 : L.disabled),
        onBlur: k,
        onChange: S,
        onFocus: R,
        onFocusVisible: I,
      },
      {
        getInputProps: ee,
        checked: ne,
        disabled: Pe,
        focusVisible: et,
      } = zg(q),
      Yt = (c = t.color) != null ? c : ne ? X : fe,
      ye = h({}, d, {
        checked: ne,
        disabled: Pe,
        focusVisible: et,
        color: Yt,
        variant: T,
        size: re,
        disableIcon: Q,
        overlay: A,
        orientation: K == null ? void 0 : K.orientation,
      }),
      Ce = yz(ye),
      me = h({}, z, { component: B, slots: E, slotProps: _ }),
      [Qt, qt] = U("root", {
        ref: n,
        className: Ce.root,
        elementType: Cz,
        externalForwardedProps: me,
        ownerState: ye,
      }),
      [Be, Xe] = U("radio", {
        className: Ce.radio,
        elementType: bz,
        externalForwardedProps: me,
        ownerState: ye,
      }),
      [we, ht] = U("icon", {
        className: Ce.icon,
        elementType: Iz,
        externalForwardedProps: me,
        ownerState: ye,
      }),
      [Rt, J] = U("action", {
        className: Ce.action,
        elementType: Sz,
        externalForwardedProps: me,
        ownerState: ye,
      }),
      [Z, oe] = U("input", {
        additionalProps: {
          type: "radio",
          id: V,
          name: ae,
          readOnly: P,
          required: D ?? (L == null ? void 0 : L.required),
          value: String(F),
          "aria-describedby": L == null ? void 0 : L["aria-describedby"],
        },
        className: Ce.input,
        elementType: kz,
        externalForwardedProps: me,
        getSlotProps: () => ee({ onChange: K == null ? void 0 : K.onChange }),
        ownerState: ye,
      }),
      [te, Fe] = U("label", {
        additionalProps: { htmlFor: V },
        className: Ce.label,
        elementType: $z,
        externalForwardedProps: me,
        ownerState: ye,
      });
    return C.jsxs(
      Qt,
      h({}, qt, {
        children: [
          C.jsxs(
            Be,
            h({}, Xe, {
              children: [
                ne && !Q && m,
                !ne && !Q && O,
                !m && !O && !Q && C.jsx(we, h({}, ht)),
                C.jsx(Rt, h({}, J, { children: C.jsx(Z, h({}, oe)) })),
              ],
            }),
          ),
          f &&
            C.jsx(
              te,
              h({}, Fe, {
                children: C.jsx(go.Provider, { value: !0, children: f }),
              }),
            ),
        ],
      }),
    );
  }),
  dv = Rz;
function Pz({ addNewItem: e }) {
  const [{ name: t, type: n, amount: r }, o] = g.useState({
    name: "",
    type: "expense",
    amount: 1e3,
  });
  return C.jsxs(dt, {
    sx: {
      flex: 2,
      bgcolor: "background.surface",
      borderRight: "1px solid",
      borderColor: "divider",
      display: { xs: "none", md: "initial" },
    },
    children: [
      C.jsxs(dt, {
        sx: {
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        children: [
          C.jsx(Ht, {
            level: "title-lg",
            textColor: "text.secondary",
            children: "Item",
          }),
          C.jsx(o0, {
            startDecorator: C.jsx(d0, {}),
            size: "sm",
            onClick: () => {
              e({ name: t, type: n, amount: r });
            },
            children: "Add new",
          }),
        ],
      }),
      C.jsxs(V5, {
        children: [
          C.jsxs(Ks, {
            defaultExpanded: !0,
            children: [
              C.jsx(Gs, {
                children: C.jsx(Ht, { level: "title-sm", children: "Name" }),
              }),
              C.jsx(Js, {
                children: C.jsx(dt, {
                  sx: { my: 2 },
                  children: C.jsx(Ri, {
                    onChange: (i) => {
                      o({ name: i.target.value, type: n, amount: r });
                    },
                    value: t,
                    placeholder: "Name",
                  }),
                }),
              }),
            ],
          }),
          C.jsxs(Ks, {
            defaultExpanded: !0,
            children: [
              C.jsx(Gs, {
                children: C.jsx(Ht, { level: "title-sm", children: "Type" }),
              }),
              C.jsx(Js, {
                children: C.jsx(dt, {
                  sx: { my: 2 },
                  children: C.jsxs(vz, {
                    name: "type",
                    defaultValue: n,
                    onChange: (i) => {
                      const l = i.target.value;
                      (l !== "expense" && l !== "income") ||
                        o({ name: t, type: l, amount: r });
                    },
                    children: [
                      C.jsx(dv, {
                        label: "Expense",
                        value: "expense",
                        size: "sm",
                      }),
                      C.jsx(dv, {
                        label: "Income",
                        value: "income",
                        size: "sm",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          C.jsxs(Ks, {
            defaultExpanded: !0,
            children: [
              C.jsx(Gs, {
                children: C.jsx(Ht, { level: "title-sm", children: "Amount" }),
              }),
              C.jsx(Js, {
                children: C.jsx(dt, {
                  sx: { my: 2 },
                  children: C.jsx(Ri, {
                    value: r,
                    onChange: (i) => {
                      const l = Number(i.target.value);
                      o({ name: t, type: n, amount: Number.isNaN(l) ? 0 : l });
                    },
                    placeholder: "$ 0",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function wz() {
  const [e, t] = g.useState([]),
    n = g.useCallback(
      (r) => {
        console.log("deleting", r), e.splice(r, 1), t([...e]);
      },
      [e, t],
    );
  return C.jsxs(dt, {
    sx: { display: "flex", minHeight: "100dvh" },
    children: [
      C.jsx(OR, {}),
      C.jsx(Pz, {
        addNewItem: (r) => {
          t([...e, r]);
        },
      }),
      C.jsxs(dt, {
        component: "main",
        sx: {
          px: { xs: 2, md: 6 },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 5,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
        },
        children: [
          C.jsx(dt, {
            sx: { display: "flex", alignItems: "center" },
            children: C.jsxs(Z$, {
              size: "sm",
              "aria-label": "breadcrumbs",
              separator: C.jsx(Bg, { fontSize: "small" }),
              sx: { pl: 0 },
              children: [
                C.jsx(Wp, {
                  underline: "none",
                  color: "neutral",
                  "aria-label": "Home",
                  children: C.jsx($d, {}),
                }),
                C.jsx(Wp, {
                  underline: "hover",
                  color: "neutral",
                  fontSize: 12,
                  fontWeight: 500,
                  children: "Dashboard",
                }),
                C.jsx(Ht, {
                  color: "primary",
                  fontWeight: 500,
                  fontSize: 12,
                  children: "Budget",
                }),
              ],
            }),
          }),
          C.jsx(dt, {
            sx: {
              display: "flex",
              mb: 1,
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              flexWrap: "wrap",
              justifyContent: "space-between",
            },
            children: C.jsx(Ht, {
              level: "h2",
              component: "h1",
              children: "Budget",
            }),
          }),
          C.jsx(w5, { onDeleteItem: n, items: e }),
        ],
      }),
    ],
  });
}
const zz = document.getElementById("root") ?? document.body;
nc.createRoot(zz).render(
  C.jsxs(nC, { children: [C.jsx(tC, {}), C.jsx(wz, {})] }),
);
