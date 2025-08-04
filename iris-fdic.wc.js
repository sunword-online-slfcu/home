var qi = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const U = qi.NODE_ENV !== "production" ? Object.freeze({}) : {}, wt = qi.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, hs = () => !1, tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nn = (e) => e.startsWith("onUpdate:"), z = Object.assign, Oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, _s = Object.prototype.hasOwnProperty, L = (e, t) => _s.call(e, t), T = Array.isArray, pt = (e) => Rn(e) === "[object Map]", Gi = (e) => Rn(e) === "[object Set]", $ = (e) => typeof e == "function", Y = (e) => typeof e == "string", ct = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", xo = (e) => (G(e) || $(e)) && $(e.then) && $(e.catch), zi = Object.prototype.toString, Rn = (e) => zi.call(e), wo = (e) => Rn(e).slice(8, -1), In = (e) => Rn(e) === "[object Object]", Do = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kt = /* @__PURE__ */ Ye(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ms = /* @__PURE__ */ Ye(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, gs = /-(\w)/g, re = Mn(
  (e) => e.replace(gs, (t, n) => n ? n.toUpperCase() : "")
), bs = /\B([A-Z])/g, he = Mn(
  (e) => e.replace(bs, "-$1").toLowerCase()
), bt = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), at = Mn(
  (e) => e ? `on${bt(e)}` : ""
), st = (e, t) => !Object.is(e, t), Mt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, yn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Es = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ri = (e) => {
  const t = Y(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let si;
const nn = () => si || (si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = Y(o) ? Os(o) : Vo(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (Y(e) || G(e))
    return e;
}
const Ns = /;(?![^(]*\))/g, ys = /:([^]+)/, vs = /\/\*[^]*?\*\//g;
function Os(e) {
  const t = {};
  return e.replace(vs, "").split(Ns).forEach((n) => {
    if (n) {
      const o = n.split(ys);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Tt(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Tt(e[n]);
      o && (t += o + " ");
    }
  else if (G(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xs = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ws = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ds = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Vs = /* @__PURE__ */ Ye(xs), Cs = /* @__PURE__ */ Ye(ws), Ss = /* @__PURE__ */ Ye(Ds), Ts = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ps = /* @__PURE__ */ Ye(Ts);
function Yi(e) {
  return !!e || e === "";
}
const Ji = (e) => !!(e && e.__v_isRef === !0), xt = (e) => Y(e) ? e : e == null ? "" : T(e) || G(e) && (e.toString === zi || !$(e.toString)) ? Ji(e) ? xt(e.value) : JSON.stringify(e, Xi, 2) : String(e), Xi = (e, t) => Ji(t) ? Xi(e, t.value) : pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[Gn(o, r) + " =>"] = i, n),
    {}
  )
} : Gi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Gn(n))
} : ct(t) ? Gn(t) : G(t) && !T(t) && !In(t) ? String(t) : t, Gn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var K = {};
function Ae(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ne;
class $s {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ne, !t && Ne && (this.index = (Ne.scopes || (Ne.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = n;
      }
    } else K.NODE_ENV !== "production" && Ae("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ne = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ne = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function As() {
  return Ne;
}
let k;
const zn = /* @__PURE__ */ new WeakSet();
class Zi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && Ne.active && Ne.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, zn.has(this) && (zn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || er(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, li(this), tr(this);
    const t = k, n = $e;
    k = this, $e = !0;
    try {
      return this.fn();
    } finally {
      K.NODE_ENV !== "production" && k !== this && Ae(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), nr(this), k = t, $e = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        To(t);
      this.deps = this.depsTail = void 0, li(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    io(this) && this.run();
  }
  get dirty() {
    return io(this);
  }
}
let Qi = 0, Ut, Wt;
function er(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wt, Wt = e;
    return;
  }
  e.next = Ut, Ut = e;
}
function Co() {
  Qi++;
}
function So() {
  if (--Qi > 0)
    return;
  if (Wt) {
    let t = Wt;
    for (Wt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ut; ) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function nr(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), To(o), Rs(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function io(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (or(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function or(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === zt))
    return;
  e.globalVersion = zt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !io(e)) {
    e.flags &= -3;
    return;
  }
  const n = k, o = $e;
  k = e, $e = !0;
  try {
    tr(e);
    const i = e.fn(e._value);
    (t.version === 0 || st(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    k = n, $e = o, nr(e), e.flags &= -3;
  }
}
function To(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), K.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      To(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Rs(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $e = !0;
const ir = [];
function Je() {
  ir.push($e), $e = !1;
}
function Xe() {
  const e = ir.pop();
  $e = e === void 0 ? !0 : e;
}
function li(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = k;
    k = void 0;
    try {
      t();
    } finally {
      k = n;
    }
  }
}
let zt = 0;
class Is {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Po {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, K.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!k || !$e || k === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== k)
      n = this.activeLink = new Is(k, this), k.deps ? (n.prevDep = k.depsTail, k.depsTail.nextDep = n, k.depsTail = n) : k.deps = k.depsTail = n, rr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = k.depsTail, n.nextDep = void 0, k.depsTail.nextDep = n, k.depsTail = n, k.deps === n && (k.deps = o);
    }
    return K.NODE_ENV !== "production" && k.onTrack && k.onTrack(
      z(
        {
          effect: k
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, zt++, this.notify(t);
  }
  notify(t) {
    Co();
    try {
      if (K.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            z(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      So();
    }
  }
}
function rr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        rr(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), K.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const vn = /* @__PURE__ */ new WeakMap(), ht = Symbol(
  K.NODE_ENV !== "production" ? "Object iterate" : ""
), ro = Symbol(
  K.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Yt = Symbol(
  K.NODE_ENV !== "production" ? "Array iterate" : ""
);
function te(e, t, n) {
  if ($e && k) {
    let o = vn.get(e);
    o || vn.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Po()), i.map = o, i.key = n), K.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function je(e, t, n, o, i, r) {
  const s = vn.get(e);
  if (!s) {
    zt++;
    return;
  }
  const l = (f) => {
    f && (K.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : f.trigger());
  };
  if (Co(), t === "clear")
    s.forEach(l);
  else {
    const f = T(e), h = f && Do(n);
    if (f && n === "length") {
      const p = Number(o);
      s.forEach((a, m) => {
        (m === "length" || m === Yt || !ct(m) && m >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), h && l(s.get(Yt)), t) {
        case "add":
          f ? h && l(s.get("length")) : (l(s.get(ht)), pt(e) && l(s.get(ro)));
          break;
        case "delete":
          f || (l(s.get(ht)), pt(e) && l(s.get(ro)));
          break;
        case "set":
          pt(e) && l(s.get(ht));
          break;
      }
  }
  So();
}
function Ms(e, t) {
  const n = vn.get(e);
  return n && n.get(t);
}
function yt(e) {
  const t = I(e);
  return t === e ? t : (te(t, "iterate", Yt), me(e) ? t : t.map(ue));
}
function $o(e) {
  return te(e = I(e), "iterate", Yt), e;
}
const Fs = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, ue);
  },
  concat(...e) {
    return yt(this).concat(
      ...e.map((t) => T(t) ? yt(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = ue(e[1]), e));
  },
  every(e, t) {
    return We(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return We(this, "filter", e, t, (n) => n.map(ue), arguments);
  },
  find(e, t) {
    return We(this, "find", e, t, ue, arguments);
  },
  findIndex(e, t) {
    return We(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return We(this, "findLast", e, t, ue, arguments);
  },
  findLastIndex(e, t) {
    return We(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return We(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jn(this, "includes", e);
  },
  indexOf(...e) {
    return Jn(this, "indexOf", e);
  },
  join(e) {
    return yt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return We(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ft(this, "pop");
  },
  push(...e) {
    return Ft(this, "push", e);
  },
  reduce(e, ...t) {
    return ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ci(this, "reduceRight", e, t);
  },
  shift() {
    return Ft(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return We(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ft(this, "splice", e);
  },
  toReversed() {
    return yt(this).toReversed();
  },
  toSorted(e) {
    return yt(this).toSorted(e);
  },
  toSpliced(...e) {
    return yt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ft(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", ue);
  }
};
function Yn(e, t, n) {
  const o = $o(e), i = o[t]();
  return o !== e && !me(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const js = Array.prototype;
function We(e, t, n, o, i, r) {
  const s = $o(e), l = s !== e && !me(e), f = s[t];
  if (f !== js[t]) {
    const a = f.apply(e, r);
    return l ? ue(a) : a;
  }
  let h = n;
  s !== e && (l ? h = function(a, m) {
    return n.call(this, ue(a), m, e);
  } : n.length > 2 && (h = function(a, m) {
    return n.call(this, a, m, e);
  }));
  const p = f.call(s, h, o);
  return l && i ? i(p) : p;
}
function ci(e, t, n, o) {
  const i = $o(e);
  let r = n;
  return i !== e && (me(e) ? n.length > 3 && (r = function(s, l, f) {
    return n.call(this, s, l, f, e);
  }) : r = function(s, l, f) {
    return n.call(this, s, ue(l), f, e);
  }), i[t](r, ...o);
}
function Jn(e, t, n) {
  const o = I(e);
  te(o, "iterate", Yt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && Jt(n[0]) ? (n[0] = I(n[0]), o[t](...n)) : i;
}
function Ft(e, t, n = []) {
  Je(), Co();
  const o = I(e)[t].apply(e, n);
  return So(), Xe(), o;
}
const Hs = /* @__PURE__ */ Ye("__proto__,__v_isRef,__isVue"), sr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ct)
);
function Ls(e) {
  ct(e) || (e = String(e));
  const t = I(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class lr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? pr : dr : r ? ar : ur).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = T(t);
    if (!i) {
      let f;
      if (s && (f = Fs[n]))
        return f;
      if (n === "hasOwnProperty")
        return Ls;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Z(t) ? t : o
    );
    return (ct(n) ? sr.has(n) : Hs(n)) || (i || te(t, "get", n), r) ? l : Z(l) ? s && Do(n) ? l : l.value : G(l) ? i ? Ro(l) : Ao(l) : l;
  }
}
class cr extends lr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const f = ze(r);
      if (!me(o) && !ze(o) && (r = I(r), o = I(o)), !T(t) && Z(r) && !Z(o))
        return f ? !1 : (r.value = o, !0);
    }
    const s = T(t) && Do(n) ? Number(n) < t.length : L(t, n), l = Reflect.set(
      t,
      n,
      o,
      Z(t) ? t : i
    );
    return t === I(i) && (s ? st(o, r) && je(t, "set", n, o, r) : je(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = L(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && je(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ct(n) || !sr.has(n)) && te(t, "has", n), o;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      T(t) ? "length" : ht
    ), Reflect.ownKeys(t);
  }
}
class fr extends lr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return K.NODE_ENV !== "production" && Ae(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return K.NODE_ENV !== "production" && Ae(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Bs = /* @__PURE__ */ new cr(), ks = /* @__PURE__ */ new fr(), Us = /* @__PURE__ */ new cr(!0), Ws = /* @__PURE__ */ new fr(!0), so = (e) => e, un = (e) => Reflect.getPrototypeOf(e);
function Ks(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = I(i), s = pt(r), l = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, h = i[e](...o), p = n ? so : t ? lo : ue;
    return !t && te(
      r,
      "iterate",
      f ? ro : ht
    ), {
      // iterator protocol
      next() {
        const { value: a, done: m } = h.next();
        return m ? { value: a, done: m } : {
          value: l ? [p(a[0]), p(a[1])] : p(a),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function an(e) {
  return function(...t) {
    if (K.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ae(
        `${bt(e)} operation ${n}failed: target is readonly.`,
        I(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function qs(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = I(r), l = I(i);
      e || (st(i, l) && te(s, "get", i), te(s, "get", l));
      const { has: f } = un(s), h = t ? so : e ? lo : ue;
      if (f.call(s, i))
        return h(r.get(i));
      if (f.call(s, l))
        return h(r.get(l));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && te(I(i), "iterate", ht), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, s = I(r), l = I(i);
      return e || (st(i, l) && te(s, "has", i), te(s, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const s = this, l = s.__v_raw, f = I(l), h = t ? so : e ? lo : ue;
      return !e && te(f, "iterate", ht), l.forEach((p, a) => i.call(r, h(p), h(a), s));
    }
  };
  return z(
    n,
    e ? {
      add: an("add"),
      set: an("set"),
      delete: an("delete"),
      clear: an("clear")
    } : {
      add(i) {
        !t && !me(i) && !ze(i) && (i = I(i));
        const r = I(this);
        return un(r).has.call(r, i) || (r.add(i), je(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !me(r) && !ze(r) && (r = I(r));
        const s = I(this), { has: l, get: f } = un(s);
        let h = l.call(s, i);
        h ? K.NODE_ENV !== "production" && fi(s, l, i) : (i = I(i), h = l.call(s, i));
        const p = f.call(s, i);
        return s.set(i, r), h ? st(r, p) && je(s, "set", i, r, p) : je(s, "add", i, r), this;
      },
      delete(i) {
        const r = I(this), { has: s, get: l } = un(r);
        let f = s.call(r, i);
        f ? K.NODE_ENV !== "production" && fi(r, s, i) : (i = I(i), f = s.call(r, i));
        const h = l ? l.call(r, i) : void 0, p = r.delete(i);
        return f && je(r, "delete", i, void 0, h), p;
      },
      clear() {
        const i = I(this), r = i.size !== 0, s = K.NODE_ENV !== "production" ? pt(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return r && je(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Ks(i, e, t);
  }), n;
}
function Fn(e, t) {
  const n = qs(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    L(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Gs = {
  get: /* @__PURE__ */ Fn(!1, !1)
}, zs = {
  get: /* @__PURE__ */ Fn(!1, !0)
}, Ys = {
  get: /* @__PURE__ */ Fn(!0, !1)
}, Js = {
  get: /* @__PURE__ */ Fn(!0, !0)
};
function fi(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const i = wo(e);
    Ae(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ur = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap();
function Xs(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Zs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xs(wo(e));
}
function Ao(e) {
  return ze(e) ? e : jn(
    e,
    !1,
    Bs,
    Gs,
    ur
  );
}
function Qs(e) {
  return jn(
    e,
    !1,
    Us,
    zs,
    ar
  );
}
function Ro(e) {
  return jn(
    e,
    !0,
    ks,
    Ys,
    dr
  );
}
function Le(e) {
  return jn(
    e,
    !0,
    Ws,
    Js,
    pr
  );
}
function jn(e, t, n, o, i) {
  if (!G(e))
    return K.NODE_ENV !== "production" && Ae(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = Zs(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, l), l;
}
function Dt(e) {
  return ze(e) ? Dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ze(e) {
  return !!(e && e.__v_isReadonly);
}
function me(e) {
  return !!(e && e.__v_isShallow);
}
function Jt(e) {
  return e ? !!e.__v_raw : !1;
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function el(e) {
  return !L(e, "__v_skip") && Object.isExtensible(e) && yn(e, "__v_skip", !0), e;
}
const ue = (e) => G(e) ? Ao(e) : e, lo = (e) => G(e) ? Ro(e) : e;
function Z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function On(e) {
  return hr(e, !1);
}
function tl(e) {
  return hr(e, !0);
}
function hr(e, t) {
  return Z(e) ? e : new nl(e, t);
}
class nl {
  constructor(t, n) {
    this.dep = new Po(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : I(t), this._value = n ? t : ue(t), this.__v_isShallow = n;
  }
  get value() {
    return K.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || me(t) || ze(t);
    t = o ? t : I(t), st(t, n) && (this._rawValue = t, this._value = o ? t : ue(t), K.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Pe(e) {
  return Z(e) ? e.value : e;
}
function ol(e) {
  return $(e) ? e() : Pe(e);
}
const il = {
  get: (e, t, n) => t === "__v_raw" ? e : Pe(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return Z(i) && !Z(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function _r(e) {
  return Dt(e) ? e : new Proxy(e, il);
}
function co(e) {
  K.NODE_ENV !== "production" && !Jt(e) && Ae("toRefs() expects a reactive object but received a plain one.");
  const t = T(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = sl(e, n);
  return t;
}
class rl {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Ms(I(this._object), this._key);
  }
}
function sl(e, t, n) {
  const o = e[t];
  return Z(o) ? o : new rl(e, t, n);
}
class ll {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Po(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    k !== this)
      return er(this, !0), !0;
  }
  get value() {
    const t = K.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return or(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : K.NODE_ENV !== "production" && Ae("Write operation failed: computed value is readonly");
  }
}
function cl(e, t, n = !1) {
  let o, i;
  $(e) ? o = e : (o = e.get, i = e.set);
  const r = new ll(o, i, n);
  return K.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const dn = {}, xn = /* @__PURE__ */ new WeakMap();
let dt;
function fl(e, t = !1, n = dt) {
  if (n) {
    let o = xn.get(n);
    o || xn.set(n, o = []), o.push(e);
  } else K.NODE_ENV !== "production" && !t && Ae(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function ul(e, t, n = U) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: l, call: f } = n, h = (V) => {
    (n.onWarn || Ae)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (V) => i ? V : me(V) || i === !1 || i === 0 ? it(V, 1) : it(V);
  let a, m, x, S, R = !1, ee = !1;
  if (Z(e) ? (m = () => e.value, R = me(e)) : Dt(e) ? (m = () => p(e), R = !0) : T(e) ? (ee = !0, R = e.some((V) => Dt(V) || me(V)), m = () => e.map((V) => {
    if (Z(V))
      return V.value;
    if (Dt(V))
      return p(V);
    if ($(V))
      return f ? f(V, 2) : V();
    K.NODE_ENV !== "production" && h(V);
  })) : $(e) ? t ? m = f ? () => f(e, 2) : e : m = () => {
    if (x) {
      Je();
      try {
        x();
      } finally {
        Xe();
      }
    }
    const V = dt;
    dt = a;
    try {
      return f ? f(e, 3, [S]) : e(S);
    } finally {
      dt = V;
    }
  } : (m = Q, K.NODE_ENV !== "production" && h(e)), t && i) {
    const V = m, oe = i === !0 ? 1 / 0 : i;
    m = () => it(V(), oe);
  }
  const B = As(), J = () => {
    a.stop(), B && B.active && Oo(B.effects, a);
  };
  if (r && t) {
    const V = t;
    t = (...oe) => {
      V(...oe), J();
    };
  }
  let M = ee ? new Array(e.length).fill(dn) : dn;
  const X = (V) => {
    if (!(!(a.flags & 1) || !a.dirty && !V))
      if (t) {
        const oe = a.run();
        if (i || R || (ee ? oe.some((xe, se) => st(xe, M[se])) : st(oe, M))) {
          x && x();
          const xe = dt;
          dt = a;
          try {
            const se = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              M === dn ? void 0 : ee && M[0] === dn ? [] : M,
              S
            ];
            f ? f(t, 3, se) : (
              // @ts-expect-error
              t(...se)
            ), M = oe;
          } finally {
            dt = xe;
          }
        }
      } else
        a.run();
  };
  return l && l(X), a = new Zi(m), a.scheduler = s ? () => s(X, !1) : X, S = (V) => fl(V, !1, a), x = a.onStop = () => {
    const V = xn.get(a);
    if (V) {
      if (f)
        f(V, 4);
      else
        for (const oe of V) oe();
      xn.delete(a);
    }
  }, K.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? X(!0) : M = a.run() : s ? s(X.bind(null, !0), !0) : a.run(), J.pause = a.pause.bind(a), J.resume = a.resume.bind(a), J.stop = J, J;
}
function it(e, t = 1 / 0, n) {
  if (t <= 0 || !G(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Z(e))
    it(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      it(e[o], t, n);
  else if (Gi(e) || pt(e))
    e.forEach((o) => {
      it(o, t, n);
    });
  else if (In(e)) {
    for (const o in e)
      it(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && it(e[o], t, n);
  }
  return e;
}
var d = {};
const _t = [];
function pn(e) {
  _t.push(e);
}
function hn() {
  _t.pop();
}
let Xn = !1;
function O(e, ...t) {
  if (Xn) return;
  Xn = !0, Je();
  const n = _t.length ? _t[_t.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = al();
  if (o)
    Pt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, l;
          return (l = (s = r.toString) == null ? void 0 : s.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${Un(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...dl(i)), console.warn(...r);
  }
  Xe(), Xn = !1;
}
function al() {
  let e = _t[_t.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function dl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...pl(n));
  }), t;
}
function pl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Un(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...hl(e.props), r] : [i + r];
}
function hl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...mr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function mr(e, t, n) {
  return Y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Z(t) ? (t = mr(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const Io = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Pt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    on(i, t, n);
  }
}
function ke(e, t, n, o) {
  if ($(e)) {
    const i = Pt(e, t, n, o);
    return i && xo(i) && i.catch((r) => {
      on(r, t, n);
    }), i;
  }
  if (T(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ke(e[r], t, n, o));
    return i;
  } else d.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function on(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || U;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = d.NODE_ENV !== "production" ? Io[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Je(), Pt(r, null, 10, [
        e,
        f,
        h
      ]), Xe();
      return;
    }
  }
  _l(e, n, i, o, s);
}
function _l(e, t, n, o = !0, i = !1) {
  if (d.NODE_ENV !== "production") {
    const r = Io[t];
    if (n && pn(n), O(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && hn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const ae = [];
let Fe = -1;
const Vt = [];
let nt = null, vt = 0;
const gr = /* @__PURE__ */ Promise.resolve();
let wn = null;
const ml = 100;
function br(e) {
  const t = wn || gr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function gl(e) {
  let t = Fe + 1, n = ae.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = ae[o], r = Xt(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Hn(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = ae[ae.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? ae.push(e) : ae.splice(gl(t), 0, e), e.flags |= 1, Er();
  }
}
function Er() {
  wn || (wn = gr.then(yr));
}
function Mo(e) {
  T(e) ? Vt.push(...e) : nt && e.id === -1 ? nt.splice(vt + 1, 0, e) : e.flags & 1 || (Vt.push(e), e.flags |= 1), Er();
}
function ui(e, t, n = Fe + 1) {
  for (d.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ae.length; n++) {
    const o = ae[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || d.NODE_ENV !== "production" && Fo(t, o))
        continue;
      ae.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Nr(e) {
  if (Vt.length) {
    const t = [...new Set(Vt)].sort(
      (n, o) => Xt(n) - Xt(o)
    );
    if (Vt.length = 0, nt) {
      nt.push(...t);
      return;
    }
    for (nt = t, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vt = 0; vt < nt.length; vt++) {
      const n = nt[vt];
      d.NODE_ENV !== "production" && Fo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    nt = null, vt = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function yr(e) {
  d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = d.NODE_ENV !== "production" ? (n) => Fo(e, n) : Q;
  try {
    for (Fe = 0; Fe < ae.length; Fe++) {
      const n = ae[Fe];
      if (n && !(n.flags & 8)) {
        if (d.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Pt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Fe < ae.length; Fe++) {
      const n = ae[Fe];
      n && (n.flags &= -2);
    }
    Fe = -1, ae.length = 0, Nr(e), wn = null, (ae.length || Vt.length) && yr(e);
  }
}
function Fo(e, t) {
  const n = e.get(t) || 0;
  if (n > ml) {
    const o = t.i, i = o && Xo(o.type);
    return on(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Be = !1;
const _n = /* @__PURE__ */ new Map();
d.NODE_ENV !== "production" && (nn().__VUE_HMR_RUNTIME__ = {
  createRecord: Zn(vr),
  rerender: Zn(Nl),
  reload: Zn(yl)
});
const Et = /* @__PURE__ */ new Map();
function bl(e) {
  const t = e.type.__hmrId;
  let n = Et.get(t);
  n || (vr(t, e.type), n = Et.get(t)), n.instances.add(e);
}
function El(e) {
  Et.get(e.type.__hmrId).instances.delete(e);
}
function vr(e, t) {
  return Et.has(e) ? !1 : (Et.set(e, {
    initialDef: Dn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Dn(e) {
  return ss(e) ? e.__vccOpts : e;
}
function Nl(e, t) {
  const n = Et.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Dn(o.type).render = t), o.renderCache = [], Be = !0, o.update(), Be = !1;
  }));
}
function yl(e, t) {
  const n = Et.get(e);
  if (!n) return;
  t = Dn(t), ai(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = Dn(r.type);
    let l = _n.get(s);
    l || (s !== n.initialDef && ai(s, t), _n.set(s, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Hn(() => {
      Be = !0, r.parent.update(), Be = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  Mo(() => {
    _n.clear();
  });
}
function ai(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Zn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let He, Lt = [], fo = !1;
function rn(e, ...t) {
  He ? He.emit(e, ...t) : fo || Lt.push({ event: e, args: t });
}
function Or(e, t) {
  var n, o;
  He = e, He ? (He.enabled = !0, Lt.forEach(({ event: i, args: r }) => He.emit(i, ...r)), Lt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Or(r, t);
  }), setTimeout(() => {
    He || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, fo = !0, Lt = []);
  }, 3e3)) : (fo = !0, Lt = []);
}
function vl(e, t) {
  rn("app:init", e, t, {
    Fragment: Se,
    Text: sn,
    Comment: ve,
    Static: qt
  });
}
function Ol(e) {
  rn("app:unmount", e);
}
const xl = /* @__PURE__ */ jo(
  "component:added"
  /* COMPONENT_ADDED */
), xr = /* @__PURE__ */ jo(
  "component:updated"
  /* COMPONENT_UPDATED */
), wl = /* @__PURE__ */ jo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Dl = (e) => {
  He && typeof He.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !He.cleanupBuffer(e) && wl(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function jo(e) {
  return (t) => {
    rn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Vl = /* @__PURE__ */ wr(
  "perf:start"
  /* PERFORMANCE_START */
), Cl = /* @__PURE__ */ wr(
  "perf:end"
  /* PERFORMANCE_END */
);
function wr(e) {
  return (t, n, o) => {
    rn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Sl(e, t, n) {
  rn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let _e = null, Dr = null;
function Vn(e) {
  const t = _e;
  return _e = e, Dr = e && e.type.__scopeId || null, t;
}
function Vr(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && Oi(-1);
    const r = Vn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Vn(r), o._d && Oi(1);
    }
    return d.NODE_ENV !== "production" && xr(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Cr(e) {
  ms(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function ft(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    r && (l.oldValue = r[s].value);
    let f = l.dir[o];
    f && (Je(), ke(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Xe());
  }
}
const Tl = Symbol("_vte"), Pl = (e) => e.__isTeleport;
function Ho(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ho(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Lo(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    z({ name: e.name }, t, { setup: e })
  ) : e;
}
function Sr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Tr = /* @__PURE__ */ new WeakSet();
function $l(e) {
  const t = Yo(), n = tl(null);
  if (t) {
    const i = t.refs === U ? t.refs = {} : t.refs;
    let r;
    d.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(i, e)) && !r.configurable ? O(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(i, e, {
      enumerable: !0,
      get: () => n.value,
      set: (s) => n.value = s
    });
  } else d.NODE_ENV !== "production" && O(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const o = d.NODE_ENV !== "production" ? Ro(n) : n;
  return d.NODE_ENV !== "production" && Tr.add(o), o;
}
function Cn(e, t, n, o, i = !1) {
  if (T(e)) {
    e.forEach(
      (S, R) => Cn(
        S,
        t && (T(t) ? t[R] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Kt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Cn(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Jo(o.component) : o.el, s = i ? null : r, { i: l, r: f } = e;
  if (d.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = l.refs === U ? l.refs = {} : l.refs, a = l.setupState, m = I(a), x = a === U ? () => !1 : (S) => d.NODE_ENV !== "production" && (L(m, S) && !Z(m[S]) && O(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), Tr.has(m[S])) ? !1 : L(m, S);
  if (h != null && h !== f && (Y(h) ? (p[h] = null, x(h) && (a[h] = null)) : Z(h) && (h.value = null)), $(f))
    Pt(f, l, 12, [s, p]);
  else {
    const S = Y(f), R = Z(f);
    if (S || R) {
      const ee = () => {
        if (e.f) {
          const B = S ? x(f) ? a[f] : p[f] : f.value;
          i ? T(B) && Oo(B, r) : T(B) ? B.includes(r) || B.push(r) : S ? (p[f] = [r], x(f) && (a[f] = p[f])) : (f.value = [r], e.k && (p[e.k] = f.value));
        } else S ? (p[f] = s, x(f) && (a[f] = s)) : R ? (f.value = s, e.k && (p[e.k] = s)) : d.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
      };
      s ? (ee.id = -1, Ee(ee, n)) : ee();
    } else d.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
  }
}
nn().requestIdleCallback;
nn().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, Bo = (e) => e.type.__isKeepAlive;
function Al(e, t) {
  Pr(e, "a", t);
}
function Rl(e, t) {
  Pr(e, "da", t);
}
function Pr(e, t, n = ne) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ln(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Bo(i.parent.vnode) && Il(o, t, n, i), i = i.parent;
  }
}
function Il(e, t, n, o) {
  const i = Ln(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Uo(() => {
    Oo(o[t], i);
  }, n);
}
function Ln(e, t, n = ne, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      Je();
      const l = ln(n), f = ke(t, n, e, s);
      return l(), Xe(), f;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (d.NODE_ENV !== "production") {
    const i = at(Io[e].replace(/ hook$/, ""));
    O(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ze = (e) => (t, n = ne) => {
  (!en || e === "sp") && Ln(e, (...o) => t(...o), n);
}, Ml = Ze("bm"), ko = Ze("m"), $r = Ze(
  "bu"
), Fl = Ze("u"), jl = Ze(
  "bum"
), Uo = Ze("um"), Hl = Ze(
  "sp"
), Ll = Ze("rtg"), Bl = Ze("rtc");
function kl(e, t = ne) {
  Ln("ec", e, t);
}
const Ul = "components", Ar = Symbol.for("v-ndc");
function Wl(e) {
  return Y(e) ? Kl(Ul, e, !1) || e : e || Ar;
}
function Kl(e, t, n = !0, o = !1) {
  const i = _e || ne;
  if (i) {
    const r = i.type;
    {
      const l = Xo(
        r,
        !1
      );
      if (l && (l === t || l === re(t) || l === bt(re(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      di(i[e] || r[e], t) || // global registration
      di(i.appContext[e], t)
    );
    return !s && o ? r : (d.NODE_ENV !== "production" && n && !s && O(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), s);
  } else d.NODE_ENV !== "production" && O(
    `resolve${bt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function di(e, t) {
  return e && (e[t] || e[re(t)] || e[bt(re(t))]);
}
const uo = (e) => e ? is(e) ? Jo(e) : uo(e.parent) : null, mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.NODE_ENV !== "production" ? Le(e.props) : e.props,
    $attrs: (e) => d.NODE_ENV !== "production" ? Le(e.attrs) : e.attrs,
    $slots: (e) => d.NODE_ENV !== "production" ? Le(e.slots) : e.slots,
    $refs: (e) => d.NODE_ENV !== "production" ? Le(e.refs) : e.refs,
    $parent: (e) => uo(e.parent),
    $root: (e) => uo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ko(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = br.bind(e.proxy)),
    $watch: (e) => xc.bind(e)
  })
), Wo = (e) => e === "_" || e === "$", Qn = (e, t) => e !== U && !e.__isScriptSetup && L(e, t), Rr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: l, appContext: f } = e;
    if (d.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const x = s[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Qn(o, t))
          return s[t] = 1, o[t];
        if (i !== U && L(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && L(h, t)
        )
          return s[t] = 3, r[t];
        if (n !== U && L(n, t))
          return s[t] = 4, n[t];
        ao && (s[t] = 0);
      }
    }
    const p = mt[t];
    let a, m;
    if (p)
      return t === "$attrs" ? (te(e.attrs, "get", ""), d.NODE_ENV !== "production" && Pn()) : d.NODE_ENV !== "production" && t === "$slots" && te(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== U && L(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      m = f.config.globalProperties, L(m, t)
    )
      return m[t];
    d.NODE_ENV !== "production" && _e && (!Y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== U && Wo(t[0]) && L(i, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === _e && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return Qn(i, t) ? (i[t] = n, !0) : d.NODE_ENV !== "production" && i.__isScriptSetup && L(i, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== U && L(o, t) ? (o[t] = n, !0) : L(e.props, t) ? (d.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (d.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r }
  }, s) {
    let l;
    return !!n[s] || e !== U && L(e, s) || Qn(t, s) || (l = r[0]) && L(l, s) || L(o, s) || L(mt, s) || L(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.NODE_ENV !== "production" && (Rr.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ql(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(mt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => mt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Q
    });
  }), t;
}
function Gl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Q
    });
  });
}
function zl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Wo(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Q
      });
    }
  });
}
function pi(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Yl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ao = !0;
function Jl(e) {
  const t = Ko(e), n = e.proxy, o = e.ctx;
  ao = !1, t.beforeCreate && hi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: m,
    beforeUpdate: x,
    updated: S,
    activated: R,
    deactivated: ee,
    beforeDestroy: B,
    beforeUnmount: J,
    destroyed: M,
    unmounted: X,
    render: V,
    renderTracked: oe,
    renderTriggered: xe,
    errorCaptured: se,
    serverPrefetch: de,
    // public API
    expose: Ue,
    inheritAttrs: Qe,
    // assets
    components: De,
    directives: cn,
    filters: Qo
  } = t, et = d.NODE_ENV !== "production" ? Yl() : null;
  if (d.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const F in j)
        et("Props", F);
  }
  if (h && Xl(h, o, et), s)
    for (const j in s) {
      const F = s[j];
      $(F) ? (d.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = F.bind(n), d.NODE_ENV !== "production" && et("Methods", j)) : d.NODE_ENV !== "production" && O(
        `Method "${j}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    d.NODE_ENV !== "production" && !$(i) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = i.call(n, n);
    if (d.NODE_ENV !== "production" && xo(j) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !G(j))
      d.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = Ao(j), d.NODE_ENV !== "production")
      for (const F in j)
        et("Data", F), Wo(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => j[F],
          set: Q
        });
  }
  if (ao = !0, r)
    for (const j in r) {
      const F = r[j], Re = $(F) ? F.bind(n, n) : $(F.get) ? F.get.bind(n, n) : Q;
      d.NODE_ENV !== "production" && Re === Q && O(`Computed property "${j}" has no getter.`);
      const Wn = !$(F) && $(F.set) ? F.set.bind(n) : d.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : Q, $t = No({
        get: Re,
        set: Wn
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => $t.value,
        set: (Nt) => $t.value = Nt
      }), d.NODE_ENV !== "production" && et("Computed", j);
    }
  if (l)
    for (const j in l)
      Ir(l[j], o, n, j);
  if (f) {
    const j = $(f) ? f.call(n) : f;
    Reflect.ownKeys(j).forEach((F) => {
      oc(F, j[F]);
    });
  }
  p && hi(p, e, "c");
  function pe(j, F) {
    T(F) ? F.forEach((Re) => j(Re.bind(n))) : F && j(F.bind(n));
  }
  if (pe(Ml, a), pe(ko, m), pe($r, x), pe(Fl, S), pe(Al, R), pe(Rl, ee), pe(kl, se), pe(Bl, oe), pe(Ll, xe), pe(jl, J), pe(Uo, X), pe(Hl, de), T(Ue))
    if (Ue.length) {
      const j = e.exposed || (e.exposed = {});
      Ue.forEach((F) => {
        Object.defineProperty(j, F, {
          get: () => n[F],
          set: (Re) => n[F] = Re
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === Q && (e.render = V), Qe != null && (e.inheritAttrs = Qe), De && (e.components = De), cn && (e.directives = cn), de && Sr(e);
}
function Xl(e, t, n = Q) {
  T(e) && (e = po(e));
  for (const o in e) {
    const i = e[o];
    let r;
    G(i) ? "default" in i ? r = mn(
      i.from || o,
      i.default,
      !0
    ) : r = mn(i.from || o) : r = mn(i), Z(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, d.NODE_ENV !== "production" && n("Inject", o);
  }
}
function hi(e, t, n) {
  ke(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ir(e, t, n, o) {
  let i = o.includes(".") ? zr(n, o) : () => n[o];
  if (Y(e)) {
    const r = t[e];
    $(r) ? St(i, r) : d.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    St(i, e.bind(n));
  else if (G(e))
    if (T(e))
      e.forEach((r) => Ir(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? St(i, r, e) : d.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else d.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function Ko(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = r.get(t);
  let f;
  return l ? f = l : !i.length && !n && !o ? f = t : (f = {}, i.length && i.forEach(
    (h) => Sn(f, h, s, !0)
  ), Sn(f, t, s)), G(t) && r.set(t, f), f;
}
function Sn(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && Sn(e, r, n, !0), i && i.forEach(
    (s) => Sn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      d.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Zl[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Zl = {
  data: _i,
  props: mi,
  emits: mi,
  // objects
  methods: Bt,
  computed: Bt,
  // lifecycle
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  // assets
  components: Bt,
  directives: Bt,
  // watch
  watch: ec,
  // provide / inject
  provide: _i,
  inject: Ql
};
function _i(e, t) {
  return t ? e ? function() {
    return z(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ql(e, t) {
  return Bt(po(e), po(t));
}
function po(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bt(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mi(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    pi(e),
    pi(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = z(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = fe(e[o], t[o]);
  return n;
}
function Mr() {
  return {
    app: null,
    config: {
      isNativeTag: hs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let tc = 0;
function nc(e, t) {
  return function(o, i = null) {
    $(o) || (o = z({}, o)), i != null && !G(i) && (d.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), i = null);
    const r = Mr(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = r.app = {
      _uid: tc++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Vi,
      get config() {
        return r.config;
      },
      set config(p) {
        d.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return s.has(p) ? d.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : p && $(p.install) ? (s.add(p), p.install(h, ...a)) : $(p) ? (s.add(p), p(h, ...a)) : d.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(p) {
        return r.mixins.includes(p) ? d.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), h;
      },
      component(p, a) {
        return d.NODE_ENV !== "production" && bo(p, r.config), a ? (d.NODE_ENV !== "production" && r.components[p] && O(`Component "${p}" has already been registered in target app.`), r.components[p] = a, h) : r.components[p];
      },
      directive(p, a) {
        return d.NODE_ENV !== "production" && Cr(p), a ? (d.NODE_ENV !== "production" && r.directives[p] && O(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, h) : r.directives[p];
      },
      mount(p, a, m) {
        if (f)
          d.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.NODE_ENV !== "production" && p.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const x = h._ceVNode || we(o, i);
          return x.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), d.NODE_ENV !== "production" && (r.reload = () => {
            e(
              lt(x),
              p,
              m
            );
          }), a && t ? t(x, p) : e(x, p, m), f = !0, h._container = p, p.__vue_app__ = h, d.NODE_ENV !== "production" && (h._instance = x.component, vl(h, Vi)), Jo(x.component);
        }
      },
      onUnmount(p) {
        d.NODE_ENV !== "production" && typeof p != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        f ? (ke(
          l,
          h._instance,
          16
        ), e(null, h._container), d.NODE_ENV !== "production" && (h._instance = null, Ol(h)), delete h._container.__vue_app__) : d.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return d.NODE_ENV !== "production" && p in r.provides && O(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = a, h;
      },
      runWithContext(p) {
        const a = Ct;
        Ct = h;
        try {
          return p();
        } finally {
          Ct = a;
        }
      }
    };
    return h;
  };
}
let Ct = null;
function oc(e, t) {
  if (!ne)
    d.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = ne.provides;
    const o = ne.parent && ne.parent.provides;
    o === n && (n = ne.provides = Object.create(o)), n[e] = t;
  }
}
function mn(e, t, n = !1) {
  const o = ne || _e;
  if (o || Ct) {
    const i = Ct ? Ct._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    d.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else d.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const Fr = {}, jr = () => Object.create(Fr), Hr = (e) => Object.getPrototypeOf(e) === Fr;
function ic(e, t, n, o = !1) {
  const i = {}, r = jr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Lr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  d.NODE_ENV !== "production" && kr(t || {}, i, e), n ? e.props = o ? i : Qs(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function rc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function sc(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, l = I(i), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.NODE_ENV !== "production" && rc(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let m = p[a];
        if (Bn(e.emitsOptions, m))
          continue;
        const x = t[m];
        if (f)
          if (L(r, m))
            x !== r[m] && (r[m] = x, h = !0);
          else {
            const S = re(m);
            i[S] = ho(
              f,
              l,
              S,
              x,
              e,
              !1
            );
          }
        else
          x !== r[m] && (r[m] = x, h = !0);
      }
    }
  } else {
    Lr(e, t, i, r) && (h = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !L(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = he(a)) === a || !L(t, p))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[a] = ho(
        f,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (r !== l)
      for (const a in r)
        (!t || !L(t, a)) && (delete r[a], h = !0);
  }
  h && je(e.attrs, "set", ""), d.NODE_ENV !== "production" && kr(t || {}, i, e);
}
function Lr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let f in t) {
      if (kt(f))
        continue;
      const h = t[f];
      let p;
      i && L(i, p = re(f)) ? !r || !r.includes(p) ? n[p] = h : (l || (l = {}))[p] = h : Bn(e.emitsOptions, f) || (!(f in o) || h !== o[f]) && (o[f] = h, s = !0);
    }
  if (r) {
    const f = I(n), h = l || U;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = ho(
        i,
        f,
        a,
        h[a],
        e,
        !L(h, a)
      );
    }
  }
  return s;
}
function ho(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const l = L(s, "default");
    if (l && o === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && $(f)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const p = ln(i);
          o = h[n] = f.call(
            null,
            t
          ), p();
        }
      } else
        o = f;
      i.ce && i.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === he(n)) && (o = !0));
  }
  return o;
}
const lc = /* @__PURE__ */ new WeakMap();
function Br(e, t, n = !1) {
  const o = n ? lc : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const p = (a) => {
      f = !0;
      const [m, x] = Br(a, t, !0);
      z(s, m), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !f)
    return G(e) && o.set(e, wt), wt;
  if (T(r))
    for (let p = 0; p < r.length; p++) {
      d.NODE_ENV !== "production" && !Y(r[p]) && O("props must be strings when using array syntax.", r[p]);
      const a = re(r[p]);
      gi(a) && (s[a] = U);
    }
  else if (r) {
    d.NODE_ENV !== "production" && !G(r) && O("invalid props options", r);
    for (const p in r) {
      const a = re(p);
      if (gi(a)) {
        const m = r[p], x = s[a] = T(m) || $(m) ? { type: m } : z({}, m), S = x.type;
        let R = !1, ee = !0;
        if (T(S))
          for (let B = 0; B < S.length; ++B) {
            const J = S[B], M = $(J) && J.name;
            if (M === "Boolean") {
              R = !0;
              break;
            } else M === "String" && (ee = !1);
          }
        else
          R = $(S) && S.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = R, x[
          1
          /* shouldCastTrue */
        ] = ee, (R || L(x, "default")) && l.push(a);
      }
    }
  }
  const h = [s, l];
  return G(e) && o.set(e, h), h;
}
function gi(e) {
  return e[0] !== "$" && !kt(e) ? !0 : (d.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function cc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function kr(e, t, n) {
  const o = I(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => re(s));
  for (const s in i) {
    let l = i[s];
    l != null && fc(
      s,
      o[s],
      l,
      d.NODE_ENV !== "production" ? Le(o) : o,
      !r.includes(s)
    );
  }
}
function fc(e, t, n, o, i) {
  const { type: r, required: s, validator: l, skipCheck: f } = n;
  if (s && i) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !f) {
      let h = !1;
      const p = T(r) ? r : [r], a = [];
      for (let m = 0; m < p.length && !h; m++) {
        const { valid: x, expectedType: S } = ac(t, p[m]);
        a.push(S || ""), h = x;
      }
      if (!h) {
        O(dc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const uc = /* @__PURE__ */ Ye(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ac(e, t) {
  let n;
  const o = cc(t);
  if (o === "null")
    n = e === null;
  else if (uc(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = G(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function dc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(bt).join(" | ")}`;
  const i = n[0], r = wo(t), s = bi(t, i), l = bi(t, r);
  return n.length === 1 && Ei(i) && !pc(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, Ei(r) && (o += `with value ${l}.`), o;
}
function bi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ei(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function pc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ur = (e) => e[0] === "_" || e === "$stable", qo = (e) => T(e) ? e.map(Te) : [Te(e)], hc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Vr((...i) => (d.NODE_ENV !== "production" && ne && (!n || n.root === ne.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), qo(t(...i))), n);
  return o._c = !1, o;
}, Wr = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Ur(i)) continue;
    const r = e[i];
    if ($(r))
      t[i] = hc(i, r, o);
    else if (r != null) {
      d.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = qo(r);
      t[i] = () => s;
    }
  }
}, Kr = (e, t) => {
  d.NODE_ENV !== "production" && !Bo(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = qo(t);
  e.slots.default = () => n;
}, _o = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, _c = (e, t, n) => {
  const o = e.slots = jr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (_o(o, t, n), n && yn(o, "_", i, !0)) : Wr(t, o);
  } else t && Kr(e, t);
}, mc = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = U;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? d.NODE_ENV !== "production" && Be ? (_o(i, t, n), je(e, "set", "$slots")) : n && l === 1 ? r = !1 : _o(i, t, n) : (r = !t.$stable, Wr(t, i)), s = t;
  } else t && (Kr(e, t), s = { default: 1 });
  if (r)
    for (const l in i)
      !Ur(l) && s[l] == null && delete i[l];
};
let jt, rt;
function Ke(e, t) {
  e.appContext.config.performance && Tn() && rt.mark(`vue-${t}-${e.uid}`), d.NODE_ENV !== "production" && Vl(e, t, Tn() ? rt.now() : Date.now());
}
function qe(e, t) {
  if (e.appContext.config.performance && Tn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    rt.mark(o), rt.measure(
      `<${Un(e, e.type)}> ${t}`,
      n,
      o
    ), rt.clearMarks(n), rt.clearMarks(o);
  }
  d.NODE_ENV !== "production" && Cl(e, t, Tn() ? rt.now() : Date.now());
}
function Tn() {
  return jt !== void 0 || (typeof window < "u" && window.performance ? (jt = !0, rt = window.performance) : jt = !1), jt;
}
function gc() {
  const e = [];
  if (d.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ee = Pc;
function bc(e) {
  return Ec(e);
}
function Ec(e, t) {
  gc();
  const n = nn();
  n.__VUE__ = !0, d.NODE_ENV !== "production" && Or(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: p,
    parentNode: a,
    nextSibling: m,
    setScopeId: x = Q,
    insertStaticContent: S
  } = e, R = (c, u, _, E = null, g = null, b = null, w = void 0, v = null, y = d.NODE_ENV !== "production" && Be ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Ht(c, u) && (E = fn(c), tt(c, g, b, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: N, ref: P, shapeFlag: D } = u;
    switch (N) {
      case sn:
        ee(c, u, _, E);
        break;
      case ve:
        B(c, u, _, E);
        break;
      case qt:
        c == null ? J(u, _, E, w) : d.NODE_ENV !== "production" && M(c, u, _, w);
        break;
      case Se:
        cn(
          c,
          u,
          _,
          E,
          g,
          b,
          w,
          v,
          y
        );
        break;
      default:
        D & 1 ? oe(
          c,
          u,
          _,
          E,
          g,
          b,
          w,
          v,
          y
        ) : D & 6 ? Qo(
          c,
          u,
          _,
          E,
          g,
          b,
          w,
          v,
          y
        ) : D & 64 || D & 128 ? N.process(
          c,
          u,
          _,
          E,
          g,
          b,
          w,
          v,
          y,
          Rt
        ) : d.NODE_ENV !== "production" && O("Invalid VNode type:", N, `(${typeof N})`);
    }
    P != null && g && Cn(P, c && c.ref, b, u || c, !u);
  }, ee = (c, u, _, E) => {
    if (c == null)
      o(
        u.el = l(u.children),
        _,
        E
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && h(g, u.children);
    }
  }, B = (c, u, _, E) => {
    c == null ? o(
      u.el = f(u.children || ""),
      _,
      E
    ) : u.el = c.el;
  }, J = (c, u, _, E) => {
    [c.el, c.anchor] = S(
      c.children,
      u,
      _,
      E,
      c.el,
      c.anchor
    );
  }, M = (c, u, _, E) => {
    if (u.children !== c.children) {
      const g = m(c.anchor);
      V(c), [u.el, u.anchor] = S(
        u.children,
        _,
        g,
        E
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, X = ({ el: c, anchor: u }, _, E) => {
    let g;
    for (; c && c !== u; )
      g = m(c), o(c, _, E), c = g;
    o(u, _, E);
  }, V = ({ el: c, anchor: u }) => {
    let _;
    for (; c && c !== u; )
      _ = m(c), i(c), c = _;
    i(u);
  }, oe = (c, u, _, E, g, b, w, v, y) => {
    u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null ? xe(
      u,
      _,
      E,
      g,
      b,
      w,
      v,
      y
    ) : Ue(
      c,
      u,
      g,
      b,
      w,
      v,
      y
    );
  }, xe = (c, u, _, E, g, b, w, v) => {
    let y, N;
    const { props: P, shapeFlag: D, transition: C, dirs: A } = c;
    if (y = c.el = s(
      c.type,
      b,
      P && P.is,
      P
    ), D & 8 ? p(y, c.children) : D & 16 && de(
      c.children,
      y,
      null,
      E,
      g,
      eo(c, b),
      w,
      v
    ), A && ft(c, null, E, "created"), se(y, c, c.scopeId, w, E), P) {
      for (const q in P)
        q !== "value" && !kt(q) && r(y, q, null, P[q], b, E);
      "value" in P && r(y, "value", null, P.value, b), (N = P.onVnodeBeforeMount) && Me(N, E, c);
    }
    d.NODE_ENV !== "production" && (yn(y, "__vnode", c, !0), yn(y, "__vueParentComponent", E, !0)), A && ft(c, null, E, "beforeMount");
    const H = Nc(g, C);
    H && C.beforeEnter(y), o(y, u, _), ((N = P && P.onVnodeMounted) || H || A) && Ee(() => {
      N && Me(N, E, c), H && C.enter(y), A && ft(c, null, E, "mounted");
    }, g);
  }, se = (c, u, _, E, g) => {
    if (_ && x(c, _), E)
      for (let b = 0; b < E.length; b++)
        x(c, E[b]);
    if (g) {
      let b = g.subTree;
      if (d.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = Go(b.children) || b), u === b || Xr(b.type) && (b.ssContent === u || b.ssFallback === u)) {
        const w = g.vnode;
        se(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          g.parent
        );
      }
    }
  }, de = (c, u, _, E, g, b, w, v, y = 0) => {
    for (let N = y; N < c.length; N++) {
      const P = c[N] = v ? ot(c[N]) : Te(c[N]);
      R(
        null,
        P,
        u,
        _,
        E,
        g,
        b,
        w,
        v
      );
    }
  }, Ue = (c, u, _, E, g, b, w) => {
    const v = u.el = c.el;
    d.NODE_ENV !== "production" && (v.__vnode = u);
    let { patchFlag: y, dynamicChildren: N, dirs: P } = u;
    y |= c.patchFlag & 16;
    const D = c.props || U, C = u.props || U;
    let A;
    if (_ && ut(_, !1), (A = C.onVnodeBeforeUpdate) && Me(A, _, u, c), P && ft(u, c, _, "beforeUpdate"), _ && ut(_, !0), d.NODE_ENV !== "production" && Be && (y = 0, w = !1, N = null), (D.innerHTML && C.innerHTML == null || D.textContent && C.textContent == null) && p(v, ""), N ? (Qe(
      c.dynamicChildren,
      N,
      v,
      _,
      E,
      eo(u, g),
      b
    ), d.NODE_ENV !== "production" && gn(c, u)) : w || Re(
      c,
      u,
      v,
      null,
      _,
      E,
      eo(u, g),
      b,
      !1
    ), y > 0) {
      if (y & 16)
        De(v, D, C, _, g);
      else if (y & 2 && D.class !== C.class && r(v, "class", null, C.class, g), y & 4 && r(v, "style", D.style, C.style, g), y & 8) {
        const H = u.dynamicProps;
        for (let q = 0; q < H.length; q++) {
          const W = H[q], ge = D[W], le = C[W];
          (le !== ge || W === "value") && r(v, W, ge, le, g, _);
        }
      }
      y & 1 && c.children !== u.children && p(v, u.children);
    } else !w && N == null && De(v, D, C, _, g);
    ((A = C.onVnodeUpdated) || P) && Ee(() => {
      A && Me(A, _, u, c), P && ft(u, c, _, "updated");
    }, E);
  }, Qe = (c, u, _, E, g, b, w) => {
    for (let v = 0; v < u.length; v++) {
      const y = c[v], N = u[v], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ht(y, N) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      R(
        y,
        N,
        P,
        null,
        E,
        g,
        b,
        w,
        !0
      );
    }
  }, De = (c, u, _, E, g) => {
    if (u !== _) {
      if (u !== U)
        for (const b in u)
          !kt(b) && !(b in _) && r(
            c,
            b,
            u[b],
            null,
            g,
            E
          );
      for (const b in _) {
        if (kt(b)) continue;
        const w = _[b], v = u[b];
        w !== v && b !== "value" && r(c, b, v, w, g, E);
      }
      "value" in _ && r(c, "value", u.value, _.value, g);
    }
  }, cn = (c, u, _, E, g, b, w, v, y) => {
    const N = u.el = c ? c.el : l(""), P = u.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: C, slotScopeIds: A } = u;
    d.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Be || D & 2048) && (D = 0, y = !1, C = null), A && (v = v ? v.concat(A) : A), c == null ? (o(N, _, E), o(P, _, E), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      _,
      P,
      g,
      b,
      w,
      v,
      y
    )) : D > 0 && D & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Qe(
      c.dynamicChildren,
      C,
      _,
      g,
      b,
      w,
      v
    ), d.NODE_ENV !== "production" ? gn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || g && u === g.subTree) && gn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Re(
      c,
      u,
      _,
      P,
      g,
      b,
      w,
      v,
      y
    );
  }, Qo = (c, u, _, E, g, b, w, v, y) => {
    u.slotScopeIds = v, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      _,
      E,
      w,
      y
    ) : et(
      u,
      _,
      E,
      g,
      b,
      w,
      y
    ) : pe(c, u, y);
  }, et = (c, u, _, E, g, b, w) => {
    const v = c.component = Hc(
      c,
      E,
      g
    );
    if (d.NODE_ENV !== "production" && v.type.__hmrId && bl(v), d.NODE_ENV !== "production" && (pn(c), Ke(v, "mount")), Bo(c) && (v.ctx.renderer = Rt), d.NODE_ENV !== "production" && Ke(v, "init"), Bc(v, !1, w), d.NODE_ENV !== "production" && qe(v, "init"), v.asyncDep) {
      if (d.NODE_ENV !== "production" && Be && (c.el = null), g && g.registerDep(v, j, w), !c.el) {
        const y = v.subTree = we(ve);
        B(null, y, u, _);
      }
    } else
      j(
        v,
        c,
        u,
        _,
        g,
        b,
        w
      );
    d.NODE_ENV !== "production" && (hn(), qe(v, "mount"));
  }, pe = (c, u, _) => {
    const E = u.component = c.component;
    if (Sc(c, u, _))
      if (E.asyncDep && !E.asyncResolved) {
        d.NODE_ENV !== "production" && pn(u), F(E, u, _), d.NODE_ENV !== "production" && hn();
        return;
      } else
        E.next = u, E.update();
    else
      u.el = c.el, E.vnode = u;
  }, j = (c, u, _, E, g, b, w) => {
    const v = () => {
      if (c.isMounted) {
        let { next: D, bu: C, u: A, parent: H, vnode: q } = c;
        {
          const be = qr(c);
          if (be) {
            D && (D.el = q.el, F(c, D, w)), be.asyncDep.then(() => {
              c.isUnmounted || v();
            });
            return;
          }
        }
        let W = D, ge;
        d.NODE_ENV !== "production" && pn(D || c.vnode), ut(c, !1), D ? (D.el = q.el, F(c, D, w)) : D = q, C && Mt(C), (ge = D.props && D.props.onVnodeBeforeUpdate) && Me(ge, H, D, q), ut(c, !0), d.NODE_ENV !== "production" && Ke(c, "render");
        const le = to(c);
        d.NODE_ENV !== "production" && qe(c, "render");
        const Ve = c.subTree;
        c.subTree = le, d.NODE_ENV !== "production" && Ke(c, "patch"), R(
          Ve,
          le,
          // parent may have changed if it's in a teleport
          a(Ve.el),
          // anchor may have changed if it's in a fragment
          fn(Ve),
          c,
          g,
          b
        ), d.NODE_ENV !== "production" && qe(c, "patch"), D.el = le.el, W === null && Tc(c, le.el), A && Ee(A, g), (ge = D.props && D.props.onVnodeUpdated) && Ee(
          () => Me(ge, H, D, q),
          g
        ), d.NODE_ENV !== "production" && xr(c), d.NODE_ENV !== "production" && hn();
      } else {
        let D;
        const { el: C, props: A } = u, { bm: H, m: q, parent: W, root: ge, type: le } = c, Ve = Kt(u);
        if (ut(c, !1), H && Mt(H), !Ve && (D = A && A.onVnodeBeforeMount) && Me(D, W, u), ut(c, !0), C && ni) {
          const be = () => {
            d.NODE_ENV !== "production" && Ke(c, "render"), c.subTree = to(c), d.NODE_ENV !== "production" && qe(c, "render"), d.NODE_ENV !== "production" && Ke(c, "hydrate"), ni(
              C,
              c.subTree,
              c,
              g,
              null
            ), d.NODE_ENV !== "production" && qe(c, "hydrate");
          };
          Ve && le.__asyncHydrate ? le.__asyncHydrate(
            C,
            c,
            be
          ) : be();
        } else {
          ge.ce && ge.ce._injectChildStyle(le), d.NODE_ENV !== "production" && Ke(c, "render");
          const be = c.subTree = to(c);
          d.NODE_ENV !== "production" && qe(c, "render"), d.NODE_ENV !== "production" && Ke(c, "patch"), R(
            null,
            be,
            _,
            E,
            c,
            g,
            b
          ), d.NODE_ENV !== "production" && qe(c, "patch"), u.el = be.el;
        }
        if (q && Ee(q, g), !Ve && (D = A && A.onVnodeMounted)) {
          const be = u;
          Ee(
            () => Me(D, W, be),
            g
          );
        }
        (u.shapeFlag & 256 || W && Kt(W.vnode) && W.vnode.shapeFlag & 256) && c.a && Ee(c.a, g), c.isMounted = !0, d.NODE_ENV !== "production" && xl(c), u = _ = E = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Zi(v);
    c.scope.off();
    const N = c.update = y.run.bind(y), P = c.job = y.runIfDirty.bind(y);
    P.i = c, P.id = c.uid, y.scheduler = () => Hn(P), ut(c, !0), d.NODE_ENV !== "production" && (y.onTrack = c.rtc ? (D) => Mt(c.rtc, D) : void 0, y.onTrigger = c.rtg ? (D) => Mt(c.rtg, D) : void 0), N();
  }, F = (c, u, _) => {
    u.component = c;
    const E = c.vnode.props;
    c.vnode = u, c.next = null, sc(c, u.props, E, _), mc(c, u.children, _), Je(), ui(c), Xe();
  }, Re = (c, u, _, E, g, b, w, v, y = !1) => {
    const N = c && c.children, P = c ? c.shapeFlag : 0, D = u.children, { patchFlag: C, shapeFlag: A } = u;
    if (C > 0) {
      if (C & 128) {
        $t(
          N,
          D,
          _,
          E,
          g,
          b,
          w,
          v,
          y
        );
        return;
      } else if (C & 256) {
        Wn(
          N,
          D,
          _,
          E,
          g,
          b,
          w,
          v,
          y
        );
        return;
      }
    }
    A & 8 ? (P & 16 && At(N, g, b), D !== N && p(_, D)) : P & 16 ? A & 16 ? $t(
      N,
      D,
      _,
      E,
      g,
      b,
      w,
      v,
      y
    ) : At(N, g, b, !0) : (P & 8 && p(_, ""), A & 16 && de(
      D,
      _,
      E,
      g,
      b,
      w,
      v,
      y
    ));
  }, Wn = (c, u, _, E, g, b, w, v, y) => {
    c = c || wt, u = u || wt;
    const N = c.length, P = u.length, D = Math.min(N, P);
    let C;
    for (C = 0; C < D; C++) {
      const A = u[C] = y ? ot(u[C]) : Te(u[C]);
      R(
        c[C],
        A,
        _,
        null,
        g,
        b,
        w,
        v,
        y
      );
    }
    N > P ? At(
      c,
      g,
      b,
      !0,
      !1,
      D
    ) : de(
      u,
      _,
      E,
      g,
      b,
      w,
      v,
      y,
      D
    );
  }, $t = (c, u, _, E, g, b, w, v, y) => {
    let N = 0;
    const P = u.length;
    let D = c.length - 1, C = P - 1;
    for (; N <= D && N <= C; ) {
      const A = c[N], H = u[N] = y ? ot(u[N]) : Te(u[N]);
      if (Ht(A, H))
        R(
          A,
          H,
          _,
          null,
          g,
          b,
          w,
          v,
          y
        );
      else
        break;
      N++;
    }
    for (; N <= D && N <= C; ) {
      const A = c[D], H = u[C] = y ? ot(u[C]) : Te(u[C]);
      if (Ht(A, H))
        R(
          A,
          H,
          _,
          null,
          g,
          b,
          w,
          v,
          y
        );
      else
        break;
      D--, C--;
    }
    if (N > D) {
      if (N <= C) {
        const A = C + 1, H = A < P ? u[A].el : E;
        for (; N <= C; )
          R(
            null,
            u[N] = y ? ot(u[N]) : Te(u[N]),
            _,
            H,
            g,
            b,
            w,
            v,
            y
          ), N++;
      }
    } else if (N > C)
      for (; N <= D; )
        tt(c[N], g, b, !0), N++;
    else {
      const A = N, H = N, q = /* @__PURE__ */ new Map();
      for (N = H; N <= C; N++) {
        const ce = u[N] = y ? ot(u[N]) : Te(u[N]);
        ce.key != null && (d.NODE_ENV !== "production" && q.has(ce.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(ce.key),
          "Make sure keys are unique."
        ), q.set(ce.key, N));
      }
      let W, ge = 0;
      const le = C - H + 1;
      let Ve = !1, be = 0;
      const It = new Array(le);
      for (N = 0; N < le; N++) It[N] = 0;
      for (N = A; N <= D; N++) {
        const ce = c[N];
        if (ge >= le) {
          tt(ce, g, b, !0);
          continue;
        }
        let Ie;
        if (ce.key != null)
          Ie = q.get(ce.key);
        else
          for (W = H; W <= C; W++)
            if (It[W - H] === 0 && Ht(ce, u[W])) {
              Ie = W;
              break;
            }
        Ie === void 0 ? tt(ce, g, b, !0) : (It[Ie - H] = N + 1, Ie >= be ? be = Ie : Ve = !0, R(
          ce,
          u[Ie],
          _,
          null,
          g,
          b,
          w,
          v,
          y
        ), ge++);
      }
      const oi = Ve ? yc(It) : wt;
      for (W = oi.length - 1, N = le - 1; N >= 0; N--) {
        const ce = H + N, Ie = u[ce], ii = ce + 1 < P ? u[ce + 1].el : E;
        It[N] === 0 ? R(
          null,
          Ie,
          _,
          ii,
          g,
          b,
          w,
          v,
          y
        ) : Ve && (W < 0 || N !== oi[W] ? Nt(Ie, _, ii, 2) : W--);
      }
    }
  }, Nt = (c, u, _, E, g = null) => {
    const { el: b, type: w, transition: v, children: y, shapeFlag: N } = c;
    if (N & 6) {
      Nt(c.component.subTree, u, _, E);
      return;
    }
    if (N & 128) {
      c.suspense.move(u, _, E);
      return;
    }
    if (N & 64) {
      w.move(c, u, _, Rt);
      return;
    }
    if (w === Se) {
      o(b, u, _);
      for (let D = 0; D < y.length; D++)
        Nt(y[D], u, _, E);
      o(c.anchor, u, _);
      return;
    }
    if (w === qt) {
      X(c, u, _);
      return;
    }
    if (E !== 2 && N & 1 && v)
      if (E === 0)
        v.beforeEnter(b), o(b, u, _), Ee(() => v.enter(b), g);
      else {
        const { leave: D, delayLeave: C, afterLeave: A } = v, H = () => o(b, u, _), q = () => {
          D(b, () => {
            H(), A && A();
          });
        };
        C ? C(b, H, q) : q();
      }
    else
      o(b, u, _);
  }, tt = (c, u, _, E = !1, g = !1) => {
    const {
      type: b,
      props: w,
      ref: v,
      children: y,
      dynamicChildren: N,
      shapeFlag: P,
      patchFlag: D,
      dirs: C,
      cacheIndex: A
    } = c;
    if (D === -2 && (g = !1), v != null && Cn(v, null, _, c, !0), A != null && (u.renderCache[A] = void 0), P & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const H = P & 1 && C, q = !Kt(c);
    let W;
    if (q && (W = w && w.onVnodeBeforeUnmount) && Me(W, u, c), P & 6)
      ps(c.component, _, E);
    else {
      if (P & 128) {
        c.suspense.unmount(_, E);
        return;
      }
      H && ft(c, null, u, "beforeUnmount"), P & 64 ? c.type.remove(
        c,
        u,
        _,
        Rt,
        E
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Se || D > 0 && D & 64) ? At(
        N,
        u,
        _,
        !1,
        !0
      ) : (b === Se && D & 384 || !g && P & 16) && At(y, u, _), E && Kn(c);
    }
    (q && (W = w && w.onVnodeUnmounted) || H) && Ee(() => {
      W && Me(W, u, c), H && ft(c, null, u, "unmounted");
    }, _);
  }, Kn = (c) => {
    const { type: u, el: _, anchor: E, transition: g } = c;
    if (u === Se) {
      d.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && g && !g.persisted ? c.children.forEach((w) => {
        w.type === ve ? i(w.el) : Kn(w);
      }) : ds(_, E);
      return;
    }
    if (u === qt) {
      V(c);
      return;
    }
    const b = () => {
      i(_), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: w, delayLeave: v } = g, y = () => w(_, b);
      v ? v(c.el, b, y) : y();
    } else
      b();
  }, ds = (c, u) => {
    let _;
    for (; c !== u; )
      _ = m(c), i(c), c = _;
    i(u);
  }, ps = (c, u, _) => {
    d.NODE_ENV !== "production" && c.type.__hmrId && El(c);
    const { bum: E, scope: g, job: b, subTree: w, um: v, m: y, a: N } = c;
    Ni(y), Ni(N), E && Mt(E), g.stop(), b && (b.flags |= 8, tt(w, c, u, _)), v && Ee(v, u), Ee(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), d.NODE_ENV !== "production" && Dl(c);
  }, At = (c, u, _, E = !1, g = !1, b = 0) => {
    for (let w = b; w < c.length; w++)
      tt(c[w], u, _, E, g);
  }, fn = (c) => {
    if (c.shapeFlag & 6)
      return fn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = m(c.anchor || c.el), _ = u && u[Tl];
    return _ ? m(_) : u;
  };
  let qn = !1;
  const ei = (c, u, _) => {
    c == null ? u._vnode && tt(u._vnode, null, null, !0) : R(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      _
    ), u._vnode = c, qn || (qn = !0, ui(), Nr(), qn = !1);
  }, Rt = {
    p: R,
    um: tt,
    m: Nt,
    r: Kn,
    mt: et,
    mc: de,
    pc: Re,
    pbc: Qe,
    n: fn,
    o: e
  };
  let ti, ni;
  return {
    render: ei,
    hydrate: ti,
    createApp: nc(ei, ti)
  };
}
function eo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ut({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Nc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function gn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (T(o) && T(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ot(i[r]), l.el = s.el), !n && l.patchFlag !== -2 && gn(s, l)), l.type === sn && (l.el = s.el), d.NODE_ENV !== "production" && l.type === ve && !l.el && (l.el = s.el);
    }
}
function yc(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        l = r + s >> 1, e[n[l]] < h ? r = l + 1 : s = l;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function qr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qr(t);
}
function Ni(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const vc = Symbol.for("v-scx"), Oc = () => {
  {
    const e = mn(vc);
    return e || d.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function St(e, t, n) {
  return d.NODE_ENV !== "production" && !$(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Gr(e, t, n);
}
function Gr(e, t, n = U) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  d.NODE_ENV !== "production" && !t && (o !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = z({}, n);
  d.NODE_ENV !== "production" && (l.onWarn = O);
  const f = t && o || !t && r !== "post";
  let h;
  if (en) {
    if (r === "sync") {
      const x = Oc();
      h = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!f) {
      const x = () => {
      };
      return x.stop = Q, x.resume = Q, x.pause = Q, x;
    }
  }
  const p = ne;
  l.call = (x, S, R) => ke(x, p, S, R);
  let a = !1;
  r === "post" ? l.scheduler = (x) => {
    Ee(x, p && p.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (x, S) => {
    S ? x() : Hn(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), a && (x.flags |= 2, p && (x.id = p.uid, x.i = p));
  };
  const m = ul(e, t, l);
  return en && (h ? h.push(m) : f && m()), m;
}
function xc(e, t, n) {
  const o = this.proxy, i = Y(e) ? e.includes(".") ? zr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const s = ln(this), l = Gr(i, r.bind(o), n);
  return s(), l;
}
function zr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const wc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${re(t)}Modifiers`] || e[`${he(t)}Modifiers`];
function Dc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || U;
  if (d.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(at(re(t)) in a)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${at(re(t))}" prop.`
        );
      else {
        const m = p[t];
        $(m) && (m(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && wc(o, t.slice(7));
  if (s && (s.trim && (i = n.map((p) => Y(p) ? p.trim() : p)), s.number && (i = n.map(Es))), d.NODE_ENV !== "production" && Sl(e, t, i), d.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[at(p)] && O(
      `Event "${p}" is emitted in component ${Un(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${he(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = at(t)] || // also try camelCase event handler (#2249)
  o[l = at(re(t))];
  !f && r && (f = o[l = at(he(t))]), f && ke(
    f,
    e,
    6,
    i
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ke(
      h,
      e,
      6,
      i
    );
  }
}
function Yr(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, l = !1;
  if (!$(e)) {
    const f = (h) => {
      const p = Yr(h, t, !0);
      p && (l = !0, z(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !l ? (G(e) && o.set(e, null), null) : (T(r) ? r.forEach((f) => s[f] = null) : z(s, r), G(e) && o.set(e, s), s);
}
function Bn(e, t) {
  return !e || !tn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, he(t)) || L(e, t));
}
let mo = !1;
function Pn() {
  mo = !0;
}
function to(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: l,
    emit: f,
    render: h,
    renderCache: p,
    props: a,
    data: m,
    setupState: x,
    ctx: S,
    inheritAttrs: R
  } = e, ee = Vn(e);
  let B, J;
  d.NODE_ENV !== "production" && (mo = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = i || o, oe = d.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(V, {
        get(xe, se, de) {
          return O(
            `Property '${String(
              se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(xe, se, de);
        }
      }) : V;
      B = Te(
        h.call(
          oe,
          V,
          p,
          d.NODE_ENV !== "production" ? Le(a) : a,
          x,
          m,
          S
        )
      ), J = l;
    } else {
      const V = t;
      d.NODE_ENV !== "production" && l === a && Pn(), B = Te(
        V.length > 1 ? V(
          d.NODE_ENV !== "production" ? Le(a) : a,
          d.NODE_ENV !== "production" ? {
            get attrs() {
              return Pn(), Le(l);
            },
            slots: s,
            emit: f
          } : { attrs: l, slots: s, emit: f }
        ) : V(
          d.NODE_ENV !== "production" ? Le(a) : a,
          null
        )
      ), J = t.props ? l : Vc(l);
    }
  } catch (V) {
    Gt.length = 0, on(V, e, 1), B = we(ve);
  }
  let M = B, X;
  if (d.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && ([M, X] = Jr(B)), J && R !== !1) {
    const V = Object.keys(J), { shapeFlag: oe } = M;
    if (V.length) {
      if (oe & 7)
        r && V.some(Nn) && (J = Cc(
          J,
          r
        )), M = lt(M, J, !1, !0);
      else if (d.NODE_ENV !== "production" && !mo && M.type !== ve) {
        const xe = Object.keys(l), se = [], de = [];
        for (let Ue = 0, Qe = xe.length; Ue < Qe; Ue++) {
          const De = xe[Ue];
          tn(De) ? Nn(De) || se.push(De[2].toLowerCase() + De.slice(3)) : de.push(De);
        }
        de.length && O(
          `Extraneous non-props attributes (${de.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), se.length && O(
          `Extraneous non-emits event listeners (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.NODE_ENV !== "production" && !yi(M) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), M = lt(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && (d.NODE_ENV !== "production" && !yi(M) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Ho(M, n.transition)), d.NODE_ENV !== "production" && X ? X(M) : B = M, Vn(ee), B;
}
const Jr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Go(t, !1);
  if (o) {
    if (d.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Jr(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (l) => {
    t[i] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Te(o), s];
};
function Go(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (kn(i)) {
      if (i.type !== ve || i.children === "v-if") {
        if (n)
          return;
        if (n = i, d.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Go(n.children);
      }
    } else
      return;
  }
  return n;
}
const Vc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || tn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Cc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Nn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, yi = (e) => e.shapeFlag & 7 || e.type === ve;
function Sc(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: l, patchFlag: f } = t, h = r.emitsOptions;
  if (d.NODE_ENV !== "production" && (i || l) && Be || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? vi(o, s, h) : !!s;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const m = p[a];
        if (s[m] !== o[m] && !Bn(h, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? vi(o, s, h) : !0 : !!s;
  return !1;
}
function vi(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Bn(n, r))
      return !0;
  }
  return !1;
}
function Tc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Xr = (e) => e.__isSuspense;
function Pc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Mo(e);
}
const Se = Symbol.for("v-fgt"), sn = Symbol.for("v-txt"), ve = Symbol.for("v-cmt"), qt = Symbol.for("v-stc"), Gt = [];
let ye = null;
function gt(e = !1) {
  Gt.push(ye = e ? null : []);
}
function $c() {
  Gt.pop(), ye = Gt[Gt.length - 1] || null;
}
let Zt = 1;
function Oi(e, t = !1) {
  Zt += e, e < 0 && ye && t && (ye.hasOnce = !0);
}
function Zr(e) {
  return e.dynamicChildren = Zt > 0 ? ye || wt : null, $c(), Zt > 0 && ye && ye.push(e), e;
}
function Qt(e, t, n, o, i, r) {
  return Zr(
    Ce(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function Qr(e, t, n, o, i) {
  return Zr(
    we(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ht(e, t) {
  if (d.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = _n.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Ac = (...e) => ts(
  ...e
), es = ({ key: e }) => e ?? null, bn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || Z(e) || $(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function Ce(e, t = null, n = null, o = 0, i = null, r = e === Se ? 0 : 1, s = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && es(t),
    ref: t && bn(t),
    scopeId: Dr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: _e
  };
  return l ? (zo(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= Y(n) ? 8 : 16), d.NODE_ENV !== "production" && f.key !== f.key && O("VNode created with invalid key (NaN). VNode type:", f.type), Zt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ye && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ye.push(f), f;
}
const we = d.NODE_ENV !== "production" ? Ac : ts;
function ts(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === Ar) && (d.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = ve), kn(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && zo(l, n), Zt > 0 && !r && ye && (l.shapeFlag & 6 ? ye[ye.indexOf(e)] = l : ye.push(l)), l.patchFlag = -2, l;
  }
  if (ss(e) && (e = e.__vccOpts), t) {
    t = Rc(t);
    let { class: l, style: f } = t;
    l && !Y(l) && (t.class = Tt(l)), G(f) && (Jt(f) && !T(f) && (f = z({}, f)), t.style = Vo(f));
  }
  const s = Y(e) ? 1 : Xr(e) ? 128 : Pl(e) ? 64 : G(e) ? 4 : $(e) ? 2 : 0;
  return d.NODE_ENV !== "production" && s & 4 && Jt(e) && (e = I(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ce(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function Rc(e) {
  return e ? Jt(e) || Hr(e) ? z({}, e) : e : null;
}
function lt(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: l, transition: f } = e, h = t ? Mc(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && es(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(bn(t)) : [r, bn(t)] : bn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.NODE_ENV !== "production" && s === -1 && T(l) ? l.map(ns) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Se ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && Ho(
    p,
    f.clone(p)
  ), p;
}
function ns(e) {
  const t = lt(e);
  return T(e.children) && (t.children = e.children.map(ns)), t;
}
function os(e = " ", t = 0) {
  return we(sn, null, e, t);
}
function Ic(e = "", t = !1) {
  return t ? (gt(), Qr(ve, null, e)) : we(ve, null, e);
}
function Te(e) {
  return e == null || typeof e == "boolean" ? we(ve) : T(e) ? we(
    Se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kn(e) ? ot(e) : we(sn, null, String(e));
}
function ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function zo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), zo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Hr(t) ? t._ctx = _e : i === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: _e }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [os(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Tt([t.class, o.class]));
      else if (i === "style")
        t.style = Vo([t.style, o.style]);
      else if (tn(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(T(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Me(e, t, n, o = null) {
  ke(e, t, 7, [
    n,
    o
  ]);
}
const Fc = Mr();
let jc = 0;
function Hc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || Fc, r = {
    uid: jc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new $s(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Br(o, i),
    emitsOptions: Yr(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return d.NODE_ENV !== "production" ? r.ctx = ql(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Dc.bind(null, r), e.ce && e.ce(r), r;
}
let ne = null;
const Yo = () => ne || _e;
let $n, go;
{
  const e = nn(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  $n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ne = n
  ), go = t(
    "__VUE_SSR_SETTERS__",
    (n) => en = n
  );
}
const ln = (e) => {
  const t = ne;
  return $n(e), e.scope.on(), () => {
    e.scope.off(), $n(t);
  };
}, xi = () => {
  ne && ne.scope.off(), $n(null);
}, Lc = /* @__PURE__ */ Ye("slot,component");
function bo(e, { isNativeTag: t }) {
  (Lc(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function is(e) {
  return e.vnode.shapeFlag & 4;
}
let en = !1;
function Bc(e, t = !1, n = !1) {
  t && go(t);
  const { props: o, children: i } = e.vnode, r = is(e);
  ic(e, o, r, t), _c(e, i, n);
  const s = r ? kc(e, t) : void 0;
  return t && go(!1), s;
}
function kc(e, t) {
  var n;
  const o = e.type;
  if (d.NODE_ENV !== "production") {
    if (o.name && bo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        bo(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        Cr(r[s]);
    }
    o.compilerOptions && Uc() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Rr), d.NODE_ENV !== "production" && Gl(e);
  const { setup: i } = o;
  if (i) {
    Je();
    const r = e.setupContext = i.length > 1 ? Kc(e) : null, s = ln(e), l = Pt(
      i,
      e,
      0,
      [
        d.NODE_ENV !== "production" ? Le(e.props) : e.props,
        r
      ]
    ), f = xo(l);
    if (Xe(), s(), (f || e.sp) && !Kt(e) && Sr(e), f) {
      if (l.then(xi, xi), t)
        return l.then((h) => {
          wi(e, h, t);
        }).catch((h) => {
          on(h, e, 0);
        });
      if (e.asyncDep = l, d.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      wi(e, l, t);
  } else
    rs(e, t);
}
function wi(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) ? (d.NODE_ENV !== "production" && kn(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), d.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = _r(t), d.NODE_ENV !== "production" && zl(e)) : d.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), rs(e, n);
}
let Eo;
const Uc = () => !Eo;
function rs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Eo && !o.render) {
      const i = o.template || Ko(e).template;
      if (i) {
        d.NODE_ENV !== "production" && Ke(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: f } = o, h = z(
          z(
            {
              isCustomElement: r,
              delimiters: l
            },
            s
          ),
          f
        );
        o.render = Eo(i, h), d.NODE_ENV !== "production" && qe(e, "compile");
      }
    }
    e.render = o.render || Q;
  }
  {
    const i = ln(e);
    Je();
    try {
      Jl(e);
    } finally {
      Xe(), i();
    }
  }
  d.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const Di = d.NODE_ENV !== "production" ? {
  get(e, t) {
    return Pn(), te(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return te(e, "get", ""), e[t];
  }
};
function Wc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return te(e, "get", "$slots"), t[n];
    }
  });
}
function Kc(e) {
  const t = (n) => {
    if (d.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : Z(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Di));
      },
      get slots() {
        return o || (o = Wc(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Di),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Jo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_r(el(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in mt)
        return mt[n](e);
    },
    has(t, n) {
      return n in t || n in mt;
    }
  })) : e.proxy;
}
const qc = /(?:^|[-_])(\w)/g, Gc = (e) => e.replace(qc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Xo(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Un(e, t, n = !1) {
  let o = Xo(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Gc(o) : n ? "App" : "Anonymous";
}
function ss(e) {
  return $(e) && "__vccOpts" in e;
}
const No = (e, t) => {
  const n = cl(e, t, en);
  if (d.NODE_ENV !== "production") {
    const o = Yo();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function zc() {
  if (d.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      return G(a) ? a.__isVue ? ["div", e, "VueInstance"] : Z(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in a ? a._value : a),
        ">"
      ] : Dt(a) ? [
        "div",
        {},
        ["span", e, me(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${ze(a) ? " (readonly)" : ""}`
      ] : ze(a) ? [
        "div",
        {},
        ["span", e, me(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const m = [];
    a.type.props && a.props && m.push(s("props", I(a.props))), a.setupState !== U && m.push(s("setup", a.setupState)), a.data !== U && m.push(s("data", I(a.data)));
    const x = f(a, "computed");
    x && m.push(s("computed", x));
    const S = f(a, "inject");
    return S && m.push(s("injected", S)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), m;
  }
  function s(a, m) {
    return m = z({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          l(m[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, m = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : G(a) ? ["object", { object: m ? I(a) : a }] : ["span", n, String(a)];
  }
  function f(a, m) {
    const x = a.type;
    if ($(x))
      return;
    const S = {};
    for (const R in a.ctx)
      h(x, R, m) && (S[R] = a.ctx[R]);
    return S;
  }
  function h(a, m, x) {
    const S = a[x];
    if (T(S) && S.includes(m) || G(S) && m in S || a.extends && h(a.extends, m, x) || a.mixins && a.mixins.some((R) => h(R, m, x)))
      return !0;
  }
  function p(a) {
    return me(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Vi = "3.5.13", Oe = d.NODE_ENV !== "production" ? O : Q;
var ie = {};
let yo;
const Ci = typeof window < "u" && window.trustedTypes;
if (Ci)
  try {
    yo = /* @__PURE__ */ Ci.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ie.NODE_ENV !== "production" && Oe(`Error creating trusted types policy: ${e}`);
  }
const ls = yo ? (e) => yo.createHTML(e) : (e) => e, Yc = "http://www.w3.org/2000/svg", Jc = "http://www.w3.org/1998/Math/MathML", Ge = typeof document < "u" ? document : null, Si = Ge && /* @__PURE__ */ Ge.createElement("template"), Xc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ge.createElementNS(Yc, e) : t === "mathml" ? Ge.createElementNS(Jc, e) : n ? Ge.createElement(e, { is: n }) : Ge.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ge.createTextNode(e),
  createComment: (e) => Ge.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ge.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Si.innerHTML = ls(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Si.content;
      if (o === "svg" || o === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Zc = Symbol("_vtc");
function Qc(e, t, n) {
  const o = e[Zc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ti = Symbol("_vod"), ef = Symbol("_vsh"), cs = Symbol(ie.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function tf(e) {
  const t = Yo();
  if (!t) {
    ie.NODE_ENV !== "production" && Oe("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (i = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => An(r, i));
  };
  ie.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const o = () => {
    const i = e(t.proxy);
    t.ce ? An(t.ce, i) : vo(t.subTree, i), n(i);
  };
  $r(() => {
    Mo(o);
  }), ko(() => {
    St(o, Q, { flush: "post" });
    const i = new MutationObserver(o);
    i.observe(t.subTree.el.parentNode, { childList: !0 }), Uo(() => i.disconnect());
  });
}
function vo(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      vo(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    An(e.el, t);
  else if (e.type === Se)
    e.children.forEach((n) => vo(n, t));
  else if (e.type === qt) {
    let { el: n, anchor: o } = e;
    for (; n && (An(n, t), n !== o); )
      n = n.nextSibling;
  }
}
function An(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let o = "";
    for (const i in t)
      n.setProperty(`--${i}`, t[i]), o += `--${i}: ${t[i]};`;
    n[cs] = o;
  }
}
const nf = /(^|;)\s*display\s*:/;
function of(e, t, n) {
  const o = e.style, i = Y(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Y(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && En(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && En(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), En(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[cs];
      s && (n += ";" + s), o.cssText = n, r = nf.test(n);
    }
  } else t && e.removeAttribute("style");
  Ti in e && (e[Ti] = r ? o.display : "", e[ef] && (o.display = "none"));
}
const rf = /[^\\];\s*$/, Pi = /\s*!important$/;
function En(e, t, n) {
  if (T(n))
    n.forEach((o) => En(e, t, o));
  else if (n == null && (n = ""), ie.NODE_ENV !== "production" && rf.test(n) && Oe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = sf(e, t);
    Pi.test(n) ? e.setProperty(
      he(o),
      n.replace(Pi, ""),
      "important"
    ) : e[o] = n;
  }
}
const $i = ["Webkit", "Moz", "ms"], no = {};
function sf(e, t) {
  const n = no[t];
  if (n)
    return n;
  let o = re(t);
  if (o !== "filter" && o in e)
    return no[t] = o;
  o = bt(o);
  for (let i = 0; i < $i.length; i++) {
    const r = $i[i] + o;
    if (r in e)
      return no[t] = r;
  }
  return t;
}
const Ai = "http://www.w3.org/1999/xlink";
function Ri(e, t, n, o, i, r = Ps(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ai, t.slice(6, t.length)) : e.setAttributeNS(Ai, t, n) : n == null || r && !Yi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ct(n) ? String(n) : n
  );
}
function Ii(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ls(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Yi(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ie.NODE_ENV !== "production" && !s && Oe(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(i || t);
}
function lf(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function cf(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Mi = Symbol("_vei");
function ff(e, t, n, o, i = null) {
  const r = e[Mi] || (e[Mi] = {}), s = r[t];
  if (o && s)
    s.value = ie.NODE_ENV !== "production" ? ji(o, t) : o;
  else {
    const [l, f] = uf(t);
    if (o) {
      const h = r[t] = pf(
        ie.NODE_ENV !== "production" ? ji(o, t) : o,
        i
      );
      lf(e, l, h, f);
    } else s && (cf(e, l, s, f), r[t] = void 0);
  }
}
const Fi = /(?:Once|Passive|Capture)$/;
function uf(e) {
  let t;
  if (Fi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Fi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
let oo = 0;
const af = /* @__PURE__ */ Promise.resolve(), df = () => oo || (af.then(() => oo = 0), oo = Date.now());
function pf(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ke(
      hf(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = df(), n;
}
function ji(e, t) {
  return $(e) || T(e) ? e : (Oe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Q);
}
function hf(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _f = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? Qc(e, o, s) : t === "style" ? of(e, n, o) : tn(t) ? Nn(t) || ff(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mf(e, t, o, s)) ? (Ii(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ri(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Y(o)) ? Ii(e, re(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ri(e, t, o, s));
};
function mf(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Hi(t) && Y(n) ? !1 : t in e;
}
const Li = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fs(e, t, n) {
  const o = /* @__PURE__ */ Lo(e, t);
  In(o) && z(o, t);
  class i extends Zo {
    constructor(s) {
      super(o, s, n);
    }
  }
  return i.def = o, i;
}
const gf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Zo extends gf {
  constructor(t, n = {}, o = ki) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== ki ? this._root = this.shadowRoot : (ie.NODE_ENV !== "production" && this.shadowRoot && Oe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Zo) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, br(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const i of o)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: s } = o;
      let l;
      if (r && !T(r))
        for (const f in r) {
          const h = r[f];
          (h === Number || h && h.type === Number) && (f in this._props && (this._props[f] = ri(this._props[f])), (l || (l = /* @__PURE__ */ Object.create(null)))[re(f)] = !0);
        }
      this._numberProps = l, i && this._resolveProps(o), this.shadowRoot ? this._applyStyles(s) : ie.NODE_ENV !== "production" && s && Oe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (o) => t(this._def = o, !0)
    ) : t(this._def);
  }
  _mount(t) {
    ie.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        L(this, o) ? ie.NODE_ENV !== "production" && Oe(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Pe(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = T(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && o.includes(i) && this._setProp(i, this[i]);
    for (const i of o.map(re))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : Li;
    const i = re(t);
    n && this._numberProps && this._numberProps[i] && (o = ri(o)), this._setProp(i, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, i = !1) {
    if (n !== this._props[t] && (n === Li ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), o)) {
      const r = this._ob;
      r && r.disconnect(), n === !0 ? this.setAttribute(he(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(he(t), n + "") : n || this.removeAttribute(he(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    yf(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = we(this._def, z(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, ie.NODE_ENV !== "production" && (o.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this._root.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const i = (r, s) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            In(s[0]) ? z({ detail: s }, s[0]) : { detail: s }
          )
        );
      };
      o.emit = (r, ...s) => {
        i(r, s), he(r) !== r && i(he(r), s);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      if (o && r.setAttribute("nonce", o), r.textContent = t[i], this.shadowRoot.prepend(r), ie.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let s = this._childStyles.get(n.__hmrId);
            s || this._childStyles.set(n.__hmrId, s = []), s.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const i = t[o], r = i.getAttribute("name") || "default", s = this._slots[r], l = i.parentNode;
      if (s)
        for (const f of s) {
          if (n && f.nodeType === 1) {
            const h = n + "-s", p = document.createTreeWalker(f, 1);
            f.setAttribute(h, "");
            let a;
            for (; a = p.nextNode(); )
              a.setAttribute(h, "");
          }
          l.insertBefore(f, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (ie.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const bf = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ef = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (i) => {
    if (!("key" in i))
      return;
    const r = he(i.key);
    if (t.some(
      (s) => s === r || bf[s] === r
    ))
      return e(i);
  });
}, Nf = /* @__PURE__ */ z({ patchProp: _f }, Xc);
let Bi;
function us() {
  return Bi || (Bi = bc(Nf));
}
const yf = (...e) => {
  us().render(...e);
}, ki = (...e) => {
  const t = us().createApp(...e);
  ie.NODE_ENV !== "production" && (Of(t), xf(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = wf(o);
    if (!i) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, vf(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function vf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Of(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Vs(t) || Cs(t) || Ss(t),
    writable: !1
  });
}
function xf(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Oe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Oe(o), n;
      },
      set() {
        Oe(o);
      }
    });
  }
}
function wf(e) {
  if (Y(e)) {
    const t = document.querySelector(e);
    return ie.NODE_ENV !== "production" && !t && Oe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ie.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Oe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Df = {};
function Vf() {
  zc();
}
Df.NODE_ENV !== "production" && Vf();
const Cf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "38",
  height: "17",
  fill: "none"
};
function Sf(e, t) {
  return gt(), Qt("svg", Cf, t[0] || (t[0] = [
    Ce("path", {
      fill: "#fff",
      d: "M13.915 1.178H8.791v15.209h4.222c5.204 0 8.47-2.494 8.47-7.619-.001-4.626-2.948-7.59-7.568-7.59M34.094.897c1.3 0 2.23.249 3.265.692v4.017c-1.115-.724-1.965-1.136-3.133-1.136-2.124 0-3.823 1.721-3.822 4.074 0 2.408 1.672 4.043 3.823 4.043 1.115 0 1.938-.333 3.133-1.108v4.015c-.797.64-1.832.97-3.346.97-4.248 0-7.62-3.274-7.62-7.73 0-4.455 3.425-7.837 7.7-7.837M8.23 1.178v3.519H4.036l.027 2.354h3.876v3.518H4.036l-.026 5.818H0V1.178zm17.685 0v15.209h-4.01V1.178zM13.598 4.666c2.23 0 3.874 1.33 3.874 4.017.002 3.13-2.014 4.211-4.618 4.211v-8.2c.317 0 .558-.028.744-.028"
    }, null, -1)
  ]));
}
const Tf = { render: Sf }, Ot = (e, t) => {
  const n = On(t);
  return ko(() => {
    var o, i;
    try {
      n.value = ((i = (o = Alkami == null ? void 0 : Alkami.Localization) == null ? void 0 : o.SiteText) == null ? void 0 : i[e]) || t;
    } catch {
    }
  }), n;
}, Pf = { class: "aside" }, $f = { key: 0 }, Ui = "light", Wi = "15.74px", Ki = "37.36px", Af = /* @__PURE__ */ Lo({
  __name: "FdicNotice",
  props: {
    theme: { default: Ui, type: String },
    isUninsured: { type: Boolean, default: !1 }
  },
  setup(e) {
    tf((p) => ({
      42429618: s.value,
      "7fbeed79": Wi,
      "8abd09d8": Ki,
      "6c5325b0": r.value
    }));
    const t = {
      light: {
        icon: "#003256",
        text: "#000000"
      },
      dark: {
        icon: "#ffffff",
        text: "#ffffff"
      }
    }, n = e, o = (p) => p && p in t ? t[p] : t[Ui], i = o(n.theme), r = On(i.icon), s = On(i.text), { isUninsured: l } = co(n);
    St(
      () => n.theme,
      (p) => {
        const a = o(p);
        r.value = a.icon, s.value = a.text;
      }
    );
    const f = {
      insured: {
        key: "Compliance.FDICInsuredNotice",
        text: "FDIC-Insured - Backed by the full faith and credit of the U.S. Government"
      },
      uninsured: {
        key: "Compliance.FDICUninsuredNotice",
        text: "Not insured by the FDIC; are not deposits; and may lose value"
      }
    }, h = () => {
      const { key: p, text: a } = n.isUninsured ? f.uninsured : f.insured;
      return ol(Ot(p, a));
    };
    return (p, a) => (gt(), Qt("aside", Pf, [
      Pe(l) ? Ic("", !0) : (gt(), Qt("figure", $f, [
        we(Pe(Tf), {
          fill: r.value,
          "view-box": `0 0 ${Ki} ${Wi}`
        }, null, 8, ["fill", "view-box"])
      ])),
      (gt(), Qr(Wl(Pe(l) ? "p" : "em"), {
        class: Tt({ "font-body-2": Pe(l) })
      }, {
        default: Vr(() => [
          os(xt(h()), 1)
        ]),
        _: 1
      }, 8, ["class"]))
    ]));
  }
}), Rf = '.aside[data-v-ae6dfb64]{align-items:center;display:flex;font-family:Source Sans,Source Sans Pro,"Source Sans 3",Source Sans Pro Web,sans-serif;font-size:12.8px;gap:16px;justify-content:center;min-width:210px}.aside figure[data-v-ae6dfb64],.aside em[data-v-ae6dfb64],.aside p[data-v-ae6dfb64]{color:var(--42429618);display:inline-block;margin:0;min-height:17px;padding:0;text-align:left}.aside figure[data-v-ae6dfb64]{flex-grow:0;flex-shrink:0;height:var(--7fbeed79);width:var(--8abd09d8)}.aside figure svg[data-v-ae6dfb64],.aside figure svg[data-v-ae6dfb64] *{fill:var(--6c5325b0)}.aside[hidden][data-v-ae6dfb64]{display:none}', as = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, If = /* @__PURE__ */ as(Af, [["styles", [Rf]], ["__scopeId", "data-v-ae6dfb64"]]), Mf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "40",
  fill: "none"
};
function Ff(e, t) {
  return gt(), Qt("svg", Mf, t[0] || (t[0] = [
    Ce("path", {
      fill: "#1A1A1A",
      d: "M21.389 33.333q-3.029 0-5.222-1.555-2.195-1.556-3.167-4.14l-2.833-7.416a2.6 2.6 0 0 1-.125-.458 3 3 0 0 1-.042-.486q0-.723.556-1.278.555-.556 1.277-.556.167 0 .32.014t.291.07l.834.222q.555.138.875.375.32.236.708.847V11.25q0-.972.694-1.667a2.27 2.27 0 0 1 1.667-.694q.333 0 .611.097.279.098.5.264v-.222q0-.973.709-1.667a2.32 2.32 0 0 1 1.68-.694q.89 0 1.528.583.639.583.778 1.36.11-.138.472-.207.36-.07.667-.07 1.055 0 1.708.792t.653 1.764v1.083q.194-.167.5-.236a2.8 2.8 0 0 1 .61-.07q.974 0 1.667.695.695.694.695 1.667v10.694q0 3.805-2.403 6.208t-6.208 2.403m0-1.666q3.111 0 5.028-1.931 1.916-1.93 1.916-5.014V14.028a.68.68 0 0 0-.194-.5.68.68 0 0 0-.5-.195.68.68 0 0 0-.5.195.68.68 0 0 0-.195.5V20h-2.083v-9.306a.68.68 0 0 0-.194-.5.68.68 0 0 0-.5-.194.68.68 0 0 0-.5.194.68.68 0 0 0-.195.5V20H21.39V9.028a.68.68 0 0 0-.195-.5.68.68 0 0 0-.5-.195.68.68 0 0 0-.5.195.68.68 0 0 0-.194.5V20h-2.083v-8.75a.68.68 0 0 0-.195-.5.68.68 0 0 0-.5-.195.68.68 0 0 0-.5.195.68.68 0 0 0-.194.5v11.805h-1.611l-1.028-2.61q-.277-.723-.708-.931a5.7 5.7 0 0 0-1.125-.375q-.278-.056-.375.055-.097.112.013.361l2.89 7.5q.804 2.084 2.527 3.348 1.722 1.264 4.278 1.264"
    }, null, -1)
  ]));
}
const jf = { render: Ff }, Hf = ["aria-label"], Lf = { class: "fdic-speedbump__header" }, Bf = { class: "fdic-speedbump__body" }, kf = { class: "fdic-speedbump__actions" }, Uf = /* @__PURE__ */ Lo({
  __name: "FdicSpeedbump",
  props: {
    isVisible: { type: Boolean },
    warningText: { default: void 0, type: String },
    useGenericText: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, o = t, { useGenericText: i, warningText: r } = co(n), s = On(!1), l = $l("modal");
    St(
      () => n.isVisible,
      (M) => {
        l.value && (M ? (s.value = !1, l.value.showModal(), l.value.focus(), l.value.addEventListener("mousedown", f)) : p(!1));
      }
    );
    const f = (M) => {
      M.target === M.currentTarget && p(!1);
    }, h = () => {
      o("close", s.value);
    }, p = (M) => {
      var X, V;
      s.value = M, (X = l.value) == null || X.removeEventListener("mousedown", f), (V = l.value) == null || V.close();
    }, a = {
      bodyFdic: Ot(
        "Compliance.Speedbump.Body.Fdic",
        "You're leaving our platform and entering a website which might be controlled by a third-party. You might interact with non-deposit products which are not FDIC-insured."
      ),
      bodyGeneric: Ot(
        "Compliance.Speedbump.Body.Generic",
        "You're leaving our platform and entering a website which might be controlled by a third-party."
      ),
      cancel: Ot("Compliance.Speedbump.Cancel", "No, Cancel"),
      header: Ot("Compliance.Speedbump.Header", "Are you sure you want to proceed?"),
      proceed: Ot("Compliance.Speedbump.Proceed", "Yes")
    }, { bodyFdic: m, bodyGeneric: x, cancel: S, header: R, proceed: ee } = co(a), B = No(() => r.value && r.value.length > 0 ? r.value : i.value ? x.value : m.value), J = No(() => `${R.value} ${B.value}`);
    return (M, X) => (gt(), Qt("dialog", {
      ref: "modal",
      "aria-modal": "",
      class: "fdic-speedbump__dialog",
      role: "dialog",
      onClose: h,
      onKeydown: X[2] || (X[2] = Ef((V) => p(!1), ["esc"]))
    }, [
      Ce("div", {
        class: "fdic-speedbump__content",
        "aria-label": J.value
      }, [
        Ce("header", null, [
          we(Pe(jf), {
            class: "fdic-speedbump__warning",
            height: "40",
            width: "40"
          }),
          Ce("h2", Lf, xt(Pe(R)), 1)
        ]),
        Ce("section", Bf, xt(B.value), 1),
        Ce("footer", kf, [
          Ce("button", {
            class: Tt([
              "fdic-speedbump__action-button",
              "fdic-speedbump__action-button--medium-emphasis"
            ]),
            onClick: X[0] || (X[0] = (V) => p(!1))
          }, xt(Pe(S)), 1),
          Ce("button", {
            class: Tt(["fdic-speedbump__action-button", "fdic-speedbump__action-button--high-emphasis"]),
            onClick: X[1] || (X[1] = (V) => p(!0))
          }, xt(Pe(ee)), 1)
        ])
      ], 8, Hf)
    ], 544));
  }
}), Wf = ".fdic-speedbump__dialog{background-color:rgb(var(--colorPlatformWhite));padding:0;border:none;width:360px;border-radius:var(--shapeBrandedLarge);box-shadow:0 calc(var(--surfacePlatformRaisedShadowY) * 1px) var(--surfacePlatformRaisedShadowBlurResting) rgba(var(--surfacePlatformRaisedShadowColor),var(--surfacePlatformRaisedShadowOpacity))}.fdic-speedbump__dialog header{display:flex;flex-direction:column;align-items:center}.fdic-speedbump__dialog section{text-align:center;font-size:16px;font-family:var(--typeBrandedBody1FontFamily);font-weight:var(--typeBrandedBody1FontWeight);letter-spacing:var(--typeBrandedBody1CharacterSpacing);line-height:24px;margin-top:0;margin-bottom:var(--spacingPlatformBase)}.fdic-speedbump__dialog footer{margin-top:0;width:100%;display:flex;gap:var(--spacingPlatformSmall)}.fdic-speedbump__dialog footer>*{flex-basis:100%}.fdic-speedbump__dialog::backdrop{background-color:rgb(var(--colorPlatformGray900));opacity:var(--colorPlatformAlpha500)}.fdic-speedbump__content{padding:var(--spacingPlatformBase);color:rgb(var(--colorPlatformGray900))}.fdic-speedbump__header{font-size:20px;font-family:var(--typeBrandedSmallHeadingFontFamily);font-weight:var(--typeBrandedSmallHeadingFontWeight);letter-spacing:var(--typeBrandedSmallHeadingCharacterSpacing);line-height:24px;margin-top:var(--spacingPlatformTiny);margin-bottom:var(--spacingPlatformTiny);text-align:center}.fdic-speedbump__warning :deep(path){fill:rgb(var(--colorPlatformGray900))}.fdic-speedbump__action-button{padding:var(--spacingPlatformSmall) var(--spacingPlatformBase);border-radius:var(--shapeBrandedSmall);background-color:transparent;border:2px solid;cursor:pointer;font-family:var(--typeBrandedButtonFontFamily);font-weight:var(--typeBrandedButtonFontWeight);letter-spacing:var(--typeBrandedButtonCharacterSpacing);font-size:16px}.fdic-speedbump__action-button:active{transform:scale3d(.98,.96,1)}.fdic-speedbump__action-button--high-emphasis{border-color:rgb(var(--colorBrandedAffordance));background-color:rgb(var(--colorBrandedAffordance));color:rgb(var(--colorBrandedAffordanceOnColor))}.fdic-speedbump__action-button--high-emphasis:hover,.fdic-speedbump__action-button--high-emphasis:active{border-color:rgb(var(--colorBrandedAffordanceHover));background-color:rgb(var(--colorBrandedAffordanceHover));color:rgb(var(--colorBrandedAffordanceHoverOnColor))}.fdic-speedbump__action-button--medium-emphasis{border-color:rgb(var(--colorBrandedAffordanceAccessible));background-color:transparent;color:rgb(var(--colorBrandedAffordanceAccessible))}", Kf = /* @__PURE__ */ as(Uf, [["styles", [Wf]]]), qf = /* @__PURE__ */ fs(If), Gf = /* @__PURE__ */ fs(Kf);
customElements.define("iris-fdic-notice", qf);
customElements.define("iris-fdic-speedbump", Gf);
