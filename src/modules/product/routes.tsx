import { RouteObject } from "react-router-dom";

import Product from "./screens/Product";

export enum ProdutcRoutesEnum {
  PRODUCT = "/product",
}

export const ProductScreens: RouteObject[] = [
  {
    path: ProdutcRoutesEnum.PRODUCT,
    element: <Product />,
  },
];
