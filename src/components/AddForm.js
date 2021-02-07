import React from "react";
import { connect } from "react-redux";
import { addSmurf, setError } from "../actions/index";

class AddForm extends React.Component {
  state = {
    name: "",
    position: "",
    nickname: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();

    for (let i in this.props.smurfs) {
      if (this.state.name === this.props.smurfs[i].name) {
        alert("You are already in the system");
        this.setState({
          name: "",
          position: "",
          nickname: "",
          description: "",
        });
      }
    }
    if (
      this.state.name === "" ||
      this.state.position === "" ||
      this.state.nickname === ""
    ) {
      this.props.setError("You are missing something");
    } else {
      this.props.addSmurf(this.state);
      this.setState({ name: "", position: "", nickname: "", description: "" });
    }
  };

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.submitHandler}>
          {this.props.errorText ? (
            <div
              data-testid="errorAlert"
              className="alert alert-danger"
              role="alert"
            >
              Error: {this.props.errorText}
            </div>
          ) : null}
          {/* //!NAME */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="name"
              id="name"
              value={this.state.name}
            />
          </div>

          {/* //!position */}
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="position"
              id="position"
              value={this.state.position}
            />
          </div>

          {/* //!nickname */}
          <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="nickname"
              id="nickname"
              value={this.state.nickname}
            />
          </div>

          {/* //!description */}
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="description"
              id="description"
              value={this.state.description}
            />
          </div>

          <button>Submit Smurf</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = { addSmurf, setError };

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATTERN OF SHOWN FOR NAME.
//5. Build eventHandler and listener needed to change the state.
//6. Build eventHandler and listener needed to submit a new smurf and dispatch it's associated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
