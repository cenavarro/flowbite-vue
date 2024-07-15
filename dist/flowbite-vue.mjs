import { reactive as Ko, onBeforeMount as Jo, onBeforeUnmount as Xo, defineComponent as C, openBlock as c, createElementBlock as h, unref as y, renderSlot as w, computed as p, ref as V, onMounted as De, normalizeClass as x, createCommentVNode as T, createElementVNode as g, useAttrs as ne, mergeProps as X, useSlots as We, toRefs as K, toDisplayString as B, createBlock as D, resolveDynamicComponent as Z, withCtx as j, resolveComponent as me, normalizeProps as Te, Fragment as Y, renderList as Oe, withModifiers as xt, isRef as Zt, getCurrentScope as Zo, onScopeDispose as Qo, readonly as es, getCurrentInstance as to, watch as lt, nextTick as Qt, watchEffect as ts, createTextVNode as ee, Comment as rs, toRef as He, createVNode as Fe, Transition as ro, normalizeStyle as rt, pushScopeId as oo, popScopeId as so, withKeys as no, provide as de, inject as te, withDirectives as Pe, vShow as os, guardReactiveProps as ao, h as ht, TransitionGroup as ss, withScopeId as ns, vModelCheckbox as lo, vModelDynamic as as, vModelRadio as ls, vModelText as io, vModelSelect as is } from "vue";
const ds = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let uo = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += ds[r[e] & 63];
  return t;
};
const Rt = Ko({});
function pt(e, t) {
  return Jo(() => {
    e && (Rt[e] = {
      id: e,
      flush: t?.flush ?? !1,
      alwaysOpen: t?.alwaysOpen ?? !1,
      openFirstItem: t?.openFirstItem ?? !0,
      panels: {}
    });
  }), Xo(() => {
    e && delete Rt[e];
  }), {
    accordionsStates: Rt
  };
}
const us = ["data-accordion-id"], _p = /* @__PURE__ */ C({
  __name: "FwbAccordion",
  props: {
    alwaysOpen: { type: Boolean, default: !1 },
    openFirstItem: { type: Boolean, default: !0 },
    flush: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = uo();
    return pt(r, { ...t }), (o, s) => (c(), h("div", { "data-accordion-id": y(r) }, [
      w(o.$slots, "default")
    ], 8, us));
  }
}), er = "-";
function cs(e) {
  const t = fs(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  function s(a) {
    const l = a.split(er);
    return l[0] === "" && l.length !== 1 && l.shift(), co(l, t) || ps(a);
  }
  function n(a, l) {
    const i = r[a] || [];
    return l && o[a] ? [...i, ...o[a]] : i;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: n
  };
}
function co(e, t) {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), s = o ? co(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const n = e.join(er);
  return t.validators.find(({
    validator: a
  }) => a(n))?.classGroupId;
}
const mr = /^\[(.+)\]$/;
function ps(e) {
  if (mr.test(e)) {
    const t = mr.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function fs(e) {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return hs(Object.entries(e.classGroups), r).forEach(([n, a]) => {
    Gt(a, o, n, t);
  }), o;
}
function Gt(e, t, r, o) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const n = s === "" ? t : br(t, s);
      n.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (gs(s)) {
        Gt(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([n, a]) => {
      Gt(a, br(t, n), r, o);
    });
  });
}
function br(e, t) {
  let r = e;
  return t.split(er).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}
function gs(e) {
  return e.isThemeGetter;
}
function hs(e, t) {
  return t ? e.map(([r, o]) => {
    const s = o.map((n) => typeof n == "string" ? t + n : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([a, l]) => [t + a, l])) : n);
    return [r, s];
  }) : e;
}
function ms(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function s(n, a) {
    r.set(n, a), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(n) {
      let a = r.get(n);
      if (a !== void 0)
        return a;
      if ((a = o.get(n)) !== void 0)
        return s(n, a), a;
    },
    set(n, a) {
      r.has(n) ? r.set(n, a) : s(n, a);
    }
  };
}
const po = "!";
function bs(e) {
  const t = e.separator, r = t.length === 1, o = t[0], s = t.length;
  return function(a) {
    const l = [];
    let i = 0, d = 0, u;
    for (let k = 0; k < a.length; k++) {
      let $ = a[k];
      if (i === 0) {
        if ($ === o && (r || a.slice(k, k + s) === t)) {
          l.push(a.slice(d, k)), d = k + s;
          continue;
        }
        if ($ === "/") {
          u = k;
          continue;
        }
      }
      $ === "[" ? i++ : $ === "]" && i--;
    }
    const f = l.length === 0 ? a : a.substring(d), b = f.startsWith(po), m = b ? f.substring(1) : f, v = u && u > d ? u - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: b,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
}
function vs(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}
function ys(e) {
  return {
    cache: ms(e.cacheSize),
    splitModifiers: bs(e),
    ...cs(e)
  };
}
const ws = /\s+/;
function xs(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  } = t, n = /* @__PURE__ */ new Set();
  return e.trim().split(ws).map((a) => {
    const {
      modifiers: l,
      hasImportantModifier: i,
      baseClassName: d,
      maybePostfixModifierPosition: u
    } = r(a);
    let f = o(u ? d.substring(0, u) : d), b = !!u;
    if (!f) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (f = o(d), !f)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      b = !1;
    }
    const m = vs(l).join(":");
    return {
      isTailwindClass: !0,
      modifierId: i ? m + po : m,
      classGroupId: f,
      originalClassName: a,
      hasPostfixModifier: b
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: l,
      classGroupId: i,
      hasPostfixModifier: d
    } = a, u = l + i;
    return n.has(u) ? !1 : (n.add(u), s(i, d).forEach((f) => n.add(l + f)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function ks() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = fo(t)) && (o && (o += " "), o += r);
  return o;
}
function fo(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = fo(e[o])) && (r && (r += " "), r += t);
  return r;
}
function _s(e, ...t) {
  let r, o, s, n = a;
  function a(i) {
    const d = t.reduce((u, f) => f(u), e());
    return r = ys(d), o = r.cache.get, s = r.cache.set, n = l, l(i);
  }
  function l(i) {
    const d = o(i);
    if (d)
      return d;
    const u = xs(i, r);
    return s(i, u), u;
  }
  return function() {
    return n(ks.apply(null, arguments));
  };
}
function R(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const go = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cs = /^\d+\/\d+$/, $s = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ss = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ts = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ps = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, zs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, As = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ge(e) {
  return Ie(e) || $s.has(e) || Cs.test(e);
}
function be(e) {
  return Ge(e, "length", Ns);
}
function Ie(e) {
  return !!e && !Number.isNaN(Number(e));
}
function mt(e) {
  return Ge(e, "number", Ie);
}
function Xe(e) {
  return !!e && Number.isInteger(Number(e));
}
function Fs(e) {
  return e.endsWith("%") && Ie(e.slice(0, -1));
}
function F(e) {
  return go.test(e);
}
function ve(e) {
  return Ss.test(e);
}
const Is = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Bs(e) {
  return Ge(e, Is, ho);
}
function Ms(e) {
  return Ge(e, "position", ho);
}
const Os = /* @__PURE__ */ new Set(["image", "url"]);
function Ls(e) {
  return Ge(e, Os, js);
}
function Es(e) {
  return Ge(e, "", Rs);
}
function Ze() {
  return !0;
}
function Ge(e, t, r) {
  const o = go.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}
function Ns(e) {
  return Ts.test(e) && !Ps.test(e);
}
function ho() {
  return !1;
}
function Rs(e) {
  return zs.test(e);
}
function js(e) {
  return As.test(e);
}
function Vs() {
  const e = R("colors"), t = R("spacing"), r = R("blur"), o = R("brightness"), s = R("borderColor"), n = R("borderRadius"), a = R("borderSpacing"), l = R("borderWidth"), i = R("contrast"), d = R("grayscale"), u = R("hueRotate"), f = R("invert"), b = R("gap"), m = R("gradientColorStops"), v = R("gradientColorStopPositions"), k = R("inset"), $ = R("margin"), S = R("opacity"), P = R("padding"), A = R("saturate"), L = R("scale"), _ = R("sepia"), E = R("skew"), z = R("space"), N = R("translate"), G = () => ["auto", "contain", "none"], H = () => ["auto", "hidden", "clip", "visible", "scroll"], q = () => ["auto", F, t], I = () => [F, t], ie = () => ["", ge, be], U = () => ["auto", Ie, F], Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], J = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Ye = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Ke = () => ["", "0", F], hr = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Je = () => [Ie, mt], gt = () => [Ie, F];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ze],
      spacing: [ge, be],
      blur: ["none", "", ve, F],
      brightness: Je(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ve, F],
      borderSpacing: I(),
      borderWidth: ie(),
      contrast: Je(),
      grayscale: Ke(),
      hueRotate: gt(),
      invert: Ke(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Fs, be],
      inset: q(),
      margin: q(),
      opacity: Je(),
      padding: I(),
      saturate: Je(),
      scale: Je(),
      sepia: Ke(),
      skew: gt(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", F]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ve]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": hr()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": hr()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Q(), F]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: G()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": G()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": G()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Xe, F]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: q()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", F]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Ke()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Ke()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Xe, F]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ze]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Xe, F]
        }, F]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ze]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Xe, F]
        }, F]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", F]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", F]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Ye()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ye(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...Ye(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [P]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [P]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [P]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [P]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [P]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [P]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [P]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [P]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [P]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [$]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [$]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [$]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [$]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [$]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [$]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [$]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [$]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [$]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [z]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [z]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [F, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [F, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ve]
        }, ve]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [F, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [F, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ve, be]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", mt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ze]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", F]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ie, mt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ge, F]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", F]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", F]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [S]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [S]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...J(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ge, be]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ge, F]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", F]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [S]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Q(), Ms]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Bs]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ls]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [n]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [n]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [n]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [n]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [n]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [n]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [n]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [n]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [n]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [n]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [n]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [n]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [n]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [n]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [n]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...J(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: J()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...J()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ge, F]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ge, be]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ie()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ge, be]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ve, Es]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ze]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ve, F]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", F]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: gt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", F]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: gt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", F]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Xe, F]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", F]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", F]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ge, be, mt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const O = /* @__PURE__ */ _s(Vs), Hs = "p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900";
function Ds(e) {
  const t = p(() => e.value.parentElement.parentElement.dataset.accordionId), r = p(() => e.value.parentElement.dataset.panelId), { accordionsStates: o } = pt(), s = p(() => o[t.value]), n = p(() => o[t.value].panels[r.value]), a = p(() => Object.keys(s.value.panels).length), l = p(() => n.value.order === a.value - 1);
  return {
    contentClasses: p(() => O(
      Hs,
      !n.value.isVisible && "hidden",
      (!l.value || s.value.flush) && "border-b-0",
      l.value && "border-t-0",
      s.value.flush && "border-x-0"
    ))
  };
}
const Cp = /* @__PURE__ */ C({
  __name: "FwbAccordionContent",
  setup(e) {
    const t = V(!1), r = V();
    let o;
    return De(() => {
      o = Ds(r).contentClasses, t.value = !0;
    }), (s, n) => (c(), h("div", {
      ref_key: "content",
      ref: r
    }, [
      t.value ? (c(), h("div", {
        key: 0,
        class: x(y(o))
      }, [
        w(s.$slots, "default")
      ], 2)) : T("", !0)
    ], 512));
  }
}), Ws = "flex items-center p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700", Gs = "hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800", qs = "w-6 h-6 shrink-0";
function Us(e) {
  const t = p(() => e.value.parentElement.parentElement.dataset.accordionId), r = p(() => e.value.parentElement.dataset.panelId), { accordionsStates: o } = pt(), s = p(() => o[t.value]), n = p(() => s.value.panels[r.value]), a = p(() => Object.keys(s.value.panels).length), l = p(() => n.value.order === 0), i = p(() => n.value.order === a.value - 1), d = p(() => O(
    Ws,
    n.value.isVisible ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
    n.value.isVisible && !s.value.flush && "bg-gray-100 dark:bg-gray-800",
    l.value && !s.value.flush && "rounded-t-xl",
    l.value && s.value.flush && "border-t-0",
    s.value.flush ? "border-x-0" : Gs,
    !i.value && "border-b-0"
  )), u = p(() => O(qs, n.value.isVisible && "rotate-180"));
  return {
    headerClasses: d,
    arrowClasses: u
  };
}
const Ys = { class: "w-full" }, Ks = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
}, null, -1), Js = [
  Ks
], $p = /* @__PURE__ */ C({
  __name: "FwbAccordionHeader",
  setup(e) {
    const t = V(!1), r = V(), o = p(() => r.value.parentElement.parentElement.dataset.accordionId), s = p(() => r.value.parentElement.dataset.panelId), { accordionsStates: n } = pt(), a = p(() => n[o.value]), l = p(() => a.value.panels[s.value]);
    let i, d;
    function u() {
      const m = l.value.isVisible;
      for (const v in a.value.panels) {
        const k = a.value.panels[v];
        k.id !== s.value ? k.isVisible = !1 : k.isVisible = !m;
      }
    }
    function f() {
      l.value.isVisible = !l.value.isVisible;
    }
    function b() {
      if (a.value.alwaysOpen)
        return f();
      u();
    }
    return De(() => {
      const m = Us(r);
      i = m.headerClasses, d = m.arrowClasses, t.value = !0;
    }), (m, v) => (c(), h("div", {
      ref_key: "header",
      ref: r
    }, [
      t.value ? (c(), h("button", {
        key: 0,
        type: "button",
        class: x(y(i)),
        onClick: b
      }, [
        g("span", Ys, [
          w(m.$slots, "default")
        ]),
        (c(), h("svg", {
          "data-accordion-icon": "",
          class: x(y(d)),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, Js, 2))
      ], 2)) : T("", !0)
    ], 512));
  }
}), Xs = ["data-panel-id"], Sp = /* @__PURE__ */ C({
  __name: "FwbAccordionPanel",
  setup(e) {
    const { accordionsStates: t } = pt(), r = uo(), o = V(), s = p(() => o.value ? o.value.parentElement.dataset.accordionId : null), n = p(() => t[s.value]);
    return De(() => {
      const a = Array.from(o.value.parentElement.children).indexOf(o.value);
      n.value.panels[r] = {
        id: r,
        order: a,
        isVisible: (n.value.openFirstItem && a === 0) ?? !1
      };
    }), (a, l) => (c(), h("div", {
      ref_key: "panel",
      ref: o,
      "data-panel-id": y(r)
    }, [
      s.value ? w(a.$slots, "default", { key: 0 }) : T("", !0)
    ], 8, Xs));
  }
}), Zs = { class: "flex items-center" }, Qs = /* @__PURE__ */ g("svg", {
  class: "flex-shrink-0 w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    "clip-rule": "evenodd"
  })
], -1), en = /* @__PURE__ */ g("span", { class: "sr-only" }, "Dismiss", -1), tn = /* @__PURE__ */ g("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })
], -1), rn = [
  en,
  tn
], on = "ml-auto -mr-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700", Tp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbAlert",
  props: {
    type: { default: "info" },
    closable: { type: Boolean, default: !1 },
    icon: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, o = t, s = ne(), n = {
      danger: "text-red-800 dark:text-red-400",
      dark: "text-gray-800 dark:text-gray-300",
      info: "text-blue-800 dark:text-blue-400",
      success: "text-green-800 dark:text-green-400",
      warning: "text-yellow-800 dark:text-yellow-300"
    }, a = {
      danger: "bg-red-50",
      dark: "bg-gray-50",
      info: "bg-blue-50",
      success: "bg-green-50",
      warning: "bg-yellow-50"
    }, i = O(on, {
      danger: "text-red-500 dark:text-red-400 bg-red-50 hover:bg-red-200 focus:ring-red-400",
      dark: "text-gray-500 dark:text-gray-300 bg-gray-50 hover:bg-gray-200 focus:ring-gray-400 dark:hover:text-white",
      info: "text-blue-500 dark:text-blue-400 bg-blue-50 hover:bg-blue-200 focus:ring-blue-400",
      success: "text-green-500 dark:text-green-400 bg-green-50 hover:bg-green-200 focus:ring-green-400",
      warning: "text-yellow-500 dark:text-yellow-300 bg-yellow-50 hover:bg-yellow-200 focus:ring-yellow-400"
    }[r.type]), d = {
      danger: "border-red-500 dark:text-red-400",
      dark: "border-gray-500 dark:text-gray-400",
      info: "border-blue-500 dark:text-blue-400",
      success: "border-green-500 dark:text-green-400",
      warning: "border-yellow-500 dark:text-yellow-400"
    }, u = {
      danger: [n.danger, a.danger].join(" "),
      dark: [n.dark, a.dark].join(" "),
      info: [n.info, a.info].join(" "),
      success: [n.success, a.success].join(" "),
      warning: [n.warning, a.warning].join(" ")
    }, f = O(
      "p-4 gap-3 text-sm dark:bg-gray-800 rounded-lg",
      u[r.type],
      (r.icon || r.closable) && "flex items-center",
      d[r.type],
      r.border && "border",
      s.class
    ), b = V(!0);
    function m() {
      o("close"), b.value = !1;
    }
    return (v, k) => b.value ? (c(), h("div", X({ key: 0 }, v.$attrs, {
      class: y(f),
      role: "alert"
    }), [
      g("div", Zs, [
        v.icon || v.$slots.icon ? w(v.$slots, "icon", { key: 0 }, () => [
          Qs
        ]) : T("", !0),
        w(v.$slots, "title")
      ]),
      w(v.$slots, "default", { onCloseClick: m }),
      w(v.$slots, "close-icon", { onCloseClick: m }, () => [
        v.closable ? (c(), h("button", {
          key: 0,
          type: "button",
          class: x(y(i)),
          "aria-label": "Close",
          onClick: m
        }, rn, 2)) : T("", !0)
      ])
    ], 16)) : T("", !0);
  }
}), he = (e) => O(e), vr = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-20 h-20",
  xl: "w-36 h-36"
}, yr = {
  default: "rounded",
  rounded: "rounded-full"
}, sn = "ring-2 ring-gray-300 dark:ring-gray-500 p-1", nn = "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800", an = {
  away: "bg-gray-400",
  busy: "bg-yellow-400",
  offline: "bg-red-400",
  online: "bg-green-400"
}, ln = {
  "top-right-rounded": "top-0 -right-0.5",
  "top-right-default": "-top-1.5 -right-1.5",
  "top-left-rounded": "top-0 left-0",
  "top-left-default": "top-0 left-0 transform -translate-y-1/2 -translate-x-1/2",
  "bottom-right-rounded": "bottom-0 -right-0.5",
  "bottom-right-default": "bottom-0 -right-1.5 translate-y-1/2",
  "bottom-left-rounded": "bottom-0 left-0",
  "bottom-left-default": "-bottom-1.5 left-0 transform -translate-x-1/2 "
}, dn = "absolute w-auto h-auto text-gray-400", un = "flex overflow-hidden relative justify-center items-center", cn = "bg-gray-100 dark:bg-gray-600", pn = "font-medium text-gray-600 dark:text-gray-300", fn = {
  xs: "bottom-0",
  sm: "bottom-0",
  md: "-bottom-1",
  lg: "-bottom-2",
  xl: "-bottom-4"
};
function gn(e) {
  const t = p(
    () => he([
      vr[e.size.value],
      yr[e.rounded.value ? "rounded" : "default"],
      e.bordered.value ? sn : "",
      e.stacked.value ? "border-2 border-white dark:border-gray-800" : ""
    ])
  ), r = p(() => {
    const a = `${e.statusPosition.value}-${e.rounded.value ? "rounded" : "default"}`;
    return he([
      nn,
      an[e.status.value],
      ln[a]
    ]);
  }), o = p(
    () => he([
      dn,
      fn[e.size.value]
    ])
  ), s = p(
    () => he([
      un,
      vr[e.size.value],
      yr[e.rounded.value ? "rounded" : "default"],
      e.img.value && e.bordered.value ? "" : cn,
      e.bordered.value ? " overflow-visible" : ""
    ])
  ), n = p(
    () => he([
      pn
    ])
  );
  return {
    avatarClasses: t,
    avatarDotClasses: r,
    avatarPlaceholderClasses: o,
    avatarPlaceholderInitialsClasses: n,
    avatarPlaceholderWrapperClasses: s
  };
}
const hn = { class: "relative" }, mn = ["alt", "src"], bn = /* @__PURE__ */ g("path", {
  "clip-rule": "evenodd",
  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
  "fill-rule": "evenodd"
}, null, -1), vn = [
  bn
], yn = ["data-pos"], Pp = /* @__PURE__ */ C({
  __name: "FwbAvatar",
  props: {
    alt: {
      type: String,
      default: "Avatar"
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    img: {
      type: String,
      default: ""
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "md"
    },
    stacked: {
      type: Boolean,
      default: !1
    },
    status: {
      type: String,
      default: null
    },
    statusPosition: {
      type: String,
      default: "top-right"
    },
    initials: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = V(!1);
    function r() {
      t.value = !0;
    }
    const o = We(), s = p(() => o.placeholder), n = e, {
      avatarClasses: a,
      avatarDotClasses: l,
      avatarPlaceholderClasses: i,
      avatarPlaceholderInitialsClasses: d,
      avatarPlaceholderWrapperClasses: u
    } = gn(K(n));
    return (f, b) => (c(), h("div", hn, [
      g("div", {
        class: x(y(u))
      }, [
        e.img && !t.value ? (c(), h("img", {
          key: 0,
          alt: e.alt,
          class: x(y(a)),
          src: e.img,
          onError: r
        }, null, 42, mn)) : !e.initials && s.value ? (c(), h("div", {
          key: 1,
          class: x(y(i))
        }, [
          w(f.$slots, "placeholder")
        ], 2)) : !e.img && !e.initials ? (c(), h("svg", {
          key: 2,
          class: x(y(i)),
          fill: "currentColor",
          viewBox: "0 0 20 20",
          xmlns: "http://www.w3.org/2000/svg"
        }, vn, 2)) : (c(), h("div", {
          key: 3,
          class: x(y(d))
        }, B(e.initials), 3))
      ], 2),
      e.status ? (c(), h("span", {
        key: 0,
        class: x(y(l)),
        "data-pos": e.statusPosition
      }, null, 10, yn)) : T("", !0)
    ]));
  }
}), fe = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, s] of t)
    r[o] = s;
  return r;
}, wn = {}, xn = { class: "flex -space-x-4" };
function kn(e, t) {
  return c(), h("div", xn, [
    w(e.$slots, "default")
  ]);
}
const zp = /* @__PURE__ */ fe(wn, [["render", kn]]), _n = ["href"], Ap = /* @__PURE__ */ C({
  __name: "FwbAvatarStackCounter",
  props: {
    total: {
      type: Number,
      default: 1
    },
    href: {
      type: String,
      default: "#"
    }
  },
  setup(e) {
    return (t, r) => (c(), h("a", {
      class: "relative flex justify-center items-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full border-2 border-white hover:bg-gray-600 dark:border-gray-800",
      href: e.href
    }, "+" + B(e.total), 9, _n));
  }
}), Cn = "mr-2 px-2.5 py-0.5 rounded flex items-center justify-center", $n = "bg-blue-100 hover:bg-blue-200 text-blue-800 dark:text-blue-800 dark:hover:bg-blue-300", Sn = "p-1 rounded-full mr-2", Tn = {
  default: "text-blue-800 dark:text-blue-800",
  dark: "text-gray-800 dark:bg-gray-700",
  red: "text-red-800 dark:text-red-900",
  green: "text-green-800 dark:text-green-900",
  yellow: "text-yellow-800 dark:text-yellow-900",
  indigo: "text-indigo-800 dark:text-indigo-900",
  purple: "text-purple-800 dark:text-purple-900",
  pink: "text-pink-800 dark:text-pink-900"
}, Pn = {
  default: "bg-blue-100 dark:bg-blue-200",
  dark: "bg-gray-100 dark:bg-gray-700",
  red: "bg-red-100 dark:bg-red-200",
  green: "bg-green-100 dark:bg-green-200",
  yellow: "bg-yellow-100 dark:bg-yellow-200",
  indigo: "bg-indigo-100 dark:bg-indigo-200",
  purple: "bg-purple-100 dark:bg-purple-200",
  pink: "bg-pink-100 dark:bg-pink-200"
}, zn = {
  xs: "text-xs font-semibold",
  sm: "text-sm font-medium"
};
function An(e, t) {
  const r = ne();
  return {
    badgeClasses: p(() => O(
      zn[e.size],
      e.href ? "" : Pn[e.type],
      e.href ? "" : Tn[e.type],
      e.href ? $n : "",
      t.isContentEmpty.value ? Sn : Cn,
      r.class
    ))
  };
}
const Fp = /* @__PURE__ */ C({
  __name: "FwbBadge",
  props: {
    type: { default: "default" },
    size: { default: "xs" },
    href: { default: null }
  },
  setup(e) {
    const t = e, r = We(), o = p(() => !r.default), s = p(() => t.href ? "a" : "span"), { badgeClasses: n } = An(t, { isContentEmpty: o });
    return (a, l) => (c(), D(Z(s.value), {
      class: x(y(n)),
      href: a.href
    }, {
      default: j(() => [
        w(a.$slots, "icon"),
        w(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "href"]));
  }
});
function Fn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = "", a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (n = s(n, o(l)));
      }
      return n;
    }
    function o(n) {
      if (typeof n == "string" || typeof n == "number")
        return n;
      if (typeof n != "object")
        return "";
      if (Array.isArray(n))
        return r.apply(null, n);
      if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
        return n.toString();
      var a = "";
      for (var l in n)
        t.call(n, l) && n[l] && (a = s(a, l));
      return a;
    }
    function s(n, a) {
      return a ? n ? n + " " + a : n + a : n;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(mo);
var In = mo.exports;
const W = /* @__PURE__ */ Fn(In), Bn = "inline-flex items-center space-x-1 md:space-x-3", Mn = {
  default: "flex",
  solid: "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
};
function On(e) {
  const t = p(() => W(Bn)), r = p(() => W(
    Mn[e.solid.value ? "solid" : "defauilt"]
  ));
  return {
    breadcrumbClasses: t,
    breadcrumbWrapperClasses: r
  };
}
const Ip = /* @__PURE__ */ C({
  __name: "FwbBreadcrumb",
  props: {
    solid: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, { breadcrumbClasses: r, breadcrumbWrapperClasses: o } = On(K(t));
    return (s, n) => (c(), h("nav", {
      class: x(y(o)),
      "aria-label": "Breadcrumb"
    }, [
      g("ol", {
        class: x(y(r))
      }, [
        w(s.$slots, "default")
      ], 2)
    ], 2));
  }
}), Ln = "ml-1 inline-flex items-center text-sm font-medium dark:text-gray-400", En = "text-gray-700 hover:text-gray-900 dark:hover:text-white", Nn = "text-gray-500";
function Rn(e) {
  return {
    breadcrumbItemClasses: p(() => W(
      Ln,
      e.href.value ? En : Nn
    ))
  };
}
const jn = { class: "inline-flex items-center" }, Vn = {
  key: 0,
  class: "w-6 h-6 text-gray-400 mr-1",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Hn = /* @__PURE__ */ g("path", {
  "clip-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "fill-rule": "evenodd"
}, null, -1), Dn = [
  Hn
], Wn = {
  key: 0,
  class: "w-4 h-4 mr-2",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, Gn = /* @__PURE__ */ g("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), qn = [
  Gn
], Bp = /* @__PURE__ */ C({
  __name: "FwbBreadcrumbItem",
  props: {
    href: {
      type: String,
      default: null
    },
    home: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = p(() => t.href ? "a" : "span"), { breadcrumbItemClasses: o } = Rn(K(t));
    return (s, n) => (c(), h("li", jn, [
      w(s.$slots, "arrow-icon", {}, () => [
        e.home ? T("", !0) : (c(), h("svg", Vn, Dn))
      ]),
      (c(), D(Z(r.value), {
        class: x(y(o)),
        href: e.href
      }, {
        default: j(() => [
          w(s.$slots, "home-icon", {}, () => [
            e.home ? (c(), h("svg", Wn, qn)) : T("", !0)
          ]),
          w(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "href"]))
    ]));
  }
}), Un = {
  0: "w-0 h-0",
  0.5: "w-0.5 h-0.5",
  1: "w-1 h-1",
  1.5: "w-1.5 h-1.5",
  10: "w-10 h-10",
  11: "w-11 h-11",
  12: "w-12 h-12",
  2: "w-2 h-2",
  2.5: "w-2.5 h-2.5",
  3: "w-3 h-3",
  4: "w-4 h-4",
  5: "w-5 h-5",
  6: "w-6 h-6",
  7: "w-7 h-7",
  8: "w-8 h-8",
  9: "w-9 h-9"
}, Yn = {
  blue: "fill-blue-600",
  gray: "fill-gray-600 dark:fill-gray-300",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400"
};
function Kn(e) {
  const t = p(() => Un[e.size.value]), r = p(() => Yn[e.color.value]), o = p(() => "text-gray-200 dark:text-gray-600"), s = p(() => "animate-spin");
  return { spinnerClasses: p(() => W(
    s.value,
    o.value,
    r.value,
    t.value
  )) };
}
const Jn = /* @__PURE__ */ g("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), Xn = /* @__PURE__ */ g("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Zn = [
  Jn,
  Xn
], bt = /* @__PURE__ */ C({
  __name: "FwbSpinner",
  props: {
    color: { default: "blue" },
    size: { default: "4" }
  },
  setup(e) {
    const t = e, { spinnerClasses: r } = Kn(K(t));
    return (o, s) => (c(), h("svg", {
      class: x(y(r)),
      fill: "none",
      role: "status",
      viewBox: "0 0 100 101",
      xmlns: "http://www.w3.org/2000/svg"
    }, Zn, 2));
  }
}), wr = {
  default: {
    default: "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
    blue: "text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800",
    alternative: "font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600",
    dark: "text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg dark:bg-gray-800 dark:focus:ring-gray-700 dark:border-gray-700",
    light: "text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700",
    green: "focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800",
    red: "focus:outline-none text-white bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg dark:bg-red-600 dark:focus:ring-red-900",
    yellow: "focus:outline-none text-white bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg dark:focus:ring-yellow-900",
    purple: "focus:outline-none text-white bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg dark:bg-purple-600 dark:focus:ring-purple-900",
    pink: "focus:outline-none text-white bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg dark:bg-pink-600 dark:focus:ring-pink-900"
  },
  hover: {
    default: "hover:bg-blue-800 dark:hover:bg-blue-700",
    blue: "hover:bg-blue-800 dark:hover:bg-blue-700",
    alternative: "hover:bg-gray-100 hover:text-blue-700 dark:hover:text-white dark:hover:bg-gray-700",
    dark: "hover:bg-gray-900 dark:hover:bg-gray-700",
    light: "hover:bg-gray-100 dark:hover:border-gray-600",
    green: "hover:bg-green-800 dark:hover:bg-green-700",
    red: "hover:bg-red-800 dark:hover:bg-red-700",
    yellow: "hover:bg-yellow-500",
    purple: "hover:bg-purple-800 dark:hover:bg-purple-700",
    pink: "hover:bg-pink-800 dark:hover:bg-pink-700"
  }
}, xr = {
  default: {
    dark: "text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm text-center dark:border-gray-600 dark:text-gray-400 dark:focus:ring-gray-800",
    default: "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
    blue: "text-blue-700 border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800",
    green: "text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800",
    purple: "text-purple-700 border border-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm text-center dark:border-purple-400 dark:text-purple-400 dark:focus:ring-purple-900",
    pink: "text-pink-700 border border-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm text-center dark:border-pink-400 dark:text-pink-400 dark:focus:ring-pink-900",
    red: "text-red-700 border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:border-red-500 dark:text-red-500 dark:focus:ring-red-900",
    yellow: "text-yellow-400 border border-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm text-center dark:border-yellow-300 dark:text-yellow-300 dark:focus:ring-yellow-900"
  },
  hover: {
    dark: "hover:text-white hover:bg-gray-900 dark:hover:text-white dark:hover:bg-gray-600",
    default: "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
    blue: "hover:text-white hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-600",
    green: "hover:text-white hover:bg-green-800 dark:hover:text-white dark:hover:bg-green-600",
    purple: "hover:text-white hover:bg-purple-800 dark:hover:text-white dark:hover:bg-purple-500",
    pink: "hover:text-white hover:bg-pink-800 dark:hover:text-white dark:hover:bg-pink-500",
    red: "hover:text-white hover:bg-red-800 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "hover:text-white hover:bg-yellow-500 dark:hover:text-white dark:hover:bg-yellow-400"
  }
}, kr = {
  hover: {
    "cyan-blue": "hover:bg-gradient-to-bl",
    "green-blue": "hover:bg-gradient-to-bl",
    "pink-orange": "hover:bg-gradient-to-bl",
    "purple-blue": "hover:bg-gradient-to-bl",
    "purple-pink": "hover:bg-gradient-to-l",
    "red-yellow": "hover:bg-gradient-to-bl",
    "teal-lime": "hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200",
    blue: "hover:bg-gradient-to-br",
    cyan: "hover:bg-gradient-to-br",
    green: "hover:bg-gradient-to-br",
    lime: "hover:bg-gradient-to-br",
    pink: "hover:bg-gradient-to-br",
    purple: "hover:bg-gradient-to-br",
    red: "hover:bg-gradient-to-br",
    teal: "hover:bg-gradient-to-br"
  },
  default: {
    "cyan-blue": "text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg",
    "green-blue": "text-white bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg",
    "pink-orange": "text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg",
    "purple-blue": "text-white bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg",
    "purple-pink": "text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg",
    "red-yellow": "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg",
    "teal-lime": "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg",
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg",
    cyan: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg",
    green: "text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg",
    lime: "text-gray-900 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg",
    pink: "text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg",
    red: "text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg",
    teal: "text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 rounded-lg"
  }
}, _r = {
  default: {
    "cyan-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
    "green-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
    "pink-orange": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
    "purple-blue": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
    "purple-pink": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
    "red-yellow": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 dark:text-white focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
    "teal-lime": "relative inline-flex items-center justify-center overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
  },
  hover: {
    "cyan-blue": "group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white",
    "green-blue": "group-hover:from-green-400 group-hover:to-blue-600 hover:text-white",
    "pink-orange": "group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white",
    "purple-blue": "group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white",
    "purple-pink": "group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white",
    "red-yellow": "group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:hover:text-gray-900",
    "teal-lime": "group-hover:from-teal-300 group-hover:to-lime-300 dark:hover:text-gray-900"
  }
}, Qn = {
  xs: "text-xs px-2 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-base px-6 py-3"
}, ea = {
  xs: "text-xs p-1",
  sm: "text-sm p-1.5",
  md: "text-sm p-2",
  lg: "text-base p-2.5",
  xl: "text-base p-3"
}, Cr = {
  blue: "shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
  cyan: "shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80",
  green: "shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80",
  lime: "shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80",
  pink: "shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80",
  purple: "shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80",
  red: "shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80",
  teal: "shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
}, jt = ["blue", "green", "cyan", "teal", "lime", "red", "pink", "purple"], ta = ["alternative", "light"];
function ra(e) {
  const t = We(), r = p(() => e.square.value ? ea[e.size.value] : Qn[e.size.value]), o = p(() => {
    const n = !!e.gradient.value, a = !!e.color.value, l = e.outline.value;
    let i = "", d = "";
    if (n && l)
      jt.includes(e.gradient.value) ? console.warn(`cannot use outline prop with "${e.gradient.value}" gradient`) : (d = _r.default[e.gradient.value], e.disabled.value || (i = _r.hover[e.gradient.value]));
    else if (n)
      d = kr.default[e.gradient.value], e.disabled.value || (i = kr.hover[e.gradient.value]);
    else if (a && l)
      if (ta.includes(e.color.value))
        console.warn(`cannot use outline prop with "${e.color.value}" color`);
      else {
        const f = e.color.value;
        d = xr.default[f], e.disabled.value || (i = xr.hover[f]);
      }
    else {
      const f = e.color.value;
      d = wr.default[f], e.disabled.value || (i = wr.hover[f]);
    }
    let u = "";
    return e.shadow.value === "" ? e.gradient.value && jt.includes(e.gradient.value) && (u = Cr[e.gradient.value]) : typeof e.shadow.value == "string" && jt.includes(e.shadow.value) && (u = Cr[e.shadow.value]), [
      d,
      i,
      u,
      e.pill.value && "!rounded-full",
      e.disabled.value && "cursor-not-allowed opacity-50",
      n && l ? "p-0.5" : r.value,
      (t.prefix || t.suffix || e.loading.value) && "inline-flex items-center",
      e.class.value
    ].filter((f) => f).join(" ");
  }), s = p(() => e.gradient.value && e.outline.value ? [
    "relative bg-white dark:bg-gray-900 rounded-md inline-flex items-center",
    r.value,
    e.disabled.value ? "" : "group-hover:bg-opacity-0 transition-all ease-in duration-75"
  ].filter((n) => n).join(" ") : "");
  return {
    wrapperClasses: o.value,
    spanClasses: s.value
  };
}
function oa(e) {
  const t = {
    xs: "2.5",
    sm: "3",
    md: "4",
    lg: "5",
    xl: "6"
  }, r = p(() => t[e.size.value]);
  return {
    color: p(() => e.outline.value ? e.gradient.value ? e.gradient.value.includes("purple") ? "purple" : e.gradient.value.includes("blue") ? "blue" : e.gradient.value.includes("pink") ? "pink" : e.gradient.value.includes("red") ? "red" : "white" : ["alternative", "dark", "light"].includes(e.color.value) ? "white" : e.color.value === "default" ? "blue" : e.color.value : "white"),
    size: r
  };
}
const sa = {
  key: 0,
  class: "mr-2"
}, na = {
  key: 0,
  class: "mr-2"
}, aa = {
  key: 1,
  class: "ml-2"
}, la = {
  key: 1,
  class: "ml-2"
}, ia = /* @__PURE__ */ C({
  __name: "FwbButton",
  props: {
    class: { default: "" },
    color: { default: "default" },
    gradient: { default: null },
    size: { default: "md" },
    shadow: { default: null },
    pill: { type: Boolean, default: !1 },
    square: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    loadingPosition: { default: "prefix" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "" },
    tag: { default: "a" }
  },
  setup(e) {
    const t = e, r = p(() => ra(K(t))), o = p(() => he(r.value.wrapperClasses)), s = p(() => he(r.value.spanClasses)), n = p(() => t.outline && t.gradient), a = p(() => t.loading && t.loadingPosition === "prefix"), l = p(() => t.loading && t.loadingPosition === "suffix"), { color: i, size: d } = oa(K(t)), u = t.tag !== "a" ? me(t.tag) : "a", f = t.href ? u : "button", b = t.tag === "router-link" || t.tag === "nuxt-link" ? "to" : "href";
    return (m, v) => (c(), D(Z(y(f)), Te({
      class: o.value,
      [y(b) || ""]: m.href,
      disabled: y(f) === "button" && m.disabled
    }), {
      default: j(() => [
        !n.value && (m.$slots.prefix || a.value) ? (c(), h("div", sa, [
          a.value ? (c(), D(bt, {
            key: 0,
            color: y(i),
            size: y(d)
          }, null, 8, ["color", "size"])) : w(m.$slots, "prefix", { key: 1 })
        ])) : T("", !0),
        g("span", {
          class: x(s.value)
        }, [
          n.value && (m.$slots.prefix || a.value) ? (c(), h("span", na, [
            a.value ? (c(), D(bt, {
              key: 0,
              color: y(i),
              size: y(d)
            }, null, 8, ["color", "size"])) : w(m.$slots, "prefix", { key: 1 })
          ])) : T("", !0),
          w(m.$slots, "default"),
          n.value && (m.$slots.suffix || l.value) ? (c(), h("span", aa, [
            l.value ? (c(), D(bt, {
              key: 0,
              color: y(i),
              size: y(d)
            }, null, 8, ["color", "size"])) : w(m.$slots, "suffix", { key: 1 })
          ])) : T("", !0)
        ], 2),
        !n.value && (m.$slots.suffix || l.value) ? (c(), h("div", la, [
          l.value ? (c(), D(bt, {
            key: 0,
            color: y(i),
            size: y(d)
          }, null, 8, ["color", "size"])) : w(m.$slots, "suffix", { key: 1 })
        ])) : T("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
}), da = {}, ua = {
  class: "fwb-button-group inline-flex rounded-md shadow-sm",
  role: "group"
};
function ca(e, t) {
  return c(), h("div", ua, [
    w(e.$slots, "default")
  ]);
}
const Mp = /* @__PURE__ */ fe(da, [["render", ca]]);
function pa(e) {
  const t = p(() => e.variant.value === "default" ? "block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" : e.variant.value === "image" ? "max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" : e.variant.value === "horizontal" ? "flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" : ""), r = p(
    () => e.variant.value === "horizontal" ? "object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" : ""
  );
  return {
    cardClasses: t,
    horizontalImageClasses: r
  };
}
const fa = ["alt", "src"], Op = /* @__PURE__ */ C({
  __name: "FwbCard",
  props: {
    href: {
      type: String,
      default: ""
    },
    imgAlt: {
      type: String,
      default: ""
    },
    imgSrc: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const t = e, { cardClasses: r, horizontalImageClasses: o } = pa(K(t)), s = p(() => t.href ? "a" : "div");
    return (n, a) => (c(), D(Z(s.value), {
      class: x(y(r)),
      href: e.href
    }, {
      default: j(() => [
        e.imgSrc ? (c(), h("img", {
          key: 0,
          alt: e.imgAlt,
          class: x([y(o), "rounded-t-lg"]),
          src: e.imgSrc
        }, null, 10, fa)) : T("", !0),
        g("div", null, [
          w(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["class", "href"]));
  }
}), ga = { class: "relative" }, ha = { class: "overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96" }, ma = ["alt", "src"], ba = {
  key: 0,
  class: "flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
}, va = ["aria-label", "onClick"], ya = /* @__PURE__ */ g("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ g("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ g("path", {
      d: "M15 19l-7-7 7-7",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    })
  ]),
  /* @__PURE__ */ g("span", { class: "hidden" }, "Previous")
], -1), wa = [
  ya
], xa = /* @__PURE__ */ g("span", { class: "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" }, [
  /* @__PURE__ */ g("svg", {
    class: "w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ g("path", {
      d: "M9 5l7 7-7 7",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    })
  ]),
  /* @__PURE__ */ g("span", { class: "hidden" }, "Next")
], -1), ka = [
  xa
], Lp = /* @__PURE__ */ C({
  __name: "FwbCarousel",
  props: {
    pictures: {
      type: Array,
      default() {
        return [];
      }
    },
    noIndicators: {
      type: Boolean,
      default: !1
    },
    noControls: {
      type: Boolean,
      default: !1
    },
    slide: {
      type: Boolean,
      default: !1
    },
    slideInterval: {
      type: Number,
      default: 3e3
    },
    animation: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = V(0), o = V(""), s = V(), n = () => {
      s.value = setInterval(function() {
        i();
      }, t.slideInterval);
    }, a = () => {
      clearInterval(s.value), n();
    }, l = (u) => {
      r.value = u, a();
    }, i = () => {
      r.value !== t.pictures.length - 1 ? r.value++ : r.value = 0, o.value = "right", a();
    }, d = () => {
      r.value !== 0 ? r.value-- : r.value = t.pictures.length - 1, o.value = "left", a();
    };
    return De(() => {
      t.slide && n();
    }), (u, f) => (c(), h("div", ga, [
      g("div", ha, [
        (c(!0), h(Y, null, Oe(e.pictures, (b, m) => (c(), h("div", {
          key: m,
          class: x([m === r.value ? "z-30" : "z-0", "absolute inset-0 -translate-y-0"])
        }, [
          g("img", {
            alt: b.alt,
            src: b.src,
            class: "block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
          }, null, 8, ma)
        ], 2))), 128))
      ]),
      e.noIndicators ? T("", !0) : (c(), h("div", ba, [
        (c(!0), h(Y, null, Oe(e.pictures, (b, m) => (c(), h("button", {
          key: m,
          "aria-label": "Slide " + m,
          class: x([m === r.value ? "bg-white" : "bg-white/50", "w-3 h-3 rounded-full bg-white"]),
          "aria-current": "false",
          type: "button",
          onClick: xt((v) => l(m), ["prevent"])
        }, null, 10, va))), 128))
      ])),
      e.noControls ? T("", !0) : (c(), h(Y, { key: 1 }, [
        g("button", {
          class: "flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none",
          "data-carousel-prev": "",
          type: "button",
          onClick: xt(d, ["prevent"])
        }, wa),
        g("button", {
          class: "flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none",
          "data-carousel-next": "",
          type: "button",
          onClick: xt(i, ["prevent"])
        }, ka)
      ], 64))
    ]));
  }
});
function tr(e) {
  return Zo() ? (Qo(e), !0) : !1;
}
function Ce(e) {
  return typeof e == "function" ? e() : y(e);
}
const rr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _a = (e) => typeof e < "u", Ca = Object.prototype.toString, $a = (e) => Ca.call(e) === "[object Object]", kt = () => {
}, Sa = /* @__PURE__ */ Ta();
function Ta() {
  var e, t;
  return rr && ((e = window?.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window?.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Pa(e, t) {
  var r;
  if (typeof e == "number")
    return e + t;
  const o = ((r = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : r[0]) || "", s = e.slice(o.length), n = Number.parseFloat(o) + t;
  return Number.isNaN(n) ? e : n + s;
}
function za(e, t, r = {}) {
  const {
    immediate: o = !0
  } = r, s = V(!1);
  let n = null;
  function a() {
    n && (clearTimeout(n), n = null);
  }
  function l() {
    s.value = !1, a();
  }
  function i(...d) {
    a(), s.value = !0, n = setTimeout(() => {
      s.value = !1, n = null, e(...d);
    }, Ce(t));
  }
  return o && (s.value = !0, rr && i()), tr(l), {
    isPending: es(s),
    start: i,
    stop: l
  };
}
function Aa(e = !1, t = {}) {
  const {
    truthyValue: r = !0,
    falsyValue: o = !1
  } = t, s = Zt(e), n = V(e);
  function a(l) {
    if (arguments.length)
      return n.value = l, n.value;
    {
      const i = Ce(r);
      return n.value = n.value === i ? Ce(o) : i, n.value;
    }
  }
  return s ? a : [n, a];
}
function tt(e) {
  var t;
  const r = Ce(e);
  return (t = r?.$el) != null ? t : r;
}
const Ft = rr ? window : void 0;
function Vt(...e) {
  let t, r, o, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([r, o, s] = e, t = Ft) : [t, r, o, s] = e, !t)
    return kt;
  Array.isArray(r) || (r = [r]), Array.isArray(o) || (o = [o]);
  const n = [], a = () => {
    n.forEach((u) => u()), n.length = 0;
  }, l = (u, f, b, m) => (u.addEventListener(f, b, m), () => u.removeEventListener(f, b, m)), i = lt(
    () => [tt(t), Ce(s)],
    ([u, f]) => {
      if (a(), !u)
        return;
      const b = $a(f) ? { ...f } : f;
      n.push(
        ...r.flatMap((m) => o.map((v) => l(u, m, v, b)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    i(), a();
  };
  return tr(d), d;
}
let $r = !1;
function Fa(e, t, r = {}) {
  const { window: o = Ft, ignore: s = [], capture: n = !0, detectIframe: a = !1 } = r;
  if (!o)
    return kt;
  Sa && !$r && ($r = !0, Array.from(o.document.body.children).forEach((b) => b.addEventListener("click", kt)), o.document.documentElement.addEventListener("click", kt));
  let l = !0;
  const i = (b) => s.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((v) => v === b.target || b.composedPath().includes(v));
    {
      const v = tt(m);
      return v && (b.target === v || b.composedPath().includes(v));
    }
  }), u = [
    Vt(o, "click", (b) => {
      const m = tt(e);
      if (!(!m || m === b.target || b.composedPath().includes(m))) {
        if (b.detail === 0 && (l = !i(b)), !l) {
          l = !0;
          return;
        }
        t(b);
      }
    }, { passive: !0, capture: n }),
    Vt(o, "pointerdown", (b) => {
      const m = tt(e);
      l = !i(b) && !!(m && !b.composedPath().includes(m));
    }, { passive: !0 }),
    a && Vt(o, "blur", (b) => {
      setTimeout(() => {
        var m;
        const v = tt(e);
        ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !v?.contains(o.document.activeElement) && t(b);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((b) => b());
}
function Ia() {
  const e = V(!1), t = to();
  return t && De(() => {
    e.value = !0;
  }, t), e;
}
function Ba(e) {
  const t = Ia();
  return p(() => (t.value, !!e()));
}
function Qe(e, t = {}) {
  const { window: r = Ft } = t, o = Ba(() => r && "matchMedia" in r && typeof r.matchMedia == "function");
  let s;
  const n = V(!1), a = (d) => {
    n.value = d.matches;
  }, l = () => {
    s && ("removeEventListener" in s ? s.removeEventListener("change", a) : s.removeListener(a));
  }, i = ts(() => {
    o.value && (l(), s = r.matchMedia(Ce(e)), "addEventListener" in s ? s.addEventListener("change", a) : s.addListener(a), n.value = s.matches);
  });
  return tr(() => {
    i(), l(), s = void 0;
  }), n;
}
const bo = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
function vo(e, t = {}) {
  function r(u, f) {
    let b = Ce(e[Ce(u)]);
    return f != null && (b = Pa(b, f)), typeof b == "number" && (b = `${b}px`), b;
  }
  const { window: o = Ft, strategy: s = "min-width" } = t;
  function n(u) {
    return o ? o.matchMedia(u).matches : !1;
  }
  const a = (u) => Qe(() => `(min-width: ${r(u)})`, t), l = (u) => Qe(() => `(max-width: ${r(u)})`, t), i = Object.keys(e).reduce((u, f) => (Object.defineProperty(u, f, {
    get: () => s === "min-width" ? a(f) : l(f),
    enumerable: !0,
    configurable: !0
  }), u), {});
  function d() {
    const u = Object.keys(e).map((f) => [f, a(f)]);
    return p(() => u.filter(([, f]) => f.value).map(([f]) => f));
  }
  return Object.assign(i, {
    greaterOrEqual: a,
    smallerOrEqual: l,
    greater(u) {
      return Qe(() => `(min-width: ${r(u, 0.1)})`, t);
    },
    smaller(u) {
      return Qe(() => `(max-width: ${r(u, -0.1)})`, t);
    },
    between(u, f) {
      return Qe(() => `(min-width: ${r(u)}) and (max-width: ${r(f, -0.1)})`, t);
    },
    isGreater(u) {
      return n(`(min-width: ${r(u, 0.1)})`);
    },
    isGreaterOrEqual(u) {
      return n(`(min-width: ${r(u)})`);
    },
    isSmaller(u) {
      return n(`(max-width: ${r(u, -0.1)})`);
    },
    isSmallerOrEqual(u) {
      return n(`(max-width: ${r(u)})`);
    },
    isInBetween(u, f) {
      return n(`(min-width: ${r(u)}) and (max-width: ${r(f, -0.1)})`);
    },
    current: d,
    active() {
      const u = d();
      return p(() => u.value.length === 0 ? "" : u.value.at(-1));
    }
  });
}
function Ma(e) {
  return JSON.parse(JSON.stringify(e));
}
function yo(e, t, r, o = {}) {
  var s, n, a;
  const {
    clone: l = !1,
    passive: i = !1,
    eventName: d,
    deep: u = !1,
    defaultValue: f,
    shouldEmit: b
  } = o, m = to(), v = r || m?.emit || ((s = m?.$emit) == null ? void 0 : s.bind(m)) || ((a = (n = m?.proxy) == null ? void 0 : n.$emit) == null ? void 0 : a.bind(m?.proxy));
  let k = d;
  k = k || `update:${t.toString()}`;
  const $ = (A) => l ? typeof l == "function" ? l(A) : Ma(A) : A, S = () => _a(e[t]) ? $(e[t]) : f, P = (A) => {
    b ? b(A) && v(k, A) : v(k, A);
  };
  if (i) {
    const A = S(), L = V(A);
    let _ = !1;
    return lt(
      () => e[t],
      (E) => {
        _ || (_ = !0, L.value = $(E), Qt(() => _ = !1));
      }
    ), lt(
      L,
      (E) => {
        !_ && (E !== e[t] || u) && P(E);
      },
      { deep: u }
    ), L;
  } else
    return p({
      get() {
        return S();
      },
      set(A) {
        P(A);
      }
    });
}
var Oa = typeof global == "object" && global && global.Object === Object && global, La = typeof self == "object" && self && self.Object === Object && self, or = Oa || La || Function("return this")(), $e = or.Symbol, wo = Object.prototype, Ea = wo.hasOwnProperty, Na = wo.toString, et = $e ? $e.toStringTag : void 0;
function Ra(e) {
  var t = Ea.call(e, et), r = e[et];
  try {
    e[et] = void 0;
    var o = !0;
  } catch {
  }
  var s = Na.call(e);
  return o && (t ? e[et] = r : delete e[et]), s;
}
var ja = Object.prototype, Va = ja.toString;
function Ha(e) {
  return Va.call(e);
}
var Da = "[object Null]", Wa = "[object Undefined]", Sr = $e ? $e.toStringTag : void 0;
function sr(e) {
  return e == null ? e === void 0 ? Wa : Da : Sr && Sr in Object(e) ? Ra(e) : Ha(e);
}
function nr(e) {
  return e != null && typeof e == "object";
}
var Ga = "[object Symbol]";
function ar(e) {
  return typeof e == "symbol" || nr(e) && sr(e) == Ga;
}
function qa(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, s = Array(o); ++r < o; )
    s[r] = t(e[r], r, e);
  return s;
}
var qe = Array.isArray, Ua = 1 / 0, Tr = $e ? $e.prototype : void 0, Pr = Tr ? Tr.toString : void 0;
function xo(e) {
  if (typeof e == "string")
    return e;
  if (qe(e))
    return qa(e, xo) + "";
  if (ar(e))
    return Pr ? Pr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ua ? "-0" : t;
}
function Ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ya(e) {
  return e;
}
var Ka = "[object AsyncFunction]", Ja = "[object Function]", Xa = "[object GeneratorFunction]", Za = "[object Proxy]";
function Qa(e) {
  if (!Ct(e))
    return !1;
  var t = sr(e);
  return t == Ja || t == Xa || t == Ka || t == Za;
}
var Ht = or["__core-js_shared__"], zr = function() {
  var e = /[^.]+$/.exec(Ht && Ht.keys && Ht.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function el(e) {
  return !!zr && zr in e;
}
var tl = Function.prototype, rl = tl.toString;
function ol(e) {
  if (e != null) {
    try {
      return rl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var sl = /[\\^$.*+?()[\]{}|]/g, nl = /^\[object .+?Constructor\]$/, al = Function.prototype, ll = Object.prototype, il = al.toString, dl = ll.hasOwnProperty, ul = RegExp(
  "^" + il.call(dl).replace(sl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cl(e) {
  if (!Ct(e) || el(e))
    return !1;
  var t = Qa(e) ? ul : nl;
  return t.test(ol(e));
}
function pl(e, t) {
  return e?.[t];
}
function lr(e, t) {
  var r = pl(e, t);
  return cl(r) ? r : void 0;
}
function fl(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var gl = 800, hl = 16, ml = Date.now;
function bl(e) {
  var t = 0, r = 0;
  return function() {
    var o = ml(), s = hl - (o - r);
    if (r = o, s > 0) {
      if (++t >= gl)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function vl(e) {
  return function() {
    return e;
  };
}
var $t = function() {
  try {
    var e = lr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), yl = $t ? function(e, t) {
  return $t(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: vl(t),
    writable: !0
  });
} : Ya, wl = bl(yl), xl = 9007199254740991, kl = /^(?:0|[1-9]\d*)$/;
function ko(e, t) {
  var r = typeof e;
  return t = t ?? xl, !!t && (r == "number" || r != "symbol" && kl.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function _l(e, t, r) {
  t == "__proto__" && $t ? $t(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function _o(e, t) {
  return e === t || e !== e && t !== t;
}
var Cl = Object.prototype, $l = Cl.hasOwnProperty;
function Sl(e, t, r) {
  var o = e[t];
  (!($l.call(e, t) && _o(o, r)) || r === void 0 && !(t in e)) && _l(e, t, r);
}
var Ar = Math.max;
function Tl(e, t, r) {
  return t = Ar(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, s = -1, n = Ar(o.length - t, 0), a = Array(n); ++s < n; )
      a[s] = o[t + s];
    s = -1;
    for (var l = Array(t + 1); ++s < t; )
      l[s] = o[s];
    return l[t] = r(a), fl(e, this, l);
  };
}
var Pl = 9007199254740991;
function zl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pl;
}
var Al = "[object Arguments]";
function Fr(e) {
  return nr(e) && sr(e) == Al;
}
var Co = Object.prototype, Fl = Co.hasOwnProperty, Il = Co.propertyIsEnumerable, $o = Fr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Fr : function(e) {
  return nr(e) && Fl.call(e, "callee") && !Il.call(e, "callee");
}, Bl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ml = /^\w*$/;
function Ol(e, t) {
  if (qe(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ar(e) ? !0 : Ml.test(e) || !Bl.test(e) || t != null && e in Object(t);
}
var it = lr(Object, "create");
function Ll() {
  this.__data__ = it ? it(null) : {}, this.size = 0;
}
function El(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nl = "__lodash_hash_undefined__", Rl = Object.prototype, jl = Rl.hasOwnProperty;
function Vl(e) {
  var t = this.__data__;
  if (it) {
    var r = t[e];
    return r === Nl ? void 0 : r;
  }
  return jl.call(t, e) ? t[e] : void 0;
}
var Hl = Object.prototype, Dl = Hl.hasOwnProperty;
function Wl(e) {
  var t = this.__data__;
  return it ? t[e] !== void 0 : Dl.call(t, e);
}
var Gl = "__lodash_hash_undefined__";
function ql(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = it && t === void 0 ? Gl : t, this;
}
function Le(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Le.prototype.clear = Ll;
Le.prototype.delete = El;
Le.prototype.get = Vl;
Le.prototype.has = Wl;
Le.prototype.set = ql;
function Ul() {
  this.__data__ = [], this.size = 0;
}
function It(e, t) {
  for (var r = e.length; r--; )
    if (_o(e[r][0], t))
      return r;
  return -1;
}
var Yl = Array.prototype, Kl = Yl.splice;
function Jl(e) {
  var t = this.__data__, r = It(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : Kl.call(t, r, 1), --this.size, !0;
}
function Xl(e) {
  var t = this.__data__, r = It(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Zl(e) {
  return It(this.__data__, e) > -1;
}
function Ql(e, t) {
  var r = this.__data__, o = It(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function Ue(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ue.prototype.clear = Ul;
Ue.prototype.delete = Jl;
Ue.prototype.get = Xl;
Ue.prototype.has = Zl;
Ue.prototype.set = Ql;
var ei = lr(or, "Map");
function ti() {
  this.size = 0, this.__data__ = {
    hash: new Le(),
    map: new (ei || Ue)(),
    string: new Le()
  };
}
function ri(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Bt(e, t) {
  var r = e.__data__;
  return ri(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function oi(e) {
  var t = Bt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function si(e) {
  return Bt(this, e).get(e);
}
function ni(e) {
  return Bt(this, e).has(e);
}
function ai(e, t) {
  var r = Bt(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function Ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ee.prototype.clear = ti;
Ee.prototype.delete = oi;
Ee.prototype.get = si;
Ee.prototype.has = ni;
Ee.prototype.set = ai;
var li = "Expected a function";
function ir(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(li);
  var r = function() {
    var o = arguments, s = t ? t.apply(this, o) : o[0], n = r.cache;
    if (n.has(s))
      return n.get(s);
    var a = e.apply(this, o);
    return r.cache = n.set(s, a) || n, a;
  };
  return r.cache = new (ir.Cache || Ee)(), r;
}
ir.Cache = Ee;
var ii = 500;
function di(e) {
  var t = ir(e, function(o) {
    return r.size === ii && r.clear(), o;
  }), r = t.cache;
  return t;
}
var ui = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ci = /\\(\\)?/g, pi = di(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ui, function(r, o, s, n) {
    t.push(s ? n.replace(ci, "$1") : o || r);
  }), t;
});
function fi(e) {
  return e == null ? "" : xo(e);
}
function Mt(e, t) {
  return qe(e) ? e : Ol(e, t) ? [e] : pi(fi(e));
}
var gi = 1 / 0;
function dr(e) {
  if (typeof e == "string" || ar(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -gi ? "-0" : t;
}
function hi(e, t) {
  t = Mt(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[dr(t[r++])];
  return r && r == o ? e : void 0;
}
function mi(e, t) {
  for (var r = -1, o = t.length, s = e.length; ++r < o; )
    e[s + r] = t[r];
  return e;
}
var Ir = $e ? $e.isConcatSpreadable : void 0;
function bi(e) {
  return qe(e) || $o(e) || !!(Ir && e && e[Ir]);
}
function vi(e, t, r, o, s) {
  var n = -1, a = e.length;
  for (r || (r = bi), s || (s = []); ++n < a; ) {
    var l = e[n];
    r(l) ? mi(s, l) : s[s.length] = l;
  }
  return s;
}
function yi(e) {
  var t = e == null ? 0 : e.length;
  return t ? vi(e) : [];
}
function wi(e) {
  return wl(Tl(e, void 0, yi), e + "");
}
function xi(e, t) {
  return e != null && t in Object(e);
}
function ki(e, t, r) {
  t = Mt(t, e);
  for (var o = -1, s = t.length, n = !1; ++o < s; ) {
    var a = dr(t[o]);
    if (!(n = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return n || ++o != s ? n : (s = e == null ? 0 : e.length, !!s && zl(s) && ko(a, s) && (qe(e) || $o(e)));
}
function _i(e, t) {
  return e != null && ki(e, t, xi);
}
function Ci(e, t, r, o) {
  if (!Ct(e))
    return e;
  t = Mt(t, e);
  for (var s = -1, n = t.length, a = n - 1, l = e; l != null && ++s < n; ) {
    var i = dr(t[s]), d = r;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (s != a) {
      var u = l[i];
      d = void 0, d === void 0 && (d = Ct(u) ? u : ko(t[s + 1]) ? [] : {});
    }
    Sl(l, i, d), l = l[i];
  }
  return e;
}
function $i(e, t, r) {
  for (var o = -1, s = t.length, n = {}; ++o < s; ) {
    var a = t[o], l = hi(e, a);
    r(l, a) && Ci(n, Mt(a, e), l);
  }
  return n;
}
function Si(e, t) {
  return $i(e, t, function(r, o) {
    return _i(e, o);
  });
}
var Ti = wi(function(e, t) {
  return e == null ? {} : Si(e, t);
});
function St(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(ee(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        St(o, t, r);
        return;
      }
      if (o.type === Y) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && St(o.children, t, r);
      } else
        o.type !== rs && r.push(o);
    }
  }), r;
}
function Pi(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return console.warn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const s = St(o(r));
  return s.length === 1 ? s[0] : (console.warn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
const zi = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"]
};
function Ai(e, t) {
  Object.entries(zi).forEach(([, r]) => {
    r.forEach((o) => {
      e.props ? e.props = Object.assign({}, e.props) : e.props = {};
      const s = e.props[o], n = t[o];
      s ? e.props[o] = (...a) => {
        s(...a), n(...a);
      } : e.props[o] = n;
    });
  });
}
const Br = C({
  name: "SlotListener",
  props: {
    trigger: {
      type: String,
      default: "click"
    }
  },
  emits: ["click", "focus", "blur", "mouseenter", "mouseleave"],
  setup(e, { emit: t }) {
    return {
      handleClick: (l) => {
        t("click", l);
      },
      handleBlur: (l) => {
        t("blur", l);
      },
      handleFocus: (l) => {
        t("focus", l);
      },
      handleMouseLeave: (l) => {
        t("mouseleave", l);
      },
      handleMouseEnter: (l) => {
        t("mouseenter", l);
      }
    };
  },
  render() {
    const {
      $slots: e
    } = this, t = {
      onClick: this.handleClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    }, r = Pi(e, "default"), o = [
      t
    ];
    return r?.props && o.push(
      Ti(r.props, "onClick", "onMouseenter", "onMouseleave", "onFocus", "onBlur")
    ), r && Ai(
      r,
      {
        onBlur: (n) => {
          o.forEach((a) => {
            a?.onBlur?.(n);
          });
        },
        onFocus: (n) => {
          o.forEach((a) => {
            a?.onFocus?.(n);
          });
        },
        onClick: (n) => {
          o.forEach((a) => {
            a?.onClick?.(n);
          });
        },
        onMouseenter: (n) => {
          o.forEach((a) => {
            a?.onMouseenter?.(n);
          });
        },
        onMouseleave: (n) => {
          o.forEach((a) => {
            a?.onMouseleave?.(n);
          });
        }
      }
    ), r;
  }
}), Fi = "absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700", vt = 8, Ii = {
  horizontal: "left-0",
  vertical: "top-0",
  horizontal_reverse: "right-0",
  vertical_reverse: "bottom-0"
}, Bi = {
  bottom(e) {
    return `bottom: -${e.height + vt}px;`;
  },
  left(e) {
    return `left: -${e.width + vt}px;`;
  },
  right(e) {
    return `right: -${e.width + vt}px;`;
  },
  top(e) {
    return `top: -${e.height + vt}px;`;
  }
};
function Mi(e) {
  lt(e.visible, (n) => {
    n && Qt(() => r());
  });
  const t = V(""), r = () => {
    const n = e.contentRef.value?.getBoundingClientRect();
    if (!n) {
      t.value = "";
      return;
    }
    t.value = Bi[e.placement.value](n);
  }, o = new MutationObserver(() => {
    r();
  });
  return lt(
    e.contentRef,
    (n) => {
      n ? o.observe(n, {
        childList: !0,
        subtree: !0
      }) : o.disconnect();
    }
  ), {
    contentClasses: p(() => {
      let n = ["top", "bottom"].includes(e.placement.value) ? "horizontal" : "vertical";
      return e.alignToEnd.value && (n = `${n}_reverse`), W(
        Fi,
        Ii[n]
      );
    }),
    contentStyles: t
  };
}
const Oi = (e) => (oo("data-v-2d4adfeb"), e = e(), so(), e), Li = { class: "inline-flex items-center" }, Ei = /* @__PURE__ */ Oi(() => /* @__PURE__ */ g("svg", {
  class: "w-4 h-4 ml-2",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", {
    d: "M19 9l-7 7-7-7",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  })
], -1)), Ni = /* @__PURE__ */ C({
  __name: "FwbDropdown",
  props: {
    placement: { default: "bottom" },
    text: { default: "" },
    transition: { default: "" },
    closeInside: { type: Boolean, default: !1 },
    alignToEnd: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = V(!1), r = () => {
      s.closeInside && (t.value = !1);
    }, o = () => t.value = !t.value, s = e, n = {
      bottom: "to-bottom",
      left: "to-left",
      right: "to-right",
      top: "to-top"
    }, a = p(() => s.transition === null ? n[s.placement] : s.transition), l = V(), i = V(), { contentClasses: d, contentStyles: u } = Mi({
      placement: He(s, "placement"),
      alignToEnd: He(s, "alignToEnd"),
      visible: t,
      contentRef: l
    });
    return Fa(i, () => {
      t.value && (t.value = !1);
    }), (f, b) => (c(), h("div", {
      ref_key: "wrapper",
      ref: i,
      class: "inline-flex relative"
    }, [
      g("div", Li, [
        Fe(Br, { onClick: o }, {
          default: j(() => [
            w(f.$slots, "trigger", {}, () => [
              Fe(ia, null, {
                suffix: j(() => [
                  Ei
                ]),
                default: j(() => [
                  ee(B(f.text) + " ", 1)
                ]),
                _: 1
              })
            ], !0)
          ]),
          _: 3
        })
      ]),
      Fe(ro, { name: a.value }, {
        default: j(() => [
          t.value ? (c(), h("div", {
            key: 0,
            ref_key: "content",
            ref: l,
            class: x([y(d)]),
            style: rt(y(u))
          }, [
            Fe(Br, { onClick: r }, {
              default: j(() => [
                w(f.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            })
          ], 6)) : T("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 512));
  }
}), Ep = /* @__PURE__ */ fe(Ni, [["__scopeId", "data-v-2d4adfeb"]]), Np = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooter",
  props: {
    sticky: { type: Boolean, default: !1 },
    footerType: { default: "default" }
  },
  setup(e) {
    const t = e, r = ne(), o = O(
      t.footerType === "sitemap" && "bg-gray-800",
      t.footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800",
      t.footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800",
      t.footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800",
      t.sticky && "absolute bottom-0 left-0 z-20 w-full border-t border-gray-200 dark:border-gray-600",
      r.class
    );
    return (s, n) => (c(), h("footer", X(s.$attrs, { class: y(o) }), [
      w(s.$slots, "default")
    ], 16));
  }
}), Ri = ["href"], ji = ["alt", "src"], Rp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterBrand",
  props: {
    href: { default: "" },
    src: { default: "" },
    alt: { default: "" },
    name: { default: "" },
    imageClass: { default: "" },
    nameClass: { default: "" },
    aClass: { default: "" }
  },
  setup(e) {
    const t = ne(), r = e, o = O("mb-6 md:mb-0", t.class), s = O("flex items-center", r.aClass), n = O("h-8 mr-3", r.imageClass), a = O("self-center text-2xl font-semibold whitespace-nowrap dark:text-white", r.nameClass);
    return (l, i) => (c(), h("div", X({ class: y(o) }, l.$attrs), [
      g("a", {
        class: x(y(s)),
        href: l.href
      }, [
        g("img", {
          alt: l.alt,
          class: x(y(n)),
          src: l.src
        }, null, 10, ji),
        g("span", {
          class: x(y(a))
        }, B(l.name), 3)
      ], 10, Ri)
    ], 16));
  }
}), jp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterCopyright",
  props: {
    year: { default: (/* @__PURE__ */ new Date()).getFullYear() },
    by: { default: "" },
    href: { default: "" },
    aClass: { default: "" },
    copyrightMessage: { default: "All Rights Reserved." }
  },
  setup(e) {
    const t = e, r = ne(), o = O("block text-sm text-gray-500 sm:text-center dark:text-gray-400", r.class), s = O(t.href ? "hover:underline" : "ml-1", t.aClass), n = t.href ? "a" : "span";
    return (a, l) => (c(), h("span", X(a.$attrs, { class: y(o) }), [
      ee(" © " + B(a.year) + " ", 1),
      (c(), D(Z(y(n)), {
        class: x(y(s)),
        href: a.href
      }, {
        default: j(() => [
          ee(B(a.by), 1)
        ]),
        _: 1
      }, 8, ["class", "href"])),
      ee(" " + B(a.copyrightMessage), 1)
    ], 16));
  }
}), Vi = { class: "sr-only" }, Vp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterIcon",
  props: {
    href: { default: "" },
    ariaLabel: { default: "" },
    srText: { default: "" }
  },
  setup(e) {
    const t = ne(), o = e.href ? "a" : "span", s = O("text-gray-500 hover:text-gray-900 dark:hover:text-white", t.class);
    return (n, a) => (c(), D(Z(y(o)), X({
      "aria-label": n.ariaLabel,
      class: y(s),
      href: n.href
    }, n.$attrs), {
      default: j(() => [
        w(n.$slots, "default"),
        g("span", Vi, B(n.srText), 1)
      ]),
      _: 3
    }, 16, ["aria-label", "class", "href"]));
  }
}), Hp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterLink",
  props: {
    href: { default: "" },
    aClass: { default: "" },
    component: { default: "a" }
  },
  setup(e) {
    const t = ne(), r = e, o = r.component === "a" ? "a" : me(r.component), s = r.component === "router-link" ? "to" : "href", n = O("hover:underline", r.aClass), a = O("mr-4 md:mr-6 last:mr-0", t.class);
    return (l, i) => (c(), h("li", X(l.$attrs, { class: y(a) }), [
      (c(), D(Z(y(o)), Te({
        [y(s) || ""]: l.href,
        class: y(n)
      }), {
        default: j(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 16));
  }
}), Dp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbFooterLinkGroup",
  setup(e) {
    const t = ne(), r = O("flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0", t.class);
    return (o, s) => (c(), h("ul", X(o.$attrs, { class: y(r) }), [
      w(o.$slots, "default")
    ], 16));
  }
}), Wp = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbJumbotron",
  props: {
    headerLevel: { default: 1 },
    subText: { default: "" },
    subTextClasses: { default: "" },
    headerText: { default: "" },
    headerClasses: { default: "" }
  },
  setup(e) {
    const t = e, r = ne(), o = p(() => O(
      "bg-white dark:bg-gray-900 py-8 lg:py-16 px-4 mx-auto max-w-screen-xl text-center ",
      r.class
    )), s = p(() => O("mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white", t.headerClasses)), n = p(() => O("mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-0 lg:px-16 dark:text-gray-400", t.subTextClasses));
    return (a, l) => (c(), h("div", X(a.$attrs, { class: o.value }), [
      (c(), D(Z(`h${a.headerLevel}`), {
        class: x(s.value)
      }, {
        default: j(() => [
          ee(B(a.headerText), 1)
        ]),
        _: 1
      }, 8, ["class"])),
      g("div", {
        class: x(n.value)
      }, B(a.subText), 3),
      w(a.$slots, "default")
    ], 16));
  }
}), Hi = "overflow-hidden w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white";
function Di() {
  return {
    containerClasses: p(() => W(
      Hi
    ))
  };
}
const Gp = /* @__PURE__ */ C({
  __name: "FwbListGroup",
  setup(e) {
    const { containerClasses: t } = Di();
    return (r, o) => (c(), h("ul", {
      class: x(y(t))
    }, [
      w(r.$slots, "default")
    ], 2));
  }
}), Wi = {
  border: (e) => e.substring(0, e.lastIndexOf("-"))
}, Gi = (e, t = Wi) => {
  const o = Object.keys(t).find((s) => e.includes(s));
  return o ? t[o](e) : e.substring(0, e.indexOf("-"));
};
function se(...e) {
  return e.filter((t) => t).reduce((t, r) => {
    const o = Array.isArray(r) ? Array.from(r).map((u) => u.split(" ")).flat() : r.split(" "), s = o.map((u) => Gi(u)), n = s.filter((u) => !t.types.includes(u)), l = [...s.filter((u) => t.types.includes(u)), ...n], i = [.../* @__PURE__ */ new Set([...t.types, ...l])], d = i.map((u) => {
      if (l.includes(u)) {
        const b = s.indexOf(u);
        if (b >= 0)
          return o[b] || "";
      }
      const f = t.types.indexOf(u);
      return f >= 0 && t.classes[f] || "";
    }).filter((u) => !!u);
    return {
      types: i,
      classes: d
    };
  }, { types: [], classes: [] }).classes.join(" ");
}
const qi = "inline-flex items-center w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600", Ui = "block w-full px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white", Yi = "bg-gray-100 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400";
function Ki(e) {
  return {
    itemClasses: p(() => se(
      qi,
      e.disabled.value ? Yi : "",
      !e.disabled.value && e.hover.value ? Ui : ""
    ))
  };
}
const Ji = {
  key: 0,
  class: "mr-2"
}, Xi = {
  key: 1,
  class: "ml-2"
}, qp = /* @__PURE__ */ C({
  __name: "FwbListGroupItem",
  props: {
    hover: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, { itemClasses: r } = Ki(K(t));
    return (o, s) => (c(), h("li", {
      class: x(y(r))
    }, [
      o.$slots.prefix ? (c(), h("div", Ji, [
        w(o.$slots, "prefix")
      ])) : T("", !0),
      w(o.$slots, "default"),
      o.$slots.suffix ? (c(), h("div", Xi, [
        w(o.$slots, "suffix")
      ])) : T("", !0)
    ], 2));
  }
}), Zi = /* @__PURE__ */ g("div", { class: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40" }, null, -1), Qi = { class: "relative bg-white rounded-lg shadow dark:bg-gray-700" }, ed = /* @__PURE__ */ g("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", {
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "fill-rule": "evenodd"
  })
], -1), td = {
  key: 0,
  class: "p-6 rounded-b border-gray-200 border-t dark:border-gray-600"
}, Up = /* @__PURE__ */ C({
  __name: "FwbModal",
  props: {
    notEscapable: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !1 },
    size: { default: "2xl" }
  },
  emits: ["close", "click:outside"],
  setup(e, { emit: t }) {
    const r = e, o = t, s = {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    };
    function n() {
      o("close");
    }
    function a() {
      r.persistent || (o("click:outside"), n());
    }
    function l() {
      !r.notEscapable && !r.persistent && n();
    }
    const i = V(null);
    return De(() => {
      i.value && i.value.focus();
    }), (d, u) => (c(), h("div", null, [
      Zi,
      g("div", {
        ref_key: "modalRef",
        ref: i,
        class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex",
        tabindex: "0",
        onClick: xt(a, ["self"]),
        onKeyup: no(l, ["esc"])
      }, [
        g("div", {
          class: x([`${s[d.size]}`, "relative p-4 w-full h-full"])
        }, [
          g("div", Qi, [
            g("div", {
              class: x([d.$slots.header ? "border-b border-gray-200 dark:border-gray-600" : "", "p-4 rounded-t flex justify-between items-center"])
            }, [
              w(d.$slots, "header"),
              d.persistent ? T("", !0) : (c(), h("button", {
                key: 0,
                "aria-label": "close",
                class: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
                type: "button",
                onClick: n
              }, [
                w(d.$slots, "close-icon", {}, () => [
                  ed
                ])
              ]))
            ], 2),
            g("div", {
              class: x([d.$slots.header ? "" : "pt-0", "p-6"])
            }, [
              w(d.$slots, "body")
            ], 2),
            d.$slots.footer ? (c(), h("div", td, [
              w(d.$slots, "footer")
            ])) : T("", !0)
          ])
        ], 2)
      ], 544)
    ]));
  }
}), rd = { class: "container flex flex-wrap justify-between items-center mx-auto" }, od = /* @__PURE__ */ g("span", { class: "sr-only" }, "Open main menu", -1), sd = /* @__PURE__ */ g("svg", {
  "aria-hidden": "true",
  class: "w-6 h-6",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", {
    "clip-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "fill-rule": "evenodd"
  })
], -1), nd = {
  key: 0,
  class: "hidden md:order-2 md:flex"
}, ad = " border-gray-200", ld = "fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600", id = "rounded", dd = "p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700", ud = "bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900", Yp = /* @__PURE__ */ C({
  __name: "FwbNavbar",
  props: {
    class: {
      type: String,
      default: ""
    },
    sticky: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    solid: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = We(), s = vo(bo).smaller("md"), n = V(!1), a = Aa(n), l = p(() => he(
      [
        ad,
        t.sticky ? ld : "",
        t.rounded ? id : "",
        t.solid ? dd : ud,
        t.class
      ].join(" ")
    )), i = p(
      () => s ? n.value : !0
    );
    return (d, u) => (c(), h("nav", {
      class: x(l.value)
    }, [
      g("div", rd, [
        w(d.$slots, "logo"),
        g("button", {
          "aria-controls": "navbar-default",
          "aria-expanded": "false",
          class: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
          type: "button",
          onClick: u[0] || (u[0] = (f) => y(a)())
        }, [
          od,
          w(d.$slots, "menu-icon", {}, () => [
            sd
          ])
        ]),
        w(d.$slots, "default", { isShowMenu: i.value }),
        y(r)["right-side"] ? (c(), h("div", nd, [
          w(d.$slots, "right-side")
        ])) : T("", !0)
      ])
    ], 2));
  }
}), cd = "w-full md:block md:w-auto", pd = "flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700", fd = "bg-gray-50", Kp = /* @__PURE__ */ C({
  __name: "FwbNavbarCollapse",
  props: {
    isShowMenu: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const r = vo(bo).smaller("md"), o = e, s = p(() => W(
      cd,
      o.isShowMenu ? "" : "hidden"
    )), n = p(() => W(
      pd,
      r.value ? fd : ""
    ));
    return (a, l) => (c(), h("div", {
      class: x(s.value)
    }, [
      g("ul", {
        class: x(n.value)
      }, [
        w(a.$slots, "default")
      ], 2)
    ], 2));
  }
}), gd = "bg-blue-700 md:bg-transparent text-white md:text-blue-700 dark:text-white", hd = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent", md = "block py-2 pr-4 pl-3 rounded md:p-0", Jp = /* @__PURE__ */ C({
  __name: "FwbNavbarLink",
  props: {
    link: { default: "/" },
    isActive: { type: Boolean, default: !1 },
    component: { default: "a" },
    linkAttr: { default: "href" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e, o = t, s = p(() => r.component !== "a" ? me(r.component) : "a"), n = O(
      md,
      r.isActive ? gd : hd
    ), a = (l) => {
      r.disabled || o("click", l);
    };
    return (l, i) => (c(), h("li", null, [
      (c(), D(Z(s.value), Te({
        [l.linkAttr || ""]: l.link,
        class: y(n),
        onClick: a
      }), {
        default: j(() => [
          w(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ]));
  }
}), bd = ["src", "alt"], vd = { class: "self-center text-xl font-semibold whitespace-nowrap dark:text-white" }, Xp = /* @__PURE__ */ C({
  __name: "FwbNavbarLogo",
  props: {
    link: { default: "/" },
    imageUrl: { default: "/assets/logo.svg" },
    alt: { default: "Logo" },
    component: { default: "a" },
    linkAttr: { default: "href" }
  },
  setup(e) {
    const t = e, r = p(() => t.component !== "a" ? me(t.component) : "a");
    return (o, s) => (c(), D(Z(r.value), Te({
      class: "flex items-center",
      [o.linkAttr || ""]: o.link
    }), {
      default: j(() => [
        g("img", {
          src: o.imageUrl,
          alt: o.alt,
          class: "mr-3 h-6 sm:h-10"
        }, null, 8, bd),
        g("span", vd, [
          w(o.$slots, "default")
        ])
      ]),
      _: 3
    }, 16));
  }
}), yd = { "aria-label": "Navigation" }, wd = { class: "font-semibold text-gray-900 dark:text-white" }, xd = { class: "font-semibold text-gray-900 dark:text-white" }, kd = { class: "font-semibold text-gray-900 dark:text-white" }, _d = ["disabled"], Cd = ["disabled"], $d = {
  key: 0,
  stroke: "currentColor",
  fill: "currentColor",
  "stroke-width": "0",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  class: "h-5 w-5",
  height: "1em",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, Sd = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Td = [
  Sd
], Pd = ["disabled", "onClick"], zd = ["disabled"], Ad = {
  key: 0,
  stroke: "currentColor",
  fill: "currentColor",
  "stroke-width": "0",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  class: "h-5 w-5",
  height: "1em",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, Fd = /* @__PURE__ */ g("path", {
  "fill-rule": "evenodd",
  d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Id = [
  Fd
], Bd = ["disabled"], Zp = /* @__PURE__ */ C({
  __name: "FwbPagination",
  props: {
    modelValue: { default: 1 },
    totalPages: { default: void 0 },
    perPage: { default: 10 },
    totalItems: { default: 10 },
    layout: { default: "pagination" },
    showIcons: { type: Boolean, default: !1 },
    sliceLength: { default: 2 },
    previousLabel: { default: "Prev" },
    nextLabel: { default: "Next" },
    enableFirstAndLastButtons: { type: Boolean, default: !1 },
    showLabels: { type: Boolean, default: !0 },
    large: { type: Boolean, default: !1 }
  },
  emits: ["update:model-value", "page-changed"],
  setup(e, { emit: t }) {
    const r = t, o = e;
    function s(_) {
      r("update:model-value", _), r("page-changed", _);
    }
    function n() {
      r("update:model-value", o.modelValue - 1), r("page-changed", o.modelValue - 1);
    }
    function a() {
      r("update:model-value", o.modelValue + 1), r("page-changed", o.modelValue + 1);
    }
    function l() {
      r("update:model-value", 1), r("page-changed", 1);
    }
    function i() {
      const _ = d.value;
      r("update:model-value", _), r("page-changed", _);
    }
    const d = p(() => o.totalPages ? o.totalPages : Math.ceil(o.totalItems / o.perPage)), u = p(() => o.modelValue <= 1), f = p(() => o.modelValue >= d.value), b = (_) => _ === o.modelValue, m = p(() => {
      if (o.layout === "navigation")
        return [];
      if (o.layout === "table")
        return [];
      if (d.value <= o.sliceLength * 2 + 1) {
        const z = [];
        for (let N = 1; N <= d.value; N++)
          z.push(N);
        return z;
      }
      if (o.modelValue <= o.sliceLength) {
        const z = [], N = Math.abs(o.modelValue - o.sliceLength) + o.modelValue + o.sliceLength + 1;
        for (let G = 1; G <= N; G++)
          z.push(G);
        return z;
      }
      if (o.modelValue >= d.value - o.sliceLength) {
        const z = [];
        for (let N = Math.abs(d.value - o.sliceLength * 2); N <= d.value; N++)
          z.push(N);
        return z;
      }
      const _ = [], E = o.modelValue - o.sliceLength > 0 ? o.modelValue - o.sliceLength : 1;
      for (let z = E; z < o.modelValue + o.sliceLength + 1 && !(z >= d.value); z++)
        _.push(z);
      return _;
    }), v = p(() => o.modelValue * o.perPage - o.perPage + 1), k = p(() => {
      const _ = o.modelValue * o.perPage;
      return o.totalItems && _ > o.totalItems ? o.totalItems : _;
    }), $ = p(() => o.totalItems ? o.totalItems : d.value * o.perPage), S = p(() => o.modelValue === 1), P = p(() => o.modelValue === d.value);
    function A(_) {
      return O("flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", _ && "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white", o.large && "px-4 h-10");
    }
    function L(_) {
      const E = "flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", z = "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white cursor-not-allowed";
      return O(
        E,
        _ === o.modelValue && z,
        o.large && "px-4 h-10",
        (_ > d.value || _ < 1) && z,
        o.layout === "navigation" && "first:mr-3",
        (o.layout === "navigation" || o.layout === "table") && "rounded-lg",
        o.layout === "table" && "border-none text-white hover:text-white bg-gray-800 rounded-none first:rounded-l last:rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      );
    }
    return (_, E) => (c(), h("nav", yd, [
      _.layout === "table" ? (c(), h("div", {
        key: 0,
        class: x(["text-gray-700 dark:text-gray-400 mb-2", _.large ? "text-base" : "text-sm"])
      }, [
        ee(" Showing "),
        g("span", wd, B(v.value), 1),
        ee(" to "),
        g("span", xd, B(k.value), 1),
        ee(" of "),
        g("span", kd, B($.value), 1)
      ], 2)) : T("", !0),
      g("div", {
        class: x(["inline-flex", _.large && "text-base h-10"])
      }, [
        w(_.$slots, "start"),
        _.enableFirstAndLastButtons ? w(_.$slots, "first-button", { key: 0 }, () => [
          g("button", {
            disabled: S.value,
            class: x(L(1)),
            onClick: l
          }, " First ", 10, _d)
        ]) : T("", !0),
        w(_.$slots, "prev-button", {
          disabled: u.value,
          decreasePage: n
        }, () => [
          g("button", {
            disabled: u.value,
            class: x(L(_.modelValue - 1)),
            onClick: n
          }, [
            w(_.$slots, "prev-icon", {}, () => [
              _.showIcons || _.$slots["prev-icon"] ? (c(), h("svg", $d, Td)) : T("", !0)
            ]),
            _.showLabels ? (c(), h(Y, { key: 0 }, [
              ee(B(_.previousLabel), 1)
            ], 64)) : T("", !0)
          ], 10, Cd)
        ]),
        (c(!0), h(Y, null, Oe(m.value, (z) => w(_.$slots, "page-button", {
          key: z,
          page: z,
          setPage: s,
          disabled: b(z)
        }, () => [
          g("button", {
            disabled: b(z),
            class: x(A(z === _.modelValue)),
            onClick: (N) => s(z)
          }, B(z), 11, Pd)
        ])), 128)),
        w(_.$slots, "next-button", {
          disabled: f.value,
          increasePage: a
        }, () => [
          g("button", {
            disabled: f.value,
            class: x(L(_.modelValue + 1)),
            onClick: a
          }, [
            _.showLabels ? (c(), h(Y, { key: 0 }, [
              ee(B(_.nextLabel), 1)
            ], 64)) : T("", !0),
            w(_.$slots, "next-icon", {}, () => [
              _.showIcons || _.$slots["next-icon"] ? (c(), h("svg", Ad, Id)) : T("", !0)
            ])
          ], 10, zd)
        ]),
        _.enableFirstAndLastButtons ? w(_.$slots, "last-button", { key: 1 }, () => [
          g("button", {
            disabled: P.value,
            class: x(L(d.value)),
            onClick: i
          }, " Last ", 10, Bd)
        ]) : T("", !0),
        w(_.$slots, "end")
      ], 2)
    ]));
  }
}), Md = {
  default: "bg-blue-600 dark:bg-blue-600",
  blue: "bg-blue-600 dark:bg-blue-600",
  dark: "bg-gray-600 dark:bg-gray-300",
  green: "bg-green-600 dark:bg-green-500",
  red: "bg-red-600 dark:bg-red-500",
  yellow: "bg-yellow-400",
  indigo: "bg-indigo-600 dark:bg-indigo-500",
  purple: "bg-purple-600 dark:bg-purple-500"
}, Od = {
  default: "",
  blue: "text-blue-700 dark:text-blue-500",
  dark: "dark:text-white",
  green: "text-green-700 dark:text-green-500",
  red: "text-red-700 dark:text-red-500",
  yellow: "text-yellow-700 dark:text-yellow-500",
  indigo: "text-indigo-700 dark:text-indigo-500",
  purple: "text-purple-700 dark:text-purple-500"
}, Mr = {
  sm: "h-1.5 text-xs leading-none",
  md: "h-2.5 text-xs leading-none",
  lg: "h-4 text-sm leading-none",
  xl: "h-6 text-base leading-tight"
};
function Ld(e) {
  const t = p(() => W(
    Md[e.color.value],
    Mr[e.size.value]
  )), r = p(() => W(
    Mr[e.size.value]
  )), o = p(() => W(
    Od[e.color.value]
  ));
  return {
    innerClasses: t,
    outerClasses: r,
    outsideLabelClasses: o
  };
}
const Ed = {
  key: 0,
  class: "flex justify-between mb-1"
}, Qp = /* @__PURE__ */ C({
  __name: "FwbProgress",
  props: {
    color: { default: "default" },
    label: { default: "" },
    labelPosition: { default: "none" },
    labelProgress: { type: Boolean, default: !1 },
    progress: { default: 0 },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, {
      innerClasses: r,
      outerClasses: o,
      outsideLabelClasses: s
    } = Ld(K(t));
    return (n, a) => (c(), h("div", null, [
      n.label || n.labelProgress && n.labelPosition === "outside" ? (c(), h("div", Ed, [
        g("span", {
          class: x([y(s), "text-base font-medium"])
        }, B(n.label), 3),
        n.labelProgress && n.labelPosition === "outside" ? (c(), h("span", {
          key: 0,
          class: x([y(s), "text-sm font-medium"])
        }, B(n.progress) + "%", 3)) : T("", !0)
      ])) : T("", !0),
      g("div", {
        class: x([y(o), "w-full bg-gray-200 rounded-full dark:bg-gray-700"])
      }, [
        g("div", {
          class: x([y(r), "rounded-full font-medium text-blue-100 text-center p-0.5"]),
          style: rt({ width: n.progress + "%" })
        }, [
          n.labelProgress && n.labelPosition === "inside" ? (c(), h(Y, { key: 0 }, [
            ee(B(n.progress) + "% ", 1)
          ], 64)) : T("", !0)
        ], 6)
      ], 2)
    ]));
  }
}), Nd = {
  sm: "w-5 h-5",
  md: "w-7 h-7",
  lg: "w-10 h-10"
};
function Rd(e) {
  return { sizeClasses: p(() => W(
    Nd[e.size.value] ?? ""
  )) };
}
const jd = { class: "flex items-center" }, Vd = /* @__PURE__ */ g("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1), Hd = [
  Vd
], Dd = /* @__PURE__ */ g("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1), Wd = [
  Dd
], Gd = /* @__PURE__ */ g("span", { class: "w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" }, null, -1), qd = ["href"], ef = /* @__PURE__ */ C({
  __name: "FwbRating",
  props: {
    rating: { default: 3 },
    reviewLink: { default: "" },
    reviewText: { default: "" },
    scale: { default: 5 },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, r = p(() => Math.floor(t.rating)), o = p(() => t.scale - r.value), { sizeClasses: s } = Rd(K(t));
    return (n, a) => (c(), h("div", jd, [
      (c(!0), h(Y, null, Oe(r.value, (l) => (c(), h("svg", {
        key: l,
        class: x([y(s), "text-yellow-400"]),
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, Hd, 2))), 128)),
      (c(!0), h(Y, null, Oe(o.value, (l) => (c(), h("svg", {
        key: l,
        class: x([y(s), "text-gray-300 dark:text-gray-500"]),
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg"
      }, Wd, 2))), 128)),
      w(n.$slots, "besideText"),
      n.reviewText && n.reviewLink ? (c(), h(Y, { key: 0 }, [
        Gd,
        g("a", {
          href: n.reviewLink,
          class: "text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
        }, B(n.reviewText), 9, qd)
      ], 64)) : T("", !0)
    ]));
  }
}), Ud = { class: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" }, Yd = { class: "space-y-2 font-medium" }, tf = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbSidebar",
  setup(e) {
    const t = ne(), r = O("absolute top-0 left-0 z-40 w-64 h-screen transition-transform", t.class);
    return (o, s) => (c(), h("aside", X(o.$attrs, {
      class: y(r),
      "aria-label": "Sidebar"
    }), [
      g("div", Ud, [
        g("div", Yd, [
          w(o.$slots, "default")
        ])
      ])
    ], 16));
  }
}), Kd = {
  class: "p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900",
  role: "alert"
}, Jd = { class: "flex items-center mb-3" }, Xd = { class: "bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900" }, Zd = /* @__PURE__ */ g("span", { class: "sr-only" }, "Close", -1), Qd = /* @__PURE__ */ g("svg", {
  class: "w-2.5 h-2.5",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 14 14"
}, [
  /* @__PURE__ */ g("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
  })
], -1), eu = [
  Zd,
  Qd
], rf = /* @__PURE__ */ C({
  __name: "FwbSidebarCta",
  props: {
    label: { default: void 0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = t;
    function o() {
      r("close");
    }
    return (s, n) => (c(), h("div", Kd, [
      g("div", Jd, [
        g("span", Xd, B(s.label), 1),
        g("button", {
          type: "button",
          class: "ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800",
          "aria-label": "Close",
          onClick: o
        }, eu)
      ]),
      w(s.$slots, "default")
    ]));
  }
}), tu = { class: "overflow-hidden" }, ru = /* @__PURE__ */ g("svg", {
  class: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 18 21"
}, [
  /* @__PURE__ */ g("path", { d: "M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" })
], -1), ou = { class: "flex-1 ml-3 text-left whitespace-nowrap" }, su = /* @__PURE__ */ g("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m1 1 4 4 4-4"
}, null, -1), nu = [
  su
], au = { class: "py-2 space-y-2 z-0 overflow-hidden" }, lu = { key: 0 }, of = /* @__PURE__ */ C({
  __name: "FwbSidebarDropdownItem",
  setup(e) {
    const t = V(!1);
    function r() {
      t.value = !t.value;
    }
    return (o, s) => (c(), h("div", tu, [
      g("button", {
        type: "button",
        class: "flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 z-10",
        "aria-controls": "dropdown-content",
        onClick: r
      }, [
        w(o.$slots, "icon", {}, () => [
          ru
        ]),
        g("span", ou, [
          w(o.$slots, "trigger")
        ]),
        w(o.$slots, "arrow-icon", { toggleDropdown: r }, () => [
          (c(), h("svg", {
            class: x(["w-3 h-3 transition-all duration-300", t.value && "rotate-180"]),
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 10 6"
          }, nu, 2))
        ])
      ]),
      g("div", au, [
        Fe(ro, {
          duration: 150,
          "enter-from-class": "-translate-y-full",
          "enter-to-class": "translate-y-0",
          "enter-active-class": "transition duration-400 ease-out",
          "leave-active-class": "transition duration-400 ease-in",
          "leave-from-class": "translate-y-0",
          "leave-to-class": "-translate-y-full"
        }, {
          default: j(() => [
            t.value ? (c(), h("div", lu, [
              w(o.$slots, "default")
            ])) : T("", !0)
          ]),
          _: 3
        })
      ])
    ]));
  }
}), sf = /* @__PURE__ */ C({
  __name: "FwbSidebarItem",
  props: {
    link: { default: "/" },
    tag: { default: "router-link" }
  },
  setup(e) {
    const t = e, r = t.tag === "a" ? "a" : me(t.tag), o = t.tag === "a" ? "href" : "to";
    return (s, n) => (c(), D(Z(y(r)), Te({
      [y(o) || ""]: s.link,
      class: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    }), {
      default: j(() => [
        w(s.$slots, "icon"),
        g("span", {
          class: x(["flex-1 whitespace-nowrap", s.$slots.icon && "ml-3"])
        }, [
          w(s.$slots, "default")
        ], 2),
        w(s.$slots, "suffix")
      ]),
      _: 3
    }, 16));
  }
}), iu = "pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700", nf = /* @__PURE__ */ C({
  __name: "FwbSidebarItemGroup",
  props: {
    border: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, r) => (c(), h("div", {
      class: x(t.border && iu)
    }, [
      w(t.$slots, "default")
    ], 2));
  }
}), du = ["src", "alt"], uu = { class: "self-center text-xl font-semibold whitespace-nowrap dark:text-white" }, af = /* @__PURE__ */ C({
  __name: "FwbSidebarLogo",
  props: {
    name: { default: "" },
    link: { default: "/" },
    logo: { default: "" },
    alt: { default: "" },
    tag: { default: "router-link" }
  },
  setup(e) {
    const t = e, r = t.tag === "a" ? "a" : me(t.tag), o = t.tag === "a" ? "href" : "to";
    return (s, n) => (c(), D(Z(y(r)), Te({
      [y(o) || ""]: s.link,
      class: "flex items-center mb-5 pl-2.5"
    }), {
      default: j(() => [
        g("img", {
          src: s.logo,
          class: "h-6 mr-3 sm:h-7",
          alt: s.alt ?? s.name
        }, null, 8, du),
        g("span", uu, B(s.name), 1)
      ]),
      _: 1
    }, 16));
  }
}), cu = { class: "relative overflow-x-auto shadow-md sm:rounded-lg" }, pu = { class: "w-full text-sm text-left text-gray-500 dark:text-gray-400" }, lf = /* @__PURE__ */ C({
  __name: "FwbTable",
  props: {
    striped: {
      type: Boolean,
      default: !1
    },
    stripedColumns: {
      type: Boolean,
      default: !1
    },
    hoverable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    return de("hoverable", t.hoverable), de("striped", t.striped), de("stripedColumns", t.stripedColumns), (r, o) => (c(), h("div", cu, [
      g("table", pu, [
        w(r.$slots, "default")
      ])
    ]));
  }
}), fu = {};
function gu(e, t) {
  return c(), h("tbody", null, [
    w(e.$slots, "default")
  ]);
}
const df = /* @__PURE__ */ fe(fu, [["render", gu]]), hu = "px-6 py-4 first:font-medium first:text-gray-900 first:dark:text-white first:whitespace-nowrap last:text-right", mu = "even:bg-gray-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50";
function bu() {
  const e = te("stripedColumns");
  return { tableCellClasses: p(() => W(
    hu,
    { [mu]: e }
  )) };
}
const uf = /* @__PURE__ */ C({
  __name: "FwbTableCell",
  setup(e) {
    const { tableCellClasses: t } = bu();
    return (r, o) => (c(), h("td", {
      class: x(y(t))
    }, [
      w(r.$slots, "default")
    ], 2));
  }
}), vu = {}, yu = { class: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" };
function wu(e, t) {
  return c(), h("thead", yu, [
    g("tr", null, [
      w(e.$slots, "default")
    ])
  ]);
}
const cf = /* @__PURE__ */ fe(vu, [["render", wu]]), xu = "px-6 py-3 text-xs uppercase", ku = "even:bg-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50";
function _u() {
  const e = te("stripedColumns");
  return { tableHeadCellClasses: p(() => W(
    xu,
    { [ku]: e }
  )) };
}
const pf = /* @__PURE__ */ C({
  __name: "FwbTableHeadCell",
  setup(e) {
    const { tableHeadCellClasses: t } = _u();
    return (r, o) => (c(), h("th", {
      scope: "col",
      class: x(y(t))
    }, [
      w(r.$slots, "default")
    ], 2));
  }
}), Cu = "bg-white dark:bg-gray-800 [&:not(:last-child)]:border-b [&:not(:last-child)]:dark:border-gray-700", $u = "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700", Su = "hover:bg-gray-50 dark:hover:bg-gray-600";
function Tu() {
  const e = te("striped"), t = te("hoverable");
  return { tableRowClasses: p(() => W(
    Cu,
    {
      [Su]: t,
      [$u]: e
    }
  )) };
}
const ff = /* @__PURE__ */ C({
  __name: "FwbTableRow",
  setup(e) {
    const { tableRowClasses: t } = Tu();
    return (r, o) => (c(), h("tr", {
      class: x(y(t))
    }, [
      w(r.$slots, "default")
    ], 2));
  }
}), So = "flowbite-tab-activate-func-injection", To = "flowbite-tab-active-name-injection", Po = "flowbite-tab-style-injection", zo = "flowbite-tab-visibility-directive-injection", Pu = { key: 0 }, zu = { key: 1 }, gf = /* @__PURE__ */ C({
  __FLOWBITE_TAB__: !0,
  __name: "FwbTab",
  props: {
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = te(To, ""), r = te(zo, "if");
    return (o, s) => y(r) === "if" ? (c(), h(Y, { key: 0 }, [
      y(t) === e.name ? (c(), h("div", Pu, [
        w(o.$slots, "default")
      ])) : T("", !0)
    ], 64)) : y(r) === "show" ? Pe((c(), h("div", zu, [
      w(o.$slots, "default")
    ], 512)), [
      [os, y(t) === e.name]
    ]) : T("", !0);
  }
});
function Au(e) {
  const t = p(() => O(
    "flex flex-wrap font-medium text-center text-gray-500 dark:text-gray-400 text-sm",
    e.variant === "underline" && "-mb-px",
    e.variant === "default" && "border-b border-gray-200 dark:border-gray-700"
  ));
  return {
    divClasses: p(() => e.variant === "underline" ? "border-b border-gray-200 dark:border-gray-700 font-medium text-center text-gray-500 dark:text-gray-400 text-sm" : ""),
    ulClasses: t
  };
}
const Ao = "flowbite-themable-injection-key", Re = {
  blue: {
    background: "bg-blue-700 dark:bg-blue-600",
    disabled: "",
    hover: "hover:bg-blue-800 dark:hover:bg-blue-700",
    text: "text-blue-600 dark:text-blue-500",
    border: "border-blue-600 dark:border-blue-500",
    focus: "focus:ring-blue-300 dark:focus:ring-blue-800"
  },
  green: {
    background: "bg-green-700 dark:bg-green-600",
    disabled: "",
    hover: "hover:bg-green-800 dark:hover:bg-green-700",
    text: "text-green-600 dark:text-green-500",
    border: "border-green-600 dark:border-green-500",
    focus: "focus:ring-green-300 dark:focus:ring-green-800"
  },
  pink: {
    background: "bg-pink-700 dark:bg-pink-600",
    disabled: "",
    hover: "hover:bg-pink-800 dark:hover:bg-pink-700",
    text: "text-pink-600 dark:text-pink-500",
    border: "border-pink-600 dark:border-pink-500",
    focus: "focus:ring-pink-300 dark:focus:ring-pink-900"
  },
  purple: {
    background: "bg-purple-700 dark:bg-purple-600",
    disabled: "",
    hover: "hover:bg-purple-800 dark:hover:bg-purple-700",
    text: "text-purple-600 dark:text-purple-500",
    border: "border-purple-600 dark:border-purple-500",
    focus: "focus:ring-purple-300 dark:focus:ring-purple-900"
  },
  red: {
    background: "bg-red-700 dark:bg-red-600",
    disabled: "",
    hover: "hover:bg-red-800 dark:hover:bg-red-700",
    text: "text-red-600 dark:text-red-500",
    border: "border-red-600 dark:border-red-500",
    focus: "focus:ring-red-300 dark:focus:ring-red-900"
  }
};
function Fo(e) {
  const t = te(Ao, V(null)), r = p(() => e || t.value), o = p(() => !!t?.value), s = p(
    () => r.value ? Re[r.value].background : ""
  ), n = p(
    () => r.value ? Re[r.value].border : ""
  ), a = p(() => t?.value || void 0), l = p(
    () => r.value ? Re[r.value].disabled : ""
  ), i = p(
    () => r.value ? Re[r.value].focus : ""
  ), d = p(
    () => r.value ? Re[r.value].hover : ""
  ), u = p(
    () => r.value ? Re[r.value].text : ""
  );
  return {
    backgroundClasses: s,
    borderClasses: n,
    color: a,
    disabledClasses: l,
    focusClasses: i,
    hoverClasses: d,
    isActive: o,
    textClasses: u
  };
}
const Fu = {
  default: "cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
  active: "cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",
  disabled: "inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
}, Iu = {
  default: "cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
  active: "cursor-pointer inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
  disabled: "inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500"
}, Bu = {
  default: "cursor-pointer inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
  active: "cursor-pointer inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active",
  disabled: "inline-block py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500"
};
function Mu(e) {
  const t = Fo();
  return { tabClasses: p(() => {
    const o = t.isActive.value, s = e.active.value ? "active" : e.disabled.value ? "disabled" : "default";
    return e.variant === "default" ? se(
      Fu[s],
      (o && s) === "active" ? t.textClasses.value : ""
    ) : e.variant === "underline" ? se(
      Iu[s],
      (o && s) === "active" ? [t.borderClasses.value, t.textClasses.value] : ""
    ) : e.variant === "pills" ? se(
      Bu[s],
      (o && s) === "active" ? [t.backgroundClasses.value, "text-white"] : ""
    ) : "";
  }) };
}
const Ou = /* @__PURE__ */ C({
  __name: "FwbTabPane",
  props: {
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, r = te(Po);
    r || console.warn("you can't use Tab outside of Tabs component. No tab style injection found");
    const o = te(So);
    o || console.warn("you can't use Tab outside of Tabs component. No tab activate injection found");
    const s = () => {
      if (!t.disabled) {
        if (!o)
          return console.warn("no onActivate");
        o(t.name);
      }
    }, { tabClasses: n } = Mu({
      active: He(t, "active"),
      disabled: He(t, "disabled"),
      variant: r
    });
    return (a, l) => (c(), h("li", null, [
      g("div", {
        class: x(y(n)),
        onClick: s
      }, B(e.title), 3)
    ]));
  }
}), hf = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbTabs",
  props: {
    variant: { default: "default" },
    modelValue: { default: "" },
    directive: { default: "if" }
  },
  emits: ["update:modelValue", "click:pane"],
  setup(e, { emit: t }) {
    const r = e, o = t, { ulClasses: s, divClasses: n } = Au(r);
    de(Po, r.variant);
    const l = We().default, i = p(() => l ? St(l()).filter((b) => b.type.__FLOWBITE_TAB__) : []), d = p({
      get: () => r.modelValue,
      set: (b) => o("update:modelValue", b)
    });
    de(To, d), de(zo, He(r, "directive"));
    const u = (b) => {
      d.value = b;
    }, f = () => {
      o("click:pane");
    };
    return de(So, u), (b, m) => (c(), h(Y, null, [
      g("div", {
        class: x(y(n))
      }, [
        g("ul", {
          class: x(y(s))
        }, [
          (c(!0), h(Y, null, Oe(i.value, (v, k) => (c(), D(Ou, {
            key: k,
            active: d.value === v.props?.name,
            disabled: v.props?.disabled,
            name: v.props?.name,
            title: v.props?.title,
            onClick: f
          }, null, 8, ["active", "disabled", "name", "title"]))), 128))
        ], 2)
      ], 2),
      g("div", Te(ao(b.$attrs)), [
        w(b.$slots, "default")
      ], 16)
    ], 64));
  }
}), Lu = "relative border-gray-200 dark:border-gray-700", Eu = "border-l", Nu = "flex", mf = /* @__PURE__ */ C({
  __name: "FwbTimeline",
  props: {
    horizontal: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e;
    de("horizontal", t.horizontal);
    const r = p(() => W(
      Lu,
      t.horizontal ? Nu : Eu
    ));
    return (o, s) => (c(), h("ol", X({ class: r.value }, o.$attrs), [
      w(o.$slots, "default")
    ], 16));
  }
}), Ru = {}, ju = { class: "font-normal mb-4 text-base text-gray-500 dark:text-gray-400" };
function Vu(e, t) {
  return c(), h("p", ju, [
    w(e.$slots, "default")
  ]);
}
const bf = /* @__PURE__ */ fe(Ru, [["render", Vu]]), vf = /* @__PURE__ */ C({
  __name: "FwbTimelineContent",
  setup(e) {
    const t = te("horizontal"), r = p(() => W(t ? "mt-3 sm:pr-8" : ""));
    return (o, s) => (c(), h("div", {
      class: x(r.value)
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Hu = "mb-10", Du = "mb-6 sm:mb-0 relative", Wu = "ml-6", yf = /* @__PURE__ */ C({
  __name: "FwbTimelineItem",
  setup(e) {
    const t = te("horizontal"), r = p(() => W(Hu, t ? Du : Wu));
    return (o, s) => (c(), h("li", {
      class: x(r.value)
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Gu = "h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex", wf = /* @__PURE__ */ C({
  __name: "FwbTimelinePoint",
  setup(e) {
    const t = We(), r = p(() => !!t.default), o = te("horizontal"), s = p(() => W(o ? "flex items-center" : "")), n = p(() => W(Gu, { "sm:hidden hidden": !o })), a = p(() => {
      const l = "absolute rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700", i = "mt-1.5 w-3 h-3 bg-gray-200", d = "mt-1.5 w-6 h-6 -left-3 flex justify-center items-center bg-blue-200 ring-8 ring-white dark:ring-gray-900", u = "w-3 h-3 bg-gray-200", f = "w-6 h-6 -left-3 flex justify-center items-center bg-blue-200 ring-8 ring-white dark:ring-gray-900", b = !o && !r.value, m = !o && r.value, v = o && !r.value, k = o && r.value;
      return W(
        l,
        {
          [i]: b,
          [d]: m,
          [u]: v,
          [f]: k
        }
      );
    });
    return (l, i) => (c(), h("div", {
      class: x(s.value)
    }, [
      g("div", {
        class: x(a.value)
      }, [
        w(l.$slots, "default")
      ], 2),
      g("div", {
        class: x(n.value)
      }, null, 2)
    ], 2));
  }
}), qu = {}, Uu = { class: "font-normal leading-none mb-1 text-gray-400 dark:text-gray-500 text-sm" };
function Yu(e, t) {
  return c(), h("time", Uu, [
    w(e.$slots, "default")
  ]);
}
const xf = /* @__PURE__ */ fe(qu, [["render", Yu]]), Ku = {}, Ju = { class: "font-semibold text-gray-900 dark:text-white text-lg" };
function Xu(e, t) {
  return c(), h("h3", Ju, [
    w(e.$slots, "default")
  ]);
}
const kf = /* @__PURE__ */ fe(Ku, [["render", Xu]]), Zu = {
  danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
  empty: "",
  success: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
  warning: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200"
}, Qu = {
  center: "items-center",
  end: "items-end",
  start: "items-start"
}, Or = "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800", Lr = "text-sm font-normal";
function ec(e) {
  const t = p(() => Zu[e.type.value]), r = p(() => {
    const s = Qu[e.alignment.value];
    return e.divide.value ? se(Or, "dark:divide-gray-700 divide-x divide-gray-200", s) : se(Or, s);
  }), o = p(() => e.type.value !== "empty" && e.divide.value ? se(Lr, "pl-3") : Lr);
  return {
    typeClasses: t,
    wrapperClasses: r,
    contentClasses: o
  };
}
function tc(e) {
  const {
    backgroundClasses: t,
    borderClasses: r,
    disabledClasses: o,
    focusClasses: s,
    hoverClasses: n,
    isActive: a,
    textClasses: l
  } = Fo(e.theme?.value);
  return {
    classes: p(() => {
      if (!a.value)
        return "";
      const d = [];
      return e.apply.value.includes("text") && d.push(l.value), e.apply.value.includes("border") && d.push(r.value), e.apply.value.includes("background") && d.push(t.value), e.apply.value.includes("hover") && d.push(n.value), e.apply.value.includes("disabled") && d.push(o.value), e.apply.value.includes("focus") && d.push(s.value), d.join(" ");
    })
  };
}
const rc = /* @__PURE__ */ C({
  __name: "FlowbiteThemableChild",
  props: {
    apply: {
      type: Array,
      required: !0
    },
    tag: {
      type: String,
      default: "div"
    },
    theme: {
      type: String,
      default: void 0
    }
  },
  setup(e) {
    const t = ne(), r = e, { classes: o } = tc(K(r)), s = p(() => t.class || "");
    return (n, a) => (c(), D(Z(e.tag), {
      class: x(y(se)(s.value, y(o)))
    }, {
      default: j(() => [
        w(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), oc = {
  key: 1,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, sc = /* @__PURE__ */ g("path", {
  "clip-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "fill-rule": "evenodd"
}, null, -1), nc = [
  sc
], ac = {
  key: 2,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, lc = /* @__PURE__ */ g("path", {
  "clip-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "fill-rule": "evenodd"
}, null, -1), ic = [
  lc
], dc = {
  key: 3,
  "aria-hidden": "true",
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, uc = /* @__PURE__ */ g("path", {
  "clip-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "fill-rule": "evenodd"
}, null, -1), cc = [
  uc
], pc = /* @__PURE__ */ g("span", { class: "sr-only" }, "Close", -1), fc = /* @__PURE__ */ g("svg", {
  class: "w-5 h-5",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", {
    "clip-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "fill-rule": "evenodd"
  })
], -1), gc = [
  pc,
  fc
], Er = /* @__PURE__ */ C({
  __name: "FwbToast",
  props: {
    type: {
      type: String,
      default: "empty"
    },
    alignment: {
      type: String,
      default: "center"
    },
    closable: {
      type: Boolean,
      default: !1
    },
    divide: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, o = V(!0), s = t, {
      typeClasses: n,
      wrapperClasses: a,
      contentClasses: l
    } = ec(K(r)), i = () => {
      s("close"), o.value = !1;
    };
    return (d, u) => o.value ? (c(), h("div", {
      key: 0,
      id: "toast-default",
      class: x(y(a)),
      role: "alert"
    }, [
      e.type !== "empty" || d.$slots.icon ? (c(), D(rc, {
        key: 0,
        apply: ["background", "text"],
        class: x(["inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg", y(n)])
      }, {
        default: j(() => [
          d.$slots.icon ? w(d.$slots, "icon", {
            key: 0,
            class: x({ "ml-3": e.type !== "empty" })
          }) : e.type === "success" ? (c(), h("svg", oc, nc)) : e.type === "danger" ? (c(), h("svg", ac, ic)) : e.type === "warning" ? (c(), h("svg", dc, cc)) : T("", !0)
        ]),
        _: 3
      }, 8, ["class"])) : T("", !0),
      g("div", {
        class: x([y(l), { "ml-3": d.$slots.icon || e.type !== "empty" }])
      }, [
        w(d.$slots, "default")
      ], 2),
      e.closable ? (c(), h("button", {
        key: 1,
        "aria-label": "Close",
        class: "border-none ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
        type: "button",
        onClick: i
      }, gc)) : T("", !0)
    ], 2)) : T("", !0);
  }
}), Io = "flowbite-toast-injection-key", hc = C({
  components: {
    FwbToast: Er
  },
  props: {
    transition: {
      type: String,
      default: "slide-left"
    }
  },
  setup() {
    const e = V([]), t = (n, a) => {
      za(() => s(n), a);
    }, r = (n) => {
      const a = parseInt(((/* @__PURE__ */ new Date()).getTime() * Math.random()).toString()).toString();
      return e.value.push({
        id: a,
        ...n
      }), n.time > 0 && t(a, n.time), a;
    }, o = () => {
      if (e.value.length === 0)
        return "";
      const n = e.value[e.value.length - 1].id;
      return e.value.pop(), n;
    }, s = (n) => {
      const a = e.value.findIndex((l) => l.id === n);
      return a >= 0 && e.value.splice(a, 1), a >= 0;
    };
    return de(Io, {
      add: r,
      pop: o,
      remove: s
    }), {
      toasts: e,
      removeToast: s
    };
  },
  render() {
    const { $props: e, $slots: t, toasts: r, removeToast: o } = this;
    return ht("div", {}, [
      t.default ? t.default() : null,
      // rendering default slot
      ht(
        ss,
        {
          name: e.transition,
          tag: "div",
          class: "xl:w-1/6 md:w-1/4 sm:w-1/4 fixed top-3 right-3 flex flex-col gap-2 z-50"
        },
        {
          default: () => r.map(
            (s) => s.component ? ht(
              s.component,
              {
                key: s.id,
                onClose: () => o(s.id),
                ...s.componentProps ? s.componentProps : {}
              },
              () => s.text
            ) : ht(
              Er,
              {
                closable: !0,
                type: s.type,
                key: s.id,
                onClose: () => o(s.id)
              },
              () => s.text
            )
          )
        }
      )
    ]);
  }
}), _f = /* @__PURE__ */ fe(hc, [["__scopeId", "data-v-aba06225"]]), mc = ["top", "right", "bottom", "left"], Nr = ["start", "end"], Rr = /* @__PURE__ */ mc.reduce((e, t) => e.concat(t, t + "-" + Nr[0], t + "-" + Nr[1]), []), Be = Math.min, Ae = Math.max, bc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, vc = {
  start: "end",
  end: "start"
};
function qt(e, t, r) {
  return Ae(e, Be(t, r));
}
function Ne(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pe(e) {
  return e.split("-")[0];
}
function le(e) {
  return e.split("-")[1];
}
function Bo(e) {
  return e === "x" ? "y" : "x";
}
function ur(e) {
  return e === "y" ? "height" : "width";
}
function ft(e) {
  return ["top", "bottom"].includes(pe(e)) ? "y" : "x";
}
function cr(e) {
  return Bo(ft(e));
}
function Mo(e, t, r) {
  r === void 0 && (r = !1);
  const o = le(e), s = cr(e), n = ur(s);
  let a = s === "x" ? o === (r ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (a = Pt(a)), [a, Pt(a)];
}
function yc(e) {
  const t = Pt(e);
  return [Tt(e), t, Tt(t)];
}
function Tt(e) {
  return e.replace(/start|end/g, (t) => vc[t]);
}
function wc(e, t, r) {
  const o = ["left", "right"], s = ["right", "left"], n = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? s : o : t ? o : s;
    case "left":
    case "right":
      return t ? n : a;
    default:
      return [];
  }
}
function xc(e, t, r, o) {
  const s = le(e);
  let n = wc(pe(e), r === "start", o);
  return s && (n = n.map((a) => a + "-" + s), t && (n = n.concat(n.map(Tt)))), n;
}
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => bc[t]);
}
function kc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Oo(e) {
  return typeof e != "number" ? kc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ot(e) {
  const {
    x: t,
    y: r,
    width: o,
    height: s
  } = e;
  return {
    width: o,
    height: s,
    top: r,
    left: t,
    right: t + o,
    bottom: r + s,
    x: t,
    y: r
  };
}
function jr(e, t, r) {
  let {
    reference: o,
    floating: s
  } = e;
  const n = ft(t), a = cr(t), l = ur(a), i = pe(t), d = n === "y", u = o.x + o.width / 2 - s.width / 2, f = o.y + o.height / 2 - s.height / 2, b = o[l] / 2 - s[l] / 2;
  let m;
  switch (i) {
    case "top":
      m = {
        x: u,
        y: o.y - s.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      m = {
        x: o.x - s.width,
        y: f
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (le(t)) {
    case "start":
      m[a] -= b * (r && d ? -1 : 1);
      break;
    case "end":
      m[a] += b * (r && d ? -1 : 1);
      break;
  }
  return m;
}
const _c = async (e, t, r) => {
  const {
    placement: o = "bottom",
    strategy: s = "absolute",
    middleware: n = [],
    platform: a
  } = r, l = n.filter(Boolean), i = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: u,
    y: f
  } = jr(d, o, i), b = o, m = {}, v = 0;
  for (let k = 0; k < l.length; k++) {
    const {
      name: $,
      fn: S
    } = l[k], {
      x: P,
      y: A,
      data: L,
      reset: _
    } = await S({
      x: u,
      y: f,
      initialPlacement: o,
      placement: b,
      strategy: s,
      middlewareData: m,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = P ?? u, f = A ?? f, m = {
      ...m,
      [$]: {
        ...m[$],
        ...L
      }
    }, _ && v <= 50 && (v++, typeof _ == "object" && (_.placement && (b = _.placement), _.rects && (d = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : _.rects), {
      x: u,
      y: f
    } = jr(d, b, i)), k = -1);
  }
  return {
    x: u,
    y: f,
    placement: b,
    strategy: s,
    middlewareData: m
  };
};
async function Ot(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: o,
    y: s,
    platform: n,
    rects: a,
    elements: l,
    strategy: i
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: b = !1,
    padding: m = 0
  } = Ne(t, e), v = Oo(m), $ = l[b ? f === "floating" ? "reference" : "floating" : f], S = ot(await n.getClippingRect({
    element: (r = await (n.isElement == null ? void 0 : n.isElement($))) == null || r ? $ : $.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(l.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: i
  })), P = f === "floating" ? {
    x: o,
    y: s,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, A = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(l.floating)), L = await (n.isElement == null ? void 0 : n.isElement(A)) ? await (n.getScale == null ? void 0 : n.getScale(A)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = ot(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: P,
    offsetParent: A,
    strategy: i
  }) : P);
  return {
    top: (S.top - _.top + v.top) / L.y,
    bottom: (_.bottom - S.bottom + v.bottom) / L.y,
    left: (S.left - _.left + v.left) / L.x,
    right: (_.right - S.right + v.right) / L.x
  };
}
const Cc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: o,
      placement: s,
      rects: n,
      platform: a,
      elements: l,
      middlewareData: i
    } = t, {
      element: d,
      padding: u = 0
    } = Ne(e, t) || {};
    if (d == null)
      return {};
    const f = Oo(u), b = {
      x: r,
      y: o
    }, m = cr(s), v = ur(m), k = await a.getDimensions(d), $ = m === "y", S = $ ? "top" : "left", P = $ ? "bottom" : "right", A = $ ? "clientHeight" : "clientWidth", L = n.reference[v] + n.reference[m] - b[m] - n.floating[v], _ = b[m] - n.reference[m], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let z = E ? E[A] : 0;
    (!z || !await (a.isElement == null ? void 0 : a.isElement(E))) && (z = l.floating[A] || n.floating[v]);
    const N = L / 2 - _ / 2, G = z / 2 - k[v] / 2 - 1, H = Be(f[S], G), q = Be(f[P], G), I = H, ie = z - k[v] - q, U = z / 2 - k[v] / 2 + N, Q = qt(I, U, ie), J = !i.arrow && le(s) != null && U !== Q && n.reference[v] / 2 - (U < I ? H : q) - k[v] / 2 < 0, re = J ? U < I ? U - I : U - ie : 0;
    return {
      [m]: b[m] + re,
      data: {
        [m]: Q,
        centerOffset: U - Q - re,
        ...J && {
          alignmentOffset: re
        }
      },
      reset: J
    };
  }
});
function $c(e, t, r) {
  return (e ? [...r.filter((s) => le(s) === e), ...r.filter((s) => le(s) !== e)] : r.filter((s) => pe(s) === s)).filter((s) => e ? le(s) === e || (t ? Tt(s) !== s : !1) : !0);
}
const Sc = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var r, o, s;
      const {
        rects: n,
        middlewareData: a,
        placement: l,
        platform: i,
        elements: d
      } = t, {
        crossAxis: u = !1,
        alignment: f,
        allowedPlacements: b = Rr,
        autoAlignment: m = !0,
        ...v
      } = Ne(e, t), k = f !== void 0 || b === Rr ? $c(f || null, m, b) : b, $ = await Ot(t, v), S = ((r = a.autoPlacement) == null ? void 0 : r.index) || 0, P = k[S];
      if (P == null)
        return {};
      const A = Mo(P, n, await (i.isRTL == null ? void 0 : i.isRTL(d.floating)));
      if (l !== P)
        return {
          reset: {
            placement: k[0]
          }
        };
      const L = [$[pe(P)], $[A[0]], $[A[1]]], _ = [...((o = a.autoPlacement) == null ? void 0 : o.overflows) || [], {
        placement: P,
        overflows: L
      }], E = k[S + 1];
      if (E)
        return {
          data: {
            index: S + 1,
            overflows: _
          },
          reset: {
            placement: E
          }
        };
      const z = _.map((H) => {
        const q = le(H.placement);
        return [H.placement, q && u ? (
          // Check along the mainAxis and main crossAxis side.
          H.overflows.slice(0, 2).reduce((I, ie) => I + ie, 0)
        ) : (
          // Check only the mainAxis.
          H.overflows[0]
        ), H.overflows];
      }).sort((H, q) => H[1] - q[1]), G = ((s = z.filter((H) => H[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        le(H[0]) ? 2 : 3
      ).every((q) => q <= 0))[0]) == null ? void 0 : s[0]) || z[0][0];
      return G !== l ? {
        data: {
          index: S + 1,
          overflows: _
        },
        reset: {
          placement: G
        }
      } : {};
    }
  };
}, Tc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, o;
      const {
        placement: s,
        middlewareData: n,
        rects: a,
        initialPlacement: l,
        platform: i,
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: b,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: k = !0,
        ...$
      } = Ne(e, t);
      if ((r = n.arrow) != null && r.alignmentOffset)
        return {};
      const S = pe(s), P = pe(l) === l, A = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), L = b || (P || !k ? [Pt(l)] : yc(l));
      !b && v !== "none" && L.push(...xc(l, k, v, A));
      const _ = [l, ...L], E = await Ot(t, $), z = [];
      let N = ((o = n.flip) == null ? void 0 : o.overflows) || [];
      if (u && z.push(E[S]), f) {
        const I = Mo(s, a, A);
        z.push(E[I[0]], E[I[1]]);
      }
      if (N = [...N, {
        placement: s,
        overflows: z
      }], !z.every((I) => I <= 0)) {
        var G, H;
        const I = (((G = n.flip) == null ? void 0 : G.index) || 0) + 1, ie = _[I];
        if (ie)
          return {
            data: {
              index: I,
              overflows: N
            },
            reset: {
              placement: ie
            }
          };
        let U = (H = N.filter((Q) => Q.overflows[0] <= 0).sort((Q, J) => Q.overflows[1] - J.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!U)
          switch (m) {
            case "bestFit": {
              var q;
              const Q = (q = N.map((J) => [J.placement, J.overflows.filter((re) => re > 0).reduce((re, Ye) => re + Ye, 0)]).sort((J, re) => J[1] - re[1])[0]) == null ? void 0 : q[0];
              Q && (U = Q);
              break;
            }
            case "initialPlacement":
              U = l;
              break;
          }
        if (s !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
async function Pc(e, t) {
  const {
    placement: r,
    platform: o,
    elements: s
  } = e, n = await (o.isRTL == null ? void 0 : o.isRTL(s.floating)), a = pe(r), l = le(r), i = ft(r) === "y", d = ["left", "top"].includes(a) ? -1 : 1, u = n && i ? -1 : 1, f = Ne(t, e);
  let {
    mainAxis: b,
    crossAxis: m,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return l && typeof v == "number" && (m = l === "end" ? v * -1 : v), i ? {
    x: m * u,
    y: b * d
  } : {
    x: b * d,
    y: m * u
  };
}
const zc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, o;
      const {
        x: s,
        y: n,
        placement: a,
        middlewareData: l
      } = t, i = await Pc(t, e);
      return a === ((r = l.offset) == null ? void 0 : r.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
        x: s + i.x,
        y: n + i.y,
        data: {
          ...i,
          placement: a
        }
      };
    }
  };
}, Ac = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: o,
        placement: s
      } = t, {
        mainAxis: n = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: ($) => {
            let {
              x: S,
              y: P
            } = $;
            return {
              x: S,
              y: P
            };
          }
        },
        ...i
      } = Ne(e, t), d = {
        x: r,
        y: o
      }, u = await Ot(t, i), f = ft(pe(s)), b = Bo(f);
      let m = d[b], v = d[f];
      if (n) {
        const $ = b === "y" ? "top" : "left", S = b === "y" ? "bottom" : "right", P = m + u[$], A = m - u[S];
        m = qt(P, m, A);
      }
      if (a) {
        const $ = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", P = v + u[$], A = v - u[S];
        v = qt(P, v, A);
      }
      const k = l.fn({
        ...t,
        [b]: m,
        [f]: v
      });
      return {
        ...k,
        data: {
          x: k.x - r,
          y: k.y - o
        }
      };
    }
  };
}, Fc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: r,
        rects: o,
        platform: s,
        elements: n
      } = t, {
        apply: a = () => {
        },
        ...l
      } = Ne(e, t), i = await Ot(t, l), d = pe(r), u = le(r), f = ft(r) === "y", {
        width: b,
        height: m
      } = o.floating;
      let v, k;
      d === "top" || d === "bottom" ? (v = d, k = u === (await (s.isRTL == null ? void 0 : s.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (k = d, v = u === "end" ? "top" : "bottom");
      const $ = m - i.top - i.bottom, S = b - i.left - i.right, P = Be(m - i[v], $), A = Be(b - i[k], S), L = !t.middlewareData.shift;
      let _ = P, E = A;
      if (f ? E = u || L ? Be(A, S) : S : _ = u || L ? Be(P, $) : $, L && !u) {
        const N = Ae(i.left, 0), G = Ae(i.right, 0), H = Ae(i.top, 0), q = Ae(i.bottom, 0);
        f ? E = b - 2 * (N !== 0 || G !== 0 ? N + G : Ae(i.left, i.right)) : _ = m - 2 * (H !== 0 || q !== 0 ? H + q : Ae(i.top, i.bottom));
      }
      await a({
        ...t,
        availableWidth: E,
        availableHeight: _
      });
      const z = await s.getDimensions(n.floating);
      return b !== z.width || m !== z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function oe(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ue(e) {
  return oe(e).getComputedStyle(e);
}
const Vr = Math.min, st = Math.max, zt = Math.round;
function Lo(e) {
  const t = ue(e);
  let r = parseFloat(t.width), o = parseFloat(t.height);
  const s = e.offsetWidth, n = e.offsetHeight, a = zt(r) !== s || zt(o) !== n;
  return a && (r = s, o = n), { width: r, height: o, fallback: a };
}
function Se(e) {
  return No(e) ? (e.nodeName || "").toLowerCase() : "";
}
let yt;
function Eo() {
  if (yt)
    return yt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (yt = e.brands.map((t) => t.brand + "/" + t.version).join(" "), yt) : navigator.userAgent;
}
function ce(e) {
  return e instanceof oe(e).HTMLElement;
}
function ke(e) {
  return e instanceof oe(e).Element;
}
function No(e) {
  return e instanceof oe(e).Node;
}
function Hr(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof oe(e).ShadowRoot || e instanceof ShadowRoot;
}
function Lt(e) {
  const { overflow: t, overflowX: r, overflowY: o, display: s } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + r) && !["inline", "contents"].includes(s);
}
function Ic(e) {
  return ["table", "td", "th"].includes(Se(e));
}
function Ut(e) {
  const t = /firefox/i.test(Eo()), r = ue(e), o = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!o && o !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((s) => r.willChange.includes(s)) || ["paint", "layout", "strict", "content"].some((s) => {
    const n = r.contain;
    return n != null && n.includes(s);
  });
}
function Ro() {
  return !/^((?!chrome|android).)*safari/i.test(Eo());
}
function pr(e) {
  return ["html", "body", "#document"].includes(Se(e));
}
function jo(e) {
  return ke(e) ? e : e.contextElement;
}
const Vo = { x: 1, y: 1 };
function Ve(e) {
  const t = jo(e);
  if (!ce(t))
    return Vo;
  const r = t.getBoundingClientRect(), { width: o, height: s, fallback: n } = Lo(t);
  let a = (n ? zt(r.width) : r.width) / o, l = (n ? zt(r.height) : r.height) / s;
  return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), { x: a, y: l };
}
function dt(e, t, r, o) {
  var s, n;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), l = jo(e);
  let i = Vo;
  t && (o ? ke(o) && (i = Ve(o)) : i = Ve(e));
  const d = l ? oe(l) : window, u = !Ro() && r;
  let f = (a.left + (u && ((s = d.visualViewport) == null ? void 0 : s.offsetLeft) || 0)) / i.x, b = (a.top + (u && ((n = d.visualViewport) == null ? void 0 : n.offsetTop) || 0)) / i.y, m = a.width / i.x, v = a.height / i.y;
  if (l) {
    const k = oe(l), $ = o && ke(o) ? oe(o) : o;
    let S = k.frameElement;
    for (; S && o && $ !== k; ) {
      const P = Ve(S), A = S.getBoundingClientRect(), L = getComputedStyle(S);
      A.x += (S.clientLeft + parseFloat(L.paddingLeft)) * P.x, A.y += (S.clientTop + parseFloat(L.paddingTop)) * P.y, f *= P.x, b *= P.y, m *= P.x, v *= P.y, f += A.x, b += A.y, S = oe(S).frameElement;
    }
  }
  return { width: m, height: v, top: b, right: f + m, bottom: b + v, left: f, x: f, y: b };
}
function _e(e) {
  return ((No(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Et(e) {
  return ke(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ho(e) {
  return dt(_e(e)).left + Et(e).scrollLeft;
}
function ut(e) {
  if (Se(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Hr(e) && e.host || _e(e);
  return Hr(t) ? t.host : t;
}
function Do(e) {
  const t = ut(e);
  return pr(t) ? t.ownerDocument.body : ce(t) && Lt(t) ? t : Do(t);
}
function At(e, t) {
  var r;
  t === void 0 && (t = []);
  const o = Do(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), n = oe(o);
  return s ? t.concat(n, n.visualViewport || [], Lt(o) ? o : []) : t.concat(o, At(o));
}
function Dr(e, t, r) {
  return t === "viewport" ? ot(function(o, s) {
    const n = oe(o), a = _e(o), l = n.visualViewport;
    let i = a.clientWidth, d = a.clientHeight, u = 0, f = 0;
    if (l) {
      i = l.width, d = l.height;
      const b = Ro();
      (b || !b && s === "fixed") && (u = l.offsetLeft, f = l.offsetTop);
    }
    return { width: i, height: d, x: u, y: f };
  }(e, r)) : ke(t) ? ot(function(o, s) {
    const n = dt(o, !0, s === "fixed"), a = n.top + o.clientTop, l = n.left + o.clientLeft, i = ce(o) ? Ve(o) : { x: 1, y: 1 };
    return { width: o.clientWidth * i.x, height: o.clientHeight * i.y, x: l * i.x, y: a * i.y };
  }(t, r)) : ot(function(o) {
    const s = _e(o), n = Et(o), a = o.ownerDocument.body, l = st(s.scrollWidth, s.clientWidth, a.scrollWidth, a.clientWidth), i = st(s.scrollHeight, s.clientHeight, a.scrollHeight, a.clientHeight);
    let d = -n.scrollLeft + Ho(o);
    const u = -n.scrollTop;
    return ue(a).direction === "rtl" && (d += st(s.clientWidth, a.clientWidth) - l), { width: l, height: i, x: d, y: u };
  }(_e(e)));
}
function Wr(e) {
  return ce(e) && ue(e).position !== "fixed" ? e.offsetParent : null;
}
function Gr(e) {
  const t = oe(e);
  let r = Wr(e);
  for (; r && Ic(r) && ue(r).position === "static"; )
    r = Wr(r);
  return r && (Se(r) === "html" || Se(r) === "body" && ue(r).position === "static" && !Ut(r)) ? t : r || function(o) {
    let s = ut(o);
    for (; ce(s) && !pr(s); ) {
      if (Ut(s))
        return s;
      s = ut(s);
    }
    return null;
  }(e) || t;
}
function Bc(e, t, r) {
  const o = ce(t), s = _e(t), n = dt(e, !0, r === "fixed", t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (o || !o && r !== "fixed")
    if ((Se(t) !== "body" || Lt(s)) && (a = Et(t)), ce(t)) {
      const i = dt(t, !0);
      l.x = i.x + t.clientLeft, l.y = i.y + t.clientTop;
    } else
      s && (l.x = Ho(s));
  return { x: n.left + a.scrollLeft - l.x, y: n.top + a.scrollTop - l.y, width: n.width, height: n.height };
}
const Mc = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: o, strategy: s } = e;
  const n = r === "clippingAncestors" ? function(d, u) {
    const f = u.get(d);
    if (f)
      return f;
    let b = At(d).filter(($) => ke($) && Se($) !== "body"), m = null;
    const v = ue(d).position === "fixed";
    let k = v ? ut(d) : d;
    for (; ke(k) && !pr(k); ) {
      const $ = ue(k), S = Ut(k);
      (v ? S || m : S || $.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = $ : b = b.filter((P) => P !== k), k = ut(k);
    }
    return u.set(d, b), b;
  }(t, this._c) : [].concat(r), a = [...n, o], l = a[0], i = a.reduce((d, u) => {
    const f = Dr(t, u, s);
    return d.top = st(f.top, d.top), d.right = Vr(f.right, d.right), d.bottom = Vr(f.bottom, d.bottom), d.left = st(f.left, d.left), d;
  }, Dr(t, l, s));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: o } = e;
  const s = ce(r), n = _e(r);
  if (r === n)
    return t;
  let a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 1, y: 1 };
  const i = { x: 0, y: 0 };
  if ((s || !s && o !== "fixed") && ((Se(r) !== "body" || Lt(n)) && (a = Et(r)), ce(r))) {
    const d = dt(r);
    l = Ve(r), i.x = d.x + r.clientLeft, i.y = d.y + r.clientTop;
  }
  return { width: t.width * l.x, height: t.height * l.y, x: t.x * l.x - a.scrollLeft * l.x + i.x, y: t.y * l.y - a.scrollTop * l.y + i.y };
}, isElement: ke, getDimensions: function(e) {
  return ce(e) ? Lo(e) : e.getBoundingClientRect();
}, getOffsetParent: Gr, getDocumentElement: _e, getScale: Ve, async getElementRects(e) {
  let { reference: t, floating: r, strategy: o } = e;
  const s = this.getOffsetParent || Gr, n = this.getDimensions;
  return { reference: Bc(t, await s(r), o), floating: { x: 0, y: 0, ...await n(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => ue(e).direction === "rtl" }, Oc = (e, t, r) => {
  const o = /* @__PURE__ */ new Map(), s = { platform: Mc, ...r }, n = { ...s.platform, _c: o };
  return _c(e, t, { ...s, platform: n });
}, Me = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function Yt(e, t) {
  let r = Me.themes[e] || {}, o;
  do
    o = r[t], typeof o > "u" ? r.$extend ? r = Me.themes[r.$extend] || {} : (r = null, o = Me[t]) : r = null;
  while (r);
  return o;
}
function Lc(e) {
  const t = [e];
  let r = Me.themes[e] || {};
  do
    r.$extend && !r.$resetCss ? (t.push(r.$extend), r = Me.themes[r.$extend] || {}) : r = null;
  while (r);
  return t.map((o) => `v-popper--theme-${o}`);
}
function qr(e) {
  const t = [e];
  let r = Me.themes[e] || {};
  do
    r.$extend ? (t.push(r.$extend), r = Me.themes[r.$extend] || {}) : r = null;
  while (r);
  return t;
}
let ct = !1;
if (typeof window < "u") {
  ct = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        ct = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Wo = !1;
typeof window < "u" && typeof navigator < "u" && (Wo = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Ec = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Ur = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Yr = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Kr(e, t) {
  const r = e.indexOf(t);
  r !== -1 && e.splice(r, 1);
}
function Dt() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const ae = [];
let ze = null;
const Jr = {};
function Xr(e) {
  let t = Jr[e];
  return t || (t = Jr[e] = []), t;
}
let Kt = function() {
};
typeof window < "u" && (Kt = window.Element);
function M(e) {
  return function(t) {
    return Yt(t.theme, e);
  };
}
const Wt = "__floating-vue__popper", Go = () => C({
  name: "VPopper",
  provide() {
    return {
      [Wt]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Wt]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: M("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: M("positioningDisabled")
    },
    placement: {
      type: String,
      default: M("placement"),
      validator: (e) => Ec.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: M("delay")
    },
    distance: {
      type: [Number, String],
      default: M("distance")
    },
    skidding: {
      type: [Number, String],
      default: M("skidding")
    },
    triggers: {
      type: Array,
      default: M("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: M("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: M("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: M("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: M("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: M("popperHideTriggers")
    },
    container: {
      type: [String, Object, Kt, Boolean],
      default: M("container")
    },
    boundary: {
      type: [String, Kt],
      default: M("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: M("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: M("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: M("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: M("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: M("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: M("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: M("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: M("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: M("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: M("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: M("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: M("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: M("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: M("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: M("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: M("flip")
    },
    shift: {
      type: Boolean,
      default: M("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: M("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: M("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: M("disposeTimeout")
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0,
      pendingHide: !1,
      containsGlobalTarget: !1,
      isDisposed: !0,
      mouseDownContains: !1
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[Wt]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: !0
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: r = !1 } = {}) {
      var o, s;
      (o = this.parentPopper) != null && o.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (r || !this.disabled) && (((s = this.parentPopper) == null ? void 0 : s.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var r;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((r = this.parentPopper) == null ? void 0 : r.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(zc({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Sc({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Ac({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Tc({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Cc({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: o, rects: s, middlewareData: n }) => {
          let a;
          const { centerOffset: l } = n.arrow;
          return o.startsWith("top") || o.startsWith("bottom") ? a = Math.abs(l) > s.reference.width / 2 : a = Math.abs(l) > s.reference.height / 2, {
            data: {
              overflow: a
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const o = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: s, placement: n, middlewareData: a }) => {
            var l;
            if ((l = a.autoSize) != null && l.skip)
              return {};
            let i, d;
            return n.startsWith("top") || n.startsWith("bottom") ? i = s.reference.width : d = s.reference.height, this.$_innerNode.style[o === "min" ? "minWidth" : o === "max" ? "maxWidth" : "width"] = i != null ? `${i}px` : null, this.$_innerNode.style[o === "min" ? "minHeight" : o === "max" ? "maxHeight" : "height"] = d != null ? `${d}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Fc({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: o, availableHeight: s }) => {
          this.$_innerNode.style.maxWidth = o != null ? `${o}px` : null, this.$_innerNode.style.maxHeight = s != null ? `${s}px` : null;
        }
      })));
      const r = await Oc(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: r.x,
        y: r.y,
        placement: r.placement,
        strategy: r.strategy,
        arrow: {
          ...r.middlewareData.arrow,
          ...r.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ze && this.instantMove && ze.instantMove && ze !== this.parentPopper) {
        ze.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ze = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Dt(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...At(this.$_referenceNode),
        ...At(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), r = this.$_popperNode.querySelector(".v-popper__wrapper"), o = r.parentNode.getBoundingClientRect(), s = t.x + t.width / 2 - (o.left + r.offsetLeft), n = t.y + t.height / 2 - (o.top + r.offsetTop);
        this.result.transformOrigin = `${s}px ${n}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let r = 0; r < ae.length; r++)
          t = ae[r], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      ae.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of qr(this.theme))
        Xr(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Dt(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Kr(ae, this), ae.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const r of qr(this.theme)) {
        const o = Xr(r);
        Kr(o, this), o.length === 0 && document.body.classList.remove(`v-popper--some-open--${r}`);
      }
      ze === this && (ze = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Dt(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (r) => {
        this.isShown && !this.$_hideInProgress || (r.usedByTooltip = !0, !this.$_preventShow && this.show({ event: r }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ur, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ur, this.popperTriggers, this.popperShowTriggers, e);
      const t = (r) => {
        r.usedByTooltip || this.hide({ event: r });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Yr, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Yr, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, r) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: r }), e.forEach((o) => o.addEventListener(t, r, ct ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, r, o, s) {
      let n = r;
      o != null && (n = typeof o == "function" ? o(n) : o), n.forEach((a) => {
        const l = t[a];
        l && this.$_registerEventListeners(e, l, s);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((r) => {
        const { targetNodes: o, eventType: s, handler: n } = r;
        !e || e === s ? o.forEach((a) => a.removeEventListener(s, n)) : t.push(r);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const r of this.$_targetNodes) {
        const o = r.getAttribute(e);
        o && (r.removeAttribute(e), r.setAttribute(t, o));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const r in e) {
          const o = e[r];
          o == null ? t.removeAttribute(r) : t.setAttribute(r, o);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (nt >= e.left && nt <= e.right && at >= e.top && at <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), r = nt - ye, o = at - we, s = t.left + t.width / 2 - ye + (t.top + t.height / 2) - we + t.width + t.height, n = ye + r * s, a = we + o * s;
        return wt(ye, we, n, a, t.left, t.top, t.left, t.bottom) || // Left edge
        wt(ye, we, n, a, t.left, t.top, t.right, t.top) || // Top edge
        wt(ye, we, n, a, t.right, t.top, t.right, t.bottom) || // Right edge
        wt(ye, we, n, a, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Wo) {
    const e = ct ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Zr(t), e), document.addEventListener("touchend", (t) => Qr(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Zr(e), !0), window.addEventListener("click", (e) => Qr(e, !1), !0);
  window.addEventListener("resize", jc);
}
function Zr(e, t) {
  for (let r = 0; r < ae.length; r++) {
    const o = ae[r];
    try {
      o.mouseDownContains = o.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Qr(e, t) {
  Nc(e, t);
}
function Nc(e, t) {
  const r = {};
  for (let o = ae.length - 1; o >= 0; o--) {
    const s = ae[o];
    try {
      const n = s.containsGlobalTarget = s.mouseDownContains || s.popperNode().contains(e.target);
      s.pendingHide = !1, requestAnimationFrame(() => {
        if (s.pendingHide = !1, !r[s.randomId] && eo(s, n, e)) {
          if (s.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && n) {
            let l = s.parentPopper;
            for (; l; )
              r[l.randomId] = !0, l = l.parentPopper;
            return;
          }
          let a = s.parentPopper;
          for (; a && eo(a, a.containsGlobalTarget, e); )
            a.$_handleGlobalClose(e, t), a = a.parentPopper;
        }
      });
    } catch {
    }
  }
}
function eo(e, t, r) {
  return r.closeAllPopover || r.closePopover && t || Rc(e, r) && !t;
}
function Rc(e, t) {
  if (typeof e.autoHide == "function") {
    const r = e.autoHide(t);
    return e.lastAutoHide = r, r;
  }
  return e.autoHide;
}
function jc() {
  for (let e = 0; e < ae.length; e++)
    ae[e].$_computePosition();
}
let ye = 0, we = 0, nt = 0, at = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  ye = nt, we = at, nt = e.clientX, at = e.clientY;
}, ct ? {
  passive: !0
} : void 0);
function wt(e, t, r, o, s, n, a, l) {
  const i = ((a - s) * (t - n) - (l - n) * (e - s)) / ((l - n) * (r - e) - (a - s) * (o - t)), d = ((r - e) * (t - n) - (o - t) * (e - s)) / ((l - n) * (r - e) - (a - s) * (o - t));
  return i >= 0 && i <= 1 && d >= 0 && d <= 1;
}
const Vc = {
  extends: Go()
}, fr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, s] of t)
    r[o] = s;
  return r;
};
function Hc(e, t, r, o, s, n) {
  return c(), h("div", {
    ref: "reference",
    class: x(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    w(e.$slots, "default", Te(ao(e.slotData)))
  ], 2);
}
const Dc = /* @__PURE__ */ fr(Vc, [["render", Hc]]);
function Wc() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var r = e.indexOf("Trident/");
  if (r > 0) {
    var o = e.indexOf("rv:");
    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
  }
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let _t;
function Jt() {
  Jt.init || (Jt.init = !0, _t = Wc() !== -1);
}
var Nt = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    Jt(), Qt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", _t && this.$el.appendChild(e), e.data = "about:blank", _t || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!_t && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Gc = /* @__PURE__ */ ns("data-v-b329ee4c");
oo("data-v-b329ee4c");
const qc = {
  class: "resize-observer",
  tabindex: "-1"
};
so();
const Uc = /* @__PURE__ */ Gc((e, t, r, o, s, n) => (c(), D("div", qc)));
Nt.render = Uc;
Nt.__scopeId = "data-v-b329ee4c";
Nt.__file = "src/components/ResizeObserver.vue";
const qo = (e = "theme") => ({
  computed: {
    themeClass() {
      return Lc(this[e]);
    }
  }
}), Yc = C({
  name: "VPopperContent",
  components: {
    ResizeObserver: Nt
  },
  mixins: [
    qo()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), Kc = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Jc = {
  ref: "inner",
  class: "v-popper__inner"
}, Xc = /* @__PURE__ */ g("div", { class: "v-popper__arrow-outer" }, null, -1), Zc = /* @__PURE__ */ g("div", { class: "v-popper__arrow-inner" }, null, -1), Qc = [
  Xc,
  Zc
];
function e0(e, t, r, o, s, n) {
  const a = me("ResizeObserver");
  return c(), h("div", {
    id: e.popperId,
    ref: "popover",
    class: x(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: rt(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = no((l) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    g("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (l) => e.autoHide && e.$emit("hide"))
    }),
    g("div", {
      class: "v-popper__wrapper",
      style: rt(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      g("div", Jc, [
        e.mounted ? (c(), h(Y, { key: 0 }, [
          g("div", null, [
            w(e.$slots, "default")
          ]),
          e.handleResize ? (c(), D(a, {
            key: 0,
            onNotify: t[1] || (t[1] = (l) => e.$emit("resize", l))
          })) : T("", !0)
        ], 64)) : T("", !0)
      ], 512),
      g("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: rt(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Qc, 4)
    ], 4)
  ], 46, Kc);
}
const Uo = /* @__PURE__ */ fr(Yc, [["render", e0]]), Yo = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
let Xt = function() {
};
typeof window < "u" && (Xt = window.Element);
const t0 = C({
  name: "VPopperWrapper",
  components: {
    Popper: Dc,
    PopperContent: Uo
  },
  mixins: [
    Yo,
    qo("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, Xt, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Xt],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function r0(e, t, r, o, s, n) {
  const a = me("PopperContent"), l = me("Popper");
  return c(), D(l, X({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (i) => e.$emit("update:shown", i)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: j(({
      popperId: i,
      isShown: d,
      shouldMountContent: u,
      skipTransition: f,
      autoHide: b,
      show: m,
      hide: v,
      handleResize: k,
      onResize: $,
      classes: S,
      result: P
    }) => [
      w(e.$slots, "default", {
        shown: d,
        show: m,
        hide: v
      }),
      Fe(a, {
        ref: "popperContent",
        "popper-id": i,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": f,
        "auto-hide": b,
        "handle-resize": k,
        classes: S,
        result: P,
        onHide: v,
        onResize: $
      }, {
        default: j(() => [
          w(e.$slots, "popper", {
            shown: d,
            hide: v
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const gr = /* @__PURE__ */ fr(t0, [["render", r0]]);
({
  ...gr
});
({
  ...gr
});
const o0 = {
  ...gr,
  name: "VTooltip",
  vPopperTheme: "tooltip"
};
C({
  name: "VTooltipDirective",
  components: {
    Popper: Go(),
    PopperContent: Uo
  },
  mixins: [
    Yo
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => Yt(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => Yt(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, r = this.content(this);
        r.then ? r.then((o) => this.onResult(t, o)) : this.onResult(t, r);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const s0 = o0, n0 = { class: "flex items-start" }, Cf = /* @__PURE__ */ C({
  __name: "FwbTooltip",
  props: {
    placement: { default: "top" },
    theme: { default: "dark" },
    trigger: { default: "hover" }
  },
  setup(e) {
    const t = e, r = p(() => ({
      light: "tooltip-light",
      dark: "tooltip-dark"
    })[t.theme]);
    return (o, s) => (c(), h("div", n0, [
      Fe(y(s0), {
        placement: o.placement,
        triggers: [o.trigger],
        theme: r.value,
        "auto-hide": ""
      }, {
        popper: j(() => [
          w(o.$slots, "content")
        ]),
        default: j(() => [
          w(o.$slots, "trigger")
        ]),
        _: 3
      }, 8, ["placement", "triggers", "theme"])
    ]));
  }
}), a0 = "block text-sm font-medium text-gray-900 dark:text-gray-300", l0 = "w-4 h-4 rounded bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500";
function i0() {
  const e = p(() => se(l0)), t = p(() => a0);
  return {
    checkboxClasses: e,
    labelClasses: t
  };
}
const d0 = { class: "flex gap-3 items-center justify-start" }, u0 = ["disabled"], $f = /* @__PURE__ */ C({
  __name: "FwbCheckbox",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, s = p({
      get() {
        return r.modelValue;
      },
      set(l) {
        o("update:modelValue", l);
      }
    }), {
      checkboxClasses: n,
      labelClasses: a
    } = i0();
    return (l, i) => (c(), h("label", d0, [
      Pe(g("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d),
        class: x(y(n)),
        disabled: l.disabled,
        type: "checkbox"
      }, null, 10, u0), [
        [lo, s.value]
      ]),
      l.label ? (c(), h("span", {
        key: 0,
        class: x(y(a))
      }, B(l.label), 3)) : T("", !0),
      w(l.$slots, "default")
    ]));
  }
}), c0 = "block w-full text-sm text-gray-900 border-[1px] border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400", p0 = "block mb-2 text-sm font-medium text-gray-900 dark:text-white", f0 = "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600", g0 = "flex flex-col items-center justify-center pt-5 pb-6", h0 = "!-mb-2 text-sm text-gray-500 dark:text-gray-400";
function m0(e) {
  const t = p(() => se(
    c0,
    "text-" + e
  )), r = p(() => p0), o = p(() => f0), s = p(() => g0), n = p(() => h0);
  return {
    fileInpClasses: t,
    labelClasses: r,
    dropzoneLabelClasses: o,
    dropzoneWrapClasses: s,
    dropzoneTextClasses: n
  };
}
const b0 = { key: 0 }, v0 = ["multiple", "accept"], y0 = /* @__PURE__ */ g("svg", {
  "aria-hidden": "true",
  class: "w-8 h-8 text-gray-500 dark:text-gray-400",
  fill: "none",
  viewBox: "0 0 20 16",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ g("path", {
    d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    stroke: "currentColor"
  })
], -1), w0 = { key: 0 }, x0 = /* @__PURE__ */ g("span", { class: "font-semibold" }, "Click to upload", -1), k0 = { key: 1 }, _0 = ["multiple", "accept"], Sf = /* @__PURE__ */ C({
  __name: "FwbFileInput",
  props: {
    dropzone: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { default: null },
    multiple: { type: Boolean, default: !1 },
    size: { default: "sm" },
    accept: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = p(() => qe(r.modelValue) ? r.modelValue.map((v) => v.name).join(", ") : r.modelValue instanceof FileList ? Array.from(r.modelValue).map((v) => v.name).join(",") : r.modelValue instanceof File && r.modelValue.name || ""), s = t, n = p({
      get() {
        return r.modelValue;
      },
      set(v) {
        s("update:modelValue", v);
      }
    }), a = (v) => {
      const k = v.target;
      r.multiple ? n.value = Array.from(k.files ?? []) : n.value = k.files?.[0] ?? null;
    }, l = (v) => {
      v.preventDefault();
      const k = [];
      v.dataTransfer?.items ? (Object.values(v.dataTransfer.items).forEach(($) => {
        $.kind === "file" && k.push($.getAsFile());
      }), r.multiple ? n.value = k : n.value = k[0]) : v.dataTransfer?.files && Object.values(v.dataTransfer.files).forEach(($) => {
        n.value = $;
      });
    }, i = (v) => {
      v.preventDefault();
    }, {
      fileInpClasses: d,
      labelClasses: u,
      dropzoneLabelClasses: f,
      dropzoneWrapClasses: b,
      dropzoneTextClasses: m
    } = m0(r.size);
    return (v, k) => (c(), h("div", null, [
      v.dropzone ? (c(), h("div", {
        key: 1,
        class: "flex items-center justify-center",
        onChange: a,
        onDragover: i,
        onDrop: l
      }, [
        g("label", {
          class: x(y(f))
        }, [
          g("div", {
            class: x(y(b))
          }, [
            y0,
            n.value ? (c(), h("p", k0, "File: " + B(o.value), 1)) : (c(), h("div", w0, [
              g("p", {
                class: x(y(m))
              }, [
                x0,
                ee(" or drag and drop ")
              ], 2),
              w(v.$slots, "default")
            ]))
          ], 2),
          g("input", {
            multiple: v.multiple,
            type: "file",
            accept: v.accept,
            class: "hidden"
          }, null, 8, _0)
        ], 2)
      ], 32)) : (c(), h("div", b0, [
        g("label", null, [
          g("span", {
            class: x(y(u))
          }, B(v.label), 3),
          g("input", {
            class: x(y(d)),
            multiple: v.multiple,
            type: "file",
            accept: v.accept,
            onChange: a
          }, null, 42, v0)
        ]),
        w(v.$slots, "default")
      ]))
    ]));
  }
}), je = {
  Success: "success",
  Error: "error"
}, C0 = "block mb-2 text-sm font-medium", $0 = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", S0 = "cursor-not-allowed bg-gray-100", T0 = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, P0 = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", z0 = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function A0(e) {
  const t = p(() => {
    const o = e.validationStatus.value, s = o === je.Success ? P0 : o === je.Error ? z0 : "";
    return O(
      $0,
      s,
      T0[e.size.value],
      e.disabled.value ? S0 : ""
    );
  }), r = p(() => {
    const o = e.validationStatus.value, s = o === je.Success ? "text-green-700 dark:text-green-500" : o === je.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return O(C0, s);
  });
  return {
    inputClasses: t,
    labelClasses: r
  };
}
const F0 = { class: "flex relative" }, I0 = {
  key: 0,
  class: "w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
}, B0 = ["disabled", "type", "required"], M0 = {
  key: 1,
  class: "absolute right-2.5 bottom-2.5"
}, O0 = {
  key: 2,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, Tf = /* @__PURE__ */ C({
  __name: "FwbInput",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { default: "" },
    required: { type: Boolean, default: !1 },
    size: { default: "md" },
    type: { default: "text" },
    validationStatus: { default: void 0 }
  },
  setup(e) {
    const t = e, r = yo(t, "modelValue"), { inputClasses: o, labelClasses: s } = A0(K(t)), n = p(() => O(
      "mt-2 text-sm",
      t.validationStatus === je.Success ? "text-green-600 dark:text-green-500" : "",
      t.validationStatus === je.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (a, l) => (c(), h("div", null, [
      a.label ? (c(), h("label", {
        key: 0,
        class: x(y(s))
      }, B(a.label), 3)) : T("", !0),
      g("div", F0, [
        a.$slots.prefix ? (c(), h("div", I0, [
          w(a.$slots, "prefix")
        ])) : T("", !0),
        Pe(g("input", X(a.$attrs, {
          "onUpdate:modelValue": l[0] || (l[0] = (i) => Zt(r) ? r.value = i : null),
          disabled: a.disabled,
          type: a.type,
          required: a.required,
          class: [y(o), a.$slots.prefix ? "pl-10" : ""]
        }), null, 16, B0), [
          [as, y(r)]
        ]),
        a.$slots.suffix ? (c(), h("div", M0, [
          w(a.$slots, "suffix")
        ])) : T("", !0)
      ]),
      a.$slots.validationMessage ? (c(), h("p", {
        key: 1,
        class: x(n.value)
      }, [
        w(a.$slots, "validationMessage")
      ], 2)) : T("", !0),
      a.$slots.helper ? (c(), h("p", O0, [
        w(a.$slots, "helper")
      ])) : T("", !0)
    ]));
  }
}), L0 = { class: "flex w-[100%] items-center" }, E0 = ["disabled", "name", "value"], N0 = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600", R0 = "m-2 mr-0 text-sm font-medium text-gray-900 dark:text-gray-300", Pf = /* @__PURE__ */ C({
  __name: "FwbRadio",
  props: {
    modelValue: { default: "" },
    name: { default: "" },
    value: { default: "" },
    label: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, s = p({
      get() {
        return r.modelValue;
      },
      set(l) {
        o("update:modelValue", l);
      }
    }), n = p(() => N0), a = p(() => O(R0, r.disabled && "text-gray-400 dark:text-gray-500"));
    return (l, i) => (c(), h("label", L0, [
      Pe(g("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d),
        type: "radio",
        disabled: l.disabled,
        name: l.name,
        value: l.value,
        class: x(n.value)
      }, null, 10, E0), [
        [ls, s.value]
      ]),
      g("span", {
        class: x(a.value)
      }, B(l.label), 3),
      w(l.$slots, "default")
    ]));
  }
}), j0 = "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700", V0 = "block mb-2 text-sm font-medium text-gray-900 dark:text-white", H0 = {
  lg: "h-3 range-lg",
  md: "h-2 range-md",
  sm: "h-1 range-sm"
};
function D0(e) {
  const t = p(() => se(
    j0,
    H0[e.size.value]
  )), r = p(() => V0);
  return {
    rangeClasses: t,
    labelClasses: r
  };
}
const W0 = { class: "flex flex-col" }, G0 = ["step", "min", "max", "disabled"], q0 = /* @__PURE__ */ C({
  __name: "FwbRange",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: { default: "Range slider" },
    max: { default: 100 },
    min: { default: 0 },
    modelValue: { default: 50 },
    size: { default: "md" },
    steps: { default: 1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, s = p({
      get() {
        return r.modelValue;
      },
      set(l) {
        o("update:modelValue", l);
      }
    }), { rangeClasses: n, labelClasses: a } = D0(K(r));
    return (l, i) => (c(), h("label", W0, [
      g("span", {
        class: x(y(a))
      }, B(l.label), 3),
      Pe(g("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (d) => s.value = d),
        step: l.steps,
        min: l.min,
        max: l.max,
        disabled: l.disabled,
        type: "range",
        class: x(y(n))
      }, null, 10, G0), [
        [io, s.value]
      ])
    ]));
  }
}), zf = /* @__PURE__ */ fe(q0, [["__scopeId", "data-v-c4cfe3d4"]]), xe = {
  Success: "success",
  Error: "error"
}, U0 = "block mb-2 text-sm font-medium", Y0 = "w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500", K0 = "cursor-not-allowed bg-gray-100", J0 = "bg-transparent dark:bg-transparent border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer", X0 = {
  lg: "p-4",
  md: "p-2.5 text-sm",
  sm: "p-2 text-sm"
}, Z0 = "bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500", Q0 = "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
function ep(e) {
  const t = p(() => {
    const o = e.validationStatus.value, s = o === xe.Success ? Z0 : o === xe.Error ? Q0 : "", n = o === xe.Success ? "focus:border-green-500" : o === xe.Error ? "focus:border-red-500" : "";
    return O(
      Y0,
      s,
      X0[e.size.value],
      e.disabled.value && K0,
      e.underline.value ? J0 : "border border-gray-300 rounded-lg",
      e.underline.value && n
    );
  }), r = p(() => {
    const o = e.validationStatus.value, s = o === xe.Success ? "text-green-700 dark:text-green-500" : o === xe.Error ? "text-red-700 dark:text-red-500" : "text-gray-900 dark:text-white";
    return O(U0, s);
  });
  return {
    selectClasses: t,
    labelClasses: r
  };
}
const tp = ["disabled"], rp = {
  disabled: "",
  selected: "",
  value: ""
}, op = ["value"], sp = {
  key: 1,
  class: "mt-2 text-sm text-gray-500 dark:text-gray-400"
}, Af = /* @__PURE__ */ C({
  __name: "FwbSelect",
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    options: { default: () => [] },
    placeholder: { default: "Please select one" },
    disabled: { type: Boolean, default: !1 },
    underline: { type: Boolean, default: !1 },
    size: { default: "md" },
    validationStatus: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, s = yo(r, "modelValue", t), { selectClasses: n, labelClasses: a } = ep(K(r)), l = p(() => O(
      "mt-2 text-sm",
      r.validationStatus === xe.Success ? "text-green-600 dark:text-green-500" : "",
      r.validationStatus === xe.Error ? "text-red-600 dark:text-red-500" : ""
    ));
    return (i, d) => (c(), h("div", null, [
      g("label", null, [
        i.label ? (c(), h("span", {
          key: 0,
          class: x(y(a))
        }, B(i.label), 3)) : T("", !0),
        Pe(g("select", {
          "onUpdate:modelValue": d[0] || (d[0] = (u) => Zt(s) ? s.value = u : null),
          disabled: i.disabled,
          class: x(y(n))
        }, [
          g("option", rp, B(i.placeholder), 1),
          (c(!0), h(Y, null, Oe(i.options, (u, f) => (c(), h("option", {
            key: f,
            value: u.value
          }, B(u.name), 9, op))), 128))
        ], 10, tp), [
          [is, y(s)]
        ])
      ]),
      i.$slots.validationMessage ? (c(), h("p", {
        key: 0,
        class: x(l.value)
      }, [
        w(i.$slots, "validationMessage")
      ], 2)) : T("", !0),
      i.$slots.helper ? (c(), h("p", sp, [
        w(i.$slots, "helper")
      ])) : T("", !0)
    ]));
  }
}), np = "block w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600", ap = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", lp = "block mb-2 text-sm font-medium text-gray-900 dark:text-white", ip = "block py-2 px-3 border-gray-200 dark:border-gray-600";
function dp(e) {
  const t = p(() => se(
    ap,
    e ? "bg-white dark:bg-gray-800 border-none" : "border"
  )), r = p(() => lp), o = p(() => e ? np : ""), s = p(() => ip);
  return {
    textareaClasses: t,
    labelClasses: r,
    wrapperClasses: o,
    footerClasses: s
  };
}
const up = ["rows", "placeholder"], Ff = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbTextarea",
  props: {
    modelValue: { default: "" },
    label: { default: "Your message" },
    rows: { default: 4 },
    custom: { type: Boolean, default: !1 },
    placeholder: { default: "Write your message here..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, s = p({
      get() {
        return r.modelValue;
      },
      set(d) {
        o("update:modelValue", d);
      }
    }), { textareaClasses: n, labelClasses: a, wrapperClasses: l, footerClasses: i } = dp(r.custom);
    return (d, u) => (c(), h("label", null, [
      g("span", {
        class: x(y(a))
      }, B(d.label), 3),
      g("span", {
        class: x(y(l))
      }, [
        Pe(g("textarea", X({
          "onUpdate:modelValue": u[0] || (u[0] = (f) => s.value = f)
        }, d.$attrs, {
          class: y(n),
          rows: d.rows,
          placeholder: d.placeholder
        }), null, 16, up), [
          [io, s.value]
        ]),
        d.$slots.footer ? (c(), h("span", {
          key: 0,
          class: x(y(i))
        }, [
          w(d.$slots, "footer")
        ], 2)) : T("", !0)
      ], 2)
    ]));
  }
}), cp = "w-fit relative inline-flex items-center cursor-pointer", pp = 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600', fp = "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300", gp = {
  lg: "w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6",
  md: "w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5",
  sm: "w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4"
}, hp = {
  red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
  green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
  purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
  yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
  teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
  orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
};
function mp(e) {
  const t = p(() => cp), r = p(() => pp), o = p(() => gp[e.size.value]), s = p(() => hp[e.color.value]), n = p(() => fp);
  return {
    labelClasses: t,
    toggleSize: o,
    toggleClasses: r,
    toggleColor: s,
    toggleBallClasses: n
  };
}
const bp = ["disabled"], If = /* @__PURE__ */ C({
  __name: "FwbToggle",
  props: {
    color: { default: "" },
    disabled: { type: Boolean, default: !1 },
    label: { default: "" },
    modelValue: { type: Boolean, default: !1 },
    size: { default: "md" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, s = p({
      get() {
        return r.modelValue;
      },
      set(u) {
        o("update:modelValue", u);
      }
    }), {
      labelClasses: n,
      toggleSize: a,
      toggleClasses: l,
      toggleColor: i,
      toggleBallClasses: d
    } = mp(K(r));
    return (u, f) => (c(), h("label", {
      class: x(y(n))
    }, [
      Pe(g("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (b) => s.value = b),
        disabled: u.disabled,
        class: "sr-only peer",
        type: "checkbox"
      }, null, 8, bp), [
        [lo, s.value]
      ]),
      g("span", {
        class: x([y(l), y(a), y(i)])
      }, null, 2),
      g("span", {
        class: x(y(d))
      }, B(u.label), 3)
    ], 2));
  }
}), vp = ["href"], Bf = /* @__PURE__ */ C({
  __name: "FwbA",
  props: {
    href: { default: "" },
    color: { default: "text-primary-600 dark:text-primary-500" }
  },
  setup(e) {
    return (t, r) => (c(), h("a", {
      href: t.href,
      class: x([t.color, "inline-flex items-center hover:underline"])
    }, [
      w(t.$slots, "default")
    ], 10, vp));
  }
}), Mf = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "FwbHeading",
  props: {
    tag: { default: "h1" },
    color: { default: "text-gray-900 dark:text-white" },
    customSize: { default: "" }
  },
  setup(e) {
    const t = e, r = {
      h1: "text-5xl font-extrabold",
      h2: "text-4xl font-bold",
      h3: "text-3xl font-bold",
      h4: "text-2xl font-bold",
      h5: "text-xl font-bold",
      h6: "text-lg font-bold"
    }, o = ne(), s = O(
      "w-full",
      r[t.tag],
      t.color,
      t.customSize,
      o.class
    ), n = t.tag;
    return (a, l) => (c(), D(Z(y(n)), X(a.$attrs, { class: y(s) }), {
      default: j(() => [
        w(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yp = ["src", "alt"], wp = ["src", "alt"], Of = /* @__PURE__ */ C({
  __name: "FwbImg",
  props: {
    caption: { default: "" },
    src: { default: "" },
    size: { default: "max-w-full" },
    alt: { default: "" },
    imgClass: { default: "h-auto" },
    alignment: { default: "" },
    captionClass: { default: "mt-2 text-sm text-center text-gray-500 dark:text-gray-400" }
  },
  setup(e) {
    return (t, r) => t.caption ? (c(), h("figure", {
      key: 0,
      class: x(t.size)
    }, [
      g("img", {
        src: t.src,
        alt: t.alt,
        class: x([t.size, t.alignment, t.imgClass])
      }, null, 10, yp),
      g("figcaption", {
        class: x(t.captionClass)
      }, B(t.caption), 3)
    ], 2)) : (c(), h("img", {
      key: 1,
      src: t.src,
      alt: t.alt,
      class: x([t.size, t.alignment, t.imgClass])
    }, null, 10, wp));
  }
}), xp = "mb-3 last:mb-0 text-gray-900 dark:text-white leading-normal", Lf = /* @__PURE__ */ C({
  __name: "FwbP",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const t = e, r = p(() => he([
      xp,
      t.class
    ]));
    return (o, s) => (c(), h("p", {
      class: x(r.value)
    }, [
      w(o.$slots, "default")
    ], 2));
  }
}), Ef = /* @__PURE__ */ C({
  __name: "FlowbiteThemable",
  props: {
    theme: { default: "blue" }
  },
  setup(e) {
    return de(Ao, He(e, "theme")), (r, o) => w(r.$slots, "default");
  }
});
function Nf() {
  const e = te(Io, null);
  return e === null && console.warn("Cannot use useToast outside <toast-provider> component. Please wrap your component with <toast-provider>"), {
    add: (s) => e ? e?.add(s) : "",
    remove: (s) => e ? e?.remove(s) : !1,
    pop: () => e ? e?.pop() : ""
  };
}
export {
  Ef as FlowbiteThemable,
  rc as FlowbiteThemableChild,
  Bf as FwbA,
  _p as FwbAccordion,
  Cp as FwbAccordionContent,
  $p as FwbAccordionHeader,
  Sp as FwbAccordionPanel,
  Tp as FwbAlert,
  Pp as FwbAvatar,
  zp as FwbAvatarStack,
  Ap as FwbAvatarStackCounter,
  Fp as FwbBadge,
  Ip as FwbBreadcrumb,
  Bp as FwbBreadcrumbItem,
  ia as FwbButton,
  Mp as FwbButtonGroup,
  Op as FwbCard,
  Lp as FwbCarousel,
  $f as FwbCheckbox,
  Ep as FwbDropdown,
  Sf as FwbFileInput,
  Np as FwbFooter,
  Rp as FwbFooterBrand,
  jp as FwbFooterCopyright,
  Vp as FwbFooterIcon,
  Hp as FwbFooterLink,
  Dp as FwbFooterLinkGroup,
  Mf as FwbHeading,
  Of as FwbImg,
  Tf as FwbInput,
  Wp as FwbJumbotron,
  Gp as FwbListGroup,
  qp as FwbListGroupItem,
  Up as FwbModal,
  Yp as FwbNavbar,
  Kp as FwbNavbarCollapse,
  Jp as FwbNavbarLink,
  Xp as FwbNavbarLogo,
  Lf as FwbP,
  Zp as FwbPagination,
  Qp as FwbProgress,
  Pf as FwbRadio,
  zf as FwbRange,
  ef as FwbRating,
  Af as FwbSelect,
  tf as FwbSidebar,
  rf as FwbSidebarCta,
  of as FwbSidebarDropdownItem,
  sf as FwbSidebarItem,
  nf as FwbSidebarItemGroup,
  af as FwbSidebarLogo,
  Br as FwbSlotListener,
  bt as FwbSpinner,
  gf as FwbTab,
  lf as FwbTable,
  df as FwbTableBody,
  uf as FwbTableCell,
  cf as FwbTableHead,
  pf as FwbTableHeadCell,
  ff as FwbTableRow,
  hf as FwbTabs,
  Ff as FwbTextarea,
  mf as FwbTimeline,
  bf as FwbTimelineBody,
  vf as FwbTimelineContent,
  yf as FwbTimelineItem,
  wf as FwbTimelinePoint,
  xf as FwbTimelineTime,
  kf as FwbTimelineTitle,
  Er as FwbToast,
  _f as FwbToastProvider,
  If as FwbToggle,
  Cf as FwbTooltip,
  Nf as useToast
};
