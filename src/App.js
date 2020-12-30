import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Page from './components/Page'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/a/:id?"><Page>My Page A</Page></Route>
        <Route path="/b/:id?"><Page>My Page B</Page></Route>
        <Route path="/c/:id?"><Page>My Page C</Page></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
