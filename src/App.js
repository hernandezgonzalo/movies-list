import React from "react";
import Home from "./pages/Home";
import Theme from "./components/ui/Theme";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Theme>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Theme>
  );
}

export default App;
