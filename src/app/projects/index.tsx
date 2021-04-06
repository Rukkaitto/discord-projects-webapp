import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProjects } from "../../utils/api";

interface ParamTypes {
  serverId: string;
}

const Projects = () => {
  const { serverId } = useParams<ParamTypes>();
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getProjects(serverId);
      setProjects(result);
    };
    fetchProjects();
  }, [serverId]);

  return (
    <div>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  );
};

export default Projects;
