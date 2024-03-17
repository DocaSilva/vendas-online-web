import { RouteObject } from "react-router-dom";

import FristScreen from "./screens/FirstScreen";
import PageNotFound from "./screens/PageNotFound";

export const firstScreenRoutes: RouteObject[] = [
  {
    path: "/",
    element: <FristScreen />,
    errorElement: <PageNotFound />,
  },
];
