import axios, { AxiosResponse } from "axios";
import { Log, Project, Server } from "../../app/interfaces";
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

export const getLogs = async (serverId: string, projectId: string) => {
  const response: AxiosResponse<Log[]> = await axios.get(
    `${API_URL}/${serverId}/${projectId}/logs`
  );
  return response.data;
};
