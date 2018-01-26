import React, { Component } from "react";
import FormContainer from "./components/FormContainer";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer className="content" />
        <iframe
          id="myVideo"
          title="background"
          src="https://www.youtube.com/embed/zKNMiuFVmNE?rel=0&amp;controls=0&amp;showinfo=0&amp;start=33&autoplay=1&mute=1"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

export default App;
