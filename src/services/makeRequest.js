import axios from "axios";

async function makeRequest(url, data = {}) {
  const response = await axios
    .post(`http://localhost:3001${url}`, data)
    .catch((error) =>
      Promise.reject(error?.response?.data?.message ?? "Error")
    );
  return response;
}

export default makeRequest;
