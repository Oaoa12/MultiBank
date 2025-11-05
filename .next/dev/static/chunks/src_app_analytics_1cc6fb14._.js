(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "analyticsWrapper": "BalanceAnalytics-module__Wxx4tq__analyticsWrapper",
  "balanceAmount": "BalanceAnalytics-module__Wxx4tq__balanceAmount",
  "balanceCard": "BalanceAnalytics-module__Wxx4tq__balanceCard",
  "balanceHeader": "BalanceAnalytics-module__Wxx4tq__balanceHeader",
  "balanceLabel": "BalanceAnalytics-module__Wxx4tq__balanceLabel",
  "chartHidden": "BalanceAnalytics-module__Wxx4tq__chartHidden",
  "chartVisible": "BalanceAnalytics-module__Wxx4tq__chartVisible",
  "dividerContainer": "BalanceAnalytics-module__Wxx4tq__dividerContainer",
  "dividerLine": "BalanceAnalytics-module__Wxx4tq__dividerLine",
  "growth": "BalanceAnalytics-module__Wxx4tq__growth",
  "transactionsLabel": "BalanceAnalytics-module__Wxx4tq__transactionsLabel",
});
}),
"[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BalanceAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$charts$2f$esm$2f$LineChart$2f$LineChart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/charts/esm/LineChart/LineChart.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const bankData = {
    'ВТБ': {
        balance: 1250000,
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
const transactions = [
    {
        id: 1,
        name: 'Магнит',
        amount: 1250,
        type: 'expense'
    },
    {
        id: 2,
        name: 'Пополнение счета',
        amount: 5000,
        type: 'income'
    },
    {
        id: 3,
        name: 'Кафе',
        amount: 450,
        type: 'expense'
    },
    {
        id: 4,
        name: 'Такси',
        amount: 320,
        type: 'expense'
    },
    {
        id: 5,
        name: 'Перевод',
        amount: 50000,
        type: 'income'
    },
    {
        id: 6,
        name: 'Аптека',
        amount: 890,
        type: 'expense'
    },
    {
        id: 7,
        name: 'Перевод',
        amount: 3000,
        type: 'income'
    },
    {
        id: 8,
        name: 'Кинотеатр',
        amount: 1200,
        type: 'expense'
    },
    {
        id: 9,
        name: 'Бензин',
        amount: 2500,
        type: 'expense'
    },
    {
        id: 10,
        name: 'Возврат покупки',
        amount: 3400,
        type: 'income'
    }
];
const TOOLTIP_STYLE = {
    background: 'rgba(17, 24, 39, 0.9)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'var(--font-mono), monospace',
    letterSpacing: '-0.01em',
    fontFeatureSettings: "'tnum', 'lnum'"
};
const TRANSACTION_ICON_STYLE = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    flexShrink: 0
};
const CHART_COLOR = '#2563eb';
const ANIMATION_DELAY = 50;
const DEFAULT_BANK = 'ВТБ';
function BalanceAnalytics({ selectedBank }) {
    _s();
    const [isAnimated, setIsAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentBank = bankData[selectedBank] || bankData[DEFAULT_BANK];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BalanceAnalytics.useEffect": ()=>{
            setIsAnimated(false);
            const timeout = setTimeout({
                "BalanceAnalytics.useEffect.timeout": ()=>setIsAnimated(true)
            }["BalanceAnalytics.useEffect.timeout"], ANIMATION_DELAY);
            return ({
                "BalanceAnalytics.useEffect": ()=>clearTimeout(timeout)
            })["BalanceAnalytics.useEffect"];
        }
    }["BalanceAnalytics.useEffect"], [
        selectedBank
    ]);
    const tooltipContent = ({ payload })=>{
        if (!payload?.length) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: TOOLTIP_STYLE,
            children: [
                payload[0].value.toLocaleString(),
                " ₽"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].analyticsWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dividerContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].transactionsLabel,
                        children: "Транзакции"
                    }, void 0, false, {
                        fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dividerLine
                    }, void 0, false, {
                        fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                shadow: "lg",
                radius: "lg",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].balanceCard,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "xs",
                    p: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].balanceAmount,
                            children: [
                                currentBank.balance.toLocaleString(),
                                " ₽"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: isAnimated ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartVisible : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartHidden,
                            style: {
                                marginTop: '8px'
                            },
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
                                                    stopColor: CHART_COLOR,
                                                    stopOpacity: 0.2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#60a5fa",
                                                    stopOpacity: 0.05
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$charts$2f$esm$2f$LineChart$2f$LineChart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                    h: 100,
                                    data: currentBank.data,
                                    dataKey: "month",
                                    series: [
                                        {
                                            name: 'value',
                                            color: CHART_COLOR
                                        }
                                    ],
                                    fillOpacity: 0.3,
                                    curveType: "linear",
                                    withDots: true,
                                    withTooltip: true,
                                    tooltipProps: {
                                        content: tooltipContent
                                    },
                                    withXAxis: true,
                                    withYAxis: false,
                                    gridAxis: "none",
                                    strokeWidth: 3,
                                    dotProps: {
                                        r: 4,
                                        fill: CHART_COLOR,
                                        stroke: '#ffffff',
                                        strokeWidth: 2
                                    },
                                    xAxisProps: {
                                        tick: {
                                            fill: '#111827',
                                            fontSize: 12,
                                            fontFamily: 'var(--font-inter), sans-serif',
                                            fontWeight: 500,
                                            letterSpacing: '-0.005em'
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
                                    fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, selectedBank, true, {
                            fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                gap: "xs",
                style: {
                    marginLeft: '-210px',
                    marginTop: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "lg",
                        fw: 600,
                        c: "#000",
                        style: {
                            fontFamily: 'var(--font-inter), sans-serif',
                            letterSpacing: '-0.01em'
                        },
                        children: "Последние транзакции"
                    }, void 0, false, {
                        fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "xs",
                        mt: "md",
                        children: transactions.map((transaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                justify: "space-between",
                                align: "center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: "sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: TRANSACTION_ICON_STYLE
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                fw: 500,
                                                style: {
                                                    fontFamily: 'var(--font-inter), sans-serif',
                                                    letterSpacing: '-0.005em'
                                                },
                                                children: transaction.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "sm",
                                        fw: 600,
                                        c: transaction.type === 'income' ? '#10b981' : '#000',
                                        style: {
                                            fontFamily: 'var(--font-mono), monospace',
                                            letterSpacing: '-0.01em',
                                            fontFeatureSettings: "'tnum', 'lnum'"
                                        },
                                        children: [
                                            transaction.type === 'income' ? '+' : '-',
                                            "₽ ",
                                            transaction.amount.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, transaction.id, true, {
                                fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(BalanceAnalytics, "feZijyaiImu/vOPW5rezAaNy5lI=");
_c = BalanceAnalytics;
var _c;
__turbopack_context__.k.register(_c, "BalanceAnalytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/analytics/donutChart/DonutChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DonutChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const bankDonutData = {
    'ВТБ': {
        income: 1250000,
        expenses: 320000
    },
    'Т-Банк': {
        income: 850000,
        expenses: 280000
    },
    'Сбер': {
        income: 2100000,
        expenses: 450000
    }
};
const DEFAULT_BANK = 'ВТБ';
const CHART_SIZE = 200;
const CHART_CENTER = 100;
const INNER_RADIUS = 65;
const OUTER_RADIUS = 95;
const EXPENSES_COLOR = '#d1d5db';
const INCOME_COLOR = '#2563eb';
const TEXT_COLOR = '#111827';
const LABEL_COLOR = '#9ca3af';
const CONTAINER_STYLE = {
    position: 'relative',
    width: CHART_SIZE,
    height: CHART_SIZE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const CENTER_TEXT_STYLE = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};
const AMOUNT_TEXT_STYLE = {
    textAlign: 'center',
    color: TEXT_COLOR,
    fontFamily: 'var(--font-inter), sans-serif',
    letterSpacing: '-0.02em'
};
const LABEL_TEXT_STYLE = {
    textAlign: 'center',
    color: LABEL_COLOR,
    marginTop: '4px',
    fontFamily: 'var(--font-inter), sans-serif',
    letterSpacing: '-0.005em',
    fontWeight: 500
};
function DonutChart({ selectedBank }) {
    const bankData = bankDonutData[selectedBank] || bankDonutData[DEFAULT_BANK];
    const { income, expenses } = bankData;
    const chartData = [
        {
            name: 'Траты',
            value: expenses,
            color: EXPENSES_COLOR
        },
        {
            name: 'Поступления',
            value: income,
            color: INCOME_COLOR
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: CONTAINER_STYLE,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                width: CHART_SIZE,
                height: CHART_SIZE,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                    data: chartData,
                    cx: CHART_CENTER,
                    cy: CHART_CENTER,
                    innerRadius: INNER_RADIUS,
                    outerRadius: OUTER_RADIUS,
                    dataKey: "value",
                    stroke: "none",
                    children: chartData.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                            fill: entry.color
                        }, entry.name, false, {
                            fileName: "[project]/src/app/analytics/donutChart/DonutChart.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/analytics/donutChart/DonutChart.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/analytics/donutChart/DonutChart.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: CENTER_TEXT_STYLE,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "md",
                        fw: 700,
                        style: AMOUNT_TEXT_STYLE,
                        children: [
                            expenses.toLocaleString(),
                            " ₽"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/analytics/donutChart/DonutChart.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "xs",
                        style: LABEL_TEXT_STYLE,
                        children: "Траты за месяц"
                    }, void 0, false, {
                        fileName: "[project]/src/app/analytics/donutChart/DonutChart.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/analytics/donutChart/DonutChart.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/analytics/donutChart/DonutChart.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_c = DonutChart;
var _c;
__turbopack_context__.k.register(_c, "DonutChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/analytics/cards/Cards.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bankCard": "Cards-module__uj5W9W__bankCard",
  "cardBank": "Cards-module__uj5W9W__cardBank",
  "cardBottom": "Cards-module__uj5W9W__cardBottom",
  "cardContainer": "Cards-module__uj5W9W__cardContainer",
  "cardDecorativeLines": "Cards-module__uj5W9W__cardDecorativeLines",
  "cardGeometricPattern": "Cards-module__uj5W9W__cardGeometricPattern",
  "cardLabel": "Cards-module__uj5W9W__cardLabel",
  "cardMiddle": "Cards-module__uj5W9W__cardMiddle",
  "cardNumber": "Cards-module__uj5W9W__cardNumber",
  "cardPattern": "Cards-module__uj5W9W__cardPattern",
  "cardTitle": "Cards-module__uj5W9W__cardTitle",
  "cardTop": "Cards-module__uj5W9W__cardTop",
  "cardType": "Cards-module__uj5W9W__cardType",
  "cardValue": "Cards-module__uj5W9W__cardValue",
  "cardsWrapper": "Cards-module__uj5W9W__cardsWrapper",
  "carouselContainer": "Cards-module__uj5W9W__carouselContainer",
  "chip": "Cards-module__uj5W9W__chip",
  "mantine-Group-root": "Cards-module__uj5W9W__mantine-Group-root",
  "mantine-Stack-root": "Cards-module__uj5W9W__mantine-Stack-root",
  "swiper": "Cards-module__uj5W9W__swiper",
  "swiper-button-next": "Cards-module__uj5W9W__swiper-button-next",
  "swiper-button-prev": "Cards-module__uj5W9W__swiper-button-prev",
  "swiper-pagination": "Cards-module__uj5W9W__swiper-pagination",
  "swiper-pagination-bullet": "Cards-module__uj5W9W__swiper-pagination-bullet",
  "swiper-pagination-bullet-active": "Cards-module__uj5W9W__swiper-pagination-bullet-active",
  "swiper-slide": "Cards-module__uj5W9W__swiper-slide",
});
}),
"[project]/src/app/analytics/cards/Cards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCreditCard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCreditCard.mjs [app-client] (ecmascript) <export default as IconCreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconEye.mjs [app-client] (ecmascript) <export default as IconEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEyeOff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconEyeOff.mjs [app-client] (ecmascript) <export default as IconEyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShoppingCart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconShoppingCart.mjs [app-client] (ecmascript) <export default as IconShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCar$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconCar.mjs [app-client] (ecmascript) <export default as IconCar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlane$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPlane.mjs [app-client] (ecmascript) <export default as IconPlane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuilding$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuilding$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBuilding.mjs [app-client] (ecmascript) <export default as IconBuilding>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPizza$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPizza$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPizza.mjs [app-client] (ecmascript) <export default as IconPizza>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/keyboard.mjs [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__A11y$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/a11y.mjs [app-client] (ecmascript) <export default as A11y>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/analytics/cards/Cards.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const cardsData = [
    {
        id: 1,
        bank: 'ВТБ',
        type: 'Дебетовая карта',
        number: '4635 1869 6438 6548',
        owner: 'ILIA RAXAT',
        expiry: '12/28',
        status: 'Активна',
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        operations: 24,
        spent: '₽ 45,230',
        cashback: '₽ 1,356'
    },
    {
        id: 2,
        bank: 'Сбер',
        type: 'Кредитная карта',
        number: '4753 9680 5745 4738',
        owner: 'ILIA RAXAT',
        expiry: '08/29',
        status: 'Активна',
        color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        operations: 18,
        spent: '₽ 32,150',
        cashback: '₽ 965'
    },
    {
        id: 3,
        bank: 'Т-Банк',
        type: 'Дебетовая карта',
        number: '7648 5368 8563 5864',
        owner: 'ILIA RAXAT',
        expiry: '03/30',
        status: 'Активна',
        color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        operations: 31,
        spent: '₽ 67,890',
        cashback: '₽ 2,036'
    }
];
const popularCategories = [
    {
        id: 1,
        name: 'Супермаркеты',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconShoppingCart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconShoppingCart$3e$__["IconShoppingCart"],
        color: '#2563eb',
        amount: '₽ 45 230'
    },
    {
        id: 2,
        name: 'Транспорт',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCar$3e$__["IconCar"],
        color: '#10b981',
        amount: '₽ 12 500'
    },
    {
        id: 3,
        name: 'Путешествия',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlane$3e$__["IconPlane"],
        color: '#f59e0b',
        amount: '₽ 89 000'
    },
    {
        id: 4,
        name: 'Кафе и рестораны',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPizza$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPizza$3e$__["IconPizza"],
        color: '#ef4444',
        amount: '₽ 28 750'
    },
    {
        id: 5,
        name: 'Жильё',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBuilding$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBuilding$3e$__["IconBuilding"],
        color: '#8b5cf6',
        amount: '₽ 35 000'
    }
];
const BUTTON_STYLE = {
    marginTop: '-50px',
    backgroundColor: 'transparent',
    borderColor: '#2563eb',
    color: '#2563eb'
};
const SWIPER_HEIGHT = '240px';
const HIDDEN_CARD_NUMBER = '•••• •••• •••• ••••';
const HIDDEN_OWNER = '•••• ••••••';
const HIDDEN_EXPIRY = '••/••';
const FIRST_CARD_INDEX = 0;
function Cards({ onCardChange }) {
    _s();
    const [isCardVisible, setIsCardVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleCardVisibility = ()=>setIsCardVisible((prev)=>!prev);
    const handleSlideChange = (swiper)=>{
        const newIndex = swiper.realIndex;
        const selectedCard = cardsData[newIndex];
        if (onCardChange && selectedCard) {
            onCardChange(selectedCard.bank);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cards.useEffect": ()=>{
            const firstCard = cardsData[FIRST_CARD_INDEX];
            if (onCardChange && firstCard) {
                onCardChange(firstCard.bank);
            }
        }
    }["Cards.useEffect"], []);
    const getCardNumber = (card)=>isCardVisible ? card.number : HIDDEN_CARD_NUMBER;
    const getCardOwner = (card)=>isCardVisible ? card.owner : HIDDEN_OWNER;
    const getCardExpiry = (card)=>isCardVisible ? card.expiry : HIDDEN_EXPIRY;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
            shadow: "lg",
            radius: "lg",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    justify: "space-between",
                    align: "center",
                    p: "md",
                    pb: "xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                            order: 4,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: "Банковские карты"
                        }, void 0, false, {
                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            gap: "xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "xs",
                                variant: "subtle",
                                color: "gray",
                                leftSection: isCardVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEyeOff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEyeOff$3e$__["IconEyeOff"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                    lineNumber: 168,
                                    columnNumber: 44
                                }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__["IconEye"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                    lineNumber: 168,
                                    columnNumber: 71
                                }, void 0),
                                onClick: toggleCardVisibility,
                                children: isCardVisible ? 'Скрыть' : 'Показать'
                            }, void 0, false, {
                                fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {
                    mx: "md"
                }, void 0, false, {
                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    p: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                    modules: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"],
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$a11y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__A11y$3e$__["A11y"]
                                    ],
                                    onSwiper: (swiper)=>swiperRef.current = swiper,
                                    onSlideChange: handleSlideChange,
                                    slidesPerView: 1,
                                    spaceBetween: 16,
                                    navigation: true,
                                    loop: false,
                                    keyboard: {
                                        enabled: true
                                    },
                                    a11y: {
                                        enabled: true
                                    },
                                    touchStartPreventDefault: false,
                                    style: {
                                        height: SWIPER_HEIGHT
                                    },
                                    children: cardsData.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bankCard,
                                                style: {
                                                    background: card.color
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardPattern
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardGeometricPattern
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTop,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                            justify: "space-between",
                                                            align: "flex-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBank,
                                                                            children: card.bank
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                            lineNumber: 202,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                            gap: "xs",
                                                                            mt: "xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardType,
                                                                                    children: card.type
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                                    lineNumber: 204,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    size: "xs",
                                                                                    color: "green",
                                                                                    variant: "light",
                                                                                    children: card.status
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                                    lineNumber: 205,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCreditCard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCreditCard$3e$__["IconCreditCard"], {
                                                                    size: 36,
                                                                    color: "#ffffff"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardMiddle,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardNumber,
                                                            children: getCardNumber(card)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDecorativeLines
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBottom,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                            justify: "space-between",
                                                            align: "flex-end",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLabel,
                                                                            children: "Владелец"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                            lineNumber: 225,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardValue,
                                                                            children: getCardOwner(card)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                            lineNumber: 226,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLabel,
                                                                            children: "Срок действия"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                            lineNumber: 231,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardValue,
                                                                            children: getCardExpiry(card)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                            lineNumber: 232,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        }, card.id, false, {
                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "swiper-pagination"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            gap: "xs",
                            grow: true,
                            style: {
                                width: '400px',
                                marginLeft: '105px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    style: BUTTON_STYLE,
                                    children: "История операций"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    style: BUTTON_STYLE,
                                    children: "Добавить карту"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                            gap: "xs",
                            mt: "md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    size: "lg",
                                    fw: 600,
                                    c: "#000",
                                    style: {
                                        fontFamily: 'var(--font-inter), sans-serif',
                                        letterSpacing: '-0.01em'
                                    },
                                    children: "Популярные категории"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                    gap: "xs",
                                    mt: "md",
                                    children: popularCategories.map((category)=>{
                                        const IconComponent = category.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                            justify: "space-between",
                                            align: "center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                    gap: "sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            size: 40,
                                                            radius: "xl",
                                                            style: {
                                                                backgroundColor: `${category.color}15`,
                                                                border: `1px solid ${category.color}30`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                size: 20,
                                                                color: category.color
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                            size: "sm",
                                                            fw: 500,
                                                            style: {
                                                                fontFamily: 'var(--font-inter), sans-serif',
                                                                letterSpacing: '-0.005em'
                                                            },
                                                            children: category.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "sm",
                                                    fw: 600,
                                                    style: {
                                                        fontFamily: 'var(--font-mono), monospace',
                                                        letterSpacing: '-0.01em',
                                                        fontFeatureSettings: "'tnum', 'lnum'"
                                                    },
                                                    children: category.amount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, category.id, true, {
                                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/analytics/cards/Cards.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/analytics/cards/Cards.tsx",
            lineNumber: 160,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/analytics/cards/Cards.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(Cards, "eiVAUXfPvJiHpwEqC3FsLIjPWSI=");
_c = Cards;
var _c;
__turbopack_context__.k.register(_c, "Cards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/analytics/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SimpleGrid$2f$SimpleGrid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/SimpleGrid/SimpleGrid.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/analytics/balanceAnalytics/BalanceAnalytics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$donutChart$2f$DonutChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/analytics/donutChart/DonutChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/analytics/cards/Cards.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DEFAULT_BANK = 'ВТБ';
const CONTAINER_MARGIN_RIGHT = 150;
const CHART_CONTAINER_STYLE = {
    gridColumn: 'span 2',
    marginLeft: '200px',
    borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
    paddingLeft: '20px',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start'
};
const DONUT_CHART_WRAPPER_STYLE = {
    marginTop: '80px'
};
const isValidBankName = (bank)=>{
    return bank === 'ВТБ' || bank === 'Т-Банк' || bank === 'Сбер';
};
function AnalyticsPage() {
    _s();
    const [selectedBank, setSelectedBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_BANK);
    const handleCardChange = (bank)=>{
        if (isValidBankName(bank)) {
            setSelectedBank(bank);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
        mr: CONTAINER_MARGIN_RIGHT,
        size: "xl",
        py: "xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SimpleGrid$2f$SimpleGrid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
            cols: {
                base: 1,
                lg: 3
            },
            spacing: "md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$cards$2f$Cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onCardChange: handleCardChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/analytics/page.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/analytics/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: CHART_CONTAINER_STYLE,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: DONUT_CHART_WRAPPER_STYLE,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$donutChart$2f$DonutChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                selectedBank: selectedBank
                            }, void 0, false, {
                                fileName: "[project]/src/app/analytics/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/analytics/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$analytics$2f$balanceAnalytics$2f$BalanceAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            selectedBank: selectedBank
                        }, void 0, false, {
                            fileName: "[project]/src/app/analytics/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/analytics/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/analytics/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/analytics/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(AnalyticsPage, "A0apWSnLzz3ctxLx4pRBOVgQm9s=");
_c = AnalyticsPage;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_analytics_1cc6fb14._.js.map