(function() {
	var e = Object.create, t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, o = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, i = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (i, c, u) => (u = null != i ? e(o(i)) : {}, ((e, o, i, c) => {
		if (o && "object" == typeof o || "function" == typeof o) for (var u, s = n(o), f = 0, l = s.length; f < l; f++) u = s[f], a.call(e, u) || u === i || t(e, u, {
			get: ((e) => o[e]).bind(null, u),
			enumerable: !(c = r(o, u)) || c.enumerable
		});
		return e;
	})(!c && i && i.__esModule && a.call(i, "default") ? u : t(u, "default", {
		value: i,
		enumerable: !0
	}), i));
	/**
	* @license
	* Copyright 2019 Google LLC
	* SPDX-License-Identifier: Apache-2.0
	*/
	const u = Symbol("Comlink.proxy"), s = Symbol("Comlink.endpoint"), f = Symbol("Comlink.releaseProxy"), l = Symbol("Comlink.finalizer"), d = Symbol("Comlink.thrown"), v = (e) => "object" == typeof e && null !== e || "function" == typeof e, p = /* @__PURE__ */ new Map([["proxy", {
		canHandle: (e) => v(e) && e[u],
		serialize(e) {
			const { port1: t, port2: r } = new MessageChannel();
			return h(e, t), [r, [r]];
		},
		deserialize: (e) => (e.start(), function(e, t) {
			const r = /* @__PURE__ */ new Map();
			return e.addEventListener("message", function(e) {
				const { data: t } = e;
				if (!t || !t.id) return;
				const n = r.get(t.id);
				if (n) try {
					n(t);
				} finally {
					r.delete(t.id);
				}
			}), j(e, r, [], t);
		}(e))
	}], ["throw", {
		canHandle: (e) => v(e) && d in e,
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
	function h(e, t = globalThis, r = ["*"]) {
		t.addEventListener("message", function n(o) {
			if (!o || !o.data) return;
			if (!function(e, t) {
				for (const r of e) {
					if (t === r || "*" === r) return !0;
					if (r instanceof RegExp && r.test(t)) return !0;
				}
				return !1;
			}(r, o.origin)) return;
			const { id: a, type: i, path: c } = Object.assign({ path: [] }, o.data), s = (o.data.argumentList || []).map(O);
			let f;
			try {
				const t = c.slice(0, -1).reduce((e, t) => e[t], e), r = c.reduce((e, t) => e[t], e);
				switch (i) {
					case "GET":
						f = r;
						break;
					case "SET":
						t[c.slice(-1)[0]] = O(o.data.value), f = !0;
						break;
					case "APPLY":
						f = r.apply(t, s);
						break;
					case "CONSTRUCT":
						f = function(e) {
							return Object.assign(e, { [u]: !0 });
						}(new r(...s));
						break;
					case "ENDPOINT":
						{
							const { port1: t, port2: r } = new MessageChannel();
							h(e, r), f = function(e, t) {
								return S.set(e, t), e;
							}(t, [t]);
						}
						break;
					case "RELEASE":
						f = void 0;
						break;
					default: return;
				}
			} catch (v) {
				f = {
					value: v,
					[d]: 0
				};
			}
			Promise.resolve(f).catch((e) => ({
				value: e,
				[d]: 0
			})).then((r) => {
				const [o, c] = I(r);
				t.postMessage(Object.assign(Object.assign({}, o), { id: a }), c), "RELEASE" === i && (t.removeEventListener("message", n), y(t), l in e && "function" == typeof e[l] && e[l]());
			}).catch((e) => {
				const [r, n] = I({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[d]: 0
				});
				t.postMessage(Object.assign(Object.assign({}, r), { id: a }), n);
			});
		}), t.start && t.start();
	}
	function y(e) {
		(function(e) {
			return "MessagePort" === e.constructor.name;
		})(e) && e.close();
	}
	function b(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function g(e) {
		return E(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			y(e);
		});
	}
	const m = /* @__PURE__ */ new WeakMap(), _ = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (m.get(e) || 0) - 1;
		m.set(e, t), 0 === t && g(e);
	});
	function j(e, t, r = [], n = function() {}) {
		let o = !1;
		const a = new Proxy(n, {
			get(n, i) {
				if (b(o), i === f) return () => {
					(function(e) {
						_ && _.unregister(e);
					})(a), g(e), t.clear(), o = !0;
				};
				if ("then" === i) {
					if (0 === r.length) return { then: () => a };
					const n = E(e, t, {
						type: "GET",
						path: r.map((e) => e.toString())
					}).then(O);
					return n.then.bind(n);
				}
				return j(e, t, [...r, i]);
			},
			set(n, a, i) {
				b(o);
				const [c, u] = I(i);
				return E(e, t, {
					type: "SET",
					path: [...r, a].map((e) => e.toString()),
					value: c
				}, u).then(O);
			},
			apply(n, a, i) {
				b(o);
				const c = r[r.length - 1];
				if (c === s) return E(e, t, { type: "ENDPOINT" }).then(O);
				if ("bind" === c) return j(e, t, r.slice(0, -1));
				const [u, f] = w(i);
				return E(e, t, {
					type: "APPLY",
					path: r.map((e) => e.toString()),
					argumentList: u
				}, f).then(O);
			},
			construct(n, a) {
				b(o);
				const [i, c] = w(a);
				return E(e, t, {
					type: "CONSTRUCT",
					path: r.map((e) => e.toString()),
					argumentList: i
				}, c).then(O);
			}
		});
		return function(e, t) {
			const r = (m.get(t) || 0) + 1;
			m.set(t, r), _ && _.register(e, t, e);
		}(a, e), a;
	}
	function w(e) {
		const t = e.map(I);
		return [t.map((e) => e[0]), (r = t.map((e) => e[1]), Array.prototype.concat.apply([], r))];
		var r;
	}
	const S = /* @__PURE__ */ new WeakMap();
	function I(e) {
		for (const [t, r] of p) if (r.canHandle(e)) {
			const [n, o] = r.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: n
			}, o];
		}
		return [{
			type: "RAW",
			value: e
		}, S.get(e) || []];
	}
	function O(e) {
		switch (e.type) {
			case "HANDLER": return p.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function E(e, t, r, n) {
		return new Promise((o) => {
			const a = new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
			t.set(a, o), e.start && e.start(), e.postMessage(Object.assign({ id: a }, r), n);
		});
	}
	var A = i((e, t) => {
		/*!
		localForage -- Offline Storage, Improved
		Version 1.10.0
		https://localforage.github.io/localForage
		(c) 2013-2017 Mozilla, Apache License 2.0
		*/
		(function(r) {
			if ("object" == typeof e && void 0 !== t) t.exports = r();
			else if ("function" == typeof define && define.amd) define([], r);
			else ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).localforage = r();
		})(function() {
			return function e(t, r, n) {
				function o(i, c) {
					if (!r[i]) {
						if (!t[i]) {
							var u = "function" == typeof require && require;
							if (!c && u) return u(i, !0);
							if (a) return a(i, !0);
							var s = /* @__PURE__ */ new Error("Cannot find module '" + i + "'");
							throw s.code = "MODULE_NOT_FOUND", s;
						}
						var f = r[i] = { exports: {} };
						t[i][0].call(f.exports, function(e) {
							var r = t[i][1][e];
							return o(r || e);
						}, f, f.exports, e, t, r, n);
					}
					return r[i].exports;
				}
				for (var a = "function" == typeof require && require, i = 0; i < n.length; i++) o(n[i]);
				return o;
			}({
				1: [function(e, t, r) {
					(function(e) {
						"use strict";
						var r, n, o = e.MutationObserver || e.WebKitMutationObserver;
						if (o) {
							var a = 0, i = new o(f), c = e.document.createTextNode("");
							i.observe(c, { characterData: !0 }), r = function() {
								c.data = a = ++a % 2;
							};
						} else if (e.setImmediate || void 0 === e.MessageChannel) r = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
							var t = e.document.createElement("script");
							t.onreadystatechange = function() {
								f(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
							}, e.document.documentElement.appendChild(t);
						} : function() {
							setTimeout(f, 0);
						};
						else {
							var u = new e.MessageChannel();
							u.port1.onmessage = f, r = function() {
								u.port2.postMessage(0);
							};
						}
						var s = [];
						function f() {
							var e, t;
							n = !0;
							for (var r = s.length; r;) {
								for (t = s, s = [], e = -1; ++e < r;) t[e]();
								r = s.length;
							}
							n = !1;
						}
						t.exports = function(e) {
							1 !== s.push(e) || n || r();
						};
					}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
				}, {}],
				2: [function(e, t, r) {
					"use strict";
					var n = e(1);
					function o() {}
					var a = {}, i = ["REJECTED"], c = ["FULFILLED"], u = ["PENDING"];
					function s(e) {
						if ("function" != typeof e) throw new TypeError("resolver must be a function");
						this.state = u, this.queue = [], this.outcome = void 0, e !== o && v(this, e);
					}
					function f(e, t, r) {
						this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
					}
					function l(e, t, r) {
						n(function() {
							var n;
							try {
								n = t(r);
							} catch (o) {
								return a.reject(e, o);
							}
							n === e ? a.reject(e, /* @__PURE__ */ new TypeError("Cannot resolve promise with itself")) : a.resolve(e, n);
						});
					}
					function d(e) {
						var t = e && e.then;
						if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
							t.apply(e, arguments);
						};
					}
					function v(e, t) {
						var r = !1;
						function n(t) {
							r || (r = !0, a.reject(e, t));
						}
						function o(t) {
							r || (r = !0, a.resolve(e, t));
						}
						var i = p(function() {
							t(o, n);
						});
						"error" === i.status && n(i.value);
					}
					function p(e, t) {
						var r = {};
						try {
							r.value = e(t), r.status = "success";
						} catch (n) {
							r.status = "error", r.value = n;
						}
						return r;
					}
					t.exports = s, s.prototype.catch = function(e) {
						return this.then(null, e);
					}, s.prototype.then = function(e, t) {
						if ("function" != typeof e && this.state === c || "function" != typeof t && this.state === i) return this;
						var r = new this.constructor(o);
						return this.state !== u ? l(r, this.state === c ? e : t, this.outcome) : this.queue.push(new f(r, e, t)), r;
					}, f.prototype.callFulfilled = function(e) {
						a.resolve(this.promise, e);
					}, f.prototype.otherCallFulfilled = function(e) {
						l(this.promise, this.onFulfilled, e);
					}, f.prototype.callRejected = function(e) {
						a.reject(this.promise, e);
					}, f.prototype.otherCallRejected = function(e) {
						l(this.promise, this.onRejected, e);
					}, a.resolve = function(e, t) {
						var r = p(d, t);
						if ("error" === r.status) return a.reject(e, r.value);
						var n = r.value;
						if (n) v(e, n);
						else {
							e.state = c, e.outcome = t;
							for (var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t);
						}
						return e;
					}, a.reject = function(e, t) {
						e.state = i, e.outcome = t;
						for (var r = -1, n = e.queue.length; ++r < n;) e.queue[r].callRejected(t);
						return e;
					}, s.resolve = function(e) {
						return e instanceof this ? e : a.resolve(new this(o), e);
					}, s.reject = function(e) {
						var t = new this(o);
						return a.reject(t, e);
					}, s.all = function(e) {
						var t = this;
						if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(/* @__PURE__ */ new TypeError("must be an array"));
						var r = e.length, n = !1;
						if (!r) return this.resolve([]);
						var i = new Array(r), c = 0, u = -1, s = new this(o);
						for (; ++u < r;) f(e[u], u);
						return s;
						function f(e, o) {
							t.resolve(e).then(function(e) {
								i[o] = e, ++c !== r || n || (n = !0, a.resolve(s, i));
							}, function(e) {
								n || (n = !0, a.reject(s, e));
							});
						}
					}, s.race = function(e) {
						var t = this;
						if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(/* @__PURE__ */ new TypeError("must be an array"));
						var r = e.length, n = !1;
						if (!r) return this.resolve([]);
						var i = -1, c = new this(o);
						for (; ++i < r;) u(e[i]);
						return c;
						function u(e) {
							t.resolve(e).then(function(e) {
								n || (n = !0, a.resolve(c, e));
							}, function(e) {
								n || (n = !0, a.reject(c, e));
							});
						}
					};
				}, { 1: 1 }],
				3: [function(e, t, r) {
					(function(t) {
						"use strict";
						"function" != typeof t.Promise && (t.Promise = e(2));
					}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
				}, { 2: 2 }],
				4: [function(e, t, r) {
					"use strict";
					var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e;
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
					};
					var o = function() {
						try {
							if ("undefined" != typeof indexedDB) return indexedDB;
							if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
							if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
							if ("undefined" != typeof OIndexedDB) return OIndexedDB;
							if ("undefined" != typeof msIndexedDB) return msIndexedDB;
						} catch (e) {
							return;
						}
					}();
					function a(e, t) {
						e = e || [], t = t || {};
						try {
							return new Blob(e, t);
						} catch (o) {
							if ("TypeError" !== o.name) throw o;
							for (var r = new ("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder)(), n = 0; n < e.length; n += 1) r.append(e[n]);
							return r.getBlob(t.type);
						}
					}
					"undefined" == typeof Promise && e(3);
					var i = Promise;
					function c(e, t) {
						t && e.then(function(e) {
							t(null, e);
						}, function(e) {
							t(e);
						});
					}
					function u(e, t, r) {
						"function" == typeof t && e.then(t), "function" == typeof r && e.catch(r);
					}
					function s(e) {
						return "string" != typeof e && (e = String(e)), e;
					}
					function f() {
						if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1];
					}
					var l = "local-forage-detect-blob-support", d = void 0, v = {}, p = Object.prototype.toString, h = "readonly", y = "readwrite";
					function b(e) {
						for (var t = e.length, r = new ArrayBuffer(t), n = new Uint8Array(r), o = 0; o < t; o++) n[o] = e.charCodeAt(o);
						return r;
					}
					function g(e) {
						return "boolean" == typeof d ? i.resolve(d) : function(e) {
							return new i(function(t) {
								var r = e.transaction(l, y), n = a([""]);
								r.objectStore(l).put(n, "key"), r.onabort = function(e) {
									e.preventDefault(), e.stopPropagation(), t(!1);
								}, r.oncomplete = function() {
									var e = navigator.userAgent.match(/Chrome\/(\d+)/);
									t(navigator.userAgent.match(/Edge\//) || !e || parseInt(e[1], 10) >= 43);
								};
							}).catch(function() {
								return !1;
							});
						}(e).then(function(e) {
							return d = e;
						});
					}
					function m(e) {
						var t = v[e.name], r = {};
						r.promise = new i(function(e, t) {
							r.resolve = e, r.reject = t;
						}), t.deferredOperations.push(r), t.dbReady ? t.dbReady = t.dbReady.then(function() {
							return r.promise;
						}) : t.dbReady = r.promise;
					}
					function _(e) {
						var t = v[e.name].deferredOperations.pop();
						if (t) return t.resolve(), t.promise;
					}
					function j(e, t) {
						var r = v[e.name].deferredOperations.pop();
						if (r) return r.reject(t), r.promise;
					}
					function w(e, t) {
						return new i(function(r, n) {
							if (v[e.name] = v[e.name] || {
								forages: [],
								db: null,
								dbReady: null,
								deferredOperations: []
							}, e.db) {
								if (!t) return r(e.db);
								m(e), e.db.close();
							}
							var a = [e.name];
							t && a.push(e.version);
							var i = o.open.apply(o, a);
							t && (i.onupgradeneeded = function(t) {
								var r = i.result;
								try {
									r.createObjectStore(e.storeName), t.oldVersion <= 1 && r.createObjectStore(l);
								} catch (n) {
									if ("ConstraintError" !== n.name) throw n;
								}
							}), i.onerror = function(e) {
								e.preventDefault(), n(i.error);
							}, i.onsuccess = function() {
								var t = i.result;
								t.onversionchange = function(e) {
									e.target.close();
								}, r(t), _(e);
							};
						});
					}
					function S(e) {
						return w(e, !1);
					}
					function I(e) {
						return w(e, !0);
					}
					function O(e, t) {
						if (!e.db) return !0;
						var r = !e.db.objectStoreNames.contains(e.storeName), n = e.version < e.db.version, o = e.version > e.db.version;
						if (n && (e.version, e.version = e.db.version), o || r) {
							if (r) {
								var a = e.db.version + 1;
								a > e.version && (e.version = a);
							}
							return !0;
						}
						return !1;
					}
					function E(e) {
						return a([b(atob(e.data))], { type: e.type });
					}
					function A(e) {
						return e && e.__local_forage_encoded_blob;
					}
					function N(e) {
						var t = this, r = t._initReady().then(function() {
							var e = v[t._dbInfo.name];
							if (e && e.dbReady) return e.dbReady;
						});
						return u(r, e, e), r;
					}
					function x(e, t, r, n) {
						void 0 === n && (n = 1);
						try {
							r(null, e.db.transaction(e.storeName, t));
						} catch (o) {
							if (n > 0 && (!e.db || "InvalidStateError" === o.name || "NotFoundError" === o.name)) return i.resolve().then(function() {
								if (!e.db || "NotFoundError" === o.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), I(e);
							}).then(function() {
								return function(e) {
									m(e);
									for (var t = v[e.name], r = t.forages, n = 0; n < r.length; n++) {
										var o = r[n];
										o._dbInfo.db && (o._dbInfo.db.close(), o._dbInfo.db = null);
									}
									return e.db = null, S(e).then(function(t) {
										return e.db = t, O(e) ? I(e) : t;
									}).then(function(n) {
										e.db = t.db = n;
										for (var o = 0; o < r.length; o++) r[o]._dbInfo.db = n;
									}).catch(function(t) {
										throw j(e, t), t;
									});
								}(e).then(function() {
									x(e, t, r, n - 1);
								});
							}).catch(r);
							r(o);
						}
					}
					var R = {
						_driver: "asyncStorage",
						_initStorage: function(e) {
							var t = this, r = { db: null };
							if (e) for (var n in e) r[n] = e[n];
							var o = v[r.name];
							o || (o = {
								forages: [],
								db: null,
								dbReady: null,
								deferredOperations: []
							}, v[r.name] = o), o.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = N);
							var a = [];
							function c() {
								return i.resolve();
							}
							for (var u = 0; u < o.forages.length; u++) {
								var s = o.forages[u];
								s !== t && a.push(s._initReady().catch(c));
							}
							var f = o.forages.slice(0);
							return i.all(a).then(function() {
								return r.db = o.db, S(r);
							}).then(function(e) {
								return r.db = e, O(r, t._defaultConfig.version) ? I(r) : e;
							}).then(function(e) {
								r.db = o.db = e, t._dbInfo = r;
								for (var n = 0; n < f.length; n++) {
									var a = f[n];
									a !== t && (a._dbInfo.db = r.db, a._dbInfo.version = r.version);
								}
							});
						},
						_support: function() {
							try {
								if (!o || !o.open) return !1;
								var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
								return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange;
							} catch (r) {
								return !1;
							}
						}(),
						iterate: function(e, t) {
							var r = this, n = new i(function(t, n) {
								r.ready().then(function() {
									x(r._dbInfo, h, function(o, a) {
										if (o) return n(o);
										try {
											var i = a.objectStore(r._dbInfo.storeName).openCursor(), c = 1;
											i.onsuccess = function() {
												var r = i.result;
												if (r) {
													var n = r.value;
													A(n) && (n = E(n));
													var o = e(n, r.key, c++);
													void 0 !== o ? t(o) : r.continue();
												} else t();
											}, i.onerror = function() {
												n(i.error);
											};
										} catch (u) {
											n(u);
										}
									});
								}).catch(n);
							});
							return c(n, t), n;
						},
						getItem: function(e, t) {
							var r = this;
							e = s(e);
							var n = new i(function(t, n) {
								r.ready().then(function() {
									x(r._dbInfo, h, function(o, a) {
										if (o) return n(o);
										try {
											var i = a.objectStore(r._dbInfo.storeName).get(e);
											i.onsuccess = function() {
												var e = i.result;
												void 0 === e && (e = null), A(e) && (e = E(e)), t(e);
											}, i.onerror = function() {
												n(i.error);
											};
										} catch (c) {
											n(c);
										}
									});
								}).catch(n);
							});
							return c(n, t), n;
						},
						setItem: function(e, t, r) {
							var n = this;
							e = s(e);
							var o = new i(function(r, o) {
								var a;
								n.ready().then(function() {
									return a = n._dbInfo, "[object Blob]" === p.call(t) ? g(a.db).then(function(e) {
										return e ? t : (r = t, new i(function(e, t) {
											var n = new FileReader();
											n.onerror = t, n.onloadend = function(t) {
												e({
													__local_forage_encoded_blob: !0,
													data: btoa(t.target.result || ""),
													type: r.type
												});
											}, n.readAsBinaryString(r);
										}));
										var r;
									}) : t;
								}).then(function(t) {
									x(n._dbInfo, y, function(a, i) {
										if (a) return o(a);
										try {
											var c = i.objectStore(n._dbInfo.storeName);
											null === t && (t = void 0);
											var u = c.put(t, e);
											i.oncomplete = function() {
												void 0 === t && (t = null), r(t);
											}, i.onabort = i.onerror = function() {
												o(u.error ? u.error : u.transaction.error);
											};
										} catch (s) {
											o(s);
										}
									});
								}).catch(o);
							});
							return c(o, r), o;
						},
						removeItem: function(e, t) {
							var r = this;
							e = s(e);
							var n = new i(function(t, n) {
								r.ready().then(function() {
									x(r._dbInfo, y, function(o, a) {
										if (o) return n(o);
										try {
											var i = a.objectStore(r._dbInfo.storeName).delete(e);
											a.oncomplete = function() {
												t();
											}, a.onerror = function() {
												n(i.error);
											}, a.onabort = function() {
												n(i.error ? i.error : i.transaction.error);
											};
										} catch (c) {
											n(c);
										}
									});
								}).catch(n);
							});
							return c(n, t), n;
						},
						clear: function(e) {
							var t = this, r = new i(function(e, r) {
								t.ready().then(function() {
									x(t._dbInfo, y, function(n, o) {
										if (n) return r(n);
										try {
											var a = o.objectStore(t._dbInfo.storeName).clear();
											o.oncomplete = function() {
												e();
											}, o.onabort = o.onerror = function() {
												r(a.error ? a.error : a.transaction.error);
											};
										} catch (i) {
											r(i);
										}
									});
								}).catch(r);
							});
							return c(r, e), r;
						},
						length: function(e) {
							var t = this, r = new i(function(e, r) {
								t.ready().then(function() {
									x(t._dbInfo, h, function(n, o) {
										if (n) return r(n);
										try {
											var a = o.objectStore(t._dbInfo.storeName).count();
											a.onsuccess = function() {
												e(a.result);
											}, a.onerror = function() {
												r(a.error);
											};
										} catch (i) {
											r(i);
										}
									});
								}).catch(r);
							});
							return c(r, e), r;
						},
						key: function(e, t) {
							var r = this, n = new i(function(t, n) {
								e < 0 ? t(null) : r.ready().then(function() {
									x(r._dbInfo, h, function(o, a) {
										if (o) return n(o);
										try {
											var i = a.objectStore(r._dbInfo.storeName), c = !1, u = i.openKeyCursor();
											u.onsuccess = function() {
												var r = u.result;
												r ? 0 === e || c ? t(r.key) : (c = !0, r.advance(e)) : t(null);
											}, u.onerror = function() {
												n(u.error);
											};
										} catch (s) {
											n(s);
										}
									});
								}).catch(n);
							});
							return c(n, t), n;
						},
						keys: function(e) {
							var t = this, r = new i(function(e, r) {
								t.ready().then(function() {
									x(t._dbInfo, h, function(n, o) {
										if (n) return r(n);
										try {
											var a = o.objectStore(t._dbInfo.storeName).openKeyCursor(), i = [];
											a.onsuccess = function() {
												var t = a.result;
												t ? (i.push(t.key), t.continue()) : e(i);
											}, a.onerror = function() {
												r(a.error);
											};
										} catch (c) {
											r(c);
										}
									});
								}).catch(r);
							});
							return c(r, e), r;
						},
						dropInstance: function(e, t) {
							t = f.apply(this, arguments);
							var r, n = this.config();
							if ((e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName), e.name) {
								var a = e.name === n.name && this._dbInfo.db ? i.resolve(this._dbInfo.db) : S(e).then(function(t) {
									var r = v[e.name], n = r.forages;
									r.db = t;
									for (var o = 0; o < n.length; o++) n[o]._dbInfo.db = t;
									return t;
								});
								r = e.storeName ? a.then(function(t) {
									if (t.objectStoreNames.contains(e.storeName)) {
										var r = t.version + 1;
										m(e);
										var n = v[e.name], a = n.forages;
										t.close();
										for (var c = 0; c < a.length; c++) {
											var u = a[c];
											u._dbInfo.db = null, u._dbInfo.version = r;
										}
										return new i(function(t, n) {
											var a = o.open(e.name, r);
											a.onerror = function(e) {
												a.result.close(), n(e);
											}, a.onupgradeneeded = function() {
												a.result.deleteObjectStore(e.storeName);
											}, a.onsuccess = function() {
												var e = a.result;
												e.close(), t(e);
											};
										}).then(function(e) {
											n.db = e;
											for (var t = 0; t < a.length; t++) {
												var r = a[t];
												r._dbInfo.db = e, _(r._dbInfo);
											}
										}).catch(function(t) {
											throw (j(e, t) || i.resolve()).catch(function() {}), t;
										});
									}
								}) : a.then(function(t) {
									m(e);
									var r = v[e.name], n = r.forages;
									t.close();
									for (var a = 0; a < n.length; a++) n[a]._dbInfo.db = null;
									return new i(function(t, r) {
										var n = o.deleteDatabase(e.name);
										n.onerror = function() {
											var e = n.result;
											e && e.close(), r(n.error);
										}, n.onblocked = function() {}, n.onsuccess = function() {
											var e = n.result;
											e && e.close(), t(e);
										};
									}).then(function(e) {
										r.db = e;
										for (var t = 0; t < n.length; t++) _(n[t]._dbInfo);
									}).catch(function(t) {
										throw (j(e, t) || i.resolve()).catch(function() {}), t;
									});
								});
							} else r = i.reject("Invalid arguments");
							return c(r, t), r;
						}
					};
					var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", D = /^~~local_forage_type~([^~]+)~/, T = "__lfsc__:", P = "arbf", C = "blob", B = "si08", M = "ui08", z = "uic8", F = "si16", L = "si32", U = "ur16", W = "ui32", q = "fl32", H = "fl64", G = Object.prototype.toString;
					function K(e) {
						var t, r, n, o, a, i = .75 * e.length, c = e.length, u = 0;
						"=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
						var s = new ArrayBuffer(i), f = new Uint8Array(s);
						for (t = 0; t < c; t += 4) r = k.indexOf(e[t]), n = k.indexOf(e[t + 1]), o = k.indexOf(e[t + 2]), a = k.indexOf(e[t + 3]), f[u++] = r << 2 | n >> 4, f[u++] = (15 & n) << 4 | o >> 2, f[u++] = (3 & o) << 6 | 63 & a;
						return s;
					}
					function V(e) {
						var t, r = new Uint8Array(e), n = "";
						for (t = 0; t < r.length; t += 3) n += k[r[t] >> 2], n += k[(3 & r[t]) << 4 | r[t + 1] >> 4], n += k[(15 & r[t + 1]) << 2 | r[t + 2] >> 6], n += k[63 & r[t + 2]];
						return r.length % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : r.length % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n;
					}
					var $ = {
						serialize: function(e, t) {
							var r = "";
							if (e && (r = G.call(e)), e && ("[object ArrayBuffer]" === r || e.buffer && "[object ArrayBuffer]" === G.call(e.buffer))) {
								var n, o = T;
								e instanceof ArrayBuffer ? (n = e, o += P) : (n = e.buffer, "[object Int8Array]" === r ? o += B : "[object Uint8Array]" === r ? o += M : "[object Uint8ClampedArray]" === r ? o += z : "[object Int16Array]" === r ? o += F : "[object Uint16Array]" === r ? o += U : "[object Int32Array]" === r ? o += L : "[object Uint32Array]" === r ? o += W : "[object Float32Array]" === r ? o += q : "[object Float64Array]" === r ? o += H : t(/* @__PURE__ */ new Error("Failed to get type for BinaryArray"))), t(o + V(n));
							} else if ("[object Blob]" === r) {
								var a = new FileReader();
								a.onload = function() {
									var r = "~~local_forage_type~" + e.type + "~" + V(this.result);
									t(T + C + r);
								}, a.readAsArrayBuffer(e);
							} else try {
								t(JSON.stringify(e));
							} catch (i) {
								t(null, i);
							}
						},
						deserialize: function(e) {
							if (e.substring(0, 9) !== T) return JSON.parse(e);
							var t, r = e.substring(13), n = e.substring(9, 13);
							if (n === C && D.test(r)) {
								var o = r.match(D);
								t = o[1], r = r.substring(o[0].length);
							}
							var i = K(r);
							switch (n) {
								case P: return i;
								case C: return a([i], { type: t });
								case B: return new Int8Array(i);
								case M: return new Uint8Array(i);
								case z: return new Uint8ClampedArray(i);
								case F: return new Int16Array(i);
								case U: return new Uint16Array(i);
								case L: return new Int32Array(i);
								case W: return new Uint32Array(i);
								case q: return new Float32Array(i);
								case H: return new Float64Array(i);
								default: throw new Error("Unkown type: " + n);
							}
						},
						stringToBuffer: K,
						bufferToString: V
					};
					function Q(e, t, r, n) {
						e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, n);
					}
					function X(e, t, r, n, o, a) {
						e.executeSql(r, n, o, function(e, i) {
							i.code === i.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function(e, c) {
								c.rows.length ? a(e, i) : Q(e, t, function() {
									e.executeSql(r, n, o, a);
								}, a);
							}, a) : a(e, i);
						}, a);
					}
					function Y(e, t, r, n) {
						var o = this;
						e = s(e);
						var a = new i(function(a, i) {
							o.ready().then(function() {
								void 0 === t && (t = null);
								var c = t, u = o._dbInfo;
								u.serializer.serialize(t, function(t, s) {
									s ? i(s) : u.db.transaction(function(r) {
										X(r, u, "INSERT OR REPLACE INTO " + u.storeName + " (key, value) VALUES (?, ?)", [e, t], function() {
											a(c);
										}, function(e, t) {
											i(t);
										});
									}, function(t) {
										if (t.code === t.QUOTA_ERR) {
											if (n > 0) return void a(Y.apply(o, [
												e,
												c,
												r,
												n - 1
											]));
											i(t);
										}
									});
								});
							}).catch(i);
						});
						return c(a, r), a;
					}
					var J = {
						_driver: "webSQLStorage",
						_initStorage: function(e) {
							var t = this, r = { db: null };
							if (e) for (var n in e) r[n] = "string" != typeof e[n] ? e[n].toString() : e[n];
							var o = new i(function(e, n) {
								try {
									r.db = openDatabase(r.name, String(r.version), r.description, r.size);
								} catch (o) {
									return n(o);
								}
								r.db.transaction(function(o) {
									Q(o, r, function() {
										t._dbInfo = r, e();
									}, function(e, t) {
										n(t);
									});
								}, n);
							});
							return r.serializer = $, o;
						},
						_support: "function" == typeof openDatabase,
						iterate: function(e, t) {
							var r = this, n = new i(function(t, n) {
								r.ready().then(function() {
									var o = r._dbInfo;
									o.db.transaction(function(r) {
										X(r, o, "SELECT * FROM " + o.storeName, [], function(r, n) {
											for (var a = n.rows, i = a.length, c = 0; c < i; c++) {
												var u = a.item(c), s = u.value;
												if (s && (s = o.serializer.deserialize(s)), void 0 !== (s = e(s, u.key, c + 1))) return void t(s);
											}
											t();
										}, function(e, t) {
											n(t);
										});
									});
								}).catch(n);
							});
							return c(n, t), n;
						},
						getItem: function(e, t) {
							var r = this;
							e = s(e);
							var n = new i(function(t, n) {
								r.ready().then(function() {
									var o = r._dbInfo;
									o.db.transaction(function(r) {
										X(r, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function(e, r) {
											var n = r.rows.length ? r.rows.item(0).value : null;
											n && (n = o.serializer.deserialize(n)), t(n);
										}, function(e, t) {
											n(t);
										});
									});
								}).catch(n);
							});
							return c(n, t), n;
						},
						setItem: function(e, t, r) {
							return Y.apply(this, [
								e,
								t,
								r,
								1
							]);
						},
						removeItem: function(e, t) {
							var r = this;
							e = s(e);
							var n = new i(function(t, n) {
								r.ready().then(function() {
									var o = r._dbInfo;
									o.db.transaction(function(r) {
										X(r, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], function() {
											t();
										}, function(e, t) {
											n(t);
										});
									});
								}).catch(n);
							});
							return c(n, t), n;
						},
						clear: function(e) {
							var t = this, r = new i(function(e, r) {
								t.ready().then(function() {
									var n = t._dbInfo;
									n.db.transaction(function(t) {
										X(t, n, "DELETE FROM " + n.storeName, [], function() {
											e();
										}, function(e, t) {
											r(t);
										});
									});
								}).catch(r);
							});
							return c(r, e), r;
						},
						length: function(e) {
							var t = this, r = new i(function(e, r) {
								t.ready().then(function() {
									var n = t._dbInfo;
									n.db.transaction(function(t) {
										X(t, n, "SELECT COUNT(key) as c FROM " + n.storeName, [], function(t, r) {
											var n = r.rows.item(0).c;
											e(n);
										}, function(e, t) {
											r(t);
										});
									});
								}).catch(r);
							});
							return c(r, e), r;
						},
						key: function(e, t) {
							var r = this, n = new i(function(t, n) {
								r.ready().then(function() {
									var o = r._dbInfo;
									o.db.transaction(function(r) {
										X(r, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(e, r) {
											t(r.rows.length ? r.rows.item(0).key : null);
										}, function(e, t) {
											n(t);
										});
									});
								}).catch(n);
							});
							return c(n, t), n;
						},
						keys: function(e) {
							var t = this, r = new i(function(e, r) {
								t.ready().then(function() {
									var n = t._dbInfo;
									n.db.transaction(function(t) {
										X(t, n, "SELECT key FROM " + n.storeName, [], function(t, r) {
											for (var n = [], o = 0; o < r.rows.length; o++) n.push(r.rows.item(o).key);
											e(n);
										}, function(e, t) {
											r(t);
										});
									});
								}).catch(r);
							});
							return c(r, e), r;
						},
						dropInstance: function(e, t) {
							t = f.apply(this, arguments);
							var r = this.config();
							(e = "function" != typeof e && e || {}).name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName);
							var n, o = this;
							return c(n = e.name ? new i(function(t) {
								var n = e.name === r.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0);
								e.storeName ? t({
									db: n,
									storeNames: [e.storeName]
								}) : t(function(e) {
									return new i(function(t, r) {
										e.transaction(function(n) {
											n.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(r, n) {
												for (var o = [], a = 0; a < n.rows.length; a++) o.push(n.rows.item(a).name);
												t({
													db: e,
													storeNames: o
												});
											}, function(e, t) {
												r(t);
											});
										}, function(e) {
											r(e);
										});
									});
								}(n));
							}).then(function(e) {
								return new i(function(t, r) {
									e.db.transaction(function(n) {
										function o(e) {
											return new i(function(t, r) {
												n.executeSql("DROP TABLE IF EXISTS " + e, [], function() {
													t();
												}, function(e, t) {
													r(t);
												});
											});
										}
										for (var a = [], c = 0, u = e.storeNames.length; c < u; c++) a.push(o(e.storeNames[c]));
										i.all(a).then(function() {
											t();
										}).catch(function(e) {
											r(e);
										});
									}, function(e) {
										r(e);
									});
								});
							}) : i.reject("Invalid arguments"), t), n;
						}
					};
					function Z(e, t) {
						var r = e.name + "/";
						return e.storeName !== t.storeName && (r += e.storeName + "/"), r;
					}
					function ee() {
						return !function() {
							var e = "_localforage_support_test";
							try {
								return localStorage.setItem(e, !0), localStorage.removeItem(e), !1;
							} catch (t) {
								return !0;
							}
						}() || localStorage.length > 0;
					}
					var te = {
						_driver: "localStorageWrapper",
						_initStorage: function(e) {
							var t = {};
							if (e) for (var r in e) t[r] = e[r];
							return t.keyPrefix = Z(e, this._defaultConfig), ee() ? (this._dbInfo = t, t.serializer = $, i.resolve()) : i.reject();
						},
						_support: function() {
							try {
								return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem;
							} catch (e) {
								return !1;
							}
						}(),
						iterate: function(e, t) {
							var r = this, n = r.ready().then(function() {
								for (var t = r._dbInfo, n = t.keyPrefix, o = n.length, a = localStorage.length, i = 1, c = 0; c < a; c++) {
									var u = localStorage.key(c);
									if (0 === u.indexOf(n)) {
										var s = localStorage.getItem(u);
										if (s && (s = t.serializer.deserialize(s)), void 0 !== (s = e(s, u.substring(o), i++))) return s;
									}
								}
							});
							return c(n, t), n;
						},
						getItem: function(e, t) {
							var r = this;
							e = s(e);
							var n = r.ready().then(function() {
								var t = r._dbInfo, n = localStorage.getItem(t.keyPrefix + e);
								return n && (n = t.serializer.deserialize(n)), n;
							});
							return c(n, t), n;
						},
						setItem: function(e, t, r) {
							var n = this;
							e = s(e);
							var o = n.ready().then(function() {
								void 0 === t && (t = null);
								var r = t;
								return new i(function(o, a) {
									var i = n._dbInfo;
									i.serializer.serialize(t, function(t, n) {
										if (n) a(n);
										else try {
											localStorage.setItem(i.keyPrefix + e, t), o(r);
										} catch (c) {
											"QuotaExceededError" !== c.name && "NS_ERROR_DOM_QUOTA_REACHED" !== c.name || a(c), a(c);
										}
									});
								});
							});
							return c(o, r), o;
						},
						removeItem: function(e, t) {
							var r = this;
							e = s(e);
							var n = r.ready().then(function() {
								var t = r._dbInfo;
								localStorage.removeItem(t.keyPrefix + e);
							});
							return c(n, t), n;
						},
						clear: function(e) {
							var t = this, r = t.ready().then(function() {
								for (var e = t._dbInfo.keyPrefix, r = localStorage.length - 1; r >= 0; r--) {
									var n = localStorage.key(r);
									0 === n.indexOf(e) && localStorage.removeItem(n);
								}
							});
							return c(r, e), r;
						},
						length: function(e) {
							var t = this.keys().then(function(e) {
								return e.length;
							});
							return c(t, e), t;
						},
						key: function(e, t) {
							var r = this, n = r.ready().then(function() {
								var t, n = r._dbInfo;
								try {
									t = localStorage.key(e);
								} catch (o) {
									t = null;
								}
								return t && (t = t.substring(n.keyPrefix.length)), t;
							});
							return c(n, t), n;
						},
						keys: function(e) {
							var t = this, r = t.ready().then(function() {
								for (var e = t._dbInfo, r = localStorage.length, n = [], o = 0; o < r; o++) {
									var a = localStorage.key(o);
									0 === a.indexOf(e.keyPrefix) && n.push(a.substring(e.keyPrefix.length));
								}
								return n;
							});
							return c(r, e), r;
						},
						dropInstance: function(e, t) {
							if (t = f.apply(this, arguments), !(e = "function" != typeof e && e || {}).name) {
								var r = this.config();
								e.name = e.name || r.name, e.storeName = e.storeName || r.storeName;
							}
							var n, o = this;
							return n = e.name ? new i(function(t) {
								e.storeName ? t(Z(e, o._defaultConfig)) : t(e.name + "/");
							}).then(function(e) {
								for (var t = localStorage.length - 1; t >= 0; t--) {
									var r = localStorage.key(t);
									0 === r.indexOf(e) && localStorage.removeItem(r);
								}
							}) : i.reject("Invalid arguments"), c(n, t), n;
						}
					}, re = function(e, t) {
						return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t);
					}, ne = function(e, t) {
						for (var r = e.length, n = 0; n < r;) {
							if (re(e[n], t)) return !0;
							n++;
						}
						return !1;
					}, oe = Array.isArray || function(e) {
						return "[object Array]" === Object.prototype.toString.call(e);
					}, ae = {}, ie = {}, ce = {
						INDEXEDDB: R,
						WEBSQL: J,
						LOCALSTORAGE: te
					}, ue = [
						ce.INDEXEDDB._driver,
						ce.WEBSQL._driver,
						ce.LOCALSTORAGE._driver
					], se = ["dropInstance"], fe = [
						"clear",
						"getItem",
						"iterate",
						"key",
						"keys",
						"length",
						"removeItem",
						"setItem"
					].concat(se), le = {
						description: "",
						driver: ue.slice(),
						name: "localforage",
						size: 4980736,
						storeName: "keyvaluepairs",
						version: 1
					};
					function de(e, t) {
						e[t] = function() {
							var r = arguments;
							return e.ready().then(function() {
								return e[t].apply(e, r);
							});
						};
					}
					function ve() {
						for (var e = 1; e < arguments.length; e++) {
							var t = arguments[e];
							if (t) for (var r in t) t.hasOwnProperty(r) && (oe(t[r]) ? arguments[0][r] = t[r].slice() : arguments[0][r] = t[r]);
						}
						return arguments[0];
					}
					t.exports = new (function() {
						function e(t) {
							for (var r in function(e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
							}(this, e), ce) if (ce.hasOwnProperty(r)) {
								var n = ce[r], o = n._driver;
								this[r] = o, ae[o] || this.defineDriver(n);
							}
							this._defaultConfig = ve({}, le), this._config = ve({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {});
						}
						return e.prototype.config = function(e) {
							if ("object" === (void 0 === e ? "undefined" : n(e))) {
								if (this._ready) return /* @__PURE__ */ new Error("Can't call config() after localforage has been used.");
								for (var t in e) {
									if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return /* @__PURE__ */ new Error("Database version must be a number.");
									this._config[t] = e[t];
								}
								return !("driver" in e) || !e.driver || this.setDriver(this._config.driver);
							}
							return "string" == typeof e ? this._config[e] : this._config;
						}, e.prototype.defineDriver = function(e, t, r) {
							var n = new i(function(t, r) {
								try {
									var n = e._driver, o = /* @__PURE__ */ new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
									if (!e._driver) return void r(o);
									for (var a = fe.concat("_initStorage"), u = 0, s = a.length; u < s; u++) {
										var f = a[u];
										if ((!ne(se, f) || e[f]) && "function" != typeof e[f]) return void r(o);
									}
									(function() {
										for (var t = function(e) {
											return function() {
												var t = /* @__PURE__ */ new Error("Method " + e + " is not implemented by the current driver"), r = i.reject(t);
												return c(r, arguments[arguments.length - 1]), r;
											};
										}, r = 0, n = se.length; r < n; r++) {
											var o = se[r];
											e[o] || (e[o] = t(o));
										}
									})();
									var l = function(r) {
										ae[n], ae[n] = e, ie[n] = r, t();
									};
									"_support" in e ? e._support && "function" == typeof e._support ? e._support().then(l, r) : l(!!e._support) : l(!0);
								} catch (d) {
									r(d);
								}
							});
							return u(n, t, r), n;
						}, e.prototype.driver = function() {
							return this._driver || null;
						}, e.prototype.getDriver = function(e, t, r) {
							var n = ae[e] ? i.resolve(ae[e]) : i.reject(/* @__PURE__ */ new Error("Driver not found."));
							return u(n, t, r), n;
						}, e.prototype.getSerializer = function(e) {
							var t = i.resolve($);
							return u(t, e), t;
						}, e.prototype.ready = function(e) {
							var t = this, r = t._driverSet.then(function() {
								return null === t._ready && (t._ready = t._initDriver()), t._ready;
							});
							return u(r, e, e), r;
						}, e.prototype.setDriver = function(e, t, r) {
							var n = this;
							oe(e) || (e = [e]);
							var o = this._getSupportedDrivers(e);
							function a() {
								n._config.driver = n.driver();
							}
							function c(e) {
								return n._extend(e), a(), n._ready = n._initStorage(n._config), n._ready;
							}
							var s = null !== this._driverSet ? this._driverSet.catch(function() {
								return i.resolve();
							}) : i.resolve();
							return this._driverSet = s.then(function() {
								var e = o[0];
								return n._dbInfo = null, n._ready = null, n.getDriver(e).then(function(e) {
									n._driver = e._driver, a(), n._wrapLibraryMethodsWithReady(), n._initDriver = function(e) {
										return function() {
											var t = 0;
											return function r() {
												for (; t < e.length;) {
													var o = e[t];
													return t++, n._dbInfo = null, n._ready = null, n.getDriver(o).then(c).catch(r);
												}
												a();
												var u = /* @__PURE__ */ new Error("No available storage method found.");
												return n._driverSet = i.reject(u), n._driverSet;
											}();
										};
									}(o);
								});
							}).catch(function() {
								a();
								var e = /* @__PURE__ */ new Error("No available storage method found.");
								return n._driverSet = i.reject(e), n._driverSet;
							}), u(this._driverSet, t, r), this._driverSet;
						}, e.prototype.supports = function(e) {
							return !!ie[e];
						}, e.prototype._extend = function(e) {
							ve(this, e);
						}, e.prototype._getSupportedDrivers = function(e) {
							for (var t = [], r = 0, n = e.length; r < n; r++) {
								var o = e[r];
								this.supports(o) && t.push(o);
							}
							return t;
						}, e.prototype._wrapLibraryMethodsWithReady = function() {
							for (var e = 0, t = fe.length; e < t; e++) de(this, fe[e]);
						}, e.prototype.createInstance = function(t) {
							return new e(t);
						}, e;
					}())();
				}, { 3: 3 }]
			}, {}, [4])(4);
		});
	}), N = "object" == typeof global && global && global.Object === Object && global, x = "object" == typeof self && self && self.Object === Object && self, R = N || x || Function("return this")(), k = R.Symbol, D = Object.prototype, T = D.hasOwnProperty, P = D.toString, C = k ? k.toStringTag : void 0;
	var B = Object.prototype.toString;
	var M = k ? k.toStringTag : void 0;
	function z(e) {
		return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : M && M in Object(e) ? function(e) {
			var t = T.call(e, C), r = e[C];
			try {
				e[C] = void 0;
				var n = !0;
			} catch (a) {}
			var o = P.call(e);
			return n && (t ? e[C] = r : delete e[C]), o;
		}(e) : function(e) {
			return B.call(e);
		}(e);
	}
	function F(e) {
		return null != e && "object" == typeof e;
	}
	var L = Array.isArray;
	function U(e) {
		var t = typeof e;
		return null != e && ("object" == t || "function" == t);
	}
	function W(e) {
		if (!U(e)) return !1;
		var t = z(e);
		return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
	}
	var q, H = R["__core-js_shared__"], G = (q = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "")) ? "Symbol(src)_1." + q : "";
	var K = Function.prototype.toString;
	function V(e) {
		if (null != e) {
			try {
				return K.call(e);
			} catch (t) {}
			try {
				return e + "";
			} catch (t) {}
		}
		return "";
	}
	var $ = /^\[object .+?Constructor\]$/, Q = Function.prototype, X = Object.prototype, Y = Q.toString, J = X.hasOwnProperty, Z = RegExp("^" + Y.call(J).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function ee(e) {
		return !(!U(e) || (t = e, G && G in t)) && (W(e) ? Z : $).test(V(e));
		var t;
	}
	function te(e, t) {
		var r = function(e, t) {
			return null == e ? void 0 : e[t];
		}(e, t);
		return ee(r) ? r : void 0;
	}
	var re = te(R, "WeakMap"), ne = Object.create, oe = function() {
		function e() {}
		return function(t) {
			if (!U(t)) return {};
			if (ne) return ne(t);
			e.prototype = t;
			var r = new e();
			return e.prototype = void 0, r;
		};
	}();
	var ae = function() {
		try {
			var e = te(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch (t) {}
	}();
	var ie = /^(?:0|[1-9]\d*)$/;
	function ce(e, t) {
		var r = typeof e;
		return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && ie.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function ue(e, t, r) {
		"__proto__" == t && ae ? ae(e, t, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[t] = r;
	}
	function se(e, t) {
		return e === t || e != e && t != t;
	}
	var fe = Object.prototype.hasOwnProperty;
	function le(e, t, r) {
		var n = e[t];
		fe.call(e, t) && se(n, r) && (void 0 !== r || t in e) || ue(e, t, r);
	}
	function de(e, t, r, n) {
		var o = !r;
		r || (r = {});
		for (var a = -1, i = t.length; ++a < i;) {
			var c = t[a], u = n ? n(r[c], e[c], c, r, e) : void 0;
			void 0 === u && (u = e[c]), o ? ue(r, c, u) : le(r, c, u);
		}
		return r;
	}
	function ve(e) {
		return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	function pe(e) {
		return null != e && ve(e.length) && !W(e);
	}
	var he = Object.prototype;
	function ye(e) {
		var t = e && e.constructor;
		return e === ("function" == typeof t && t.prototype || he);
	}
	function be(e) {
		return F(e) && "[object Arguments]" == z(e);
	}
	var ge = Object.prototype, me = ge.hasOwnProperty, _e = ge.propertyIsEnumerable, je = be(function() {
		return arguments;
	}()) ? be : function(e) {
		return F(e) && me.call(e, "callee") && !_e.call(e, "callee");
	};
	var we = "object" == typeof exports && exports && !exports.nodeType && exports, Se = we && "object" == typeof module && module && !module.nodeType && module, Ie = Se && Se.exports === we ? R.Buffer : void 0, Oe = (Ie ? Ie.isBuffer : void 0) || function() {
		return !1;
	}, Ee = {};
	function Ae(e) {
		return function(t) {
			return e(t);
		};
	}
	Ee["[object Float32Array]"] = Ee["[object Float64Array]"] = Ee["[object Int8Array]"] = Ee["[object Int16Array]"] = Ee["[object Int32Array]"] = Ee["[object Uint8Array]"] = Ee["[object Uint8ClampedArray]"] = Ee["[object Uint16Array]"] = Ee["[object Uint32Array]"] = !0, Ee["[object Arguments]"] = Ee["[object Array]"] = Ee["[object ArrayBuffer]"] = Ee["[object Boolean]"] = Ee["[object DataView]"] = Ee["[object Date]"] = Ee["[object Error]"] = Ee["[object Function]"] = Ee["[object Map]"] = Ee["[object Number]"] = Ee["[object Object]"] = Ee["[object RegExp]"] = Ee["[object Set]"] = Ee["[object String]"] = Ee["[object WeakMap]"] = !1;
	var Ne = "object" == typeof exports && exports && !exports.nodeType && exports, xe = Ne && "object" == typeof module && module && !module.nodeType && module, Re = xe && xe.exports === Ne && N.process, ke = function() {
		try {
			return xe && xe.require && xe.require("util").types || Re && Re.binding && Re.binding("util");
		} catch (t) {}
	}(), De = ke && ke.isTypedArray, Te = De ? Ae(De) : function(e) {
		return F(e) && ve(e.length) && !!Ee[z(e)];
	}, Pe = Object.prototype.hasOwnProperty;
	function Ce(e, t) {
		var r = L(e), n = !r && je(e), o = !r && !n && Oe(e), a = !r && !n && !o && Te(e), i = r || n || o || a, c = i ? function(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n;
		}(e.length, String) : [], u = c.length;
		for (var s in e) !t && !Pe.call(e, s) || i && ("length" == s || o && ("offset" == s || "parent" == s) || a && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || ce(s, u)) || c.push(s);
		return c;
	}
	function Be(e, t) {
		return function(r) {
			return e(t(r));
		};
	}
	var Me = Be(Object.keys, Object), ze = Object.prototype.hasOwnProperty;
	function Fe(e) {
		return pe(e) ? Ce(e) : function(e) {
			if (!ye(e)) return Me(e);
			var t = [];
			for (var r in Object(e)) ze.call(e, r) && "constructor" != r && t.push(r);
			return t;
		}(e);
	}
	var Le = Object.prototype.hasOwnProperty;
	function Ue(e) {
		if (!U(e)) return function(e) {
			var t = [];
			if (null != e) for (var r in Object(e)) t.push(r);
			return t;
		}(e);
		var t = ye(e), r = [];
		for (var n in e) ("constructor" != n || !t && Le.call(e, n)) && r.push(n);
		return r;
	}
	function We(e) {
		return pe(e) ? Ce(e, !0) : Ue(e);
	}
	var qe = te(Object, "create");
	var He = Object.prototype.hasOwnProperty;
	var Ge = Object.prototype.hasOwnProperty;
	function Ke(e) {
		var t = -1, r = null == e ? 0 : e.length;
		for (this.clear(); ++t < r;) {
			var n = e[t];
			this.set(n[0], n[1]);
		}
	}
	function Ve(e, t) {
		for (var r = e.length; r--;) if (se(e[r][0], t)) return r;
		return -1;
	}
	Ke.prototype.clear = function() {
		this.__data__ = qe ? qe(null) : {}, this.size = 0;
	}, Ke.prototype.delete = function(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= t ? 1 : 0, t;
	}, Ke.prototype.get = function(e) {
		var t = this.__data__;
		if (qe) {
			var r = t[e];
			return "__lodash_hash_undefined__" === r ? void 0 : r;
		}
		return He.call(t, e) ? t[e] : void 0;
	}, Ke.prototype.has = function(e) {
		var t = this.__data__;
		return qe ? void 0 !== t[e] : Ge.call(t, e);
	}, Ke.prototype.set = function(e, t) {
		var r = this.__data__;
		return this.size += this.has(e) ? 0 : 1, r[e] = qe && void 0 === t ? "__lodash_hash_undefined__" : t, this;
	};
	var $e = Array.prototype.splice;
	function Qe(e) {
		var t = -1, r = null == e ? 0 : e.length;
		for (this.clear(); ++t < r;) {
			var n = e[t];
			this.set(n[0], n[1]);
		}
	}
	Qe.prototype.clear = function() {
		this.__data__ = [], this.size = 0;
	}, Qe.prototype.delete = function(e) {
		var t = this.__data__, r = Ve(t, e);
		return !(r < 0) && (r == t.length - 1 ? t.pop() : $e.call(t, r, 1), --this.size, !0);
	}, Qe.prototype.get = function(e) {
		var t = this.__data__, r = Ve(t, e);
		return r < 0 ? void 0 : t[r][1];
	}, Qe.prototype.has = function(e) {
		return Ve(this.__data__, e) > -1;
	}, Qe.prototype.set = function(e, t) {
		var r = this.__data__, n = Ve(r, e);
		return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
	};
	var Xe = te(R, "Map");
	function Ye(e, t) {
		var r, n, o = e.__data__;
		return ("string" == (n = typeof (r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? o["string" == typeof t ? "string" : "hash"] : o.map;
	}
	function Je(e) {
		var t = -1, r = null == e ? 0 : e.length;
		for (this.clear(); ++t < r;) {
			var n = e[t];
			this.set(n[0], n[1]);
		}
	}
	function Ze(e, t) {
		for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
		return e;
	}
	Je.prototype.clear = function() {
		this.size = 0, this.__data__ = {
			hash: new Ke(),
			map: new (Xe || Qe)(),
			string: new Ke()
		};
	}, Je.prototype.delete = function(e) {
		var t = Ye(this, e).delete(e);
		return this.size -= t ? 1 : 0, t;
	}, Je.prototype.get = function(e) {
		return Ye(this, e).get(e);
	}, Je.prototype.has = function(e) {
		return Ye(this, e).has(e);
	}, Je.prototype.set = function(e, t) {
		var r = Ye(this, e), n = r.size;
		return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
	};
	var et = Be(Object.getPrototypeOf, Object);
	function tt(e) {
		var t = this.__data__ = new Qe(e);
		this.size = t.size;
	}
	tt.prototype.clear = function() {
		this.__data__ = new Qe(), this.size = 0;
	}, tt.prototype.delete = function(e) {
		var t = this.__data__, r = t.delete(e);
		return this.size = t.size, r;
	}, tt.prototype.get = function(e) {
		return this.__data__.get(e);
	}, tt.prototype.has = function(e) {
		return this.__data__.has(e);
	}, tt.prototype.set = function(e, t) {
		var r = this.__data__;
		if (r instanceof Qe) {
			var n = r.__data__;
			if (!Xe || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
			r = this.__data__ = new Je(n);
		}
		return r.set(e, t), this.size = r.size, this;
	};
	var rt = "object" == typeof exports && exports && !exports.nodeType && exports, nt = rt && "object" == typeof module && module && !module.nodeType && module, ot = nt && nt.exports === rt ? R.Buffer : void 0, at = ot ? ot.allocUnsafe : void 0;
	function it() {
		return [];
	}
	var ct = Object.prototype.propertyIsEnumerable, ut = Object.getOwnPropertySymbols, st = ut ? function(e) {
		return null == e ? [] : (e = Object(e), function(e, t) {
			for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;) {
				var i = e[r];
				t(i, r, e) && (a[o++] = i);
			}
			return a;
		}(ut(e), function(t) {
			return ct.call(e, t);
		}));
	} : it;
	var ft = Object.getOwnPropertySymbols ? function(e) {
		for (var t = []; e;) Ze(t, st(e)), e = et(e);
		return t;
	} : it;
	function lt(e, t, r) {
		var n = t(e);
		return L(e) ? n : Ze(n, r(e));
	}
	function dt(e) {
		return lt(e, Fe, st);
	}
	function vt(e) {
		return lt(e, We, ft);
	}
	var pt = te(R, "DataView"), ht = te(R, "Promise"), yt = te(R, "Set"), bt = "[object Map]", gt = "[object Promise]", mt = "[object Set]", _t = "[object WeakMap]", jt = "[object DataView]", wt = V(pt), St = V(Xe), It = V(ht), Ot = V(yt), Et = V(re), At = z;
	(pt && At(new pt(/* @__PURE__ */ new ArrayBuffer(1))) != jt || Xe && At(new Xe()) != bt || ht && At(ht.resolve()) != gt || yt && At(new yt()) != mt || re && At(new re()) != _t) && (At = function(e) {
		var t = z(e), r = "[object Object]" == t ? e.constructor : void 0, n = r ? V(r) : "";
		if (n) switch (n) {
			case wt: return jt;
			case St: return bt;
			case It: return gt;
			case Ot: return mt;
			case Et: return _t;
		}
		return t;
	});
	var Nt = At, xt = Object.prototype.hasOwnProperty;
	var Rt = R.Uint8Array;
	function kt(e) {
		var t = new e.constructor(e.byteLength);
		return new Rt(t).set(new Rt(e)), t;
	}
	var Dt = /\w*$/;
	var Tt = k ? k.prototype : void 0, Pt = Tt ? Tt.valueOf : void 0;
	function Ct(e, t, r) {
		var n, o, a, i = e.constructor;
		switch (t) {
			case "[object ArrayBuffer]": return kt(e);
			case "[object Boolean]":
			case "[object Date]": return new i(+e);
			case "[object DataView]": return function(e, t) {
				var r = t ? kt(e.buffer) : e.buffer;
				return new e.constructor(r, e.byteOffset, e.byteLength);
			}(e, r);
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]": return function(e, t) {
				var r = t ? kt(e.buffer) : e.buffer;
				return new e.constructor(r, e.byteOffset, e.length);
			}(e, r);
			case "[object Map]":
			case "[object Set]": return new i();
			case "[object Number]":
			case "[object String]": return new i(e);
			case "[object RegExp]": return (a = new (o = e).constructor(o.source, Dt.exec(o))).lastIndex = o.lastIndex, a;
			case "[object Symbol]": return n = e, Pt ? Object(Pt.call(n)) : {};
		}
	}
	var Bt = ke && ke.isMap, Mt = Bt ? Ae(Bt) : function(e) {
		return F(e) && "[object Map]" == Nt(e);
	};
	var zt = ke && ke.isSet, Ft = zt ? Ae(zt) : function(e) {
		return F(e) && "[object Set]" == Nt(e);
	}, Lt = "[object Arguments]", Ut = "[object Function]", Wt = "[object Object]", qt = {};
	function Ht(e, t, r, n, o, a) {
		var i, c = 1 & t, u = 2 & t, s = 4 & t;
		if (r && (i = o ? r(e, n, o, a) : r(e)), void 0 !== i) return i;
		if (!U(e)) return e;
		var f = L(e);
		if (f) {
			if (i = function(e) {
				var t = e.length, r = new e.constructor(t);
				return t && "string" == typeof e[0] && xt.call(e, "index") && (r.index = e.index, r.input = e.input), r;
			}(e), !c) return function(e, t) {
				var r = -1, n = e.length;
				for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
				return t;
			}(e, i);
		} else {
			var l = Nt(e), d = l == Ut || "[object GeneratorFunction]" == l;
			if (Oe(e)) return function(e, t) {
				if (t) return e.slice();
				var r = e.length, n = at ? at(r) : new e.constructor(r);
				return e.copy(n), n;
			}(e, c);
			if (l == Wt || l == Lt || d && !o) {
				if (i = u || d ? {} : function(e) {
					return "function" != typeof e.constructor || ye(e) ? {} : oe(et(e));
				}(e), !c) return u ? function(e, t) {
					return de(e, ft(e), t);
				}(e, function(e, t) {
					return e && de(t, We(t), e);
				}(i, e)) : function(e, t) {
					return de(e, st(e), t);
				}(e, function(e, t) {
					return e && de(t, Fe(t), e);
				}(i, e));
			} else {
				if (!qt[l]) return o ? e : {};
				i = Ct(e, l, c);
			}
		}
		a || (a = new tt());
		var v = a.get(e);
		if (v) return v;
		a.set(e, i), Ft(e) ? e.forEach(function(n) {
			i.add(Ht(n, t, r, n, e, a));
		}) : Mt(e) && e.forEach(function(n, o) {
			i.set(o, Ht(n, t, r, o, e, a));
		});
		var p = f ? void 0 : (s ? u ? vt : dt : u ? We : Fe)(e);
		return function(e, t) {
			for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
		}(p || e, function(n, o) {
			p && (n = e[o = n]), le(i, o, Ht(n, t, r, o, e, a));
		}), i;
	}
	qt[Lt] = qt["[object Array]"] = qt["[object ArrayBuffer]"] = qt["[object DataView]"] = qt["[object Boolean]"] = qt["[object Date]"] = qt["[object Float32Array]"] = qt["[object Float64Array]"] = qt["[object Int8Array]"] = qt["[object Int16Array]"] = qt["[object Int32Array]"] = qt["[object Map]"] = qt["[object Number]"] = qt[Wt] = qt["[object RegExp]"] = qt["[object Set]"] = qt["[object String]"] = qt["[object Symbol]"] = qt["[object Uint8Array]"] = qt["[object Uint8ClampedArray]"] = qt["[object Uint16Array]"] = qt["[object Uint32Array]"] = !0, qt["[object Error]"] = qt[Ut] = qt["[object WeakMap]"] = !1;
	var Gt = c(A(), 1);
	let Kt = "tv_charts_storage";
	let Vt = Promise.resolve();
	function $t(e, t = "") {
		return e ? Object.keys(e).reduce((r, n) => {
			const o = t.length ? t + "." : "";
			return "object" == typeof e[n] && null !== e[n] && !Array.isArray(e[n]) && Object.keys(e[n]).length > 0 ? Object.assign(r, $t(e[n], o + n)) : r[o + n] = e[n], r;
		}, {}) : {};
	}
	h({
		async setStorageKey(e = "tv_charts_storage") {
			Kt = e;
		},
		getFullStorage: async () => await Gt.default.getItem(Kt) || {},
		async saveChart(e, t) {
			return Vt = Vt.then(() => this._executeSave(e, t));
		},
		async _executeSave(e, t) {
			let r = !1;
			const n = Ht(t, 5);
			let o = [];
			n.charts.forEach((e) => {
				e.panes.forEach((e) => {
					e.sources.forEach((e) => {
						e.type?.includes("LineTool") && (r = !0);
						const t = /study/i.test(e.type || ""), n = /volume/i.test(e.type || "");
						if (t && !n && e.metaInfo) {
							const t = e.state || {}, r = $t(t.styles, "styles");
							void 0 !== t.precision && (r.precision = t.precision), o.push({
								name: e.metaInfo.name,
								inputs: t.inputs,
								styles: r
							});
						}
					});
				});
			});
			const a = Array.from(new Map(o.map((e) => [JSON.stringify(e), e])).values()), i = await this.getFullStorage();
			if (!r) return i[e] && delete i[e], i.allStudies = a, await Gt.default.setItem(Kt, i), { status: "cleaned" };
			t.charts.forEach((e) => {
				e.panes.forEach((e) => {
					e.sources = e.sources.filter((e) => !/study/i.test(e.type || "") || /volume/i.test(e.type || ""));
				});
			}), i[e] = {
				...t,
				_lastModified: Date.now()
			}, i.allStudies = a;
			const c = Object.keys(i).filter((e) => "allStudies" !== e);
			if (c.length > 100) {
				const e = c.reduce((e, t) => (i[e]._lastModified || 0) < (i[t]._lastModified || 0) ? e : t);
				delete i[e];
			}
			return await Gt.default.setItem(Kt, i), { status: "saved" };
		},
		async removeChart(e) {
			const t = await this.getFullStorage();
			return !!t[e] && (delete t[e], await Gt.default.setItem(Kt, t), !0);
		},
		clearAll: async () => Gt.default.removeItem(Kt)
	});
})();
