import axios, { AxiosResponse } from "axios";
import { Project, Server } from "../../app/intefaces";
import { API_URL } from "../../settings";

export const getServers = async () => {
  const response: AxiosResponse<Server[]> = await axios.get(
    `${API_URL}/servers`
  );
  return response.data;
};

export const getProjects = async (serverId: string) => {
  const response: AxiosResponse<Project[]> = await axios.get(
    `${API_URL}/${serverId}/projects`
  );
  return response.data;
};
