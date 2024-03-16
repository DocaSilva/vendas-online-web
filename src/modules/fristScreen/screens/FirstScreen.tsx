import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAuthorizationToken } from "../../../shared/functions/connection/auth";
import { LoginRoutsEnum } from "../../login/routes";
import { ProdutcRoutsEnum } from "../../product/routes";

const FristScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      navigate(ProdutcRoutsEnum.PRODUCT);
    } else {
      navigate(LoginRoutsEnum.LOGIN);
    }
  });

  return <Spin />;
};

export default FristScreen;
