import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Servers from "../app/views/servers";
import Projects from "../app/views/projects";
import Logs from "../app/views/logs";

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/:serverId/:projectId">
        <Logs />
      </Route>
      <Route path="/:serverId">
        <Projects />
      </Route>
      <Route path="/">
        <Servers />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
