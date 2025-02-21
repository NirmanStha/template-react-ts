import { useAuthUserStore } from "@/store/authUser";
import axios, { AxiosHeaders } from "axios";

const { user } = useAuthUserStore.getState();

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,

  timeout: 10000,
  timeoutErrorMessage: "Request timed out",
});

const getHeaders = (
  isMultipart = false,
  isLoggedIn = false
): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
  };
  if (isLoggedIn) {
    headers["Authorization"] = `Bearer ${
      useAuthUserStore.getState().user?.accessToken
    }`;
  }
  return headers;
};

axiosInstance.interceptors.request.use((config) => {
  const headers = getHeaders(false, user.isLoggedIn);
  config.headers = new AxiosHeaders(headers);
  return config;
});
