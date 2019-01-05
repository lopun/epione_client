import React from "react";

const SignUpPresenter = ({
  email,
  password,
  occupation,
  name,
  onInputChange,
  onSubmit
}) => (
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
      <input
        type="text"
        name="occupation"
        value={occupation}
        onChange={onInputChange}
        placeholder="Occupation"
      />
      <input
        type="text"
        name="name"
        value={name}
        onChange={onInputChange}
        placeholder="Name"
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  </div>
);

export default SignUpPresenter;
