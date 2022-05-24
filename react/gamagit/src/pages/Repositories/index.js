import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const navigate = useNavigate;
  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
        {repositories
          ? repositories.map((repositorie) => {
              return <S.ListItem key={repositorie}>{repositorie}</S.ListItem>;
            })
          : null}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
}
