import { AUHTORIZATION_KEY } from "../../constants/authorizationConstants";
import { getItemStorage, removeItemStorage, setItemStorage } from "./StorageProxy";

export const unsetAuthorizationToken = () => removeItemStorage(AUHTORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItemStorage(AUHTORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => getItemStorage(AUHTORIZATION_KEY);
