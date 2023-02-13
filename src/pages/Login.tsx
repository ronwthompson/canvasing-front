import React from "react";
import { Link } from "react-router-dom";

// Note: This page can be manually navigated to but is not used.  Authentication was not made in the backend.

const LoginPage = () => {
  return (
    <div className="page" id="login-page">
      <form>
        <label>Username:</label>
        <input required type="text" />
        <label>Password:</label>
        <input required type="password"/>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/signup" className="page-link">Sign Up</Link>
    </div>
  );
}

export default LoginPage;
