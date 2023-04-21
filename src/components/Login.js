import React from "react";

function Login() {
  function handleSubmit(event) {
    //to prevent refreshing
    event.preventDefault();
    //FormData object is created using the event.target and stored
    const takeName = new FormData(event.target);
    //used the get method to retrieve the value that has "username"
    const username = takeName.get("username");
    console.log(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );
}

export default Login;
