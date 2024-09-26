import { useQuery } from "react-query";
import { getUserInfo } from "@/shared/apis/User";

export const useGetUserInfo = () => {
  return useQuery("userInfo", getUserInfo);
};
