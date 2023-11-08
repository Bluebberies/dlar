import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authRoute } from "./route/auth-route.ts";
import { BaseRoute } from "./route/base-route.ts";
import { pageRoute } from "./route/page-route.ts";
import { AuthRequired } from "./layout/AuthRequired.tsx";
import ScrollToTop from "../util/customhooks/scrollToTop.tsx";

export const Router = () => {
  const baseRoute = [] as BaseRoute[];

  const routes = baseRoute.concat(authRoute, pageRoute);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {routes.map((item, index) => {
          const Element = item!.component;
          if (item.meta.redirectTo !== undefined) {
            console.log("redirect ", item!.meta.redirectTo);
            return (
              <Route
                key={index}
                path={item.path}
                element={<Navigate to={item!.meta.redirectTo} />}
              />
            );
          }
          // if (item.meta.isAuth) {
          //   return (
          //     <Route
          //       key={index}
          //       path={item.path}
          //       element={<AuthRequired isAuth={item.meta.isAuth} />}
          //     />
          //   );
          // }
          // return <Route key={index} path={item!.path} element={<Element />} />;
          return (
            <Route
              key={index}
              path={item.path}
              element={<AuthRequired isAuth={item.meta.isAuth} elem={<Element />} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
