import axios from "axios";
import localStorage from "@/@core/utils/localStorage";

export const getRefreshToken = (token: string | null) => {
  return axios
    .post("/api/refreshToken", { token: token })
    .then(({ data }) => {
      const { accessToken } = data;
      if (accessToken) localStorage.setItem("accessToken", accessToken);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
