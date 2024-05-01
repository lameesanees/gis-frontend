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

// charity
export const getACharityAPI =async(searchKey,reqHeader)=>{
  return await commonAPI("get",`${serverURL}/charityreport/get-charity-report?search=${searchKey}`,"",reqHeader)
}

export const addCharityAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("post",`${serverURL}/charityreport/charity-report`,reqBody,reqHeader)
}