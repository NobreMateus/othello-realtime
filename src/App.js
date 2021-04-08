import React from "react";
import Routes from "./config/routes"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import BasicPage from "./pages/BasicPage"
import UserConProvider from "./providers/UserConProvider";

function App() {
  return (
    <UserConProvider>
      <BasicPage>
        <Router>
          <Routes />
        </Router>
      </BasicPage>
    </UserConProvider>
  );
}

export default App;
