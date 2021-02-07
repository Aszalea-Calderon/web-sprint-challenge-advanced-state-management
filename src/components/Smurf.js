import React from "react";

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;
    console.log(smurf, "smurf");
    return (
      <>
        <div data-testid="smurf" className="card">
          <h3>Smurf's Name: {smurf.name}</h3>
          <br />
          <h4>
            {smurf.name}'s Nickname: {smurf.nickname}
          </h4>
          <br />
          <h4>
            {smurf.nickname}'s Position: {smurf.position}
          </h4>
          <br />
          <h4>
            {smurf.nickname} description: {smurf.description}
          </h4>
          <br />
        </div>
      </>
    );
  }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
