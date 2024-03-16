import { RouteObject } from "react-router-dom";

import FristScreen from "./screens/FirstScreen";

export const firstScreenRoutes: RouteObject[] = [
  {
    path: "/",
    element: <FristScreen />,
    errorElement: <div>Pagina não encontrada</div>,
  },
];
