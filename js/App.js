import logo from './logo.svg';
import './App.css';
import My1stReact from "./component/My1stReact";
import App1 from  "./../src/practice/App1"
import React from "react";
import My1stEvent, {Toolbar} from "./Event/My1stEvent"
function App() {
  return (
    <div className="App">
      {/*<My1stEvent />*/}
        <Toolbar />
    </div>
  );
}

export default App;
