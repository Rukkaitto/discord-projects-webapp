import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLogs } from "../../../utils/api";
import LogCard from "../../components/log-card";
import { Log } from "../../interfaces";

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
  }, [serverId, projectId]);

  return (
    <div className="p-5 space-y-5">
      {logs.length > 0 &&
        logs.map((log) => <LogCard key={log._id} log={log} />)}
    </div>
  );
};

export default Logs;
