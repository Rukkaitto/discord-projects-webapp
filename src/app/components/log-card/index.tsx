import { Log } from "../../interfaces";

interface Props {
  log: Log;
}

const LogCard: React.FC<Props> = ({ log }) => {
  const { author, createdAt, message } = log;
  const { avatar, username } = author;
  const date = new Date(createdAt);
  const localeDate = date.toLocaleString();
  return (
    <div className="bg-white flex flex-row items-center justify-between p-5 shadow rounded-lg">
      <div className="flex flex-row items-center space-x-5">
        <img
          className="rounded-full w-20 h-20"
          src={avatar}
          alt={`${username}'s avatar`}
        />
        <div className="text-xl font-bold">{username}:</div>
        <div>{message}</div>
      </div>
      <div>{localeDate}</div>
    </div>
  );
};

export default LogCard;
