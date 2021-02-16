import axios from "axios";
import authActions from "./authActions";
// import { token } from "../axiosSettings";

const BASE_URL = "https://goit-phonebook-api.herokuapp.com";

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post("/users/signup", credentials);

    token.set(data.token);

    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

const login = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post("/users/login", credentials);

    token.set(data.token);

    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get("users/current");

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error));
  }
};

const logout = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();

    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error));
  }
};

export default { register, login, getCurrentUser, logout };
