(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/public/Logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Logo.9dd3624b.png");}),
"[project]/public/Logo.png.mjs { IMAGE => \"[project]/public/Logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/Logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1582,
    height: 551,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AH3N74BVvuqos9LmT9jb5S2+w9VKrrTKXbe80FO2vNBTAJDU8W6Y1/JmxtLiP5CYt4C9wtRMm6O+c5ScuXxveqKmAP7+/wH+//8B7u/0FIOMro/g4+sjq7HIYZigvXZqdZ6sSic+jBXzKggAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/Header/Header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "header": "Header-module__i0sbPG__header",
  "inner": "Header-module__i0sbPG__inner",
  "link": "Header-module__i0sbPG__link",
  "linkLabel": "Header-module__i0sbPG__linkLabel",
});
}),
"[project]/src/lib/store/api/UserApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeleteAvatarMutation",
    ()=>useDeleteAvatarMutation,
    "useDeleteProfileMutation",
    ()=>useDeleteProfileMutation,
    "useGetAvatarQuery",
    ()=>useGetAvatarQuery,
    "useGetCurrentUserQuery",
    ()=>useGetCurrentUserQuery,
    "useGetProfileQuery",
    ()=>useGetProfileQuery,
    "useRefreshAvatarUrlMutation",
    ()=>useRefreshAvatarUrlMutation,
    "useRestoreProfileMutation",
    ()=>useRestoreProfileMutation,
    "useUpdateProfileAuthorizedMutation",
    ()=>useUpdateProfileAuthorizedMutation,
    "useUpdateProfileMutation",
    ()=>useUpdateProfileMutation,
    "useUpdateUserAuthorizedMutation",
    ()=>useUpdateUserAuthorizedMutation,
    "useUpdateUserMutation",
    ()=>useUpdateUserMutation,
    "useUploadAvatarMutation",
    ()=>useUploadAvatarMutation,
    "userApi",
    ()=>userApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const BASE_URL = '/api/';
const userApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'userApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: BASE_URL,
        credentials: 'include'
    }),
    tagTypes: [
        'User',
        'Profile'
    ],
    endpoints: (builder)=>({
            getCurrentUser: builder.query({
                query: ()=>'user/me',
                providesTags: [
                    'User'
                ]
            }),
            updateUser: builder.mutation({
                query: (userData)=>({
                        url: 'user/me',
                        method: 'PUT',
                        body: userData
                    }),
                invalidatesTags: [
                    'User',
                    'Profile'
                ]
            }),
            // Same as updateUser, but explicitly sets Authorization header with a provided token
            updateUserAuthorized: builder.mutation({
                query: ({ data, accessToken })=>({
                        url: 'user/me',
                        method: 'PUT',
                        body: data,
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }),
                invalidatesTags: [
                    'User',
                    'Profile'
                ]
            }),
            getProfile: builder.query({
                query: ()=>'user/profile',
                providesTags: [
                    'Profile'
                ]
            }),
            updateProfile: builder.mutation({
                query: (profileData)=>({
                        url: 'user/me',
                        method: 'PUT',
                        body: profileData
                    }),
                invalidatesTags: [
                    'User',
                    'Profile'
                ]
            }),
            updateProfileAuthorized: builder.mutation({
                query: ({ data, accessToken })=>({
                        url: 'user/me',
                        method: 'PUT',
                        body: data,
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }),
                invalidatesTags: [
                    'User',
                    'Profile'
                ]
            }),
            deleteProfile: builder.mutation({
                query: ()=>({
                        url: 'user/profile',
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'User',
                    'Profile'
                ]
            }),
            restoreProfile: builder.mutation({
                query: ()=>({
                        url: 'user/profile/restore',
                        method: 'POST'
                    }),
                invalidatesTags: [
                    'User',
                    'Profile'
                ]
            }),
            uploadAvatar: builder.mutation({
                query: (formData)=>({
                        url: 'user/profile/avatar',
                        method: 'POST',
                        body: formData
                    }),
                invalidatesTags: [
                    'Profile',
                    'User'
                ]
            }),
            getAvatar: builder.query({
                query: (fileId)=>({
                        url: `user/profile/avatar/${fileId}`,
                        responseHandler: (response)=>response.blob()
                    })
            }),
            deleteAvatar: builder.mutation({
                query: (fileId)=>({
                        url: `user/profile/avatar/${fileId}`,
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'Profile',
                    'User'
                ]
            }),
            refreshAvatarUrl: builder.mutation({
                query: ({ fileId, expiry })=>({
                        url: `user/profile/avatar/${fileId}/refresh-url${expiry ? `?expiry=${expiry}` : ''}`,
                        method: 'POST'
                    }),
                invalidatesTags: [
                    'Profile',
                    'User'
                ]
            })
        })
});
const { useGetCurrentUserQuery, useUpdateUserMutation, useUpdateUserAuthorizedMutation, useGetProfileQuery, useUpdateProfileMutation, useUpdateProfileAuthorizedMutation, useDeleteProfileMutation, useRestoreProfileMutation, useUploadAvatarMutation, useGetAvatarQuery, useDeleteAvatarMutation, useRefreshAvatarUrlMutation } = userApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store/api/AuthApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authApi",
    ()=>authApi,
    "useGetAuthProfileQuery",
    ()=>useGetAuthProfileQuery,
    "useLoginMutation",
    ()=>useLoginMutation,
    "useLogoutMutation",
    ()=>useLogoutMutation,
    "useRegisterMutation",
    ()=>useRegisterMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const authApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'authApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: '/api/',
        credentials: 'include'
    }),
    tagTypes: [
        'Auth'
    ],
    endpoints: (builder)=>({
            register: builder.mutation({
                query: (userData)=>({
                        url: 'auth/register',
                        method: 'POST',
                        body: userData
                    }),
                invalidatesTags: [
                    'Auth'
                ]
            }),
            login: builder.mutation({
                query: (credentials)=>({
                        url: 'auth/login',
                        method: 'POST',
                        body: credentials
                    }),
                invalidatesTags: [
                    'Auth'
                ]
            }),
            getAuthProfile: builder.query({
                query: ()=>'auth/profile',
                providesTags: [
                    'Auth'
                ]
            }),
            logout: builder.mutation({
                query: ()=>({
                        url: 'auth/logout',
                        method: 'POST'
                    }),
                invalidatesTags: [
                    'Auth'
                ]
            })
        })
});
const { useRegisterMutation, useLoginMutation, useGetAuthProfileQuery, useLogoutMutation } = authApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-client] (ecmascript) <export default as IconChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Burger$2f$Burger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Burger/Burger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Center/Center.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Menu/Menu.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$disclosure$2f$use$2d$disclosure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/Logo.png.mjs { IMAGE => "[project]/public/Logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/features/Header/Header.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/api/UserApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AuthApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/api/AuthApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const links = [
    {
        link: '/',
        label: 'Главная'
    },
    {
        link: '/dashboard',
        label: 'Дашборд'
    },
    {
        link: '/analytics',
        label: 'Аналитика'
    },
    {
        link: '/login',
        label: 'Войти'
    },
    {
        link: '/registration',
        label: 'Регистрация'
    },
    {
        link: '/profile',
        label: 'Профиль'
    }
];
function Header() {
    _s();
    const { data: me, isSuccess, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCurrentUserQuery"])();
    const [logout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AuthApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoutMutation"])();
    const [opened, { toggle }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$disclosure$2f$use$2d$disclosure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])(false);
    const isAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Header.useMemo[isAuth]": ()=>!!me || !!isSuccess
    }["Header.useMemo[isAuth]"], [
        me,
        isSuccess
    ]);
    const handleLogout = async ()=>{
        try {
            await logout().unwrap();
        } catch  {}
        setIsAuth(false);
        window.location.href = '/';
    };
    const visibleLinks = links.filter((link)=>{
        if (isAuth) {
            return link.label !== 'Войти' && link.label !== 'Регистрация';
        } else {
            return link.label !== 'Профиль';
        }
    });
    const items = isLoading && !isAuth ? visibleLinks.filter((l)=>l.label !== 'Профиль').map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: link.link,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
            children: link.label
        }, link.label, false, {
            fileName: "[project]/src/components/features/Header/Header.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, this)) : visibleLinks.map((link)=>{
        if (link.label === 'Профиль') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
                trigger: "hover",
                transitionProps: {
                    exitDuration: 0
                },
                withinPortal: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Target, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                            onClick: (event)=>event.preventDefault(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Center"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkLabel,
                                        children: me?.username || 'Профиль'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Header/Header.tsx",
                                        lineNumber: 63,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronDown$3e$__["IconChevronDown"], {
                                        size: 14,
                                        stroke: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/Header/Header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/Header/Header.tsx",
                                lineNumber: 62,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/Header/Header.tsx",
                            lineNumber: 57,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Header/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Dropdown, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                onClick: ()=>window.location.href = '/profile',
                                children: "Профиль"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Header/Header.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                onClick: handleLogout,
                                children: "Выйти"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Header/Header.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/Header/Header.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, this)
                ]
            }, link.label, true, {
                fileName: "[project]/src/components/features/Header/Header.tsx",
                lineNumber: 55,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: link.link,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
            children: link.label
        }, link.label, false, {
            fileName: "[project]/src/components/features/Header/Header.tsx",
            lineNumber: 77,
            columnNumber: 13
        }, this);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            size: "md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$Logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            width: 100,
                            height: 30,
                            alt: "Logo",
                            style: {
                                cursor: 'pointer'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/Header/Header.tsx",
                            lineNumber: 92,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Header/Header.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        gap: 5,
                        visibleFrom: "sm",
                        children: items
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Header/Header.tsx",
                        lineNumber: 100,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Burger$2f$Burger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Burger"], {
                        opened: opened,
                        onClick: toggle,
                        size: "sm",
                        hiddenFrom: "sm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/Header/Header.tsx",
                        lineNumber: 103,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/Header/Header.tsx",
                lineNumber: 90,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/Header/Header.tsx",
            lineNumber: 89,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/Header/Header.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
_s(Header, "8ehD53DPTguzeRCJWApJD02Lqzo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCurrentUserQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AuthApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoutMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$hooks$2f$esm$2f$use$2d$disclosure$2f$use$2d$disclosure$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store/api/AiApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiApi",
    ()=>aiApi,
    "useDeleteAllRecommendationsMutation",
    ()=>useDeleteAllRecommendationsMutation,
    "useGetFinancialAdviceMutation",
    ()=>useGetFinancialAdviceMutation,
    "useGetRecommendationsQuery",
    ()=>useGetRecommendationsQuery,
    "useMarkRecommendationAsReadMutation",
    ()=>useMarkRecommendationAsReadMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
;
const aiApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: 'aiApi',
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: '/api/',
        credentials: 'include'
    }),
    tagTypes: [
        'FinancialAdvice',
        'Recommendations'
    ],
    endpoints: (builder)=>({
            getFinancialAdvice: builder.mutation({
                query: (data)=>({
                        url: 'ai/financial-advice',
                        method: 'POST',
                        body: data
                    }),
                invalidatesTags: [
                    'FinancialAdvice',
                    'Recommendations'
                ]
            }),
            getRecommendations: builder.query({
                query: (params)=>{
                    const searchParams = new URLSearchParams();
                    if (params?.isRead !== undefined) {
                        searchParams.append('isRead', String(params.isRead));
                    }
                    const queryString = searchParams.toString();
                    return `ai/recommendations${queryString ? `?${queryString}` : ''}`;
                },
                providesTags: [
                    'Recommendations'
                ]
            }),
            markRecommendationAsRead: builder.mutation({
                query: (id)=>({
                        url: `ai/recommendations/${id}/read`,
                        method: 'POST'
                    }),
                invalidatesTags: [
                    'Recommendations'
                ]
            }),
            deleteAllRecommendations: builder.mutation({
                query: ()=>({
                        url: 'ai/recommendations',
                        method: 'DELETE'
                    }),
                invalidatesTags: [
                    'Recommendations'
                ]
            })
        })
});
const { useGetFinancialAdviceMutation, useGetRecommendationsQuery, useMarkRecommendationAsReadMutation, useDeleteAllRecommendationsMutation } = aiApi;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store/Index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AuthApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/api/AuthApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/api/UserApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/api/AiApi.ts [app-client] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AuthApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AuthApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].reducer,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiApi"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AuthApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userApi"].middleware, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aiApi"].middleware)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$Index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/Index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$Notifications$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/notifications/esm/Notifications.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTheme"])({
    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    headings: {
        fontFamily: 'var(--font-inter), sans-serif',
        fontWeight: '700'
    },
    defaultRadius: 'md'
});
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MantineProvider"], {
        theme: theme,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$Index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$Notifications$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notifications"], {
                    position: "top-center"
                }, void 0, false, {
                    fileName: "[project]/src/app/providers.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/providers.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/AiChat/AiChat.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bubble": "AiChat-module__VUR-sW__bubble",
  "bubbleContainer": "AiChat-module__VUR-sW__bubbleContainer",
  "chatHeader": "AiChat-module__VUR-sW__chatHeader",
  "chatPaper": "AiChat-module__VUR-sW__chatPaper",
  "inputArea": "AiChat-module__VUR-sW__inputArea",
  "messagesArea": "AiChat-module__VUR-sW__messagesArea",
  "modalContent": "AiChat-module__VUR-sW__modalContent",
  "modalOverlay": "AiChat-module__VUR-sW__modalOverlay",
});
}),
"[project]/src/components/features/AiChat/AiChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiChat",
    ()=>AiChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessageCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMessageCircle.mjs [app-client] (ecmascript) <export default as IconMessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconX.mjs [app-client] (ecmascript) <export default as IconX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMinus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMinus$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMinus.mjs [app-client] (ecmascript) <export default as IconMinus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMaximize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMaximize$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMaximize.mjs [app-client] (ecmascript) <export default as IconMaximize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSend$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSend$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSend.mjs [app-client] (ecmascript) <export default as IconSend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconRobot.mjs [app-client] (ecmascript) <export default as IconRobot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUser$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconUser.mjs [app-client] (ecmascript) <export default as IconUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/api/AiApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/notifications/esm/notifications.store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/features/AiChat/AiChat.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/api/UserApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const STORAGE_KEY = 'ai-chat-history';
function AiChat() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [getFinancialAdvice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFinancialAdviceMutation"])();
    const [markAsRead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkRecommendationAsReadMutation"])();
    const [deleteAllRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteAllRecommendationsMutation"])();
    const scrollAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollViewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const readMessagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [isClearing, setIsClearing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if user is authenticated
    const { isSuccess: isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCurrentUserQuery"])();
    // Load recommendations from API (always when authenticated, to show unread count)
    const { data: recommendations, refetch: refetchRecommendations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecommendationsQuery"])(undefined, {
        skip: !isAuthenticated
    });
    // Convert recommendations to chat messages
    const convertRecommendationsToMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AiChat.useCallback[convertRecommendationsToMessages]": (recs)=>{
            return recs.sort({
                "AiChat.useCallback[convertRecommendationsToMessages]": (a, b)=>new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            }["AiChat.useCallback[convertRecommendationsToMessages]"]).map({
                "AiChat.useCallback[convertRecommendationsToMessages]": (rec)=>({
                        id: `rec-${rec.id}`,
                        role: 'assistant',
                        content: rec.content,
                        timestamp: new Date(rec.createdAt),
                        recommendationId: rec.id,
                        isRead: rec.isRead
                    })
            }["AiChat.useCallback[convertRecommendationsToMessages]"]);
        }
    }["AiChat.useCallback[convertRecommendationsToMessages]"], []);
    // Load user questions from localStorage (only user messages, not AI responses)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiChat.useEffect": ()=>{
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    const parsed = JSON.parse(saved);
                    const userMessages = parsed.filter({
                        "AiChat.useEffect.userMessages": (msg)=>msg.role === 'user'
                    }["AiChat.useEffect.userMessages"]).map({
                        "AiChat.useEffect.userMessages": (msg)=>({
                                ...msg,
                                timestamp: new Date(msg.timestamp)
                            })
                    }["AiChat.useEffect.userMessages"]);
                    setMessages({
                        "AiChat.useEffect": (prev)=>{
                            // Merge with recommendations, but keep user messages from localStorage
                            const existingIds = new Set(prev.map({
                                "AiChat.useEffect": (m)=>m.id
                            }["AiChat.useEffect"]));
                            return [
                                ...prev,
                                ...userMessages.filter({
                                    "AiChat.useEffect": (m)=>!existingIds.has(m.id)
                                }["AiChat.useEffect"])
                            ];
                        }
                    }["AiChat.useEffect"]);
                }
            } catch (error) {
                console.error('Failed to load chat history:', error);
            }
        }
    }["AiChat.useEffect"], []);
    // Load recommendations when authenticated (for unread count and chat history)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiChat.useEffect": ()=>{
            if (isAuthenticated && recommendations) {
                const recMessages = convertRecommendationsToMessages(recommendations);
                setMessages({
                    "AiChat.useEffect": (prev)=>{
                        // Create a map of existing messages by recommendationId (for assistant messages)
                        // and by id (for all messages)
                        const existingById = new Map(prev.map({
                            "AiChat.useEffect": (m)=>[
                                    m.id,
                                    m
                                ]
                        }["AiChat.useEffect"]));
                        const existingByRecId = new Map();
                        prev.forEach({
                            "AiChat.useEffect": (m)=>{
                                if (m.recommendationId) {
                                    existingByRecId.set(m.recommendationId, m);
                                }
                            }
                        }["AiChat.useEffect"]);
                        // Filter out recommendations that already exist
                        const newRecMessages = recMessages.filter({
                            "AiChat.useEffect.newRecMessages": (m)=>!existingById.has(m.id) && (!m.recommendationId || !existingByRecId.has(m.recommendationId))
                        }["AiChat.useEffect.newRecMessages"]);
                        // Update existing recommendations with latest data (e.g., isRead status)
                        const updated = prev.map({
                            "AiChat.useEffect.updated": (m)=>{
                                if (m.recommendationId) {
                                    const rec = recommendations.find({
                                        "AiChat.useEffect.updated.rec": (r)=>r.id === m.recommendationId
                                    }["AiChat.useEffect.updated.rec"]);
                                    if (rec) {
                                        return {
                                            ...m,
                                            isRead: rec.isRead,
                                            content: rec.content
                                        };
                                    }
                                }
                                return m;
                            }
                        }["AiChat.useEffect.updated"]);
                        // Combine and sort by timestamp
                        const combined = [
                            ...updated,
                            ...newRecMessages
                        ];
                        return combined.sort({
                            "AiChat.useEffect": (a, b)=>a.timestamp.getTime() - b.timestamp.getTime()
                        }["AiChat.useEffect"]);
                    }
                }["AiChat.useEffect"]);
            }
        }
    }["AiChat.useEffect"], [
        isAuthenticated,
        recommendations,
        convertRecommendationsToMessages
    ]);
    // Calculate unread count
    const unreadCount = messages.filter((msg)=>msg.role === 'assistant' && !msg.isRead && msg.recommendationId).length;
    // Save only user messages to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiChat.useEffect": ()=>{
            const userMessages = messages.filter({
                "AiChat.useEffect.userMessages": (msg)=>msg.role === 'user'
            }["AiChat.useEffect.userMessages"]);
            if (userMessages.length > 0) {
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(userMessages));
                } catch (error) {
                    console.error('Failed to save chat history:', error);
                }
            }
        }
    }["AiChat.useEffect"], [
        messages
    ]);
    // Handle scroll to mark messages as read
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiChat.useEffect": ()=>{
            if (!scrollViewportRef.current || !isAuthenticated || !isOpen) return;
            const viewport = scrollViewportRef.current;
            let scrollTimeout;
            const handleScroll = {
                "AiChat.useEffect.handleScroll": ()=>{
                    // Debounce scroll events
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout({
                        "AiChat.useEffect.handleScroll": ()=>{
                            const scrollTop = viewport.scrollTop;
                            const clientHeight = viewport.clientHeight;
                            const scrollHeight = viewport.scrollHeight;
                            // Check if scrolled to bottom (with 50px threshold)
                            if (scrollHeight - scrollTop - clientHeight < 50) {
                                // Find unread messages with recommendationId
                                const unreadMessages = messages.filter({
                                    "AiChat.useEffect.handleScroll.unreadMessages": (msg)=>msg.role === 'assistant' && msg.recommendationId && !msg.isRead && !readMessagesRef.current.has(msg.recommendationId)
                                }["AiChat.useEffect.handleScroll.unreadMessages"]);
                                // Mark all visible unread messages as read
                                if (unreadMessages.length > 0) {
                                    Promise.all(unreadMessages.map({
                                        "AiChat.useEffect.handleScroll": async (msg)=>{
                                            if (msg.recommendationId && !readMessagesRef.current.has(msg.recommendationId)) {
                                                readMessagesRef.current.add(msg.recommendationId);
                                                try {
                                                    await markAsRead(msg.recommendationId).unwrap();
                                                    return msg.id;
                                                } catch (error) {
                                                    console.error('Failed to mark message as read:', error);
                                                    readMessagesRef.current.delete(msg.recommendationId);
                                                    return null;
                                                }
                                            }
                                            return null;
                                        }
                                    }["AiChat.useEffect.handleScroll"])).then({
                                        "AiChat.useEffect.handleScroll": (markedIds)=>{
                                            // Update messages that were successfully marked as read
                                            const successIds = markedIds.filter({
                                                "AiChat.useEffect.handleScroll.successIds": (id)=>id !== null
                                            }["AiChat.useEffect.handleScroll.successIds"]);
                                            if (successIds.length > 0) {
                                                setMessages({
                                                    "AiChat.useEffect.handleScroll": (prev)=>prev.map({
                                                            "AiChat.useEffect.handleScroll": (m)=>successIds.includes(m.id) ? {
                                                                    ...m,
                                                                    isRead: true
                                                                } : m
                                                        }["AiChat.useEffect.handleScroll"])
                                                }["AiChat.useEffect.handleScroll"]);
                                                // Refetch recommendations to update the list
                                                refetchRecommendations();
                                            }
                                        }
                                    }["AiChat.useEffect.handleScroll"]);
                                }
                            }
                        }
                    }["AiChat.useEffect.handleScroll"], 300); // 300ms debounce
                }
            }["AiChat.useEffect.handleScroll"];
            viewport.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "AiChat.useEffect": ()=>{
                    clearTimeout(scrollTimeout);
                    viewport.removeEventListener('scroll', handleScroll);
                }
            })["AiChat.useEffect"];
        }
    }["AiChat.useEffect"], [
        messages,
        isAuthenticated,
        isOpen,
        markAsRead,
        refetchRecommendations
    ]);
    // Auto-scroll to bottom when new messages arrive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiChat.useEffect": ()=>{
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }["AiChat.useEffect"], [
        messages
    ]);
    const handleSend = async ()=>{
        if (!input.trim() || isLoading || !isAuthenticated) {
            if (!isAuthenticated) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                    color: 'yellow',
                    title: 'Требуется авторизация',
                    message: 'Пожалуйста, войдите в систему для использования AI помощника'
                });
            }
            return;
        }
        const userMessage = {
            id: `user-${Date.now()}`,
            role: 'user',
            content: input.trim(),
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        const prompt = input.trim();
        setInput('');
        setIsLoading(true);
        try {
            const response = await getFinancialAdvice({
                prompt
            }).unwrap();
            const assistantMessage = {
                id: `assistant-${Date.now()}`,
                role: 'assistant',
                content: response.advice || 'Извините, не удалось получить ответ.',
                timestamp: new Date(),
                recommendationId: response.recommendationId,
                isRead: false
            };
            setMessages((prev)=>[
                    ...prev,
                    assistantMessage
                ]);
            // Refetch recommendations to get updated list
            refetchRecommendations();
        } catch (error) {
            console.error('Error getting financial advice:', error);
            let errorMessage = 'Не удалось получить финансовый совет';
            let showInChat = false;
            // Если есть сообщение от сервера, используем его
            if (error?.data?.message) {
                errorMessage = error.data.message;
                // Показываем сообщение в чате, если это бизнес-логика (например, нет транзакций)
                showInChat = true;
            } else if (error?.status === 401) {
                errorMessage = 'Требуется авторизация. Пожалуйста, войдите в систему.';
            } else if (error?.status === 404 && !error?.data?.message) {
                // Только если это настоящая 404 без сообщения
                errorMessage = 'Эндпоинт не найден. Убедитесь, что сервер запущен и перезапустите dev сервер.';
            } else if (error?.status === 500) {
                errorMessage = 'Ошибка сервера. Попробуйте позже.';
                showInChat = true;
            }
            // Показываем уведомление
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                color: error?.status === 404 && error?.data?.message ? 'yellow' : 'red',
                title: error?.status === 404 && error?.data?.message ? 'Информация' : 'Ошибка',
                message: errorMessage
            });
            // Показываем сообщение в чате, если это бизнес-логика или ошибка сервера
            if (showInChat || error?.status !== 401 && error?.status !== 404) {
                const errorMsg = {
                    id: `error-${Date.now()}`,
                    role: 'assistant',
                    content: errorMessage,
                    timestamp: new Date()
                };
                setMessages((prev)=>[
                        ...prev,
                        errorMsg
                    ]);
            }
        } finally{
            setIsLoading(false);
        }
    };
    const handleClearHistory = async ()=>{
        if (isClearing) return;
        if (!isAuthenticated) {
            setMessages([]);
            localStorage.removeItem(STORAGE_KEY);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                color: 'blue',
                title: 'История очищена',
                message: 'Локальная история чата была удалена'
            });
            return;
        }
        try {
            setIsClearing(true);
            // Optimistic UI: clear assistant messages immediately
            setMessages((prev)=>prev.filter((msg)=>msg.role === 'user'));
            await deleteAllRecommendations().unwrap();
            localStorage.removeItem(STORAGE_KEY);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                color: 'blue',
                title: 'История очищена',
                message: 'Все советы были удалены'
            });
            refetchRecommendations();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                color: 'red',
                title: 'Ошибка',
                message: error?.data?.message || 'Не удалось удалить рекомендации'
            });
            // Подтянем актуальное состояние с сервера
            refetchRecommendations();
        } finally{
            setIsClearing(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: 0,
                        opacity: 0
                    },
                    transition: {
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubbleContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                        size: 60,
                        radius: "xl",
                        variant: "gradient",
                        gradient: {
                            from: '#1e3a8a',
                            to: '#3b82f6'
                        },
                        onClick: ()=>setIsOpen(true),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubble,
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessageCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessageCircle$3e$__["IconMessageCircle"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                lineNumber: 389,
                                columnNumber: 15
                            }, this),
                            unreadCount > 0 && isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                size: "lg",
                                circle: true,
                                color: "red",
                                variant: "filled",
                                style: {
                                    position: 'absolute',
                                    top: -4,
                                    right: -4,
                                    minWidth: 24,
                                    height: 24,
                                    padding: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 12,
                                    fontWeight: 700
                                },
                                children: unreadCount > 9 ? '9+' : unreadCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                lineNumber: 391,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                        lineNumber: 380,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                    lineNumber: 373,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay,
                    onClick: ()=>!isMinimized && setIsOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.8,
                            y: 20,
                            opacity: 0
                        },
                        animate: {
                            scale: isMinimized ? 0.95 : 1,
                            y: isMinimized ? 40 : 0,
                            opacity: 1
                        },
                        exit: {
                            scale: 0.8,
                            y: 20,
                            opacity: 0
                        },
                        transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 30
                        },
                        onClick: (e)=>e.stopPropagation(),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                            shadow: "xl",
                            radius: "md",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatPaper,
                            style: {
                                height: isMinimized ? 'auto' : '600px',
                                minHeight: isMinimized ? 'auto' : '600px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                    justify: "space-between",
                                    p: "md",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                            gap: "xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                                    size: 24,
                                                    color: "#1e3a8a"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                            fw: 600,
                                                            size: "lg",
                                                            children: "Финансовый помощник"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                            size: "xs",
                                                            c: "dimmed",
                                                            children: "AI консультант"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                            gap: "xs",
                                            children: [
                                                !isMinimized && messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "xs",
                                                    variant: "subtle",
                                                    onClick: handleClearHistory,
                                                    disabled: isClearing,
                                                    children: "Очистить"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                    variant: "subtle",
                                                    onClick: ()=>setIsMinimized(!isMinimized),
                                                    title: isMinimized ? 'Развернуть' : 'Свернуть',
                                                    children: isMinimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMaximize$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMaximize$3e$__["IconMaximize"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 38
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMinus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMinus$3e$__["IconMinus"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 67
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                    variant: "subtle",
                                                    onClick: ()=>setIsOpen(false),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconX$3e$__["IconX"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                            lineNumber: 455,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                    lineNumber: 447,
                                    columnNumber: 17
                                }, this),
                                !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                            h: 400,
                                            p: "md",
                                            ref: scrollAreaRef,
                                            viewportRef: scrollViewportRef,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messagesArea,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                                gap: "md",
                                                children: [
                                                    messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                                        ta: "center",
                                                        py: "xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                                                size: 48,
                                                                color: "#1e3a8a",
                                                                style: {
                                                                    opacity: 0.3
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                c: "dimmed",
                                                                mt: "md",
                                                                children: isAuthenticated ? 'Задайте вопрос о финансах, и я помогу вам!' : 'Войдите в систему, чтобы использовать AI помощника'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 27
                                                    }, this) : messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 10
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            transition: {
                                                                duration: 0.2
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                align: "flex-start",
                                                                gap: "sm",
                                                                style: {
                                                                    flexDirection: message.role === 'user' ? 'row-reverse' : 'row'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                                                                    p: "md",
                                                                    radius: "md",
                                                                    style: {
                                                                        maxWidth: '80%',
                                                                        background: message.role === 'user' ? 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' : undefined,
                                                                        color: message.role === 'user' ? 'white' : 'inherit',
                                                                        border: message.role === 'assistant' && !message.isRead ? '2px solid #3b82f6' : undefined
                                                                    },
                                                                    bg: message.role === 'user' ? undefined : 'gray.1',
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                            gap: "xs",
                                                                            mb: "xs",
                                                                            justify: "space-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                                    gap: "xs",
                                                                                    children: [
                                                                                        message.role === 'user' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUser$3e$__["IconUser"], {
                                                                                            size: 16
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                                            lineNumber: 534,
                                                                                            columnNumber: 41
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                                                                            size: 16
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                                            lineNumber: 536,
                                                                                            columnNumber: 41
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                                            size: "xs",
                                                                                            fw: 500,
                                                                                            children: message.role === 'user' ? 'Вы' : 'AI Помощник'
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                                            lineNumber: 538,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                                    lineNumber: 532,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                message.role === 'assistant' && !message.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    size: "xs",
                                                                                    color: "blue",
                                                                                    variant: "light",
                                                                                    children: "Новое"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                                    lineNumber: 543,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                            lineNumber: 531,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                            size: "sm",
                                                                            style: {
                                                                                whiteSpace: 'pre-wrap'
                                                                            },
                                                                            children: message.content
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                            lineNumber: 548,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                lineNumber: 510,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, message.id, false, {
                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 29
                                                        }, this)),
                                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        align: "flex-start",
                                                        gap: "sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                                                            p: "md",
                                                            radius: "md",
                                                            bg: "gray.1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                gap: "xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                                                                        size: "sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                        size: "sm",
                                                                        c: "dimmed",
                                                                        children: "Думаю..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                            lineNumber: 558,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: messagesEndRef
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                lineNumber: 492,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                            lineNumber: 485,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            p: "md",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$AiChat$2f$AiChat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputArea,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "sm",
                                                align: "flex-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                        placeholder: isAuthenticated ? "Задайте вопрос о финансах..." : "Войдите в систему для использования",
                                                        value: input,
                                                        onChange: (e)=>setInput(e.target.value),
                                                        onKeyDown: handleKeyPress,
                                                        minRows: 1,
                                                        maxRows: 4,
                                                        autosize: true,
                                                        style: {
                                                            flex: 1
                                                        },
                                                        disabled: isLoading || !isAuthenticated
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: handleSend,
                                                        disabled: !input.trim() || isLoading || !isAuthenticated,
                                                        variant: "gradient",
                                                        gradient: {
                                                            from: '#1e3a8a',
                                                            to: '#3b82f6'
                                                        },
                                                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSend$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSend$3e$__["IconSend"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 40
                                                        }, void 0),
                                                        children: "Отправить"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                                lineNumber: 572,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                                            lineNumber: 571,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                            lineNumber: 440,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                        lineNumber: 428,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                    lineNumber: 421,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/AiChat/AiChat.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AiChat, "x6VYqfOJY122URmZhQV51YR0HAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetFinancialAdviceMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarkRecommendationAsReadMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteAllRecommendationsMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$UserApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCurrentUserQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$api$2f$AiApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecommendationsQuery"]
    ];
});
_c = AiChat;
var _c;
__turbopack_context__.k.register(_c, "AiChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            borderTop: '1px solid var(--mantine-color-gray-3)',
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            size: "md",
            style: {
                paddingTop: 16,
                paddingBottom: 16
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                justify: "space-between",
                wrap: "nowrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "sm",
                        c: "dimmed",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Multibank"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/Footer/Footer.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        gap: "md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/",
                                c: "dimmed",
                                size: "sm",
                                children: "Главная"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Footer/Footer.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/dashboard",
                                c: "dimmed",
                                size: "sm",
                                children: "Дашборд"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Footer/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/analytics",
                                c: "dimmed",
                                size: "sm",
                                children: "Аналитика"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Footer/Footer.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                                component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/profile",
                                c: "dimmed",
                                size: "sm",
                                children: "Профиль"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/Footer/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/Footer/Footer.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/Footer/Footer.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/features/Footer/Footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/Footer/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a67bf4c1._.js.map