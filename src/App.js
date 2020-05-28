import React from "react";
import Home from "./pages/Home";
import Theme from "./components/ui/Theme";

function App() {
  return (
    <Theme>
      <div>
        <Home />
      </div>
    </Theme>
  );
}

export default App;
