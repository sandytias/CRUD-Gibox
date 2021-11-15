import {
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  DELETE_DETAILS,
} from "../type";
import {
  GetApiStudentDetails,
  GetApiBookDetails,
  GetApiDetailsRent,
  PostApiDetailsRent,
  PostBookApiDetails,
  UpdateApiDetailsRent,
  UpdateApiBookDetails,
  DeleteApiDetailsRent,
} from "../../api/axiosRequest";

const GetApiStudentAction = () => {
  return function (dispatch) {
    return GetApiStudentDetails().then((res) => {
      // console.log(("Response Data", res));

      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

const GetBookApiAction = () => {
  return function (dispatch) {
    return GetApiBookDetails().then((res) => {
      // console.log(("Response Data", res));

      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

const PostBookApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: POST_DETAILS,
      payload: false,
    });
    return PostBookApiDetails(request).then((res) => {
      console.log(("Response Book", res));

      dispatch({
        type: POST_DETAILS,
        payload: true,
      });
    });
  };
};

const GetApiAction = () => {
  return function (dispatch) {
    return GetApiDetailsRent().then((res) => {
      console.log(("Response Data", res));

      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

const PostApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: POST_DETAILS,
      payload: false,
    });
    return PostApiDetailsRent(request).then((res) => {
      console.log(("Response Data", res));
      dispatch({
        type: POST_DETAILS,
        payload: true,
      });
    });
  };
};

const UpdateApiAction = (request, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAILS,
      payload: false,
    });
    return UpdateApiDetailsRent(request, id).then((res) => {
      console.log(("Response Data", res));
      dispatch({
        type: UPDATE_DETAILS,
        payload: true,
      });
    });
  };
};

const UpdateBookApiAction = (request, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAILS,
      payload: false,
    });
    return UpdateApiBookDetails(request, id).then((res) => {
      console.log(("Response Data", res));
      dispatch({
        type: UPDATE_DETAILS,
        payload: true,
      });
    });
  };
};

const DeleteApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DETAILS,
      payload: false,
    });
    return DeleteApiDetailsRent(id).then((res) => {
      console.log(("Response Data", res));
      dispatch({
        type: DELETE_DETAILS,
        payload: true,
      });
    });
  };
};

export {
  GetApiStudentAction,
  GetBookApiAction,
  GetApiAction,
  PostApiAction,
  PostBookApiAction,
  UpdateApiAction,
  UpdateBookApiAction,
  DeleteApiAction,
};
