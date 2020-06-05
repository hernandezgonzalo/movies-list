import React from "react";
import Home from "./pages/Home";
import Theme from "./components/ui/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
