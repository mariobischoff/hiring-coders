enum Permissoes {
  admin = "ADMIN",
  editor = "EDITOR",
  comum = "COMUM",
}

const usuario = {
  nivel: Permissoes.admin,
};

console.log(usuario);
