import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PostBookApiAction, UpdateBookApiAction } from "../redux/action/action";
import GetDetailsBookByHooks from "../hooks/getDetailsBookByHooks";

const UpdateDetailsBook = () => {
  const { id } = useParams();
  console.log("Params id book", id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [qty, setQty] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const dispatch = useDispatch();
  const isUpdateResponse = useSelector(
    (state) => state.Reducer.isUpdateResponse
  );

  const [detailsBookById] = GetDetailsBookByHooks(id);

  console.log("detailsBookById is -----", detailsBookById);

  useEffect(() => {
    const data = () => {
      if (detailsBookById.data) {
        setTitle(detailsBookById.data.title);
        setDescription(detailsBookById.data.description);
        setAuthor(detailsBookById.data.author);
        setQty(detailsBookById.data.qty);
        setCreatedAt(detailsBookById.data.createdAt);
      }
    };
    data();
  }, [detailsBookById.data]);

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
    setCreatedAt(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const finalData = {
      title: title,
      description: description,
      author: author,
      qty: qty,
      createdAt: createdAt,
    };
    dispatch(UpdateBookApiAction(finalData, id));
  };

  if (isUpdateResponse) {
    alert("Your data has been Updated !");
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
              defaultValue={title}
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
              defaultValue={description}
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
              defaultValue={author}
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
              defaultValue={qty}
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
              defaultValue={createdAt}
              onChange={(e) => createdAttHandler(e)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => clickHandler(e)}
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateDetailsBook;
