import { Component } from "react";
import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

class OldLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redir: false,
    };
  }

  submitHandler = async (e) => {
    e.preventDefault();
    if (this.state.email === "" && this.state.password === "") {
      alert("Enter you email and password!");
      return false;
    }
    this.setState({
      email: "",
      password: "",
    });
    try {
      const res = await axios.post(
        "http://localhost:3000/V1/user/login",
        {
          email: this.state.email,
          password: this.state.password,
        },
        { withCredentials: true }
      );

      // console.log(res.data);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log("login successful!");
        this.setState({ redir: true });
      }
    } catch (error) {
      console.error("Login Failed", error);
    }
  };
  render() {
    if (this.state.redir) {
      return <Navigate to="/profile" />;
    }
    return (
      <>
        <div className="flex items-center justify-center h-screen w-screen">
          <div className="border-2 bg-gray-600 border-blue-800 h-170 w-120">
            <h1 className="text-black-800 text-4xl m-2">
              {" "}
              class component Log In
            </h1>
            <form className="flex flex-col h-130 gap-5 items-center justify-center">
              <input
                value={this.state.email}
                type="email"
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Enter Email"
                className="border border-blue-800 rounded-full bg-transparent appearance-none w-110 outline-none placeholder:text-gray-400 p-3"
              />{" "}
              <br />
              <input
                value={this.state.password}
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Enter Password"
                className="border-blue-800 border-1 rounded-full bg-transparent w-110 outline-none placeholder:text-gray-400 p-3"
              />
              <br /> <br />
              <button
                onClick={this.submitHandler}
                className="border-red-800 border-1 rounded-full bg-red-800 w-110 outline-none p-3"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default OldLogin;
