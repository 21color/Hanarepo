import axios from "axios";

export interface User {
  _id: string;
  index: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  job: string;
  username: string;
  password: string;
}

export const getUsers = async () => {
  const { data } = await axios.get<User[]>(`/data.json`);

  return data;
};
