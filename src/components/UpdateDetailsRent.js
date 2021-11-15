import React, { useEffect, useState } from "react";
import { PostApiAction, UpdateApiAction } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import getDetailsByHooks from "../hooks/getDetailsByHooks";

const UpdateDetailsRent = () => {
  const { id } = useParams();
  // console.log("Params id", id);
  const [idBook, setIdBook] = useState("");
  const [IdStudent, setIdStudent] = useState("");
  const [qtyRent, setQtyRent] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const dispatch = useDispatch();
  const isUpdateResponse = useSelector(
    (state) => state.Reducer.isUpdateResponse
  );

  const [detailsById] = getDetailsByHooks(id);

  console.log("detailById is_____", detailsById);

  useEffect(() => {
    const data = () => {
      if (detailsById.data) {
        setIdBook(detailsById.data.id_book);
        setIdStudent(detailsById.data.id_student);
        setQtyRent(detailsById.data.qty_rent);
        setCheckIn(detailsById.data.check_in);
        setCheckOut(detailsById.data.check_out);
      }
    };
    data();
  }, [detailsById.data]);

  const bookHandler = (e) => {
    setIdBook(e.target.value);
  };

  const studentHandler = (e) => {
    setIdStudent(e.target.value);
  };

  const qtyHandler = (e) => {
    setQtyRent(e.target.value);
  };

  const checkinHandler = (e) => {
    setCheckIn(e.target.value);
  };

  const checkoutHandler = (e) => {
    setCheckOut(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const findalData = {
      id_book: idBook,
      id_student: IdStudent,
      qty_rent: qtyRent,
      check_in: checkIn,
      check_out: checkOut,
    };
    dispatch(UpdateApiAction(findalData, id));
  };

  if (isUpdateResponse) {
    alert("Your data has been Updated !");
  }

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputIdBook">Id Book</label>
            <input
              type="text"
              className="form-control"
              id="inputIdBook"
              placeholder="Id Book"
              defaultValue={idBook}
              onChange={(e) => bookHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputIdStudent">Id Student</label>
            <input
              type="text"
              className="form-control"
              id="inputIdStudent"
              placeholder="IdStudent"
              defaultValue={IdStudent}
              onChange={(e) => studentHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputQtyRent">Qty Rent</label>
            <input
              type="text"
              className="form-control"
              id="inputQtyRent"
              placeholder="Qty Rent"
              defaultValue={qtyRent}
              onChange={(e) => qtyHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputCheckin">Check In</label>
            <input
              type="text"
              className="form-control"
              id="inputCheckin"
              placeholder="Check In"
              defaultValue={checkIn}
              onChange={(e) => checkinHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputCheckout">Check Out</label>
            <input
              type="text"
              className="form-control"
              id="inputCheckout"
              placeholder="Check Out"
              defaultValue={checkOut}
              onChange={(e) => checkoutHandler(e)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateDetailsRent;
