import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [usuario, setUsuario] = useState("");
  async function handlePesquisa() {
    const data = await (
      await axios.get(`https://api.github.com/users/${usuario}/repos`)
    ).data;
    console.log(data);
  }
  return (
    <>
      <input
        className="usuarioInput"
        placeholder="Usuário"
        onChange={(e) => setUsuario(e.target.value)}
        value={usuario}
      />
      <button type="button" onClick={handlePesquisa}>
        Pesquisar
      </button>
    </>
  );
}

export default Home;
