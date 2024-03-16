import { RouteObject } from "react-router-dom";

import Product from "./screens/Product";

export enum ProdutcRoutsEnum {
  PRODUCT = "/product",
}

export const ProductScreens: RouteObject[] = [
  {
    path: ProdutcRoutsEnum.PRODUCT,
    element: <Product />,
  },
];
