import React, { createContext, useState } from "react";
export const addReportResponseContext = createContext();
function ContextShare({ children }) {
  const [addReportResponse, setaddReportResponse] = useState("");
  return (
    <>
      <addReportResponseContext.Provider
        value={{ addReportResponse, setaddReportResponse }}>
        {children}
      </addReportResponseContext.Provider>
    </>
  );
}

export default ContextShare;
