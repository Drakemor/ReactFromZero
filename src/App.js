import { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'

function App() {
  return (
    <Fragment>
      <MyComponent a="constant string" b={4}/>
      <MyComponent a="different string" b={9}/>
    </Fragment>
  );
}

export default App;
