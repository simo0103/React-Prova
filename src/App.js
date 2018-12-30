import React, { Component } from 'react';
import {Header} from "./components/Header";
import {Home} from "./components/Home";

import './style/App.css';

class App extends Component {
  render() {
    var user = {
      name: "Simona",
      hobbies: ["reading", "sports", "tv"]
    };
    return (
      <div className="App">
        <Header />
        <Home name = {"Anna"} age={28} user={user} />
      </div>
    );
  }
}

export default App;
