import Axios from "axios";
import { store } from "../_store/store";

export const authHeader = (): HeadersInit => {
  const localUser = localStorage.getItem("user");
  let user: { token: string } = localUser ? JSON.parse(localUser) : null;
  if (user?.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return { Authorization: "" };
  }
}
export const API = Axios.create({
  baseURL: "YOUR API",
  headers: authHeader(),
});
// Error contorller
API.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    console.log(err)
    if (err.response.status === 403) {
      if (/invalid_token/.test(err.response.data.code))
        store.dispatch(/*do something with the action for example logoutRequest()*/)
      else if (/incorrect_password/.test(err.response.data.code))
        err.response.data.button = { url: "/lostpassword", msg: "بازیابی رمز" }
    }
    return Promise.reject(err);
  }
)