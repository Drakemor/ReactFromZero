import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@material-ui/core';

export default function NavBar(){
  return (<AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/list">List</Button>
      </Toolbar>
    </AppBar>);
}
