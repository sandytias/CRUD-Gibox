import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/axiosRequest";

export default (props) => {
  const [detailsById, setDetailById] = useState({});
  const GetDetailsByHooks = (requestId) => {
    // console.log("requestId is ____", requestId);
    return GetDetailsById(requestId).then((res) => {
      console.log(("Response Data", res));
      setDetailById(res);
    });
  };

  useEffect(() => {
    GetDetailsByHooks(props);
  }, []);
  return [detailsById];
};
