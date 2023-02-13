import React from "react";
import { Link } from "react-router-dom";

// Note: This page can be manually navigated to but is not used.  Authentication was not made in the backend.

const SignupPage = () => {
  return (
    <div className="page" id="signup-page">
      <form>
        <label>Username:</label>
        <input required type="text" />
        <label>Password:</label>
        <input required type="password"/>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login" className="page-link">Login</Link>
    </div>
  );
}

export default SignupPage;
