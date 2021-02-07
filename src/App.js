import React, { Component } from "react";
import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";
//import axios from "axios";
import { connect } from "react-redux";
import { fetchSmurf } from "./actions/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//
//axios.get("http://localhost:3333/smurfs").then((res) => console.log(res));

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <p className="navbar-brand">Smurf Village Database</p>
        </nav>
        <main>
          <SmurfDisplay />
          <AddForm />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
const mapDispatchToProps = () => {
  return { fetchSmurf };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
