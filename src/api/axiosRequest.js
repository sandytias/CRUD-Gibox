import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000,
      });
}

const GetApiStudentDetails = () => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/student",
    "GET",
    headers,
    {}
  );
};

const GetApiBookDetails = () => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/book",
    "GET",
    headers,
    {}
  );
};

const PostBookApiDetails = (data) => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/rent",
    "POST",
    headers,
    data
  );
};

const GetApiDetailsRent = () => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/rent",
    "GET",
    headers,
    {}
  );
};

const PostApiDetailsRent = (data) => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/rent",
    "POST",
    headers,
    data
  );
};

const GetDetailsBookById = (id) => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/book/" + id,
    "GET",
    headers,
    {}
  );
};

const GetDetailsById = (id) => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/rent/" + id,
    "GET",
    headers,
    {}
  );
};

const UpdateApiDetailsRent = (data, id) => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/rent/" + id,
    "PUT",
    headers,
    data
  );
};

const DeleteApiDetailsRent = (id) => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/rent/" + id,
    "DELETE",
    headers,
    {}
  );
};

const UpdateApiBookDetails = (data, id) => {
  const headers = {
    "COntent-Type": "application/student",
  };

  return AxiosRequest(
    "http://6188b243d0821900178d74c8.mockapi.io/api/v1/book/" + id,
    "PUT",
    headers,
    data
  );
};

export {
  GetApiStudentDetails,
  GetApiBookDetails,
  GetApiDetailsRent,
  PostApiDetailsRent,
  PostBookApiDetails,
  GetDetailsById,
  GetDetailsBookById,
  UpdateApiDetailsRent,
  UpdateApiBookDetails,
  DeleteApiDetailsRent,
};
