import { Project } from "../../intefaces";
import MemberIconsRow from "../member-icons-row";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { members } = project;
  const [creator, ...others] = members;
  console.log(others);
  return (
    <div className="p-5 flex flex-col space-y-3 shadow border rounded-lg">
      <div className="font-bold text-3xl">{project.title}</div>
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
