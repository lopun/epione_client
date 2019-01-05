import React from "react";
import LoginPresenter from "./LoginPresenter";
import axios from "axios";
import { withRouter } from "react-router-dom";

class LoginContainer extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginPresenter
        email={email}
        password={password}
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
    const { email, password } = this.state;
    console.log(this.state);

    axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: {
        email,
        password
      }
    }).then(res => {
      let data = res.data;
      if (data.ok) {
        // login logic
        localStorage.setItem("id", data.id);
        this.props.history.push("/");
      } else {
        alert(data.error);
      }
    });
  };
}

export default withRouter(LoginContainer);
