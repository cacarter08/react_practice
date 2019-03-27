import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Contact
          name='Corey Carter'
          email='cc@gmail.com'
          phone='910-222-3332'
        />
        <Contact
          name='Jessica Carter'
          email='jc@gmail.com'
          phone='910-221-4432'
        />
      </div>
    );
  }
}

export default App;
