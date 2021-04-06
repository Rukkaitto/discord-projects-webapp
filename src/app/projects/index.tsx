import { useParams } from "react-router";

interface ParamTypes {
  serverId: string;
}

const Projects = () => {
  const { serverId } = useParams<ParamTypes>();
  return <div>{serverId}</div>;
};

export default Projects;
