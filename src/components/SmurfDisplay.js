import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { fetchSmurf } from "../actions/index";

class SmurfDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }
  render() {
    return (
      <>
        <div>
          {this.props.isLoading && <p>Loading...</p>}
          <h1>--Smurf Village Database--</h1>
          {this.props.smurfs.map((smurf) => {
            return <Smurf smurf={smurf} />;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = {
  fetchSmurf,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
