import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// Authentication APIs
export const registerAPI = async (user) => {
  return await commonAPI("post", `${serverURL}/register`, user, "");
};

export const loginAPI = async (user) => {
  return await commonAPI("post", `${serverURL}/login`, user, "");
};

// Unknown Accident Report APIs
export const addUaAPI = async (reqBody, reqHeader) => {
  return await commonAPI("post", `${serverURL}/report/unknown-accident`, reqBody, reqHeader);
};

export const getAReportAPI = async (searchKey, reqHeader) => {
  return await commonAPI("get", `${serverURL}/report/get-a-report?search=${searchKey}`, "", reqHeader);
};

export const updateUaAPI = async (unknownId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-unknown-accident/${unknownId}`, reqBody, reqHeader);
};

export const deleteUaAPI = async (unknownId, reqHeader) => {
  return await commonAPI("delete", `${serverURL}/delete-unknown-accident/${unknownId}`, {}, reqHeader);
};

// Missing Cases Report APIs
export const addMcAPI = async (reqBody, reqHeader) => {
  return await commonAPI("post", `${serverURL}/missingcases/missing-case`, reqBody, reqHeader);
};

export const getAMissingReportAPI = async (searchKey, reqHeader) => {
  return await commonAPI("get", `${serverURL}/missingcases/get-missing-case?search=${searchKey}`, "", reqHeader);
};

export const updateMcAPI = async (missingId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-missing/${missingId}`, reqBody, reqHeader);
};

export const deleteMcAPI = async (missingId, reqHeader) => {
  return await commonAPI("delete", `${serverURL}/delete-missing/${missingId}`, {}, reqHeader);
};

// Other Info APIs
export const addOiAPI = async (reqBody, reqHeader) => {
  return await commonAPI("post", `${serverURL}/otherinfo/other-information`, reqBody, reqHeader);
};

export const getAOtherInfoAPI = async (searchKey, reqHeader) => {
  return await commonAPI("get", `${serverURL}/otherinfo/get-other-info?search=${searchKey}`, "", reqHeader);
};

export const updateOiAPI = async (otherId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-other/${otherId}`, reqBody, reqHeader);
};

export const deleteOiAPI = async (otherId, reqHeader) => {
  return await commonAPI("delete", `${serverURL}/delete-other/${otherId}`, {}, reqHeader);
};

// Tourist Reports APIs
export const addTpAPI = async (reqBody, reqHeader) => {
  return await commonAPI("post", `${serverURL}/touristpolice/tourist-report`, reqBody, reqHeader);
};

export const getATpReportAPI = async (searchKey, reqHeader) => {
  return await commonAPI("get", `${serverURL}/touristpolice/get-tourist-report?search=${searchKey}`, "", reqHeader);
};

export const updatetpAPI = async (touristId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-tourist/${touristId}`, reqBody, reqHeader);
};

export const deleteTpAPI = async (touristId, reqHeader) => {
  return await commonAPI("delete", `${serverURL}/delete-tourist/${touristId}`, {}, reqHeader);
};

// Accident Reports APIs
export const addMaAPI = async (reqBody, reqHeader) => {
  return await commonAPI("post", `${serverURL}/accidentreport/accident-report`, reqBody, reqHeader);
};

export const getAMaReportAPI = async (searchKey, reqHeader) => {
  return await commonAPI("get", `${serverURL}/accidentreport/get-accident-report?search=${searchKey}`, "", reqHeader);
};

export const updateMaAPI = async (accidentId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-acc/${accidentId}`, reqBody, reqHeader);
};

export const deleteMaAPI = async (accidentId, reqHeader) => {
  return await commonAPI("delete", `${serverURL}/delete-accident/${accidentId}`, {}, reqHeader);
};

// User APIs
export const getUsersAPI = async (searchKey, reqHeader) => {
  return await commonAPI("get", `${serverURL}/users?search=${searchKey}`, "", reqHeader);
};

export const deleteUserAPI = async (userId, reqHeader) => {
  return await commonAPI("delete", `${serverURL}/delete-user/${userId}`, {}, reqHeader);
};


// Traffic fine Report APIs
export const addTrafficAPI = async (reqBody, reqHeader) => {
  return await commonAPI("post", `${serverURL}/add-traffic-fine`, reqBody, reqHeader);
};

export const getTrafficReportAPI = async (searchKey, reqHeader) => {
  return await commonAPI("get", `${serverURL}/get-a-traffic?search=${searchKey}`, "", reqHeader);
};

export const deleteTrafficAPI = async (trafficId, reqHeader) => {
  return await commonAPI("delete", `${serverURL}/delete-traffic/${trafficId}`, {}, reqHeader);
};
export const getAReporttAPI=async(reqheader)=>{
  return await commonAPI("get",`${serverURL}/project/get-auser-traffic`,"",reqheader)
}
export const updateTrafAPI = async (trafficId, reqBody, reqHeader) => {
  return await commonAPI("put", `${serverURL}/report/update-acc/${trafficId}`, reqBody, reqHeader);
};
