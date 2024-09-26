import axios from "axios";

// user 정보 가져오기
export const getUserInfo = async () => {
  const response = await axios.get("../../public/data/user/userData.json");

  return response.data;
};
