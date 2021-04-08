import { useHistory } from "react-router-dom";
import { Project, Server } from "../../intefaces";
import MemberIconsRow from "../member-icons-row";

interface Props {
  serverId: string;
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ serverId, project }) => {
  const { members } = project;
  const history = useHistory();
  const [creator, ...others] = members;

  return (
    <div
      className="p-5 flex flex-col space-y-3 shadow border rounded-lg cursor-pointer"
      onClick={() => {
        history.push(`/${serverId}/${project._id}`);
      }}
    >
      <div className="font-bold text-3xl">{project.title}</div>
      {project.logs.length > 0 && (
        <div>Latest log: {project.logs[0].message}</div>
      )}
      <div className="flex flex-col items-end">
        <div className="text-xl">Creator</div>
        <MemberIconsRow members={[creator]} />

        {others.length > 0 && (
          <div className="flex flex-col items-end">
            <div className="text-xl">Members</div>
            <MemberIconsRow members={others} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
