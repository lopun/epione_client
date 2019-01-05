import React from "react";
import SignUpPresenter from "./SignUpPresenter";
import axios from "axios";
import { withRouter } from "react-router-dom";

class SignUpContainer extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    occupation: ""
  };

  render() {
    const { email, password, name, occupation } = this.state;
    return (
      <SignUpPresenter
        email={email}
        password={password}
        name={name}
        occupation={occupation}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
      />
    );
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, occupation, name } = this.state;
    console.log(this.state);

    axios({
      method: "post",
      url: "http://localhost:8000/signup",
      data: {
        email,
        password,
        occupation,
        name
      }
    }).then(res => {
      let data = res.data;
      if (data.ok) {
        alert("Please log in!");
        this.props.history.push("/login");
      } else {
        alert(data.error);
      }
    });
  };
}

export default withRouter(SignUpContainer);
