import {RouterConstantUtil} from "../../util/constant/RouterConstantUtil.ts";
import {OverviewView} from "../../view/page/OverviewView.tsx";
import {NoPageFoundView} from "../../view/page/NoPageFoundView.tsx";

export const pageRoute = [
    {
        component: OverviewView,
        path: RouterConstantUtil.routes.page.overview,
        meta: {
            isAuth: true,
            redirectTo: undefined
        },
        options: {},
    },
    {
        component: OverviewView,
        path: "/",
        meta: {
            isAuth: false,
            redirectTo: RouterConstantUtil.routes.page.overview
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
]