import { Project } from "../../intefaces";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { members } = project;
  return (
    <div className="p-5 flex flex-col space-y-3 shadow border rounded-lg">
      <div className="font-bold text-3xl">{project.title}</div>
      <div className="flex flex-row space-x-3 self-end">
        {members.map((member) => (
          <img
            className="rounded-full w-12 h-12"
            src={member.avatar}
            alt="member avatar"
            key={member._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
