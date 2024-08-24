import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>

      <header id="common-header">
        <button onClick={() => navigate(-1)}>Back</button>
        <h1>

          EACS Attandance Dashboard
        </h1>
        <button onClick={() => navigate("/")}>
          Logout
        </button>
      </header>
    </>
  )
}