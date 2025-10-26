(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/analytics/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "analyticsWrapper": "page-module__009YoW__analyticsWrapper",
  "balanceAmount": "page-module__009YoW__balanceAmount",
  "balanceCard": "page-module__009YoW__balanceCard",
  "balanceHeader": "page-module__009YoW__balanceHeader",
  "balanceLabel": "page-module__009YoW__balanceLabel",
  "chartHidden": "page-module__009YoW__chartHidden",
  "chartVisible": "page-module__009YoW__chartVisible",
  "growth": "page-module__009YoW__growth",
});
}),
"[project]/src/app/analytics/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Analytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$charts$2f$esm$2f$LineChart$2f$LineChart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/charts/esm/LineChart/LineChart.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrendingUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTrendingUp.mjs [app-client] (ecmascript) <export default as IconTrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/analytics/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const bankData = {
    'ВТБ': {
        balance: 1250000,
        growth: '+5.6%',
        data: [
            {
                month: 'Июн',
                value: 1200000
            },
            {
                month: 'Июл',
                value: 1350000
            },
            {
                month: 'Авг',
                value: 1280000
            },
            {
                month: 'Сен',
                value: 1420000
            },
            {
                month: 'Окт',
                value: 1380000
            },
            {
                month: 'Ноя',
                value: 1250000
            }
        ]
    },
    'Т-Банк': {
        balance: 850000,
        growth: '+2.1%',
        data: [
            {
                month: 'Июн',
                value: 800000
            },
            {
                month: 'Июл',
                value: 820000
            },
            {
                month: 'Авг',
                value: 790000
            },
            {
                month: 'Сен',
                value: 860000
            },
            {
                month: 'Окт',
                value: 840000
            },
            {
                month: 'Ноя',
                value: 850000
            }
        ]
    },
    'Сбер': {
        balance: 2100000,
        growth: '+8.3%',
        data: [
            {
                month: 'Июн',
                value: 1900000
            },
            {
                month: 'Июл',
                value: 2050000
            },
            {
                month: 'Авг',
                value: 1980000
            },
            {
                month: 'Сен',
                value: 2150000
            },
            {
                month: 'Окт',
                value: 2080000
            },
            {
                month: 'Ноя',
                value: 2100000
            }
        ]
    }
};
function Analytics() {
    _s();
    const [selectedBank, setSelectedBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ВТБ');
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentBank = bankData[selectedBank];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            setAnimate(false);
            const timeout = setTimeout({
                "Analytics.useEffect.timeout": ()=>setAnimate(true)
            }["Analytics.useEffect.timeout"], 50);
            return ({
                "Analytics.useEffect": ()=>clearTimeout(timeout)
            })["Analytics.useEffect"];
        }
    }["Analytics.useEffect"], [
        selectedBank
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].analyticsWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
            shadow: "lg",
            radius: "lg",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].balanceCard,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].balanceHeader,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        justify: "space-between",
                        align: "center",
                        w: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].balanceLabel,
                                children: "Баланс"
                            }, void 0, false, {
                                fileName: "[project]/src/app/analytics/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                gap: "md",
                                align: "center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: "xs",
                                        children: [
                                            'ВТБ',
                                            'Т-Банк',
                                            'Сбер'
                                        ].map((bank)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'relative'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "xs",
                                                    variant: "subtle",
                                                    color: "gray",
                                                    c: "#111827",
                                                    radius: "sm",
                                                    onClick: ()=>setSelectedBank(bank),
                                                    style: {
                                                        borderBottom: selectedBank === bank ? '2px solid #2563eb' : '2px solid transparent',
                                                        transition: 'border-bottom 0.3s ease'
                                                    },
                                                    children: bank
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/analytics/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this)
                                            }, bank, false, {
                                                fileName: "[project]/src/app/analytics/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/analytics/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: 6,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrendingUp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrendingUp$3e$__["IconTrendingUp"], {
                                                size: 16,
                                                color: "#2563eb"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].growth,
                                                children: [
                                                    currentBank.growth,
                                                    " за месяц"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/analytics/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/analytics/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/analytics/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/analytics/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "xs",
                    p: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].balanceAmount,
                            children: [
                                currentBank.balance.toLocaleString(),
                                " ₽"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/analytics/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartVisible : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartHidden,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    style: {
                                        position: 'absolute',
                                        width: 0,
                                        height: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "gradient",
                                            x1: "0%",
                                            y1: "100%",
                                            x2: "0%",
                                            y2: "0%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#2563eb",
                                                    stopOpacity: "0.2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/analytics/page.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#60a5fa",
                                                    stopOpacity: "0.05"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/analytics/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/analytics/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/analytics/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$charts$2f$esm$2f$LineChart$2f$LineChart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                    h: 180,
                                    data: currentBank.data,
                                    dataKey: "month",
                                    series: [
                                        {
                                            name: 'value',
                                            color: '#2563eb'
                                        }
                                    ],
                                    fillOpacity: 0.3,
                                    curveType: "linear",
                                    withDots: true,
                                    withTooltip: true,
                                    tooltipProps: {
                                        content: ({ payload })=>payload?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'rgba(17, 24, 39, 0.9)',
                                                    color: 'white',
                                                    padding: '8px 12px',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    fontWeight: 'bold'
                                                },
                                                children: [
                                                    payload[0].value.toLocaleString(),
                                                    " ₽"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/analytics/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, void 0) : null
                                    },
                                    withXAxis: true,
                                    withYAxis: false,
                                    gridAxis: "none",
                                    strokeWidth: 3,
                                    dotProps: {
                                        r: 4,
                                        fill: '#2563eb',
                                        stroke: '#ffffff',
                                        strokeWidth: 2
                                    },
                                    xAxisProps: {
                                        tick: {
                                            fill: '#111827',
                                            fontSize: 12
                                        },
                                        tickFormatter: (val)=>val.slice(0, 3),
                                        domain: [
                                            'dataMin',
                                            'dataMax'
                                        ],
                                        padding: {
                                            left: 20,
                                            right: 20
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, selectedBank, true, {
                            fileName: "[project]/src/app/analytics/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/analytics/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/analytics/page.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/analytics/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Analytics, "fwK66KzlB0OWYmuPj64nR9vYdPk=");
_c = Analytics;
var _c;
__turbopack_context__.k.register(_c, "Analytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_analytics_35503201._.js.map