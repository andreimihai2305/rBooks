async function makeRequest(url, options = {}) {
  const response = await fetch(`http://localhost:3001${url}`, options).catch(
    (error) => Promise.reject(error?.response?.data?.message ?? "Error")
  );
  return response.json();
}

export default makeRequest;
