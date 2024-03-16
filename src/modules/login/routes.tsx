import { RouteObject } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";

export enum LoginRoutsEnum {
  LOGIN = "/login",
}

export const loginRoutes: RouteObject[] = [
  {
    path: LoginRoutsEnum.LOGIN,
    element: <LoginScreen />,
  },
];
