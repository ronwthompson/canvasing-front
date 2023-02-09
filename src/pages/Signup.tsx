import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div id="signup-page">
      <form>
        <label>Username:</label>
        <input required type="text" />
        <label>Password:</label>
        <input required type="password"/>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default SignupPage;
