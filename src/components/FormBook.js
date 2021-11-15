import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostBookApiAction } from "../redux/action/action";

const FormBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [qty, setQty] = useState("");
  const [createdat, setCreatedat] = useState("");

  const dispatch = useDispatch();
  const isResponse = useSelector((state) => state.Reducer.isResponse);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const qtyHandler = (e) => {
    setQty(e.target.value);
  };

  const createdAttHandler = (e) => {
    setCreatedat(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const finalData = {
      title: title,
      description: description,
      author: author,
      qty: qty,
      createdat: createdat,
    };
    dispatch(PostBookApiAction(finalData));
  };

  if (isResponse) {
    alert("Your data has been submitted !");
  }

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputTitle">Title</label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              placeholder="Title"
              onChange={(e) => titleHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="inputIDescription"
              placeholder="Description"
              onChange={(e) => descriptionHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputAuthor">Author</label>
            <input
              type="text"
              className="form-control"
              id="inputAuthor"
              placeholder="Author"
              onChange={(e) => authorHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputQty">QTY</label>
            <input
              type="text"
              className="form-control"
              id="inputQty"
              placeholder="Qty"
              onChange={(e) => qtyHandler(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputCreatedAt">CreatedAt</label>
            <input
              type="text"
              className="form-control"
              id="inputCreatedAt"
              placeholder="CreatedAt"
              onChange={(e) => createdAttHandler(e)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => clickHandler(e)}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default FormBook;
