// API calling
import axios from "axios";

export const commonAPI = async (httpRequest, url, reqbody, reqHeader) => {
  const reqConfig = {
    method: httpRequest,
    url,
    data: reqbody,
    headers: reqHeader
      ? reqHeader
      : {
          "Content-Type": "application/json",
        },
  };

  return await axios(reqConfig)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
