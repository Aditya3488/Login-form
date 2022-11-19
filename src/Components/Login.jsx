import React from "react";

const Login = (props) => {
  return (
    <div>
      <label>email:</label>
      <input type="email" />
      <br />
      <br />
      <label>Password:</label>
      <input type="password" />
      <br />
      <button>Login</button>
      <button>Register</button>
      <button>forget password</button>
    </div>
  );
};
export default Login;
