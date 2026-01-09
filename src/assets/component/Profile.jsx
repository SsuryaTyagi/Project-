import React, { Component } from "react";
import axios from "axios";

class OldProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.post(
        "http://localhost:3000/V1/user/profile",
        {},
        { withCredentials: true }
      );

      this.setState({
        profile: response.data,
        loading: false,
      });
    } catch (err) {
      this.setState({
        error: err,
        loading: false,
      });
    }
  }

  render() {
    const { profile, loading, error } = this.state;

    if (loading) return <p>Loading profile...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!profile) return <p>No profile found.</p>;

    return (
      <>
        <h1>Name = {profile.firstName}</h1>
        <h1>ID = {profile.id}</h1>
        <h1>Email = {profile.email}</h1>
      </>
    );
  }
}

export default OldProfile;
