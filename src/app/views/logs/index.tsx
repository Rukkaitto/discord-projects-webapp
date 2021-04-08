import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLogs } from "../../../utils/api";
import { Log } from "../../intefaces";

interface Params {
  serverId: string;
  projectId: string;
}

export const Logs: React.FC = () => {
  const { serverId, projectId } = useParams<Params>();
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getLogs(serverId, projectId);
      setLogs(result);
    };
    fetchProjects();
  }, [projectId]);

  return (
    <div>
      {logs.length > 0 &&
        logs.map((log) => <div>Log message: {log.message}</div>)}
    </div>
  );
};

export default Logs;
