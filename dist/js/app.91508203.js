(function (e) {
    function t(t) {
        for (var n, l, d = t[0], s = t[1], o = t[2], b = 0, u = []; b < d.length; b++)
            l = d[b],
                Object.prototype.hasOwnProperty.call(i, l) && i[l] && u.push(i[l][0]),
                i[l] = 0;
        for (n in s)
            Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        r && r(t);
        while (u.length)
            u.shift()();
        return a.push.apply(a, o || []),
            c()
    }
    function c() {
        for (var e, t = 0; t < a.length; t++) {
            for (var c = a[t], n = !0, d = 1; d < c.length; d++) {
                var s = c[d];
                0 !== i[s] && (n = !1)
            }
            n && (a.splice(t--, 1),
                e = l(l.s = c[0]))
        }
        return e
    }
    var n = {}
        , i = {
            app: 0
        }
        , a = [];
    function l(t) {
        if (n[t])
            return n[t].exports;
        var c = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(c.exports, c, c.exports, l),
            c.l = !0,
            c.exports
    }
    l.m = e,
        l.c = n,
        l.d = function (e, t, c) {
            l.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: c
            })
        }
        ,
        l.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        l.t = function (e, t) {
            if (1 & t && (e = l(e)),
                8 & t)
                return e;
            if (4 & t && "object" === typeof e && e && e.__esModule)
                return e;
            var c = Object.create(null);
            if (l.r(c),
                Object.defineProperty(c, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var n in e)
                    l.d(c, n, function (t) {
                        return e[t]
                    }
                        .bind(null, n));
            return c
        }
        ,
        l.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            }
                : function () {
                    return e
                }
                ;
            return l.d(t, "a", t),
                t
        }
        ,
        l.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        l.p = "/fake-yiban/dist/";
    var d = window["webpackJsonp"] = window["webpackJsonp"] || []
        , s = d.push.bind(d);
    d.push = t,
        d = d.slice();
    for (var o = 0; o < d.length; o++)
        t(d[o]);
    var r = s;
    a.push([0, "chunk-vendors"]),
        c()
}
)({
    0: function (e, t, c) {
        e.exports = c("56d7")
    },
    "04ea": function (e, t, c) { },
    "0e50": function (e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "2b54": function (e, t, c) {
        "use strict";
        c("ef41")
    },
    "36be": function (e, t, c) {
        e.exports = c.p + "img/menu.c6c92fec.svg"
    },
    "41c7": function (e, t, c) { },
    "55fd": function (e, t, c) { },
    "56d7": function (e, t, c) {
        "use strict";
        c.r(t);
        c("e260"),
            c("e6cf"),
            c("cca6"),
            c("a79d");
        var n = c("7a23")
            , i = (c("a434"),
                c("b0c0"),
                c("ccfe"))
            , a = c.n(i)
            , l = c("79a0")
            , d = c.n(l)
            , s = c("bf37")
            , o = c.n(s)
            , r = c("36be")
            , b = c.n(r)
            , u = c("d739")
            , f = c.n(u)
            , O = c("eef4")
            , j = c.n(O)
            , v = c("cf05")
            , p = c.n(v)
            , m = {
                id: "root"
            }
            , g = {
                class: "header"
            }
            , h = Object(n["f"])("img", {
                src: a.a
            }, null, -1)
            , x = [h]
            , y = {
                key: 1,
                class: "title home"
            }
            , k = {
                key: 2,
                class: "title"
            }
            , I = {
                key: 3,
                class: "title"
            }
            , A = {
                key: 4,
                class: "title"
            }
            , C = Object(n["f"])("img", {
                src: d.a
            }, null, -1)
            , E = [C]
            , V = {
                key: 6,
                class: "button-app"
            }
            , _ = Object(n["f"])("img", {
                src: o.a
            }, null, -1)
            , w = [_]
            , Q = {
                key: 7,
                class: "button-app"
            }
            , H = Object(n["f"])("img", {
                src: b.a
            }, null, -1)
            , J = [H]
            , S = {
                key: 0,
                class: "content"
            }
            , X = Object(n["f"])("div", {
                class: "edit-title-detail"
            }, [Object(n["f"])("div", {
                class: "edit-title-detail-dot"
            }), Object(n["h"])("申请人 ")], -1)
            , U = {
                class: "edit-detail-content"
            }
            , P = Object(n["f"])("div", {
                class: "row no-delete"
            }, [Object(n["f"])("div", {
                class: "label"
            }, "姓名"), Object(n["f"])("div", {
                class: "label"
            }, "学号")], -1)
            , B = {
                class: "row no-delete"
            }
            , D = Object(n["f"])("div", {
                class: "edit-title-detail"
            }, [Object(n["f"])("div", {
                class: "edit-title-detail-dot"
            }), Object(n["h"])("申请内容 ")], -1)
            , T = {
                class: "edit-detail-content"
            }
            , W = Object(n["f"])("div", {
                class: "row no-delete"
            }, [Object(n["f"])("div", {
                class: "label"
            }, "项目"), Object(n["f"])("div", {
                class: "label"
            }, "内容")], -1)
            , N = ["onClick"]
            , R = {
                key: 1,
                class: "row"
            }
            , q = ["onUpdate:modelValue"]
            , Z = ["onUpdate:modelValue"]
            , z = ["onClick"]
            , L = Object(n["f"])("img", {
                src: f.a
            }, null, -1)
            , M = [L]
            , K = Object(n["f"])("img", {
                src: j.a
            }, null, -1)
            , F = [K]
            , Y = Object(n["f"])("div", {
                class: "edit-title-detail"
            }, [Object(n["f"])("div", {
                class: "edit-title-detail-dot"
            }), Object(n["h"])("审批进度 ")], -1)
            , G = {
                class: "edit-detail-content"
            }
            , $ = Object(n["f"])("div", {
                class: "row no-delete"
            }, [Object(n["f"])("div", {
                class: "label"
            }, "姓名"), Object(n["f"])("div", {
                class: "label"
            }, "编号"), Object(n["f"])("div", {
                class: "label"
            }, "时间")], -1)
            , ee = {
                key: 0,
                class: "row"
            }
            , te = ["onClick"]
            , ce = {
                key: 1,
                class: "row"
            }
            , ne = ["onUpdate:modelValue"]
            , ie = ["onUpdate:modelValue"]
            , ae = ["onUpdate:modelValue"]
            , le = ["onClick"]
            , de = Object(n["f"])("img", {
                src: f.a
            }, null, -1)
            , se = [de]
            , oe = Object(n["f"])("img", {
                src: j.a
            }, null, -1)
            , re = [oe]
            , be = Object(n["f"])("div", {
                class: "edit-title-detail"
            }, [Object(n["f"])("div", {
                class: "edit-title-detail-dot"
            }), Object(n["h"])("已抄送 ")], -1)
            , ue = {
                class: "edit-detail-content"
            }
            , fe = Object(n["f"])("div", {
                class: "row no-delete"
            }, [Object(n["f"])("div", {
                class: "label"
            }, "姓名"), Object(n["f"])("div", {
                class: "label"
            }, "编号")], -1)
            , Oe = {
                key: 0,
                class: "row"
            }
            , je = ["onClick"]
            , ve = {
                key: 1,
                class: "row"
            }
            , pe = ["onUpdate:modelValue"]
            , me = ["onUpdate:modelValue"]
            , ge = ["onClick"]
            , he = Object(n["f"])("img", {
                src: f.a
            }, null, -1)
            , xe = [he]
            , ye = Object(n["f"])("img", {
                src: j.a
            }, null, -1)
            , ke = [ye]
            , Ie = {
                key: 1,
                class: "final"
            }
            , Ae = Object(n["f"])("div", {
                class: "separator"
            }, null, -1)
            , Ce = {
                key: 4,
                class: "about"
            }
            , Ee = Object(n["f"])("img", {
                src: p.a
            }, null, -1)
            , Ve = Object(n["f"])("h2", null, "Fake Yiban 0.2.3 (Alpha)", -1)
            , _e = Object(n["f"])("p", null, [Object(n["h"])("By "), Object(n["f"])("a", {
                href: "https://github.com/supertsy5/"
            }, "SUPERTSY5")], -1)
            , we = Object(n["f"])("p", null, "警告：本程序仅供演示，请勿滥用。一切后果自负。", -1)
            , Qe = [Ee, Ve, _e, we];
        function He(e, t, c, i, a, l) {
            var d = Object(n["m"])("fake")
                , s = Object(n["m"])("QRCode");
            return Object(n["i"])(),
                Object(n["e"])("div", m, [Object(n["f"])("div", g, [0 != a.page ? (Object(n["i"])(),
                    Object(n["e"])("div", {
                        key: 0,
                        class: "button-app",
                        onClick: t[0] || (t[0] = function (e) {
                            return a.page = 0
                        }
                        )
                    }, x)) : Object(n["d"])("", !0), 0 == a.page ? (Object(n["i"])(),
                        Object(n["e"])("div", y, "Fake Yiban v0.2.3 (Alpha)")) : Object(n["d"])("", !0), -1 == a.page ? (Object(n["i"])(),
                            Object(n["e"])("div", k, "关于")) : 1 == a.page ? (Object(n["i"])(),
                                Object(n["e"])("div", I, Object(n["n"])(a.studentName) + "的请销假", 1)) : 2 == a.page ? (Object(n["i"])(),
                                    Object(n["e"])("div", A, "请销假")) : Object(n["d"])("", !0), 0 == a.page ? (Object(n["i"])(),
                                        Object(n["e"])("div", {
                                            key: 5,
                                            class: "button-app",
                                            onClick: t[1] || (t[1] = function (e) {
                                                return a.page = -1
                                            }
                                            )
                                        }, E)) : Object(n["d"])("", !0), a.page > 0 ? (Object(n["i"])(),
                                            Object(n["e"])("div", V, w)) : Object(n["d"])("", !0), a.page > 0 ? (Object(n["i"])(),
                                                Object(n["e"])("div", Q, J)) : Object(n["d"])("", !0)]), 0 == a.page ? (Object(n["i"])(),
                                                    Object(n["e"])("div", S, [X, Object(n["f"])("div", U, [P, Object(n["f"])("div", B, [Object(n["p"])(Object(n["f"])("input", {
                                                        type: "text",
                                                        "onUpdate:modelValue": t[2] || (t[2] = function (e) {
                                                            return a.studentName = e
                                                        }
                                                        )
                                                    }, null, 512), [[n["o"], a.studentName]]), Object(n["p"])(Object(n["f"])("input", {
                                                        type: "text",
                                                        "onUpdate:modelValue": t[3] || (t[3] = function (e) {
                                                            return a.studentID = e
                                                        }
                                                        )
                                                    }, null, 512), [[n["o"], a.studentID]])])]), D, Object(n["f"])("div", T, [W, (Object(n["i"])(!0),
                                                        Object(n["e"])(n["a"], null, Object(n["l"])(a.items, (function (e, c) {
                                                            return Object(n["i"])(),
                                                                Object(n["e"])("div", {
                                                                    key: e
                                                                }, [a.deletingItem == c ? (Object(n["i"])(),
                                                                    Object(n["e"])("div", {
                                                                        key: 0,
                                                                        class: "row",
                                                                        onBlur: t[5] || (t[5] = function (e) {
                                                                            return a.deletingItem = -1
                                                                        }
                                                                        )
                                                                    }, [Object(n["f"])("button", {
                                                                        class: "confirm",
                                                                        onClick: function (e) {
                                                                            a.items.splice(c, 1),
                                                                                a.deletingItem = -1
                                                                        }
                                                                    }, "删除", 8, N), Object(n["f"])("button", {
                                                                        class: "cancel",
                                                                        onClick: t[4] || (t[4] = function (e) {
                                                                            return a.deletingItem = -1
                                                                        }
                                                                        )
                                                                    }, "取消")], 32)) : (Object(n["i"])(),
                                                                        Object(n["e"])("div", R, [Object(n["p"])(Object(n["f"])("input", {
                                                                            type: "text",
                                                                            "onUpdate:modelValue": function (t) {
                                                                                return e.name = t
                                                                            }
                                                                        }, null, 8, q), [[n["o"], e.name]]), Object(n["p"])(Object(n["f"])("input", {
                                                                            type: "text",
                                                                            "onUpdate:modelValue": function (t) {
                                                                                return e.value = t
                                                                            }
                                                                        }, null, 8, Z), [[n["o"], e.value]]), Object(n["f"])("button", {
                                                                            class: "delete",
                                                                            onClick: function (e) {
                                                                                return a.deletingItem = c
                                                                            }
                                                                        }, M, 8, z)]))])
                                                        }
                                                        )), 128)), Object(n["f"])("button", {
                                                            class: "add",
                                                            onClick: t[6] || (t[6] = function (e) {
                                                                return a.items.push({
                                                                    name: "",
                                                                    value: ""
                                                                })
                                                            }
                                                            )
                                                        }, F)]), Y, Object(n["f"])("div", G, [$, (Object(n["i"])(!0),
                                                            Object(n["e"])(n["a"], null, Object(n["l"])(a.approvers, (function (e, c) {
                                                                return Object(n["i"])(),
                                                                    Object(n["e"])("div", {
                                                                        key: e
                                                                    }, [a.deletingApprover == c ? (Object(n["i"])(),
                                                                        Object(n["e"])("div", ee, [Object(n["f"])("button", {
                                                                            class: "confirm",
                                                                            onClick: function (e) {
                                                                                a.approvers.splice(c, 1),
                                                                                    a.deletingApprover = -1
                                                                            }
                                                                        }, "删除", 8, te), Object(n["f"])("button", {
                                                                            class: "cancel",
                                                                            onClick: t[7] || (t[7] = function (e) {
                                                                                return a.deletingApprover = -1
                                                                            }
                                                                            )
                                                                        }, "取消")])) : (Object(n["i"])(),
                                                                            Object(n["e"])("div", ce, [Object(n["p"])(Object(n["f"])("input", {
                                                                                type: "text",
                                                                                "onUpdate:modelValue": function (t) {
                                                                                    return e.name = t
                                                                                }
                                                                            }, null, 8, ne), [[n["o"], e.name]]), Object(n["p"])(Object(n["f"])("input", {
                                                                                type: "text",
                                                                                "onUpdate:modelValue": function (t) {
                                                                                    return e.id = t
                                                                                }
                                                                            }, null, 8, ie), [[n["o"], e.id]]), Object(n["p"])(Object(n["f"])("input", {
                                                                                type: "text",
                                                                                "onUpdate:modelValue": function (t) {
                                                                                    return e.time = t
                                                                                }
                                                                            }, null, 8, ae), [[n["o"], e.time]]), Object(n["f"])("button", {
                                                                                class: "delete",
                                                                                onClick: function (e) {
                                                                                    return a.deletingApprover = c
                                                                                }
                                                                            }, se, 8, le)]))])
                                                            }
                                                            )), 128)), Object(n["f"])("button", {
                                                                class: "add",
                                                                onClick: t[8] || (t[8] = function (e) {
                                                                    return a.approvers.push({
                                                                        name: "",
                                                                        id: "",
                                                                        time: ""
                                                                    })
                                                                }
                                                                )
                                                            }, re)]), be, Object(n["f"])("div", ue, [fe, (Object(n["i"])(!0),
                                                                Object(n["e"])(n["a"], null, Object(n["l"])(a.ccs, (function (e, c) {
                                                                    return Object(n["i"])(),
                                                                        Object(n["e"])("div", {
                                                                            key: e
                                                                        }, [a.deletingCC == c ? (Object(n["i"])(),
                                                                            Object(n["e"])("div", Oe, [Object(n["f"])("button", {
                                                                                class: "confirm",
                                                                                onClick: function (e) {
                                                                                    a.ccs.splice(c, 1),
                                                                                        a.deletingCC = -1
                                                                                }
                                                                            }, "删除", 8, je), Object(n["f"])("button", {
                                                                                class: "cancel",
                                                                                onClick: t[9] || (t[9] = function (e) {
                                                                                    return a.deletingCC = -1
                                                                                }
                                                                                )
                                                                            }, "取消")])) : (Object(n["i"])(),
                                                                                Object(n["e"])("div", ve, [Object(n["p"])(Object(n["f"])("input", {
                                                                                    type: "text",
                                                                                    "onUpdate:modelValue": function (t) {
                                                                                        return e.name = t
                                                                                    }
                                                                                }, null, 8, pe), [[n["o"], e.name]]), Object(n["p"])(Object(n["f"])("input", {
                                                                                    type: "text",
                                                                                    "onUpdate:modelValue": function (t) {
                                                                                        return e.id = t
                                                                                    }
                                                                                }, null, 8, me), [[n["o"], e.id]]), Object(n["f"])("button", {
                                                                                    class: "delete",
                                                                                    onClick: function (e) {
                                                                                        return a.deletingCC = c
                                                                                    }
                                                                                }, xe, 8, ge)]))])
                                                                }
                                                                )), 128)), Object(n["f"])("button", {
                                                                    class: "add",
                                                                    onClick: t[10] || (t[10] = function (e) {
                                                                        return a.ccs.push({
                                                                            name: "",
                                                                            id: ""
                                                                        })
                                                                    }
                                                                    )
                                                                }, ke)])])) : Object(n["d"])("", !0), 0 == a.page ? (Object(n["i"])(),
                                                                    Object(n["e"])("div", Ie, [Object(n["f"])("button", {
                                                                        onClick: t[11] || (t[11] = function () {
                                                                            return l.go && l.go.apply(l, arguments)
                                                                        }
                                                                        )
                                                                    }, "表单详情"), Ae, Object(n["f"])("button", {
                                                                        onClick: t[12] || (t[12] = function (e) {
                                                                            return a.page = 2
                                                                        }
                                                                        )
                                                                    }, "离返校码")])) : Object(n["d"])("", !0), 1 == a.page ? (Object(n["i"])(),
                                                                        Object(n["c"])(d, {
                                                                            key: 2,
                                                                            "student-name": a.studentName,
                                                                            studentID: a.studentID,
                                                                            items: a.items,
                                                                            approvers: a.approvers,
                                                                            ccs: a.ccs,
                                                                            onExit: t[13] || (t[13] = function (e) {
                                                                                return a.page = 0
                                                                            }
                                                                            )
                                                                        }, null, 8, ["student-name", "studentID", "items", "approvers", "ccs"])) : Object(n["d"])("", !0), 2 == a.page ? (Object(n["i"])(),
                                                                            Object(n["c"])(s, {
                                                                                key: 3,
                                                                                onExit: t[14] || (t[14] = function (e) {
                                                                                    return a.page = 0
                                                                                }
                                                                                )
                                                                            })) : Object(n["d"])("", !0), -1 == a.page ? (Object(n["i"])(),
                                                                                Object(n["e"])("div", Ce, Qe)) : Object(n["d"])("", !0)])
        }
        var Je = c("5d98")
            , Se = c.n(Je)
            , Xe = c("0e50")
            , Ue = c.n(Xe)
            , Pe = function (e) {
                return Object(n["k"])("data-v-61514e15"),
                    e = e(),
                    Object(n["j"])(),
                    e
            }
            , Be = {
                id: "sub-root"
            }
            , De = {
                class: "hx-layout"
            }
            , Te = {
                class: "hx-content"
            }
            , We = {
                class: "wfTitle___Y-ebx"
            }
            , Ne = {
                class: "hx-detail"
            }
            , Re = {
                class: "hx-detail-group"
            }
            , qe = Pe((function () {
                return Object(n["f"])("div", {
                    class: "hx-title-detail"
                }, [Object(n["f"])("div", {
                    class: "hx-title-detail-dot"
                }), Object(n["h"])("申请人 ")], -1)
            }
            ))
            , Ze = {
                class: "hx-detail-content"
            }
            , ze = {
                class: "am-accordion hx-detail-accordion"
            }
            , Le = {
                class: "am-accordion-item"
            }
            , Me = {
                class: "am-accordion-header",
                role: "button",
                tabindex: "0",
                "aria-expanded": "false"
            }
            , Ke = Pe((function () {
                return Object(n["f"])("i", {
                    class: "arrow"
                }, null, -1)
            }
            ))
            , Fe = {
                class: "hx-detail-item"
            }
            , Ye = Pe((function () {
                return Object(n["f"])("span", {
                    class: "hx-detail-item-label"
                }, "姓名", -1)
            }
            ))
            , Ge = {
                class: "hx-detail-item-field"
            }
            , $e = {
                class: "am-flexbox am-flexbox-justify-start am-flexbox-align-center"
            }
            , et = {
                class: "hx-detail"
            }
            , tt = {
                class: "hx-detail-group"
            }
            , ct = Pe((function () {
                return Object(n["f"])("div", {
                    class: "hx-title-detail"
                }, [Object(n["f"])("div", {
                    class: "hx-title-detail-dot"
                }), Object(n["h"])("申请内容 ")], -1)
            }
            ))
            , nt = {
                class: "hx-detail-content"
            }
            , it = {
                class: "hx-detail-item-label"
            }
            , at = {
                class: "hx-detail-item-field"
            }
            , lt = {
                key: 0,
                class: "hx-detail"
            }
            , dt = {
                class: "hx-detail-group"
            }
            , st = Pe((function () {
                return Object(n["f"])("div", {
                    class: "hx-title-detail"
                }, [Object(n["f"])("div", {
                    class: "hx-title-detail-dot"
                }), Object(n["h"])("审批进度 ")], -1)
            }
            ))
            , ot = {
                class: "hx-detail-content"
            }
            , rt = {
                class: "flowInfo___244V-"
            }
            , bt = {
                class: "nodestate___Npp7u"
            }
            , ut = Pe((function () {
                return Object(n["f"])("span", null, "通过", -1)
            }
            ))
            , ft = {
                key: 0,
                class: "stateTime___2bJzR"
            }
            , Ot = {
                class: "nodeleft___2q7Sg"
            }
            , jt = {
                class: "nodeindex___Cya0J"
            }
            , vt = {
                class: "noderight___urUWJ"
            }
            , pt = {
                style: {
                    "margin-top": "0px"
                },
                class: "nodeapprover___1KJaE"
            }
            , mt = {
                class: "workTime___PJH95"
            }
            , gt = Pe((function () {
                return Object(n["f"])("div", {
                    class: "approverOpinion___3xcsE"
                }, [Object(n["f"])("span", {
                    style: {
                        color: "rgb(135, 208, 104)"
                    }
                }, "已同意")], -1)
            }
            ))
            , ht = Pe((function () {
                return Object(n["f"])("div", {
                    class: "flownode___1GTd6"
                }, [Object(n["f"])("div", {
                    class: "nodeend___sR2u9"
                })], -1)
            }
            ))
            , xt = {
                key: 1,
                class: "hx-detail"
            }
            , yt = {
                class: "hx-detail-group"
            }
            , kt = Pe((function () {
                return Object(n["f"])("div", {
                    class: "hx-title-detail"
                }, [Object(n["f"])("div", {
                    class: "hx-title-detail-dot"
                }), Object(n["h"])("已抄送 ")], -1)
            }
            ))
            , It = {
                class: "hx-detail-content"
            }
            , At = {
                class: "ccInfo___T7Slb"
            }
            , Ct = Pe((function () {
                return Object(n["f"])("div", {
                    class: "hx-footer"
                }, [Object(n["f"])("a", {
                    role: "button",
                    class: "am-button hx-footer_btn",
                    style: {
                        color: "rgb(87, 191, 242)"
                    },
                    "aria-disabled": "false"
                }, [Object(n["f"])("span", null, "转发审批表单")])], -1)
            }
            ))
            , Et = Pe((function () {
                return Object(n["f"])("div", {
                    class: "hx-detail-statusIcon"
                }, [Object(n["f"])("img", {
                    src: Se.a
                }), Object(n["f"])("img", {
                    class: "stars",
                    src: Ue.a
                })], -1)
            }
            ));
        function Vt(e, t, c, i, a, l) {
            return Object(n["i"])(),
                Object(n["e"])("div", Be, [Object(n["f"])("div", De, [Object(n["f"])("main", Te, [Object(n["f"])("div", We, Object(n["n"])(c.studentName) + "的请销假", 1), Object(n["f"])("div", Ne, [Object(n["f"])("div", Re, [qe, Object(n["f"])("div", Ze, [Object(n["f"])("div", ze, [Object(n["f"])("div", Le, [Object(n["f"])("div", Me, [Ke, Object(n["f"])("div", Fe, [Ye, Object(n["f"])("div", Ge, [Object(n["f"])("div", $e, Object(n["n"])(c.studentName) + "(" + Object(n["n"])(c.studentID) + ")", 1)])])])])])])])]), Object(n["f"])("div", et, [Object(n["f"])("div", tt, [ct, Object(n["f"])("div", nt, [(Object(n["i"])(!0),
                    Object(n["e"])(n["a"], null, Object(n["l"])(c.items, (function (e) {
                        return Object(n["i"])(),
                            Object(n["e"])("div", {
                                class: "hx-detail-item",
                                key: e
                            }, [Object(n["f"])("span", it, Object(n["n"])(e.name), 1), Object(n["f"])("div", at, Object(n["n"])(e.value), 1)])
                    }
                    )), 128))])])]), c.approvers.length > 0 ? (Object(n["i"])(),
                        Object(n["e"])("div", lt, [Object(n["f"])("div", dt, [st, Object(n["f"])("div", ot, [Object(n["f"])("div", rt, [(Object(n["i"])(!0),
                            Object(n["e"])(n["a"], null, Object(n["l"])(c.approvers, (function (e, t) {
                                return Object(n["i"])(),
                                    Object(n["e"])("div", {
                                        class: "flownode___1GTd6 node2___1yk73",
                                        key: t
                                    }, [Object(n["f"])("div", bt, [ut, t == c.approvers.length - 1 ? (Object(n["i"])(),
                                        Object(n["e"])("span", ft, Object(n["n"])(e.time), 1)) : Object(n["d"])("", !0)]), Object(n["f"])("div", Ot, [Object(n["f"])("span", jt, Object(n["n"])(t + 1), 1)]), Object(n["f"])("div", vt, [Object(n["f"])("div", pt, [Object(n["f"])("div", null, [Object(n["f"])("div", null, [Object(n["h"])(Object(n["n"])(e.name) + "(" + Object(n["n"])(e.id) + ")", 1), Object(n["f"])("span", mt, Object(n["n"])(e.time), 1)]), gt])])])])
                            }
                            )), 128)), ht])])])])) : Object(n["d"])("", !0), c.ccs.length > 0 ? (Object(n["i"])(),
                                Object(n["e"])("div", xt, [Object(n["f"])("div", yt, [kt, Object(n["f"])("div", It, [Object(n["f"])("div", At, [(Object(n["i"])(!0),
                                    Object(n["e"])(n["a"], null, Object(n["l"])(c.ccs, (function (e, t) {
                                        return Object(n["i"])(),
                                            Object(n["e"])("div", {
                                                key: t
                                            }, Object(n["n"])(e.name) + "(" + Object(n["n"])(e.id) + ")", 1)
                                    }
                                    )), 128))])])])])) : Object(n["d"])("", !0)]), Ct]), Et])
        }
        var _t = {
            name: "fake",
            emits: ["exit"],
            props: {
                studentName: String,
                studentID: String,
                items: Array,
                approvers: Array,
                ccs: Array
            }
        }
            , wt = (c("d69a"),
                c("6e4b"),
                c("9524"),
                c("c09b"),
                c("2b54"),
                c("8eeb"),
                c("6b0d"))
            , Qt = c.n(wt);
        const Ht = Qt()(_t, [["render", Vt], ["__scopeId", "data-v-61514e15"]]);
        var Jt = Ht
            , St = c("e7e9")
            , Xt = c.n(St)
            , Ut = c("c2a2")
            , Pt = c.n(Ut)
            , Bt = {
                id: "sub-root"
            }
            , Dt = {
                class: "hx-content"
            }
            , Tt = {
                class: "qrCode___3iwXY",
                style: {
                    height: "360px"
                }
            }
            , Wt = {
                key: 0,
                class: "qr___Jrc0m",
                src: Xt.a,
                style: {
                    width: "270px",
                    height: "270px"
                }
            }
            , Nt = {
                key: 1,
                class: "qr___Jrc0m",
                src: Pt.a,
                style: {
                    width: "270px",
                    height: "270px"
                }
            }
            , Rt = {
                class: "text___HVPBl"
            }
            , qt = Object(n["h"])("二维码将在")
            , Zt = {
                class: "second___1XzxW"
            }
            , zt = Object(n["h"])("后刷新")
            , Lt = Object(n["g"])('<div class="hx-detail" data-v-c85a5d98><div class="hx-title-detail" data-v-c85a5d98><div class="hx-title-detail-dot" data-v-c85a5d98></div>离校详情 </div><div class="hx-detail-content" data-v-c85a5d98><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>操作人</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>操作时间</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>备注</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div></div></div><div class="hx-detail" data-v-c85a5d98><div class="hx-title-detail" data-v-c85a5d98><div class="hx-title-detail-dot" data-v-c85a5d98></div>返校详情 </div><div class="hx-detail-content" data-v-c85a5d98><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>操作人</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>操作时间</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>备注</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div></div></div>', 2);
        function Mt(e, t, c, i, a, l) {
            return Object(n["i"])(),
                Object(n["e"])("div", Bt, [Object(n["f"])("div", Dt, [Object(n["f"])("div", Tt, [Object(n["f"])("div", null, [0 == a.qrcodeIndex ? (Object(n["i"])(),
                    Object(n["e"])("img", Wt)) : Object(n["d"])("", !0), 1 == a.qrcodeIndex ? (Object(n["i"])(),
                        Object(n["e"])("img", Nt)) : Object(n["d"])("", !0), Object(n["f"])("div", Rt, [qt, Object(n["f"])("span", Zt, Object(n["n"])(l.timeString) + "秒", 1), zt])])]), Lt])])
        }
        var Kt = {
            name: "qrcode",
            data: function () {
                return {
                    time: 20,
                    qrcodeIndex: 0
                }
            },
            computed: {
                timeString: function () {
                    return (this.time < 10 ? "0" : "") + String(this.time)
                }
            },
            mounted: function () {
                var e = this;
                setInterval((function () {
                    e.time > 1 ? e.time -= 1 : (e.time = 20,
                        e.qrcodeIndex++,
                        e.qrcodeIndex %= 2)
                }
                ), 1e3)
            }
        };
        c("b618");
        const Ft = Qt()(Kt, [["render", Mt], ["__scopeId", "data-v-c85a5d98"]]);
        var Yt = Ft
            , Gt = {
                name: "App",
                components: {
                    Fake: Jt,
                    QRCode: Yt
                },
                data: function () {
                    return {
                        page: 0,
                        studentName: "Example",
                        studentID: "1234567890",
                        items: [{
                            name: "审批编号",
                            value: "20210101080000123456"
                        }, {
                            name: "是否离校",
                            value: "是"
                        }, {
                            name: "开始时间",
                            value: "2021-01-01 08:00"
                        }, {
                            name: "结束时间",
                            value: "2021-01-02 08:00"
                        }, {
                            name: "时长",
                            value: "24"
                        }, {
                            name: "请假类型",
                            value: "事假"
                        }, {
                            name: "本人联系电话",
                            value: ""
                        }, {
                            name: "紧急联系人",
                            value: ""
                        }, {
                            name: "紧急联系电话",
                            value: ""
                        }, {
                            name: "请假原因",
                            value: ""
                        }],
                        approvers: [],
                        ccs: [],
                        deletingItem: -1,
                        deletingApprover: -1,
                        deletingCC: -1
                    }
                },
                methods: {
                    go: function () {
                        window.localStorage.setItem("last-data", JSON.stringify(this.$data)),
                            this.page = 1
                    },
                    setButtonCancel: function (e) {
                        e && (this.buttonCancel = e)
                    }
                },
                mounted: function () {
                    var e = window.localStorage.getItem("last-data");
                    if (e) {
                        var t = JSON.parse(e);
                        this.studentName = t.studentName,
                            this.studentID = t.studentID,
                            this.items = t.items,
                            this.approvers = t.approvers,
                            this.ccs = t.ccs
                    }
                }
            };
        c("eea2");
        const $t = Qt()(Gt, [["render", He]]);
        var ec = $t
            , tc = c("9483");
        Object(tc["a"])("".concat("/fake-yiban/dist/", "service-worker.js"), {
            ready: function () {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            registered: function () {
                console.log("Service worker has been registered.")
            },
            cached: function () {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function () {
                console.log("New content is downloading.")
            },
            updated: function () {
                console.log("New content is available; please refresh.")
            },
            offline: function () {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function (e) {
                console.error("Error during service worker registration:", e)
            }
        }),
            Object(n["b"])(ec).mount("#app")
    },
    "5d98": function (e, t, c) {
        e.exports = c.p + "img/star_back.a22700c5.png"
    },
    "6e4b": function (e, t, c) {
        "use strict";
        c("41c7")
    },
    "74fc": function (e, t, c) { },
    "79a0": function (e, t, c) {
        e.exports = c.p + "img/about.facbd5bf.svg"
    },
    "834b": function (e, t, c) { },
    "8eeb": function (e, t, c) {
        "use strict";
        c("04ea")
    },
    9524: function (e, t, c) {
        "use strict";
        c("74fc")
    },
    b618: function (e, t, c) {
        "use strict";
        c("eb29")
    },
    bf37: function (e, t, c) {
        e.exports = c.p + "img/close.b2ffde26.svg"
    },
    c09b: function (e, t, c) {
        "use strict";
        c("834b")
    },
    c2a2: function (e, t, c) {
        e.exports = c.p + "img/qrcode1.4f42d1ee.svg"
    },
    ccfe: function (e, t, c) {
        e.exports = c.p + "img/back.bade37cb.svg"
    },
    cf05: function (e, t, c) {
        e.exports = c.p + "img/logo.15eb1df8.png"
    },
    d00d: function (e, t, c) { },
    d69a: function (e, t, c) {
        "use strict";
        c("d00d")
    },
    d739: function (e, t, c) {
        e.exports = c.p + "img/delete.b6bbbf94.svg"
    },
    e7e9: function (e, t, c) {
        e.exports = c.p + "img/qrcode0.ccd4d4ec.svg"
    },
    eb29: function (e, t, c) { },
    eea2: function (e, t, c) {
        "use strict";
        c("55fd")
    },
    eef4: function (e, t, c) {
        e.exports = c.p + "img/add.d47d282b.svg"
    },
    ef41: function (e, t, c) { }
});
