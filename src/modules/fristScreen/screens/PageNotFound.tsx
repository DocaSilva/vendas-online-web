import { Result } from "antd";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/icons/button/Button";
import { LoginRoutesEnum } from "../../login/routes";
import { ContainerPageNotFound } from "../styles/PageNotFound.styles";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handlerOnClickButton = () => {
    navigate(LoginRoutesEnum.LOGIN);
  };
  return (
    <ContainerPageNotFound>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página quevocê está visitando não existe"
        extra={
          <Button onClick={handlerOnClickButton} type="primary">
            Início
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};
export default PageNotFound;
