import { lazy } from "react";

export default [
  {
    name: "home",
    path: "/",
    component: lazy(() => import("./views/Home")),
  },
  {
    name: "404",
    path: "*",
    component: lazy(() => import("./views/NotFound")),
  },
];
