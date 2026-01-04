"use strict";
var aa = {},
  ba,
  ca,
  da,
  ea,
  fa,
  ia,
  ja,
  ka,
  la,
  ma,
  na,
  oa,
  pa,
  qa,
  ra,
  ta,
  wa,
  xa,
  ya,
  za,
  Aa,
  z,
  Ba,
  Ca,
  Da,
  Ea,
  Ha,
  E,
  Ia,
  Ja,
  Ka,
  La,
  Ma,
  Na,
  Oa,
  Pa,
  Qa,
  Ra,
  Sa,
  Ta,
  Va,
  Wa,
  Xa,
  Ya,
  Za,
  ab,
  bb,
  cb,
  db,
  eb,
  kb,
  lb,
  mb,
  nb,
  ob,
  pb,
  qb,
  rb,
  sb,
  tb,
  ub,
  vb,
  wb,
  xb,
  yb,
  zb,
  Ab,
  Bb,
  Cb,
  Db,
  Fb,
  Gb,
  Hb,
  Ib,
  Jb,
  Kb,
  Lb,
  Mb,
  Nb,
  Ob,
  Rb,
  Sb,
  Tb,
  Ub,
  Vb,
  Wb,
  Xb,
  Yb,
  Zb,
  $b,
  ac,
  bc,
  cc,
  dc,
  ec,
  fc,
  gc,
  hc = {};
"function" !== typeof Object.getPrototypeOf &&
  (Object.getPrototypeOf =
    "object" === typeof "test".__proto__
      ? function (g) {
          return g.__proto__;
        }
      : function (g) {
          return g.constructor.prototype;
        });
(function () {
  function g(a, c, h, b) {
    this.set(a, c, h, b);
  }
  function l() {
    this.Xb =
      this.Wb =
      this.$b =
      this.Zb =
      this.jc =
      this.ic =
      this.wb =
      this.ub =
        0;
  }
  function d(a, c, h, b) {
    a < c
      ? h < b
        ? ((v = a < h ? a : h), (F = c > b ? c : b))
        : ((v = a < b ? a : b), (F = c > h ? c : h))
      : h < b
      ? ((v = c < h ? c : h), (F = a > b ? a : b))
      : ((v = c < b ? c : b), (F = a > h ? a : h));
  }
  function f() {
    this.items = this.Zd = null;
    this.li = 0;
    B && (this.Zd = new Set());
    this.mh = [];
    this.Ye = !0;
  }
  function e(a) {
    C[I++] = a;
  }
  function p() {
    this.M = this.gl = this.y = this.Ch = 0;
  }
  function b(a) {
    this.Hb = [];
    this.rj = this.tj = this.uj = this.sj = 0;
    this.Ni(a);
  }
  function k(a, c) {
    this.cm = a;
    this.am = c;
    this.cells = {};
  }
  function w(a, c) {
    this.cm = a;
    this.am = c;
    this.cells = {};
  }
  function r(a, c, h) {
    var b;
    return D.length
      ? ((b = D.pop()), (b.Hm = a), (b.x = c), (b.y = h), b)
      : new ca(a, c, h);
  }
  function a(a, c, h) {
    this.Hm = a;
    this.x = c;
    this.y = h;
    this.Kb = new da();
  }
  function c(a, c, h) {
    var b;
    return Q.length
      ? ((b = Q.pop()), (b.Hm = a), (b.x = c), (b.y = h), b)
      : new ea(a, c, h);
  }
  function m(a, c, h) {
    this.Hm = a;
    this.x = c;
    this.y = h;
    this.Kb = [];
    this.Fg = !0;
    this.Wd = new da();
    this.yh = !1;
  }
  function n(a, c) {
    return a.Bd - c.Bd;
  }
  fa = function (a) {
    window.console && window.console.log && window.console.log(a);
  };
  ia = function (a) {
    window.console && window.console.error && window.console.error(a);
  };
  ba = function (a) {
    return a;
  };
  ja = function (a) {
    return "undefined" === typeof a;
  };
  ka = function (a) {
    return "number" === typeof a;
  };
  la = function (a) {
    return "string" === typeof a;
  };
  ma = function (a) {
    return 0 > a ? -a : a;
  };
  na = function (a, c) {
    return a > c ? a : c;
  };
  oa = function (a, c) {
    return a < c ? a : c;
  };
  pa = Math.PI;
  qa = function (a) {
    return 0 <= a ? a | 0 : (a | 0) - 1;
  };
  ra = function (a) {
    var c = a | 0;
    return c === a ? c : c + 1;
  };
  ta = function (a, c, h, b, u, x, e, n) {
    var m, d, k, q;
    a < h ? ((d = a), (m = h)) : ((d = h), (m = a));
    u < e ? ((q = u), (k = e)) : ((q = e), (k = u));
    if (m < q || d > k) return !1;
    c < b ? ((d = c), (m = b)) : ((d = b), (m = c));
    x < n ? ((q = x), (k = n)) : ((q = n), (k = x));
    if (m < q || d > k) return !1;
    m = u - a + e - h;
    d = x - c + n - b;
    a = h - a;
    c = b - c;
    u = e - u;
    x = n - x;
    n = ma(c * u - x * a);
    return ma(u * d - x * m) > n ? !1 : ma(a * d - c * m) <= n;
  };
  g.prototype.set = function (a, c, h, b) {
    this.left = a;
    this.top = c;
    this.right = h;
    this.bottom = b;
  };
  g.prototype.Gh = function (a) {
    this.left = a.left;
    this.top = a.top;
    this.right = a.right;
    this.bottom = a.bottom;
  };
  g.prototype.width = function () {
    return this.right - this.left;
  };
  g.prototype.height = function () {
    return this.bottom - this.top;
  };
  g.prototype.offset = function (a, c) {
    this.left += a;
    this.top += c;
    this.right += a;
    this.bottom += c;
    return this;
  };
  g.prototype.normalize = function () {
    var a = 0;
    this.left > this.right &&
      ((a = this.left), (this.left = this.right), (this.right = a));
    this.top > this.bottom &&
      ((a = this.top), (this.top = this.bottom), (this.bottom = a));
  };
  g.prototype.ax = function (a) {
    return !(
      a.right < this.left ||
      a.bottom < this.top ||
      a.left > this.right ||
      a.top > this.bottom
    );
  };
  g.prototype.bx = function (a, c, h) {
    return !(
      a.right + c < this.left ||
      a.bottom + h < this.top ||
      a.left + c > this.right ||
      a.top + h > this.bottom
    );
  };
  g.prototype.ac = function (a, c) {
    return (
      a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
    );
  };
  g.prototype.Jh = function (a) {
    return (
      this.left === a.left &&
      this.top === a.top &&
      this.right === a.right &&
      this.bottom === a.bottom
    );
  };
  wa = g;
  l.prototype.Mi = function (a) {
    this.ub = a.left;
    this.wb = a.top;
    this.ic = a.right;
    this.jc = a.top;
    this.Zb = a.right;
    this.$b = a.bottom;
    this.Wb = a.left;
    this.Xb = a.bottom;
  };
  l.prototype.sr = function (a, c) {
    if (0 === c) this.Mi(a);
    else {
      var h = Math.sin(c),
        b = Math.cos(c),
        u = a.left * h,
        x = a.top * h,
        e = a.right * h,
        h = a.bottom * h,
        m = a.left * b,
        n = a.top * b,
        d = a.right * b,
        b = a.bottom * b;
      this.ub = m - x;
      this.wb = n + u;
      this.ic = d - x;
      this.jc = n + e;
      this.Zb = d - h;
      this.$b = b + e;
      this.Wb = m - h;
      this.Xb = b + u;
    }
  };
  l.prototype.offset = function (a, c) {
    this.ub += a;
    this.wb += c;
    this.ic += a;
    this.jc += c;
    this.Zb += a;
    this.$b += c;
    this.Wb += a;
    this.Xb += c;
    return this;
  };
  var v = 0,
    F = 0;
  l.prototype.Ap = function (a) {
    d(this.ub, this.ic, this.Zb, this.Wb);
    a.left = v;
    a.right = F;
    d(this.wb, this.jc, this.$b, this.Xb);
    a.top = v;
    a.bottom = F;
  };
  l.prototype.ac = function (a, c) {
    var h = this.ub,
      b = this.wb,
      u = this.ic - h,
      x = this.jc - b,
      e = this.Zb - h,
      m = this.$b - b,
      n = a - h,
      d = c - b,
      k = u * u + x * x,
      q = u * e + x * m,
      x = u * n + x * d,
      f = e * e + m * m,
      p = e * n + m * d,
      v = 1 / (k * f - q * q),
      u = (f * x - q * p) * v,
      k = (k * p - q * x) * v;
    if (0 <= u && 0 < k && 1 > u + k) return !0;
    u = this.Wb - h;
    x = this.Xb - b;
    k = u * u + x * x;
    q = u * e + x * m;
    x = u * n + x * d;
    v = 1 / (k * f - q * q);
    u = (f * x - q * p) * v;
    k = (k * p - q * x) * v;
    return 0 <= u && 0 < k && 1 > u + k;
  };
  l.prototype.Xe = function (a, c) {
    if (c)
      switch (a) {
        case 0:
          return this.ub;
        case 1:
          return this.ic;
        case 2:
          return this.Zb;
        case 3:
          return this.Wb;
        case 4:
          return this.ub;
        default:
          return this.ub;
      }
    else
      switch (a) {
        case 0:
          return this.wb;
        case 1:
          return this.jc;
        case 2:
          return this.$b;
        case 3:
          return this.Xb;
        case 4:
          return this.wb;
        default:
          return this.wb;
      }
  };
  l.prototype.Aq = function () {
    return (this.ub + this.ic + this.Zb + this.Wb) / 4;
  };
  l.prototype.Bq = function () {
    return (this.wb + this.jc + this.$b + this.Xb) / 4;
  };
  l.prototype.lq = function (a) {
    var c = a.Aq(),
      h = a.Bq();
    if (this.ac(c, h)) return !0;
    c = this.Aq();
    h = this.Bq();
    if (a.ac(c, h)) return !0;
    var b, u, x, e, m, n, d, k;
    for (d = 0; 4 > d; d++)
      for (k = 0; 4 > k; k++)
        if (
          ((c = this.Xe(d, !0)),
          (h = this.Xe(d, !1)),
          (b = this.Xe(d + 1, !0)),
          (u = this.Xe(d + 1, !1)),
          (x = a.Xe(k, !0)),
          (e = a.Xe(k, !1)),
          (m = a.Xe(k + 1, !0)),
          (n = a.Xe(k + 1, !1)),
          ta(c, h, b, u, x, e, m, n))
        )
          return !0;
    return !1;
  };
  xa = l;
  ya = function (a, c) {
    for (var h in c) c.hasOwnProperty(h) && (a[h] = c[h]);
    return a;
  };
  za = function (a, c) {
    var h, b;
    c = qa(c);
    if (!(0 > c || c >= a.length)) {
      h = c;
      for (b = a.length - 1; h < b; h++) a[h] = a[h + 1];
      Aa(a, b);
    }
  };
  Aa = function (a, c) {
    a.length = c;
  };
  z = function (a) {
    Aa(a, 0);
  };
  Ba = function (a, c) {
    z(a);
    var h, b;
    h = 0;
    for (b = c.length; h < b; ++h) a[h] = c[h];
  };
  Ca = function (a, c) {
    a.push.apply(a, c);
  };
  Da = function (a, c) {
    var h, b;
    h = 0;
    for (b = a.length; h < b; ++h) if (a[h] === c) return h;
    return -1;
  };
  Ea = function (a, c) {
    var h = Da(a, c);
    -1 !== h && za(a, h);
  };
  Ha = function (a, c, h) {
    return a < c ? c : a > h ? h : a;
  };
  E = function (a) {
    return a / (180 / pa);
  };
  Ia = function (a) {
    return (180 / pa) * a;
  };
  Ja = function (a) {
    a %= 360;
    0 > a && (a += 360);
    return a;
  };
  Ka = function (a) {
    a %= 2 * pa;
    0 > a && (a += 2 * pa);
    return a;
  };
  La = function (a) {
    return Ja(Ia(a));
  };
  Ma = function (a) {
    return Ka(E(a));
  };
  Na = function (a, c, h, b) {
    return Math.atan2(b - c, h - a);
  };
  Oa = function (a, c) {
    if (a === c) return 0;
    var h = Math.sin(a),
      b = Math.cos(a),
      u = Math.sin(c),
      x = Math.cos(c),
      h = h * u + b * x;
    return 1 <= h ? 0 : -1 >= h ? pa : Math.acos(h);
  };
  Pa = function (a, c, h) {
    var b = Math.sin(a),
      u = Math.cos(a),
      x = Math.sin(c),
      e = Math.cos(c);
    return Math.acos(b * x + u * e) > h
      ? 0 < u * x - b * e
        ? Ka(a + h)
        : Ka(a - h)
      : Ka(c);
  };
  Qa = function (a, c) {
    var h = Math.sin(a),
      b = Math.cos(a),
      u = Math.sin(c),
      x = Math.cos(c);
    return 0 >= b * u - h * x;
  };
  Ra = function (a, c, h, b, u, x) {
    if (0 === h) return x ? a : c;
    var e = Math.sin(h);
    h = Math.cos(h);
    a -= b;
    c -= u;
    var m = a * e;
    a = a * h - c * e;
    c = c * h + m;
    return x ? a + b : c + u;
  };
  Sa = function (a, c, h, b) {
    a = h - a;
    c = b - c;
    return Math.sqrt(a * a + c * c);
  };
  Ta = function (a, c) {
    return !a !== !c;
  };
  Va = function (a) {
    for (var c in a) if (a.hasOwnProperty(c)) return !0;
    return !1;
  };
  Wa = function (a) {
    for (var c in a) a.hasOwnProperty(c) && delete a[c];
  };
  var A = +new Date();
  Xa = function () {
    if ("undefined" !== typeof window.performance) {
      var a = window.performance;
      if ("undefined" !== typeof a.now) return a.now();
      if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
      if ("undefined" !== typeof a.mozNow) return a.mozNow();
      if ("undefined" !== typeof a.msNow) return a.msNow();
    }
    return Date.now() - A;
  };
  var q = !1,
    h = (q = !1),
    t = !1;
  "undefined" !== typeof window &&
    ((q =
      /chrome/i.test(navigator.userAgent) ||
      /chromium/i.test(navigator.userAgent)),
    (q = !q && /safari/i.test(navigator.userAgent)),
    (h = /(iphone|ipod|ipad)/i.test(navigator.userAgent)),
    (t = window.c2ejecta));
  var B =
    !q &&
    !t &&
    !h &&
    "undefined" !== typeof Set &&
    "undefined" !== typeof Set.prototype.forEach;
  f.prototype.contains = function (a) {
    return this.xe()
      ? !1
      : B
      ? this.Zd.has(a)
      : this.items && this.items.hasOwnProperty(a);
  };
  f.prototype.add = function (a) {
    if (B) this.Zd.has(a) || (this.Zd.add(a), (this.Ye = !1));
    else {
      var c = a.toString(),
        h = this.items;
      h
        ? h.hasOwnProperty(c) || ((h[c] = a), this.li++, (this.Ye = !1))
        : ((this.items = {}),
          (this.items[c] = a),
          (this.li = 1),
          (this.Ye = !1));
    }
  };
  f.prototype.remove = function (a) {
    if (!this.xe())
      if (B) this.Zd.has(a) && (this.Zd["delete"](a), (this.Ye = !1));
      else if (this.items) {
        a = a.toString();
        var c = this.items;
        c.hasOwnProperty(a) && (delete c[a], this.li--, (this.Ye = !1));
      }
  };
  f.prototype.clear = function () {
    this.xe() ||
      (B ? this.Zd.clear() : ((this.items = null), (this.li = 0)),
      z(this.mh),
      (this.Ye = !0));
  };
  f.prototype.xe = function () {
    return 0 === this.count();
  };
  f.prototype.count = function () {
    return B ? this.Zd.size : this.li;
  };
  var C = null,
    I = 0;
  f.prototype.Py = function () {
    if (!this.Ye) {
      if (B)
        z(this.mh),
          (C = this.mh),
          (I = 0),
          this.Zd.forEach(e),
          (C = null),
          (I = 0);
      else {
        var a = this.mh;
        z(a);
        var c,
          h = 0,
          b = this.items;
        if (b) for (c in b) b.hasOwnProperty(c) && (a[h++] = b[c]);
      }
      this.Ye = !0;
    }
  };
  f.prototype.Oe = function () {
    this.Py();
    return this.mh;
  };
  da = f;
  new da();
  Ya = function (a, c) {
    B ? Za(a, c.Zd) : ab(a, c.Oe());
  };
  Za = function (a, c) {
    var h, b, u, x;
    b = h = 0;
    for (u = a.length; h < u; ++h) (x = a[h]), c.has(x) || (a[b++] = x);
    Aa(a, b);
  };
  ab = function (a, c) {
    var h, b, u, x;
    b = h = 0;
    for (u = a.length; h < u; ++h) (x = a[h]), -1 === Da(c, x) && (a[b++] = x);
    Aa(a, b);
  };
  p.prototype.add = function (a) {
    this.y = a - this.Ch;
    this.gl = this.M + this.y;
    this.Ch = this.gl - this.M - this.y;
    this.M = this.gl;
  };
  p.prototype.reset = function () {
    this.M = this.gl = this.y = this.Ch = 0;
  };
  bb = p;
  cb = function (a) {
    return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };
  b.prototype.Ni = function (a) {
    this.gr = a;
    this.ud = a.length / 2;
    this.Hb.length = a.length;
    this.wj = this.xj = -1;
    this.Cp = 0;
  };
  b.prototype.Cg = function () {
    return !this.gr.length;
  };
  b.prototype.ma = function () {
    for (
      var a = this.Hb,
        c = a[0],
        h = c,
        b = a[1],
        u = b,
        x,
        e,
        m = 1,
        d = this.ud;
      m < d;
      ++m
    )
      (e = 2 * m),
        (x = a[e]),
        (e = a[e + 1]),
        x < c && (c = x),
        x > h && (h = x),
        e < b && (b = e),
        e > u && (u = e);
    this.sj = c;
    this.tj = h;
    this.uj = b;
    this.rj = u;
  };
  b.prototype.Mi = function (a, c, h) {
    this.Hb.length = 8;
    this.ud = 4;
    var b = this.Hb;
    b[0] = a.left - c;
    b[1] = a.top - h;
    b[2] = a.right - c;
    b[3] = a.top - h;
    b[4] = a.right - c;
    b[5] = a.bottom - h;
    b[6] = a.left - c;
    b[7] = a.bottom - h;
    this.xj = a.right - a.left;
    this.wj = a.bottom - a.top;
    this.ma();
  };
  b.prototype.dh = function (a, c, h, b, u) {
    this.Hb.length = 8;
    this.ud = 4;
    var x = this.Hb;
    x[0] = a.ub - c;
    x[1] = a.wb - h;
    x[2] = a.ic - c;
    x[3] = a.jc - h;
    x[4] = a.Zb - c;
    x[5] = a.$b - h;
    x[6] = a.Wb - c;
    x[7] = a.Xb - h;
    this.xj = b;
    this.wj = u;
    this.ma();
  };
  b.prototype.rr = function (a) {
    this.ud = a.ud;
    Ba(this.Hb, a.Hb);
    this.sj = a.sj;
    this.uj - a.uj;
    this.tj = a.tj;
    this.rj = a.rj;
  };
  b.prototype.ng = function (a, c, h) {
    if (this.xj !== a || this.wj !== c || this.Cp !== h) {
      this.xj = a;
      this.wj = c;
      this.Cp = h;
      var b,
        u,
        x,
        e,
        m,
        d = 0,
        n = 1,
        k = this.gr,
        q = this.Hb;
      0 !== h && ((d = Math.sin(h)), (n = Math.cos(h)));
      h = 0;
      for (x = this.ud; h < x; h++)
        (b = 2 * h),
          (u = b + 1),
          (e = k[b] * a),
          (m = k[u] * c),
          (q[b] = e * n - m * d),
          (q[u] = m * n + e * d);
      this.ma();
    }
  };
  b.prototype.ac = function (a, c) {
    var h = this.Hb;
    if (a === h[0] && c === h[1]) return !0;
    var b,
      u,
      x,
      e = this.ud,
      m = this.sj - 110,
      d = this.uj - 101,
      n = this.tj + 131,
      k = this.rj + 120,
      q,
      f,
      p = 0,
      v = 0;
    for (b = 0; b < e; b++)
      (u = 2 * b),
        (x = ((b + 1) % e) * 2),
        (q = h[u]),
        (u = h[u + 1]),
        (f = h[x]),
        (x = h[x + 1]),
        ta(m, d, a, c, q, u, f, x) && p++,
        ta(n, k, a, c, q, u, f, x) && v++;
    return 1 === p % 2 || 1 === v % 2;
  };
  b.prototype.Zh = function (a, c, h) {
    var b = a.Hb,
      u = this.Hb;
    if (this.ac(b[0] + c, b[1] + h) || a.ac(u[0] - c, u[1] - h)) return !0;
    var x, e, m, d, n, k, q, f, p, v, t, l;
    x = 0;
    for (d = this.ud; x < d; x++)
      for (
        e = 2 * x,
          m = ((x + 1) % d) * 2,
          f = u[e],
          e = u[e + 1],
          p = u[m],
          v = u[m + 1],
          m = 0,
          q = a.ud;
        m < q;
        m++
      )
        if (
          ((n = 2 * m),
          (k = ((m + 1) % q) * 2),
          (t = b[n] + c),
          (n = b[n + 1] + h),
          (l = b[k] + c),
          (k = b[k + 1] + h),
          ta(f, e, p, v, t, n, l, k))
        )
          return !0;
    return !1;
  };
  db = b;
  k.prototype.ff = function (a, c, h) {
    var b;
    b = this.cells[a];
    return b
      ? (b = b[c])
        ? b
        : h
        ? ((b = r(this, a, c)), (this.cells[a][c] = b))
        : null
      : h
      ? ((b = r(this, a, c)), (this.cells[a] = {}), (this.cells[a][c] = b))
      : null;
  };
  k.prototype.tc = function (a) {
    return qa(a / this.cm);
  };
  k.prototype.uc = function (a) {
    return qa(a / this.am);
  };
  k.prototype.update = function (a, c, h) {
    var b, u, x, e, m;
    if (c)
      for (b = c.left, u = c.right; b <= u; ++b)
        for (x = c.top, e = c.bottom; x <= e; ++x)
          if (!h || !h.ac(b, x))
            if ((m = this.ff(b, x, !1)))
              m.remove(a),
                m.xe() &&
                  (m.Kb.clear(),
                  1e3 > D.length && D.push(m),
                  (this.cells[b][x] = null));
    if (h)
      for (b = h.left, u = h.right; b <= u; ++b)
        for (x = h.top, e = h.bottom; x <= e; ++x)
          (c && c.ac(b, x)) || this.ff(b, x, !0).Pm(a);
  };
  k.prototype.Tk = function (a, c) {
    var h, b, u, x, e, m;
    h = this.tc(a.left);
    u = this.uc(a.top);
    b = this.tc(a.right);
    for (e = this.uc(a.bottom); h <= b; ++h)
      for (x = u; x <= e; ++x) (m = this.ff(h, x, !1)) && m.dump(c);
  };
  eb = k;
  w.prototype.ff = function (a, h, b) {
    var e;
    e = this.cells[a];
    return e
      ? (e = e[h])
        ? e
        : b
        ? ((e = c(this, a, h)), (this.cells[a][h] = e))
        : null
      : b
      ? ((e = c(this, a, h)), (this.cells[a] = {}), (this.cells[a][h] = e))
      : null;
  };
  w.prototype.tc = function (a) {
    return qa(a / this.cm);
  };
  w.prototype.uc = function (a) {
    return qa(a / this.am);
  };
  w.prototype.update = function (a, c, h) {
    var b, u, x, e, m;
    if (c)
      for (b = c.left, u = c.right; b <= u; ++b)
        for (x = c.top, e = c.bottom; x <= e; ++x)
          if (!h || !h.ac(b, x))
            if ((m = this.ff(b, x, !1)))
              m.remove(a),
                m.xe() &&
                  (m.reset(),
                  1e3 > Q.length && Q.push(m),
                  (this.cells[b][x] = null));
    if (h)
      for (b = h.left, u = h.right; b <= u; ++b)
        for (x = h.top, e = h.bottom; x <= e; ++x)
          (c && c.ac(b, x)) || this.ff(b, x, !0).Pm(a);
  };
  w.prototype.Tk = function (a, c, h, b, u) {
    var x, e;
    a = this.tc(a);
    c = this.uc(c);
    h = this.tc(h);
    for (x = this.uc(b); a <= h; ++a)
      for (b = c; b <= x; ++b) (e = this.ff(a, b, !1)) && e.dump(u);
  };
  w.prototype.xx = function (a) {
    var c, h, b, u, x;
    c = a.left;
    b = a.top;
    h = a.right;
    for (u = a.bottom; c <= h; ++c)
      for (a = b; a <= u; ++a) if ((x = this.ff(c, a, !1))) x.Fg = !1;
  };
  kb = w;
  var D = [];
  a.prototype.xe = function () {
    return this.Kb.xe();
  };
  a.prototype.Pm = function (a) {
    this.Kb.add(a);
  };
  a.prototype.remove = function (a) {
    this.Kb.remove(a);
  };
  a.prototype.dump = function (a) {
    Ca(a, this.Kb.Oe());
  };
  ca = a;
  var Q = [];
  m.prototype.xe = function () {
    if (!this.Kb.length) return !0;
    if (this.Kb.length > this.Wd.count()) return !1;
    this.tm();
    return !0;
  };
  m.prototype.Pm = function (a) {
    this.Wd.contains(a)
      ? (this.Wd.remove(a), this.Wd.xe() && (this.yh = !1))
      : this.Kb.length
      ? (this.Kb[this.Kb.length - 1].Kd() > a.Kd() && (this.Fg = !1),
        this.Kb.push(a))
      : (this.Kb.push(a), (this.Fg = !0));
  };
  m.prototype.remove = function (a) {
    this.Wd.add(a);
    this.yh = !0;
    30 <= this.Wd.count() && this.tm();
  };
  m.prototype.tm = function () {
    this.yh &&
      (this.Wd.count() === this.Kb.length
        ? this.reset()
        : (Ya(this.Kb, this.Wd), this.Wd.clear(), (this.yh = !1)));
  };
  m.prototype.Lv = function () {
    this.Fg || (this.Kb.sort(n), (this.Fg = !0));
  };
  m.prototype.reset = function () {
    z(this.Kb);
    this.Fg = !0;
    this.Wd.clear();
    this.yh = !1;
  };
  m.prototype.dump = function (a) {
    this.tm();
    this.Lv();
    this.Kb.length && a.push(this.Kb);
  };
  ea = m;
  var J =
    "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(
      " "
    );
  lb = function (a) {
    return 0 >= a || 11 <= a ? "source-over" : J[a - 1];
  };
  mb = function (a, c, h) {
    if (h)
      switch (((a.hc = h.ONE), (a.cc = h.ONE_MINUS_SRC_ALPHA), c)) {
        case 1:
          a.hc = h.ONE;
          a.cc = h.ONE;
          break;
        case 3:
          a.hc = h.ONE;
          a.cc = h.ZERO;
          break;
        case 4:
          a.hc = h.ONE_MINUS_DST_ALPHA;
          a.cc = h.ONE;
          break;
        case 5:
          a.hc = h.DST_ALPHA;
          a.cc = h.ZERO;
          break;
        case 6:
          a.hc = h.ZERO;
          a.cc = h.SRC_ALPHA;
          break;
        case 7:
          a.hc = h.ONE_MINUS_DST_ALPHA;
          a.cc = h.ZERO;
          break;
        case 8:
          a.hc = h.ZERO;
          a.cc = h.ONE_MINUS_SRC_ALPHA;
          break;
        case 9:
          a.hc = h.DST_ALPHA;
          a.cc = h.ONE_MINUS_SRC_ALPHA;
          break;
        case 10:
          (a.hc = h.ONE_MINUS_DST_ALPHA), (a.cc = h.SRC_ALPHA);
      }
  };
  nb = function (a) {
    return Math.round(1e6 * a) / 1e6;
  };
  ob = function (a, c) {
    return "string" !== typeof a ||
      "string" !== typeof c ||
      a.length !== c.length
      ? !1
      : a === c
      ? !0
      : a.toLowerCase() === c.toLowerCase();
  };
  pb = function (a) {
    a = a.target;
    return !a ||
      a === document ||
      a === window ||
      (document && document.body && a === document.body) ||
      ob(a.tagName, "canvas")
      ? !0
      : !1;
  };
})();
(function () {
  function g(a) {
    if (a && (a.getContext || a.dc) && !a.c2runtime) {
      a.c2runtime = this;
      var c = this;
      this.ec =
        (this.zg =
          /crosswalk/i.test(navigator.userAgent) ||
          /xwalk/i.test(navigator.userAgent) ||
          !(
            "undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk
          )) ||
        ("undefined" !== typeof window.device &&
          ("undefined" !== typeof window.device.cordova ||
            "undefined" !== typeof window.device.phonegap)) ||
        ("undefined" !== typeof window.c2iscordova && window.c2iscordova);
      this.Qb = !!a.dc;
      this.mq = "undefined" !== typeof window.AppMobi || this.Qb;
      this.vc = !!window.c2cocoonjs;
      this.bd = !!window.c2ejecta;
      this.vc &&
        (CocoonJS.App.onSuspended.addEventListener(function () {
          c.setSuspended(!0);
        }),
        CocoonJS.App.onActivated.addEventListener(function () {
          c.setSuspended(!1);
        }));
      this.bd &&
        (document.addEventListener("pagehide", function () {
          c.setSuspended(!0);
        }),
        document.addEventListener("pageshow", function () {
          c.setSuspended(!1);
        }),
        document.addEventListener("resize", function () {
          c.setSize(window.innerWidth, window.innerHeight);
        }));
      this.La = this.Qb || this.vc || this.bd;
      this.ei = /edge\//i.test(navigator.userAgent);
      this.ci =
        (/msie/i.test(navigator.userAgent) ||
          /trident/i.test(navigator.userAgent) ||
          /iemobile/i.test(navigator.userAgent)) &&
        !this.ei;
      this.Wm = /tizen/i.test(navigator.userAgent);
      this.yg =
        /android/i.test(navigator.userAgent) &&
        !this.Wm &&
        !this.ci &&
        !this.ei;
      this.sq =
        (/iphone/i.test(navigator.userAgent) ||
          /ipod/i.test(navigator.userAgent)) &&
        !this.ci &&
        !this.ei;
      this.tx = /ipad/i.test(navigator.userAgent);
      this.lf = this.sq || this.tx || this.bd;
      this.bi =
        (/chrome/i.test(navigator.userAgent) ||
          /chromium/i.test(navigator.userAgent)) &&
        !this.ci &&
        !this.ei;
      this.ai = /amazonwebappplatform/i.test(navigator.userAgent);
      this.ix = /firefox/i.test(navigator.userAgent);
      this.nx =
        /safari/i.test(navigator.userAgent) && !this.bi && !this.ci && !this.ei;
      this.ox = /windows/i.test(navigator.userAgent);
      this.gk = this.Nd =
        "undefined" !== typeof window.c2nodewebkit ||
        "undefined" !== typeof window.c2nwjs ||
        /nodewebkit/i.test(navigator.userAgent) ||
        /nwjs/i.test(navigator.userAgent);
      this.hx = "undefined" !== typeof window.is_scirra_arcade;
      this.Xm = !(
        "undefined" === typeof window.c2isWindows8 || !window.c2isWindows8
      );
      this.rx = !(
        "undefined" === typeof window.c2isWindows8Capable ||
        !window.c2isWindows8Capable
      );
      this.cd = !(
        "undefined" === typeof window.c2isWindowsPhone8 ||
        !window.c2isWindowsPhone8
      );
      this.ik = !(
        "undefined" === typeof window.c2isWindowsPhone81 ||
        !window.c2isWindowsPhone81
      );
      this.hk = !!window.cr_windows10;
      this.hi = this.Xm || this.rx || this.ik || this.hk;
      this.Rm = !(
        "undefined" === typeof window.c2isBlackberry10 ||
        !window.c2isBlackberry10
      );
      this.fk =
        this.yg && !this.bi && !this.zg && !this.ix && !this.ai && !this.La;
      this.devicePixelRatio = 1;
      this.Md =
        this.ec ||
        this.zg ||
        this.mq ||
        this.vc ||
        this.yg ||
        this.lf ||
        this.cd ||
        this.ik ||
        this.Rm ||
        this.Wm ||
        this.bd;
      this.Md ||
        (this.Md =
          /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(
            navigator.userAgent
          ));
      this.Bg = !!(this.lf && this.ec && window.indexedDB);
      this.Km = null;
      this.Yw = "";
      this.Bg &&
        (this.Km =
          cordova && cordova.plugins && cordova.plugins.CorHttpd
            ? cordova.plugins.CorHttpd
            : null);
      "undefined" === typeof cr_is_preview ||
        this.Nd ||
        ("?nw" !== window.location.search &&
          !/nodewebkit/i.test(navigator.userAgent) &&
          !/nwjs/i.test(navigator.userAgent)) ||
        (this.Nd = !0);
      this.nq =
        "undefined" !== typeof cr_is_preview &&
        -1 < window.location.search.indexOf("debug");
      this.canvas = a;
      this.Zl = document.getElementById("c2canvasdiv");
      this.H = this.ad = null;
      this.Gm = "(unavailable)";
      this.Gf = !1;
      this.Ff = 0;
      this.Ea = null;
      this.vm = "";
      this.Qj = !1;
      this.Nq = this.Oq = 0;
      this.canvas.oncontextmenu = function (a) {
        a.preventDefault && a.preventDefault();
        return !1;
      };
      this.canvas.onselectstart = function (a) {
        a.preventDefault && a.preventDefault();
        return !1;
      };
      this.Qb && (window.c2runtime = this);
      this.Nd &&
        ((window.ondragover = function (a) {
          a.preventDefault();
          return !1;
        }),
        (window.ondrop = function (a) {
          a.preventDefault();
          return !1;
        }),
        window.nwgui &&
          window.nwgui.App.clearCache &&
          window.nwgui.App.clearCache());
      this.fk &&
        "undefined" !== typeof jQuery &&
        jQuery("canvas").parents("*").css("overflow", "visible");
      this.width = a.width;
      this.height = a.height;
      this.T = this.width;
      this.S = this.height;
      this.Bj = this.width;
      this.Ih = this.height;
      this.Jg = window.innerWidth;
      this.Ig = window.innerHeight;
      this.rw = !1;
      this.ua = !0;
      this.gi = !1;
      Date.now ||
        (Date.now = function () {
          return +new Date();
        });
      this.plugins = [];
      this.types = {};
      this.G = [];
      this.Ua = [];
      this.Lg = {};
      this.td = [];
      this.om = {};
      this.te = [];
      this.oh = [];
      this.pl = [];
      this.Xu = [];
      this.Yu = [];
      this.Ar = null;
      this.Df = {};
      this.Tm = this.hf = !1;
      this.sd = 0;
      this.Sm = this.Vm = !1;
      this.qd = [];
      this.di = !1;
      this.ze = this.fc = this.sk = this.Wn = "";
      this.Ti = this.xr = !1;
      this.Pj = [];
      this.Ef = this.re = 0;
      this.Cq = 30;
      this.fm = this.pi = 0;
      this.xf = 1;
      this.qb = new bb();
      this.Pe = new bb();
      this.Ak = this.Uj = this.Lh = this.zd = this.Sf = this.um = this.nk = 0;
      this.Eh = null;
      this.Hj = [];
      this.nm = [];
      this.Lj = -1;
      this.gn = [[]];
      this.no = this.vk = 0;
      this.Sk(null);
      this.jn = [];
      this.xk = -1;
      this.Iq = this.si = 0;
      this.bn = !0;
      this.Mh = 0;
      this.Ui = [];
      this.jo = this.Jn = -1;
      this.ki = !0;
      this.Vf = 0;
      this.Od = !1;
      this.Fy = 0;
      this.mg = null;
      this.bb = this.ak = !1;
      this.Mq = new da();
      this.qn = new da();
      this.rn = new da();
      this.Fi = [];
      this.yd = new db([]);
      this.io = new db([]);
      this.lg = [];
      this.wg = {};
      this.Ze = {};
      this.Ue = {};
      this.nh = {};
      this.yp = {};
      this.xq =
        this.rk =
        this.rb =
        this.Fb =
        this.wq =
        this.qk =
        this.Ma =
          null;
      this.lh = this.Ym = !1;
      this.wm = [null, null];
      this.we = 0;
      this.qm = "";
      this.Ee = {};
      this.Qi = this.nf = null;
      this.yr = "";
      this.zk = [];
      this.gy();
    }
  }
  function l(a, c) {
    return 128 >= c ? a[3] : 256 >= c ? a[2] : 512 >= c ? a[1] : a[0];
  }
  function d() {
    try {
      return !!window.indexedDB;
    } catch (a) {
      return !1;
    }
  }
  function f(a) {
    a.target.result.createObjectStore("saves", {
      keyPath: "slot",
    });
  }
  function e(a, c, h, b) {
    try {
      var e = indexedDB.open("_C2SaveStates");
      e.onupgradeneeded = f;
      e.onerror = b;
      e.onsuccess = function (e) {
        e = e.target.result;
        e.onerror = b;
        e.transaction(["saves"], "readwrite").objectStore("saves").put({
          slot: a,
          data: c,
        }).onsuccess = h;
      };
    } catch (m) {
      b(m);
    }
  }
  function p(a, c, h) {
    try {
      var b = indexedDB.open("_C2SaveStates");
      b.onupgradeneeded = f;
      b.onerror = h;
      b.onsuccess = function (b) {
        b = b.target.result;
        b.onerror = h;
        var e = b.transaction(["saves"]).objectStore("saves").get(a);
        e.onsuccess = function () {
          e.result ? c(e.result.data) : c(null);
        };
      };
    } catch (e) {
      h(e);
    }
  }
  function b() {
    fa("Reloading for continuous preview");
    window.c2cocoonjs
      ? CocoonJS.App.reload()
      : -1 < window.location.search.indexOf("continuous")
      ? window.location.reload(!0)
      : (window.location = window.location + "?continuous");
  }
  function k(a) {
    var c,
      h = {};
    for (c in a)
      !a.hasOwnProperty(c) ||
        a[c] instanceof da ||
        (a[c] && "undefined" !== typeof a[c].Yz) ||
        ("spriteCreatedDestroyCallback" !== c && (h[c] = a[c]));
    return h;
  }
  var w =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
  g.prototype.gy = function () {
    var a = this;
    if (this.Bg)
      this.Km
        ? this.Km.startServer(
            {
              port: 0,
              localhost_only: !0,
            },
            function (c) {
              a.Yw = c;
              a.pm(
                "data.js",
                function (c) {
                  a.Mg(JSON.parse(c));
                },
                function () {
                  // alert("Error fetching data.js")
                }
              );
            },
            function (a) {
              // alert("error starting local server: " + a)
            }
          )
        : this.pm(
            "data.js",
            function (c) {
              a.Mg(JSON.parse(c));
            },
            function () {
              // alert("Error fetching data.js")
            }
          );
    else {
      var c;
      this.cd
        ? (c = new ActiveXObject("Microsoft.XMLHTTP"))
        : (c = new XMLHttpRequest());
      var h = "data.js";
      if (this.Xm || this.cd || this.ik || this.hk) h = "data.json";
      c.open("GET", h, !0);
      var b = !1;
      if (!this.La && "response" in c && "responseType" in c)
        try {
          (c.responseType = "json"), (b = "json" === c.responseType);
        } catch (e) {
          b = !1;
        }
      if (!b && "responseType" in c)
        try {
          c.responseType = "text";
        } catch (m) {}
      if ("overrideMimeType" in c)
        try {
          c.overrideMimeType("application/json; charset=utf-8");
        } catch (d) {}
      this.cd
        ? (c.onreadystatechange = function () {
            4 === c.readyState && a.Mg(JSON.parse(c.responseText));
          })
        : ((c.onload = function () {
            if (b) a.Mg(c.response);
            else if (a.bd) {
              var h = c.responseText,
                h = h.substr(h.indexOf("{"));
              a.Mg(JSON.parse(h));
            } else a.Mg(JSON.parse(c.responseText));
          }),
          (c.onerror = function (a) {
            ia("Error requesting " + h + ":");
            ia(a);
          }));
      c.send();
    }
  };
  g.prototype.$w = function () {
    var a = this,
      c,
      h,
      b,
      e,
      m,
      d,
      n,
      k,
      q;
    this.Qf = (!this.La || this.bd || this.ec) && this.Ry && !this.fk;
    0 === this.nc && this.lf && (this.Qf = !1);
    this.devicePixelRatio = this.Qf
      ? window.devicePixelRatio ||
        window.webkitDevicePixelRatio ||
        window.mozDevicePixelRatio ||
        window.msDevicePixelRatio ||
        1
      : 1;
    this.Ub();
    h = !(
      !this.rw &&
      (!this.Sl ||
        this.Nd ||
        this.hi ||
        this.cd ||
        this.zg ||
        this.ec ||
        this.ai)
    );
    0 < this.nc && this.setSize(window.innerWidth, window.innerHeight, !0);
    try {
      this.Jv &&
        (this.vc || this.bd || !this.La) &&
        ((c = {
          alpha: h,
          depth: !1,
          antialias: !1,
          failIfMajorPerformanceCaveat: !0,
        }),
        (this.ad =
          this.canvas.getContext("webgl", c) ||
          this.canvas.getContext("experimental-webgl", c)));
    } catch (f) {}
    if (this.ad) {
      if ((c = this.ad.getExtension("WEBGL_debug_renderer_info")))
        this.Gm =
          this.ad.getParameter(c.UNMASKED_RENDERER_WEBGL) +
          " [" +
          this.ad.getParameter(c.UNMASKED_VENDOR_WEBGL) +
          "]";
      this.Gf && (this.Gm += " [front-to-back enabled]");
      this.La ||
        ((this.Rb = document.createElement("canvas")),
        jQuery(this.Rb).appendTo(this.canvas.parentNode),
        (this.Rb.oncontextmenu = function () {
          return !1;
        }),
        (this.Rb.onselectstart = function () {
          return !1;
        }),
        (this.Rb.width = Math.round(this.Bj * this.devicePixelRatio)),
        (this.Rb.height = Math.round(this.Ih * this.devicePixelRatio)),
        jQuery(this.Rb).css({
          width: this.Bj + "px",
          height: this.Ih + "px",
        }),
        this.dr(),
        (this.Bn = this.Rb.getContext("2d")));
      this.H = new aa.kz(this.ad, this.Md, this.Gf);
      this.H.bh(this.canvas.width, this.canvas.height);
      this.H.$z = 0 !== this.Bv;
      this.Ea = null;
      this.canvas.addEventListener(
        "webglcontextlost",
        function (c) {
          c.preventDefault();
          a.Ex();
          fa("[Construct 2] WebGL context lost");
          window.cr_setSuspended(!0);
        },
        !1
      );
      this.canvas.addEventListener(
        "webglcontextrestored",
        function () {
          a.H.hA();
          a.H.bh(a.H.width, a.H.height, !0);
          a.Fb = null;
          a.rb = null;
          a.wm[0] = null;
          a.wm[1] = null;
          a.Fx();
          a.ua = !0;
          fa("[Construct 2] WebGL context restored");
          window.cr_setSuspended(!1);
        },
        !1
      );
      c = 0;
      for (h = this.G.length; c < h; c++)
        for (m = this.G[c], b = 0, e = m.ca.length; b < e; b++)
          (n = m.ca[b]),
            (n.tb = this.H.bq(n.id)),
            (n.sf = this.H.er(n.tb)),
            (this.lh = this.lh || this.H.Rk(n.tb));
      c = 0;
      for (h = this.td.length; c < h; c++) {
        k = this.td[c];
        b = 0;
        for (e = k.ca.length; b < e; b++)
          (n = k.ca[b]), (n.tb = this.H.bq(n.id)), (n.sf = this.H.er(n.tb));
        k.Ad();
        b = 0;
        for (e = k.ea.length; b < e; b++) {
          q = k.ea[b];
          m = 0;
          for (d = q.ca.length; m < d; m++)
            (n = q.ca[m]),
              (n.tb = this.H.bq(n.id)),
              (n.sf = this.H.er(n.tb)),
              (this.lh = this.lh || this.H.Rk(n.tb));
          q.Ad();
        }
      }
    } else {
      if (0 < this.nc && this.Qb) {
        this.canvas = null;
        document.oncontextmenu = function () {
          return !1;
        };
        document.onselectstart = function () {
          return !1;
        };
        this.Ea = AppMobi.canvas.getContext("2d");
        try {
          (this.Ea.samplingMode = this.fa ? "smooth" : "sharp"),
            (this.Ea.globalScale = 1),
            (this.Ea.HTML5CompatibilityMode = !0),
            (this.Ea.imageSmoothingEnabled = this.fa);
        } catch (p) {}
        0 !== this.width &&
          0 !== this.height &&
          ((this.Ea.width = this.width), (this.Ea.height = this.height));
      }
      this.Ea ||
        (this.vc
          ? ((c = {
              antialias: !!this.fa,
              alpha: h,
            }),
            (this.Ea = this.canvas.getContext("2d", c)))
          : ((c = {
              alpha: h,
            }),
            (this.Ea = this.canvas.getContext("2d", c))),
        (this.Ea.webkitImageSmoothingEnabled = this.fa),
        (this.Ea.mozImageSmoothingEnabled = this.fa),
        (this.Ea.msImageSmoothingEnabled = this.fa),
        (this.Ea.imageSmoothingEnabled = this.fa));
      this.Bn = this.Rb = null;
    }
    this.Jr = function (c) {
      a.Ta(!1, c);
    };
    window == window.top ||
      this.La ||
      this.hi ||
      this.cd ||
      (document.addEventListener(
        "mousedown",
        function () {
          window.focus();
        },
        !0
      ),
      document.addEventListener(
        "touchstart",
        function () {
          window.focus();
        },
        !0
      ));
    "undefined" !== typeof cr_is_preview &&
      (this.vc &&
        console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"),
      -1 < window.location.search.indexOf("continuous") &&
        (fa("Reloading for continuous preview"),
        (this.sk = "__c2_continuouspreview"),
        (this.Ti = !0)),
      this.Mx &&
        !this.Md &&
        (jQuery(window).focus(function () {
          a.setSuspended(!1);
        }),
        jQuery(window).blur(function () {
          a.setSuspended(!0);
        })));
    window.addEventListener("blur", function () {
      a.Vg();
    });
    this.La ||
      ((c = function (a) {
        if (
          pb(a) &&
          document.activeElement &&
          document.activeElement !== document.getElementsByTagName("body")[0] &&
          document.activeElement.blur
        )
          try {
            document.activeElement.blur();
          } catch (c) {}
      }),
      window.navigator.pointerEnabled
        ? document.addEventListener("pointerdown", c)
        : window.navigator.msPointerEnabled
        ? document.addEventListener("MSPointerDown", c)
        : document.addEventListener("touchstart", c),
      document.addEventListener("mousedown", c));
    0 === this.nc &&
      this.Qf &&
      1 < this.devicePixelRatio &&
      this.setSize(this.gb, this.fb, !0);
    this.Pr();
    this.Uw();
    this.go();
    this.X = {};
  };
  g.prototype.setSize = function (a, c, h) {
    var b = 0,
      e = 0,
      m = 0,
      n = 0,
      n = 0;
    if (this.Jg !== a || this.Ig !== c || h) {
      this.Jg = a;
      this.Ig = c;
      var d = this.nc,
        k =
          (document.mozFullScreen ||
            document.webkitIsFullScreen ||
            !!document.msFullscreenElement ||
            document.fullScreen ||
            this.Od) &&
          !this.ec;
      if (k || 0 !== this.nc || h)
        k && 0 < this.we && (d = this.we),
          (h = this.devicePixelRatio),
          4 <= d
            ? ((m = this.gb / this.fb),
              a / c > m
                ? ((m *= c),
                  5 === d
                    ? ((n = (m * h) / this.gb),
                      1 < n
                        ? (n = Math.floor(n))
                        : 1 > n && (n = 1 / Math.ceil(1 / n)),
                      (m = (this.gb * n) / h),
                      (n = (this.fb * n) / h),
                      (b = (a - m) / 2),
                      (e = (c - n) / 2),
                      (a = m),
                      (c = n))
                    : ((b = (a - m) / 2), (a = m)))
                : ((n = a / m),
                  5 === d
                    ? ((n = (n * h) / this.fb),
                      1 < n
                        ? (n = Math.floor(n))
                        : 1 > n && (n = 1 / Math.ceil(1 / n)),
                      (m = (this.gb * n) / h),
                      (n = (this.fb * n) / h),
                      (b = (a - m) / 2),
                      (e = (c - n) / 2),
                      (a = m))
                    : (e = (c - n) / 2),
                  (c = n)),
              k && !this.Nd && (e = b = 0))
            : this.Nd &&
              this.Od &&
              0 === this.Sp &&
              ((b = Math.floor((a - this.gb) / 2)),
              (e = Math.floor((c - this.fb) / 2)),
              (a = this.gb),
              (c = this.fb)),
          2 > d && (this.Ah = h),
          (this.Bj = Math.round(a)),
          (this.Ih = Math.round(c)),
          (this.width = Math.round(a * h)),
          (this.height = Math.round(c * h)),
          (this.ua = !0),
          this.as
            ? ((this.T = this.width), (this.S = this.height), (this.Oc = !0))
            : (this.width < this.gb && this.height < this.fb) || 1 === d
            ? ((this.T = this.width), (this.S = this.height), (this.Oc = !0))
            : ((this.T = this.gb),
              (this.S = this.fb),
              (this.Oc = !1),
              2 === d
                ? ((m = this.gb / this.fb),
                  (d = this.Jg / this.Ig),
                  d < m
                    ? (this.T = this.S * d)
                    : d > m && (this.S = this.T / d))
                : 3 === d &&
                  ((m = this.gb / this.fb),
                  (d = this.Jg / this.Ig),
                  d > m
                    ? (this.T = this.S * d)
                    : d < m && (this.S = this.T / d))),
          this.Zl &&
            !this.La &&
            (jQuery(this.Zl).css({
              width: Math.round(a) + "px",
              height: Math.round(c) + "px",
              "margin-left": Math.floor(b) + "px",
              "margin-top": Math.floor(e) + "px",
            }),
            "undefined" !== typeof cr_is_preview &&
              jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(c) + "px",
              })),
          this.canvas &&
            ((this.canvas.width = Math.round(a * h)),
            (this.canvas.height = Math.round(c * h)),
            this.bd
              ? ((this.canvas.style.left = Math.floor(b) + "px"),
                (this.canvas.style.top = Math.floor(e) + "px"),
                (this.canvas.style.width = Math.round(a) + "px"),
                (this.canvas.style.height = Math.round(c) + "px"))
              : this.Qf &&
                !this.La &&
                ((this.canvas.style.width = Math.round(a) + "px"),
                (this.canvas.style.height = Math.round(c) + "px"))),
          this.Rb &&
            ((this.Rb.width = Math.round(a * h)),
            (this.Rb.height = Math.round(c * h)),
            (this.Rb.style.width = this.Bj + "px"),
            (this.Rb.style.height = this.Ih + "px")),
          this.H && this.H.bh(Math.round(a * h), Math.round(c * h)),
          this.Qb &&
            this.Ea &&
            ((this.Ea.width = Math.round(a)), (this.Ea.height = Math.round(c))),
          this.Ea &&
            ((this.Ea.webkitImageSmoothingEnabled = this.fa),
            (this.Ea.mozImageSmoothingEnabled = this.fa),
            (this.Ea.msImageSmoothingEnabled = this.fa),
            (this.Ea.imageSmoothingEnabled = this.fa)),
          this.Pr(),
          this.sq && !this.ec && window.scrollTo(0, 0);
    }
  };
  g.prototype.Pr = function () {
    if (this.gv && 0 !== this.zn) {
      var a = "portrait";
      2 === this.zn && (a = "landscape");
      try {
        screen.orientation && screen.orientation.lock
          ? screen.orientation.lock(a)
          : screen.lockOrientation
          ? screen.lockOrientation(a)
          : screen.webkitLockOrientation
          ? screen.webkitLockOrientation(a)
          : screen.mozLockOrientation
          ? screen.mozLockOrientation(a)
          : screen.msLockOrientation && screen.msLockOrientation(a);
      } catch (c) {
        console &&
          console.warn &&
          console.warn("Failed to lock orientation: ", c);
      }
    }
  };
  g.prototype.Ex = function () {
    this.H.Zz();
    this.Ym = !0;
    var a, c, h;
    a = 0;
    for (c = this.G.length; a < c; a++) (h = this.G[a]), h.wi && h.wi();
  };
  g.prototype.Fx = function () {
    this.Ym = !1;
    var a, c, h;
    a = 0;
    for (c = this.G.length; a < c; a++) (h = this.G[a]), h.Dk && h.Dk();
  };
  g.prototype.dr = function () {
    if (!this.La) {
      var a =
        (document.mozFullScreen ||
          document.webkitIsFullScreen ||
          document.fullScreen ||
          document.msFullscreenElement ||
          this.Od) &&
        !this.ec
          ? jQuery(this.canvas).offset()
          : jQuery(this.canvas).position();
      a.position = "absolute";
      jQuery(this.Rb).css(a);
    }
  };
  var r =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame;
  g.prototype.setSuspended = function (a) {
    var c;
    if (a && !this.gi)
      for (
        fa("[Construct 2] Suspending"),
          this.gi = !0,
          -1 !== this.Jn && r && r(this.Jn),
          -1 !== this.jo && clearTimeout(this.jo),
          a = 0,
          c = this.Ui.length;
        a < c;
        a++
      )
        this.Ui[a](!0);
    else if (!a && this.gi) {
      fa("[Construct 2] Resuming");
      this.gi = !1;
      this.nk = Xa();
      this.Sf = Xa();
      a = this.pi = this.Uj = 0;
      for (c = this.Ui.length; a < c; a++) this.Ui[a](!1);
      this.Ta(!1);
    }
  };
  g.prototype.sp = function (a) {
    this.Ui.push(a);
  };
  g.prototype.Re = function (a) {
    return this.zk[a];
  };
  g.prototype.Mg = function (a) {
    (a && a.project) || ia("Project model unavailable");
    a = a.project;
    this.name = a[0];
    this.Rp = a[1];
    this.nc = a[12];
    this.Sp = a[12];
    this.gb = a[10];
    this.fb = a[11];
    this.$q = this.gb / 2;
    this.br = this.fb / 2;
    this.La &&
      !this.bd &&
      (4 <= a[12] || 0 === a[12]) &&
      (fa(
        "[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"
      ),
      (this.Sp = this.nc = 3));
    this.to = a[18];
    this.of = a[19];
    if (0 === this.of) {
      var c = new Image();
      c.crossOrigin = "anonymous";
      this.or(c, "loading-logo.png");
      this.nf = {
        wk: c,
      };
    } else if (4 === this.of) {
      c = new Image();
      c.src = "";
      var h = new Image();
      h.src = "";
      var b = new Image();
      b.src = "";
      var e = new Image();
      e.src = "";
      var m = new Image();
      m.src = "";
      var n = new Image();
      n.src = "";
      var d = new Image();
      d.src = "";
      var k = new Image();
      k.src = "";
      var q = new Image();
      q.src = "";
      var f = new Image();
      f.src = "";
      var p = new Image();
      p.src = "";
      var v = new Image();
      v.src = "";
      this.nf = {
        wk: [c, h, b, e],
        Tx: [m, n, d, k],
        Yy: [q, f, p, v],
      };
    }
    this.si = a[21];
    this.zk = ic();
    this.ae = new H(this);
    c = 0;
    for (h = a[2].length; c < h; c++)
      (d = a[2][c]),
        (b = this.Re(d[0])),
        qb(d, b.prototype),
        (k = new b(this)),
        (k.cl = d[1]),
        (k.kf = d[2]),
        (k.Eq = d[9]),
        k.I && k.I(),
        this.plugins.push(k);
    this.zk = ic();
    c = 0;
    for (h = a[3].length; c < h; c++) {
      d = a[3][c];
      m = this.Re(d[1]);
      k = null;
      b = 0;
      for (e = this.plugins.length; b < e; b++)
        if (this.plugins[b] instanceof m) {
          k = this.plugins[b];
          break;
        }
      q = new k.L(k);
      q.name = d[0];
      q.O = d[2];
      q.Qm = d[3].slice(0);
      q.Ty = d[3].length;
      q.hv = d[4];
      q.vw = d[5];
      q.la = d[11];
      q.O
        ? ((q.Og = []), (q.ve = this.Mh++), (q.Pa = null))
        : ((q.Og = null), (q.ve = -1), (q.Pa = []));
      q.Nj = null;
      q.sg = null;
      q.Lp = null;
      q.wc = !1;
      q.Dc = null;
      d[6]
        ? ((q.hl = d[6][0]), (q.il = d[6][1]), (q.hh = d[6][2]))
        : ((q.hl = null), (q.il = 0), (q.hh = 0));
      d[7] ? (q.Cc = d[7]) : (q.Cc = null);
      q.index = c;
      q.n = [];
      q.Ej = [];
      q.Le = [new rb(q)];
      q.Ed = 0;
      q.Yc = null;
      q.xv = 0;
      q.fh = !0;
      q.rl = sb;
      q.Zp = tb;
      q.Ew = ub;
      q.Y = vb;
      q.Ci = wb;
      q.Di = xb;
      q.rf = yb;
      q.Xj = zb;
      q.xm = Ab;
      q.zm = Bb;
      q.Lc = Cb;
      q.Bm = Db;
      q.yj = new eb(this.gb, this.fb);
      q.oj = !0;
      q.pj = !1;
      q.X = {};
      q.toString = Fb;
      q.Ua = [];
      b = 0;
      for (e = d[8].length; b < e; b++) {
        f = d[8][b];
        p = this.Re(f[1]);
        v = null;
        m = 0;
        for (n = this.Ua.length; m < n; m++)
          if (this.Ua[m] instanceof p) {
            v = this.Ua[m];
            break;
          }
        v ||
          ((v = new p(this)),
          (v.nn = []),
          (v.yk = new da()),
          v.I && v.I(),
          this.Ua.push(v),
          hc.Ey && v instanceof hc.Ey && (this.Ar = v));
        -1 === v.nn.indexOf(q) && v.nn.push(q);
        m = new v.L(v, q);
        m.name = f[0];
        m.la = f[2];
        m.I();
        q.Ua.push(m);
      }
      q.global = d[9];
      q.Um = d[10];
      q.ca = [];
      b = 0;
      for (e = d[12].length; b < e; b++)
        q.ca.push({
          id: d[12][b][0],
          name: d[12][b][1],
          tb: -1,
          sf: !1,
          yb: !0,
          index: b,
        });
      q.CA = d[13];
      (this.to && !q.O && !q.Um && k.kf) || q.I();
      q.name && (this.types[q.name] = q);
      this.G.push(q);
      k.cl &&
        ((b = new k.J(q)),
        (b.uid = this.si++),
        (b.hr = this.Iq++),
        (b.Nf = 0),
        (b.Th = Gb),
        (b.toString = Hb),
        (b.C = d[14]),
        b.I(),
        q.n.push(b),
        (this.Ee[b.uid.toString()] = b));
    }
    c = 0;
    for (h = a[4].length; c < h; c++)
      for (m = a[4][c], n = this.G[m[0]], b = 1, e = m.length; b < e; b++)
        (d = this.G[m[b]]), d.Pa.push(n), n.Og.push(d);
    c = 0;
    for (h = a[28].length; c < h; c++) {
      m = a[28][c];
      n = [];
      b = 0;
      for (e = m.length; b < e; b++) n.push(this.G[m[b]]);
      b = 0;
      for (e = n.length; b < e; b++) (n[b].wc = !0), (n[b].Dc = n);
    }
    if (0 < this.Mh)
      for (c = 0, h = this.G.length; c < h; c++)
        if (((d = this.G[c]), !d.O && d.Pa.length)) {
          d.Nj = Array(this.Mh);
          d.sg = Array(this.Mh);
          d.Lp = Array(this.Mh);
          q = [];
          b = v = p = f = 0;
          for (e = d.Pa.length; b < e; b++)
            for (
              k = d.Pa[b],
                d.Nj[k.ve] = f,
                f += k.Ty,
                d.sg[k.ve] = p,
                p += k.hv,
                d.Lp[k.ve] = v,
                v += k.vw,
                m = 0,
                n = k.ca.length;
              m < n;
              m++
            )
              q.push(ya({}, k.ca[m]));
          d.ca = q.concat(d.ca);
          b = 0;
          for (e = d.ca.length; b < e; b++) d.ca[b].index = b;
        }
    c = 0;
    for (h = a[5].length; c < h; c++)
      (d = a[5][c]),
        (b = new Ib(this, d)),
        (this.Lg[b.name] = b),
        this.td.push(b);
    c = 0;
    for (h = a[6].length; c < h; c++)
      (d = a[6][c]),
        (b = new Jb(this, d)),
        (this.om[b.name] = b),
        this.te.push(b);
    c = 0;
    for (h = this.te.length; c < h; c++) this.te[c].kb();
    c = 0;
    for (h = this.te.length; c < h; c++) this.te[c].qo();
    c = 0;
    for (h = this.pl.length; c < h; c++) this.pl[c].kb();
    z(this.pl);
    this.dv = a[7];
    this.qm = a[8];
    this.Sc = a[9];
    this.Ah = 1;
    this.Jv = a[13];
    this.fa = a[14];
    this.Sl = a[15];
    this.Ry = a[17];
    this.zn = a[20];
    this.gv = 0 < this.zn;
    this.Mx = a[22];
    this.Oc = this.as = a[23];
    this.Bv = a[24];
    this.Ux = a[25];
    this.Gf = a[27] && !this.ci;
    this.dl = Date.now();
    z(this.zk);
    this.$w();
  };
  var a = !1;
  g.prototype.vo = function (c, h) {
    c.cocoonLazyLoad = !0;
    c.onerror = function (h) {
      a = c.Bp = !0;
      console &&
        console.error &&
        console.error("Error loading image '" + c.src + "': ", h);
    };
    this.bd
      ? (c.src = h)
      : c.src ||
        ("undefined" !== typeof XAPKReader
          ? XAPKReader.get(
              h,
              function (a) {
                c.src = a;
              },
              function (b) {
                a = c.Bp = !0;
                console &&
                  console.error &&
                  console.error(
                    "Error extracting image '" + h + "' from expansion file: ",
                    b
                  );
              }
            )
          : ((c.crossOrigin = "anonymous"), this.or(c, h)));
    this.oh.push(c);
  };
  g.prototype.qw = function (a) {
    var c, h;
    c = 0;
    for (h = this.oh.length; c < h; c++)
      if (this.oh[c].tv === a) return this.oh[c];
    return null;
  };
  var c = 0,
    m = !1;
  g.prototype.Uw = function () {
    this.mg && (c = this.mg.Ay(this.dv));
  };
  g.prototype.xp = function () {
    var a = c,
      h = 0,
      b = 0,
      e = !0,
      d,
      n,
      b = 0;
    for (d = this.oh.length; b < d; b++) {
      n = this.oh[b];
      var q = n.gm;
      if (!q || 0 >= q) q = 5e4;
      a += q;
      n.src && (n.complete || n.loaded) && !n.Bp ? (h += q) : (e = !1);
    }
    e &&
      this.Ux &&
      this.mg &&
      (m || (this.mg.Gy(), (m = !0)),
      (b = this.mg.Fw()),
      (h += b),
      b < c && (e = !1));
    this.aa = 0 == a ? 1 : h / a;
    return e;
  };
  var n = !1;
  g.prototype.go = function () {
    if (this.Ea || this.H) {
      var c = this.Ea || this.Bn;
      this.Rb && this.dr();
      var h = window.innerWidth,
        b = window.innerHeight;
      (this.Jg === h && this.Ig === b) || this.setSize(h, b);
      this.aa = 0;
      this.vq = -1;
      var e = this;
      if (this.xp() && (4 !== this.of || n)) this.Vw();
      else {
        b = Date.now() - this.dl;
        if (c) {
          var m = this.width,
            d = this.height,
            h = this.devicePixelRatio;
          if (3 > this.of && (this.vc || (500 <= b && this.vq != this.aa))) {
            c.clearRect(0, 0, m, d);
            var b = m / 2,
              d = d / 2,
              m = 0 === this.of && this.nf.wk.complete,
              q = 40 * h,
              k = 0,
              v = 80 * h,
              f;
            if (m) {
              var p = this.nf.wk,
                v = p.width * h;
              f = p.height * h;
              q = v / 2;
              k = f / 2;
              c.drawImage(p, qa(b - q), qa(d - k), v, f);
            }
            1 >= this.of
              ? ((b = qa(b - q) + 0.5),
                (d = qa(d + (k + (m ? 12 * h : 0))) + 0.5),
                (c.fillStyle = a ? "red" : "DodgerBlue"),
                c.fillRect(b, d, Math.floor(v * this.aa), 6 * h),
                (c.strokeStyle = "black"),
                c.strokeRect(b, d, v, 6 * h),
                (c.strokeStyle = "white"),
                c.strokeRect(b - 1 * h, d - 1 * h, v + 2 * h, 8 * h))
              : 2 === this.of &&
                ((c.font = this.bd ? "12pt ArialMT" : "12pt Arial"),
                (c.fillStyle = a ? "#f00" : "#999"),
                (c.BA = "middle"),
                (h = Math.round(100 * this.aa) + "%"),
                (m = c.measureText ? c.measureText(h) : null),
                c.fillText(h, b - (m ? m.width : 0) / 2, d));
            this.vq = this.aa;
          } else if (4 === this.of) {
            this.Gv(c);
            w
              ? w(function () {
                  e.go();
                })
              : setTimeout(function () {
                  e.go();
                }, 16);
            return;
          }
        }
        setTimeout(
          function () {
            e.go();
          },
          this.vc ? 10 : 100
        );
      }
    }
  };
  var v = -1,
    F = "undefined" === typeof cr_is_preview ? 200 : 0,
    A = !0,
    q = !1,
    h = 0,
    t = 0,
    B = "undefined" === typeof cr_is_preview ? 3e3 : 0,
    C = null,
    I = null,
    D = 0;
  g.prototype.Gv = function (c) {
    if (!n) {
      for (
        var b = Math.ceil(this.width),
          e = Math.ceil(this.height),
          m = this.nf.wk,
          d = this.nf.Tx,
          k = this.nf.Yy,
          f = 0;
        4 > f;
        ++f
      )
        if (!m[f].complete || !d[f].complete || !k[f].complete) return;
      0 === D && (v = Date.now());
      var f = Date.now(),
        p = !1,
        g = c,
        r,
        w;
      A || q
        ? (c.clearRect(0, 0, b, e),
          (C && C.width === b && C.height === e) ||
            ((C = document.createElement("canvas")),
            (C.width = b),
            (C.height = e),
            (I = C.getContext("2d"))),
          (g = I),
          (p = !0),
          A && 1 === D && (v = Date.now()))
        : (c.globalAlpha = 1);
      g.fillStyle = "#333333";
      g.fillRect(0, 0, b, e);
      256 < this.Ih
        ? ((r = Ha(0.22 * e, 105, 0.6 * b)),
          (w = 0.25 * r),
          g.drawImage(l(d, r), 0.5 * b - r / 2, 0.2 * e - w / 2, r, w),
          (w = r = Math.min(0.395 * e, 0.95 * b)),
          g.drawImage(l(m, r), 0.5 * b - r / 2, 0.485 * e - w / 2, r, w),
          (r = Ha(0.22 * e, 105, 0.6 * b)),
          (w = 0.25 * r),
          g.drawImage(l(k, r), 0.5 * b - r / 2, 0.868 * e - w / 2, r, w),
          (g.fillStyle = "#3C3C3C"),
          (r = b),
          (w = Math.max(0.005 * e, 2)),
          g.fillRect(0, 0.8 * e - w / 2, r, w),
          (g.fillStyle = a ? "red" : "#E0FF65"),
          (r = b * this.aa),
          g.fillRect(0.5 * b - r / 2, 0.8 * e - w / 2, r, w))
        : ((w = r = 0.55 * e),
          g.drawImage(l(m, r), 0.5 * b - r / 2, 0.45 * e - w / 2, r, w),
          (g.fillStyle = "#3C3C3C"),
          (r = b),
          (w = Math.max(0.005 * e, 2)),
          g.fillRect(0, 0.85 * e - w / 2, r, w),
          (g.fillStyle = a ? "red" : "#E0FF65"),
          (r = b * this.aa),
          g.fillRect(0.5 * b - r / 2, 0.85 * e - w / 2, r, w));
      p &&
        (A
          ? (c.globalAlpha = 0 === D ? 0 : Math.min((f - v) / 300, 1))
          : q && (c.globalAlpha = Math.max(1 - (f - t) / 300, 0)),
        c.drawImage(C, 0, 0, b, e));
      A && 300 <= f - v && 2 <= D && ((A = !1), (h = f));
      !A && f - h >= B && !q && 1 <= this.aa && ((q = !0), (t = f));
      if (
        (q && f - t >= 300 + F) ||
        ("undefined" !== typeof cr_is_preview &&
          1 <= this.aa &&
          500 > Date.now() - v)
      )
        (n = !0), (q = A = !1), (this.nf = I = C = null);
      ++D;
    }
  };
  g.prototype.Vw = function () {
    this.Rb &&
      (this.canvas.parentNode.removeChild(this.Rb), (this.Rb = this.Bn = null));
    this.dl = Date.now();
    this.Sf = Xa();
    var a, c, h;
    if (this.to)
      for (a = 0, c = this.G.length; a < c; a++)
        (h = this.G[a]), h.O || h.Um || !h.ra.kf || h.I();
    else this.ki = !1;
    a = 0;
    for (c = this.td.length; a < c; a++) this.td[a].uv();
    2 <= this.nc &&
      ((a = this.gb / this.fb),
      (c = this.width / this.height),
      (this.Ah =
        (2 !== this.nc && c > a) || (2 === this.nc && c < a)
          ? this.height / this.fb
          : this.width / this.gb));
    this.Rp ? this.Lg[this.Rp].fo() : this.td[0].fo();
    this.to || ((this.Vf = 1), this.trigger(H.prototype.k.El, null));
    navigator.splashscreen &&
      navigator.splashscreen.hide &&
      navigator.splashscreen.hide();
    a = 0;
    for (c = this.G.length; a < c; a++) (h = this.G[a]), h.Dx && h.Dx();
    document.hidden ||
    document.webkitHidden ||
    document.mozHidden ||
    document.msHidden
      ? window.cr_setSuspended(!0)
      : this.Ta(!1);
    this.Qb && AppMobi.webview.execute("onGameReady();");
  };
  g.prototype.Ta = function (a, c, h) {
    if (this.Ma) {
      var b = Xa();
      if (h || !this.gi || a) {
        a ||
          (w
            ? (this.Jn = w(this.Jr))
            : (this.jo = setTimeout(this.Jr, this.Md ? 1 : 16)));
        c = c || b;
        var e = this.nc;
        ((h =
          (document.mozFullScreen ||
            document.webkitIsFullScreen ||
            document.fullScreen ||
            !!document.msFullscreenElement) &&
          !this.ec) ||
          this.Od) &&
          0 < this.we &&
          (e = this.we);
        if (0 < e) {
          var e = window.innerWidth,
            m = window.innerHeight;
          (this.Jg === e && this.Ig === m) || this.setSize(e, m);
        }
        this.La ||
          (h
            ? (this.Qj ||
                ((this.vm = jQuery(this.canvas).css("margin") || "0"),
                (this.Qj = !0)),
              this.bi ||
                this.Nd ||
                jQuery(this.canvas).css({
                  "margin-left":
                    "" +
                    Math.floor(
                      (screen.width - this.width / this.devicePixelRatio) / 2
                    ) +
                    "px",
                  "margin-top":
                    "" +
                    Math.floor(
                      (screen.height - this.height / this.devicePixelRatio) / 2
                    ) +
                    "px",
                }))
            : this.Qj
            ? (this.bi || this.Nd || jQuery(this.canvas).css("margin", this.vm),
              (this.vm = ""),
              (this.Qj = !1),
              0 === this.nc &&
                this.setSize(
                  Math.round(this.Oq / this.devicePixelRatio),
                  Math.round(this.Nq / this.devicePixelRatio),
                  !0
                ))
            : ((this.Oq = this.width), (this.Nq = this.height)));
        this.ki &&
          ((h = this.xp()),
          (this.Vf = this.aa),
          h &&
            ((this.ki = !1),
            (this.aa = 1),
            this.trigger(H.prototype.k.El, null)));
        this.wx(c);
        (!this.ua && !this.vc) ||
          this.Ym ||
          this.Ti ||
          a ||
          ((this.ua = !1),
          this.H ? this.mc() : this.$c(),
          this.Qi &&
            (this.canvas &&
              this.canvas.toDataURL &&
              ((this.yr = this.canvas.toDataURL(this.Qi[0], this.Qi[1])),
              window.cr_onSnapshot && window.cr_onSnapshot(this.yr),
              this.trigger(H.prototype.k.mt, null)),
            (this.Qi = null)));
        this.gA || (this.zd++, this.Lh++, this.Uj++);
        this.pi += Xa() - b;
      }
    }
  };
  g.prototype.wx = function (a) {
    var c, h, b, e, m, d, n, q;
    1e3 <= a - this.Sf &&
      ((this.Sf += 1e3),
      1e3 <= a - this.Sf && (this.Sf = a),
      (this.um = this.Uj),
      (this.Uj = 0),
      (this.fm = this.pi),
      (this.pi = 0));
    c = 0;
    0 !== this.nk &&
      ((c = a - this.nk),
      0 > c && (c = 0),
      (this.Ef = c /= 1e3),
      0.5 < this.Ef
        ? (this.Ef = 0)
        : this.Ef > 1 / this.Cq && (this.Ef = 1 / this.Cq));
    this.nk = a;
    this.re = this.Ef * this.xf;
    this.qb.add(this.re);
    this.Pe.add(c);
    a =
      (document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.fullScreen ||
        !!document.msFullscreenElement ||
        this.Od) &&
      !this.ec;
    2 <= this.nc || (a && 0 < this.we)
      ? ((c = this.gb / this.fb),
        (h = this.width / this.height),
        (b = this.nc),
        a && 0 < this.we && (b = this.we),
        (this.Ah =
          (2 !== b && h > c) || (2 === b && h < c)
            ? this.height / this.fb
            : this.width / this.gb),
        this.Ma && (this.Ma.Xn(this.Ma.scrollX), this.Ma.Yn(this.Ma.scrollY)))
      : (this.Ah = this.Qf ? this.devicePixelRatio : 1);
    this.Ub();
    this.sd++;
    this.ae.ky();
    this.sd--;
    this.Ub();
    this.sd++;
    h = this.Mq.Oe();
    a = 0;
    for (c = h.length; a < c; a++) h[a].sA();
    a = 0;
    for (c = this.G.length; a < c; a++)
      if (((d = this.G[a]), !d.O && (d.Ua.length || d.Pa.length)))
        for (h = 0, b = d.n.length; h < b; h++)
          for (n = d.n[h], e = 0, m = n.V.length; e < m; e++) n.V[e].Ta();
    a = 0;
    for (c = this.G.length; a < c; a++)
      if (((d = this.G[a]), !d.O && (d.Ua.length || d.Pa.length)))
        for (h = 0, b = d.n.length; h < b; h++)
          for (n = d.n[h], e = 0, m = n.V.length; e < m; e++)
            (q = n.V[e]), q.Sx && q.Sx();
    h = this.qn.Oe();
    a = 0;
    for (c = h.length; a < c; a++) h[a].Ta();
    this.sd--;
    this.Ww();
    for (a = 0; this.Eh && 10 > a++; ) this.Kp(this.Eh);
    a = 0;
    for (c = this.te.length; a < c; a++) this.te[a].Jm = !1;
    this.Ma.If && this.Ma.If.sb();
    z(this.Fi);
    this.bn = !1;
    this.sd++;
    a = 0;
    for (c = this.G.length; a < c; a++)
      if (((d = this.G[a]), !d.O && (d.Ua.length || d.Pa.length)))
        for (h = 0, b = d.n.length; h < b; h++)
          for (n = d.n[h], e = 0, m = n.V.length; e < m; e++)
            (q = n.V[e]), q.ih && q.ih();
    h = this.rn.Oe();
    a = 0;
    for (c = h.length; a < c; a++) h[a].ih();
    this.sd--;
  };
  g.prototype.Vg = function () {
    var a, c, h, b, e, d, m, n, q;
    a = 0;
    for (c = this.G.length; a < c; a++)
      if (((m = this.G[a]), !m.O))
        for (h = 0, b = m.n.length; h < b; h++)
          if (((n = m.n[h]), n.Vg && n.Vg(), n.V))
            for (e = 0, d = n.V.length; e < d; e++)
              (q = n.V[e]), q.Vg && q.Vg();
  };
  g.prototype.Kp = function (a) {
    var c = this.Ma;
    this.Ma.Hy();
    var h, b, e;
    if (this.H)
      for (h = 0, b = this.G.length; h < b; h++)
        (e = this.G[h]),
          e.O ||
            !e.ql ||
            (e.global && 0 !== e.n.length) ||
            -1 !== a.Yh.indexOf(e) ||
            e.ql();
    c == a && z(this.ae.Tb);
    z(this.Fi);
    this.kr(!0);
    a.fo();
    this.kr(!1);
    this.bn = this.ua = !0;
    this.Ub();
  };
  g.prototype.kr = function (a) {
    var c, h, b, e, d, m, n, q, k;
    c = 0;
    for (h = this.Ua.length; c < h; c++)
      (b = this.Ua[c]), a ? b.ti && b.ti() : b.vi && b.vi();
    c = 0;
    for (h = this.G.length; c < h; c++)
      if (((b = this.G[c]), b.global || b.ra.cl))
        for (e = 0, d = b.n.length; e < d; e++)
          if (((m = b.n[e]), a ? m.ti && m.ti() : m.vi && m.vi(), m.V))
            for (n = 0, q = m.V.length; n < q; n++)
              (k = m.V[n]), a ? k.ti && k.ti() : k.vi && k.vi();
  };
  g.prototype.gg = function (a) {
    this.qn.add(a);
  };
  g.prototype.Jy = function (a) {
    this.rn.add(a);
  };
  g.prototype.Kf = function (a) {
    return a && -1 !== a.Rg ? this.Ef * a.Rg : this.re;
  };
  g.prototype.$c = function () {
    this.Ma.$c(this.Ea);
    this.Qb && this.Ea.present();
  };
  g.prototype.mc = function () {
    this.Gf && ((this.Ff = 1), this.Ma.df(this.H));
    this.Ma.mc(this.H);
    this.H.rA();
  };
  g.prototype.Rl = function (a) {
    a && this.Hj.push(a);
  };
  g.prototype.fy = function (a) {
    Ea(this.Hj, a);
  };
  g.prototype.Qh = function (a) {
    a = a.toString();
    return this.Ee.hasOwnProperty(a) ? this.Ee[a] : null;
  };
  var Q = [];
  g.prototype.yf = function (a) {
    var c, h;
    c = a.type.name;
    var b = null;
    if (this.Df.hasOwnProperty(c)) {
      if (((b = this.Df[c]), b.contains(a))) return;
    } else (b = Q.length ? Q.pop() : new da()), (this.Df[c] = b);
    b.add(a);
    this.hf = !0;
    if (a.wc)
      for (c = 0, h = a.siblings.length; c < h; c++) this.yf(a.siblings[c]);
    this.Tm && b.mh.push(a);
    this.Sm ||
      (this.sd++,
      this.trigger(Object.getPrototypeOf(a.type.ra).k.ot, a),
      this.sd--);
  };
  g.prototype.Ub = function () {
    if (this.hf) {
      var a, c, h, b, e, m;
      this.Tm = !0;
      h = 0;
      for (e = this.qd.length; h < e; ++h)
        for (
          a = this.qd[h], c = a.type, c.n.push(a), b = 0, m = c.Pa.length;
          b < m;
          ++b
        )
          c.Pa[b].n.push(a), (c.Pa[b].fh = !0);
      z(this.qd);
      this.Zs();
      Wa(this.Df);
      this.hf = this.Tm = !1;
    }
  };
  g.prototype.Zs = function () {
    for (var a in this.Df) this.Df.hasOwnProperty(a) && this.ls(this.Df[a]);
  };
  g.prototype.ls = function (a) {
    var c = a.Oe(),
      h = c[0].type,
      b,
      e,
      m,
      d,
      n,
      q;
    Ya(h.n, a);
    h.fh = !0;
    0 === h.n.length && (h.pj = !1);
    b = 0;
    for (e = h.Pa.length; b < e; ++b) (q = h.Pa[b]), Ya(q.n, a), (q.fh = !0);
    b = 0;
    for (e = this.ae.Tb.length; b < e; ++b)
      if (
        ((n = this.ae.Tb[b]),
        n.gc.hasOwnProperty(h.index) && Ya(n.gc[h.index].Ld, a),
        !h.O)
      )
        for (m = 0, d = h.Pa.length; m < d; ++m)
          (q = h.Pa[m]),
            n.gc.hasOwnProperty(q.index) && Ya(n.gc[q.index].Ld, a);
    if ((n = c[0].A)) {
      if (n.Vc)
        for (m = n.n, b = 0, e = m.length; b < e; ++b)
          (d = m[b]),
            a.contains(d) &&
              (d.ma(), n.Sb.update(d, d.zc, null), d.zc.set(0, 0, -1, -1));
      Ya(n.n, a);
      n.Ki(0);
    }
    for (b = 0; b < c.length; ++b) this.ks(c[b], h);
    a.clear();
    Q.push(a);
    this.ua = !0;
  };
  g.prototype.ks = function (a, c) {
    var h, b, e;
    h = 0;
    for (b = this.Hj.length; h < b; ++h) this.Hj[h](a);
    a.$e && c.yj.update(a, a.$e, null);
    (h = a.A) && h.Xg(a, !0);
    if (a.V)
      for (h = 0, b = a.V.length; h < b; ++h)
        (e = a.V[h]), e.pf && e.pf(), e.behavior.yk.remove(a);
    this.Mq.remove(a);
    this.qn.remove(a);
    this.rn.remove(a);
    a.pf && a.pf();
    this.Ee.hasOwnProperty(a.uid.toString()) &&
      delete this.Ee[a.uid.toString()];
    this.Ak--;
    100 > c.Ej.length && c.Ej.push(a);
  };
  g.prototype.hm = function (a, c, h, b) {
    if (a.O) {
      var e = qa(Math.random() * a.Og.length);
      return this.hm(a.Og[e], c, h, b);
    }
    return a.Yc ? this.bf(a.Yc, c, !1, h, b, !1) : null;
  };
  var J = [];
  g.prototype.bf = function (a, c, h, b, e, m) {
    var d, n, q, k;
    if (!a) return null;
    var f = this.G[a[1]],
      v = f.ra.kf;
    if ((this.ki && v && !f.Um) || (v && !this.H && 11 === a[0][11]))
      return null;
    var p = c;
    v || (c = null);
    var t;
    f.Ej.length
      ? ((t = f.Ej.pop()), (t.Kc = !0), f.ra.J.call(t, f))
      : ((t = new f.ra.J(f)), (t.Kc = !1));
    !h || m || this.Ee.hasOwnProperty(a[2].toString())
      ? (t.uid = this.si++)
      : (t.uid = a[2]);
    this.Ee[t.uid.toString()] = t;
    t.hr = this.Iq++;
    t.Nf = f.n.length;
    d = 0;
    for (n = this.qd.length; d < n; ++d) this.qd[d].type === f && t.Nf++;
    t.Th = Gb;
    t.toString = Hb;
    q = a[3];
    if (t.Kc) Wa(t.X);
    else {
      t.X = {};
      if ("undefined" !== typeof cr_is_preview)
        for (t.kq = [], t.kq.length = q.length, d = 0, n = q.length; d < n; d++)
          t.kq[d] = q[d][1];
      t.Eb = [];
      t.Eb.length = q.length;
    }
    d = 0;
    for (n = q.length; d < n; d++) t.Eb[d] = q[d][0];
    if (v) {
      var g = a[0];
      t.x = ja(b) ? g[0] : b;
      t.y = ja(e) ? g[1] : e;
      t.z = g[2];
      t.width = g[3];
      t.height = g[4];
      t.depth = g[5];
      t.q = g[6];
      t.opacity = g[7];
      t.pc = g[8];
      t.qc = g[9];
      t.Vb = g[10];
      d = g[11];
      !this.H && f.ca.length && (t.Vb = d);
      t.Fh = lb(t.Vb);
      this.ad && mb(t, t.Vb, this.ad);
      if (t.Kc) {
        d = 0;
        for (n = g[12].length; d < n; d++)
          for (q = 0, k = g[12][d].length; q < k; q++) t.Xa[d][q] = g[12][d][q];
        t.Ia.set(0, 0, 0, 0);
        t.$e.set(0, 0, -1, -1);
        t.zc.set(0, 0, -1, -1);
        t.Yb.Mi(t.Ia);
        z(t.Wl);
      } else {
        t.Xa = g[12].slice(0);
        d = 0;
        for (n = t.Xa.length; d < n; d++) t.Xa[d] = g[12][d].slice(0);
        t.ya = [];
        t.Te = [];
        t.Te.length = f.ca.length;
        t.Ia = new wa(0, 0, 0, 0);
        t.$e = new wa(0, 0, -1, -1);
        t.zc = new wa(0, 0, -1, -1);
        t.Yb = new xa();
        t.Wl = [];
        t.P = Kb;
        t.Vz = Lb;
        t.ac = Mb;
        t.ma = Nb;
        t.Qy = Ob;
        t.Xr = Rb;
        t.Kd = Sb;
      }
      t.Wi = !1;
      t.My = 0;
      t.Ly = 0;
      t.Ky = null;
      14 === g.length &&
        ((t.Wi = !0), (t.My = g[13][0]), (t.Ly = g[13][1]), (t.Ky = g[13][2]));
      d = 0;
      for (n = f.ca.length; d < n; d++) t.Te[d] = !0;
      t.Je = !0;
      t.Ad = Tb;
      t.Ad();
      t.Zr = !!t.ya.length;
      t.Vl = !0;
      t.$l = !0;
      f.oj = !0;
      t.visible = !0;
      t.Rg = -1;
      t.A = c;
      t.Bd = c.n.length;
      t.Ff = 0;
      "undefined" === typeof t.Da && (t.Da = null);
      this.ua = t.me = !0;
    }
    var r;
    z(J);
    d = 0;
    for (n = f.Pa.length; d < n; d++) J.push.apply(J, f.Pa[d].Ua);
    J.push.apply(J, f.Ua);
    if (t.Kc)
      for (d = 0, n = J.length; d < n; d++) {
        var l = J[d];
        r = t.V[d];
        r.Kc = !0;
        l.behavior.J.call(r, l, t);
        g = a[4][d];
        q = 0;
        for (k = g.length; q < k; q++) r.C[q] = g[q];
        r.I();
        l.behavior.yk.add(t);
      }
    else
      for (t.V = [], d = 0, n = J.length; d < n; d++)
        (l = J[d]),
          (r = new l.behavior.J(l, t)),
          (r.Kc = !1),
          (r.C = a[4][d].slice(0)),
          r.I(),
          t.V.push(r),
          l.behavior.yk.add(t);
    g = a[5];
    if (t.Kc) for (d = 0, n = g.length; d < n; d++) t.C[d] = g[d];
    else t.C = g.slice(0);
    this.qd.push(t);
    this.hf = !0;
    c && (c.zh(t, !0), 1 !== c.xc || 1 !== c.yc) && (f.pj = !0);
    this.Ak++;
    if (f.wc) {
      if (((t.wc = !0), t.Kc ? z(t.siblings) : (t.siblings = []), !h && !m)) {
        d = 0;
        for (n = f.Dc.length; d < n; d++)
          if (f.Dc[d] !== f) {
            if (!f.Dc[d].Yc) return null;
            t.siblings.push(
              this.bf(f.Dc[d].Yc, p, !1, v ? t.x : b, v ? t.y : e, !0)
            );
          }
        d = 0;
        for (n = t.siblings.length; d < n; d++)
          for (t.siblings[d].siblings.push(t), q = 0; q < n; q++)
            d !== q && t.siblings[d].siblings.push(t.siblings[q]);
      }
    } else (t.wc = !1), (t.siblings = null);
    t.I();
    d = 0;
    for (n = t.V.length; d < n; d++) t.V[d].Rx && t.V[d].Rx();
    return t;
  };
  g.prototype.ug = function (a) {
    var c, h;
    c = 0;
    for (h = this.Ma.ea.length; c < h; c++) {
      var b = this.Ma.ea[c];
      if (ob(b.name, a)) return b;
    }
    return null;
  };
  g.prototype.Jd = function (a) {
    a = qa(a);
    0 > a && (a = 0);
    a >= this.Ma.ea.length && (a = this.Ma.ea.length - 1);
    return this.Ma.ea[a];
  };
  g.prototype.Yj = function (a) {
    return ka(a) ? this.Jd(a) : this.ug(a.toString());
  };
  g.prototype.dm = function (a) {
    var c, h;
    c = 0;
    for (h = a.length; c < h; c++) a[c].Y().ga = !0;
  };
  g.prototype.Ci = function (a) {
    var c, h;
    c = 0;
    for (h = a.length; c < h; c++) a[c].Ci();
  };
  g.prototype.Di = function (a) {
    var c, h;
    c = 0;
    for (h = a.length; c < h; c++) a[c].Di();
  };
  g.prototype.rf = function (a) {
    var c, h;
    c = 0;
    for (h = a.length; c < h; c++) a[c].rf();
  };
  g.prototype.Tr = function (a) {
    if (a.oj) {
      var c,
        h,
        b = a.n;
      c = 0;
      for (h = b.length; c < h; ++c) b[c].Xr();
      b = this.qd;
      c = 0;
      for (h = b.length; c < h; ++c) b[c].type === a && b[c].Xr();
      a.oj = !1;
    }
  };
  g.prototype.Vp = function (a, c, h, b) {
    var d,
      e,
      m = a ? 1 !== a.xc || 1 !== a.yc : !1;
    if (c.O)
      for (a = 0, d = c.Og.length; a < d; ++a)
        (e = c.Og[a]), m || e.pj ? Ca(b, e.n) : (this.Tr(e), e.yj.Tk(h, b));
    else m || c.pj ? Ca(b, c.n) : (this.Tr(c), c.yj.Tk(h, b));
  };
  g.prototype.Hw = function (a, c, h, b) {
    var d, e;
    d = 0;
    for (e = c.length; d < e; ++d) this.Vp(a, c[d], h, b);
  };
  g.prototype.Gw = function (a, c, h) {
    var b = this.Ar;
    b && this.Hw(a, b.nn, c, h);
  };
  g.prototype.gh = function (a, c, h, b) {
    var d = a.Y(),
      e,
      m,
      n,
      q,
      k = this.Cb().nb.ed,
      f,
      t,
      v;
    if (d.ga)
      for (b || ((d.ga = !1), z(d.n)), e = 0, q = a.n.length; e < q; e++)
        if (
          ((n = a.n[e]),
          n.ma(),
          (f = n.A.Za(c, h, !0)),
          (t = n.A.Za(c, h, !1)),
          n.ac(f, t))
        ) {
          if (b) return !1;
          d.n.push(n);
        } else k && d.ja.push(n);
    else {
      m = 0;
      v = k ? d.ja : d.n;
      e = 0;
      for (q = v.length; e < q; e++)
        if (
          ((n = v[e]),
          n.ma(),
          (f = n.A.Za(c, h, !0)),
          (t = n.A.Za(c, h, !1)),
          n.ac(f, t))
        ) {
          if (b) return !1;
          k ? d.n.push(n) : ((d.n[m] = d.n[e]), m++);
        }
      b || (v.length = m);
    }
    a.Lc();
    return b ? !0 : d.Im();
  };
  g.prototype.eg = function (a, c) {
    if (!(a && c && a !== c && a.me && c.me)) return !1;
    a.ma();
    c.ma();
    var h = a.A,
      b = c.A,
      d,
      e,
      n,
      m,
      q,
      k,
      f,
      t;
    if (
      h === b ||
      (h.xc === b.xc &&
        b.yc === b.yc &&
        h.scale === b.scale &&
        h.q === b.q &&
        h.kc === b.kc)
    ) {
      if (!a.Ia.ax(c.Ia) || !a.Yb.lq(c.Yb) || (a.Wi && c.Wi)) return !1;
      if (a.Wi) return this.Fr(a, c);
      if (c.Wi) return this.Fr(c, a);
      f = a.Da && !a.Da.Cg();
      d = c.Da && !c.Da.Cg();
      if (!f && !d) return !0;
      f
        ? (a.Da.ng(a.width, a.height, a.q), (f = a.Da))
        : (this.yd.dh(a.Yb, a.x, a.y, a.width, a.height), (f = this.yd));
      d
        ? (c.Da.ng(c.width, c.height, c.q), (t = c.Da))
        : (this.yd.dh(c.Yb, c.x, c.y, c.width, c.height), (t = this.yd));
      return f.Zh(t, c.x - a.x, c.y - a.y);
    }
    f = a.Da && !a.Da.Cg();
    d = c.Da && !c.Da.Cg();
    f
      ? (a.Da.ng(a.width, a.height, a.q), this.yd.rr(a.Da))
      : this.yd.dh(a.Yb, a.x, a.y, a.width, a.height);
    f = this.yd;
    d
      ? (c.Da.ng(c.width, c.height, c.q), this.io.rr(c.Da))
      : this.io.dh(c.Yb, c.x, c.y, c.width, c.height);
    t = this.io;
    d = 0;
    for (e = f.ud; d < e; d++)
      (n = 2 * d),
        (m = n + 1),
        (q = f.Hb[n]),
        (k = f.Hb[m]),
        (f.Hb[n] = h.Ra(q + a.x, k + a.y, !0)),
        (f.Hb[m] = h.Ra(q + a.x, k + a.y, !1));
    f.ma();
    d = 0;
    for (e = t.ud; d < e; d++)
      (n = 2 * d),
        (m = n + 1),
        (q = t.Hb[n]),
        (k = t.Hb[m]),
        (t.Hb[n] = b.Ra(q + c.x, k + c.y, !0)),
        (t.Hb[m] = b.Ra(q + c.x, k + c.y, !1));
    t.ma();
    return f.Zh(t, 0, 0);
  };
  var M = new xa();
  new wa(0, 0, 0, 0);
  var X = [];
  g.prototype.Fr = function (a, c) {
    var h,
      b,
      d,
      e,
      n = c.Ia,
      m = a.x,
      q = a.y;
    a.bA(n, X);
    var k = c.Da && !c.Da.Cg();
    h = 0;
    for (b = X.length; h < b; ++h)
      if (
        ((d = X[h]),
        (e = d.wA),
        n.bx(e, m, q) && (M.Mi(e), M.offset(m, q), M.lq(c.Yb)))
      )
        if (k)
          if ((c.Da.ng(c.width, c.height, c.q), d.En)) {
            if (d.En.Zh(c.Da, c.x - (m + e.left), c.y - (q + e.top)))
              return z(X), !0;
          } else {
            if (
              (this.yd.dh(M, 0, 0, e.right - e.left, e.bottom - e.top),
              this.yd.Zh(c.Da, c.x, c.y))
            )
              return z(X), !0;
          }
        else if (d.En) {
          if (
            (this.yd.dh(c.Yb, 0, 0, c.width, c.height),
            d.En.Zh(this.yd, -(m + e.left), -(q + e.top)))
          )
            return z(X), !0;
        } else return z(X), !0;
    z(X);
    return !1;
  };
  g.prototype.Qr = function (a, c) {
    if (!c) return !1;
    var h, b, d, e, n;
    h = 0;
    for (b = a.Ua.length; h < b; h++)
      if (a.Ua[h].behavior instanceof c) return !0;
    if (!a.O)
      for (h = 0, b = a.Pa.length; h < b; h++)
        for (n = a.Pa[h], d = 0, e = n.Ua.length; d < e; d++)
          if (n.Ua[d].behavior instanceof c) return !0;
    return !1;
  };
  g.prototype.oo = function (a) {
    return this.Qr(a, hc.sz);
  };
  g.prototype.po = function (a) {
    return this.Qr(a, hc.uz);
  };
  var U = [];
  g.prototype.fg = function (a) {
    var c, h, b;
    a.ma();
    this.Gw(a.A, a.Ia, U);
    c = 0;
    for (h = U.length; c < h; ++c)
      if (((b = U[c]), b.X.solidEnabled && this.eg(a, b))) return z(U), b;
    z(U);
    return null;
  };
  g.prototype.Zx = function (a, c, h, b) {
    b = b || 50;
    var d = a.x,
      e = a.y,
      n,
      m = null,
      q = null;
    for (n = 0; n < b; n++)
      if (
        ((a.x = d + c * n),
        (a.y = e + h * n),
        a.P(),
        !this.eg(a, m) && ((m = this.fg(a)) && (q = m), !m && !m))
      )
        return q && this.Wx(a, c, h, q), !0;
    a.x = d;
    a.y = e;
    a.P();
    return !1;
  };
  g.prototype.Wx = function (a, c, h, b) {
    var d = 2,
      e,
      n = !1;
    e = !1;
    for (var m = a.x, q = a.y; 16 >= d; )
      (e = 1 / d),
        (d *= 2),
        (a.x += c * e * (n ? 1 : -1)),
        (a.y += h * e * (n ? 1 : -1)),
        a.P(),
        this.eg(a, b) ? (e = n = !0) : ((e = n = !1), (m = a.x), (q = a.y));
    e && ((a.x = m), (a.y = q), a.P());
  };
  g.prototype.$x = function (a) {
    var c = 0,
      h = a.x,
      b = a.y,
      d = 0,
      e = 0,
      n = 0,
      m = this.fg(a);
    if (m) {
      for (; 100 >= c; ) {
        switch (d) {
          case 0:
            e = 0;
            n = -1;
            c++;
            break;
          case 1:
            e = 1;
            n = -1;
            break;
          case 2:
            e = 1;
            n = 0;
            break;
          case 3:
            n = e = 1;
            break;
          case 4:
            e = 0;
            n = 1;
            break;
          case 5:
            e = -1;
            n = 1;
            break;
          case 6:
            e = -1;
            n = 0;
            break;
          case 7:
            n = e = -1;
        }
        d = (d + 1) % 8;
        a.x = qa(h + e * c);
        a.y = qa(b + n * c);
        a.P();
        if (!this.eg(a, m) && ((m = this.fg(a)), !m)) return;
      }
      a.x = h;
      a.y = b;
      a.P();
    }
  };
  g.prototype.by = function (a, c) {
    a.me && c.me && this.Fi.push([a, c]);
  };
  g.prototype.qv = function (a, c) {
    var h, b, d;
    h = 0;
    for (b = this.Fi.length; h < b; h++)
      if (
        ((d = this.Fi[h]), (d[0] == a && d[1] == c) || (d[0] == c && d[1] == a))
      )
        return !0;
    return !1;
  };
  g.prototype.nv = function (a, c, h) {
    var b = a.x,
      d = a.y,
      e = na(10, Sa(c, h, b, d)),
      n = Na(c, h, b, d),
      m = this.fg(a);
    if (!m) return Ka(n + pa);
    var q = m,
      k,
      f,
      t,
      v,
      p = E(5);
    for (k = 1; 36 > k; k++)
      if (
        ((f = n - k * p),
        (a.x = c + Math.cos(f) * e),
        (a.y = h + Math.sin(f) * e),
        a.P(),
        !this.eg(a, q) && ((q = this.fg(a)), !q))
      ) {
        t = f;
        break;
      }
    36 === k && (t = Ka(n + pa));
    q = m;
    for (k = 1; 36 > k; k++)
      if (
        ((f = n + k * p),
        (a.x = c + Math.cos(f) * e),
        (a.y = h + Math.sin(f) * e),
        a.P(),
        !this.eg(a, q) && ((q = this.fg(a)), !q))
      ) {
        v = f;
        break;
      }
    36 === k && (v = Ka(n + pa));
    a.x = b;
    a.y = d;
    a.P();
    if (v === t) return v;
    a = Oa(v, t) / 2;
    a = Qa(v, t) ? Ka(t + a + pa) : Ka(v + a);
    t = Math.cos(n);
    n = Math.sin(n);
    v = Math.cos(a);
    a = Math.sin(a);
    c = t * v + n * a;
    return Na(0, 0, t - 2 * c * v, n - 2 * c * a);
  };
  var K = -1;
  g.prototype.trigger = function (a, c, h) {
    if (!this.Ma) return !1;
    var b = this.Ma.If;
    if (!b) return !1;
    var d = !1,
      e,
      n,
      m;
    K++;
    var q = b.jm;
    n = 0;
    for (m = q.length; n < m; ++n) (e = this.Nr(a, c, q[n], h)), (d = d || e);
    e = this.Nr(a, c, b, h);
    K--;
    return d || e;
  };
  g.prototype.Nr = function (a, c, h, b) {
    var d = !1,
      e,
      n,
      m,
      q;
    if (c)
      for (
        m = this.mo(a, c, c.type.name, h, b),
          d = d || m,
          q = c.type.Pa,
          e = 0,
          n = q.length;
        e < n;
        ++e
      )
        (m = this.mo(a, c, q[e].name, h, b)), (d = d || m);
    else (m = this.mo(a, c, "system", h, b)), (d = d || m);
    return d;
  };
  g.prototype.mo = function (a, c, h, b, d) {
    var e,
      n = !1,
      m = !1,
      m = "undefined" !== typeof d,
      q = (m ? b.Np : b.Or)[h];
    if (!q) return n;
    var k = null;
    b = 0;
    for (e = q.length; b < e; ++b)
      if (q[b].method == a) {
        k = q[b].Kh;
        break;
      }
    if (!k) return n;
    var f;
    m ? (f = k[d]) : (f = k);
    if (!f) return null;
    b = 0;
    for (e = f.length; b < e; b++)
      (a = f[b][0]), (d = f[b][1]), (m = this.ow(c, h, a, d)), (n = n || m);
    return n;
  };
  g.prototype.ow = function (a, c, h, b) {
    var d,
      e,
      n = !1;
    this.no++;
    var m = this.Cb().nb;
    m && this.Ci(m.tf);
    var q = 1 < this.no;
    this.Ci(h.tf);
    q && this.Xx();
    var k = this.Sk(h);
    k.nb = h;
    a &&
      ((d = this.types[c].Y()),
      (d.ga = !1),
      z(d.n),
      (d.n[0] = a),
      this.types[c].Lc());
    a = !0;
    if (h.parent) {
      c = k.Er;
      for (d = h.parent; d; ) c.push(d), (d = d.parent);
      c.reverse();
      d = 0;
      for (e = c.length; d < e; d++)
        if (!c[d].ny()) {
          a = !1;
          break;
        }
    }
    a && (this.Lh++, h.ed ? h.my(b) : h.sb(), (n = n || k.Rf));
    this.Ok();
    q && this.Px();
    this.rf(h.tf);
    m && this.rf(m.tf);
    this.hf && 0 === this.sd && 0 === K && !this.Vm && this.Ub();
    this.no--;
    return n;
  };
  g.prototype.Ph = function () {
    var a = this.Cb();
    return a.nb.Ab[a.zb];
  };
  g.prototype.Xx = function () {
    this.vk++;
    this.vk >= this.gn.length && this.gn.push([]);
  };
  g.prototype.Px = function () {
    this.vk--;
  };
  g.prototype.Wp = function () {
    return this.gn[this.vk];
  };
  g.prototype.Sk = function (a) {
    this.Lj++;
    this.Lj >= this.nm.length && this.nm.push(new Ub());
    var c = this.Cb();
    c.reset(a);
    return c;
  };
  g.prototype.Ok = function () {
    this.Lj--;
  };
  g.prototype.Cb = function () {
    return this.nm[this.Lj];
  };
  g.prototype.Yx = function () {
    this.xk++;
    this.xk >= this.jn.length &&
      this.jn.push(
        ba({
          name: void 0,
          index: 0,
          Mb: !1,
        })
      );
    var a = this.zw();
    a.name = void 0;
    a.index = 0;
    a.Mb = !1;
    return a;
  };
  g.prototype.Qx = function () {
    this.xk--;
  };
  g.prototype.zw = function () {
    return this.jn[this.xk];
  };
  g.prototype.Yp = function (a, c) {
    for (var h, b, d, e, n, m; c; ) {
      h = 0;
      for (b = c.hd.length; h < b; h++)
        if (((m = c.hd[h]), m instanceof Vb && ob(a, m.name))) return m;
      c = c.parent;
    }
    h = 0;
    for (b = this.te.length; h < b; h++)
      for (n = this.te[h], d = 0, e = n.ef.length; d < e; d++)
        if (((m = n.ef[d]), m instanceof Vb && ob(a, m.name))) return m;
    return null;
  };
  g.prototype.$p = function (a) {
    var c, h;
    c = 0;
    for (h = this.td.length; c < h; c++)
      if (this.td[c].la === a) return this.td[c];
    return null;
  };
  g.prototype.$j = function (a) {
    var c, h;
    c = 0;
    for (h = this.G.length; c < h; c++)
      if (this.G[c].la === a) return this.G[c];
    return null;
  };
  g.prototype.Aw = function (a) {
    var c, h;
    c = 0;
    for (h = this.lg.length; c < h; c++)
      if (this.lg[c].la === a) return this.lg[c];
    return null;
  };
  g.prototype.zv = function (a, c) {
    this.Qi = [a, c];
    this.ua = !0;
  };
  g.prototype.Ww = function () {
    var a = this,
      c = this.Wn,
      h = this.ze,
      n = this.sk,
      m = !1;
    this.xr && ((m = !0), (c = "__c2_continuouspreview"), (this.xr = !1));

    if (c.length) {
      this.Ub();
      h = this.ty();
      //doPlayVideoAds();
      if (d() && !this.vc)
        e(
          c,
          h,
          function () {
            fa("Saved state to IndexedDB storage (" + h.length + " bytes)");
            a.ze = h;
            a.trigger(H.prototype.k.Fl, null);
            a.ze = "";
            m && b();
          },
          function (d) {
            try {
              localStorage.setItem("__c2save_" + c, h),
                fa("Saved state to WebStorage (" + h.length + " bytes)"),
                (a.ze = h),
                a.trigger(H.prototype.k.Fl, null),
                (a.ze = ""),
                m && b();
            } catch (e) {
              fa("Failed to save game state: " + d + "; " + e),
                a.trigger(H.prototype.k.dp, null);
            }
          }
        );
      else
        try {
          localStorage.setItem("__c2save_" + c, h),
            fa("Saved state to WebStorage (" + h.length + " bytes)"),
            (a.ze = h),
            this.trigger(H.prototype.k.Fl, null),
            (a.ze = ""),
            m && b();
        } catch (q) {
          fa("Error saving to WebStorage: " + q),
            a.trigger(H.prototype.k.dp, null);
        }
      this.fc = this.sk = this.Wn = "";
    }
    if (n.length) {
      if (d() && !this.vc)
        p(
          n,
          function (c) {
            c
              ? ((a.fc = c),
                fa(
                  "Loaded state from IndexedDB storage (" +
                    a.fc.length +
                    " bytes)"
                ))
              : ((a.fc = localStorage.getItem("__c2save_" + n) || ""),
                fa("Loaded state from WebStorage (" + a.fc.length + " bytes)"));
            a.Ti = !1;
            a.fc.length || a.trigger(H.prototype.k.Dl, null);
          },
          function () {
            a.fc = localStorage.getItem("__c2save_" + n) || "";
            fa("Loaded state from WebStorage (" + a.fc.length + " bytes)");
            a.Ti = !1;
            a.fc.length || a.trigger(H.prototype.k.Dl, null);
          }
        );
      else {
        try {
          (this.fc = localStorage.getItem("__c2save_" + n) || ""),
            fa("Loaded state from WebStorage (" + this.fc.length + " bytes)");
        } catch (k) {
          this.fc = "";
        }
        this.Ti = !1;
        a.fc.length || a.trigger(H.prototype.k.Dl, null);
      }
      this.Wn = this.sk = "";
    }
    this.fc.length &&
      (this.Ub(),
      this.vx(this.fc),
      (this.ze = this.fc),
      this.trigger(H.prototype.k.At, null),
      (this.fc = this.ze = ""));
  };
  g.prototype.ty = function () {
    var a,
      c,
      h,
      b,
      d,
      e,
      n,
      m = {
        c2save: !0,
        version: 1,
        rt: {
          time: this.qb.M,
          walltime: this.Pe.M,
          timescale: this.xf,
          tickcount: this.zd,
          execcount: this.Lh,
          next_uid: this.si,
          running_layout: this.Ma.la,
          start_time_offset: Date.now() - this.dl,
        },
        types: {},
        layouts: {},
        events: {
          groups: {},
          cnds: {},
          acts: {},
          vars: {},
        },
      };
    a = 0;
    for (c = this.G.length; a < c; a++)
      if (((d = this.G[a]), !d.O && !this.oo(d))) {
        e = {
          instances: [],
        };
        Va(d.X) && (e.ex = k(d.X));
        h = 0;
        for (b = d.n.length; h < b; h++) e.instances.push(this.Vn(d.n[h]));
        m.types[d.la.toString()] = e;
      }
    a = 0;
    for (c = this.td.length; a < c; a++)
      (h = this.td[a]), (m.layouts[h.la.toString()] = h.Sa());
    b = m.events.groups;
    a = 0;
    for (c = this.lg.length; a < c; a++)
      (h = this.lg[a]), (b[h.la.toString()] = this.wg[h.Uh].Lf);
    c = m.events.cnds;
    for (n in this.Ze)
      this.Ze.hasOwnProperty(n) &&
        ((a = this.Ze[n]),
        Va(a.X) &&
          (c[n] = {
            ex: k(a.X),
          }));
    c = m.events.acts;
    for (n in this.Ue)
      this.Ue.hasOwnProperty(n) &&
        ((a = this.Ue[n]),
        Va(a.X) &&
          (c[n] = {
            ex: k(a.X),
          }));
    c = m.events.vars;
    for (n in this.nh)
      this.nh.hasOwnProperty(n) &&
        ((a = this.nh[n]), a.jk || (a.parent && !a.ji) || (c[n] = a.data));
    m.system = this.ae.Sa();
    return JSON.stringify(m);
  };
  g.prototype.ir = function () {
    var a, c, h, b, d, e;
    this.Ee = {};
    a = 0;
    for (c = this.G.length; a < c; a++)
      if (((h = this.G[a]), !h.O))
        for (b = 0, d = h.n.length; b < d; b++)
          (e = h.n[b]), (this.Ee[e.uid.toString()] = e);
  };
  g.prototype.vx = function (a) {
    a = JSON.parse(a);
    if (a.c2save && !(1 < a.version)) {
      this.di = !0;
      var c = a.rt;
      this.qb.reset();
      this.qb.M = c.time;
      this.Pe.reset();
      this.Pe.M = c.walltime || 0;
      this.xf = c.timescale;
      this.zd = c.tickcount;
      this.Lh = c.execcount;
      this.dl = Date.now() - c.start_time_offset;
      var h = c.running_layout;
      if (h !== this.Ma.la)
        if ((h = this.$p(h))) this.Kp(h);
        else return;
      var b, d, e, n, m, q, k;
      q = a.types;
      for (d in q)
        if (
          q.hasOwnProperty(d) &&
          (n = this.$j(parseInt(d, 10))) &&
          !n.O &&
          !this.oo(n)
        ) {
          q[d].ex ? (n.X = q[d].ex) : Wa(n.X);
          m = n.n;
          e = q[d].instances;
          h = 0;
          for (b = oa(m.length, e.length); h < b; h++) this.tk(m[h], e[h]);
          h = e.length;
          for (b = m.length; h < b; h++) this.yf(m[h]);
          h = m.length;
          for (b = e.length; h < b; h++) {
            m = null;
            if (n.ra.kf && ((m = this.Ma.Zj(e[h].w.l)), !m)) continue;
            m = this.bf(n.Yc, m, !1, 0, 0, !0);
            this.tk(m, e[h]);
          }
          n.fh = !0;
        }
      this.Ub();
      this.ir();
      b = a.layouts;
      for (d in b)
        b.hasOwnProperty(d) && (h = this.$p(parseInt(d, 10))) && h.cb(b[d]);
      b = a.events.groups;
      for (d in b)
        b.hasOwnProperty(d) &&
          (h = this.Aw(parseInt(d, 10))) &&
          this.wg[h.Uh] &&
          this.wg[h.Uh].Xk(b[d]);
      h = a.events.cnds;
      for (d in this.Ze)
        this.Ze.hasOwnProperty(d) &&
          (h.hasOwnProperty(d)
            ? (this.Ze[d].X = h[d].ex)
            : (this.Ze[d].X = {}));
      h = a.events.acts;
      for (d in this.Ue)
        this.Ue.hasOwnProperty(d) &&
          (h.hasOwnProperty(d)
            ? (this.Ue[d].X = h[d].ex)
            : (this.Ue[d].X = {}));
      h = a.events.vars;
      for (d in h)
        h.hasOwnProperty(d) &&
          this.nh.hasOwnProperty(d) &&
          (this.nh[d].data = h[d]);
      this.si = c.next_uid;
      this.di = !1;
      h = 0;
      for (b = this.Pj.length; h < b; ++h)
        (m = this.Pj[h]),
          this.trigger(Object.getPrototypeOf(m.type.ra).k.gj, m);
      z(this.Pj);
      this.ae.cb(a.system);
      h = 0;
      for (b = this.G.length; h < b; h++)
        if (((n = this.G[h]), !n.O && !this.oo(n)))
          for (d = 0, a = n.n.length; d < a; d++) {
            m = n.n[d];
            if (n.wc)
              for (
                q = m.Th(), z(m.siblings), c = 0, e = n.Dc.length;
                c < e;
                c++
              )
                (k = n.Dc[c]), n !== k && m.siblings.push(k.n[q]);
            m.Dd && m.Dd();
            if (m.V)
              for (c = 0, e = m.V.length; c < e; c++)
                (q = m.V[c]), q.Dd && q.Dd();
          }
      this.ua = !0;
    }
  };
  g.prototype.Vn = function (a, c) {
    var h, b, d, e, n;
    e = a.type;
    d = e.ra;
    var m = {};
    c ? (m.c2 = !0) : (m.uid = a.uid);
    Va(a.X) && (m.ex = k(a.X));
    if (a.Eb && a.Eb.length)
      for (m.ivs = {}, h = 0, b = a.Eb.length; h < b; h++)
        m.ivs[a.type.Qm[h].toString()] = a.Eb[h];
    if (d.kf) {
      d = {
        x: a.x,
        y: a.y,
        w: a.width,
        h: a.height,
        l: a.A.la,
        zi: a.Kd(),
      };
      0 !== a.q && (d.a = a.q);
      1 !== a.opacity && (d.o = a.opacity);
      0.5 !== a.pc && (d.hX = a.pc);
      0.5 !== a.qc && (d.hY = a.qc);
      0 !== a.Vb && (d.bm = a.Vb);
      a.visible || (d.v = a.visible);
      a.me || (d.ce = a.me);
      -1 !== a.Rg && (d.mts = a.Rg);
      if (e.ca.length)
        for (d.fx = [], h = 0, b = e.ca.length; h < b; h++)
          (n = e.ca[h]),
            d.fx.push({
              name: n.name,
              active: a.Te[n.index],
              params: a.Xa[n.index],
            });
      m.w = d;
    }
    if (a.V && a.V.length)
      for (m.behs = {}, h = 0, b = a.V.length; h < b; h++)
        (e = a.V[h]), e.Sa && (m.behs[e.type.la.toString()] = e.Sa());
    a.Sa && (m.data = a.Sa());
    return m;
  };
  g.prototype.Cw = function (a, c) {
    var h, b;
    h = 0;
    for (b = a.Qm.length; h < b; h++) if (a.Qm[h] === c) return h;
    return -1;
  };
  g.prototype.yw = function (a, c) {
    var h, b;
    h = 0;
    for (b = a.V.length; h < b; h++) if (a.V[h].type.la === c) return h;
    return -1;
  };
  g.prototype.tk = function (a, c, h) {
    var b, d, e, n, m;
    m = a.type;
    n = m.ra;
    if (h) {
      if (!c.c2) return;
    } else a.uid = c.uid;
    c.ex ? (a.X = c.ex) : Wa(a.X);
    if ((d = c.ivs))
      for (b in d)
        d.hasOwnProperty(b) &&
          ((e = this.Cw(m, parseInt(b, 10))),
          0 > e || e >= a.Eb.length || (a.Eb[e] = d[b]));
    if (n.kf) {
      e = c.w;
      a.A.la !== e.l &&
        ((d = a.A),
        (a.A = this.Ma.Zj(e.l)),
        a.A
          ? (d.Xg(a, !0), a.A.zh(a, !0), a.P(), a.A.Ki(0))
          : ((a.A = d), h || this.yf(a)));
      a.x = e.x;
      a.y = e.y;
      a.width = e.w;
      a.height = e.h;
      a.Bd = e.zi;
      a.q = e.hasOwnProperty("a") ? e.a : 0;
      a.opacity = e.hasOwnProperty("o") ? e.o : 1;
      a.pc = e.hasOwnProperty("hX") ? e.hX : 0.5;
      a.qc = e.hasOwnProperty("hY") ? e.hY : 0.5;
      a.visible = e.hasOwnProperty("v") ? e.v : !0;
      a.me = e.hasOwnProperty("ce") ? e.ce : !0;
      a.Rg = e.hasOwnProperty("mts") ? e.mts : -1;
      a.Vb = e.hasOwnProperty("bm") ? e.bm : 0;
      a.Fh = lb(a.Vb);
      this.ad && mb(a, a.Vb, this.ad);
      a.P();
      if (e.hasOwnProperty("fx"))
        for (h = 0, d = e.fx.length; h < d; h++)
          (n = m.zm(e.fx[h].name)),
            0 > n || ((a.Te[n] = e.fx[h].active), (a.Xa[n] = e.fx[h].params));
      a.Ad();
    }
    if ((m = c.behs))
      for (b in m)
        m.hasOwnProperty(b) &&
          ((h = this.yw(a, parseInt(b, 10))), 0 > h || a.V[h].cb(m[b]));
    c.data && a.cb(c.data);
  };
  g.prototype.Op = function (a, c, h) {
    window.resolveLocalFileSystemURL(
      cordova.file.applicationDirectory + "www/" + a,
      function (a) {
        a.file(c, h);
      },
      h
    );
  };
  g.prototype.pm = function (a, c, h) {
    this.Op(
      a,
      function (a) {
        var b = new FileReader();
        b.onload = function (a) {
          c(a.target.result);
        };
        b.onerror = h;
        b.readAsText(a);
      },
      h
    );
  };
  g.prototype.Pp = function (a, c, h) {
    this.Op(
      a,
      function (a) {
        var h = new FileReader();
        h.onload = function (a) {
          c(a.target.result);
        };
        h.readAsArrayBuffer(a);
      },
      h
    );
  };
  g.prototype.pw = function (a, c, h) {
    this.Pp(
      a,
      function (a) {
        a = URL.createObjectURL(new Blob([a]));
        c(a);
      },
      h
    );
  };
  g.prototype.or = function (a, c) {
    this.Bg
      ? this.pw(
          c,
          function (c) {
            a.src = c;
          },
          function (a) {
            // alert("Failed to load image: " + a)
          }
        )
      : (a.src = c);
  };
  Wb = function (a) {
    return new g(document.getElementById(a));
  };
  Xb = function (a, c) {
    return new g({
      dc: !0,
      width: a,
      height: c,
    });
  };
  window.cr_createRuntime = Wb;
  window.cr_createDCRuntime = Xb;
  window.createCocoonJSRuntime = function () {
    window.c2cocoonjs = !0;
    var a =
      document.createElement("screencanvas") ||
      document.createElement("canvas");
    a.Bh = !0;
    document.body.appendChild(a);
    a = new g(a);
    window.c2runtime = a;
    window.addEventListener("orientationchange", function () {
      window.c2runtime.setSize(window.innerWidth, window.innerHeight);
    });
    window.c2runtime.setSize(window.innerWidth, window.innerHeight);
    return a;
  };
  window.createEjectaRuntime = function () {
    var a = new g(document.getElementById("canvas"));
    window.c2runtime = a;
    window.c2runtime.setSize(window.innerWidth, window.innerHeight);
    return a;
  };
})();
window.cr_getC2Runtime = function () {
  var g = document.getElementById("c2canvas");
  return g ? g.c2runtime : window.c2runtime ? window.c2runtime : null;
};
window.cr_getSnapshot = function (g, l) {
  var d = window.cr_getC2Runtime();
  d && d.zv(g, l);
};
window.cr_sizeCanvas = function (g, l) {
  if (0 !== g && 0 !== l) {
    var d = window.cr_getC2Runtime();
    d && d.setSize(g, l);
  }
};
window.cr_setSuspended = function (g) {
  var l = window.cr_getC2Runtime();
  l && l.setSuspended(g);
};
(function () {
  function g(a, c) {
    this.b = a;
    this.If = null;
    this.scrollX = this.b.gb / 2;
    this.scrollY = this.b.fb / 2;
    this.scale = 1;
    this.q = 0;
    this.tg = !0;
    this.name = c[0];
    this.width = c[1];
    this.height = c[2];
    this.Rr = c[3];
    this.tr = c[4];
    this.la = c[5];
    var b = c[6],
      d,
      e;
    this.ea = [];
    this.Yh = [];
    d = 0;
    for (e = b.length; d < e; d++) {
      var k = new Yb(this, b[d]);
      k.Kq = d;
      this.ea.push(k);
    }
    b = c[7];
    this.Pf = [];
    d = 0;
    for (e = b.length; d < e; d++) {
      var k = b[d],
        f = this.b.G[k[1]];
      f.Yc || (f.Yc = k);
      this.Pf.push(k);
      -1 === this.Yh.indexOf(f) && this.Yh.push(f);
    }
    this.ca = [];
    this.ya = [];
    this.Je = !0;
    this.Xa = [];
    d = 0;
    for (e = c[8].length; d < e; d++)
      this.ca.push({
        id: c[8][d][0],
        name: c[8][d][1],
        tb: -1,
        sf: !1,
        yb: !0,
        index: d,
      }),
        this.Xa.push(c[8][d][2].slice(0));
    this.Ad();
    this.gd = new wa(0, 0, 1, 1);
    this.Kn = new wa(0, 0, 1, 1);
    this.qf = {};
  }
  function l(a, c) {
    return a.Bd - c.Bd;
  }
  function d(a, c) {
    this.Gb = a;
    this.b = a.b;
    this.n = [];
    this.scale = 1;
    this.q = 0;
    this.pe = !1;
    this.Me = new wa(0, 0, 0, 0);
    this.Kr = new xa();
    this.Ja = this.Ha = this.Ka = this.Ga = 0;
    this.hg = !1;
    this.Qe = -1;
    this.em = 0;
    this.name = c[0];
    this.index = c[1];
    this.la = c[2];
    this.visible = c[3];
    this.nd = c[4];
    this.Uc = c[5];
    this.xc = c[6];
    this.yc = c[7];
    this.opacity = c[8];
    this.Tj = c[9];
    this.Vc = c[10];
    this.kc = c[11];
    this.Vb = c[12];
    this.Iv = c[13];
    this.Fh = "source-over";
    this.cc = this.hc = 0;
    this.Sb = null;
    this.Ae = f();
    this.wd = !0;
    this.Kg = new wa(0, 0, -1, -1);
    this.Ob = new wa(0, 0, -1, -1);
    this.Vc && (this.Sb = new kb(this.b.gb, this.b.fb));
    this.Xd = !1;
    var b = c[14],
      d,
      e;
    this.Br = [];
    this.Qc = [];
    this.Hh = [];
    d = 0;
    for (e = b.length; d < e; d++) {
      var k = b[d],
        p = this.b.G[k[1]];
      p.Yc || ((p.Yc = k), (p.xv = this.index));
      this.Qc.push(k);
      -1 === this.Gb.Yh.indexOf(p) && this.Gb.Yh.push(p);
    }
    Ba(this.Br, this.Qc);
    this.ca = [];
    this.ya = [];
    this.Je = !0;
    this.Xa = [];
    d = 0;
    for (e = c[15].length; d < e; d++)
      this.ca.push({
        id: c[15][d][0],
        name: c[15][d][1],
        tb: -1,
        sf: !1,
        yb: !0,
        index: d,
      }),
        this.Xa.push(c[15][d][2].slice(0));
    this.Ad();
    this.gd = new wa(0, 0, 1, 1);
    this.Kn = new wa(0, 0, 1, 1);
  }
  function f() {
    return k.length ? k.pop() : [];
  }
  function e(a) {
    z(a);
    k.push(a);
  }
  g.prototype.ry = function (a) {
    var c = a.type.la.toString();
    this.qf.hasOwnProperty(c) || (this.qf[c] = []);
    this.qf[c].push(this.b.Vn(a));
  };
  g.prototype.dq = function () {
    var a = this.ea[0];
    return !a.Uc && 1 === a.opacity && !a.Tj && a.visible;
  };
  g.prototype.Ad = function () {
    z(this.ya);
    this.Je = !0;
    var a, c, b;
    a = 0;
    for (c = this.ca.length; a < c; a++)
      (b = this.ca[a]), b.yb && (this.ya.push(b), b.sf || (this.Je = !1));
  };
  g.prototype.ym = function (a) {
    var c, b, d;
    c = 0;
    for (b = this.ca.length; c < b; c++)
      if (((d = this.ca[c]), d.name === a)) return d;
    return null;
  };
  var p = [],
    b = !0;
  g.prototype.fo = function () {
    this.tr && ((this.If = this.b.om[this.tr]), this.If.qo());
    this.b.Ma = this;
    this.scrollX = this.b.gb / 2;
    this.scrollY = this.b.fb / 2;
    var a, c, d, e, k, f, g;
    a = 0;
    for (d = this.b.G.length; a < d; a++)
      if (((c = this.b.G[a]), !c.O))
        for (k = c.n, c = 0, e = k.length; c < e; c++)
          if (((f = k[c]), f.A)) {
            var q = f.A.Kq;
            q >= this.ea.length && (q = this.ea.length - 1);
            f.A = this.ea[q];
            -1 === f.A.n.indexOf(f) && f.A.n.push(f);
            f.A.hg = !0;
          }
    if (!b) for (a = 0, d = this.ea.length; a < d; ++a) this.ea[a].n.sort(l);
    z(p);
    this.kv();
    a = 0;
    for (d = this.ea.length; a < d; a++) (f = this.ea[a]), f.vv(), f.tl();
    k = !1;
    if (!this.tg) {
      for (g in this.qf)
        if (
          this.qf.hasOwnProperty(g) &&
          (c = this.b.$j(parseInt(g, 10))) &&
          !c.O &&
          this.b.po(c)
        ) {
          e = this.qf[g];
          a = 0;
          for (d = e.length; a < d; a++) {
            f = null;
            if (c.ra.kf && ((f = this.Zj(e[a].w.l)), !f)) continue;
            f = this.b.bf(c.Yc, f, !1, 0, 0, !0);
            this.b.tk(f, e[a]);
            k = !0;
            p.push(f);
          }
          z(e);
        }
      a = 0;
      for (d = this.ea.length; a < d; a++)
        this.ea[a].n.sort(l), (this.ea[a].hg = !0);
    }
    k && (this.b.Ub(), this.b.ir());
    for (a = 0; a < p.length; a++)
      if (((f = p[a]), f.type.wc))
        for (d = f.Th(), c = 0, e = f.type.Dc.length; c < e; c++)
          (g = f.type.Dc[c]),
            f.type !== g &&
              (g.n.length > d
                ? f.siblings.push(g.n[d])
                : g.Yc &&
                  ((k = this.b.bf(g.Yc, f.A, !0, f.x, f.y, !0)),
                  this.b.Ub(),
                  g.rl(),
                  f.siblings.push(k),
                  p.push(k)));
    a = 0;
    for (d = this.Pf.length; a < d; a++) this.b.bf(this.Pf[a], null, !0);
    this.b.Eh = null;
    this.b.Ub();
    if (this.b.Ea && !this.b.La)
      for (a = 0, d = this.b.G.length; a < d; a++)
        (g = this.b.G[a]), !g.O && g.n.length && g.Fn && g.Fn(this.b.Ea);
    if (this.b.di) Ba(this.b.Pj, p);
    else
      for (a = 0, d = p.length; a < d; a++)
        (f = p[a]), this.b.trigger(Object.getPrototypeOf(f.type.ra).k.gj, f);
    z(p);
    this.b.di || this.b.trigger(H.prototype.k.Vo, null);
    this.tg = !1;
  };
  g.prototype.uv = function () {
    var a, c, b, d, e;
    c = a = 0;
    for (b = this.Pf.length; a < b; a++)
      (d = this.Pf[a]),
        (e = this.b.G[d[1]]),
        e.global ? e.wc || this.b.bf(d, null, !0) : ((this.Pf[c] = d), c++);
    Aa(this.Pf, c);
  };
  g.prototype.Hy = function () {
    this.b.di || this.b.trigger(H.prototype.k.zt, null);
    this.b.Sm = !0;
    z(this.b.ae.Tb);
    var a, c, d, e, k, f;
    if (!this.tg)
      for (a = 0, c = this.ea.length; a < c; a++)
        for (this.ea[a].so(), k = this.ea[a].n, d = 0, e = k.length; d < e; d++)
          (f = k[d]), f.type.global || (this.b.po(f.type) && this.ry(f));
    a = 0;
    for (c = this.ea.length; a < c; a++) {
      k = this.ea[a].n;
      d = 0;
      for (e = k.length; d < e; d++) (f = k[d]), f.type.global || this.b.yf(f);
      this.b.Ub();
      z(k);
      this.ea[a].hg = !0;
    }
    a = 0;
    for (c = this.b.G.length; a < c; a++)
      if (((k = this.b.G[a]), !(k.global || k.ra.kf || k.ra.cl || k.O))) {
        d = 0;
        for (e = k.n.length; d < e; d++) this.b.yf(k.n[d]);
        this.b.Ub();
      }
    b = !1;
    this.b.Sm = !1;
  };
  new wa(0, 0, 0, 0);
  g.prototype.$c = function (a) {
    var c,
      b = a,
      d = !1,
      e = !this.b.Oc;
    e &&
      (this.b.rk ||
        ((this.b.rk = document.createElement("canvas")),
        (c = this.b.rk),
        (c.width = this.b.T),
        (c.height = this.b.S),
        (this.b.xq = c.getContext("2d")),
        (d = !0)),
      (c = this.b.rk),
      (b = this.b.xq),
      c.width !== this.b.T && ((c.width = this.b.T), (d = !0)),
      c.height !== this.b.S && ((c.height = this.b.S), (d = !0)),
      d &&
        ((b.webkitImageSmoothingEnabled = this.b.fa),
        (b.mozImageSmoothingEnabled = this.b.fa),
        (b.msImageSmoothingEnabled = this.b.fa),
        (b.imageSmoothingEnabled = this.b.fa)));
    b.globalAlpha = 1;
    b.globalCompositeOperation = "source-over";
    this.b.Sl && !this.dq() && b.clearRect(0, 0, this.b.T, this.b.S);
    var k,
      f,
      d = 0;
    for (k = this.ea.length; d < k; d++)
      (f = this.ea[d]),
        f.visible && 0 < f.opacity && 11 !== f.Vb && (f.n.length || !f.Uc)
          ? f.$c(b)
          : f.tl();
    e && a.drawImage(c, 0, 0, this.b.width, this.b.height);
  };
  g.prototype.df = function (a) {
    a.yy(!0);
    this.b.rb || (this.b.rb = a.Xc(this.b.T, this.b.S, this.b.fa));
    if (this.b.rb.le !== this.b.T || this.b.rb.ke !== this.b.S)
      a.deleteTexture(this.b.rb),
        (this.b.rb = a.Xc(this.b.T, this.b.S, this.b.fa));
    a.xd(this.b.rb);
    this.b.Oc || a.bh(this.b.T, this.b.S);
    var c, b;
    for (c = this.ea.length - 1; 0 <= c; --c)
      (b = this.ea[c]),
        b.visible &&
        1 === b.opacity &&
        b.Je &&
        0 === b.Vb &&
        (b.n.length || !b.Uc)
          ? b.df(a)
          : b.tl();
    a.yy(!1);
  };
  g.prototype.mc = function (a) {
    var c = 0 < this.ya.length || this.b.lh || !this.b.Oc || this.b.Gf;
    if (c) {
      this.b.rb || (this.b.rb = a.Xc(this.b.T, this.b.S, this.b.fa));
      if (this.b.rb.le !== this.b.T || this.b.rb.ke !== this.b.S)
        a.deleteTexture(this.b.rb),
          (this.b.rb = a.Xc(this.b.T, this.b.S, this.b.fa));
      a.xd(this.b.rb);
      this.b.Oc || a.bh(this.b.T, this.b.S);
    } else
      this.b.rb && (a.xd(null), a.deleteTexture(this.b.rb), (this.b.rb = null));
    this.b.Sl && !this.dq() && a.clear(0, 0, 0, 0);
    var b, d, e;
    b = 0;
    for (d = this.ea.length; b < d; b++)
      (e = this.ea[b]),
        e.visible && 0 < e.opacity && (e.n.length || !e.Uc) ? e.mc(a) : e.tl();
    c &&
      (0 === this.ya.length || (1 === this.ya.length && this.b.Oc)
        ? (1 === this.ya.length
            ? ((c = this.ya[0].index),
              a.vf(this.ya[0].tb),
              a.Ji(
                null,
                1 / this.b.T,
                1 / this.b.S,
                0,
                0,
                1,
                1,
                this.scale,
                this.q,
                0,
                0,
                this.b.T / 2,
                this.b.S / 2,
                this.b.qb.M,
                this.Xa[c]
              ),
              a.Gn(this.ya[0].tb) && (this.b.ua = !0))
            : a.vf(0),
          this.b.Oc || a.bh(this.b.width, this.b.height),
          a.xd(null),
          a.wy(!1),
          a.$f(1),
          a.Bc(this.b.rb),
          a.uy(),
          a.Yd(),
          a.de(),
          (c = this.b.width / 2),
          (b = this.b.height / 2),
          a.In(-c, b, c, b, c, -b, -c, -b),
          a.Bc(null),
          a.wy(!0))
        : this.Nn(a, null, null, null));
  };
  g.prototype.Rh = function () {
    return 0 < this.ya.length || this.b.lh || !this.b.Oc || this.b.Gf
      ? this.b.rb
      : null;
  };
  g.prototype.aq = function () {
    var a = this.ea[0].Gc(),
      c,
      b,
      d;
    c = 1;
    for (b = this.ea.length; c < b; c++)
      (d = this.ea[c]),
        (0 !== d.xc || 0 !== d.yc) && d.Gc() < a && (a = d.Gc());
    return a;
  };
  g.prototype.Xn = function (a) {
    if (!this.Rr) {
      var c = ((1 / this.aq()) * this.b.T) / 2;
      a > this.width - c && (a = this.width - c);
      a < c && (a = c);
    }
    this.scrollX !== a && ((this.scrollX = a), (this.b.ua = !0));
  };
  g.prototype.Yn = function (a) {
    if (!this.Rr) {
      var c = ((1 / this.aq()) * this.b.S) / 2;
      a > this.height - c && (a = this.height - c);
      a < c && (a = c);
    }
    this.scrollY !== a && ((this.scrollY = a), (this.b.ua = !0));
  };
  g.prototype.kv = function () {
    this.Xn(this.scrollX);
    this.Yn(this.scrollY);
  };
  g.prototype.Nn = function (a, c, b, d) {
    var e = b ? b.ya : c ? c.ya : this.ya,
      k = 1,
      f = 0,
      q = 0,
      h = 0,
      t = this.b.T,
      p = this.b.S;
    b
      ? ((k = b.A.Gc()),
        (f = b.A.$a()),
        (q = b.A.Ga),
        (h = b.A.Ha),
        (t = b.A.Ka),
        (p = b.A.Ja))
      : c &&
        ((k = c.Gc()),
        (f = c.$a()),
        (q = c.Ga),
        (h = c.Ha),
        (t = c.Ka),
        (p = c.Ja));
    var g = this.b.wm,
      r,
      l,
      w,
      J,
      M = 0,
      X = 1,
      U,
      K,
      u = this.b.T,
      x = this.b.S,
      sa = u / 2,
      Y = x / 2,
      y = c ? c.gd : this.gd,
      L = c ? c.Kn : this.Kn,
      G = 0,
      V = 0,
      N = 0,
      O = 0,
      R = u,
      ga = u,
      T = x,
      ua = x,
      va = (w = 0);
    J = b ? b.A.$a() : 0;
    if (b) {
      r = 0;
      for (l = e.length; r < l; r++)
        (w += a.dA(e[r].tb)), (va += a.eA(e[r].tb));
      O = b.Ia;
      G = c.Ra(O.left, O.top, !0, !0);
      N = c.Ra(O.left, O.top, !1, !0);
      R = c.Ra(O.right, O.bottom, !0, !0);
      T = c.Ra(O.right, O.bottom, !1, !0);
      0 !== J &&
        ((r = c.Ra(O.right, O.top, !0, !0)),
        (l = c.Ra(O.right, O.top, !1, !0)),
        (V = c.Ra(O.left, O.bottom, !0, !0)),
        (O = c.Ra(O.left, O.bottom, !1, !0)),
        (J = Math.min(G, R, r, V)),
        (R = Math.max(G, R, r, V)),
        (G = J),
        (J = Math.min(N, T, l, O)),
        (T = Math.max(N, T, l, O)),
        (N = J));
      G -= w;
      N -= va;
      R += w;
      T += va;
      L.left = G / u;
      L.top = 1 - N / x;
      L.right = R / u;
      L.bottom = 1 - T / x;
      V = G = qa(G);
      O = N = qa(N);
      ga = R = ra(R);
      ua = T = ra(T);
      V -= w;
      O -= va;
      ga += w;
      ua += va;
      0 > G && (G = 0);
      0 > N && (N = 0);
      R > u && (R = u);
      T > x && (T = x);
      0 > V && (V = 0);
      0 > O && (O = 0);
      ga > u && (ga = u);
      ua > x && (ua = x);
      y.left = G / u;
      y.top = 1 - N / x;
      y.right = R / u;
      y.bottom = 1 - T / x;
    } else
      (y.left = L.left = 0),
        (y.top = L.top = 0),
        (y.right = L.right = 1),
        (y.bottom = L.bottom = 1);
    va =
      (b &&
        (a.Rk(e[0].tb) ||
          0 !== w ||
          0 !== va ||
          1 !== b.opacity ||
          b.type.ra.Eq)) ||
      (c && !b && 1 !== c.opacity);
    a.uy();
    if (va) {
      g[M] || (g[M] = a.Xc(u, x, this.b.fa));
      if (g[M].le !== u || g[M].ke !== x)
        a.deleteTexture(g[M]), (g[M] = a.Xc(u, x, this.b.fa));
      a.vf(0);
      a.xd(g[M]);
      K = ua - O;
      a.clearRect(V, x - O - K, ga - V, K);
      b
        ? b.mc(a)
        : (a.Bc(this.b.Fb),
          a.$f(c.opacity),
          a.Yd(),
          a.translate(-sa, -Y),
          a.de(),
          a.vd(G, T, R, T, R, N, G, N, y));
      L.left = L.top = 0;
      L.right = L.bottom = 1;
      b && ((J = y.top), (y.top = y.bottom), (y.bottom = J));
      M = 1;
      X = 0;
    }
    a.$f(1);
    w = e.length - 1;
    var Ua = a.fr(e[w].tb) || (!c && !b && !this.b.Oc);
    r = J = 0;
    for (l = e.length; r < l; r++) {
      g[M] || (g[M] = a.Xc(u, x, this.b.fa));
      if (g[M].le !== u || g[M].ke !== x)
        a.deleteTexture(g[M]), (g[M] = a.Xc(u, x, this.b.fa));
      a.vf(e[r].tb);
      J = e[r].index;
      a.Gn(e[r].tb) && (this.b.ua = !0);
      0 != r || va
        ? (a.Ji(
            d,
            1 / u,
            1 / x,
            L.left,
            L.top,
            L.right,
            L.bottom,
            k,
            f,
            q,
            h,
            (q + t) / 2,
            (h + p) / 2,
            this.b.qb.M,
            b ? b.Xa[J] : c ? c.Xa[J] : this.Xa[J]
          ),
          a.Bc(null),
          r !== w || Ua
            ? (a.xd(g[M]),
              (K = ua - O),
              (U = x - O - K),
              a.clearRect(V, U, ga - V, K))
            : (b ? a.$g(b.hc, b.cc) : c && a.$g(c.hc, c.cc), a.xd(d)),
          a.Bc(g[X]),
          a.Yd(),
          a.translate(-sa, -Y),
          a.de(),
          a.vd(G, T, R, T, R, N, G, N, y),
          r !== w || Ua || a.Bc(null))
        : (a.xd(g[M]),
          (K = ua - O),
          (U = x - O - K),
          a.clearRect(V, U, ga - V, K),
          b
            ? (b.Va && b.Va.N
                ? ((U = b.Va.N), (X = 1 / U.width), (U = 1 / U.height))
                : ((X = 1 / b.width), (U = 1 / b.height)),
              a.Ji(
                d,
                X,
                U,
                L.left,
                L.top,
                L.right,
                L.bottom,
                k,
                f,
                q,
                h,
                (q + t) / 2,
                (h + p) / 2,
                this.b.qb.M,
                b.Xa[J]
              ),
              b.mc(a))
            : (a.Ji(
                d,
                1 / u,
                1 / x,
                0,
                0,
                1,
                1,
                k,
                f,
                q,
                h,
                (q + t) / 2,
                (h + p) / 2,
                this.b.qb.M,
                c ? c.Xa[J] : this.Xa[J]
              ),
              a.Bc(c ? this.b.Fb : this.b.rb),
              a.Yd(),
              a.translate(-sa, -Y),
              a.de(),
              a.vd(G, T, R, T, R, N, G, N, y)),
          (L.left = L.top = 0),
          (L.right = L.bottom = 1),
          b && !Ua && ((J = T), (T = N), (N = J)));
      M = 0 === M ? 1 : 0;
      X = 0 === M ? 1 : 0;
    }
    Ua &&
      (a.vf(0),
      b
        ? a.$g(b.hc, b.cc)
        : c
        ? a.$g(c.hc, c.cc)
        : this.b.Oc ||
          (a.bh(this.b.width, this.b.height),
          (sa = this.b.width / 2),
          (Y = this.b.height / 2),
          (N = G = 0),
          (R = this.b.width),
          (T = this.b.height)),
      a.xd(d),
      a.Bc(g[X]),
      a.Yd(),
      a.translate(-sa, -Y),
      a.de(),
      b && 1 === e.length && !va
        ? a.vd(G, N, R, N, R, T, G, T, y)
        : a.vd(G, T, R, T, R, N, G, N, y),
      a.Bc(null));
  };
  g.prototype.Zj = function (a) {
    var c, b;
    c = 0;
    for (b = this.ea.length; c < b; c++)
      if (this.ea[c].la === a) return this.ea[c];
    return null;
  };
  g.prototype.Sa = function () {
    var a,
      c,
      b,
      d = {
        sx: this.scrollX,
        sy: this.scrollY,
        s: this.scale,
        a: this.q,
        w: this.width,
        h: this.height,
        fv: this.tg,
        persist: this.qf,
        fx: [],
        layers: {},
      };
    a = 0;
    for (c = this.ca.length; a < c; a++)
      (b = this.ca[a]),
        d.fx.push({
          name: b.name,
          active: b.yb,
          params: this.Xa[b.index],
        });
    a = 0;
    for (c = this.ea.length; a < c; a++)
      (b = this.ea[a]), (d.layers[b.la.toString()] = b.Sa());
    return d;
  };
  g.prototype.cb = function (a) {
    var c, b, d, e;
    this.scrollX = a.sx;
    this.scrollY = a.sy;
    this.scale = a.s;
    this.q = a.a;
    this.width = a.w;
    this.height = a.h;
    this.qf = a.persist;
    "undefined" !== typeof a.fv && (this.tg = a.fv);
    var k = a.fx;
    c = 0;
    for (b = k.length; c < b; c++)
      if ((d = this.ym(k[c].name)))
        (d.yb = k[c].active), (this.Xa[d.index] = k[c].params);
    this.Ad();
    c = a.layers;
    for (e in c)
      c.hasOwnProperty(e) && (a = this.Zj(parseInt(e, 10))) && a.cb(c[e]);
  };
  Ib = g;
  d.prototype.Ad = function () {
    z(this.ya);
    this.Je = !0;
    var a, c, b;
    a = 0;
    for (c = this.ca.length; a < c; a++)
      (b = this.ca[a]), b.yb && (this.ya.push(b), b.sf || (this.Je = !1));
  };
  d.prototype.ym = function (a) {
    var c, b, d;
    c = 0;
    for (b = this.ca.length; c < b; c++)
      if (((d = this.ca[c]), d.name === a)) return d;
    return null;
  };
  d.prototype.vv = function () {
    var a, c, b, d, e, k;
    c = a = 0;
    for (b = this.Qc.length; a < b; a++) {
      d = this.Qc[a];
      e = this.b.G[d[1]];
      k = this.b.po(e);
      e = !0;
      if (!k || this.Gb.tg) {
        d = this.b.bf(d, this, !0);
        if (!d) continue;
        p.push(d);
        d.type.global && ((e = !1), this.Hh.push(d.uid));
      }
      e && ((this.Qc[c] = this.Qc[a]), c++);
    }
    this.Qc.length = c;
    this.b.Ub();
    !this.b.H && this.ca.length && (this.Vb = this.Iv);
    this.Fh = lb(this.Vb);
    this.b.ad && mb(this, this.Vb, this.b.ad);
    this.wd = !0;
  };
  d.prototype.Xg = function (a, c) {
    var b = Da(this.n, a);
    0 > b ||
      (c &&
        this.Vc &&
        a.zc &&
        a.zc.right >= a.zc.left &&
        (a.ma(), this.Sb.update(a, a.zc, null), a.zc.set(0, 0, -1, -1)),
      b === this.n.length - 1 ? this.n.pop() : (za(this.n, b), this.Ki(b)),
      (this.wd = !0));
  };
  d.prototype.zh = function (a, c) {
    a.Bd = this.n.length;
    this.n.push(a);
    c && this.Vc && a.zc && a.P();
    this.wd = !0;
  };
  d.prototype.Vx = function (a) {
    this.n.unshift(a);
    this.Ki(0);
  };
  d.prototype.Ax = function (a, c, b) {
    var d = a.Kd();
    c = c.Kd();
    za(this.n, d);
    d < c && c--;
    b && c++;
    c === this.n.length ? this.n.push(a) : this.n.splice(c, 0, a);
    this.Ki(d < c ? d : c);
  };
  d.prototype.Ki = function (a) {
    -1 === this.Qe ? (this.Qe = a) : a < this.Qe && (this.Qe = a);
    this.wd = this.hg = !0;
  };
  d.prototype.so = function () {
    if (this.hg) {
      -1 === this.Qe && (this.Qe = 0);
      var a, c, b;
      if (this.Vc)
        for (a = this.Qe, c = this.n.length; a < c; ++a)
          (b = this.n[a]), (b.Bd = a), this.Sb.xx(b.zc);
      else for (a = this.Qe, c = this.n.length; a < c; ++a) this.n[a].Bd = a;
      this.hg = !1;
      this.Qe = -1;
    }
  };
  d.prototype.Gc = function (a) {
    return this.Dw() * (this.b.Oc || a ? this.b.Ah : 1);
  };
  d.prototype.Dw = function () {
    return (this.scale * this.Gb.scale - 1) * this.kc + 1;
  };
  d.prototype.$a = function () {
    return this.pe ? 0 : Ka(this.Gb.q + this.q);
  };
  var k = [],
    w = [],
    r = [];
  d.prototype.Dm = function () {
    this.so();
    this.Sb.Tk(this.Ga, this.Ha, this.Ka, this.Ja, r);
    if (!r.length) return f();
    if (1 === r.length) {
      var a = f();
      Ba(a, r[0]);
      z(r);
      return a;
    }
    for (var c = !0; 1 < r.length; ) {
      for (
        var a = r,
          b = void 0,
          d = void 0,
          k = void 0,
          p = void 0,
          g = void 0,
          b = 0,
          d = a.length;
        b < d - 1;
        b += 2
      ) {
        var k = a[b],
          p = a[b + 1],
          g = f(),
          q = k,
          h = p,
          t = g,
          l = 0,
          C = 0,
          I = 0,
          D = q.length,
          Q = h.length,
          J = void 0,
          M = void 0;
        for (t.length = D + Q; l < D && C < Q; ++I)
          (J = q[l]),
            (M = h[C]),
            J.Bd < M.Bd ? ((t[I] = J), ++l) : ((t[I] = M), ++C);
        for (; l < D; ++l, ++I) t[I] = q[l];
        for (; C < Q; ++C, ++I) t[I] = h[C];
        c || (e(k), e(p));
        w.push(g);
      }
      1 === d % 2 &&
        (c ? ((k = f()), Ba(k, a[d - 1]), w.push(k)) : w.push(a[d - 1]));
      Ba(a, w);
      z(w);
      c = !1;
    }
    a = r[0];
    z(r);
    return a;
  };
  d.prototype.$c = function (a) {
    this.Xd = this.Tj || 1 !== this.opacity || 0 !== this.Vb;
    var c = this.b.canvas,
      b = a,
      d = !1;
    this.Xd &&
      (this.b.qk ||
        ((this.b.qk = document.createElement("canvas")),
        (c = this.b.qk),
        (c.width = this.b.T),
        (c.height = this.b.S),
        (this.b.wq = c.getContext("2d")),
        (d = !0)),
      (c = this.b.qk),
      (b = this.b.wq),
      c.width !== this.b.T && ((c.width = this.b.T), (d = !0)),
      c.height !== this.b.S && ((c.height = this.b.S), (d = !0)),
      d &&
        ((b.webkitImageSmoothingEnabled = this.b.fa),
        (b.mozImageSmoothingEnabled = this.b.fa),
        (b.msImageSmoothingEnabled = this.b.fa),
        (b.imageSmoothingEnabled = this.b.fa)),
      this.Uc && b.clearRect(0, 0, this.b.T, this.b.S));
    b.globalAlpha = 1;
    b.globalCompositeOperation = "source-over";
    this.Uc ||
      ((b.fillStyle =
        "rgb(" + this.nd[0] + "," + this.nd[1] + "," + this.nd[2] + ")"),
      b.fillRect(0, 0, this.b.T, this.b.S));
    b.save();
    this.pe = !0;
    var d = this.Za(0, 0, !0, !0),
      k = this.Za(0, 0, !1, !0);
    this.pe = !1;
    this.b.Sc && ((d = Math.round(d)), (k = Math.round(k)));
    this.Uk(d, k, b);
    var f = this.Gc();
    b.scale(f, f);
    b.translate(-d, -k);
    this.Vc
      ? ((this.Ob.left = this.Sb.tc(this.Ga)),
        (this.Ob.top = this.Sb.uc(this.Ha)),
        (this.Ob.right = this.Sb.tc(this.Ka)),
        (this.Ob.bottom = this.Sb.uc(this.Ja)),
        this.wd || !this.Ob.Jh(this.Kg)
          ? (e(this.Ae), (d = this.Dm()), (this.wd = !1), this.Kg.Gh(this.Ob))
          : (d = this.Ae))
      : (d = this.n);
    for (var p, q = null, k = 0, f = d.length; k < f; ++k)
      (p = d[k]), p !== q && (this.Cv(p, b), (q = p));
    this.Vc && (this.Ae = d);
    b.restore();
    //alert('game stop111');
    this.Xd &&
      ((a.globalCompositeOperation = this.Fh),
      (a.globalAlpha = this.opacity),
      a.drawImage(c, 0, 0));
  };
  d.prototype.Cv = function (a, c) {
    if (a.visible && 0 !== a.width && 0 !== a.height) {
      a.ma();
      var b = a.Ia;
      b.right < this.Ga ||
        b.bottom < this.Ha ||
        b.left > this.Ka ||
        b.top > this.Ja ||
        ((c.globalCompositeOperation = a.Fh), a.$c(c));
    }
  };
  d.prototype.tl = function () {
    this.pe = !0;
    var a = this.Za(0, 0, !0, !0),
      c = this.Za(0, 0, !1, !0);
    this.pe = !1;
    this.b.Sc && ((a = Math.round(a)), (c = Math.round(c)));
    this.Uk(a, c, null);
  };
  d.prototype.Uk = function (a, c, b) {
    var d = this.Gc();
    this.Ga = a;
    this.Ha = c;
    this.Ka = a + (1 / d) * this.b.T;
    this.Ja = c + (1 / d) * this.b.S;
    this.Ga > this.Ka && ((a = this.Ga), (this.Ga = this.Ka), (this.Ka = a));
    this.Ha > this.Ja && ((a = this.Ha), (this.Ha = this.Ja), (this.Ja = a));
    a = this.$a();
    0 !== a &&
      (b &&
        (b.translate(this.b.T / 2, this.b.S / 2),
        b.rotate(-a),
        b.translate(this.b.T / -2, this.b.S / -2)),
      this.Me.set(this.Ga, this.Ha, this.Ka, this.Ja),
      this.Me.offset((this.Ga + this.Ka) / -2, (this.Ha + this.Ja) / -2),
      this.Kr.sr(this.Me, a),
      this.Kr.Ap(this.Me),
      this.Me.offset((this.Ga + this.Ka) / 2, (this.Ha + this.Ja) / 2),
      (this.Ga = this.Me.left),
      (this.Ha = this.Me.top),
      (this.Ka = this.Me.right),
      (this.Ja = this.Me.bottom));
  };
  d.prototype.df = function (a) {
    if ((this.Xd = this.Tj)) {
      this.b.Fb || (this.b.Fb = a.Xc(this.b.T, this.b.S, this.b.fa));
      if (this.b.Fb.le !== this.b.T || this.b.Fb.ke !== this.b.S)
        a.deleteTexture(this.b.Fb),
          (this.b.Fb = a.Xc(this.b.T, this.b.S, this.b.fa));
      a.xd(this.b.Fb);
    }
    this.pe = !0;
    var c = this.Za(0, 0, !0, !0),
      b = this.Za(0, 0, !1, !0);
    this.pe = !1;
    this.b.Sc && ((c = Math.round(c)), (b = Math.round(b)));
    this.Uk(c, b, null);
    c = this.Gc();
    a.Yd();
    a.scale(c, c);
    a.Sn(-this.$a());
    a.translate((this.Ga + this.Ka) / -2, (this.Ha + this.Ja) / -2);
    a.de();
    this.Vc
      ? ((this.Ob.left = this.Sb.tc(this.Ga)),
        (this.Ob.top = this.Sb.uc(this.Ha)),
        (this.Ob.right = this.Sb.tc(this.Ka)),
        (this.Ob.bottom = this.Sb.uc(this.Ja)),
        this.wd || !this.Ob.Jh(this.Kg)
          ? (e(this.Ae), (c = this.Dm()), (this.wd = !1), this.Kg.Gh(this.Ob))
          : (c = this.Ae))
      : (c = this.n);
    for (var d, k = null, b = c.length - 1; 0 <= b; --b)
      (d = c[b]), d !== k && (this.Ev(c[b], a), (k = d));
    this.Vc && (this.Ae = c);
    this.Uc ||
      ((this.em = this.b.Ff++),
      a.$n(this.em),
      a.vy(1, 1, 1, 1),
      a.uw(),
      a.xA());
  };
  d.prototype.mc = function (a) {
    var c = 0,
      b = 0;
    if (
      (this.Xd =
        this.Tj || 1 !== this.opacity || 0 < this.ya.length || 0 !== this.Vb)
    ) {
      //alert('game stop2222');
      this.b.Fb || (this.b.Fb = a.Xc(this.b.T, this.b.S, this.b.fa));
      if (this.b.Fb.le !== this.b.T || this.b.Fb.ke !== this.b.S)
        a.deleteTexture(this.b.Fb),
          (this.b.Fb = a.Xc(this.b.T, this.b.S, this.b.fa));
      a.xd(this.b.Fb);
      this.Uc && a.clear(0, 0, 0, 0);
    }
    this.Uc ||
      (this.b.Gf
        ? (a.$n(this.em),
          a.vy(this.nd[0] / 255, this.nd[1] / 255, this.nd[2] / 255, 1),
          a.uw(),
          a.zA())
        : a.clear(this.nd[0] / 255, this.nd[1] / 255, this.nd[2] / 255, 1));
    this.pe = !0;
    var d = this.Za(0, 0, !0, !0),
      c = this.Za(0, 0, !1, !0);
    this.pe = !1;
    this.b.Sc && ((d = Math.round(d)), (c = Math.round(c)));
    this.Uk(d, c, null);
    d = this.Gc();
    a.Yd();
    a.scale(d, d);
    a.Sn(-this.$a());
    a.translate((this.Ga + this.Ka) / -2, (this.Ha + this.Ja) / -2);
    a.de();
    this.Vc
      ? ((this.Ob.left = this.Sb.tc(this.Ga)),
        (this.Ob.top = this.Sb.uc(this.Ha)),
        (this.Ob.right = this.Sb.tc(this.Ka)),
        (this.Ob.bottom = this.Sb.uc(this.Ja)),
        this.wd || !this.Ob.Jh(this.Kg)
          ? (e(this.Ae), (c = this.Dm()), (this.wd = !1), this.Kg.Gh(this.Ob))
          : (c = this.Ae))
      : (c = this.n);
    var k,
      f,
      p = null,
      b = 0;
    for (k = c.length; b < k; ++b)
      (f = c[b]), f !== p && (this.Dv(c[b], a), (p = f));
    this.Vc && (this.Ae = c);
    this.Xd &&
      ((c = this.ya.length ? this.ya[0].tb : 0),
      (b = this.ya.length ? this.ya[0].index : 0),
      0 === this.ya.length ||
      (1 === this.ya.length && !a.fr(c) && 1 === this.opacity)
        ? (1 === this.ya.length
            ? (a.vf(c),
              a.Ji(
                this.Gb.Rh(),
                1 / this.b.T,
                1 / this.b.S,
                0,
                0,
                1,
                1,
                d,
                this.$a(),
                this.Ga,
                this.Ha,
                (this.Ga + this.Ka) / 2,
                (this.Ha + this.Ja) / 2,
                this.b.qb.M,
                this.Xa[b]
              ),
              a.Gn(c) && (this.b.ua = !0))
            : a.vf(0),
          a.xd(this.Gb.Rh()),
          a.$f(this.opacity),
          a.Bc(this.b.Fb),
          a.$g(this.hc, this.cc),
          a.Yd(),
          a.de(),
          (d = this.b.T / 2),
          (c = this.b.S / 2),
          a.In(-d, c, d, c, d, -c, -d, -c),
          a.Bc(null))
        : this.Gb.Nn(a, this, null, this.Gb.Rh()));
  };
  d.prototype.Dv = function (a, c) {
    if (a.visible && 0 !== a.width && 0 !== a.height) {
      a.ma();
      var b = a.Ia;
      b.right < this.Ga ||
        b.bottom < this.Ha ||
        b.left > this.Ka ||
        b.top > this.Ja ||
        (c.$n(a.Ff),
        a.Zr ? this.Fv(a, c) : (c.vf(0), c.$g(a.hc, a.cc), a.mc(c)));
    }
  };
  d.prototype.Ev = function (a, c) {
    if (a.visible && 0 !== a.width && 0 !== a.height) {
      a.ma();
      var b = a.Ia;
      b.right < this.Ga ||
        b.bottom < this.Ha ||
        b.left > this.Ka ||
        b.top > this.Ja ||
        ((a.Ff = this.b.Ff++),
        0 === a.Vb && 1 === a.opacity && a.Je && a.df && (c.$n(a.Ff), a.df(c)));
    }
  };
  d.prototype.Fv = function (a, c) {
    var b = a.ya[0].tb,
      d = a.ya[0].index,
      e = this.Gc();
    if (
      1 !== a.ya.length ||
      c.fr(b) ||
      c.tA(b) ||
      ((a.q || a.A.$a()) && c.Rk(b)) ||
      1 !== a.opacity ||
      a.type.ra.Eq
    )
      this.Gb.Nn(c, this, a, this.Xd ? this.b.Fb : this.Gb.Rh()),
        c.Yd(),
        c.scale(e, e),
        c.Sn(-this.$a()),
        c.translate((this.Ga + this.Ka) / -2, (this.Ha + this.Ja) / -2),
        c.de();
    else {
      c.vf(b);
      c.$g(a.hc, a.cc);
      c.Gn(b) && (this.b.ua = !0);
      var k = 0,
        f = 0,
        q = 0,
        h = 0;
      c.Rk(b) &&
        ((h = a.Ia),
        (k = this.Ra(h.left, h.top, !0, !0)),
        (f = this.Ra(h.left, h.top, !1, !0)),
        (q = this.Ra(h.right, h.bottom, !0, !0)),
        (h = this.Ra(h.right, h.bottom, !1, !0)),
        (k = k / windowWidth),
        (f = 1 - f / windowHeight),
        (q = q / windowWidth),
        (h = 1 - h / windowHeight));
      var t;
      a.Va && a.Va.N
        ? ((t = a.Va.N), (b = 1 / t.width), (t = 1 / t.height))
        : ((b = 1 / a.width), (t = 1 / a.height));
      c.Ji(
        this.Xd ? this.b.Fb : this.Gb.Rh(),
        b,
        t,
        k,
        f,
        q,
        h,
        e,
        this.$a(),
        this.Ga,
        this.Ha,
        (this.Ga + this.Ka) / 2,
        (this.Ha + this.Ja) / 2,
        this.b.qb.M,
        a.Xa[d]
      );
      a.mc(c);
    }
  };
  d.prototype.Za = function (a, c, b, d) {
    var e = this.b.devicePixelRatio;
    this.b.Qf && ((a *= e), (c *= e));
    var e = this.b.$q,
      k = this.b.br,
      e = (this.Gb.scrollX - e) * this.xc + e,
      k = (this.Gb.scrollY - k) * this.yc + k,
      f = e,
      q = k,
      h = 1 / this.Gc(!d);
    d
      ? ((f -= (this.b.T * h) / 2), (q -= (this.b.S * h) / 2))
      : ((f -= (this.b.width * h) / 2), (q -= (this.b.height * h) / 2));
    f += a * h;
    q += c * h;
    c = this.$a();
    0 !== c &&
      ((f -= e),
      (q -= k),
      (a = Math.cos(c)),
      (c = Math.sin(c)),
      (d = f * a - q * c),
      (q = q * a + f * c),
      (f = d + e),
      (q += k));
    return b ? f : q;
  };
  d.prototype.Ra = function (a, c, b, d) {
    var e = this.b.$q,
      k = this.b.br,
      f = (this.Gb.scrollX - e) * this.xc + e,
      q = (this.Gb.scrollY - k) * this.yc + k,
      k = f,
      e = q,
      h = this.$a();
    if (0 !== h) {
      a -= f;
      c -= q;
      var t = Math.cos(-h),
        h = Math.sin(-h),
        p = a * t - c * h;
      c = c * t + a * h;
      a = p + f;
      c += q;
    }
    f = 1 / this.Gc(!d);
    d
      ? ((k -= (this.b.T * f) / 2), (e -= (this.b.S * f) / 2))
      : ((k -= (this.b.width * f) / 2), (e -= (this.b.height * f) / 2));
    k = (a - k) / f;
    e = (c - e) / f;
    a = this.b.devicePixelRatio;
    this.b.Qf && !d && ((k /= a), (e /= a));
    return b ? k : e;
  };
  d.prototype.Sa = function () {
    var a,
      c,
      b,
      d = {
        s: this.scale,
        a: this.q,
        vl: this.Ga,
        vt: this.Ha,
        vr: this.Ka,
        vb: this.Ja,
        v: this.visible,
        bc: this.nd,
        t: this.Uc,
        px: this.xc,
        py: this.yc,
        o: this.opacity,
        zr: this.kc,
        fx: [],
        cg: this.Hh,
        instances: [],
      };
    a = 0;
    for (c = this.ca.length; a < c; a++)
      (b = this.ca[a]),
        d.fx.push({
          name: b.name,
          active: b.yb,
          params: this.Xa[b.index],
        });
    return d;
  };
  d.prototype.cb = function (a) {
    var c, b, d;
    this.scale = a.s;
    this.q = a.a;
    this.Ga = a.vl;
    this.Ha = a.vt;
    this.Ka = a.vr;
    this.Ja = a.vb;
    this.visible = a.v;
    this.nd = a.bc;
    this.Uc = a.t;
    this.xc = a.px;
    this.yc = a.py;
    this.opacity = a.o;
    this.kc = a.zr;
    this.Hh = a.cg || [];
    Ba(this.Qc, this.Br);
    var e = new da();
    c = 0;
    for (d = this.Hh.length; c < d; ++c) e.add(this.Hh[c]);
    b = c = 0;
    for (d = this.Qc.length; c < d; ++c)
      e.contains(this.Qc[c][2]) || ((this.Qc[b] = this.Qc[c]), ++b);
    Aa(this.Qc, b);
    b = a.fx;
    c = 0;
    for (d = b.length; c < d; c++)
      if ((a = this.ym(b[c].name)))
        (a.yb = b[c].active), (this.Xa[a.index] = b[c].params);
    this.Ad();
    this.n.sort(l);
    this.hg = !0;
  };
  Yb = d;
})();
(function () {
  function g(a, c) {
    var b,
      d = a.length;
    switch (d) {
      case 0:
        return !0;
      case 1:
        return a[0] === c[0];
      case 2:
        return a[0] === c[0] && a[1] === c[1];
      default:
        for (b = 0; b < d; b++) if (a[b] !== c[b]) return !1;
        return !0;
    }
  }
  function l(a, c) {
    return a.index - c.index;
  }
  function d(a) {
    var c, b, d, e;
    2 === a.length
      ? a[0].index > a[1].index && ((c = a[0]), (a[0] = a[1]), (a[1] = c))
      : 2 < a.length && a.sort(l);
    a.length >= v.length && (v.length = a.length + 1);
    v[a.length] || (v[a.length] = []);
    e = v[a.length];
    c = 0;
    for (b = e.length; c < b; c++) if (((d = e[c]), g(a, d))) return d;
    e.push(a);
    return a;
  }
  function f(a, c) {
    this.b = a;
    this.Or = {};
    this.Np = {};
    this.Jm = !1;
    this.hq = new da();
    this.jm = [];
    this.Tl = [];
    this.name = c[0];
    var b = c[1];
    this.ef = [];
    var d, e;
    d = 0;
    for (e = b.length; d < e; d++) this.iq(b[d], null, this.ef);
  }
  function e(a) {
    this.type = a;
    this.n = [];
    this.ja = [];
    this.ga = !0;
  }
  function p(a, c, b) {
    this.sheet = a;
    this.parent = c;
    this.b = a.b;
    this.Ba = [];
    this.tf = [];
    this.fq = this.ll = this.lo = this.Om = this.group = this.eo = !1;
    this.Ab = [];
    this.kd = [];
    this.hd = [];
    this.Uh = "";
    this.Lf = this.Om = this.group = !1;
    this.zj = null;
    b[1] &&
      ((this.Uh = b[1][1].toLowerCase()),
      (this.group = !0),
      (this.Om = !!b[1][0]),
      (this.zj = []),
      (this.Lf = this.Om),
      this.b.lg.push(this),
      (this.b.wg[this.Uh] = this));
    this.ed = b[2];
    this.la = b[4];
    this.group || (this.b.yp[this.la.toString()] = this);
    var d = b[5];
    a = 0;
    for (c = d.length; a < c; a++) {
      var e = new Zb(this, d[a]);
      e.index = a;
      this.Ab.push(e);
      this.rp(e.type);
    }
    d = b[6];
    a = 0;
    for (c = d.length; a < c; a++)
      (e = new $b(this, d[a])), (e.index = a), this.kd.push(e);
    if (8 === b.length)
      for (b = b[7], a = 0, c = b.length; a < c; a++)
        this.sheet.iq(b[a], this, this.hd);
    this.kk = !1;
    this.Ab.length &&
      (this.kk = null == this.Ab[0].type && this.Ab[0].Pb == H.prototype.k.Fo);
  }
  function b(a, c) {
    var b, d, e;
    if (a && (-1 === c.indexOf(a) && c.push(a), a.wc))
      for (b = 0, d = a.Dc.length; b < d; b++)
        (e = a.Dc[b]), a !== e && -1 === c.indexOf(e) && c.push(e);
  }
  function k(a, c) {
    this.Mc = a;
    this.sheet = a.sheet;
    this.b = a.b;
    this.Na = [];
    this.Ya = [];
    this.X = {};
    this.index = -1;
    this.xh = !1;
    this.Pb = this.b.Re(c[1]);
    this.trigger = 0 < c[3];
    this.Mp = 2 === c[3];
    this.Sd = c[4];
    this.$h = c[5];
    this.ux = c[6];
    this.la = c[7];
    this.b.Ze[this.la.toString()] = this;
    -1 === c[0]
      ? ((this.type = null),
        (this.sb = this.Un),
        (this.Af = null),
        (this.od = -1))
      : ((this.type = this.b.G[c[0]]),
        (this.sb = this.ux ? this.oy : this.Tn),
        c[2]
          ? ((this.Af = this.type.Xj(c[2])), (this.od = this.type.xm(c[2])))
          : ((this.Af = null), (this.od = -1)),
        this.Mc.parent && this.Mc.parent.Yk());
    this.Mp && (this.sb = this.qy);
    if (10 === c.length) {
      var b,
        d,
        e = c[9];
      b = 0;
      for (d = e.length; b < d; b++) {
        var k = new ac(this, e[b]);
        this.Na.push(k);
      }
      this.Ya.length = e.length;
    }
  }
  function w(a, c) {
    this.Mc = a;
    this.sheet = a.sheet;
    this.b = a.b;
    this.Na = [];
    this.Ya = [];
    this.X = {};
    this.index = -1;
    this.xh = !1;
    this.Pb = this.b.Re(c[1]);
    -1 === c[0]
      ? ((this.type = null),
        (this.sb = this.Un),
        (this.Af = null),
        (this.od = -1))
      : ((this.type = this.b.G[c[0]]),
        (this.sb = this.Tn),
        c[2]
          ? ((this.Af = this.type.Xj(c[2])), (this.od = this.type.xm(c[2])))
          : ((this.Af = null), (this.od = -1)));
    this.la = c[3];
    this.b.Ue[this.la.toString()] = this;
    if (6 === c.length) {
      var b,
        d,
        e = c[5];
      b = 0;
      for (d = e.length; b < d; b++) {
        var k = new ac(this, e[b]);
        this.Na.push(k);
      }
      this.Ya.length = e.length;
    }
  }
  function r() {
    A++;
    F.length === A && F.push(new bc());
    return F[A];
  }
  function a(a, c) {
    this.fd = a;
    this.Mc = a.Mc;
    this.sheet = a.sheet;
    this.b = a.b;
    this.type = c[0];
    this.Gd = null;
    this.Ke = 0;
    this.get = null;
    this.Fp = 0;
    this.Gb = null;
    this.key = 0;
    this.object = null;
    this.index = 0;
    this.Zi = this.dg = this.Zi = this.dg = this.Qp = this.Jf = this.$i = null;
    this.jd = !1;
    var b, d, e;
    switch (c[0]) {
      case 0:
      case 7:
        this.Gd = new cc(this, c[1]);
        this.Ke = 0;
        this.get = this.Lw;
        break;
      case 1:
        this.Gd = new cc(this, c[1]);
        this.Ke = 0;
        this.get = this.Mw;
        break;
      case 5:
        this.Gd = new cc(this, c[1]);
        this.Ke = 0;
        this.get = this.Qw;
        break;
      case 3:
      case 8:
        this.Fp = c[1];
        this.get = this.Jw;
        break;
      case 6:
        this.Gb = this.b.Lg[c[1]];
        this.get = this.Rw;
        break;
      case 9:
        this.key = c[1];
        this.get = this.Pw;
        break;
      case 4:
        this.object = this.b.G[c[1]];
        this.get = this.Sw;
        this.Mc.rp(this.object);
        this.fd instanceof $b
          ? this.Mc.Yk()
          : this.Mc.parent && this.Mc.parent.Yk();
        break;
      case 10:
        this.index = c[1];
        a.type && a.type.O
          ? ((this.get = this.Nw), (this.jd = !0))
          : (this.get = this.Ow);
        break;
      case 11:
        this.$i = c[1];
        this.Jf = null;
        this.get = this.Kw;
        break;
      case 2:
      case 12:
        this.Qp = c[1];
        this.get = this.Iw;
        break;
      case 13:
        for (
          this.get = this.Tw, this.dg = [], this.Zi = [], b = 1, d = c.length;
          b < d;
          b++
        )
          (e = new ac(this.fd, c[b])), this.dg.push(e), this.Zi.push(0);
    }
  }
  function c(a, c, b) {
    this.sheet = a;
    this.parent = c;
    this.b = a.b;
    this.Ba = [];
    this.name = b[1];
    this.wl = b[2];
    this.Nm = b[3];
    this.ji = !!b[4];
    this.jk = !!b[5];
    this.la = b[6];
    this.b.nh[this.la.toString()] = this;
    this.data = this.Nm;
    this.parent
      ? ((this.Wf = this.ji || this.jk ? -1 : this.b.Fy++),
        this.b.Yu.push(this))
      : ((this.Wf = -1), this.b.Xu.push(this));
  }
  function m(a, c, b) {
    this.sheet = a;
    this.parent = c;
    this.b = a.b;
    this.Ba = [];
    this.Xh = null;
    this.Zw = b[1];
    this.yb = !0;
  }
  function n() {
    this.Er = [];
    this.reset(null);
  }
  var v = [];
  f.prototype.toString = function () {
    return this.name;
  };
  f.prototype.iq = function (a, c, b) {
    switch (a[0]) {
      case 0:
        a = new dc(this, c, a);
        if (a.ed)
          for (b.push(a), b = 0, c = a.Ab.length; b < c; b++)
            a.Ab[b].trigger && this.jq(a, b);
        else a.rq() ? this.jq(a, 0) : b.push(a);
        break;
      case 1:
        a = new Vb(this, c, a);
        b.push(a);
        break;
      case 2:
        (a = new ec(this, c, a)), b.push(a);
    }
  };
  f.prototype.kb = function () {
    var a, c;
    a = 0;
    for (c = this.ef.length; a < c; a++)
      this.ef[a].kb(a < c - 1 && this.ef[a + 1].kk);
  };
  f.prototype.qo = function () {
    z(this.jm);
    z(this.Tl);
    this.qp(this);
    z(this.Tl);
  };
  f.prototype.qp = function (a) {
    var c,
      b,
      d,
      e,
      k = a.jm,
      n = a.Tl,
      f = this.hq.Oe();
    c = 0;
    for (b = f.length; c < b; ++c)
      (d = f[c]),
        (e = d.Xh),
        !d.yb ||
          a === e ||
          -1 < n.indexOf(e) ||
          (n.push(e), e.qp(a), k.push(e));
  };
  f.prototype.sb = function (a) {
    this.b.yA || ((this.Jm = !0), a || (this.b.Vm = !0));
    var c, b;
    c = 0;
    for (b = this.ef.length; c < b; c++) {
      var d = this.ef[c];
      d.sb();
      this.b.dm(d.Ba);
      this.b.hf && this.b.Ub();
    }
    a || (this.b.Vm = !1);
  };
  f.prototype.jq = function (a, c) {
    a.ed || this.b.pl.push(a);
    var b,
      d,
      e = a.Ab[c],
      k;
    e.type ? (k = e.type.name) : (k = "system");
    var n = (b = e.Mp) ? this.Np : this.Or;
    n[k] || (n[k] = []);
    k = n[k];
    n = e.Pb;
    if (b) {
      if (e.Na.length && ((e = e.Na[0]), 1 === e.type && 2 === e.Gd.type)) {
        e = e.Gd.value.toLowerCase();
        b = 0;
        for (d = k.length; b < d; b++)
          if (k[b].method == n) {
            b = k[b].Kh;
            b[e] ? b[e].push([a, c]) : (b[e] = [[a, c]]);
            return;
          }
        b = {};
        b[e] = [[a, c]];
        k.push({
          method: n,
          Kh: b,
        });
      }
    } else {
      b = 0;
      for (d = k.length; b < d; b++)
        if (k[b].method == n) {
          k[b].Kh.push([a, c]);
          return;
        }
      P && n === P.prototype.k.kg
        ? k.unshift({
            method: n,
            Kh: [[a, c]],
          })
        : k.push({
            method: n,
            Kh: [[a, c]],
          });
    }
  };
  Jb = f;
  e.prototype.Im = function () {
    return this.ga ? this.type.n.length : this.n.length;
  };
  e.prototype.oc = function () {
    return this.ga ? this.type.n : this.n;
  };
  e.prototype.yi = function (a) {
    a &&
      (a.b.Cb().nb.ed
        ? (this.ga && (z(this.n), Ba(this.ja, a.type.n), (this.ga = !1)),
          (a = this.ja.indexOf(a)),
          -1 !== a && (this.n.push(this.ja[a]), this.ja.splice(a, 1)))
        : ((this.ga = !1), z(this.n), (this.n[0] = a)));
  };
  rb = e;
  window._c2hh_ = "790F94C0DB784367F534EC4496185788B1C13FC4";
  p.prototype.kb = function (a) {
    var c,
      b = this.parent;
    if (this.group)
      for (this.ll = !0; b; ) {
        if (!b.group) {
          this.ll = !1;
          break;
        }
        b = b.parent;
      }
    this.lo =
      !this.rq() && (!this.parent || (this.parent.group && this.parent.ll));
    this.fq = !!a;
    this.tf = this.Ba.slice(0);
    for (b = this.parent; b; ) {
      a = 0;
      for (c = b.Ba.length; a < c; a++) this.Wu(b.Ba[a]);
      b = b.parent;
    }
    this.Ba = d(this.Ba);
    this.tf = d(this.tf);
    a = 0;
    for (c = this.Ab.length; a < c; a++) this.Ab[a].kb();
    a = 0;
    for (c = this.kd.length; a < c; a++) this.kd[a].kb();
    a = 0;
    for (c = this.hd.length; a < c; a++)
      this.hd[a].kb(a < c - 1 && this.hd[a + 1].kk);
  };
  p.prototype.Xk = function (a) {
    if (this.Lf !== !!a) {
      this.Lf = !!a;
      var c;
      a = 0;
      for (c = this.zj.length; a < c; ++a) this.zj[a].Sr();
      0 < c && this.b.Ma.If && this.b.Ma.If.qo();
    }
  };
  p.prototype.rp = function (a) {
    b(a, this.Ba);
  };
  p.prototype.Wu = function (a) {
    b(a, this.tf);
  };
  p.prototype.Yk = function () {
    this.eo = !0;
    this.parent && this.parent.Yk();
  };
  p.prototype.rq = function () {
    return this.Ab.length ? this.Ab[0].trigger : !1;
  };
  p.prototype.sb = function () {
    var a,
      c,
      b = !1,
      d = this.b,
      e = this.b.Cb();
    e.nb = this;
    var k = this.Ab;
    this.kk || (e.mm = !1);
    if (this.ed) {
      0 === k.length && (b = !0);
      e.zb = 0;
      for (a = k.length; e.zb < a; e.zb++)
        (c = k[e.zb]), c.trigger || ((c = c.sb()) && (b = !0));
      (e.Rf = b) && this.Vk();
    } else {
      e.zb = 0;
      for (a = k.length; e.zb < a; e.zb++)
        if (((c = k[e.zb].sb()), !c)) {
          e.Rf = !1;
          this.lo && d.hf && d.Ub();
          return;
        }
      e.Rf = !0;
      this.Vk();
    }
    this.Kv(e);
  };
  p.prototype.Kv = function (a) {
    a.Rf && this.fq && (a.mm = !0);
    this.lo && this.b.hf && this.b.Ub();
  };
  p.prototype.my = function (a) {
    this.b.Cb().nb = this;
    this.Ab[a].sb() && (this.Vk(), (this.b.Cb().Rf = !0));
  };
  p.prototype.Vk = function () {
    var a = this.b.Cb(),
      c;
    a.lc = 0;
    for (c = this.kd.length; a.lc < c; a.lc++) if (this.kd[a.lc].sb()) return;
    this.lr();
  };
  p.prototype.iy = function () {
    var a = this.b.Cb(),
      c;
    for (c = this.kd.length; a.lc < c; a.lc++) if (this.kd[a.lc].sb()) return;
    this.lr();
  };
  p.prototype.lr = function () {
    if (this.hd.length) {
      var a,
        c,
        b,
        d,
        e = this.hd.length - 1;
      this.b.Sk(this);
      if (this.eo)
        for (a = 0, c = this.hd.length; a < c; a++)
          (b = this.hd[a]),
            (d = !this.ll || (!this.group && a < e)) && this.b.Di(b.Ba),
            b.sb(),
            d ? this.b.rf(b.Ba) : this.b.dm(b.Ba);
      else for (a = 0, c = this.hd.length; a < c; a++) this.hd[a].sb();
      this.b.Ok();
    }
  };
  p.prototype.ny = function () {
    var a = this.b.Cb();
    a.nb = this;
    var c = !1,
      b;
    a.zb = 0;
    for (b = this.Ab.length; a.zb < b; a.zb++)
      if (this.Ab[a.zb].sb()) c = !0;
      else if (!this.ed) return !1;
    return this.ed ? c : !0;
  };
  p.prototype.Qn = function () {
    this.b.Lh++;
    var a = this.b.Cb().zb,
      c = this.b.Sk(this);
    if (!this.ed)
      for (c.zb = a + 1, a = this.Ab.length; c.zb < a; c.zb++)
        if (!this.Ab[c.zb].sb()) {
          this.b.Ok();
          return;
        }
    this.Vk();
    this.b.Ok();
  };
  p.prototype.jx = function (a) {
    var c = a.index;
    if (0 === c) return !0;
    for (--c; 0 <= c; --c) if (this.Ab[c].type === a.type) return !1;
    return !0;
  };
  dc = p;
  k.prototype.kb = function () {
    var a, c, b;
    a = 0;
    for (c = this.Na.length; a < c; a++)
      (b = this.Na[a]), b.kb(), b.jd && (this.xh = !0);
  };
  k.prototype.qy = function () {
    return !0;
  };
  k.prototype.Un = function () {
    var a, c;
    a = 0;
    for (c = this.Na.length; a < c; a++) this.Ya[a] = this.Na[a].get();
    return Ta(this.Pb.apply(this.b.ae, this.Ya), this.$h);
  };
  k.prototype.oy = function () {
    var a, c;
    a = 0;
    for (c = this.Na.length; a < c; a++) this.Ya[a] = this.Na[a].get();
    a = this.Pb.apply(this.Af ? this.Af : this.type, this.Ya);
    this.type.Lc();
    return a;
  };
  k.prototype.Tn = function () {
    var a,
      c,
      b,
      d,
      e,
      k,
      n,
      f,
      m = this.type,
      p = m.Y(),
      g = this.Mc.ed && !this.trigger;
    c = 0;
    var r = m.wc,
      l = m.O,
      v = m.ve,
      w = this.od,
      A = -1 < w,
      F = this.xh,
      y = this.Na,
      L = this.Ya,
      G = this.$h,
      V = this.Pb,
      N;
    if (F)
      for (c = 0, e = y.length; c < e; ++c)
        (k = y[c]), k.jd || (L[c] = k.get(0));
    else for (c = 0, e = y.length; c < e; ++c) L[c] = y[c].get(0);
    if (p.ga) {
      z(p.n);
      z(p.ja);
      N = m.n;
      a = 0;
      for (d = N.length; a < d; ++a) {
        f = N[a];
        if (F)
          for (c = 0, e = y.length; c < e; ++c)
            (k = y[c]), k.jd && (L[c] = k.get(a));
        A
          ? ((c = 0), l && (c = f.type.sg[v]), (c = V.apply(f.V[w + c], L)))
          : (c = V.apply(f, L));
        (n = Ta(c, G)) ? p.n.push(f) : g && p.ja.push(f);
      }
      m.finish && m.finish(!0);
      p.ga = !1;
      m.Lc();
      return p.Im();
    }
    b = 0;
    N = (n = g && !this.Mc.jx(this)) ? p.ja : p.n;
    var O = !1;
    a = 0;
    for (d = N.length; a < d; ++a) {
      f = N[a];
      if (F)
        for (c = 0, e = y.length; c < e; ++c)
          (k = y[c]), k.jd && (L[c] = k.get(a));
      A
        ? ((c = 0), l && (c = f.type.sg[v]), (c = V.apply(f.V[w + c], L)))
        : (c = V.apply(f, L));
      if (Ta(c, G))
        if (((O = !0), n)) {
          if ((p.n.push(f), r))
            for (c = 0, e = f.siblings.length; c < e; c++)
              (k = f.siblings[c]), k.type.Y().n.push(k);
        } else {
          N[b] = f;
          if (r)
            for (c = 0, e = f.siblings.length; c < e; c++)
              (k = f.siblings[c]), (k.type.Y().n[b] = k);
          b++;
        }
      else if (n) {
        N[b] = f;
        if (r)
          for (c = 0, e = f.siblings.length; c < e; c++)
            (k = f.siblings[c]), (k.type.Y().ja[b] = k);
        b++;
      } else if (g && (p.ja.push(f), r))
        for (c = 0, e = f.siblings.length; c < e; c++)
          (k = f.siblings[c]), k.type.Y().ja.push(k);
    }
    Aa(N, b);
    if (r)
      for (l = m.Dc, a = 0, d = l.length; a < d; a++)
        (f = l[a].Y()), n ? Aa(f.ja, b) : Aa(f.n, b);
    b = O;
    if (n && !O)
      for (a = 0, d = p.n.length; a < d; a++) {
        f = p.n[a];
        if (F)
          for (c = 0, e = y.length; c < e; c++)
            (k = y[c]), k.jd && (L[c] = k.get(a));
        c = A ? V.apply(f.V[w], L) : V.apply(f, L);
        if (Ta(c, G)) {
          O = !0;
          break;
        }
      }
    m.finish && m.finish(b || g);
    return g ? O : p.Im();
  };
  Zb = k;
  w.prototype.kb = function () {
    var a, c, b;
    a = 0;
    for (c = this.Na.length; a < c; a++)
      (b = this.Na[a]), b.kb(), b.jd && (this.xh = !0);
  };
  w.prototype.Un = function () {
    var a = this.b,
      c,
      b,
      d = this.Na,
      e = this.Ya;
    c = 0;
    for (b = d.length; c < b; ++c) e[c] = d[c].get();
    return this.Pb.apply(a.ae, e);
  };
  w.prototype.Tn = function () {
    var a = this.type,
      c = this.od,
      b = a.ve,
      d = this.xh,
      e = this.Na,
      k = this.Ya,
      n = this.Pb,
      f = a.Y().oc(),
      a = a.O,
      m = -1 < c,
      p,
      g,
      r,
      l,
      v,
      w;
    if (d)
      for (g = 0, l = e.length; g < l; ++g)
        (v = e[g]), v.jd || (k[g] = v.get(0));
    else for (g = 0, l = e.length; g < l; ++g) k[g] = e[g].get(0);
    p = 0;
    for (r = f.length; p < r; ++p) {
      w = f[p];
      if (d)
        for (g = 0, l = e.length; g < l; ++g)
          (v = e[g]), v.jd && (k[g] = v.get(p));
      m
        ? ((g = 0), a && (g = w.type.sg[b]), n.apply(w.V[c + g], k))
        : n.apply(w, k);
    }
    return !1;
  };
  $b = w;
  var F = [],
    A = -1;
  a.prototype.kb = function () {
    var a, c;
    if (11 === this.type) this.Jf = this.b.Yp(this.$i, this.Mc.parent);
    else if (13 === this.type)
      for (a = 0, c = this.dg.length; a < c; a++) this.dg[a].kb();
    this.Gd && this.Gd.kb();
  };
  a.prototype.zx = function (a) {
    this.jd || !a || a.ra.cl || (this.jd = !0);
  };
  a.prototype.qr = function () {
    this.jd = !0;
  };
  a.prototype.Lw = function (a) {
    this.Ke = a || 0;
    a = r();
    this.Gd.get(a);
    A--;
    return a.data;
  };
  a.prototype.Mw = function (a) {
    this.Ke = a || 0;
    a = r();
    this.Gd.get(a);
    A--;
    return la(a.data) ? a.data : "";
  };
  a.prototype.Sw = function () {
    return this.object;
  };
  a.prototype.Jw = function () {
    return this.Fp;
  };
  a.prototype.Qw = function (a) {
    this.Ke = a || 0;
    a = r();
    this.Gd.get(a);
    A--;
    return a.Jb() ? this.b.Jd(a.data) : this.b.ug(a.data);
  };
  a.prototype.Rw = function () {
    return this.Gb;
  };
  a.prototype.Pw = function () {
    return this.key;
  };
  a.prototype.Ow = function () {
    return this.index;
  };
  a.prototype.Nw = function (a) {
    a = a || 0;
    var c = this.fd.type,
      b = null,
      b = c.Y(),
      d = b.oc();
    if (d.length) b = d[a % d.length].type;
    else if (b.ja.length) b = b.ja[a % b.ja.length].type;
    else if (c.n.length) b = c.n[a % c.n.length].type;
    else return 0;
    return this.index + b.Nj[c.ve];
  };
  a.prototype.Kw = function () {
    return this.Jf;
  };
  a.prototype.Iw = function () {
    return this.Qp;
  };
  a.prototype.Tw = function () {
    var a, c;
    a = 0;
    for (c = this.dg.length; a < c; a++) this.Zi[a] = this.dg[a].get();
    return this.Zi;
  };
  ac = a;
  c.prototype.kb = function () {
    this.Ba = d(this.Ba);
  };
  c.prototype.ag = function (a) {
    var c = this.b.Wp();
    this.parent && !this.ji && c
      ? (this.Wf >= c.length && (c.length = this.Wf + 1), (c[this.Wf] = a))
      : (this.data = a);
  };
  c.prototype.Sh = function () {
    var a = this.b.Wp();
    return !this.parent || this.ji || !a || this.jk
      ? this.data
      : this.Wf >= a.length || "undefined" === typeof a[this.Wf]
      ? this.Nm
      : a[this.Wf];
  };
  c.prototype.sb = function () {
    !this.parent || this.ji || this.jk || this.ag(this.Nm);
  };
  Vb = c;
  m.prototype.toString = function () {
    return "include:" + this.Xh.toString();
  };
  m.prototype.kb = function () {
    this.Xh = this.b.om[this.Zw];
    this.sheet.hq.add(this);
    this.Ba = d(this.Ba);
    for (var a = this.parent; a; ) a.group && a.zj.push(this), (a = a.parent);
    this.Sr();
  };
  m.prototype.sb = function () {
    this.parent && this.b.Ci(this.b.G);
    this.Xh.Jm || this.Xh.sb(!0);
    this.parent && this.b.rf(this.b.G);
  };
  m.prototype.Sr = function () {
    for (var a = this.parent; a; ) {
      if (a.group && !a.Lf) {
        this.yb = !1;
        return;
      }
      a = a.parent;
    }
    this.yb = !0;
  };
  ec = m;
  n.prototype.reset = function (a) {
    this.nb = a;
    this.lc = this.zb = 0;
    z(this.Er);
    this.mm = this.Rf = !1;
  };
  n.prototype.mx = function () {
    return this.nb.eo
      ? !0
      : this.zb < this.nb.Ab.length - 1
      ? !!this.nb.Ba.length
      : !1;
  };
  Ub = n;
})();
(function () {
  function g(b, d) {
    this.fd = b;
    this.b = b.b;
    this.type = d[0];
    this.get = [
      this.aw,
      this.Xv,
      this.jw,
      this.mw,
      this.Mv,
      this.kw,
      this.ew,
      this.Uv,
      this.dw,
      this.iw,
      this.Nv,
      this.hw,
      this.Vv,
      this.fw,
      this.bw,
      this.cw,
      this.Yv,
      this.Zv,
      this.Tv,
      this.lw,
      this.gw,
      this.$v,
      this.Sv,
      this.Wv,
    ][this.type];
    var e = null;
    this.De =
      this.Na =
      this.Ya =
      this.Pb =
      this.kl =
      this.second =
      this.first =
      this.value =
        null;
    this.od = -1;
    this.rd = null;
    this.$r = -1;
    this.Jf = this.$i = null;
    this.Zg = !1;
    switch (this.type) {
      case 0:
      case 1:
      case 2:
        this.value = d[1];
        break;
      case 3:
        this.first = new cc(b, d[1]);
        break;
      case 18:
        this.first = new cc(b, d[1]);
        this.second = new cc(b, d[2]);
        this.kl = new cc(b, d[3]);
        break;
      case 19:
        this.Pb = this.b.Re(d[1]);
        (this.Pb !== H.prototype.D.random && this.Pb !== H.prototype.D.Ep) ||
          this.fd.qr();
        this.Ya = [];
        this.Na = [];
        3 === d.length
          ? ((e = d[2]), (this.Ya.length = e.length + 1))
          : (this.Ya.length = 1);
        break;
      case 20:
        this.De = this.b.G[d[1]];
        this.od = -1;
        this.Pb = this.b.Re(d[2]);
        this.Zg = d[3];
        jc && this.Pb === jc.prototype.D.Eo && this.fd.qr();
        d[4] ? (this.rd = new cc(b, d[4])) : (this.rd = null);
        this.Ya = [];
        this.Na = [];
        6 === d.length
          ? ((e = d[5]), (this.Ya.length = e.length + 1))
          : (this.Ya.length = 1);
        break;
      case 21:
        this.De = this.b.G[d[1]];
        this.Zg = d[2];
        d[3] ? (this.rd = new cc(b, d[3])) : (this.rd = null);
        this.$r = d[4];
        break;
      case 22:
        this.De = this.b.G[d[1]];
        this.De.Xj(d[2]);
        this.od = this.De.xm(d[2]);
        this.Pb = this.b.Re(d[3]);
        this.Zg = d[4];
        d[5] ? (this.rd = new cc(b, d[5])) : (this.rd = null);
        this.Ya = [];
        this.Na = [];
        7 === d.length
          ? ((e = d[6]), (this.Ya.length = e.length + 1))
          : (this.Ya.length = 1);
        break;
      case 23:
        (this.$i = d[1]), (this.Jf = null);
    }
    this.fd.zx(this.De);
    4 <= this.type &&
      17 >= this.type &&
      ((this.first = new cc(b, d[1])), (this.second = new cc(b, d[2])));
    if (e) {
      var f, a;
      f = 0;
      for (a = e.length; f < a; f++) this.Na.push(new cc(b, e[f]));
    }
  }
  function l() {
    ++p;
    e.length === p && e.push(new bc());
    return e[p];
  }
  function d(b, d, e) {
    var f, a;
    f = 0;
    for (a = b.length; f < a; ++f) b[f].get(e), (d[f + 1] = e.data);
  }
  function f(b, d) {
    this.type = b || fc.jg;
    this.data = d || 0;
    this.Yf = null;
    this.type == fc.jg && (this.data = Math.floor(this.data));
  }
  g.prototype.kb = function () {
    23 === this.type && (this.Jf = this.fd.b.Yp(this.$i, this.fd.Mc.parent));
    this.first && this.first.kb();
    this.second && this.second.kb();
    this.kl && this.kl.kb();
    this.rd && this.rd.kb();
    if (this.Na) {
      var b, d;
      b = 0;
      for (d = this.Na.length; b < d; b++) this.Na[b].kb();
    }
  };
  var e = [],
    p = -1;
  g.prototype.lw = function (b) {
    var e = this.Na,
      f = this.Ya;
    f[0] = b;
    b = l();
    d(e, f, b);
    --p;
    this.Pb.apply(this.b.ae, f);
  };
  g.prototype.gw = function (b) {
    var e = this.De,
      f = this.Ya,
      g = this.Na,
      a = this.rd,
      c = this.Pb,
      m = this.fd.Ke,
      n = e.Y(),
      v = n.oc();
    if (!v.length)
      if (n.ja.length) v = n.ja;
      else {
        this.Zg ? b.Ib("") : b.wa(0);
        return;
      }
    f[0] = b;
    b.Yf = e;
    b = l();
    d(g, f, b);
    a && (a.get(b), b.Jb() && ((m = b.data), (v = e.n)));
    --p;
    e = v.length;
    if (m >= e || m <= -e) m %= e;
    0 > m && (m += e);
    c.apply(v[m], f);
  };
  g.prototype.Sv = function (b) {
    var e = this.De,
      f = this.Ya,
      g = this.Na,
      a = this.rd,
      c = this.od,
      m = this.Pb,
      n = this.fd.Ke,
      v = e.Y(),
      F = v.oc();
    if (!F.length)
      if (v.ja.length) F = v.ja;
      else {
        this.Zg ? b.Ib("") : b.wa(0);
        return;
      }
    f[0] = b;
    b.Yf = e;
    b = l();
    d(g, f, b);
    a && (a.get(b), b.Jb() && ((n = b.data), (F = e.n)));
    --p;
    g = F.length;
    if (n >= g || n <= -g) n %= g;
    0 > n && (n += g);
    n = F[n];
    F = 0;
    e.O && (F = n.type.sg[e.ve]);
    m.apply(n.V[c + F], f);
  };
  g.prototype.$v = function (b) {
    var d = this.rd,
      e = this.De,
      f = this.$r,
      a = this.fd.Ke,
      c = e.Y(),
      m = c.oc();
    if (!m.length)
      if (c.ja.length) m = c.ja;
      else {
        this.Zg ? b.Ib("") : b.wa(0);
        return;
      }
    if (d) {
      c = l();
      d.get(c);
      if (c.Jb()) {
        a = c.data;
        m = e.n;
        0 !== m.length && ((a %= m.length), 0 > a && (a += m.length));
        a = e.Bm(a);
        e = a.Eb[f];
        la(e) ? b.Ib(e) : b.F(e);
        --p;
        return;
      }
      --p;
    }
    d = m.length;
    if (a >= d || a <= -d) a %= d;
    0 > a && (a += d);
    a = m[a];
    m = 0;
    e.O && (m = a.type.Nj[e.ve]);
    e = a.Eb[f + m];
    la(e) ? b.Ib(e) : b.F(e);
  };
  g.prototype.aw = function (b) {
    b.type = fc.jg;
    b.data = this.value;
  };
  g.prototype.Xv = function (b) {
    b.type = fc.ig;
    b.data = this.value;
  };
  g.prototype.jw = function (b) {
    b.type = fc.String;
    b.data = this.value;
  };
  g.prototype.mw = function (b) {
    this.first.get(b);
    b.Jb() && (b.data = -b.data);
  };
  g.prototype.Mv = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.Jb() && d.Jb() && ((b.data += d.data), d.Dg() && b.Ng());
    --p;
  };
  g.prototype.kw = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.Jb() && d.Jb() && ((b.data -= d.data), d.Dg() && b.Ng());
    --p;
  };
  g.prototype.ew = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.Jb() && d.Jb() && ((b.data *= d.data), d.Dg() && b.Ng());
    --p;
  };
  g.prototype.Uv = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.Jb() && d.Jb() && ((b.data /= d.data), b.Ng());
    --p;
  };
  g.prototype.dw = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.Jb() && d.Jb() && ((b.data %= d.data), d.Dg() && b.Ng());
    --p;
  };
  g.prototype.iw = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.Jb() && d.Jb() && ((b.data = Math.pow(b.data, d.data)), d.Dg() && b.Ng());
    --p;
  };
  g.prototype.Nv = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    d.Gg() || b.Gg() ? this.Pv(b, d) : this.Ov(b, d);
    --p;
  };
  g.prototype.Pv = function (b, d) {
    b.Gg() && d.Gg() ? this.Rv(b, d) : this.Qv(b, d);
  };
  g.prototype.Rv = function (b, d) {
    b.data += d.data;
  };
  g.prototype.Qv = function (b, d) {
    b.Gg()
      ? (b.data += (Math.round(1e10 * d.data) / 1e10).toString())
      : b.Ib(b.data.toString() + d.data);
  };
  g.prototype.Ov = function (b, d) {
    b.wa(b.data && d.data ? 1 : 0);
  };
  g.prototype.hw = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.Jb() && d.Jb() && (b.data || d.data ? b.wa(1) : b.wa(0));
    --p;
  };
  g.prototype.Tv = function (b) {
    this.first.get(b);
    b.data ? this.second.get(b) : this.kl.get(b);
  };
  g.prototype.Vv = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.wa(b.data === d.data ? 1 : 0);
    --p;
  };
  g.prototype.fw = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.wa(b.data !== d.data ? 1 : 0);
    --p;
  };
  g.prototype.bw = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.wa(b.data < d.data ? 1 : 0);
    --p;
  };
  g.prototype.cw = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.wa(b.data <= d.data ? 1 : 0);
    --p;
  };
  g.prototype.Yv = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.wa(b.data > d.data ? 1 : 0);
    --p;
  };
  g.prototype.Zv = function (b) {
    this.first.get(b);
    var d = l();
    this.second.get(d);
    b.wa(b.data >= d.data ? 1 : 0);
    --p;
  };
  g.prototype.Wv = function (b) {
    var d = this.Jf.Sh();
    ka(d) ? b.F(d) : b.Ib(d);
  };
  cc = g;
  f.prototype.Dg = function () {
    return this.type === fc.ig;
  };
  f.prototype.Jb = function () {
    return this.type === fc.jg || this.type === fc.ig;
  };
  f.prototype.Gg = function () {
    return this.type === fc.String;
  };
  f.prototype.Ng = function () {
    this.Dg() ||
      (this.Gg() && (this.data = parseFloat(this.data)), (this.type = fc.ig));
  };
  f.prototype.wa = function (b) {
    this.type = fc.jg;
    this.data = Math.floor(b);
  };
  f.prototype.F = function (b) {
    this.type = fc.ig;
    this.data = b;
  };
  f.prototype.Ib = function (b) {
    this.type = fc.String;
    this.data = b;
  };
  f.prototype.Li = function (b) {
    ka(b)
      ? ((this.type = fc.ig), (this.data = b))
      : la(b)
      ? ((this.type = fc.String), (this.data = b.toString()))
      : ((this.type = fc.jg), (this.data = 0));
  };
  bc = f;
  fc = {
    jg: 0,
    ig: 1,
    String: 2,
  };
})();
function H(g) {
  this.b = g;
  this.Tb = [];
}
H.prototype.Sa = function () {
  var g = {},
    l,
    d,
    f,
    e,
    p,
    b,
    k,
    w;
  g.waits = [];
  var r = g.waits,
    a;
  l = 0;
  for (d = this.Tb.length; l < d; l++) {
    b = this.Tb[l];
    a = {
      t: b.time,
      st: b.bl,
      s: b.Pi,
      ev: b.Hf.la,
      sm: [],
      sols: {},
    };
    b.Hf.kd[b.lc] && (a.act = b.Hf.kd[b.lc].la);
    f = 0;
    for (e = b.Ba.length; f < e; f++) a.sm.push(b.Ba[f].la);
    for (p in b.gc)
      if (b.gc.hasOwnProperty(p)) {
        k = this.b.G[parseInt(p, 10)];
        w = {
          sa: b.gc[p].Hi,
          insts: [],
        };
        f = 0;
        for (e = b.gc[p].Ld.length; f < e; f++) w.insts.push(b.gc[p].Ld[f].uid);
        a.sols[k.la.toString()] = w;
      }
    r.push(a);
  }
  return g;
};
H.prototype.cb = function (g) {
  g = g.waits;
  var l, d, f, e, p, b, k, w, r, a, c;
  z(this.Tb);
  l = 0;
  for (d = g.length; l < d; l++)
    if (((b = g[l]), (w = this.b.yp[b.ev.toString()]))) {
      r = -1;
      f = 0;
      for (e = w.kd.length; f < e; f++)
        if (w.kd[f].la === b.act) {
          r = f;
          break;
        }
      if (-1 !== r) {
        k = {
          gc: {},
          Ba: [],
          km: !1,
        };
        k.time = b.t;
        k.bl = b.st || "";
        k.Pi = !!b.s;
        k.Hf = w;
        k.lc = r;
        f = 0;
        for (e = b.sm.length; f < e; f++)
          (w = this.b.$j(b.sm[f])) && k.Ba.push(w);
        for (p in b.sols)
          if (b.sols.hasOwnProperty(p) && (w = this.b.$j(parseInt(p, 10)))) {
            r = b.sols[p];
            a = {
              Hi: r.sa,
              Ld: [],
            };
            f = 0;
            for (e = r.insts.length; f < e; f++)
              (c = this.b.Qh(r.insts[f])) && a.Ld.push(c);
            k.gc[w.index.toString()] = a;
          }
        this.Tb.push(k);
      }
    }
};
(function () {
  function g() {}
  function l() {}
  function d() {
    var a;
    w.length
      ? (a = w.pop())
      : (a = {
          gc: {},
          Ba: [],
        });
    a.km = !1;
    return a;
  }
  function f() {
    var a;
    r.length
      ? (a = r.pop())
      : (a = {
          Ld: [],
        });
    a.Hi = !1;
    return a;
  }
  function e() {}
  var p = H.prototype;
  g.prototype.ws = function () {
    return !0;
  };
  g.prototype.Vo = function () {
    return !0;
  };
  g.prototype.zt = function () {
    return !0;
  };
  g.prototype.ns = function (a, c, b) {
    return gc(a, c, b);
  };
  var b = [],
    k = -1;
  g.prototype.zs = function (a) {
    var c = a.Y();
    k++;
    b.length === k && b.push([]);
    var d = b[k];
    Ba(d, c.oc());
    var e = this.b.Cb(),
      f = e.nb,
      p = e.mx(),
      e = this.b.Yx(),
      g,
      q,
      h,
      l,
      r,
      w,
      I = a.wc;
    if (p)
      for (p = 0, g = d.length; p < g && !e.Mb; p++) {
        this.b.Di(f.Ba);
        l = d[p];
        c = a.Y();
        c.ga = !1;
        z(c.n);
        c.n[0] = l;
        if (I)
          for (q = 0, h = l.siblings.length; q < h; q++)
            (r = l.siblings[q]),
              (w = r.type.Y()),
              (w.ga = !1),
              z(w.n),
              (w.n[0] = r);
        e.index = p;
        f.Qn();
        this.b.rf(f.Ba);
      }
    else
      for (c.ga = !1, z(c.n), p = 0, g = d.length; p < g && !e.Mb; p++) {
        l = d[p];
        c.n[0] = l;
        if (I)
          for (q = 0, h = l.siblings.length; q < h; q++)
            (r = l.siblings[q]),
              (w = r.type.Y()),
              (w.ga = !1),
              z(w.n),
              (w.n[0] = r);
        e.index = p;
        f.Qn();
      }
    z(d);
    this.b.Qx();
    k--;
    return !1;
  };
  g.prototype.Iu = function () {
    var a = this.b.Ph().X;
    "undefined" === typeof a.TriggerOnce_lastTick &&
      (a.TriggerOnce_lastTick = -1);
    var c = a.TriggerOnce_lastTick,
      b = this.b.zd;
    a.TriggerOnce_lastTick = b;
    return this.b.bn || c !== b - 1;
  };
  g.prototype.vs = function (a) {
    var c = this.b.Ph(),
      b = c.X.Every_lastTime || 0,
      d = this.b.qb.M;
    "undefined" === typeof c.X.Every_seconds && (c.X.Every_seconds = a);
    var e = c.X.Every_seconds;
    if (d >= b + e)
      return (
        (c.X.Every_lastTime = b + e),
        d >= c.X.Every_lastTime + 0.04 && (c.X.Every_lastTime = d),
        (c.X.Every_seconds = a),
        !0
      );
    d < b - 0.1 && (c.X.Every_lastTime = d);
    return !1;
  };
  g.prototype.qs = function (a, c, b) {
    return gc(a.Sh(), c, b);
  };
  g.prototype.Ns = function (a) {
    return (a = this.b.wg[a.toLowerCase()]) && a.Lf;
  };
  g.prototype.Nt = function (a) {
    if (!a || !a.n.length) return !1;
    a.Y().ga = !0;
    a.Lc();
    return !0;
  };
  g.prototype.Ps = function () {
    return this.b.Md;
  };
  g.prototype.Fo = function () {
    var a = this.b.Cb();
    return a.mm ? !1 : !a.Rf;
  };
  g.prototype.El = function () {
    return !0;
  };
  g.prototype.mt = function () {
    return !0;
  };
  g.prototype.Fl = function () {
    return !0;
  };
  g.prototype.dp = function () {
    return !0;
  };
  g.prototype.At = function () {
    return !0;
  };
  g.prototype.Dl = function () {
    return !0;
  };
  g.prototype.Qs = function (a) {
    var c = this.b;
    switch (a) {
      case 0:
        return !c.La && !c.gk && !c.ec && !c.hi && !c.cd && !c.Rm && !c.ai;
      case 1:
        return c.lf;
      case 2:
        return c.yg;
      case 3:
        return c.Xm;
      case 4:
        return c.cd;
      case 5:
        return c.Rm;
      case 6:
        return c.Wm;
      case 7:
        return c.vc;
      case 8:
        return c.ec;
      case 9:
        return c.hx;
      case 10:
        return c.gk;
      case 11:
        return c.zg;
      case 12:
        return c.ai;
      case 13:
        return c.hk;
      default:
        return !1;
    }
  };
  g.prototype.ds = function (a, c, b) {
    return Oa(E(a), E(b)) <= E(c);
  };
  g.prototype.Ks = function (a, c) {
    return Qa(E(a), E(c));
  };
  g.prototype.Is = function (a, c, b) {
    a = Ma(a);
    c = Ma(c);
    b = Ma(b);
    return Qa(b, c) ? Qa(a, c) && !Qa(a, b) : !(!Qa(a, c) && Qa(a, b));
  };
  p.k = new g();
  l.prototype.ts = function (a, c, b, d) {
    if (c && a && (c = this.b.hm(a, c, b, d))) {
      this.b.sd++;
      var e;
      this.b.trigger(Object.getPrototypeOf(a.ra).k.gj, c);
      if (c.wc)
        for (b = 0, d = c.siblings.length; b < d; b++)
          (e = c.siblings[b]),
            this.b.trigger(Object.getPrototypeOf(e.type.ra).k.gj, e);
      this.b.sd--;
      a = a.Y();
      a.ga = !1;
      z(a.n);
      a.n[0] = c;
      if (c.wc)
        for (b = 0, d = c.siblings.length; b < d; b++)
          (e = c.siblings[b]),
            (a = e.type.Y()),
            (a.ga = !1),
            z(a.n),
            (a.n[0] = e);
    }
  };
  l.prototype.iu = function (a, c) {
    a && a.visible !== c && ((a.visible = c), (this.b.ua = !0));
  };
  l.prototype.gu = function (a, c) {
    a &&
      ((c = Ha(c / 100, 0, 1)),
      a.opacity !== c && ((a.opacity = c), (this.b.ua = !0)));
  };
  l.prototype.uu = function (a, c) {
    0 === a.wl
      ? ka(c)
        ? a.ag(c)
        : a.ag(parseFloat(c))
      : 1 === a.wl && a.ag(c.toString());
  };
  l.prototype.cs = function (a, c) {
    0 === a.wl
      ? ka(c)
        ? a.ag(a.Sh() + c)
        : a.ag(a.Sh() + parseFloat(c))
      : 1 === a.wl && a.ag(a.Sh() + c.toString());
  };
  l.prototype.cu = function (a, c) {
    var b = this.b.wg[a.toLowerCase()];
    if (b)
      switch (c) {
        case 0:
          b.Xk(!1);
          break;
        case 1:
          b.Xk(!0);
          break;
        case 2:
          b.Xk(!b.Lf);
      }
  };
  l.prototype.su = function (a) {
    0 > a && (a = 0);
    this.b.xf = a;
  };
  l.prototype.lu = function (a, c) {
    var b = c;
    0 > b && (b = 0);
    if (a) {
      var d = a.Y().oc(),
        e,
        f;
      e = 0;
      for (f = d.length; e < f; e++) d[e].Rg = b;
    }
  };
  var w = [],
    r = [];
  l.prototype.Lu = function (a) {
    if (!(0 > a)) {
      var c,
        b,
        e,
        k = this.b.Cb(),
        p = d();
      p.time = this.b.qb.M + a;
      p.bl = "";
      p.Pi = !1;
      p.Hf = k.nb;
      p.lc = k.lc + 1;
      a = 0;
      for (c = this.b.G.length; a < c; a++)
        (e = this.b.G[a]),
          (b = e.Y()),
          (b.ga && -1 === k.nb.Ba.indexOf(e)) ||
            (p.Ba.push(e),
            (e = f()),
            (e.Hi = b.ga),
            Ba(e.Ld, b.n),
            (p.gc[a.toString()] = e));
      this.Tb.push(p);
      return !0;
    }
  };
  l.prototype.Mu = function (a) {
    var c,
      b,
      e,
      k = this.b.Cb(),
      p = d();
    p.time = -1;
    p.bl = a.toLowerCase();
    p.Pi = !1;
    p.Hf = k.nb;
    p.lc = k.lc + 1;
    a = 0;
    for (c = this.b.G.length; a < c; a++)
      (e = this.b.G[a]),
        (b = e.Y()),
        (b.ga && -1 === k.nb.Ba.indexOf(e)) ||
          (p.Ba.push(e),
          (e = f()),
          (e.Hi = b.ga),
          Ba(e.Ld, b.n),
          (p.gc[a.toString()] = e));
    this.Tb.push(p);
    return !0;
  };
  l.prototype.Bu = function (a) {
    a = a.toLowerCase();
    var c, b, d;
    c = 0;
    for (b = this.Tb.length; c < b; ++c)
      (d = this.Tb[c]), -1 === d.time && d.bl === a && (d.Pi = !0);
  };
  l.prototype.hu = function (a, c) {
    a && !!c !== !!a.Uc && ((a.Uc = !!c), (this.b.ua = !0));
  };
  l.prototype.Cs = function (a) {
    if (!this.b.ki && !this.b.Eh)
      for (var c in this.b.Lg)
        if (this.b.Lg.hasOwnProperty(c) && ob(c, a)) {
          this.b.Eh = this.b.Lg[c];
          break;
        }
  };
  p.u = new l();
  e.prototype["int"] = function (a, c) {
    la(c) ? (a.wa(parseInt(c, 10)), isNaN(a.data) && (a.data = 0)) : a.wa(c);
  };
  e.prototype["float"] = function (a, c) {
    la(c) ? (a.F(parseFloat(c)), isNaN(a.data) && (a.data = 0)) : a.F(c);
  };
  e.prototype.random = function (a, c, b) {
    void 0 === b ? a.F(Math.random() * c) : a.F(Math.random() * (b - c) + c);
  };
  e.prototype.sqrt = function (a, c) {
    a.F(Math.sqrt(c));
  };
  e.prototype.abs = function (a, c) {
    a.F(Math.abs(c));
  };
  e.prototype.round = function (a, c) {
    a.wa(Math.round(c));
  };
  e.prototype.floor = function (a, c) {
    a.wa(Math.floor(c));
  };
  e.prototype.ceil = function (a, c) {
    a.wa(Math.ceil(c));
  };
  e.prototype.sin = function (a, c) {
    a.F(Math.sin(E(c)));
  };
  e.prototype.cos = function (a, c) {
    a.F(Math.cos(E(c)));
  };
  e.prototype.tan = function (a, c) {
    a.F(Math.tan(E(c)));
  };
  e.prototype.asin = function (a, c) {
    a.F(Ia(Math.asin(c)));
  };
  e.prototype.acos = function (a, c) {
    a.F(Ia(Math.acos(c)));
  };
  e.prototype.atan = function (a, c) {
    a.F(Ia(Math.atan(c)));
  };
  e.prototype.exp = function (a, c) {
    a.F(Math.exp(c));
  };
  e.prototype.log10 = function (a, c) {
    a.F(Math.log(c) / Math.LN10);
  };
  e.prototype.max = function (a) {
    var c = arguments[1];
    "number" !== typeof c && (c = 0);
    var b, d, e;
    b = 2;
    for (d = arguments.length; b < d; b++)
      (e = arguments[b]), "number" === typeof e && c < e && (c = e);
    a.F(c);
  };
  e.prototype.min = function (a) {
    var c = arguments[1];
    "number" !== typeof c && (c = 0);
    var b, d, e;
    b = 2;
    for (d = arguments.length; b < d; b++)
      (e = arguments[b]), "number" === typeof e && c > e && (c = e);
    a.F(c);
  };
  e.prototype.re = function (a) {
    a.F(this.b.re);
  };
  e.prototype.xf = function (a) {
    a.F(this.b.xf);
  };
  e.prototype.time = function (a) {
    a.F(this.b.qb.M);
  };
  e.prototype.zd = function (a) {
    a.wa(this.b.zd);
  };
  e.prototype.Ak = function (a) {
    a.wa(this.b.Ak);
  };
  e.prototype.um = function (a) {
    a.wa(this.b.um);
  };
  e.prototype.q = function (a, c, b, d, e) {
    a.F(Ia(Na(c, b, d, e)));
  };
  e.prototype.Zy = function (a) {
    a.wa(this.b.height);
  };
  e.prototype.rv = function (a, c, b, d) {
    c < b ? a.F(b) : c > d ? a.F(d) : a.F(c);
  };
  e.prototype.left = function (a, c, b) {
    a.Ib(la(c) ? c.substr(0, b) : "");
  };
  e.prototype.right = function (a, c, b) {
    a.Ib(la(c) ? c.substr(c.length - b) : "");
  };
  e.prototype.Ny = function (a, c, b, d) {
    la(c) && la(d)
      ? ((c = c.split(d)),
        (b = qa(b)),
        0 > b || b >= c.length ? a.Ib("") : a.Ib(c[b]))
      : a.Ib("");
  };
  e.prototype.Oy = function (a, c, b) {
    la(c) && c.length ? a.wa(c.split(b).length) : a.wa(0);
  };
  e.prototype.replace = function (a, c, b, d) {
    la(c) && la(b) && la(d)
      ? a.Ib(c.replace(new RegExp(cb(b), "gi"), d))
      : a.Ib(la(c) ? c : "");
  };
  e.prototype.trim = function (a, c) {
    a.Ib(la(c) ? c.trim() : "");
  };
  e.prototype.Ep = function (a) {
    var c = qa(Math.random() * (arguments.length - 1));
    a.Li(arguments[c + 1]);
  };
  e.prototype.fm = function (a) {
    a.F(this.b.fm / 1e3);
  };
  e.prototype.Vy = function (a, c) {
    var b = this.b.Yj(c);
    a.F(b ? b.Ga : 0);
  };
  e.prototype.Xy = function (a, c) {
    var b = this.b.Yj(c);
    a.F(b ? b.Ha : 0);
  };
  e.prototype.Wy = function (a, c) {
    var b = this.b.Yj(c);
    a.F(b ? b.Ka : 0);
  };
  e.prototype.Uy = function (a, c) {
    var b = this.b.Yj(c);
    a.F(b ? b.Ja : 0);
  };
  e.prototype.Vf = function (a) {
    a.F(this.b.Vf);
  };
  p.D = new e();
  p.ky = function () {
    var a,
      c,
      b,
      d,
      e,
      f,
      k = this.b.Cb();
    a = 0;
    for (b = this.Tb.length; a < b; a++) {
      d = this.Tb[a];
      if (-1 === d.time) {
        if (!d.Pi) continue;
      } else if (d.time > this.b.qb.M) continue;
      k.nb = d.Hf;
      k.lc = d.lc;
      k.zb = 0;
      for (c in d.gc)
        d.gc.hasOwnProperty(c) &&
          ((e = this.b.G[parseInt(c, 10)].Y()),
          (f = d.gc[c]),
          (e.ga = f.Hi),
          Ba(e.n, f.Ld),
          (e = f),
          z(e.Ld),
          r.push(e));
      d.Hf.iy();
      this.b.dm(d.Ba);
      d.km = !0;
    }
    c = a = 0;
    for (b = this.Tb.length; a < b; a++)
      (d = this.Tb[a]),
        (this.Tb[c] = d),
        d.km ? (Wa(d.gc), z(d.Ba), w.push(d)) : c++;
    Aa(this.Tb, c);
  };
})();
(function () {
  qb = function (g, d) {
    var f = g[1],
      e = g[3],
      p = g[4],
      b = g[5],
      k = g[6],
      w = g[7],
      r = g[8];
    d.k || (d.k = {});
    d.u || (d.u = {});
    d.D || (d.D = {});
    var a = d.k,
      c = d.u,
      m = d.D;
    e &&
      ((a.rs = function (a, c) {
        return gc(this.x, a, c);
      }),
      (a.iz = function (a, c) {
        return gc(this.y, a, c);
      }),
      (a.mz = function () {
        var a = this.A;
        this.ma();
        var c = this.Ia;
        return !(
          c.right < a.Ga ||
          c.bottom < a.Ha ||
          c.left > a.Ka ||
          c.top > a.Ja
        );
      }),
      (a.nz = function () {
        this.ma();
        var a = this.Ia,
          c = this.b.Ma;
        return (
          0 > a.right || 0 > a.bottom || a.left > c.width || a.top > c.height
        );
      }),
      (a.wz = function (a, c, b) {
        var d = this.Y(),
          e = d.oc();
        if (!e.length) return !1;
        var h = e[0],
          f = h,
          k = Sa(h.x, h.y, c, b),
          p,
          g,
          m;
        p = 1;
        for (g = e.length; p < g; p++)
          if (
            ((h = e[p]),
            (m = Sa(h.x, h.y, c, b)),
            (0 === a && m < k) || (1 === a && m > k))
          )
            (k = m), (f = h);
        d.yi(f);
        return !0;
      }),
      (c.wu = function (a) {
        this.x !== a && ((this.x = a), this.P());
      }),
      (c.xu = function (a) {
        this.y !== a && ((this.y = a), this.P());
      }),
      (c.Kl = function (a, c) {
        if (this.x !== a || this.y !== c) (this.x = a), (this.y = c), this.P();
      }),
      (c.nu = function (a, c) {
        var b = a.Ew(this);
        if (b) {
          var d;
          b.Am
            ? ((d = b.Am(c, !0)), (b = b.Am(c, !1)))
            : ((d = b.x), (b = b.y));
          if (this.x !== d || this.y !== b)
            (this.x = d), (this.y = b), this.P();
        }
      }),
      (c.qz = function (a) {
        0 !== a &&
          ((this.x += Math.cos(this.q) * a),
          (this.y += Math.sin(this.q) * a),
          this.P());
      }),
      (c.pz = function (a, c) {
        0 !== c &&
          ((this.x += Math.cos(E(a)) * c),
          (this.y += Math.sin(E(a)) * c),
          this.P());
      }),
      (m.Ml = function (a) {
        a.F(this.x);
      }),
      (m.Nl = function (a) {
        a.F(this.y);
      }),
      (m.re = function (a) {
        a.F(this.b.Kf(this));
      }));
    p &&
      ((a.hz = function (a, c) {
        return gc(this.width, a, c);
      }),
      (a.ez = function (a, c) {
        return gc(this.height, a, c);
      }),
      (c.ip = function (a) {
        this.width !== a && ((this.width = a), this.P());
      }),
      (c.du = function (a) {
        this.height !== a && ((this.height = a), this.P());
      }),
      (c.pu = function (a, c) {
        if (this.width !== a || this.height !== c)
          (this.width = a), (this.height = c), this.P();
      }),
      (m.Nu = function (a) {
        a.F(this.width);
      }),
      (m.Fs = function (a) {
        a.F(this.height);
      }),
      (m.gs = function (a) {
        this.ma();
        a.F(this.Ia.left);
      }),
      (m.Do = function (a) {
        this.ma();
        a.F(this.Ia.top);
      }),
      (m.hs = function (a) {
        this.ma();
        a.F(this.Ia.right);
      }),
      (m.dz = function (a) {
        this.ma();
        a.F(this.Ia.bottom);
      }));
    b &&
      ((a.ds = function (a, c) {
        return Oa(this.q, E(c)) <= E(a);
      }),
      (a.Ks = function (a) {
        return Qa(this.q, E(a));
      }),
      (a.Is = function (a, c) {
        var b = Ma(a),
          d = Ma(c),
          e = Ka(this.q);
        return Qa(d, b) ? Qa(e, b) && !Qa(e, d) : !(!Qa(e, b) && Qa(e, d));
      }),
      (c.Fz = function (a) {
        a = E(Ja(a));
        isNaN(a) || this.q === a || ((this.q = a), this.P());
      }),
      (c.Bz = function (a) {
        0 === a ||
          isNaN(a) ||
          ((this.q += E(a)), (this.q = Ka(this.q)), this.P());
      }),
      (c.Cz = function (a) {
        0 === a ||
          isNaN(a) ||
          ((this.q -= E(a)), (this.q = Ka(this.q)), this.P());
      }),
      (c.Dz = function (a, c) {
        var b = Pa(this.q, E(c), E(a));
        isNaN(b) || this.q === b || ((this.q = b), this.P());
      }),
      (c.Ez = function (a, c, b) {
        a = Pa(this.q, Math.atan2(b - this.y, c - this.x), E(a));
        isNaN(a) || this.q === a || ((this.q = a), this.P());
      }),
      (c.Mz = function (a, c) {
        var b = Math.atan2(c - this.y, a - this.x);
        isNaN(b) || this.q === b || ((this.q = b), this.P());
      }),
      (m.cz = function (a) {
        a.F(La(this.q));
      }));
    f ||
      ((a.zl = function (a, c, b) {
        return gc(this.Eb[a], c, b);
      }),
      (a.Go = function (a) {
        return this.Eb[a];
      }),
      (a.xz = function (a, c) {
        var b = this.Y(),
          d = b.oc();
        if (!d.length) return !1;
        var e = d[0],
          h = e,
          f = e.Eb[c],
          k,
          p,
          g;
        k = 1;
        for (p = d.length; k < p; k++)
          if (
            ((e = d[k]),
            (g = e.Eb[c]),
            (0 === a && g < f) || (1 === a && g > f))
          )
            (f = g), (h = e);
        b.yi(h);
        return !0;
      }),
      (a.vz = function (a) {
        var c, b, d, e, h;
        if (this.b.Ph().$h) {
          h = this.Y();
          if (h.ga)
            for (
              h.ga = !1, z(h.n), z(h.ja), d = this.n, c = 0, b = d.length;
              c < b;
              c++
            )
              (e = d[c]), e.uid === a ? h.ja.push(e) : h.n.push(e);
          else {
            d = c = 0;
            for (b = h.n.length; c < b; c++)
              (e = h.n[c]), (h.n[d] = e), e.uid === a ? h.ja.push(e) : d++;
            Aa(h.n, d);
          }
          this.Lc();
          return !!h.n.length;
        }
        e = this.b.Qh(a);
        if (!e) return !1;
        h = this.Y();
        if (!h.ga && -1 === h.n.indexOf(e)) return !1;
        if (this.O)
          for (a = e.type.Pa, c = 0, b = a.length; c < b; c++) {
            if (a[c] === this) return h.yi(e), this.Lc(), !0;
          }
        else if (e.type === this) return h.yi(e), this.Lc(), !0;
        return !1;
      }),
      (a.gj = function () {
        return !0;
      }),
      (a.ot = function () {
        return !0;
      }),
      (c.eu = function (a, c) {
        var b = this.Eb;
        ka(b[a])
          ? (b[a] = ka(c) ? c : parseFloat(c))
          : la(b[a]) && (b[a] = la(c) ? c : c.toString());
      }),
      (c.bz = function (a, c) {
        var b = this.Eb;
        ka(b[a])
          ? (b[a] = ka(c) ? b[a] + c : b[a] + parseFloat(c))
          : la(b[a]) && (b[a] = la(c) ? b[a] + c : b[a] + c.toString());
      }),
      (c.Oz = function (a, c) {
        var b = this.Eb;
        ka(b[a]) && (b[a] = ka(c) ? b[a] - c : b[a] - parseFloat(c));
      }),
      (c.Gz = function (a, c) {
        this.Eb[a] = c ? 1 : 0;
      }),
      (c.Qz = function (a) {
        this.Eb[a] = 1 - this.Eb[a];
      }),
      (c.us = function () {
        this.b.yf(this);
      }),
      c.ct ||
        (c.ct = function (a) {
          var c, b;
          try {
            c = JSON.parse(a);
          } catch (d) {
            return;
          }
          this.b.tk(this, c, !0);
          this.Dd && this.Dd();
          if (this.V)
            for (a = 0, c = this.V.length; a < c; ++a)
              (b = this.V[a]), b.Dd && b.Dd();
        }),
      (m.jz = function (a) {
        var c = a.Yf.n.length,
          b,
          d,
          e;
        b = 0;
        for (d = this.b.qd.length; b < d; b++)
          (e = this.b.qd[b]),
            a.Yf.O
              ? 0 <= e.type.Pa.indexOf(a.Yf) && c++
              : e.type === a.Yf && c++;
        a.wa(c);
      }),
      (m.yz = function (a) {
        a.wa(a.Yf.Y().oc().length);
      }),
      (m.Rz = function (a) {
        a.wa(this.uid);
      }),
      (m.lz = function (a) {
        a.wa(this.Th());
      }),
      m.yl ||
        (m.yl = function (a) {
          a.Ib(JSON.stringify(this.b.Vn(this, !0)));
        }));
    k &&
      ((a.oz = function () {
        return this.visible;
      }),
      (c.hp = function (a) {
        !a !== !this.visible && ((this.visible = !!a), (this.b.ua = !0));
      }),
      (a.fz = function (a, c) {
        return gc(nb(100 * this.opacity), a, c);
      }),
      (c.mu = function (a) {
        a = a / 100;
        0 > a ? (a = 0) : 1 < a && (a = 1);
        a !== this.opacity && ((this.opacity = a), (this.b.ua = !0));
      }),
      (m.Opacity = function (a) {
        a.F(nb(100 * this.opacity));
      }));
    w &&
      ((a.Cl = function (a) {
        return a ? this.A === a : !1;
      }),
      (a.Ot = function (a) {
        var c = this.Y(),
          b = c.oc();
        if (!b.length) return !1;
        var d = b[0],
          e = d,
          h,
          f;
        h = 1;
        for (f = b.length; h < f; h++)
          if (((d = b[h]), 0 === a)) {
            if (
              d.A.index > e.A.index ||
              (d.A.index === e.A.index && d.Kd() > e.Kd())
            )
              e = d;
          } else if (
            d.A.index < e.A.index ||
            (d.A.index === e.A.index && d.Kd() < e.Kd())
          )
            e = d;
        c.yi(e);
        return !0;
      }),
      (c.rz = function () {
        var a = this.A,
          c = a.n;
        (c.length && c[c.length - 1] === this) ||
          (a.Xg(this, !1), a.zh(this, !1), (this.b.ua = !0));
      }),
      (c.et = function () {
        var a = this.A,
          c = a.n;
        (c.length && c[0] === this) ||
          (a.Xg(this, !1), a.Vx(this), (this.b.ua = !0));
      }),
      (c.ft = function (a) {
        a &&
          a != this.A &&
          (this.A.Xg(this, !0), (this.A = a), a.zh(this, !0), (this.b.ua = !0));
      }),
      (c.Tz = function (a, c) {
        var b = 0 === a;
        if (c) {
          var d = c.Zp(this);
          d &&
            d.uid !== this.uid &&
            (this.A.index !== d.A.index &&
              (this.A.Xg(this, !0), (this.A = d.A), d.A.zh(this, !0)),
            this.A.Ax(this, d, b),
            (this.b.ua = !0));
        }
      }),
      (m.Io = function (a) {
        a.wa(this.A.Kq);
      }),
      (m.Ho = function (a) {
        a.Ib(this.A.name);
      }),
      (m.Sz = function (a) {
        a.wa(this.Kd());
      }));
    r &&
      ((c.Hz = function (a, c) {
        if (this.b.H) {
          var b = this.type.zm(c);
          if (!(0 > b)) {
            var d = 1 === a;
            this.Te[b] !== d && ((this.Te[b] = d), this.Ad(), (this.b.ua = !0));
          }
        }
      }),
      (c.Iz = function (a, c, b) {
        if (this.b.H) {
          var d = this.type.zm(a);
          0 > d ||
            ((a = this.type.ca[d]),
            (d = this.Xa[d]),
            (c = Math.floor(c)),
            0 > c ||
              c >= d.length ||
              (1 === this.b.H.fA(a.tb, c) && (b /= 100),
              d[c] !== b && ((d[c] = b), a.yb && (this.b.ua = !0))));
        }
      }));
  };
  Kb = function () {
    this.$l = this.Vl = !0;
    this.type.oj = !0;
    this.b.ua = !0;
    var g,
      d,
      f = this.Wl;
    g = 0;
    for (d = f.length; g < d; ++g) f[g](this);
    this.A.Vc && this.ma();
  };
  Lb = function (g) {
    g && this.Wl.push(g);
  };
  Nb = function () {
    if (this.Vl) {
      var g = this.Ia,
        d = this.Yb;
      g.set(this.x, this.y, this.x + this.width, this.y + this.height);
      g.offset(-this.pc * this.width, -this.qc * this.height);
      this.q
        ? (g.offset(-this.x, -this.y),
          d.sr(g, this.q),
          d.offset(this.x, this.y),
          d.Ap(g))
        : d.Mi(g);
      g.normalize();
      this.Vl = !1;
      this.Qy();
    }
  };
  var g = new wa(0, 0, 0, 0);
  Ob = function () {
    if (this.A.Vc) {
      var l = this.A.Sb,
        d = this.Ia;
      g.set(l.tc(d.left), l.uc(d.top), l.tc(d.right), l.uc(d.bottom));
      this.zc.Jh(g) ||
        (this.zc.right < this.zc.left
          ? l.update(this, null, g)
          : l.update(this, this.zc, g),
        this.zc.Gh(g),
        (this.A.wd = !0));
    }
  };
  Rb = function () {
    if (this.$l && this.me) {
      this.ma();
      var l = this.type.yj,
        d = this.Ia;
      g.set(l.tc(d.left), l.uc(d.top), l.tc(d.right), l.uc(d.bottom));
      this.$e.Jh(g) ||
        (this.$e.right < this.$e.left
          ? l.update(this, null, g)
          : l.update(this, this.$e, g),
        this.$e.Gh(g),
        (this.$l = !1));
    }
  };
  Mb = function (g, d) {
    return this.Ia.ac(g, d) && this.Yb.ac(g, d)
      ? this.Da && !this.Da.Cg()
        ? (this.Da.ng(this.width, this.height, this.q),
          this.Da.ac(g - this.x, d - this.y))
        : !0
      : !1;
  };
  Gb = function () {
    this.type.rl();
    return this.Nf;
  };
  Sb = function () {
    this.A.so();
    return this.Bd;
  };
  Tb = function () {
    z(this.ya);
    var g,
      d,
      f,
      e = !0;
    g = 0;
    for (d = this.Te.length; g < d; g++)
      this.Te[g] && ((f = this.type.ca[g]), this.ya.push(f), f.sf || (e = !1));
    this.Zr = !!this.ya.length;
    this.Je = e;
  };
  Hb = function () {
    return "Inst" + this.hr;
  };
  tb = function (g) {
    if (g && g.wc && g.type != this) {
      var d, f, e;
      d = 0;
      for (f = g.siblings.length; d < f; d++)
        if (((e = g.siblings[d]), e.type == this)) return e;
    }
    g = this.Y().oc();
    return g.length ? g[0] : null;
  };
  ub = function (g) {
    var d = this.Y().oc();
    return d.length ? d[g.Th() % d.length] : null;
  };
  sb = function () {
    if (this.fh && !this.O) {
      var g, d;
      g = 0;
      for (d = this.n.length; g < d; g++) this.n[g].Nf = g;
      var f = g,
        e = this.b.qd;
      g = 0;
      for (d = e.length; g < d; ++g) e[g].type === this && (e[g].Nf = f++);
      this.fh = !1;
    }
  };
  Db = function (g) {
    if (g < this.n.length) return this.n[g];
    g -= this.n.length;
    var d = this.b.qd,
      f,
      e;
    f = 0;
    for (e = d.length; f < e; ++f)
      if (d[f].type === this) {
        if (0 === g) return d[f];
        --g;
      }
    return null;
  };
  vb = function () {
    return this.Le[this.Ed];
  };
  wb = function () {
    this.Ed++;
    this.Ed === this.Le.length
      ? this.Le.push(new rb(this))
      : ((this.Le[this.Ed].ga = !0), z(this.Le[this.Ed].ja));
  };
  xb = function () {
    this.Ed++;
    this.Ed === this.Le.length && this.Le.push(new rb(this));
    var g = this.Le[this.Ed],
      d = this.Le[this.Ed - 1];
    d.ga ? ((g.ga = !0), z(g.ja)) : ((g.ga = !1), Ba(g.n, d.n), Ba(g.ja, d.ja));
  };
  yb = function () {
    this.Ed--;
  };
  zb = function (g) {
    var d,
      f,
      e,
      p,
      b,
      k = 0;
    if (!this.O)
      for (d = 0, f = this.Pa.length; d < f; d++)
        for (b = this.Pa[d], e = 0, p = b.Ua.length; e < p; e++) {
          if (g === b.Ua[e].name) return (this.X.lastBehIndex = k), b.Ua[e];
          k++;
        }
    d = 0;
    for (f = this.Ua.length; d < f; d++) {
      if (g === this.Ua[d].name) return (this.X.lastBehIndex = k), this.Ua[d];
      k++;
    }
    return null;
  };
  Ab = function (g) {
    return this.Xj(g) ? this.X.lastBehIndex : -1;
  };
  Bb = function (g) {
    var d, f;
    d = 0;
    for (f = this.ca.length; d < f; d++) if (this.ca[d].name === g) return d;
    return -1;
  };
  Cb = function () {
    if (this.wc && !this.O) {
      var g, d, f, e, p, b, k;
      this.rl();
      b = this.Y();
      var w = b.ga,
        r = (g = this.b.Cb()) && g.nb && g.nb.ed;
      g = 0;
      for (d = this.Dc.length; g < d; g++)
        if (
          ((p = this.Dc[g]),
          p !== this && (p.rl(), (k = p.Y()), (k.ga = w), !w))
        ) {
          z(k.n);
          f = 0;
          for (e = b.n.length; f < e; ++f) k.n[f] = p.Bm(b.n[f].Nf);
          if (r)
            for (z(k.ja), f = 0, e = b.ja.length; f < e; ++f)
              k.ja[f] = p.Bm(b.ja[f].Nf);
        }
    }
  };
  Fb = function () {
    return "Type" + this.la;
  };
  gc = function (g, d, f) {
    if ("undefined" === typeof g || "undefined" === typeof f) return !1;
    switch (d) {
      case 0:
        return g === f;
      case 1:
        return g !== f;
      case 2:
        return g < f;
      case 3:
        return g <= f;
      case 4:
        return g > f;
      case 5:
        return g >= f;
      default:
        return !1;
    }
  };
})();
function kc(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  function d() {}
  var f = !1,
    e = null,
    p = null,
    b = "",
    k = kc.prototype;
  k.L = function (a) {
    this.ra = a;
    this.b = a.b;
  };
  k.L.prototype.I = function () {};
  k.J = function (a) {
    this.type = a;
    this.b = a.b;
    this.Nc = this.Qd = "";
    this.aa = 0;
    this.timeout = -1;
    if ((f = this.b.Nd))
      (e = require("path")),
        (p = require("fs")),
        (b = e.dirname((window.process || nw.process).execPath) + "\\");
  };
  var w = k.J.prototype,
    r = null;
  window.C2_AJAX_DCSide = function (a, c, b) {
    r &&
      ("success" === a
        ? ((r.Nc = c),
          (r.Qd = b),
          r.b.trigger(kc.prototype.k.ej, r),
          r.b.trigger(kc.prototype.k.uh, r))
        : "error" === a
        ? ((r.Nc = c),
          r.b.trigger(kc.prototype.k.fj, r),
          r.b.trigger(kc.prototype.k.fe, r))
        : "progress" === a &&
          ((r.aa = b), (r.Nc = c), r.b.trigger(kc.prototype.k.$o, r)));
  };
  w.I = function () {
    r = this;
  };
  w.Sa = function () {
    return {
      lastData: this.Qd,
    };
  };
  w.cb = function (a) {
    this.Qd = a.lastData;
    this.Nc = "";
    this.aa = 0;
  };
  var a = {},
    c = "";
  w.Av = function (d, e) {
    if (this.b.Qb)
      AppMobi.webview.execute(
        'C2_AJAX_WebSide("' + d + '", "' + e + '", "GET", null);'
      );
    else {
      var k = this,
        g = null,
        r = function () {
          k.Nc = d;
          k.b.trigger(kc.prototype.k.fj, k);
          k.b.trigger(kc.prototype.k.fe, k);
        },
        q = function () {
          if (f) {
            var a = b + e;
            p.existsSync(a)
              ? p.readFile(
                  a,
                  {
                    encoding: "utf8",
                  },
                  function (a, c) {
                    a
                      ? r()
                      : ((k.Nc = d),
                        (k.Qd = c.replace(/\r\n/g, "\n")),
                        k.b.trigger(kc.prototype.k.ej, k),
                        k.b.trigger(kc.prototype.k.uh, k));
                  }
                )
              : r();
          } else r();
        },
        h = function (a) {
          a.lengthComputable &&
            ((k.aa = a.loaded / a.total),
            (k.Nc = d),
            k.b.trigger(kc.prototype.k.$o, k));
        };
      try {
        this.b.cd
          ? (g = new ActiveXObject("Microsoft.XMLHTTP"))
          : (g = new XMLHttpRequest());
        g.onreadystatechange = function () {
          4 === g.readyState &&
            ((k.Nc = d),
            g.responseText
              ? (k.Qd = g.responseText.replace(/\r\n/g, "\n"))
              : (k.Qd = ""),
            400 <= g.status
              ? (k.b.trigger(kc.prototype.k.fj, k),
                k.b.trigger(kc.prototype.k.fe, k))
              : (f && !k.Qd.length) ||
                (!f && 0 === g.status && !k.Qd.length) ||
                (k.b.trigger(kc.prototype.k.ej, k),
                k.b.trigger(kc.prototype.k.uh, k)));
        };
        this.b.cd ||
          ((g.onerror = q),
          (g.ontimeout = q),
          (g.onabort = q),
          (g.onprogress = h));
        g.open("GET", e);
        !this.b.cd &&
          0 <= this.timeout &&
          "undefined" !== typeof g.timeout &&
          (g.timeout = this.timeout);
        try {
          g.responseType = "text";
        } catch (t) {}
        if (g.setRequestHeader) {
          for (var l in a)
            if (a.hasOwnProperty(l))
              try {
                g.setRequestHeader(l, a[l]);
              } catch (w) {}
          a = {};
        }
        if (c && g.overrideMimeType) {
          try {
            g.overrideMimeType(c);
          } catch (I) {}
          c = "";
        }
        g.send();
      } catch (D) {
        q();
      }
    }
  };
  g.prototype.uh = function (a) {
    return ob(a, this.Nc);
  };
  g.prototype.ej = function () {
    return !0;
  };
  g.prototype.fe = function (a) {
    return ob(a, this.Nc);
  };
  g.prototype.fj = function () {
    return !0;
  };
  g.prototype.$o = function (a) {
    return ob(a, this.Nc);
  };
  k.k = new g();
  l.prototype.Ut = function (a, c) {
    var b = this;
    this.b.Bg
      ? this.b.pm(
          c,
          function (c) {
            b.Nc = a;
            b.Qd = c.replace(/\r\n/g, "\n");
            b.b.trigger(kc.prototype.k.ej, b);
            b.b.trigger(kc.prototype.k.uh, b);
          },
          function () {
            b.Nc = a;
            b.b.trigger(kc.prototype.k.fj, b);
            b.b.trigger(kc.prototype.k.fe, b);
          }
        )
      : this.Av(a, c);
  };
  k.u = new l();
  d.prototype.bt = function (a) {
    a.Ib(this.Qd);
  };
  d.prototype.Tt = function (a) {
    a.F(this.aa);
  };
  k.D = new d();
})();
function lc(g) {
  this.b = g;
}
(function () {
  function g(a) {
    a = Math.pow(10, a / 20);
    isFinite(a) || (a = 0);
    0 > a && (a = 0);
    1 < a && (a = 1);
    return a;
  }
  function l(a) {
    0 > a && (a = 0);
    1 < a && (a = 1);
    return (Math.log(a) / Math.log(10)) * 20;
  }
  function d(a) {
    a = a.toLowerCase();
    return ha.hasOwnProperty(a) && ha[a].length ? ha[a][0].Pc() : y.destination;
  }
  function f() {
    return y.createGain ? y.createGain() : y.createGainNode();
  }
  function e(a) {
    return y.createDelay ? y.createDelay(a) : y.createDelayNode(a);
  }
  function p(a, c) {
    //alert('game start 1111');
    a.start ? a.start(c || 0) : a.noteOn(c || 0);
  }
  function b(a, c, b, d) {
    //alert('game start 2222');
    a.start ? a.start(d || 0, c) : a.noteGrainOn(d || 0, c, b - c);
  }
  function k(a) {
    try {
      a.stop ? a.stop(0) : a.noteOff(0);
      //alert('game stop');
    } catch (c) {}
  }
  function w(a, c, b, d, e, h) {
    this.type = "filter";
    this.ib = [a, c, b, d, e, h];
    this.qa = f();
    this.ba = f();
    this.ba.gain.value = h;
    this.W = f();
    this.W.gain.value = 1 - h;
    this.pb = y.createBiquadFilter();
    this.pb.type = "number" === typeof this.pb.type ? a : ad[a];
    this.pb.frequency.value = c;
    this.pb.detune && (this.pb.detune.value = b);
    this.pb.Q.value = d;
    this.pb.gain.value = e;
    this.qa.connect(this.pb);
    this.qa.connect(this.W);
    this.pb.connect(this.ba);
  }
  function r(a, c, b) {
    this.type = "delay";
    this.ib = [a, c, b];
    this.qa = f();
    this.ba = f();
    this.ba.gain.value = b;
    this.W = f();
    this.W.gain.value = 1 - b;
    this.qi = f();
    this.Zc = e(a);
    this.Zc.delayTime.value = a;
    this.Fj = f();
    this.Fj.gain.value = c;
    this.qa.connect(this.qi);
    this.qa.connect(this.W);
    this.qi.connect(this.ba);
    this.qi.connect(this.Zc);
    this.Zc.connect(this.Fj);
    this.Fj.connect(this.qi);
  }
  function a(a, c, b, d) {
    this.type = "convolve";
    this.ib = [c, b, d];
    this.qa = f();
    this.ba = f();
    this.ba.gain.value = b;
    this.W = f();
    this.W.gain.value = 1 - b;
    this.Bf = y.createConvolver();
    a && ((this.Bf.normalize = c), (this.Bf.buffer = a));
    this.qa.connect(this.Bf);
    this.qa.connect(this.W);
    this.Bf.connect(this.ba);
  }
  function c(a, c, b, d, h) {
    this.type = "flanger";
    this.ib = [a, c, b, d, h];
    this.qa = f();
    this.W = f();
    this.W.gain.value = 1 - h / 2;
    this.ba = f();
    this.ba.gain.value = h / 2;
    this.Oj = f();
    this.Oj.gain.value = d;
    this.Zc = e(a + c);
    this.Zc.delayTime.value = a;
    this.Lb = y.createOscillator();
    this.Lb.frequency.value = b;
    this.Jc = f();
    this.Jc.gain.value = c;
    this.qa.connect(this.Zc);
    this.qa.connect(this.W);
    this.Zc.connect(this.ba);
    this.Zc.connect(this.Oj);
    this.Oj.connect(this.Zc);
    this.Lb.connect(this.Jc);
    this.Jc.connect(this.Zc.delayTime);
    p(this.Lb);
  }
  function m(a, c, b, d, e, h) {
    this.type = "phaser";
    this.ib = [a, c, b, d, e, h];
    this.qa = f();
    this.W = f();
    this.W.gain.value = 1 - h / 2;
    this.ba = f();
    this.ba.gain.value = h / 2;
    this.pb = y.createBiquadFilter();
    this.pb.type = "number" === typeof this.pb.type ? 7 : "allpass";
    this.pb.frequency.value = a;
    this.pb.detune && (this.pb.detune.value = c);
    this.pb.Q.value = b;
    this.Lb = y.createOscillator();
    this.Lb.frequency.value = e;
    this.Jc = f();
    this.Jc.gain.value = d;
    this.qa.connect(this.pb);
    this.qa.connect(this.W);
    this.pb.connect(this.ba);
    this.Lb.connect(this.Jc);
    this.Jc.connect(this.pb.frequency);
    p(this.Lb);
  }
  function n(a) {
    this.type = "gain";
    this.ib = [a];
    this.ta = f();
    this.ta.gain.value = a;
  }
  function v(a, c) {
    this.type = "tremolo";
    this.ib = [a, c];
    this.ta = f();
    this.ta.gain.value = 1 - c / 2;
    this.Lb = y.createOscillator();
    this.Lb.frequency.value = a;
    this.Jc = f();
    this.Jc.gain.value = c / 2;
    this.Lb.connect(this.Jc);
    this.Jc.connect(this.ta.gain);
    p(this.Lb);
  }
  function F(a, c) {
    this.type = "ringmod";
    this.ib = [a, c];
    this.qa = f();
    this.ba = f();
    this.ba.gain.value = c;
    this.W = f();
    this.W.gain.value = 1 - c;
    this.Gi = f();
    this.Gi.gain.value = 0;
    this.Lb = y.createOscillator();
    this.Lb.frequency.value = a;
    this.Lb.connect(this.Gi.gain);
    p(this.Lb);
    this.qa.connect(this.Gi);
    this.qa.connect(this.W);
    this.Gi.connect(this.ba);
  }
  function A(a, c, b, d, e) {
    this.type = "distortion";
    this.ib = [a, c, b, d, e];
    this.qa = f();
    this.Qk = f();
    this.Pk = f();
    this.xy(b, Math.pow(10, d / 20));
    this.ba = f();
    this.ba.gain.value = e;
    this.W = f();
    this.W.gain.value = 1 - e;
    this.xl = y.createWaveShaper();
    this.Dj = new Float32Array(65536);
    this.ww(a, c);
    this.xl.Dj = this.Dj;
    this.qa.connect(this.Qk);
    this.qa.connect(this.W);
    this.Qk.connect(this.xl);
    this.xl.connect(this.Pk);
    this.Pk.connect(this.ba);
  }
  function q(a, c, b, d, e) {
    this.type = "compressor";
    this.ib = [a, c, b, d, e];
    this.ta = y.createDynamicsCompressor();
    try {
      (this.ta.threshold.value = a),
        (this.ta.knee.value = c),
        (this.ta.ratio.value = b),
        (this.ta.attack.value = d),
        (this.ta.release.value = e);
    } catch (h) {}
  }
  function h(a, c) {
    this.type = "analyser";
    this.ib = [a, c];
    this.ta = y.createAnalyser();
    this.ta.fftSize = a;
    this.ta.smoothingTimeConstant = c;
    this.sw = new Float32Array(this.ta.frequencyBinCount);
    this.ur = new Uint8Array(a);
    this.xi = 0;
  }
  function t() {
    this.Z = null;
    this.uk = 0;
    this.uf = [];
    this.mn = this.mk = this.lk = 0;
  }
  function B(a, c) {
    this.src = a;
    this.ka = Y;
    this.dd = c;
    this.nj = !1;
    var b = this;
    this.kn = this.An = null;
    this.Wg = [];
    this.Wk = 0;
    this.wo = this.Mj = this.Cr = this.Jk = !1;
    1 === Y && c && !fb && ((this.ka = 0), (this.An = f()));
    this.je = this.za = null;
    var d;
    switch (this.ka) {
      case 0:
        this.za = new Audio();
        this.za.crossOrigin = "anonymous";
        this.za.addEventListener("canplaythrough", function () {
          b.wo = !0;
        });
        1 === Y &&
          y.createMediaElementSource &&
          !/wiiu/i.test(navigator.userAgent) &&
          ((this.Cr = !0),
          this.za.addEventListener("canplay", function () {
            b.kn ||
              ((b.kn = y.createMediaElementSource(b.za)), b.kn.connect(b.An));
          }));
        this.za.autoplay = !1;
        this.za.qA = "auto";
        this.za.src = a;
        break;
      case 1:
        K.Bg
          ? K.Pp(
              a,
              function (a) {
                b.je = a;
                b.Hp();
              },
              function () {
                b.Mj = !0;
              }
            )
          : ((d = new XMLHttpRequest()),
            d.open("GET", a, !0),
            (d.responseType = "arraybuffer"),
            (d.onload = function () {
              b.je = d.response;
              b.Hp();
            }),
            (d.onerror = function () {
              b.Mj = !0;
            }),
            d.send());
        break;
      case 2:
        this.za = !0;
        break;
      case 3:
        this.za = !0;
    }
  }
  function C(a, c) {
    var b = this;
    this.tag = c;
    this.Mb = this.Id = !0;
    this.src = a.src;
    this.buffer = a;
    this.ka = Y;
    this.dd = a.dd;
    this.playbackRate = 1;
    this.xg = !0;
    this.Hc = this.Tc = !1;
    this.Ac = 0;
    this.ii = this.Eg = this.Sd = !1;
    this.volume = 1;
    this.yn = function (a) {
      if (!b.Hc && !b.Tc) {
        var c = this;
        c || (c = a.target);
        c === b.mj &&
          ((b.xg = !0),
          (b.Mb = !0),
          (x = b.tag),
          K.trigger(lc.prototype.k.hj, u));
      }
    };
    this.mj = null;
    this.Ag = (1 === O && !this.dd) || 2 === O;
    this.Pg = 1;
    this.startTime = this.Ag ? K.qb.M : K.Pe.M;
    this.hb = this.Bb = null;
    this.Ud = !1;
    this.eb = null;
    this.Xq = this.Wq = this.Vq = this.Uq = this.Zq = this.Yq = 0;
    this.B = null;
    var e = !1;
    1 !== this.ka || 0 !== this.buffer.ka || this.buffer.Cr || (this.ka = 0);
    switch (this.ka) {
      case 0:
        this.dd
          ? ((this.B = a.za), (e = !a.nj), (a.nj = !0))
          : ((this.B = new Audio()),
            (this.B.crossOrigin = "anonymous"),
            (this.B.autoplay = !1),
            (this.B.src = a.za.src),
            (e = !0));
        e &&
          this.B.addEventListener("ended", function () {
            x = b.tag;
            b.Mb = !0;
            K.trigger(lc.prototype.k.hj, u);
          });
        break;
      case 1:
        this.Bb = f();
        this.Bb.connect(d(c));
        1 === this.buffer.ka
          ? a.za &&
            ((this.B = y.createBufferSource()),
            (this.B.buffer = a.za),
            this.B.connect(this.Bb))
          : ((this.B = this.buffer.za),
            this.buffer.An.connect(this.Bb),
            this.buffer.nj ||
              ((this.buffer.nj = !0),
              this.buffer.za.addEventListener("ended", function () {
                x = b.tag;
                b.Mb = !0;
                K.trigger(lc.prototype.k.hj, u);
              })));
        break;
      case 2:
        this.B = new window.Media(sa + this.src, null, null, function (a) {
          a === window.Media.MEDIA_STOPPED &&
            ((b.xg = !0),
            (b.Mb = !0),
            (x = b.tag),
            K.trigger(lc.prototype.k.hj, u));
        });
        break;
      case 3:
        this.B = !0;
    }
  }
  function I(a, c) {
    var b = a.jf() ? 1 : 0,
      d = c.jf() ? 1 : 0;
    return b === d ? 0 : b < d ? 1 : -1;
  }
  function D(a, c) {
    z(Fa);
    if (a.length) {
      var b, d, e;
      b = 0;
      for (d = G.length; b < d; b++) (e = G[b]), ob(a, e.tag) && Fa.push(e);
      c && Fa.sort(I);
    } else V && !V.Mf() && (z(Fa), (Fa[0] = V));
  }
  function Q(a, c) {
    ha.hasOwnProperty(a) ? ha[a].push(c) : (ha[a] = [c]);
    var b,
      d,
      e,
      h,
      f = y.destination;
    if (ha.hasOwnProperty(a) && ((e = ha[a]), e.length))
      for (f = e[0].Pc(), b = 0, d = e.length; b < d; b++)
        (h = e[b]), b + 1 === d ? h.Wc(y.destination) : h.Wc(e[b + 1].Pc());
    D(a);
    b = 0;
    for (d = Fa.length; b < d; b++) Fa[b].ay(f);
    $a && Qb === a && ($a.disconnect(), $a.connect(f));
  }
  function J() {}
  function M() {}
  function X() {}
  var U = lc.prototype;
  U.L = function (a) {
    this.ra = a;
    this.b = a.b;
  };
  U.L.prototype.I = function () {};
  var K = null,
    u = null,
    x = "",
    sa = "",
    Y = 0,
    y = null,
    L = [],
    G = [],
    V = null,
    N = !1,
    O = 0,
    R = !1,
    ga = 1,
    T = 0,
    ua = 0,
    va = !1,
    Ua = 1,
    Pb = 1,
    Kc = 10,
    Lc = 1e4,
    Mc = 1,
    $a = null,
    Qb = "",
    gb = !1,
    hb = [],
    fb = !1,
    ha = {},
    ad =
      "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(
        " "
      );
  w.prototype.Wc = function (a) {
    this.ba.disconnect();
    this.ba.connect(a);
    this.W.disconnect();
    this.W.connect(a);
  };
  w.prototype.remove = function () {
    this.qa.disconnect();
    this.pb.disconnect();
    this.ba.disconnect();
    this.W.disconnect();
  };
  w.prototype.Pc = function () {
    return this.qa;
  };
  r.prototype.Wc = function (a) {
    this.ba.disconnect();
    this.ba.connect(a);
    this.W.disconnect();
    this.W.connect(a);
  };
  r.prototype.remove = function () {
    this.qa.disconnect();
    this.qi.disconnect();
    this.Zc.disconnect();
    this.Fj.disconnect();
    this.ba.disconnect();
    this.W.disconnect();
  };
  r.prototype.Pc = function () {
    return this.qa;
  };
  a.prototype.Wc = function (a) {
    this.ba.disconnect();
    this.ba.connect(a);
    this.W.disconnect();
    this.W.connect(a);
  };
  a.prototype.remove = function () {
    this.qa.disconnect();
    this.Bf.disconnect();
    this.ba.disconnect();
    this.W.disconnect();
  };
  a.prototype.Pc = function () {
    return this.qa;
  };
  c.prototype.Wc = function (a) {
    this.W.disconnect();
    this.W.connect(a);
    this.ba.disconnect();
    this.ba.connect(a);
  };
  c.prototype.remove = function () {
    this.qa.disconnect();
    this.Zc.disconnect();
    this.Lb.disconnect();
    this.Jc.disconnect();
    this.W.disconnect();
    this.ba.disconnect();
    this.Oj.disconnect();
  };
  c.prototype.Pc = function () {
    return this.qa;
  };
  m.prototype.Wc = function (a) {
    this.W.disconnect();
    this.W.connect(a);
    this.ba.disconnect();
    this.ba.connect(a);
  };
  m.prototype.remove = function () {
    this.qa.disconnect();
    this.pb.disconnect();
    this.Lb.disconnect();
    this.Jc.disconnect();
    this.W.disconnect();
    this.ba.disconnect();
  };
  m.prototype.Pc = function () {
    return this.qa;
  };
  n.prototype.Wc = function (a) {
    this.ta.disconnect();
    this.ta.connect(a);
  };
  n.prototype.remove = function () {
    this.ta.disconnect();
  };
  n.prototype.Pc = function () {
    return this.ta;
  };
  v.prototype.Wc = function (a) {
    this.ta.disconnect();
    this.ta.connect(a);
  };
  v.prototype.remove = function () {
    this.Lb.disconnect();
    this.Jc.disconnect();
    this.ta.disconnect();
  };
  v.prototype.Pc = function () {
    return this.ta;
  };
  F.prototype.Wc = function (a) {
    this.ba.disconnect();
    this.ba.connect(a);
    this.W.disconnect();
    this.W.connect(a);
  };
  F.prototype.remove = function () {
    this.Lb.disconnect();
    this.Gi.disconnect();
    this.qa.disconnect();
    this.ba.disconnect();
    this.W.disconnect();
  };
  F.prototype.Pc = function () {
    return this.qa;
  };
  A.prototype.xy = function (a, c) {
    0.01 > a && (a = 0.01);
    this.Qk.gain.value = a;
    this.Pk.gain.value = Math.pow(1 / a, 0.6) * c;
  };
  A.prototype.shape = function (a, c, b) {
    var d = 1.05 * b * c - c;
    b = 0 > a ? -1 : 1;
    a = 0 > a ? -a : a;
    c = a < c ? a : c + d * (1 - Math.exp(-(1 / d) * (a - c)));
    return c * b;
  };
  A.prototype.ww = function (a, c) {
    for (
      var b = Math.pow(10, a / 20), d = Math.pow(10, c / 20), e = 0, h = 0;
      32768 > h;
      ++h
    )
      (e = h / 32768),
        (e = this.shape(e, b, d)),
        (this.Dj[32768 + h] = e),
        (this.Dj[32768 - h - 1] = -e);
  };
  A.prototype.Wc = function (a) {
    this.ba.disconnect();
    this.ba.connect(a);
    this.W.disconnect();
    this.W.connect(a);
  };
  A.prototype.remove = function () {
    this.qa.disconnect();
    this.Qk.disconnect();
    this.xl.disconnect();
    this.Pk.disconnect();
    this.ba.disconnect();
    this.W.disconnect();
  };
  A.prototype.Pc = function () {
    return this.qa;
  };
  q.prototype.Wc = function (a) {
    this.ta.disconnect();
    this.ta.connect(a);
  };
  q.prototype.remove = function () {
    this.ta.disconnect();
  };
  q.prototype.Pc = function () {
    return this.ta;
  };
  h.prototype.Ta = function () {
    this.ta.getFloatFrequencyData(this.sw);
    this.ta.getByteTimeDomainData(this.ur);
    for (var a = this.ta.fftSize, c = 0, b = (this.xi = 0), d = 0; c < a; c++)
      (d = (this.ur[c] - 128) / 128),
        0 > d && (d = -d),
        this.xi < d && (this.xi = d),
        (b += d * d);
    this.xi = l(this.xi);
    l(Math.sqrt(b / a));
  };
  h.prototype.Wc = function (a) {
    this.ta.disconnect();
    this.ta.connect(a);
  };
  h.prototype.remove = function () {
    this.ta.disconnect();
  };
  h.prototype.Pc = function () {
    return this.ta;
  };
  t.prototype.Ii = function (a) {
    if ((this.Z = a)) (this.lk = this.Z.x), (this.mk = this.Z.y);
    z(this.uf);
  };
  t.prototype.dk = function () {
    return !!this.Z;
  };
  t.prototype.Ta = function (a) {
    this.Z &&
      0 !== a &&
      ((this.mn = Na(this.lk, this.mk, this.Z.x, this.Z.y)),
      (a = Sa(this.lk, this.mk, this.Z.x, this.Z.y) / a),
      4 > this.uf.length || this.uf.shift(),
      this.uf.push(a),
      (this.lk = this.Z.x),
      (this.mk = this.Z.y));
  };
  t.prototype.cq = function () {
    if (!this.uf.length) return 0;
    var a,
      c,
      b = 0;
    a = 0;
    for (c = this.uf.length; a < c; a++) b += this.uf[a];
    return b / this.uf.length;
  };
  t.prototype.Em = function () {
    return Math.cos(this.mn) * this.cq();
  };
  t.prototype.Fm = function () {
    return Math.sin(this.mn) * this.cq();
  };
  var Eb = !1;
  B.prototype.cy = function () {
    var a, c, b, d;
    b = a = 0;
    for (c = G.length; a < c; ++a)
      (d = G[a]), (G[b] = d), d.buffer === this ? d.stop() : ++b;
    G.length = b;
    this.je = this.za = null;
  };
  B.prototype.Hp = function () {
    if (!this.za && this.je) {
      var a = this;
      if (y.decodeAudioData)
        y.decodeAudioData(
          this.je,
          function (c) {
            a.za = c;
            a.je = null;
            var b, d, e;
            if (ja(a.Lk) || R)
              ja(a.Aj) || ((b = a.Aj.Bf), (b.normalize = a.Jq), (b.buffer = c));
            else if (a.Wg.length) {
              b = 0;
              for (d = a.Wg.length; b < d; b++) {
                c = a.Wg[b];
                e = new C(a, c.Ir);
                e.bo(!0);
                if ("undefined" !== typeof c.Lq && ((c.Z = K.Qh(c.Lq)), !c.Z))
                  continue;
                if (c.Z) {
                  var h = Ra(c.Z.x, c.Z.y, -c.Z.A.$a(), T, ua, !0),
                    f = Ra(c.Z.x, c.Z.y, -c.Z.A.$a(), T, ua, !1);
                  e.ao(h, f, Ia(c.Z.q - c.Z.A.$a()), c.Lm, c.pn, c.sn);
                  e.Ii(c.Z);
                } else e.ao(c.x, c.y, c.Su, c.Lm, c.pn, c.sn);
                e.play(a.hn, a.uo, a.Wk);
                a.Jk && e.pause();
                G.push(e);
              }
              z(a.Wg);
            } else
              (e = new C(a, a.Lk || "")),
                e.play(a.hn, a.uo, a.Wk),
                a.Jk && e.pause(),
                G.push(e);
          },
          function () {
            a.Mj = !0;
          }
        );
      else if (
        ((this.za = y.createBuffer(this.je, !1)),
        (this.je = null),
        ja(this.Lk) || R)
      )
        ja(this.Aj) ||
          ((c = this.Aj.Bf), (c.normalize = this.Jq), (c.buffer = this.za));
      else {
        var c = new C(this, this.Lk);
        c.play(this.hn, this.uo, this.Wk);
        this.Jk && c.pause();
        G.push(c);
      }
    }
  };
  B.prototype.oq = function () {
    switch (this.ka) {
      case 0:
        var a = 4 <= this.za.readyState;
        a && (this.wo = !0);
        return a || this.wo;
      case 1:
        return !!this.je || !!this.za;
      case 2:
        return !0;
      case 3:
        return !0;
    }
    return !1;
  };
  B.prototype.kx = function () {
    switch (this.ka) {
      case 0:
        return this.oq();
      case 1:
        return !!this.za;
      case 2:
        return !0;
      case 3:
        return !0;
    }
    return !1;
  };
  B.prototype.Xw = function () {
    switch (this.ka) {
      case 0:
        return !!this.za.error;
      case 1:
        return this.Mj;
    }
    return !1;
  };
  C.prototype.Mf = function () {
    switch (this.ka) {
      case 0:
        return this.B.ended;
      case 1:
        return 1 === this.buffer.ka
          ? (!this.Id && !this.Mb && this.B.loop) || this.Hc
            ? !1
            : this.xg
          : this.B.ended;
      case 2:
        return this.xg;
      case 3:
        !0;
    }
    return !0;
  };
  C.prototype.pv = function () {
    return this.Id || this.Mb ? !0 : this.Mf();
  };
  C.prototype.bo = function (a) {
    1 === Y &&
      (!this.Ud && a
        ? this.Bb &&
          (this.hb ||
            ((this.hb = y.createPanner()),
            (this.hb.panningModel =
              "number" === typeof this.hb.panningModel
                ? Ua
                : ["equalpower", "HRTF", "soundfield"][Ua]),
            (this.hb.distanceModel =
              "number" === typeof this.hb.distanceModel
                ? Pb
                : ["linear", "inverse", "exponential"][Pb]),
            (this.hb.refDistance = Kc),
            (this.hb.maxDistance = Lc),
            (this.hb.rolloffFactor = Mc)),
          this.Bb.disconnect(),
          this.Bb.connect(this.hb),
          this.hb.connect(d(this.tag)),
          (this.Ud = !0))
        : this.Ud &&
          !a &&
          this.Bb &&
          (this.hb.disconnect(),
          this.Bb.disconnect(),
          this.Bb.connect(d(this.tag)),
          (this.Ud = !1)));
  };
  C.prototype.ao = function (a, c, b, d, e, h) {
    this.Ud &&
      1 === Y &&
      (this.hb.setPosition(a, c, 0),
      this.hb.setOrientation(Math.cos(E(b)), Math.sin(E(b)), 0),
      (this.hb.coneInnerAngle = d),
      (this.hb.coneOuterAngle = e),
      (this.hb.coneOuterGain = h),
      (this.Yq = a),
      (this.Zq = c),
      (this.Uq = b),
      (this.Vq = d),
      (this.Wq = e),
      (this.Xq = h));
  };
  C.prototype.Ii = function (a) {
    this.Ud && 1 === Y && (this.eb || (this.eb = new t()), this.eb.Ii(a));
  };
  C.prototype.Ta = function (a) {
    if (this.Ud && 1 === Y && this.eb && this.eb.dk() && this.jf()) {
      this.eb.Ta(a);
      a = this.eb.Z;
      var c = Ra(a.x, a.y, -a.A.$a(), T, ua, !0),
        b = Ra(a.x, a.y, -a.A.$a(), T, ua, !1);
      this.hb.setPosition(c, b, 0);
      c = 0;
      "undefined" !== typeof this.eb.Z.q &&
        ((c = a.q - a.A.$a()),
        this.hb.setOrientation(Math.cos(c), Math.sin(c), 0));
      c = Ra(this.eb.Em(), this.eb.Fm(), -a.A.$a(), 0, 0, !0);
      b = Ra(this.eb.Em(), this.eb.Fm(), -a.A.$a(), 0, 0, !1);
      this.hb.setVelocity(c, b, 0);
    }
  };
  C.prototype.play = function (a, c, d, e) {
    var h = this.B;
    this.Sd = a;
    this.volume = c;
    d = d || 0;
    e = e || 0;
    switch (this.ka) {
      case 0:
        1 !== h.playbackRate && (h.playbackRate = 1);
        h.volume !== c * ga && (h.volume = c * ga);
        h.loop !== a && (h.loop = a);
        h.muted && (h.muted = !1);
        if (h.currentTime !== d)
          try {
            h.currentTime = d;
          } catch (f) {}
        if (this.dd && gb && !K.bb) hb.push(this);
        else
          try {
            this.B.play();
          } catch (k) {
            console &&
              console.log &&
              console.log(
                "[C2] WARNING: exception trying to play audio '" +
                  this.buffer.src +
                  "': ",
                k
              );
          }
        break;
      case 1:
        this.muted = !1;
        this.Pg = 1;
        if (1 === this.buffer.ka)
          (this.Bb.gain.value = c * ga),
            this.Id ||
              ((this.B = y.createBufferSource()),
              (this.B.buffer = this.buffer.za),
              this.B.connect(this.Bb)),
            (this.B.onended = this.yn),
            (this.mj = this.B),
            (this.B.loop = a),
            (this.xg = !1),
            0 === d ? p(this.B, e) : b(this.B, d, this.gf(), e);
        else {
          1 !== h.playbackRate && (h.playbackRate = 1);
          h.loop !== a && (h.loop = a);
          h.volume = c * ga;
          if (h.currentTime !== d)
            try {
              h.currentTime = d;
            } catch (g) {}
          this.dd && gb && !K.bb ? hb.push(this) : h.play();
        }
        break;
      case 2:
        ((!this.Id && this.Mb) || 0 !== d) && h.seekTo(d);
        h.play();
        this.xg = !1;
        break;
      case 3:
        K.Qb
          ? AppMobi.context.playSound(this.src, a)
          : AppMobi.player.playSound(this.src, a);
    }
    this.playbackRate = 1;
    this.startTime = (this.Ag ? K.qb.M : K.Pe.M) - d;
    this.Hc = this.Mb = this.Id = !1;
  };
  C.prototype.stop = function () {
    switch (this.ka) {
      case 0:
        this.B.paused || this.B.pause();
        break;
      case 1:
        1 === this.buffer.ka ? k(this.B) : this.B.paused || this.B.pause();
        break;
      case 2:
        this.B.stop();
        break;
      case 3:
        K.Qb && AppMobi.context.stopSound(this.src);
    }
    this.Mb = !0;
    this.Hc = !1;
  };
  C.prototype.pause = function () {
    if (!(this.Id || this.Mb || this.Mf() || this.Hc)) {
      switch (this.ka) {
        case 0:
          this.B.paused || this.B.pause();
          break;
        case 1:
          1 === this.buffer.ka
            ? ((this.Ac = this.Cm(!0)),
              this.Sd && (this.Ac = this.Ac % this.gf()),
              (this.Hc = !0),
              k(this.B))
            : this.B.paused || this.B.pause();
          break;
        case 2:
          this.B.pause();
          break;
        case 3:
          K.Qb && AppMobi.context.stopSound(this.src);
      }
      this.Hc = !0;
    }
  };
  C.prototype.hy = function () {
    if (!(this.Id || this.Mb || this.Mf()) && this.Hc) {
      switch (this.ka) {
        case 0:
          this.B.play();
          break;
        case 1:
          1 === this.buffer.ka
            ? ((this.B = y.createBufferSource()),
              (this.B.buffer = this.buffer.za),
              this.B.connect(this.Bb),
              (this.B.onended = this.yn),
              (this.mj = this.B),
              (this.B.loop = this.Sd),
              (this.Bb.gain.value = ga * this.volume * this.Pg),
              this.sl(),
              (this.startTime =
                (this.Ag ? K.qb.M : K.Pe.M) -
                this.Ac / (this.playbackRate || 0.001)),
              b(this.B, this.Ac, this.gf()))
            : this.B.play();
          break;
        case 2:
          this.B.play();
          break;
        case 3:
          K.Qb && AppMobi.context.resumeSound(this.src);
      }
      this.Hc = !1;
    }
  };
  C.prototype.seek = function (a) {
    if (!(this.Id || this.Mb || this.Mf()))
      switch (this.ka) {
        case 0:
          try {
            this.B.currentTime = a;
          } catch (c) {}
          break;
        case 1:
          if (1 === this.buffer.ka)
            this.Hc ? (this.Ac = a) : (this.pause(), (this.Ac = a), this.hy());
          else
            try {
              this.B.currentTime = a;
            } catch (b) {}
          break;
        case 3:
          K.Qb && AppMobi.context.seekSound(this.src, a);
      }
  };
  C.prototype.ay = function (a) {
    1 === this.ka &&
      (this.Ud
        ? (this.hb.disconnect(), this.hb.connect(a))
        : (this.Bb.disconnect(), this.Bb.connect(a)));
  };
  C.prototype.gf = function () {
    var a = 0;
    switch (this.ka) {
      case 0:
        "undefined" !== typeof this.B.duration && (a = this.B.duration);
        break;
      case 1:
        a = this.buffer.za.duration;
        break;
      case 2:
        a = this.B.getDuration();
        break;
      case 3:
        K.Qb && (a = AppMobi.context.getDurationSound(this.src));
    }
    return a;
  };
  C.prototype.Cm = function (a) {
    var c = this.gf(),
      b = 0;
    switch (this.ka) {
      case 0:
        "undefined" !== typeof this.B.currentTime && (b = this.B.currentTime);
        break;
      case 1:
        if (1 === this.buffer.ka) {
          if (this.Hc) return this.Ac;
          b = (this.Ag ? K.qb.M : K.Pe.M) - this.startTime;
        } else
          "undefined" !== typeof this.B.currentTime && (b = this.B.currentTime);
        break;
      case 3:
        K.Qb && (b = AppMobi.context.getPlaybackTimeSound(this.src));
    }
    a && (b *= this.playbackRate);
    !this.Sd && b > c && (b = c);
    return b;
  };
  C.prototype.jf = function () {
    return !this.Hc && !this.Id && !this.Mb && !this.Mf();
  };
  C.prototype.Dy = function () {
    return !this.Id && !this.Mb && !this.Mf();
  };
  C.prototype.Wr = function () {
    var a = this.volume * ga;
    isFinite(a) || (a = 0);
    switch (this.ka) {
      case 0:
        "undefined" !== typeof this.B.volume &&
          this.B.volume !== a &&
          (this.B.volume = a);
        break;
      case 1:
        1 === this.buffer.ka
          ? (this.Bb.gain.value = a * this.Pg)
          : "undefined" !== typeof this.B.volume &&
            this.B.volume !== a &&
            (this.B.volume = a);
    }
  };
  C.prototype.Ij = function (a) {
    switch (this.ka) {
      case 0:
        this.B.muted !== !!a && (this.B.muted = !!a);
        break;
      case 1:
        1 === this.buffer.ka
          ? ((this.Pg = a ? 0 : 1),
            (this.Bb.gain.value = ga * this.volume * this.Pg))
          : this.B.muted !== !!a && (this.B.muted = !!a);
    }
  };
  C.prototype.zy = function () {
    this.Eg = !0;
    this.Ij(this.Eg || this.ii);
  };
  C.prototype.pr = function (a) {
    this.ii = !!a;
    this.Ij(this.Eg || this.ii);
  };
  C.prototype.sl = function () {
    var a = this.playbackRate;
    this.Ag && (a *= K.xf);
    switch (this.ka) {
      case 0:
        this.B.playbackRate !== a && (this.B.playbackRate = a);
        break;
      case 1:
        1 === this.buffer.ka
          ? this.B.playbackRate.value !== a && (this.B.playbackRate.value = a)
          : this.B.playbackRate !== a && (this.B.playbackRate = a);
    }
  };
  C.prototype.Cy = function (a) {
    switch (this.ka) {
      case 0:
        a
          ? this.jf()
            ? ((this.Tc = !0), this.B.pause())
            : (this.Tc = !1)
          : this.Tc && (this.B.play(), (this.Tc = !1));
        break;
      case 1:
        a
          ? this.jf()
            ? ((this.Tc = !0),
              1 === this.buffer.ka
                ? ((this.Ac = this.Cm(!0)),
                  this.Sd && (this.Ac = this.Ac % this.gf()),
                  k(this.B))
                : this.B.pause())
            : (this.Tc = !1)
          : this.Tc &&
            (1 === this.buffer.ka
              ? ((this.B = y.createBufferSource()),
                (this.B.buffer = this.buffer.za),
                this.B.connect(this.Bb),
                (this.B.onended = this.yn),
                (this.mj = this.B),
                (this.B.loop = this.Sd),
                (this.Bb.gain.value = ga * this.volume * this.Pg),
                this.sl(),
                (this.startTime =
                  (this.Ag ? K.qb.M : K.Pe.M) -
                  this.Ac / (this.playbackRate || 0.001)),
                b(this.B, this.Ac, this.gf()))
              : this.B.play(),
            (this.Tc = !1));
        break;
      case 2:
        a
          ? this.jf()
            ? (this.B.pause(), (this.Tc = !0))
            : (this.Tc = !1)
          : this.Tc && ((this.Tc = !1), this.B.play());
    }
  };
  U.J = function (a) {
    function c() {
      if (!va && y.createBuffer) {
        var a = y.createBuffer(1, 220, 22050),
          b = y.createBufferSource();
        b.buffer = a;
        b.connect(y.destination);
        p(b);
      }
    }
    this.type = a;
    K = this.b = a.b;
    u = this;
    this.rc = null;
    this.oi = -600;
    this.b.Bg && (fb = !0);
    !(this.b.lf || (this.b.yg && (this.b.bi || this.b.fk))) ||
      this.b.zg ||
      this.b.La ||
      this.b.ai ||
      fb ||
      (gb = !0);
    y = null;
    "undefined" !== typeof AudioContext
      ? ((Y = 1), (y = new AudioContext()))
      : "undefined" !== typeof webkitAudioContext &&
        ((Y = 1), (y = new webkitAudioContext()));
    this.b.lf &&
      y &&
      (y.close && y.close(),
      "undefined" !== typeof AudioContext
        ? (y = new AudioContext())
        : "undefined" !== typeof webkitAudioContext &&
          (y = new webkitAudioContext()));
    gb
      ? document.addEventListener(
          "touchend",
          function () {
            !Eb && y && (c(), (Eb = !0));
            var a, b, d;
            if (gb) {
              if (!R)
                for (a = 0, b = hb.length; a < b; ++a)
                  (d = hb[a]), d.Mb || d.Hc || d.B.play();
              z(hb);
            }
          },
          !0
        )
      : fb &&
        document.addEventListener(
          "touchend",
          function () {
            !Eb && y && (c(), (Eb = !0));
          },
          !0
        );
    1 !== Y &&
      (this.b.ec && "undefined" !== typeof window.Media
        ? (Y = 2)
        : this.b.mq && (Y = 3));
    2 === Y &&
      ((sa = location.href),
      (a = sa.lastIndexOf("/")),
      -1 < a && (sa = sa.substr(0, a + 1)),
      (sa = sa.replace("file://", "")));
    if (this.b.nx && this.b.ox && "undefined" === typeof Audio)
      alert(
        "It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."
      ),
        this.b.yf(this);
    else {
      if (this.b.Qb) N = this.b.yg;
      else
        try {
          N = !!new Audio().canPlayType('audio/ogg; codecs="vorbis"');
        } catch (b) {
          N = !1;
        }
      this.b.gg(this);
    }
  };
  var Ga = U.J.prototype;
  Ga.I = function () {
    this.b.mg = this;
    O = this.C[0];
    this.Ie = this.C[1];
    this.Nx = 0 !== this.C[2];
    this.Hq = 0;
    Ua = this.C[3];
    Pb = this.C[4];
    this.oi = -this.C[5];
    Kc = this.C[6];
    Lc = this.C[7];
    Mc = this.C[8];
    this.rc = new t();
    var a = this.b.T || this.b.width,
      c = this.b.S || this.b.height;
    1 === Y &&
      ("undefined" !== typeof y.listener.dopplerFactor &&
        (y.listener.dopplerFactor = 0),
      y.listener.setPosition(a / 2, c / 2, this.oi),
      y.listener.setOrientation(0, 0, 1, 0, -1, 0),
      (window.c2OnAudioMicStream = function (a, c) {
        $a && $a.disconnect();
        Qb = c.toLowerCase();
        $a = y.createMediaStreamSource(a);
        $a.connect(d(Qb));
      }));
    this.b.sp(function (a) {
      u.Jx(a);
    });
    var b = this;
    this.b.Rl(function (a) {
      b.tn(a);
    });
  };
  Ga.tn = function (a) {
    var c, b, d;
    c = 0;
    for (b = G.length; c < b; c++)
      (d = G[c]),
        d.eb &&
          d.eb.Z === a &&
          ((d.eb.Z = null), d.Ud && d.jf() && d.Sd && d.stop());
    this.rc.Z === a && (this.rc.Z = null);
  };
  Ga.Sa = function () {
    var a = {
        silent: R,
        masterVolume: ga,
        listenerZ: this.oi,
        listenerUid: this.rc.dk() ? this.rc.Z.uid : -1,
        playing: [],
        effects: {},
      },
      c = a.playing,
      b,
      d,
      e,
      h,
      f,
      k;
    b = 0;
    for (d = G.length; b < d; b++)
      (e = G[b]),
        !e.Dy() ||
          3 === this.Ie ||
          (e.dd && 1 === this.Ie) ||
          (!e.dd && 2 === this.Ie) ||
          ((h = e.Cm()),
          e.Sd && (h = h % e.gf()),
          (h = {
            tag: e.tag,
            buffersrc: e.buffer.src,
            is_music: e.dd,
            playbackTime: h,
            volume: e.volume,
            looping: e.Sd,
            muted: e.Eg,
            playbackRate: e.playbackRate,
            paused: e.Hc,
            resume_position: e.Ac,
          }),
          e.Ud &&
            ((h.pan = {}),
            (k = h.pan),
            e.eb && e.eb.dk()
              ? (k.objUid = e.eb.Z.uid)
              : ((k.x = e.Yq), (k.y = e.Zq), (k.a = e.Uq)),
            (k.ia = e.Vq),
            (k.oa = e.Wq),
            (k.og = e.Xq)),
          c.push(h));
    c = a.effects;
    for (f in ha)
      if (ha.hasOwnProperty(f)) {
        e = [];
        b = 0;
        for (d = ha[f].length; b < d; b++)
          e.push({
            type: ha[f][b].type,
            params: ha[f][b].ib,
          });
        c[f] = e;
      }
    return a;
  };
  var ib = [];
  Ga.cb = function (b) {
    var d = b.silent;
    ga = b.masterVolume;
    this.oi = b.listenerZ;
    this.rc.Ii(null);
    var e = b.listenerUid;
    -1 !== e && ((this.rc.uk = e), ib.push(this.rc));
    var e = b.playing,
      f,
      k,
      g,
      p,
      l,
      B,
      x,
      C,
      D,
      u,
      K;
    if (3 !== this.Ie)
      for (f = 0, k = G.length; f < k; f++)
        (D = G[f]),
          (D.dd && 1 === this.Ie) || ((D.dd || 2 !== this.Ie) && D.stop());
    for (l in ha)
      if (ha.hasOwnProperty(l))
        for (f = 0, k = ha[l].length; f < k; f++) ha[l][f].remove();
    Wa(ha);
    for (l in b.effects)
      if (b.effects.hasOwnProperty(l))
        for (B = b.effects[l], f = 0, k = B.length; f < k; f++)
          switch (((g = B[f].type), (u = B[f].params), g)) {
            case "filter":
              Q(l, new w(u[0], u[1], u[2], u[3], u[4], u[5]));
              break;
            case "delay":
              Q(l, new r(u[0], u[1], u[2]));
              break;
            case "convolve":
              g = u[2];
              D = this.Wj(g, !1);
              D.za
                ? (g = new a(D.za, u[0], u[1], g))
                : ((g = new a(null, u[0], u[1], g)), (D.Jq = u[0]), (D.Aj = g));
              Q(l, g);
              break;
            case "flanger":
              Q(l, new c(u[0], u[1], u[2], u[3], u[4]));
              break;
            case "phaser":
              Q(l, new m(u[0], u[1], u[2], u[3], u[4], u[5]));
              break;
            case "gain":
              Q(l, new n(u[0]));
              break;
            case "tremolo":
              Q(l, new v(u[0], u[1]));
              break;
            case "ringmod":
              Q(l, new F(u[0], u[1]));
              break;
            case "distortion":
              Q(l, new A(u[0], u[1], u[2], u[3], u[4]));
              break;
            case "compressor":
              Q(l, new q(u[0], u[1], u[2], u[3], u[4]));
              break;
            case "analyser":
              Q(l, new h(u[0], u[1]));
          }
    f = 0;
    for (k = e.length; f < k; f++)
      3 === this.Ie ||
        ((b = e[f]),
        (g = b.buffersrc),
        (p = b.is_music),
        (l = b.tag),
        (B = b.playbackTime),
        (x = b.looping),
        (C = b.volume),
        (K = (u = b.pan) && u.hasOwnProperty("objUid") ? u.objUid : -1),
        p && 1 === this.Ie) ||
        (!p && 2 === this.Ie) ||
        ((D = this.Up(g, l, p, x, C))
          ? ((D.Ac = b.resume_position),
            D.bo(!!u),
            D.play(x, C, B),
            D.sl(),
            D.Wr(),
            D.Ij(D.Eg || D.ii),
            b.paused && D.pause(),
            b.muted && D.zy(),
            D.Ij(D.Eg || D.ii),
            u &&
              (-1 !== K
                ? ((D.eb = D.eb || new t()), (D.eb.uk = K), ib.push(D.eb))
                : D.ao(u.x, u.y, u.a, u.ia, u.oa, u.og)))
          : ((D = this.Wj(g, p)),
            (D.Wk = B),
            (D.Jk = b.paused),
            u &&
              (-1 !== K
                ? D.Wg.push({
                    Lq: K,
                    Lm: u.ia,
                    pn: u.oa,
                    sn: u.og,
                    Ir: l,
                  })
                : D.Wg.push({
                    x: u.x,
                    y: u.y,
                    Su: u.a,
                    Lm: u.ia,
                    pn: u.oa,
                    sn: u.og,
                    Ir: l,
                  }))));
    if (d && !R) {
      f = 0;
      for (k = G.length; f < k; f++) G[f].pr(!0);
      R = !0;
    } else if (!d && R) {
      f = 0;
      for (k = G.length; f < k; f++) G[f].pr(!1);
      R = !1;
    }
  };
  Ga.Dd = function () {
    var a, c, b, d;
    a = 0;
    for (c = ib.length; a < c; a++)
      (b = ib[a]),
        (d = this.b.Qh(b.uk)),
        b.Ii(d),
        (b.uk = -1),
        d && ((T = d.x), (ua = d.y));
    z(ib);
  };
  Ga.Jx = function (a) {
    if (!this.Nx) {
      !a && y && y.resume && (y.resume(), (va = !1));
      var c, b;
      c = 0;
      for (b = G.length; c < b; c++) G[c].Cy(a);
      a && y && y.suspend && (y.suspend(), (va = !0));
    }
  };
  Ga.Ta = function () {
    var a = this.b.re,
      c,
      b,
      d;
    c = 0;
    for (b = G.length; c < b; c++) (d = G[c]), d.Ta(a), 0 !== O && d.sl();
    var e, h;
    for (e in ha)
      if (ha.hasOwnProperty(e))
        for (d = ha[e], c = 0, b = d.length; c < b; c++)
          (h = d[c]), h.Ta && h.Ta();
    1 === Y &&
      this.rc.dk() &&
      (this.rc.Ta(a),
      (T = this.rc.Z.x),
      (ua = this.rc.Z.y),
      y.listener.setPosition(this.rc.Z.x, this.rc.Z.y, this.oi),
      y.listener.setVelocity(this.rc.Em(), this.rc.Fm(), 0));
  };
  var jb = [];
  Ga.Ay = function (a) {
    var c,
      b,
      d,
      e,
      h,
      f = 0;
    c = 0;
    for (b = a.length; c < b; ++c)
      if (
        ((d = a[c]),
        (e = d[0]),
        (d = 2 * d[1]),
        ((h = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && N) ||
          (!h && !N))
      )
        jb.push({
          filename: e,
          size: d,
          Z: null,
        }),
          (f += d);
    return f;
  };
  Ga.Gy = function () {
    var a, c, b, d;
    a = 0;
    for (c = jb.length; a < c; ++a)
      (b = jb[a]), (d = this.b.qm + b.filename), (b.Z = this.Wj(d, !1));
  };
  Ga.Fw = function () {
    var a = 0,
      c,
      b,
      d;
    c = 0;
    for (b = jb.length; c < b; ++c)
      (d = jb[c]),
        d.Z.kx() || d.Z.Xw() || this.b.La || this.b.fk
          ? (a += d.size)
          : d.Z.oq() && (a += Math.floor(d.size / 2));
    return a;
  };
  Ga.ey = function () {
    var a, c, b, d;
    b = a = 0;
    for (c = L.length; a < c; ++a) (d = L[a]), (L[b] = d), d.dd ? d.cy() : ++b;
    L.length = b;
  };
  Ga.Wj = function (a, c) {
    var b,
      d,
      e,
      h = null;
    b = 0;
    for (d = L.length; b < d; b++)
      if (((e = L[b]), e.src === a)) {
        h = e;
        break;
      }
    h || (fb && c && this.ey(), (h = new B(a, c)), L.push(h));
    return h;
  };
  Ga.Up = function (a, c, b, d, e) {
    var h, f, k;
    h = 0;
    for (f = G.length; h < f; h++)
      if (((k = G[h]), k.src === a && (k.pv() || b))) return (k.tag = c), k;
    a = this.Wj(a, b);
    if (!a.za)
      return "<preload>" !== c && ((a.Lk = c), (a.hn = d), (a.uo = e)), null;
    k = new C(a, c);
    G.push(k);
    return k;
  };
  var Fa = [];
  J.prototype.hj = function (a) {
    return ob(x, a);
  };
  J.prototype.Ws = function (a) {
    D(a);
    var c;
    a = 0;
    for (c = Fa.length; a < c; a++) if (Fa[a].jf()) return !0;
    return !1;
  };
  U.k = new J();
  M.prototype.Qt = function (a, c, b, d, e) {
    !R &&
      ((d = g(d)),
      (V = this.Up(
        this.b.qm + c.toLowerCase() + (N ? ".ogg" : ".m4a"),
        e,
        1 === a,
        0 !== b,
        d
      ))) &&
      (V.bo(!1), V.play(0 !== b, d, 0, this.Hq), (this.Hq = 0));
  };
  M.prototype.Ll = function (a) {
    D(a);
    var c;
    a = 0;
    for (c = Fa.length; a < c; a++) Fa[a].stop();
  };
  M.prototype.Fu = function () {
    var a, c;
    a = 0;
    for (c = G.length; a < c; a++) G[a].stop();
  };
  M.prototype.ju = function (a) {
    ga = g(a);
    var c;
    a = 0;
    for (c = G.length; a < c; a++) G[a].Wr();
  };
  U.u = new M();
  X.prototype.Bl = function (a, c) {
    D(c, !0);
    Fa.length ? a.F(Fa[0].gf()) : a.F(0);
  };
  X.prototype.dt = function (a) {
    a.F(l(ga));
  };
  U.D = new X();
})();
function S(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  function d(b) {
    console && console.warn && console.warn("Fullscreen request failed: ", b);
    p.setSize(window.innerWidth, window.innerHeight);
  }
  var f = S.prototype;
  f.L = function (b) {
    this.ra = b;
    this.b = b.b;
  };
  f.L.prototype.I = function () {};
  f.J = function (b) {
    this.type = b;
    this.b = b.b;
  };
  f.J.prototype.I = function () {
    var b = this;
    window.addEventListener("resize", function () {
      b.b.trigger(S.prototype.k.bp, b);
    });
    "undefined" !== typeof navigator.onLine &&
      (window.addEventListener("online", function () {
        b.b.trigger(S.prototype.k.Ct, b);
      }),
      window.addEventListener("offline", function () {
        b.b.trigger(S.prototype.k.Bt, b);
      }));
    "undefined" !== typeof window.applicationCache &&
      (window.applicationCache.addEventListener("updateready", function () {
        b.b.Vf = 1;
        b.b.trigger(S.prototype.k.fp, b);
      }),
      window.applicationCache.addEventListener("progress", function (d) {
        b.b.Vf = d.loaded / d.total || 0;
      }));
    this.b.Qb ||
      (document.addEventListener(
        "appMobi.device.update.available",
        function () {
          b.b.trigger(S.prototype.k.fp, b);
        }
      ),
      document.addEventListener("backbutton", function () {
        b.b.trigger(S.prototype.k.sh, b);
      }),
      document.addEventListener("menubutton", function () {
        b.b.trigger(S.prototype.k.Wo, b);
      }),
      document.addEventListener("searchbutton", function () {
        b.b.trigger(S.prototype.k.Ht, b);
      }),
      document.addEventListener("tizenhwkey", function (d) {
        var e;
        switch (d.keyName) {
          case "back":
            e = b.b.trigger(S.prototype.k.sh, b);
            !e &&
              window.tizen &&
              window.tizen.application.getCurrentApplication().exit();
            break;
          case "menu":
            (e = b.b.trigger(S.prototype.k.Wo, b)) || d.preventDefault();
        }
      }));
    this.b.hk && "undefined" !== typeof Windows
      ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener(
          "backrequested",
          function (d) {
            b.b.trigger(S.prototype.k.sh, b) && (d.ck = !0);
          }
        )
      : this.b.hi &&
        WinJS.Application &&
        (WinJS.Application.onbackclick = function () {
          return !!b.b.trigger(S.prototype.k.sh, b);
        });
    this.b.sp(function (d) {
      d ? b.b.trigger(S.prototype.k.Dt, b) : b.b.trigger(S.prototype.k.Et, b);
    });
    this.qq = "undefined" !== typeof window.is_scirra_arcade;
  };
  g.prototype.Ct = function () {
    return !0;
  };
  g.prototype.Bt = function () {
    return !0;
  };
  g.prototype.fp = function () {
    return !0;
  };
  g.prototype.Et = function () {
    return !0;
  };
  g.prototype.Dt = function () {
    return !0;
  };
  g.prototype.bp = function () {
    return !0;
  };
  g.prototype.Ms = function () {
    return !!(
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.fullScreen ||
      this.b.Od
    );
  };
  g.prototype.sh = function () {
    return !0;
  };
  g.prototype.Wo = function () {
    return !0;
  };
  g.prototype.Ht = function () {
    return !0;
  };
  g.prototype.Ts = function (b) {
    return (window.innerWidth <= window.innerHeight ? 0 : 1) === b;
  };
  f.k = new g();
  l.prototype.ms = function () {
    this.b.vc
      ? CocoonJS.App.forceToFinish()
      : window.tizen
      ? window.tizen.application.getCurrentApplication().exit()
      : navigator.app && navigator.app.exitApp
      ? navigator.app.exitApp()
      : navigator.device && navigator.device.exitApp
      ? navigator.device.exitApp()
      : this.qq || this.b.La || window.close();
  };
  l.prototype.Ds = function (b, d) {
    this.b.vc
      ? CocoonJS.App.openURL(b)
      : this.b.bd
      ? ejecta.openURL(b)
      : this.b.hi
      ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(b))
      : navigator.app && navigator.app.loadUrl
      ? navigator.app.loadUrl(b, {
          openExternal: !0,
        })
      : this.b.ec
      ? window.open(b, "_system")
      : this.qq || this.b.La || window.open(b, d);
  };
  var e = !0,
    p = null;
  l.prototype.Vt = function (b) {
    this.b.La
      ? fa(
          "[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored"
        )
      : (2 <= b && (b += 1),
        6 === b && (b = 2),
        this.b.gk
          ? this.b.nq
            ? debuggerFullscreen(!0)
            : !this.b.Od &&
              window.nwgui &&
              (window.nwgui.Window.get().enterFullscreen(),
              (this.b.Od = !0),
              (this.b.we = 2 <= b ? b : 0))
          : document.mozFullScreen ||
            document.webkitIsFullScreen ||
            document.msFullscreenElement ||
            document.fullScreen ||
            document.fullScreenElement ||
            ((this.b.we = 2 <= b ? b : 0),
            (b = this.b.Zl || this.b.canvas),
            e &&
              ((e = !1),
              (p = this.b),
              b.addEventListener("mozfullscreenerror", d),
              b.addEventListener("webkitfullscreenerror", d),
              b.addEventListener("MSFullscreenError", d),
              b.addEventListener("fullscreenerror", d)),
            b.requestFullscreen
              ? b.requestFullscreen()
              : b.mozRequestFullScreen
              ? b.mozRequestFullScreen()
              : b.msRequestFullscreen
              ? b.msRequestFullscreen()
              : b.webkitRequestFullScreen &&
                ("undefined" !== typeof Element &&
                "undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT
                  ? b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                  : b.webkitRequestFullScreen())));
  };
  l.prototype.js = function () {
    this.b.La
      ? fa(
          "[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored"
        )
      : this.b.gk
      ? this.b.nq
        ? debuggerFullscreen(!1)
        : this.b.Od &&
          window.nwgui &&
          (window.nwgui.Window.get().leaveFullscreen(), (this.b.Od = !1))
      : document.exitFullscreen
      ? document.exitFullscreen()
      : document.mozCancelFullScreen
      ? document.mozCancelFullScreen()
      : document.msExitFullscreen
      ? document.msExitFullscreen()
      : document.webkitCancelFullScreen && document.webkitCancelFullScreen();
  };
  l.prototype.xs = function (b) {
    try {
      eval && eval(b);
    } catch (d) {
      console &&
        console.error &&
        console.error("Error executing Javascript: ", d);
    }
  };
  f.u = new l();
  f.D = new (function () {})();
})();
function mc(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  function d() {}
  var f = mc.prototype;
  f.L = function (d) {
    this.ra = d;
    this.b = d.b;
  };
  f.L.prototype.I = function () {};
  f.J = function (d) {
    this.type = d;
    this.b = d.b;
  };
  var e = f.J.prototype;
  e.I = function () {
    this.Ec = {};
    this.Hg = 0;
  };
  e.Sa = function () {
    return this.Ec;
  };
  e.cb = function (d) {
    this.Ec = d;
    this.Hg = 0;
    for (var b in this.Ec) this.Ec.hasOwnProperty(b) && this.Hg++;
  };
  g.prototype.Al = function (d, b, e) {
    return gc(this.Ec[d], b, e);
  };
  g.prototype.Es = function (d) {
    return this.Ec.hasOwnProperty(d);
  };
  g.prototype.Ls = function () {
    return 0 === this.Hg;
  };
  f.k = new g();
  l.prototype.bs = function (d, b) {
    this.Ec.hasOwnProperty(d) || this.Hg++;
    this.Ec[d] = b;
  };
  l.prototype.$s = function (d) {
    var b;
    try {
      b = JSON.parse(d);
    } catch (e) {
      return;
    }
    if (b.c2dictionary) {
      this.Ec = b.data;
      this.Hg = 0;
      for (var f in this.Ec) this.Ec.hasOwnProperty(f) && this.Hg++;
    }
  };
  f.u = new l();
  d.prototype.As = function (d, b) {
    this.Ec.hasOwnProperty(b) ? d.Li(this.Ec[b]) : d.wa(0);
  };
  d.prototype.yl = function (d) {
    d.Ib(
      JSON.stringify({
        c2dictionary: !0,
        data: this.Ec,
      })
    );
  };
  f.D = new d();
})();
function jc(g) {
  this.b = g;
}
(function () {
  function g() {
    this.name = "";
    this.Yg = 0;
    this.ib = [];
  }
  function l() {
    w++;
    w === k.length && k.push(new g());
    return k[w];
  }
  function d() {
    return 0 > w ? null : k[w];
  }
  function f() {}
  function e() {}
  function p() {}
  var b = jc.prototype;
  b.L = function (b) {
    this.ra = b;
    this.b = b.b;
  };
  b.L.prototype.I = function () {};
  b.J = function (b) {
    this.type = b;
    this.b = b.b;
  };
  var k = [],
    w = -1;
  b.J.prototype.I = function () {
    var b = this;
    window.c2_callFunction = function (a, c) {
      var d,
        e,
        f,
        k = l();
      k.name = a.toLowerCase();
      k.Yg = 0;
      if (c)
        for (k.ib.length = c.length, d = 0, e = c.length; d < e; ++d)
          (f = c[d]),
            (k.ib[d] =
              "number" === typeof f || "string" === typeof f
                ? f
                : "boolean" === typeof f
                ? f
                  ? 1
                  : 0
                : 0);
      else z(k.ib);
      b.b.trigger(jc.prototype.k.ij, b, k.name);
      w--;
      return k.Yg;
    };
  };
  f.prototype.ij = function (b) {
    var a = d();
    return a ? ob(b, a.name) : !1;
  };
  f.prototype.os = function (b, a, c) {
    var e = d();
    if (!e) return !1;
    b = qa(b);
    return 0 > b || b >= e.ib.length ? !1 : gc(e.ib[b], a, c);
  };
  b.k = new f();
  e.prototype.CallFunction = function (b, a) {
    var c = l();
    c.name = b.toLowerCase();
    c.Yg = 0;
    Ba(c.ib, a);
    this.b.trigger(jc.prototype.k.ij, this, c.name);
    w--;
  };
  e.prototype.ou = function (b) {
    var a = d();
    a && (a.Yg = b);
  };
  b.u = new e();
  p.prototype.Mt = function (b, a) {
    a = qa(a);
    var c = d();
    c ? (0 <= a && a < c.ib.length ? b.Li(c.ib[a]) : b.wa(0)) : b.wa(0);
  };
  p.prototype.Eo = function (b, a) {
    var c = l();
    c.name = a.toLowerCase();
    c.Yg = 0;
    z(c.ib);
    var d, e;
    d = 2;
    for (e = arguments.length; d < e; d++) c.ib.push(arguments[d]);
    this.b.trigger(jc.prototype.k.ij, this, c.name);
    w--;
    b.Li(c.Yg);
  };
  b.D = new p();
})();
function nc(g) {
  this.b = g;
}
(function () {
  function g() {}
  var l = nc.prototype;
  l.L = function (d) {
    this.ra = d;
    this.b = d.b;
  };
  l.L.prototype.I = function () {};
  l.J = function (d) {
    this.type = d;
    this.b = d.b;
    this.mi = Array(256);
    this.Yi = Array(256);
    this.Ne = 0;
  };
  var d = l.J.prototype;
  d.I = function () {
    var d = this;
    this.b.La ||
      (jQuery(document).keydown(function (f) {
        d.Hx(f);
      }),
      jQuery(document).keyup(function (f) {
        d.Ix(f);
      }));
  };
  var f = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
  d.Hx = function (d) {
    var g = !1;
    window != window.top &&
      -1 < f.indexOf(d.which) &&
      (d.preventDefault(), (g = !0), d.stopPropagation());
    if (this.mi[d.which]) this.Yi[d.which] && !g && d.preventDefault();
    else {
      this.mi[d.which] = !0;
      this.Ne = d.which;
      this.b.bb = !0;
      this.b.trigger(nc.prototype.k.Ko, this);
      var b = this.b.trigger(nc.prototype.k.xt, this),
        k = this.b.trigger(nc.prototype.k.yt, this);
      this.b.bb = !1;
      if (b || k) (this.Yi[d.which] = !0), g || d.preventDefault();
    }
  };
  d.Ix = function (d) {
    this.mi[d.which] = !1;
    this.Ne = d.which;
    this.b.bb = !0;
    this.b.trigger(nc.prototype.k.Lo, this);
    var f = this.b.trigger(nc.prototype.k.Uo, this),
      b = this.b.trigger(nc.prototype.k.To, this);
    this.b.bb = !1;
    if (f || b || this.Yi[d.which]) (this.Yi[d.which] = !0), d.preventDefault();
  };
  d.Vg = function () {
    var d;
    for (d = 0; 256 > d; ++d)
      if (this.mi[d]) {
        this.mi[d] = !1;
        this.Ne = d;
        this.b.trigger(nc.prototype.k.Lo, this);
        var f = this.b.trigger(nc.prototype.k.Uo, this),
          b = this.b.trigger(nc.prototype.k.To, this);
        if (f || b) this.Yi[d] = !0;
      }
  };
  d.Sa = function () {
    return {
      triggerKey: this.Ne,
    };
  };
  d.cb = function (d) {
    this.Ne = d.triggerKey;
  };
  g.prototype.xt = function (d) {
    return d === this.Ne;
  };
  g.prototype.Ko = function () {
    return !0;
  };
  g.prototype.Lo = function () {
    return !0;
  };
  g.prototype.Uo = function (d) {
    return d === this.Ne;
  };
  g.prototype.yt = function (d) {
    return d === this.Ne;
  };
  g.prototype.To = function (d) {
    return d === this.Ne;
  };
  l.k = new g();
  l.u = new (function () {})();
  l.D = new (function () {})();
})();
var oc = !1;
try {
  !(function () {
    var g, l, d;
    !(function () {
      var f = {},
        e = {};
      g = function (d, b, e) {
        f[d] = {
          yv: b,
          ov: e,
        };
      };
      d = l = function (g) {
        function b(a) {
          if ("." !== a.charAt(0)) return a;
          a = a.split("/");
          for (
            var c = g.split("/").slice(0, -1), b = 0, d = a.length;
            d > b;
            b++
          ) {
            var e = a[b];
            ".." === e ? c.pop() : "." !== e && c.push(e);
          }
          return c.join("/");
        }
        if (((d.Uz = f), e[g])) return e[g];
        if (((e[g] = {}), !f[g])) throw Error("Could not find module " + g);
        for (
          var k, w = f[g], r = w.yv, w = w.ov, a = [], c = 0, m = r.length;
          m > c;
          c++
        )
          "exports" === r[c] ? a.push((k = {})) : a.push(l(b(r[c])));
        r = w.apply(this, a);
        return (e[g] = k || r);
      };
    })();
    g("promise/all", ["./utils", "exports"], function (d, e) {
      var g = d.isArray,
        b = d.isFunction;
      e.all = function (d) {
        if (!g(d)) throw new TypeError("You must pass an array to all.");
        return new this(function (e, f) {
          function a(a) {
            return function (c) {
              g[a] = c;
              0 === --p && e(g);
            };
          }
          var c,
            g = [],
            p = d.length;
          0 === p && e([]);
          for (var l = 0; l < d.length; l++)
            (c = d[l]) && b(c.then)
              ? c.then(a(l), f)
              : ((g[l] = c), 0 === --p && e(g));
        });
      };
    });
    g("promise/asap", ["exports"], function (d) {
      function e() {
        return function () {
          process.pA(k);
        };
      }
      function g() {
        var c = 0,
          b = new a(k),
          d = document.createTextNode("");
        return (
          b.observe(d, {
            characterData: !0,
          }),
          function () {
            d.data = c = ++c % 2;
          }
        );
      }
      function b() {
        return function () {
          c.setTimeout(k, 1);
        };
      }
      function k() {
        for (var a = 0; a < m.length; a++) {
          var c = m[a];
          (0, c[0])(c[1]);
        }
        m = [];
      }
      var l,
        r = "undefined" != typeof window ? window : {},
        a = r.MutationObserver || r.WebKitMutationObserver,
        c =
          "undefined" != typeof global
            ? global
            : void 0 === this
            ? window
            : this,
        m = [];
      l =
        "undefined" != typeof process &&
        "[object process]" === {}.toString.call(process)
          ? e()
          : a
          ? g()
          : b();
      d.cv = function (a, c) {
        1 === m.push([a, c]) && l();
      };
    });
    g("promise/config", ["exports"], function (d) {
      var e = {
        iA: !1,
      };
      d.Gp = e;
      d.sv = function (d, b) {
        return 2 !== arguments.length ? e[d] : void (e[d] = b);
      };
    });
    g(
      "promise/polyfill",
      ["./promise", "./utils", "exports"],
      function (d, e, g) {
        var b = d.Promise,
          k = e.isFunction;
        g.Ox = function () {
          var d;
          d =
            "undefined" != typeof global
              ? global
              : "undefined" != typeof window && window.document
              ? window
              : self;
          ("Promise" in d &&
            "resolve" in d.Promise &&
            "reject" in d.Promise &&
            "all" in d.Promise &&
            "race" in d.Promise &&
            (function () {
              var b;
              return (
                new d.Promise(function (a) {
                  b = a;
                }),
                k(b)
              );
            })()) ||
            (d.Promise = b);
        };
      }
    );
    g(
      "promise/promise",
      "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(
        " "
      ),
      function (d, e, g, b, k, l, r, a) {
        function c(a) {
          if (!Q(a))
            throw new TypeError(
              "You must pass a resolver function as the first argument to the promise constructor"
            );
          if (!(this instanceof c))
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            );
          this.lj = [];
          m(a, this);
        }
        function m(a, c) {
          function b(a) {
            q(c, a);
          }
          function d(a) {
            t(c, a);
          }
          try {
            a(b, d);
          } catch (e) {
            d(e);
          }
        }
        function n(a, c, b, d) {
          var e,
            h,
            f,
            k,
            g = Q(b);
          if (g)
            try {
              (e = b(d)), (f = !0);
            } catch (p) {
              (k = !0), (h = p);
            }
          else (e = d), (f = !0);
          A(c, e) ||
            (g && f
              ? q(c, e)
              : k
              ? t(c, h)
              : a === X
              ? q(c, e)
              : a === U && t(c, e));
        }
        function v(a, c, b, d) {
          a = a.lj;
          var e = a.length;
          a[e] = c;
          a[e + X] = b;
          a[e + U] = d;
        }
        function F(a, c) {
          for (var b, d, e = a.lj, h = a.kj, f = 0; f < e.length; f += 3)
            (b = e[f]), (d = e[f + c]), n(c, b, d, h);
          a.lj = null;
        }
        function A(a, c) {
          var b,
            d = null;
          try {
            if (a === c)
              throw new TypeError(
                "A promises callback cannot return that same promise."
              );
            if (D(c) && ((d = c.then), Q(d)))
              return (
                d.call(
                  c,
                  function (d) {
                    return b
                      ? !0
                      : ((b = !0), void (c !== d ? q(a, d) : h(a, d)));
                  },
                  function (c) {
                    return b ? !0 : ((b = !0), void t(a, c));
                  }
                ),
                !0
              );
          } catch (e) {
            return b ? !0 : (t(a, e), !0);
          }
          return !1;
        }
        function q(a, c) {
          a === c ? h(a, c) : A(a, c) || h(a, c);
        }
        function h(a, c) {
          a.ge === J && ((a.ge = M), (a.kj = c), I.async(B, a));
        }
        function t(a, c) {
          a.ge === J && ((a.ge = M), (a.kj = c), I.async(C, a));
        }
        function B(a) {
          F(a, (a.ge = X));
        }
        function C(a) {
          F(a, (a.ge = U));
        }
        var I = d.Gp,
          D = (d.sv, e.Cx),
          Q = e.isFunction;
        d = (e.now, g.all);
        b = b.race;
        k = k.resolve;
        l = l.reject;
        I.async = r.cv;
        var J = void 0,
          M = 0,
          X = 1,
          U = 2;
        c.prototype = {
          constructor: c,
          ge: void 0,
          kj: void 0,
          lj: void 0,
          then: function (a, c) {
            var b = this,
              d = new this.constructor(function () {});
            if (this.ge) {
              var e = arguments;
              I.async(function () {
                n(b.ge, d, e[b.ge - 1], b.kj);
              });
            } else v(this, d, a, c);
            return d;
          },
          catch: function (a) {
            return this.then(null, a);
          },
        };
        c.all = d;
        c.race = b;
        c.resolve = k;
        c.reject = l;
        a.Promise = c;
      }
    );
    g("promise/race", ["./utils", "exports"], function (d, e) {
      var g = d.isArray;
      e.race = function (b) {
        if (!g(b)) throw new TypeError("You must pass an array to race.");
        return new this(function (d, e) {
          for (var f, a = 0; a < b.length; a++)
            (f = b[a]) && "function" == typeof f.then ? f.then(d, e) : d(f);
        });
      };
    });
    g("promise/reject", ["exports"], function (d) {
      d.reject = function (d) {
        return new this(function (f, b) {
          b(d);
        });
      };
    });
    g("promise/resolve", ["exports"], function (d) {
      d.resolve = function (d) {
        return d && "object" == typeof d && d.constructor === this
          ? d
          : new this(function (f) {
              f(d);
            });
      };
    });
    g("promise/utils", ["exports"], function (d) {
      function e(b) {
        return "function" == typeof b;
      }
      var g =
        Date.now ||
        function () {
          return new Date().getTime();
        };
      d.Cx = function (b) {
        return e(b) || ("object" == typeof b && null !== b);
      };
      d.isFunction = e;
      d.isArray = function (b) {
        return "[object Array]" === Object.prototype.toString.call(b);
      };
      d.now = g;
    });
    l("promise/polyfill").Ox();
  })();
  var pc = function () {
    return (function (g) {
      function l(f) {
        if (d[f]) return d[f].Fd;
        var e = (d[f] = {
          Fd: {},
          id: f,
          loaded: !1,
        });
        return g[f].call(e.Fd, e, e.Fd, l), (e.loaded = !0), e.Fd;
      }
      var d = {};
      return (l.Bh = g), (l.Ch = d), (l.Zm = ""), l(0);
    })([
      function (g, l, d) {
        l.jj = !0;
        var f = (function (e) {
          function f(a, c) {
            a[c] = function () {
              var b = arguments;
              return a.ready().then(function () {
                return a[c].apply(a, b);
              });
            };
          }
          function b() {
            for (var a = 1; a < arguments.length; a++) {
              var c = arguments[a];
              if (c)
                for (var b in c)
                  c.hasOwnProperty(b) &&
                    (n(c[b])
                      ? (arguments[0][b] = c[b].slice())
                      : (arguments[0][b] = c[b]));
            }
            return arguments[0];
          }
          function k(a) {
            for (var c in l) if (l.hasOwnProperty(c) && l[c] === a) return !0;
            return !1;
          }
          var g = {},
            l = {
              qh: "asyncStorage",
              rh: "localStorageWrapper",
              vh: "webSQLStorage",
            },
            a =
              "clear getItem iterate key keys length removeItem setItem".split(
                " "
              ),
            c = {
              description: "",
              rg: [l.qh, l.vh, l.rh].slice(),
              name: "localforage",
              size: 4980736,
              Fa: "keyvaluepairs",
              version: 1,
            },
            m = (function (a) {
              var c = {},
                b;
              try {
                var d =
                  d ||
                  a.indexedDB ||
                  a.webkitIndexedDB ||
                  a.mozIndexedDB ||
                  a.uq ||
                  a.msIndexedDB;
                b =
                  "undefined" != typeof a.openDatabase &&
                  a.navigator &&
                  a.navigator.userAgent &&
                  /Safari/.test(a.navigator.userAgent) &&
                  !/Chrome/.test(a.navigator.userAgent)
                    ? !1
                    : d &&
                      "function" == typeof d.open &&
                      "undefined" != typeof a.IDBKeyRange;
              } catch (e) {
                b = !1;
              }
              c[l.qh] = !!b;
              var f;
              try {
                f = a.openDatabase;
              } catch (k) {
                f = !1;
              }
              c[l.vh] = !!f;
              var g;
              try {
                g =
                  a.localStorage &&
                  "setItem" in a.localStorage &&
                  a.localStorage.setItem;
              } catch (p) {
                g = !1;
              }
              return (c[l.rh] = !!g), c;
            })(e),
            n =
              Array.isArray ||
              function (a) {
                return "[object Array]" === Object.prototype.toString.call(a);
              };
          return new ((function () {
            function e(a) {
              if (!(this instanceof e))
                throw new TypeError("Cannot call a class as a function");
              this.qh = l.qh;
              this.rh = l.rh;
              this.vh = l.vh;
              this.Ol = b({}, c);
              this.zf = b({}, this.Ol, a);
              this.lp = this.Cd = null;
              this.Se = !1;
              this.Ca = null;
              this.mp();
              this.nr(this.zf.rg);
            }
            return (
              (e.prototype.Gp = function (a) {
                if ("object" == typeof a) {
                  if (this.Se)
                    return Error(
                      "Can't call config() after localforage has been used."
                    );
                  for (var c in a)
                    "storeName" === c && (a[c] = a[c].replace(/\W/g, "_")),
                      (this.zf[c] = a[c]);
                  return "driver" in a && a.rg && this.nr(this.zf.rg), !0;
                }
                return "string" == typeof a ? this.zf[a] : this.zf;
              }),
              (e.prototype.rg = function () {
                return this.wh || null;
              }),
              (e.prototype.Xp = function (a, c, b) {
                var e = this,
                  f = (function () {
                    if (k(a))
                      switch (a) {
                        case e.qh:
                          return new Promise(function (a) {
                            a(d(1));
                          });
                        case e.rh:
                          return new Promise(function (a) {
                            a(d(2));
                          });
                        case e.vh:
                          return new Promise(function (a) {
                            a(d(4));
                          });
                      }
                    else if (g[a]) return Promise.resolve(g[a]);
                    return Promise.reject(Error("Driver not found."));
                  })();
                return f.then(c, b), f;
              }),
              (e.prototype.ready = function (a) {
                var c = this,
                  b = c.Cd.then(function () {
                    return null === c.Se && (c.Se = c.lp()), c.Se;
                  });
                return b.then(a, a), b;
              }),
              (e.prototype.nr = function (a, c, b) {
                function d() {
                  f.zf.rg = f.rg();
                }
                function e(a) {
                  return function () {
                    function c() {
                      for (; b < a.length; ) {
                        var e = a[b];
                        return (
                          b++,
                          (f.Ca = null),
                          (f.Se = null),
                          f
                            .Xp(e)
                            .then(function (a) {
                              return f.Qu(a), d(), (f.Se = f.Ql(f.zf)), f.Se;
                            })
                            ["catch"](c)
                        );
                      }
                      d();
                      return (
                        (f.Cd = Promise.reject(
                          Error("No available storage method found.")
                        )),
                        f.Cd
                      );
                    }
                    var b = 0;
                    return c();
                  };
                }
                var f = this;
                n(a) || (a = [a]);
                var k = this.Ru(a);
                return (
                  (this.Cd = (
                    null !== this.Cd
                      ? this.Cd["catch"](function () {
                          return Promise.resolve();
                        })
                      : Promise.resolve()
                  )
                    .then(function () {
                      var a = k[0];
                      return (
                        (f.Ca = null),
                        (f.Se = null),
                        f.Xp(a).then(function (a) {
                          f.wh = a.wh;
                          d();
                          f.mp();
                          f.lp = e(k);
                        })
                      );
                    })
                    ["catch"](function () {
                      d();
                      return (
                        (f.Cd = Promise.reject(
                          Error("No available storage method found.")
                        )),
                        f.Cd
                      );
                    })),
                  this.Cd.then(c, b),
                  this.Cd
                );
              }),
              (e.prototype.supports = function (a) {
                return !!m[a];
              }),
              (e.prototype.Qu = function (a) {
                b(this, a);
              }),
              (e.prototype.Ru = function (a) {
                for (var c = [], b = 0, d = a.length; d > b; b++) {
                  var e = a[b];
                  this.supports(e) && c.push(e);
                }
                return c;
              }),
              (e.prototype.mp = function () {
                for (var c = 0; c < a.length; c++) f(this, a[c]);
              }),
              (e.prototype.hm = function (a) {
                return new e(a);
              }),
              e
            );
          })())();
        })("undefined" != typeof window ? window : self);
        l["default"] = f;
        g.Fd = l["default"];
      },
      function (g, l) {
        l.jj = !0;
        l["default"] = (function (d) {
          function f(a, c) {
            a = a || [];
            c = c || {};
            try {
              return new Blob(a, c);
            } catch (b) {
              if ("TypeError" !== b.name) throw b;
              for (
                var e = new (d.BlobBuilder ||
                    d.Bh ||
                    d.Zm ||
                    d.WebKitBlobBuilder)(),
                  h = 0;
                h < a.length;
                h += 1
              )
                e.append(a[h]);
              return e.getBlob(c.type);
            }
          }
          function e(a) {
            return new Promise(function (c, b) {
              var d = new XMLHttpRequest();
              d.open("GET", a);
              d.withCredentials = !0;
              d.responseType = "arraybuffer";
              d.onreadystatechange = function () {
                return 4 === d.readyState
                  ? 200 === d.status
                    ? c({
                        response: d.response,
                        type: d.getResponseHeader("Content-Type"),
                      })
                    : void b({
                        status: d.status,
                        response: d.response,
                      })
                  : void 0;
              };
              d.send();
            });
          }
          function g(a) {
            return new Promise(function (c, b) {
              var d = f([""], {
                  type: "image/png",
                }),
                h = a.transaction([J], "readwrite");
              h.objectStore(J).put(d, "key");
              h.oncomplete = function () {
                var d = a
                  .transaction([J], "readwrite")
                  .objectStore(J)
                  .get("key");
                d.onerror = b;
                d.onsuccess = function (a) {
                  var b = URL.createObjectURL(a.target.result);
                  e(b)
                    .then(
                      function (a) {
                        c(!(!a || "image/png" !== a.type));
                      },
                      function () {
                        c(!1);
                      }
                    )
                    .then(function () {
                      URL.revokeObjectURL(b);
                    });
                };
              };
              h.onerror = h.onabort = b;
            })["catch"](function () {
              return !1;
            });
          }
          function b(a) {
            return "boolean" == typeof D
              ? Promise.resolve(D)
              : g(a).then(function (a) {
                  return (D = a);
                });
          }
          function k(a) {
            return new Promise(function (c, b) {
              var d = new FileReader();
              d.onerror = b;
              d.onloadend = function (b) {
                c({
                  kp: !0,
                  data: btoa(b.target.result || ""),
                  type: a.type,
                });
              };
              d.readAsBinaryString(a);
            });
          }
          function l(a) {
            for (
              var c = atob(a.data),
                b = c.length,
                d = new ArrayBuffer(b),
                e = new Uint8Array(d),
                h = 0;
              b > h;
              h++
            )
              e[h] = c.charCodeAt(h);
            return f([d], {
              type: a.type,
            });
          }
          function r(a) {
            var c = this,
              b = c.Pl().then(function () {
                var a = Q[c.Ca.name];
                return a && a.qg ? a.qg : void 0;
              });
            return b.then(a, a), b;
          }
          function a(a) {
            a = Q[a.name];
            var c = {};
            c.promise = new Promise(function (a) {
              c.resolve = a;
            });
            a.Ip.push(c);
            a.qg
              ? (a.qg = a.qg.then(function () {
                  return c.promise;
                }))
              : (a.qg = c.promise);
          }
          function c(a) {
            function c() {
              return Promise.resolve();
            }
            var b = this,
              e = {
                db: null,
              };
            if (a) for (var h in a) e[h] = a[h];
            Q || (Q = {});
            var f = Q[e.name];
            f ||
              ((f = {
                Sj: [],
                db: null,
                qg: null,
                Ip: [],
              }),
              (Q[e.name] = f));
            f.Sj.push(b);
            b.Pl || ((b.Pl = b.ready), (b.ready = r));
            a = [];
            for (h = 0; h < f.Sj.length; h++) {
              var k = f.Sj[h];
              k !== b && a.push(k.Pl()["catch"](c));
            }
            var g = f.Sj.slice(0);
            return Promise.all(a)
              .then(function () {
                return (e.db = f.db), m(e, !1);
              })
              .then(function (a) {
                e.db = a;
                var c;
                c = b.Ol.version;
                if (e.db) {
                  var h = !e.db.objectStoreNames.contains(e.Fa),
                    f = e.version > e.db.version;
                  (e.version < e.db.version &&
                    (e.version !== c &&
                      d.console.warn(
                        'The database "' +
                          e.name +
                          "\" can't be downgraded from version " +
                          e.db.version +
                          " to version " +
                          e.version +
                          "."
                      ),
                    (e.version = e.db.version)),
                  f || h)
                    ? (h &&
                        ((c = e.db.version + 1),
                        c > e.version && (e.version = c)),
                      (c = !0))
                    : (c = !1);
                } else c = !0;
                return c ? m(e, !0) : a;
              })
              .then(function (a) {
                e.db = f.db = a;
                b.Ca = e;
                for (a = 0; a < g.length; a++) {
                  var c = g[a];
                  c !== b && ((c.Ca.db = e.db), (c.Ca.version = e.version));
                }
              });
          }
          function m(c, b) {
            return new Promise(function (e, h) {
              if (c.db) {
                if (!b) return e(c.db);
                a(c);
                c.db.close();
              }
              var f = [c.name];
              b && f.push(c.version);
              var k = I.open.apply(I, f);
              b &&
                (k.onupgradeneeded = function (a) {
                  var b = k.result;
                  try {
                    b.createObjectStore(c.Fa),
                      1 >= a.oldVersion && b.createObjectStore(J);
                  } catch (e) {
                    if ("ConstraintError" !== e.name) throw e;
                    d.console.warn(
                      'The database "' +
                        c.name +
                        '" has been upgraded from version ' +
                        a.oldVersion +
                        " to version " +
                        a.newVersion +
                        ', but the storage "' +
                        c.Fa +
                        '" already exists.'
                    );
                  }
                });
              k.onerror = function () {
                h(k.error);
              };
              k.onsuccess = function () {
                e(k.result);
                var a = Q[c.name].Ip.pop();
                a && a.resolve();
              };
            });
          }
          function n(a, c) {
            var b = this;
            "string" != typeof a &&
              (d.console.warn(a + " used as a key, but it is not a string."),
              (a = String(a)));
            var e = new Promise(function (c, d) {
              b.ready()
                .then(function () {
                  var e = b.Ca,
                    h = e.db
                      .transaction(e.Fa, "readonly")
                      .objectStore(e.Fa)
                      .get(a);
                  h.onsuccess = function () {
                    var a = h.result;
                    void 0 === a && (a = null);
                    a && a.kp && (a = l(a));
                    c(a);
                  };
                  h.onerror = function () {
                    d(h.error);
                  };
                })
                ["catch"](d);
            });
            return C(e, c), e;
          }
          function v(a, c) {
            var b = this,
              d = new Promise(function (c, d) {
                b.ready()
                  .then(function () {
                    var e = b.Ca,
                      h = e.db
                        .transaction(e.Fa, "readonly")
                        .objectStore(e.Fa)
                        .openCursor(),
                      f = 1;
                    h.onsuccess = function () {
                      var b = h.result;
                      if (b) {
                        var d = b.value;
                        d && d.kp && (d = l(d));
                        d = a(d, b.key, f++);
                        void 0 !== d ? c(d) : b["continue"]();
                      } else c();
                    };
                    h.onerror = function () {
                      d(h.error);
                    };
                  })
                  ["catch"](d);
              });
            return C(d, c), d;
          }
          function F(a, c, e) {
            var h = this;
            "string" != typeof a &&
              (d.console.warn(a + " used as a key, but it is not a string."),
              (a = String(a)));
            var f = new Promise(function (d, e) {
              var f;
              h.ready()
                .then(function () {
                  return (
                    (f = h.Ca),
                    c instanceof Blob
                      ? b(f.db).then(function (a) {
                          return a ? c : k(c);
                        })
                      : c
                  );
                })
                .then(function (c) {
                  var b = f.db.transaction(f.Fa, "readwrite"),
                    h = b.objectStore(f.Fa);
                  null === c && (c = void 0);
                  b.oncomplete = function () {
                    void 0 === c && (c = null);
                    d(c);
                  };
                  b.onabort = b.onerror = function () {
                    e(k.error ? k.error : k.transaction.error);
                  };
                  var k = h.put(c, a);
                })
                ["catch"](e);
            });
            return C(f, e), f;
          }
          function A(a, c) {
            var b = this;
            "string" != typeof a &&
              (d.console.warn(a + " used as a key, but it is not a string."),
              (a = String(a)));
            var e = new Promise(function (c, d) {
              b.ready()
                .then(function () {
                  var e = b.Ca,
                    h = e.db.transaction(e.Fa, "readwrite"),
                    f = h.objectStore(e.Fa)["delete"](a);
                  h.oncomplete = function () {
                    c();
                  };
                  h.onerror = function () {
                    d(f.error);
                  };
                  h.onabort = function () {
                    d(f.error ? f.error : f.transaction.error);
                  };
                })
                ["catch"](d);
            });
            return C(e, c), e;
          }
          function q(a) {
            var c = this,
              b = new Promise(function (a, b) {
                c.ready()
                  .then(function () {
                    var d = c.Ca,
                      e = d.db.transaction(d.Fa, "readwrite"),
                      h = e.objectStore(d.Fa).clear();
                    e.oncomplete = function () {
                      a();
                    };
                    e.onabort = e.onerror = function () {
                      b(h.error ? h.error : h.transaction.error);
                    };
                  })
                  ["catch"](b);
              });
            return C(b, a), b;
          }
          function h(a) {
            var c = this,
              b = new Promise(function (a, b) {
                c.ready()
                  .then(function () {
                    var d = c.Ca,
                      e = d.db
                        .transaction(d.Fa, "readonly")
                        .objectStore(d.Fa)
                        .count();
                    e.onsuccess = function () {
                      a(e.result);
                    };
                    e.onerror = function () {
                      b(e.error);
                    };
                  })
                  ["catch"](b);
              });
            return C(b, a), b;
          }
          function t(a, c) {
            var b = this,
              d = new Promise(function (c, d) {
                return 0 > a
                  ? void c(null)
                  : void b
                      .ready()
                      .then(function () {
                        var e = b.Ca,
                          h = !1,
                          f = e.db
                            .transaction(e.Fa, "readonly")
                            .objectStore(e.Fa)
                            .openCursor();
                        f.onsuccess = function () {
                          var b = f.result;
                          return b
                            ? void (0 === a
                                ? c(b.key)
                                : h
                                ? c(b.key)
                                : ((h = !0), b.advance(a)))
                            : void c(null);
                        };
                        f.onerror = function () {
                          d(f.error);
                        };
                      })
                      ["catch"](d);
              });
            return C(d, c), d;
          }
          function B(a) {
            var c = this,
              b = new Promise(function (a, b) {
                c.ready()
                  .then(function () {
                    var d = c.Ca,
                      e = d.db
                        .transaction(d.Fa, "readonly")
                        .objectStore(d.Fa)
                        .openCursor(),
                      h = [];
                    e.onsuccess = function () {
                      var c = e.result;
                      return c
                        ? (h.push(c.key), void c["continue"]())
                        : void a(h);
                    };
                    e.onerror = function () {
                      b(e.error);
                    };
                  })
                  ["catch"](b);
              });
            return C(b, a), b;
          }
          function C(a, c) {
            c &&
              a.then(
                function (a) {
                  c(null, a);
                },
                function (a) {
                  c(a);
                }
              );
          }
          var I =
            I ||
            d.indexedDB ||
            d.webkitIndexedDB ||
            d.mozIndexedDB ||
            d.uq ||
            d.msIndexedDB;
          if (I) {
            var D,
              Q,
              J = "local-forage-detect-blob-support";
            return {
              wh: "asyncStorage",
              Ql: c,
              tq: v,
              getItem: n,
              setItem: F,
              removeItem: A,
              clear: q,
              length: h,
              key: t,
              keys: B,
            };
          }
        })("undefined" != typeof window ? window : self);
        g.Fd = l["default"];
      },
      function (g, l, d) {
        l.jj = !0;
        l["default"] = (function (f) {
          function e(b, d) {
            d &&
              b.then(
                function (b) {
                  d(null, b);
                },
                function (b) {
                  d(b);
                }
              );
          }
          var g = null;
          try {
            if (!(f.localStorage && "setItem" in f.localStorage)) return;
            g = f.localStorage;
          } catch (b) {
            return;
          }
          return {
            wh: "localStorageWrapper",
            Ql: function (b) {
              var e = {};
              if (b) for (var f in b) e[f] = b[f];
              return (
                (e.Pd = e.name + "/"),
                e.Fa !== this.Ol.Fa && (e.Pd += e.Fa + "/"),
                (this.Ca = e),
                new Promise(function (a) {
                  a(d(3));
                }).then(function (a) {
                  return (e.Zf = a), Promise.resolve();
                })
              );
            },
            tq: function (b, d) {
              var f = this,
                a = f.ready().then(function () {
                  for (
                    var a = f.Ca,
                      d = a.Pd,
                      e = d.length,
                      l = g.length,
                      w = 1,
                      A = 0;
                    l > A;
                    A++
                  ) {
                    var q = g.key(A);
                    if (0 === q.indexOf(d)) {
                      var h = g.getItem(q);
                      if (
                        (h && (h = a.Zf.Gj(h)),
                        (h = b(h, q.substring(e), w++)),
                        void 0 !== h)
                      )
                        return h;
                    }
                  }
                });
              return e(a, d), a;
            },
            getItem: function (b, d) {
              var l = this;
              "string" != typeof b &&
                (f.console.warn(b + " used as a key, but it is not a string."),
                (b = String(b)));
              var a = l.ready().then(function () {
                var a = l.Ca,
                  d = g.getItem(a.Pd + b);
                return d && (d = a.Zf.Gj(d)), d;
              });
              return e(a, d), a;
            },
            setItem: function (b, d, l) {
              var a = this;
              "string" != typeof b &&
                (f.console.warn(b + " used as a key, but it is not a string."),
                (b = String(b)));
              var c = a.ready().then(function () {
                void 0 === d && (d = null);
                var c = d;
                return new Promise(function (e, f) {
                  var l = a.Ca;
                  l.Zf.serialize(d, function (a, d) {
                    if (d) f(d);
                    else
                      try {
                        g.setItem(l.Pd + b, a), e(c);
                      } catch (h) {
                        ("QuotaExceededError" !== h.name &&
                          "NS_ERROR_DOM_QUOTA_REACHED" !== h.name) ||
                          f(h),
                          f(h);
                      }
                  });
                });
              });
              return e(c, l), c;
            },
            removeItem: function (b, d) {
              var l = this;
              "string" != typeof b &&
                (f.console.warn(b + " used as a key, but it is not a string."),
                (b = String(b)));
              var a = l.ready().then(function () {
                g.removeItem(l.Ca.Pd + b);
              });
              return e(a, d), a;
            },
            clear: function (b) {
              var d = this,
                f = d.ready().then(function () {
                  for (var a = d.Ca.Pd, c = g.length - 1; 0 <= c; c--) {
                    var b = g.key(c);
                    0 === b.indexOf(a) && g.removeItem(b);
                  }
                });
              return e(f, b), f;
            },
            length: function (b) {
              var d = this.keys().then(function (b) {
                return b.length;
              });
              return e(d, b), d;
            },
            key: function (b, d) {
              var f = this,
                a = f.ready().then(function () {
                  var a,
                    d = f.Ca;
                  try {
                    a = g.key(b);
                  } catch (e) {
                    a = null;
                  }
                  return a && (a = a.substring(d.Pd.length)), a;
                });
              return e(a, d), a;
            },
            keys: function (b) {
              var d = this,
                f = d.ready().then(function () {
                  for (var a = d.Ca, c = g.length, b = [], e = 0; c > e; e++)
                    0 === g.key(e).indexOf(a.Pd) &&
                      b.push(g.key(e).substring(a.Pd.length));
                  return b;
                });
              return e(f, b), f;
            },
          };
        })("undefined" != typeof window ? window : self);
        g.Fd = l["default"];
      },
      function (g, l) {
        l.jj = !0;
        l["default"] = (function (d) {
          function f(b) {
            var d, e, a, c, f;
            d = 0.75 * b.length;
            var l = b.length,
              v = 0;
            "=" === b[b.length - 1] && (d--, "=" === b[b.length - 2] && d--);
            var F = new ArrayBuffer(d),
              A = new Uint8Array(F);
            for (d = 0; l > d; d += 4)
              (e = g.indexOf(b[d])),
                (a = g.indexOf(b[d + 1])),
                (c = g.indexOf(b[d + 2])),
                (f = g.indexOf(b[d + 3])),
                (A[v++] = (e << 2) | (a >> 4)),
                (A[v++] = ((15 & a) << 4) | (c >> 2)),
                (A[v++] = ((3 & c) << 6) | (63 & f));
            return F;
          }
          function e(b) {
            var d = new Uint8Array(b),
              e = "";
            for (b = 0; b < d.length; b += 3)
              (e += g[d[b] >> 2]),
                (e += g[((3 & d[b]) << 4) | (d[b + 1] >> 4)]),
                (e += g[((15 & d[b + 1]) << 2) | (d[b + 2] >> 6)]),
                (e += g[63 & d[b + 2]]);
            return (
              2 === d.length % 3
                ? (e = e.substring(0, e.length - 1) + "=")
                : 1 === d.length % 3 &&
                  (e = e.substring(0, e.length - 2) + "=="),
              e
            );
          }
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            b = /^~~local_forage_type~([^~]+)~/;
          return {
            serialize: function (b, d) {
              var f = "";
              if (
                (b && (f = b.toString()),
                b &&
                  ("[object ArrayBuffer]" === b.toString() ||
                    (b.buffer &&
                      "[object ArrayBuffer]" === b.buffer.toString())))
              ) {
                var a,
                  c = "__lfsc__:";
                b instanceof ArrayBuffer
                  ? ((a = b), (c += "arbf"))
                  : ((a = b.buffer),
                    "[object Int8Array]" === f
                      ? (c += "si08")
                      : "[object Uint8Array]" === f
                      ? (c += "ui08")
                      : "[object Uint8ClampedArray]" === f
                      ? (c += "uic8")
                      : "[object Int16Array]" === f
                      ? (c += "si16")
                      : "[object Uint16Array]" === f
                      ? (c += "ur16")
                      : "[object Int32Array]" === f
                      ? (c += "si32")
                      : "[object Uint32Array]" === f
                      ? (c += "ui32")
                      : "[object Float32Array]" === f
                      ? (c += "fl32")
                      : "[object Float64Array]" === f
                      ? (c += "fl64")
                      : d(Error("Failed to get type for BinaryArray")));
                d(c + e(a));
              } else if ("[object Blob]" === f)
                (f = new FileReader()),
                  (f.onload = function () {
                    var a =
                      "~~local_forage_type~" + b.type + "~" + e(this.result);
                    d("__lfsc__:blob" + a);
                  }),
                  f.readAsArrayBuffer(b);
              else
                try {
                  d(JSON.stringify(b));
                } catch (g) {
                  console.error(
                    "Couldn't convert value into a JSON string: ",
                    b
                  ),
                    d(null, g);
                }
            },
            Gj: function (e) {
              if ("__lfsc__:" !== e.substring(0, 9)) return JSON.parse(e);
              var g,
                p = e.substring(13);
              e = e.substring(9, 13);
              if ("blob" === e && b.test(p)) {
                var a = p.match(b);
                g = a[1];
                p = p.substring(a[0].length);
              }
              p = f(p);
              switch (e) {
                case "arbf":
                  return p;
                case "blob":
                  var c;
                  p = [p];
                  g = {
                    type: g,
                  };
                  p = p || [];
                  g = g || {};
                  try {
                    c = new Blob(p, g);
                  } catch (m) {
                    if ("TypeError" !== m.name) throw m;
                    c = new (d.BlobBuilder ||
                      d.Bh ||
                      d.Zm ||
                      d.WebKitBlobBuilder)();
                    for (e = 0; e < p.length; e += 1) c.append(p[e]);
                    c = c.getBlob(g.type);
                  }
                  return c;
                case "si08":
                  return new Int8Array(p);
                case "ui08":
                  return new Uint8Array(p);
                case "uic8":
                  return new Uint8ClampedArray(p);
                case "si16":
                  return new Int16Array(p);
                case "ur16":
                  return new Uint16Array(p);
                case "si32":
                  return new Int32Array(p);
                case "ui32":
                  return new Uint32Array(p);
                case "fl32":
                  return new Float32Array(p);
                case "fl64":
                  return new Float64Array(p);
                default:
                  throw Error("Unkown type: " + e);
              }
            },
            AA: f,
            Xz: e,
          };
        })("undefined" != typeof window ? window : self);
        g.Fd = l["default"];
      },
      function (g, l, d) {
        l.jj = !0;
        l["default"] = (function (f) {
          function e(a) {
            var c = this,
              b = {
                db: null,
              };
            if (a)
              for (var e in a)
                b[e] = "string" != typeof a[e] ? a[e].toString() : a[e];
            var f = new Promise(function (a, d) {
              try {
                b.db = v(b.name, String(b.version), b.description, b.size);
              } catch (e) {
                return d(e);
              }
              b.db.transaction(function (e) {
                e.executeSql(
                  "CREATE TABLE IF NOT EXISTS " +
                    b.Fa +
                    " (id INTEGER PRIMARY KEY, key unique, value)",
                  [],
                  function () {
                    c.Ca = b;
                    a();
                  },
                  function (a, c) {
                    d(c);
                  }
                );
              });
            });
            return new Promise(function (a) {
              a(d(3));
            }).then(function (a) {
              return (b.Zf = a), f;
            });
          }
          function g(a, c) {
            var b = this;
            "string" != typeof a &&
              (f.console.warn(a + " used as a key, but it is not a string."),
              (a = String(a)));
            var d = new Promise(function (c, d) {
              b.ready()
                .then(function () {
                  var e = b.Ca;
                  e.db.transaction(function (b) {
                    b.executeSql(
                      "SELECT * FROM " + e.Fa + " WHERE key = ? LIMIT 1",
                      [a],
                      function (a, b) {
                        var d = b.rows.length ? b.rows.item(0).value : null;
                        d && (d = e.Zf.Gj(d));
                        c(d);
                      },
                      function (a, c) {
                        d(c);
                      }
                    );
                  });
                })
                ["catch"](d);
            });
            return n(d, c), d;
          }
          function b(a, c) {
            var b = this,
              d = new Promise(function (c, d) {
                b.ready()
                  .then(function () {
                    var e = b.Ca;
                    e.db.transaction(function (b) {
                      b.executeSql(
                        "SELECT * FROM " + e.Fa,
                        [],
                        function (b, d) {
                          for (
                            var h = d.rows, f = h.length, g = 0;
                            f > g;
                            g++
                          ) {
                            var k = h.item(g),
                              p = k.value;
                            if (
                              (p && (p = e.Zf.Gj(p)),
                              (p = a(p, k.key, g + 1)),
                              void 0 !== p)
                            )
                              return void c(p);
                          }
                          c();
                        },
                        function (a, c) {
                          d(c);
                        }
                      );
                    });
                  })
                  ["catch"](d);
              });
            return n(d, c), d;
          }
          function k(a, c, b) {
            var d = this;
            "string" != typeof a &&
              (f.console.warn(a + " used as a key, but it is not a string."),
              (a = String(a)));
            var e = new Promise(function (b, e) {
              d.ready()
                .then(function () {
                  void 0 === c && (c = null);
                  var f = c,
                    g = d.Ca;
                  g.Zf.serialize(c, function (c, d) {
                    d
                      ? e(d)
                      : g.db.transaction(
                          function (d) {
                            d.executeSql(
                              "INSERT OR REPLACE INTO " +
                                g.Fa +
                                " (key, value) VALUES (?, ?)",
                              [a, c],
                              function () {
                                b(f);
                              },
                              function (a, c) {
                                e(c);
                              }
                            );
                          },
                          function (a) {
                            a.code === a.QUOTA_ERR && e(a);
                          }
                        );
                  });
                })
                ["catch"](e);
            });
            return n(e, b), e;
          }
          function l(a, c) {
            var b = this;
            "string" != typeof a &&
              (f.console.warn(a + " used as a key, but it is not a string."),
              (a = String(a)));
            var d = new Promise(function (c, d) {
              b.ready()
                .then(function () {
                  var e = b.Ca;
                  e.db.transaction(function (b) {
                    b.executeSql(
                      "DELETE FROM " + e.Fa + " WHERE key = ?",
                      [a],
                      function () {
                        c();
                      },
                      function (a, c) {
                        d(c);
                      }
                    );
                  });
                })
                ["catch"](d);
            });
            return n(d, c), d;
          }
          function r(a) {
            var c = this,
              b = new Promise(function (a, b) {
                c.ready()
                  .then(function () {
                    var d = c.Ca;
                    d.db.transaction(function (c) {
                      c.executeSql(
                        "DELETE FROM " + d.Fa,
                        [],
                        function () {
                          a();
                        },
                        function (a, c) {
                          b(c);
                        }
                      );
                    });
                  })
                  ["catch"](b);
              });
            return n(b, a), b;
          }
          function a(a) {
            var c = this,
              b = new Promise(function (a, b) {
                c.ready()
                  .then(function () {
                    var d = c.Ca;
                    d.db.transaction(function (c) {
                      c.executeSql(
                        "SELECT COUNT(key) as c FROM " + d.Fa,
                        [],
                        function (c, b) {
                          var d = b.rows.item(0).Ch;
                          a(d);
                        },
                        function (a, c) {
                          b(c);
                        }
                      );
                    });
                  })
                  ["catch"](b);
              });
            return n(b, a), b;
          }
          function c(a, c) {
            var b = this,
              d = new Promise(function (c, d) {
                b.ready()
                  .then(function () {
                    var e = b.Ca;
                    e.db.transaction(function (b) {
                      b.executeSql(
                        "SELECT key FROM " + e.Fa + " WHERE id = ? LIMIT 1",
                        [a + 1],
                        function (a, b) {
                          var d = b.rows.length ? b.rows.item(0).key : null;
                          c(d);
                        },
                        function (a, c) {
                          d(c);
                        }
                      );
                    });
                  })
                  ["catch"](d);
              });
            return n(d, c), d;
          }
          function m(a) {
            var c = this,
              b = new Promise(function (a, b) {
                c.ready()
                  .then(function () {
                    var d = c.Ca;
                    d.db.transaction(function (c) {
                      c.executeSql(
                        "SELECT key FROM " + d.Fa,
                        [],
                        function (c, b) {
                          for (var d = [], e = 0; e < b.rows.length; e++)
                            d.push(b.rows.item(e).key);
                          a(d);
                        },
                        function (a, c) {
                          b(c);
                        }
                      );
                    });
                  })
                  ["catch"](b);
              });
            return n(b, a), b;
          }
          function n(a, c) {
            c &&
              a.then(
                function (a) {
                  c(null, a);
                },
                function (a) {
                  c(a);
                }
              );
          }
          var v = f.openDatabase;
          if (v)
            return {
              wh: "webSQLStorage",
              Ql: e,
              tq: b,
              getItem: g,
              setItem: k,
              removeItem: l,
              clear: r,
              length: a,
              key: c,
              keys: m,
            };
        })("undefined" != typeof window ? window : self);
        g.Fd = l["default"];
      },
    ]);
  };
  "object" == typeof exports && "object" == typeof module
    ? (module.Fd = pc())
    : "function" == typeof define && define.Wz
    ? define([], pc)
    : "object" == typeof exports
    ? (exports.localforage = pc())
    : (this.localforage = pc());
} catch (qc) {
  oc = !0;
}
function rc(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  function d() {}
  var f = "",
    e = "",
    p = "";
  "undefined" !== typeof window.is_scirra_arcade &&
    (p = "sa" + window.scirra_arcade_id + "_");
  var b = rc.prototype;
  b.L = function (b) {
    this.ra = b;
    this.b = b.b;
  };
  b.L.prototype.I = function () {};
  b.J = function (b) {
    this.type = b;
    this.b = b.b;
  };
  var k = b.J.prototype;
  k.I = function () {
    this.Cn = this.Dn = 0;
  };
  k.pf = function () {};
  k.Sa = function () {
    return {};
  };
  k.cb = function () {};
  g.prototype.wt = function (b) {
    return f === b;
  };
  g.prototype.lt = function () {
    return !0;
  };
  g.prototype.So = function (b) {
    return f === b;
  };
  g.prototype.kt = function () {
    return !0;
  };
  g.prototype.fe = function () {
    return !0;
  };
  g.prototype.Al = function (b, d) {
    return gc(e, b, d);
  };
  g.prototype.ht = function () {
    return !0;
  };
  g.prototype.gt = function () {
    return !0;
  };
  b.k = new g();
  l.prototype.fu = function (b, d) {
    if (oc) this.b.trigger(rc.prototype.k.fe, this);
    else {
      var a = p + b;
      this.Dn++;
      var c = this;
      console.log("doPlayVideoAds setItem");
      doPlayVideoAds();
      localforage.setItem(a, d, function (a, d) {
        c.Dn--;
        a
          ? c.b.trigger(rc.prototype.k.fe, c)
          : ((f = b),
            (e = d),
            c.b.trigger(rc.prototype.k.lt, c),
            c.b.trigger(rc.prototype.k.wt, c),
            (e = f = ""));
        0 === c.Dn && c.b.trigger(rc.prototype.k.ht, c);
      });
    }
  };
  l.prototype.Bs = function (b) {
    if (oc) this.b.trigger(rc.prototype.k.fe, this);
    else {
      var d = p + b;
      this.Cn++;
      var a = this;
      console.log("doPlayVideoAds getItem");
      doPlayVideoAds();
      localforage.getItem(d, function (c, d) {
        a.Cn--;
        if (c) a.b.trigger(rc.prototype.k.fe, a);
        else {
          f = b;
          e = d;
          if ("undefined" === typeof e || null === e) e = "";
          a.b.trigger(rc.prototype.k.kt, a);
          a.b.trigger(rc.prototype.k.So, a);
          e = f = "";
        }
        0 === a.Cn && a.b.trigger(rc.prototype.k.gt, a);
      });
    }
  };
  b.u = new l();
  d.prototype.Ys = function (b) {
    b.Li(e);
  };
  b.D = new d();
})();
function sc(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  var d = sc.prototype;
  d.L = function (d) {
    this.ra = d;
    this.b = d.b;
  };
  d.L.prototype.I = function () {};
  d.J = function (d) {
    this.type = d;
    this.b = d.b;
    this.vj = Array(4);
    this.Mr = this.nl = this.jh = this.Ce = this.Be = 0;
    this.ck = !1;
  };
  var f = d.J.prototype;
  f.I = function () {
    var d = this;
    if (!this.b.La) {
      jQuery(document).mousemove(function (b) {
        d.vn(b);
      });
      jQuery(document).mousedown(function (b) {
        d.un(b);
      });
      jQuery(document).mouseup(function (b) {
        d.wn(b);
      });
      jQuery(document).dblclick(function (b) {
        d.Gx(b);
      });
      var b = function (b) {
        d.Kx(b);
      };
      document.addEventListener("mousewheel", b, !1);
      document.addEventListener("DOMMouseScroll", b, !1);
    }
  };
  var e = {
    left: 0,
    top: 0,
  };
  f.vn = function (d) {
    var b = this.b.La ? e : jQuery(this.b.canvas).offset();
    this.Be = d.pageX - b.left;
    this.Ce = d.pageY - b.top;
  };
  f.Dq = function () {
    return 0 < this.b.nc
      ? !0
      : 0 <= this.Be &&
          0 <= this.Ce &&
          this.Be < this.b.width &&
          this.Ce < this.b.height;
  };
  f.un = function (d) {
    this.Dq() &&
      ((this.vj[d.which] = !0),
      (this.b.bb = !0),
      this.b.trigger(sc.prototype.k.jt, this),
      (this.jh = d.which - 1),
      (this.nl = 0),
      this.b.trigger(sc.prototype.k.No, this),
      this.b.trigger(sc.prototype.k.Zo, this),
      (this.b.bb = !1));
  };
  f.wn = function (d) {
    this.vj[d.which] &&
      (this.b.ak && !this.b.Md && d.preventDefault(),
      (this.b.ak = !0),
      (this.vj[d.which] = !1),
      (this.b.bb = !0),
      (this.jh = d.which - 1),
      this.b.trigger(sc.prototype.k.Ft, this),
      (this.b.bb = !1));
  };
  f.Gx = function (d) {
    this.Dq() &&
      (d.preventDefault(),
      (this.b.bb = !0),
      (this.jh = d.which - 1),
      (this.nl = 1),
      this.b.trigger(sc.prototype.k.No, this),
      this.b.trigger(sc.prototype.k.Zo, this),
      (this.b.bb = !1));
  };
  f.Kx = function (d) {
    this.Mr =
      0 > (d.wheelDelta ? d.wheelDelta : d.detail ? -d.detail : 0) ? 0 : 1;
    this.ck = !1;
    this.b.bb = !0;
    this.b.trigger(sc.prototype.k.Lt, this);
    this.b.bb = !1;
    this.ck && pb(d) && d.preventDefault();
  };
  g.prototype.No = function (d, b) {
    return d === this.jh && b === this.nl;
  };
  g.prototype.jt = function () {
    return !0;
  };
  g.prototype.Js = function (d) {
    return this.vj[d + 1];
  };
  g.prototype.Ft = function (d) {
    return d === this.jh;
  };
  g.prototype.Rs = function (d) {
    var b = this.b.Ph();
    return Ta(this.b.gh(d, this.Be, this.Ce, b.$h), b.$h);
  };
  g.prototype.Zo = function (d, b, e) {
    return d !== this.jh || b !== this.nl
      ? !1
      : this.b.gh(e, this.Be, this.Ce, !1);
  };
  g.prototype.Lt = function (d) {
    this.ck = !0;
    return d === this.Mr;
  };
  d.k = new g();
  d.u = new (function () {})();
  l.prototype.Ml = function (d, b) {
    var e, f, g, a, c;
    ja(b)
      ? ((e = this.b.Jd(0)),
        (f = e.scale),
        (g = e.kc),
        (a = e.xc),
        (c = e.q),
        (e.scale = 1),
        (e.kc = 1),
        (e.xc = 1),
        (e.q = 0),
        d.F(e.Za(this.Be, this.Ce, !0)),
        (e.scale = f),
        (e.kc = g),
        (e.xc = a),
        (e.q = c))
      : (e = ka(b) ? this.b.Jd(b) : this.b.ug(b))
      ? d.F(e.Za(this.Be, this.Ce, !0))
      : d.F(0);
  };
  l.prototype.Nl = function (d, b) {
    var e, f, g, a, c;
    ja(b)
      ? ((e = this.b.Jd(0)),
        (f = e.scale),
        (g = e.kc),
        (a = e.yc),
        (c = e.q),
        (e.scale = 1),
        (e.kc = 1),
        (e.yc = 1),
        (e.q = 0),
        d.F(e.Za(this.Be, this.Ce, !1)),
        (e.scale = f),
        (e.kc = g),
        (e.yc = a),
        (e.q = c))
      : (e = ka(b) ? this.b.Jd(b) : this.b.ug(b))
      ? d.F(e.Za(this.Be, this.Ce, !1))
      : d.F(0);
  };
  d.D = new l();
})();
function tc(g) {
  this.b = g;
}
(function () {
  function g(d, e, g, b, k, l, r, a, c, m) {
    d.save();
    d.fillStyle = e;
    e = k % g;
    var n = l % b;
    0 > e && (e += g);
    0 > n && (n += b);
    d.translate(e + c, n + m);
    d.fillRect(k - e - c, l - n - m, r, a);
    d.restore();
  }
  var l = tc.prototype;
  l.L = function (d) {
    this.ra = d;
    this.b = d.b;
  };
  var d = l.L.prototype;
  d.I = function () {
    this.O ||
      ((this.N = new Image()),
      (this.N.gm = this.il),
      this.b.vo(this.N, this.hl),
      (this.aj =
        this.dj =
        this.cj =
        this.bj =
        this.ph =
        this.U =
        this.zp =
        this.Lr =
        this.jr =
        this.yq =
        this.rm =
          null));
  };
  d.wi = function () {
    this.O || (this.aj = this.dj = this.cj = this.bj = this.ph = this.U = null);
  };
  d.Dk = function () {
    this.O ||
      !this.n.length ||
      this.U ||
      (this.U = this.b.H.Rd(this.N, !0, this.b.fa, this.hh));
  };
  d.ql = function () {
    this.O ||
      this.n.length ||
      !this.b.H ||
      (this.b.H.deleteTexture(this.U),
      this.b.H.deleteTexture(this.ph),
      this.b.H.deleteTexture(this.bj),
      this.b.H.deleteTexture(this.cj),
      this.b.H.deleteTexture(this.dj),
      this.b.H.deleteTexture(this.aj),
      (this.aj = this.dj = this.cj = this.bj = this.ph = this.U = null));
  };
  d.$d = function (d, e, g, b) {
    var k = document.createElement("canvas");
    g = g - d;
    b = b - e;
    k.width = g;
    k.height = b;
    k.getContext("2d").drawImage(this.N, d, e, g, b, 0, 0, g, b);
    return k;
  };
  d.wv = function (d, e, g, b) {
    var k = this.N.width,
      l = this.N.height,
      r = k - e,
      a = l - b;
    if (this.b.H) {
      if (!this.ph) {
        var c = this.b.H,
          m = this.b.fa,
          n = this.hh;
        r > d && a > g && (this.ph = c.Rd(this.$d(d, g, r, a), !0, m, n));
        0 < d &&
          a > g &&
          (this.bj = c.Rd(this.$d(0, g, d, a), !0, m, n, "repeat-y"));
        0 < e &&
          a > g &&
          (this.cj = c.Rd(this.$d(r, g, k, a), !0, m, n, "repeat-y"));
        0 < g &&
          r > d &&
          (this.dj = c.Rd(this.$d(d, 0, r, g), !0, m, n, "repeat-x"));
        0 < b &&
          r > d &&
          (this.aj = c.Rd(this.$d(d, a, r, l), !0, m, n, "repeat-x"));
      }
    } else
      this.rm ||
        ((c = this.b.Ea),
        r > d &&
          a > g &&
          (this.rm = c.createPattern(this.$d(d, g, r, a), "repeat")),
        0 < d &&
          a > g &&
          (this.yq = c.createPattern(this.$d(0, g, d, a), "repeat")),
        0 < e &&
          a > g &&
          (this.jr = c.createPattern(this.$d(r, g, k, a), "repeat")),
        0 < g &&
          r > d &&
          (this.Lr = c.createPattern(this.$d(d, 0, r, g), "repeat")),
        0 < b &&
          r > d &&
          (this.zp = c.createPattern(this.$d(d, a, r, l), "repeat")));
  };
  l.J = function (d) {
    this.type = d;
    this.b = d.b;
  };
  d = l.J.prototype;
  d.I = function () {
    this.cn = this.C[0];
    this.Rn = this.C[1];
    this.ko = this.C[2];
    this.Yl = this.C[3];
    this.Kj = this.C[4];
    this.fill = this.C[5];
    this.visible = 0 === this.C[6];
    this.mr = 0 !== this.C[8];
    this.Kc ? this.gd.set(0, 0, 0, 0) : (this.gd = new wa(0, 0, 0, 0));
    this.b.H &&
      !this.type.U &&
      (this.type.U = this.b.H.Rd(this.type.N, !1, this.b.fa, this.type.hh));
    this.type.wv(this.cn, this.Rn, this.ko, this.Yl);
  };
  d.$c = function (d) {
    var e = this.type.N,
      p = this.cn,
      b = this.Rn,
      k = this.ko,
      l = this.Yl,
      r = e.width,
      a = e.height,
      c = r - b,
      m = a - l;
    d.globalAlpha = this.opacity;
    d.save();
    var n = this.x,
      v = this.y,
      F = this.width,
      A = this.height;
    this.b.Sc && ((n = Math.round(n)), (v = Math.round(v)));
    var q = -(this.pc * this.width),
      h = -(this.qc * this.height),
      t = q % r,
      B = h % a;
    0 > t && (t += r);
    0 > B && (B += a);
    d.translate(n + t, v + B);
    r = q - t;
    h -= B;
    B = this.mr ? 1 : 0;
    0 < p && 0 < k && d.drawImage(e, 0, 0, p + B, k + B, r, h, p + B, k + B);
    0 < b &&
      0 < k &&
      d.drawImage(e, c - B, 0, b + B, k + B, r + F - b - B, h, b + B, k + B);
    0 < b &&
      0 < l &&
      d.drawImage(
        e,
        c - B,
        m - B,
        b + B,
        l + B,
        r + F - b - B,
        h + A - l - B,
        b + B,
        l + B
      );
    0 < p &&
      0 < l &&
      d.drawImage(e, 0, m - B, p + B, l + B, r, h + A - l - B, p + B, l + B);
    0 === this.Kj
      ? ((B = 2 === this.fill ? 0 : B),
        0 < p &&
          m > k &&
          g(d, this.type.yq, p, m - k, r, h + k, p + B, A - k - l, 0, 0),
        0 < b &&
          m > k &&
          g(
            d,
            this.type.jr,
            b,
            m - k,
            r + F - b - B,
            h + k,
            b + B,
            A - k - l,
            B,
            0
          ),
        0 < k &&
          c > p &&
          g(d, this.type.Lr, c - p, k, r + p, h, F - p - b, k + B, 0, 0),
        0 < l &&
          c > p &&
          g(
            d,
            this.type.zp,
            c - p,
            l,
            r + p,
            h + A - l - B,
            F - p - b,
            l + B,
            0,
            B
          ))
      : 1 === this.Kj &&
        (0 < p &&
          m > k &&
          0 < A - k - l &&
          d.drawImage(e, 0, k, p, m - k, r, h + k, p, A - k - l),
        0 < b &&
          m > k &&
          0 < A - k - l &&
          d.drawImage(e, c, k, b, m - k, r + F - b, h + k, b, A - k - l),
        0 < k &&
          c > p &&
          0 < F - p - b &&
          d.drawImage(e, p, 0, c - p, k, r + p, h, F - p - b, k),
        0 < l &&
          c > p &&
          0 < F - p - b &&
          d.drawImage(e, p, m, c - p, l, r + p, h + A - l, F - p - b, l));
    m > k &&
      c > p &&
      (0 === this.fill
        ? g(
            d,
            this.type.rm,
            c - p,
            m - k,
            r + p,
            h + k,
            F - p - b,
            A - k - l,
            0,
            0
          )
        : 1 === this.fill &&
          0 < F - p - b &&
          0 < A - k - l &&
          d.drawImage(
            e,
            p,
            k,
            c - p,
            m - k,
            r + p,
            h + k,
            F - p - b,
            A - k - l
          ));
    d.restore();
  };
  d.qe = function (d, e, g, b, k, l, r, a, c, m) {
    d.Bc(e);
    var n = this.gd;
    n.left = g / e.le;
    n.top = b / e.ke;
    n.right = (g + k) / e.le;
    n.bottom = (b + l) / e.ke;
    d.vd(r, a, r + c, a, r + c, a + m, r, a + m, n);
  };
  d.Vi = function (d, e, g, b, k, l, r, a) {
    d.Bc(e);
    var c = this.gd;
    c.left = -r / e.le;
    c.top = -a / e.ke;
    c.right = (k - r) / e.le;
    c.bottom = (l - a) / e.ke;
    d.vd(g, b, g + k, b, g + k, b + l, g, b + l, c);
  };
  d.df = function (d) {
    this.mc(d);
  };
  d.mc = function (d) {
    var e = this.cn,
      g = this.Rn,
      b = this.ko,
      k = this.Yl,
      l = this.type.N.width - g,
      r = this.type.N.height - k;
    d.$f(this.opacity);
    var a = this.Yb,
      c = a.ub,
      a = a.wb,
      m = this.width,
      n = this.height;
    this.b.Sc && ((c = Math.round(c)), (a = Math.round(a)));
    var v = this.mr ? 1 : 0;
    0 < e &&
      0 < b &&
      this.qe(d, this.type.U, 0, 0, e + v, b + v, c, a, e + v, b + v);
    0 < g &&
      0 < b &&
      this.qe(
        d,
        this.type.U,
        l - v,
        0,
        g + v,
        b + v,
        c + m - g - v,
        a,
        g + v,
        b + v
      );
    0 < g &&
      0 < k &&
      this.qe(
        d,
        this.type.U,
        l - v,
        r - v,
        g + v,
        k + v,
        c + m - g - v,
        a + n - k - v,
        g + v,
        k + v
      );
    0 < e &&
      0 < k &&
      this.qe(
        d,
        this.type.U,
        0,
        r - v,
        e + v,
        k + v,
        c,
        a + n - k - v,
        e + v,
        k + v
      );
    0 === this.Kj
      ? ((v = 2 === this.fill ? 0 : v),
        0 < e &&
          r > b &&
          this.Vi(d, this.type.bj, c, a + b, e + v, n - b - k, 0, 0),
        0 < g &&
          r > b &&
          this.Vi(
            d,
            this.type.cj,
            c + m - g - v,
            a + b,
            g + v,
            n - b - k,
            v,
            0
          ),
        0 < b &&
          l > e &&
          this.Vi(d, this.type.dj, c + e, a, m - e - g, b + v, 0, 0),
        0 < k &&
          l > e &&
          this.Vi(
            d,
            this.type.aj,
            c + e,
            a + n - k - v,
            m - e - g,
            k + v,
            0,
            v
          ))
      : 1 === this.Kj &&
        (0 < e &&
          r > b &&
          this.qe(d, this.type.U, 0, b, e, r - b, c, a + b, e, n - b - k),
        0 < g &&
          r > b &&
          this.qe(
            d,
            this.type.U,
            l,
            b,
            g,
            r - b,
            c + m - g,
            a + b,
            g,
            n - b - k
          ),
        0 < b &&
          l > e &&
          this.qe(d, this.type.U, e, 0, l - e, b, c + e, a, m - e - g, b),
        0 < k &&
          l > e &&
          this.qe(
            d,
            this.type.U,
            e,
            r,
            l - e,
            k,
            c + e,
            a + n - k,
            m - e - g,
            k
          ));
    r > b &&
      l > e &&
      (0 === this.fill
        ? this.Vi(d, this.type.ph, c + e, a + b, m - e - g, n - b - k, 0, 0)
        : 1 === this.fill &&
          this.qe(
            d,
            this.type.U,
            e,
            b,
            l - e,
            r - b,
            c + e,
            a + b,
            m - e - g,
            n - b - k
          ));
  };
  l.k = new (function () {})();
  l.u = new (function () {})();
  l.D = new (function () {})();
})();
function P(g) {
  this.b = g;
}
(function () {
  function g() {
    if (0 === this.im.length) {
      var a = document.createElement("canvas");
      a.width = this.width;
      a.height = this.height;
      var c = a.getContext("2d");
      this.eh
        ? c.drawImage(
            this.N,
            this.Sg,
            this.Tg,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height
          )
        : c.drawImage(this.N, 0, 0, this.width, this.height);
      this.im = a.toDataURL("image/png");
    }
    return this.im;
  }
  function l() {}
  function d(a) {
    a[0] = 0;
    a[1] = 0;
    a[2] = 0;
    n.push(a);
  }
  function f(a, c) {
    return a < c ? "" + a + "," + c : "" + c + "," + a;
  }
  function e(a, c, b, d) {
    c = c.uid;
    b = b.uid;
    var e = f(c, b);
    if (a.hasOwnProperty(e)) a[e][2] = d;
    else {
      var g = n.length ? n.pop() : [0, 0, 0];
      g[0] = c;
      g[1] = b;
      g[2] = d;
      a[e] = g;
    }
  }
  function p(a, c, b) {
    c = f(c.uid, b.uid);
    a.hasOwnProperty(c) && (d(a[c]), delete a[c]);
  }
  function b(a, c, b) {
    c = f(c.uid, b.uid);
    if (a.hasOwnProperty(c)) return (v = a[c][2]), !0;
    v = -2;
    return !1;
  }
  function k() {}
  function w() {}
  var r = P.prototype;
  r.L = function (a) {
    this.ra = a;
    this.b = a.b;
  };
  var a = r.L.prototype;
  a.I = function () {
    if (!this.O) {
      var a, c, b, d, e, f, k, l, m;
      this.ld = [];
      this.Vh = !1;
      a = 0;
      for (c = this.Cc.length; a < c; a++) {
        e = this.Cc[a];
        k = {};
        k.name = e[0];
        k.speed = e[1];
        k.loop = e[2];
        k.On = e[3];
        k.Pn = e[4];
        k.He = e[5];
        k.la = e[6];
        k.frames = [];
        b = 0;
        for (d = e[7].length; b < d; b++)
          (f = e[7][b]),
            (l = {}),
            (l.hl = f[0]),
            (l.il = f[1]),
            (l.Sg = f[2]),
            (l.Tg = f[3]),
            (l.width = f[4]),
            (l.height = f[5]),
            (l.duration = f[6]),
            (l.pc = f[7]),
            (l.qc = f[8]),
            (l.Mm = f[9]),
            (l.Nk = f[10]),
            (l.cr = f[11]),
            (l.eh = 0 !== l.width),
            (l.im = ""),
            (l.cA = g),
            (m = {
              left: 0,
              top: 0,
              right: 1,
              bottom: 1,
            }),
            (l.co = m),
            (l.U = null),
            (m = this.b.qw(f[0]))
              ? (l.N = m)
              : ((l.N = new Image()),
                (l.N.tv = f[0]),
                (l.N.gm = f[1]),
                (l.N.lv = null),
                this.b.vo(l.N, f[0])),
            k.frames.push(l),
            this.ld.push(l);
        this.Cc[a] = k;
      }
    }
  };
  a.Ur = function () {
    var a, c, b;
    a = 0;
    for (c = this.n.length; a < c; a++) (b = this.n[a]), (b.Cj = b.Va.U);
  };
  a.wi = function () {
    if (!this.O) {
      var a, c, b;
      a = 0;
      for (c = this.ld.length; a < c; ++a)
        (b = this.ld[a]), (b.N.lv = null), (b.U = null);
      this.Vh = !1;
      this.Ur();
    }
  };
  a.Dk = function () {
    if (!this.O && this.n.length) {
      var a, c, b;
      a = 0;
      for (c = this.ld.length; a < c; ++a)
        (b = this.ld[a]), (b.U = this.b.H.Rd(b.N, !1, this.b.fa, b.cr));
      this.Ur();
    }
  };
  a.en = function () {
    if (!this.O && !this.Vh && this.b.H) {
      var a, c, b;
      a = 0;
      for (c = this.ld.length; a < c; ++a)
        (b = this.ld[a]), (b.U = this.b.H.Rd(b.N, !1, this.b.fa, b.cr));
      this.Vh = !0;
    }
  };
  a.ql = function () {
    if (!this.O && !this.n.length && this.Vh) {
      var a, c, b;
      a = 0;
      for (c = this.ld.length; a < c; ++a)
        (b = this.ld[a]), this.b.H.deleteTexture(b.U), (b.U = null);
      this.Vh = !1;
    }
  };
  var c = [];
  a.Fn = function (a) {
    var b, d, e;
    z(c);
    b = 0;
    for (d = this.ld.length; b < d; ++b)
      (e = this.ld[b].N),
        -1 === c.indexOf(e) && (a.drawImage(e, 0, 0), c.push(e));
  };
  r.J = function (a) {
    this.type = a;
    this.b = a.b;
    a = this.type.Cc[0].frames[0].Nk;
    this.Kc ? this.Da.Ni(a) : (this.Da = new db(a));
  };
  var m = r.J.prototype;
  m.I = function () {
    this.visible = 0 === this.C[0];
    this.Wh = this.ye = !1;
    this.me = 0 !== this.C[3];
    this.Oa = this.Tp(this.C[1]) || this.type.Cc[0];
    this.K = this.C[2];
    0 > this.K && (this.K = 0);
    this.K >= this.Oa.frames.length && (this.K = this.Oa.frames.length - 1);
    var a = this.Oa.frames[this.K];
    this.Da.Ni(a.Nk);
    this.pc = a.pc;
    this.qc = a.qc;
    this.Cf = this.Oa.speed;
    this.cf = this.Oa.Pn;
    (1 === this.type.Cc.length && 1 === this.type.Cc[0].frames.length) ||
      0 === this.Cf ||
      (this.b.gg(this), (this.ye = !0));
    this.Kc ? this.md.reset() : (this.md = new bb());
    this.Hd = this.md.M;
    this.We = !0;
    this.ie = 0;
    this.Ve = !0;
    this.pg = this.wp = "";
    this.Dp = 0;
    this.Dh = -1;
    this.type.en();
    var c,
      b,
      d,
      e,
      f,
      g,
      k,
      a = 0;
    for (c = this.type.Cc.length; a < c; a++)
      for (e = this.type.Cc[a], b = 0, d = e.frames.length; b < d; b++)
        (f = e.frames[b]),
          0 === f.width && ((f.width = f.N.width), (f.height = f.N.height)),
          f.eh &&
            ((k = f.N),
            (g = f.co),
            (g.left = f.Sg / k.width),
            (g.top = f.Tg / k.height),
            (g.right = (f.Sg + f.width) / k.width),
            (g.bottom = (f.Tg + f.height) / k.height),
            0 === f.Sg &&
              0 === f.Tg &&
              f.width === k.width &&
              f.height === k.height &&
              (f.eh = !1));
    this.Va = this.Oa.frames[this.K];
    this.Cj = this.Va.U;
  };
  m.Sa = function () {
    var a = {
      a: this.Oa.la,
      f: this.K,
      cas: this.Cf,
      fs: this.Hd,
      ar: this.ie,
      at: this.md.M,
      rt: this.cf,
    };
    this.We || (a.ap = this.We);
    this.Ve || (a.af = this.Ve);
    return a;
  };
  m.cb = function (a) {
    var c = this.xw(a.a);
    c && (this.Oa = c);
    this.K = a.f;
    0 > this.K && (this.K = 0);
    this.K >= this.Oa.frames.length && (this.K = this.Oa.frames.length - 1);
    this.Cf = a.cas;
    this.Hd = a.fs;
    this.ie = a.ar;
    this.md.reset();
    this.md.M = a.at;
    this.We = a.hasOwnProperty("ap") ? a.ap : !0;
    this.Ve = a.hasOwnProperty("af") ? a.af : !0;
    a.hasOwnProperty("rt") ? (this.cf = a.rt) : (this.cf = this.Oa.Pn);
    this.Va = this.Oa.frames[this.K];
    this.Cj = this.Va.U;
    this.Da.Ni(this.Va.Nk);
    this.pc = this.Va.pc;
    this.qc = this.Va.qc;
  };
  m.Ul = function (a) {
    this.K = a ? 0 : this.Oa.frames.length - 1;
    this.We = !1;
    this.wp = this.Oa.name;
    this.Wh = !0;
    this.b.trigger(P.prototype.k.Jo, this);
    this.b.trigger(P.prototype.k.it, this);
    this.Wh = !1;
    this.ie = 0;
  };
  m.Bh = function () {
    return this.md.M;
  };
  m.Ta = function () {
    this.md.add(this.b.Kf(this));
    this.pg.length && this.Jp();
    0 <= this.Dh && this.lm();
    var a = this.md.M,
      c = this.Oa,
      b = c.frames[this.K],
      d = b.duration / this.Cf;
    this.We &&
      a >= this.Hd + d &&
      (this.Ve ? this.K++ : this.K--,
      (this.Hd += d),
      this.K >= c.frames.length &&
        (c.He
          ? ((this.Ve = !1), (this.K = c.frames.length - 2))
          : c.loop
          ? (this.K = this.cf)
          : (this.ie++, this.ie >= c.On ? this.Ul(!1) : (this.K = this.cf))),
      0 > this.K &&
        (c.He
          ? ((this.K = 1),
            (this.Ve = !0),
            c.loop || (this.ie++, this.ie >= c.On && this.Ul(!0)))
          : c.loop
          ? (this.K = this.cf)
          : (this.ie++, this.ie >= c.On ? this.Ul(!0) : (this.K = this.cf))),
      0 > this.K
        ? (this.K = 0)
        : this.K >= c.frames.length && (this.K = c.frames.length - 1),
      a > this.Hd + c.frames[this.K].duration / this.Cf && (this.Hd = a),
      (a = c.frames[this.K]),
      this.kg(b, a),
      (this.b.ua = !0));
  };
  m.Tp = function (a) {
    var c, b, d;
    c = 0;
    for (b = this.type.Cc.length; c < b; c++)
      if (((d = this.type.Cc[c]), ob(d.name, a))) return d;
    return null;
  };
  m.xw = function (a) {
    var c, b, d;
    c = 0;
    for (b = this.type.Cc.length; c < b; c++)
      if (((d = this.type.Cc[c]), d.la === a)) return d;
    return null;
  };
  m.Jp = function () {
    var a = this.Oa.frames[this.K],
      c = this.Tp(this.pg);
    this.pg = "";
    !c ||
      (ob(c.name, this.Oa.name) && this.We) ||
      ((this.Oa = c),
      (this.Cf = c.speed),
      (this.cf = c.Pn),
      0 > this.K && (this.K = 0),
      this.K >= this.Oa.frames.length && (this.K = this.Oa.frames.length - 1),
      1 === this.Dp && (this.K = 0),
      (this.We = !0),
      (this.Hd = this.md.M),
      (this.Ve = !0),
      this.kg(a, this.Oa.frames[this.K]),
      (this.b.ua = !0));
  };
  m.lm = function () {
    var a = this.Oa.frames[this.K],
      c = this.K;
    this.K = qa(this.Dh);
    0 > this.K && (this.K = 0);
    this.K >= this.Oa.frames.length && (this.K = this.Oa.frames.length - 1);
    c !== this.K &&
      (this.kg(a, this.Oa.frames[this.K]),
      (this.Hd = this.md.M),
      (this.b.ua = !0));
    this.Dh = -1;
  };
  m.kg = function (a, c) {
    var b = a.width,
      d = a.height,
      e = c.width,
      f = c.height;
    b != e && (this.width *= e / b);
    d != f && (this.height *= f / d);
    this.pc = c.pc;
    this.qc = c.qc;
    this.Da.Ni(c.Nk);
    this.P();
    this.Va = c;
    this.Cj = c.U;
    b = 0;
    for (d = this.V.length; b < d; b++) (e = this.V[b]), e.Rq && e.Rq(a, c);
    this.b.trigger(P.prototype.k.kg, this);
  };
  m.$c = function (a) {
    a.globalAlpha = this.opacity;
    var c = this.Va,
      b = c.eh,
      d = c.N,
      e = this.x,
      f = this.y,
      g = this.width,
      k = this.height;
    if (0 === this.q && 0 <= g && 0 <= k)
      (e -= this.pc * g),
        (f -= this.qc * k),
        this.b.Sc && ((e = Math.round(e)), (f = Math.round(f))),
        b
          ? a.drawImage(d, c.Sg, c.Tg, c.width, c.height, e, f, g, k)
          : a.drawImage(d, e, f, g, k);
    else {
      this.b.Sc && ((e = Math.round(e)), (f = Math.round(f)));
      a.save();
      var l = 0 < g ? 1 : -1,
        m = 0 < k ? 1 : -1;
      a.translate(e, f);
      (1 === l && 1 === m) || a.scale(l, m);
      a.rotate(this.q * l * m);
      e = 0 - this.pc * ma(g);
      f = 0 - this.qc * ma(k);
      b
        ? a.drawImage(d, c.Sg, c.Tg, c.width, c.height, e, f, ma(g), ma(k))
        : a.drawImage(d, e, f, ma(g), ma(k));
      a.restore();
    }
  };
  m.df = function (a) {
    this.mc(a);
  };
  m.mc = function (a) {
    a.Bc(this.Cj);
    a.$f(this.opacity);
    var c = this.Va,
      b = this.Yb;
    if (this.b.Sc) {
      var d = Math.round(this.x) - this.x,
        e = Math.round(this.y) - this.y;
      c.eh
        ? a.vd(
            b.ub + d,
            b.wb + e,
            b.ic + d,
            b.jc + e,
            b.Zb + d,
            b.$b + e,
            b.Wb + d,
            b.Xb + e,
            c.co
          )
        : a.In(
            b.ub + d,
            b.wb + e,
            b.ic + d,
            b.jc + e,
            b.Zb + d,
            b.$b + e,
            b.Wb + d,
            b.Xb + e
          );
    } else
      c.eh
        ? a.vd(b.ub, b.wb, b.ic, b.jc, b.Zb, b.$b, b.Wb, b.Xb, c.co)
        : a.In(b.ub, b.wb, b.ic, b.jc, b.Zb, b.$b, b.Wb, b.Xb);
  };
  m.Bw = function (a) {
    var c = this.Va,
      b,
      d;
    b = 0;
    for (d = c.Mm.length; b < d; b++) if (ob(a, c.Mm[b][0])) return b;
    return -1;
  };
  m.Am = function (a, c) {
    var b = this.Va,
      d = b.Mm,
      e;
    la(a) ? (e = this.Bw(a)) : (e = a - 1);
    e = qa(e);
    if (0 > e || e >= d.length) return c ? this.x : this.y;
    var f = (d[e][1] - b.pc) * this.width,
      d = d[e][2],
      d = (d - b.qc) * this.height,
      b = Math.cos(this.q);
    e = Math.sin(this.q);
    var g = f * b - d * e,
      d = d * b + f * e,
      f = g + this.x,
      d = d + this.y;
    return c ? f : d;
  };
  var n = [],
    v = -2,
    F = [];
  l.prototype.nt = function (a) {
    if (!a) return !1;
    var c = this.b,
      f = c.Ph(),
      g = f.type,
      k = null;
    f.X.collmemory ? (k = f.X.collmemory) : ((k = {}), (f.X.collmemory = k));
    f.X.spriteCreatedDestroyCallback ||
      ((f.X.spriteCreatedDestroyCallback = !0),
      c.Rl(function (a) {
        var c = f.X.collmemory;
        a = a.uid;
        var b, e;
        for (b in c)
          c.hasOwnProperty(b) &&
            ((e = c[b]), e[0] === a || e[1] === a) &&
            (d(c[b]), delete c[b]);
      }));
    var l = g.Y(),
      m = a.Y(),
      l = l.oc(),
      n,
      q,
      r,
      A,
      w,
      u,
      x,
      sa = this.b.zd,
      Y = sa - 1,
      y = c.Cb().nb;
    for (q = 0; q < l.length; q++) {
      r = l[q];
      m.ga ? (r.ma(), this.b.Vp(r.A, a, r.Ia, F), (n = F)) : (n = m.oc());
      for (A = 0; A < n.length; A++)
        (w = n[A]),
          c.eg(r, w) || c.qv(r, w)
            ? ((u = b(k, r, w)),
              (u = !u || v < Y),
              e(k, r, w, sa),
              u &&
                (c.Di(y.Ba),
                (u = g.Y()),
                (x = a.Y()),
                (u.ga = !1),
                (x.ga = !1),
                g === a
                  ? ((u.n.length = 2), (u.n[0] = r), (u.n[1] = w), g.Lc())
                  : ((u.n.length = 1),
                    (x.n.length = 1),
                    (u.n[0] = r),
                    (x.n[0] = w),
                    g.Lc(),
                    a.Lc()),
                y.Qn(),
                c.rf(y.Ba)))
            : p(k, r, w);
      z(F);
    }
    return !1;
  };
  var A = new da(),
    q = !1;
  new wa(0, 0, 0, 0);
  a.finish = function (a) {
    if (q) {
      if (a) {
        var c = this.b.Cb().nb.ed;
        a = null.Y();
        var b = A.Oe(),
          d,
          e;
        if (a.ga) {
          a.ga = !1;
          z(a.n);
          d = 0;
          for (e = b.length; d < e; ++d) a.n[d] = b[d];
          if (c)
            for (z(a.ja), d = 0, e = null.n.length; d < e; ++d)
              (b = null.n[d]), A.contains(b) || a.ja.push(b);
        } else if (c)
          for (c = a.n.length, d = 0, e = b.length; d < e; ++d)
            (a.n[c + d] = b[d]), Ea(a.ja, b[d]);
        else Ba(a.n, b);
        null.Lc();
      }
      A.clear();
      q = !1;
    }
  };
  l.prototype.Hs = function (a) {
    return this.pg.length ? ob(this.pg, a) : ob(this.Oa.name, a);
  };
  l.prototype.it = function (a) {
    return ob(this.wp, a);
  };
  l.prototype.Jo = function () {
    return !0;
  };
  l.prototype.kg = function () {
    return !0;
  };
  l.prototype.Os = function () {
    return 0 > this.width;
  };
  r.k = new l();
  k.prototype.Du = function (a) {
    this.We = !0;
    this.Hd = this.md.M;
    1 === a && 0 !== this.K && ((this.Dh = 0), this.Wh || this.lm());
    this.ye || (this.b.gg(this), (this.ye = !0));
  };
  k.prototype.Yt = function (a, c) {
    this.pg = a;
    this.Dp = c;
    this.ye || (this.b.gg(this), (this.ye = !0));
    this.Wh || this.Jp();
  };
  k.prototype.Zt = function (a) {
    this.Dh = a;
    this.ye || (this.b.gg(this), (this.ye = !0));
    this.Wh || this.lm();
  };
  k.prototype.$t = function (a) {
    this.Cf = ma(a);
    this.Ve = 0 <= a;
    this.ye || (this.b.gg(this), (this.ye = !0));
  };
  k.prototype.ku = function (a) {
    a = ma(this.width) * (0 === a ? -1 : 1);
    this.width !== a && ((this.width = a), this.P());
  };
  r.u = new k();
  w.prototype.es = function (a) {
    a.wa(this.K);
  };
  r.D = new w();
})();
function uc(g) {
  this.b = g;
}
(function () {
  function g() {
    return w.length ? w.pop() : {};
  }
  function l(b) {
    var a, c;
    a = 0;
    for (c = b.length; a < c; a++) w.push(b[a]);
    z(b);
  }
  function d(b) {
    return b.length && " " === b.charAt(b.length - 1)
      ? b.substring(0, b.length - 1)
      : b;
  }
  function f() {}
  var e = uc.prototype;
  e.I = function () {
    e.u.ip = function (b) {
      this.width !== b && ((this.width = b), (this.wf = !0), this.P());
    };
  };
  e.L = function (b) {
    this.ra = b;
    this.b = b.b;
  };
  var p = e.L.prototype;
  p.I = function () {};
  p.wi = function () {
    if (!this.O) {
      var b, a, c;
      b = 0;
      for (a = this.n.length; b < a; b++)
        (c = this.n[b]), (c.Td = null), (c.Xf = null), (c.Ic = null);
    }
  };
  e.J = function (b) {
    this.type = b;
    this.b = b.b;
    this.Kc ? z(this.mf) : (this.mf = []);
    this.wf = !0;
  };
  var p = e.J.prototype,
    b = {};
  p.I = function () {
    this.text = this.C[0];
    this.visible = 0 === this.C[1];
    this.font = this.C[2];
    this.color = this.C[3];
    this.bk = this.C[4];
    this.ul = this.C[5];
    this.yo = 0 === this.C[7];
    this.an = this.pk = this.width;
    this.ok = this.height;
    this.dn = this.C[8];
    this.Rj = this.ue = "";
    this.Gr = this.Hr = this.Bi = 0;
    this.Lx();
    this.Ic = this.Xf = this.Td = null;
    this.Gq = !1;
    this.ni = this.b.zd;
    this.Kc ? this.gd.set(0, 0, 1, 1) : (this.gd = new wa(0, 0, 1, 1));
    this.b.H && this.b.gg(this);
  };
  p.Lx = function () {
    var b = this.font.split(" "),
      a;
    for (a = 0; a < b.length; a++)
      if ("pt" === b[a].substr(b[a].length - 2, 2)) {
        this.Bi = parseInt(b[a].substr(0, b[a].length - 2));
        this.Hn = Math.ceil((this.Bi / 72) * 96) + 4;
        0 < a && (this.Rj = b[a - 1]);
        this.ue = b[a + 1];
        for (a += 2; a < b.length; a++) this.ue += " " + b[a];
        break;
      }
  };
  p.Sa = function () {
    return {
      t: this.text,
      f: this.font,
      c: this.color,
      ha: this.bk,
      va: this.ul,
      wr: this.yo,
      lho: this.dn,
      fn: this.ue,
      fs: this.Rj,
      ps: this.Bi,
      pxh: this.Hn,
      tw: this.Hr,
      th: this.Gr,
      lrt: this.ni,
    };
  };
  p.cb = function (b) {
    this.text = b.t;
    this.font = b.f;
    this.color = b.c;
    this.bk = b.ha;
    this.ul = b.va;
    this.yo = b.wr;
    this.dn = b.lho;
    this.ue = b.fn;
    this.Rj = b.fs;
    this.Bi = b.ps;
    this.Hn = b.pxh;
    this.Hr = b.tw;
    this.Gr = b.th;
    this.ni = b.lrt;
    this.wf = !0;
    this.an = this.pk = this.width;
    this.ok = this.height;
  };
  p.Ta = function () {
    if (this.b.H && this.Ic && 300 <= this.b.zd - this.ni) {
      var b = this.A;
      this.ma();
      var a = this.Ia;
      if (a.right < b.Ga || a.bottom < b.Ha || a.left > b.Ka || a.top > b.Ja)
        this.b.H.deleteTexture(this.Ic), (this.Td = this.Xf = this.Ic = null);
    }
  };
  p.pf = function () {
    this.Td = this.Xf = null;
    this.b.H && this.Ic && this.b.H.deleteTexture(this.Ic);
    this.Ic = null;
  };
  p.Vr = function () {
    this.font = this.Rj + " " + this.Bi.toString() + "pt " + this.ue;
    this.wf = !0;
    this.b.ua = !0;
  };
  p.$c = function (b, a) {
    b.font = this.font;
    b.textBaseline = "top";
    b.fillStyle = this.color;
    b.globalAlpha = a ? 1 : this.opacity;
    var c = 1;
    a && ((c = Math.abs(this.A.Gc())), b.save(), b.scale(c, c));
    if (this.wf || this.width !== this.an)
      this.type.ra.Ou(this.text, this.mf, b, this.width, this.yo),
        (this.wf = !1),
        (this.an = this.width);
    this.ma();
    var c = a ? 0 : this.Yb.ub,
      d = a ? 0 : this.Yb.wb;
    this.b.Sc && ((c = (c + 0.5) | 0), (d = (d + 0.5) | 0));
    0 === this.q ||
      a ||
      (b.save(), b.translate(c, d), b.rotate(this.q), (d = c = 0));
    var e = d + this.height,
      f = this.Hn,
      f = f + this.dn,
      g,
      k;
    1 === this.ul
      ? (d += Math.max(this.height / 2 - (this.mf.length * f) / 2, 0))
      : 2 === this.ul &&
        (d += Math.max(this.height - this.mf.length * f - 2, 0));
    for (
      k = 0;
      k < this.mf.length &&
      !((g = c),
      1 === this.bk
        ? (g = c + (this.width - this.mf[k].width) / 2)
        : 2 === this.bk && (g = c + (this.width - this.mf[k].width)),
      b.fillText(this.mf[k].text, g, d),
      (d += f),
      d >= e - f);
      k++
    );
    (0 !== this.q || a) && b.restore();
    this.ni = this.b.zd;
  };
  p.mc = function (b) {
    if (!(1 > this.width || 1 > this.height)) {
      var a = this.wf || this.Gq;
      this.Gq = !1;
      var c = this.A.Gc(),
        d = this.A.$a(),
        e = this.gd,
        f = c * this.width,
        g = c * this.height,
        k = Math.ceil(f),
        l = Math.ceil(g),
        h = Math.abs(k),
        p = Math.abs(l),
        w = this.b.T / 2,
        C = this.b.S / 2;
      this.Xf ||
        ((this.Td = document.createElement("canvas")),
        (this.Td.width = h),
        (this.Td.height = p),
        (this.pk = h),
        (this.ok = p),
        (a = !0),
        (this.Xf = this.Td.getContext("2d")));
      if (h !== this.pk || p !== this.ok)
        (this.Td.width = h),
          (this.Td.height = p),
          this.Ic && (b.deleteTexture(this.Ic), (this.Ic = null)),
          (a = !0);
      a &&
        (this.Xf.clearRect(0, 0, h, p),
        this.$c(this.Xf, !0),
        this.Ic || (this.Ic = b.Xc(h, p, this.b.fa, this.b.Md)),
        b.DA(this.Td, this.Ic, this.b.Md));
      this.pk = h;
      this.ok = p;
      b.Bc(this.Ic);
      b.$f(this.opacity);
      b.Yd();
      b.translate(-w, -C);
      b.de();
      var I = this.Yb,
        a = this.A.Ra(I.ub, I.wb, !0, !0),
        h = this.A.Ra(I.ub, I.wb, !1, !0),
        p = this.A.Ra(I.ic, I.jc, !0, !0),
        w = this.A.Ra(I.ic, I.jc, !1, !0),
        C = this.A.Ra(I.Zb, I.$b, !0, !0),
        D = this.A.Ra(I.Zb, I.$b, !1, !0),
        Q = this.A.Ra(I.Wb, I.Xb, !0, !0),
        I = this.A.Ra(I.Wb, I.Xb, !1, !0);
      if (this.b.Sc || (0 === this.q && 0 === d))
        var J = ((a + 0.5) | 0) - a,
          M = ((h + 0.5) | 0) - h,
          a = a + J,
          h = h + M,
          p = p + J,
          w = w + M,
          C = C + J,
          D = D + M,
          Q = Q + J,
          I = I + M;
      0 === this.q && 0 === d
        ? ((p = a + k),
          (w = h),
          (C = p),
          (D = h + l),
          (Q = a),
          (I = D),
          (e.right = 1),
          (e.bottom = 1))
        : ((e.right = f / k), (e.bottom = g / l));
      b.vd(a, h, p, w, C, D, Q, I, e);
      b.Yd();
      b.scale(c, c);
      b.Sn(-this.A.$a());
      b.translate((this.A.Ga + this.A.Ka) / -2, (this.A.Ha + this.A.Ja) / -2);
      b.de();
      this.ni = this.b.zd;
    }
  };
  var k = [];
  e.Gu = function (b) {
    z(k);
    for (var a = "", c, d = 0; d < b.length; )
      if (((c = b.charAt(d)), "\n" === c))
        a.length && (k.push(a), (a = "")), k.push("\n"), ++d;
      else if (" " === c || "\t" === c || "-" === c) {
        do (a += b.charAt(d)), d++;
        while (d < b.length && (" " === b.charAt(d) || "\t" === b.charAt(d)));
        k.push(a);
        a = "";
      } else d < b.length && ((a += c), d++);
    a.length && k.push(a);
  };
  var w = [];
  e.Ou = function (b, a, c, d, e) {
    if (b && b.length)
      if (2 >= d) l(a);
      else {
        if (100 >= b.length && -1 === b.indexOf("\n")) {
          var f = c.measureText(b).width;
          if (f <= d) {
            l(a);
            a.push(g());
            a[0].text = b;
            a[0].width = f;
            return;
          }
        }
        this.Pu(b, a, c, d, e);
      }
    else l(a);
  };
  e.Pu = function (b, a, c, e, f) {
    f && (this.Gu(b), (b = k));
    var l = "",
      p,
      A,
      q,
      h = 0;
    for (q = 0; q < b.length; q++)
      "\n" === b[q]
        ? (h >= a.length && a.push(g()),
          (l = d(l)),
          (A = a[h]),
          (A.text = l),
          (A.width = c.measureText(l).width),
          h++,
          (l = ""))
        : ((p = l),
          (l += b[q]),
          (A = c.measureText(l).width),
          A >= e &&
            (h >= a.length && a.push(g()),
            (p = d(p)),
            (A = a[h]),
            (A.text = p),
            (A.width = c.measureText(p).width),
            h++,
            (l = b[q]),
            f || " " !== l || (l = "")));
    l.length &&
      (h >= a.length && a.push(g()),
      (l = d(l)),
      (A = a[h]),
      (A.text = l),
      (A.width = c.measureText(l).width),
      h++);
    for (q = h; q < a.length; q++) w.push(a[q]);
    a.length = h;
  };
  e.k = new (function () {})();
  f.prototype.ru = function (b) {
    ka(b) && 1e9 > b && (b = Math.round(1e10 * b) / 1e10);
    b = b.toString();
    this.text !== b && ((this.text = b), (this.wf = !0), (this.b.ua = !0));
  };
  f.prototype.vu = function (d, a) {
    if (this.b.La)
      fa(
        "[Construct 2] Text plugin: 'Set web font' not supported on this platform - the action has been ignored"
      );
    else {
      var c = this,
        e = function () {
          c.b.ua = !0;
          c.wf = !0;
        };
      if (b.hasOwnProperty(a)) {
        var f = "'" + d + "'";
        if (this.ue !== f)
          for (this.ue = f, this.Vr(), f = 1; 10 > f; f++)
            setTimeout(e, 100 * f), setTimeout(e, 1e3 * f);
      } else
        for (
          f = document.createElement("link"),
            f.href = a,
            f.rel = "stylesheet",
            f.type = "text/css",
            f.onload = e,
            document.getElementsByTagName("head")[0].appendChild(f),
            b[a] = !0,
            this.ue = "'" + d + "'",
            this.Vr(),
            f = 1;
          10 > f;
          f++
        )
          setTimeout(e, 100 * f), setTimeout(e, 1e3 * f);
    }
  };
  e.u = new f();
  e.D = new (function () {})();
})();
function vc(g) {
  this.b = g;
}
(function () {
  var g = vc.prototype;
  g.L = function (d) {
    this.ra = d;
    this.b = d.b;
  };
  var l = g.L.prototype;
  l.I = function () {
    this.O ||
      ((this.N = new Image()),
      (this.N.gm = this.il),
      this.b.vo(this.N, this.hl),
      (this.U = this.pattern = null));
  };
  l.wi = function () {
    this.O || (this.U = null);
  };
  l.Dk = function () {
    if (!this.O && this.n.length) {
      this.U || (this.U = this.b.H.Rd(this.N, !0, this.b.fa, this.hh));
      var d, f;
      d = 0;
      for (f = this.n.length; d < f; d++) this.n[d].U = this.U;
    }
  };
  l.en = function () {
    this.O ||
      this.U ||
      !this.b.H ||
      (this.U = this.b.H.Rd(this.N, !0, this.b.fa, this.hh));
  };
  l.ql = function () {
    this.O ||
      this.n.length ||
      !this.U ||
      (this.b.H.deleteTexture(this.U), (this.U = null));
  };
  l.Fn = function (d) {
    d.drawImage(this.N, 0, 0);
  };
  g.J = function (d) {
    this.type = d;
    this.b = d.b;
  };
  l = g.J.prototype;
  l.I = function () {
    this.visible = 0 === this.C[0];
    this.gd = new wa(0, 0, 0, 0);
    this.gq = !1;
    this.N = this.type.N;
    this.b.H
      ? (this.type.en(), (this.U = this.type.U))
      : (this.type.pattern ||
          (this.type.pattern = this.b.Ea.createPattern(this.type.N, "repeat")),
        (this.pattern = this.type.pattern));
  };
  l.Dd = function () {
    this.gq = !1;
    this.N = this.type.N;
  };
  l.pf = function () {
    this.b.H &&
      this.gq &&
      this.U &&
      (this.b.H.deleteTexture(this.U), (this.U = null));
  };
  l.$c = function (d) {
    d.globalAlpha = this.opacity;
    d.save();
    d.fillStyle = this.pattern;
    var f = this.x,
      e = this.y;
    this.b.Sc && ((f = Math.round(f)), (e = Math.round(e)));
    var g = -(this.pc * this.width),
      b = -(this.qc * this.height),
      k = g % this.N.width,
      l = b % this.N.height;
    0 > k && (k += this.N.width);
    0 > l && (l += this.N.height);
    d.translate(f, e);
    d.rotate(this.q);
    d.translate(k, l);
    d.fillRect(g - k, b - l, this.width, this.height);
    d.restore();
  };
  l.df = function (d) {
    this.mc(d);
  };
  l.mc = function (d) {
    d.Bc(this.U);
    d.$f(this.opacity);
    var f = this.gd;
    f.right = this.width / this.N.width;
    f.bottom = this.height / this.N.height;
    var e = this.Yb;
    if (this.b.Sc) {
      var g = Math.round(this.x) - this.x,
        b = Math.round(this.y) - this.y;
      d.vd(
        e.ub + g,
        e.wb + b,
        e.ic + g,
        e.jc + b,
        e.Zb + g,
        e.$b + b,
        e.Wb + g,
        e.Xb + b,
        f
      );
    } else d.vd(e.ub, e.wb, e.ic, e.jc, e.Zb, e.$b, e.Wb, e.Xb, f);
  };
  g.k = new (function () {})();
  g.u = new (function () {})();
  g.D = new (function () {})();
})();
function wc(g) {
  this.b = g;
}
(function () {
  function g(c) {
    w = c.x;
    r = c.y;
    a = c.z;
  }
  function l(a, b, e, f) {
    var g;
    g = c.length ? c.pop() : new d();
    g.init(a, b, e, f);
    return g;
  }
  function d() {
    this.Si =
      this.id =
      this.Uf =
      this.Tf =
      this.y =
      this.x =
      this.fl =
      this.el =
      this.$m =
      this.time =
      this.ho =
        0;
    this.Xi = this.ol = !1;
  }
  function f() {}
  function e() {}
  var p = wc.prototype;
  p.L = function (a) {
    this.ra = a;
    this.b = a.b;
  };
  p.L.prototype.I = function () {};
  p.J = function (a) {
    this.type = a;
    this.b = a.b;
    this.touches = [];
    this.ln = !1;
  };
  var b = p.J.prototype,
    k = {
      left: 0,
      top: 0,
    };
  b.Nh = function (a) {
    var c, b;
    c = 0;
    for (b = this.touches.length; c < b; c++)
      if (this.touches[c].id === a) return c;
    return -1;
  };
  var w = 0,
    r = 0,
    a = 0,
    c = [];
  d.prototype.init = function (a, c, b, d) {
    var e = Xa();
    this.ho = this.$m = this.time = e;
    this.el = a;
    this.fl = c;
    this.x = a;
    this.y = c;
    this.Tf = a;
    this.Uf = c;
    this.pressure = this.height = this.width = 0;
    this.id = b;
    this.Si = d;
    this.Xi = this.ol = !1;
  };
  d.prototype.update = function (a, c, b, d, e, f) {
    this.$m = this.time;
    this.time = a;
    this.Tf = this.x;
    this.Uf = this.y;
    this.x = c;
    this.y = b;
    this.width = d;
    this.height = e;
    this.pressure = f;
    !this.Xi && 15 <= Sa(this.el, this.fl, this.x, this.y) && (this.Xi = !0);
  };
  d.prototype.yx = function (a, c) {
    !this.ol &&
      500 <= Xa() - this.ho &&
      !this.Xi &&
      15 > Sa(this.el, this.fl, this.x, this.y) &&
      ((this.ol = !0),
      (a.be = this.Si),
      (a.kh = this.id),
      (a.vg = c),
      a.b.trigger(wc.prototype.k.tt, a),
      (a.ne = this.x),
      (a.oe = this.y),
      a.b.trigger(wc.prototype.k.ut, a),
      (a.vg = 0));
  };
  var m = -1e3,
    n = -1e3,
    v = -1e4;
  d.prototype.zq = function (a, c) {
    if (!this.ol) {
      var b = Xa();
      333 >= b - this.ho &&
        !this.Xi &&
        15 > Sa(this.el, this.fl, this.x, this.y) &&
        ((a.be = this.Si),
        (a.kh = this.id),
        (a.vg = c),
        666 >= b - v && 25 > Sa(m, n, this.x, this.y)
          ? (a.b.trigger(wc.prototype.k.pt, a),
            (a.ne = this.x),
            (a.oe = this.y),
            a.b.trigger(wc.prototype.k.qt, a),
            (n = m = -1e3),
            (v = -1e4))
          : (a.b.trigger(wc.prototype.k.Jt, a),
            (a.ne = this.x),
            (a.oe = this.y),
            a.b.trigger(wc.prototype.k.ep, a),
            (m = this.x),
            (n = this.y),
            (v = b)),
        (a.vg = 0));
    }
  };
  b.I = function () {
    this.qx = !(
      "undefined" === typeof window.c2isWindows8 || !window.c2isWindows8
    );
    this.vg =
      this.kh =
      this.be =
      this.oe =
      this.ne =
      this.pp =
      this.op =
      this.np =
      this.Vu =
      this.Uu =
      this.Tu =
      this.Ik =
      this.Hk =
      this.Gk =
        0;
    this.Sy = 0 !== this.C[0];
    var a = 0 < this.b.nc ? document : this.b.canvas,
      c = document;
    this.b.Qb ? (c = a = window.Canvas) : this.b.vc && (c = a = window);
    var b = this;
    window.navigator.pointerEnabled
      ? (a.addEventListener(
          "pointerdown",
          function (a) {
            b.Qq(a);
          },
          !1
        ),
        a.addEventListener(
          "pointermove",
          function (a) {
            b.Pq(a);
          },
          !1
        ),
        c.addEventListener(
          "pointerup",
          function (a) {
            b.Ck(a, !1);
          },
          !1
        ),
        c.addEventListener(
          "pointercancel",
          function (a) {
            b.Ck(a, !0);
          },
          !1
        ),
        this.b.canvas &&
          (this.b.canvas.addEventListener(
            "MSGestureHold",
            function (a) {
              a.preventDefault();
            },
            !1
          ),
          document.addEventListener(
            "MSGestureHold",
            function (a) {
              a.preventDefault();
            },
            !1
          ),
          this.b.canvas.addEventListener(
            "gesturehold",
            function (a) {
              a.preventDefault();
            },
            !1
          ),
          document.addEventListener(
            "gesturehold",
            function (a) {
              a.preventDefault();
            },
            !1
          )))
      : window.navigator.msPointerEnabled
      ? (a.addEventListener(
          "MSPointerDown",
          function (a) {
            b.Qq(a);
          },
          !1
        ),
        a.addEventListener(
          "MSPointerMove",
          function (a) {
            b.Pq(a);
          },
          !1
        ),
        c.addEventListener(
          "MSPointerUp",
          function (a) {
            b.Ck(a, !1);
          },
          !1
        ),
        c.addEventListener(
          "MSPointerCancel",
          function (a) {
            b.Ck(a, !0);
          },
          !1
        ),
        this.b.canvas &&
          (this.b.canvas.addEventListener(
            "MSGestureHold",
            function (a) {
              a.preventDefault();
            },
            !1
          ),
          document.addEventListener(
            "MSGestureHold",
            function (a) {
              a.preventDefault();
            },
            !1
          )))
      : (a.addEventListener(
          "touchstart",
          function (a) {
            b.Tq(a);
          },
          !1
        ),
        a.addEventListener(
          "touchmove",
          function (a) {
            b.Sq(a);
          },
          !1
        ),
        c.addEventListener(
          "touchend",
          function (a) {
            b.xn(a, !1);
          },
          !1
        ),
        c.addEventListener(
          "touchcancel",
          function (a) {
            b.xn(a, !0);
          },
          !1
        ));
    if (this.qx) {
      var d = function (a) {
          a = a.reading;
          b.np = a.accelerationX;
          b.op = a.accelerationY;
          b.pp = a.accelerationZ;
        },
        e = function (a) {
          a = a.reading;
          b.Gk = a.yawDegrees;
          b.Hk = a.pitchDegrees;
          b.Ik = a.rollDegrees;
        },
        f = Windows.Devices.Sensors.Accelerometer.getDefault();
      f &&
        ((f.reportInterval = Math.max(f.minimumReportInterval, 16)),
        f.addEventListener("readingchanged", d));
      var k = Windows.Devices.Sensors.Inclinometer.getDefault();
      k &&
        ((k.reportInterval = Math.max(k.minimumReportInterval, 16)),
        k.addEventListener("readingchanged", e));
      document.addEventListener(
        "visibilitychange",
        function () {
          document.hidden || document.msHidden
            ? (f && f.removeEventListener("readingchanged", d),
              k && k.removeEventListener("readingchanged", e))
            : (f && f.addEventListener("readingchanged", d),
              k && k.addEventListener("readingchanged", e));
        },
        !1
      );
    } else
      window.addEventListener(
        "deviceorientation",
        function (a) {
          b.Gk = a.alpha || 0;
          b.Hk = a.beta || 0;
          b.Ik = a.gamma || 0;
        },
        !1
      ),
        window.addEventListener(
          "devicemotion",
          function (a) {
            a.accelerationIncludingGravity &&
              ((b.Tu = a.accelerationIncludingGravity.x || 0),
              (b.Uu = a.accelerationIncludingGravity.y || 0),
              (b.Vu = a.accelerationIncludingGravity.z || 0));
            a.acceleration &&
              ((b.np = a.acceleration.x || 0),
              (b.op = a.acceleration.y || 0),
              (b.pp = a.acceleration.z || 0));
          },
          !1
        );
    this.Sy &&
      !this.b.La &&
      (jQuery(document).mousemove(function (a) {
        b.vn(a);
      }),
      jQuery(document).mousedown(function (a) {
        b.un(a);
      }),
      jQuery(document).mouseup(function (a) {
        b.wn(a);
      }));
    !this.b.lf &&
      this.b.ec &&
      navigator.accelerometer &&
      navigator.accelerometer.watchAcceleration &&
      navigator.accelerometer.watchAcceleration(g, null, {
        frequency: 40,
      });
    this.b.Jy(this);
  };
  b.Pq = function (a) {
    if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
      a.preventDefault && a.preventDefault();
      var c = this.Nh(a.pointerId),
        b = Xa();
      if (0 <= c) {
        var d = this.b.La ? k : jQuery(this.b.canvas).offset(),
          c = this.touches[c];
        2 > b - c.time ||
          c.update(
            b,
            a.pageX - d.left,
            a.pageY - d.top,
            a.width || 0,
            a.height || 0,
            a.pressure || 0
          );
      }
    }
  };
  b.Qq = function (a) {
    if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
      a.preventDefault && pb(a) && a.preventDefault();
      var c = this.b.La ? k : jQuery(this.b.canvas).offset(),
        b = a.pageX - c.left,
        c = a.pageY - c.top;
      Xa();
      this.be = this.touches.length;
      this.kh = a.pointerId;
      this.touches.push(l(b, c, a.pointerId, this.be));
      this.b.bb = !0;
      this.b.trigger(wc.prototype.k.Yo, this);
      this.b.trigger(wc.prototype.k.Jl, this);
      this.ne = b;
      this.oe = c;
      this.b.trigger(wc.prototype.k.Il, this);
      this.b.bb = !1;
    }
  };
  b.Ck = function (a, b) {
    if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
      a.preventDefault && pb(a) && a.preventDefault();
      var d = this.Nh(a.pointerId);
      this.be = 0 <= d ? this.touches[d].Si : -1;
      this.kh = 0 <= d ? this.touches[d].id : -1;
      this.b.bb = !0;
      this.b.trigger(wc.prototype.k.Xo, this);
      this.b.trigger(wc.prototype.k.Hl, this);
      0 <= d &&
        (b || this.touches[d].zq(this, d),
        100 > c.length && c.push(this.touches[d]),
        this.touches.splice(d, 1));
      this.b.bb = !1;
    }
  };
  b.Sq = function (a) {
    a.preventDefault && a.preventDefault();
    var c = Xa(),
      b,
      d,
      e,
      f;
    b = 0;
    for (d = a.changedTouches.length; b < d; b++)
      if (((e = a.changedTouches[b]), (f = this.Nh(e.identifier)), 0 <= f)) {
        var g = this.b.La ? k : jQuery(this.b.canvas).offset();
        f = this.touches[f];
        2 > c - f.time ||
          f.update(
            c,
            e.pageX - g.left,
            e.pageY - g.top,
            2 * (e.uA || e.FA || e.kA || e.nA || 0),
            2 * (e.vA || e.GA || e.lA || e.oA || 0),
            e.aA || e.EA || e.jA || e.mA || 0
          );
      }
  };
  b.Tq = function (a) {
    a.preventDefault && pb(a) && a.preventDefault();
    var c = this.b.La ? k : jQuery(this.b.canvas).offset();
    Xa();
    this.b.bb = !0;
    var b, d, e, f;
    b = 0;
    for (d = a.changedTouches.length; b < d; b++)
      if (((e = a.changedTouches[b]), (f = this.Nh(e.identifier)), -1 === f)) {
        f = e.pageX - c.left;
        var g = e.pageY - c.top;
        this.be = this.touches.length;
        this.kh = e.identifier;
        this.touches.push(l(f, g, e.identifier, this.be));
        this.b.trigger(wc.prototype.k.Yo, this);
        this.b.trigger(wc.prototype.k.Jl, this);
        this.ne = f;
        this.oe = g;
        this.b.trigger(wc.prototype.k.Il, this);
      }
    this.b.bb = !1;
  };
  b.xn = function (a, b) {
    a.preventDefault && pb(a) && a.preventDefault();
    this.b.bb = !0;
    var d, e, f;
    d = 0;
    for (e = a.changedTouches.length; d < e; d++)
      (f = a.changedTouches[d]),
        (f = this.Nh(f.identifier)),
        0 <= f &&
          ((this.be = this.touches[f].Si),
          (this.kh = this.touches[f].id),
          this.b.trigger(wc.prototype.k.Xo, this),
          this.b.trigger(wc.prototype.k.Hl, this),
          b || this.touches[f].zq(this, f),
          100 > c.length && c.push(this.touches[f]),
          this.touches.splice(f, 1));
    this.b.bb = !1;
  };
  b.Bh = function () {
    return this.b.ec && 0 === this.Gk && 0 !== a ? 90 * a : this.Gk;
  };
  b.Zm = function () {
    return this.b.ec && 0 === this.Hk && 0 !== r ? 90 * r : this.Hk;
  };
  b.uq = function () {
    return this.b.ec && 0 === this.Ik && 0 !== w ? 90 * w : this.Ik;
  };
  b.un = function (a) {
    this.Tq({
      changedTouches: [
        {
          pageX: a.pageX,
          pageY: a.pageY,
          identifier: 0,
        },
      ],
    });
    this.ln = !0;
  };
  b.vn = function (a) {
    this.ln &&
      this.Sq({
        changedTouches: [
          {
            pageX: a.pageX,
            pageY: a.pageY,
            identifier: 0,
          },
        ],
      });
  };
  b.wn = function (a) {
    a.preventDefault && this.b.ak && !this.b.Md && a.preventDefault();
    this.b.ak = !0;
    this.xn({
      changedTouches: [
        {
          pageX: a.pageX,
          pageY: a.pageY,
          identifier: 0,
        },
      ],
    });
    this.ln = !1;
  };
  b.ih = function () {
    var a,
      c,
      b,
      d = Xa();
    a = 0;
    for (c = this.touches.length; a < c; ++a)
      (b = this.touches[a]), b.time <= d - 50 && (b.$m = d), b.yx(this, a);
  };
  f.prototype.Jl = function () {
    return !0;
  };
  f.prototype.Hl = function () {
    return !0;
  };
  f.prototype.Il = function (a) {
    return a ? this.b.gh(a, this.ne, this.oe, !1) : !1;
  };
  var F = [];
  f.prototype.Xs = function (a) {
    if (!a) return !1;
    var c = a.Y(),
      b = c.oc(),
      d,
      e,
      f,
      g,
      k,
      l;
    f = 0;
    for (g = b.length; f < g; f++) {
      var p = b[f];
      p.ma();
      k = 0;
      for (l = this.touches.length; k < l; k++)
        if (
          ((e = this.touches[k]),
          (d = p.A.Za(e.x, e.y, !0)),
          (e = p.A.Za(e.x, e.y, !1)),
          p.ac(d, e))
        ) {
          F.push(p);
          break;
        }
    }
    return F.length ? ((c.ga = !1), Ba(c.n, F), a.Lc(), z(F), !0) : !1;
  };
  f.prototype.Yo = function (a) {
    a = Math.floor(a);
    return a === this.be;
  };
  f.prototype.Xo = function (a) {
    a = Math.floor(a);
    return a === this.be;
  };
  f.prototype.tt = function () {
    return !0;
  };
  f.prototype.Jt = function () {
    return !0;
  };
  f.prototype.pt = function () {
    return !0;
  };
  f.prototype.ut = function (a) {
    return a ? this.b.gh(a, this.ne, this.oe, !1) : !1;
  };
  f.prototype.ep = function (a) {
    return a ? this.b.gh(a, this.ne, this.oe, !1) : !1;
  };
  f.prototype.qt = function (a) {
    return a ? this.b.gh(a, this.ne, this.oe, !1) : !1;
  };
  p.k = new f();
  e.prototype.Ml = function (a, c) {
    var b = this.vg;
    if (0 > b || b >= this.touches.length) a.F(0);
    else {
      var d, e, f, g, k;
      ja(c)
        ? ((d = this.b.Jd(0)),
          (e = d.scale),
          (f = d.kc),
          (g = d.xc),
          (k = d.q),
          (d.scale = 1),
          (d.kc = 1),
          (d.xc = 1),
          (d.q = 0),
          a.F(d.Za(this.touches[b].x, this.touches[b].y, !0)),
          (d.scale = e),
          (d.kc = f),
          (d.xc = g),
          (d.q = k))
        : (d = ka(c) ? this.b.Jd(c) : this.b.ug(c))
        ? a.F(d.Za(this.touches[b].x, this.touches[b].y, !0))
        : a.F(0);
    }
  };
  e.prototype.Nl = function (a, c) {
    var b = this.vg;
    if (0 > b || b >= this.touches.length) a.F(0);
    else {
      var d, e, f, g, k;
      ja(c)
        ? ((d = this.b.Jd(0)),
          (e = d.scale),
          (f = d.kc),
          (g = d.yc),
          (k = d.q),
          (d.scale = 1),
          (d.kc = 1),
          (d.yc = 1),
          (d.q = 0),
          a.F(d.Za(this.touches[b].x, this.touches[b].y, !1)),
          (d.scale = e),
          (d.kc = f),
          (d.yc = g),
          (d.q = k))
        : (d = ka(c) ? this.b.Jd(c) : this.b.ug(c))
        ? a.F(d.Za(this.touches[b].x, this.touches[b].y, !1))
        : a.F(0);
    }
  };
  p.D = new e();
})();
function xc(g) {
  this.b = g;
}
(function () {
  function g(b) {
    switch (b) {
      case 1:
        return "BANNER";
      case 2:
        return "MEDIUM_RECTANGLE";
      case 3:
        return "FULL_BANNER";
      case 4:
        return "LEADERBOARD";
      case 5:
        return "SKYSCRAPER";
    }
    return "SMART_BANNER";
  }
  function l(b) {
    switch (b) {
      case 0:
        return "top-left";
      case 1:
        return "top-center";
      case 2:
        return "top-right";
      case 3:
        return "left";
      case 4:
        return "center";
      case 5:
        return "right";
      case 6:
        return "bottom-left";
      case 8:
        return "bottom-right";
    }
    return "bottom-center";
  }
  function d() {}
  function f() {}
  var e = xc.prototype;
  e.L = function (b) {
    this.ra = b;
    this.b = b.b;
  };
  e.L.prototype.I = function () {};
  e.J = function (b) {
    this.type = b;
    this.b = b.b;
  };
  var p = !1;
  e.J.prototype.I = function () {
    if (window.admob) {
      p = !0;
      this.xb = window.admob;
      this.xb.setLicenseKey &&
        this.xb.setLicenseKey(
          "support@scirra.com",
          "2ba99d4ff8c219cf7331c88fb3344f80"
        );
      var b = 0 !== this.C[0],
        d = 0 !== this.C[1];
      this.av = this.C[2];
      this.bv = this.C[3];
      this.cx = this.C[4];
      this.gx = this.C[5];
      this.$y = this.C[6];
      this.az = this.C[7];
      this.b.yg
        ? ((this.qj = this.av), (this.ek = this.bv))
        : this.b.lf
        ? ((this.qj = this.cx), (this.ek = this.gx))
        : this.b.cd || this.b.ik
        ? ((this.qj = this.$y), (this.ek = this.az))
        : (this.ek = this.qj = "");
      this.fi = this.pq = !1;
      this.xb.setUp(this.qj, this.ek, b, d);
      var e = this;
      this.xb.onFullScreenAdLoaded = function () {
        e.b.trigger(xc.prototype.k.Ro, e);
      };
      this.xb.onInterstitialAdLoaded = function () {
        e.b.trigger(xc.prototype.k.Ro, e);
      };
      this.xb.onFullScreenAdShown = function () {
        e.fi = !0;
        e.b.trigger(xc.prototype.k.Qo, e);
      };
      this.xb.onInterstitialAdShown = function () {
        e.fi = !0;
        e.b.trigger(xc.prototype.k.Qo, e);
      };
      this.xb.onFullScreenAdClosed = function () {
        e.fi = !1;
        e.b.trigger(xc.prototype.k.Po, e);
      };
      this.xb.onInterstitialAdHidden = function () {
        e.fi = !1;
        e.b.trigger(xc.prototype.k.Po, e);
      };
      this.xb.onBannerAdPreloaded = function () {
        e.b.trigger(xc.prototype.k.Mo, e);
      };
    } else
      fa(
        "[Construct 2] com.cranberrygame.phonegap.plugin.ad.admob plugin is required to show Admob ads with Cordova; other platforms are not supported"
      );
  };
  d.prototype.Us = function () {
    return this.pq;
  };
  d.prototype.Vs = function () {
    return this.fi;
  };
  d.prototype.Ro = function () {
    return !0;
  };
  d.prototype.Qo = function () {
    return !0;
  };
  d.prototype.Po = function () {
    return !0;
  };
  d.prototype.Mo = function () {
    return !0;
  };
  e.k = new d();
  f.prototype.zu = function (b, d) {
    p && (this.xb.showBannerAd(l(b), g(d)), (this.pq = !0));
  };
  f.prototype.St = function () {
    p &&
      (this.xb.preloadInterstitialAd
        ? this.xb.preloadInterstitialAd()
        : this.xb.preloadFullScreenAd && this.xb.preloadFullScreenAd());
  };
  f.prototype.Au = function () {
    p &&
      (this.xb.showInterstitialAd
        ? this.xb.showInterstitialAd()
        : this.xb.showFullScreenAd && this.xb.showFullScreenAd());
  };
  f.prototype.Rt = function () {
    p && this.xb.preloadBannerAd();
  };
  e.u = new f();
  e.D = new (function () {})();
})();
function yc(g) {
  this.b = g;
}
(function () {
  var g = yc.prototype;
  g.L = function (d) {
    this.ra = d;
    this.b = d.b;
  };
  g.L.prototype.I = function () {};
  g.J = function (d) {
    this.type = d;
    this.b = d.b;
  };
  var l = g.J.prototype;
  l.I = function () {
    this.Bx = this.C[0];
    this.returnValue = "";
    var d = document.createElement("script");
    d.setAttribute("type", "text/javascript");
    d.setAttribute("src", this.Bx);
    "undefined" != typeof d &&
      document.getElementsByTagName("head")[0].appendChild(d);
  };
  l.$c = function () {};
  g.k = {};
  g.u = {};
  g.u.ys = function (d) {
    this.returnValue = "";
    try {
      this.returnValue = eval(d);
    } catch (f) {
      this.returnValue = f;
    }
  };
  g.D = {};
  g.D.Az = function (d) {
    d.Ib(this.returnValue);
  };
})();
function zc(g) {
  this.b = g;
}
(function () {
  var g = zc.prototype;
  g.L = function (d) {
    this.behavior = d;
    this.b = d.b;
  };
  g.L.prototype.I = function () {};
  g.J = function (d, f) {
    this.type = d;
    this.behavior = d.behavior;
    this.j = f;
    this.b = d.b;
  };
  var l = g.J.prototype;
  l.I = function () {
    this.up = this.C[0];
    this.vp = this.C[1];
    this.$u = this.C[2];
    this.Zu = this.C[3];
    this.j.ma();
    this.zo = this.j.Ia.left;
    this.Co = this.j.Ia.top;
    this.Ao = this.b.gb - this.j.Ia.left;
    this.Bo = this.b.fb - this.j.Ia.top;
    this.Ln = this.b.gb - this.j.Ia.right;
    this.Xl = this.b.fb - this.j.Ia.bottom;
    this.enabled = 0 !== this.C[4];
  };
  l.Sa = function () {
    return {
      xleft: this.zo,
      ytop: this.Co,
      xright: this.Ao,
      ybottom: this.Bo,
      rdiff: this.Ln,
      bdiff: this.Xl,
      enabled: this.enabled,
    };
  };
  l.cb = function (d) {
    this.zo = d.xleft;
    this.Co = d.ytop;
    this.Ao = d.xright;
    this.Bo = d.ybottom;
    this.Ln = d.rdiff;
    this.Xl = d.bdiff;
    this.enabled = d.enabled;
  };
  l.Ta = function () {
    if (this.enabled) {
      var d,
        f = this.j.A,
        e = this.j,
        g = this.j.Ia;
      0 === this.up
        ? (e.ma(),
          (d = f.Ga + this.zo - g.left),
          0 !== d && ((e.x += d), e.P()))
        : 1 === this.up &&
          (e.ma(),
          (d = f.Ka - this.Ao - g.left),
          0 !== d && ((e.x += d), e.P()));
      0 === this.vp
        ? (e.ma(), (d = f.Ha + this.Co - g.top), 0 !== d && ((e.y += d), e.P()))
        : 1 === this.vp &&
          (e.ma(),
          (d = f.Ja - this.Bo - g.top),
          0 !== d && ((e.y += d), e.P()));
      1 === this.$u &&
        (e.ma(),
        (d = f.Ka - this.Ln - g.right),
        0 !== d && ((e.width += d), 0 > e.width && (e.width = 0), e.P()));
      1 === this.Zu &&
        (e.ma(),
        (d = f.Ja - this.Xl - g.bottom),
        0 !== d && ((e.height += d), 0 > e.height && (e.height = 0), e.P()));
    }
  };
  g.k = new (function () {})();
  g.u = new (function () {})();
  g.D = new (function () {})();
})();
function Ac(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  var d = Ac.prototype;
  d.L = function (d) {
    this.behavior = d;
    this.b = d.b;
  };
  d.L.prototype.I = function () {};
  d.J = function (d, f) {
    this.type = d;
    this.behavior = d.behavior;
    this.j = f;
    this.b = d.b;
  };
  var f = d.J.prototype;
  f.I = function () {
    var d = this.C[0];
    this.he = this.C[1];
    this.Vj = this.C[2];
    this.jv = 0 !== this.C[3];
    this.Zn = 0 !== this.C[4];
    this.ob = Math.cos(this.j.q) * d;
    this.Wa = Math.sin(this.j.q) * d;
    this.Tf = this.j.x;
    this.Uf = this.j.y;
    this.Rc = this.j.q;
    this.ml = 0;
    this.enabled = 0 !== this.C[5];
  };
  f.Sa = function () {
    return {
      acc: this.he,
      g: this.Vj,
      dx: this.ob,
      dy: this.Wa,
      lx: this.Tf,
      ly: this.Uf,
      lka: this.Rc,
      t: this.ml,
      e: this.enabled,
    };
  };
  f.cb = function (d) {
    this.he = d.acc;
    this.Vj = d.g;
    this.ob = d.dx;
    this.Wa = d.dy;
    this.Tf = d.lx;
    this.Uf = d.ly;
    this.Rc = d.lka;
    this.ml = d.t;
    this.enabled = d.e;
  };
  f.Ta = function () {
    if (this.enabled) {
      var d = this.b.Kf(this.j),
        f,
        b;
      this.j.q !== this.Rc &&
        (this.Zn &&
          ((f = Sa(0, 0, this.ob, this.Wa)),
          (this.ob = Math.cos(this.j.q) * f),
          (this.Wa = Math.sin(this.j.q) * f)),
        (this.Rc = this.j.q));
      0 !== this.he &&
        ((f = Sa(0, 0, this.ob, this.Wa)),
        (b =
          0 === this.ob && 0 === this.Wa
            ? this.j.q
            : Na(0, 0, this.ob, this.Wa)),
        (f += this.he * d),
        0 > f && (f = 0),
        (this.ob = Math.cos(b) * f),
        (this.Wa = Math.sin(b) * f));
      0 !== this.Vj && (this.Wa += this.Vj * d);
      this.Tf = this.j.x;
      this.Uf = this.j.y;
      if (0 !== this.ob || 0 !== this.Wa)
        if (
          ((this.j.x += this.ob * d),
          (this.j.y += this.Wa * d),
          (this.ml += Sa(0, 0, this.ob * d, this.Wa * d)),
          this.Zn &&
            ((this.j.q = Na(0, 0, this.ob, this.Wa)),
            this.j.P(),
            (this.Rc = this.j.q)),
          this.j.P(),
          this.jv && (f = this.b.fg(this.j)))
        )
          this.b.by(this.j, f),
            (f = Sa(0, 0, this.ob, this.Wa)),
            (b = this.b.nv(this.j, this.Tf, this.Uf)),
            (this.ob = Math.cos(b) * f),
            (this.Wa = Math.sin(b) * f),
            (this.j.x += this.ob * d),
            (this.j.y += this.Wa * d),
            this.j.P(),
            this.Zn && ((this.Rc = this.j.q = b), this.j.P()),
            this.b.Zx(
              this.j,
              this.ob / f,
              this.Wa / f,
              Math.max(2.5 * f * d, 30)
            ) || this.b.$x(this.j);
    }
  };
  d.k = new (function () {})();
  g.prototype.gp = function (d) {
    var f = Na(0, 0, this.ob, this.Wa);
    this.ob = Math.cos(f) * d;
    this.Wa = Math.sin(f) * d;
  };
  g.prototype.Xt = function (d) {
    d = E(d);
    var f = Sa(0, 0, this.ob, this.Wa);
    this.ob = Math.cos(d) * f;
    this.Wa = Math.sin(d) * f;
  };
  d.u = new g();
  l.prototype.jp = function (d) {
    var f = Sa(0, 0, this.ob, this.Wa),
      f = nb(f);
    d.F(f);
  };
  d.D = new l();
})();
function Bc(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  var d = Bc.prototype;
  d.L = function (d) {
    this.behavior = d;
    this.b = d.b;
  };
  d.L.prototype.I = function () {};
  d.J = function (d, f) {
    this.type = d;
    this.behavior = d.behavior;
    this.j = f;
    this.b = d.b;
  };
  var f = d.J.prototype;
  f.I = function () {
    this.jb = null;
    this.Kk = -1;
    this.mode = this.Rc = this.jl = this.Qg = this.Ge = this.Ai = 0;
    var d = this;
    this.Kc ||
      (this.Fq = function (f) {
        d.tn(f);
      });
    this.b.Rl(this.Fq);
  };
  f.Sa = function () {
    return {
      uid: this.jb ? this.jb.uid : -1,
      pa: this.Ai,
      pd: this.Ge,
      msa: this.Qg,
      tsa: this.jl,
      lka: this.Rc,
      m: this.mode,
    };
  };
  f.cb = function (d) {
    this.Kk = d.uid;
    this.Ai = d.pa;
    this.Ge = d.pd;
    this.Qg = d.msa;
    this.jl = d.tsa;
    this.Rc = d.lka;
    this.mode = d.m;
  };
  f.Dd = function () {
    -1 === this.Kk ? (this.jb = null) : (this.jb = this.b.Qh(this.Kk));
    this.Kk = -1;
  };
  f.tn = function (d) {
    this.jb == d && (this.jb = null);
  };
  f.pf = function () {
    this.jb = null;
    this.b.fy(this.Fq);
  };
  f.Ta = function () {};
  f.ih = function () {
    if (this.jb) {
      this.Rc !== this.j.q && (this.Qg = Ka(this.Qg + (this.j.q - this.Rc)));
      var d = this.j.x,
        f = this.j.y;
      if (3 === this.mode || 4 === this.mode) {
        var b = Sa(this.j.x, this.j.y, this.jb.x, this.jb.y);
        if (b > this.Ge || (4 === this.mode && b < this.Ge))
          (f = Na(this.jb.x, this.jb.y, this.j.x, this.j.y)),
            (d = this.jb.x + Math.cos(f) * this.Ge),
            (f = this.jb.y + Math.sin(f) * this.Ge);
      } else
        (d = this.jb.x + Math.cos(this.jb.q + this.Ai) * this.Ge),
          (f = this.jb.y + Math.sin(this.jb.q + this.Ai) * this.Ge);
      this.Rc = b = Ka(this.Qg + (this.jb.q - this.jl));
      (0 !== this.mode &&
        1 !== this.mode &&
        3 !== this.mode &&
        4 !== this.mode) ||
        (this.j.x === d && this.j.y === f) ||
        ((this.j.x = d), (this.j.y = f), this.j.P());
      (0 !== this.mode && 2 !== this.mode) ||
        this.j.q === b ||
        ((this.j.q = b), this.j.P());
    }
  };
  g.prototype.Ss = function () {
    return !!this.jb;
  };
  d.k = new g();
  l.prototype.Pt = function (d, f) {
    if (d) {
      var b = d.Zp(this.j);
      b &&
        ((this.jb = b),
        (this.Ai = Na(b.x, b.y, this.j.x, this.j.y) - b.q),
        (this.Ge = Sa(b.x, b.y, this.j.x, this.j.y)),
        (this.Rc = this.Qg = this.j.q),
        (this.jl = b.q),
        (this.mode = f));
    }
  };
  l.prototype.Ju = function () {
    this.jb = null;
  };
  d.u = new l();
  d.D = new (function () {})();
})();
function Cc(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  var d = Cc.prototype;
  d.L = function (d) {
    this.behavior = d;
    this.b = d.b;
  };
  d.L.prototype.I = function () {};
  d.J = function (d, f) {
    this.type = d;
    this.behavior = d.behavior;
    this.j = f;
    this.b = d.b;
  };
  var f = d.J.prototype;
  f.I = function () {
    this.speed = E(this.C[0]);
    this.he = E(this.C[1]);
  };
  f.Sa = function () {
    return {
      speed: this.speed,
      acc: this.he,
    };
  };
  f.cb = function (d) {
    this.speed = d.speed;
    this.he = d.acc;
  };
  f.Ta = function () {
    var d = this.b.Kf(this.j);
    0 !== d &&
      (0 !== this.he && (this.speed += this.he * d),
      0 !== this.speed &&
        ((this.j.q = Ka(this.j.q + this.speed * d)), this.j.P()));
  };
  d.k = new (function () {})();
  g.prototype.gp = function (d) {
    this.speed = E(d);
  };
  d.u = new g();
  l.prototype.jp = function (d) {
    d.F(Ia(this.speed));
  };
  d.D = new l();
})();
function Dc(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  var d = Dc.prototype;
  d.L = function (b) {
    this.behavior = b;
    this.b = b.b;
  };
  d.L.prototype.I = function () {};
  d.J = function (b, d) {
    this.type = b;
    this.behavior = b.behavior;
    this.j = d;
    this.b = b.b;
    this.ab = 0;
  };
  var f = d.J.prototype,
    e = 2 * Math.PI,
    p = Math.PI / 2,
    b = (3 * Math.PI) / 2;
  f.I = function () {
    this.yb = 1 === this.C[0];
    this.ri = this.C[1];
    this.xo = this.C[2];
    this.Fe = this.C[3];
    this.Fe += Math.random() * this.C[4];
    0 === this.Fe
      ? (this.ab = 0)
      : ((this.ab = (this.C[5] / this.Fe) * e),
        (this.ab += ((Math.random() * this.C[6]) / this.Fe) * e));
    this.sc = this.C[7];
    this.sc += Math.random() * this.C[8];
    this.Ei = this.Of = this.na = 0;
    this.init();
  };
  f.Sa = function () {
    return {
      i: this.ab,
      a: this.yb,
      mv: this.ri,
      w: this.xo,
      p: this.Fe,
      mag: this.sc,
      iv: this.na,
      iv2: this.Of,
      r: this.Ei,
      lkv: this.da,
      lkv2: this.Qa,
    };
  };
  f.cb = function (b) {
    this.ab = b.i;
    this.yb = b.a;
    this.ri = b.mv;
    this.xo = b.w;
    this.Fe = b.p;
    this.sc = b.mag;
    this.na = b.iv;
    this.Of = b.iv2 || 0;
    this.Ei = b.r;
    this.da = b.lkv;
    this.Qa = b.lkv2 || 0;
  };
  f.init = function () {
    switch (this.ri) {
      case 0:
        this.na = this.j.x;
        break;
      case 1:
        this.na = this.j.y;
        break;
      case 2:
        this.na = this.j.width;
        this.Ei = this.j.height / this.j.width;
        break;
      case 3:
        this.na = this.j.width;
        break;
      case 4:
        this.na = this.j.height;
        break;
      case 5:
        this.na = this.j.q;
        this.sc = E(this.sc);
        break;
      case 6:
        this.na = this.j.opacity;
        break;
      case 7:
        this.na = 0;
        break;
      case 8:
        (this.na = this.j.x), (this.Of = this.j.y);
    }
    this.da = this.na;
    this.Qa = this.Of;
  };
  f.ee = function (d) {
    d = d % e;
    switch (this.xo) {
      case 0:
        return Math.sin(d);
      case 1:
        return d <= p
          ? d / p
          : d <= b
          ? 1 - (2 * (d - p)) / Math.PI
          : (d - b) / p - 1;
      case 2:
        return (2 * d) / e - 1;
      case 3:
        return (-2 * d) / e + 1;
      case 4:
        return d < Math.PI ? -1 : 1;
    }
    return 0;
  };
  f.Ta = function () {
    var b = this.b.Kf(this.j);
    if (this.yb && 0 !== b) {
      0 === this.Fe
        ? (this.ab = 0)
        : ((this.ab += (b / this.Fe) * e), (this.ab = this.ab % e));
      switch (this.ri) {
        case 0:
          this.j.x !== this.da && (this.na += this.j.x - this.da);
          this.j.x = this.na + this.ee(this.ab) * this.sc;
          this.da = this.j.x;
          break;
        case 1:
          this.j.y !== this.da && (this.na += this.j.y - this.da);
          this.j.y = this.na + this.ee(this.ab) * this.sc;
          this.da = this.j.y;
          break;
        case 2:
          this.j.width = this.na + this.ee(this.ab) * this.sc;
          this.j.height = this.j.width * this.Ei;
          break;
        case 3:
          this.j.width = this.na + this.ee(this.ab) * this.sc;
          break;
        case 4:
          this.j.height = this.na + this.ee(this.ab) * this.sc;
          break;
        case 5:
          this.j.q !== this.da &&
            (this.na = Ka(this.na + (this.j.q - this.da)));
          this.j.q = Ka(this.na + this.ee(this.ab) * this.sc);
          this.da = this.j.q;
          break;
        case 6:
          this.j.opacity = this.na + (this.ee(this.ab) * this.sc) / 100;
          0 > this.j.opacity
            ? (this.j.opacity = 0)
            : 1 < this.j.opacity && (this.j.opacity = 1);
          break;
        case 8:
          this.j.x !== this.da && (this.na += this.j.x - this.da),
            this.j.y !== this.Qa && (this.Of += this.j.y - this.Qa),
            (this.j.x =
              this.na + Math.cos(this.j.q) * this.ee(this.ab) * this.sc),
            (this.j.y =
              this.Of + Math.sin(this.j.q) * this.ee(this.ab) * this.sc),
            (this.da = this.j.x),
            (this.Qa = this.j.y);
      }
      this.j.P();
    }
  };
  f.Rq = function (b, d) {
    switch (this.ri) {
      case 2:
        this.na *= d.width / b.width;
        this.Ei = d.height / d.width;
        break;
      case 3:
        this.na *= d.width / b.width;
        break;
      case 4:
        this.na *= d.height / b.height;
    }
  };
  g.prototype.Gs = function () {
    return this.yb;
  };
  d.k = new g();
  d.u = new (function () {})();
  l.prototype.Ku = function (b) {
    b.F(this.ee(this.ab) * this.sc);
  };
  d.D = new l();
})();
function Ec(g) {
  this.b = g;
}
(function () {
  function g() {}
  function l() {}
  function d() {}
  var f = Ec.prototype;
  f.L = function (d) {
    this.behavior = d;
    this.b = d.b;
  };
  f.L.prototype.I = function () {};
  f.J = function (d, b) {
    this.type = d;
    this.behavior = d.behavior;
    this.j = b;
    this.b = d.b;
  };
  var e = f.J.prototype;
  e.I = function () {
    this.Nb = {};
  };
  e.pf = function () {
    Wa(this.Nb);
  };
  e.Sa = function () {
    var d = {},
      b,
      e;
    for (b in this.Nb)
      this.Nb.hasOwnProperty(b) &&
        ((e = this.Nb[b]),
        (d[b] = {
          c: e.current.M,
          t: e.total.M,
          d: e.duration,
          r: e.Mn,
        }));
    return d;
  };
  e.cb = function (d) {
    this.Nb = {};
    for (var b in d)
      d.hasOwnProperty(b) &&
        ((this.Nb[b] = {
          current: new bb(),
          total: new bb(),
          duration: d[b].d,
          Mn: d[b].r,
        }),
        (this.Nb[b].current.M = d[b].c),
        (this.Nb[b].total.M = d[b].t));
  };
  e.Ta = function () {
    var d = this.b.Kf(this.j),
      b,
      e;
    for (b in this.Nb)
      this.Nb.hasOwnProperty(b) &&
        ((e = this.Nb[b]), e.current.add(d), e.total.add(d));
  };
  e.ih = function () {
    var d, b;
    for (d in this.Nb)
      this.Nb.hasOwnProperty(d) &&
        ((b = this.Nb[d]),
        b.current.M >= b.duration &&
          (b.Mn ? (b.current.M -= b.duration) : delete this.Nb[d]));
  };
  g.prototype.Kt = function (d) {
    d = d.toLowerCase();
    return (d = this.Nb[d]) ? d.current.M >= d.duration : !1;
  };
  f.k = new g();
  l.prototype.Eu = function (d, b, e) {
    this.Nb[e.toLowerCase()] = {
      current: new bb(),
      total: new bb(),
      duration: d,
      Mn: 1 === b,
    };
  };
  f.u = new l();
  d.prototype.Hu = function (d, b) {
    var e = this.Nb[b.toLowerCase()];
    d.F(e ? e.total.M : 0);
  };
  d.prototype.Bl = function (d, b) {
    var e = this.Nb[b.toLowerCase()];
    d.F(e ? e.duration : 0);
  };
  f.D = new d();
})();
var Fc = [],
  Gc = [],
  Hc = [],
  Ic = [],
  Jc = [],
  Nc = [],
  Oc = [],
  Pc = [],
  Qc = [];
function Rc(g, l) {
  return Math.round((g / l) * 1e4);
}
function Sc(g, l, d, f) {
  var e = 0;
  switch (g) {
    case 0:
      e = (1 * l) / d + 0;
      break;
    case 1:
      e = 1 * (l /= d) * l + 0;
      break;
    case 2:
      e = -1 * (l /= d) * (l - 2) + 0;
      break;
    case 3:
      e = 1 > (l /= d / 2) ? 0.5 * l * l + 0 : -0.5 * (--l * (l - 2) - 1) + 0;
      break;
    case 4:
      e = 1 * (l /= d) * l * l + 0;
      break;
    case 5:
      e = 1 * ((l = l / d - 1) * l * l + 1) + 0;
      break;
    case 6:
      e =
        1 > (l /= d / 2)
          ? 0.5 * l * l * l + 0
          : 0.5 * ((l -= 2) * l * l + 2) + 0;
      break;
    case 7:
      e = 1 * (l /= d) * l * l * l + 0;
      break;
    case 8:
      e = -1 * ((l = l / d - 1) * l * l * l - 1) + 0;
      break;
    case 9:
      e =
        1 > (l /= d / 2)
          ? 0.5 * l * l * l * l + 0
          : -0.5 * ((l -= 2) * l * l * l - 2) + 0;
      break;
    case 10:
      e = 1 * (l /= d) * l * l * l * l + 0;
      break;
    case 11:
      e = 1 * ((l = l / d - 1) * l * l * l * l + 1) + 0;
      break;
    case 12:
      e =
        1 > (l /= d / 2)
          ? 0.5 * l * l * l * l * l + 0
          : 0.5 * ((l -= 2) * l * l * l * l + 2) + 0;
      break;
    case 13:
      e = Jc[Rc(l, d)];
      break;
    case 14:
      e = Nc[Rc(l, d)];
      break;
    case 15:
      e = Oc[Rc(l, d)];
      break;
    case 16:
      g = 0;
      0 == g && (g = 1.70158);
      e = 1 * (l /= d) * l * ((g + 1) * l - g) + 0;
      break;
    case 17:
      e = Pc[Rc(l, d)];
      break;
    case 18:
      e = Qc[Rc(l, d)];
      break;
    case 19:
      e = Gc[Rc(l, d)];
      break;
    case 20:
      e = Hc[Rc(l, d)];
      break;
    case 21:
      e = Ic[Rc(l, d)];
      break;
    case 22:
      e = 1 - Fc[Rc(d - l, d)] + 0;
      break;
    case 23:
      e = Fc[Rc(l, d)];
      break;
    case 24:
      e =
        l < d / 2
          ? 0.5 * (1 - Fc[Rc(d - 2 * l, d)] + 0) + 0
          : 0.5 * Fc[Rc(2 * l - d, d)] + 0.5;
      break;
    case 25:
      l = l / d / 2;
      e = 2 * l * l * (3 - 2 * l);
      break;
    case 26:
      l = (l / d + 1) / 2;
      e = 2 * l * l * (3 - 2 * l) - 1;
      break;
    case 27:
      (l = l / d), (e = l * l * (3 - 2 * l));
  }
  return f ? 1 - e : e;
}
for (var Tc = 0, Uc = 0, Vc = 0, W = 0, Z = 0, Wc = 0; 1e4 >= Wc; Wc++) {
  W = Wc / 1e4;
  (W /= 1) < 1 / 2.75 ||
    (W < 2 / 2.75
      ? (W -= 1.5 / 2.75)
      : W < 2.5 / 2.75
      ? (W -= 2.25 / 2.75)
      : (W -= 2.625 / 2.75));
  var Xc,
    Yc = Wc / 1e4;
  Xc =
    (Yc /= 1) < 1 / 2.75
      ? 7.5625 * Yc * Yc + 0
      : Yc < 2 / 2.75
      ? 1 * (7.5625 * (Yc -= 1.5 / 2.75) * Yc + 0.75) + 0
      : Yc < 2.5 / 2.75
      ? 1 * (7.5625 * (Yc -= 2.25 / 2.75) * Yc + 0.9375) + 0
      : 1 * (7.5625 * (Yc -= 2.625 / 2.75) * Yc + 0.984375) + 0;
  Fc[Wc] = Xc;
  W = Wc / 1e4;
  Vc = Uc = 0;
  W /= 1;
  0 == Vc && (Vc = 0.3);
  0 == Uc || Uc < Math.abs(1)
    ? ((Uc = 1), (Z = Vc / 4))
    : (Z = (Vc / (2 * Math.PI)) * Math.asin(1 / Uc));
  Tc =
    -(Uc * Math.pow(2, 10 * --W) * Math.sin((2 * (1 * W - Z) * Math.PI) / Vc)) +
    0;
  Gc[Wc] = Tc;
  W = Wc / 1e4;
  Vc = Uc = 0;
  W /= 1;
  0 == Vc && (Vc = 0.3);
  0 == Uc || Uc < Math.abs(1)
    ? ((Uc = 1), (Z = Vc / 4))
    : (Z = (Vc / (2 * Math.PI)) * Math.asin(1 / Uc));
  Tc =
    Uc * Math.pow(2, -10 * W) * Math.sin((2 * (1 * W - Z) * Math.PI) / Vc) + 1;
  Hc[Wc] = Tc;
  W = Wc / 1e4;
  Vc = Uc = 0;
  W /= 0.5;
  0 == Vc && (Vc = 0.3 * 1.5);
  0 == Uc || Uc < Math.abs(1)
    ? ((Uc = 1), (Z = Vc / 4))
    : (Z = (Vc / (2 * Math.PI)) * Math.asin(1 / Uc));
  Tc =
    1 > W
      ? -0.5 *
          Uc *
          Math.pow(2, 10 * --W) *
          Math.sin((2 * (1 * W - Z) * Math.PI) / Vc) +
        0
      : Uc *
          Math.pow(2, -10 * --W) *
          Math.sin((2 * (1 * W - Z) * Math.PI) / Vc) *
          0.5 +
        1;
  Ic[Wc] = Tc;
  W = Wc / 1e4;
  Jc[Wc] = -(Math.sqrt(1 - W * W) - 1);
  W = Wc / 1e4;
  Nc[Wc] = Math.sqrt(1 - (W - 1) * (W - 1));
  W = Wc / 1e4;
  Tc =
    1 > (W /= 0.5)
      ? -0.5 * (Math.sqrt(1 - W * W) - 1) + 0
      : 0.5 * (Math.sqrt(1 - (W -= 2) * W) + 1) + 0;
  Oc[Wc] = Tc;
  W = Wc / 1e4;
  Z = 0;
  0 == Z && (Z = 1.70158);
  Tc = 1 * ((W = W / 1 - 1) * W * ((Z + 1) * W + Z) + 1) + 0;
  Pc[Wc] = Tc;
  W = Wc / 1e4;
  Z = 0;
  0 == Z && (Z = 1.70158);
  Tc =
    1 > (W /= 0.5)
      ? 0.5 * W * W * (((Z *= 1.525) + 1) * W - Z) + 0
      : 0.5 * ((W -= 2) * W * (((Z *= 1.525) + 1) * W + Z) + 2) + 0;
  Qc[Wc] = Tc;
}
function Zc(g, l, d, f, e, p, b) {
  this.name = g;
  this.value = 0;
  this.ah(f);
  this.Zk(e);
  this.Jj = d;
  this.mb = l;
  this.duration = p;
  this.state = this.aa = 0;
  this.Ek = this.Fk = this.Bk = this.Ug = !1;
  this.Qa = this.da = 0;
  this.Fc = b;
  this.He = 1;
  this.Oh = !1;
}
Zc.prototype = {};
Zc.prototype.ah = function (g) {
  this.Aa = parseFloat(g.split(",")[0]);
  this.Db = parseFloat(g.split(",")[1]);
  this.Qa = this.da = 0;
};
Zc.prototype.Zk = function (g) {
  this.xa = parseFloat(g.split(",")[0]);
  this.lb = parseFloat(g.split(",")[1]);
  isNaN(this.lb) && (this.lb = this.xa);
};
Zc.prototype.Gl = function (g) {
  if (0 === this.state) return -1;
  1 === this.state && (this.aa += g);
  2 === this.state && (this.aa -= g);
  3 === this.state && (this.state = 0);
  if (4 === this.state || 6 === this.state) this.aa += g * this.He;
  5 === this.state && (this.aa += g * this.He);
  return 0 > this.aa
    ? ((this.aa = 0),
      4 === this.state
        ? (this.He = 1)
        : 6 === this.state
        ? ((this.He = 1), (this.Oh = !1))
        : (this.state = 0),
      (this.Ek = !0),
      0)
    : this.aa > this.duration
    ? ((this.aa = this.duration),
      4 === this.state
        ? (this.He = -1)
        : 6 === this.state
        ? ((this.He = -1), (this.Oh = !0))
        : 5 === this.state
        ? (this.aa = 0)
        : (this.state = 0),
      (this.Bk = !0),
      1)
    : this.Oh
    ? Sc(this.Jj, this.duration - this.aa, this.duration, this.Oh)
    : Sc(this.Jj, this.aa, this.duration, this.Oh);
};
function $c(g) {
  this.b = g;
}
(function () {
  var g = $c.prototype;
  g.L = function (d) {
    this.behavior = d;
    this.b = d.b;
  };
  g.L.prototype.I = function () {};
  g.J = function (d, f) {
    this.type = d;
    this.behavior = d.behavior;
    this.j = f;
    this.b = d.b;
    this.ab = 0;
  };
  var l = g.J.prototype;
  l.I = function () {
    this.Mk = this.C[0];
    this.yb = 1 == this.Mk || 2 == this.Mk || 3 == this.Mk || 4 == this.Mk;
    this.mb = this.C[1];
    this.Hv = this.C[2];
    this.target = this.C[3];
    this.Dr = this.C[4];
    this.Yr = !1;
    1 === this.Dr && (this.target = "relative(" + this.target + ")");
    this.duration = this.C[5];
    this.Fc = 1 === this.C[6];
    this.value = 0;
    this.R = {};
    this.tp(this.mb, this.Hv, "current", this.target, this.duration, this.Fc);
    1 === this.C[0] && this.Ri(0);
    2 === this.C[0] && this.Ri(2);
    3 === this.C[0] && this.Ri(3);
    4 === this.C[0] && this.Ri(4);
  };
  l.Vd = function (d, f) {
    void 0 === f && (f = "current");
    var e = f.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    f = f.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    var g = this.value;
    if ("current" === f)
      switch (d) {
        case 0:
          e = this.j.x + "," + this.j.y;
          break;
        case 1:
          e = this.j.width + "," + this.j.height;
          break;
        case 2:
          e = this.j.width + "," + this.j.height;
          break;
        case 3:
          e = this.j.width + "," + this.j.height;
          break;
        case 4:
          e = Ia(this.j.q) + "," + Ia(this.j.q);
          break;
        case 5:
          e = 100 * this.j.opacity + "," + 100 * this.j.opacity;
          break;
        case 6:
          e = g + "," + g;
          break;
        case 7:
          e = this.j.x + "," + this.j.y;
          break;
        case 8:
          e = this.j.x + "," + this.j.y;
          break;
        case 9:
          e =
            void 0 !== this.j.Va
              ? this.j.width / this.j.Va.width +
                "," +
                this.j.height / this.j.Va.height
              : "1,1";
      }
    if ("relative" === f.substring(0, 8)) {
      var b = f.match(/\((.*?)\)/);
      if (b)
        var k = parseFloat(b[1].split(",")[0]),
          l = parseFloat(b[1].split(",")[1]);
      isNaN(k) && (k = 0);
      isNaN(l) && (l = 0);
      switch (d) {
        case 0:
          e = this.j.x + k + "," + (this.j.y + l);
          break;
        case 1:
          e = this.j.width + k + "," + (this.j.height + l);
          break;
        case 2:
          e = this.j.width + k + "," + (this.j.height + l);
          break;
        case 3:
          e = this.j.width + k + "," + (this.j.height + l);
          break;
        case 4:
          e = Ia(this.j.q) + k + "," + (Ia(this.j.q) + l);
          break;
        case 5:
          e = 100 * this.j.opacity + k + "," + (100 * this.j.opacity + l);
          break;
        case 6:
          e = g + k + "," + g + k;
          break;
        case 7:
          e = this.j.x + k + "," + this.j.y;
          break;
        case 8:
          e = this.j.x + "," + (this.j.y + k);
          break;
        case 9:
          e = k + "," + l;
      }
    }
    return e;
  };
  l.tp = function (d, f, e, g, b, k) {
    e = this.Vd(d, e);
    g = this.Vd(d, g);
    void 0 !== this.R["default"] && delete this.R["default"];
    this.R["default"] = new Zc("default", d, f, e, g, b, k);
    this.R["default"].re = 0;
  };
  l.Sa = function () {};
  l.cb = function () {};
  l.By = function (d) {
    1 < d && (d = 1);
    0 > d && (d = 0);
    for (var f in this.R) {
      var e = this.R[f];
      e.da = 0;
      e.Qa = 0;
      e.state = 3;
      e.aa = d * e.duration;
      var g = e.Gl(0);
      this.ro(e, g);
    }
  };
  l.Ri = function (d) {
    for (var f in this.R) {
      var e = this.R[f];
      if (this.Yr) {
        var g = this.Vd(e.mb, "current"),
          b = this.Vd(e.mb, this.target);
        e.ah(g);
        e.Zk(b);
      }
      0 === d &&
        ((e.aa = 1e-6), (e.da = 0), (e.Qa = 0), (e.Ug = !0), (e.state = 1));
      1 === d && (e.state = 1);
      if (2 === d || 4 === d)
        (e.aa = 1e-6),
          (e.da = 0),
          (e.Qa = 0),
          (e.Ug = !0),
          2 == d && (e.state = 4),
          4 == d && (e.state = 6);
      3 === d &&
        ((e.aa = 1e-6), (e.da = 0), (e.Qa = 0), (e.Ug = !0), (e.state = 5));
    }
  };
  l.Iy = function (d) {
    for (var f in this.R) {
      var e = this.R[f];
      1 === d && (e.aa = 0);
      2 === d && (e.aa = e.duration);
      e.state = 3;
      var g = e.Gl(0);
      this.ro(e, g);
    }
  };
  l.jy = function (d) {
    for (var f in this.R) {
      var e = this.R[f];
      1 === d && ((e.aa = e.duration), (e.da = 0), (e.Qa = 0), (e.Fk = !0));
      e.state = 2;
    }
  };
  l.ro = function (d, f) {
    if (0 === d.mb)
      d.Fc
        ? ((this.j.x = d.Aa + (d.xa - d.Aa) * f),
          (this.j.y = d.Db + (d.lb - d.Db) * f))
        : ((this.j.x += (d.xa - d.Aa) * f - d.da),
          (this.j.y += (d.lb - d.Db) * f - d.Qa),
          (d.da = (d.xa - d.Aa) * f),
          (d.Qa = (d.lb - d.Db) * f));
    else if (1 === d.mb)
      d.Fc
        ? ((this.j.width = d.Aa + (d.xa - d.Aa) * f),
          (this.j.height = d.Db + (d.lb - d.Db) * f))
        : ((this.j.width += (d.xa - d.Aa) * f - d.da),
          (this.j.height += (d.lb - d.Db) * f - d.Qa),
          (d.da = (d.xa - d.Aa) * f),
          (d.Qa = (d.lb - d.Db) * f));
    else if (2 === d.mb)
      d.Fc
        ? (this.j.width = d.Aa + (d.xa - d.Aa) * f)
        : ((this.j.width += (d.xa - d.Aa) * f - d.da),
          (d.da = (d.xa - d.Aa) * f));
    else if (3 === d.mb)
      d.Fc
        ? (this.j.height = d.Db + (d.lb - d.Db) * f)
        : ((this.j.height += (d.lb - d.Db) * f - d.Qa),
          (d.Qa = (d.lb - d.Db) * f));
    else if (4 === d.mb)
      if (d.Fc) {
        var e = d.Aa + (d.xa - d.Aa) * f;
        this.j.q = Ka(E(e));
      } else
        (e = (d.xa - d.Aa) * f - d.da),
          (this.j.q = Ka(this.j.q + E(e))),
          (d.da = (d.xa - d.Aa) * f);
    else if (5 === d.mb)
      d.Fc
        ? (this.j.opacity = (d.Aa + (d.xa - d.Aa) * f) / 100)
        : ((this.j.opacity += ((d.xa - d.Aa) * f - d.da) / 100),
          (d.da = (d.xa - d.Aa) * f));
    else if (6 === d.mb)
      d.Fc
        ? (this.value = d.Aa + (d.xa - d.Aa) * f)
        : ((this.value += (d.xa - d.Aa) * f - d.da),
          (d.da = (d.xa - d.Aa) * f));
    else if (7 === d.mb)
      d.Fc
        ? (this.j.x = d.Aa + (d.xa - d.Aa) * f)
        : ((this.j.x += (d.xa - d.Aa) * f - d.da), (d.da = (d.xa - d.Aa) * f));
    else if (8 === d.mb)
      d.Fc
        ? (this.j.y = d.Db + (d.lb - d.Db) * f)
        : ((this.j.y += (d.lb - d.Db) * f - d.Qa), (d.Qa = (d.lb - d.Db) * f));
    else if (9 === d.mb) {
      var e = d.Aa + (d.xa - d.Aa) * f,
        g = d.Db + (d.lb - d.Db) * f;
      0 > this.j.width && (e = d.Aa + (d.xa + d.Aa) * -f);
      0 > this.j.height && (g = d.Db + (d.lb + d.Db) * -f);
      d.Fc
        ? ((this.j.width = this.j.Va.width * e),
          (this.j.height = this.j.Va.height * g))
        : (0 > this.j.width
            ? ((this.j.width = (this.j.width / (-1 + d.da)) * e),
              (d.da = e + 1))
            : ((this.j.width = (this.j.width / (1 + d.da)) * e),
              (d.da = e - 1)),
          0 > this.j.height
            ? ((this.j.height = (this.j.height / (-1 + d.Qa)) * g),
              (d.Qa = g + 1))
            : ((this.j.height = (this.j.height / (1 + d.Qa)) * g),
              (d.Qa = g - 1)));
    }
    this.j.P();
  };
  l.Ta = function () {
    var d = this.b.Kf(this.j),
      f = this.R["default"];
    0 !== f.state &&
      (f.Ug && (this.b.trigger($c.prototype.k.It, this.j), (f.Ug = !1)),
      f.Fk && (this.b.trigger($c.prototype.k.Gt, this.j), (f.Fk = !1)),
      (this.yb =
        1 == f.state ||
        2 == f.state ||
        4 == f.state ||
        5 == f.state ||
        6 == f.state),
      (d = f.Gl(d)),
      this.ro(f, d),
      f.Bk && (this.b.trigger($c.prototype.k.Oo, this.j), (f.Bk = !1)),
      f.Ek && (this.b.trigger($c.prototype.k.cp, this.j), (f.Ek = !1)));
  };
  g.k = {};
  l = g.k;
  l.Gs = function () {
    return 0 !== this.R["default"].state;
  };
  l.gz = function (d, f) {
    var e = this.R["default"];
    return gc(e.aa / e.duration, d, f);
  };
  l.It = function () {
    return void 0 === this.R["default"] ? !1 : this.R["default"].Ug;
  };
  l.Gt = function () {
    return void 0 === this.R["default"] ? !1 : this.R["default"].Fk;
  };
  l.Oo = function () {
    return void 0 === this.R["default"] ? !1 : this.R["default"].Bk;
  };
  l.cp = function () {
    return void 0 === this.R["default"] ? !1 : this.R["default"].Ek;
  };
  g.u = {};
  l = g.u;
  l.Cu = function (d, f) {
    this.Yr = 1 == f;
    this.Ri(d);
  };
  l.Ll = function (d) {
    this.Iy(d);
  };
  l.Wt = function (d) {
    this.jy(d);
  };
  l.zz = function (d) {
    this.By(d);
  };
  l.au = function (d) {
    isNaN(d) ||
      0 > d ||
      void 0 === this.R["default"] ||
      (this.R["default"].duration = d);
  };
  l.Jz = function (d) {
    void 0 !== this.R["default"] && (this.R["default"].Fc = 1 === d);
  };
  l.Kz = function (d) {
    void 0 !== this.R["default"] &&
      ((d = this.Vd(this.R["default"].mb, d)), this.R["default"].ah(d));
  };
  l.qu = function (d, f, e) {
    if (void 0 !== this.R["default"] && !isNaN(e)) {
      var g = this.R["default"],
        b = e + "";
      this.Dr = f;
      var k = "",
        l = "";
      if (1 === f) {
        this.target = "relative(" + b + ")";
        switch (d) {
          case 0:
            k = this.j.x + e;
            l = g.lb;
            break;
          case 1:
            k = g.xa;
            l = this.j.y + e;
            break;
          case 2:
            l = k = "" + Ia(this.j.q + E(e));
            break;
          case 3:
            l = k = "" + 100 * this.j.opacity + e;
            break;
          case 4:
            k = this.j.width + e;
            l = g.lb;
            break;
          case 5:
            k = g.xa;
            l = this.j.height + e;
            break;
          case 6:
            l = k = e;
        }
        b = k + "," + l;
      } else {
        switch (d) {
          case 0:
            k = e;
            l = g.lb;
            break;
          case 1:
            k = g.xa;
            l = e;
            break;
          case 2:
            l = k = e;
            break;
          case 3:
            l = k = e;
            break;
          case 4:
            k = e;
            l = g.lb;
            break;
          case 5:
            k = g.xa;
            l = e;
            break;
          case 6:
            l = k = e;
        }
        this.target = b = k + "," + l;
      }
      d = this.Vd(this.R["default"].mb, "current");
      b = this.Vd(this.R["default"].mb, b);
      g.ah(d);
      g.Zk(b);
    }
  };
  l.tu = function (d) {
    void 0 !== this.R["default"] && (this.R["default"].mb = d);
  };
  l.bu = function (d) {
    void 0 !== this.R["default"] && (this.R["default"].Jj = d);
  };
  l.Nz = function (d) {
    var f = this.R["default"];
    this.value = d;
    6 === f.mb && f.ah(this.Vd(f.mb, "current"));
  };
  l.Lz = function (d, f, e, g, b) {
    if (void 0 === this.R["default"]) this.tp(d, f, initial, e, g, b);
    else {
      var k = this.R["default"];
      k.mb = d;
      k.Jj = f;
      k.ah(this.Vd(d, "current"));
      k.Zk(this.Vd(d, e));
      k.duration = g;
      k.Fc = 1 === b;
    }
  };
  g.D = {};
  g = g.D;
  g.Tt = function (d) {
    d.F(this.R["default"].aa / this.R["default"].duration);
  };
  g.Bl = function (d) {
    d.F(this.R["default"].duration);
  };
  g.Pz = function (d) {
    var f = this.R["default"],
      e = "N/A";
    switch (f.mb) {
      case 0:
        e = f.xa;
        break;
      case 1:
        e = f.lb;
        break;
      case 2:
        e = f.xa;
        break;
      case 3:
        e = f.xa;
        break;
      case 4:
        e = f.xa;
        break;
      case 5:
        e = f.lb;
        break;
      case 6:
        e = f.xa;
    }
    d.F(e);
  };
  g.Ku = function (d) {
    d.F(this.value);
  };
})();
function bd(g) {
  this.b = g;
  this.al = this.Oi = this.bg = this.$k = 0;
}
(function () {
  function g() {}
  var l = bd.prototype;
  l.L = function (d) {
    this.behavior = d;
    this.b = d.b;
  };
  l.L.prototype.I = function () {};
  l.J = function (d, e) {
    this.type = d;
    this.behavior = d.behavior;
    this.j = e;
    this.b = d.b;
  };
  var d = l.J.prototype;
  d.I = function () {
    this.enabled = 0 !== this.C[0];
  };
  d.Sa = function () {
    return {
      smg: this.behavior.$k,
      ss: this.behavior.bg,
      se: this.behavior.Oi,
      smd: this.behavior.al,
    };
  };
  d.cb = function (d) {
    this.behavior.$k = d.smg;
    this.behavior.bg = d.ss;
    this.behavior.Oi = d.se;
    this.behavior.al = d.smd;
  };
  d.Ta = function () {};
  d.ih = function () {
    if (this.enabled) {
      var d = this.behavior.yk.Oe(),
        e = 0,
        g = 0,
        b,
        k,
        l,
        r = 0;
      b = 0;
      for (k = d.length; b < k; b++) {
        a: {
          l = d[b];
          for (
            var a = void 0, c = void 0, m = void 0, a = 0, c = l.V.length;
            a < c;
            ++a
          )
            if (((m = l.V[a]), m.behavior instanceof bd)) {
              l = m;
              break a;
            }
          l = null;
        }
        l && l.enabled && ((e += d[b].x), (g += d[b].y), ++r);
      }
      d = this.j.A.Gb;
      k = this.b.qb.M;
      l = b = 0;
      k >= this.behavior.bg &&
        k < this.behavior.Oi &&
        ((b = this.behavior.$k * Math.min(this.b.xf, 1)),
        0 === this.behavior.al &&
          (b *=
            1 - (k - this.behavior.bg) / (this.behavior.Oi - this.behavior.bg)),
        (k = Math.random() * Math.PI * 2),
        (l = Math.random() * b),
        (b = Math.cos(k) * l),
        (l *= Math.sin(k)));
      d.Xn(e / r + b);
      d.Yn(g / r + l);
    }
  };
  g.prototype.yu = function (d, e, g) {
    this.behavior.$k = d;
    this.behavior.bg = this.b.qb.M;
    this.behavior.Oi = this.behavior.bg + e;
    this.behavior.al = g;
  };
  l.u = new g();
})();
function ic() {
  return [
    tc,
    yc,
    kc,
    xc,
    lc,
    S,
    mc,
    jc,
    nc,
    rc,
    sc,
    P,
    uc,
    vc,
    wc,
    Dc,
    bd,
    Ac,
    Cc,
    Bc,
    Ec,
    $c,
    zc,
    H.prototype.k.Ns,
    H.prototype.k.Vo,
    H.prototype.u.uu,
    P.prototype.u.$t,
    $c.prototype.u.Ll,
    sc.prototype.k.Rs,
    P.prototype.k.Ot,
    P.prototype.k.zl,
    sc.prototype.k.Js,
    H.prototype.k.ns,
    jc.prototype.D.Eo,
    P.prototype.D.Ho,
    P.prototype.u.Zt,
    wc.prototype.k.Xs,
    wc.prototype.k.Jl,
    wc.prototype.k.Hl,
    P.prototype.k.Go,
    $c.prototype.u.tu,
    $c.prototype.u.bu,
    $c.prototype.u.au,
    $c.prototype.u.qu,
    P.prototype.D.Nu,
    P.prototype.D.Fs,
    wc.prototype.k.ep,
    $c.prototype.u.Cu,
    $c.prototype.k.Oo,
    $c.prototype.u.Wt,
    jc.prototype.u.CallFunction,
    tc.prototype.k.Cl,
    P.prototype.D.Io,
    P.prototype.u.us,
    H.prototype.u.ts,
    tc.prototype.D.Io,
    P.prototype.u.hp,
    P.prototype.u.mu,
    P.prototype.u.eu,
    $c.prototype.k.cp,
    H.prototype.k.zs,
    P.prototype.k.Cl,
    Bc.prototype.u.Pt,
    uc.prototype.k.Cl,
    tc.prototype.u.Kl,
    H.prototype.D.Vy,
    tc.prototype.D.Ho,
    H.prototype.D.Wy,
    H.prototype.D.Zy,
    H.prototype.u.iu,
    jc.prototype.k.ij,
    tc.prototype.k.zl,
    jc.prototype.D.Mt,
    H.prototype.k.qs,
    H.prototype.D.Xy,
    H.prototype.D.Uy,
    tc.prototype.k.Go,
    P.prototype.u.du,
    P.prototype.u.ip,
    P.prototype.u.ft,
    P.prototype.u.et,
    P.prototype.u.Kl,
    wc.prototype.k.Il,
    H.prototype.k.Nt,
    P.prototype.D.es,
    H.prototype.D.rv,
    H.prototype.D["int"],
    jc.prototype.u.ou,
    H.prototype.D.Oy,
    H.prototype.k.Fo,
    H.prototype.D.Ny,
    uc.prototype.u.vu,
    H.prototype.u.cu,
    H.prototype.u.gu,
    H.prototype.u.hu,
    H.prototype.k.ws,
    H.prototype.D.re,
    jc.prototype.k.os,
    H.prototype.D["float"],
    H.prototype.u.Mu,
    H.prototype.u.Cs,
    H.prototype.k.Iu,
    H.prototype.u.Bu,
    uc.prototype.k.zl,
    uc.prototype.u.hp,
    H.prototype.k.Qs,
    P.prototype.u.Yt,
    H.prototype.u.cs,
    H.prototype.u.Lu,
    H.prototype.D.replace,
    mc.prototype.D.As,
    mc.prototype.k.Al,
    mc.prototype.u.bs,
    uc.prototype.u.ru,
    H.prototype.u.su,
    H.prototype.u.lu,
    H.prototype.D.round,
    H.prototype.D.Vf,
    H.prototype.k.El,
    P.prototype.u.nu,
    Ac.prototype.u.Xt,
    nc.prototype.k.Ko,
    Ac.prototype.u.gp,
    Ac.prototype.D.jp,
    H.prototype.D.Ep,
    P.prototype.k.Os,
    P.prototype.u.ku,
    P.prototype.k.nt,
    P.prototype.k.Hs,
    yc.prototype.u.ys,
    P.prototype.u.xu,
    H.prototype.k.vs,
    P.prototype.k.rs,
    P.prototype.u.wu,
    H.prototype.D.random,
    P.prototype.D.Ml,
    vc.prototype.D.Do,
    bd.prototype.u.yu,
    P.prototype.k.Jo,
    P.prototype.u.Du,
    P.prototype.u.pu,
    P.prototype.D.Nl,
    H.prototype.D.min,
    vc.prototype.D.hs,
    H.prototype.D.max,
    vc.prototype.D.gs,
    Ec.prototype.D.Bl,
    H.prototype.D.floor,
    Ec.prototype.D.Hu,
    uc.prototype.u.Kl,
    P.prototype.D.Do,
    Bc.prototype.u.Ju,
    Bc.prototype.k.Ss,
    Ec.prototype.u.Eu,
    Ec.prototype.k.Kt,
    lc.prototype.k.Ws,
    lc.prototype.u.Fu,
    lc.prototype.u.Qt,
    lc.prototype.u.Ll,
    lc.prototype.D.dt,
    H.prototype.k.Ps,
    lc.prototype.u.ju,
    rc.prototype.k.So,
    rc.prototype.k.Al,
    mc.prototype.u.$s,
    rc.prototype.D.Ys,
    rc.prototype.u.fu,
    mc.prototype.D.yl,
    mc.prototype.k.Ls,
    rc.prototype.u.Bs,
    S.prototype.k.sh,
    S.prototype.u.ms,
    S.prototype.k.Ms,
    S.prototype.u.js,
    S.prototype.u.Vt,
    xc.prototype.k.Us,
    xc.prototype.u.Rt,
    xc.prototype.k.Vs,
    xc.prototype.u.St,
    xc.prototype.k.Mo,
    xc.prototype.u.zu,
    xc.prototype.u.Au,
    S.prototype.u.Ds,
    S.prototype.u.xs,
    S.prototype.k.bp,
    S.prototype.k.Ts,
    mc.prototype.k.Es,
    kc.prototype.u.Ut,
    kc.prototype.k.uh,
    kc.prototype.D.bt,
  ];
}
