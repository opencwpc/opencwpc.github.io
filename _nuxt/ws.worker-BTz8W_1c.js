(function() {
	/**
	* @license
	* Copyright 2019 Google LLC
	* SPDX-License-Identifier: Apache-2.0
	*/
	const e = Symbol("Comlink.proxy"), t = Symbol("Comlink.endpoint"), n = Symbol("Comlink.releaseProxy"), s = Symbol("Comlink.finalizer"), i = Symbol("Comlink.thrown"), r = (e) => "object" == typeof e && null !== e || "function" == typeof e, o = /* @__PURE__ */ new Map([["proxy", {
		canHandle: (t) => r(t) && t[e],
		serialize(e) {
			const { port1: t, port2: n } = new MessageChannel();
			return c(e, t), [n, [n]];
		},
		deserialize: (e) => (e.start(), function(e, t) {
			const n = /* @__PURE__ */ new Map();
			return e.addEventListener("message", function(e) {
				const { data: t } = e;
				if (!t || !t.id) return;
				const s = n.get(t.id);
				if (s) try {
					s(t);
				} finally {
					n.delete(t.id);
				}
			}), m(e, n, [], t);
		}(e))
	}], ["throw", {
		canHandle: (e) => r(e) && i in e,
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
	function c(t, n = globalThis, r = ["*"]) {
		n.addEventListener("message", function o(u) {
			if (!u || !u.data) return;
			if (!function(e, t) {
				for (const n of e) {
					if (t === n || "*" === n) return !0;
					if (n instanceof RegExp && n.test(t)) return !0;
				}
				return !1;
			}(r, u.origin)) return;
			const { id: l, type: h, path: p } = Object.assign({ path: [] }, u.data), m = (u.data.argumentList || []).map(b);
			let f;
			try {
				const n = p.slice(0, -1).reduce((e, t) => e[t], t), s = p.reduce((e, t) => e[t], t);
				switch (h) {
					case "GET":
						f = s;
						break;
					case "SET":
						n[p.slice(-1)[0]] = b(u.data.value), f = !0;
						break;
					case "APPLY":
						f = s.apply(n, m);
						break;
					case "CONSTRUCT":
						f = function(t) {
							return Object.assign(t, { [e]: !0 });
						}(new s(...m));
						break;
					case "ENDPOINT":
						{
							const { port1: e, port2: n } = new MessageChannel();
							c(t, n), f = function(e, t) {
								return g.set(e, t), e;
							}(e, [e]);
						}
						break;
					case "RELEASE":
						f = void 0;
						break;
					default: return;
				}
			} catch (T) {
				f = {
					value: T,
					[i]: 0
				};
			}
			Promise.resolve(f).catch((e) => ({
				value: e,
				[i]: 0
			})).then((e) => {
				const [i, r] = d(e);
				n.postMessage(Object.assign(Object.assign({}, i), { id: l }), r), "RELEASE" === h && (n.removeEventListener("message", o), a(n), s in t && "function" == typeof t[s] && t[s]());
			}).catch((e) => {
				const [t, s] = d({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[i]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, t), { id: l }), s);
			});
		}), n.start && n.start();
	}
	function a(e) {
		(function(e) {
			return "MessagePort" === e.constructor.name;
		})(e) && e.close();
	}
	function u(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function l(e) {
		return T(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			a(e);
		});
	}
	const h = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (h.get(e) || 0) - 1;
		h.set(e, t), 0 === t && l(e);
	});
	function m(e, s, i = [], r = function() {}) {
		let o = !1;
		const c = new Proxy(r, {
			get(t, r) {
				if (u(o), r === n) return () => {
					(function(e) {
						p && p.unregister(e);
					})(c), l(e), s.clear(), o = !0;
				};
				if ("then" === r) {
					if (0 === i.length) return { then: () => c };
					const t = T(e, s, {
						type: "GET",
						path: i.map((e) => e.toString())
					}).then(b);
					return t.then.bind(t);
				}
				return m(e, s, [...i, r]);
			},
			set(t, n, r) {
				u(o);
				const [c, a] = d(r);
				return T(e, s, {
					type: "SET",
					path: [...i, n].map((e) => e.toString()),
					value: c
				}, a).then(b);
			},
			apply(n, r, c) {
				u(o);
				const a = i[i.length - 1];
				if (a === t) return T(e, s, { type: "ENDPOINT" }).then(b);
				if ("bind" === a) return m(e, s, i.slice(0, -1));
				const [l, h] = f(c);
				return T(e, s, {
					type: "APPLY",
					path: i.map((e) => e.toString()),
					argumentList: l
				}, h).then(b);
			},
			construct(t, n) {
				u(o);
				const [r, c] = f(n);
				return T(e, s, {
					type: "CONSTRUCT",
					path: i.map((e) => e.toString()),
					argumentList: r
				}, c).then(b);
			}
		});
		return function(e, t) {
			const n = (h.get(t) || 0) + 1;
			h.set(t, n), p && p.register(e, t, e);
		}(c, e), c;
	}
	function f(e) {
		const t = e.map(d);
		return [t.map((e) => e[0]), (n = t.map((e) => e[1]), Array.prototype.concat.apply([], n))];
		var n;
	}
	const g = /* @__PURE__ */ new WeakMap();
	function d(e) {
		for (const [t, n] of o) if (n.canHandle(e)) {
			const [s, i] = n.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: s
			}, i];
		}
		return [{
			type: "RAW",
			value: e
		}, g.get(e) || []];
	}
	function b(e) {
		switch (e.type) {
			case "HANDLER": return o.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function T(e, t, n, s) {
		return new Promise((i) => {
			const r = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
			t.set(r, i), e.start && e.start(), e.postMessage(Object.assign({ id: r }, n), s);
		});
	}
	function w(e) {
		if ("pong" === e.data) return null;
		try {
			const t = JSON.parse(e.data)?.result || {};
			if ("ok" === t.status) {
				const e = t.data;
				return {
					event: e.event,
					data: e
				};
			}
		} catch {}
		return null;
	}
	function y(e) {
		if ("pong" === e.data) return null;
		try {
			return JSON.parse(e.data) || {};
		} catch {}
		return null;
	}
	function v(e, t) {
		return t.p - e.p;
	}
	function S(e, t) {
		return e.p - t.p;
	}
	const k = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
	let E = Promise.resolve();
	function C(e, t, n) {
		const s = Number(e);
		return Number.isFinite(s) ? {
			px: String(e),
			sz: String(t),
			n: n ?? 0,
			p: s
		} : null;
	}
	function L(e, t, n, s) {
		const i = k.get(e);
		if (!i) return M.has(e) || M.set(e, []), void M.get(e).push({
			l: t,
			r: n,
			spread: s
		});
		for (const r of t?.[0] || []) {
			if (0 === Number(r.s)) {
				i.bids.delete(String(r.p));
				continue;
			}
			const e = C(r.p, r.s, 0);
			e && i.bids.set(e.px, e);
		}
		for (const r of t?.[1] || []) {
			if (0 === Number(r.s)) {
				i.asks.delete(String(r.p));
				continue;
			}
			const e = C(r.p, r.s, 0);
			e && i.asks.set(e.px, e);
		}
		if (n) {
			const e = n[0];
			if (e?.length) {
				const t = [...i.bids.values()].sort(v);
				for (const n of e) {
					const e = t[Number(n)];
					e && i.bids.delete(e.px);
				}
			}
			const t = n[1];
			if (t?.length) {
				const e = [...i.asks.values()].sort(S);
				for (const n of t) {
					const t = e[Number(n)];
					t && i.asks.delete(t.px);
				}
			}
		}
		s && (i.spread = s);
	}
	function N(e) {
		const t = e?.data;
		if (!t) return Promise.resolve(null);
		if (t.s && "object" == typeof t.s && t.s.levels) {
			const e = t.s;
			return function(e, t, n) {
				const s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
				for (const o of t?.[0] || []) {
					const e = C(o.px, o.sz, o.n);
					e && s.set(e.px, e);
				}
				for (const o of t?.[1] || []) {
					const e = C(o.px, o.sz, o.n);
					e && i.set(e.px, e);
				}
				k.set(e, {
					bids: s,
					asks: i,
					spread: n ?? ""
				});
				const r = M.get(e);
				if (r) {
					M.delete(e);
					for (const t of r) L(e, t.l, t.r, t.spread);
				}
			}(e.coin, e.levels, e.spread), Promise.resolve(A(e.coin));
		}
		if (t.u && "object" == typeof t.u && t.u.c) {
			const e = t.u;
			return L(e.c, e.l, e.r, e.s), Promise.resolve(A(e.c));
		}
		if (t.l || t.r) {
			const e = t.c;
			return e ? (L(e, t.l, t.r, t.s), Promise.resolve(A(e))) : Promise.resolve(null);
		}
		if (t.c && "string" == typeof t.c) {
			const e = t.c;
			let n;
			return E = E.then(async () => {
				const t = await async function(e) {
					try {
						const t = atob(e), n = new Uint8Array(t.length);
						for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
						const s = new DecompressionStream("deflate-raw"), i = new Blob([n]).stream().pipeThrough(s), r = await new Response(i).arrayBuffer();
						return JSON.parse(new TextDecoder().decode(r));
					} catch {
						return null;
					}
				}(e);
				t && t.c && (n = t.c, L(t.c, t.l, t.r, t.s));
			}).catch(() => {}), E.then(() => A(n));
		}
		return Promise.resolve(null);
	}
	function A(e) {
		if (!e) return null;
		const t = function(e) {
			const t = k.get(e);
			return t ? {
				coin: e,
				bids: [...t.bids.values()].sort(v).map((e) => ({
					price: e.px,
					size: e.sz
				})),
				asks: [...t.asks.values()].sort(S).map((e) => ({
					price: e.px,
					size: e.sz
				}))
			} : null;
		}(e);
		return t ? {
			channel: "l2",
			__hlL2: !0,
			coin: t.coin,
			bids: t.bids,
			asks: t.asks
		} : null;
	}
	function O(e) {
		e ? (k.delete(e), M.delete(e)) : (k.clear(), M.clear());
	}
	c(new class {
		url = "";
		protocols;
		pingTimeout = 12e3;
		reconnectLimit = 10;
		pingMsg = "{\"jsonrpc\": \"2.0\", \"method\": \"ping\", \"id\": 1}";
		reconnectInterval = 2e3;
		connectTimeout = 3e4;
		maxQueueLength = 100;
		queueTimeout = 3e5;
		parseMode = "main";
		ws = null;
		pingTimer = null;
		reconnectTimer = null;
		connectTimer = null;
		reconnectCount = 0;
		forbidReconnect = !1;
		isReconnecting = !1;
		isAlive = !0;
		reconnectMessage = {};
		pendingQueue = [];
		msgCallback = null;
		statusCallback = null;
		connect(e, t = {}) {
			this.url = e, this.protocols = t.protocols, this.pingTimeout = t.pingTimeout ?? this.pingTimeout, this.reconnectLimit = t.reconnectLimit ?? this.reconnectLimit, this.pingMsg = t.pingMsg ?? this.pingMsg, this.reconnectInterval = t.reconnectInterval ?? this.reconnectInterval, this.connectTimeout = t.connectTimeout ?? this.connectTimeout, this.maxQueueLength = t.maxQueueLength ?? this.maxQueueLength, this.queueTimeout = t.queueTimeout ?? this.queueTimeout, this.parseMode = t.parseMode ?? "main", this.initNetworkMonitor(), this.createWebSocket();
		}
		onMessage(e) {
			this.msgCallback = e;
		}
		onStatus(e) {
			this.statusCallback = e;
		}
		send(e) {
			let t;
			if ("string" == typeof e) t = e;
			else try {
				t = JSON.stringify(e);
			} catch {
				return;
			}
			if (this.recordSubscription(t), !this.ws || this.ws.readyState !== WebSocket.OPEN) return this.pendingQueue.length >= this.maxQueueLength && this.pendingQueue.shift(), void this.pendingQueue.push({
				msg: t,
				timestamp: Date.now()
			});
			this.ws.send(t);
		}
		recordSubscription(e) {
			if (e !== this.pingMsg) try {
				const { method: t, params: n, subscription: s } = JSON.parse(e), i = this.subscriptionKey(n, s);
				"subscribe" === t ? this.reconnectMessage[i] = e : "unsubscribe" === t && (Reflect.deleteProperty(this.reconnectMessage, i), "hl" === this.parseMode && s?.coin && O(s.coin));
			} catch {}
		}
		subscriptionKey(e, t) {
			if (void 0 !== t) return JSON.stringify(t);
			if (!Array.isArray(e)) return String(e ?? "default");
			if ("simple_tx" === e[0]) {
				const t = e[1]?.tks?.[0];
				if (t?.ch && t?.tk) return `simple_tx:${t.ch}:${String(t.tk).toLowerCase()}`;
			}
			return e[0];
		}
		switchUrl(e) {
			e && e !== this.url && !this.forbidReconnect && (this.url = e, this.clearAllTimer(), this.reconnectCount = 0, this.isReconnecting = !1, this.createWebSocket());
		}
		close() {
			this.forbidReconnect = !0, this.clearAllTimer(), "hl" === this.parseMode && O(), "undefined" != typeof self && "removeEventListener" in self && self.removeEventListener("online", this.handleOnline), this.ws?.close(), this.ws = null;
		}
		initNetworkMonitor() {
			"undefined" != typeof self && "addEventListener" in self && self.addEventListener("online", this.handleOnline);
		}
		handleOnline = () => {
			this.reconnectCount = 0, this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = null), this.isReconnecting = !1, this.reconnect();
		};
		createWebSocket(e) {
			this.ws && (this.ws.onopen = this.ws.onclose = this.ws.onerror = this.ws.onmessage = null, this.ws.close()), this.isReconnecting = !1;
			try {
				this.ws = new WebSocket(this.url, this.protocols), this.ws.onopen = () => {
					this.resetStatus();
					const t = Date.now(), n = new Set(this.pendingQueue.filter(({ timestamp: e }) => t - e <= this.queueTimeout).map(({ msg: e }) => e));
					Object.values(e ?? this.reconnectMessage).filter((e) => !n.has(e)).forEach((e) => this.send(e)), this.pendingQueue.length > 0 && this.sendQueue(), this.statusCallback?.("open");
				}, this.ws.onmessage = (e) => {
					if (this.isAlive = !0, "pong" === e.data) return;
					let t;
					try {
						t = "hl" === this.parseMode ? JSON.parse(e.data) : ("perp" === this.parseMode ? y : w)(e);
					} catch {
						return;
					}
					t && ("hl" !== this.parseMode || "l2" !== t.channel ? this.msgCallback?.(t) : N(t).then((e) => {
						e && this.msgCallback?.(e);
					}));
				}, this.ws.onclose = () => {
					this.statusCallback?.("close"), this.reconnect();
				}, this.ws.onerror = () => {
					this.statusCallback?.("error");
				}, this.startConnectTimeout();
			} catch {
				this.reconnect();
			}
		}
		reconnect() {
			if (this.forbidReconnect || this.isReconnecting) return;
			this.isReconnecting = !0, this.clearAllTimer();
			const e = Math.min(this.reconnectCount, this.reconnectLimit), t = Math.min(this.reconnectInterval * Math.pow(2, e), 3e4);
			this.reconnectTimer = setTimeout(() => {
				this.reconnectCount++, this.createWebSocket(this.reconnectMessage);
			}, t);
		}
		startConnectTimeout() {
			this.connectTimer && clearTimeout(this.connectTimer), this.connectTimer = setTimeout(() => {
				this.ws && this.ws.readyState !== WebSocket.OPEN && this.ws.close();
			}, this.connectTimeout);
		}
		heartBeat() {
			this.pingTimer && clearTimeout(this.pingTimer), this.pingTimer = setTimeout(() => {
				this.ws && this.ws.readyState === WebSocket.OPEN ? (this.isAlive = !1, this.send(this.pingMsg), setTimeout(() => {
					!this.isAlive && this.ws && this.ws.close();
				}, 5e3), this.heartBeat()) : this.heartBeat();
			}, this.pingTimeout);
		}
		sendQueue() {
			const e = [...this.pendingQueue];
			this.pendingQueue = [], e.forEach(({ msg: e, timestamp: t }) => {
				Date.now() - t <= this.queueTimeout && this.send(e);
			});
		}
		resetStatus() {
			this.isReconnecting = !1, this.reconnectCount = 0, this.isAlive = !0, this.clearAllTimer(), this.heartBeat();
		}
		clearAllTimer() {
			this.pingTimer && clearTimeout(this.pingTimer), this.reconnectTimer && clearTimeout(this.reconnectTimer), this.connectTimer && clearTimeout(this.connectTimer), this.pingTimer = this.reconnectTimer = this.connectTimer = null;
		}
	}());
})();
