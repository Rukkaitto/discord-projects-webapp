import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Servers from "../app/views/servers";
import Projects from "../app/views/projects";

const Routes: React.FC = () => (
  <Router>
    <Switch>
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
