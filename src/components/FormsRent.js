import React, { useState } from "react";
import { PostApiAction } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FormsRent = () => {
  const [idBook, setIdBook] = useState("");
  const [IdStudent, setIdStudent] = useState("");
  const [qtyRent, setQtyRent] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const dispatch = useDispatch();
  const isResponse = useSelector((state) => state.Reducer.isResponse);

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
    dispatch(PostApiAction(findalData));
  };

  if (isResponse) {
    alert("Your response has been submitted !");
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
          Sign in
        </button>

        <Link to="/rentbook">
          <span className="material-icons back-icon">arrow_back</span>
        </Link>
      </form>
    </div>
  );
};

export default FormsRent;
