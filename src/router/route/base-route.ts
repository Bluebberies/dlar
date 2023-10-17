import React from "react";

export type BaseRoute = {
    component: React.ComponentType,
    path: string,
    meta: Meta,
    options: object,
}

type Meta ={
    isAuth: boolean,
    redirectTo: string | undefined,
}