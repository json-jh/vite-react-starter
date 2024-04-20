import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/default";
import Auth from "../middleware/Auth";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";

type customRouteObject = RouteObject & {
  auth?: boolean;
  children?: customRouteObject[];
};

const routeObjects: customRouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    auth: true,
    children: [
      {
        path: "/",
        element: <Home />,
        auth: true,
      },
      {
        path: "/about",
        element: <About />,
        auth: true,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const protecting = (routes: customRouteObject[], parentAuth?: boolean) => {
  routes.forEach((route) => {
    if (route.auth === true || parentAuth === true) {
      route.element = <Auth element={route.element} />;
    }
    if (Array.isArray(route.children)) {
      protecting(route.children, route.auth);
    }
  });
  return routes;
};

const router = createBrowserRouter(protecting(routeObjects));

export default router;
