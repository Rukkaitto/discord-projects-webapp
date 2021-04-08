import { Member } from "../../intefaces";

interface Props {
  members: Member[];
}

const MemberIconsRow: React.FC<Props> = ({ members }) => {
  return (
    <div className="flex flex-row space-x-3">
      {members.map((member) => (
        <img
          className="rounded-full w-12 h-12"
          src={member.avatar}
          alt="member avatar"
          key={member._id}
        />
      ))}
    </div>
  );
};

export default MemberIconsRow;
