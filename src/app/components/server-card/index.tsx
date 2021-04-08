import { useHistory } from "react-router-dom";
import { Server } from "../../interfaces";

interface Props {
  server: Server;
}

const ServerCard: React.FC<Props> = ({ server }) => {
  const history = useHistory();
  return (
    <div
      key={server._id}
      onClick={() => history.push(`/${server._id}`)}
      className="rounded-lg shadow border flex flex-row items-center p-5 m-2 cursor-pointer"
    >
      <img
        className="rounded-full w-20 h-20"
        src={server.icon}
        alt="server icon"
      />
      <div className="text-xl p-5">{server.name}</div>
    </div>
  );
};

export default ServerCard;
