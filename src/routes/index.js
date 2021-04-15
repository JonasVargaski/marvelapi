import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { LayoutBase } from "../Components/LayoutBase";
import { Characters } from "../pages/Characters";
import { CharacterDetail } from "../pages/CharacterDetail";

export function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LayoutBase>
            <Characters />
          </LayoutBase>
        </Route>
        <Route path="/character/:id" exact>
          <LayoutBase>
            <CharacterDetail />
          </LayoutBase>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
