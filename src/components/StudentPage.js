import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetApiStudentAction } from "../redux/action/action";

const StundetPage = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.Reducer.details);
  const isDeleteResponse = useSelector(
    (state) => state.Reducer.isDeleteResponse
  );

  console.log("responseData from action", responseData);

  useEffect(() => {
    dispatch(GetApiStudentAction());
  }, [dispatch]);

  if (isDeleteResponse) {
    alert("Your data has been deleted !");
    window.location.reload(false);
  }

  const result = responseData
    ? responseData.map((data, index) => {
        return (
          <tr key={index}>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone_number}</td>
            <td>{data.createdAt}</td>
          </tr>
        );
      })
    : null;

  return (
    <div>
      <h1>Student Page</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">CreatedAt</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default StundetPage;
