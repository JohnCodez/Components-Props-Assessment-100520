import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from "./Containers/NotesContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header text="Hello World" />
        <NotesContainer />
      </div>
    )
  }
}

export default App;
