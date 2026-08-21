(function() {
	/**
	* @license
	* Copyright 2019 Google LLC
	* SPDX-License-Identifier: Apache-2.0
	*/
	const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), n = Symbol("Comlink.releaseProxy"), r = Symbol("Comlink.finalizer"), a = Symbol("Comlink.thrown"), o = (e) => "object" == typeof e && null !== e || "function" == typeof e, s = /* @__PURE__ */ new Map([["proxy", {
		canHandle: (t) => o(t) && t[e],
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
		canHandle: (e) => o(e) && a in e,
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
	function i(t, n = globalThis, o = ["*"]) {
		n.addEventListener("message", function s(u) {
			if (!u || !u.data) return;
			if (!function(e, t) {
				for (const n of e) {
					if (t === n || "*" === n) return !0;
					if (n instanceof RegExp && n.test(t)) return !0;
				}
				return !1;
			}(o, u.origin)) return;
			const { id: l, type: p, path: g } = Object.assign({ path: [] }, u.data), f = (u.data.argumentList || []).map(b);
			let m;
			try {
				const n = g.slice(0, -1).reduce((e, t) => e[t], t), r = g.reduce((e, t) => e[t], t);
				switch (p) {
					case "GET":
						m = r;
						break;
					case "SET":
						n[g.slice(-1)[0]] = b(u.data.value), m = !0;
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
								return y.set(e, t), e;
							}(e, [e]);
						}
						break;
					case "RELEASE":
						m = void 0;
						break;
					default: return;
				}
			} catch (d) {
				m = {
					value: d,
					[a]: 0
				};
			}
			Promise.resolve(m).catch((e) => ({
				value: e,
				[a]: 0
			})).then((e) => {
				const [a, o] = h(e);
				n.postMessage(Object.assign(Object.assign({}, a), { id: l }), o), "RELEASE" === p && (n.removeEventListener("message", s), c(n), r in t && "function" == typeof t[r] && t[r]());
			}).catch((e) => {
				const [t, r] = h({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[a]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, t), { id: l }), r);
			});
		}), n.start && n.start();
	}
	function c(e) {
		(function(e) {
			return "MessagePort" === e.constructor.name;
		})(e) && e.close();
	}
	function u(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function l(e) {
		return d(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			c(e);
		});
	}
	const p = /* @__PURE__ */ new WeakMap(), g = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (p.get(e) || 0) - 1;
		p.set(e, t), 0 === t && l(e);
	});
	function f(e, r, a = [], o = function() {}) {
		let s = !1;
		const i = new Proxy(o, {
			get(t, o) {
				if (u(s), o === n) return () => {
					(function(e) {
						g && g.unregister(e);
					})(i), l(e), r.clear(), s = !0;
				};
				if ("then" === o) {
					if (0 === a.length) return { then: () => i };
					const t = d(e, r, {
						type: "GET",
						path: a.map((e) => e.toString())
					}).then(b);
					return t.then.bind(t);
				}
				return f(e, r, [...a, o]);
			},
			set(t, n, o) {
				u(s);
				const [i, c] = h(o);
				return d(e, r, {
					type: "SET",
					path: [...a, n].map((e) => e.toString()),
					value: i
				}, c).then(b);
			},
			apply(n, o, i) {
				u(s);
				const c = a[a.length - 1];
				if (c === t) return d(e, r, { type: "ENDPOINT" }).then(b);
				if ("bind" === c) return f(e, r, a.slice(0, -1));
				const [l, p] = m(i);
				return d(e, r, {
					type: "APPLY",
					path: a.map((e) => e.toString()),
					argumentList: l
				}, p).then(b);
			},
			construct(t, n) {
				u(s);
				const [o, i] = m(n);
				return d(e, r, {
					type: "CONSTRUCT",
					path: a.map((e) => e.toString()),
					argumentList: o
				}, i).then(b);
			}
		});
		return function(e, t) {
			const n = (p.get(t) || 0) + 1;
			p.set(t, n), g && g.register(e, t, e);
		}(i, e), i;
	}
	function m(e) {
		const t = e.map(h);
		return [t.map((e) => e[0]), (n = t.map((e) => e[1]), Array.prototype.concat.apply([], n))];
		var n;
	}
	const y = /* @__PURE__ */ new WeakMap();
	function h(e) {
		for (const [t, n] of s) if (n.canHandle(e)) {
			const [r, a] = n.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: r
			}, a];
		}
		return [{
			type: "RAW",
			value: e
		}, y.get(e) || []];
	}
	function b(e) {
		switch (e.type) {
			case "HANDLER": return s.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function d(e, t, n, r) {
		return new Promise((a) => {
			const o = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
			t.set(o, a), e.start && e.start(), e.postMessage(Object.assign({ id: o }, n), r);
		});
	}
	function E(e) {
		const t = Object.assign({}, e), n = e.pair ? Object.assign({}, e.pair) : {}, r = n?.target_token || "", a = t.chain || "", o = n?.token0_address || "", s = {
			...t,
			...n,
			id: `${r}-${a}`,
			pair_id: `${n?.pair || ""}-${a}`,
			token: r,
			progress: 0,
			symbol: n?.symbol ?? (r === o ? n?.token0_symbol : n?.token1_symbol),
			name: n?.name ?? (r === o ? n?.token0_name : n?.token1_name)
		};
		if (!s.logo_url) {
			const e = r === o ? n?.token0_logo_url : n?.token1_logo_url;
			e && (s.logo_url = e);
		}
		return !s.logo_thumb && n?.logo_thumb && (s.logo_thumb = n.logo_thumb), s;
	}
	i({ mapWsList: (e) => Array.isArray(e) ? e.map(E) : [] });
})();
