import { useEffect, useState } from "react";
import { GetDetailsBookById } from "../api/axiosRequest";

export default (props) => {
  const [detailsBookById, setDetailsBookById] = useState({});
  const GetDetailsBookByHooks = (requestId) => {
    console.log("requestId is ===", requestId);
    return GetDetailsBookById(requestId).then((res) => {
      console.log(("Response Book Data", res));
      setDetailsBookById(res);
    });
  };

  useEffect(() => {
    GetDetailsBookByHooks(props);
  }, []);
  return [detailsBookById];
};
