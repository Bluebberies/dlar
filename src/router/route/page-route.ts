import {RouterConstantUtil} from "../../util/constant/RouterConstantUtil.ts";
import {OverviewView} from "../../view/page/OverviewView.tsx";
import {NoPageFoundView} from "../../view/page/NoPageFoundView.tsx";
import {HomeView} from "../../view/page/HomeView.tsx";
import {LoginView} from "../../view/auth/LoginView.tsx";
import {SearchResultView} from "../../view/page/SearchResultView.tsx";
import {PropertyDetailsView} from "../../view/page/PropertyDetailsView.tsx";
import {BookmarkView} from "../../view/page/BookmarkView.tsx";

export const pageRoute = [
    {
        component: OverviewView,
        path: RouterConstantUtil.routes.page.overview,
        meta: {
            isAuth: true,
            redirectTo: undefined
        },
        options: {

        },
    },
    {
        component: LoginView,
        path: "/",
        meta: {
            isAuth: false,
            redirectTo: RouterConstantUtil.routes.auth.login
        },
        options: {},
    },
    {
        component: NoPageFoundView,
        path: "*",
        meta: {
            isAuth: false,
            redirectTo: undefined        },
        options: {},
    },
    {
        component: HomeView,
        path: RouterConstantUtil.routes.page.home,
        meta: {
            isAuth: false,
            redirectTo: undefined        },
        options: {},
    },
    {
        component: SearchResultView,
        path: RouterConstantUtil.routes.page.searchResult,
        meta: {
            isAuth: false,
            redirectTo: undefined        },
        options: {},
    },
    {
        component: PropertyDetailsView,
        path: RouterConstantUtil.routes.page.propertyDetails,
        meta: {
            isAuth: false,
            redirectTo: undefined        },
        options: {},
    },
    {
        component: BookmarkView,
        path: RouterConstantUtil.routes.page.bookmark,
        meta: {
            isAuth: false,
            redirectTo: undefined        },
        options: {},
    },
]