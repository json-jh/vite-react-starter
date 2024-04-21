import { RouteObject, createBrowserRouter } from "react-router-dom";

import Auth from "./middleware/Auth";

import Layout from "../layouts/default";

import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";

type customRouteObject = RouteObject & {
  auth?: boolean;
  children?: customRouteObject[];
};

export const routes: customRouteObject[] = [
  {
    element: <Layout />,
    auth: true,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const protecting = (routes: customRouteObject[], auth?: boolean) => {
  routes.forEach((route) => {
    if (route.auth === true || auth === true) {
      route.element = <Auth element={route.element} />;
      route.auth = true;
    }
    if (Array.isArray(route.children)) {
      protecting(route.children, auth || route.auth);
    }
  });
  return routes;
};

const router = createBrowserRouter(protecting(routes));

export default router;
