import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetBookApiAction } from "../redux/action/action";

const BookPage = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.Reducer.details);
  const isDeleteResponse = useSelector(
    (state) => state.Reducer.isDeleteResponse
  );

  console.log("responseData from action", responseData);

  useEffect(() => {
    dispatch(GetBookApiAction());
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
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td>{data.author}</td>
            <td>{data.qty}</td>
            <td>{data.createdAt}</td>
            <td>
              <Link to={`/editbook/${data.id}`}>
                <span class="material-icons">edit</span>
              </Link>
            </td>
          </tr>
        );
      })
    : null;

  return (
    <div>
      <h1>Book Page</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Author</th>
            <th scope="col">Qty</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default BookPage;
