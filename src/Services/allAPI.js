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

// get a unknown accident particular report
export const getAReportAPI = async(searchKey,reqHeader)=>{
  return await commonAPI("get",`${serverURL}/report/get-a-report?search=${searchKey}`,"",reqHeader)
}

// add a missng report
export const addMcAPI = async(reqBody,reqHeader)=>{
  return await commonAPI ("post",`${serverURL}/missingcases/missing-case`,reqBody,reqHeader)
}
// get a missing report
export const getAMissingReportAPI = async(searchKey,reqHeader)=>{
  return await commonAPI("get",`${serverURL}/missingcases/get-missing-case?search=${searchKey}`,"",reqHeader)
}

// add other info
export const addOiAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("post",`${serverURL}/otherinfo/other-information`,reqBody,reqHeader)
}
// get a other info particular report
export const getAOtherInfoAPI = async(searchKey,reqHeader)=>{
  return await commonAPI("get",`${serverURL}/otherinfo/get-other-info?search=${searchKey}`,"",reqHeader)
}
// add tourist reports
export const addTpAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("post",`${serverURL}/touristpolice/tourist-report`,reqBody,reqHeader)
}
// get a other info particular report
export const getATpReportAPI = async(searchKey,reqHeader)=>{
  return await commonAPI("get",`${serverURL}/touristpolice/get-tourist-report?search=${searchKey}`,"",reqHeader)
}
// accident report get
export const getAMaReportAPI = async(searchKey,reqHeader)=>{
  return await commonAPI("get",`${serverURL}/accidentreport/get-accident-report?search=${searchKey}`,"",reqHeader)
}
// add an accident report
export const addMaAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("post",`${serverURL}/accidentreport/accident-report`,reqBody,reqHeader)
}

// Get all users with search functionality
export const getUsersAPI = async(searchKey,reqHeader)=>{
  return await commonAPI("get",`${serverURL}/users?search=${searchKey}`,"",reqHeader)
}
export const deleteUserAPI = async(usersId,reqHeader)=>{
  return await commonAPI("delete",`${serverURL}/delete-user/${usersId}`,{},reqHeader)
}
export const deleteUaAPI = async(unknownId,reqHeader)=>{
  return await commonAPI("delete",`${serverURL}/delete-unknown-accident/${unknownId}`,{},reqHeader)
}
export const deleteMcAPI = async(missingId,reqHeader)=>{
  return await commonAPI("delete",`${serverURL}/delete-missing/${missingId}`,{},reqHeader)
}
export const deleteOiAPI = async(otherId,reqHeader)=>{
  return await commonAPI("delete",`${serverURL}/delete-other/${otherId}`,{},reqHeader)
}
export const deleteTpAPI = async(touristId,reqHeader)=>{
  return await commonAPI("delete",`${serverURL}/delete-tourist/${touristId}`,{},reqHeader)
}
export const deleteMaAPI = async(accidentId,reqHeader)=>{
  return await commonAPI("delete",`${serverURL}/delete-accident/${accidentId}`,{},reqHeader)
}
// Update an unknown accident report
export const updateUaAPI = async (unknownId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-unknown-accident/${unknownId}`, reqBody, reqHeader);
};
export const updateMcAPI = async (missingId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-missing/${missingId}`, reqBody, reqHeader);
};
export const updatetpAPI = async (touristId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-tourist/${touristId}`, reqBody, reqHeader);
};
export const updateOiAPI = async (otherId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-other/${otherId}`, reqBody, reqHeader);
};
export const updateMaAPI = async (accidentId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-acc/${accidentId}`, reqBody, reqHeader);
};

