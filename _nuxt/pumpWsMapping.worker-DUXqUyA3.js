(function() {
	/**
	* @license
	* Copyright 2019 Google LLC
	* SPDX-License-Identifier: Apache-2.0
	*/
	const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), n = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), o = Symbol("Comlink.thrown"), a = (e) => "object" == typeof e && null !== e || "function" == typeof e, s = /* @__PURE__ */ new Map([["proxy", {
		canHandle: (t) => a(t) && t[e],
		serialize(e) {
			const { port1: t, port2: n } = new MessageChannel();
			return i(e, t), [n, [n]];
		},
		deserialize: (e) => (e.start(), function(e, t) {
			const n = /* @__PURE__ */ new Map();
			return e.addEventListener("message", function(e) {
				const { data: t } = e;
				if (!t || !t.id) return;
				const r = n.get(t.id);
				if (r) try {
					r(t);
				} finally {
					n.delete(t.id);
				}
			}), f(e, n, [], t);
		}(e))
	}], ["throw", {
		canHandle: (e) => a(e) && o in e,
		serialize({ value: e }) {
			let t;
			return t = e instanceof Error ? {
				isError: !0,
				value: {
					message: e.message,
					name: e.name,
					stack: e.stack
				}
			} : {
				isError: !1,
				value: e
			}, [t, []];
		},
		deserialize(e) {
			if (e.isError) throw Object.assign(new Error(e.value.message), e.value);
			throw e.value;
		}
	}]]);
	function i(t, n = globalThis, a = ["*"]) {
		n.addEventListener("message", function s(l) {
			if (!l || !l.data) return;
			if (!function(e, t) {
				for (const n of e) {
					if (t === n || "*" === n) return !0;
					if (n instanceof RegExp && n.test(t)) return !0;
				}
				return !1;
			}(a, l.origin)) return;
			const { id: u, type: g, path: p } = Object.assign({ path: [] }, l.data), f = (l.data.argumentList || []).map(d);
			let m;
			try {
				const n = p.slice(0, -1).reduce((e, t) => e[t], t), r = p.reduce((e, t) => e[t], t);
				switch (g) {
					case "GET":
						m = r;
						break;
					case "SET":
						n[p.slice(-1)[0]] = d(l.data.value), m = !0;
						break;
					case "APPLY":
						m = r.apply(n, f);
						break;
					case "CONSTRUCT":
						m = function(t) {
							return Object.assign(t, { [e]: !0 });
						}(new r(...f));
						break;
					case "ENDPOINT":
						{
							const { port1: e, port2: n } = new MessageChannel();
							i(t, n), m = function(e, t) {
								return h.set(e, t), e;
							}(e, [e]);
						}
						break;
					case "RELEASE":
						m = void 0;
						break;
					default: return;
				}
			} catch (b) {
				m = {
					value: b,
					[o]: 0
				};
			}
			Promise.resolve(m).catch((e) => ({
				value: e,
				[o]: 0
			})).then((e) => {
				const [o, a] = y(e);
				n.postMessage(Object.assign(Object.assign({}, o), { id: u }), a), "RELEASE" === g && (n.removeEventListener("message", s), c(n), r in t && "function" == typeof t[r] && t[r]());
			}).catch((e) => {
				const [t, r] = y({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[o]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, t), { id: u }), r);
			});
		}), n.start && n.start();
	}
	function c(e) {
		(function(e) {
			return "MessagePort" === e.constructor.name;
		})(e) && e.close();
	}
	function l(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function u(e) {
		return b(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			c(e);
		});
	}
	const g = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (g.get(e) || 0) - 1;
		g.set(e, t), 0 === t && u(e);
	});
	function f(e, r, o = [], a = function() {}) {
		let s = !1;
		const i = new Proxy(a, {
			get(t, a) {
				if (l(s), a === n) return () => {
					(function(e) {
						p && p.unregister(e);
					})(i), u(e), r.clear(), s = !0;
				};
				if ("then" === a) {
					if (0 === o.length) return { then: () => i };
					const t = b(e, r, {
						type: "GET",
						path: o.map((e) => e.toString())
					}).then(d);
					return t.then.bind(t);
				}
				return f(e, r, [...o, a]);
			},
			set(t, n, a) {
				l(s);
				const [i, c] = y(a);
				return b(e, r, {
					type: "SET",
					path: [...o, n].map((e) => e.toString()),
					value: i
				}, c).then(d);
			},
			apply(n, a, i) {
				l(s);
				const c = o[o.length - 1];
				if (c === t) return b(e, r, { type: "ENDPOINT" }).then(d);
				if ("bind" === c) return f(e, r, o.slice(0, -1));
				const [u, g] = m(i);
				return b(e, r, {
					type: "APPLY",
					path: o.map((e) => e.toString()),
					argumentList: u
				}, g).then(d);
			},
			construct(t, n) {
				l(s);
				const [a, i] = m(n);
				return b(e, r, {
					type: "CONSTRUCT",
					path: o.map((e) => e.toString()),
					argumentList: a
				}, i).then(d);
			}
		});
		return function(e, t) {
			const n = (g.get(t) || 0) + 1;
			g.set(t, n), p && p.register(e, t, e);
		}(i, e), i;
	}
	function m(e) {
		const t = e.map(y);
		return [t.map((e) => e[0]), (n = t.map((e) => e[1]), Array.prototype.concat.apply([], n))];
		var n;
	}
	const h = /* @__PURE__ */ new WeakMap();
	function y(e) {
		for (const [t, n] of s) if (n.canHandle(e)) {
			const [r, o] = n.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: r
			}, o];
		}
		return [{
			type: "RAW",
			value: e
		}, h.get(e) || []];
	}
	function d(e) {
		switch (e.type) {
			case "HANDLER": return s.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function b(e, t, n, r) {
		return new Promise((o) => {
			const a = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
			t.set(a, o), e.start && e.start(), e.postMessage(Object.assign({ id: a }, n), r);
		});
	}
	const E = [
		"id",
		"pair_id",
		"token",
		"progress",
		"symbol",
		"name",
		"logo_url",
		"logo_thumb"
	], k = new Set(E);
	function v(e) {
		if (!e) return;
		const t = Object.keys(e);
		for (let n = 0; n < t.length; n++) {
			const e = t[n];
			if (!k.has(e)) {
				if (E.length >= 256) return;
				k.add(e), E.push(e);
			}
		}
	}
	function w(e) {
		const t = e?.pair || null;
		v(e), v(t);
		const n = t?.target_token || "", r = e?.chain || "", o = t?.token0_address || "", a = {};
		for (let i = 0; i < E.length; i++) a[E[i]] = void 0;
		const s = Object.keys(e || {});
		for (let i = 0; i < s.length; i++) a[s[i]] = e[s[i]];
		if (t) {
			const e = Object.keys(t);
			for (let n = 0; n < e.length; n++) a[e[n]] = t[e[n]];
		}
		if (a.id = `${n}-${r}`, a.pair_id = `${t?.pair || ""}-${r}`, a.token = n, null != a.progress && "" !== a.progress || (a.progress = 0), a.symbol = t?.symbol ?? (n === o ? t?.token0_symbol : t?.token1_symbol), a.name = t?.name ?? (n === o ? t?.token0_name : t?.token1_name), !a.logo_url) {
			const e = n === o ? t?.token0_logo_url : t?.token1_logo_url;
			e && (a.logo_url = e);
		}
		return !a.logo_thumb && t?.logo_thumb && (a.logo_thumb = t.logo_thumb), a;
	}
	i({ mapWsList: (e) => Array.isArray(e) ? e.map(w) : [] });
})();
