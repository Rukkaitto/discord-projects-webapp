import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProjects } from "../../utils/api";
import ProjectCard from "../components/project-card";

interface Params {
  serverId: string;
}

const Projects: React.FC = () => {
  const { serverId } = useParams<Params>();
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const result = await getProjects(serverId);
      setProjects(result);
    };
    fetchProjects();
  }, [serverId]);

  return (
    <div className="p-3 flex flex-col space-y-3 m-3">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Projects;
