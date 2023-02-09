import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div id="login-page">
      <form>
        <label>Username:</label>
        <input required type="text" />
        <label>Password:</label>
        <input required type="password"/>
        <input type="submit" value="Submit" />
      </form>

      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default LoginPage;
