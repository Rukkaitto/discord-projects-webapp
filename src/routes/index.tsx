import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Servers from "../app/servers";
import Projects from "../app/projects";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/:serverId/projects">
        <Projects />
      </Route>
      <Route path="/">
        <Servers />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
