import { useHistory } from "react-router-dom";
import { Project } from "../../interfaces";
import MemberIconsRow from "../member-icons-row";

interface Props {
  serverId: string;
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ serverId, project }) => {
  const { members } = project;
  const history = useHistory();
  const [creator, ...others] = members;
  const { logs } = project;
  const latestLog = logs[logs.length - 1];

  return (
    <div
      className="p-5 flex flex-col space-y-3 shadow border rounded-lg cursor-pointer"
      onClick={() => {
        history.push(`/${serverId}/${project._id}`);
      }}
    >
      <div className="font-bold text-3xl">{project.title}</div>
      {logs.length > 0 && (
        <div>
          Latest log: {latestLog.message}{" "}
          {new Date(latestLog.createdAt).toLocaleString()}
        </div>
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
