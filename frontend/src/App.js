import React, { useState } from "react";
import api from "./services/api";
import "./App.css";

import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //email
    console.log("email: ", email);
  }
  /* pegar estado do email, forma alternativa
  function handleEmailCHange(event) {
    setEmail(event.target.value);
  }

  value={email}
            onChange={handleEmailCHange}
*/
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong>
          para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
