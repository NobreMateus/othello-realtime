import React from "react";
import Routes from "./config/routes"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import BasicPage from "./pages/BasicPage"

function App() {
  return (
    <BasicPage>
      <Router>
        <Routes />
      </Router>
    </BasicPage>
  );
}

export default App;
