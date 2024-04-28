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

// add unknown accident report
export const addUaAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("post",`${serverURL}/report/unknown-accident`,reqBody,reqHeader)
}

// get a particular report
export const getAReportAPI = async(reqHeader)=>{
  return await commonAPI("get",`${serverURL}/report/get-a-report`,"",reqHeader)
}