import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// register API call
export const registerAPI = async (user) => {
  return await commonAPI("post", `${serverURL}/register`, user, "");
};

// login api call
export const loginAPI = async(user)=>{
  return await commonAPI("post",`${serverURL}/login`,user,"")
}