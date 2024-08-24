import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("Employee Login");
  const navigate = useNavigate();
  function switch_user() {
    if (user === "Employee Login") {
      setUser("Admin Login");
    } else {
      setUser("Employee Login");
    }
  }
  function relocate() {
    if (user === "Employee Login") {
      navigate("/user-home");
    }
    else {
      navigate("/admin-home")
    }

  }
  return (
    <div id='login_container'>
      <header>
        <h1>

          EACS Attandance Management System
        </h1>
        <button onClick={() => switch_user()}>
          {
            user === "Employee Login" ? <>Admin Login</> : <>Employee Login</>
          }

        </button>
      </header>
      <main>
        <h2>
          {user}
        </h2>
        <div id='username'>
          <label for="username">Username:</label>
          <input type="text" name="username" placeholder="Enter UserName...." />
        </div>
        <div id='password'>
          <label for="password">Password:</label>
          <input type="text" name="password" placeholder="Enter Password...." />
        </div>
        <button onClick={() => relocate()}>Login</button>
      </main>

    </div>
  )
}

export default Login