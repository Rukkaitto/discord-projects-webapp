import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getServers } from "../../utils/api";

const Servers = () => {
  const [servers, setServers] = useState<any[]>([]);
  const history = useHistory();

  const goToProjects = async (serverId: string) => {
    history.push(`/${serverId}`);
  };

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
        <div
          key={server._id}
          onClick={() => goToProjects(server._id)}
          className="rounded-lg shadow border flex flex-row items-center p-5 m-2 cursor-pointer"
        >
          <img
            className="rounded-full w-20 h-20"
            src={server.icon}
            alt="server icon"
          />
          <div className="text-xl p-5">{server.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Servers;
