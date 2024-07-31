import { useQuery, QueryClient } from "react-query";
import { getUsers } from ".";

export const useUsers = () => {
  const { data: userData } = useQuery("users", async () => {
    const data = await getUsers();
    return data;
  });
  return { userData };
};
