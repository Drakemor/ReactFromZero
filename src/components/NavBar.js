import { Link } from "react-router-dom";

export default function NavBar(){
  return (<div>
      <ul>
        <li><Link to="/a/1">A</Link></li>
        <li><Link to="/b/2">B</Link></li>
        <li><Link to="/c/3">C</Link></li>
      </ul>
    </div>);
}
