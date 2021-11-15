import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetApiAction, DeleteApiAction } from "../redux/action/action";

const RentBook = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.Reducer.details);
  const isDeleteResponse = useSelector(
    (state) => state.Reducer.isDeleteResponse
  );

  console.log("responseData from action", responseData);

  useEffect(() => {
    dispatch(GetApiAction());
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
            <td>{data.id_book}</td>
            <td>{data.id_student}</td>
            <td>{data.qty_rent}</td>
            <td>{data.check_in}</td>
            <td>{data.check_out}</td>

            <td>
              <Link to="/form">
                <span class="material-icons">add</span>
              </Link>
            </td>

            <td>
              <Link to={`/edit/${data.id}`}>
                <span class="material-icons">edit</span>
              </Link>
            </td>

            <td>
              <span
                class="material-icons text-danger delete_icon"
                onClick={() => dispatch(DeleteApiAction(data.id))}
              >
                delete
              </span>
            </td>
          </tr>
        );
      })
    : null;

  return (
    <div>
      <h1>Rent Book Library</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Id Book</th>
            <th scope="col">Id Student</th>
            <th scope="col">Qty Rent</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Create</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default RentBook;
