import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handlerSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);

  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <form onSubmit={handlerSubmit}>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          id="email"
          inputMode="email"
          autoComplete="username"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
}
