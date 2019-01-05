import React from "react";

const LoginPresenter = ({ email, password, onInputChange, onSubmit }) => (
  <div>
    <form method="post">
      <input
        type="text"
        name="email"
        value={email}
        onChange={onInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={onInputChange}
        placeholder="Password"
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  </div>
);

export default LoginPresenter;
