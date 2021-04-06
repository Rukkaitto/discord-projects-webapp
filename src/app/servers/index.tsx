import { useEffect, useState } from "react";
import { getServers } from "../../utils/api";

const Servers = () => {
  const [servers, setServers] = useState({});

  const fetchServers = async () => {
    const result = await getServers();
    setServers(result);
  };

  useEffect(() => {
    fetchServers();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(servers, null, 2)}</pre>
    </div>
  );
};

export default Servers;
