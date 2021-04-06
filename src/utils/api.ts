import axios, { AxiosResponse } from "axios";

const getServers = async () => {
  const response: AxiosResponse<any> = await axios.get(
    "http://localhost:3001/servers"
  );
  return response.data;
};

const getProjects = async (serverId: string) => {
  const response: AxiosResponse<any> = await axios.get(
    `http://localhost:3001/${serverId}/projects`
  );
  return response.data;
};

export { getServers, getProjects };
