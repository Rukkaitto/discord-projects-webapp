import axios, { AxiosResponse } from "axios";

const getServers = async () => {
  const response: AxiosResponse<any> = await axios.get(
    "http://localhost:3001/servers"
  );
  return response.data;
};

export { getServers };
