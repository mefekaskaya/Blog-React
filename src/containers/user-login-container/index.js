import React, { Component } from "react";

//Css file
import "./user-login.scss";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      fillAreasError: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ fillAreasError: false });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      fillAreasError: false
    });
  };

  submitLogin = event => {
    event.preventDefault();
    if (this.state.username === "" || this.state.password1 === "") {
      this.setState({
        fillAreasError: true
      });
    }
  };

  render() {
    console.log("user register page", this.state);
    return (
      <div className="login-background">
        <div className="login">
          <div className="row login-row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <h2 className="mb-30">Login</h2>
              <form action="#" autoComplete="off">
                <div className="mt-10">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="single-input-primary"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mt-10">
                  <input
                    type="password"
                    name="password1"
                    placeholder="Password"
                    className="single-input-primary"
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  href="#"
                  className="genric-btn primary-border circle arrow login-button"
                  onClick={this.submitLogin}
                >
                  Login!
                  <span className="lnr lnr-arrow-right" />
                </button>
              </form>
              <br /> <br />
              {/* UI MESSAGES */}
              {this.state.fillAreasError === true ? (
                <div className="alert alert-danger" role="alert">
                  Please fill your Userame and Password!
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;