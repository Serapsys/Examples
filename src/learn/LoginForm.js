// First: import useState, which is a named export from 'react'
// We could alternatively skip this step, and write React.useState
import React, { useState } from "react";
import ReactDOM from "react-dom";

function LoginForm() {
  const [form, setValues] = useState({
    username: "",
    password: "",
  });

  const [listUsers, setListUsers] = useState([
    {
      username: "sass",
      password: "passs",
    },
    {
      username: "sda",
      password: "kksl",
    },
  ]);

  const printValues = (e) => {
    e.preventDefault();
    // console.log(form.username, form.password);
    console.log(form);
    setListUsers([...listUsers, form]);
  };

  const a = [1, 2, 3];
  const b = [...a, 4];
  console.log(b);

  const ShowUser = () => {
    return listUsers.map((user) => (
      <h1>
        {user.username} --- {user.password}
      </h1>
    ));
  };

  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={printValues}>
        <label>
          Username:
          <input value={form.username} name="username" onChange={updateField} />
        </label>
        <br />
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Add User</button>
      </form>
      <ShowUser />
    </>
  );
}

ReactDOM.render(<LoginForm />, document.querySelector("#root"));
