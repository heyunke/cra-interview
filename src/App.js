import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    const path = this.props.match.path;
    return (
      <Switch>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={`${path}${route.path}`}
              component={route.component}
              exact
            />
          );
        })}
        <Redirect to={`${path}${routes[0].path}`} from={path} exact />
        <Redirect to={`${path}/404`} />
      </Switch>
    );
  }
}

export default App;
