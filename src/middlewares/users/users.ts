import { getUsers as getUsersService } from "../../services/users";
import { IGetUsers } from "./types";

const getUsers = async (params: IGetUsers = {}) => {
  const {
    successCallback = () => null,
    errorCallback = () => null,
    finallyCallback = () => null,
  } = params;

  try {
    const response = await getUsersService();
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
};

const UsersMiddlewares = {
  getUsers
};

export default UsersMiddlewares;
