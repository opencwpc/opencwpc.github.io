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
			let g;
			try {
				const n = p.slice(0, -1).reduce((e, t) => e[t], t), s = p.reduce((e, t) => e[t], t);
				switch (h) {
					case "GET":
						g = s;
						break;
					case "SET":
						n[p.slice(-1)[0]] = b(u.data.value), g = !0;
						break;
					case "APPLY":
						g = s.apply(n, m);
						break;
					case "CONSTRUCT":
						g = function(t) {
							return Object.assign(t, { [e]: !0 });
						}(new s(...m));
						break;
					case "ENDPOINT":
						{
							const { port1: e, port2: n } = new MessageChannel();
							c(t, n), g = function(e, t) {
								return f.set(e, t), e;
							}(e, [e]);
						}
						break;
					case "RELEASE":
						g = void 0;
						break;
					default: return;
				}
			} catch (w) {
				g = {
					value: w,
					[i]: 0
				};
			}
			Promise.resolve(g).catch((e) => ({
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
		return w(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
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
					const t = w(e, s, {
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
				return w(e, s, {
					type: "SET",
					path: [...i, n].map((e) => e.toString()),
					value: c
				}, a).then(b);
			},
			apply(n, r, c) {
				u(o);
				const a = i[i.length - 1];
				if (a === t) return w(e, s, { type: "ENDPOINT" }).then(b);
				if ("bind" === a) return m(e, s, i.slice(0, -1));
				const [l, h] = g(c);
				return w(e, s, {
					type: "APPLY",
					path: i.map((e) => e.toString()),
					argumentList: l
				}, h).then(b);
			},
			construct(t, n) {
				u(o);
				const [r, c] = g(n);
				return w(e, s, {
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
	function g(e) {
		const t = e.map(d);
		return [t.map((e) => e[0]), (n = t.map((e) => e[1]), Array.prototype.concat.apply([], n))];
		var n;
	}
	const f = /* @__PURE__ */ new WeakMap();
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
		}, f.get(e) || []];
	}
	function b(e) {
		switch (e.type) {
			case "HANDLER": return o.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function w(e, t, n, s) {
		return new Promise((i) => {
			const r = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
			t.set(r, i), e.start && e.start(), e.postMessage(Object.assign({ id: r }, n), s);
		});
	}
	function T(e) {
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
	const v = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
	let k = Promise.resolve();
	function M(e, t, n, s) {
		const i = v.get(e);
		if (!i) return S.has(e) || S.set(e, []), void S.get(e).push({
			l: t,
			r: n,
			spread: s
		});
		for (const r of t?.[0] || []) {
			const e = String(r.p);
			0 === Number(r.s) ? i.bids.delete(e) : i.bids.set(e, {
				px: e,
				sz: String(r.s),
				n: 0
			});
		}
		for (const r of t?.[1] || []) {
			const e = String(r.p);
			0 === Number(r.s) ? i.asks.delete(e) : i.asks.set(e, {
				px: e,
				sz: String(r.s),
				n: 0
			});
		}
		if (n) {
			const e = [...i.bids.values()].sort((e, t) => Number(t.px) - Number(e.px));
			for (const s of n[0] || []) {
				const t = e[Number(s)];
				t && i.bids.delete(t.px);
			}
			const t = [...i.asks.values()].sort((e, t) => Number(e.px) - Number(t.px));
			for (const s of n[1] || []) {
				const e = t[Number(s)];
				e && i.asks.delete(e.px);
			}
		}
		s && (i.spread = s);
	}
	function E(e) {
		const t = e?.data;
		if (!t) return Promise.resolve(null);
		if (t.s && "object" == typeof t.s && t.s.levels) {
			const e = t.s;
			return function(e, t, n) {
				const s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
				for (const o of t?.[0] || []) s.set(String(o.px), {
					px: String(o.px),
					sz: String(o.sz),
					n: o.n ?? 0
				});
				for (const o of t?.[1] || []) i.set(String(o.px), {
					px: String(o.px),
					sz: String(o.sz),
					n: o.n ?? 0
				});
				v.set(e, {
					bids: s,
					asks: i,
					spread: n ?? ""
				});
				const r = S.get(e);
				if (r) {
					S.delete(e);
					for (const t of r) M(e, t.l, t.r, t.spread);
				}
			}(e.coin, e.levels, e.spread), Promise.resolve(N(e.coin));
		}
		if (t.u && "object" == typeof t.u && t.u.c) {
			const e = t.u;
			return M(e.c, e.l, e.r, e.s), Promise.resolve(N(e.c));
		}
		if (t.l || t.r) {
			const e = t.c;
			return e ? (M(e, t.l, t.r, t.s), Promise.resolve(N(e))) : Promise.resolve(null);
		}
		if (t.c && "string" == typeof t.c) {
			const e = t.c;
			let n;
			return k = k.then(async () => {
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
				t && t.c && (n = t.c, M(t.c, t.l, t.r, t.s));
			}).catch(() => {}), k.then(() => N(n));
		}
		return Promise.resolve(null);
	}
	function N(e) {
		if (!e) return null;
		const t = function(e) {
			const t = v.get(e);
			return t ? {
				coin: e,
				bids: [...t.bids.values()].sort((e, t) => Number(t.px) - Number(e.px)).map((e) => ({
					price: e.px,
					size: e.sz
				})),
				asks: [...t.asks.values()].sort((e, t) => Number(e.px) - Number(t.px)).map((e) => ({
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
	function x(e) {
		e ? (v.delete(e), S.delete(e)) : (v.clear(), S.clear());
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
			if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return this.pendingQueue.length >= this.maxQueueLength && this.pendingQueue.shift(), void this.pendingQueue.push({
				msg: t,
				timestamp: Date.now()
			});
			if (this.ws.send(t), t !== this.pingMsg) try {
				const { method: e, params: n, subscription: s } = JSON.parse(t), i = void 0 !== s ? JSON.stringify(s) : Array.isArray(n) ? n[0] : n ?? "default";
				"subscribe" === e ? this.reconnectMessage[i] = t : "unsubscribe" === e && (delete this.reconnectMessage[i], "hl" === this.parseMode && s?.coin && x(s.coin));
			} catch {}
		}
		close() {
			this.forbidReconnect = !0, this.clearAllTimer(), "hl" === this.parseMode && x(), "undefined" != typeof self && "removeEventListener" in self && self.removeEventListener("online", this.handleOnline), this.ws?.close(), this.ws = null;
		}
		initNetworkMonitor() {
			"undefined" != typeof self && "addEventListener" in self && self.addEventListener("online", this.handleOnline);
		}
		handleOnline = () => {
			this.reconnectCount = 0, this.reconnect();
		};
		createWebSocket(e) {
			this.ws && (this.ws.onopen = this.ws.onclose = this.ws.onerror = this.ws.onmessage = null, this.ws.close());
			try {
				this.ws = new WebSocket(this.url, this.protocols), this.isReconnecting = !1, this.ws.onopen = () => {
					this.resetStatus(), Object.values(e ?? this.reconnectMessage).forEach((e) => this.send(e)), this.pendingQueue.length > 0 && this.sendQueue(), this.statusCallback?.("open");
				}, this.ws.onmessage = (e) => {
					if (this.isAlive = !0, "pong" === e.data) return;
					let t = null;
					try {
						t = "hl" === this.parseMode ? JSON.parse(e.data) : ("perp" === this.parseMode ? y : T)(e);
					} catch {
						t = null;
					}
					t && ("hl" !== this.parseMode || "l2" !== t.channel ? this.msgCallback?.(t) : E(t).then((e) => {
						e && this.msgCallback?.(e);
					}));
				}, this.ws.onclose = (e) => {
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
			if (this.reconnectCount >= this.reconnectLimit) return;
			this.isReconnecting = !0, this.clearAllTimer();
			const e = Math.min(this.reconnectInterval * Math.pow(2, this.reconnectCount), 3e4);
			this.reconnectTimer = setTimeout(() => {
				this.reconnectCount++, this.createWebSocket(this.reconnectMessage);
			}, e);
		}
		startConnectTimeout() {
			this.connectTimer && clearTimeout(this.connectTimer), this.connectTimer = setTimeout(() => {
				this.ws && this.ws.readyState !== WebSocket.OPEN && this.ws.close();
			}, this.connectTimeout);
		}
		heartBeat() {
			this.pingTimer && clearTimeout(this.pingTimer), this.pingTimer = setTimeout(() => {
				this.ws && this.ws.readyState === WebSocket.OPEN && (this.isAlive = !1, this.send(this.pingMsg), setTimeout(() => {
					!this.isAlive && this.ws && this.ws.close();
				}, 5e3), this.heartBeat());
			}, this.pingTimeout);
		}
		sendQueue() {
			const e = [...this.pendingQueue];
			this.pendingQueue = [], e.forEach(({ msg: e, timestamp: t }) => {
				Date.now() - t <= this.queueTimeout && this.ws?.send(e);
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
