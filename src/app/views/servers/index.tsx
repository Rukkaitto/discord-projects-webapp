import { useEffect, useState } from "react";
import { getServers } from "../../../utils/api";
import ServerCard from "../../components/server-card";
import { Server } from "../../intefaces";

const Servers: React.FC = () => {
  const [servers, setServers] = useState<Server[]>([]);

  useEffect(() => {
    const fetchServers = async () => {
      const result = await getServers();
      setServers(result);
    };
    fetchServers();
  }, []);

  return (
    <div className="p-3 flex flex-wrap">
      {servers.map((server) => (
        <ServerCard server={server} />
      ))}
    </div>
  );
};

export default Servers;
