import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import Homepage from "./Pages/Home";
import Contactpage from "./Pages/Contact";
import Aboutpage from "./Pages/About";
import Myworkpage from "./Pages/MyWork";
import Root from "./App";

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homepage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contactpage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: Aboutpage,
});

const MyworkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mywork",
  component: Myworkpage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  contactRoute,
  aboutRoute,
  MyworkRoute,
]);

export const router = createRouter({ routeTree });

export default router;
