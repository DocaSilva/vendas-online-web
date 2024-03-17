import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import { ProdutcRoutesEnum } from "../../product/routes";

const FristScreen = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(ProdutcRoutesEnum.PRODUCT);
    }
  }, []);

  return <Spin />;
};

export default FristScreen;
