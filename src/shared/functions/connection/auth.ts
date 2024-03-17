import { LoginRoutsEnum } from "../../../modules/login/routes";
import { UserType } from "../../../modules/login/types/UserTypes";
import { AUHTORIZATION_KEY } from "../../constants/authorizationConstants";
import { URL_USER } from "../../constants/urls";
import { ConnectionAPIGet } from "./connectionAPI";
import { getItemStorage, removeItemStorage, setItemStorage } from "./StorageProxy";

export const unsetAuthorizationToken = () => removeItemStorage(AUHTORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItemStorage(AUHTORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => getItemStorage(AUHTORIZATION_KEY);

export const verifyLoggedIn = async (setUser: (user: UserType) => void, user?: UserType) => {
  const token = getAuthorizationToken();
  if (!token) {
    location.href = LoginRoutsEnum.LOGIN;
  }
  if (!user) {
    await ConnectionAPIGet<UserType>(URL_USER)
      .then((userReturn) => {
        setUser(userReturn);
      })
      .catch(() => {
        unsetAuthorizationToken();
        location.href = LoginRoutsEnum.LOGIN;
      });
  }
  return null;
};
