import { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import List from "./components/List";
import Theme from "./Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CssBaseline, Container, Paper } from "@material-ui/core";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <CssBaseline />
        <Container>
          <Paper style={{minHeight: "95vh"}}>
            <NavBar />
            <Switch>
              <Route path="/" exact>
                <Landing/>
              </Route>
              <Route path="/list">
                <List/>
              </Route>
            </Switch>
          </Paper>
        </Container>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
