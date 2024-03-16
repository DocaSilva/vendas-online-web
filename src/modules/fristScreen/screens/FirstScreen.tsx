import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { URL_USER } from "../../../shared/constants/urls";
import {
  getAuthorizationToken,
  unsetAuthorizationToken,
} from "../../../shared/functions/connection/auth";
import { ConnectionAPIGet } from "../../../shared/functions/connection/connectionAPI";
import { LoginRoutsEnum } from "../../login/routes";
import { ProdutcRoutsEnum } from "../../product/routes";

const FristScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthorizationToken();
      if (token) {
        await ConnectionAPIGet(URL_USER)
          .then(() => {
            navigate(ProdutcRoutsEnum.PRODUCT);
          })
          .catch(() => {
            unsetAuthorizationToken();
            navigate(LoginRoutsEnum.LOGIN);
          });
      } else {
        navigate(LoginRoutsEnum.LOGIN);
      }
    };

    verifyToken();
  }, []);

  return <Spin />;
};

export default FristScreen;
